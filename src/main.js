import './style.css'
import * as THREE from 'three';
import WebMWriter from 'webm-writer';
import JSZip from 'jszip';

const SPECS = { width: 18119, height: 1080 };
const ASPECT = SPECS.width / SPECS.height; 

const DEFAULT_LAYER_ORDER = ['l21','l4','l1','l9','l10','l11','l23','l12','l13','l14','l19','l22','l20','l2','l3','l5','l6','l7','l8','l25','l26','l27','l28','l29','l30','l31','l32'];

const LAYER_NAMES = {
    l21: "360 HDRI Pano", l4: "Gradient", l1: "Plasma", l9: "Cells",
    l10: "Smoke", l11: "Marble", l23: "Chrome Liquid", l12: "Pixels",
    l13: "Wormholes", l14: "Waveforms", l19: "Checkerboard", l22: "Wave Grid",
    l20: "Circles", l2: "Grid", l3: "Pulse", l5: "Rain", l6: "Stars", l7: "Scanlines", l8: "Image",
    l25: "Custom Text", l26: "VU Meter",
    l27: "Voronoi", l28: "Mandelbrot", l29: "Neon Lightning",
    l30: "Clock", l31: "Lissajous", l32: "Particles"
};

const defaultState = {
  presetName: "Retro Master", cycles: 1, duration: 30, fps: 60, exportScale: 0.5,
  showSeams: true, splitView: false, showGuide: false, isolateWall: null, layerOrder: [...DEFAULT_LAYER_ORDER],
  
  l1_en: false, l1_opacity: 1, l1_blend: 1, l1_scale: 5, l1_stretch: 5, l1_rot: 0, l1_panX: 0, l1_motion: 1, l1_con: 0.5, l1_blur: 0.1, l1_colA: "#1a0033", l1_colB: "#00ffd0",
  l9_en: false, l9_opacity: 1, l9_blend: 1, l9_density: 20, l9_size: 0.5, l9_speed: 1, l9_panX: 0, l9_choke: 0.0, l9_blur: 0.1, l9_colA: "#001144", l9_colB: "#ffb000",
  l10_en: false, l10_opacity: 1, l10_blend: 1, l10_density: 5, l10_size: 0.5, l10_speed: 1, l10_panX: 0, l10_detail: 5, l10_blur: 0.1, l10_colA: "#ff5500", l10_colB: "#220000",
  l11_en: false, l11_opacity: 1, l11_blend: 1, l11_scale: 5, l11_warp: 4, l11_speed: 1, l11_panX: 0, l11_blur: 0.1, l11_colA: "#00ff88", l11_colB: "#002244",
  l12_en: false, l12_opacity: 1, l12_blend: 1, l12_density: 40, l12_size: 0.5, l12_speed: 2, l12_panX: 0, l12_blur: 0, l12_colA: "#ffb000", l12_colB: "#000000",
  l23_en: false, l23_opacity: 1, l23_blend: 0, l23_scale: 0.5, l23_depth: 0.8, l23_turb: 0.1, l23_speed: 1, l23_speedX: 0, l23_panX: 0, l23_colTop: "#ffffff", l23_colMid: "#888888", l23_colBot: "#000000",
  l2_en: false, l2_opacity: 1, l2_blend: 1, l2_scale: 50, l2_rot: 0, l2_speed: 1, l2_panX: 0, l2_blur: 0.01, l2_col: "#ffb000",
  l3_en: false, l3_opacity: 1, l3_blend: 1, l3_freq: 20, l3_wave: 3, l3_speed: 2, l3_panX: 0, l3_blur: 0.1, l3_col: "#ff00ff",
  l13_en: false, l13_opacity: 1, l13_blend: 1, l13_scale: 10, l13_depth: 2, l13_speed: 2, l13_panX: 0, l13_blur: 0, l13_colA: "#ff00ff", l13_colB: "#000000",
  l14_en: false, l14_opacity: 1, l14_blend: 1, l14_petals: 3, l14_size: 0.3, l14_speed: 1, l14_panX: 0, l14_thick: 0.02, l14_blur: 0, l14_col: "#00ffff", 
  l19_en: false, l19_opacity: 1, l19_blend: 0, l19_scale: 10, l19_skew: 0, l19_speed: 0, l19_speedX: 0, l19_panX: 0, l19_panY: 0, l19_squeeze: 0, l19_topEdge: 1.0, l19_botEdge: 0.0, l19_cropT: 0, l19_cropB: 0, l19_colA: "#000000", l19_colB: "#ffb000",
  l22_en: false, l22_opacity: 1, l22_blend: 1, l22_countX: 0, l22_countY: 15, l22_thick: 0.05, l22_speed: 1, l22_amp: 0.1, l22_freq: 5, l22_panX: 0, l22_panY: 0, l22_topEdge: 1.0, l22_botEdge: 0.0, l22_squeeze: 0.0, l22_taper: 0.9, l22_blur: 0.01, l22_col: "#00ffff",
  l4_en: false, l4_opacity: 1, l4_blend: 1, l4_rot: 0, l4_repeat: 1, l4_panX: 0, l4_col1: "#ff0000", l4_col2: "#00ff00", l4_col3: "#0000ff",
  l5_en: false, l5_opacity: 1, l5_blend: 1, l5_density: 50, l5_rot: 0, l5_speed: 2, l5_panX: 0, l5_width: 50, l5_length: 1, l5_blur: 0.02, l5_col: "#ffb000",
  l6_en: false, l6_opacity: 1, l6_blend: 1, l6_scale: 20, l6_twinkle: 5, l6_panX: 0, l6_blur: 0.05, l6_colRand: 0, l6_col: "#ffb000",
  l7_en: false, l7_opacity: 1, l7_blend: 2, l7_density: 100, l7_speed: 1, l7_panX: 0, l7_blur: 0.01, l7_col: "#ffffff",
  l8_en: false, l8_opacity: 1, l8_blend: 1, l8_scale: 1, l8_posX: 0, l8_posY: 0, l8_speed: 0, l8_col: "#ffffff",
  l21_en: false, l21_opacity: 1, l21_blend: 0, l21_scale: 1.0, l21_panX: 0, l21_posY: 0, l21_speed: 0, l21_blur: 0, l21_col: "#ffffff",
  l20_en: false, l20_opacity: 1, l20_blend: 1, l20_density: 2.0, l20_size: 0.5, l20_speed: 2, l20_panX: 0, l20_blur: 0.01, l20_colRand: 0, l20_col: "#ffb000",
  
  l25_en: false, l25_opacity: 1, l25_blend: 1, l25_scrollSpeed: 1, l25_posY: 0.5, l25_size: 0.15, l25_tracking: 0, l25_lineSpacing: 1.2, l25_waveAmp: 0, l25_waveFreq: 3, l25_waveSpeed: 1, l25_skewX: 0, l25_glitch: 0, l25_outline: 0, l25_shadow: 0, l25_panX: 0, l25_col: "#ffb000",
  l25_text: "RETRO MASTER LOOP", l25_font: "Courier New", l25_fontStyle: "bold", l25_align: "center",
  l26_en: false, l26_opacity: 1, l26_blend: 1, l26_barW: 8, l26_barGap: 2, l26_hBars: 8, l26_hBarH: 2, l26_noiseAmt: 0.8, l26_noiseSpeed: 3, l26_glowAmt: 0.6, l26_squeeze: 0.5, l26_gradient: true, l26_topEdge: 1.0, l26_botEdge: 0.0, l26_colBot: "#00ff44", l26_colMid: "#ffee00", l26_colTop: "#ff2200",
  
  l15_en: false, l15_segments: 6, l15_speed: 1, l15_zoom: 1.0, l15_offX: 0, l15_offY: 0,
  l16_en: false, l16_amount: 0.05,
  l17_en: false, l17_scale: 100, l17_amount: 0.1, l17_speed: 1,
  l18_en: false, l18_scale: 10, l18_amount: 1.0, l18_col: "#000000",
  l24_en: false, l24_density: 800, l24_intensity: 1.0, l24_skew: 0.0,

  // New GLSL effects
  l27_en: false, l27_opacity: 1, l27_blend: 1, l27_density: 10, l27_size: 0.3, l27_speed: 1, l27_panX: 0, l27_choke: 0.0, l27_blur: 0.05, l27_colA: "#00ffcc", l27_colB: "#000000",
  l28_en: false, l28_opacity: 1, l28_blend: 1, l28_zoom: 0.003, l28_panX: -0.5, l28_panY: 0.0, l28_iter: 64, l28_julia: 0, l28_jx: 0.355, l28_jy: 0.355, l28_speed: 0.1, l28_colA: "#ff6600", l28_colB: "#001133",
  l29_en: false, l29_opacity: 1, l29_blend: 1, l29_density: 5, l29_speed: 2, l29_panX: 0, l29_glow: 0.6, l29_thick: 0.012, l29_chaos: 0.5, l29_col: "#00aaff",
  // Canvas texture effects
  l30_en: false, l30_opacity: 1, l30_blend: 1, l30_size: 0.12, l30_posX: 0.5, l30_posY: 0.5, l30_showDate: false, l30_showFrames: false, l30_col: "#00ff44",
  l31_en: false, l31_opacity: 1, l31_blend: 1, l31_freqX: 3, l31_freqY: 2, l31_speed: 1, l31_trails: 0.92, l31_thick: 2, l31_phase: 0, l31_col: "#ff00ff",
  l32_en: false, l32_opacity: 1, l32_blend: 1, l32_count: 200, l32_speed: 1.5, l32_size: 3, l32_trails: 0.93, l32_gravity: 0.3, l32_spread: 0.5, l32_turbulence: 0, l32_spin: 0, l32_burst: 0, l32_glow: 0.5, l32_sizeRand: 0.5, l32_lifespan: 1.0, l32_emitX: 0.5, l32_emitY: 0.5, l32_col: "#ffb000", l32_colB: "#ff4400",
  // New post modifiers live in the POST FX tab
  l33_en: false, l33_amount: 80, l33_aspect: 1,
  l34_en: false, l34_amount: 0.008, l34_angle: 0
};

const effectLayers = ['l1','l2','l3','l4','l5','l6','l7','l8','l9','l10','l11','l12','l13','l14','l15','l16','l17','l18','l19','l20','l21','l22','l23','l24','l25','l26','l27','l28','l29','l30','l31','l32','l33','l34'];
effectLayers.forEach(l => { defaultState[`${l}_wN`] = true; defaultState[`${l}_wE`] = true; defaultState[`${l}_wS`] = true; defaultState[`${l}_wW`] = true; });

const PRESETS = {
  "ocean": { l22_en: true, l22_countX: 0, l22_countY: 24, l22_amp: 0.15, l22_freq: 3, l22_speed: 1, l22_taper: 0.95, l22_thick: 0.08, l22_col: "#00aaff", l22_blend: 0, l22_opacity: 1, l4_en: true, l4_col1: "#000511", l4_col2: "#002244", l4_col3: "#000000", l4_blend: 0, l4_opacity: 1, l6_en: true, l6_scale: 30, l6_twinkle: 3, l6_col: "#ffffff", l6_blend: 1, l6_opacity: 0.7 },
  "mercury": { l23_en: true, l23_scale: 0.25, l23_depth: 1.2, l23_speed: 0.2, l23_speedX: 0.1, l23_colTop: "#ffffff", l23_colMid: "#333333", l23_colBot: "#000000", l23_blend: 0, l23_opacity: 1, l16_en: true, l16_amount: 0.015, l17_en: true, l17_scale: 150, l17_amount: 0.02, l17_speed: 0.5 },
  "synthwave": { l4_en: true, l4_col1: "#0a0022", l4_col2: "#ff0077", l4_col3: "#ff7700", l4_rot: 0, l4_blend: 0, l4_opacity: 1, l22_en: true, l22_countX: 20, l22_countY: 15, l22_amp: 0, l22_freq: 1, l22_speed: 1.5, l22_taper: 0.0, l22_thick: 0.03, l22_col: "#ff00ff", l22_botEdge: 0.0, l22_topEdge: 0.5, l22_blend: 1, l22_opacity: 1, l6_en: true, l6_scale: 40, l6_col: "#ffffff", l6_blend: 1, l6_opacity: 0.8, l6_wS: false, l6_wW: false, l6_wE: false, l6_wN: true, l7_en: true, l7_density: 120, l7_speed: 0.5, l7_col: "#ffffff", l7_blend: 2, l7_opacity: 0.3 },
  "cathedral": { l19_en: true, l19_scale: 12, l19_squeeze: 3, l19_speed: 0.5, l19_colA: "#000000", l19_colB: "#00ffcc", l19_blend: 0, l19_opacity: 1, l13_en: true, l13_scale: 6, l13_depth: 2.5, l13_speed: -1.0, l13_colA: "#ff0055", l13_colB: "#000000", l13_blend: 1, l13_opacity: 1, l15_en: true, l15_segments: 8, l15_speed: 0.2, l16_en: true, l16_amount: 0.04 },
  "glitch": { l12_en: true, l12_density: 60, l12_size: 0.7, l12_speed: 8.0, l12_colA: "#00ff33", l12_colB: "#001100", l12_blend: 0, l12_opacity: 1, l7_en: true, l7_density: 200, l7_speed: -2.0, l7_col: "#ffffff", l7_blend: 2, l7_opacity: 0.8, l17_en: true, l17_amount: 0.25, l17_scale: 60, l17_speed: 4.0, l16_en: true, l16_amount: 0.08 }
};

const PALETTES = {
  "silicon_forest": ["#007a3f", "#31edae", "#f4730a", "#2a2a2a", "#ffffff"],
  "vaporwave": ["#0a0022", "#ff00ff", "#00e5ff", "#ff8800", "#e0e0e0"],
  "cyberpunk": ["#ff0077", "#00ffff", "#ffea00", "#110022", "#ffffff"]
};

const state = JSON.parse(JSON.stringify(defaultState));

// --- DYNAMIC SHADER CHUNKS ---
const SHADER_CHUNKS = {
    l21: `if(u_l21_en>0.5){float wM=getWallMask(uv.x,u_l21_wN,u_l21_wE,u_l21_wS,u_l21_wW);if(wM>0.0){float v21_sp=floor((u_l21_speed*5.0)+0.5);float v21_u=fract((uv.x+u_l21_panX)+p*v21_sp);float v21_vScale=(u_l21_ImgAspect/uAspect)/max(0.01,u_l21_scale);float v21_v=u_l21_posY+(uv.y-0.5)*v21_vScale+0.5;if(v21_v>=0.0&&v21_v<=1.0){vec4 v21_img=texture2D(u_l21_Tex,vec2(v21_u,v21_v));color=blend(color,v21_img.rgb*u_l21_col,u_l21_blend,v21_img.a*u_l21_opacity*wM);}}}`,
    l4: `if(u_l4_en>0.5){float wM=getWallMask(uv.x,u_l4_wN,u_l4_wE,u_l4_wS,u_l4_wW);if(wM>0.0){float v4_ang=u_l4_rot*TWO_PI/360.0;vec2 v4_ctr=vec2(uv.x+u_l4_panX-0.5,uv.y-0.5);float v4_proj=dot(v4_ctr,vec2(cos(v4_ang),sin(v4_ang)));float v4_t=fract((v4_proj+0.5)*u_l4_repeat);float v4_t2=abs(v4_t*2.0-1.0);vec3 v4_gCol=mix(u_l4_col1,u_l4_col2,smoothstep(0.0,0.5,v4_t2));color=blend(color,mix(v4_gCol,u_l4_col3,smoothstep(0.5,1.0,v4_t2)),u_l4_blend,u_l4_opacity*wM);}}`,
    l1: `if(u_l1_en>0.5){float wM=getWallMask(uv.x,u_l1_wN,u_l1_wE,u_l1_wS,u_l1_wW);if(wM>0.0){float v1_eX=uv.x+u_l1_panX;vec2 v1_pC=vec2(cos(v1_eX*TWO_PI),sin(v1_eX*TWO_PI));vec2 v1_rC=v1_pC*rot(u_l1_rot);float v1_spd=floor((u_l1_motion*5.0)+0.5)*TWO_PI;float v1_n=snoise(vec2(v1_rC.x*u_l1_scale+cos(p*v1_spd),uv.y*u_l1_stretch+sin(p*v1_spd)));vec3 v1_col=mix(u_l1_colA,u_l1_colB,smoothstep(u_l1_con-u_l1_blur,u_l1_con+u_l1_blur,v1_n));color=blend(color,v1_col,u_l1_blend,u_l1_opacity*wM);}}`,
    l9: `if(u_l9_en>0.5){float wM=getWallMask(uv.x,u_l9_wN,u_l9_wE,u_l9_wS,u_l9_wW);if(wM>0.0){float v9_eX=uv.x+u_l9_panX;vec2 v9_pC=vec2(cos(v9_eX*TWO_PI),sin(v9_eX*TWO_PI));float v9_spd=floor((u_l9_speed*5.0)+0.5)*TWO_PI;float v9_v=voronoi(vec2(v9_pC.x,uv.y)*u_l9_density,p*v9_spd);float v9_raw=sqrt(v9_v);float v9_chokeRaw=smoothstep(u_l9_choke*0.6,u_l9_choke*0.6+0.3,v9_raw);float v9_m=smoothstep(1.0-u_l9_size-u_l9_blur,1.0-u_l9_size+u_l9_blur+0.001,v9_chokeRaw);vec3 v9_col=mix(u_l9_colA,u_l9_colB,v9_m);color=blend(color,v9_col,u_l9_blend,u_l9_opacity*v9_m*wM);}}`,
    l10: `if(u_l10_en>0.5){float wM=getWallMask(uv.x,u_l10_wN,u_l10_wE,u_l10_wS,u_l10_wW);if(wM>0.0){float v10_eX=uv.x+u_l10_panX;vec2 v10_pC=vec2(cos(v10_eX*TWO_PI),sin(v10_eX*TWO_PI));float v10_spd=floor((u_l10_speed*10.0)+0.5);float v10_n1=fbm(vec2(v10_pC.x*u_l10_density,uv.y*u_l10_density)+vec2(p*v10_spd),u_l10_detail);float v10_n2=fbm(vec2(v10_pC.x*u_l10_density,uv.y*u_l10_density)+vec2((p-1.0)*v10_spd),u_l10_detail);float v10_n=mix(v10_n1,v10_n2,fade)*0.5+0.5;float v10_m=smoothstep(1.0-u_l10_size-u_l10_blur-0.01,1.0-u_l10_size+u_l10_blur+0.01,v10_n);vec3 v10_col=mix(u_l10_colA,u_l10_colB,v10_n);color=blend(color,v10_col,u_l10_blend,u_l10_opacity*v10_m*wM);}}`,
    l11: `if(u_l11_en>0.5){float wM=getWallMask(uv.x,u_l11_wN,u_l11_wE,u_l11_wS,u_l11_wW);if(wM>0.0){float v11_eX=uv.x+u_l11_panX;vec2 v11_pC=vec2(cos(v11_eX*TWO_PI),sin(v11_eX*TWO_PI));float v11_spd=floor((u_l11_speed*5.0)+0.5);vec2 v11_pos=vec2(v11_pC.x,uv.y)*u_l11_scale;float v11_x1=snoise(v11_pos+p*v11_spd);float v11_y1=snoise(v11_pos+vec2(5.2,1.3));float v11_n1=snoise(v11_pos+vec2(v11_x1,v11_y1)*u_l11_warp);float v11_x2=snoise(v11_pos+(p-1.0)*v11_spd);float v11_y2=snoise(v11_pos+vec2(5.2,1.3));float v11_n2=snoise(v11_pos+vec2(v11_x2,v11_y2)*u_l11_warp);float v11_n=smoothstep(0.0,u_l11_blur+0.01,mix(v11_n1,v11_n2,fade)*0.5+0.5);color=blend(color,mix(u_l11_colA,u_l11_colB,v11_n),u_l11_blend,u_l11_opacity*wM);}}`,
    l23: `if(u_l23_en>0.5){float wM=getWallMask(uv.x,u_l23_wN,u_l23_wE,u_l23_wS,u_l23_wW);if(wM>0.0){float v23_eX=uv.x+u_l23_panX;vec2 v23_pC=vec2(cos(v23_eX*TWO_PI),sin(v23_eX*TWO_PI));float v23_spY=floor((u_l23_speed*5.0)+0.5);float v23_spX=floor((u_l23_speedX*5.0)+0.5);vec2 v23_uv=vec2(v23_pC.x,uv.y)*u_l23_scale;vec2 tWarp1=vec2(p*1.0,p*1.0);vec2 tWarp2=vec2((p-1.0)*1.0,(p-1.0)*1.0);vec2 warpUv=v23_uv*1.0;float t1=mix(snoise(warpUv+tWarp1),snoise(warpUv+tWarp2),fade);float t2=mix(snoise(warpUv+vec2(5.2,1.3)+tWarp1),snoise(warpUv+vec2(5.2,1.3)+tWarp2),fade);vec2 warpedUv=v23_uv+vec2(t1,t2)*u_l23_turb;vec2 baseUv1=warpedUv+vec2(p*v23_spX,p*v23_spY);vec2 baseUv2=warpedUv+vec2((p-1.0)*v23_spX,(p-1.0)*v23_spY);float eps=0.01;float n0=mix(fbm(baseUv1,4.0),fbm(baseUv2,4.0),fade);float nx=mix(fbm(baseUv1+vec2(eps,0.0),4.0),fbm(baseUv2+vec2(eps,0.0),4.0),fade);float ny=mix(fbm(baseUv1+vec2(0.0,eps),4.0),fbm(baseUv2+vec2(0.0,eps),4.0),fade);vec3 normal=normalize(vec3((n0-nx)/eps*u_l23_depth,(n0-ny)/eps*u_l23_depth,1.0));vec3 view=vec3(0.0,0.0,-1.0);vec3 ref=reflect(view,normal);float y=ref.y;vec3 sky=mix(u_l23_colMid,u_l23_colTop,clamp(y*2.0,0.0,1.0));vec3 ground=mix(u_l23_colMid,u_l23_colBot,clamp(-y*2.0,0.0,1.0));float edge=smoothstep(-0.02,0.02,y);vec3 envCol=mix(ground,sky,edge);envCol*=mix(1.0,0.3,smoothstep(0.05,0.0,abs(y)));vec3 lightDir=normalize(vec3(0.5,0.8,1.0));float spec=pow(max(0.0,dot(ref,lightDir)),30.0);envCol+=spec;color=blend(color,envCol,u_l23_blend,u_l23_opacity*wM);}}`,
    l12: `if(u_l12_en>0.5){float wM=getWallMask(uv.x,u_l12_wN,u_l12_wE,u_l12_wS,u_l12_wW);if(wM>0.0){float v12_eX=uv.x+u_l12_panX;vec2 v12_pC=vec2(cos(v12_eX*TWO_PI),sin(v12_eX*TWO_PI));float v12_spd=floor((u_l12_speed*10.0)+0.5);float v12_n1=valueNoise(vec2(v12_pC.x*u_l12_density,uv.y*u_l12_density)+vec2(0.0,p*v12_spd));float v12_n2=valueNoise(vec2(v12_pC.x*u_l12_density,uv.y*u_l12_density)+vec2(0.0,(p-1.0)*v12_spd));float v12_n=mix(v12_n1,v12_n2,fade);float v12_m=smoothstep(1.0-u_l12_size-u_l12_blur-0.001,1.0-u_l12_size+u_l12_blur+0.001,v12_n);vec3 v12_col=mix(u_l12_colA,u_l12_colB,v12_n);color=blend(color,v12_col,u_l12_blend,u_l12_opacity*v12_m*wM);}}`,
    l13: `if(u_l13_en>0.5){float wM=getWallMask(uv.x,u_l13_wN,u_l13_wE,u_l13_wS,u_l13_wW);if(wM>0.0){float v13_eX=fract(uv.x+u_l13_panX);vec2 v13_c=vec2(v13_eX,uv.y)-0.5;v13_c.x*=uAspect;float v13_r=length(v13_c);float v13_a=atan(v13_c.y,v13_c.x);float v13_spd=floor((u_l13_speed*5.0)+0.5);vec2 v13_tUv=vec2(v13_a/TWO_PI,u_l13_depth/max(0.001,v13_r));float v13_g=smoothstep(0.9-u_l13_blur,0.9,fract(v13_tUv.x*u_l13_scale))+smoothstep(0.9-u_l13_blur,0.9,fract(v13_tUv.y*u_l13_scale+p*v13_spd));color=blend(color,mix(u_l13_colB,u_l13_colA,clamp(v13_g,0.0,1.0))*smoothstep(0.0,0.2,v13_r),u_l13_blend,u_l13_opacity*wM);}}`,
    l14: `if(u_l14_en>0.5){float wM=getWallMask(uv.x,u_l14_wN,u_l14_wE,u_l14_wS,u_l14_wW);if(wM>0.0){float v14_eX=fract(uv.x+u_l14_panX);float v14_lines=0.0;float v14_f,v14_s,v14_y,v14_d;v14_f=floor((u_l14_petals*1.0)+0.5);v14_s=floor((u_l14_speed*5.0)+0.5)*TWO_PI;v14_y=0.5+sin(v14_eX*TWO_PI*v14_f+p*v14_s)*u_l14_size*(0.5/1.0);v14_d=smoothstep(u_l14_thick+u_l14_blur,max(0.001,u_l14_thick-0.01),abs(uv.y-v14_y));v14_lines=max(v14_lines,v14_d);v14_f=floor((u_l14_petals*2.0)+0.5);v14_s=floor((u_l14_speed*5.0)+0.5)*TWO_PI;v14_y=0.5+sin(v14_eX*TWO_PI*v14_f+p*v14_s)*u_l14_size*(0.5/2.0);v14_d=smoothstep(u_l14_thick+u_l14_blur,max(0.001,u_l14_thick-0.01),abs(uv.y-v14_y));v14_lines=max(v14_lines,v14_d);v14_f=floor((u_l14_petals*3.0)+0.5);v14_s=floor((u_l14_speed*5.0)+0.5)*TWO_PI;v14_y=0.5+sin(v14_eX*TWO_PI*v14_f+p*v14_s)*u_l14_size*(0.5/3.0);v14_d=smoothstep(u_l14_thick+u_l14_blur,max(0.001,u_l14_thick-0.01),abs(uv.y-v14_y));v14_lines=max(v14_lines,v14_d);color=blend(color,u_l14_col*v14_lines,u_l14_blend,u_l14_opacity*wM);}}`,
    l19: `if(u_l19_en>0.5){float wM=getWallMask(uv.x,u_l19_wN,u_l19_wE,u_l19_wS,u_l19_wW);if(wM>0.0){float v19_xT=max(2.0,floor((u_l19_scale*uAspect/2.0)+0.5)*2.0);float v19_sk=floor((u_l19_skew/2.0)+0.5)*2.0;float v19_spY=floor((u_l19_speed*10.0)+0.5);float v19_spX=floor((u_l19_speedX*10.0)+0.5);float v19_mY=(uv.y-u_l19_botEdge)/max(0.001,(u_l19_topEdge-u_l19_botEdge));float v19_a=exp(-u_l19_squeeze*0.2);float v19_y=v19_mY/(v19_a+(1.0-v19_a)*v19_mY);vec2 v19_uv=vec2((uv.x+u_l19_panX)*v19_xT+p*v19_spX*2.0+v19_y*v19_sk,v19_y*u_l19_scale+p*v19_spY*2.0+u_l19_panY*u_l19_scale);float v19_c=mod(floor(v19_uv.x)+floor(v19_uv.y),2.0);vec3 v19_col=mix(u_l19_colA,u_l19_colB,v19_c);float v19_bounds=step(0.0,v19_mY)*step(v19_mY,1.0);float v19_m=step(u_l19_cropB,uv.y)*step(uv.y,1.0-u_l19_cropT)*v19_bounds;color=blend(color,v19_col,u_l19_blend,u_l19_opacity*v19_m*wM);}}`,
    l22: `if(u_l22_en>0.5){float wM=getWallMask(uv.x,u_l22_wN,u_l22_wE,u_l22_wS,u_l22_wW);if(wM>0.0){float v22_eX=fract(uv.x+u_l22_panX);float v22_sp=floor((u_l22_speed*10.0)+0.5);float v22_yT=max(1.0,floor(u_l22_countY+0.5));float v22_xT=floor(u_l22_countX*uAspect+0.5);float v22_mY=(uv.y-u_l22_botEdge)/max(0.001,(u_l22_topEdge-u_l22_botEdge));float v22_a=exp(-u_l22_squeeze*0.2);float v22_y=v22_mY/(v22_a+(1.0-v22_a)*v22_mY);float v22_yUv=(v22_y+u_l22_panY)*v22_yT;float v22_id=floor(v22_yUv);float topId=v22_yT-1.0;float topRnd=random(vec2(topId,1.13));float topF=max(1.0,floor(u_l22_freq*(0.5+0.5*topRnd)+0.5));float topDepth=1.0-(topId/max(1.0,v22_yT-1.0));float topSpeedMult=max(1.0,floor(topDepth*4.0+1.0));float topWave=sin(v22_eX*TWO_PI*topF+p*TWO_PI*v22_sp*topSpeedMult+topRnd*TWO_PI)*u_l22_amp;float topWaveY=topId+0.5+topWave*v22_yT;float botId=0.0;float botRnd=random(vec2(botId,1.13));float botF=max(1.0,floor(u_l22_freq*(0.5+0.5*botRnd)+0.5));float botDepth=1.0-(botId/max(1.0,v22_yT-1.0));float botSpeedMult=max(1.0,floor(botDepth*4.0+1.0));float botWave=sin(v22_eX*TWO_PI*botF+p*TWO_PI*v22_sp*botSpeedMult+botRnd*TWO_PI)*u_l22_amp;float botWaveY=botId+0.5+botWave*v22_yT;float v22_lineX=0.0;if(v22_xT>0.5){float depthY=clamp(v22_y,0.0,1.0);float lineX_taper=mix(1.0,1.0-u_l22_taper,depthY);float lineX_thick=max(0.001,u_l22_thick*lineX_taper);float v22_gX=abs(fract(v22_eX*v22_xT)-0.5)*2.0;v22_lineX=smoothstep(1.0-lineX_thick-u_l22_blur,1.0-lineX_thick+0.001,v22_gX);v22_lineX*=step(botWaveY,v22_yUv)*step(v22_yUv,topWaveY);}float v22_lineY=0.0;for(float i=-4.0;i<=4.0;i+=1.0){float cId=v22_id+i;if(cId>=0.0&&cId<v22_yT){float rnd=random(vec2(cId,1.13));float f=max(1.0,floor(u_l22_freq*(0.5+0.5*rnd)+0.5));float depth=1.0-(cId/max(1.0,v22_yT-1.0));float speedMult=max(1.0,floor(depth*4.0+1.0));float lineY_taper=mix(1.0-u_l22_taper,1.0,depth);float lineY_thick=max(0.001,u_l22_thick*lineY_taper);float wave=sin(v22_eX*TWO_PI*f+p*TWO_PI*v22_sp*speedMult+rnd*TWO_PI)*u_l22_amp;float distY=abs(v22_yUv-(cId+0.5+wave*v22_yT));v22_lineY=max(v22_lineY,smoothstep(lineY_thick+u_l22_blur,max(0.001,lineY_thick-0.01),distY));}}float v22_grid=clamp(v22_lineX+v22_lineY,0.0,1.0);float v22_bounds=step(0.0,v22_mY)*step(v22_mY,1.0);color=blend(color,u_l22_col*v22_grid,u_l22_blend,u_l22_opacity*v22_bounds*wM);}}`,
    l20: `if(u_l20_en>0.5){float wM=getWallMask(uv.x,u_l20_wN,u_l20_wE,u_l20_wS,u_l20_wW);if(wM>0.0){vec4 v20_c=vec4(0.0);float v20_lS,v20_xT,v20_spMult,v20_sp,v20_rnd,v20_r,v20_circ,v20_dist;vec2 v20_gUv,v20_id,v20_f,v20_nb,v20_cId,v20_wId,v20_off,v20_pos;vec3 v20_cR,v20_clr;v20_spMult=floor((u_l20_speed*5.0)+0.5);v20_xT=max(1.0,floor((u_l20_density*uAspect/1.0)+0.5));v20_lS=v20_xT/uAspect;v20_sp=v20_spMult*v20_xT*1.0;v20_gUv=vec2((uv.x+u_l20_panX)*v20_xT+p*v20_sp,uv.y*v20_lS+1.0*12.34);v20_id=floor(v20_gUv);v20_f=fract(v20_gUv);for(int y=-2;y<=2;y++){for(int x=-2;x<=2;x++){v20_nb=vec2(float(x),float(y));v20_cId=v20_id+v20_nb;v20_wId=vec2(mod(v20_cId.x,v20_xT),v20_cId.y);v20_rnd=random(v20_wId+1.0*1.13);if(v20_rnd>0.7){v20_off=(random2(v20_wId+3.14)-0.5)*2.5;v20_pos=v20_nb+0.5+v20_off-v20_f;v20_r=min(0.8,(u_l20_size*0.4)*(0.4+0.6*random(v20_wId+7.7)));v20_dist=length(v20_pos);v20_circ=smoothstep(u_l20_blur+0.01,0.0,v20_dist-v20_r);v20_cR=vec3(random(v20_wId+2.2),random(v20_wId+3.3),random(v20_wId+4.4));v20_clr=mix(u_l20_col,v20_cR,u_l20_colRand);v20_c.rgb=mix(v20_c.rgb,v20_clr,v20_circ);v20_c.a=max(v20_c.a,v20_circ);}}}v20_xT=max(1.0,floor((u_l20_density*uAspect/2.0)+0.5));v20_lS=v20_xT/uAspect;v20_sp=v20_spMult*v20_xT*2.0;v20_gUv=vec2((uv.x+u_l20_panX)*v20_xT+p*v20_sp,uv.y*v20_lS+2.0*12.34);v20_id=floor(v20_gUv);v20_f=fract(v20_gUv);for(int y=-2;y<=2;y++){for(int x=-2;x<=2;x++){v20_nb=vec2(float(x),float(y));v20_cId=v20_id+v20_nb;v20_wId=vec2(mod(v20_cId.x,v20_xT),v20_cId.y);v20_rnd=random(v20_wId+2.0*1.13);if(v20_rnd>0.7){v20_off=(random2(v20_wId+3.14)-0.5)*2.5;v20_pos=v20_nb+0.5+v20_off-v20_f;v20_r=min(0.8,(u_l20_size*0.4)*(0.4+0.6*random(v20_wId+7.7)));v20_dist=length(v20_pos);v20_circ=smoothstep(u_l20_blur+0.01,0.0,v20_dist-v20_r);v20_cR=vec3(random(v20_wId+2.2),random(v20_wId+3.3),random(v20_wId+4.4));v20_clr=mix(u_l20_col,v20_cR,u_l20_colRand);v20_c.rgb=mix(v20_c.rgb,v20_clr,v20_circ);v20_c.a=max(v20_c.a,v20_circ);}}}v20_xT=max(1.0,floor((u_l20_density*uAspect/3.0)+0.5));v20_lS=v20_xT/uAspect;v20_sp=v20_spMult*v20_xT*3.0;v20_gUv=vec2((uv.x+u_l20_panX)*v20_xT+p*v20_sp,uv.y*v20_lS+3.0*12.34);v20_id=floor(v20_gUv);v20_f=fract(v20_gUv);for(int y=-2;y<=2;y++){for(int x=-2;x<=2;x++){v20_nb=vec2(float(x),float(y));v20_cId=v20_id+v20_nb;v20_wId=vec2(mod(v20_cId.x,v20_xT),v20_cId.y);v20_rnd=random(v20_wId+3.0*1.13);if(v20_rnd>0.7){v20_off=(random2(v20_wId+3.14)-0.5)*2.5;v20_pos=v20_nb+0.5+v20_off-v20_f;v20_r=min(0.8,(u_l20_size*0.4)*(0.4+0.6*random(v20_wId+7.7)));v20_dist=length(v20_pos);v20_circ=smoothstep(u_l20_blur+0.01,0.0,v20_dist-v20_r);v20_cR=vec3(random(v20_wId+2.2),random(v20_wId+3.3),random(v20_wId+4.4));v20_clr=mix(u_l20_col,v20_cR,u_l20_colRand);v20_c.rgb=mix(v20_c.rgb,v20_clr,v20_circ);v20_c.a=max(v20_c.a,v20_circ);}}}color=blend(color,v20_c.rgb,u_l20_blend,u_l20_opacity*v20_c.a*wM);}}`,
    l2: `if(u_l2_en>0.5){float wM=getWallMask(uv.x,u_l2_wN,u_l2_wE,u_l2_wS,u_l2_wW);if(wM>0.0){float v2_xT=floor((u_l2_scale*uAspect)+0.5);float v2_sk=floor((u_l2_rot)+0.5);float v2_sp=floor((u_l2_speed*10.0)+0.5);float v2_gX=fract((uv.x+u_l2_panX)*v2_xT+uv.y*v2_sk);float v2_gY=fract(uv.y*u_l2_scale+p*v2_sp);float v2_g=smoothstep(0.95-u_l2_blur,0.95,v2_gX)+smoothstep(0.95-u_l2_blur,0.95,v2_gY);color=blend(color,vec3(u_l2_col)*clamp(v2_g,0.0,1.0),u_l2_blend,u_l2_opacity*wM);}}`,
    l3: `if(u_l3_en>0.5){float wM=getWallMask(uv.x,u_l3_wN,u_l3_wE,u_l3_wS,u_l3_wW);if(wM>0.0){float v3_eX=fract(uv.x+u_l3_panX);float v3_w=floor((u_l3_wave*5.0)+0.5);float v3_sp=floor((u_l3_speed*10.0)+0.5)*TWO_PI;float v3_yO=sin(v3_eX*TWO_PI*v3_w+p*TWO_PI)*0.1;float v3_pls=sin((abs(uv.y-0.5+v3_yO)*2.0)*u_l3_freq-p*v3_sp);color=blend(color,u_l3_col*smoothstep(0.8-u_l3_blur,1.0,v3_pls),u_l3_blend,u_l3_opacity*wM);}}`,
    l5: `if(u_l5_en>0.5){float wM=getWallMask(uv.x,u_l5_wN,u_l5_wE,u_l5_wS,u_l5_wW);if(wM>0.0){float v5_xT=floor((u_l5_width*uAspect)+0.5);float v5_sk=floor((u_l5_rot)+0.5);vec2 v5_rUv=vec2((uv.x+u_l5_panX)*v5_xT+uv.y*v5_sk,uv.y*u_l5_length);float v5_idX=mod(floor(v5_rUv.x),max(1.0,v5_xT));float v5_sp=floor((u_l5_speed*5.0)+0.5);if(random(vec2(v5_idX,0.0))>(1.0-u_l5_density/100.0)){float v5_drop=fract(v5_rUv.y+p*v5_sp+random(vec2(v5_idX,1.0)));color=blend(color,u_l5_col*smoothstep(0.8-u_l5_blur,1.0,1.0-v5_drop),u_l5_blend,u_l5_opacity*wM);}}}`,
    l6: `if(u_l6_en>0.5){float wM=getWallMask(uv.x,u_l6_wN,u_l6_wE,u_l6_wS,u_l6_wW);if(wM>0.0){float v6_xT=floor((u_l6_scale*uAspect)+0.5);vec2 v6_sUv=vec2((uv.x+u_l6_panX)*v6_xT,uv.y*u_l6_scale);vec2 v6_id=vec2(mod(floor(v6_sUv.x),max(1.0,v6_xT)),floor(v6_sUv.y));vec2 v6_sub=fract(v6_sUv)-0.5;float v6_n=random(v6_id);if(v6_n>0.9){float v6_sp=floor((u_l6_twinkle*5.0)+0.5)*TWO_PI;float v6_tw=sin(p*v6_sp+v6_n*100.0)*0.5+0.5;float v6_st=smoothstep(0.0,u_l6_blur+0.01,1.0-length(v6_sub)*4.0)*v6_tw;vec3 v6_fC=mix(u_l6_col,vec3(random(v6_id+1.1),random(v6_id+2.2),random(v6_id+3.3)),u_l6_colRand);color=blend(color,v6_fC*v6_st,u_l6_blend,u_l6_opacity*wM);}}}`,
    l7: `if(u_l7_en>0.5){float wM=getWallMask(uv.x,u_l7_wN,u_l7_wE,u_l7_wS,u_l7_wW);if(wM>0.0){float v7_eX=fract(uv.x+u_l7_panX);float v7_sp=floor((u_l7_speed*10.0)+0.5)*TWO_PI;float v7_sc=sin((uv.y*u_l7_density)+(p*v7_sp))*0.5+0.5;color=blend(color,u_l7_col*smoothstep(0.5-u_l7_blur,0.5+u_l7_blur,v7_sc),u_l7_blend,u_l7_opacity*wM);}}`,
    l8: `if(u_l8_en>0.5){float wM=getWallMask(uv.x,u_l8_wN,u_l8_wE,u_l8_wS,u_l8_wW);if(wM>0.0){float v8_sp=floor((u_l8_speed*10.0)+0.5);float v8_off=p*v8_sp;float v8_lX=fract((uv.x+u_l8_posX)-v8_off);vec2 v8_tUv=vec2(v8_lX,uv.y-u_l8_posY)-0.5;v8_tUv.x*=uAspect/max(0.01,u_l8_Aspect);v8_tUv/=max(0.01,u_l8_scale);v8_tUv+=0.5;if(v8_tUv.x>=0.0&&v8_tUv.x<=1.0&&v8_tUv.y>=0.0&&v8_tUv.y<=1.0){vec4 v8_img=texture2D(u_l8_Tex,v8_tUv);color=blend(color,v8_img.rgb,u_l8_blend,v8_img.a*u_l8_opacity*wM);}}}`
,    l25: `if(u_l25_en>0.5){float wM=getWallMask(uv.x,u_l25_wN,u_l25_wE,u_l25_wS,u_l25_wW);if(wM>0.0){float v25_sp=u_l25_scrollSpeed*p;float v25_wave=sin((uv.x+u_l25_panX)*TWO_PI*u_l25_waveFreq+p*u_l25_waveSpeed*TWO_PI)*u_l25_waveAmp;float v25_skew=(1.0-uv.y)*u_l25_skewX;float v25_x=fract(uv.x+u_l25_panX+v25_sp+v25_skew);float v25_y=clamp(uv.y-v25_wave,0.0,1.0);vec4 v25_col=texture2D(u_l25_Tex,vec2(v25_x,v25_y));color=blend(color,v25_col.rgb,u_l25_blend,v25_col.a*u_l25_opacity*wM);}}`
,    l26: `if(u_l26_en>0.5){float wM=getWallMask(uv.x,u_l26_wN,u_l26_wE,u_l26_wS,u_l26_wW);if(wM>0.0){vec4 v26_col=texture2D(u_l26_Tex,uv);color=blend(color,v26_col.rgb,u_l26_blend,v26_col.a*u_l26_opacity*wM);}}`
,   l27: `if(u_l27_en>0.5){float wM=getWallMask(uv.x,u_l27_wN,u_l27_wE,u_l27_wS,u_l27_wW);if(wM>0.0){float v27_eX=uv.x+u_l27_panX;vec2 v27_pC=vec2(cos(v27_eX*TWO_PI),sin(v27_eX*TWO_PI));float v27_spd=floor((u_l27_speed*5.0)+0.5)*TWO_PI;float v27_v=voronoi(vec2(v27_pC.x,uv.y)*u_l27_density,p*v27_spd);float v27_raw=sqrt(v27_v);float v27_choked=smoothstep(u_l27_choke*0.6,u_l27_choke*0.6+0.3,v27_raw);float v27_cell=smoothstep(u_l27_size-u_l27_blur,u_l27_size+u_l27_blur+0.001,v27_choked);float v27_edge=1.0-smoothstep(u_l27_size+u_l27_blur,u_l27_size+u_l27_blur+0.08,v27_choked);color=blend(color,mix(u_l27_colA,u_l27_colB,v27_cell)*max(v27_cell,v27_edge*0.8),u_l27_blend,u_l27_opacity*max(v27_cell,v27_edge)*wM);}}`
,   l28: `if(u_l28_en>0.5){float wM=getWallMask(uv.x,u_l28_wN,u_l28_wE,u_l28_wS,u_l28_wW);if(wM>0.0){vec2 v28_sc=vec2((uv.x+u_l28_panX-0.5)*u_l28_zoom*uAspect,(uv.y+u_l28_panY-0.5)*u_l28_zoom);vec2 v28_c,v28_z;if(u_l28_julia>0.5){v28_c=vec2(u_l28_jx+sin(p*TWO_PI*u_l28_speed)*0.15,u_l28_jy+cos(p*TWO_PI*u_l28_speed)*0.15);v28_z=v28_sc;}else{v28_c=v28_sc;v28_z=vec2(0.0);}float v28_i=0.0;for(int i=0;i<128;i++){if(float(i)>=u_l28_iter)break;if(dot(v28_z,v28_z)>4.0)break;v28_z=vec2(v28_z.x*v28_z.x-v28_z.y*v28_z.y+v28_c.x,2.0*v28_z.x*v28_z.y+v28_c.y);v28_i+=1.0;}float v28_t=v28_i/u_l28_iter;float v28_esc=smoothstep(0.98,1.0,v28_t);color=blend(color,mix(u_l28_colA,u_l28_colB,v28_t),u_l28_blend,u_l28_opacity*(1.0-v28_esc)*wM);}}`
,   l29: `if(u_l29_en>0.5){float wM=getWallMask(uv.x,u_l29_wN,u_l29_wE,u_l29_wS,u_l29_wW);if(wM>0.0){float v29_eX=fract(uv.x+u_l29_panX);float v29_sp=floor(u_l29_speed*5.0+0.5)*TWO_PI;float v29_total=0.0;for(float bi=0.0;bi<20.0;bi+=1.0){if(bi>=u_l29_density)break;float v29_rA=random(vec2(bi,3.7));float v29_rB=random(vec2(bi,9.1));float v29_cx=v29_rA;float v29_cy=0.2+v29_rB*0.6;float v29_seg=4.0+floor(random(vec2(bi,1.3))*5.0);for(float si=0.0;si<8.0;si+=1.0){if(si>=v29_seg)break;float v29_nx=v29_cx+(random(vec2(bi*3.1+si,2.7))-0.5)*u_l29_chaos*0.25;float v29_ny=v29_cy+(random(vec2(bi*3.1+si,4.3))-0.5)*u_l29_chaos*0.15;vec2 v29_seg_dir=vec2(v29_nx,v29_ny)-vec2(v29_cx,v29_cy);float v29_seg_len=length(v29_seg_dir)+0.0001;vec2 v29_seg_n=v29_seg_dir/v29_seg_len;vec2 v29_p=vec2(v29_eX-v29_cx,uv.y-v29_cy);float v29_t=clamp(dot(v29_p,v29_seg_n)/v29_seg_len,0.0,1.0);vec2 v29_closest=vec2(v29_cx,v29_cy)+v29_t*v29_seg_dir;float v29_d=length(vec2(v29_eX,uv.y)-v29_closest);float v29_bolt=smoothstep(u_l29_thick,0.0,v29_d);float v29_t2=fract(p*v29_sp*0.1+bi*0.37);float v29_flicker=step(0.25,sin(p*v29_sp+bi*17.3+si*3.1)*0.5+0.5);v29_total=max(v29_total,v29_bolt*v29_flicker);v29_cx=v29_nx;v29_cy=v29_ny;}}vec3 v29_c=u_l29_col*(v29_total+v29_total*v29_total*u_l29_glow*3.0);color=blend(color,v29_c,u_l29_blend,clamp(v29_total*u_l29_opacity,0.0,1.0)*wM);}}`
,   l30: `if(u_l30_en>0.5){float wM=getWallMask(uv.x,u_l30_wN,u_l30_wE,u_l30_wS,u_l30_wW);if(wM>0.0){vec4 v30_col=texture2D(u_l30_Tex,uv);color=blend(color,v30_col.rgb,u_l30_blend,v30_col.a*u_l30_opacity*wM);}}`
,   l31: `if(u_l31_en>0.5){float wM=getWallMask(uv.x,u_l31_wN,u_l31_wE,u_l31_wS,u_l31_wW);if(wM>0.0){vec4 v31_col=texture2D(u_l31_Tex,uv);color=blend(color,v31_col.rgb,u_l31_blend,v31_col.a*u_l31_opacity*wM);}}`
,   l32: `if(u_l32_en>0.5){float wM=getWallMask(uv.x,u_l32_wN,u_l32_wE,u_l32_wS,u_l32_wW);if(wM>0.0){vec4 v32_col=texture2D(u_l32_Tex,uv);color=blend(color,v32_col.rgb,u_l32_blend,v32_col.a*u_l32_opacity*wM);}}`
};

const getBlend = (id) => `<select id="${id}"><option value="0">Normal</option><option value="1">Add</option><option value="2">Multiply</option><option value="3">Screen</option><option value="4">Overlay</option><option value="5">Difference</option></select>`;
const getSlider = (label, id, min, max, step, def) => `<div class="ctrl-row">${label} <input type="range" id="${id}" min="${min}" max="${max}" step="${step}"> <input type="number" id="${id}-val" class="val-input">${def !== undefined ? `<button class="reset-btn" data-id="${id}" data-default="${def}" title="Reset to default">↺</button>` : ''}</div>`;
const getCol = (id) => `<div style="display:flex; align-items:center; gap:5px;"><input type="color" id="${id}"> <input type="text" id="${id}-hex" class="val-input hex-input" maxlength="7"></div>`;
const getWalls = (id) => `<div class="wall-toggles" style="display:flex; justify-content:space-between; font-size:14px; font-weight:bold; margin-top:8px; padding-top:8px; border-top:1px dashed #444; color:var(--amber);">WALLS: <label><input type="checkbox" id="${id}-wN"> N</label><label><input type="checkbox" id="${id}-wE"> E</label><label><input type="checkbox" id="${id}-wS"> S</label><label><input type="checkbox" id="${id}-wW"> W</label></div>`;
const getPalBtn = (id) => `<button class="btn-local-pal" data-layer="${id}" style="margin-top:10px; width:100%; border-color:#00ffcc; color:#00ffcc; text-shadow:0 0 5px #00ffcc;">[ 🎲 SHUFFLE COLORS ]</button>`;

const app = document.querySelector('#app') || document.body;
app.innerHTML = `
  <div id="export-overlay"><div id="progress-text">PROCESSING...</div><div class="progress-box"><div id="progress-bar"></div></div></div>
  <div id="global-header">
    <div class="header-section">
      <div class="toolbar-group">
        <div class="toolbar-item" style="padding:0;min-width:140px;">
          <span style="font-size:9px;font-weight:900;letter-spacing:1.5px;color:var(--text-dim);padding-top:3px;">PRESET</span>
          <select id="presetSelect" class="tb-val" style="max-width:138px;">
            <option value="default">-- BLANK --</option>
            <option value="ocean">Living Ocean</option>
            <option value="mercury">Liquid Mercury</option>
            <option value="synthwave">Synthwave 1984</option>
            <option value="cathedral">Cyber Cathedral</option>
            <option value="glitch">Data Glitch</option>
          </select>
        </div>
        <button class="toolbar-item is-btn" id="btn-save"><span style="font-size:9px;letter-spacing:1px;">SAVE</span></button>
        <button class="toolbar-item is-btn" id="btn-load"><span style="font-size:9px;letter-spacing:1px;">LOAD</span></button>
        <button class="toolbar-item is-btn" id="btn-reset"><span style="font-size:9px;letter-spacing:1px;">RESET</span></button>
      </div>
      <input type="file" id="file-input" style="display:none">
    </div>
    <div class="header-center">
      <div id="logo-wrapper">
      <svg id="header-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1277.7582187 334.9858563"><path d="M91.279897,34.5859112c-2.9401536-3.1439752-6.6258709-5.3755426-11.1019256-6.7882598-4.4756093-1.4122717-9.8290991-2.0965775-16.1041296-2.0965775H20.0615309v124.1930334h22.9932977v-43.098344h20.6679501c6.2311476,0,11.6721804-.6384181,16.1918953-1.9143632,4.5638205-1.2750541,8.2936434-3.4616249,11.1899142-6.6056001,2.8958252-3.1439752,5.0460868-7.3794537,6.4501165-12.6641119,1.4042525-5.2846583,2.1063787-11.9379281,2.1063787-19.9562454,0-7.3340115-.6580206-13.5747376-2.0186129-18.6789637-1.3162639-5.1019985-3.4665255-9.2479292-6.3625735-12.3905678ZM75.2635333,76.909065c-.4388289,2.596887-1.2287209,4.6480222-2.4135589,6.1057361-1.184838,1.4563773-2.7205164,2.4142272-4.6952465,2.868649-1.97473.4562038-4.5197149.6843058-7.6351773.6843058h-17.4647219v-39.1805152h17.4647219c3.0276966,0,5.4849157.2735441,7.4596458.7734081,1.9308472.5020915,3.5104084,1.4581594,4.6952465,2.8708766,1.1411779,1.3668295,2.0186129,3.3261894,2.5013247,5.8317465.482489,2.4601149.7457864,5.6954199.7457864,9.6586909,0,4.3285904-.2191917,7.7902153-.6580206,10.3871023Z"/> <path d="M157.7448775,151.9764284c-.030072,0-.0579165-.0013365-.0877658-.0013365s-.0576937.0013365-.0877658.0013365h.1755316Z"/> <path d="M193.9905852,36.5314602c-3.5106312-4.7389066-8.2495378-8.1096471-14.1735052-10.0235649-5.9239674-1.9125812-13.339953-2.8708766-22.1599684-2.8708766s-16.236001.9582954-22.1597456,2.8708766c-5.9239674,1.9139177-10.6630967,5.2387706-14.1735052,10.0235649-3.5104084,4.7825667-6.055616,11.2972824-7.5476343,19.5437016-1.5356784,8.2464192-2.2819103,19.1806097-2.2819103,31.3902999,0,12.2101357.6584661,22.4600204,2.0186129,30.7064396,1.3603696,8.2464192,3.7300456,14.8520193,7.1526883,19.8631334,3.4226427,4.9652265,8.1178891,8.5654055,14.1293995,10.7060886,5.9925762,2.135337,13.6001318,3.2268403,22.8620946,3.2339685,9.2619628-.0071282,16.8695184-1.0986315,22.8618718-3.2339685,6.0117332-2.1406831,10.7069796-5.6954199,14.1296223-10.7060886,3.4233109-4.9652265,5.7918732-11.6167142,7.1531338-19.8631334,1.3597013-8.2464192,2.0181674-18.0423276,2.0181674-30.7064396,0-12.665894-.789892-23.1438807-2.2828013-31.3902999-1.4906817-8.2464192-4.0363348-14.7611349-7.5465205-19.5437016ZM179.1586139,111.5204135c-.5265947,6.0126242-1.5356784,10.6147587-3.1154624,13.7591794-1.579784,3.1421931-3.8175887,5.1933284-6.7138594,6.103954-2.896048.9560678-6.7575195,1.4122717-11.5844147,1.4122717s-8.6885894-.501646-11.5846374-1.4122717-5.1338526-2.9617609-6.7136366-6.103954c-1.579784-3.0989785-2.6329734-7.701113-3.1154624-13.7591794-.4827118-6.0602939-.7460091-14.1699411-.7460091-24.4198258,0-8.9743851.2194144-16.2188488.7460091-21.731609.5263719-5.5127602,1.5356784-9.7482387,3.1154624-12.7099996,1.579784-2.9613154,3.8175887-4.9215663,6.7136366-5.9230764,2.896048-1.0019555,6.7577423-1.5040471,11.5846374-1.5040471s8.6883667.5020915,11.5844147,1.5040471c2.8962707,1.00151,5.1340754,2.9617609,6.7138594,5.9230764,1.579784,2.9617609,2.6329734,7.1972394,3.1154624,12.7099996.4829345,5.5582024.7462319,12.802666.7462319,21.731609,0,10.2498847-.2632973,18.3595319-.7462319,24.4198258Z"/> <path d="M294.829011,91.57887c3.3778687-5.7867498,5.0456413-14.3962609,5.0456413-25.9234274,0-7.6534433-.7464546-14.0768291-2.1934762-19.1788277-1.4488036-5.1019985-3.6422799-9.202487-6.6258709-12.30102-2.9397081-3.098533-6.7134139-5.2846583-11.3211173-6.5601579-4.5638205-1.2754996-10.0052989-1.9143632-16.2809976-1.9143632h-43.1787588v124.1930334h22.9946343v-43.098344h14.2608254l20.4926413,43.098344h25.3629738l-23.6949785-47.2442747c6.757074-1.6403736,11.7588324-5.3301004,15.1384832-11.0709626ZM275.3454534,77.3652688c-.5711458,2.6877713-1.4488036,4.6916824-2.677079,6.103954-1.2278299,1.3668295-2.8521651,2.233795-4.8703325,2.596887-1.9745073.3194318-4.4762775.501646-7.3723255.501646h-17.1129905v-39.135073h16.4104188c3.116799,0,5.7484358.1826597,7.8120454.5934214,2.0622731.4085341,3.7739285,1.3209418,5.0458641,2.6877713,1.2717128,1.3668295,2.1932535,3.3248529,2.7643993,5.8304099s.8339977,5.8317465.8339977,10.0235649c0,4.5090226-.2628518,8.1096471-.8339977,10.7974185Z"/> <path d="M363.5206582,79.451154l-9.259067-2.4601149c-3.2482249-.8210778-6.0128469-1.6862613-8.2499833-2.5527813-2.2373591-.864738-4.0365576-1.9580234-5.4417011-3.233523-1.4031387-1.2754996-2.4124452-2.7791012-3.0274739-4.6021345-.614806-1.7758091-.9213179-4.1004885-.9213179-6.8795897,0-5.330546,1.3592558-9.1111572,4.0363348-11.2518403,2.677079-2.1424652,6.8905047-3.235305,12.5950577-3.235305,3.2462201,0,5.9230764.2735441,8.0726697.7756356,2.1515981.499864,3.8614716,1.4577139,5.2227322,2.8699855,1.3597013,1.3668295,2.3249021,3.3707406,2.9399309,5.9217398.614806,2.5509993,1.0527438,5.8776342,1.2719355,9.932235h22.3357227c-.2191917-7.1076916-1.0090837-13.2112002-2.2810192-18.4067561-1.2737176-5.1474407-3.4233109-9.430589-6.4510076-12.800884-3.0272511-3.3720771-7.1094737-5.8776342-12.1987751-7.5166712-5.0910835-1.6403736-11.4962034-2.4614514-19.2207058-2.4614514-7.2830004,0-13.4270505.8210778-18.4724691,2.4614514-5.0476461,1.6390371-9.1278638,4.0091586-12.1989979,7.1517973-3.0731388,3.1439752-5.3102752,6.9704741-6.7154187,11.5271664-1.4031387,4.5549103-2.1057104,9.430589-2.1057104,15.3523288,0,5.9230764.6586889,10.9796327,2.0181674,15.1714511,1.3612606,4.1459307,3.3357679,7.6988855,5.968964,10.6147587,2.6331961,2.9163188,5.8794162,5.2846583,9.7408878,7.1531338,3.8612488,1.867139,8.3814092,3.4616249,13.5163756,4.8743421l9.257285,2.4596694c3.1606818.7756356,5.7936552,1.6862613,7.9873542,2.596887,2.1932535.9578499,3.9487918,2.0052476,5.3100524,3.235305,1.3594786,1.2300575,2.3249021,2.733659,2.9399309,4.4653625.6130239,1.7299214.9213179,3.8264989.9213179,6.2866138,0,5.9212943-1.2737176,10.067225-3.8612488,12.3923499-2.5893133,2.3683395-7.1094737,3.5070671-13.6039186,3.5070671-3.5986197,0-6.4944449-.364874-8.7318041-1.0473977-2.2391412-.729748-4.0383396-1.8684755-5.4414783-3.5088491-1.4051435-1.6390371-2.4142272-3.7815022-3.0274739-6.4692735-.6150287-2.6877713-1.0529666-6.0585119-1.2737176-10.1131127l-.0438829.0458877h-22.6858948c.306512,7.3340115,1.2737176,13.5765196,2.7643993,18.6785182,1.5365694,5.1478862,3.8612488,9.2938169,7.0658135,12.4818977,3.158677,3.1898629,7.2827777,5.5127602,12.330201,6.9709196,5.0456413,1.4577139,11.1460313,2.1879073,18.6497827,2.1879073,7.5035287,0,13.8647656-.8210778,19.1311579-2.3705671,5.2663923-1.5477072,9.5219188-3.8723866,12.7701437-6.8778077,3.2464428-3.0072031,5.6167871-6.7423721,7.0638087-11.1622924,1.4490264-4.4199203,2.1934762-9.5219188,2.1934762-15.3541108,0-10.7060886-2.5875312-18.8157357-7.7224976-24.4180438-5.1331843-5.6036446-12.8561274-9.7041331-23.1679383-12.3919044Z"/> <path d="M491.799701,126.1443309c1.4490264-6.0144062,2.3266842-13.1662035,2.6768563-21.5489492h-22.3357227c-.2187462,5.4668725-.6569068,10.0235649-1.2719355,13.6219618-.614806,3.6442847-1.6677726,6.5147157-3.1147942,8.6553988-1.4490264,2.1874618-3.3796508,3.6915089-5.793878,4.5562468-2.3685623.8651835-5.4835792,1.3213873-9.3011678,1.3213873-4.8284544,0-8.6897032-.5020915-11.5855284-1.4127172-2.896048-.9106257-5.1331843-2.9617609-6.7136366-6.103954-1.5802295-3.098533-2.6331961-7.7006675-3.1147942-13.7591794-.4838256-6.0602939-.7464546-14.1694956-.7464546-24.4193803,0-8.9748306.2189689-16.2188488.7464546-21.731609.5252581-5.5127602,1.5345646-9.7486842,3.1147942-12.7099996,1.5804523-2.9617609,3.8175887-4.9215663,6.7136366-5.9235219,2.8958252-1.0019555,6.757074-1.5036016,11.5855284-1.5036016,3.7739285,0,6.8889454.4107617,9.3011678,1.2300575,2.4142272.8210778,4.3448516,2.2792372,5.793878,4.3740326,1.4470216,2.0965775,2.4999882,4.8761242,3.1147942,8.3831913.6150287,3.5070671,1.0531894,7.9269874,1.2719355,13.2570879h22.3357227c-.3501721-8.4740756-1.0966267-15.7626449-2.1932535-21.868381-1.1405096-6.103954-3.1606818-11.1605104-6.1442728-15.169669-2.9397081-4.0091586-7.1074689-6.9709196-12.4179668-8.8848373-5.3100524-1.9125812-12.242658-2.8708766-21.0620051-2.8708766-8.8211291,0-16.2371148.9582954-22.1604139,2.8708766-5.9232991,1.9139177-10.6624285,5.2387706-14.1732824,10.0235649-3.5110767,4.7825667-6.0567298,11.2972824-7.5474115,19.5437016-1.5365694,8.2464192-2.2828013,19.1806097-2.2828013,31.3902999,0,12.2101357.6584661,22.4600204,2.0199495,30.7064396,1.3594786,8.2464192,3.7298229,14.8520193,7.1513518,19.8631334,3.4233109,4.9652265,8.1185574,8.5654055,14.1296223,10.7060886,6.0128469,2.1420196,13.6478015,3.235305,22.9507514,3.235305l-.0877658-.0913299c7.8541463,0,14.3485912-.9124077,19.5695413-2.6877713,5.2225094-1.8230334,9.3904929-4.6021345,12.5948349-8.3831913,3.2025599-3.7810567,5.5290214-8.700841,6.9762657-14.669805Z"/> <polygon points="594.7010681 149.8941073 594.7010681 25.7010739 571.6627737 25.7010739 571.6627737 77.5020409 532.5205725 77.5020409 532.5205725 25.7010739 509.5277202 25.7010739 509.5277202 149.8941073 532.5205725 149.8941073 532.5205725 97.7300483 571.6627737 97.7300483 571.6627737 149.8941073 594.7010681 149.8941073"/> <polygon points="615.5496731 149.8941073 686.4617501 149.8941073 686.4617501 130.7139431 638.5879676 130.7139431 638.5879676 97.7300483 682.4236332 97.7300483 682.4236332 77.5020409 638.5879676 77.5020409 638.5879676 47.3417985 686.4617501 47.3417985 686.4617501 25.7010739 615.5496731 25.7010739 615.5496731 149.8941073"/> <path d="M779.1058815,79.451154l-9.259067-2.4601149c-3.2464428-.8210778-6.0108421-1.6862613-8.2482012-2.5527813-2.2391412-.864738-4.0383396-1.9580234-5.4414783-3.233523-1.4051435-1.2754996-2.4142272-2.7791012-3.0274739-4.6021345-.6150287-1.7758091-.9215407-4.1004885-.9215407-6.8795897,0-5.330546,1.3594786-9.1111572,4.0363348-11.2518403,2.677079-2.1424652,6.8889454-3.235305,12.5932756-3.235305,3.2482249,0,5.968964.2735441,8.0748972.7756356,2.1495933.499864,3.8612488,1.4577139,5.2205046,2.8699855,1.3614834,1.3668295,2.3269069,3.3707406,2.9417129,5.9217398.6130239,2.5509993,1.0529666,5.8776342,1.2719355,9.932235h22.3357227c-.220751-7.1076916-1.0090837-13.2112002-2.2828013-18.4067561-1.2719355-5.1474407-3.4215289-9.430589-6.4507848-12.800884-3.0274739-3.3720771-7.1076916-5.8776342-12.1987751-7.5166712-5.0895242-1.6403736-11.4964261-2.4614514-19.2189237-2.4614514-7.2847825,0-13.4272733.8210778-18.4744739,2.4614514-5.0458641,1.6390371-9.125859,4.0091586-12.1989979,7.1517973-3.071134,3.1439752-5.3082704,6.9704741-6.7134139,11.5271664-1.4033615,4.5549103-2.1059332,9.430589-2.1059332,15.3523288,0,5.9230764.6589116,10.9796327,2.0181674,15.1714511,1.3614834,4.1459307,3.3359907,7.6988855,5.967182,10.6147587,2.6334189,2.9163188,5.881421,5.2846583,9.7428926,7.1531338,3.8612488,1.867139,8.3814092,3.4616249,13.5145935,4.8743421l9.259067,2.4596694c3.158677.7756356,5.7918732,1.6862613,7.9871315,2.596887,2.1934762.9578499,3.9490146,2.0052476,5.3082704,3.235305,1.3614834,1.2300575,2.3269069,2.733659,2.9399309,4.4653625.614806,1.7299214.9215407,3.8264989.9215407,6.2866138,0,5.9212943-1.2719355,10.067225-3.8614716,12.3923499-2.5893133,2.3683395-7.1076916,3.5070671-13.6019138,3.5070671-3.5988425,0-6.4946677-.364874-8.7338089-1.0473977-2.2371364-.729748-4.0363348-1.8684755-5.4396963-3.5088491-1.4051435-1.6390371-2.4142272-3.7815022-3.0290332-6.4692735-.6132467-2.6877713-1.0531894-6.0585119-1.2719355-10.1131127l-.0438829.0458877h-22.6861175c.306512,7.3340115,1.2719355,13.5765196,2.7646221,18.6785182,1.5345646,5.1478862,3.8612488,9.2938169,7.0638087,12.4818977,3.1604591,3.1898629,7.2845597,5.5127602,12.3304238,6.9709196,5.0472006,1.4577139,11.1896914,2.1879073,18.6495599,2.1879073,7.4596458,0,13.8665477-.8210778,19.1331627-2.3705671,5.2643875-1.5477072,9.5216961-3.8723866,12.7681389-6.8778077,3.2482249-3.0072031,5.6167871-6.7423721,7.0658135-11.1622924,1.4470216-4.4199203,2.1932535-9.5219188,2.1932535-15.3541108,0-10.7060886-2.5893133-18.8157357-7.7224976-24.4180438-5.1349664-5.6036446-12.8576867-9.7041331-23.1697203-12.3919044Z"/> <polygon points="818.7626486 25.7010739 818.7626486 47.3417985 849.3465725 47.3417985 849.3465725 149.8941073 872.2097809 149.8941073 872.2097809 47.3417985 902.6186187 47.3417985 902.6186187 25.7010739 818.8065315 25.7010739 818.7626486 25.7010739"/> <path d="M979.0398918,110.4854901c0,8.5204088-1.5784475,14.3503732-4.6952465,17.5402361-3.1150169,3.1898629-8.2482012,4.7830122-15.2699091,4.7830122-7.0201486,0-12.155115-1.5931494-15.2701319-4.7830122-3.1147942-3.1898629-4.6952465-9.065715-4.6952465-17.5402361V25.7010739h-23.0382944v84.2368825c0,6.9709196.7901148,13.0766557,2.2828013,18.3158718,1.4909045,5.2392161,3.9487918,9.5678065,7.3723255,13.0748736,3.377646,3.4616249,7.8100406,6.103954,13.2517417,7.9269874,5.4417011,1.7771457,12.2428808,2.6877713,20.0968043,2.6877713,7.8557056,0,14.4817992-.9106257,19.9214955-2.6877713,5.3978182-1.7771457,9.8740957-4.4653625,13.2517417-7.9269874,3.3796508-3.4616249,5.8375381-7.8356575,7.3723255-13.0748736,1.5365694-5.2392161,2.2828013-11.3449522,2.2828013-18.3158718V25.7010739h-22.8632084v84.7844163Z"/> <path d="M1099.8849057,38.3215257c-3.5547368-4.6934644-8.2940889-7.9724296-14.2191701-9.8413506-5.9232991-1.8666935-13.2956246-2.7791012-22.1586318-2.7791012h-41.6441942v124.1475912h40.9852826c9.2154069,0,16.8067013-1.0491798,22.8614263-3.1439752,6.0565071-2.0952409,10.8392965-5.6040901,14.4379163-10.4779867,3.5547368-4.8761242,6.054725-11.29951,7.4598685-19.2719396,1.4033615-7.9728751,2.1059332-17.3580219,2.1059332-29.567712s-.7903375-22.2319185-2.2810192-30.1584604c-1.4929093-7.8815452-4.0385624-14.2153832-7.5474115-18.9070656ZM1084.8774029,110.3941603c-.5711458,5.7408621-1.6238897,10.1607824-3.204342,13.1662035-1.5802295,3.0076486-3.8173659,4.9670085-6.7134139,5.832192s-6.7136366,1.3213873-11.4088831,1.3213873h-18.6495599V47.3417985h18.6495599c4.6952465,0,8.5128351.501646,11.4088831,1.503156,2.896048.9565133,5.1331843,2.9163188,6.7134139,5.7408621,1.5804523,2.8249889,2.6331961,6.8341475,3.204342,12.0274759.5693638,5.1933284.8322156,12.0274759.8322156,20.500215,0,9.7500208-.2628518,17.5397906-.8322156,23.2806527Z"/> <rect x="1126.0471273" y="25.7010739" width="23.0365124" height="124.1930334"/> <path d="M1255.4156686,56.0751618c-1.4929093-8.2464192-4.0365576-14.7611349-7.5474115-19.5437016-3.5547368-4.7389066-8.2938662-8.1096471-14.2171653-10.0235649-5.9253039-1.9125812-13.3395075-2.8708766-22.1606366-2.8708766-8.8193471,0-16.2353327.9582954-22.1588546,2.8708766-5.968964,1.9139177-10.7078706,5.2387706-14.2189473,10.0235649-3.5088491,4.7825667-6.0545023,11.2972824-7.5474115,19.5437016-1.5345646,8.2464192-2.2810192,19.1806097-2.2810192,31.3902999,0,12.2101357.6589116,22.4600204,2.0181674,30.7064396,1.3614834,8.2464192,3.7300456,14.8520193,7.1535793,19.8631334,3.377646,4.9652265,8.0728924,8.5654055,14.0857394,10.7060886,6.0059415,2.1406831,13.6339906,3.2330775,22.9269165,3.2348595,9.2927031-.001782,16.9207523-1.0941764,22.9286986-3.2348595,6.0108421-2.1406831,10.7060886-5.6954199,14.1296223-10.7060886,3.4215289-4.9652265,5.7918732-11.6167142,7.1515745-19.8631334,1.3610379-8.2464192,2.0181674-18.0423276,2.0181674-30.7064396,0-12.665894-.7885555-23.1438807-2.2810192-31.3902999ZM1232.9046371,111.5204135c-.5272629,6.0126242-1.5363467,10.6147587-3.1147942,13.7591794-1.5804523,3.1421931-3.8175887,5.1933284-6.7136366,6.103954-2.89783.9560678-6.7590788,1.4122717-11.5857512,1.4122717s-8.6879212-.501646-11.5839691-1.4122717-5.1349664-3.0076486-6.7134139-6.103954c-1.5804523-3.0989785-2.589536-7.701113-3.116799-13.7591794-.4818208-6.0602939-.7446726-14.1699411-.7446726-24.4198258,0-8.9743851.2628518-16.2188488.7446726-21.731609.5272629-5.5127602,1.5363467-9.7482387,3.116799-12.7099996,1.5784475-2.9613154,3.8173659-4.9215663,6.7134139-5.9230764,2.896048-1.0019555,6.7572968-1.5040471,11.5839691-1.5040471s8.6879212.5020915,11.5857512,1.5040471c2.896048,1.00151,5.1331843,2.9617609,6.7136366,5.9230764,1.5784475,2.9617609,2.5875312,7.1972394,3.1147942,12.7099996.4818208,5.5582024.7464546,12.802666.7464546,21.731609,0,10.2498847-.2646339,18.3595319-.7464546,24.4198258Z"/> <path d="M1211.4904551,151.9764284c-.0075737,0-.0142564-.0004455-.0218301-.0004455s-.0144791.0004455-.0218301.0004455h.0436601Z"/> <path d="M91.279897,194.0184644c-2.9401536-3.1444207-6.6258709-5.3759881-11.1019256-6.7882598-4.4756093-1.4127172-9.8290991-2.097023-16.1041296-2.097023H20.0615309v124.2389211h22.9932977v-43.098344h20.6679501c6.2311476,0,11.6721804-.6384181,16.1918953-1.9143632,4.5638205-1.3209418,8.2936434-3.5070671,11.1899142-6.6514878,2.8958252-3.1439752,5.0460868-7.3794537,6.4501165-12.665894,1.4042525-5.2846583,2.1063787-11.936146,2.1063787-19.9544633,0-7.3340115-.7021262-13.5310775-2.0186129-18.6785182-1.3162639-5.1478862-3.4665255-9.2483747-6.3625735-12.3905678ZM75.2635333,236.3411727c-.4388289,2.596887-1.2287209,4.6480222-2.4135589,6.1043996-1.184838,1.4577139-2.7205164,2.4155637-4.6952465,2.8699855-1.97473.4562038-4.5197149.6843058-7.6351773.6843058h-17.4647219v-39.1805152h17.4647219c3.0276966,0,5.4849157.2281019,7.4596458.7738536,1.9308472.501646,3.5104084,1.4581594,4.6952465,2.8704311,1.1411779,1.3668295,2.0186129,3.3266349,2.5013247,5.832192.482489,2.4596694.7457864,5.6954199.7457864,9.6586909,0,4.3268084-.2191917,7.7902153-.6580206,10.3866568Z"/> <path d="M157.7448775,311.4361578c-.030072,0-.0579165-.0013365-.0877658-.0013365s-.0576937.0013365-.0877658.0013365h.1755316Z"/> <path d="M193.9905852,195.9911896c-3.5106312-4.7375701-8.2495378-8.1096471-14.1735052-10.0222283-5.9239674-1.9139177-13.339953-2.8704311-22.1599684-2.8704311s-16.236001.9565133-22.1597456,2.8704311c-5.9239674,1.9125812-10.6630967,5.2392161-14.1735052,10.0222283-3.5104084,4.7843488-6.055616,11.2990645-7.5476343,19.5454837-1.5356784,8.2446372-2.2819103,19.1788277-2.2819103,31.3885178,0,12.2101357.6584661,22.4600204,2.0186129,30.7059941,1.3603696,8.2464192,3.7300456,14.8524648,7.1526883,19.865361,3.4226427,4.9652265,8.1178891,8.5636234,14.1293995,10.7060886,5.9925762,2.1335549,13.6001318,3.2250583,22.8620946,3.2321865,9.2619628-.0071282,16.8695184-1.0986315,22.8618718-3.2321865,6.0117332-2.1424652,10.7069796-5.6954199,14.1296223-10.7060886,3.4233109-4.967454,5.7918732-11.6189418,7.1531338-19.865361,1.3597013-8.2459737,2.0181674-18.0396546,2.0181674-30.7059941,0-12.6641119-.789892-23.1438807-2.2828013-31.3885178-1.4906817-8.2464192-4.0363348-14.7611349-7.5465205-19.5454837ZM179.1586139,270.9342553c-.5265947,6.0148517-1.5356784,10.6152042-3.1154624,13.7591794-1.579784,3.1444207-3.8175887,5.1933284-6.7138594,6.1057361-2.896048.9565133-6.7575195,1.4109351-11.5844147,1.4109351s-8.6885894-.5003095-11.5846374-1.4109351c-2.896048-.9124077-5.1338526-2.9613154-6.7136366-6.1057361-1.579784-3.1439752-2.6329734-7.6988855-3.1154624-13.7591794-.4827118-6.0580664-.7460091-14.1677135-.7460091-24.4175982,0-8.9761672.2194144-16.2192943.7460091-21.7320545.5263719-5.5127602,1.5356784-9.7495752,3.1154624-12.7113362s3.8175887-4.9197843,6.7136366-5.9217398c2.896048-1.0037376,6.7577423-1.5036016,11.5846374-1.5036016s8.6883667.499864,11.5844147,1.5036016c2.8962707,1.0019555,5.1340754,2.9599789,6.7138594,5.9217398,1.579784,2.9617609,2.6329734,7.198576,3.1154624,12.7113362.4829345,5.5586479.7462319,12.8013295.7462319,21.7320545,0,10.2498847-.2194144,18.4049741-.7462319,24.4175982Z"/> <path d="M294.829011,250.9655356c3.3778687-5.7408621,5.0456413-14.3503732,5.0456413-25.8779852,0-7.6529978-.7464546-14.0763836-2.1934762-19.1788277-1.4488036-5.1037806-3.6422799-9.202487-6.6258709-12.30102-2.9397081-3.098533-6.7134139-5.2846583-11.3211173-6.5601579-4.5638205-1.2754996-10.0052989-1.9143632-16.2809976-1.9143632h-43.1787588v124.1934789h22.9946343v-43.098344h14.2608254l20.4926413,43.098344h25.3629738l-23.6949785-47.2901624c6.757074-1.6403736,11.7588324-5.3301004,15.1384832-11.0709626ZM275.3454534,236.7519344c-.5711458,2.6877713-1.4488036,4.6916824-2.677079,6.103954-1.2278299,1.3668295-2.8521651,2.2315675-4.8703325,2.596887-1.9745073.364874-4.4762775.5470882-7.3723255.5470882h-17.1129905v-39.1805152h16.4104188c3.116799,0,5.7484358.1826597,7.8120454.5929759,2.0622731.4089796,3.7739285,1.2759451,5.0458641,2.6882168,1.2717128,1.3668295,2.1932535,3.3248529,2.7643993,5.8299644.5711458,2.5055571.8339977,5.8326375.8339977,10.0240104,0,4.5090226-.2628518,8.1092016-.8339977,10.7974185Z"/> <polygon points="308.0700604 185.1331816 308.0700604 206.7739062 338.6557664 206.7739062 338.6557664 309.3266605 361.5169699 309.3266605 361.5169699 206.7739062 391.9273671 206.7739062 391.9273671 185.1331816 308.1137205 185.1331816 308.0700604 185.1331816"/> <polygon points="427.8707952 185.1331816 404.8781657 185.1331816 404.8781657 309.3266605 473.9019419 309.3266605 473.9019419 290.1460508 427.8707952 290.1460508 427.8707952 185.1331816"/> <path d="M518.1501512,185.1331816l-34.6224863,124.1934789h21.1515529l6.2300338-23.5546423h40.1512849l6.3632418,23.5546423h23.6949785l-34.6220408-124.1934789h-28.3465648ZM516.219304,265.8634426l14.7883111-55.4456972,14.7883111,55.4456972h-29.5766222Z"/> <polygon points="655.8978742 264.861487 616.582369 185.1331816 592.2284789 185.1331816 592.2284789 309.3266605 613.7284218 309.3266605 613.7284218 226.6370397 654.5386184 309.3266605 677.3998219 309.3266605 677.3998219 185.1331816 655.8978742 185.1331816 655.8978742 264.861487"/> <path d="M776.1862214,197.7665533c-3.5529548-4.6916824-8.2920841-7.9724296-14.2171653-9.8413506-5.9232991-1.8666935-13.2956246-2.7773191-22.1586318-2.7773191h-41.6441942v124.1458092h40.9852826c9.2154069,0,16.8064785-1.0473977,22.8614263-3.1439752,6.0565071-2.0947954,10.8392965-5.6040901,14.4376935-10.4779867,3.5529548-4.8743421,6.0549478-11.297728,7.4600913-19.2719396,1.4031387-7.9728751,2.1057104-17.3580219,2.1057104-29.56593,0-12.2096901-.7901148-22.233255-2.2828013-30.1602424-1.4909045-7.8815452-4.0365576-14.2136012-7.5474115-18.9070656ZM761.1789413,269.8396333c-.5693638,5.7408621-1.6223304,10.1603369-3.2025599,13.16754-1.5804523,3.0058666-3.8175887,4.9652265-6.7136366,5.8304099-2.8958252.8669655-6.7134139,1.3213873-11.4086603,1.3213873h-18.6495599v-83.3721446h18.6495599c4.6952465,0,8.5128351.501646,11.4086603,1.5036016,2.896048.9578499,5.1331843,2.9158732,6.7136366,5.7408621,1.5802295,2.8245434,2.6331961,6.8791442,3.2025599,12.0274759.5711458,5.1928829.8339977,12.0270304.8339977,20.5015515,0,9.7482387-.2628518,17.5402361-.8339977,23.2793162Z"/></svg>
      <canvas id="logo-scanline" aria-hidden="true"></canvas>
      </div>
    </div>
    <div class="header-section">
      <div class="toolbar-group">
        <label class="toolbar-item header-toggle tb-toggle" style="cursor:pointer;">
          <input type="radio" name="viewMode" id="view-full" checked>
          <span class="tb-val" style="font-size:11px;">FULL</span>
        </label>
        <label class="toolbar-item header-toggle tb-toggle" style="cursor:pointer;border-right:none;">
          <input type="radio" name="viewMode" id="view-split">
          <span class="tb-val" style="font-size:11px;">SPLIT</span>
        </label>
      </div>
      <div class="wall-iso-group">
        <button class="wall-iso-btn" id="iso-N" title="Isolate North wall">N</button>
        <button class="wall-iso-btn" id="iso-E" title="Isolate East wall">E</button>
        <button class="wall-iso-btn" id="iso-S" title="Isolate South wall">S</button>
        <button class="wall-iso-btn" id="iso-W" title="Isolate West wall">W</button>
      </div>
      <div class="toolbar-group">
        <label class="toolbar-item header-toggle tb-toggle" style="cursor:pointer;">
          <input type="checkbox" id="showSeams">
          <span class="tb-val" style="font-size:11px;">SEAMS</span>
        </label>
        <label class="toolbar-item header-toggle tb-toggle" style="cursor:pointer;border-right:none;">
          <input type="checkbox" id="showGuide">
          <span class="tb-val" style="font-size:11px;">GUIDE</span>
        </label>
      </div>
      <div class="render-params">
        <label class="render-param-label">LOOPS<input type="number" id="cycles" value="${state.cycles}" step="1" min="1"></label>
        <label class="render-param-label">SCALE<input type="number" id="exportScale" value="${state.exportScale}" step="0.1"></label>
        <label class="render-param-label">DUR<input type="number" id="duration" value="${state.duration}"><span class="render-param-unit">s</span></label>
      </div>
      <button id="btn-record" style="border-color:#ff3333; color:#ff3333; text-shadow:0 0 4px #ff3333; height:36px; padding:0 13px; font-size:11px;">▶ ALL WALLS</button>
      <button id="btn-record-walls" style="border-color:#ff00cc; color:#ff00cc; text-shadow:0 0 4px #ff00cc; height:36px; padding:0 13px; font-size:11px;">▶ WALLS</button>
      <button class="btn-wall-single" data-wall="N" style="border-color:#ff00cc; color:#ff00cc; text-shadow:0 0 4px #ff00cc; height:36px; padding:0 10px; font-size:11px;">▶ N</button>
      <button class="btn-wall-single" data-wall="E" style="border-color:#ff00cc; color:#ff00cc; text-shadow:0 0 4px #ff00cc; height:36px; padding:0 10px; font-size:11px;">▶ E</button>
      <button class="btn-wall-single" data-wall="S" style="border-color:#ff00cc; color:#ff00cc; text-shadow:0 0 4px #ff00cc; height:36px; padding:0 10px; font-size:11px;">▶ S</button>
      <button class="btn-wall-single" data-wall="W" style="border-color:#ff00cc; color:#ff00cc; text-shadow:0 0 4px #ff00cc; height:36px; padding:0 10px; font-size:11px;">▶ W</button>
      <button id="btn-theme" title="Toggle dark / light mode" style="height:36px; padding:0 10px; font-size:16px; border-color:var(--border-dim); box-shadow:none; text-shadow:none; opacity:0.8;">☀︎</button>
    </div>
  </div>

  <div id="palette-bar">
    <div style="display:flex; align-items:center; gap:8px; font-weight:bold; font-size:13px; width:100%;">
      <select id="paletteSelect" style="width:150px; font-weight:bold; font-size:12px;">
        <option value="custom">-- PALETTE --</option>
        <option value="silicon_forest">Silicon Forest</option>
        <option value="vaporwave">Vaporwave</option>
        <option value="cyberpunk">Cyberpunk</option>
      </select>
      <div class="v-divider" style="height:22px;"></div>
      <div id="palette-colors" style="display:flex; gap:6px;">
        ${[1,2,3,4,5].map(i => `<div style="display:flex; align-items:center; gap:3px;"><input type="color" id="pal-c${i}" value="#ffffff"><input type="text" id="pal-h${i}" class="val-input hex-input" maxlength="7" value="#ffffff" style="width:58px;"></div>`).join('')}
      </div>
      <div class="v-divider" style="height:22px;"></div>
      <button id="btn-apply-palette" style="border-color:#00ffcc; color:#00ffcc; text-shadow:0 0 5px #00ffcc;">🎲 SHUFFLE ALL</button>
    </div>
  </div>

  <div id="bottom-container">
      <div id="layer-stack">
         <div id="layer-stack-header">LAYER STACK</div>
         <div id="layer-list"></div>
      </div>

      <div id="effects-panel">
        <div class="category-headers">
          <button class="cat-btn cat-noise active" data-cat="sub-noise">[ NOISE ]</button>
          <button class="cat-btn cat-geo" data-cat="sub-geo">[ GEOMETRIC ]</button>
          <button class="cat-btn cat-elem" data-cat="sub-elem">[ ELEMENTS ]</button>
          <button class="cat-btn cat-post" data-cat="sub-post">[ MODIFIERS ]</button>
        </div>

        <div class="tab-headers active" id="sub-noise">
          <div class="tab-btn active" data-tab="tab-chrome"><input type="checkbox" id="l23-en" class="layer-toggle"> <span class="tab-name">Chrome Liquid</span></div>
          <div class="tab-btn" data-tab="tab-marble"><input type="checkbox" id="l11-en" class="layer-toggle"> <span class="tab-name">Marble</span></div>
          <div class="tab-btn" data-tab="tab-vnoise"><input type="checkbox" id="l12-en" class="layer-toggle"> <span class="tab-name">Pixels</span></div>
          <div class="tab-btn" data-tab="tab-plasma"><input type="checkbox" id="l1-en" class="layer-toggle"> <span class="tab-name">Plasma</span></div>
          <div class="tab-btn" data-tab="tab-fbm"><input type="checkbox" id="l10-en" class="layer-toggle"> <span class="tab-name">Smoke</span></div>
          <div class="tab-btn" data-tab="tab-voronoi"><input type="checkbox" id="l27-en" class="layer-toggle"> <span class="tab-name">Voronoi</span></div>
        </div>
        
        <div class="tab-headers" id="sub-geo">
          <div class="tab-btn" data-tab="tab-checker"><input type="checkbox" id="l19-en" class="layer-toggle"> <span class="tab-name">Checker</span></div>
          <div class="tab-btn" data-tab="tab-grid"><input type="checkbox" id="l2-en" class="layer-toggle"> <span class="tab-name">Grid</span></div>
          <div class="tab-btn" data-tab="tab-neon"><input type="checkbox" id="l29-en" class="layer-toggle"> <span class="tab-name">Neon Lightning</span></div>
          <div class="tab-btn" data-tab="tab-pulse"><input type="checkbox" id="l3-en" class="layer-toggle"> <span class="tab-name">Pulse</span></div>
          <div class="tab-btn" data-tab="tab-wavegrid"><input type="checkbox" id="l22-en" class="layer-toggle"> <span class="tab-name">Wave Grid</span></div>
          <div class="tab-btn" data-tab="tab-mandala"><input type="checkbox" id="l14-en" class="layer-toggle"> <span class="tab-name">Waveforms</span></div>
          <div class="tab-btn" data-tab="tab-wormhole"><input type="checkbox" id="l13-en" class="layer-toggle"> <span class="tab-name">Wormholes</span></div>
        </div>

        <div class="tab-headers" id="sub-elem">
          <div class="tab-btn" data-tab="tab-equi"><input type="checkbox" id="l21-en" class="layer-toggle"> <span class="tab-name">360 HDRI Pano</span></div>
          <div class="tab-btn" data-tab="tab-circles"><input type="checkbox" id="l20-en" class="layer-toggle"> <span class="tab-name">Circles</span></div>
          <div class="tab-btn" data-tab="tab-clock"><input type="checkbox" id="l30-en" class="layer-toggle"> <span class="tab-name">Clock</span></div>
          <div class="tab-btn" data-tab="tab-text"><input type="checkbox" id="l25-en" class="layer-toggle"> <span class="tab-name">Custom Text</span></div>
          <div class="tab-btn" data-tab="tab-gradient"><input type="checkbox" id="l4-en" class="layer-toggle"> <span class="tab-name">Gradient</span></div>
          <div class="tab-btn" data-tab="tab-lissajous"><input type="checkbox" id="l31-en" class="layer-toggle"> <span class="tab-name">Lissajous</span></div>
          <div class="tab-btn" data-tab="tab-particles"><input type="checkbox" id="l32-en" class="layer-toggle"> <span class="tab-name">Particles</span></div>
          <div class="tab-btn" data-tab="tab-rain"><input type="checkbox" id="l5-en" class="layer-toggle"> <span class="tab-name">Rain</span></div>
          <div class="tab-btn" data-tab="tab-scanline"><input type="checkbox" id="l7-en" class="layer-toggle"> <span class="tab-name">Scanlines</span></div>
          <div class="tab-btn" data-tab="tab-stars"><input type="checkbox" id="l6-en" class="layer-toggle"> <span class="tab-name">Stars</span></div>
          <div class="tab-btn" data-tab="tab-svg"><input type="checkbox" id="l8-en" class="layer-toggle"> <span class="tab-name">Image</span></div>
          <div class="tab-btn" data-tab="tab-vumeter"><input type="checkbox" id="l26-en" class="layer-toggle"> <span class="tab-name">VU Meter</span></div>
        </div>

        <div class="tab-headers" id="sub-post">
          <div class="tab-btn" data-tab="tab-crt"><input type="checkbox" id="l24-en" class="layer-toggle"> <span class="tab-name">CRT Screen</span></div>
          <div class="tab-btn" data-tab="tab-kaleido"><input type="checkbox" id="l15-en" class="layer-toggle"> <span class="tab-name">Kaleido</span></div>
          <div class="tab-btn" data-tab="tab-pixelate"><input type="checkbox" id="l33-en" class="layer-toggle"> <span class="tab-name">Pixelate</span></div>
          <div class="tab-btn" data-tab="tab-rgbsplit"><input type="checkbox" id="l34-en" class="layer-toggle"> <span class="tab-name">RGB Split</span></div>
          <div class="tab-btn" data-tab="tab-post"><span class="tab-name" style="color:var(--pink)">POST FX</span></div>
        </div>

        <div id="tab-plasma" class="tab-content">
          <div class="control-group"><h4>Master</h4>${getSlider('Opacity', 'l1-opacity', 0, 1, 0.01, 1)}<div class="ctrl-row">Blend ${getBlend('l1-blend')}</div>${getWalls('l1')}</div>
          <div class="control-group"><h4>Motion</h4>${getSlider('Scale', 'l1-scale', 0.1, 20, 0.1, 5)}${getSlider('Stretch', 'l1-stretch', 1, 20, 0.1, 5)}${getSlider('Speed', 'l1-motion', -5, 5, 0.1, 1)}${getSlider('Pan X', 'l1-panX', -0.5, 0.5, 0.001, 0)}</div>
          <div class="control-group"><h4>Look</h4>${getSlider('Contrast', 'l1-con', 0, 1, 0.01, 0.5)}${getSlider('Blur', 'l1-blur', 0, 1, 0.01, 0.1)}<div class="ctrl-row">Col A ${getCol('l1-colA')} Col B ${getCol('l1-colB')}</div>${getPalBtn('l1')}</div>
        </div>
        <div id="tab-chrome" class="tab-content active">
          <div class="control-group"><h4>Master</h4>${getSlider('Opacity', 'l23-opacity', 0, 1, 0.01, 1)}<div class="ctrl-row">Blend ${getBlend('l23-blend')}</div>${getWalls('l23')}</div>
          <div class="control-group"><h4>Distortion</h4>${getSlider('Size', 'l23-scale', 0.01, 1.0, 0.01, 0.5)}${getSlider('Bump', 'l23-depth', 0.0, 2.0, 0.01, 0.8)}${getSlider('Turbulence', 'l23-turb', 0.0, 1.0, 0.01, 0.1)}${getSlider('Speed Y', 'l23-speed', -5, 5, 0.1, 1)}${getSlider('Speed X', 'l23-speedX', -5, 5, 0.1, 0)}${getSlider('Pan X', 'l23-panX', -0.5, 0.5, 0.001, 0)}</div>
          <div class="control-group"><h4>Environment</h4><div style="display:flex; flex-direction:column; gap:5px;"><div class="ctrl-row">Sky ${getCol('l23-colTop')}</div><div class="ctrl-row">Horizon ${getCol('l23-colMid')}</div><div class="ctrl-row">Ground ${getCol('l23-colBot')}</div></div>${getPalBtn('l23')}</div>
        </div>
        
        <div id="tab-fbm" class="tab-content">
          <div class="control-group"><h4>Master</h4>${getSlider('Opacity', 'l10-opacity', 0, 1, 0.01, 1)}<div class="ctrl-row">Blend ${getBlend('l10-blend')}</div>${getWalls('l10')}</div>
          <div class="control-group"><h4>Masses</h4>${getSlider('Density', 'l10-density', 0.1, 20, 0.1, 5)}${getSlider('Size', 'l10-size', 0, 1, 0.01, 0.5)}${getSlider('Speed', 'l10-speed', -5, 5, 0.1, 1)}${getSlider('Pan X', 'l10-panX', -0.5, 0.5, 0.001, 0)}</div>
          <div class="control-group"><h4>Look</h4>${getSlider('Detail', 'l10-detail', 1, 10, 1, 5)}${getSlider('Blur', 'l10-blur', 0, 0.5, 0.01, 0.1)}<div class="ctrl-row">Col A ${getCol('l10-colA')} Col B ${getCol('l10-colB')}</div>${getPalBtn('l10')}</div>
        </div>
        <div id="tab-marble" class="tab-content">
          <div class="control-group"><h4>Master</h4>${getSlider('Opacity', 'l11-opacity', 0, 1, 0.01, 1)}<div class="ctrl-row">Blend ${getBlend('l11-blend')}</div>${getWalls('l11')}</div>
          <div class="control-group"><h4>Motion</h4>${getSlider('Scale', 'l11-scale', 0.1, 20, 0.1, 5)}${getSlider('Warp', 'l11-warp', 0, 10, 0.1, 4)}${getSlider('Speed', 'l11-speed', -5, 5, 0.1, 1)}${getSlider('Pan X', 'l11-panX', -0.5, 0.5, 0.001, 0)}</div>
          <div class="control-group"><h4>Colors</h4><div class="ctrl-row">Col A ${getCol('l11-colA')} Col B ${getCol('l11-colB')}</div>${getPalBtn('l11')}</div>
        </div>
        <div id="tab-vnoise" class="tab-content">
          <div class="control-group"><h4>Master</h4>${getSlider('Opacity', 'l12-opacity', 0, 1, 0.01, 1)}<div class="ctrl-row">Blend ${getBlend('l12-blend')}</div>${getWalls('l12')}</div>
          <div class="control-group"><h4>Grid & Size</h4>${getSlider('Density', 'l12-density', 1, 100, 1, 40)}${getSlider('Size', 'l12-size', 0, 1, 0.01, 0.5)}${getSlider('Speed', 'l12-speed', -10, 10, 0.1, 2)}${getSlider('Pan X', 'l12-panX', -0.5, 0.5, 0.001, 0)}</div>
          <div class="control-group"><h4>Look</h4>${getSlider('Blur', 'l12-blur', 0, 0.5, 0.01, 0)}<div class="ctrl-row">Col A ${getCol('l12-colA')} Col B ${getCol('l12-colB')}</div>${getPalBtn('l12')}</div>
        </div>

        <div id="tab-grid" class="tab-content">
          <div class="control-group"><h4>Master</h4>${getSlider('Opacity', 'l2-opacity', 0, 1, 0.01, 1)}<div class="ctrl-row">Blend ${getBlend('l2-blend')}</div>${getWalls('l2')}</div>
          <div class="control-group"><h4>Geo</h4>${getSlider('Density', 'l2-scale', 1, 100, 1, 50)}${getSlider('Skew', 'l2-rot', -5, 5, 1, 0)}${getSlider('Speed', 'l2-speed', -5, 5, 0.1, 1)}${getSlider('Pan X', 'l2-panX', -0.5, 0.5, 0.001, 0)}</div>
          <div class="control-group"><h4>Look</h4>${getSlider('Blur', 'l2-blur', 0, 0.5, 0.01, 0.01)}<div class="ctrl-row">Col ${getCol('l2-col')}</div>${getPalBtn('l2')}</div>
        </div>
        <div id="tab-pulse" class="tab-content">
          <div class="control-group"><h4>Master</h4>${getSlider('Opacity', 'l3-opacity', 0, 1, 0.01, 1)}<div class="ctrl-row">Blend ${getBlend('l3-blend')}</div>${getWalls('l3')}</div>
          <div class="control-group"><h4>Geo</h4>${getSlider('Freq', 'l3-freq', 1, 50, 1, 20)}${getSlider('Wave', 'l3-wave', 0, 10, 1, 3)}${getSlider('Speed', 'l3-speed', -5, 5, 0.1, 2)}${getSlider('Pan X', 'l3-panX', -0.5, 0.5, 0.001, 0)}</div>
          <div class="control-group"><h4>Look</h4>${getSlider('Blur', 'l3-blur', 0, 1, 0.01, 0.1)}<div class="ctrl-row">Col ${getCol('l3-col')}</div>${getPalBtn('l3')}</div>
        </div>
        <div id="tab-wormhole" class="tab-content">
          <div class="control-group"><h4>Master</h4>${getSlider('Opacity', 'l13-opacity', 0, 1, 0.01, 1)}<div class="ctrl-row">Blend ${getBlend('l13-blend')}</div>${getWalls('l13')}</div>
          <div class="control-group"><h4>Space</h4>${getSlider('Scale', 'l13-scale', 1, 50, 0.1, 10)}${getSlider('Speed', 'l13-speed', -10, 10, 0.1, 2)}${getSlider('Depth', 'l13-depth', 0.1, 5, 0.1, 2)}${getSlider('Pan X', 'l13-panX', -0.5, 0.5, 0.001, 0)}</div>
          <div class="control-group"><h4>Look</h4>${getSlider('Blur', 'l13-blur', 0, 0.5, 0.01, 0)}<div class="ctrl-row">Col A ${getCol('l13-colA')} Col B ${getCol('l13-colB')}</div>${getPalBtn('l13')}</div>
        </div>
        <div id="tab-mandala" class="tab-content">
          <div class="control-group"><h4>Master</h4>${getSlider('Opacity', 'l14-opacity', 0, 1, 0.01, 1)}<div class="ctrl-row">Blend ${getBlend('l14-blend')}</div>${getWalls('l14')}</div>
          <div class="control-group"><h4>Shape</h4>${getSlider('Complexity', 'l14-petals', 1, 20, 1, 3)}${getSlider('Size', 'l14-size', 0.1, 1, 0.01, 0.3)}${getSlider('Speed', 'l14-speed', -5, 5, 0.1, 1)}${getSlider('Pan X', 'l14-panX', -0.5, 0.5, 0.001, 0)}</div>
          <div class="control-group"><h4>Look</h4>${getSlider('Thick', 'l14-thick', 0.001, 0.1, 0.001, 0.02)}${getSlider('Blur', 'l14-blur', 0, 0.1, 0.001, 0)}<div class="ctrl-row">Col ${getCol('l14-col')}</div>${getPalBtn('l14')}</div>
        </div>
        <div id="tab-checker" class="tab-content">
          <div class="control-group"><h4>Master</h4>${getSlider('Opacity', 'l19-opacity', 0, 1, 0.01, 1)}<div class="ctrl-row">Blend ${getBlend('l19-blend')}</div>${getWalls('l19')}</div>
          <div class="control-group"><h4>Bounds</h4>${getSlider('Top Edge', 'l19-topEdge', 0, 1.0, 0.01, 1.0)}${getSlider('Bot Edge', 'l19-botEdge', 0, 1.0, 0.01, 0.0)}${getSlider('Squeeze', 'l19-squeeze', -5.0, 5.0, 0.1, 0)}</div>
          <div class="control-group"><h4>Transform</h4>${getSlider('Density', 'l19-scale', 0.1, 20, 0.1, 10)}${getSlider('Skew', 'l19-skew', -10, 10, 1, 0)}${getSlider('Speed X', 'l19-speedX', -5, 5, 0.1, 0)}${getSlider('Speed Y', 'l19-speed', -5, 5, 0.1, 0)}${getSlider('Pan X', 'l19-panX', -0.5, 0.5, 0.001, 0)}${getSlider('Pan Y', 'l19-panY', -0.5, 0.5, 0.001, 0)}</div>
          <div class="control-group"><h4>Mask & Colors</h4>${getSlider('Crop Top', 'l19-cropT', 0, 1.0, 0.01, 0)}${getSlider('Crop Bot', 'l19-cropB', 0, 1.0, 0.01, 0)}<div class="ctrl-row">Col A ${getCol('l19-colA')} Col B ${getCol('l19-colB')}</div>${getPalBtn('l19')}</div>
        </div>
        <div id="tab-wavegrid" class="tab-content">
          <div class="control-group"><h4>Master</h4>${getSlider('Opacity', 'l22-opacity', 0, 1, 0.01, 1)}<div class="ctrl-row">Blend ${getBlend('l22-blend')}</div>${getWalls('l22')}</div>
          <div class="control-group"><h4>Bounds & Squeeze</h4>${getSlider('Top Edge', 'l22-topEdge', 0, 1.0, 0.01, 1.0)}${getSlider('Bot Edge', 'l22-botEdge', 0, 1.0, 0.01, 0.0)}${getSlider('Squeeze', 'l22-squeeze', -5.0, 5.0, 0.1, 0.0)}${getSlider('Taper', 'l22-taper', 0.0, 1.0, 0.01, 0.9)}</div>
          <div class="control-group"><h4>Grid</h4>${getSlider('Count X', 'l22-countX', 0, 100, 1, 0)}${getSlider('Count Y', 'l22-countY', 1, 100, 1, 15)}${getSlider('Thick', 'l22-thick', 0.001, 0.2, 0.001, 0.05)}${getSlider('Pan Y', 'l22-panY', -0.5, 0.5, 0.001, 0)}</div>
          <div class="control-group"><h4>Wave & Motion</h4>${getSlider('Amp', 'l22-amp', 0, 1, 0.01, 0.1)}${getSlider('Freq', 'l22-freq', 1, 20, 1, 5)}${getSlider('Speed', 'l22-speed', -5, 5, 0.1, 1)}${getSlider('Pan X', 'l22-panX', -0.5, 0.5, 0.001, 0)}</div>
          <div class="control-group"><h4>Look</h4>${getSlider('Blur', 'l22-blur', 0, 0.5, 0.01, 0.01)}<div class="ctrl-row">Col ${getCol('l22-col')}</div>${getPalBtn('l22')}</div>
        </div>

        <div id="tab-gradient" class="tab-content">
          <div class="control-group"><h4>Master</h4>${getSlider('Opacity', 'l4-opacity', 0, 1, 0.01, 1)}<div class="ctrl-row">Blend ${getBlend('l4-blend')}</div>${getWalls('l4')}</div>
          <div class="control-group"><h4>Transform</h4>${getSlider('Rotation', 'l4-rot', 0, 360, 1, 0)}${getSlider('Repeat', 'l4-repeat', 1, 16, 1, 1)}${getSlider('Pan X', 'l4-panX', -0.5, 0.5, 0.001, 0)}</div>
          <div class="control-group"><h4>Colors</h4><div style="display:flex; flex-direction:column; gap:5px;">${getCol('l4-col1')} ${getCol('l4-col2')} ${getCol('l4-col3')}</div>${getPalBtn('l4')}</div>
        </div>
        <div id="tab-rain" class="tab-content">
          <div class="control-group"><h4>Master</h4>${getSlider('Opacity', 'l5-opacity', 0, 1, 0.01, 1)}<div class="ctrl-row">Blend ${getBlend('l5-blend')}</div>${getWalls('l5')}</div>
          <div class="control-group"><h4>Geo</h4>${getSlider('Density', 'l5-density', 1, 100, 1, 50)}${getSlider('Skew', 'l5-rot', -5, 5, 1, 0)}${getSlider('Speed', 'l5-speed', -5, 5, 0.1, 2)}${getSlider('Pan X', 'l5-panX', -0.5, 0.5, 0.001, 0)}</div>
          <div class="control-group"><h4>Look</h4>${getSlider('Width', 'l5-width', 1, 200, 1, 50)}${getSlider('Length', 'l5-length', 0.1, 10, 0.1, 1)}${getSlider('Blur', 'l5-blur', 0, 0.5, 0.01, 0.02)}<div class="ctrl-row">Col ${getCol('l5-col')}</div>${getPalBtn('l5')}</div>
        </div>
        <div id="tab-stars" class="tab-content">
          <div class="control-group"><h4>Master</h4>${getSlider('Opacity', 'l6-opacity', 0, 1, 0.01, 1)}<div class="ctrl-row">Blend ${getBlend('l6-blend')}</div>${getWalls('l6')}</div>
          <div class="control-group"><h4>Space</h4>${getSlider('Scale', 'l6-scale', 1, 100, 1, 20)}${getSlider('Twinkle', 'l6-twinkle', 0, 10, 0.1, 5)}${getSlider('Pan X', 'l6-panX', -0.5, 0.5, 0.001, 0)}${getSlider('Blur', 'l6-blur', 0, 0.5, 0.01, 0.05)}</div>
          <div class="control-group"><h4>Color</h4>${getSlider('Rand Col', 'l6-colRand', 0, 1, 0.01, 0)}<div class="ctrl-row">Col ${getCol('l6-col')}</div>${getPalBtn('l6')}</div>
        </div>
        <div id="tab-scanline" class="tab-content">
          <div class="control-group"><h4>Master</h4>${getSlider('Opacity', 'l7-opacity', 0, 1, 0.01, 1)}<div class="ctrl-row">Blend ${getBlend('l7-blend')}</div>${getWalls('l7')}</div>
          <div class="control-group"><h4>Geo</h4>${getSlider('Density', 'l7-density', 1, 200, 1, 100)}${getSlider('Speed', 'l7-speed', -10, 10, 0.1, 1)}${getSlider('Pan X', 'l7-panX', -0.5, 0.5, 0.001, 0)}${getSlider('Blur', 'l7-blur', 0, 0.5, 0.01, 0.01)}</div>
          <div class="control-group"><h4>Color</h4><div class="ctrl-row">Col ${getCol('l7-col')}</div>${getPalBtn('l7')}</div>
        </div>
        <div id="tab-svg" class="tab-content">
          <div class="control-group"><h4>Master</h4>${getSlider('Opacity', 'l8-opacity', 0, 1, 0.01, 1)}<div class="ctrl-row">Blend ${getBlend('l8-blend')}</div>${getWalls('l8')}</div>
          <div class="control-group" style="flex:1;min-width:260px;max-width:400px;">
            <h4>Images</h4>
            <div style="display:flex;align-items:center;gap:5px;flex-wrap:nowrap;">
              <div id="l8-thumb-row"></div>
              <button id="l8-add-btn" title="Upload images">+</button>
              <input type="file" id="l8-upload" accept=".svg,.png,.jpg,.jpeg" multiple style="display:none;">
            </div>
            <div id="l8-none-hint">Click + to upload images (SVG / PNG / JPG)</div>
            <div id="l8-img-controls" style="display:none;">
              <label>Scale</label><input type="range" id="l8c-scale" min="0.05" max="3" step="0.01"><input type="number" id="l8c-scale-n" class="val-input">
              <label>Pan X</label><input type="range" id="l8c-panx" min="-0.5" max="0.5" step="0.001"><input type="number" id="l8c-panx-n" class="val-input">
              <label>Pos Y</label><input type="range" id="l8c-posy" min="-0.5" max="0.5" step="0.001"><input type="number" id="l8c-posy-n" class="val-input">
              <label>Opacity</label><input type="range" id="l8c-opacity" min="0" max="1" step="0.01"><input type="number" id="l8c-opacity-n" class="val-input">
            </div>
            <div id="l8-tint-row" style="display:none;margin-top:8px;">
              <div class="ctrl-row"><span style="font-size:10px;color:var(--text-dim);">Tint</span>${getCol('l8-itint')}<span style="font-size:10px;color:var(--text-dim);margin-left:8px;">Blend</span>${getBlend('l8-iblend')}</div>
            </div>
          </div>
        </div>
        <div id="tab-equi" class="tab-content">
          <div class="control-group"><h4>Master</h4>${getSlider('Opacity', 'l21-opacity', 0, 1, 0.01, 1)}<div class="ctrl-row">Blend ${getBlend('l21-blend')}</div>${getWalls('l21')}</div>
          <div class="control-group"><h4>Environment</h4>${getSlider('Zoom', 'l21-scale', 0.1, 3.0, 0.01, 1.0)}${getSlider('Tilt Y', 'l21-posY', -0.5, 0.5, 0.001, 0)}${getSlider('Pan X', 'l21-panX', -0.5, 0.5, 0.001, 0)}${getSlider('Spin Speed', 'l21-speed', -2, 2, 0.01, 0)}</div>
          <div class="control-group"><h4>Look</h4>${getSlider('Blur', 'l21-blur', 0, 1, 0.01, 0)}<div class="ctrl-row">Tint ${getCol('l21-col')}</div><input type="file" id="l21-upload" accept=".jpg, .jpeg, .png">${getPalBtn('l21')}</div>
        </div>
        <div id="tab-circles" class="tab-content">
          <div class="control-group"><h4>Master</h4>${getSlider('Opacity', 'l20-opacity', 0, 1, 0.01, 1)}<div class="ctrl-row">Blend ${getBlend('l20-blend')}</div>${getWalls('l20')}</div>
          <div class="control-group"><h4>Shape</h4>${getSlider('Density', 'l20-density', 0.001, 10, 0.001, 2.0)}${getSlider('Size', 'l20-size', 0.1, 1.0, 0.01, 0.5)}${getSlider('Speed', 'l20-speed', -5, 5, 0.1, 2)}${getSlider('Pan X', 'l20-panX', -0.5, 0.5, 0.001, 0)}</div>
          <div class="control-group"><h4>Look</h4>${getSlider('Blur', 'l20-blur', 0, 0.5, 0.01, 0.01)}${getSlider('Rand Col', 'l20-colRand', 0, 1, 0.01, 0)}<div class="ctrl-row">Col ${getCol('l20-col')}</div>${getPalBtn('l20')}</div>
        </div>

        <div id="tab-text" class="tab-content">
          <div class="control-group"><h4>Master</h4>${getSlider('Opacity', 'l25-opacity', 0, 1, 0.01, 1)}<div class="ctrl-row">Blend ${getBlend('l25-blend')}</div>${getWalls('l25')}</div>
          <div class="control-group" style="min-width:320px;"><h4>Text Content</h4>
            <div class="ctrl-row" style="flex-direction:column; align-items:flex-start; gap:8px;">
              <label style="font-size:13px;">Text (use | for line break)</label>
              <textarea id="l25-text" rows="3" style="width:100%; background:#000; border:1px solid var(--amber); color:var(--amber); font-family:inherit; font-size:14px; padding:6px; resize:vertical; text-shadow:none;">RETRO MASTER LOOP</textarea>
            </div>
            <div class="ctrl-row">Font <select id="l25-font" style="font-size:14px; max-width:200px;"></select></div>
            <div class="ctrl-row">Style <select id="l25-fontStyle"><option value="normal">Normal</option><option value="bold">Bold</option><option value="italic">Italic</option><option value="bold italic">Bold Italic</option></select></div>
            <div class="ctrl-row">Align <select id="l25-align"><option value="center">Center</option><option value="left">Left</option><option value="right">Right</option></select></div>
            <div class="ctrl-row">Text Color ${getCol('l25-col')}</div>
          </div>
          <div class="control-group"><h4>Layout & Motion</h4>
            ${getSlider('Size', 'l25-size', 0.01, 0.8, 0.01, 0.15)}
            ${getSlider('Pos Y', 'l25-posY', 0, 1, 0.01, 0.5)}
            ${getSlider('Pan X', 'l25-panX', -0.5, 0.5, 0.001, 0)}
            ${getSlider('Scroll Speed', 'l25-scrollSpeed', -5, 5, 0.01, 1)}
            ${getSlider('Tracking', 'l25-tracking', -0.2, 1.0, 0.01, 0)}
            ${getSlider('Line Spacing', 'l25-lineSpacing', 0.5, 3.0, 0.05, 1.2)}
          </div>
          <div class="control-group"><h4>Distortion</h4>
            ${getSlider('Wave Amp', 'l25-waveAmp', 0, 0.3, 0.005, 0)}
            ${getSlider('Wave Freq', 'l25-waveFreq', 0.1, 20, 0.1, 3)}
            ${getSlider('Wave Speed', 'l25-waveSpeed', -5, 5, 0.1, 1)}
            ${getSlider('Skew X', 'l25-skewX', -1, 1, 0.01, 0)}
            ${getSlider('Glitch', 'l25-glitch', 0, 1, 0.01, 0)}
            ${getSlider('Outline', 'l25-outline', 0, 20, 0.5, 0)}
            ${getSlider('Shadow', 'l25-shadow', 0, 30, 1, 0)}
          </div>
        </div>

        <div id="tab-vumeter" class="tab-content">
          <div class="control-group"><h4>Master</h4>${getSlider('Opacity', 'l26-opacity', 0, 1, 0.01, 1)}<div class="ctrl-row">Blend ${getBlend('l26-blend')}</div>${getWalls('l26')}</div>
          <div class="control-group"><h4>Bar Shape</h4>
            ${getSlider('Bar Width', 'l26-barW', 1, 60, 1, 8)}
            ${getSlider('Bar Gap', 'l26-barGap', 0, 30, 1, 2)}
            ${getSlider('H-Bar Count', 'l26-hBars', 0, 32, 1, 8)}
            ${getSlider('H-Bar Height', 'l26-hBarH', 1, 20, 1, 2)}
            ${getSlider('Top Edge', 'l26-topEdge', 0.01, 1.0, 0.01, 1.0)}
            ${getSlider('Bot Edge', 'l26-botEdge', 0, 0.99, 0.01, 0.0)}
            ${getSlider('Squeeze', 'l26-squeeze', 0, 1, 0.01, 0.5)}
          </div>
          <div class="control-group"><h4>Animation & Noise</h4>
            ${getSlider('Noise Amt', 'l26-noiseAmt', 0, 1, 0.01, 0.8)}
            ${getSlider('Noise Speed', 'l26-noiseSpeed', 0.1, 20, 0.1, 3)}
            ${getSlider('Glow', 'l26-glowAmt', 0, 1, 0.01, 0.6)}
          </div>
          <div class="control-group"><h4>Colors</h4>
            <div class="ctrl-row" style="margin-bottom:5px;"><label style="cursor:pointer; display:flex; align-items:center; gap:8px;"><input type="checkbox" id="l26-gradient" style="appearance:none; width:18px; height:18px; border:2px solid var(--border); cursor:pointer; position:relative;"> Smooth Gradient</label></div>
            <div class="ctrl-row">Bot Col ${getCol('l26-colBot')}</div>
            <div class="ctrl-row">Mid Col ${getCol('l26-colMid')}</div>
            <div class="ctrl-row">Top Col ${getCol('l26-colTop')}</div>
            ${getPalBtn('l26')}
          </div>
        </div>

        <div id="tab-voronoi" class="tab-content">
          <div class="control-group"><h4>Master</h4>${getSlider('Opacity', 'l27-opacity', 0, 1, 0.01, 1)}<div class="ctrl-row">Blend ${getBlend('l27-blend')}</div>${getWalls('l27')}</div>
          <div class="control-group"><h4>Pattern</h4>${getSlider('Density', 'l27-density', 0.5, 40, 0.5, 10)}${getSlider('Size', 'l27-size', 0, 1, 0.01, 0.3)}${getSlider('Speed', 'l27-speed', -5, 5, 0.1, 1)}${getSlider('Pan X', 'l27-panX', -0.5, 0.5, 0.001, 0)}</div>
          <div class="control-group"><h4>Look</h4>${getSlider('Choke', 'l27-choke', 0, 1, 0.01, 0)}${getSlider('Blur', 'l27-blur', 0, 0.3, 0.01, 0.05)}<div class="ctrl-row">Col A ${getCol('l27-colA')} Col B ${getCol('l27-colB')}</div>${getPalBtn('l27')}</div>
        </div>

        <div id="tab-neon" class="tab-content">
          <div class="control-group"><h4>Master</h4>${getSlider('Opacity', 'l29-opacity', 0, 1, 0.01, 1)}<div class="ctrl-row">Blend ${getBlend('l29-blend')}</div>${getWalls('l29')}</div>
          <div class="control-group"><h4>Lightning</h4>${getSlider('Count', 'l29-density', 1, 20, 1, 5)}${getSlider('Thickness', 'l29-thick', 0.001, 0.05, 0.001, 0.012)}${getSlider('Chaos', 'l29-chaos', 0, 1, 0.01, 0.5)}${getSlider('Speed', 'l29-speed', 0.1, 10, 0.1, 2)}${getSlider('Pan X', 'l29-panX', -0.5, 0.5, 0.001, 0)}</div>
          <div class="control-group"><h4>Look</h4>${getSlider('Glow', 'l29-glow', 0, 2, 0.01, 0.6)}<div class="ctrl-row">Color ${getCol('l29-col')}</div>${getPalBtn('l29')}</div>
        </div>

        <div id="tab-clock" class="tab-content">
          <div class="control-group"><h4>Master</h4>${getSlider('Opacity', 'l30-opacity', 0, 1, 0.01, 1)}<div class="ctrl-row">Blend ${getBlend('l30-blend')}</div>${getWalls('l30')}</div>
          <div class="control-group"><h4>Display</h4>
            ${getSlider('Size', 'l30-size', 0.02, 0.5, 0.01, 0.12)}
            ${getSlider('Pos X', 'l30-posX', 0, 1, 0.01, 0.5)}
            ${getSlider('Pos Y', 'l30-posY', 0, 1, 0.01, 0.5)}
            <div class="ctrl-row"><label>Show Date <input type="checkbox" id="l30-showDate" class="layer-toggle" style="width:18px;height:18px;"></label></div>
            <div class="ctrl-row"><label>Show Frames <input type="checkbox" id="l30-showFrames" class="layer-toggle" style="width:18px;height:18px;"></label></div>
          </div>
          <div class="control-group"><h4>Colors</h4><div class="ctrl-row">Color ${getCol('l30-col')}</div>${getPalBtn('l30')}</div>
        </div>

        <div id="tab-lissajous" class="tab-content">
          <div class="control-group"><h4>Master</h4>${getSlider('Opacity', 'l31-opacity', 0, 1, 0.01, 1)}<div class="ctrl-row">Blend ${getBlend('l31-blend')}</div>${getWalls('l31')}</div>
          <div class="control-group"><h4>Pattern</h4>
            ${getSlider('Freq X', 'l31-freqX', 1, 12, 1, 3)}
            ${getSlider('Freq Y', 'l31-freqY', 1, 12, 1, 2)}
            ${getSlider('Phase', 'l31-phase', 0, 1, 0.01, 0)}
            ${getSlider('Speed', 'l31-speed', -5, 5, 0.1, 1)}
          </div>
          <div class="control-group"><h4>Look</h4>
            ${getSlider('Trail', 'l31-trails', 0.5, 0.999, 0.001, 0.92)}
            ${getSlider('Thickness', 'l31-thick', 1, 8, 1, 2)}
            <div class="ctrl-row">Color ${getCol('l31-col')}</div>
            ${getPalBtn('l31')}
          </div>
        </div>

        <div id="tab-particles" class="tab-content">
          <div class="control-group"><h4>Master</h4>${getSlider('Opacity', 'l32-opacity', 0, 1, 0.01, 1)}<div class="ctrl-row">Blend ${getBlend('l32-blend')}</div>${getWalls('l32')}</div>
          <div class="control-group"><h4>Emission</h4>
            ${getSlider('Count', 'l32-count', 5, 2000, 1, 200)}
            ${getSlider('Emit X', 'l32-emitX', 0, 1, 0.01, 0.5)}
            ${getSlider('Emit Y', 'l32-emitY', 0, 1, 0.01, 0.5)}
            ${getSlider('Spread', 'l32-spread', 0.001, 1, 0.001, 0.5)}
            ${getSlider('Burst', 'l32-burst', 0, 1, 0.01, 0)}
          </div>
          <div class="control-group"><h4>Motion</h4>
            ${getSlider('Speed', 'l32-speed', 0, 15, 0.1, 1.5)}
            ${getSlider('Gravity', 'l32-gravity', -5, 5, 0.05, 0.3)}
            ${getSlider('Turbulence', 'l32-turbulence', 0, 5, 0.1, 0)}
            ${getSlider('Spin', 'l32-spin', -5, 5, 0.1, 0)}
            ${getSlider('Lifespan', 'l32-lifespan', 0.1, 3, 0.05, 1.0)}
          </div>
          <div class="control-group"><h4>Appearance</h4>
            ${getSlider('Size', 'l32-size', 1, 30, 0.5, 3)}
            ${getSlider('Size Random', 'l32-sizeRand', 0, 1, 0.01, 0.5)}
            ${getSlider('Trail', 'l32-trails', 0.5, 0.999, 0.001, 0.93)}
            ${getSlider('Glow', 'l32-glow', 0, 3, 0.05, 0.5)}
          </div>
          <div class="control-group"><h4>Colors</h4>
            <div class="ctrl-row">Birth Col ${getCol('l32-col')}</div>
            <div class="ctrl-row">Death Col ${getCol('l32-colB')}</div>
            ${getPalBtn('l32')}
          </div>
        </div>

        <div id="tab-pixelate" class="tab-content">
          <div class="control-group"><h4>Master</h4><label style="display:flex; justify-content:space-between;">Enable <input type="checkbox" id="l33-en"></label>${getWalls('l33')}</div>
          <div class="control-group"><h4>Pixel Grid</h4>${getSlider('Pixel Size', 'l33-amount', 1, 300, 1, 80)}${getSlider('Aspect', 'l33-aspect', 0.25, 4, 0.05, 1)}</div>
        </div>

        <div id="tab-rgbsplit" class="tab-content">
          <div class="control-group"><h4>Master</h4><label style="display:flex; justify-content:space-between;">Enable <input type="checkbox" id="l34-en"></label>${getWalls('l34')}</div>
          <div class="control-group"><h4>Split</h4>${getSlider('Amount', 'l34-amount', 0, 0.05, 0.001, 0.008)}${getSlider('Angle', 'l34-angle', 0, 360, 1, 0)}</div>
        </div>


        <div id="tab-kaleido" class="tab-content">
          <div class="control-group"><h4>Global Modifier</h4><p style="font-size:13px; color:#888;">Folds underlying layers.</p>${getWalls('l15')}</div>
          <div class="control-group"><h4>Shape</h4>${getSlider('Segments', 'l15-segments', 2, 24, 1, 6)}${getSlider('Spin', 'l15-speed', -2, 2, 0.1, 1)}${getSlider('Zoom', 'l15-zoom', 0.1, 5.0, 0.1, 1.0)}${getSlider('Pan X', 'l15-offX', -1.0, 1.0, 0.01, 0)}${getSlider('Pan Y', 'l15-offY', -1.0, 1.0, 0.01, 0)}</div>
        </div>
        <div id="tab-crt" class="tab-content">
          <div class="control-group"><h4>Master</h4><label style="display:flex; justify-content:space-between;">Enable <input type="checkbox" id="l24-en"></label>${getWalls('l24')}</div>
          <div class="control-group"><h4>Grid</h4>${getSlider('Density', 'l24-density', 10, 2000, 1, 800)}${getSlider('Intensity', 'l24-intensity', 0, 2, 0.01, 1.0)}${getSlider('Skew', 'l24-skew', -5, 5, 0.01, 0.0)}</div>
        </div>
        <div id="tab-post" class="tab-content">
          <div class="control-group"><h4>Chroma Aberration</h4><label style="display:flex; justify-content:space-between;">Enable <input type="checkbox" id="l16-en"></label>${getWalls('l16')}${getSlider('Amount', 'l16-amount', 0, 0.2, 0.001, 0.05)}</div>
          <div class="v-divider"></div>
          <div class="control-group"><h4>Pixel Melt</h4><label style="display:flex; justify-content:space-between;">Enable <input type="checkbox" id="l17-en"></label>${getWalls('l17')}${getSlider('Scale', 'l17-scale', 1, 500, 1, 100)}${getSlider('Amount', 'l17-amount', 0, 0.5, 0.01, 0.1)}${getSlider('Speed', 'l17-speed', 0, 5, 0.1, 1)}</div>
          <div class="v-divider"></div>
          <div class="control-group"><h4>Halftone Print</h4><label style="display:flex; justify-content:space-between;">Enable <input type="checkbox" id="l18-en"></label>${getWalls('l18')}${getSlider('Scale', 'l18-scale', 10, 500, 1, 10)}${getSlider('Contrast', 'l18-amount', 0.1, 2.0, 0.1, 1.0)}<div class="ctrl-row">Col ${getCol('l18-col')}</div>${getPalBtn('l18')}</div>
        </div>
      </div>
  </div>
  
  <div id="canvas-wrapper">
    <div id="no-effect-msg">
      <div class="idle-wall-block" data-wall="N">
        <div class="idle-top-label">SYSTEM IDLE</div>
        <div class="idle-bottom-label">ENABLE MODULE</div>
        <canvas class="idle-liss-canvas" width="120" height="68"></canvas>
      </div>
      <div class="idle-wall-block" data-wall="E">
        <div class="idle-top-label">SYSTEM IDLE</div>
        <div class="idle-bottom-label">ENABLE MODULE</div>
        <canvas class="idle-liss-canvas" width="120" height="68"></canvas>
      </div>
      <div class="idle-wall-block" data-wall="S">
        <div class="idle-top-label">SYSTEM IDLE</div>
        <div class="idle-bottom-label">ENABLE MODULE</div>
        <canvas class="idle-liss-canvas" width="120" height="68"></canvas>
      </div>
      <div class="idle-wall-block" data-wall="W">
        <div class="idle-top-label">SYSTEM IDLE</div>
        <div class="idle-bottom-label">ENABLE MODULE</div>
        <canvas class="idle-liss-canvas" width="120" height="68"></canvas>
      </div>
    </div>
    <div id="split-labels-top" class="wall-labels" style="display:none; width: 100%;"><div class="label-box" style="width: 43.1%;">[ NORTH ]</div><div class="label-box" style="width: 56.9%;">[ EAST ]</div></div>
    <div id="canvas-holder"><canvas id="guide-overlay-canvas"></canvas></div>
    <div id="wall-labels-full" class="wall-labels" style="width: 100%;"><div class="label-box" style="width: 21.5%;">[ NORTH ]</div><div class="label-box" style="width: 28.5%;">[ EAST ]</div><div class="label-box" style="width: 21.5%;">[ SOUTH ]</div><div class="label-box" style="width: 28.5%;">[ WEST ]</div></div>
    <div id="iso-wall-label" class="wall-labels" style="display:none; width: 100%; justify-content:center;"><div class="label-box" style="border-left:none; width:100%; text-align:center;"></div></div>
    <div id="split-labels-bottom" class="wall-labels" style="display:none; width: 100%;"><div class="label-box" style="width: 43.1%;">[ SOUTH ]</div><div class="label-box" style="width: 56.9%;">[ WEST ]</div></div>
  </div>
`;

// --- ENGINE & RENDER TARGETS ---
const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(-SPECS.width/SPECS.height/2, SPECS.width/SPECS.height/2, 0.5, -0.5, 0.1, 100);
camera.position.z = 1;
const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
document.getElementById('canvas-holder').appendChild(renderer.domElement);

const renderTarget = new THREE.WebGLRenderTarget(1024, 1024, { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, format: THREE.RGBAFormat });
const postScene = new THREE.Scene();
const postCamera = new THREE.OrthographicCamera(-0.5, 0.5, 0.5, -0.5, 0.1, 100);
postCamera.position.z = 1;

let l8Texture = new THREE.Texture(); 
let l21Texture = new THREE.Texture();

// --- L25 TEXT CANVAS TEXTURE ---
const l25Canvas = document.createElement('canvas');
l25Canvas.width = 4096; l25Canvas.height = Math.round(4096 / ASPECT);
const l25Ctx = l25Canvas.getContext('2d');
const l25Texture = new THREE.CanvasTexture(l25Canvas);
l25Texture.wrapS = THREE.RepeatWrapping; l25Texture.minFilter = THREE.LinearFilter;

// --- L26 VU METER CANVAS TEXTURE ---
const l26Canvas = document.createElement('canvas');
l26Canvas.width = 4096; l26Canvas.height = Math.round(4096 / ASPECT);
const l26Ctx = l26Canvas.getContext('2d');
const l26Texture = new THREE.CanvasTexture(l26Canvas);
l26Texture.minFilter = THREE.LinearFilter;

// --- L30 CLOCK CANVAS ---
const l30Canvas = document.createElement('canvas');
l30Canvas.width = 4096; l30Canvas.height = Math.round(4096 / ASPECT);
const l30Ctx = l30Canvas.getContext('2d');
const l30Texture = new THREE.CanvasTexture(l30Canvas);
l30Texture.minFilter = THREE.LinearFilter;

// --- L31 LISSAJOUS CANVAS ---
const l31Canvas = document.createElement('canvas');
l31Canvas.width = 2048; l31Canvas.height = Math.round(2048 / ASPECT);
const l31Ctx = l31Canvas.getContext('2d');
const l31Texture = new THREE.CanvasTexture(l31Canvas);
l31Texture.minFilter = THREE.LinearFilter;

// --- L32 PARTICLES CANVAS ---
const l32Canvas = document.createElement('canvas');
l32Canvas.width = 2048; l32Canvas.height = Math.round(2048 / ASPECT);
const l32Ctx = l32Canvas.getContext('2d');
const l32Texture = new THREE.CanvasTexture(l32Canvas);
l32Texture.minFilter = THREE.LinearFilter;

// Particle state
let particles = [];
let lastParticleCount = 0;

function drawClock(p) {
    const cw = l30Canvas.width, ch = l30Canvas.height;
    l30Ctx.clearRect(0, 0, cw, ch);
    if (!state.l30_en) return;
    const col = state.l30_col || '#00ff44';
    const sizePx = Math.round(state.l30_size * ch);
    const cx = state.l30_posX * cw;
    const cy = state.l30_posY * ch;
    const now = new Date();
    const hh = String(now.getHours()).padStart(2,'0');
    const mm = String(now.getMinutes()).padStart(2,'0');
    const ss = String(now.getSeconds()).padStart(2,'0');
    const ms = String(Math.floor(now.getMilliseconds() / 10)).padStart(2,'0');
    let lines = [`${hh}:${mm}:${ss}.${ms}`];
    if (state.l30_showDate) lines.unshift(now.toLocaleDateString('en-US', {year:'numeric',month:'2-digit',day:'2-digit'}));
    if (state.l30_showFrames) lines.push(`P:${p.toFixed(4)}`);
    l30Ctx.font = `bold ${sizePx}px 'Courier New', monospace`;
    l30Ctx.textAlign = 'center';
    l30Ctx.textBaseline = 'middle';
    l30Ctx.fillStyle = col;
    l30Ctx.shadowColor = col;
    l30Ctx.shadowBlur = sizePx * 0.3;
    const lineH = sizePx * 1.3;
    const totalH = lines.length * lineH;
    lines.forEach((line, i) => {
        l30Ctx.fillText(line, cx, cy - totalH/2 + i * lineH + lineH/2);
    });
    l30Texture.needsUpdate = true;
}

let l31Phase = 0;
function drawLissajous(dt) {
    const cw = l31Canvas.width, ch = l31Canvas.height;
    // Trail fade
    l31Ctx.fillStyle = `rgba(0,0,0,${1 - state.l31_trails})`;
    l31Ctx.fillRect(0, 0, cw, ch);
    if (!state.l31_en) { l31Texture.needsUpdate = true; return; }
    l31Phase += dt * state.l31_speed * Math.PI;
    const col = state.l31_col || '#ff00ff';
    const freqX = Math.round(state.l31_freqX);
    const freqY = Math.round(state.l31_freqY);
    const phase = state.l31_phase * Math.PI * 2 + l31Phase;
    const rx = cw * 0.44;
    const ry = ch * 0.44;
    const cx2 = cw / 2, cy2 = ch / 2;
    const steps = 600;
    l31Ctx.beginPath();
    l31Ctx.strokeStyle = col;
    l31Ctx.shadowColor = col;
    l31Ctx.shadowBlur = 8;
    l31Ctx.lineWidth = state.l31_thick;
    l31Ctx.lineCap = 'round';
    for (let i = 0; i <= steps; i++) {
        const t = (i / steps) * Math.PI * 2;
        const x = cx2 + rx * Math.sin(freqX * t + phase);
        const y = cy2 + ry * Math.sin(freqY * t);
        if (i === 0) l31Ctx.moveTo(x, y); else l31Ctx.lineTo(x, y);
    }
    l31Ctx.stroke();
    l31Texture.needsUpdate = true;
}

function hexToRgb(hex) {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return [r,g,b];
}
function lerpColor(hexA, hexB, t) {
    const a = hexToRgb(hexA || '#ffb000'), b2 = hexToRgb(hexB || '#ff4400');
    const r = Math.round(a[0]+(b2[0]-a[0])*t), g = Math.round(a[1]+(b2[1]-a[1])*t), bv = Math.round(a[2]+(b2[2]-a[2])*t);
    return `rgb(${r},${g},${bv})`;
}

function initParticles() {
    const count = Math.round(state.l32_count || 200);
    if (count === lastParticleCount && particles.length === count) return;
    // Only grow/shrink by diff to avoid reset flicker
    while (particles.length > count) particles.pop();
    const cw = l32Canvas.width, ch = l32Canvas.height;
    const ecx = (state.l32_emitX ?? 0.5) * cw;
    const ecy = (state.l32_emitY ?? 0.5) * ch;
    const spread = Math.max(0.001, state.l32_spread) * Math.min(cw, ch) * 0.5;
    while (particles.length < count) {
        const angle = Math.random() * Math.PI * 2;
        const r2 = Math.random() * spread;
        const speed = state.l32_speed || 1;
        const sizeR = state.l32_size * (1 - (state.l32_sizeRand||0) * Math.random() * 0.9);
        particles.push({
            x: ecx + Math.cos(angle)*r2, y: ecy + Math.sin(angle)*r2,
            vx: (Math.random()-0.5)*speed*2, vy: (Math.random()-0.5)*speed*2,
            life: Math.random(), maxLife: (0.5 + Math.random()*0.5) * (state.l32_lifespan||1),
            age: Math.random(), size: Math.max(0.5, sizeR),
            baseAngle: angle
        });
    }
    lastParticleCount = count;
}

function drawParticles(dt) {
    const cw = l32Canvas.width, ch = l32Canvas.height;
    // Trail fade (composite fade)
    const fadeAmt = 1 - Math.pow(state.l32_trails, dt * 60);
    l32Ctx.fillStyle = `rgba(0,0,0,${Math.max(0.001, Math.min(1, fadeAmt))})`;
    l32Ctx.fillRect(0, 0, cw, ch);
    if (!state.l32_en) { l32Texture.needsUpdate = true; return; }
    initParticles();
    const colA = state.l32_col || '#ffb000';
    const colB = state.l32_colB || '#ff4400';
    const speed = state.l32_speed;
    const gravity = state.l32_gravity;
    const turb = state.l32_turbulence || 0;
    const spinF = state.l32_spin || 0;
    const burst = state.l32_burst || 0;
    const glowAmt = state.l32_glow || 0;
    const lifespan = Math.max(0.1, state.l32_lifespan || 1);
    const ecx = (state.l32_emitX ?? 0.5) * cw;
    const ecy = (state.l32_emitY ?? 0.5) * ch;
    const spread = Math.max(0.001, state.l32_spread) * Math.min(cw, ch) * 0.5;

    for (let i = 0; i < particles.length; i++) {
        const pt = particles[i];
        // Turbulence kick
        if (turb > 0) { pt.vx += (Math.random()-0.5)*turb*dt*10; pt.vy += (Math.random()-0.5)*turb*dt*10; }
        // Spin effector (rotates velocity around emitter)
        if (spinF !== 0) {
            const dx = pt.x - ecx, dy = pt.y - ecy;
            const ang = Math.atan2(dy, dx) + spinF * dt;
            const dist = Math.sqrt(dx*dx+dy*dy);
            pt.vx += (Math.cos(ang)*dist - dx) * 0.1;
            pt.vy += (Math.sin(ang)*dist - dy) * 0.1;
        }
        // Burst: push outward on life > burst threshold
        if (burst > 0 && pt.life < 0.2) { 
            const dx = pt.x-ecx, dy = pt.y-ecy; const dist = Math.sqrt(dx*dx+dy*dy)+0.01;
            pt.vx += (dx/dist)*burst*speed*dt*20; pt.vy += (dy/dist)*burst*speed*dt*20;
        }
        // Velocity cap
        const vel = Math.sqrt(pt.vx*pt.vx+pt.vy*pt.vy);
        const maxV = speed * 8;
        if (vel > maxV) { pt.vx *= maxV/vel; pt.vy *= maxV/vel; }
        pt.x += pt.vx * speed * dt * 30;
        pt.y += pt.vy * speed * dt * 30;
        pt.vy += gravity * dt * 2;
        pt.age += dt / lifespan;
        pt.life = 1 - pt.age;
        // Respawn when dead or out of bounds
        if (pt.life <= 0 || pt.x < -50 || pt.x > cw+50 || pt.y < -50 || pt.y > ch+50) {
            const ang2 = Math.random() * Math.PI * 2;
            const r2 = Math.random() * spread;
            pt.x = ecx + Math.cos(ang2)*r2; pt.y = ecy + Math.sin(ang2)*r2;
            pt.vx = (Math.random()-0.5)*speed*2; pt.vy = (Math.random()-0.5)*speed*2;
            pt.age = 0; pt.life = 1; pt.maxLife = (0.5+Math.random()*0.5)*lifespan;
            const sizeR = state.l32_size * (1 - (state.l32_sizeRand||0)*Math.random()*0.9);
            pt.size = Math.max(0.5, sizeR);
        }
        const alpha = Math.max(0, Math.min(1, pt.life * 2));  // fade in first half, fade out second
        const ageT = 1 - pt.life;
        const col = lerpColor(colA, colB, ageT);
        const sz = pt.size * (0.3 + pt.life * 0.7); // shrink as they age
        if (glowAmt > 0) {
            l32Ctx.shadowColor = col;
            l32Ctx.shadowBlur = sz * glowAmt * 4;
        } else {
            l32Ctx.shadowBlur = 0;
        }
        l32Ctx.globalAlpha = alpha;
        l32Ctx.fillStyle = col;
        l32Ctx.beginPath();
        l32Ctx.arc(pt.x, pt.y, Math.max(0.5, sz), 0, Math.PI * 2);
        l32Ctx.fill();
    }
    l32Ctx.globalAlpha = 1.0;
    l32Ctx.shadowBlur = 0;
    l32Texture.needsUpdate = true;
}

// --- GOOGLE FONTS ---
const GOOGLE_FONTS = [
  'Courier New', 'Georgia', 'Impact', 'Arial Black',
  'Orbitron', 'Russo One', 'Share Tech Mono', 'VT323', 'Press Start 2P',
  'Oswald', 'Bebas Neue', 'Exo 2', 'Rajdhani', 'Michroma',
  'Bruno Ace SC', 'Syncopate', 'Audiowide', 'Jura', 'Quantico',
  'Space Mono', 'Nova Mono', 'Cutive Mono', 'IBM Plex Mono',
  'Permanent Marker', 'Abril Fatface', 'Ultra', 'Alfa Slab One',
  'Anton', 'Black Ops One', 'Boogaloo', 'Monoton', 'Righteous',
  'Megrim', 'Stalinist One', 'Train One', 'Caesar Dressing'
];
const loadedFonts = new Set(['Courier New', 'Georgia', 'Impact', 'Arial Black']);

function loadGoogleFont(name) {
  if (loadedFonts.has(name)) return Promise.resolve();
  return new Promise((res) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(name.replace(/ /g, '+'))}&display=swap`;
    link.onload = () => { loadedFonts.add(name); res(); };
    link.onerror = () => res();
    document.head.appendChild(link);
    // Fallback resolve after timeout
    setTimeout(res, 2000);
  });
}

// Populate font select
document.addEventListener('DOMContentLoaded', () => {});
function populateFontSelect() {
  const sel = document.getElementById('l25-font');
  if (!sel) return;
  sel.innerHTML = '';
  GOOGLE_FONTS.forEach(f => {
    const opt = document.createElement('option');
    opt.value = f; opt.textContent = f;
    if (f === state.l25_font) opt.selected = true;
    sel.appendChild(opt);
  });
  sel.onchange = async (e) => {
    state.l25_font = e.target.value;
    await loadGoogleFont(state.l25_font);
  };
}

// --- VU METER STATE ---
let vuBars = [];
let vuLastTime = 0;

function initVuBars() {
  const w = l26Canvas.width;
  const barW = Math.max(1, state.l26_barW);
  const barGap = Math.max(0, state.l26_barGap);
  const count = Math.floor(w / (barW + barGap));
  if (vuBars.length !== count) {
    vuBars = Array.from({length: count}, () => 0.1 + Math.random() * 0.5);
  }
}

function drawVuMeter(dt) {
  const cw = l26Canvas.width, ch = l26Canvas.height;
  l26Ctx.clearRect(0, 0, cw, ch);
  if (!state.l26_en) return;
  
  initVuBars();
  
  const barW = Math.max(1, state.l26_barW);
  const barGap = Math.max(0, state.l26_barGap);
  const hBars = Math.round(state.l26_hBars || 0);
  const hBarH = Math.max(1, state.l26_hBarH || 2);
  const noiseSpeed = state.l26_noiseSpeed;
  const noiseAmt = state.l26_noiseAmt;
  const squeeze = state.l26_squeeze;
  const topEdge = state.l26_topEdge;
  const botEdge = state.l26_botEdge;
  const glow = state.l26_glowAmt;
  const colBot = state.l26_colBot || '#00ff44';
  const colMid = state.l26_colMid || '#ffee00';
  const colTop = state.l26_colTop || '#ff2200';
  
  const areaTop = (1 - topEdge) * ch;
  const areaBot = (1 - botEdge) * ch;
  const areaH = areaBot - areaTop;
  
  const count = vuBars.length;
  const totalW = count * (barW + barGap) - barGap;
  const startX = (cw - totalW) / 2;
  
  for (let i = 0; i < count; i++) {
    // Animate bar height with noise
    const target = Math.max(0.02, Math.min(1, vuBars[i] + (Math.random() - 0.45) * noiseAmt * dt * noiseSpeed));
    vuBars[i] = vuBars[i] * 0.85 + target * 0.15;
    
    // Sinusoidal squeeze: smooth bell curve instead of linear abs
    const norm = i / Math.max(1, count - 1); // 0..1
    // cos curve: 1 at center (norm=0.5), falls off toward edges with smooth S-curve
    const squeezeFactor = 1 - squeeze * (1 - Math.cos(norm * Math.PI * 2 - Math.PI)) * 0.5;
    const barH = vuBars[i] * squeezeFactor * areaH;
    
    const x = startX + i * (barW + barGap);
    const y = areaBot - barH;
    
    if (state.l26_gradient) {
      const grad = l26Ctx.createLinearGradient(x, areaBot, x, areaTop);
      grad.addColorStop(0, colBot);
      grad.addColorStop(0.5, colMid);
      grad.addColorStop(1, colTop);
      l26Ctx.fillStyle = grad;
    } else {
      const t = vuBars[i] * squeezeFactor;
      if (t < 0.5) { l26Ctx.fillStyle = lerpColor(colBot, colMid, t * 2); }
      else { l26Ctx.fillStyle = lerpColor(colMid, colTop, (t - 0.5) * 2); }
    }
    
    l26Ctx.fillRect(x, y, barW, barH);
    
    // Glow effect
    if (glow > 0) {
      const t = Math.min(1, vuBars[i] * squeezeFactor);
      let glowCol;
      if (t < 0.5) { glowCol = lerpColor(colBot, colMid, t*2); }
      else { glowCol = lerpColor(colMid, colTop, (t-0.5)*2); }
      l26Ctx.save();
      l26Ctx.shadowColor = glowCol;
      l26Ctx.shadowBlur = 12 * glow;
      l26Ctx.fillRect(x, y, barW, barH);
      l26Ctx.restore();
    }
    
    // Horizontal divider bars (slot mask across each vertical bar)
    if (hBars > 0) {
      const slotH = areaH / (hBars + 1);
      l26Ctx.save();
      l26Ctx.globalCompositeOperation = 'destination-out';
      l26Ctx.fillStyle = 'rgba(0,0,0,1)';
      for (let s = 0; s <= hBars; s++) {
        const slotY = areaBot - s * slotH - hBarH / 2;
        l26Ctx.fillRect(x, slotY, barW, hBarH);
      }
      l26Ctx.restore();
    }
  }
  
  l26Texture.needsUpdate = true;
}

function drawTextLayer() {
  const cw = l25Canvas.width, ch = l25Canvas.height;
  l25Ctx.clearRect(0, 0, cw, ch);
  if (!state.l25_en) return;
  
  const text = (state.l25_text || "").split('|');
  const font = state.l25_font || 'Courier New';
  const fontStyle = state.l25_fontStyle || 'bold';
  const sizePx = Math.round(state.l25_size * ch);
  const col = state.l25_col || '#ffb000';
  const tracking = state.l25_tracking || 0;
  const lineSpacing = state.l25_lineSpacing || 1.2;
  const align = state.l25_align || 'center';
  const outline = state.l25_outline || 0;
  const shadow = state.l25_shadow || 0;
  const glitch = state.l25_glitch || 0;
  
  l25Ctx.font = `${fontStyle} ${sizePx}px '${font}', monospace`;
  l25Ctx.textAlign = align === 'center' ? 'center' : align === 'right' ? 'right' : 'left';
  l25Ctx.textBaseline = 'middle';
  
  const x = align === 'center' ? cw / 2 : align === 'right' ? cw - sizePx : sizePx;
  const lineH = sizePx * lineSpacing;
  const posY = state.l25_posY * ch;
  const totalTextH = text.length * lineH;
  const startY = posY - totalTextH / 2 + lineH / 2;
  
  // Shadow
  if (shadow > 0) {
    l25Ctx.save();
    l25Ctx.shadowColor = 'rgba(0,0,0,0.8)';
    l25Ctx.shadowBlur = shadow;
    l25Ctx.shadowOffsetX = shadow * 0.5;
    l25Ctx.shadowOffsetY = shadow * 0.5;
  }
  
  // Outline
  if (outline > 0) {
    l25Ctx.strokeStyle = 'rgba(0,0,0,0.9)';
    l25Ctx.lineWidth = outline;
    l25Ctx.lineJoin = 'round';
    text.forEach((line, i) => {
      const ly = startY + i * lineH;
      if (tracking !== 0) {
        drawTrackedText(l25Ctx, line, x, ly, tracking, 'stroke');
      } else {
        l25Ctx.strokeText(line, x, ly);
      }
    });
  }
  
  l25Ctx.fillStyle = col;
  text.forEach((line, i) => {
    let ly = startY + i * lineH;
    // Glitch displacement
    if (glitch > 0 && Math.random() < glitch * 0.3) {
      l25Ctx.save();
      l25Ctx.fillStyle = 'rgba(255,0,80,0.7)';
      const gx = (Math.random() - 0.5) * glitch * 30;
      if (tracking !== 0) drawTrackedText(l25Ctx, line, x + gx, ly, tracking, 'fill');
      else l25Ctx.fillText(line, x + gx, ly);
      l25Ctx.restore();
      l25Ctx.fillStyle = col;
    }
    if (tracking !== 0) {
      drawTrackedText(l25Ctx, line, x, ly, tracking, 'fill');
    } else {
      l25Ctx.fillText(line, x, ly);
    }
  });
  
  if (shadow > 0) l25Ctx.restore();
  
  l25Texture.needsUpdate = true;
}

function drawTrackedText(ctx, text, x, y, tracking, mode) {
  const chars = text.split('');
  const metrics = ctx.measureText(text);
  const charW = metrics.width / Math.max(1, chars.length);
  const extra = tracking * charW;
  const totalW = metrics.width + extra * (chars.length - 1);
  let cx = x - totalW / 2;
  if (ctx.textAlign === 'right') cx = x - totalW;
  else if (ctx.textAlign === 'left') cx = x;
  ctx.save();
  ctx.textAlign = 'left';
  chars.forEach(ch => {
    if (mode === 'fill') ctx.fillText(ch, cx, y);
    else ctx.strokeText(ch, cx, y);
    cx += charW + extra;
  });
  ctx.restore();
}

// --- DYNAMIC UNIFORM DECLARATIONS ---
const skipKeys = ['presetName', 'duration', 'fps', 'exportScale', 'cycles', 'splitView', 'showGuide', 'isolateWall', 'layerOrder', 'l25_text', 'l25_font', 'l25_fontStyle', 'l25_align', 'l26_gradient', 'l31_col', 'l32_col', 'l32_colB', 'l30_col', 'l30_showDate', 'l30_showFrames']; 

let uniformDecls = `
  uniform float u_progress;
  uniform float uAspect;
  uniform float u_globalOffset;
  uniform float u_globalScale;
  varying vec2 vUv;
  uniform sampler2D tDiffuse;
  uniform sampler2D u_l8_Tex;
  uniform float u_l8_Aspect;
  uniform sampler2D u_l21_Tex;
  uniform float u_l21_ImgAspect;
  uniform sampler2D u_l25_Tex;
  uniform sampler2D u_l26_Tex;
  uniform sampler2D u_l30_Tex;
  uniform sampler2D u_l31_Tex;
  uniform sampler2D u_l32_Tex;
`;
Object.keys(state).forEach(k => {
    if (skipKeys.includes(k)) return;
    if(typeof state[k] === 'number' || typeof state[k] === 'boolean') uniformDecls += `uniform float u_${k};\n`;
    if(typeof state[k] === 'string' && state[k].startsWith('#')) uniformDecls += `uniform vec3 u_${k};\n`;
});

const shaderUtils = uniformDecls + `
  #define TWO_PI 6.28318530718
  mat2 rot(float a){ return mat2(cos(a),-sin(a),sin(a),cos(a)); }
  vec3 blend(vec3 b, vec3 o, float m, float op) {
    if (m < 0.5) return mix(b, o, op); 
    if (m < 1.5) return b + (o * op); 
    if (m < 2.5) return b * mix(vec3(1.0), o, op); 
    if (m < 3.5) return 1.0 - (1.0 - b) * (1.0 - (o * op)); 
    if (m < 4.5) { 
        vec3 stepCheck = step(0.5, b);
        vec3 ov = mix(2.0 * b * o, 1.0 - 2.0 * (1.0 - b) * (1.0 - o), stepCheck);
        return mix(b, ov, op);
    }
    return mix(b, abs(b - o), op); 
  }
  float getWallMask(float x, float wN, float wE, float wS, float wW) {
      float mN = step(x, 0.215685);
      float mE = step(0.215685, x) * step(x, 0.5);
      float mS = step(0.5, x) * step(x, 0.71549);
      float mW = step(0.71549, x);
      return max(0.0, min(1.0, mN * wN + mE * wE + mS * wS + mW * wW));
  }
  vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
  float snoise(vec2 v){
    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
    vec2 i = floor(v + dot(v, C.yy)); vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz; x12.xy -= i1; i = mod(i, 289.0);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m*m*m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0; vec3 h = abs(x) - 0.5; vec3 ox = floor(x + 0.5); vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g; g.x = a0.x * x0.x + h.x * x0.y; g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }
  float random(vec2 st) { return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123); }
  vec2 random2( vec2 p ) { return fract(sin(vec2(dot(p,vec2(127.1,311.7)),dot(p,vec2(269.5,183.3))))*43758.5453); }
  float fbm(vec2 p, float octaves) {
      float v = 0.0; float a = 0.5;
      for (int i=0; i<10; i++) { if(float(i) >= octaves) break; v += a * snoise(p); p *= 2.0; a *= 0.5; }
      return v;
  }
  float voronoi(vec2 x, float t) {
      vec2 n = floor(x); vec2 f = fract(x); float md = 5.0;
      for(int j=-1; j<=1; j++) for(int i=-1; i<=1; i++) {
          vec2 g = vec2(float(i), float(j)); vec2 o = random2(n + g);
          o = 0.5 + 0.5*sin(t + TWO_PI*o); vec2 r = g + o - f;
          float d = dot(r, r); if(d < md) md = d;
      }
      return md;
  }
  float valueNoise(vec2 p) {
      vec2 i = floor(p); vec2 f = fract(p); vec2 u = f*f*(3.0-2.0*f);
      return mix( mix( random( i + vec2(0.0,0.0) ), random( i + vec2(1.0,0.0) ), u.x), mix( random( i + vec2(0.0,1.0) ), random( i + vec2(1.0,1.0) ), u.x), u.y);
  }
`;

const postMaterial = new THREE.ShaderMaterial({
  vertexShader: `varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
  fragmentShader: shaderUtils + `
  uniform float u_splitView;
  uniform float u_canvasWidth;
  uniform float u_isoWall; // -1=none, 0=N, 1=E, 2=S, 3=W

  // Wall boundaries in 0..1 UV space (18119px total: N=3908 E=5151 S=3908 W=5152)
  const float WALL_N_END = 3908.0  / 18119.0;  // 0.21568
  const float WALL_E_END = 9059.0  / 18119.0;  // 0.49998
  const float WALL_S_END = 12967.0 / 18119.0;  // 0.71565
  // WALL_W_END = 1.0

  void main() {
      vec2 texUv = vUv;
      vec2 globalUv = vec2(u_globalOffset + vUv.x * u_globalScale, vUv.y);

      // Wall isolation: remap a single wall to fill the viewport
      if (u_isoWall >= 0.0) {
          float wStart, wEnd;
          if      (u_isoWall < 0.5) { wStart = 0.0;        wEnd = WALL_N_END; }
          else if (u_isoWall < 1.5) { wStart = WALL_N_END; wEnd = WALL_E_END; }
          else if (u_isoWall < 2.5) { wStart = WALL_E_END; wEnd = WALL_S_END; }
          else                      { wStart = WALL_S_END; wEnd = 1.0; }
          texUv.x = wStart + vUv.x * (wEnd - wStart);
          globalUv = vec2(u_globalOffset + texUv.x * u_globalScale, vUv.y);
      }
      
      if (u_splitView > 0.5) {
          float gap = 0.04;
          float h = 0.5 - gap/2.0;
          if (texUv.y > 0.5 + gap/2.0) { texUv.y = (texUv.y - (0.5 + gap/2.0)) / h; texUv.x = texUv.x * 0.5; } 
          else if (texUv.y < 0.5 - gap/2.0) { texUv.y = texUv.y / h; texUv.x = texUv.x * 0.5 + 0.5; } 
          else { gl_FragColor = vec4(0.0196, 0.0196, 0.0196, 1.0); return; }
      }

      float p = u_progress;
      
      if (u_l17_en > 0.5) {
          float wM17 = getWallMask(globalUv.x, u_l17_wN, u_l17_wE, u_l17_wS, u_l17_wW);
          if (wM17 > 0.5) {
              float v17_aS = TWO_PI / max(1.0, floor((u_l17_scale) + 0.5));
              float v17_a = floor(globalUv.x * TWO_PI / v17_aS) * v17_aS;
              vec2 v17_pC = vec2(cos(v17_a), sin(v17_a));
              float v17_sp = floor((u_l17_speed * 5.0) + 0.5) * TWO_PI;
              float v17_n = snoise(v17_pC * 10.0);
              if (v17_n > 0.5) {
                  float melt = sin(p * v17_sp + v17_n * TWO_PI) * 0.5 + 0.5;
                  texUv.y += melt * u_l17_amount;
                  texUv.y = fract(texUv.y);
              }
          }
      }

      vec4 col = texture2D(tDiffuse, texUv);
      
      if (u_l24_en > 0.5) {
          float wM24 = getWallMask(globalUv.x, u_l24_wN, u_l24_wE, u_l24_wS, u_l24_wW);
          if (wM24 > 0.0) {
              vec2 v24_uv = globalUv * vec2(uAspect, 1.0);
              float v24_x = v24_uv.x * u_l24_density + v24_uv.y * u_l24_skew;
              float cx = mod(v24_x, 3.0);
              vec3 rgbMask = vec3(0.0);
              if(cx < 1.0) rgbMask.r = 1.0;
              else if(cx < 2.0) rgbMask.g = 1.0;
              else rgbMask.b = 1.0;
              
              float cy = mod(v24_uv.y * u_l24_density, 3.0);
              float scan = smoothstep(0.0, 0.5, cy) * smoothstep(3.0, 2.5, cy);
              
              vec3 crtCol = col.rgb * rgbMask * (0.5 + 0.5 * scan) * 2.5; 
              col.rgb = mix(col.rgb, mix(col.rgb, crtCol, u_l24_intensity), wM24);
          }
      }

      if (u_l16_en > 0.5) {
          float wM16 = getWallMask(globalUv.x, u_l16_wN, u_l16_wE, u_l16_wS, u_l16_wW);
          if (wM16 > 0.0) {
              vec2 v16_d = globalUv - vec2(0.5); 
              float v16_dist = length(v16_d);
              vec2 v16_off = v16_d * u_l16_amount * v16_dist;
              vec2 local_off = vec2(v16_off.x / max(0.001, u_globalScale), v16_off.y);
              col.r = mix(col.r, texture2D(tDiffuse, fract(texUv - local_off)).r, wM16);
              col.b = mix(col.b, texture2D(tDiffuse, fract(texUv + local_off)).b, wM16);
          }
      }

      if (u_l18_en > 0.5) {
          float wM18 = getWallMask(globalUv.x, u_l18_wN, u_l18_wE, u_l18_wS, u_l18_wW);
          if (wM18 > 0.0) {
              vec2 v18_uv = globalUv * vec2(uAspect, 1.0) * floor(u_l18_scale);
              vec2 v18_g = fract(v18_uv);
              float v18_d = distance(v18_g, vec2(0.5));
              float v18_l = dot(col.rgb, vec3(0.299, 0.587, 0.114));
              float v18_r = clamp(1.0 - v18_l, 0.0, 1.0) * u_l18_amount * 0.707;
              float v18_ht = smoothstep(v18_r, v18_r + 0.05, v18_d);
              vec3 htCol = mix(u_l18_col, vec3(1.0), v18_ht) * col.rgb;
              col.rgb = mix(col.rgb, mix(col.rgb, htCol, 0.8), wM18);
          }
      }

      // --- PIXELATE ---
      if (u_l33_en > 0.5) {
          float wM33 = getWallMask(globalUv.x, u_l33_wN, u_l33_wE, u_l33_wS, u_l33_wW);
          if (wM33 > 0.0) {
              float v33_sx = max(0.001, u_l33_amount / max(256.0, u_canvasWidth));
              float v33_sy = v33_sx * u_l33_aspect;
              vec2 v33_pxUv = vec2(floor(texUv.x / v33_sx) * v33_sx + v33_sx*0.5, floor(texUv.y / v33_sy) * v33_sy + v33_sy*0.5);
              vec3 v33_px = texture2D(tDiffuse, clamp(v33_pxUv, 0.0, 1.0)).rgb;
              col.rgb = mix(col.rgb, v33_px, wM33);
          }
      }
      // --- RGB SPLIT ---
      if (u_l34_en > 0.5) {
          float wM34 = getWallMask(globalUv.x, u_l34_wN, u_l34_wE, u_l34_wS, u_l34_wW);
          if (wM34 > 0.0) {
              float v34_ang = u_l34_angle * (3.14159265 / 180.0);
              vec2 v34_d = vec2(cos(v34_ang), sin(v34_ang)) * u_l34_amount;
              float v34_r = texture2D(tDiffuse, fract(texUv + v34_d)).r;
              float v34_b = texture2D(tDiffuse, fract(texUv - v34_d)).b;
              col.rgb = mix(col.rgb, vec3(v34_r, col.g, v34_b), wM34);
          }
      }

      if (u_showSeams > 0.5) {
          float absoluteX = (u_splitView > 0.5) ? (texUv.x * 18119.0) : (globalUv.x * 18119.0);
          float unitsPerPixel = (u_splitView > 0.5) ? (9059.5 / u_canvasWidth) : (18119.0 / u_canvasWidth);
          float seamThick = unitsPerPixel * 1.5; 
          float s1 = step(3908.0 - seamThick, absoluteX) * step(absoluteX, 3908.0 + seamThick);
          float s2 = step(9059.0 - seamThick, absoluteX) * step(absoluteX, 9059.0 + seamThick);
          float s3 = step(12964.0 - seamThick, absoluteX) * step(absoluteX, 12964.0 + seamThick);
          vec3 seamCol = vec3(1.0, 0.69, 0.0);
          col.rgb = mix(col.rgb, seamCol, clamp(s1 + s2 + s3, 0.0, 1.0));
      }

      gl_FragColor = vec4(col.rgb, 1.0);
  }
`});

const genMaterial = new THREE.ShaderMaterial({
  vertexShader: `varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
  fragmentShader: `void main() { gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0); }` 
});

function buildGeneratorShader() {
    let frag = shaderUtils + `\nvoid main() {\n  vec3 color = vec3(0.0);\n  vec2 uv = vec2(u_globalOffset + vUv.x * u_globalScale, vUv.y);\n  float p = u_progress;\n  float fade = smoothstep(0.0, 1.0, p);\n`;
    
    frag += `
    if (u_l15_en > 0.5) {
        float wM = getWallMask(uv.x, u_l15_wN, u_l15_wE, u_l15_wS, u_l15_wW);
        if (wM > 0.5) {
            float v15_kTiles = max(1.0, floor((uAspect / 2.0) + 0.5));
            vec2 v15_kUv = vec2(fract(uv.x * v15_kTiles), uv.y);
            vec2 v15_c = v15_kUv - 0.5 + vec2(u_l15_offX, u_l15_offY);
            v15_c.x *= (uAspect / v15_kTiles);
            float v15_r = length(v15_c) * max(0.01, u_l15_zoom);
            float v15_a = atan(v15_c.y, v15_c.x);
            float v15_angle = TWO_PI / max(1.0, u_l15_segments);
            float v15_speed = floor((u_l15_speed * 10.0) + 0.5) * v15_angle;
            v15_a += p * v15_speed;
            v15_a = mod(v15_a, v15_angle);
            v15_a = abs(v15_a - v15_angle/2.0);
            uv = 0.5 + v15_r * vec2(cos(v15_a), sin(v15_a)); 
            uv.x /= (uAspect / v15_kTiles);
        }
    }\n`;
    
    state.layerOrder.forEach(id => {
        if (SHADER_CHUNKS[id]) frag += SHADER_CHUNKS[id] + '\n';
    });
    
    frag += `  gl_FragColor = vec4(color, 1.0);\n}`;
    genMaterial.fragmentShader = frag;
    genMaterial.needsUpdate = true;
}

function focusTab(id) {
    const enCheckbox = document.getElementById(id.replace(/_/g, '-') + '-en');
    if(!enCheckbox) return;
    const tabBtn = enCheckbox.closest('.tab-btn');
    if(tabBtn) {
        const subHeader = tabBtn.closest('.tab-headers');
        if(subHeader) {
            const catBtn = document.querySelector('.cat-btn[data-cat="' + subHeader.id + '"]');
            if(catBtn && !catBtn.classList.contains('active')) catBtn.click();
        }
        if(!tabBtn.classList.contains('active')) tabBtn.click();
        const tabContent = document.getElementById(tabBtn.dataset.tab);
        if(tabContent) tabContent.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}
window.focusTab = focusTab;

let draggedLayerId = null;
window.dragStart = (e, id) => { draggedLayerId = id; e.dataTransfer.effectAllowed = 'move'; setTimeout(() => { e.target.classList.add('dragging'); }, 0); };
window.dragEnd = (e) => { draggedLayerId = null; e.target.classList.remove('dragging'); document.querySelectorAll('.layer-item').forEach(el => { el.classList.remove('drag-over-top'); el.classList.remove('drag-over-bot'); }); };
window.dragOver = (e) => { e.preventDefault(); e.dataTransfer.dropEffect = 'move'; const rect = e.currentTarget.getBoundingClientRect(); const mid = rect.top + rect.height / 2; if(e.clientY < mid) { e.currentTarget.classList.add('drag-over-top'); e.currentTarget.classList.remove('drag-over-bot'); } else { e.currentTarget.classList.add('drag-over-bot'); e.currentTarget.classList.remove('drag-over-top'); } };
window.dragLeave = (e) => { e.currentTarget.classList.remove('drag-over-top'); e.currentTarget.classList.remove('drag-over-bot'); };
window.drop = (e, targetId) => {
    e.preventDefault(); e.currentTarget.classList.remove('drag-over-top'); e.currentTarget.classList.remove('drag-over-bot');
    if (draggedLayerId && draggedLayerId !== targetId) {
        const rect = e.currentTarget.getBoundingClientRect(); const mid = rect.top + rect.height / 2; const droppedAboveVisual = e.clientY < mid;
        let fromIdx = state.layerOrder.indexOf(draggedLayerId); state.layerOrder.splice(fromIdx, 1);
        let toIdx = state.layerOrder.indexOf(targetId);
        if (droppedAboveVisual) { state.layerOrder.splice(toIdx + 1, 0, draggedLayerId); } else { state.layerOrder.splice(toIdx, 0, draggedLayerId); }
        renderLayerStack(); buildGeneratorShader();
    }
};

window.toggleLayer = (id) => { const el = document.getElementById(id.replace(/_/g, '-') + '-en'); if(el) { el.checked = !el.checked; el.dispatchEvent(new Event('input')); } };
window.moveLayer = (id, dir) => {
    const idx = state.layerOrder.indexOf(id); if(idx === -1) return;
    if(dir === 'up' && idx < state.layerOrder.length - 1) { [state.layerOrder[idx], state.layerOrder[idx+1]] = [state.layerOrder[idx+1], state.layerOrder[idx]]; } 
    else if(dir === 'down' && idx > 0) { [state.layerOrder[idx], state.layerOrder[idx-1]] = [state.layerOrder[idx-1], state.layerOrder[idx]]; } 
    else if(dir === 'top') { state.layerOrder.splice(idx, 1); state.layerOrder.push(id); } 
    else if(dir === 'bot') { state.layerOrder.splice(idx, 1); state.layerOrder.unshift(id); }
    renderLayerStack(); buildGeneratorShader();
};

function renderLayerStack() {
    const listEl = document.getElementById('layer-list'); if(!listEl) return; listEl.innerHTML = '';
    const activeLayers = state.layerOrder.filter(id => state[id + '_en']);
    const renderOrder = activeLayers.reverse();
    renderOrder.forEach((id) => {
        const item = document.createElement('div'); item.className = `layer-item active`; item.setAttribute('draggable', 'true');
        item.ondragstart = (e) => window.dragStart(e, id); item.ondragend = window.dragEnd; item.ondragover = window.dragOver; item.ondragleave = window.dragLeave; item.ondrop = (e) => window.drop(e, id);
        item.innerHTML = `
            <span class="eye-btn" onclick="toggleLayer('${id}')" title="Hide Effect">👁️</span>
            <span class="drag-handle" onclick="focusTab('${id}')">${LAYER_NAMES[id] || id}</span>
            <div class="layer-controls">
                <button class="layer-btn" onclick="moveLayer('${id}', 'up')" title="Move Up">▲</button>
                <button class="layer-btn" onclick="moveLayer('${id}', 'down')" title="Move Down">▼</button>
            </div>
        `;
        listEl.appendChild(item);
    });
}

scene.add(new THREE.Mesh(new THREE.PlaneGeometry(ASPECT, 1), genMaterial));
postScene.add(new THREE.Mesh(new THREE.PlaneGeometry(1, 1), postMaterial));

const mGen = genMaterial.uniforms = { 
    u_progress:{value:0}, uAspect:{value:ASPECT}, 
    u_l8_Tex:{value:l8Texture}, u_l8_Aspect:{value:1.0},
    u_l21_Tex:{value:l21Texture}, u_l21_ImgAspect:{value:2.0},
    u_l25_Tex:{value:l25Texture},
    u_l26_Tex:{value:l26Texture},
    u_l30_Tex:{value:l30Texture},
    u_l31_Tex:{value:l31Texture},
    u_l32_Tex:{value:l32Texture},
    u_globalOffset:{value:0.0}, u_globalScale:{value:1.0}
};
const mPost = postMaterial.uniforms = { 
    u_progress:{value:0}, uAspect:{value:ASPECT}, tDiffuse:{value:null}, 
    u_splitView:{value:0.0}, u_canvasWidth:{value:1000.0},
    u_globalOffset:{value:0.0}, u_globalScale:{value:1.0},
    u_isoWall:{value:-1.0}
};

function updateUniforms() {
    Object.keys(state).forEach(k => {
        if (skipKeys.includes(k)) return;
        let val = state[k]; if (typeof val === 'boolean') val = val ? 1.0 : 0.0;
        if (mGen['u_' + k]) { if (mGen['u_' + k].value instanceof THREE.Color) mGen['u_' + k].value.set(state[k]); else mGen['u_' + k].value = val; } 
        else { const isColor = typeof state[k] === 'string' && state[k].startsWith('#'); mGen['u_' + k] = { value: isColor ? new THREE.Color(state[k]) : val }; }
        if (mPost['u_' + k]) { if (mPost['u_' + k].value instanceof THREE.Color) mPost['u_' + k].value.set(state[k]); else mPost['u_' + k].value = val; } 
        else { const isColor = typeof state[k] === 'string' && state[k].startsWith('#'); mPost['u_' + k] = { value: isColor ? new THREE.Color(state[k]) : val }; }
    });
    const msgEl = document.getElementById('no-effect-msg');
    const anyActive = Object.keys(state).some(k => k.endsWith('_en') && state[k]);
    if(msgEl) msgEl.style.display = (anyActive || state.showGuide) ? 'none' : 'flex';
}

function bindAll() {
    Object.keys(state).forEach(key => {
        const id = key.replace(/_/g, '-'); const el = document.getElementById(id); const hexEl = document.getElementById(id + '-hex'); const valLabel = document.getElementById(id + '-val');
        if(!el && !hexEl && !['presetName', 'duration', 'exportScale', 'cycles', 'splitView', 'layerOrder'].includes(key)) return;
        const isBool = typeof state[key] === 'boolean'; const isColor = typeof state[key] === 'string' && state[key].startsWith('#');
        if(el) { if(isBool) el.checked = state[key]; else el.value = state[key]; }
        if(hexEl) { hexEl.value = state[key]; }
        const updateVisuals = (v) => {
            if(valLabel) valLabel.value = isBool ? (v ? 'ON' : 'OFF') : v;
            if(hexEl && document.activeElement !== hexEl) hexEl.value = v; 
            if(isColor && el && document.activeElement !== el) el.value = v;
            if (id.endsWith('-en') && el) {
                const tabBtn = el.closest('.tab-btn');
                if (tabBtn) {
                    const tabContent = document.getElementById(tabBtn.dataset.tab);
                    if (v) { tabBtn.classList.add('effect-on'); if(tabContent) tabContent.classList.remove('disabled-content'); } 
                    else { tabBtn.classList.remove('effect-on'); if(tabContent) tabContent.classList.add('disabled-content'); }
                }
                renderLayerStack(); 
            }
        };
        updateVisuals(state[key]);
        if(el) {
            el.oninput = (e) => {
                let v = isBool ? e.target.checked : (isColor ? e.target.value : parseFloat(e.target.value));
                if(typeof state[key] === 'string' && !isColor) v = e.target.value;
                state[key] = v; updateUniforms(); updateVisuals(v);
                if (key === 'l21_blur') applyL21Blur(v);
            };
            if(isBool) el.onchange = el.oninput;
        }
        if(hexEl) {
            hexEl.oninput = (e) => { let v = e.target.value; if (/^#[0-9A-Fa-f]{6}$/i.test(v)) { state[key] = v; updateUniforms(); updateVisuals(v); } };
        }
        if(valLabel) {
            valLabel.onchange = (e) => { let v = parseFloat(e.target.value); state[key] = v; if(el) el.value = v; updateUniforms(); updateVisuals(v); };
        }
    });
}

// --- RESET BUTTONS ---
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('reset-btn')) {
        const id = e.target.dataset.id;
        const def = parseFloat(e.target.dataset.default);
        const stateKey = id.replace(/-/g, '_');
        const rangeEl = document.getElementById(id);
        const valEl = document.getElementById(id + '-val');
        state[stateKey] = def;
        if (rangeEl) rangeEl.value = def;
        if (valEl) valEl.value = def;
        updateUniforms();
    }
});

// --- L25 TEXT CONTROLS BINDING ---
function bindTextControls() {
    populateFontSelect();
    const textArea = document.getElementById('l25-text');
    if (textArea) {
        textArea.value = state.l25_text || 'RETRO MASTER LOOP';
        textArea.oninput = (e) => { state.l25_text = e.target.value; };
    }
    const fontStyleSel = document.getElementById('l25-fontStyle');
    if (fontStyleSel) {
        fontStyleSel.value = state.l25_fontStyle || 'bold';
        fontStyleSel.onchange = (e) => { state.l25_fontStyle = e.target.value; };
    }
    const alignSel = document.getElementById('l25-align');
    if (alignSel) {
        alignSel.value = state.l25_align || 'center';
        alignSel.onchange = (e) => { state.l25_align = e.target.value; };
    }
}

// --- L26 GRADIENT TOGGLE ---
function bindCanvasColors() {
    // Bind color pickers for canvas-only layers that are in skipKeys
    [['l30-col', 'l30_col'], ['l31-col', 'l31_col'], ['l32-col', 'l32_col'], ['l32-colB', 'l32_colB']].forEach(([elId, key]) => {
        const cp = document.getElementById(elId);
        const hx = document.getElementById(elId + '-hex');
        if (cp) { cp.value = state[key] || '#ffffff'; cp.oninput = (e) => { state[key] = e.target.value; if(hx) hx.value = e.target.value; }; }
        if (hx) { hx.value = state[key] || '#ffffff'; hx.oninput = (e) => { if(/^#[0-9A-Fa-f]{6}$/i.test(e.target.value)) { state[key] = e.target.value; if(cp) cp.value = e.target.value; } }; }
    });
    // Bind clock checkboxes (in skipKeys so bindAll won't handle them)
    [['l30-showDate', 'l30_showDate'], ['l30-showFrames', 'l30_showFrames']].forEach(([elId, key]) => {
        const el = document.getElementById(elId);
        if (el) {
            el.checked = !!state[key];
            el.onchange = (e) => { state[key] = e.target.checked; };
        }
    });
}
function bindVuControls() {
    const gradChk = document.getElementById('l26-gradient');
    if (gradChk) {
        gradChk.checked = !!state.l26_gradient;
        // Style the checkbox
        if (gradChk.checked) { gradChk.style.backgroundColor = 'var(--amber)'; }
        gradChk.onchange = (e) => { 
            state.l26_gradient = e.target.checked;
            gradChk.style.backgroundColor = e.target.checked ? 'var(--amber)' : '';
        };
    }
}

document.getElementById('view-full').onchange = (e) => { if(e.target.checked) { state.splitView = false; mPost.u_splitView.value = 0.0; fitCanvas(); }};
document.getElementById('view-split').onchange = (e) => {
    if(e.target.checked) {
        // Clear iso state FIRST, then fitCanvas so labels compute correctly
        state.isolateWall = null;
        mPost.u_isoWall.value = -1.0;
        Object.keys(ISO_WALL_MAP || {}).forEach(id => { const b = document.getElementById(id); if(b) b.classList.remove('active'); });
        state.splitView = true; mPost.u_splitView.value = 1.0; fitCanvas();
    }
};

document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('.cat-btn').forEach(el => el.classList.remove('active'));
      document.querySelectorAll('.tab-headers').forEach(el => el.classList.remove('active'));
      btn.classList.add('active');
      const subHeader = document.getElementById(btn.dataset.cat);
      if(subHeader) subHeader.classList.add('active');
      const firstTab = subHeader ? subHeader.querySelector('.tab-btn') : null;
      if (firstTab) firstTab.click();
    };
});

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.onclick = (e) => {
    if(e.target.classList.contains('layer-toggle') || e.target.classList.contains('tab-name')) return;
    document.querySelectorAll('.tab-btn, .tab-content').forEach(el => el.classList.remove('active'));
    btn.classList.add('active'); 
    const tabContent = document.getElementById(btn.dataset.tab);
    if(tabContent) tabContent.classList.add('active');
  };
});

document.getElementById('presetSelect').onchange = (e) => {
    const key = e.target.value; const label = e.target.options[e.target.selectedIndex].text;
    Object.assign(state, JSON.parse(JSON.stringify(defaultState)));
    if (PRESETS[key]) { Object.assign(state, PRESETS[key]); state.presetName = label; } else { state.presetName = "Retro Master"; }
    document.getElementById('view-full').checked = true; mPost.u_splitView.value = 0.0;
    bindAll(); bindTextControls(); bindVuControls(); bindCanvasColors(); updateUniforms(); buildGeneratorShader(); renderLayerStack();
};

const initPal = PALETTES["silicon_forest"];
for(let i=0; i<5; i++) {
    const cp = document.getElementById(`pal-c${i+1}`); const hx = document.getElementById(`pal-h${i+1}`);
    cp.value = initPal[i]; hx.value = initPal[i];
    cp.oninput = (e) => hx.value = e.target.value;
    hx.oninput = (e) => { if(/^#[0-9A-Fa-f]{6}$/i.test(e.target.value)) cp.value = e.target.value; document.getElementById('paletteSelect').value = "custom"; };
}
document.getElementById('paletteSelect').value = "silicon_forest";
document.getElementById('paletteSelect').onchange = (e) => {
    const p = PALETTES[e.target.value];
    if(p) { for(let i=0; i<5; i++) { document.getElementById(`pal-c${i+1}`).value = p[i]; document.getElementById(`pal-h${i+1}`).value = p[i]; } }
};

document.getElementById('btn-apply-palette').onclick = () => {
    const colors = [];
    for(let i=1; i<=5; i++) colors.push(document.getElementById(`pal-c${i}`).value);
    let lastColor = "";
    Object.keys(state).forEach(k => {
        if(typeof state[k] === 'string' && state[k].startsWith('#')) {
            let pool = colors.filter(c => c !== lastColor); if(pool.length === 0) pool = colors; 
            const randomColor = pool[Math.floor(Math.random() * pool.length)]; state[k] = randomColor; lastColor = randomColor;
        }
    });
    bindAll(); updateUniforms();
};

document.querySelectorAll('.btn-local-pal').forEach(btn => {
    btn.onclick = () => {
        const prefix = btn.dataset.layer; const colors = [];
        for(let i=1; i<=5; i++) colors.push(document.getElementById(`pal-c${i}`).value);
        let lastColor = "";
        Object.keys(state).forEach(k => {
            if((k.startsWith(prefix + '_') || k === prefix) && typeof state[k] === 'string' && state[k].startsWith('#')) {
                let pool = colors.filter(c => c !== lastColor); if(pool.length === 0) pool = colors; 
                const randomColor = pool[Math.floor(Math.random() * pool.length)]; state[k] = randomColor; lastColor = randomColor;
            }
        });
        bindAll(); updateUniforms();
    };
});

const clock = new THREE.Clock();
let isRecording = false;
let lastAnimTime = 0;

// drawGuideOverlayFrame — called every frame from animate AND directly on checkbox toggle.
// Uses explicit px dimensions so canvas pixels map 1:1 with no CSS scaling blur.
function drawGuideOverlayFrame() {
  const oc = document.getElementById('guide-overlay-canvas');
  if (!oc) return;
  if (!state.showGuide) {
    oc.style.display = 'none';
    return;
  }
  const rcW = parseInt(renderer.domElement.style.width)  || renderer.domElement.width;
  const rcH = parseInt(renderer.domElement.style.height) || renderer.domElement.height;
  if (!rcW || !rcH) return;

  oc.style.display = 'block';
  // Set explicit pixel sizes — avoids CSS 100%/100% stretch that causes blurriness
  if (oc.width !== rcW || oc.height !== rcH) {
    oc.width  = rcW;
    oc.height = rcH;
    oc.style.width  = rcW + 'px';
    oc.style.height = rcH + 'px';
  }

  const W = rcW, H = rcH;
  const ctx = oc.getContext('2d');
  ctx.clearRect(0, 0, W, H);

  if (state.splitView && !isRecording) {
    const WW = { N:3908, E:5151, S:3908, W:5152 };
    const gapPx = Math.round(H * 0.04);
    const rowH  = Math.round((H - gapPx) / 2);
    const nW = Math.round(WW.N / (WW.N+WW.E) * W); const eW = W - nW;
    const sW = Math.round(WW.S / (WW.S+WW.W) * W); const wW = W - sW;
    drawGuidePanel(ctx, 'N', 0,  0,          nW, rowH);
    drawGuidePanel(ctx, 'E', nW, 0,          eW, rowH);
    drawGuidePanel(ctx, 'S', 0,  rowH+gapPx, sW, rowH);
    drawGuidePanel(ctx, 'W', sW, rowH+gapPx, wW, rowH);
  } else {
    drawGuidePanel(ctx, state.isolateWall || 'ALL', 0, 0, W, H);
  }
}

function animate() {
  if (!isRecording) {
    requestAnimationFrame(animate);
    const now = performance.now();
    const dt = Math.min(0.1, (now - lastAnimTime) / 1000);
    lastAnimTime = now;
    const cyclesInt = Math.max(1, Math.round(state.cycles));
    const loopDur = state.duration / cyclesInt;
    const p = (clock.getElapsedTime() % loopDur) / loopDur;
    mGen.u_progress.value = p; mPost.u_progress.value = p;
    drawTextLayer();
    drawVuMeter(dt);
    drawClock(p);
    drawLissajous(dt);
    drawParticles(dt);
    renderer.setRenderTarget(renderTarget); renderer.render(scene, camera);
    mPost.tDiffuse.value = renderTarget.texture;
    renderer.setRenderTarget(null); renderer.render(postScene, postCamera);
    drawGuideOverlayFrame(); // draw guide every frame — immediate, no rAF timing issues
  }
}

// Wall pixel widths for isolate aspect ratios
const WALL_PX = { N: 3908, E: 5151, S: 3908, W: 5152 };

function fitCanvas() {
    const pad = 40;
    const availW = window.innerWidth - (pad * 2);
    const availH = window.innerHeight
        - document.getElementById('bottom-container').offsetHeight
        - document.getElementById('palette-bar').offsetHeight
        - document.getElementById('global-header').offsetHeight - 60;
    let w, h;

    if (state.isolateWall && !isRecording) {
        // Single-wall isolate: size canvas to wall's true aspect ratio
        const wallW = WALL_PX[state.isolateWall] || SPECS.width;
        const wallAspect = wallW / SPECS.height;
        w = availW; h = Math.floor(w / wallAspect);
        if (h > availH) { h = availH; w = Math.floor(h * wallAspect); }
        renderer.setSize(w, h); renderTarget.setSize(w, h);

        // Render only the wall's pixel slice — no digital zoom, full native quality
        const WALL_STARTS = { N: 0, E: 3908, S: 9059, W: 12964 };
        const wallStartPx = WALL_STARTS[state.isolateWall];
        mGen.u_globalOffset.value  = wallStartPx / SPECS.width;
        mGen.u_globalScale.value   = wallW / SPECS.width;
        mPost.u_globalOffset.value = wallStartPx / SPECS.width;
        mPost.u_globalScale.value  = wallW / SPECS.width;

    } else if (state.splitView && !isRecording) {
        const gapRatio = 0.04; const activeRatio = 1.0 - gapRatio;
        const splitAspect = (SPECS.width / 2) / ((SPECS.height * 2) / activeRatio);
        w = availW; h = Math.floor(w / splitAspect);
        if (h > availH) { h = availH; w = Math.floor(h * splitAspect); }
        renderer.setSize(w, h); renderTarget.setSize(w * 2, Math.floor((h * activeRatio) / 2));
        mGen.u_globalOffset.value  = 0.0; mGen.u_globalScale.value  = 1.0;
        mPost.u_globalOffset.value = 0.0; mPost.u_globalScale.value = 1.0;

    } else {
        const scale = availW / SPECS.width; w = Math.floor(SPECS.width * scale); h = Math.floor(SPECS.height * scale);
        if (h > availH) { h = availH; w = Math.floor(h * (SPECS.width / SPECS.height)); }
        renderer.setSize(w, h); renderTarget.setSize(w, h);
        mGen.u_globalOffset.value  = 0.0; mGen.u_globalScale.value  = 1.0;
        mPost.u_globalOffset.value = 0.0; mPost.u_globalScale.value = 1.0;
    }
    mPost.u_canvasWidth.value = w;

    const fullLabels = document.getElementById('wall-labels-full');
    const topLabels  = document.getElementById('split-labels-top');
    const botLabels  = document.getElementById('split-labels-bottom');
    const isoLabel   = document.getElementById('iso-wall-label');
    if (fullLabels && topLabels && botLabels) {
        const isSplit = state.splitView && !isRecording && !state.isolateWall;
        const isIso   = !!state.isolateWall && !isRecording;
        fullLabels.style.display = (!isSplit && !isIso) ? 'flex' : 'none';
        topLabels.style.display  = isSplit ? 'flex' : 'none';
        botLabels.style.display  = isSplit ? 'flex' : 'none';
        fullLabels.style.width = w + 'px'; topLabels.style.width = w + 'px'; botLabels.style.width = w + 'px';
        if (isoLabel) {
            if (isIso) {
                const WALL_NAMES = { N: 'NORTH', E: 'EAST', S: 'SOUTH', W: 'WEST' };
                isoLabel.querySelector('.label-box').textContent = '[ ' + WALL_NAMES[state.isolateWall] + ' ]';
                isoLabel.style.display = 'flex';
                isoLabel.style.width   = w + 'px';
            } else {
                isoLabel.style.display = 'none';
            }
        }
    }

    // Position both overlays (guide + idle) to match the render canvas
    requestAnimationFrame(positionOverlays);
}
window.addEventListener('resize', fitCanvas);

// ── Multi-image layer (l8) ─────────────────────────────────────────────────
// Each entry: { id, img, name, thumbUrl, posX, posY, scale, opacity }
const l8Images = [];
let l8NextId = 0;
let l8SelId  = null;   // currently selected image id
const L8_CANVAS_W = 18119, L8_CANVAS_H = 1080;

function l8Composite() {
  const canvas = document.createElement('canvas');
  canvas.width = L8_CANVAS_W; canvas.height = L8_CANVAS_H;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, L8_CANVAS_W, L8_CANVAS_H);
  l8Images.forEach(item => {
    const aspect = item.img.width / item.img.height;
    const drawH  = L8_CANVAS_H * item.scale;
    const drawW  = drawH * aspect;
    const x = (item.posX + 0.5) * L8_CANVAS_W - drawW / 2;
    const y = (0.5 - item.posY) * L8_CANVAS_H - drawH / 2;
    ctx.globalAlpha = item.opacity;
    ctx.drawImage(item.img, x, y, drawW, drawH);
    ctx.globalAlpha = 1;
  });
  if (l8Texture && l8Texture.dispose) l8Texture.dispose();
  l8Texture = new THREE.CanvasTexture(canvas);
  l8Texture.minFilter = THREE.LinearFilter;
  l8Texture.magFilter = THREE.LinearFilter;
  mGen.u_l8_Tex.value     = l8Texture;
  mGen.u_l8_Aspect.value  = L8_CANVAS_W / L8_CANVAS_H;
  mGen['u_l8_scale'] && (mGen['u_l8_scale'].value = 1);
  mGen['u_l8_posX']  && (mGen['u_l8_posX'].value  = 0);
  mGen['u_l8_posY']  && (mGen['u_l8_posY'].value  = 0);
}

// Sync the universal controls panel to the selected image
function l8SyncControls() {
  const ctrl = document.getElementById('l8-img-controls');
  const tint = document.getElementById('l8-tint-row');
  const hint = document.getElementById('l8-none-hint');
  const item = l8Images.find(i => i.id === l8SelId);
  if (!item) {
    if (ctrl) ctrl.style.display = 'none';
    if (tint) tint.style.display = 'none';
    if (hint) hint.style.display = l8Images.length ? 'none' : '';
    return;
  }
  if (hint) hint.style.display = 'none';
  if (ctrl) ctrl.style.display = 'grid';
  if (tint) tint.style.display = '';
  // Set slider + number values
  const map = { 'l8c-scale': item.scale, 'l8c-panx': item.posX, 'l8c-posy': item.posY, 'l8c-opacity': item.opacity };
  Object.entries(map).forEach(([id, val]) => {
    const el = document.getElementById(id);
    const el2 = document.getElementById(id + '-n');
    if (el)  el.value  = val;
    if (el2) el2.value = parseFloat(val).toFixed(3);
  });
}

function l8RefreshThumbs() {
  const row = document.getElementById('l8-thumb-row');
  const hint = document.getElementById('l8-none-hint');
  if (!row) return;
  row.innerHTML = '';
  if (l8Images.length === 0) {
    l8SelId = null; l8SyncControls();
    if (hint) hint.style.display = '';
    return;
  }
  if (hint) hint.style.display = 'none';
  // Auto-select first if none selected
  if (!l8Images.find(i => i.id === l8SelId)) l8SelId = l8Images[0].id;
  l8Images.forEach(item => {
    const btn = document.createElement('div');
    btn.className = 'l8-thumb' + (item.id === l8SelId ? ' selected' : '');
    btn.innerHTML = `<img src="${item.thumbUrl}" alt="${item.name}"><div class="l8-del" data-id="${item.id}">✕</div>`;
    btn.addEventListener('click', (e) => {
      if (e.target.classList.contains('l8-del')) return;
      l8SelId = item.id;
      l8RefreshThumbs();
      l8SyncControls();
    });
    btn.querySelector('.l8-del').addEventListener('click', (e) => {
      e.stopPropagation();
      const idx = l8Images.findIndex(i => i.id === item.id);
      if (idx >= 0) l8Images.splice(idx, 1);
      if (l8SelId === item.id) l8SelId = l8Images.length ? l8Images[0].id : null;
      l8RefreshThumbs();
      l8SyncControls();
      if (l8Images.length === 0) { state.l8_en = false; bindAll(); updateUniforms(); }
      else l8Composite();
    });
    row.appendChild(btn);
  });
  l8SyncControls();
}

// Universal control slider+number pair — wire to selected image
(function() {
  const pairs = [
    ['l8c-scale',   'scale',   1],
    ['l8c-panx',    'posX',    3],
    ['l8c-posy',    'posY',    3],
    ['l8c-opacity', 'opacity', 2],
  ];
  pairs.forEach(([id, prop, decimals]) => {
    const range = document.getElementById(id);
    const num   = document.getElementById(id + '-n');
    if (!range) return;
    const update = (val) => {
      const item = l8Images.find(i => i.id === l8SelId);
      if (!item) return;
      item[prop] = val;
      if (range) range.value = val;
      if (num)   num.value   = val.toFixed(decimals);
      l8Composite();
    };
    range.addEventListener('input', () => update(parseFloat(range.value)));
    if (num) num.addEventListener('change', () => update(parseFloat(num.value)));
  });
})();

// Add-button triggers hidden file input
document.getElementById('l8-add-btn').onclick = () => document.getElementById('l8-upload').click();

document.getElementById('l8-upload').onchange = (e) => {
  const files = Array.from(e.target.files); if (!files.length) return;
  let pending = files.length;
  files.forEach(file => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      const tc = document.createElement('canvas');
      tc.width = 80; tc.height = 45;
      tc.getContext('2d').drawImage(img, 0, 0, 80, 45);
      const item = { id: l8NextId++, img, name: file.name, thumbUrl: tc.toDataURL(), posX:0, posY:0, scale:1, opacity:1 };
      l8Images.push(item);
      l8SelId = item.id;
      pending--;
      if (pending === 0) {
        l8Composite();
        l8RefreshThumbs();
        state.l8_en = true; bindAll(); updateUniforms();
      }
    };
    img.src = url;
  });
  e.target.value = '';
};

document.getElementById('l21-upload').onchange = (e) => {
    const file = e.target.files[0]; if(!file) return;
    const img = new Image(); const url = URL.createObjectURL(file);
    img.onload = () => {
        mGen.u_l21_ImgAspect.value = img.width / img.height;
        // Store source image for re-blur on slider change
        window._l21SrcImg = img;
        window._l21SrcAspect = img.width / img.height;
        applyL21Blur(state.l21_blur || 0);
        state.l21_en = true; bindAll(); updateUniforms();
    }; img.src = url;
};

function applyL21Blur(blurAmt) {
  const img = window._l21SrcImg; if (!img) return;
  const W = Math.min(img.width, 4096);
  const H = Math.floor(W / (img.width / img.height));
  const canvas = document.createElement('canvas');
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext('2d');
  if (blurAmt > 0) {
    const px = Math.round(blurAmt * 40); // 0..40px blur
    ctx.filter = `blur(${px}px)`;
    // Draw slightly oversized to avoid edge darkening from blur
    ctx.drawImage(img, -px*2, -px*2, W + px*4, H + px*4);
    ctx.filter = 'none';
  } else {
    ctx.drawImage(img, 0, 0, W, H);
  }
  let tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = THREE.RepeatWrapping;
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  tex.generateMipmaps = true;
  mGen.u_l21_Tex.value = tex;
  mGen.u_l21_ImgAspect.value = window._l21SrcAspect || 2.0;
  l21Texture = tex;
}

// Hook blur slider to applyL21Blur
(function() {
  const blurEl = document.getElementById('l21-blur');
  if (blurEl) {
    blurEl.addEventListener('input', () => {
      state.l21_blur = parseFloat(blurEl.value);
      applyL21Blur(state.l21_blur);
    });
  }
})();


// ── Per-effect Randomize buttons ─────────────────────────────────────────────
// Inject a [🎲 RANDOMIZE] button into every tab-content at startup,
// then handle clicks via delegation on the effects panel.
(function() {
  // Skip tabs that shouldn't be randomized (image upload, text, etc.)
  const SKIP_TABS = new Set(['tab-svg', 'tab-equi']);

  // Inject buttons after DOM is built
  document.querySelectorAll('.tab-content').forEach(tab => {
    if (SKIP_TABS.has(tab.id)) return;
    const btn = document.createElement('button');
    btn.className = 'btn-randomize';
    btn.dataset.tabId = tab.id;
    btn.textContent = '🎲  RANDOMIZE EFFECT';
    tab.appendChild(btn);
  });

  // Random value clamped to step increments
  function randInRange(min, max, step) {
    const steps = Math.round((max - min) / step);
    return parseFloat((min + Math.round(Math.random() * steps) * step).toFixed(6));
  }

  // Randomize all range sliders and color inputs in a tab
  function randomizeTab(tab) {
    // Range sliders
    tab.querySelectorAll('input[type="range"]').forEach(el => {
      const min  = parseFloat(el.min);
      const max  = parseFloat(el.max);
      const step = parseFloat(el.step) || 0.01;
      const key  = el.id.replace(/-/g, '_');
      // Skip pure control inputs (the universal l8 sliders, etc.)
      if (!Object.prototype.hasOwnProperty.call(state, key)) return;
      // Keep speed params in a sane range (avoid huge speeds)
      const rMin = id => id.includes('speed') || id.includes('motion') ? Math.max(min, -2) : min;
      const rMax = id => id.includes('speed') || id.includes('motion') ? Math.min(max,  2) : max;
      const val = randInRange(rMin(el.id), rMax(el.id), step);
      el.value = val;
      state[key] = val;
      const numEl = document.getElementById(el.id + '-val');
      if (numEl) numEl.value = val;
    });
    // Color inputs — randomize only non-opacity, non-neutral colors
    tab.querySelectorAll('input[type="color"]').forEach(el => {
      const key = el.id.replace(/-/g, '_');
      if (!Object.prototype.hasOwnProperty.call(state, key)) return;
      // Generate vivid random color
      const hue = Math.floor(Math.random() * 360);
      const sat = 60 + Math.floor(Math.random() * 40);
      const lgt = 30 + Math.floor(Math.random() * 40);
      const hex = hslToHex(hue, sat, lgt);
      el.value = hex;
      state[key] = hex;
      const hexEl = document.getElementById(el.id + '-hex');
      if (hexEl) hexEl.value = hex;
    });
    updateUniforms();
    buildGeneratorShader();
  }

  function hslToHex(h, s, l) {
    s /= 100; l /= 100;
    const k = n => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = n => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    const toHex = x => Math.round(x * 255).toString(16).padStart(2, '0');
    return '#' + toHex(f(0)) + toHex(f(8)) + toHex(f(4));
  }

  document.getElementById('effects-panel').addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-randomize');
    if (!btn) return;
    const tab = document.getElementById(btn.dataset.tabId);
    if (tab) randomizeTab(tab);
  });
})();

document.getElementById('btn-reset').onclick = () => { 
  Object.assign(state, JSON.parse(JSON.stringify(defaultState))); 
  document.getElementById('presetSelect').value = 'default'; document.getElementById('view-full').checked = true; mPost.u_splitView.value = 0.0;
  bindAll(); bindTextControls(); bindVuControls(); bindCanvasColors(); updateUniforms(); buildGeneratorShader(); renderLayerStack();
};
document.getElementById('btn-save').onclick = () => { const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([JSON.stringify(state)], {type:'json'})); a.download = `${state.presetName}.json`; a.click(); };
document.getElementById('btn-load').onclick = () => document.getElementById('file-input').click();
document.getElementById('file-input').onchange = (e) => {
  const r = new FileReader();
  r.onload = (ev) => { 
    Object.assign(state, JSON.parse(ev.target.result)); 
    document.getElementById('presetSelect').value = 'default'; document.getElementById(state.splitView ? 'view-split' : 'view-full').checked = true;
    mPost.u_splitView.value = state.splitView ? 1.0 : 0.0;
    bindAll(); bindTextControls(); bindVuControls(); bindCanvasColors(); updateUniforms(); buildGeneratorShader(); renderLayerStack();
  }; r.readAsText(e.target.files[0]);
};

document.getElementById('btn-record').onclick = async () => {
    isRecording = true;
    const overlay = document.getElementById('export-overlay'); const pBar = document.getElementById('progress-bar'); const pText = document.getElementById('progress-text');
    overlay.style.display = 'flex';
    
    const wasSplit = state.splitView; state.splitView = false; mPost.u_splitView.value = 0.0; fitCanvas();
    mGen.u_globalOffset.value = 0.0; mGen.u_globalScale.value = 1.0; mPost.u_globalOffset.value = 0.0; mPost.u_globalScale.value = 1.0;
    
    const w = Math.floor(SPECS.width * state.exportScale); const h = Math.floor(SPECS.height * state.exportScale);
    renderer.setSize(w, h); renderTarget.setSize(w, h); mPost.u_canvasWidth.value = w;
    
    const writer = new WebMWriter({ quality: 0.90, frameRate: state.fps }); const zip = new JSZip(); const framesFolder = zip.folder("image_sequence");
    const frames = state.duration * state.fps;
    
    for(let i=0; i<frames; i++) {
        const _cyc = Math.max(1, Math.round(state.cycles)); const p = (i/frames * _cyc) % 1.0; mGen.u_progress.value = p; mPost.u_progress.value = p;
        renderer.setRenderTarget(renderTarget); renderer.render(scene, camera); mPost.tDiffuse.value = renderTarget.texture; renderer.setRenderTarget(null); renderer.render(postScene, postCamera);
        writer.addFrame(renderer.domElement);
        const blob = await new Promise(res => renderer.domElement.toBlob(res, 'image/png'));
        framesFolder.file(`frame_${String(i).padStart(5, '0')}.png`, blob);
        pBar.style.width = `${Math.floor((i/frames) * 100)}%`; pText.innerText = `RENDERING: ${i}/${frames}`;
        if(i%10===0) await new Promise(r=>setTimeout(r,0));
    }
    pText.innerText = "COMPILING WEBM..."; await new Promise(r=>setTimeout(r,10));
    const webmBlob = await writer.complete(); zip.file(`${state.presetName}_preview.webm`, webmBlob);
    pText.innerText = "ZIPPING FILES (This may take a minute)..."; pBar.style.width = "100%"; await new Promise(r=>setTimeout(r,10));
    const zipBlob = await zip.generateAsync({ type: "blob" }); const a = document.createElement('a'); a.href = URL.createObjectURL(zipBlob); a.download = `${state.presetName}_Export.zip`; a.click();
    state.splitView = wasSplit; mPost.u_splitView.value = wasSplit ? 1.0 : 0.0; overlay.style.display = 'none'; isRecording = false; fitCanvas(); animate();
};

document.getElementById('btn-record-walls').onclick = async () => {
    isRecording = true;
    const overlay = document.getElementById('export-overlay'); const pBar = document.getElementById('progress-bar'); const pText = document.getElementById('progress-text');
    overlay.style.display = 'flex';
    
    const wasSplit = state.splitView; state.splitView = false; mPost.u_splitView.value = 0.0;
    
    const zip = new JSZip(); const frames = state.duration * state.fps; const scale = state.exportScale; const overscan = 64; 
    const walls = [ { name: "W1_North", start: 0, width: 3908 }, { name: "W2_East", start: 3908, width: 5151 }, { name: "W3_South", start: 9059, width: 3905 }, { name: "W4_West", start: 12964, width: 5155 } ];

    for (let wIdx = 0; wIdx < walls.length; wIdx++) {
        const wall = walls[wIdx];
        const startPx = wall.start - overscan; const endPx = wall.start + wall.width + overscan; const renderWidthPx = endPx - startPx;
        
        mGen.u_globalOffset.value = startPx / SPECS.width; mGen.u_globalScale.value = renderWidthPx / SPECS.width;
        mPost.u_globalOffset.value = startPx / SPECS.width; mPost.u_globalScale.value = renderWidthPx / SPECS.width;
        
        const rW = Math.floor(renderWidthPx * scale); const rH = Math.floor(SPECS.height * scale);
        renderer.setSize(rW, rH); renderTarget.setSize(rW, rH); mPost.u_canvasWidth.value = rW;

        const cropW = Math.floor(wall.width * scale);
        const cropCanvas = document.createElement('canvas'); cropCanvas.width = cropW; cropCanvas.height = rH;
        const cropCtx = cropCanvas.getContext('2d'); const cropOffsetX = Math.floor((wall.start - startPx) * scale); 

        const writer = new WebMWriter({ quality: 0.90, frameRate: state.fps }); const folder = zip.folder(wall.name);
        
        for(let i=0; i<frames; i++) {
            const _cyc2 = Math.max(1, Math.round(state.cycles)); const p = (i/frames * _cyc2) % 1.0; mGen.u_progress.value = p; mPost.u_progress.value = p;
            renderer.setRenderTarget(renderTarget); renderer.render(scene, camera); mPost.tDiffuse.value = renderTarget.texture; renderer.setRenderTarget(null); renderer.render(postScene, postCamera);
            cropCtx.drawImage(renderer.domElement, -cropOffsetX, 0);
            writer.addFrame(cropCanvas);
            const blob = await new Promise(res => cropCanvas.toBlob(res, 'image/png'));
            folder.file(`frame_${String(i).padStart(5, '0')}.png`, blob);
            const totalSteps = frames * 4; const currentStep = wIdx * frames + i;
            pBar.style.width = `${Math.floor((currentStep/totalSteps) * 100)}%`; pText.innerText = `RENDERING ${wall.name}: ${i}/${frames}`;
            if(i%5===0) await new Promise(r=>setTimeout(r,0));
        }
        pText.innerText = `COMPILING ${wall.name} WEBM...`; await new Promise(r=>setTimeout(r,10));
        const webmBlob = await writer.complete(); zip.file(`${state.presetName}_${wall.name}_preview.webm`, webmBlob);
    }

    pText.innerText = "ZIPPING FILES (This may take a minute)..."; pBar.style.width = "100%"; await new Promise(r=>setTimeout(r,10));
    const zipBlob = await zip.generateAsync({ type: "blob" }); const a = document.createElement('a'); a.href = URL.createObjectURL(zipBlob); a.download = `${state.presetName}_Tiled_Export.zip`; a.click();
    
    mGen.u_globalOffset.value = 0.0; mGen.u_globalScale.value = 1.0; mPost.u_globalOffset.value = 0.0; mPost.u_globalScale.value = 1.0;
    state.splitView = wasSplit; mPost.u_splitView.value = wasSplit ? 1.0 : 0.0; overlay.style.display = 'none'; isRecording = false; fitCanvas(); animate();
};


// ── Per-wall single render ───────────────────────────────────
document.querySelectorAll('.btn-wall-single').forEach(btn => {
    btn.addEventListener('click', async () => {
        const WALL_DEFS = {
            N: { name: 'W1_North', start: 0,     width: 3908 },
            E: { name: 'W2_East',  start: 3908,  width: 5151 },
            S: { name: 'W3_South', start: 9059,  width: 3905 },
            W: { name: 'W4_West',  start: 12964, width: 5155 }
        };
        const wall = WALL_DEFS[btn.dataset.wall];
        isRecording = true;
        const overlay = document.getElementById('export-overlay'); const pBar = document.getElementById('progress-bar'); const pText = document.getElementById('progress-text');
        overlay.style.display = 'flex';
        const wasSplit = state.splitView; state.splitView = false; mPost.u_splitView.value = 0.0;
        const scale = state.exportScale; const overscan = 64; const frames = state.duration * state.fps;
        const startPx = wall.start - overscan; const endPx = wall.start + wall.width + overscan; const renderWidthPx = endPx - startPx;
        mGen.u_globalOffset.value = startPx / SPECS.width; mGen.u_globalScale.value = renderWidthPx / SPECS.width;
        mPost.u_globalOffset.value = startPx / SPECS.width; mPost.u_globalScale.value = renderWidthPx / SPECS.width;
        const rW = Math.floor(renderWidthPx * scale); const rH = Math.floor(SPECS.height * scale);
        renderer.setSize(rW, rH); renderTarget.setSize(rW, rH); mPost.u_canvasWidth.value = rW;
        const cropW = Math.floor(wall.width * scale);
        const cropCanvas = document.createElement('canvas'); cropCanvas.width = cropW; cropCanvas.height = rH;
        const cropCtx = cropCanvas.getContext('2d'); const cropOffsetX = Math.floor((wall.start - startPx) * scale);
        const writer = new WebMWriter({ quality: 0.90, frameRate: state.fps }); const zip = new JSZip(); const folder = zip.folder(wall.name);
        for (let i = 0; i < frames; i++) {
            const _cyc = Math.max(1, Math.round(state.cycles)); const p = (i / frames * _cyc) % 1.0; mGen.u_progress.value = p; mPost.u_progress.value = p;
            renderer.setRenderTarget(renderTarget); renderer.render(scene, camera); mPost.tDiffuse.value = renderTarget.texture; renderer.setRenderTarget(null); renderer.render(postScene, postCamera);
            cropCtx.clearRect(0, 0, cropW, rH); cropCtx.drawImage(renderer.domElement, -cropOffsetX, 0);
            writer.addFrame(cropCanvas);
            const blob = await new Promise(res => cropCanvas.toBlob(res, 'image/png'));
            folder.file(`frame_${String(i).padStart(5, '0')}.png`, blob);
            pBar.style.width = `${Math.floor((i / frames) * 100)}%`; pText.innerText = `RENDERING ${wall.name}: ${i + 1}/${frames}`;
            if (i % 5 === 0) await new Promise(r => setTimeout(r, 0));
        }
        pText.innerText = `COMPILING ${wall.name} WEBM...`; await new Promise(r => setTimeout(r, 10));
        const webmBlob = await writer.complete(); zip.file(`${state.presetName}_${wall.name}_preview.webm`, webmBlob);
        pText.innerText = 'ZIPPING...'; pBar.style.width = '100%'; await new Promise(r => setTimeout(r, 10));
        const zipBlob = await zip.generateAsync({ type: 'blob' }); const a = document.createElement('a'); a.href = URL.createObjectURL(zipBlob); a.download = `${state.presetName}_${wall.name}_Export.zip`; a.click();
        mGen.u_globalOffset.value = 0.0; mGen.u_globalScale.value = 1.0; mPost.u_globalOffset.value = 0.0; mPost.u_globalScale.value = 1.0;
        state.splitView = wasSplit; mPost.u_splitView.value = wasSplit ? 1.0 : 0.0;
        overlay.style.display = 'none'; isRecording = false; fitCanvas(); animate();
    });
});

// ── Dark/Light theme toggle ──────────────────────────────────
const btnTheme = document.getElementById('btn-theme');
let isDark = true;
btnTheme.addEventListener('click', () => {
  isDark = !isDark;
  document.body.classList.toggle('light-mode', !isDark);
  btnTheme.textContent = isDark ? '☀︎' : '☾';
  btnTheme.title = isDark ? 'Switch to light mode' : 'Switch to dark mode';
});

// ── Idle Lissajous animation ─────────────────────────────────────────────────
// startIdleLissajous() is called from positionOverlays() whenever the idle DOM
// is rebuilt, so new canvases get animated immediately.
const LISS_CONFIGS = [
  { fx: 3, fy: 2, speed: 0.0007 },
  { fx: 5, fy: 4, speed: 0.0006 },
  { fx: 3, fy: 4, speed: 0.0008 },
  { fx: 5, fy: 2, speed: 0.0005 },
];
const LISS_PHASES = [0, Math.PI * 0.5, Math.PI, Math.PI * 1.5];
const LISS_STEPS  = 500;
let lissRafId = null;

function drawLissOnCanvas(cvs, ts, config, phaseOffset) {
  const ctx = cvs.getContext('2d');
  const W = cvs.width, H = cvs.height;
  if (!W || !H) return;
  const phase = (ts * config.speed + phaseOffset) % (Math.PI * 2);
  ctx.clearRect(0, 0, W, H);
  const amber = getComputedStyle(document.body).getPropertyValue('--amber').trim() || '#ffb000';
  for (let pass = 0; pass < 4; pass++) {
    ctx.beginPath();
    ctx.strokeStyle = amber;
    ctx.globalAlpha = 0.07 + pass * 0.22;
    ctx.lineWidth   = 0.5 + pass * 0.4;
    ctx.lineCap = 'round';
    const rx = W * 0.43, ry = H * 0.43, cx = W / 2, cy = H / 2;
    for (let i = 0; i <= LISS_STEPS; i++) {
      const t = (i / LISS_STEPS) * Math.PI * 2;
      const x = cx + rx * Math.sin(config.fx * t + phase);
      const y = cy + ry * Math.sin(config.fy * t);
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.stroke();
  }
  ctx.globalAlpha = 1;
}

function lissDrawLoop(ts) {
  const msgEl = document.getElementById('no-effect-msg');
  if (!msgEl || msgEl.style.display === 'none') { lissRafId = null; return; }
  const canvases = msgEl.querySelectorAll('.idle-liss-canvas');
  canvases.forEach((cvs, i) => {
    drawLissOnCanvas(cvs, ts, LISS_CONFIGS[i % LISS_CONFIGS.length], LISS_PHASES[i % LISS_PHASES.length]);
  });
  lissRafId = requestAnimationFrame(lissDrawLoop);
}

function startIdleLissajous() {
  if (!lissRafId) lissRafId = requestAnimationFrame(lissDrawLoop);
}

// Start on load; also observe visibility changes
startIdleLissajous();
(function() {
  const msgEl = document.getElementById('no-effect-msg');
  if (!msgEl) return;
  const observer = new MutationObserver(() => {
    const visible = msgEl.style.display !== 'none';
    if (visible && !lissRafId) startIdleLissajous();
  });
  observer.observe(msgEl, { attributes: true, attributeFilter: ['style'] });
})();


// ── Wall Isolate Buttons ─────────────────────────────────────
const ISO_WALL_MAP = { 'iso-N': 'N', 'iso-E': 'E', 'iso-S': 'S', 'iso-W': 'W' };
const ISO_UV = { N: 0.0, E: 1.0, S: 2.0, W: 3.0 };

function setIsolateWall(wall) {
  state.isolateWall = wall;
  // Clear all active states
  Object.keys(ISO_WALL_MAP).forEach(id => {
    const btn = document.getElementById(id);
    if (btn) btn.classList.toggle('active', ISO_WALL_MAP[id] === wall);
  });
  // Update radio buttons
  if (!wall) {
    document.getElementById('view-full').checked = true;
    state.splitView = false;
    mPost.u_splitView.value = 0.0;
  }
  mPost.u_isoWall.value = -1.0; // globalOffset/Scale handles cropping; iso shader remap not needed
  fitCanvas();
}

['iso-N','iso-E','iso-S','iso-W'].forEach(id => {
  const btn = document.getElementById(id);
  if (!btn) return;
  btn.addEventListener('click', () => {
    const wall = ISO_WALL_MAP[id];
    // Toggle off if already active
    const newWall = state.isolateWall === wall ? null : wall;
    // Deactivate split view if isolating
    if (newWall) {
      document.getElementById('view-full').checked = true;
      document.getElementById('view-split').checked = false;
      state.splitView = false; mPost.u_splitView.value = 0.0;
    }
    setIsolateWall(newWall);
  });
});

// ── Guide overlay show/hide ───────────────────────────────────
const showGuideEl = document.getElementById('showGuide');
if (showGuideEl) {
  showGuideEl.onchange = (e) => {
    state.showGuide = e.target.checked;
    // Immediately update idle visibility
    const msgEl = document.getElementById('no-effect-msg');
    const anyActive = Object.keys(state).some(k => k.endsWith('_en') && state[k]);
    if (msgEl) msgEl.style.display = (anyActive || state.showGuide) ? 'none' : 'flex';
    // Immediately draw/hide — no rAF delay needed
    drawGuideOverlayFrame();
  };
}

// ── Guide overlay data ────────────────────────────────────────
// Obstacle coords from SVG Layer_1 rects (wall-local space, x/y/w/h).
// Truss cx values are user-specified wall-local center X positions.
// Canvas total: 18119×1080px  N:0–3908  E:3908–9059  S:9059–12967  W:12967–18119

// Truss SVG icon pre-colored red — drawn with ctx.drawImage + fill overlay + hatch
(function() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 145.9415205 1080"><path fill="none" stroke="rgba(255,80,80,1)" stroke-width="4" d="M133.4119829,1058h-6.7053934V22h6.7053934c5.5224609,0,10-4.4770508,10-10s-4.4775391-10-10-10H12.787329C7.264868,2,2.787329,6.4770508,2.787329,12s4.4775391,10,10,10h6.7044168v1036h-6.7044168c-5.5224609,0-10,4.4775391-10,10s4.4775391,10,10,10h120.624654c5.5224609,0,10-4.4775391,10-10s-4.4775391-10-10-10ZM109.1776589,22l-30.1907959,41.8546753V22h30.1907959ZM109.1176613,34.0491943l-30.1307983,84.3859253v-42.6144409l30.1307983-41.7714844ZM78.986863,855.854187v-45.854187h33.0757446l-33.0757446,45.854187ZM109.1172951,826.0501709l-30.1304321,84.3849487v-42.6139526l30.1304321-41.7709961ZM78.986863,723.854187v-45.854187h33.0757446l-33.0757446,45.854187ZM109.1172951,694.0501709l-30.1304321,84.3849487v-42.6139526l30.1304321-41.7709961ZM78.986863,591.8544922v-45.8544922h33.0760498l-33.0760498,45.8544922ZM109.1172951,562.0501709l-30.1304321,84.3849487v-42.6139526l30.1304321-41.7709961ZM78.986863,459.8546753v-45.8546753h33.0761108l-33.0761108,45.8546753ZM109.1176003,430.0493164l-30.1307373,84.3858032v-42.6142578l30.1307373-41.7715454ZM78.986863,327.8546753v-45.8546753h33.0761108l-33.0761108,45.8546753ZM109.1176613,298.0491943l-30.1307983,84.3859253v-42.6144409l30.1307983-41.7714844ZM78.986863,195.8546753v-45.8546753h33.0761108l-33.0761108,45.8546753ZM109.1176613,166.0491943l-30.1307983,84.3859253v-42.6144409l30.1307983-41.7714844ZM66.986863,138h-32.8515015l32.8515015-45.5432739v45.5432739ZM66.986863,212.4907227l-29.7785034,41.2831421,29.7785034-82.7614746v41.4783325ZM66.986863,224.4567261v45.5432739h-32.8515015l32.8515015-45.5432739ZM66.986863,344.4907227l-29.7785034,41.2831421,29.7785034-82.7614746v41.4783325ZM66.986863,356.4567261v45.5432739h-32.8515015l32.8515015-45.5432739ZM66.986863,476.4907227l-29.7788086,41.2835083,29.7788086-82.7619629v41.4784546ZM66.986863,488.4570312v45.5429688h-32.8511353l32.8511353-45.5429688ZM66.986863,608.4904785l-29.7785645,41.28302,29.7785645-82.7615967v41.4785767ZM66.986863,620.4572144v45.5427856h-32.8511353l32.8511353-45.5427856ZM66.986863,740.4902344l-29.7785034,41.2831421,29.7785034-82.7614746v41.4783325ZM66.986863,752.4572144v45.5427856h-32.8511353l32.8511353-45.5427856ZM66.986863,872.4902344l-29.7785034,41.2831421,29.7785034-82.7614746v41.4783325ZM66.986863,884.4572144v45.5427856h-32.8511353l32.8511353-45.5427856ZM66.986863,1004.4902344l-29.7785034,41.2832031,29.7785034-82.7615356v41.4783325ZM78.986863,942h33.0757446l-33.0757446,45.854187v-45.854187ZM66.986863,1016.4572144v41.5427856h-29.9658203l29.9658203-41.5427856ZM78.986863,999.821167l30.1304321-41.7709961-30.1304321,84.3848877v-42.6138916ZM114.7065895,930h-35.2734375l35.2734375-98.7886353v98.7886353ZM114.7065895,798h-35.2734375l35.2734375-98.7886353v98.7886353ZM114.7065895,666h-35.2734375l35.2734375-98.7886353v98.7886353ZM114.7065895,534h-35.2734375l35.2734375-98.7886353v98.7886353ZM114.7065895,402h-35.2734375l35.2734375-98.7886353v98.7886353ZM114.7065895,270h-35.2734375l35.2734375-98.7886353v98.7886353ZM114.7065895,138h-35.2734375l35.2734375-98.7886353v98.7886353ZM66.986863,80.4907227l-29.7785034,41.2831421,29.7785034-82.7614746v41.4783325ZM31.4917458,150h35.4951172v.3384399l-35.4951172,98.6491699v-98.9876099ZM31.4917458,282h35.4951172v.3384399l-35.4951172,98.6491699v-98.9876099ZM31.4917458,414h35.4951172v.3384399l-35.4951172,98.6491699v-98.9876099ZM31.4917458,546h35.4951172v.3384399l-35.4951172,98.6495972v-98.9880371ZM31.4917458,678h35.4951172v.3389282l-35.4951172,98.6491699v-98.9880981ZM31.4917458,810h35.4951172v.3389282l-35.4951172,98.6491699v-98.9880981ZM31.4917458,942h35.4951172v.3389282l-35.4951172,98.6491089v-98.9880371ZM80.8614357,1058l33.8451538-94.7886353v94.7886353h-33.8451538ZM65.6693581,22L31.4917458,116.9876099V22h34.1776123Z"/></svg>`;
  window.TRUSS_IMG = new Image();
  window.TRUSS_IMG.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
})();

const GUIDE_DATA = {
  wallOffset: { N:0,    E:3908, S:9059,  W:12967 },
  wallWidth:  { N:3908, E:5151, S:3905,  W:5155  },
  // Rectangular obstacles — wall-local coords (x,y,w,h)
  obstacles: [
    // NORTH
    { wall:'N', type:'column',  x:197,  y:0,   w:192,  h:1080 },
    { wall:'N', type:'column',  x:1552, y:0,   w:192,  h:1080 },
    { wall:'N', type:'door',    x:2247, y:604, w:233,  h:476  },
    { wall:'N', type:'door',    x:3229, y:604, w:233,  h:476  },
    { wall:'N', type:'topsect', x:389,  y:0,   w:1163, h:361  },
    // EAST
    { wall:'E', type:'column',  x:209,  y:0,   w:189,  h:1080 },
    { wall:'E', type:'column',  x:1835, y:0,   w:129,  h:1080 },
    { wall:'E', type:'column',  x:3342, y:0,   w:128,  h:1080 },
    // SOUTH
    { wall:'S', type:'column',  x:1888, y:0,   w:160,  h:1080 },
    // WEST — no rect obstacles
  ],
  // Trusses — wall-local center X, rendered full-height using the truss SVG icon.
  // East: cx=1507 (first), cx=4037 (second) — user-specified
  // West: cx=899 (first), cx=3571 (second) — user-specified
  trusses: [
    { wall:'E', cx:1507 },
    { wall:'E', cx:4037 },
    { wall:'W', cx:899  },
    { wall:'W', cx:3571 },
  ],
};

function positionOverlays() {
  const wrapper = document.getElementById('canvas-wrapper');
  if (!wrapper) return;

  const rcW = parseInt(renderer.domElement.style.width)  || renderer.domElement.width;
  const rcH = parseInt(renderer.domElement.style.height) || renderer.domElement.height;
  if (!rcW || !rcH) return;

  // ── Guide overlay ─────────────────────────────────────────────────────────
  // Canvas is always display:block inside #canvas-holder.
  // We control visibility purely by drawing or clearing — no display toggling.
  const oc = document.getElementById('guide-overlay-canvas');
  if (oc) {
    // Pixel buffer + explicit CSS size must match renderer exactly (prevents blur)
    if (oc.width !== rcW || oc.height !== rcH) {
      oc.width  = rcW;
      oc.height = rcH;
      oc.style.width  = rcW + 'px';
      oc.style.height = rcH + 'px';
    }
    const ctx = oc.getContext('2d');
    ctx.clearRect(0, 0, rcW, rcH);

    if (state.showGuide) {
      const W = rcW, H = rcH;
      if (state.splitView && !isRecording) {
        const WW       = { N:3908, E:5151, S:3908, W:5152 };
        const gapPx    = Math.round(H * 0.04);
        const rowH     = Math.round((H - gapPx) / 2);
        const topTotal = WW.N + WW.E;
        const botTotal = WW.S + WW.W;
        const nW = Math.round(WW.N / topTotal * W);
        const eW = W - nW;
        const sW = Math.round(WW.S / botTotal * W);
        const wW = W - sW;
        drawGuidePanel(ctx, 'N', 0,  0,           nW, rowH);
        drawGuidePanel(ctx, 'E', nW, 0,           eW, rowH);
        drawGuidePanel(ctx, 'S', 0,  rowH+gapPx,  sW, rowH);
        drawGuidePanel(ctx, 'W', sW, rowH+gapPx,  wW, rowH);
      } else {
        drawGuidePanel(ctx, state.isolateWall || 'ALL', 0, 0, W, H);
      }
    }
  }

  // ── Idle overlay ──────────────────────────────────────────────────────────
  // Position it relative to canvas-holder (which is sized by renderer canvas).
  // canvas-holder is a flex child of canvas-wrapper — get its offset.
  const holder = document.getElementById('canvas-holder');
  const msg    = document.getElementById('no-effect-msg');
  if (!msg || !holder) return;

  // Guide active → hide idle
  if (state.showGuide) {
    msg.style.display = 'none';
    return;
  }

  // Position relative to canvas-wrapper using holder's offsetLeft/Top
  const left = holder.offsetLeft;
  const top  = holder.offsetTop;
  const W = rcW, H = rcH;

  msg.style.left   = left + 'px';
  msg.style.top    = top  + 'px';
  msg.style.width  = W    + 'px';
  msg.style.height = H    + 'px';

  // Wall pixel widths (full canvas = 18119px total)
  const WW = { N: 3908, E: 5151, S: 3908, W: 5152 };

  const blockN = msg.querySelector('[data-wall="N"]');
  const blockE = msg.querySelector('[data-wall="E"]');
  const blockS = msg.querySelector('[data-wall="S"]');
  const blockW = msg.querySelector('[data-wall="W"]');

  // Clear any previous inline structure
  msg.innerHTML = '';

  if (state.isolateWall && !isRecording) {
    // ── Single-wall isolate: one block fills the whole canvas ──────────────
    msg.style.flexDirection = 'row';
    const wall = state.isolateWall;
    const block = makeIdleBlock(wall);
    block.style.width  = W + 'px';
    block.style.height = H + 'px';
    msg.appendChild(block);

  } else if (state.splitView && !isRecording) {
    // ── Split view layout ─────────────────────────────────────────────────
    // Shader maps:  top screen half   → S+W  (right half of render target)
    //               bottom screen half → N+E  (left half of render target)
    // Gap between rows = 4% of canvas height
    const gapPx   = Math.round(H * 0.04);
    const rowH    = Math.round((H - gapPx) / 2);

    // Row widths: top row proportional to S+W, bottom row proportional to N+E
    const topTotal = WW.S + WW.W;   // S+W
    const botTotal = WW.N + WW.E;   // N+E
    const sW  = Math.round(WW.S / topTotal * W);
    const wW  = W - sW;
    const nW  = Math.round(WW.N / botTotal * W);
    const eW  = W - nW;

    msg.style.flexDirection = 'column';
    msg.style.gap = '0';

    // Top row: S + W
    const topRow = document.createElement('div');
    topRow.style.cssText = `display:flex;flex-direction:row;width:${W}px;height:${rowH}px;flex-shrink:0;`;
    const bS = makeIdleBlock('S'); bS.style.width = sW + 'px'; bS.style.height = rowH + 'px';
    const bW = makeIdleBlock('W'); bW.style.width = wW + 'px'; bW.style.height = rowH + 'px';
    topRow.appendChild(bS); topRow.appendChild(bW);

    // Gap
    const gap = document.createElement('div');
    gap.style.cssText = `width:${W}px;height:${gapPx}px;flex-shrink:0;background:transparent;`;

    // Bottom row: N + E
    const botRow = document.createElement('div');
    botRow.style.cssText = `display:flex;flex-direction:row;width:${W}px;height:${rowH}px;flex-shrink:0;`;
    const bN = makeIdleBlock('N'); bN.style.width = nW + 'px'; bN.style.height = rowH + 'px';
    const bE = makeIdleBlock('E'); bE.style.width = eW + 'px'; bE.style.height = rowH + 'px';
    botRow.appendChild(bN); botRow.appendChild(bE);

    msg.appendChild(topRow); msg.appendChild(gap); msg.appendChild(botRow);

  } else {
    // ── Full view: single row, 4 blocks proportional ───────────────────────
    msg.style.flexDirection = 'row';
    const total = WW.N + WW.E + WW.S + WW.W;
    [['N', WW.N], ['E', WW.E], ['S', WW.S], ['W', WW.W]].forEach(([wall, pw]) => {
      const b = makeIdleBlock(wall);
      b.style.width  = Math.round(pw / total * W) + 'px';
      b.style.height = H + 'px';
      msg.appendChild(b);
    });
  }

  // Re-start Lissajous on any newly created canvases
  requestAnimationFrame(() => { resizeIdleCanvases(); startIdleLissajous(); });
}

function makeIdleBlock(wall) {
  const div = document.createElement('div');
  div.className = 'idle-wall-block';
  div.dataset.wall = wall;
  div.style.flexShrink = '0';
  div.innerHTML = `
    <div class="idle-top-label">SYSTEM IDLE</div>
    <div class="idle-bottom-label">ENABLE MODULE</div>
    <canvas class="idle-liss-canvas" width="120" height="68"></canvas>`;
  return div;
}

// After adding to DOM, resize lissajous canvases to fit their containers
function resizeIdleCanvases() {
  const msg = document.getElementById('no-effect-msg');
  if (!msg) return;
  msg.querySelectorAll('.idle-wall-block').forEach(block => {
    const cvs = block.querySelector('.idle-liss-canvas');
    if (!cvs) return;
    const bw = block.clientWidth;
    const bh = block.clientHeight;
    // Target: canvas takes ~60% of block width, up to 120px, height proportional 68/120
    const targetW = Math.max(40, Math.min(120, Math.floor(bw * 0.6)));
    const targetH = Math.round(targetW * 68 / 120);
    // Only resize if visible and fits
    if (targetH < bh * 0.7) {
      cvs.width = targetW;
      cvs.height = targetH;
      cvs.style.width  = targetW + 'px';
      cvs.style.height = targetH + 'px';
    }
  });
}

// Keep old name as alias
function repositionGuideOverlay() { positionOverlays(); }

// drawGuidePanel(ctx, wallKey, panelX, panelY, panelW, panelH)
// wallKey = 'N'|'E'|'S'|'W' for isolate/split, or 'ALL' for full view.
// panelX/Y/W/H = pixel region within the canvas to draw into (allows split-view sub-panels).
// All obstacle coords are wall-local (from SVG). Truss SVG is 145.94×1080 native.
function drawGuidePanel(ctx, wallKey, panelX, panelY, panelW, panelH) {
  if (panelW < 1 || panelH < 1) return;

  const TOTAL_W = 18119, TOTAL_H = 1080;
  const WO = GUIDE_DATA.wallOffset; // { N:0, E:3908, S:9059, W:12967 }

  // Which global-x range does this panel represent?
  let gxMin, gxMax;
  if (wallKey === 'ALL') {
    gxMin = 0; gxMax = TOTAL_W;
  } else {
    const bounds = { N:[0,3908], E:[3908,9059], S:[9059,12967], W:[12967,18119] };
    [gxMin, gxMax] = bounds[wallKey];
  }
  const visW = gxMax - gxMin;

  // Convert wall-local coords → pixel coords within the panel
  function px(wall, localX) { return panelX + (WO[wall] + localX - gxMin) / visW * panelW; }
  function py(localY)       { return panelY + localY / TOTAL_H * panelH; }
  function pw(localW)       { return localW / visW * panelW; }
  function ph(localH)       { return localH / TOTAL_H * panelH; }

  // Clip all drawing to this panel
  ctx.save();
  ctx.beginPath();
  ctx.rect(panelX, panelY, panelW, panelH);
  ctx.clip();

  // Unified red style for all obstacle types
  const RED_FILL   = 'rgba(255,60,60,0.18)';
  const RED_STROKE = 'rgba(255,80,80,1)';
  const RED_HATCH  = 'rgba(255,80,80,0.15)';
  const LABELS     = { column:'COLUMN', door:'DOOR', topsect:'TOP SECT' };

  // Draw rectangular obstacles
  GUIDE_DATA.obstacles.forEach(ob => {
    // Skip obstacles not in this panel's wall(s)
    if (wallKey !== 'ALL' && ob.wall !== wallKey) return;

    const x = px(ob.wall, ob.x);
    const y = py(ob.y);
    const w = pw(ob.w);
    const h = ph(ob.h);
    if (x + w < panelX || x > panelX + panelW) return;

    // Fill
    ctx.fillStyle = RED_FILL;
    ctx.fillRect(x, y, w, h);

    // Diagonal hatch
    ctx.save();
    ctx.beginPath(); ctx.rect(x, y, w, h); ctx.clip();
    ctx.strokeStyle = RED_HATCH;
    ctx.lineWidth = 1;
    const gap = Math.max(7, Math.round(10 * panelW / 1920));
    for (let i = -panelH; i < panelW + panelH; i += gap) {
      ctx.beginPath();
      ctx.moveTo(x + i, y);
      ctx.lineTo(x + i - panelH, y + panelH);
      ctx.stroke();
    }
    ctx.restore();

    // Border
    ctx.strokeStyle = RED_STROKE;
    ctx.lineWidth = 2;
    ctx.strokeRect(x + 1, y + 1, Math.max(1, w - 2), Math.max(1, h - 2));

    // Label
    const minDim = Math.min(w, h);
    if (minDim > 14) {
      ctx.save();
      ctx.translate(x + w/2, y + h/2);
      if (h > w * 1.2) ctx.rotate(-Math.PI / 2);
      const fs = Math.max(7, Math.min(11, minDim * 0.22));
      ctx.fillStyle = RED_STROKE;
      ctx.font = `bold ${fs}px monospace`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(LABELS[ob.type] || ob.type.toUpperCase(), 0, 0);
      ctx.restore();
    }
  });

  // Trusses — SVG icon with red stroke only (no fill, no hatch)
  // Native SVG: 145.94 wide × 1080 tall. Scale to panel height, center on cx.
  const TRUSS_ASPECT = 145.9415205 / 1080;
  GUIDE_DATA.trusses.forEach(tr => {
    if (wallKey !== 'ALL' && tr.wall !== wallKey) return;

    const tH = panelH;
    const tW = TRUSS_ASPECT * tH;
    const tX = px(tr.wall, tr.cx) - tW / 2;
    const tY = panelY;
    if (tX + tW < panelX || tX > panelX + panelW) return;

    if (TRUSS_IMG.complete && TRUSS_IMG.naturalWidth > 0) {
      ctx.drawImage(TRUSS_IMG, tX, tY, tW, tH);
    }
  });

  ctx.restore(); // remove panel clip
}

// Legacy wrapper kept in case anything calls it
function drawGuideOverlay(oc, CW, CH) {
  const ctx = oc.getContext('2d');
  ctx.clearRect(0, 0, CW, CH);
  drawGuidePanel(ctx, state.isolateWall || 'ALL', 0, 0, CW, CH);
}

window.addEventListener('resize', () => requestAnimationFrame(positionOverlays));


// ── Logo scanline animation ───────────────────────────────────────────────────
// Canvas overlay drawn directly on top of the SVG using mix-blend-mode.
// Dark mode: black lines (multiply blend dims the amber logo).
// Light mode: white lines (screen blend brightens, invisible on white bg).
(function() {
  const cvs = document.getElementById('logo-scanline');
  const svg  = document.getElementById('header-logo');
  if (!cvs || !svg) return;

  let offset = 0;
  const LINE_SPACING = 4;  // px between lines — medium density

  function syncPosition() {
    // Size and position the canvas to match the SVG exactly (inside the padded wrapper)
    const svgRect     = svg.getBoundingClientRect();
    const wrapRect    = cvs.parentElement.getBoundingClientRect();
    cvs.style.left    = (svgRect.left - wrapRect.left) + 'px';
    cvs.style.top     = (svgRect.top  - wrapRect.top)  + 'px';
    cvs.style.width   = svgRect.width  + 'px';
    cvs.style.height  = svgRect.height + 'px';
    cvs.width  = Math.round(svgRect.width);
    cvs.height = Math.round(svgRect.height);
  }

  function drawScanlines() {
    const W = cvs.width, H = cvs.height;
    if (!W || !H) { requestAnimationFrame(drawScanlines); return; }

    const isLight = document.body.classList.contains('light-mode');
    const ctx = cvs.getContext('2d');
    ctx.clearRect(0, 0, W, H);

    offset = (offset + 0.126) % LINE_SPACING;

    // Dark mode: draw black semi-transparent lines (multiply darkens logo)
    // Light mode: draw white semi-transparent lines (screen brightens, blends into bg)
    ctx.fillStyle = isLight ? 'rgba(255,255,255,0.75)' : 'rgba(0,0,0,0.38)';
    for (let y = Math.floor(-LINE_SPACING + offset); y < H + LINE_SPACING; y += LINE_SPACING) {
      ctx.fillRect(0, y, W, 1);
    }
    requestAnimationFrame(drawScanlines);
  }

  window.addEventListener('resize', () => requestAnimationFrame(syncPosition));
  requestAnimationFrame(() => { syncPosition(); drawScanlines(); });
})();
updateUniforms(); buildGeneratorShader(); renderLayerStack(); bindAll(); bindTextControls(); bindVuControls(); bindCanvasColors(); fitCanvas(); animate();