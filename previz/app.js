import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { Reflector } from 'three/addons/objects/Reflector.js';

const scene = new THREE.Scene();
const defaultBgColor = new THREE.Color(0x555555); 
const dimmedBgColor = new THREE.Color(0x000000);
scene.background = dimmedBgColor.clone(); 

let targetBgColor = dimmedBgColor; 
let targetLightIntensity = 0.05; 

const scale = 100;
const wallH = 1080 / scale;
const roomW = 3908 / scale; 
const roomD = 5155 / scale; 

const aspect = window.innerWidth / window.innerHeight;
const perspectiveCamera = new THREE.PerspectiveCamera(45, aspect, 0.1, 1000);
perspectiveCamera.position.set(65, 55, 0);

const orthoSize = Math.max(roomW, roomD) / 2 + 5;
const orthographicCamera = new THREE.OrthographicCamera(-orthoSize * aspect, orthoSize * aspect, orthoSize, -orthoSize, 0.1, 1000);
orthographicCamera.position.set(65, 55, 0); 

let currentCamera = perspectiveCamera;

const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
renderer.setClearColor(0x000000); 
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(currentCamera, renderer.domElement);
controls.target.set(0, wallH / 2, 0); 
controls.enableDamping = true;

document.querySelectorAll('.panel, #sequence-manager').forEach(panel => {
    panel.addEventListener('pointerdown', e => e.stopPropagation());
});

const ambientLight = new THREE.AmbientLight(0xffffff, 0.05);
scene.add(ambientLight);

const gridHelperMat = new THREE.LineBasicMaterial({ color: 0x666666, transparent: true, opacity: 0.2 }); 
const idleWallMat = new THREE.MeshBasicMaterial({ color: 0x111111, side: THREE.DoubleSide });

const blackTex = new THREE.DataTexture(new Uint8Array([17, 17, 17, 255]), 1, 1, THREE.RGBAFormat);
blackTex.needsUpdate = true;

const wallShader = {
    uniforms: {
        mapA: { value: blackTex },
        mapB: { value: blackTex },
        mixRatio: { value: 0.0 }, 
        blendMode: { value: 0 }
    },
    vertexShader: `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    fragmentShader: `
        uniform sampler2D mapA;
        uniform sampler2D mapB;
        uniform float mixRatio;
        uniform int blendMode;
        varying vec2 vUv;

        void main() {
            vec4 colorA = texture2D(mapA, vUv);
            vec4 colorB = texture2D(mapB, vUv);
            vec3 finalColor;

            if (blendMode == 0) {
                finalColor = mix(colorA.rgb, colorB.rgb, mixRatio);
            } else {
                vec3 pureBlend;
                if (blendMode == 1) pureBlend = min(colorA.rgb + colorB.rgb, vec3(1.0)); 
                else if (blendMode == 2) pureBlend = 1.0 - (1.0 - colorA.rgb) * (1.0 - colorB.rgb); 
                else if (blendMode == 3) pureBlend = colorA.rgb * colorB.rgb; 

                if (mixRatio < 0.5) finalColor = mix(colorA.rgb, pureBlend, mixRatio * 2.0);
                else finalColor = mix(pureBlend, colorB.rgb, (mixRatio - 0.5) * 2.0);
            }
            gl_FragColor = vec4(finalColor, 1.0); 
        }
    `
};

function createConcreteNoise() {
    const canvas = document.createElement('canvas');
    canvas.width = 2048; canvas.height = 2048; 
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#777777'; ctx.fillRect(0, 0, 2048, 2048);
    for(let i = 0; i < 350; i++) {
        const x = Math.random() * 2048; const y = Math.random() * 2048; const r = Math.random() * 200 + 50; 
        const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
        grad.addColorStop(0, 'rgba(0, 0, 0, 0.5)'); grad.addColorStop(1, 'rgba(0, 0, 0, 0)'); 
        ctx.fillStyle = grad; ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
    }
    for(let i = 0; i < 350; i++) {
        const x = Math.random() * 2048; const y = Math.random() * 2048; const r = Math.random() * 150 + 40; 
        const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
        grad.addColorStop(0, 'rgba(255, 255, 255, 0.25)'); grad.addColorStop(1, 'rgba(255, 255, 255, 0)'); 
        ctx.fillStyle = grad; ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
    }
    for(let i = 0; i < 100000; i++) {
        ctx.fillStyle = Math.random() > 0.5 ? 'rgba(255,255,255,0.18)' : 'rgba(0,0,0,0.2)';
        const size = Math.random() * 2 + 1; ctx.fillRect(Math.random() * 2048, Math.random() * 2048, size, size);
    }
    return new THREE.CanvasTexture(canvas);
}
const concreteAlphaMap = createConcreteNoise();
const roomGroup = new THREE.Group(); scene.add(roomGroup); const labelsToUpdate = []; 

function createLabel(text) {
    const canvas = document.createElement('canvas');
    canvas.width = 512; canvas.height = 128; 
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgba(0,0,0,0)'; ctx.fillRect(0, 0, 512, 128);
    ctx.font = '100 50px "SF Mono", Consolas, monospace'; 
    ctx.fillStyle = '#aaaaaa'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.letterSpacing = "6px";
    ctx.fillText(text.toUpperCase(), 256, 64);
    const tex = new THREE.CanvasTexture(canvas);
    return new THREE.Mesh(new THREE.PlaneGeometry(7, 1.75), new THREE.MeshBasicMaterial({ map: tex, transparent: true, opacity: 0.9, depthWrite: false }));
}

function createVideoWall(width, height, posX, posZ, rotY, labelText) {
    const mat = new THREE.ShaderMaterial({
        uniforms: THREE.UniformsUtils.clone(wallShader.uniforms),
        vertexShader: wallShader.vertexShader,
        fragmentShader: wallShader.fragmentShader,
        side: THREE.DoubleSide
    });
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(width, height), mat);
    mesh.position.set(posX, height / 2, posZ); mesh.rotation.y = rotY;
    
    const gridGroup = new THREE.Group();
    const borderLines = new THREE.LineSegments(new THREE.EdgesGeometry(mesh.geometry), gridHelperMat);
    gridGroup.add(borderLines); gridGroup.visible = true; mesh.add(gridGroup);
    
    const label = createLabel(labelText);
    label.position.set(posX, wallH + 0.45, posZ); 
    roomGroup.add(label); labelsToUpdate.push(label);
    roomGroup.add(mesh);
    return { mesh, mat: mesh.material, gridGroup, label };
}

const walls = {
    north: createVideoWall(roomW, wallH, 0, -roomD / 2, 0, 'NORTH WALL'),
    south: createVideoWall(roomW, wallH, 0, roomD / 2, Math.PI, 'SOUTH WALL'),
    east: createVideoWall(roomD, wallH, roomW / 2, 0, -Math.PI / 2, 'EAST WALL'),
    west: createVideoWall(roomD, wallH, -roomW / 2, 0, Math.PI / 2, 'WEST WALL')
};

const floorGeo = new THREE.PlaneGeometry(roomW, roomD);
const mirror = new Reflector(floorGeo, { clipBias: 0.003, textureWidth: window.innerWidth, textureHeight: window.innerHeight, color: 0x333333 });
mirror.rotation.x = -Math.PI / 2;
scene.add(mirror);

const diffuser = new THREE.Mesh(floorGeo, new THREE.MeshStandardMaterial({ 
    color: 0x050505, roughness: 0.4, alphaMap: concreteAlphaMap, transparent: true, opacity: 0.75 
}));
diffuser.rotation.x = -Math.PI / 2; diffuser.position.y = 0.01; scene.add(diffuser);

const customGridGeo = new THREE.BufferGeometry();
const pts = []; const halfSize = 75; const rx = roomW / 2; const rz = roomD / 2; 
for(let i = -halfSize; i <= halfSize; i+=5) {
    if (Math.abs(i) > rx) { pts.push(new THREE.Vector3(i, 0, -halfSize), new THREE.Vector3(i, 0, halfSize)); } 
    else { pts.push(new THREE.Vector3(i, 0, -halfSize), new THREE.Vector3(i, 0, -rz)); pts.push(new THREE.Vector3(i, 0, rz), new THREE.Vector3(i, 0, halfSize)); }
    if (Math.abs(i) > rz) { pts.push(new THREE.Vector3(-halfSize, 0, i), new THREE.Vector3(halfSize, 0, i)); } 
    else { pts.push(new THREE.Vector3(-halfSize, 0, i), new THREE.Vector3(-rx, 0, i)); pts.push(new THREE.Vector3(rx, 0, i), new THREE.Vector3(halfSize, 0, i)); }
}
customGridGeo.setFromPoints(pts);
const globalGrid = new THREE.LineSegments(customGridGeo, new THREE.LineBasicMaterial({ color: 0x444444 }));
globalGrid.position.y = 0.01; globalGrid.visible = true; scene.add(globalGrid);


// --- Core Video Logic & Ping-Pong Buffer ---
let engineMode = 'STAGE'; 
let isPlaying = false; 
let currentSpeed = 1;
const tcDisplay = document.getElementById('timecode-display');

const videosA = { north: document.getElementById('video-north-a'), east: document.getElementById('video-east-a'), south: document.getElementById('video-south-a'), west: document.getElementById('video-west-a') };
const videosB = { north: document.getElementById('video-north-b'), east: document.getElementById('video-east-b'), south: document.getElementById('video-south-b'), west: document.getElementById('video-west-b') };

let currentLoadedA = null; 
let currentLoadedB = null;

function updateStageUI() {
    Object.keys(videosA).forEach(key => {
        const slot = document.getElementById(`slot-${key}`);
        if (videosA[key].hasAttribute('src')) slot.classList.add('has-video');
        else slot.classList.remove('has-video');
    });
}

function loadVideoToWall(file, wallKey) {
    engineMode = 'STAGE';
    const vid = videosA[wallKey];
    vid.src = URL.createObjectURL(file);
    vid.setAttribute('src', vid.src); 
    vid.load();
    
    if (walls[wallKey].mat.uniforms.mapA.value !== blackTex) walls[wallKey].mat.uniforms.mapA.value.dispose();
    const texture = new THREE.VideoTexture(vid);
    texture.colorSpace = THREE.SRGBColorSpace;
    walls[wallKey].mat.uniforms.mapA.value = texture;
    walls[wallKey].mat.uniforms.mixRatio.value = 0.0; 
    
    updateStageUI();
}

function clearStageSlot(key) {
    videosA[key].pause(); 
    videosA[key].removeAttribute('src'); 
    videosA[key].removeAttribute('data-src'); 
    videosA[key].load();
    if (walls[key].mat.uniforms.mapA.value !== blackTex) walls[key].mat.uniforms.mapA.value.dispose();
    walls[key].mat.uniforms.mapA.value = blackTex;
    document.getElementById(`upload-${key}`).value = ''; 
    updateStageUI();
}

Object.keys(videosA).forEach(key => {
    document.getElementById(`label-${key}`).addEventListener('click', (e) => {
        if (document.getElementById(`slot-${key}`).classList.contains('has-video')) {
            e.preventDefault(); clearStageSlot(key);
        }
    });
    document.getElementById(`upload-${key}`).addEventListener('change', (e) => {
        if (e.target.files[0]) loadVideoToWall(e.target.files[0], key);
    });
});

document.getElementById('btn-clear-all').addEventListener('click', () => {
    engineMode = 'STAGE';
    Object.keys(videosA).forEach(key => clearStageSlot(key));
    currentLoadedA = null; 
    isPlaying = false;
    document.getElementById('btn-play').innerHTML = '<svg class="btn-icon icon-fill"><use href="#icon-play"></use></svg> Preview';
    tcDisplay.innerText = "00:00:00.00";
});

// --- Drag and Drop EXACT FILENAME PREFIX Logic ---
const dragOverlay = document.getElementById('drag-overlay');
let dragCounter = 0;
let isLayerDragging = false; 

window.addEventListener('dragenter', (e) => {
    if (!isLayerDragging && e.dataTransfer.types && Array.from(e.dataTransfer.types).includes('Files')) {
        e.preventDefault(); dragCounter++; dragOverlay.classList.add('active');
    }
});
window.addEventListener('dragleave', (e) => {
    if (!isLayerDragging && e.dataTransfer.types && Array.from(e.dataTransfer.types).includes('Files')) {
        e.preventDefault(); dragCounter--;
        if (dragCounter === 0) dragOverlay.classList.remove('active');
    }
});
window.addEventListener('dragover', (e) => { e.preventDefault(); });
window.addEventListener('drop', (e) => {
    if (!isLayerDragging && e.dataTransfer.types && Array.from(e.dataTransfer.types).includes('Files')) {
        e.preventDefault(); dragCounter = 0; dragOverlay.classList.remove('active');
        
        if (engineMode !== 'STAGE') document.getElementById('btn-play').click();

        const files = Array.from(e.dataTransfer.files).filter(f => f.type.startsWith('video/'));
        if (files.length === 0) return;

        files.forEach(file => {
            const fileName = file.name.toUpperCase();
            let assignedWall = null;
            
            if (fileName.startsWith('WALL_N_')) assignedWall = 'north';
            else if (fileName.startsWith('WALL_E_')) assignedWall = 'east';
            else if (fileName.startsWith('WALL_S_')) assignedWall = 'south';
            else if (fileName.startsWith('WALL_W_')) assignedWall = 'west';

            if (assignedWall) {
                loadVideoToWall(file, assignedWall);
            } else {
                console.warn(`File rejected: ${file.name} does not start with WALL_N_, WALL_E_, WALL_S_, or WALL_W_.`);
            }
        });
    }
});


// --- The Non-Linear Editor (NLE) Sequence Director ---
let sequence = [];
let schedule = [];
let savedProjects = {}; 
let totalSeqDuration = 0;
let isSequencePlaying = false;
let sequenceTime = 0;
let absolutePlayTime = 0; // Independent clock absolutely prevents seamless loop jumps
let stageTime = 0;
let lastTime = performance.now();

const btnSaveScene = document.getElementById('btn-save-scene');
const layerList = document.getElementById('layer-list');

btnSaveScene.addEventListener('click', () => {
    let hasVideo = false; let vids = {};
    Object.keys(videosA).forEach(key => { 
        if(videosA[key].hasAttribute('src')) { hasVideo = true; vids[key] = videosA[key].src; }
        else { vids[key] = null; }
    });
    if (!hasVideo) return alert("Stage is empty. Load a video before adding to Sequence.");
    let sceneName = prompt("Name this sequence layer:", `Scene ${sequence.length + 1}`);
    if (!sceneName) return; 
    
    sequence.push({
        sceneId: sceneName, sceneObj: { id: sceneName, videos: vids },
        pureDuration: 30, transDuration: 10, transType: 0
    });
    
    renderSequenceLayers(); recalculateSchedule();
    Object.keys(videosA).forEach(key => clearStageSlot(key));
    currentLoadedA = null; 
});

let draggedItemIndex = null;
function renderSequenceLayers() {
    layerList.innerHTML = '';
    sequence.forEach((item, index) => {
        const el = document.createElement('div'); el.className = 'layer-item';
        el.innerHTML = `<div class="handle" draggable="true" title="Drag to reorder"><svg class="btn-icon"><use href="#icon-drag"></use></svg></div> 
                        <span style="flex-grow: 1; pointer-events:none;">${index + 1}. ${item.sceneId}</span> 
                        <button class="btn-remove-layer" data-index="${index}">×</button>`;
        const handle = el.querySelector('.handle');
        handle.addEventListener('dragstart', (e) => { 
            isLayerDragging = true; 
            draggedItemIndex = index; e.dataTransfer.effectAllowed = 'move'; setTimeout(() => el.classList.add('dragging'), 0); 
        });
        el.addEventListener('dragover', (e) => {
            e.preventDefault(); if (draggedItemIndex === null || draggedItemIndex === index) return;
            const bounding = el.getBoundingClientRect(); const offset = e.clientY - bounding.top;
            if (offset < bounding.height / 2) { el.classList.add('drag-over-top'); el.classList.remove('drag-over-bottom'); } 
            else { el.classList.add('drag-over-bottom'); el.classList.remove('drag-over-top'); }
        });
        el.addEventListener('dragleave', () => { el.classList.remove('drag-over-top', 'drag-over-bottom'); });
        el.addEventListener('dragend', () => { 
            isLayerDragging = false; 
            el.classList.remove('dragging'); draggedItemIndex = null; document.querySelectorAll('.layer-item').forEach(i => i.classList.remove('drag-over-top', 'drag-over-bottom')); 
        });
        el.addEventListener('drop', (e) => {
            e.preventDefault(); el.classList.remove('drag-over-top', 'drag-over-bottom');
            if (draggedItemIndex === null) return;
            let dropTargetIndex = index; const dropTop = e.clientY - el.getBoundingClientRect().top < el.offsetHeight / 2;
            if (!dropTop) dropTargetIndex++;
            if (draggedItemIndex === dropTargetIndex || draggedItemIndex === dropTargetIndex - 1) return;
            const itemToMove = sequence.splice(draggedItemIndex, 1)[0];
            if (dropTargetIndex > draggedItemIndex) dropTargetIndex--;
            sequence.splice(dropTargetIndex, 0, itemToMove);
            renderSequenceLayers(); recalculateSchedule();
        });
        el.querySelector('.btn-remove-layer').addEventListener('click', (e) => {
            e.stopPropagation(); sequence.splice(index, 1); renderSequenceLayers(); recalculateSchedule();
        });
        layerList.appendChild(el);
    });
}

const selectProject = document.getElementById('select-project');
const btnSaveProject = document.getElementById('btn-save-project');

function updateProjectDropdown() {
    selectProject.innerHTML = '<option value="">-- Saved Timelines --</option>';
    Object.keys(savedProjects).forEach(name => {
        const opt = document.createElement('option'); opt.value = name; opt.innerText = name; selectProject.appendChild(opt);
    });
}

btnSaveProject.addEventListener('click', () => {
    if (sequence.length === 0) return alert("Timeline is empty! Add scenes first.");
    let projName = prompt("Name this timeline setup:");
    if (projName) { savedProjects[projName] = JSON.parse(JSON.stringify(sequence)); updateProjectDropdown(); selectProject.value = projName; }
});

selectProject.addEventListener('change', (e) => {
    const name = e.target.value;
    if (name && savedProjects[name]) { sequence = JSON.parse(JSON.stringify(savedProjects[name])); renderSequenceLayers(); recalculateSchedule(); sequenceTime = 0; absolutePlayTime = 0; }
});

const formatTime = (secs) => {
    if(isNaN(secs)) return "00:00:00.00";
    const h = Math.floor(secs / 3600).toString().padStart(2, '0');
    const m = Math.floor((secs % 3600) / 60).toString().padStart(2, '0');
    const s = Math.floor(secs % 60).toString().padStart(2, '0');
    const ms = Math.floor((secs % 1) * 100).toString().padStart(2, '0');
    return `${h}:${m}:${s}.${ms}`;
};

function recalculateSchedule() {
    schedule = []; let t = 0; let currentBank = 'A';
    for (let i = 0; i < sequence.length; i++) {
        let item = sequence[i]; let nextItem = sequence[(i + 1) % sequence.length]; 
        schedule.push({ type: 'scene', start: t, end: t + item.pureDuration, bank: currentBank, sceneObj: item.sceneObj });
        t += item.pureDuration;
        schedule.push({ type: 'trans', start: t, end: t + item.transDuration, fromBank: currentBank, toBank: currentBank === 'A' ? 'B' : 'A', sceneFrom: item.sceneObj, sceneTo: nextItem.sceneObj, blendMode: item.transType });
        t += item.transDuration;
        currentBank = currentBank === 'A' ? 'B' : 'A';
    }
    totalSeqDuration = t; renderTimelineUI();
}

function renderTimelineUI() {
    const track = document.getElementById('timeline-track');
    Array.from(track.children).forEach(child => { if(child.id !== 'playhead') track.removeChild(child); });
    if(sequence.length === 0) return;
    
    schedule.forEach((block, index) => {
        const pct = ((block.end - block.start) / totalSeqDuration) * 100;
        const el = document.createElement('div'); el.style.width = `${pct}%`;
        if (block.type === 'scene') {
            el.className = 'tl-scene';
            el.innerHTML = `<span class="tl-title">${block.sceneObj.id}</span><span class="tl-time">${block.end - block.start}s</span>`;
            el.onclick = () => {
                if(isScrubbing) return; 
                let currentItem = sequence[Math.floor(index/2)];
                let res = prompt(`Duration for ${currentItem.sceneId} (in seconds):`, currentItem.pureDuration);
                if (res && !isNaN(res)) { currentItem.pureDuration = parseFloat(res); recalculateSchedule(); }
            };
        } else if (block.type === 'trans') {
            el.className = 'tl-trans';
            el.innerHTML = `<span class="tl-trans-title">MIX</span><span class="tl-time">${block.end - block.start}s</span>`;
            el.onclick = () => {
                if(isScrubbing) return; 
                let currentItem = sequence[Math.floor(index/2)];
                let mode = prompt(`Blend Mode (0=Cross, 1=Add, 2=Screen, 3=Mult):`, currentItem.transType);
                let dur = prompt(`Transition Duration (in seconds):`, currentItem.transDuration);
                if (dur && !isNaN(dur) && mode && !isNaN(mode)) { 
                    currentItem.transDuration = parseFloat(dur); currentItem.transType = parseInt(mode); recalculateSchedule(); 
                }
            };
        }
        track.appendChild(el);
    });
}

function stopAllVideos() {
    Object.values(videosA).forEach(vid => vid.pause());
    Object.values(videosB).forEach(vid => vid.pause());
}

document.getElementById('btn-clear-seq').addEventListener('click', () => {
    sequence = []; schedule = []; sequenceTime = 0; absolutePlayTime = 0;
    engineMode = 'STAGE'; isSequencePlaying = false; isPlaying = false;
    
    renderSequenceLayers(); renderTimelineUI();
    stopAllVideos();
    
    Object.values(videosB).forEach(vid => { vid.removeAttribute('src'); vid.removeAttribute('data-src'); vid.load(); });
    Object.values(walls).forEach(wall => {
        if(wall.mat.uniforms.mapB.value !== blackTex) wall.mat.uniforms.mapB.value.dispose();
        wall.mat.uniforms.mapB.value = blackTex;
        wall.mat.uniforms.mixRatio.value = 0.0; 
        wall.mat.uniforms.blendMode.value = 0;
    });

    currentLoadedB = null; 
    document.getElementById('playhead').style.left = `0%`; tcDisplay.innerText = "00:00:00.00";
    document.getElementById('btn-seq-play').innerHTML = '<svg class="btn-icon icon-fill"><use href="#icon-play"></use></svg> Play Seq';
    document.getElementById('btn-play').innerHTML = '<svg class="btn-icon icon-fill"><use href="#icon-play"></use></svg> Preview';
});

const ruler = document.getElementById('timeline-ruler');
let isScrubbing = false;

function updateScrub(e) {
    if(sequence.length === 0) return;
    const rect = ruler.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let pct = Math.max(0, Math.min(0.9999, x / rect.width)); 
    sequenceTime = pct * totalSeqDuration;
    absolutePlayTime = sequenceTime; // Align the un-wrapped clock to the UI scrub point
    
    engineMode = 'SEQUENCE'; 
    updateEngineStateFromTimeline(); 
}

ruler.addEventListener('mousedown', (e) => { 
    isScrubbing = true; engineMode = 'SEQUENCE'; updateScrub(e); 
});
window.addEventListener('mousemove', (e) => { if(isScrubbing) updateScrub(e); });
window.addEventListener('mouseup', () => { isScrubbing = false; });

const btnSeqPlay = document.getElementById('btn-seq-play');
btnSeqPlay.addEventListener('click', () => {
    if (sequence.length === 0) return alert("Drop a scene onto the timeline first!");
    
    if (!isSequencePlaying || engineMode !== 'SEQUENCE') {
        engineMode = 'SEQUENCE';
        isSequencePlaying = true;
        isPlaying = true;
        lastTime = performance.now(); 
        
        btnSeqPlay.innerHTML = '<svg class="btn-icon icon-fill"><use href="#icon-pause"></use></svg> Pause Seq';
        document.getElementById('btn-play').innerHTML = '<svg class="btn-icon icon-fill"><use href="#icon-play"></use></svg> Preview';
    } else {
        isSequencePlaying = false;
        isPlaying = false;
        btnSeqPlay.innerHTML = '<svg class="btn-icon icon-fill"><use href="#icon-play"></use></svg> Play Seq';
        stopAllVideos();
    }
});

function ensureBankLoaded(bank, sceneObj) {
    if (!sceneObj) return;
    let loadedTracker = bank === 'A' ? currentLoadedA : currentLoadedB;
    if (loadedTracker === sceneObj.id) return; 
    
    const targetVideos = bank === 'A' ? videosA : videosB;
    ['north', 'east', 'south', 'west'].forEach(wall => {
        const src = sceneObj.videos[wall];
        if (src) {
            if (targetVideos[wall].getAttribute('data-src') !== src) { 
                targetVideos[wall].src = src;
                targetVideos[wall].setAttribute('data-src', src);
                targetVideos[wall].setAttribute('src', src);
                targetVideos[wall].load();
                
                if (walls[wall].mat.uniforms[`map${bank}`].value !== blackTex) walls[wall].mat.uniforms[`map${bank}`].value.dispose();
                const texture = new THREE.VideoTexture(targetVideos[wall]); texture.colorSpace = THREE.SRGBColorSpace;
                walls[wall].mat.uniforms[`map${bank}`].value = texture;
            }
        } else {
            if (targetVideos[wall].hasAttribute('src')) {
                targetVideos[wall].pause(); targetVideos[wall].removeAttribute('src'); 
                targetVideos[wall].removeAttribute('data-src'); targetVideos[wall].load();
            }
            if (walls[wall].mat.uniforms[`map${bank}`].value !== blackTex) walls[wall].mat.uniforms[`map${bank}`].value.dispose();
            walls[wall].mat.uniforms[`map${bank}`].value = blackTex;
        }
    });
    
    if (bank === 'A') currentLoadedA = sceneObj.id; else currentLoadedB = sceneObj.id;
}

function updateEngineStateFromTimeline() {
    let currentBlock = schedule.find(b => sequenceTime >= b.start && sequenceTime < b.end);
    if (!currentBlock) return;

    if (currentBlock.type === 'scene') {
        Object.values(walls).forEach(w => w.mat.uniforms.mixRatio.value = currentBlock.bank === 'A' ? 0.0 : 1.0);
        ensureBankLoaded(currentBlock.bank, currentBlock.sceneObj);
        
        let nextTrans = schedule.find(b => b.type === 'trans' && b.start === currentBlock.end);
        
        // 2-Second Lookahead safely loads upcoming scene in background to prevent DOM thread stalling exactly on block transition
        if (nextTrans && (sequenceTime > currentBlock.end - 2.0)) {
            ensureBankLoaded(nextTrans.toBank, nextTrans.sceneTo);
        }
        
        syncVideosToMasterTime(currentBlock.bank === 'A' ? videosA : videosB, absolutePlayTime);
        
    } else if (currentBlock.type === 'trans') {
        let progress = (sequenceTime - currentBlock.start) / (currentBlock.end - currentBlock.start);
        let mix = currentBlock.fromBank === 'A' ? progress : (1.0 - progress);
        
        Object.values(walls).forEach(w => { w.mat.uniforms.mixRatio.value = mix; w.mat.uniforms.blendMode.value = currentBlock.blendMode; });

        ensureBankLoaded(currentBlock.fromBank, currentBlock.sceneFrom);
        ensureBankLoaded(currentBlock.toBank, currentBlock.sceneTo);
        
        syncVideosToMasterTime(currentBlock.fromBank === 'A' ? videosA : videosB, absolutePlayTime);
        syncVideosToMasterTime(currentBlock.toBank === 'A' ? videosA : videosB, absolutePlayTime);
    }
    document.getElementById('playhead').style.left = `${(sequenceTime / totalSeqDuration) * 100}%`;
    tcDisplay.innerText = formatTime(sequenceTime);
}

function syncVideosToMasterTime(bankVideos, expectedTime) {
    if (isNaN(expectedTime)) return;
    Object.values(bankVideos).forEach(vid => {
        if (vid.readyState >= 1) {
            let dur = vid.duration;
            if (!isFinite(dur) || dur <= 0) return; 
            
            let loopedTime = expectedTime % dur;
            
            if (!isPlaying || isScrubbing) {
                if (Math.abs(vid.currentTime - loopedTime) > 0.05 && !vid.seeking) {
                    vid.currentTime = loopedTime;
                }
            } else {
                // Background start logic shielded by native promise catch to prevent Play Button Crash
                if (vid.paused) {
                    let p = vid.play();
                    if (p !== undefined) p.catch(e => {}); 
                }
                if (vid.seeking) return; 

                let drift = vid.currentTime - loopedTime;
                if (drift > dur / 2) drift -= dur;
                else if (drift < -dur / 2) drift += dur;
                
                // Allow thread recovery without triggering aggressive backward jumps
                if (Math.abs(drift) > 1.5) vid.currentTime = loopedTime; 
                else if (Math.abs(drift) > 0.05) vid.playbackRate = currentSpeed * (drift > 0 ? 0.9 : 1.1);
                else vid.playbackRate = currentSpeed;
            }
        }
    });
}

const playBtn = document.getElementById('btn-play');
playBtn.addEventListener('click', () => {
    if (engineMode !== 'STAGE' || !isPlaying) {
        engineMode = 'STAGE';
        isSequencePlaying = false; 
        isPlaying = true;
        lastTime = performance.now();
        
        playBtn.innerHTML = '<svg class="btn-icon icon-fill"><use href="#icon-pause"></use></svg> Pause';
        document.getElementById('btn-seq-play').innerHTML = '<svg class="btn-icon icon-fill"><use href="#icon-play"></use></svg> Play Seq';
        
        Object.values(walls).forEach(w => { w.mat.uniforms.mixRatio.value = 0.0; }); 
        updateStageUI();
    } else {
        isPlaying = false;
        playBtn.innerHTML = '<svg class="btn-icon icon-fill"><use href="#icon-play"></use></svg> Preview';
        stopAllVideos();
    }
});

const restartBtn = document.getElementById('btn-restart');
restartBtn.addEventListener('click', () => {
    if(engineMode === 'STAGE') {
        stageTime = 0;
    } else {
        sequenceTime = 0; absolutePlayTime = 0; updateEngineStateFromTimeline();
    }
});

const speedBtn = document.getElementById('btn-speed');
speedBtn.addEventListener('click', (e) => {
    const speeds = [0.5, 1, 1.5, 2];
    const nextIndex = (speeds.indexOf(currentSpeed) + 1) % speeds.length;
    currentSpeed = speeds[nextIndex];
    e.currentTarget.innerHTML = `<svg class="btn-icon"><use href="#icon-speed"></use></svg> ${currentSpeed}x`;
});

let isDimmed = true; 
const dimBtn = document.getElementById('btn-dim');
dimBtn.addEventListener('click', () => {
    isDimmed = !isDimmed;
    targetBgColor = isDimmed ? dimmedBgColor : defaultBgColor;
    targetLightIntensity = isDimmed ? 0.05 : 0.8;
    dimBtn.innerHTML = isDimmed ? '<svg class="btn-icon"><use href="#icon-sun"></use></svg> Light' : '<svg class="btn-icon"><use href="#icon-moon"></use></svg> Dark';
});

let isOrtho = false;
const camBtn = document.getElementById('btn-cam');
camBtn.addEventListener('click', () => {
    isOrtho = !isOrtho;
    if (isOrtho) {
        orthographicCamera.position.copy(perspectiveCamera.position); orthographicCamera.quaternion.copy(perspectiveCamera.quaternion);
        camBtn.innerHTML = '<svg class="btn-icon"><use href="#icon-cube"></use></svg> Persp';
    } else {
        perspectiveCamera.position.copy(orthographicCamera.position); perspectiveCamera.quaternion.copy(orthographicCamera.quaternion);
        camBtn.innerHTML = '<svg class="btn-icon"><use href="#icon-cube"></use></svg> Ortho';
    }
    currentCamera = isOrtho ? orthographicCamera : perspectiveCamera; controls.object = currentCamera; controls.update();
});

let isLerpingTarget = false; let isLerpingCamera = false; let isLerpingZoom = false;
let targetPosition = new THREE.Vector3(); let cameraPosition = new THREE.Vector3(); let targetZoom = 1;
document.getElementById('btn-reset').addEventListener('click', () => {
    cameraPosition.set(65, 55, 0); targetPosition.set(0, wallH / 2, 0); targetZoom = 1;
    isLerpingCamera = true; isLerpingTarget = true;
    if (isOrtho) isLerpingZoom = true;
});

let isGridOn = true;
const gridBtn = document.getElementById('btn-grid');
gridBtn.addEventListener('click', () => {
    isGridOn = !isGridOn;
    Object.values(walls).forEach(wall => wall.gridGroup.visible = isGridOn);
    globalGrid.visible = isGridOn;
});

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && e.target.tagName !== 'INPUT') { 
        e.preventDefault(); 
        if (engineMode === 'SEQUENCE') btnSeqPlay.click(); else playBtn.click();
    }
    if (e.key.toLowerCase() === 'r' && e.target.tagName !== 'INPUT') { restartBtn.click(); }
    if (e.key.toLowerCase() === 'd' && e.target.tagName !== 'INPUT') { dimBtn.click(); }
    if (e.key.toLowerCase() === 'g' && e.target.tagName !== 'INPUT') { gridBtn.click(); }
    if (e.key.toLowerCase() === 'o' && e.target.tagName !== 'INPUT') { camBtn.click(); }
});

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
controls.addEventListener('start', () => { isLerpingTarget = false; isLerpingCamera = false; isLerpingZoom = false; });
window.addEventListener('dblclick', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1; mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, currentCamera);
    const intersects = raycaster.intersectObjects([...roomGroup.children, diffuser]);
    if (intersects.length > 0) {
        if (intersects[0].object === diffuser) {
            cameraPosition.set(intersects[0].point.x, wallH / 2, intersects[0].point.z); 
            targetPosition.set(0, wallH / 2, 0); 
            isLerpingCamera = true; isLerpingTarget = true;
        } else {
            targetPosition.copy(intersects[0].point); isLerpingTarget = true;
        }
    }
});

function animate() {
    requestAnimationFrame(animate);
    
    let now = performance.now();
    let dt = (now - lastTime) / 1000;
    lastTime = now;

    // Timeline advances safely decoupled from scrubbing stutters
    if (engineMode === 'STAGE') {
        if (isPlaying && !isScrubbing) {
            stageTime += dt * currentSpeed;
            tcDisplay.innerText = formatTime(stageTime);
        }
        syncVideosToMasterTime(videosA, stageTime);
    } else if (engineMode === 'SEQUENCE' && sequence.length > 0) {
        if (isPlaying && !isScrubbing) {
            absolutePlayTime += dt * currentSpeed;
            sequenceTime = absolutePlayTime % totalSeqDuration;
        }
        updateEngineStateFromTimeline();
    }

    labelsToUpdate.forEach(label => { label.quaternion.copy(currentCamera.quaternion); });

    scene.background.lerp(targetBgColor, 0.05);
    ambientLight.intensity += (targetLightIntensity - ambientLight.intensity) * 0.05;
    
    if (isLerpingTarget) { controls.target.lerp(targetPosition, 0.06); if (controls.target.distanceTo(targetPosition) < 0.01) isLerpingTarget = false; }
    if (isLerpingCamera) { currentCamera.position.lerp(cameraPosition, 0.06); if (currentCamera.position.distanceTo(cameraPosition) < 0.01) isLerpingCamera = false; }
    if (isLerpingZoom && isOrtho) { 
        currentCamera.zoom += (targetZoom - currentCamera.zoom) * 0.06; 
        currentCamera.updateProjectionMatrix(); 
        if (Math.abs(currentCamera.zoom - targetZoom) < 0.01) isLerpingZoom = false; 
    }
    
    controls.update();
    renderer.render(scene, currentCamera); 
}
animate();

window.addEventListener('resize', () => {
    const aspect = window.innerWidth / window.innerHeight;
    perspectiveCamera.aspect = aspect; perspectiveCamera.updateProjectionMatrix();
    orthographicCamera.left = -orthoSize * aspect; orthographicCamera.right = orthoSize * aspect; orthographicCamera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});