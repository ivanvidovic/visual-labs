var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n)),l=(e=>typeof require<`u`?require:typeof Proxy<`u`?new Proxy(e,{get:(e,t)=>(typeof require<`u`?require:e)[t]}):e)(function(e){if(typeof require<`u`)return require.apply(this,arguments);throw Error('Calling `require` for "'+e+"\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.")});(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var u=1e3,d=1001,f=1002,p=1003,m=1004,h=1005,g=1006,_=1007,v=1008,y=1009,b=1010,x=1011,S=1012,C=1013,w=1014,T=1015,E=1016,D=1017,O=1018,k=1020,A=35902,j=35899,M=1021,N=1022,P=1023,F=1026,I=1027,L=1028,R=1029,z=1030,B=1031,ee=1033,te=33776,ne=33777,re=33778,ie=33779,ae=35840,oe=35841,se=35842,ce=35843,le=36196,ue=37492,de=37496,fe=37488,pe=37489,me=37490,he=37491,ge=37808,_e=37809,ve=37810,ye=37811,be=37812,xe=37813,Se=37814,V=37815,Ce=37816,we=37817,Te=37818,H=37819,Ee=37820,U=37821,De=36492,Oe=36494,ke=36495,Ae=36283,je=36284,Me=36285,Ne=36286,Pe=2300,Fe=2301,Ie=2302,Le=2400,Re=2401,ze=2402,Be=3200,Ve=`srgb`,He=`srgb-linear`,Ue=`linear`,We=`srgb`,Ge=7680,Ke=35044,qe=2e3;function Je(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ye(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Xe(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Ze(){let e=Xe(`canvas`);return e.style.display=`block`,e}var Qe={},$e=null;function et(...e){let t=`THREE.`+e.shift();$e?$e(`log`,t,...e):console.log(t,...e)}function W(...e){let t=`THREE.`+e.shift();$e?$e(`warn`,t,...e):console.warn(t,...e)}function G(...e){let t=`THREE.`+e.shift();$e?$e(`error`,t,...e):console.error(t,...e)}function tt(...e){let t=e.join(` `);t in Qe||(Qe[t]=!0,W(...e))}function nt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var rt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},it=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),at=Math.PI/180,ot=180/Math.PI;function st(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(it[e&255]+it[e>>8&255]+it[e>>16&255]+it[e>>24&255]+`-`+it[t&255]+it[t>>8&255]+`-`+it[t>>16&15|64]+it[t>>24&255]+`-`+it[n&63|128]+it[n>>8&255]+`-`+it[n>>16&255]+it[n>>24&255]+it[r&255]+it[r>>8&255]+it[r>>16&255]+it[r>>24&255]).toLowerCase()}function ct(e,t,n){return Math.max(t,Math.min(n,e))}function lt(e,t){return(e%t+t)%t}function ut(e,t,n){return(1-n)*e+n*t}function dt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`Invalid component type.`)}}function ft(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`Invalid component type.`)}}var pt=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},mt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(o<=0){e[t+0]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u;return}if(o>=1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=m;return}if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:W(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},K=class e{constructor(t=0,n=0,r=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ht.copy(this).projectOnVector(e),this.sub(ht)}reflect(e){return this.sub(ht.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ht=new K,gt=new mt,q=class e{constructor(t,n,r,i,a,o,s,c,l){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(_t.makeScale(e,t)),this}rotate(e){return this.premultiply(_t.makeRotation(-e)),this}translate(e,t){return this.premultiply(_t.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},_t=new q,vt=new q().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yt=new q().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bt(){let e={enabled:!0,workingColorSpace:He,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=St(e.r),e.g=St(e.g),e.b=St(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Ct(e.r),e.g=Ct(e.g),e.b=Ct(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Ue:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return tt(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return tt(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[He]:{primaries:t,whitePoint:r,transfer:Ue,toXYZ:vt,fromXYZ:yt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ve},outputColorSpaceConfig:{drawingBufferColorSpace:Ve}},[Ve]:{primaries:t,whitePoint:r,transfer:We,toXYZ:vt,fromXYZ:yt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ve}}}),e}var xt=bt();function St(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Ct(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var wt,Tt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{wt===void 0&&(wt=Xe(`canvas`)),wt.width=e.width,wt.height=e.height;let t=wt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=wt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Xe(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=St(i[e]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(St(t[e]/255)*255):t[e]=St(t[e]);return{data:t,width:e.width,height:e.height}}else return W(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Et=0,Dt=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,`id`,{value:Et++}),this.uuid=st(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Ot(r[t].image)):e.push(Ot(r[t]))}else e=Ot(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Ot(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Tt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(W(`Texture: Unable to serialize Texture.`),{})}var kt=0,At=new K,jt=class e extends rt{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=d,i=d,a=g,o=v,s=P,c=y,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,`id`,{value:kt++}),this.uuid=st(),this.name=``,this.source=new Dt(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new q,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(At).x}get height(){return this.source.getSize(At).y}get depth(){return this.source.getSize(At).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){W(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){W(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case u:e.x-=Math.floor(e.x);break;case d:e.x=e.x<0?0:1;break;case f:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case u:e.y-=Math.floor(e.y);break;case d:e.y=e.y<0?0:1;break;case f:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};jt.DEFAULT_IMAGE=null,jt.DEFAULT_MAPPING=300,jt.DEFAULT_ANISOTROPY=1;var Mt=class e{constructor(t=0,n=0,r=0,i=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this.w=ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this.w=ct(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Nt=class extends rt{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:g,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);let r=new jt({width:e,height:t,depth:n.depth});this.textures=[];let i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:g,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Dt(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:`dispose`})}},Pt=class extends Nt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ft=class extends jt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=p,this.minFilter=p,this.wrapR=d,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},It=class extends jt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=p,this.minFilter=p,this.wrapR=d,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Lt=class{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,zt):zt.fromBufferAttribute(r,t),zt.applyMatrix4(e.matrixWorld),this.expandByPoint(zt);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Bt.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Bt.copy(e.boundingBox)),Bt.applyMatrix4(e.matrixWorld),this.union(Bt)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zt),zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qt),Jt.subVectors(this.max,qt),Vt.subVectors(e.a,qt),Ht.subVectors(e.b,qt),Ut.subVectors(e.c,qt),Wt.subVectors(Ht,Vt),Gt.subVectors(Ut,Ht),Kt.subVectors(Vt,Ut);let t=[0,-Wt.z,Wt.y,0,-Gt.z,Gt.y,0,-Kt.z,Kt.y,Wt.z,0,-Wt.x,Gt.z,0,-Gt.x,Kt.z,0,-Kt.x,-Wt.y,Wt.x,0,-Gt.y,Gt.x,0,-Kt.y,Kt.x,0];return!Zt(t,Vt,Ht,Ut,Jt)||(t=[1,0,0,0,1,0,0,0,1],!Zt(t,Vt,Ht,Ut,Jt))?!1:(Yt.crossVectors(Wt,Gt),t=[Yt.x,Yt.y,Yt.z],Zt(t,Vt,Ht,Ut,Jt))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Rt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Rt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Rt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Rt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Rt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Rt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Rt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Rt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Rt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Rt=[new K,new K,new K,new K,new K,new K,new K,new K],zt=new K,Bt=new Lt,Vt=new K,Ht=new K,Ut=new K,Wt=new K,Gt=new K,Kt=new K,qt=new K,Jt=new K,Yt=new K,Xt=new K;function Zt(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Xt.fromArray(e,a);let o=i.x*Math.abs(Xt.x)+i.y*Math.abs(Xt.y)+i.z*Math.abs(Xt.z),s=t.dot(Xt),c=n.dot(Xt),l=r.dot(Xt);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Qt=new Lt,$t=new K,en=new K,tn=class{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Qt.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$t.subVectors(e,this.center);let t=$t.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector($t,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(en.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($t.copy(e.center).add(en)),this.expandByPoint($t.copy(e.center).sub(en))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},nn=new K,rn=new K,an=new K,on=new K,sn=new K,cn=new K,ln=new K,un=class{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(nn.copy(this.origin).addScaledVector(this.direction,t),nn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){rn.copy(e).add(t).multiplyScalar(.5),an.copy(t).sub(e).normalize(),on.copy(this.origin).sub(rn);let i=e.distanceTo(t)*.5,a=-this.direction.dot(an),o=on.dot(this.direction),s=-on.dot(an),c=on.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0)if(u=a*s-o,d=a*o-s,p=i*l,u>=0)if(d>=-p)if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c);else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(rn).addScaledVector(an,d),f}intersectSphere(e,t){nn.subVectors(e.center,this.origin);let n=nn.dot(this.direction),r=nn.dot(nn)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,nn)!==null}intersectTriangle(e,t,n,r,i){sn.subVectors(t,e),cn.subVectors(n,e),ln.crossVectors(sn,cn);let a=this.direction.dot(ln),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;on.subVectors(this.origin,e);let s=o*this.direction.dot(cn.crossVectors(on,cn));if(s<0)return null;let c=o*this.direction.dot(sn.cross(on));if(c<0||s+c>a)return null;let l=-o*on.dot(ln);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},dn=class e{constructor(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,n=e.elements,r=1/fn.setFromMatrixColumn(e,0).length(),i=1/fn.setFromMatrixColumn(e,1).length(),a=1/fn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mn,e,hn)}lookAt(e,t,n){let r=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),gn.crossVectors(n,vn),gn.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),gn.crossVectors(n,vn)),gn.normalize(),_n.crossVectors(vn,gn),r[0]=gn.x,r[4]=_n.x,r[8]=vn.x,r[1]=gn.y,r[5]=_n.y,r[9]=vn.y,r[2]=gn.z,r[6]=_n.z,r[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],P=r[7],F=r[11],I=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*P,i[8]=a*C+o*D+s*j+c*F,i[12]=a*w+o*O+s*M+c*I,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*P,i[9]=l*C+u*D+d*j+f*F,i[13]=l*w+u*O+d*M+f*I,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*P,i[10]=p*C+m*D+h*j+g*F,i[14]=p*w+m*O+h*M+g*I,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*P,i[11]=_*C+v*D+y*j+b*F,i[15]=_*w+v*O+y*M+b*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=u*h*c-m*d*c+m*s*f-o*h*f-u*s*g+o*d*g,v=p*d*c-l*h*c-p*s*f+a*h*f+l*s*g-a*d*g,y=l*m*c-p*u*c+p*o*f-a*m*f-l*o*g+a*u*g,b=p*u*s-l*m*s-p*o*d+a*m*d+l*o*h-a*u*h,x=t*_+n*v+r*y+i*b;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/x;return e[0]=_*S,e[1]=(m*d*i-u*h*i-m*r*f+n*h*f+u*r*g-n*d*g)*S,e[2]=(o*h*i-m*s*i+m*r*c-n*h*c-o*r*g+n*s*g)*S,e[3]=(u*s*i-o*d*i-u*r*c+n*d*c+o*r*f-n*s*f)*S,e[4]=v*S,e[5]=(l*h*i-p*d*i+p*r*f-t*h*f-l*r*g+t*d*g)*S,e[6]=(p*s*i-a*h*i-p*r*c+t*h*c+a*r*g-t*s*g)*S,e[7]=(a*d*i-l*s*i+l*r*c-t*d*c-a*r*f+t*s*f)*S,e[8]=y*S,e[9]=(p*u*i-l*m*i-p*n*f+t*m*f+l*n*g-t*u*g)*S,e[10]=(a*m*i-p*o*i+p*n*c-t*m*c-a*n*g+t*o*g)*S,e[11]=(l*o*i-a*u*i-l*n*c+t*u*c+a*n*f-t*o*f)*S,e[12]=b*S,e[13]=(l*m*r-p*u*r+p*n*d-t*m*d-l*n*h+t*u*h)*S,e[14]=(p*o*r-a*m*r-p*n*s+t*m*s+a*n*h-t*o*h)*S,e[15]=(a*u*r-l*o*r+l*n*s-t*u*s-a*n*d+t*o*d)*S,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let i=fn.set(r[0],r[1],r[2]).length(),a=fn.set(r[4],r[5],r[6]).length(),o=fn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(i=-i),pn.copy(this);let s=1/i,c=1/a,l=1/o;return pn.elements[0]*=s,pn.elements[1]*=s,pn.elements[2]*=s,pn.elements[4]*=c,pn.elements[5]*=c,pn.elements[6]*=c,pn.elements[8]*=l,pn.elements[9]*=l,pn.elements[10]*=l,t.setFromRotationMatrix(pn),n.x=i,n.y=a,n.z=o,this}makePerspective(e,t,n,r,i,a,o=qe,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=qe,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},fn=new K,pn=new dn,mn=new K(0,0,0),hn=new K(1,1,1),gn=new K,_n=new K,vn=new K,yn=new dn,bn=new mt,xn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-ct(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(ct(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-ct(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(ct(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:W(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return yn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bn.setFromEuler(this),this.setFromQuaternion(bn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};xn.DEFAULT_ORDER=`XYZ`;var Sn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},Cn=0,wn=new K,Tn=new mt,En=new dn,Dn=new K,On=new K,kn=new K,An=new mt,jn=new K(1,0,0),Mn=new K(0,1,0),Nn=new K(0,0,1),Pn={type:`added`},Fn={type:`removed`},In={type:`childadded`,child:null},Ln={type:`childremoved`,child:null},Rn=class e extends rt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,`id`,{value:Cn++}),this.uuid=st(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new K,n=new xn,r=new mt,i=new K(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new dn},normalMatrix:{value:new q}}),this.matrix=new dn,this.matrixWorld=new dn,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Tn.setFromAxisAngle(e,t),this.quaternion.multiply(Tn),this}rotateOnWorldAxis(e,t){return Tn.setFromAxisAngle(e,t),this.quaternion.premultiply(Tn),this}rotateX(e){return this.rotateOnAxis(jn,e)}rotateY(e){return this.rotateOnAxis(Mn,e)}rotateZ(e){return this.rotateOnAxis(Nn,e)}translateOnAxis(e,t){return wn.copy(e).applyQuaternion(this.quaternion),this.position.add(wn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jn,e)}translateY(e){return this.translateOnAxis(Mn,e)}translateZ(e){return this.translateOnAxis(Nn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Dn.copy(e):Dn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),On.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(On,Dn,this.up):En.lookAt(Dn,On,this.up),this.quaternion.setFromRotationMatrix(En),r&&(En.extractRotation(r.matrixWorld),Tn.setFromRotationMatrix(En),this.quaternion.premultiply(Tn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(G(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pn),In.child=e,this.dispatchEvent(In),In.child=null):G(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fn),Ln.child=e,this.dispatchEvent(Ln),Ln.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),En.multiply(e.parent.matrixWorld)),e.applyMatrix4(En),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pn),In.child=e,this.dispatchEvent(In),In.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(On,e,kn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(On,An,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let e=this.children;for(let t=0,n=e.length;t<n;t++)e[t].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material);if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};Rn.DEFAULT_UP=new K(0,1,0),Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var zn=new K,Bn=new K,Vn=new K,Hn=new K,Un=new K,Wn=new K,Gn=new K,Kn=new K,qn=new K,Jn=new K,Yn=new Mt,Xn=new Mt,Zn=new Mt,Qn=class e{constructor(e=new K,t=new K,n=new K){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),zn.subVectors(e,t),r.cross(zn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){zn.subVectors(r,t),Bn.subVectors(n,t),Vn.subVectors(e,t);let a=zn.dot(zn),o=zn.dot(Bn),s=zn.dot(Vn),c=Bn.dot(Bn),l=Bn.dot(Vn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Hn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Hn.x),s.addScaledVector(a,Hn.y),s.addScaledVector(o,Hn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Yn.setScalar(0),Xn.setScalar(0),Zn.setScalar(0),Yn.fromBufferAttribute(e,t),Xn.fromBufferAttribute(e,n),Zn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Yn,i.x),a.addScaledVector(Xn,i.y),a.addScaledVector(Zn,i.z),a}static isFrontFacing(e,t,n,r){return zn.subVectors(n,t),Bn.subVectors(e,t),zn.cross(Bn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),zn.cross(Bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Un.subVectors(r,n),Wn.subVectors(i,n),Kn.subVectors(e,n);let s=Un.dot(Kn),c=Wn.dot(Kn);if(s<=0&&c<=0)return t.copy(n);qn.subVectors(e,r);let l=Un.dot(qn),u=Wn.dot(qn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Un,a);Jn.subVectors(e,i);let f=Un.dot(Jn),p=Wn.dot(Jn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Wn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Gn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Gn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Un,a).addScaledVector(Wn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},$n={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},er={h:0,s:0,l:0},tr={h:0,s:0,l:0};function nr(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var rr=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ve){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=xt.workingColorSpace){return this.r=e,this.g=t,this.b=n,xt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=xt.workingColorSpace){if(e=lt(e,1),t=ct(t,0,1),n=ct(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=nr(i,r,e+1/3),this.g=nr(i,r,e),this.b=nr(i,r,e-1/3)}return xt.colorSpaceToWorking(this,r),this}setStyle(e,t=Ve){function n(t){t!==void 0&&parseFloat(t)<1&&W(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:W(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);W(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ve){let n=$n[e.toLowerCase()];return n===void 0?W(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=St(e.r),this.g=St(e.g),this.b=St(e.b),this}copyLinearToSRGB(e){return this.r=Ct(e.r),this.g=Ct(e.g),this.b=Ct(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ve){return xt.workingToColorSpace(ir.copy(this),e),Math.round(ct(ir.r*255,0,255))*65536+Math.round(ct(ir.g*255,0,255))*256+Math.round(ct(ir.b*255,0,255))}getHexString(e=Ve){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.workingToColorSpace(ir.copy(this),t);let n=ir.r,r=ir.g,i=ir.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4;break}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=xt.workingColorSpace){return xt.workingToColorSpace(ir.copy(this),t),e.r=ir.r,e.g=ir.g,e.b=ir.b,e}getStyle(e=Ve){xt.workingToColorSpace(ir.copy(this),e);let t=ir.r,n=ir.g,r=ir.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(er),this.setHSL(er.h+e,er.s+t,er.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(er),e.getHSL(tr);let n=ut(er.h,tr.h,t),r=ut(er.s,tr.s,t),i=ut(er.l,tr.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ir=new rr;rr.NAMES=$n;var ar=0,or=class extends rt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,`id`,{value:ar++}),this.uuid=st(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rr(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ge,this.stencilZFail=Ge,this.stencilZPass=Ge,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){W(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){W(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},sr=class extends or{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new rr(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},cr=new K,lr=new pt,ur=0,dr=class{constructor(e,t,n=!1){if(Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,`id`,{value:ur++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Ke,this.updateRanges=[],this.gpuType=T,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)lr.fromBufferAttribute(this,t),lr.applyMatrix3(e),this.setXY(t,lr.x,lr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)cr.fromBufferAttribute(this,t),cr.applyMatrix3(e),this.setXYZ(t,cr.x,cr.y,cr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)cr.fromBufferAttribute(this,t),cr.applyMatrix4(e),this.setXYZ(t,cr.x,cr.y,cr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)cr.fromBufferAttribute(this,t),cr.applyNormalMatrix(e),this.setXYZ(t,cr.x,cr.y,cr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)cr.fromBufferAttribute(this,t),cr.transformDirection(e),this.setXYZ(t,cr.x,cr.y,cr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=dt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=dt(t,this.array)),t}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=dt(t,this.array)),t}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=dt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=dt(t,this.array)),t}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),r=ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),r=ft(r,this.array),i=ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}},fr=class extends dr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},pr=class extends dr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},mr=class extends dr{constructor(e,t,n){super(new Float32Array(e),t,n)}},hr=0,gr=new dn,_r=new Rn,vr=new K,yr=new Lt,br=new Lt,xr=new K,Sr=class e extends rt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,`id`,{value:hr++}),this.uuid=st(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Je(e)?pr:fr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new q().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gr.makeRotationFromQuaternion(e),this.applyMatrix4(gr),this}rotateX(e){return gr.makeRotationX(e),this.applyMatrix4(gr),this}rotateY(e){return gr.makeRotationY(e),this.applyMatrix4(gr),this}rotateZ(e){return gr.makeRotationZ(e),this.applyMatrix4(gr),this}translate(e,t,n){return gr.makeTranslation(e,t,n),this.applyMatrix4(gr),this}scale(e,t,n){return gr.makeScale(e,t,n),this.applyMatrix4(gr),this}lookAt(e){return _r.lookAt(e),_r.updateMatrix(),this.applyMatrix4(_r.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vr).negate(),this.translate(vr.x,vr.y,vr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new mr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&W(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){G(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];yr.setFromBufferAttribute(n),this.morphTargetsRelative?(xr.addVectors(this.boundingBox.min,yr.min),this.boundingBox.expandByPoint(xr),xr.addVectors(this.boundingBox.max,yr.max),this.boundingBox.expandByPoint(xr)):(this.boundingBox.expandByPoint(yr.min),this.boundingBox.expandByPoint(yr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&G(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){G(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new K,1/0);return}if(e){let n=this.boundingSphere.center;if(yr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];br.setFromBufferAttribute(n),this.morphTargetsRelative?(xr.addVectors(yr.min,br.min),yr.expandByPoint(xr),xr.addVectors(yr.max,br.max),yr.expandByPoint(xr)):(yr.expandByPoint(br.min),yr.expandByPoint(br.max))}yr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)xr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(xr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)xr.fromBufferAttribute(a,t),o&&(vr.fromBufferAttribute(e,t),xr.add(vr)),r=Math.max(r,n.distanceToSquared(xr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&G(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){G(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv;this.hasAttribute(`tangent`)===!1&&this.setAttribute(`tangent`,new dr(new Float32Array(4*n.count),4));let a=this.getAttribute(`tangent`),o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new K,s[e]=new K;let c=new K,l=new K,u=new K,d=new pt,f=new pt,p=new pt,m=new K,h=new K;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new K,y=new K,b=new K,x=new K;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0)n=new dr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new K,i=new K,a=new K,o=new K,s=new K,c=new K,l=new K,u=new K;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)xr.fromBufferAttribute(e,t),xr.normalize(),e.setXYZ(t,xr.x,xr.y,xr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new dr(a,r,i)}if(this.index===null)return W(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:`dispose`})}},Cr=new dn,wr=new un,Tr=new tn,Er=new K,Dr=new K,Or=new K,kr=new K,Ar=new K,jr=new K,Mr=new K,Nr=new K,Pr=class extends Rn{constructor(e=new Sr,t=new sr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){jr.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Ar.fromBufferAttribute(s,e),a?jr.addScaledVector(Ar,r):jr.addScaledVector(Ar.sub(t),r))}t.add(jr)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere),Tr.applyMatrix4(i),wr.copy(e.ray).recast(e.near),!(Tr.containsPoint(wr.origin)===!1&&(wr.intersectSphere(Tr,Er)===null||wr.origin.distanceToSquared(Er)>(e.far-e.near)**2))&&(Cr.copy(i).invert(),wr.copy(e.ray).applyMatrix4(Cr),!(n.boundingBox!==null&&wr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,wr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null)if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Ir(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Ir(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}else if(s!==void 0)if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Ir(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Ir(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}};function Fr(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Nr.copy(s),Nr.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Nr);return l<n.near||l>n.far?null:{distance:l,point:Nr.clone(),object:e}}function Ir(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Dr),e.getVertexPosition(c,Or),e.getVertexPosition(l,kr);let u=Fr(e,t,n,r,Dr,Or,kr,Mr);if(u){let e=new K;Qn.getBarycoord(Mr,Dr,Or,kr,e),i&&(u.uv=Qn.getInterpolatedAttribute(i,s,c,l,e,new pt)),a&&(u.uv1=Qn.getInterpolatedAttribute(a,s,c,l,e,new pt)),o&&(u.normal=Qn.getInterpolatedAttribute(o,s,c,l,e,new K),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new K,materialIndex:0};Qn.getNormal(Dr,Or,kr,t.normal),u.face=t,u.barycoord=e}return u}var Lr=class e extends Sr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new mr(c,3)),this.setAttribute(`normal`,new mr(l,3)),this.setAttribute(`uv`,new mr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new K;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Rr(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(W(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone():Array.isArray(i)?t[n][r]=i.slice():t[n][r]=i}}return t}function zr(e){let t={};for(let n=0;n<e.length;n++){let r=Rr(e[n]);for(let e in r)t[e]=r[e]}return t}function Br(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Vr(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:xt.workingColorSpace}var Hr={clone:Rr,merge:zr},Ur=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wr=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Gr=class extends or{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ur,this.fragmentShader=Wr,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rr(e.uniforms),this.uniformsGroups=Br(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Kr=class extends Rn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new dn,this.projectionMatrix=new dn,this.projectionMatrixInverse=new dn,this.coordinateSystem=qe,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},qr=new K,Jr=new pt,Yr=new pt,Xr=class extends Kr{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ot*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(at*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ot*2*Math.atan(Math.tan(at*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){qr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qr.x,qr.y).multiplyScalar(-e/qr.z),qr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qr.x,qr.y).multiplyScalar(-e/qr.z)}getViewSize(e,t){return this.getViewBounds(e,Jr,Yr),t.subVectors(Yr,Jr)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(at*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Zr=-90,Qr=1,$r=class extends Rn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Xr(Zr,Qr,e,t);r.layers=this.layers,this.add(r);let i=new Xr(Zr,Qr,e,t);i.layers=this.layers,this.add(i);let a=new Xr(Zr,Qr,e,t);a.layers=this.layers,this.add(a);let o=new Xr(Zr,Qr,e,t);o.layers=this.layers,this.add(o);let s=new Xr(Zr,Qr,e,t);s.layers=this.layers,this.add(s);let c=new Xr(Zr,Qr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,i),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,s),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},ei=class extends jt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ti=class extends Pt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1};this.texture=new ei([n,n,n,n,n,n]),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Lr(5,5,5),i=new Gr({name:`CubemapFromEquirect`,uniforms:Rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Pr(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=g),new $r(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},ni=class extends Rn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},ri={type:`move`},ii=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ni,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ni,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ni,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position),s=.02,l=.005;c.inputState.pinching&&o>s+l?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=s-l&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ri)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ni;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ai=class extends Rn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xn,this.environmentIntensity=1,this.environmentRotation=new xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},oi=class extends jt{constructor(e=null,t=1,n=1,r,i,a,o,s,c=p,l=p,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},si=new K,ci=new K,li=new q,ui=class{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=si.subVectors(n,t).cross(ci.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(si),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let i=-(e.start.dot(this.normal)+this.constant)/r;return i<0||i>1?null:t.copy(e.start).addScaledVector(n,i)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||li.getNormalMatrix(e),r=this.coplanarPoint(si).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},di=new tn,fi=new pt(.5,.5),pi=new K,mi=class{constructor(e=new ui,t=new ui,n=new ui,r=new ui,i=new ui,a=new ui){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=qe,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(di)}intersectsSprite(e){return di.center.set(0,0,0),di.radius=.7071067811865476+fi.distanceTo(e.center),di.applyMatrix4(e.matrixWorld),this.intersectsSphere(di)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(pi.x=r.normal.x>0?e.max.x:e.min.x,pi.y=r.normal.y>0?e.max.y:e.min.y,pi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(pi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},hi=class extends jt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},gi=class extends jt{constructor(e,t,n=w,r,i,a,o=p,s=p,c,l=F,u=1){if(l!==1026&&l!==1027)throw Error(`DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Dt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},_i=class extends gi{constructor(e,t=w,n=301,r,i,a=p,o=p,s,c=F){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},vi=class extends jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},yi=class e extends Sr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new mr(p,3)),this.setAttribute(`normal`,new mr(m,3)),this.setAttribute(`uv`,new mr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},bi=class extends Gr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},xi=class extends or{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Be,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Si=class extends or{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ci(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}var wi=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`call to abstract method`)}intervalChanged_(){}},Ti=class extends wi{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Le,endingEnd:Le}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Re:i=e,o=2*t-n;break;case ze:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Re:a=e,s=2*n-t;break;case ze:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Ei=class extends wi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Di=class extends wi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Oi=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Ci(t,this.TimeBufferType),this.values=Ci(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ci(e.times,Array),values:Ci(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Di(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ei(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ti(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Pe:t=this.InterpolantFactoryMethodDiscrete;break;case Fe:t=this.InterpolantFactoryMethodLinear;break;case Ie:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t);return W(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Pe;case this.InterpolantFactoryMethodLinear:return Fe;case this.InterpolantFactoryMethodSmooth:return Ie}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(G(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(G(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){G(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){G(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Ye(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){G(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ie,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0]))if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Oi.prototype.ValueTypeName=``,Oi.prototype.TimeBufferType=Float32Array,Oi.prototype.ValueBufferType=Float32Array,Oi.prototype.DefaultInterpolation=Fe;var ki=class extends Oi{constructor(e,t,n){super(e,t,n)}};ki.prototype.ValueTypeName=`bool`,ki.prototype.ValueBufferType=Array,ki.prototype.DefaultInterpolation=Pe,ki.prototype.InterpolantFactoryMethodLinear=void 0,ki.prototype.InterpolantFactoryMethodSmooth=void 0;var Ai=class extends Oi{constructor(e,t,n,r){super(e,t,n,r)}};Ai.prototype.ValueTypeName=`color`;var ji=class extends Oi{constructor(e,t,n,r){super(e,t,n,r)}};ji.prototype.ValueTypeName=`number`;var Mi=class extends wi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)mt.slerpFlat(i,0,a,c-o,a,c,s);return i}},Ni=class extends Oi{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Mi(this.times,this.values,this.getValueSize(),e)}};Ni.prototype.ValueTypeName=`quaternion`,Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var Pi=class extends Oi{constructor(e,t,n){super(e,t,n)}};Pi.prototype.ValueTypeName=`string`,Pi.prototype.ValueBufferType=Array,Pi.prototype.DefaultInterpolation=Pe,Pi.prototype.InterpolantFactoryMethodLinear=void 0,Pi.prototype.InterpolantFactoryMethodSmooth=void 0;var Fi=class extends Oi{constructor(e,t,n,r){super(e,t,n,r)}};Fi.prototype.ValueTypeName=`vector`;var Ii=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},Li=class{constructor(e){this.manager=e===void 0?Ii:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Li.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var Ri=class extends Kr{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},zi=class extends Xr{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Bi=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},Vi=`\\[\\]\\.:\\/`,Hi=RegExp(`[`+Vi+`]`,`g`),Ui=`[^`+Vi+`]`,Wi=`[^`+Vi.replace(`\\.`,``)+`]`,Gi=`((?:WC+[\\/:])*)`.replace(`WC`,Ui),Ki=`(WCOD+)?`.replace(`WCOD`,Wi),qi=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Ui),Ji=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Ui),Yi=RegExp(`^`+Gi+Ki+qi+Ji+`$`),Xi=[`material`,`materials`,`bones`,`map`],Zi=class{constructor(e,t,n){let r=n||Qi.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Qi=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Hi,``)}static parseTrackName(e){let t=Yi.exec(e);if(t===null)throw Error(`PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Xi.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){W(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){G(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){G(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){G(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){G(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){G(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){G(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){G(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;G(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){G(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){G(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Qi.Composite=Zi,Qi.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Qi.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Qi.prototype.GetterByBindingType=[Qi.prototype._getValue_direct,Qi.prototype._getValue_array,Qi.prototype._getValue_arrayElement,Qi.prototype._getValue_toArray],Qi.prototype.SetterByBindingTypeAndVersioning=[[Qi.prototype._setValue_direct,Qi.prototype._setValue_direct_setNeedsUpdate,Qi.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qi.prototype._setValue_array,Qi.prototype._setValue_array_setNeedsUpdate,Qi.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qi.prototype._setValue_arrayElement,Qi.prototype._setValue_arrayElement_setNeedsUpdate,Qi.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qi.prototype._setValue_fromArray,Qi.prototype._setValue_fromArray_setNeedsUpdate,Qi.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],new Float32Array(1);function $i(e,t,n,r){let i=ea(r);switch(n){case M:return e*t;case L:return e*t/i.components*i.byteLength;case R:return e*t/i.components*i.byteLength;case z:return e*t*2/i.components*i.byteLength;case B:return e*t*2/i.components*i.byteLength;case N:return e*t*3/i.components*i.byteLength;case P:return e*t*4/i.components*i.byteLength;case ee:return e*t*4/i.components*i.byteLength;case te:case ne:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case re:case ie:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case oe:case ce:return Math.max(e,16)*Math.max(t,8)/4;case ae:case se:return Math.max(e,8)*Math.max(t,8)/2;case le:case ue:case fe:case pe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case de:case me:case he:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ge:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case _e:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case ve:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ye:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case be:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case xe:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Se:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case V:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Ce:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case we:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Te:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case H:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Ee:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case U:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case De:case Oe:case ke:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Ae:case je:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Me:case Ne:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function ea(e){switch(e){case y:case b:return{byteLength:1,components:1};case S:case x:case E:return{byteLength:2,components:1};case D:case O:return{byteLength:2,components:4};case w:case C:case T:return{byteLength:4,components:1};case A:case j:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`182`}})),typeof window<`u`&&(window.__THREE__?W(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`182`);function ta(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function na(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var J={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Y={common:{diffuse:{value:new rr(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new q},alphaMap:{value:null},alphaMapTransform:{value:new q},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new q}},envmap:{envMap:{value:null},envMapRotation:{value:new q},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new q}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new q}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new q},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new q},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new q},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new q}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new q}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new q}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rr(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rr(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new q},alphaTest:{value:0},uvTransform:{value:new q}},sprite:{diffuse:{value:new rr(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new q},alphaMap:{value:null},alphaMapTransform:{value:new q},alphaTest:{value:0}}},ra={basic:{uniforms:zr([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.fog]),vertexShader:J.meshbasic_vert,fragmentShader:J.meshbasic_frag},lambert:{uniforms:zr([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,Y.lights,{emissive:{value:new rr(0)}}]),vertexShader:J.meshlambert_vert,fragmentShader:J.meshlambert_frag},phong:{uniforms:zr([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,Y.lights,{emissive:{value:new rr(0)},specular:{value:new rr(1118481)},shininess:{value:30}}]),vertexShader:J.meshphong_vert,fragmentShader:J.meshphong_frag},standard:{uniforms:zr([Y.common,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.roughnessmap,Y.metalnessmap,Y.fog,Y.lights,{emissive:{value:new rr(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:J.meshphysical_vert,fragmentShader:J.meshphysical_frag},toon:{uniforms:zr([Y.common,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.gradientmap,Y.fog,Y.lights,{emissive:{value:new rr(0)}}]),vertexShader:J.meshtoon_vert,fragmentShader:J.meshtoon_frag},matcap:{uniforms:zr([Y.common,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,{matcap:{value:null}}]),vertexShader:J.meshmatcap_vert,fragmentShader:J.meshmatcap_frag},points:{uniforms:zr([Y.points,Y.fog]),vertexShader:J.points_vert,fragmentShader:J.points_frag},dashed:{uniforms:zr([Y.common,Y.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:J.linedashed_vert,fragmentShader:J.linedashed_frag},depth:{uniforms:zr([Y.common,Y.displacementmap]),vertexShader:J.depth_vert,fragmentShader:J.depth_frag},normal:{uniforms:zr([Y.common,Y.bumpmap,Y.normalmap,Y.displacementmap,{opacity:{value:1}}]),vertexShader:J.meshnormal_vert,fragmentShader:J.meshnormal_frag},sprite:{uniforms:zr([Y.sprite,Y.fog]),vertexShader:J.sprite_vert,fragmentShader:J.sprite_frag},background:{uniforms:{uvTransform:{value:new q},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:J.background_vert,fragmentShader:J.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new q}},vertexShader:J.backgroundCube_vert,fragmentShader:J.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:J.cube_vert,fragmentShader:J.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:J.equirect_vert,fragmentShader:J.equirect_frag},distance:{uniforms:zr([Y.common,Y.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:J.distance_vert,fragmentShader:J.distance_frag},shadow:{uniforms:zr([Y.lights,Y.fog,{color:{value:new rr(0)},opacity:{value:1}}]),vertexShader:J.shadow_vert,fragmentShader:J.shadow_frag}};ra.physical={uniforms:zr([ra.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new q},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new q},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new q},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new q},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new q},sheen:{value:0},sheenColor:{value:new rr(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new q},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new q},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new q},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new q},attenuationDistance:{value:0},attenuationColor:{value:new rr(0)},specularColor:{value:new rr(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new q},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new q},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new q}}]),vertexShader:J.meshphysical_vert,fragmentShader:J.meshphysical_frag};var ia={r:0,b:0,g:0},aa=new xn,oa=new dn;function sa(e,t,n,r,i,a,o){let s=new rr(0),c=a===!0?0:1,l,u,d=null,f=0,p=null;function m(e){let r=e.isScene===!0?e.background:null;return r&&r.isTexture&&(r=(e.backgroundBlurriness>0?n:t).get(r)),r}function h(t){let n=!1,i=m(t);i===null?_(s,c):i&&i.isColor&&(_(i,1),n=!0);let a=e.xr.getEnvironmentBlendMode();a===`additive`?r.buffers.color.setClear(0,0,0,1,o):a===`alpha-blend`&&r.buffers.color.setClear(0,0,0,0,o),(e.autoClear||n)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function g(t,n){let r=m(n);r&&(r.isCubeTexture||r.mapping===306)?(u===void 0&&(u=new Pr(new Lr(1,1,1),new Gr({name:`BackgroundCubeMaterial`,uniforms:Rr(ra.backgroundCube.uniforms),vertexShader:ra.backgroundCube.vertexShader,fragmentShader:ra.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute(`normal`),u.geometry.deleteAttribute(`uv`),u.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(u.material,`envMap`,{get:function(){return this.uniforms.envMap.value}}),i.update(u)),aa.copy(n.backgroundRotation),aa.x*=-1,aa.y*=-1,aa.z*=-1,r.isCubeTexture&&r.isRenderTargetTexture===!1&&(aa.y*=-1,aa.z*=-1),u.material.uniforms.envMap.value=r,u.material.uniforms.flipEnvMap.value=r.isCubeTexture&&r.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(oa.makeRotationFromEuler(aa)),u.material.toneMapped=xt.getTransfer(r.colorSpace)!==We,(d!==r||f!==r.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,d=r,f=r.version,p=e.toneMapping),u.layers.enableAll(),t.unshift(u,u.geometry,u.material,0,0,null)):r&&r.isTexture&&(l===void 0&&(l=new Pr(new yi(2,2),new Gr({name:`BackgroundMaterial`,uniforms:Rr(ra.background.uniforms),vertexShader:ra.background.vertexShader,fragmentShader:ra.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),Object.defineProperty(l.material,`map`,{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=r,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.toneMapped=xt.getTransfer(r.colorSpace)!==We,r.matrixAutoUpdate===!0&&r.updateMatrix(),l.material.uniforms.uvTransform.value.copy(r.matrix),(d!==r||f!==r.version||p!==e.toneMapping)&&(l.material.needsUpdate=!0,d=r,f=r.version,p=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null))}function _(t,n){t.getRGB(ia,Vr(e)),r.buffers.color.setClear(ia.r,ia.g,ia.b,n,o)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(e,t=1){s.set(e),c=t,_(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(e){c=e,_(s,c)},render:h,addToRenderList:g,dispose:v}}function ca(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n){let i=n.wireframe===!0,a=r[e.id];a===void 0&&(a={},r[e.id]=a);let o=a[t.id];o===void 0&&(o={},a[t.id]=o);let s=o[i];return s===void 0&&(s=f(c()),o[i]=s),s}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){w();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n)u(n[e].object),delete n[e];delete t[e]}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n)u(n[e].object),delete n[e];delete t[e]}delete r[e.id]}function C(e){for(let t in r){let n=r[t];if(n[e.id]===void 0)continue;let i=n[e.id];for(let e in i)u(i[e].object),delete i[e];delete n[e.id]}}function w(){T(),o=!0,a!==i&&(a=i,l(a.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:w,resetDefaultState:T,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function la(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}function c(e,i,a,s){if(a===0)return;let c=t.get(`WEBGL_multi_draw`);if(c===null)for(let t=0;t<e.length;t++)o(e[t],i[t],s[t]);else{c.multiDrawArraysInstancedWEBGL(r,e,0,i,0,s,0,a);let t=0;for(let e=0;e<a;e++)t+=i[e]*s[e];n.update(t,r,1)}}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=c}function ua(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return!(t!==1023&&r.convert(t)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(W(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function da(e){let t=this,n=null,r=0,i=!1,a=!1,o=new ui,s=new q,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}function fa(e){let t=new WeakMap;function n(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function r(r){if(r&&r.isTexture){let a=r.mapping;if(a===303||a===304)if(t.has(r)){let e=t.get(r).texture;return n(e,r.mapping)}else{let a=r.image;if(a&&a.height>0){let o=new ti(a.height);return o.fromEquirectangularTexture(e,r),t.set(r,o),r.addEventListener(`dispose`,i),n(o.texture,r.mapping)}else return null}}return r}function i(e){let n=e.target;n.removeEventListener(`dispose`,i);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function a(){t=new WeakMap}return{get:r,dispose:a}}var pa=4,ma=[.125,.215,.35,.446,.526,.582],ha=20,ga=256,_a=new Ri,va=new rr,ya=null,ba=0,xa=0,Sa=!1,Ca=new K,wa=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Ca}=i;ya=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),xa=this._renderer.getActiveMipmapLevel(),Sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ja(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Aa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ya,ba,xa),this._renderer.xr.enabled=Sa,e.scissorTest=!1,Da(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ya=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),xa=this._renderer.getActiveMipmapLevel(),Sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:g,minFilter:g,generateMipmaps:!1,type:E,format:P,colorSpace:He,depthBuffer:!1},r=Ea(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ea(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Ta(r)),this._blurMaterial=ka(r,e,t),this._ggxMaterial=Oa(r,e,t)}return r}_compileMaterial(e){let t=new Pr(new Sr,e);this._renderer.compile(t,_a)}_sceneToCubeUV(e,t,n,r,i){let a=new Xr(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(va),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pr(new Lr,new sr({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(va),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Da(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ja()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Aa());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Da(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,_a)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(0+c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-pa?n-d+pa:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Da(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,_a),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Da(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,_a)}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&G(`blur direction must be either latitudinal or longitudinal!`);let l=this._lodMeshes[r];l.material=c;let u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/(2*ha-1),p=i/f,m=isFinite(i)?1+Math.floor(3*p):ha;m>ha&&W(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ha}`);let h=[],g=0;for(let e=0;e<ha;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];Da(t,3*v*(r>_-pa?r-_+pa:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,_a)}};function Ta(e){let t=[],n=[],r=[],i=e,a=e-pa+1+ma.length;for(let o=0;o<a;o++){let a=2**i;t.push(a);let s=1/a;o>e-pa?s=ma[o-e+pa-1]:o===0&&(s=0),n.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new Sr;h.setAttribute(`position`,new dr(f,3)),h.setAttribute(`uv`,new dr(p,2)),h.setAttribute(`faceIndex`,new dr(m,1)),r.push(new Pr(h,null)),i>pa&&i--}return{lodMeshes:r,sizeLods:t,sigmas:n}}function Ea(e,t,n){let r=new Pt(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Da(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Oa(e,t,n){return new Gr({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:ga,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ma(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ka(e,t,n){let r=new Float32Array(ha),i=new K(0,1,0);return new Gr({name:`SphericalGaussianBlur`,defines:{n:ha,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ma(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Aa(){return new Gr({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Ma(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ja(){return new Gr({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ma(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ma(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Na(e){let t=new WeakMap,n=null;function r(r){if(r&&r.isTexture){let o=r.mapping,s=o===303||o===304,c=o===301||o===302;if(s||c){let o=t.get(r),l=o===void 0?0:o.texture.pmremVersion;if(r.isRenderTargetTexture&&r.pmremVersion!==l)return n===null&&(n=new wa(e)),o=s?n.fromEquirectangular(r,o):n.fromCubemap(r,o),o.texture.pmremVersion=r.pmremVersion,t.set(r,o),o.texture;if(o!==void 0)return o.texture;{let l=r.image;return s&&l&&l.height>0||c&&l&&i(l)?(n===null&&(n=new wa(e)),o=s?n.fromEquirectangular(r):n.fromCubemap(r),o.texture.pmremVersion=r.pmremVersion,t.set(r,o),r.addEventListener(`dispose`,a),o.texture):null}}}return r}function i(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function a(e){let n=e.target;n.removeEventListener(`dispose`,a);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function o(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:o}}function Pa(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&tt(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Fa(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else if(i!==void 0){let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}else return;let s=new(Je(n)?pr:fr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Ia(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}function d(e,i,s,c){if(s===0)return;let u=t.get(`WEBGL_multi_draw`);if(u===null)for(let t=0;t<e.length;t++)l(e[t]/o,i[t],c[t]);else{u.multiDrawElementsInstancedWEBGL(r,i,0,a,e,0,c,0,s);let t=0;for(let e=0;e<s;e++)t+=i[e]*c[e];n.update(t,r,1)}}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function La(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:G(`WebGLInfo: Unknown draw mode:`,r);break}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Ra(e,t,n){let r=new WeakMap,i=new Mt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new Ft(h,p,m,u);g.type=T,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new pt(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function za(e,t,n,r){let i=new WeakMap;function a(a){let o=r.render.frame,c=a.geometry,l=t.get(a,c);if(i.get(l)!==o&&(t.update(l),i.set(l,o)),a.isInstancedMesh&&(a.hasEventListener(`dispose`,s)===!1&&a.addEventListener(`dispose`,s),i.get(a)!==o&&(n.update(a.instanceMatrix,e.ARRAY_BUFFER),a.instanceColor!==null&&n.update(a.instanceColor,e.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let e=a.skeleton;i.get(e)!==o&&(e.update(),i.set(e,o))}return l}function o(){i=new WeakMap}function s(e){let t=e.target;t.removeEventListener(`dispose`,s),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:a,dispose:o}}var Ba={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Va(e,t,n,r,i){let a=new Pt(t,n,{type:e,depthBuffer:r,stencilBuffer:i}),o=new Pt(t,n,{type:E,depthBuffer:!1,stencilBuffer:!1}),s=new Sr;s.setAttribute(`position`,new mr([-1,3,0,-1,-1,0,3,-1,0],3)),s.setAttribute(`uv`,new mr([0,2,0,0,2,0],2));let c=new bi({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new Pr(s,c),u=new Ri(-1,1,1,-1,0,1),d=null,f=null,p=!1,m,h=null,g=[],_=!1;this.setSize=function(e,t){a.setSize(e,t),o.setSize(e,t);for(let n=0;n<g.length;n++){let r=g[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){g=e,_=g.length>0&&g[0].isRenderPass===!0;let t=a.width,n=a.height;for(let e=0;e<g.length;e++){let r=g[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(p||e.toneMapping===0&&g.length===0)return!1;if(h=t,t!==null){let e=t.width,n=t.height;(a.width!==e||a.height!==n)&&this.setSize(e,n)}return _===!1&&e.setRenderTarget(a),m=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return _},this.end=function(e,t){e.toneMapping=m,p=!0;let n=a,r=o;for(let i=0;i<g.length;i++){let a=g[i];if(a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1)){let e=n;n=r,r=e}}if(d!==e.outputColorSpace||f!==e.toneMapping){d=e.outputColorSpace,f=e.toneMapping,c.defines={},xt.getTransfer(d)===`srgb`&&(c.defines.SRGB_TRANSFER=``);let t=Ba[f];t&&(c.defines[t]=``),c.needsUpdate=!0}c.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(h),e.render(l,u),h=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o.dispose(),s.dispose(),c.dispose()}}var Ha=new jt,Ua=new gi(1,1),Wa=new Ft,Ga=new It,Ka=new ei,qa=[],Ja=[],Ya=new Float32Array(16),Xa=new Float32Array(9),Za=new Float32Array(4);function Qa(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=qa[i];if(a===void 0&&(a=new Float32Array(i),qa[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function $a(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function eo(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function to(e,t){let n=Ja[t];n===void 0&&(n=new Int32Array(t),Ja[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function no(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function ro(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if($a(n,t))return;e.uniform2fv(this.addr,t),eo(n,t)}}function io(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if($a(n,t))return;e.uniform3fv(this.addr,t),eo(n,t)}}function ao(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if($a(n,t))return;e.uniform4fv(this.addr,t),eo(n,t)}}function oo(e,t){let n=this.cache,r=t.elements;if(r===void 0){if($a(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),eo(n,t)}else{if($a(n,r))return;Za.set(r),e.uniformMatrix2fv(this.addr,!1,Za),eo(n,r)}}function so(e,t){let n=this.cache,r=t.elements;if(r===void 0){if($a(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),eo(n,t)}else{if($a(n,r))return;Xa.set(r),e.uniformMatrix3fv(this.addr,!1,Xa),eo(n,r)}}function co(e,t){let n=this.cache,r=t.elements;if(r===void 0){if($a(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),eo(n,t)}else{if($a(n,r))return;Ya.set(r),e.uniformMatrix4fv(this.addr,!1,Ya),eo(n,r)}}function lo(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function uo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if($a(n,t))return;e.uniform2iv(this.addr,t),eo(n,t)}}function fo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if($a(n,t))return;e.uniform3iv(this.addr,t),eo(n,t)}}function po(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if($a(n,t))return;e.uniform4iv(this.addr,t),eo(n,t)}}function mo(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function ho(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if($a(n,t))return;e.uniform2uiv(this.addr,t),eo(n,t)}}function go(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if($a(n,t))return;e.uniform3uiv(this.addr,t),eo(n,t)}}function _o(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if($a(n,t))return;e.uniform4uiv(this.addr,t),eo(n,t)}}function vo(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Ua.compareFunction=n.isReversedDepthBuffer()?518:515,a=Ua):a=Ha,n.setTexture2D(t||a,i)}function yo(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Ga,i)}function bo(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Ka,i)}function xo(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Wa,i)}function So(e){switch(e){case 5126:return no;case 35664:return ro;case 35665:return io;case 35666:return ao;case 35674:return oo;case 35675:return so;case 35676:return co;case 5124:case 35670:return lo;case 35667:case 35671:return uo;case 35668:case 35672:return fo;case 35669:case 35673:return po;case 5125:return mo;case 36294:return ho;case 36295:return go;case 36296:return _o;case 35678:case 36198:case 36298:case 36306:case 35682:return vo;case 35679:case 36299:case 36307:return yo;case 35680:case 36300:case 36308:case 36293:return bo;case 36289:case 36303:case 36311:case 36292:return xo}}function Co(e,t){e.uniform1fv(this.addr,t)}function wo(e,t){let n=Qa(t,this.size,2);e.uniform2fv(this.addr,n)}function To(e,t){let n=Qa(t,this.size,3);e.uniform3fv(this.addr,n)}function Eo(e,t){let n=Qa(t,this.size,4);e.uniform4fv(this.addr,n)}function Do(e,t){let n=Qa(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Oo(e,t){let n=Qa(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function ko(e,t){let n=Qa(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Ao(e,t){e.uniform1iv(this.addr,t)}function jo(e,t){e.uniform2iv(this.addr,t)}function Mo(e,t){e.uniform3iv(this.addr,t)}function No(e,t){e.uniform4iv(this.addr,t)}function Po(e,t){e.uniform1uiv(this.addr,t)}function Fo(e,t){e.uniform2uiv(this.addr,t)}function Io(e,t){e.uniform3uiv(this.addr,t)}function Lo(e,t){e.uniform4uiv(this.addr,t)}function Ro(e,t,n){let r=this.cache,i=t.length,a=to(n,i);$a(r,a)||(e.uniform1iv(this.addr,a),eo(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Ua:Ha;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function zo(e,t,n){let r=this.cache,i=t.length,a=to(n,i);$a(r,a)||(e.uniform1iv(this.addr,a),eo(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Ga,a[e])}function Bo(e,t,n){let r=this.cache,i=t.length,a=to(n,i);$a(r,a)||(e.uniform1iv(this.addr,a),eo(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Ka,a[e])}function Vo(e,t,n){let r=this.cache,i=t.length,a=to(n,i);$a(r,a)||(e.uniform1iv(this.addr,a),eo(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Wa,a[e])}function Ho(e){switch(e){case 5126:return Co;case 35664:return wo;case 35665:return To;case 35666:return Eo;case 35674:return Do;case 35675:return Oo;case 35676:return ko;case 5124:case 35670:return Ao;case 35667:case 35671:return jo;case 35668:case 35672:return Mo;case 35669:case 35673:return No;case 5125:return Po;case 36294:return Fo;case 36295:return Io;case 36296:return Lo;case 35678:case 36198:case 36298:case 36306:case 35682:return Ro;case 35679:case 36299:case 36307:return zo;case 35680:case 36300:case 36308:case 36293:return Bo;case 36289:case 36303:case 36311:case 36292:return Vo}}var Uo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=So(t.type)}},Wo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ho(t.type)}},Go=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Ko=/(\w+)(\])?(\[|\.)?/g;function qo(e,t){e.seq.push(t),e.map[t.id]=t}function Jo(e,t,n){let r=e.name,i=r.length;for(Ko.lastIndex=0;;){let a=Ko.exec(r),o=Ko.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){qo(n,l===void 0?new Uo(s,e,t):new Wo(s,e,t));break}else{let e=n.map[s];e===void 0&&(e=new Go(s),qo(n,e)),n=e}}}var Yo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Jo(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Xo(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Zo=37297,Qo=0;function $o(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var es=new q;function ts(e){xt._getMatrix(es,xt.workingColorSpace,e);let t=`mat3( ${es.elements.map(e=>e.toFixed(4))} )`;switch(xt.getTransfer(e)){case Ue:return[t,`LinearTransferOETF`];case We:return[t,`sRGBTransferOETF`];default:return W(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function ns(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+$o(e.getShaderSource(t),r)}else return i}function rs(e,t){let n=ts(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var is={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function as(e,t){let n=is[t];return n===void 0?(W(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var os=new K;function ss(){return xt.getLuminanceCoefficients(os),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${os.x.toFixed(4)}, ${os.y.toFixed(4)}, ${os.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function cs(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(ds).join(`
`)}function ls(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function us(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function ds(e){return e!==``}function fs(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ps(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ms=/^[ \t]*#include +<([\w\d./]+)>/gm;function hs(e){return e.replace(ms,_s)}var gs=new Map;function _s(e,t){let n=J[t];if(n===void 0){let e=gs.get(t);if(e!==void 0)n=J[e],W(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`Can not resolve #include <`+t+`>`)}return hs(n)}var vs=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ys(e){return e.replace(vs,bs)}function bs(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function xs(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Ss={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Cs(e){return Ss[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var ws={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Ts(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:ws[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Es={302:`ENVMAP_MODE_REFRACTION`};function Ds(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Es[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Os={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function ks(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Os[e.combine]||`ENVMAP_BLENDING_NONE`}function As(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function js(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Cs(n),l=Ts(n),u=Ds(n),d=ks(n),f=As(n),p=cs(n),m=ls(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(ds).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(ds).join(`
`),_.length>0&&(_+=`
`)):(g=[xs(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(ds).join(`
`),_=[xs(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor||n.batchingColor?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:J.tonemapping_pars_fragment,n.toneMapping===0?``:as(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,J.colorspace_pars_fragment,rs(`linearToOutputTexel`,n.outputColorSpace),ss(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(ds).join(`
`)),o=hs(o),o=fs(o,n),o=ps(o,n),s=hs(s),s=fs(s,n),s=ps(s,n),o=ys(o),s=ys(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Xo(i,i.VERTEX_SHADER,y),S=Xo(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.morphTargets===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1)if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=ns(i,x,`vertex`),n=ns(i,S,`fragment`);G(`THREE.WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}else o===``?(s===``||c===``)&&(u=!1):W(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Yo(i,h),T=us(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Zo)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Qo++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Ms=0,Ns=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ps(e),t.set(e,n)),n}},Ps=class{constructor(e){this.id=Ms++,this.code=e,this.usedTimes=0}};function Fs(e,t,n,r,i,a,o){let s=new Sn,c=new Ns,l=new Set,u=[],d=new Map,f=i.logarithmicDepthBuffer,p=i.precision,m={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function h(e){return l.add(e),e===0?`uv`:`uv${e}`}function g(a,s,u,d,g){let _=d.fog,v=g.geometry,y=a.isMeshStandardMaterial?d.environment:null,b=(a.isMeshStandardMaterial?n:t).get(a.envMap||y),x=b&&b.mapping===306?b.image.height:null,S=m[a.type];a.precision!==null&&(p=i.getMaxPrecision(a.precision),p!==a.precision&&W(`WebGLProgram.getParameters:`,a.precision,`not supported, using`,p,`instead.`));let C=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,w=C===void 0?0:C.length,T=0;v.morphAttributes.position!==void 0&&(T=1),v.morphAttributes.normal!==void 0&&(T=2),v.morphAttributes.color!==void 0&&(T=3);let E,D,O,k;if(S){let e=ra[S];E=e.vertexShader,D=e.fragmentShader}else E=a.vertexShader,D=a.fragmentShader,c.update(a),O=c.getVertexShaderID(a),k=c.getFragmentShaderID(a);let A=e.getRenderTarget(),j=e.state.buffers.depth.getReversed(),M=g.isInstancedMesh===!0,N=g.isBatchedMesh===!0,P=!!a.map,F=!!a.matcap,I=!!b,L=!!a.aoMap,R=!!a.lightMap,z=!!a.bumpMap,B=!!a.normalMap,ee=!!a.displacementMap,te=!!a.emissiveMap,ne=!!a.metalnessMap,re=!!a.roughnessMap,ie=a.anisotropy>0,ae=a.clearcoat>0,oe=a.dispersion>0,se=a.iridescence>0,ce=a.sheen>0,le=a.transmission>0,ue=ie&&!!a.anisotropyMap,de=ae&&!!a.clearcoatMap,fe=ae&&!!a.clearcoatNormalMap,pe=ae&&!!a.clearcoatRoughnessMap,me=se&&!!a.iridescenceMap,he=se&&!!a.iridescenceThicknessMap,ge=ce&&!!a.sheenColorMap,_e=ce&&!!a.sheenRoughnessMap,ve=!!a.specularMap,ye=!!a.specularColorMap,be=!!a.specularIntensityMap,xe=le&&!!a.transmissionMap,Se=le&&!!a.thicknessMap,V=!!a.gradientMap,Ce=!!a.alphaMap,we=a.alphaTest>0,Te=!!a.alphaHash,H=!!a.extensions,Ee=0;a.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Ee=e.toneMapping);let U={shaderID:S,shaderType:a.type,shaderName:a.name,vertexShader:E,fragmentShader:D,defines:a.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:a.isRawShaderMaterial===!0,glslVersion:a.glslVersion,precision:p,batching:N,batchingColor:N&&g._colorsTexture!==null,instancing:M,instancingColor:M&&g.instanceColor!==null,instancingMorph:M&&g.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:He,alphaToCoverage:!!a.alphaToCoverage,map:P,matcap:F,envMap:I,envMapMode:I&&b.mapping,envMapCubeUVHeight:x,aoMap:L,lightMap:R,bumpMap:z,normalMap:B,displacementMap:ee,emissiveMap:te,normalMapObjectSpace:B&&a.normalMapType===1,normalMapTangentSpace:B&&a.normalMapType===0,metalnessMap:ne,roughnessMap:re,anisotropy:ie,anisotropyMap:ue,clearcoat:ae,clearcoatMap:de,clearcoatNormalMap:fe,clearcoatRoughnessMap:pe,dispersion:oe,iridescence:se,iridescenceMap:me,iridescenceThicknessMap:he,sheen:ce,sheenColorMap:ge,sheenRoughnessMap:_e,specularMap:ve,specularColorMap:ye,specularIntensityMap:be,transmission:le,transmissionMap:xe,thicknessMap:Se,gradientMap:V,opaque:a.transparent===!1&&a.blending===1&&a.alphaToCoverage===!1,alphaMap:Ce,alphaTest:we,alphaHash:Te,combine:a.combine,mapUv:P&&h(a.map.channel),aoMapUv:L&&h(a.aoMap.channel),lightMapUv:R&&h(a.lightMap.channel),bumpMapUv:z&&h(a.bumpMap.channel),normalMapUv:B&&h(a.normalMap.channel),displacementMapUv:ee&&h(a.displacementMap.channel),emissiveMapUv:te&&h(a.emissiveMap.channel),metalnessMapUv:ne&&h(a.metalnessMap.channel),roughnessMapUv:re&&h(a.roughnessMap.channel),anisotropyMapUv:ue&&h(a.anisotropyMap.channel),clearcoatMapUv:de&&h(a.clearcoatMap.channel),clearcoatNormalMapUv:fe&&h(a.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&h(a.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&h(a.iridescenceMap.channel),iridescenceThicknessMapUv:he&&h(a.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&h(a.sheenColorMap.channel),sheenRoughnessMapUv:_e&&h(a.sheenRoughnessMap.channel),specularMapUv:ve&&h(a.specularMap.channel),specularColorMapUv:ye&&h(a.specularColorMap.channel),specularIntensityMapUv:be&&h(a.specularIntensityMap.channel),transmissionMapUv:xe&&h(a.transmissionMap.channel),thicknessMapUv:Se&&h(a.thicknessMap.channel),alphaMapUv:Ce&&h(a.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(B||ie),vertexColors:a.vertexColors,vertexAlphas:a.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:g.isPoints===!0&&!!v.attributes.uv&&(P||Ce),fog:!!_,useFog:a.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:a.flatShading===!0&&a.wireframe===!1,sizeAttenuation:a.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:j,skinning:g.isSkinnedMesh===!0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numDirLights:s.directional.length,numPointLights:s.point.length,numSpotLights:s.spot.length,numSpotLightMaps:s.spotLightMap.length,numRectAreaLights:s.rectArea.length,numHemiLights:s.hemi.length,numDirLightShadows:s.directionalShadowMap.length,numPointLightShadows:s.pointShadowMap.length,numSpotLightShadows:s.spotShadowMap.length,numSpotLightShadowsWithMaps:s.numSpotLightShadowsWithMaps,numLightProbes:s.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:a.dithering,shadowMapEnabled:e.shadowMap.enabled&&u.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ee,decodeVideoTexture:P&&a.map.isVideoTexture===!0&&xt.getTransfer(a.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:te&&a.emissiveMap.isVideoTexture===!0&&xt.getTransfer(a.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:a.premultipliedAlpha,doubleSided:a.side===2,flipSided:a.side===1,useDepthPacking:a.depthPacking>=0,depthPacking:a.depthPacking||0,index0AttributeName:a.index0AttributeName,extensionClipCullDistance:H&&a.extensions.clipCullDistance===!0&&r.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(H&&a.extensions.multiDraw===!0||N)&&r.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:r.has(`KHR_parallel_shader_compile`),customProgramCacheKey:a.customProgramCacheKey()};return U.vertexUv1s=l.has(1),U.vertexUv2s=l.has(2),U.vertexUv3s=l.has(3),l.clear(),U}function _(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(v(n,t),y(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function v(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function y(e,t){s.disableAll(),t.instancing&&s.enable(0),t.instancingColor&&s.enable(1),t.instancingMorph&&s.enable(2),t.matcap&&s.enable(3),t.envMap&&s.enable(4),t.normalMapObjectSpace&&s.enable(5),t.normalMapTangentSpace&&s.enable(6),t.clearcoat&&s.enable(7),t.iridescence&&s.enable(8),t.alphaTest&&s.enable(9),t.vertexColors&&s.enable(10),t.vertexAlphas&&s.enable(11),t.vertexUv1s&&s.enable(12),t.vertexUv2s&&s.enable(13),t.vertexUv3s&&s.enable(14),t.vertexTangents&&s.enable(15),t.anisotropy&&s.enable(16),t.alphaHash&&s.enable(17),t.batching&&s.enable(18),t.dispersion&&s.enable(19),t.batchingColor&&s.enable(20),t.gradientMap&&s.enable(21),e.push(s.mask),s.disableAll(),t.fog&&s.enable(0),t.useFog&&s.enable(1),t.flatShading&&s.enable(2),t.logarithmicDepthBuffer&&s.enable(3),t.reversedDepthBuffer&&s.enable(4),t.skinning&&s.enable(5),t.morphTargets&&s.enable(6),t.morphNormals&&s.enable(7),t.morphColors&&s.enable(8),t.premultipliedAlpha&&s.enable(9),t.shadowMapEnabled&&s.enable(10),t.doubleSided&&s.enable(11),t.flipSided&&s.enable(12),t.useDepthPacking&&s.enable(13),t.dithering&&s.enable(14),t.transmission&&s.enable(15),t.sheen&&s.enable(16),t.opaque&&s.enable(17),t.pointsUvs&&s.enable(18),t.decodeVideoTexture&&s.enable(19),t.decodeVideoTextureEmissive&&s.enable(20),t.alphaToCoverage&&s.enable(21),e.push(s.mask)}function b(e){let t=m[e.type],n;if(t){let e=ra[t];n=Hr.clone(e.uniforms)}else n=e.uniforms;return n}function x(t,n){let r=d.get(n);return r===void 0?(r=new js(e,n,t,a),u.push(r),d.set(n,r)):++r.usedTimes,r}function S(e){if(--e.usedTimes===0){let t=u.indexOf(e);u[t]=u[u.length-1],u.pop(),d.delete(e.cacheKey),e.destroy()}}function C(e){c.remove(e)}function w(){c.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:b,acquireProgram:x,releaseProgram:S,releaseShaderCache:C,programs:u,dispose:w}}function Is(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Ls(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.z===t.z?e.id-t.id:e.z-t.z:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Rs(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function zs(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(n,r,i,a,o,s){let c=e[t];return c===void 0?(c={id:n.id,object:n,geometry:r,material:i,groupOrder:a,renderOrder:n.renderOrder,z:o,group:s},e[t]=c):(c.id=n.id,c.object=n,c.geometry=r,c.material=i,c.groupOrder=a,c.renderOrder=n.renderOrder,c.z=o,c.group=s),t++,c}function s(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function c(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function l(e,t){n.length>1&&n.sort(e||Ls),r.length>1&&r.sort(t||Rs),i.length>1&&i.sort(t||Rs)}function u(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:s,unshift:c,finish:u,sort:l}}function Bs(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new zs,e.set(t,[i])):n>=r.length?(i=new zs,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Vs(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new K,color:new rr};break;case`SpotLight`:n={position:new K,direction:new K,color:new rr,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new K,color:new rr,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new K,skyColor:new rr,groundColor:new rr};break;case`RectAreaLight`:n={color:new rr,position:new K,halfWidth:new K,halfHeight:new K};break}return e[t.id]=n,n}}}function Hs(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var Us=0;function Ws(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function Gs(e){let t=new Vs,n=Hs(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new K);let i=new K,a=new dn,o=new dn;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(Ws);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=null;if(y.shadow&&y.shadow.map&&(C=y.shadow.map.texture.format===1030?y.shadow.map.texture:y.shadow.map.depthTexture||y.shadow.map.texture),y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Y.LTC_FLOAT_1,r.rectAreaLTC2=Y.LTC_FLOAT_2):(r.rectAreaLTC1=Y.LTC_HALF_1,r.rectAreaLTC2=Y.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=Us++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function Ks(e){let t=new Gs(e),n=[],r=[];function i(e){l.camera=e,n.length=0,r.length=0}function a(e){n.push(e)}function o(e){r.push(e)}function s(){t.setup(n)}function c(e){t.setupView(n,e)}let l={lightsArray:n,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:s,setupLightsView:c,pushLight:a,pushShadow:o}}function qs(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Ks(e),t.set(n,[a])):r>=i.length?(a=new Ks(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Js=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ys=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Xs=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],Zs=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],Qs=new dn,$s=new K,ec=new K;function tc(e,t,n){let r=new mi,i=new pt,a=new pt,o=new Mt,s=new xi,c=new Si,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new Gr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:Js,fragmentShader:Ys}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let h=new Sr;h.setAttribute(`position`,new dr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Pr(h,f),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let y=this.type;this.render=function(t,n,s){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||t.length===0)return;t.type===2&&(W(`WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead.`),t.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let m=y!==this.type;m&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){W(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let h=d.getFrameExtents();if(i.multiply(h),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/h.x),i.x=a.x*h.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/h.y),i.y=a.y*h.y,d.mapSize.y=a.y)),d.map===null||m===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){W(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new Pt(i.x,i.y,{format:z,type:E,minFilter:g,magFilter:g,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new gi(i.x,i.y,T),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=F,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=p,d.map.depthTexture.magFilter=p}else{l.isPointLight?(d.map=new ti(i.x),d.map.depthTexture=new _i(i.x,w)):(d.map=new Pt(i.x,i.y),d.map.depthTexture=new gi(i.x,i.y,w)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=F;let t=e.state.buffers.depth.getReversed();this.type===1?(d.map.depthTexture.compareFunction=t?518:515,d.map.depthTexture.minFilter=g,d.map.depthTexture.magFilter=g):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=p,d.map.depthTexture.magFilter=p)}d.camera.updateProjectionMatrix()}let _=d.map.isWebGLCubeRenderTarget?6:1;for(let t=0;t<_;t++){if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),$s.setFromMatrixPosition(l.matrixWorld),e.position.copy($s),ec.copy(e.position),ec.add(Xs[t]),e.up.copy(Zs[t]),e.lookAt(ec),e.updateMatrixWorld(),n.makeTranslation(-$s.x,-$s.y,-$s.z),Qs.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Qs,e.coordinateSystem,e.reversedDepth)}else d.updateMatrices(l);r=d.getFrustum(),S(n,s,d.camera,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&b(d,s),d.needsUpdate=!1}y=this.type,v.needsUpdate=!1,e.setRenderTarget(c,l,d)};function b(n,r){let a=t.update(_);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,m.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new Pt(i.x,i.y,{format:z,type:E})),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value=n.mapSize,f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,_,null),m.uniforms.shadow_pass.value=n.mapPass.texture,m.uniforms.resolution.value=n.mapSize,m.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,m,_,null)}function x(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,C)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function S(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=x(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=x(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)S(c[e],i,a,o,s)}function C(e){e.target.removeEventListener(`dispose`,C);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}var nc={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function rc(e,t){function n(){let t=!1,n=new Mt,r=null,i=new Mt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?ne(e.DEPTH_TEST):re(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=nc[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(r&&(t=1-t),e.clearDepth(t),o=t)},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?ne(e.STENCIL_TEST):re(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f=new WeakMap,p=[],m=null,h=!1,g=null,_=null,v=null,y=null,b=null,x=null,S=null,C=new rr(0,0,0),w=0,T=!1,E=null,D=null,O=null,k=null,A=null,j=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),M=!1,N=0,P=e.getParameter(e.VERSION);P.indexOf(`WebGL`)===-1?P.indexOf(`OpenGL ES`)!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),M=N>=2):(N=parseFloat(/^WebGL (\d)/.exec(P)[1]),M=N>=1);let F=null,I={},L=e.getParameter(e.SCISSOR_BOX),R=e.getParameter(e.VIEWPORT),z=new Mt().fromArray(L),B=new Mt().fromArray(R);function ee(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let te={};te[e.TEXTURE_2D]=ee(e.TEXTURE_2D,e.TEXTURE_2D,1),te[e.TEXTURE_CUBE_MAP]=ee(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[e.TEXTURE_2D_ARRAY]=ee(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),te[e.TEXTURE_3D]=ee(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),ne(e.DEPTH_TEST),o.setFunc(3),de(!1),fe(1),ne(e.CULL_FACE),le(0);function ne(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function re(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function ie(t,n){return d[t]===n?!1:(e.bindFramebuffer(t,n),d[t]=n,t===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=n),!0)}function ae(t,n){let r=p,i=!1;if(t){r=f.get(n),r===void 0&&(r=[],f.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function oe(t){return m===t?!1:(e.useProgram(t),m=t,!0)}let se={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};se[103]=e.MIN,se[104]=e.MAX;let ce={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function le(t,n,r,i,a,o,s,c,l,u){if(t===0){h===!0&&(re(e.BLEND),h=!1);return}if(h===!1&&(ne(e.BLEND),h=!0),t!==5){if(t!==g||u!==T){if((_!==100||b!==100)&&(e.blendEquation(e.FUNC_ADD),_=100,b=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:G(`WebGLState: Invalid blending: `,t);break}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:G(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:G(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:G(`WebGLState: Invalid blending: `,t);break}v=null,y=null,x=null,S=null,C.set(0,0,0),w=0,g=t,T=u}return}a||=n,o||=r,s||=i,(n!==_||a!==b)&&(e.blendEquationSeparate(se[n],se[a]),_=n,b=a),(r!==v||i!==y||o!==x||s!==S)&&(e.blendFuncSeparate(ce[r],ce[i],ce[o],ce[s]),v=r,y=i,x=o,S=s),(c.equals(C)===!1||l!==w)&&(e.blendColor(c.r,c.g,c.b,l),C.copy(c),w=l),g=t,T=!1}function ue(t,n){t.side===2?re(e.CULL_FACE):ne(e.CULL_FACE);let r=t.side===1;n&&(r=!r),de(r),t.blending===1&&t.transparent===!1?le(0):le(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),me(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?ne(e.SAMPLE_ALPHA_TO_COVERAGE):re(e.SAMPLE_ALPHA_TO_COVERAGE)}function de(t){E!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),E=t)}function fe(t){t===0?re(e.CULL_FACE):(ne(e.CULL_FACE),t!==D&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),D=t}function pe(t){t!==O&&(M&&e.lineWidth(t),O=t)}function me(t,n,r){t?(ne(e.POLYGON_OFFSET_FILL),(k!==n||A!==r)&&(e.polygonOffset(n,r),k=n,A=r)):re(e.POLYGON_OFFSET_FILL)}function he(t){t?ne(e.SCISSOR_TEST):re(e.SCISSOR_TEST)}function ge(t){t===void 0&&(t=e.TEXTURE0+j-1),F!==t&&(e.activeTexture(t),F=t)}function _e(t,n,r){r===void 0&&(r=F===null?e.TEXTURE0+j-1:F);let i=I[r];i===void 0&&(i={type:void 0,texture:void 0},I[r]=i),(i.type!==t||i.texture!==n)&&(F!==r&&(e.activeTexture(r),F=r),e.bindTexture(t,n||te[t]),i.type=t,i.texture=n)}function ve(){let t=I[F];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function ye(){try{e.compressedTexImage2D(...arguments)}catch(e){G(`WebGLState:`,e)}}function be(){try{e.compressedTexImage3D(...arguments)}catch(e){G(`WebGLState:`,e)}}function xe(){try{e.texSubImage2D(...arguments)}catch(e){G(`WebGLState:`,e)}}function Se(){try{e.texSubImage3D(...arguments)}catch(e){G(`WebGLState:`,e)}}function V(){try{e.compressedTexSubImage2D(...arguments)}catch(e){G(`WebGLState:`,e)}}function Ce(){try{e.compressedTexSubImage3D(...arguments)}catch(e){G(`WebGLState:`,e)}}function we(){try{e.texStorage2D(...arguments)}catch(e){G(`WebGLState:`,e)}}function Te(){try{e.texStorage3D(...arguments)}catch(e){G(`WebGLState:`,e)}}function H(){try{e.texImage2D(...arguments)}catch(e){G(`WebGLState:`,e)}}function Ee(){try{e.texImage3D(...arguments)}catch(e){G(`WebGLState:`,e)}}function U(t){z.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),z.copy(t))}function De(t){B.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),B.copy(t))}function Oe(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function ke(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Ae(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),u={},F=null,I={},d={},f=new WeakMap,p=[],m=null,h=!1,g=null,_=null,v=null,y=null,b=null,x=null,S=null,C=new rr(0,0,0),w=0,T=!1,E=null,D=null,O=null,k=null,A=null,z.set(0,0,e.canvas.width,e.canvas.height),B.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:ne,disable:re,bindFramebuffer:ie,drawBuffers:ae,useProgram:oe,setBlending:le,setMaterial:ue,setFlipSided:de,setCullFace:fe,setLineWidth:pe,setPolygonOffset:me,setScissorTest:he,activeTexture:ge,bindTexture:_e,unbindTexture:ve,compressedTexImage2D:ye,compressedTexImage3D:be,texImage2D:H,texImage3D:Ee,updateUBOMapping:Oe,uniformBlockBinding:ke,texStorage2D:we,texStorage3D:Te,texSubImage2D:xe,texSubImage3D:Se,compressedTexSubImage2D:V,compressedTexSubImage3D:Ce,scissor:U,viewport:De,reset:Ae}}function ic(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new pt,y=new WeakMap,b,x=new WeakMap,S=!1;try{S=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function C(e,t){return S?new OffscreenCanvas(e,t):Xe(`canvas`)}function w(e,t,n){let r=1,i=H(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1)if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);b===void 0&&(b=C(n,a));let o=t?C(n,a):b;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),W(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}else return`data`in e&&W(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e;return e}function T(e){return e.generateMipmaps}function E(t){e.generateMipmap(t)}function D(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function O(n,r,i,a,o=!1){if(n!==null){if(e[n]!==void 0)return e[n];W(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let s=r;if(r===e.RED&&(i===e.FLOAT&&(s=e.R32F),i===e.HALF_FLOAT&&(s=e.R16F),i===e.UNSIGNED_BYTE&&(s=e.R8)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.R8UI),i===e.UNSIGNED_SHORT&&(s=e.R16UI),i===e.UNSIGNED_INT&&(s=e.R32UI),i===e.BYTE&&(s=e.R8I),i===e.SHORT&&(s=e.R16I),i===e.INT&&(s=e.R32I)),r===e.RG&&(i===e.FLOAT&&(s=e.RG32F),i===e.HALF_FLOAT&&(s=e.RG16F),i===e.UNSIGNED_BYTE&&(s=e.RG8)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RG8UI),i===e.UNSIGNED_SHORT&&(s=e.RG16UI),i===e.UNSIGNED_INT&&(s=e.RG32UI),i===e.BYTE&&(s=e.RG8I),i===e.SHORT&&(s=e.RG16I),i===e.INT&&(s=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RGB8UI),i===e.UNSIGNED_SHORT&&(s=e.RGB16UI),i===e.UNSIGNED_INT&&(s=e.RGB32UI),i===e.BYTE&&(s=e.RGB8I),i===e.SHORT&&(s=e.RGB16I),i===e.INT&&(s=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(s=e.RGBA16UI),i===e.UNSIGNED_INT&&(s=e.RGBA32UI),i===e.BYTE&&(s=e.RGBA8I),i===e.SHORT&&(s=e.RGBA16I),i===e.INT&&(s=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_INT_5_9_9_9_REV&&(s=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(s=e.R11F_G11F_B10F)),r===e.RGBA){let t=o?Ue:xt.getTransfer(a);i===e.FLOAT&&(s=e.RGBA32F),i===e.HALF_FLOAT&&(s=e.RGBA16F),i===e.UNSIGNED_BYTE&&(s=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT_4_4_4_4&&(s=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(s=e.RGB5_A1)}return(s===e.R16F||s===e.R32F||s===e.RG16F||s===e.RG32F||s===e.RGBA16F||s===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),s}function k(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,W(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function A(e,t){return T(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function j(e){let t=e.target;t.removeEventListener(`dispose`,j),N(t),t.isVideoTexture&&y.delete(t)}function M(e){let t=e.target;t.removeEventListener(`dispose`,M),F(t)}function N(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=x.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&P(e),Object.keys(i).length===0&&x.delete(n)}r.remove(e)}function P(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=x.get(i);delete a[n.__cacheKey],o.memory.textures--}function F(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let L=0;function R(){L=0}function z(){let e=L;return e>=i.maxTextures&&W(`WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+i.maxTextures),L+=1,e}function B(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function ee(t,i){let a=r.get(t);if(t.isVideoTexture&&we(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)W(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)W(`WebGLRenderer: Texture marked for update but image is incomplete`);else{de(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function te(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){de(a,t,i);return}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function ne(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){de(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function re(t,i){let a=r.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version){fe(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let ie={[u]:e.REPEAT,[d]:e.CLAMP_TO_EDGE,[f]:e.MIRRORED_REPEAT},ae={[p]:e.NEAREST,[m]:e.NEAREST_MIPMAP_NEAREST,[h]:e.NEAREST_MIPMAP_LINEAR,[g]:e.LINEAR,[_]:e.LINEAR_MIPMAP_NEAREST,[v]:e.LINEAR_MIPMAP_LINEAR},oe={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function se(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&W(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,ie[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,ie[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,ie[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ae[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ae[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,oe[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function ce(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,j));let i=n.source,a=x.get(i);a===void 0&&(a={},x.set(i,a));let s=B(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&P(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function le(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ue(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=le(n.start,r.width,4),c=le(t.start,r.width,4);n.start<=i+1&&a===c&&le(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=e.getParameter(e.UNPACK_ROW_LENGTH),l=e.getParameter(e.UNPACK_SKIP_PIXELS),u=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;e.pixelStorei(e.UNPACK_SKIP_PIXELS,u),e.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,c),e.pixelStorei(e.UNPACK_SKIP_PIXELS,l),e.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function de(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=ce(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let d=r.get(u);if(u.version!==d.__version||l===!0){n.activeTexture(e.TEXTURE0+s);let t=xt.getPrimaries(xt.workingColorSpace),r=o.colorSpace===``?null:xt.getPrimaries(o.colorSpace),f=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,f);let p=w(o.image,!1,i.maxTextureSize);p=Te(o,p);let m=a.convert(o.format,o.colorSpace),h=a.convert(o.type),g=O(o.internalFormat,m,h,o.colorSpace,o.isVideoTexture);se(c,o);let _,v=o.mipmaps,y=o.isVideoTexture!==!0,b=d.__version===void 0||l===!0,x=u.dataReady,S=A(o,p);if(o.isDepthTexture)g=k(o.format===I,o.type),b&&(y?n.texStorage2D(e.TEXTURE_2D,1,g,p.width,p.height):n.texImage2D(e.TEXTURE_2D,0,g,p.width,p.height,0,m,h,null));else if(o.isDataTexture)if(v.length>0){y&&b&&n.texStorage2D(e.TEXTURE_2D,S,g,v[0].width,v[0].height);for(let t=0,r=v.length;t<r;t++)_=v[t],y?x&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,_.width,_.height,m,h,_.data):n.texImage2D(e.TEXTURE_2D,t,g,_.width,_.height,0,m,h,_.data);o.generateMipmaps=!1}else y?(b&&n.texStorage2D(e.TEXTURE_2D,S,g,p.width,p.height),x&&ue(o,p,m,h)):n.texImage2D(e.TEXTURE_2D,0,g,p.width,p.height,0,m,h,p.data);else if(o.isCompressedTexture)if(o.isCompressedArrayTexture){y&&b&&n.texStorage3D(e.TEXTURE_2D_ARRAY,S,g,v[0].width,v[0].height,p.depth);for(let t=0,r=v.length;t<r;t++)if(_=v[t],o.format!==1023)if(m!==null)if(y){if(x)if(o.layerUpdates.size>0){let r=$i(_.width,_.height,o.format,o.type);for(let i of o.layerUpdates){let a=_.data.subarray(i*r/_.data.BYTES_PER_ELEMENT,(i+1)*r/_.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,i,_.width,_.height,1,m,a)}o.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,_.width,_.height,p.depth,m,_.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,t,g,_.width,_.height,p.depth,0,_.data,0,0);else W(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`);else y?x&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,_.width,_.height,p.depth,m,h,_.data):n.texImage3D(e.TEXTURE_2D_ARRAY,t,g,_.width,_.height,p.depth,0,m,h,_.data)}else{y&&b&&n.texStorage2D(e.TEXTURE_2D,S,g,v[0].width,v[0].height);for(let t=0,r=v.length;t<r;t++)_=v[t],o.format===1023?y?x&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,_.width,_.height,m,h,_.data):n.texImage2D(e.TEXTURE_2D,t,g,_.width,_.height,0,m,h,_.data):m===null?W(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):y?x&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,_.width,_.height,m,_.data):n.compressedTexImage2D(e.TEXTURE_2D,t,g,_.width,_.height,0,_.data)}else if(o.isDataArrayTexture)if(y){if(b&&n.texStorage3D(e.TEXTURE_2D_ARRAY,S,g,p.width,p.height,p.depth),x)if(o.layerUpdates.size>0){let t=$i(p.width,p.height,o.format,o.type);for(let r of o.layerUpdates){let i=p.data.subarray(r*t/p.data.BYTES_PER_ELEMENT,(r+1)*t/p.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,r,p.width,p.height,1,m,h,i)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,p.width,p.height,p.depth,m,h,p.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,g,p.width,p.height,p.depth,0,m,h,p.data);else if(o.isData3DTexture)y?(b&&n.texStorage3D(e.TEXTURE_3D,S,g,p.width,p.height,p.depth),x&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,p.width,p.height,p.depth,m,h,p.data)):n.texImage3D(e.TEXTURE_3D,0,g,p.width,p.height,p.depth,0,m,h,p.data);else if(o.isFramebufferTexture){if(b)if(y)n.texStorage2D(e.TEXTURE_2D,S,g,p.width,p.height);else{let t=p.width,r=p.height;for(let i=0;i<S;i++)n.texImage2D(e.TEXTURE_2D,i,g,t,r,0,m,h,null),t>>=1,r>>=1}}else if(v.length>0){if(y&&b){let t=H(v[0]);n.texStorage2D(e.TEXTURE_2D,S,g,t.width,t.height)}for(let t=0,r=v.length;t<r;t++)_=v[t],y?x&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m,h,_):n.texImage2D(e.TEXTURE_2D,t,g,m,h,_);o.generateMipmaps=!1}else if(y){if(b){let t=H(p);n.texStorage2D(e.TEXTURE_2D,S,g,t.width,t.height)}x&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,m,h,p)}else n.texImage2D(e.TEXTURE_2D,0,g,m,h,p);T(o)&&E(c),d.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function fe(t,o,s){if(o.image.length!==6)return;let c=ce(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=xt.getPrimaries(xt.workingColorSpace),r=o.colorSpace===``?null:xt.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=w(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=Te(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),_=a.convert(o.type),v=O(o.internalFormat,g,_,o.colorSpace),y=o.isVideoTexture!==!0,b=u.__version===void 0||c===!0,x=l.dataReady,S=A(o,h);se(e.TEXTURE_CUBE_MAP,o);let C;if(f){y&&b&&n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=m[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];o.format===1023?y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?W(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=o.mipmaps,y&&b){C.length>0&&S++;let t=H(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(p){y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<C.length;r++){let i=C[r].image[t].image;y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,i.width,i.height,0,g,_,i.data)}}else{y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,m[t]);for(let r=0;r<C.length;r++){let i=C[r];y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,g,_,i.image[t])}}}T(o)&&E(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function pe(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=O(o.internalFormat,d,f,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),Ce(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,V(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function me(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=k(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Ce(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,V(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,V(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=O(o.internalFormat,c,l,o.colorSpace);Ce(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,V(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,V(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function he(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`renderTarget.depthTexture must be an instance of THREE.DepthTexture`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,j)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),se(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else ee(i.depthTexture,0);let u=l.__webglTexture,d=V(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)Ce(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)Ce(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`Unknown depthTexture format`)}function ge(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer)if(a)for(let e=0;e<6;e++)he(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?he(i.__webglFramebuffer[0],t,0):he(i.__webglFramebuffer,t,0)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),me(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),me(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function _e(t,n,i){let a=r.get(t);n!==void 0&&pe(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&ge(t)}function ve(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,M);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&Ce(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=O(r.internalFormat,i,o,r.colorSpace,t.isXRRenderTarget===!0),u=V(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),me(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),se(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)pe(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else pe(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);T(i)&&E(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),se(c,a),pe(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),T(a)&&E(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),se(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)pe(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else pe(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);T(i)&&E(r),n.unbindTexture()}t.depthBuffer&&ge(t)}function ye(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(T(a)){let t=D(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),E(t),n.unbindTexture()}}}let be=[],xe=[];function Se(t){if(t.samples>0){if(Ce(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(be.length=0,xe.length=0,be.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.resolveDepthBuffer===!1&&(be.push(l),xe.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,xe)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,be))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function V(e){return Math.min(i.maxSamples,e.samples)}function Ce(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function we(e){let t=o.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Te(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(xt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&W(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):G(`WebGLTextures: Unsupported texture color space:`,n)),t}function H(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=R,this.setTexture2D=ee,this.setTexture2DArray=te,this.setTexture3D=ne,this.setTextureCube=re,this.rebindTextures=_e,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=ye,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=Ce,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function ac(e,t){function n(n,r=``){let i,a=xt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a===`srgb`)if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491)if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var oc=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sc=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,cc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new vi(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Gr({vertexShader:oc,fragmentShader:sc,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pr(new yi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},lc=class extends rt{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new cc,g={},_=t.getContextAttributes(),v=null,b=null,x=[],S=[],C=new pt,T=null,E=new Xr;E.viewport=new Mt;let D=new Xr;D.viewport=new Mt;let O=[E,D],A=new zi,j=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=x[e];return t===void 0&&(t=new ii,x[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=x[e];return t===void 0&&(t=new ii,x[e]=t),t.getGripSpace()},this.getHand=function(e){let t=x[e];return t===void 0&&(t=new ii,x[e]=t),t.getHandSpace()};function N(e){let t=S.indexOf(e.inputSource);if(t===-1)return;let n=x[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function L(){r.removeEventListener(`select`,N),r.removeEventListener(`selectstart`,N),r.removeEventListener(`selectend`,N),r.removeEventListener(`squeeze`,N),r.removeEventListener(`squeezestart`,N),r.removeEventListener(`squeezeend`,N),r.removeEventListener(`end`,L),r.removeEventListener(`inputsourceschange`,R);for(let e=0;e<x.length;e++){let t=S[e];t!==null&&(S[e]=null,x[e].disconnect(t))}j=null,M=null,h.reset();for(let e in g)delete g[e];e.setRenderTarget(v),f=null,d=null,u=null,r=null,b=null,ae.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&W(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&W(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,N),r.addEventListener(`selectstart`,N),r.addEventListener(`selectend`,N),r.addEventListener(`squeeze`,N),r.addEventListener(`squeezestart`,N),r.addEventListener(`squeezeend`,N),r.addEventListener(`end`,L),r.addEventListener(`inputsourceschange`,R),_.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(C),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?I:F,a=_.stencil?k:w);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new Pt(d.textureWidth,d.textureHeight,{format:P,type:y,depthTexture:new gi(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Pt(f.framebufferWidth,f.framebufferHeight,{format:P,type:y,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),ae.setContext(r),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function R(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=S.indexOf(n);r>=0&&(S[r]=null,x[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=S.indexOf(n);if(r===-1){for(let e=0;e<x.length;e++)if(e>=S.length){S.push(n),r=e;break}else if(S[e]===null){S[e]=n,r=e;break}if(r===-1)break}let i=x[r];i&&i.connect(n)}}let z=new K,B=new K;function ee(e,t,n){z.setFromMatrixPosition(t.matrixWorld),B.setFromMatrixPosition(n.matrixWorld);let r=z.distanceTo(B),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function te(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),A.near=D.near=E.near=t,A.far=D.far=E.far=n,(j!==A.near||M!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),j=A.near,M=A.far),A.layers.mask=e.layers.mask|6,E.layers.mask=A.layers.mask&3,D.layers.mask=A.layers.mask&5;let i=e.parent,a=A.cameras;te(A,i);for(let e=0;e<a.length;e++)te(a[e],i);a.length===2?ee(A,E,D):A.projectionMatrix.copy(E.projectionMatrix),ne(e,A,i)};function ne(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=ot*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(d===null&&f===null))return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(A)},this.getCameraTexture=function(e){return g[e]};let re=null;function ie(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let i=!1;t.length!==A.cameras.length&&(A.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(b,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(b))}let o=O[n];o===void 0&&(o=new Xr,o.layers.enable(n),o.viewport=new Mt,O[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(A.matrix.copy(o.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),i===!0&&A.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new vi,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<x.length;e++){let t=S[e],n=x[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}re&&re(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let ae=new ta;ae.setAnimationLoop(ie),this.setAnimationLoop=function(e){re=e},this.dispose=function(){}}},uc=new xn,dc=new dn;function fc(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Vr(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isMeshBasicMaterial||t.isMeshLambertMaterial?a(e,t):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,uc.copy(o),uc.x*=-1,uc.y*=-1,uc.z*=-1,a.isCubeTexture&&a.isRenderTargetTexture===!1&&(uc.y*=-1,uc.z*=-1),e.envMapRotation.value.setFromMatrix4(dc.makeRotationFromEuler(uc)),e.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function pc(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(m(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return G(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let t=0,n=r.length;t<n;t++){let n=Array.isArray(r[t])?r[t]:[r[t]];for(let r=0,i=n.length;r<i;r++){let i=n[r];if(p(i,t,r,a)===!0){let t=i.__offset,n=Array.isArray(i.value)?i.value:[i.value],r=0;for(let a=0;a<n.length;a++){let o=n[a],s=h(o);typeof o==`number`||typeof o==`boolean`?(i.__data[0]=o,e.bufferSubData(e.UNIFORM_BUFFER,t+r,i.__data)):o.isMatrix3?(i.__data[0]=o.elements[0],i.__data[1]=o.elements[1],i.__data[2]=o.elements[2],i.__data[3]=0,i.__data[4]=o.elements[3],i.__data[5]=o.elements[4],i.__data[6]=o.elements[5],i.__data[7]=0,i.__data[8]=o.elements[6],i.__data[9]=o.elements[7],i.__data[10]=o.elements[8],i.__data[11]=0):(o.toArray(i.__data,r),r+=s.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,t,i.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return typeof i==`number`||typeof i==`boolean`?r[a]=i:r[a]=i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=h(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?W(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):W(`WebGLRenderer: Unsupported uniform value type.`,e),t}function g(t){let n=t.target;n.removeEventListener(`dispose`,g);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:_}}var mc=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),hc=null;function gc(){return hc===null&&(hc=new oi(mc,16,16,z,E),hc.name=`DFG_LUT`,hc.minFilter=g,hc.magFilter=g,hc.wrapS=d,hc.wrapT=d,hc.generateMipmaps=!1,hc.needsUpdate=!0),hc}var _c=class{constructor(e={}){let{canvas:t=Ze(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=y}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([ee,B,R]),g=new Set([y,w,S,k,D,O]),_=new Uint32Array(4),b=new Int32Array(4),x=null,C=null,T=[],A=[],j=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,N=!1;this._outputColorSpace=Ve;let P=0,F=0,I=null,L=-1,z=null,te=new Mt,ne=new Mt,re=null,ie=new rr(0),ae=0,oe=t.width,se=t.height,ce=1,le=null,ue=null,de=new Mt(0,0,oe,se),fe=new Mt(0,0,oe,se),pe=!1,me=new mi,he=!1,ge=!1,_e=new dn,ve=new K,ye=new Mt,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},xe=!1;function Se(){return I===null?ce:1}let V=n;function Ce(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r182`),t.addEventListener(`webglcontextlost`,Qe,!1),t.addEventListener(`webglcontextrestored`,$e,!1),t.addEventListener(`webglcontextcreationerror`,rt,!1),V===null){let t=`webgl2`;if(V=Ce(t,e),V===null)throw Ce(t)?Error(`Error creating WebGL context with your selected attributes.`):Error(`Error creating WebGL context.`)}}catch(e){throw G(`WebGLRenderer: `+e.message),e}let we,Te,H,Ee,U,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ue,We,Ge,Ke,Je;function Ye(){we=new Pa(V),we.init(),Ge=new ac(V,we),Te=new ua(V,we,e,Ge),H=new rc(V,we),Te.reversedDepthBuffer&&d&&H.buffers.depth.setReversed(!0),Ee=new La(V),U=new Is,De=new ic(V,we,H,U,Te,Ge,Ee),Oe=new fa(M),ke=new Na(M),Ae=new na(V),Ke=new ca(V,Ae),je=new Fa(V,Ae,Ee,Ke),Me=new za(V,je,Ae,Ee),Be=new Ra(V,Te,De),Le=new da(U),Ne=new Fs(M,Oe,ke,we,Te,Ke,Le),Pe=new fc(M,U),Fe=new Bs,Ie=new qs(we),ze=new sa(M,Oe,ke,H,Me,p,s),Re=new tc(M,Me,Te),Je=new pc(V,Ee,Te,H),Ue=new la(V,we,Ee),We=new Ia(V,we,Ee),Ee.programs=Ne.programs,M.capabilities=Te,M.extensions=we,M.properties=U,M.renderLists=Fe,M.shadowMap=Re,M.state=H,M.info=Ee}Ye(),m!==1009&&(j=new Va(m,t.width,t.height,r,i));let Xe=new lc(M,V);this.xr=Xe,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let e=we.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=we.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(e){e!==void 0&&(ce=e,this.setSize(oe,se,!1))},this.getSize=function(e){return e.set(oe,se)},this.setSize=function(e,n,r=!0){if(Xe.isPresenting){W(`WebGLRenderer: Can't change size while VR device is presenting.`);return}oe=e,se=n,t.width=Math.floor(e*ce),t.height=Math.floor(n*ce),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),j!==null&&j.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(oe*ce,se*ce).floor()},this.setDrawingBufferSize=function(e,n,r){oe=e,se=n,ce=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009){console.error(`THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){console.warn(`THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}j.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(te)},this.getViewport=function(e){return e.copy(de)},this.setViewport=function(e,t,n,r){e.isVector4?de.set(e.x,e.y,e.z,e.w):de.set(e,t,n,r),H.viewport(te.copy(de).multiplyScalar(ce).round())},this.getScissor=function(e){return e.copy(fe)},this.setScissor=function(e,t,n,r){e.isVector4?fe.set(e.x,e.y,e.z,e.w):fe.set(e,t,n,r),H.scissor(ne.copy(fe).multiplyScalar(ce).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(e){H.setScissorTest(pe=e)},this.setOpaqueSort=function(e){le=e},this.setTransparentSort=function(e){ue=e},this.getClearColor=function(e){return e.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor(...arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(I!==null){let t=I.texture.format;e=h.has(t)}if(e){let e=I.texture.type,t=g.has(e),n=ze.getClearColor(),r=ze.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,V.clearBufferuiv(V.COLOR,0,_)):(b[0]=i,b[1]=a,b[2]=o,b[3]=r,V.clearBufferiv(V.COLOR,0,b))}else r|=V.COLOR_BUFFER_BIT}t&&(r|=V.DEPTH_BUFFER_BIT),n&&(r|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Qe,!1),t.removeEventListener(`webglcontextrestored`,$e,!1),t.removeEventListener(`webglcontextcreationerror`,rt,!1),ze.dispose(),Fe.dispose(),Ie.dispose(),U.dispose(),Oe.dispose(),ke.dispose(),Me.dispose(),Ke.dispose(),Je.dispose(),Ne.dispose(),Xe.dispose(),Xe.removeEventListener(`sessionstart`,ut),Xe.removeEventListener(`sessionend`,dt),ft.stop()};function Qe(e){e.preventDefault(),et(`WebGLRenderer: Context Lost.`),N=!0}function $e(){et(`WebGLRenderer: Context Restored.`),N=!1;let e=Ee.autoReset,t=Re.enabled,n=Re.autoUpdate,r=Re.needsUpdate,i=Re.type;Ye(),Ee.autoReset=e,Re.enabled=t,Re.autoUpdate=n,Re.needsUpdate=r,Re.type=i}function rt(e){G(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function it(e){let t=e.target;t.removeEventListener(`dispose`,it),at(t)}function at(e){ot(e),U.remove(e)}function ot(e){let t=U.get(e).programs;t!==void 0&&(t.forEach(function(e){Ne.releaseProgram(e)}),e.isShaderMaterial&&Ne.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=be);let o=i.isMesh&&i.matrixWorld.determinant()<0,s=bt(e,t,n,r,i);H.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=je.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Ke.setup(i,r,s,n,c);let h,g=Ue;if(c!==null&&(h=Ae.get(c),g=We,g.setIndex(h)),i.isMesh)r.wireframe===!0?(H.setLineWidth(r.wireframeLinewidth*Se()),g.setMode(V.LINES)):g.setMode(V.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),H.setLineWidth(e*Se()),i.isLineSegments?g.setMode(V.LINES):i.isLineLoop?g.setMode(V.LINE_LOOP):g.setMode(V.LINE_STRIP)}else i.isPoints?g.setMode(V.POINTS):i.isSprite&&g.setMode(V.TRIANGLES);if(i.isBatchedMesh)if(i._multiDrawInstances!==null)tt(`WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection.`),g.renderMultiDrawInstances(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount,i._multiDrawInstances);else if(we.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ae.get(c).bytesPerElement:1,o=U.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(V,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function st(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,_t(e,t,n),e.side=0,e.needsUpdate=!0,_t(e,t,n),e.side=2):_t(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),C=Ie.get(n),C.init(t),A.push(C),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(C.pushLight(e),e.castShadow&&C.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(C.pushLight(e),e.castShadow&&C.pushShadow(e))}),C.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t)if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];st(a,n,e),r.add(a)}else st(t,n,e),r.add(t)}),C=A.pop(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){U.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}we.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let ct=null;function lt(e){ct&&ct(e)}function ut(){ft.stop()}function dt(){ft.start()}let ft=new ta;ft.setAnimationLoop(lt),typeof self<`u`&&ft.setContext(self),this.setAnimationLoop=function(e){ct=e,Xe.setAnimationLoop(e),e===null?ft.stop():ft.start()},Xe.addEventListener(`sessionstart`,ut),Xe.addEventListener(`sessionend`,dt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){G(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(N===!0)return;let n=Xe.enabled===!0&&Xe.isPresenting===!0,r=j!==null&&(I===null||n)&&j.begin(M,I);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Xe.enabled===!0&&Xe.isPresenting===!0&&(j===null||j.isCompositing()===!1)&&(Xe.cameraAutoUpdate===!0&&Xe.updateCamera(t),t=Xe.getCamera()),e.isScene===!0&&e.onBeforeRender(M,e,t,I),C=Ie.get(e,A.length),C.init(t),A.push(C),_e.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),me.setFromProjectionMatrix(_e,qe,t.reversedDepth),ge=this.localClippingEnabled,he=Le.init(this.clippingPlanes,ge),x=Fe.get(e,T.length),x.init(),T.push(x),Xe.enabled===!0&&Xe.isPresenting===!0){let e=M.xr.getDepthSensingMesh();e!==null&&pt(e,t,-1/0,M.sortObjects)}pt(e,t,0,M.sortObjects),x.finish(),M.sortObjects===!0&&x.sort(le,ue),xe=Xe.enabled===!1||Xe.isPresenting===!1||Xe.hasDepthSensing()===!1,xe&&ze.addToRenderList(x,e),this.info.render.frame++,he===!0&&Le.beginShadows();let i=C.state.shadowsArray;if(Re.render(i,e,t),he===!0&&Le.endShadows(),this.info.autoReset===!0&&this.info.reset(),(r&&j.hasRenderPass())===!1){let n=x.opaque,r=x.transmissive;if(C.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];ht(n,r,e,a)}xe&&ze.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];mt(x,e,n,n.viewport)}}else r.length>0&&ht(n,r,e,t),xe&&ze.render(e),mt(x,e,t)}I!==null&&F===0&&(De.updateMultisampleRenderTarget(I),De.updateRenderTargetMipmap(I)),r&&j.end(M),e.isScene===!0&&e.onAfterRender(M,e,t),Ke.resetDefaultState(),L=-1,z=null,A.pop(),A.length>0?(C=A[A.length-1],he===!0&&Le.setGlobalState(M.clippingPlanes,C.state.camera)):C=null,T.pop(),x=T.length>0?T[T.length-1]:null};function pt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)C.pushLight(e),e.castShadow&&C.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||me.intersectsSprite(e)){r&&ye.setFromMatrixPosition(e.matrixWorld).applyMatrix4(_e);let t=Me.update(e),i=e.material;i.visible&&x.push(e,t,i,n,ye.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||me.intersectsObject(e))){let t=Me.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),ye.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),ye.copy(e.boundingSphere.center)),ye.applyMatrix4(e.matrixWorld).applyMatrix4(_e)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&x.push(e,t,s,n,ye.z,o)}}else i.visible&&x.push(e,t,i,n,ye.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)pt(i[e],t,n,r)}function mt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;C.setupLightsView(n),he===!0&&Le.setGlobalState(M.clippingPlanes,n),r&&H.viewport(te.copy(r)),i.length>0&&gt(i,t,n),a.length>0&&gt(a,t,n),o.length>0&&gt(o,t,n),H.buffers.depth.setTest(!0),H.buffers.depth.setMask(!0),H.buffers.color.setMask(!0),H.setPolygonOffset(!1)}function ht(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[r.id]===void 0){let e=we.has(`EXT_color_buffer_half_float`)||we.has(`EXT_color_buffer_float`);C.state.transmissionRenderTarget[r.id]=new Pt(1,1,{generateMipmaps:!0,type:e?E:y,minFilter:v,samples:Te.samples,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xt.workingColorSpace})}let a=C.state.transmissionRenderTarget[r.id],o=r.viewport||te;a.setSize(o.z*M.transmissionResolutionScale,o.w*M.transmissionResolutionScale);let s=M.getRenderTarget(),c=M.getActiveCubeFace(),l=M.getActiveMipmapLevel();M.setRenderTarget(a),M.getClearColor(ie),ae=M.getClearAlpha(),ae<1&&M.setClearColor(16777215,.5),M.clear(),xe&&ze.render(n);let u=M.toneMapping;M.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),C.setupLightsView(r),he===!0&&Le.setGlobalState(M.clippingPlanes,r),gt(e,n,r),De.updateMultisampleRenderTarget(a),De.updateRenderTargetMipmap(a),we.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,q(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(De.updateMultisampleRenderTarget(a),De.updateRenderTargetMipmap(a))}M.setRenderTarget(s,c,l),M.setClearColor(ie,ae),d!==void 0&&(r.viewport=d),M.toneMapping=u}function gt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&q(o,t,n,s,l,c)}}function q(e,t,n,r,i,a){e.onBeforeRender(M,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(M,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,M.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,M.renderBufferDirect(n,t,r,i,e,a),i.side=2):M.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(M,t,n,r,i,a)}function _t(e,t,n){t.isScene!==!0&&(t=be);let r=U.get(e),i=C.state.lights,a=C.state.shadowsArray,o=i.state.version,s=Ne.getParameters(e,i.state,a,t,n),c=Ne.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial?t.environment:null,r.fog=t.fog,r.envMap=(e.isMeshStandardMaterial?ke:Oe).get(e.envMap||r.environment),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,it),l=new Map,r.programs=l);let u=l.get(c);if(u!==void 0){if(r.currentProgram===u&&r.lightsStateVersion===o)return yt(e,s),u}else s.uniforms=Ne.getUniforms(e),e.onBeforeCompile(s,M),u=Ne.acquireProgram(s,c),l.set(c,u),r.uniforms=s.uniforms;let d=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(d.clippingPlanes=Le.uniform),yt(e,s),r.needsLights=Ct(e),r.lightsStateVersion=o,r.needsLights&&(d.ambientLightColor.value=i.state.ambient,d.lightProbe.value=i.state.probe,d.directionalLights.value=i.state.directional,d.directionalLightShadows.value=i.state.directionalShadow,d.spotLights.value=i.state.spot,d.spotLightShadows.value=i.state.spotShadow,d.rectAreaLights.value=i.state.rectArea,d.ltc_1.value=i.state.rectAreaLTC1,d.ltc_2.value=i.state.rectAreaLTC2,d.pointLights.value=i.state.point,d.pointLightShadows.value=i.state.pointShadow,d.hemisphereLights.value=i.state.hemi,d.directionalShadowMap.value=i.state.directionalShadowMap,d.directionalShadowMatrix.value=i.state.directionalShadowMatrix,d.spotShadowMap.value=i.state.spotShadowMap,d.spotLightMatrix.value=i.state.spotLightMatrix,d.spotLightMap.value=i.state.spotLightMap,d.pointShadowMap.value=i.state.pointShadowMap,d.pointShadowMatrix.value=i.state.pointShadowMatrix),r.currentProgram=u,r.uniformsList=null,u}function vt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Yo.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function yt(e,t){let n=U.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function bt(e,t,n,r,i){t.isScene!==!0&&(t=be),De.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial?t.environment:null,s=I===null?M.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:He,c=(r.isMeshStandardMaterial?ke:Oe).get(r.envMap||o),l=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,u=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),d=!!n.morphAttributes.position,f=!!n.morphAttributes.normal,p=!!n.morphAttributes.color,m=0;r.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(m=M.toneMapping);let h=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,g=h===void 0?0:h.length,_=U.get(r),v=C.state.lights;if(he===!0&&(ge===!0||e!==z)){let t=e===z&&r.id===L;Le.setState(r,e,t)}let y=!1;r.version===_.__version?_.needsLights&&_.lightsStateVersion!==v.state.version?y=!0:_.outputColorSpace===s?i.isBatchedMesh&&_.batching===!1||!i.isBatchedMesh&&_.batching===!0||i.isBatchedMesh&&_.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&_.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&_.instancing===!1||!i.isInstancedMesh&&_.instancing===!0||i.isSkinnedMesh&&_.skinning===!1||!i.isSkinnedMesh&&_.skinning===!0||i.isInstancedMesh&&_.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&_.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&_.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&_.instancingMorph===!1&&i.morphTexture!==null?y=!0:_.envMap===c?r.fog===!0&&_.fog!==a||_.numClippingPlanes!==void 0&&(_.numClippingPlanes!==Le.numPlanes||_.numIntersection!==Le.numIntersection)?y=!0:_.vertexAlphas===l&&_.vertexTangents===u&&_.morphTargets===d&&_.morphNormals===f&&_.morphColors===p&&_.toneMapping===m?_.morphTargetsCount!==g&&(y=!0):y=!0:y=!0:y=!0:(y=!0,_.__version=r.version);let b=_.currentProgram;y===!0&&(b=_t(r,t,i));let x=!1,S=!1,w=!1,T=b.getUniforms(),E=_.uniforms;if(H.useProgram(b.program)&&(x=!0,S=!0,w=!0),r.id!==L&&(L=r.id,S=!0),x||z!==e){H.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(V,`projectionMatrix`,e.projectionMatrix),T.setValue(V,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(V,ve.setFromMatrixPosition(e.matrixWorld)),Te.logarithmicDepthBuffer&&T.setValue(V,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(V,`isOrthographic`,e.isOrthographicCamera===!0),z!==e&&(z=e,S=!0,w=!0)}if(_.needsLights&&(v.state.directionalShadowMap.length>0&&T.setValue(V,`directionalShadowMap`,v.state.directionalShadowMap,De),v.state.spotShadowMap.length>0&&T.setValue(V,`spotShadowMap`,v.state.spotShadowMap,De),v.state.pointShadowMap.length>0&&T.setValue(V,`pointShadowMap`,v.state.pointShadowMap,De)),i.isSkinnedMesh){T.setOptional(V,i,`bindMatrix`),T.setOptional(V,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(V,`boneTexture`,e.boneTexture,De))}i.isBatchedMesh&&(T.setOptional(V,i,`batchingTexture`),T.setValue(V,`batchingTexture`,i._matricesTexture,De),T.setOptional(V,i,`batchingIdTexture`),T.setValue(V,`batchingIdTexture`,i._indirectTexture,De),T.setOptional(V,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(V,`batchingColorTexture`,i._colorsTexture,De));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&Be.update(i,n,b),(S||_.receiveShadow!==i.receiveShadow)&&(_.receiveShadow=i.receiveShadow,T.setValue(V,`receiveShadow`,i.receiveShadow)),r.isMeshGouraudMaterial&&r.envMap!==null&&(E.envMap.value=c,E.flipEnvMap.value=c.isCubeTexture&&c.isRenderTargetTexture===!1?-1:1),r.isMeshStandardMaterial&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=gc()),S&&(T.setValue(V,`toneMappingExposure`,M.toneMappingExposure),_.needsLights&&St(E,w),a&&r.fog===!0&&Pe.refreshFogUniforms(E,a),Pe.refreshMaterialUniforms(E,r,ce,se,C.state.transmissionRenderTarget[e.id]),Yo.upload(V,vt(_),E,De)),r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Yo.upload(V,vt(_),E,De),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(V,`center`,i.center),T.setValue(V,`modelViewMatrix`,i.modelViewMatrix),T.setValue(V,`normalMatrix`,i.normalMatrix),T.setValue(V,`modelMatrix`,i.matrixWorld),r.isShaderMaterial||r.isRawShaderMaterial){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Je.update(n,b),Je.bind(n,b)}}return b}function St(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Ct(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(e,t,n){let r=U.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),U.get(e.texture).__webglTexture=t,U.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=U.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0};let wt=V.createFramebuffer();this.setRenderTarget=function(e,t=0,n=0){I=e,P=t,F=n;let r=null,i=!1,a=!1;if(e){let o=U.get(e);if(o.__useDefaultFramebuffer!==void 0){H.bindFramebuffer(V.FRAMEBUFFER,o.__webglFramebuffer),te.copy(e.viewport),ne.copy(e.scissor),re=e.scissorTest,H.viewport(te),H.scissor(ne),H.setScissorTest(re),L=-1;return}else if(o.__webglFramebuffer===void 0)De.setupRenderTarget(e);else if(o.__hasExternalTextures)De.rebindTextures(e,U.get(e.texture).__webglTexture,U.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&U.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.`);De.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=U.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&De.useMultisampledRTT(e)===!1?U.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,te.copy(e.viewport),ne.copy(e.scissor),re=e.scissorTest}else te.copy(de).multiplyScalar(ce).floor(),ne.copy(fe).multiplyScalar(ce).floor(),re=pe;if(n!==0&&(r=wt),H.bindFramebuffer(V.FRAMEBUFFER,r)&&H.drawBuffers(e,r),H.viewport(te),H.scissor(ne),H.setScissorTest(re),i){let r=U.get(e.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=U.get(e.textures[t]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=U.get(e.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,t.__webglTexture,n)}L=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){G(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=U.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){H.bindFramebuffer(V.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;if(!Te.textureFormatReadable(c)){G(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!Te.textureTypeReadable(l)){G(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&(e.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+s),V.readPixels(t,n,r,i,Ge.convert(c),Ge.convert(l),a))}finally{let e=I===null?null:U.get(I).__webglFramebuffer;H.bindFramebuffer(V.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=U.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c)if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){H.bindFramebuffer(V.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;if(!Te.textureFormatReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!Te.textureTypeReadable(u))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let d=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,d),V.bufferData(V.PIXEL_PACK_BUFFER,a.byteLength,V.STREAM_READ),e.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+s),V.readPixels(t,n,r,i,Ge.convert(l),Ge.convert(u),0);let f=I===null?null:U.get(I).__webglFramebuffer;H.bindFramebuffer(V.FRAMEBUFFER,f);let p=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await nt(V,p,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,d),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,a),V.deleteBuffer(d),V.deleteSync(p),a}else throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;De.setTexture2D(e,0),V.copyTexSubImage2D(V.TEXTURE_2D,n,0,0,o,s,i,a),H.unbindTexture()};let Tt=V.createFramebuffer(),Et=V.createFramebuffer();this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=null){a===null&&(i===0?a=0:(tt(`WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels.`),a=i,i=0));let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Ge.convert(t.format),_=Ge.convert(t.type),v;t.isData3DTexture?(De.setTexture3D(t,0),v=V.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(De.setTexture2DArray(t,0),v=V.TEXTURE_2D_ARRAY):(De.setTexture2D(t,0),v=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,t.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,t.unpackAlignment);let y=V.getParameter(V.UNPACK_ROW_LENGTH),b=V.getParameter(V.UNPACK_IMAGE_HEIGHT),x=V.getParameter(V.UNPACK_SKIP_PIXELS),S=V.getParameter(V.UNPACK_SKIP_ROWS),C=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,h.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,h.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,l),V.pixelStorei(V.UNPACK_SKIP_ROWS,u),V.pixelStorei(V.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=U.get(e),r=U.get(t),h=U.get(n.__renderTarget),g=U.get(r.__renderTarget);H.bindFramebuffer(V.READ_FRAMEBUFFER,h.__webglFramebuffer),H.bindFramebuffer(V.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,U.get(e).__webglTexture,i,d+n),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,U.get(t).__webglTexture,a,m+n)),V.blitFramebuffer(l,u,o,s,f,p,o,s,V.DEPTH_BUFFER_BIT,V.NEAREST);H.bindFramebuffer(V.READ_FRAMEBUFFER,null),H.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||U.has(e)){let n=U.get(e),r=U.get(t);H.bindFramebuffer(V.READ_FRAMEBUFFER,Tt),H.bindFramebuffer(V.DRAW_FRAMEBUFFER,Et);for(let e=0;e<c;e++)w?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,n.__webglTexture,i),T?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,r.__webglTexture,a),i===0?T?V.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):V.copyTexSubImage2D(v,a,f,p,l,u,o,s):V.blitFramebuffer(l,u,o,s,f,p,o,s,V.COLOR_BUFFER_BIT,V.NEAREST);H.bindFramebuffer(V.READ_FRAMEBUFFER,null),H.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?V.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?V.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):V.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):V.texSubImage2D(V.TEXTURE_2D,a,f,p,o,s,g,_,h);V.pixelStorei(V.UNPACK_ROW_LENGTH,y),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,b),V.pixelStorei(V.UNPACK_SKIP_PIXELS,x),V.pixelStorei(V.UNPACK_SKIP_ROWS,S),V.pixelStorei(V.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&V.generateMipmap(v),H.unbindTexture()},this.initRenderTarget=function(e){U.get(e).__webglFramebuffer===void 0&&De.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?De.setTextureCube(e,0):e.isData3DTexture?De.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?De.setTexture2DArray(e,0):De.setTexture2D(e,0),H.unbindTexture()},this.resetState=function(){P=0,F=0,I=null,H.reset(),Ke.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return qe}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=xt._getUnpackColorSpace()}},vc=o(((e,t)=>{(function(){function e(e,t){let n={};return[e,t].forEach(function(e){for(let t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])}),n}function n(e){if(typeof e!=`string`||!e.match(/^data:image\/webp;base64,/i))throw Error(`Failed to decode WebP Base64 URL`);return window.atob(e.substring(23))}function r(e,t){return n(typeof e==`string`&&/^data:image\/webp/.test(e)?e:e.toDataURL(`image/webp`,t))}function i(e){let t=e.charCodeAt(0),n=e.charCodeAt(1),r=e.charCodeAt(2),i=e.charCodeAt(3);return(t|n<<8|r<<16|i<<24)>>>0}function a(e){let t=e.indexOf(`VP8`,12);if(t===-1)throw Error(`Bad image format, does this browser support WebP?`);let n=!1;for(;t<e.length-8;){let r,a;switch(a=e.substring(t,t+4),t+=4,r=i(e.substring(t,t+4)),t+=4,a){case`VP8 `:return{frame:e.substring(t,t+r),hasAlpha:n};case`ALPH`:n=!0;break}t+=r,r&1&&t++}throw Error(`Failed to find VP8 keyframe in WebP image, is this image mistakenly encoded in the Lossless WebP format?`)}function o(e){this.value=e}function s(e){this.value=e}function c(e,t,n){if(Array.isArray(n))for(let r=0;r<n.length;r++)c(e,t,n[r]);else if(typeof n==`string`)e.writeString(n);else if(n instanceof Uint8Array)e.writeBytes(n);else if(n.id)if(n.offset=e.pos+t,e.writeUnsignedIntBE(n.id),Array.isArray(n.data)){let r,i,a;n.size===-1?e.writeByte(255):n.size===-2?(r=e.pos,e.writeBytes([15,255,255,255,255])):(r=e.pos,e.writeBytes([0,0,0,0])),i=e.pos,n.dataOffset=i+t,c(e,t,n.data),n.size!==-1&&n.size!==-2&&(a=e.pos,n.size=a-i,e.seek(r),e.writeEBMLVarIntWidth(n.size,4),e.seek(a))}else if(typeof n.data==`string`)e.writeEBMLVarInt(n.data.length),n.dataOffset=e.pos+t,e.writeString(n.data);else if(typeof n.data==`number`)n.size||=e.measureUnsignedInt(n.data),e.writeEBMLVarInt(n.size),n.dataOffset=e.pos+t,e.writeUnsignedIntBE(n.data,n.size);else if(n.data instanceof s)e.writeEBMLVarInt(8),n.dataOffset=e.pos+t,e.writeDoubleBE(n.data.value);else if(n.data instanceof o)e.writeEBMLVarInt(4),n.dataOffset=e.pos+t,e.writeFloatBE(n.data.value);else if(n.data instanceof Uint8Array)e.writeEBMLVarInt(n.data.byteLength),n.dataOffset=e.pos+t,e.writeBytes(n.data);else throw Error(`Bad EBML datatype `+typeof n.data);else throw Error(`Bad EBML datatype `+typeof n.data)}let l=function(t,n){return function(i){let o=!1,l=0,u=0,d=null,f=null,p=null,m=[],h=0,g=0,_={quality:.95,transparent:!1,alphaQuality:void 0,fileWriter:null,fd:null,frameDuration:null,frameRate:null},v={Cues:{id:new Uint8Array([28,83,187,107]),positionEBML:null},SegmentInfo:{id:new Uint8Array([21,73,169,102]),positionEBML:null},Tracks:{id:new Uint8Array([22,84,174,107]),positionEBML:null}},y,b={id:17545,data:new s(0)},x,S=[],C=new n(i.fileWriter||i.fd);function w(e){return e-y.dataOffset}function T(e){(d===null||d.width!==e.width||d.height!==e.height)&&(d=document.createElement(`canvas`),d.width=e.width,d.height=e.height,f=d.getContext(`2d`),p=f.createImageData(d.width,d.height));let t=e.getContext(`2d`).getImageData(0,0,e.width,e.height).data,n=p.data,r=0,i=e.width*e.height*4;for(let e=3;e<i;e+=4){let i=t[e];n[r++]=i,n[r++]=i,n[r++]=i,n[r++]=255}return f.putImageData(p,0,0),d}function E(){let e={id:21420,size:5,data:0},t={id:290298740,data:[]};for(let n in v){let r=v[n];r.positionEBML=Object.create(e),t.data.push({id:19899,data:[{id:21419,data:r.id},r.positionEBML]})}return t}function D(){x=E();let e={id:440786851,data:[{id:17030,data:1},{id:17143,data:1},{id:17138,data:4},{id:17139,data:8},{id:17026,data:`webm`},{id:17031,data:2},{id:17029,data:2}]},n={id:357149030,data:[{id:2807729,data:1e6},{id:19840,data:`webm-writer-js`},{id:22337,data:`webm-writer-js`},b]},r=[{id:176,data:l},{id:186,data:u}];i.transparent&&r.push({id:21440,data:1});let a={id:374648427,data:[{id:174,data:[{id:215,data:1},{id:29637,data:1},{id:156,data:0},{id:2274716,data:`und`},{id:134,data:`V_VP8`},{id:2459272,data:`VP8`},{id:131,data:1},{id:224,data:r}]}]};y={id:408125543,size:-2,data:[x,n,a]};let s=new t(256);c(s,C.pos,[e,y]),C.write(s.getAsDataArray()),v.SegmentInfo.positionEBML.data=w(n.offset),v.Tracks.positionEBML.data=w(a.offset),o=!0}function O(e){let n,r,i=new t(4);if(!(e.trackNumber>0&&e.trackNumber<127))throw Error(`TrackNumber must be > 0 and < 127`);return i.writeEBMLVarInt(e.trackNumber),i.writeU16BE(e.timecode),i.writeByte(0),n={id:161,data:[i.getAsDataArray(),e.frame]},r={id:30113,data:[{id:166,data:[{id:238,data:1},{id:165,data:e.alpha}]}]},{id:160,data:[n,r]}}function k(e){let n=new t(4);if(!(e.trackNumber>0&&e.trackNumber<127))throw Error(`TrackNumber must be > 0 and < 127`);return n.writeEBMLVarInt(e.trackNumber),n.writeU16BE(e.timecode),n.writeByte(128),{id:163,data:[n.getAsDataArray(),e.frame]}}function A(e){return e.alpha?O(e):k(e)}function j(e){return{id:524531317,data:[{id:231,data:Math.round(e.timecode)}]}}function M(e,t,n){S.push({id:187,data:[{id:179,data:t},{id:183,data:[{id:247,data:e},{id:241,data:w(n)}]}]})}function N(){let e={id:475249515,data:S},n=new t(16+S.length*32);c(n,C.pos,e),C.write(n.getAsDataArray()),v.Cues.positionEBML.data=w(e.offset)}function P(){if(m.length===0)return;let e=0;for(let t=0;t<m.length;t++)e+=m[t].frame.length+(m[t].alpha?m[t].alpha.length:0);let n=new t(e+m.length*64),r=j({timecode:Math.round(h)});for(let e=0;e<m.length;e++)r.data.push(A(m[e]));c(n,C.pos,r),C.write(n.getAsDataArray()),M(1,Math.round(h),r.offset),m=[],h+=g,g=0}function F(){if(!i.frameDuration)if(i.frameRate)i.frameDuration=1e3/i.frameRate;else throw Error(`Missing required frameDuration or frameRate setting`);i.quality=Math.max(Math.min(i.quality,.99999),0),i.alphaQuality===void 0?i.alphaQuality=i.quality:i.alphaQuality=Math.max(Math.min(i.alphaQuality,.99999),0)}function I(e){e.trackNumber=1,e.timecode=Math.round(g),m.push(e),g+=e.duration,g>=5e3&&P()}function L(){let e=new t(x.size),n=C.pos;c(e,x.dataOffset,x.data),C.seek(x.dataOffset),C.write(e.getAsDataArray()),C.seek(n)}function R(){let e=new t(8),n=C.pos;e.writeDoubleBE(h),C.seek(b.dataOffset),C.write(e.getAsDataArray()),C.seek(n)}function z(){let e=new t(10),n=C.pos;e.writeUnsignedIntBE(y.id),e.writeEBMLVarIntWidth(C.pos-y.dataOffset,5),C.seek(y.offset),C.write(e.getAsDataArray()),C.seek(n)}this.addFrame=function(e,t,n){o||(l=e.width||0,u=e.height||0,D());let s=a(r(e,i.quality)),c,d=null;c=n||(typeof t==`number`?t:i.frameDuration),i.transparent&&(t instanceof HTMLCanvasElement||typeof t==`string`?d=t:s.hasAlpha&&(d=T(e))),I({frame:s.frame,duration:c,alpha:d?a(r(d,i.alphaQuality)).frame:null})},this.complete=function(){return o||D(),P(),N(),L(),R(),z(),C.complete(`video/webm`)},this.getWrittenSize=function(){return C.length},i=e(_,i||{}),F()}};t!==void 0&&t.exports!==void 0?t.exports=l:window.WebMWriter=l(window.ArrayBufferDataStream,window.BlobBuffer)})()})),yc=o(((e,t)=>{(function(){let e=function(e){this.data=new Uint8Array(e),this.pos=0};e.prototype.seek=function(e){this.pos=e},e.prototype.writeBytes=function(e){for(let t=0;t<e.length;t++)this.data[this.pos++]=e[t]},e.prototype.writeByte=function(e){this.data[this.pos++]=e},e.prototype.writeU8=e.prototype.writeByte,e.prototype.writeU16BE=function(e){this.data[this.pos++]=e>>8,this.data[this.pos++]=e},e.prototype.writeDoubleBE=function(e){let t=new Uint8Array(new Float64Array([e]).buffer);for(let e=t.length-1;e>=0;e--)this.writeByte(t[e])},e.prototype.writeFloatBE=function(e){let t=new Uint8Array(new Float32Array([e]).buffer);for(let e=t.length-1;e>=0;e--)this.writeByte(t[e])},e.prototype.writeString=function(e){for(let t=0;t<e.length;t++)this.data[this.pos++]=e.charCodeAt(t)},e.prototype.writeEBMLVarIntWidth=function(e,t){switch(t){case 1:this.writeU8(128|e);break;case 2:this.writeU8(64|e>>8),this.writeU8(e);break;case 3:this.writeU8(32|e>>16),this.writeU8(e>>8),this.writeU8(e);break;case 4:this.writeU8(16|e>>24),this.writeU8(e>>16),this.writeU8(e>>8),this.writeU8(e);break;case 5:this.writeU8(8|e/4294967296&7),this.writeU8(e>>24),this.writeU8(e>>16),this.writeU8(e>>8),this.writeU8(e);break;default:throw Error(`Bad EBML VINT size `+t)}},e.prototype.measureEBMLVarInt=function(e){if(e<127)return 1;if(e<16383)return 2;if(e<(1<<21)-1)return 3;if(e<(1<<28)-1)return 4;if(e<34359738367)return 5;throw Error(`EBML VINT size not supported `+e)},e.prototype.writeEBMLVarInt=function(e){this.writeEBMLVarIntWidth(e,this.measureEBMLVarInt(e))},e.prototype.writeUnsignedIntBE=function(e,t){switch(t===void 0&&(t=this.measureUnsignedInt(e)),t){case 5:this.writeU8(Math.floor(e/4294967296));case 4:this.writeU8(e>>24);case 3:this.writeU8(e>>16);case 2:this.writeU8(e>>8);case 1:this.writeU8(e);break;default:throw Error(`Bad UINT size `+t)}},e.prototype.measureUnsignedInt=function(e){return e<256?1:e<65536?2:e<1<<24?3:e<4294967296?4:5},e.prototype.getAsDataArray=function(){if(this.pos<this.data.byteLength)return this.data.subarray(0,this.pos);if(this.pos==this.data.byteLength)return this.data;throw Error(`ArrayBufferDataStream's pos lies beyond end of buffer`)},t!==void 0&&t.exports!==void 0?t.exports=e:window.ArrayBufferDataStream=e})()})),bc=o(((e,t)=>{(function(){let e=function(e){return function(t){let n=[],r=Promise.resolve(),i=null,a=null;t&&t.constructor.name===`FileWriter`?i=t:e&&t&&(a=t),this.pos=0,this.length=0;function o(e){return new Promise(function(t,n){let r=new FileReader;r.addEventListener(`loadend`,function(){t(r.result)}),r.readAsArrayBuffer(e)})}function s(e){return new Promise(function(t,n){e instanceof Uint8Array?t(e):e instanceof ArrayBuffer||ArrayBuffer.isView(e)?t(new Uint8Array(e)):e instanceof Blob?t(o(e).then(function(e){return new Uint8Array(e)})):t(o(new Blob([e])).then(function(e){return new Uint8Array(e)}))})}function c(e){let t=e.byteLength||e.length||e.size;if(!Number.isInteger(t))throw Error(`Failed to determine size of element`);return t}this.seek=function(e){if(e<0)throw Error(`Offset may not be negative`);if(isNaN(e))throw Error(`Offset may not be NaN`);if(e>this.length)throw Error(`Seeking beyond the end of file is not allowed`);this.pos=e},this.write=function(t){let o={offset:this.pos,data:t,length:c(t)},l=o.offset>=this.length;this.pos+=o.length,this.length=Math.max(this.length,this.pos),r=r.then(function(){if(a)return new Promise(function(t,n){s(o.data).then(function(n){let r=0,i=Buffer.from(n.buffer),s=function(n,i,c){r+=i,r>=c.length?t():e.write(a,c,r,c.length-r,o.offset+r,s)};e.write(a,i,0,i.length,o.offset,s)})});if(i)return new Promise(function(e,t){i.onwriteend=e,i.seek(o.offset),i.write(new Blob([o.data]))});if(!l)for(let e=0;e<n.length;e++){let t=n[e];if(!(o.offset+o.length<=t.offset||o.offset>=t.offset+t.length)){if(o.offset<t.offset||o.offset+o.length>t.offset+t.length)throw Error(`Overwrite crosses blob boundaries`);if(o.offset==t.offset&&o.length==t.length){t.data=o.data;return}else return s(t.data).then(function(e){return t.data=e,s(o.data)}).then(function(e){o.data=e,t.data.set(o.data,o.offset-t.offset)})}}n.push(o)})},this.complete=function(e){return r=a||i?r.then(function(){return null}):r.then(function(){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].data);return new Blob(t,{type:e})}),r}}};t!==void 0&&t.exports!==void 0?t.exports=e:window.BlobBuffer=e(null)})()})),xc=o(((e,t)=>{t.exports=vc()(yc(),bc()(null))})),Sc=o(((e,t)=>{(function(n){typeof e==`object`&&t!==void 0?t.exports=n():typeof define==`function`&&define.amd?define([],n):(typeof window<`u`?window:typeof global<`u`?global:typeof self<`u`?self:this).JSZip=n()})(function(){return function e(t,n,r){function i(o,s){if(!n[o]){if(!t[o]){var c=typeof l==`function`&&l;if(!s&&c)return c(o,!0);if(a)return a(o,!0);var u=Error(`Cannot find module '`+o+`'`);throw u.code=`MODULE_NOT_FOUND`,u}var d=n[o]={exports:{}};t[o][0].call(d.exports,function(e){var n=t[o][1][e];return i(n||e)},d,d.exports,e,t,n,r)}return n[o].exports}for(var a=typeof l==`function`&&l,o=0;o<r.length;o++)i(r[o]);return i}({1:[function(e,t,n){var r=e(`./utils`),i=e(`./support`),a=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=`;n.encode=function(e){for(var t,n,i,o,s,c,l,u=[],d=0,f=e.length,p=f,m=r.getTypeOf(e)!==`string`;d<e.length;)p=f-d,i=m?(t=e[d++],n=d<f?e[d++]:0,d<f?e[d++]:0):(t=e.charCodeAt(d++),n=d<f?e.charCodeAt(d++):0,d<f?e.charCodeAt(d++):0),o=t>>2,s=(3&t)<<4|n>>4,c=1<p?(15&n)<<2|i>>6:64,l=2<p?63&i:64,u.push(a.charAt(o)+a.charAt(s)+a.charAt(c)+a.charAt(l));return u.join(``)},n.decode=function(e){var t,n,r,o,s,c,l=0,u=0,d=`data:`;if(e.substr(0,d.length)===d)throw Error(`Invalid base64 input, it looks like a data url.`);var f,p=3*(e=e.replace(/[^A-Za-z0-9+/=]/g,``)).length/4;if(e.charAt(e.length-1)===a.charAt(64)&&p--,e.charAt(e.length-2)===a.charAt(64)&&p--,p%1!=0)throw Error(`Invalid base64 input, bad content length.`);for(f=i.uint8array?new Uint8Array(0|p):Array(0|p);l<e.length;)t=a.indexOf(e.charAt(l++))<<2|(o=a.indexOf(e.charAt(l++)))>>4,n=(15&o)<<4|(s=a.indexOf(e.charAt(l++)))>>2,r=(3&s)<<6|(c=a.indexOf(e.charAt(l++))),f[u++]=t,s!==64&&(f[u++]=n),c!==64&&(f[u++]=r);return f}},{"./support":30,"./utils":32}],2:[function(e,t,n){var r=e(`./external`),i=e(`./stream/DataWorker`),a=e(`./stream/Crc32Probe`),o=e(`./stream/DataLengthProbe`);function s(e,t,n,r,i){this.compressedSize=e,this.uncompressedSize=t,this.crc32=n,this.compression=r,this.compressedContent=i}s.prototype={getContentWorker:function(){var e=new i(r.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new o(`data_length`)),t=this;return e.on(`end`,function(){if(this.streamInfo.data_length!==t.uncompressedSize)throw Error(`Bug : uncompressed data size mismatch`)}),e},getCompressedWorker:function(){return new i(r.Promise.resolve(this.compressedContent)).withStreamInfo(`compressedSize`,this.compressedSize).withStreamInfo(`uncompressedSize`,this.uncompressedSize).withStreamInfo(`crc32`,this.crc32).withStreamInfo(`compression`,this.compression)}},s.createWorkerFrom=function(e,t,n){return e.pipe(new a).pipe(new o(`uncompressedSize`)).pipe(t.compressWorker(n)).pipe(new o(`compressedSize`)).withStreamInfo(`compression`,t)},t.exports=s},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,t,n){var r=e(`./stream/GenericWorker`);n.STORE={magic:`\0\0`,compressWorker:function(){return new r(`STORE compression`)},uncompressWorker:function(){return new r(`STORE decompression`)}},n.DEFLATE=e(`./flate`)},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,t,n){var r=e(`./utils`),i=function(){for(var e,t=[],n=0;n<256;n++){e=n;for(var r=0;r<8;r++)e=1&e?3988292384^e>>>1:e>>>1;t[n]=e}return t}();t.exports=function(e,t){return e!==void 0&&e.length?r.getTypeOf(e)===`string`?function(e,t,n,r){var a=i,o=r+n;e^=-1;for(var s=r;s<o;s++)e=e>>>8^a[255&(e^t.charCodeAt(s))];return-1^e}(0|t,e,e.length,0):function(e,t,n,r){var a=i,o=r+n;e^=-1;for(var s=r;s<o;s++)e=e>>>8^a[255&(e^t[s])];return-1^e}(0|t,e,e.length,0):0}},{"./utils":32}],5:[function(e,t,n){n.base64=!1,n.binary=!1,n.dir=!1,n.createFolders=!0,n.date=null,n.compression=null,n.compressionOptions=null,n.comment=null,n.unixPermissions=null,n.dosPermissions=null},{}],6:[function(e,t,n){var r=null;r=typeof Promise<`u`?Promise:e(`lie`),t.exports={Promise:r}},{lie:37}],7:[function(e,t,n){var r=typeof Uint8Array<`u`&&typeof Uint16Array<`u`&&typeof Uint32Array<`u`,i=e(`pako`),a=e(`./utils`),o=e(`./stream/GenericWorker`),s=r?`uint8array`:`array`;function c(e,t){o.call(this,`FlateWorker/`+e),this._pako=null,this._pakoAction=e,this._pakoOptions=t,this.meta={}}n.magic=`\b\0`,a.inherits(c,o),c.prototype.processChunk=function(e){this.meta=e.meta,this._pako===null&&this._createPako(),this._pako.push(a.transformTo(s,e.data),!1)},c.prototype.flush=function(){o.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},c.prototype.cleanUp=function(){o.prototype.cleanUp.call(this),this._pako=null},c.prototype._createPako=function(){this._pako=new i[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var e=this;this._pako.onData=function(t){e.push({data:t,meta:e.meta})}},n.compressWorker=function(e){return new c(`Deflate`,e)},n.uncompressWorker=function(){return new c(`Inflate`,{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,t,n){function r(e,t){var n,r=``;for(n=0;n<t;n++)r+=String.fromCharCode(255&e),e>>>=8;return r}function i(e,t,n,i,o,u){var d,f,p=e.file,m=e.compression,h=u!==s.utf8encode,g=a.transformTo(`string`,u(p.name)),_=a.transformTo(`string`,s.utf8encode(p.name)),v=p.comment,y=a.transformTo(`string`,u(v)),b=a.transformTo(`string`,s.utf8encode(v)),x=_.length!==p.name.length,S=b.length!==v.length,C=``,w=``,T=``,E=p.dir,D=p.date,O={crc32:0,compressedSize:0,uncompressedSize:0};t&&!n||(O.crc32=e.crc32,O.compressedSize=e.compressedSize,O.uncompressedSize=e.uncompressedSize);var k=0;t&&(k|=8),h||!x&&!S||(k|=2048);var A=0,j=0;E&&(A|=16),o===`UNIX`?(j=798,A|=function(e,t){var n=e;return e||(n=t?16893:33204),(65535&n)<<16}(p.unixPermissions,E)):(j=20,A|=function(e){return 63&(e||0)}(p.dosPermissions)),d=D.getUTCHours(),d<<=6,d|=D.getUTCMinutes(),d<<=5,d|=D.getUTCSeconds()/2,f=D.getUTCFullYear()-1980,f<<=4,f|=D.getUTCMonth()+1,f<<=5,f|=D.getUTCDate(),x&&(w=r(1,1)+r(c(g),4)+_,C+=`up`+r(w.length,2)+w),S&&(T=r(1,1)+r(c(y),4)+b,C+=`uc`+r(T.length,2)+T);var M=``;return M+=`
\0`,M+=r(k,2),M+=m.magic,M+=r(d,2),M+=r(f,2),M+=r(O.crc32,4),M+=r(O.compressedSize,4),M+=r(O.uncompressedSize,4),M+=r(g.length,2),M+=r(C.length,2),{fileRecord:l.LOCAL_FILE_HEADER+M+g+C,dirRecord:l.CENTRAL_FILE_HEADER+r(j,2)+M+r(y.length,2)+`\0\0\0\0`+r(A,4)+r(i,4)+g+C+y}}var a=e(`../utils`),o=e(`../stream/GenericWorker`),s=e(`../utf8`),c=e(`../crc32`),l=e(`../signature`);function u(e,t,n,r){o.call(this,`ZipFileWorker`),this.bytesWritten=0,this.zipComment=t,this.zipPlatform=n,this.encodeFileName=r,this.streamFiles=e,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}a.inherits(u,o),u.prototype.push=function(e){var t=e.meta.percent||0,n=this.entriesCount,r=this._sources.length;this.accumulate?this.contentBuffer.push(e):(this.bytesWritten+=e.data.length,o.prototype.push.call(this,{data:e.data,meta:{currentFile:this.currentFile,percent:n?(t+100*(n-r-1))/n:100}}))},u.prototype.openedSource=function(e){this.currentSourceOffset=this.bytesWritten,this.currentFile=e.file.name;var t=this.streamFiles&&!e.file.dir;if(t){var n=i(e,t,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:n.fileRecord,meta:{percent:0}})}else this.accumulate=!0},u.prototype.closedSource=function(e){this.accumulate=!1;var t=this.streamFiles&&!e.file.dir,n=i(e,t,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(n.dirRecord),t)this.push({data:function(e){return l.DATA_DESCRIPTOR+r(e.crc32,4)+r(e.compressedSize,4)+r(e.uncompressedSize,4)}(e),meta:{percent:100}});else for(this.push({data:n.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},u.prototype.flush=function(){for(var e=this.bytesWritten,t=0;t<this.dirRecords.length;t++)this.push({data:this.dirRecords[t],meta:{percent:100}});var n=this.bytesWritten-e,i=function(e,t,n,i,o){var s=a.transformTo(`string`,o(i));return l.CENTRAL_DIRECTORY_END+`\0\0\0\0`+r(e,2)+r(e,2)+r(t,4)+r(n,4)+r(s.length,2)+s}(this.dirRecords.length,n,e,this.zipComment,this.encodeFileName);this.push({data:i,meta:{percent:100}})},u.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},u.prototype.registerPrevious=function(e){this._sources.push(e);var t=this;return e.on(`data`,function(e){t.processChunk(e)}),e.on(`end`,function(){t.closedSource(t.previous.streamInfo),t._sources.length?t.prepareNextSource():t.end()}),e.on(`error`,function(e){t.error(e)}),this},u.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},u.prototype.error=function(e){var t=this._sources;if(!o.prototype.error.call(this,e))return!1;for(var n=0;n<t.length;n++)try{t[n].error(e)}catch{}return!0},u.prototype.lock=function(){o.prototype.lock.call(this);for(var e=this._sources,t=0;t<e.length;t++)e[t].lock()},t.exports=u},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,t,n){var r=e(`../compressions`),i=e(`./ZipFileWorker`);n.generateWorker=function(e,t,n){var a=new i(t.streamFiles,n,t.platform,t.encodeFileName),o=0;try{e.forEach(function(e,n){o++;var i=function(e,t){var n=e||t,i=r[n];if(!i)throw Error(n+` is not a valid compression method !`);return i}(n.options.compression,t.compression),s=n.options.compressionOptions||t.compressionOptions||{},c=n.dir,l=n.date;n._compressWorker(i,s).withStreamInfo(`file`,{name:e,dir:c,date:l,comment:n.comment||``,unixPermissions:n.unixPermissions,dosPermissions:n.dosPermissions}).pipe(a)}),a.entriesCount=o}catch(e){a.error(e)}return a}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,t,n){function r(){if(!(this instanceof r))return new r;if(arguments.length)throw Error(`The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.`);this.files=Object.create(null),this.comment=null,this.root=``,this.clone=function(){var e=new r;for(var t in this)typeof this[t]!=`function`&&(e[t]=this[t]);return e}}(r.prototype=e(`./object`)).loadAsync=e(`./load`),r.support=e(`./support`),r.defaults=e(`./defaults`),r.version=`3.10.1`,r.loadAsync=function(e,t){return new r().loadAsync(e,t)},r.external=e(`./external`),t.exports=r},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,t,n){var r=e(`./utils`),i=e(`./external`),a=e(`./utf8`),o=e(`./zipEntries`),s=e(`./stream/Crc32Probe`),c=e(`./nodejsUtils`);function l(e){return new i.Promise(function(t,n){var r=e.decompressed.getContentWorker().pipe(new s);r.on(`error`,function(e){n(e)}).on(`end`,function(){r.streamInfo.crc32===e.decompressed.crc32?t():n(Error(`Corrupted zip : CRC32 mismatch`))}).resume()})}t.exports=function(e,t){var n=this;return t=r.extend(t||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:a.utf8decode}),c.isNode&&c.isStream(e)?i.Promise.reject(Error(`JSZip can't accept a stream when loading a zip file.`)):r.prepareContent(`the loaded zip file`,e,!0,t.optimizedBinaryString,t.base64).then(function(e){var n=new o(t);return n.load(e),n}).then(function(e){var n=[i.Promise.resolve(e)],r=e.files;if(t.checkCRC32)for(var a=0;a<r.length;a++)n.push(l(r[a]));return i.Promise.all(n)}).then(function(e){for(var i=e.shift(),a=i.files,o=0;o<a.length;o++){var s=a[o],c=s.fileNameStr,l=r.resolve(s.fileNameStr);n.file(l,s.decompressed,{binary:!0,optimizedBinaryString:!0,date:s.date,dir:s.dir,comment:s.fileCommentStr.length?s.fileCommentStr:null,unixPermissions:s.unixPermissions,dosPermissions:s.dosPermissions,createFolders:t.createFolders}),s.dir||(n.file(l).unsafeOriginalName=c)}return i.zipComment.length&&(n.comment=i.zipComment),n})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,t,n){var r=e(`../utils`),i=e(`../stream/GenericWorker`);function a(e,t){i.call(this,`Nodejs stream input adapter for `+e),this._upstreamEnded=!1,this._bindStream(t)}r.inherits(a,i),a.prototype._bindStream=function(e){var t=this;(this._stream=e).pause(),e.on(`data`,function(e){t.push({data:e,meta:{percent:0}})}).on(`error`,function(e){t.isPaused?this.generatedError=e:t.error(e)}).on(`end`,function(){t.isPaused?t._upstreamEnded=!0:t.end()})},a.prototype.pause=function(){return!!i.prototype.pause.call(this)&&(this._stream.pause(),!0)},a.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},t.exports=a},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,t,n){var r=e(`readable-stream`).Readable;function i(e,t,n){r.call(this,t),this._helper=e;var i=this;e.on(`data`,function(e,t){i.push(e)||i._helper.pause(),n&&n(t)}).on(`error`,function(e){i.emit(`error`,e)}).on(`end`,function(){i.push(null)})}e(`../utils`).inherits(i,r),i.prototype._read=function(){this._helper.resume()},t.exports=i},{"../utils":32,"readable-stream":16}],14:[function(e,t,n){t.exports={isNode:typeof Buffer<`u`,newBufferFrom:function(e,t){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(e,t);if(typeof e==`number`)throw Error(`The "data" argument must not be a number`);return new Buffer(e,t)},allocBuffer:function(e){if(Buffer.alloc)return Buffer.alloc(e);var t=new Buffer(e);return t.fill(0),t},isBuffer:function(e){return Buffer.isBuffer(e)},isStream:function(e){return e&&typeof e.on==`function`&&typeof e.pause==`function`&&typeof e.resume==`function`}}},{}],15:[function(e,t,n){function r(e,t,n){var r,i=a.getTypeOf(t),s=a.extend(n||{},c);s.date=s.date||new Date,s.compression!==null&&(s.compression=s.compression.toUpperCase()),typeof s.unixPermissions==`string`&&(s.unixPermissions=parseInt(s.unixPermissions,8)),s.unixPermissions&&16384&s.unixPermissions&&(s.dir=!0),s.dosPermissions&&16&s.dosPermissions&&(s.dir=!0),s.dir&&(e=h(e)),s.createFolders&&(r=m(e))&&g.call(this,r,!0);var d=i===`string`&&!1===s.binary&&!1===s.base64;n&&n.binary!==void 0||(s.binary=!d),(t instanceof l&&t.uncompressedSize===0||s.dir||!t||t.length===0)&&(s.base64=!1,s.binary=!0,t=``,s.compression=`STORE`,i=`string`);var _=null;_=t instanceof l||t instanceof o?t:f.isNode&&f.isStream(t)?new p(e,t):a.prepareContent(e,t,s.binary,s.optimizedBinaryString,s.base64);var v=new u(e,_,s);this.files[e]=v}var i=e(`./utf8`),a=e(`./utils`),o=e(`./stream/GenericWorker`),s=e(`./stream/StreamHelper`),c=e(`./defaults`),l=e(`./compressedObject`),u=e(`./zipObject`),d=e(`./generate`),f=e(`./nodejsUtils`),p=e(`./nodejs/NodejsStreamInputAdapter`),m=function(e){e.slice(-1)===`/`&&(e=e.substring(0,e.length-1));var t=e.lastIndexOf(`/`);return 0<t?e.substring(0,t):``},h=function(e){return e.slice(-1)!==`/`&&(e+=`/`),e},g=function(e,t){return t=t===void 0?c.createFolders:t,e=h(e),this.files[e]||r.call(this,e,null,{dir:!0,createFolders:t}),this.files[e]};function _(e){return Object.prototype.toString.call(e)===`[object RegExp]`}t.exports={load:function(){throw Error(`This method has been removed in JSZip 3.0, please check the upgrade guide.`)},forEach:function(e){var t,n,r;for(t in this.files)r=this.files[t],(n=t.slice(this.root.length,t.length))&&t.slice(0,this.root.length)===this.root&&e(n,r)},filter:function(e){var t=[];return this.forEach(function(n,r){e(n,r)&&t.push(r)}),t},file:function(e,t,n){if(arguments.length!==1)return e=this.root+e,r.call(this,e,t,n),this;if(_(e)){var i=e;return this.filter(function(e,t){return!t.dir&&i.test(e)})}var a=this.files[this.root+e];return a&&!a.dir?a:null},folder:function(e){if(!e)return this;if(_(e))return this.filter(function(t,n){return n.dir&&e.test(t)});var t=this.root+e,n=g.call(this,t),r=this.clone();return r.root=n.name,r},remove:function(e){e=this.root+e;var t=this.files[e];if(t||=(e.slice(-1)!==`/`&&(e+=`/`),this.files[e]),t&&!t.dir)delete this.files[e];else for(var n=this.filter(function(t,n){return n.name.slice(0,e.length)===e}),r=0;r<n.length;r++)delete this.files[n[r].name];return this},generate:function(){throw Error(`This method has been removed in JSZip 3.0, please check the upgrade guide.`)},generateInternalStream:function(e){var t,n={};try{if((n=a.extend(e||{},{streamFiles:!1,compression:`STORE`,compressionOptions:null,type:``,platform:`DOS`,comment:null,mimeType:`application/zip`,encodeFileName:i.utf8encode})).type=n.type.toLowerCase(),n.compression=n.compression.toUpperCase(),n.type===`binarystring`&&(n.type=`string`),!n.type)throw Error(`No output type specified.`);a.checkSupport(n.type),n.platform!==`darwin`&&n.platform!==`freebsd`&&n.platform!==`linux`&&n.platform!==`sunos`||(n.platform=`UNIX`),n.platform===`win32`&&(n.platform=`DOS`);var r=n.comment||this.comment||``;t=d.generateWorker(this,n,r)}catch(e){(t=new o(`error`)).error(e)}return new s(t,n.type||`string`,n.mimeType)},generateAsync:function(e,t){return this.generateInternalStream(e).accumulate(t)},generateNodeStream:function(e,t){return(e||={}).type||(e.type=`nodebuffer`),this.generateInternalStream(e).toNodejsStream(t)}}},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,t,n){t.exports=e(`stream`)},{stream:void 0}],17:[function(e,t,n){var r=e(`./DataReader`);function i(e){r.call(this,e);for(var t=0;t<this.data.length;t++)e[t]=255&e[t]}e(`../utils`).inherits(i,r),i.prototype.byteAt=function(e){return this.data[this.zero+e]},i.prototype.lastIndexOfSignature=function(e){for(var t=e.charCodeAt(0),n=e.charCodeAt(1),r=e.charCodeAt(2),i=e.charCodeAt(3),a=this.length-4;0<=a;--a)if(this.data[a]===t&&this.data[a+1]===n&&this.data[a+2]===r&&this.data[a+3]===i)return a-this.zero;return-1},i.prototype.readAndCheckSignature=function(e){var t=e.charCodeAt(0),n=e.charCodeAt(1),r=e.charCodeAt(2),i=e.charCodeAt(3),a=this.readData(4);return t===a[0]&&n===a[1]&&r===a[2]&&i===a[3]},i.prototype.readData=function(e){if(this.checkOffset(e),e===0)return[];var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./DataReader":18}],18:[function(e,t,n){var r=e(`../utils`);function i(e){this.data=e,this.length=e.length,this.index=0,this.zero=0}i.prototype={checkOffset:function(e){this.checkIndex(this.index+e)},checkIndex:function(e){if(this.length<this.zero+e||e<0)throw Error(`End of data reached (data length = `+this.length+`, asked index = `+e+`). Corrupted zip ?`)},setIndex:function(e){this.checkIndex(e),this.index=e},skip:function(e){this.setIndex(this.index+e)},byteAt:function(){},readInt:function(e){var t,n=0;for(this.checkOffset(e),t=this.index+e-1;t>=this.index;t--)n=(n<<8)+this.byteAt(t);return this.index+=e,n},readString:function(e){return r.transformTo(`string`,this.readData(e))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var e=this.readInt(4);return new Date(Date.UTC(1980+(e>>25&127),(e>>21&15)-1,e>>16&31,e>>11&31,e>>5&63,(31&e)<<1))}},t.exports=i},{"../utils":32}],19:[function(e,t,n){var r=e(`./Uint8ArrayReader`);function i(e){r.call(this,e)}e(`../utils`).inherits(i,r),i.prototype.readData=function(e){this.checkOffset(e);var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,t,n){var r=e(`./DataReader`);function i(e){r.call(this,e)}e(`../utils`).inherits(i,r),i.prototype.byteAt=function(e){return this.data.charCodeAt(this.zero+e)},i.prototype.lastIndexOfSignature=function(e){return this.data.lastIndexOf(e)-this.zero},i.prototype.readAndCheckSignature=function(e){return e===this.readData(4)},i.prototype.readData=function(e){this.checkOffset(e);var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./DataReader":18}],21:[function(e,t,n){var r=e(`./ArrayReader`);function i(e){r.call(this,e)}e(`../utils`).inherits(i,r),i.prototype.readData=function(e){if(this.checkOffset(e),e===0)return new Uint8Array;var t=this.data.subarray(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./ArrayReader":17}],22:[function(e,t,n){var r=e(`../utils`),i=e(`../support`),a=e(`./ArrayReader`),o=e(`./StringReader`),s=e(`./NodeBufferReader`),c=e(`./Uint8ArrayReader`);t.exports=function(e){var t=r.getTypeOf(e);return r.checkSupport(t),t!==`string`||i.uint8array?t===`nodebuffer`?new s(e):i.uint8array?new c(r.transformTo(`uint8array`,e)):new a(r.transformTo(`array`,e)):new o(e)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,t,n){n.LOCAL_FILE_HEADER=`PK`,n.CENTRAL_FILE_HEADER=`PK`,n.CENTRAL_DIRECTORY_END=`PK`,n.ZIP64_CENTRAL_DIRECTORY_LOCATOR=`PK\x07`,n.ZIP64_CENTRAL_DIRECTORY_END=`PK`,n.DATA_DESCRIPTOR=`PK\x07\b`},{}],24:[function(e,t,n){var r=e(`./GenericWorker`),i=e(`../utils`);function a(e){r.call(this,`ConvertWorker to `+e),this.destType=e}i.inherits(a,r),a.prototype.processChunk=function(e){this.push({data:i.transformTo(this.destType,e.data),meta:e.meta})},t.exports=a},{"../utils":32,"./GenericWorker":28}],25:[function(e,t,n){var r=e(`./GenericWorker`),i=e(`../crc32`);function a(){r.call(this,`Crc32Probe`),this.withStreamInfo(`crc32`,0)}e(`../utils`).inherits(a,r),a.prototype.processChunk=function(e){this.streamInfo.crc32=i(e.data,this.streamInfo.crc32||0),this.push(e)},t.exports=a},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,t,n){var r=e(`../utils`),i=e(`./GenericWorker`);function a(e){i.call(this,`DataLengthProbe for `+e),this.propName=e,this.withStreamInfo(e,0)}r.inherits(a,i),a.prototype.processChunk=function(e){if(e){var t=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=t+e.data.length}i.prototype.processChunk.call(this,e)},t.exports=a},{"../utils":32,"./GenericWorker":28}],27:[function(e,t,n){var r=e(`../utils`),i=e(`./GenericWorker`);function a(e){i.call(this,`DataWorker`);var t=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type=``,this._tickScheduled=!1,e.then(function(e){t.dataIsReady=!0,t.data=e,t.max=e&&e.length||0,t.type=r.getTypeOf(e),t.isPaused||t._tickAndRepeat()},function(e){t.error(e)})}r.inherits(a,i),a.prototype.cleanUp=function(){i.prototype.cleanUp.call(this),this.data=null},a.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,r.delay(this._tickAndRepeat,[],this)),!0)},a.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(r.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},a.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var e=null,t=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case`string`:e=this.data.substring(this.index,t);break;case`uint8array`:e=this.data.subarray(this.index,t);break;case`array`:case`nodebuffer`:e=this.data.slice(this.index,t)}return this.index=t,this.push({data:e,meta:{percent:this.max?this.index/this.max*100:0}})},t.exports=a},{"../utils":32,"./GenericWorker":28}],28:[function(e,t,n){function r(e){this.name=e||`default`,this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}r.prototype={push:function(e){this.emit(`data`,e)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit(`end`),this.cleanUp(),this.isFinished=!0}catch(e){this.emit(`error`,e)}return!0},error:function(e){return!this.isFinished&&(this.isPaused?this.generatedError=e:(this.isFinished=!0,this.emit(`error`,e),this.previous&&this.previous.error(e),this.cleanUp()),!0)},on:function(e,t){return this._listeners[e].push(t),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(e,t){if(this._listeners[e])for(var n=0;n<this._listeners[e].length;n++)this._listeners[e][n].call(this,t)},pipe:function(e){return e.registerPrevious(this)},registerPrevious:function(e){if(this.isLocked)throw Error(`The stream '`+this+`' has already been used.`);this.streamInfo=e.streamInfo,this.mergeStreamInfo(),this.previous=e;var t=this;return e.on(`data`,function(e){t.processChunk(e)}),e.on(`end`,function(){t.end()}),e.on(`error`,function(e){t.error(e)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var e=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),e=!0),this.previous&&this.previous.resume(),!e},flush:function(){},processChunk:function(e){this.push(e)},withStreamInfo:function(e,t){return this.extraStreamInfo[e]=t,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var e in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,e)&&(this.streamInfo[e]=this.extraStreamInfo[e])},lock:function(){if(this.isLocked)throw Error(`The stream '`+this+`' has already been used.`);this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var e=`Worker `+this.name;return this.previous?this.previous+` -> `+e:e}},t.exports=r},{}],29:[function(e,t,n){var r=e(`../utils`),i=e(`./ConvertWorker`),a=e(`./GenericWorker`),o=e(`../base64`),s=e(`../support`),c=e(`../external`),l=null;if(s.nodestream)try{l=e(`../nodejs/NodejsStreamOutputAdapter`)}catch{}function u(e,t){return new c.Promise(function(n,i){var a=[],s=e._internalType,c=e._outputType,l=e._mimeType;e.on(`data`,function(e,n){a.push(e),t&&t(n)}).on(`error`,function(e){a=[],i(e)}).on(`end`,function(){try{n(function(e,t,n){switch(e){case`blob`:return r.newBlob(r.transformTo(`arraybuffer`,t),n);case`base64`:return o.encode(t);default:return r.transformTo(e,t)}}(c,function(e,t){var n,r=0,i=null,a=0;for(n=0;n<t.length;n++)a+=t[n].length;switch(e){case`string`:return t.join(``);case`array`:return Array.prototype.concat.apply([],t);case`uint8array`:for(i=new Uint8Array(a),n=0;n<t.length;n++)i.set(t[n],r),r+=t[n].length;return i;case`nodebuffer`:return Buffer.concat(t);default:throw Error(`concat : unsupported type '`+e+`'`)}}(s,a),l))}catch(e){i(e)}a=[]}).resume()})}function d(e,t,n){var o=t;switch(t){case`blob`:case`arraybuffer`:o=`uint8array`;break;case`base64`:o=`string`}try{this._internalType=o,this._outputType=t,this._mimeType=n,r.checkSupport(o),this._worker=e.pipe(new i(o)),e.lock()}catch(e){this._worker=new a(`error`),this._worker.error(e)}}d.prototype={accumulate:function(e){return u(this,e)},on:function(e,t){var n=this;return e===`data`?this._worker.on(e,function(e){t.call(n,e.data,e.meta)}):this._worker.on(e,function(){r.delay(t,arguments,n)}),this},resume:function(){return r.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(e){if(r.checkSupport(`nodestream`),this._outputType!==`nodebuffer`)throw Error(this._outputType+` is not supported by this method`);return new l(this,{objectMode:this._outputType!==`nodebuffer`},e)}},t.exports=d},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,t,n){if(n.base64=!0,n.array=!0,n.string=!0,n.arraybuffer=typeof ArrayBuffer<`u`&&typeof Uint8Array<`u`,n.nodebuffer=typeof Buffer<`u`,n.uint8array=typeof Uint8Array<`u`,typeof ArrayBuffer>`u`)n.blob=!1;else{var r=new ArrayBuffer(0);try{n.blob=new Blob([r],{type:`application/zip`}).size===0}catch{try{var i=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);i.append(r),n.blob=i.getBlob(`application/zip`).size===0}catch{n.blob=!1}}}try{n.nodestream=!!e(`readable-stream`).Readable}catch{n.nodestream=!1}},{"readable-stream":16}],31:[function(e,t,n){for(var r=e(`./utils`),i=e(`./support`),a=e(`./nodejsUtils`),o=e(`./stream/GenericWorker`),s=Array(256),c=0;c<256;c++)s[c]=252<=c?6:248<=c?5:240<=c?4:224<=c?3:192<=c?2:1;s[254]=s[254]=1;function l(){o.call(this,`utf-8 decode`),this.leftOver=null}function u(){o.call(this,`utf-8 encode`)}n.utf8encode=function(e){return i.nodebuffer?a.newBufferFrom(e,`utf-8`):function(e){var t,n,r,a,o,s=e.length,c=0;for(a=0;a<s;a++)(64512&(n=e.charCodeAt(a)))==55296&&a+1<s&&(64512&(r=e.charCodeAt(a+1)))==56320&&(n=65536+(n-55296<<10)+(r-56320),a++),c+=n<128?1:n<2048?2:n<65536?3:4;for(t=i.uint8array?new Uint8Array(c):Array(c),a=o=0;o<c;a++)(64512&(n=e.charCodeAt(a)))==55296&&a+1<s&&(64512&(r=e.charCodeAt(a+1)))==56320&&(n=65536+(n-55296<<10)+(r-56320),a++),n<128?t[o++]=n:(n<2048?t[o++]=192|n>>>6:(n<65536?t[o++]=224|n>>>12:(t[o++]=240|n>>>18,t[o++]=128|n>>>12&63),t[o++]=128|n>>>6&63),t[o++]=128|63&n);return t}(e)},n.utf8decode=function(e){return i.nodebuffer?r.transformTo(`nodebuffer`,e).toString(`utf-8`):function(e){var t,n,i,a,o=e.length,c=Array(2*o);for(t=n=0;t<o;)if((i=e[t++])<128)c[n++]=i;else if(4<(a=s[i]))c[n++]=65533,t+=a-1;else{for(i&=a===2?31:a===3?15:7;1<a&&t<o;)i=i<<6|63&e[t++],a--;1<a?c[n++]=65533:i<65536?c[n++]=i:(i-=65536,c[n++]=55296|i>>10&1023,c[n++]=56320|1023&i)}return c.length!==n&&(c.subarray?c=c.subarray(0,n):c.length=n),r.applyFromCharCode(c)}(e=r.transformTo(i.uint8array?`uint8array`:`array`,e))},r.inherits(l,o),l.prototype.processChunk=function(e){var t=r.transformTo(i.uint8array?`uint8array`:`array`,e.data);if(this.leftOver&&this.leftOver.length){if(i.uint8array){var a=t;(t=new Uint8Array(a.length+this.leftOver.length)).set(this.leftOver,0),t.set(a,this.leftOver.length)}else t=this.leftOver.concat(t);this.leftOver=null}var o=function(e,t){var n;for((t||=e.length)>e.length&&(t=e.length),n=t-1;0<=n&&(192&e[n])==128;)n--;return n<0||n===0?t:n+s[e[n]]>t?n:t}(t),c=t;o!==t.length&&(i.uint8array?(c=t.subarray(0,o),this.leftOver=t.subarray(o,t.length)):(c=t.slice(0,o),this.leftOver=t.slice(o,t.length))),this.push({data:n.utf8decode(c),meta:e.meta})},l.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:n.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},n.Utf8DecodeWorker=l,r.inherits(u,o),u.prototype.processChunk=function(e){this.push({data:n.utf8encode(e.data),meta:e.meta})},n.Utf8EncodeWorker=u},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,t,n){var r=e(`./support`),i=e(`./base64`),a=e(`./nodejsUtils`),o=e(`./external`);function s(e){return e}function c(e,t){for(var n=0;n<e.length;++n)t[n]=255&e.charCodeAt(n);return t}e(`setimmediate`),n.newBlob=function(e,t){n.checkSupport(`blob`);try{return new Blob([e],{type:t})}catch{try{var r=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return r.append(e),r.getBlob(t)}catch{throw Error(`Bug : can't construct the Blob.`)}}};var l={stringifyByChunk:function(e,t,n){var r=[],i=0,a=e.length;if(a<=n)return String.fromCharCode.apply(null,e);for(;i<a;)t===`array`||t===`nodebuffer`?r.push(String.fromCharCode.apply(null,e.slice(i,Math.min(i+n,a)))):r.push(String.fromCharCode.apply(null,e.subarray(i,Math.min(i+n,a)))),i+=n;return r.join(``)},stringifyByChar:function(e){for(var t=``,n=0;n<e.length;n++)t+=String.fromCharCode(e[n]);return t},applyCanBeUsed:{uint8array:function(){try{return r.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return r.nodebuffer&&String.fromCharCode.apply(null,a.allocBuffer(1)).length===1}catch{return!1}}()}};function u(e){var t=65536,r=n.getTypeOf(e),i=!0;if(r===`uint8array`?i=l.applyCanBeUsed.uint8array:r===`nodebuffer`&&(i=l.applyCanBeUsed.nodebuffer),i)for(;1<t;)try{return l.stringifyByChunk(e,r,t)}catch{t=Math.floor(t/2)}return l.stringifyByChar(e)}function d(e,t){for(var n=0;n<e.length;n++)t[n]=e[n];return t}n.applyFromCharCode=u;var f={};f.string={string:s,array:function(e){return c(e,Array(e.length))},arraybuffer:function(e){return f.string.uint8array(e).buffer},uint8array:function(e){return c(e,new Uint8Array(e.length))},nodebuffer:function(e){return c(e,a.allocBuffer(e.length))}},f.array={string:u,array:s,arraybuffer:function(e){return new Uint8Array(e).buffer},uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return a.newBufferFrom(e)}},f.arraybuffer={string:function(e){return u(new Uint8Array(e))},array:function(e){return d(new Uint8Array(e),Array(e.byteLength))},arraybuffer:s,uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return a.newBufferFrom(new Uint8Array(e))}},f.uint8array={string:u,array:function(e){return d(e,Array(e.length))},arraybuffer:function(e){return e.buffer},uint8array:s,nodebuffer:function(e){return a.newBufferFrom(e)}},f.nodebuffer={string:u,array:function(e){return d(e,Array(e.length))},arraybuffer:function(e){return f.nodebuffer.uint8array(e).buffer},uint8array:function(e){return d(e,new Uint8Array(e.length))},nodebuffer:s},n.transformTo=function(e,t){return t||=``,e?(n.checkSupport(e),f[n.getTypeOf(t)][e](t)):t},n.resolve=function(e){for(var t=e.split(`/`),n=[],r=0;r<t.length;r++){var i=t[r];i===`.`||i===``&&r!==0&&r!==t.length-1||(i===`..`?n.pop():n.push(i))}return n.join(`/`)},n.getTypeOf=function(e){return typeof e==`string`?`string`:Object.prototype.toString.call(e)===`[object Array]`?`array`:r.nodebuffer&&a.isBuffer(e)?`nodebuffer`:r.uint8array&&e instanceof Uint8Array?`uint8array`:r.arraybuffer&&e instanceof ArrayBuffer?`arraybuffer`:void 0},n.checkSupport=function(e){if(!r[e.toLowerCase()])throw Error(e+` is not supported by this platform`)},n.MAX_VALUE_16BITS=65535,n.MAX_VALUE_32BITS=-1,n.pretty=function(e){var t,n,r=``;for(n=0;n<(e||``).length;n++)r+=`\\x`+((t=e.charCodeAt(n))<16?`0`:``)+t.toString(16).toUpperCase();return r},n.delay=function(e,t,n){setImmediate(function(){e.apply(n||null,t||[])})},n.inherits=function(e,t){function n(){}n.prototype=t.prototype,e.prototype=new n},n.extend=function(){var e,t,n={};for(e=0;e<arguments.length;e++)for(t in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],t)&&n[t]===void 0&&(n[t]=arguments[e][t]);return n},n.prepareContent=function(e,t,a,s,l){return o.Promise.resolve(t).then(function(e){return r.blob&&(e instanceof Blob||[`[object File]`,`[object Blob]`].indexOf(Object.prototype.toString.call(e))!==-1)&&typeof FileReader<`u`?new o.Promise(function(t,n){var r=new FileReader;r.onload=function(e){t(e.target.result)},r.onerror=function(e){n(e.target.error)},r.readAsArrayBuffer(e)}):e}).then(function(t){var u=n.getTypeOf(t);return u?(u===`arraybuffer`?t=n.transformTo(`uint8array`,t):u===`string`&&(l?t=i.decode(t):a&&!0!==s&&(t=function(e){return c(e,r.uint8array?new Uint8Array(e.length):Array(e.length))}(t))),t):o.Promise.reject(Error(`Can't read the data of '`+e+`'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?`))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,t,n){var r=e(`./reader/readerFor`),i=e(`./utils`),a=e(`./signature`),o=e(`./zipEntry`),s=e(`./support`);function c(e){this.files=[],this.loadOptions=e}c.prototype={checkSignature:function(e){if(!this.reader.readAndCheckSignature(e)){this.reader.index-=4;var t=this.reader.readString(4);throw Error(`Corrupted zip or bug: unexpected signature (`+i.pretty(t)+`, expected `+i.pretty(e)+`)`)}},isSignature:function(e,t){var n=this.reader.index;this.reader.setIndex(e);var r=this.reader.readString(4)===t;return this.reader.setIndex(n),r},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var e=this.reader.readData(this.zipCommentLength),t=s.uint8array?`uint8array`:`array`,n=i.transformTo(t,e);this.zipComment=this.loadOptions.decodeFileName(n)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var e,t,n,r=this.zip64EndOfCentralSize-44;0<r;)e=this.reader.readInt(2),t=this.reader.readInt(4),n=this.reader.readData(t),this.zip64ExtensibleData[e]={id:e,length:t,value:n}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw Error(`Multi-volumes zip are not supported`)},readLocalFiles:function(){var e,t;for(e=0;e<this.files.length;e++)t=this.files[e],this.reader.setIndex(t.localHeaderOffset),this.checkSignature(a.LOCAL_FILE_HEADER),t.readLocalPart(this.reader),t.handleUTF8(),t.processAttributes()},readCentralDir:function(){var e;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);)(e=new o({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(e);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw Error(`Corrupted zip or bug: expected `+this.centralDirRecords+` records in central dir, got `+this.files.length)},readEndOfCentral:function(){var e=this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);if(e<0)throw this.isSignature(0,a.LOCAL_FILE_HEADER)?Error(`Corrupted zip: can't find end of central directory`):Error(`Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html`);this.reader.setIndex(e);var t=e;if(this.checkSignature(a.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===i.MAX_VALUE_16BITS||this.diskWithCentralDirStart===i.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===i.MAX_VALUE_16BITS||this.centralDirRecords===i.MAX_VALUE_16BITS||this.centralDirSize===i.MAX_VALUE_32BITS||this.centralDirOffset===i.MAX_VALUE_32BITS){if(this.zip64=!0,(e=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw Error(`Corrupted zip: can't find the ZIP64 end of central directory locator`);if(this.reader.setIndex(e),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,a.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw Error(`Corrupted zip: can't find the ZIP64 end of central directory`);this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var n=this.centralDirOffset+this.centralDirSize;this.zip64&&(n+=20,n+=12+this.zip64EndOfCentralSize);var r=t-n;if(0<r)this.isSignature(t,a.CENTRAL_FILE_HEADER)||(this.reader.zero=r);else if(r<0)throw Error(`Corrupted zip: missing `+Math.abs(r)+` bytes.`)},prepareReader:function(e){this.reader=r(e)},load:function(e){this.prepareReader(e),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},t.exports=c},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,t,n){var r=e(`./reader/readerFor`),i=e(`./utils`),a=e(`./compressedObject`),o=e(`./crc32`),s=e(`./utf8`),c=e(`./compressions`),l=e(`./support`);function u(e,t){this.options=e,this.loadOptions=t}u.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(e){var t,n;if(e.skip(22),this.fileNameLength=e.readInt(2),n=e.readInt(2),this.fileName=e.readData(this.fileNameLength),e.skip(n),this.compressedSize===-1||this.uncompressedSize===-1)throw Error(`Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)`);if((t=function(e){for(var t in c)if(Object.prototype.hasOwnProperty.call(c,t)&&c[t].magic===e)return c[t];return null}(this.compressionMethod))===null)throw Error(`Corrupted zip : compression `+i.pretty(this.compressionMethod)+` unknown (inner file : `+i.transformTo(`string`,this.fileName)+`)`);this.decompressed=new a(this.compressedSize,this.uncompressedSize,this.crc32,t,e.readData(this.compressedSize))},readCentralPart:function(e){this.versionMadeBy=e.readInt(2),e.skip(2),this.bitFlag=e.readInt(2),this.compressionMethod=e.readString(2),this.date=e.readDate(),this.crc32=e.readInt(4),this.compressedSize=e.readInt(4),this.uncompressedSize=e.readInt(4);var t=e.readInt(2);if(this.extraFieldsLength=e.readInt(2),this.fileCommentLength=e.readInt(2),this.diskNumberStart=e.readInt(2),this.internalFileAttributes=e.readInt(2),this.externalFileAttributes=e.readInt(4),this.localHeaderOffset=e.readInt(4),this.isEncrypted())throw Error(`Encrypted zip are not supported`);e.skip(t),this.readExtraFields(e),this.parseZIP64ExtraField(e),this.fileComment=e.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var e=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),e==0&&(this.dosPermissions=63&this.externalFileAttributes),e==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!==`/`||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var e=r(this.extraFields[1].value);this.uncompressedSize===i.MAX_VALUE_32BITS&&(this.uncompressedSize=e.readInt(8)),this.compressedSize===i.MAX_VALUE_32BITS&&(this.compressedSize=e.readInt(8)),this.localHeaderOffset===i.MAX_VALUE_32BITS&&(this.localHeaderOffset=e.readInt(8)),this.diskNumberStart===i.MAX_VALUE_32BITS&&(this.diskNumberStart=e.readInt(4))}},readExtraFields:function(e){var t,n,r,i=e.index+this.extraFieldsLength;for(this.extraFields||={};e.index+4<i;)t=e.readInt(2),n=e.readInt(2),r=e.readData(n),this.extraFields[t]={id:t,length:n,value:r};e.setIndex(i)},handleUTF8:function(){var e=l.uint8array?`uint8array`:`array`;if(this.useUTF8())this.fileNameStr=s.utf8decode(this.fileName),this.fileCommentStr=s.utf8decode(this.fileComment);else{var t=this.findExtraFieldUnicodePath();if(t!==null)this.fileNameStr=t;else{var n=i.transformTo(e,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(n)}var r=this.findExtraFieldUnicodeComment();if(r!==null)this.fileCommentStr=r;else{var a=i.transformTo(e,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(a)}}},findExtraFieldUnicodePath:function(){var e=this.extraFields[28789];if(e){var t=r(e.value);return t.readInt(1)===1&&o(this.fileName)===t.readInt(4)?s.utf8decode(t.readData(e.length-5)):null}return null},findExtraFieldUnicodeComment:function(){var e=this.extraFields[25461];if(e){var t=r(e.value);return t.readInt(1)===1&&o(this.fileComment)===t.readInt(4)?s.utf8decode(t.readData(e.length-5)):null}return null}},t.exports=u},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,t,n){function r(e,t,n){this.name=e,this.dir=n.dir,this.date=n.date,this.comment=n.comment,this.unixPermissions=n.unixPermissions,this.dosPermissions=n.dosPermissions,this._data=t,this._dataBinary=n.binary,this.options={compression:n.compression,compressionOptions:n.compressionOptions}}var i=e(`./stream/StreamHelper`),a=e(`./stream/DataWorker`),o=e(`./utf8`),s=e(`./compressedObject`),c=e(`./stream/GenericWorker`);r.prototype={internalStream:function(e){var t=null,n=`string`;try{if(!e)throw Error(`No output type specified.`);var r=(n=e.toLowerCase())===`string`||n===`text`;n!==`binarystring`&&n!==`text`||(n=`string`),t=this._decompressWorker();var a=!this._dataBinary;a&&!r&&(t=t.pipe(new o.Utf8EncodeWorker)),!a&&r&&(t=t.pipe(new o.Utf8DecodeWorker))}catch(e){(t=new c(`error`)).error(e)}return new i(t,n,``)},async:function(e,t){return this.internalStream(e).accumulate(t)},nodeStream:function(e,t){return this.internalStream(e||`nodebuffer`).toNodejsStream(t)},_compressWorker:function(e,t){if(this._data instanceof s&&this._data.compression.magic===e.magic)return this._data.getCompressedWorker();var n=this._decompressWorker();return this._dataBinary||(n=n.pipe(new o.Utf8EncodeWorker)),s.createWorkerFrom(n,e,t)},_decompressWorker:function(){return this._data instanceof s?this._data.getContentWorker():this._data instanceof c?this._data:new a(this._data)}};for(var l=[`asText`,`asBinary`,`asNodeBuffer`,`asUint8Array`,`asArrayBuffer`],u=function(){throw Error(`This method has been removed in JSZip 3.0, please check the upgrade guide.`)},d=0;d<l.length;d++)r.prototype[l[d]]=u;t.exports=r},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,t,n){(function(e){var n,r,i=e.MutationObserver||e.WebKitMutationObserver;if(i){var a=0,o=new i(u),s=e.document.createTextNode(``);o.observe(s,{characterData:!0}),n=function(){s.data=a=++a%2}}else if(e.setImmediate||e.MessageChannel===void 0)n=`document`in e&&`onreadystatechange`in e.document.createElement(`script`)?function(){var t=e.document.createElement(`script`);t.onreadystatechange=function(){u(),t.onreadystatechange=null,t.parentNode.removeChild(t),t=null},e.document.documentElement.appendChild(t)}:function(){setTimeout(u,0)};else{var c=new e.MessageChannel;c.port1.onmessage=u,n=function(){c.port2.postMessage(0)}}var l=[];function u(){var e,t;r=!0;for(var n=l.length;n;){for(t=l,l=[],e=-1;++e<n;)t[e]();n=l.length}r=!1}t.exports=function(e){l.push(e)!==1||r||n()}}).call(this,typeof global<`u`?global:typeof self<`u`?self:typeof window<`u`?window:{})},{}],37:[function(e,t,n){var r=e(`immediate`);function i(){}var a={},o=[`REJECTED`],s=[`FULFILLED`],c=[`PENDING`];function l(e){if(typeof e!=`function`)throw TypeError(`resolver must be a function`);this.state=c,this.queue=[],this.outcome=void 0,e!==i&&p(this,e)}function u(e,t,n){this.promise=e,typeof t==`function`&&(this.onFulfilled=t,this.callFulfilled=this.otherCallFulfilled),typeof n==`function`&&(this.onRejected=n,this.callRejected=this.otherCallRejected)}function d(e,t,n){r(function(){var r;try{r=t(n)}catch(t){return a.reject(e,t)}r===e?a.reject(e,TypeError(`Cannot resolve promise with itself`)):a.resolve(e,r)})}function f(e){var t=e&&e.then;if(e&&(typeof e==`object`||typeof e==`function`)&&typeof t==`function`)return function(){t.apply(e,arguments)}}function p(e,t){var n=!1;function r(t){n||(n=!0,a.reject(e,t))}function i(t){n||(n=!0,a.resolve(e,t))}var o=m(function(){t(i,r)});o.status===`error`&&r(o.value)}function m(e,t){var n={};try{n.value=e(t),n.status=`success`}catch(e){n.status=`error`,n.value=e}return n}(t.exports=l).prototype.finally=function(e){if(typeof e!=`function`)return this;var t=this.constructor;return this.then(function(n){return t.resolve(e()).then(function(){return n})},function(n){return t.resolve(e()).then(function(){throw n})})},l.prototype.catch=function(e){return this.then(null,e)},l.prototype.then=function(e,t){if(typeof e!=`function`&&this.state===s||typeof t!=`function`&&this.state===o)return this;var n=new this.constructor(i);return this.state===c?this.queue.push(new u(n,e,t)):d(n,this.state===s?e:t,this.outcome),n},u.prototype.callFulfilled=function(e){a.resolve(this.promise,e)},u.prototype.otherCallFulfilled=function(e){d(this.promise,this.onFulfilled,e)},u.prototype.callRejected=function(e){a.reject(this.promise,e)},u.prototype.otherCallRejected=function(e){d(this.promise,this.onRejected,e)},a.resolve=function(e,t){var n=m(f,t);if(n.status===`error`)return a.reject(e,n.value);var r=n.value;if(r)p(e,r);else{e.state=s,e.outcome=t;for(var i=-1,o=e.queue.length;++i<o;)e.queue[i].callFulfilled(t)}return e},a.reject=function(e,t){e.state=o,e.outcome=t;for(var n=-1,r=e.queue.length;++n<r;)e.queue[n].callRejected(t);return e},l.resolve=function(e){return e instanceof this?e:a.resolve(new this(i),e)},l.reject=function(e){var t=new this(i);return a.reject(t,e)},l.all=function(e){var t=this;if(Object.prototype.toString.call(e)!==`[object Array]`)return this.reject(TypeError(`must be an array`));var n=e.length,r=!1;if(!n)return this.resolve([]);for(var o=Array(n),s=0,c=-1,l=new this(i);++c<n;)u(e[c],c);return l;function u(e,i){t.resolve(e).then(function(e){o[i]=e,++s!==n||r||(r=!0,a.resolve(l,o))},function(e){r||(r=!0,a.reject(l,e))})}},l.race=function(e){var t=this;if(Object.prototype.toString.call(e)!==`[object Array]`)return this.reject(TypeError(`must be an array`));var n=e.length,r=!1;if(!n)return this.resolve([]);for(var o=-1,s=new this(i);++o<n;)c=e[o],t.resolve(c).then(function(e){r||(r=!0,a.resolve(s,e))},function(e){r||(r=!0,a.reject(s,e))});var c;return s}},{immediate:36}],38:[function(e,t,n){var r={};(0,e(`./lib/utils/common`).assign)(r,e(`./lib/deflate`),e(`./lib/inflate`),e(`./lib/zlib/constants`)),t.exports=r},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,t,n){var r=e(`./zlib/deflate`),i=e(`./utils/common`),a=e(`./utils/strings`),o=e(`./zlib/messages`),s=e(`./zlib/zstream`),c=Object.prototype.toString,l=0,u=-1,d=0,f=8;function p(e){if(!(this instanceof p))return new p(e);this.options=i.assign({level:u,method:f,chunkSize:16384,windowBits:15,memLevel:8,strategy:d,to:``},e||{});var t=this.options;t.raw&&0<t.windowBits?t.windowBits=-t.windowBits:t.gzip&&0<t.windowBits&&t.windowBits<16&&(t.windowBits+=16),this.err=0,this.msg=``,this.ended=!1,this.chunks=[],this.strm=new s,this.strm.avail_out=0;var n=r.deflateInit2(this.strm,t.level,t.method,t.windowBits,t.memLevel,t.strategy);if(n!==l)throw Error(o[n]);if(t.header&&r.deflateSetHeader(this.strm,t.header),t.dictionary){var m;if(m=typeof t.dictionary==`string`?a.string2buf(t.dictionary):c.call(t.dictionary)===`[object ArrayBuffer]`?new Uint8Array(t.dictionary):t.dictionary,(n=r.deflateSetDictionary(this.strm,m))!==l)throw Error(o[n]);this._dict_set=!0}}function m(e,t){var n=new p(t);if(n.push(e,!0),n.err)throw n.msg||o[n.err];return n.result}p.prototype.push=function(e,t){var n,o,s=this.strm,u=this.options.chunkSize;if(this.ended)return!1;o=t===~~t?t:!0===t?4:0,typeof e==`string`?s.input=a.string2buf(e):c.call(e)===`[object ArrayBuffer]`?s.input=new Uint8Array(e):s.input=e,s.next_in=0,s.avail_in=s.input.length;do{if(s.avail_out===0&&(s.output=new i.Buf8(u),s.next_out=0,s.avail_out=u),(n=r.deflate(s,o))!==1&&n!==l)return this.onEnd(n),!(this.ended=!0);s.avail_out!==0&&(s.avail_in!==0||o!==4&&o!==2)||(this.options.to===`string`?this.onData(a.buf2binstring(i.shrinkBuf(s.output,s.next_out))):this.onData(i.shrinkBuf(s.output,s.next_out)))}while((0<s.avail_in||s.avail_out===0)&&n!==1);return o===4?(n=r.deflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===l):o!==2||(this.onEnd(l),!(s.avail_out=0))},p.prototype.onData=function(e){this.chunks.push(e)},p.prototype.onEnd=function(e){e===l&&(this.options.to===`string`?this.result=this.chunks.join(``):this.result=i.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},n.Deflate=p,n.deflate=m,n.deflateRaw=function(e,t){return(t||={}).raw=!0,m(e,t)},n.gzip=function(e,t){return(t||={}).gzip=!0,m(e,t)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,t,n){var r=e(`./zlib/inflate`),i=e(`./utils/common`),a=e(`./utils/strings`),o=e(`./zlib/constants`),s=e(`./zlib/messages`),c=e(`./zlib/zstream`),l=e(`./zlib/gzheader`),u=Object.prototype.toString;function d(e){if(!(this instanceof d))return new d(e);this.options=i.assign({chunkSize:16384,windowBits:0,to:``},e||{});var t=this.options;t.raw&&0<=t.windowBits&&t.windowBits<16&&(t.windowBits=-t.windowBits,t.windowBits===0&&(t.windowBits=-15)),!(0<=t.windowBits&&t.windowBits<16)||e&&e.windowBits||(t.windowBits+=32),15<t.windowBits&&t.windowBits<48&&!(15&t.windowBits)&&(t.windowBits|=15),this.err=0,this.msg=``,this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var n=r.inflateInit2(this.strm,t.windowBits);if(n!==o.Z_OK)throw Error(s[n]);this.header=new l,r.inflateGetHeader(this.strm,this.header)}function f(e,t){var n=new d(t);if(n.push(e,!0),n.err)throw n.msg||s[n.err];return n.result}d.prototype.push=function(e,t){var n,s,c,l,d,f,p=this.strm,m=this.options.chunkSize,h=this.options.dictionary,g=!1;if(this.ended)return!1;s=t===~~t?t:!0===t?o.Z_FINISH:o.Z_NO_FLUSH,typeof e==`string`?p.input=a.binstring2buf(e):u.call(e)===`[object ArrayBuffer]`?p.input=new Uint8Array(e):p.input=e,p.next_in=0,p.avail_in=p.input.length;do{if(p.avail_out===0&&(p.output=new i.Buf8(m),p.next_out=0,p.avail_out=m),(n=r.inflate(p,o.Z_NO_FLUSH))===o.Z_NEED_DICT&&h&&(f=typeof h==`string`?a.string2buf(h):u.call(h)===`[object ArrayBuffer]`?new Uint8Array(h):h,n=r.inflateSetDictionary(this.strm,f)),n===o.Z_BUF_ERROR&&!0===g&&(n=o.Z_OK,g=!1),n!==o.Z_STREAM_END&&n!==o.Z_OK)return this.onEnd(n),!(this.ended=!0);p.next_out&&(p.avail_out!==0&&n!==o.Z_STREAM_END&&(p.avail_in!==0||s!==o.Z_FINISH&&s!==o.Z_SYNC_FLUSH)||(this.options.to===`string`?(c=a.utf8border(p.output,p.next_out),l=p.next_out-c,d=a.buf2string(p.output,c),p.next_out=l,p.avail_out=m-l,l&&i.arraySet(p.output,p.output,c,l,0),this.onData(d)):this.onData(i.shrinkBuf(p.output,p.next_out)))),p.avail_in===0&&p.avail_out===0&&(g=!0)}while((0<p.avail_in||p.avail_out===0)&&n!==o.Z_STREAM_END);return n===o.Z_STREAM_END&&(s=o.Z_FINISH),s===o.Z_FINISH?(n=r.inflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===o.Z_OK):s!==o.Z_SYNC_FLUSH||(this.onEnd(o.Z_OK),!(p.avail_out=0))},d.prototype.onData=function(e){this.chunks.push(e)},d.prototype.onEnd=function(e){e===o.Z_OK&&(this.options.to===`string`?this.result=this.chunks.join(``):this.result=i.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},n.Inflate=d,n.inflate=f,n.inflateRaw=function(e,t){return(t||={}).raw=!0,f(e,t)},n.ungzip=f},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,t,n){var r=typeof Uint8Array<`u`&&typeof Uint16Array<`u`&&typeof Int32Array<`u`;n.assign=function(e){for(var t=Array.prototype.slice.call(arguments,1);t.length;){var n=t.shift();if(n){if(typeof n!=`object`)throw TypeError(n+`must be non-object`);for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])}}return e},n.shrinkBuf=function(e,t){return e.length===t?e:e.subarray?e.subarray(0,t):(e.length=t,e)};var i={arraySet:function(e,t,n,r,i){if(t.subarray&&e.subarray)e.set(t.subarray(n,n+r),i);else for(var a=0;a<r;a++)e[i+a]=t[n+a]},flattenChunks:function(e){var t,n,r,i,a,o;for(t=r=0,n=e.length;t<n;t++)r+=e[t].length;for(o=new Uint8Array(r),t=i=0,n=e.length;t<n;t++)a=e[t],o.set(a,i),i+=a.length;return o}},a={arraySet:function(e,t,n,r,i){for(var a=0;a<r;a++)e[i+a]=t[n+a]},flattenChunks:function(e){return[].concat.apply([],e)}};n.setTyped=function(e){e?(n.Buf8=Uint8Array,n.Buf16=Uint16Array,n.Buf32=Int32Array,n.assign(n,i)):(n.Buf8=Array,n.Buf16=Array,n.Buf32=Array,n.assign(n,a))},n.setTyped(r)},{}],42:[function(e,t,n){var r=e(`./common`),i=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch{i=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{a=!1}for(var o=new r.Buf8(256),s=0;s<256;s++)o[s]=252<=s?6:248<=s?5:240<=s?4:224<=s?3:192<=s?2:1;function c(e,t){if(t<65537&&(e.subarray&&a||!e.subarray&&i))return String.fromCharCode.apply(null,r.shrinkBuf(e,t));for(var n=``,o=0;o<t;o++)n+=String.fromCharCode(e[o]);return n}o[254]=o[254]=1,n.string2buf=function(e){var t,n,i,a,o,s=e.length,c=0;for(a=0;a<s;a++)(64512&(n=e.charCodeAt(a)))==55296&&a+1<s&&(64512&(i=e.charCodeAt(a+1)))==56320&&(n=65536+(n-55296<<10)+(i-56320),a++),c+=n<128?1:n<2048?2:n<65536?3:4;for(t=new r.Buf8(c),a=o=0;o<c;a++)(64512&(n=e.charCodeAt(a)))==55296&&a+1<s&&(64512&(i=e.charCodeAt(a+1)))==56320&&(n=65536+(n-55296<<10)+(i-56320),a++),n<128?t[o++]=n:(n<2048?t[o++]=192|n>>>6:(n<65536?t[o++]=224|n>>>12:(t[o++]=240|n>>>18,t[o++]=128|n>>>12&63),t[o++]=128|n>>>6&63),t[o++]=128|63&n);return t},n.buf2binstring=function(e){return c(e,e.length)},n.binstring2buf=function(e){for(var t=new r.Buf8(e.length),n=0,i=t.length;n<i;n++)t[n]=e.charCodeAt(n);return t},n.buf2string=function(e,t){var n,r,i,a,s=t||e.length,l=Array(2*s);for(n=r=0;n<s;)if((i=e[n++])<128)l[r++]=i;else if(4<(a=o[i]))l[r++]=65533,n+=a-1;else{for(i&=a===2?31:a===3?15:7;1<a&&n<s;)i=i<<6|63&e[n++],a--;1<a?l[r++]=65533:i<65536?l[r++]=i:(i-=65536,l[r++]=55296|i>>10&1023,l[r++]=56320|1023&i)}return c(l,r)},n.utf8border=function(e,t){var n;for((t||=e.length)>e.length&&(t=e.length),n=t-1;0<=n&&(192&e[n])==128;)n--;return n<0||n===0?t:n+o[e[n]]>t?n:t}},{"./common":41}],43:[function(e,t,n){t.exports=function(e,t,n,r){for(var i=65535&e|0,a=e>>>16&65535|0,o=0;n!==0;){for(n-=o=2e3<n?2e3:n;a=a+(i=i+t[r++]|0)|0,--o;);i%=65521,a%=65521}return i|a<<16|0}},{}],44:[function(e,t,n){t.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,t,n){var r=function(){for(var e,t=[],n=0;n<256;n++){e=n;for(var r=0;r<8;r++)e=1&e?3988292384^e>>>1:e>>>1;t[n]=e}return t}();t.exports=function(e,t,n,i){var a=r,o=i+n;e^=-1;for(var s=i;s<o;s++)e=e>>>8^a[255&(e^t[s])];return-1^e}},{}],46:[function(e,t,n){var r,i=e(`../utils/common`),a=e(`./trees`),o=e(`./adler32`),s=e(`./crc32`),c=e(`./messages`),l=0,u=4,d=0,f=-2,p=-1,m=4,h=2,g=8,_=9,v=286,y=30,b=19,x=2*v+1,S=15,C=3,w=258,T=w+C+1,E=42,D=113,O=1,k=2,A=3,j=4;function M(e,t){return e.msg=c[t],t}function N(e){return(e<<1)-(4<e?9:0)}function P(e){for(var t=e.length;0<=--t;)e[t]=0}function F(e){var t=e.state,n=t.pending;n>e.avail_out&&(n=e.avail_out),n!==0&&(i.arraySet(e.output,t.pending_buf,t.pending_out,n,e.next_out),e.next_out+=n,t.pending_out+=n,e.total_out+=n,e.avail_out-=n,t.pending-=n,t.pending===0&&(t.pending_out=0))}function I(e,t){a._tr_flush_block(e,0<=e.block_start?e.block_start:-1,e.strstart-e.block_start,t),e.block_start=e.strstart,F(e.strm)}function L(e,t){e.pending_buf[e.pending++]=t}function R(e,t){e.pending_buf[e.pending++]=t>>>8&255,e.pending_buf[e.pending++]=255&t}function z(e,t){var n,r,i=e.max_chain_length,a=e.strstart,o=e.prev_length,s=e.nice_match,c=e.strstart>e.w_size-T?e.strstart-(e.w_size-T):0,l=e.window,u=e.w_mask,d=e.prev,f=e.strstart+w,p=l[a+o-1],m=l[a+o];e.prev_length>=e.good_match&&(i>>=2),s>e.lookahead&&(s=e.lookahead);do if(l[(n=t)+o]===m&&l[n+o-1]===p&&l[n]===l[a]&&l[++n]===l[a+1]){a+=2,n++;do;while(l[++a]===l[++n]&&l[++a]===l[++n]&&l[++a]===l[++n]&&l[++a]===l[++n]&&l[++a]===l[++n]&&l[++a]===l[++n]&&l[++a]===l[++n]&&l[++a]===l[++n]&&a<f);if(r=w-(f-a),a=f-w,o<r){if(e.match_start=t,s<=(o=r))break;p=l[a+o-1],m=l[a+o]}}while((t=d[t&u])>c&&--i!=0);return o<=e.lookahead?o:e.lookahead}function B(e){var t,n,r,a,c,l,u,d,f,p,m=e.w_size;do{if(a=e.window_size-e.lookahead-e.strstart,e.strstart>=m+(m-T)){for(i.arraySet(e.window,e.window,m,m,0),e.match_start-=m,e.strstart-=m,e.block_start-=m,t=n=e.hash_size;r=e.head[--t],e.head[t]=m<=r?r-m:0,--n;);for(t=n=m;r=e.prev[--t],e.prev[t]=m<=r?r-m:0,--n;);a+=m}if(e.strm.avail_in===0)break;if(l=e.strm,u=e.window,d=e.strstart+e.lookahead,f=a,p=void 0,p=l.avail_in,f<p&&(p=f),n=p===0?0:(l.avail_in-=p,i.arraySet(u,l.input,l.next_in,p,d),l.state.wrap===1?l.adler=o(l.adler,u,p,d):l.state.wrap===2&&(l.adler=s(l.adler,u,p,d)),l.next_in+=p,l.total_in+=p,p),e.lookahead+=n,e.lookahead+e.insert>=C)for(c=e.strstart-e.insert,e.ins_h=e.window[c],e.ins_h=(e.ins_h<<e.hash_shift^e.window[c+1])&e.hash_mask;e.insert&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[c+C-1])&e.hash_mask,e.prev[c&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=c,c++,e.insert--,!(e.lookahead+e.insert<C)););}while(e.lookahead<T&&e.strm.avail_in!==0)}function ee(e,t){for(var n,r;;){if(e.lookahead<T){if(B(e),e.lookahead<T&&t===l)return O;if(e.lookahead===0)break}if(n=0,e.lookahead>=C&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+C-1])&e.hash_mask,n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),n!==0&&e.strstart-n<=e.w_size-T&&(e.match_length=z(e,n)),e.match_length>=C)if(r=a._tr_tally(e,e.strstart-e.match_start,e.match_length-C),e.lookahead-=e.match_length,e.match_length<=e.max_lazy_match&&e.lookahead>=C){for(e.match_length--;e.strstart++,e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+C-1])&e.hash_mask,n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart,--e.match_length!=0;);e.strstart++}else e.strstart+=e.match_length,e.match_length=0,e.ins_h=e.window[e.strstart],e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+1])&e.hash_mask;else r=a._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++;if(r&&(I(e,!1),e.strm.avail_out===0))return O}return e.insert=e.strstart<C-1?e.strstart:C-1,t===u?(I(e,!0),e.strm.avail_out===0?A:j):e.last_lit&&(I(e,!1),e.strm.avail_out===0)?O:k}function te(e,t){for(var n,r,i;;){if(e.lookahead<T){if(B(e),e.lookahead<T&&t===l)return O;if(e.lookahead===0)break}if(n=0,e.lookahead>=C&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+C-1])&e.hash_mask,n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),e.prev_length=e.match_length,e.prev_match=e.match_start,e.match_length=C-1,n!==0&&e.prev_length<e.max_lazy_match&&e.strstart-n<=e.w_size-T&&(e.match_length=z(e,n),e.match_length<=5&&(e.strategy===1||e.match_length===C&&4096<e.strstart-e.match_start)&&(e.match_length=C-1)),e.prev_length>=C&&e.match_length<=e.prev_length){for(i=e.strstart+e.lookahead-C,r=a._tr_tally(e,e.strstart-1-e.prev_match,e.prev_length-C),e.lookahead-=e.prev_length-1,e.prev_length-=2;++e.strstart<=i&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+C-1])&e.hash_mask,n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),--e.prev_length!=0;);if(e.match_available=0,e.match_length=C-1,e.strstart++,r&&(I(e,!1),e.strm.avail_out===0))return O}else if(e.match_available){if((r=a._tr_tally(e,0,e.window[e.strstart-1]))&&I(e,!1),e.strstart++,e.lookahead--,e.strm.avail_out===0)return O}else e.match_available=1,e.strstart++,e.lookahead--}return e.match_available&&=(r=a._tr_tally(e,0,e.window[e.strstart-1]),0),e.insert=e.strstart<C-1?e.strstart:C-1,t===u?(I(e,!0),e.strm.avail_out===0?A:j):e.last_lit&&(I(e,!1),e.strm.avail_out===0)?O:k}function ne(e,t,n,r,i){this.good_length=e,this.max_lazy=t,this.nice_length=n,this.max_chain=r,this.func=i}function re(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=g,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new i.Buf16(2*x),this.dyn_dtree=new i.Buf16(2*(2*y+1)),this.bl_tree=new i.Buf16(2*(2*b+1)),P(this.dyn_ltree),P(this.dyn_dtree),P(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new i.Buf16(S+1),this.heap=new i.Buf16(2*v+1),P(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new i.Buf16(2*v+1),P(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function ie(e){var t;return e&&e.state?(e.total_in=e.total_out=0,e.data_type=h,(t=e.state).pending=0,t.pending_out=0,t.wrap<0&&(t.wrap=-t.wrap),t.status=t.wrap?E:D,e.adler=t.wrap===2?0:1,t.last_flush=l,a._tr_init(t),d):M(e,f)}function ae(e){var t=ie(e);return t===d&&function(e){e.window_size=2*e.w_size,P(e.head),e.max_lazy_match=r[e.level].max_lazy,e.good_match=r[e.level].good_length,e.nice_match=r[e.level].nice_length,e.max_chain_length=r[e.level].max_chain,e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=C-1,e.match_available=0,e.ins_h=0}(e.state),t}function oe(e,t,n,r,a,o){if(!e)return f;var s=1;if(t===p&&(t=6),r<0?(s=0,r=-r):15<r&&(s=2,r-=16),a<1||_<a||n!==g||r<8||15<r||t<0||9<t||o<0||m<o)return M(e,f);r===8&&(r=9);var c=new re;return(e.state=c).strm=e,c.wrap=s,c.gzhead=null,c.w_bits=r,c.w_size=1<<c.w_bits,c.w_mask=c.w_size-1,c.hash_bits=a+7,c.hash_size=1<<c.hash_bits,c.hash_mask=c.hash_size-1,c.hash_shift=~~((c.hash_bits+C-1)/C),c.window=new i.Buf8(2*c.w_size),c.head=new i.Buf16(c.hash_size),c.prev=new i.Buf16(c.w_size),c.lit_bufsize=1<<a+6,c.pending_buf_size=4*c.lit_bufsize,c.pending_buf=new i.Buf8(c.pending_buf_size),c.d_buf=1*c.lit_bufsize,c.l_buf=3*c.lit_bufsize,c.level=t,c.strategy=o,c.method=n,ae(e)}r=[new ne(0,0,0,0,function(e,t){var n=65535;for(n>e.pending_buf_size-5&&(n=e.pending_buf_size-5);;){if(e.lookahead<=1){if(B(e),e.lookahead===0&&t===l)return O;if(e.lookahead===0)break}e.strstart+=e.lookahead,e.lookahead=0;var r=e.block_start+n;if((e.strstart===0||e.strstart>=r)&&(e.lookahead=e.strstart-r,e.strstart=r,I(e,!1),e.strm.avail_out===0)||e.strstart-e.block_start>=e.w_size-T&&(I(e,!1),e.strm.avail_out===0))return O}return e.insert=0,t===u?(I(e,!0),e.strm.avail_out===0?A:j):(e.strstart>e.block_start&&(I(e,!1),e.strm.avail_out),O)}),new ne(4,4,8,4,ee),new ne(4,5,16,8,ee),new ne(4,6,32,32,ee),new ne(4,4,16,16,te),new ne(8,16,32,32,te),new ne(8,16,128,128,te),new ne(8,32,128,256,te),new ne(32,128,258,1024,te),new ne(32,258,258,4096,te)],n.deflateInit=function(e,t){return oe(e,t,g,15,8,0)},n.deflateInit2=oe,n.deflateReset=ae,n.deflateResetKeep=ie,n.deflateSetHeader=function(e,t){return e&&e.state&&e.state.wrap===2?(e.state.gzhead=t,d):f},n.deflate=function(e,t){var n,i,o,c;if(!e||!e.state||5<t||t<0)return e?M(e,f):f;if(i=e.state,!e.output||!e.input&&e.avail_in!==0||i.status===666&&t!==u)return M(e,e.avail_out===0?-5:f);if(i.strm=e,n=i.last_flush,i.last_flush=t,i.status===E)if(i.wrap===2)e.adler=0,L(i,31),L(i,139),L(i,8),i.gzhead?(L(i,(i.gzhead.text?1:0)+(i.gzhead.hcrc?2:0)+(i.gzhead.extra?4:0)+(i.gzhead.name?8:0)+(i.gzhead.comment?16:0)),L(i,255&i.gzhead.time),L(i,i.gzhead.time>>8&255),L(i,i.gzhead.time>>16&255),L(i,i.gzhead.time>>24&255),L(i,i.level===9?2:2<=i.strategy||i.level<2?4:0),L(i,255&i.gzhead.os),i.gzhead.extra&&i.gzhead.extra.length&&(L(i,255&i.gzhead.extra.length),L(i,i.gzhead.extra.length>>8&255)),i.gzhead.hcrc&&(e.adler=s(e.adler,i.pending_buf,i.pending,0)),i.gzindex=0,i.status=69):(L(i,0),L(i,0),L(i,0),L(i,0),L(i,0),L(i,i.level===9?2:2<=i.strategy||i.level<2?4:0),L(i,3),i.status=D);else{var p=g+(i.w_bits-8<<4)<<8;p|=(2<=i.strategy||i.level<2?0:i.level<6?1:i.level===6?2:3)<<6,i.strstart!==0&&(p|=32),p+=31-p%31,i.status=D,R(i,p),i.strstart!==0&&(R(i,e.adler>>>16),R(i,65535&e.adler)),e.adler=1}if(i.status===69)if(i.gzhead.extra){for(o=i.pending;i.gzindex<(65535&i.gzhead.extra.length)&&(i.pending!==i.pending_buf_size||(i.gzhead.hcrc&&i.pending>o&&(e.adler=s(e.adler,i.pending_buf,i.pending-o,o)),F(e),o=i.pending,i.pending!==i.pending_buf_size));)L(i,255&i.gzhead.extra[i.gzindex]),i.gzindex++;i.gzhead.hcrc&&i.pending>o&&(e.adler=s(e.adler,i.pending_buf,i.pending-o,o)),i.gzindex===i.gzhead.extra.length&&(i.gzindex=0,i.status=73)}else i.status=73;if(i.status===73)if(i.gzhead.name){o=i.pending;do{if(i.pending===i.pending_buf_size&&(i.gzhead.hcrc&&i.pending>o&&(e.adler=s(e.adler,i.pending_buf,i.pending-o,o)),F(e),o=i.pending,i.pending===i.pending_buf_size)){c=1;break}c=i.gzindex<i.gzhead.name.length?255&i.gzhead.name.charCodeAt(i.gzindex++):0,L(i,c)}while(c!==0);i.gzhead.hcrc&&i.pending>o&&(e.adler=s(e.adler,i.pending_buf,i.pending-o,o)),c===0&&(i.gzindex=0,i.status=91)}else i.status=91;if(i.status===91)if(i.gzhead.comment){o=i.pending;do{if(i.pending===i.pending_buf_size&&(i.gzhead.hcrc&&i.pending>o&&(e.adler=s(e.adler,i.pending_buf,i.pending-o,o)),F(e),o=i.pending,i.pending===i.pending_buf_size)){c=1;break}c=i.gzindex<i.gzhead.comment.length?255&i.gzhead.comment.charCodeAt(i.gzindex++):0,L(i,c)}while(c!==0);i.gzhead.hcrc&&i.pending>o&&(e.adler=s(e.adler,i.pending_buf,i.pending-o,o)),c===0&&(i.status=103)}else i.status=103;if(i.status===103&&(i.gzhead.hcrc?(i.pending+2>i.pending_buf_size&&F(e),i.pending+2<=i.pending_buf_size&&(L(i,255&e.adler),L(i,e.adler>>8&255),e.adler=0,i.status=D)):i.status=D),i.pending!==0){if(F(e),e.avail_out===0)return i.last_flush=-1,d}else if(e.avail_in===0&&N(t)<=N(n)&&t!==u)return M(e,-5);if(i.status===666&&e.avail_in!==0)return M(e,-5);if(e.avail_in!==0||i.lookahead!==0||t!==l&&i.status!==666){var m=i.strategy===2?function(e,t){for(var n;;){if(e.lookahead===0&&(B(e),e.lookahead===0)){if(t===l)return O;break}if(e.match_length=0,n=a._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++,n&&(I(e,!1),e.strm.avail_out===0))return O}return e.insert=0,t===u?(I(e,!0),e.strm.avail_out===0?A:j):e.last_lit&&(I(e,!1),e.strm.avail_out===0)?O:k}(i,t):i.strategy===3?function(e,t){for(var n,r,i,o,s=e.window;;){if(e.lookahead<=w){if(B(e),e.lookahead<=w&&t===l)return O;if(e.lookahead===0)break}if(e.match_length=0,e.lookahead>=C&&0<e.strstart&&(r=s[i=e.strstart-1])===s[++i]&&r===s[++i]&&r===s[++i]){o=e.strstart+w;do;while(r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&i<o);e.match_length=w-(o-i),e.match_length>e.lookahead&&(e.match_length=e.lookahead)}if(e.match_length>=C?(n=a._tr_tally(e,1,e.match_length-C),e.lookahead-=e.match_length,e.strstart+=e.match_length,e.match_length=0):(n=a._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++),n&&(I(e,!1),e.strm.avail_out===0))return O}return e.insert=0,t===u?(I(e,!0),e.strm.avail_out===0?A:j):e.last_lit&&(I(e,!1),e.strm.avail_out===0)?O:k}(i,t):r[i.level].func(i,t);if(m!==A&&m!==j||(i.status=666),m===O||m===A)return e.avail_out===0&&(i.last_flush=-1),d;if(m===k&&(t===1?a._tr_align(i):t!==5&&(a._tr_stored_block(i,0,0,!1),t===3&&(P(i.head),i.lookahead===0&&(i.strstart=0,i.block_start=0,i.insert=0))),F(e),e.avail_out===0))return i.last_flush=-1,d}return t===u?i.wrap<=0?1:(i.wrap===2?(L(i,255&e.adler),L(i,e.adler>>8&255),L(i,e.adler>>16&255),L(i,e.adler>>24&255),L(i,255&e.total_in),L(i,e.total_in>>8&255),L(i,e.total_in>>16&255),L(i,e.total_in>>24&255)):(R(i,e.adler>>>16),R(i,65535&e.adler)),F(e),0<i.wrap&&(i.wrap=-i.wrap),i.pending===0?1:d):d},n.deflateEnd=function(e){var t;return e&&e.state?(t=e.state.status)!==E&&t!==69&&t!==73&&t!==91&&t!==103&&t!==D&&t!==666?M(e,f):(e.state=null,t===D?M(e,-3):d):f},n.deflateSetDictionary=function(e,t){var n,r,a,s,c,l,u,p,m=t.length;if(!e||!e.state||(s=(n=e.state).wrap)===2||s===1&&n.status!==E||n.lookahead)return f;for(s===1&&(e.adler=o(e.adler,t,m,0)),n.wrap=0,m>=n.w_size&&(s===0&&(P(n.head),n.strstart=0,n.block_start=0,n.insert=0),p=new i.Buf8(n.w_size),i.arraySet(p,t,m-n.w_size,n.w_size,0),t=p,m=n.w_size),c=e.avail_in,l=e.next_in,u=e.input,e.avail_in=m,e.next_in=0,e.input=t,B(n);n.lookahead>=C;){for(r=n.strstart,a=n.lookahead-(C-1);n.ins_h=(n.ins_h<<n.hash_shift^n.window[r+C-1])&n.hash_mask,n.prev[r&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=r,r++,--a;);n.strstart=r,n.lookahead=C-1,B(n)}return n.strstart+=n.lookahead,n.block_start=n.strstart,n.insert=n.lookahead,n.lookahead=0,n.match_length=n.prev_length=C-1,n.match_available=0,e.next_in=l,e.input=u,e.avail_in=c,n.wrap=s,d},n.deflateInfo=`pako deflate (from Nodeca project)`},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,t,n){t.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name=``,this.comment=``,this.hcrc=0,this.done=!1}},{}],48:[function(e,t,n){t.exports=function(e,t){var n=e.state,r=e.next_in,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T=e.input,E;i=r+(e.avail_in-5),a=e.next_out,E=e.output,o=a-(t-e.avail_out),s=a+(e.avail_out-257),c=n.dmax,l=n.wsize,u=n.whave,d=n.wnext,f=n.window,p=n.hold,m=n.bits,h=n.lencode,g=n.distcode,_=(1<<n.lenbits)-1,v=(1<<n.distbits)-1;e:do{m<15&&(p+=T[r++]<<m,m+=8,p+=T[r++]<<m,m+=8),y=h[p&_];t:for(;;){if(p>>>=b=y>>>24,m-=b,(b=y>>>16&255)==0)E[a++]=65535&y;else{if(!(16&b)){if(!(64&b)){y=h[(65535&y)+(p&(1<<b)-1)];continue t}if(32&b){n.mode=12;break e}e.msg=`invalid literal/length code`,n.mode=30;break e}x=65535&y,(b&=15)&&(m<b&&(p+=T[r++]<<m,m+=8),x+=p&(1<<b)-1,p>>>=b,m-=b),m<15&&(p+=T[r++]<<m,m+=8,p+=T[r++]<<m,m+=8),y=g[p&v];r:for(;;){if(p>>>=b=y>>>24,m-=b,!(16&(b=y>>>16&255))){if(!(64&b)){y=g[(65535&y)+(p&(1<<b)-1)];continue r}e.msg=`invalid distance code`,n.mode=30;break e}if(S=65535&y,m<(b&=15)&&(p+=T[r++]<<m,(m+=8)<b&&(p+=T[r++]<<m,m+=8)),c<(S+=p&(1<<b)-1)){e.msg=`invalid distance too far back`,n.mode=30;break e}if(p>>>=b,m-=b,(b=a-o)<S){if(u<(b=S-b)&&n.sane){e.msg=`invalid distance too far back`,n.mode=30;break e}if(w=f,(C=0)===d){if(C+=l-b,b<x){for(x-=b;E[a++]=f[C++],--b;);C=a-S,w=E}}else if(d<b){if(C+=l+d-b,(b-=d)<x){for(x-=b;E[a++]=f[C++],--b;);if(C=0,d<x){for(x-=b=d;E[a++]=f[C++],--b;);C=a-S,w=E}}}else if(C+=d-b,b<x){for(x-=b;E[a++]=f[C++],--b;);C=a-S,w=E}for(;2<x;)E[a++]=w[C++],E[a++]=w[C++],E[a++]=w[C++],x-=3;x&&(E[a++]=w[C++],1<x&&(E[a++]=w[C++]))}else{for(C=a-S;E[a++]=E[C++],E[a++]=E[C++],E[a++]=E[C++],2<(x-=3););x&&(E[a++]=E[C++],1<x&&(E[a++]=E[C++]))}break}}break}}while(r<i&&a<s);r-=x=m>>3,p&=(1<<(m-=x<<3))-1,e.next_in=r,e.next_out=a,e.avail_in=r<i?i-r+5:5-(r-i),e.avail_out=a<s?s-a+257:257-(a-s),n.hold=p,n.bits=m}},{}],49:[function(e,t,n){var r=e(`../utils/common`),i=e(`./adler32`),a=e(`./crc32`),o=e(`./inffast`),s=e(`./inftrees`),c=1,l=2,u=0,d=-2,f=1,p=852,m=592;function h(e){return(e>>>24&255)+(e>>>8&65280)+((65280&e)<<8)+((255&e)<<24)}function g(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new r.Buf16(320),this.work=new r.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function _(e){var t;return e&&e.state?(t=e.state,e.total_in=e.total_out=t.total=0,e.msg=``,t.wrap&&(e.adler=1&t.wrap),t.mode=f,t.last=0,t.havedict=0,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new r.Buf32(p),t.distcode=t.distdyn=new r.Buf32(m),t.sane=1,t.back=-1,u):d}function v(e){var t;return e&&e.state?((t=e.state).wsize=0,t.whave=0,t.wnext=0,_(e)):d}function y(e,t){var n,r;return e&&e.state?(r=e.state,t<0?(n=0,t=-t):(n=1+(t>>4),t<48&&(t&=15)),t&&(t<8||15<t)?d:(r.window!==null&&r.wbits!==t&&(r.window=null),r.wrap=n,r.wbits=t,v(e))):d}function b(e,t){var n,r;return e?(r=new g,(e.state=r).window=null,(n=y(e,t))!==u&&(e.state=null),n):d}var x,S,C=!0;function w(e){if(C){var t;for(x=new r.Buf32(512),S=new r.Buf32(32),t=0;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(s(c,e.lens,0,288,x,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;s(l,e.lens,0,32,S,0,e.work,{bits:5}),C=!1}e.lencode=x,e.lenbits=9,e.distcode=S,e.distbits=5}function T(e,t,n,i){var a,o=e.state;return o.window===null&&(o.wsize=1<<o.wbits,o.wnext=0,o.whave=0,o.window=new r.Buf8(o.wsize)),i>=o.wsize?(r.arraySet(o.window,t,n-o.wsize,o.wsize,0),o.wnext=0,o.whave=o.wsize):(i<(a=o.wsize-o.wnext)&&(a=i),r.arraySet(o.window,t,n-i,a,o.wnext),(i-=a)?(r.arraySet(o.window,t,n-i,i,0),o.wnext=i,o.whave=o.wsize):(o.wnext+=a,o.wnext===o.wsize&&(o.wnext=0),o.whave<o.wsize&&(o.whave+=a))),0}n.inflateReset=v,n.inflateReset2=y,n.inflateResetKeep=_,n.inflateInit=function(e){return b(e,15)},n.inflateInit2=b,n.inflate=function(e,t){var n,p,m,g,_,v,y,b,x,S,C,E,D,O,k,A,j,M,N,P,F,I,L,R,z=0,B=new r.Buf8(4),ee=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!e||!e.state||!e.output||!e.input&&e.avail_in!==0)return d;(n=e.state).mode===12&&(n.mode=13),_=e.next_out,m=e.output,y=e.avail_out,g=e.next_in,p=e.input,v=e.avail_in,b=n.hold,x=n.bits,S=v,C=y,I=u;e:for(;;)switch(n.mode){case f:if(n.wrap===0){n.mode=13;break}for(;x<16;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(2&n.wrap&&b===35615){B[n.check=0]=255&b,B[1]=b>>>8&255,n.check=a(n.check,B,2,0),x=b=0,n.mode=2;break}if(n.flags=0,n.head&&(n.head.done=!1),!(1&n.wrap)||(((255&b)<<8)+(b>>8))%31){e.msg=`incorrect header check`,n.mode=30;break}if((15&b)!=8){e.msg=`unknown compression method`,n.mode=30;break}if(x-=4,F=8+(15&(b>>>=4)),n.wbits===0)n.wbits=F;else if(F>n.wbits){e.msg=`invalid window size`,n.mode=30;break}n.dmax=1<<F,e.adler=n.check=1,n.mode=512&b?10:12,x=b=0;break;case 2:for(;x<16;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(n.flags=b,(255&n.flags)!=8){e.msg=`unknown compression method`,n.mode=30;break}if(57344&n.flags){e.msg=`unknown header flags set`,n.mode=30;break}n.head&&(n.head.text=b>>8&1),512&n.flags&&(B[0]=255&b,B[1]=b>>>8&255,n.check=a(n.check,B,2,0)),x=b=0,n.mode=3;case 3:for(;x<32;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}n.head&&(n.head.time=b),512&n.flags&&(B[0]=255&b,B[1]=b>>>8&255,B[2]=b>>>16&255,B[3]=b>>>24&255,n.check=a(n.check,B,4,0)),x=b=0,n.mode=4;case 4:for(;x<16;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}n.head&&(n.head.xflags=255&b,n.head.os=b>>8),512&n.flags&&(B[0]=255&b,B[1]=b>>>8&255,n.check=a(n.check,B,2,0)),x=b=0,n.mode=5;case 5:if(1024&n.flags){for(;x<16;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}n.length=b,n.head&&(n.head.extra_len=b),512&n.flags&&(B[0]=255&b,B[1]=b>>>8&255,n.check=a(n.check,B,2,0)),x=b=0}else n.head&&(n.head.extra=null);n.mode=6;case 6:if(1024&n.flags&&(v<(E=n.length)&&(E=v),E&&(n.head&&(F=n.head.extra_len-n.length,n.head.extra||(n.head.extra=Array(n.head.extra_len)),r.arraySet(n.head.extra,p,g,E,F)),512&n.flags&&(n.check=a(n.check,p,E,g)),v-=E,g+=E,n.length-=E),n.length))break e;n.length=0,n.mode=7;case 7:if(2048&n.flags){if(v===0)break e;for(E=0;F=p[g+ E++],n.head&&F&&n.length<65536&&(n.head.name+=String.fromCharCode(F)),F&&E<v;);if(512&n.flags&&(n.check=a(n.check,p,E,g)),v-=E,g+=E,F)break e}else n.head&&(n.head.name=null);n.length=0,n.mode=8;case 8:if(4096&n.flags){if(v===0)break e;for(E=0;F=p[g+ E++],n.head&&F&&n.length<65536&&(n.head.comment+=String.fromCharCode(F)),F&&E<v;);if(512&n.flags&&(n.check=a(n.check,p,E,g)),v-=E,g+=E,F)break e}else n.head&&(n.head.comment=null);n.mode=9;case 9:if(512&n.flags){for(;x<16;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(b!==(65535&n.check)){e.msg=`header crc mismatch`,n.mode=30;break}x=b=0}n.head&&(n.head.hcrc=n.flags>>9&1,n.head.done=!0),e.adler=n.check=0,n.mode=12;break;case 10:for(;x<32;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}e.adler=n.check=h(b),x=b=0,n.mode=11;case 11:if(n.havedict===0)return e.next_out=_,e.avail_out=y,e.next_in=g,e.avail_in=v,n.hold=b,n.bits=x,2;e.adler=n.check=1,n.mode=12;case 12:if(t===5||t===6)break e;case 13:if(n.last){b>>>=7&x,x-=7&x,n.mode=27;break}for(;x<3;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}switch(n.last=1&b,--x,3&(b>>>=1)){case 0:n.mode=14;break;case 1:if(w(n),n.mode=20,t!==6)break;b>>>=2,x-=2;break e;case 2:n.mode=17;break;case 3:e.msg=`invalid block type`,n.mode=30}b>>>=2,x-=2;break;case 14:for(b>>>=7&x,x-=7&x;x<32;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if((65535&b)!=(b>>>16^65535)){e.msg=`invalid stored block lengths`,n.mode=30;break}if(n.length=65535&b,x=b=0,n.mode=15,t===6)break e;case 15:n.mode=16;case 16:if(E=n.length){if(v<E&&(E=v),y<E&&(E=y),E===0)break e;r.arraySet(m,p,g,E,_),v-=E,g+=E,y-=E,_+=E,n.length-=E;break}n.mode=12;break;case 17:for(;x<14;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(n.nlen=257+(31&b),b>>>=5,x-=5,n.ndist=1+(31&b),b>>>=5,x-=5,n.ncode=4+(15&b),b>>>=4,x-=4,286<n.nlen||30<n.ndist){e.msg=`too many length or distance symbols`,n.mode=30;break}n.have=0,n.mode=18;case 18:for(;n.have<n.ncode;){for(;x<3;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}n.lens[ee[n.have++]]=7&b,b>>>=3,x-=3}for(;n.have<19;)n.lens[ee[n.have++]]=0;if(n.lencode=n.lendyn,n.lenbits=7,L={bits:n.lenbits},I=s(0,n.lens,0,19,n.lencode,0,n.work,L),n.lenbits=L.bits,I){e.msg=`invalid code lengths set`,n.mode=30;break}n.have=0,n.mode=19;case 19:for(;n.have<n.nlen+n.ndist;){for(;A=(z=n.lencode[b&(1<<n.lenbits)-1])>>>16&255,j=65535&z,!((k=z>>>24)<=x);){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(j<16)b>>>=k,x-=k,n.lens[n.have++]=j;else{if(j===16){for(R=k+2;x<R;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(b>>>=k,x-=k,n.have===0){e.msg=`invalid bit length repeat`,n.mode=30;break}F=n.lens[n.have-1],E=3+(3&b),b>>>=2,x-=2}else if(j===17){for(R=k+3;x<R;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}x-=k,F=0,E=3+(7&(b>>>=k)),b>>>=3,x-=3}else{for(R=k+7;x<R;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}x-=k,F=0,E=11+(127&(b>>>=k)),b>>>=7,x-=7}if(n.have+E>n.nlen+n.ndist){e.msg=`invalid bit length repeat`,n.mode=30;break}for(;E--;)n.lens[n.have++]=F}}if(n.mode===30)break;if(n.lens[256]===0){e.msg=`invalid code -- missing end-of-block`,n.mode=30;break}if(n.lenbits=9,L={bits:n.lenbits},I=s(c,n.lens,0,n.nlen,n.lencode,0,n.work,L),n.lenbits=L.bits,I){e.msg=`invalid literal/lengths set`,n.mode=30;break}if(n.distbits=6,n.distcode=n.distdyn,L={bits:n.distbits},I=s(l,n.lens,n.nlen,n.ndist,n.distcode,0,n.work,L),n.distbits=L.bits,I){e.msg=`invalid distances set`,n.mode=30;break}if(n.mode=20,t===6)break e;case 20:n.mode=21;case 21:if(6<=v&&258<=y){e.next_out=_,e.avail_out=y,e.next_in=g,e.avail_in=v,n.hold=b,n.bits=x,o(e,C),_=e.next_out,m=e.output,y=e.avail_out,g=e.next_in,p=e.input,v=e.avail_in,b=n.hold,x=n.bits,n.mode===12&&(n.back=-1);break}for(n.back=0;A=(z=n.lencode[b&(1<<n.lenbits)-1])>>>16&255,j=65535&z,!((k=z>>>24)<=x);){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(A&&!(240&A)){for(M=k,N=A,P=j;A=(z=n.lencode[P+((b&(1<<M+N)-1)>>M)])>>>16&255,j=65535&z,!(M+(k=z>>>24)<=x);){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}b>>>=M,x-=M,n.back+=M}if(b>>>=k,x-=k,n.back+=k,n.length=j,A===0){n.mode=26;break}if(32&A){n.back=-1,n.mode=12;break}if(64&A){e.msg=`invalid literal/length code`,n.mode=30;break}n.extra=15&A,n.mode=22;case 22:if(n.extra){for(R=n.extra;x<R;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}n.length+=b&(1<<n.extra)-1,b>>>=n.extra,x-=n.extra,n.back+=n.extra}n.was=n.length,n.mode=23;case 23:for(;A=(z=n.distcode[b&(1<<n.distbits)-1])>>>16&255,j=65535&z,!((k=z>>>24)<=x);){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(!(240&A)){for(M=k,N=A,P=j;A=(z=n.distcode[P+((b&(1<<M+N)-1)>>M)])>>>16&255,j=65535&z,!(M+(k=z>>>24)<=x);){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}b>>>=M,x-=M,n.back+=M}if(b>>>=k,x-=k,n.back+=k,64&A){e.msg=`invalid distance code`,n.mode=30;break}n.offset=j,n.extra=15&A,n.mode=24;case 24:if(n.extra){for(R=n.extra;x<R;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}n.offset+=b&(1<<n.extra)-1,b>>>=n.extra,x-=n.extra,n.back+=n.extra}if(n.offset>n.dmax){e.msg=`invalid distance too far back`,n.mode=30;break}n.mode=25;case 25:if(y===0)break e;if(E=C-y,n.offset>E){if((E=n.offset-E)>n.whave&&n.sane){e.msg=`invalid distance too far back`,n.mode=30;break}D=E>n.wnext?(E-=n.wnext,n.wsize-E):n.wnext-E,E>n.length&&(E=n.length),O=n.window}else O=m,D=_-n.offset,E=n.length;for(y<E&&(E=y),y-=E,n.length-=E;m[_++]=O[D++],--E;);n.length===0&&(n.mode=21);break;case 26:if(y===0)break e;m[_++]=n.length,y--,n.mode=21;break;case 27:if(n.wrap){for(;x<32;){if(v===0)break e;v--,b|=p[g++]<<x,x+=8}if(C-=y,e.total_out+=C,n.total+=C,C&&(e.adler=n.check=n.flags?a(n.check,m,C,_-C):i(n.check,m,C,_-C)),C=y,(n.flags?b:h(b))!==n.check){e.msg=`incorrect data check`,n.mode=30;break}x=b=0}n.mode=28;case 28:if(n.wrap&&n.flags){for(;x<32;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(b!==(4294967295&n.total)){e.msg=`incorrect length check`,n.mode=30;break}x=b=0}n.mode=29;case 29:I=1;break e;case 30:I=-3;break e;case 31:return-4;case 32:default:return d}return e.next_out=_,e.avail_out=y,e.next_in=g,e.avail_in=v,n.hold=b,n.bits=x,(n.wsize||C!==e.avail_out&&n.mode<30&&(n.mode<27||t!==4))&&T(e,e.output,e.next_out,C-e.avail_out)?(n.mode=31,-4):(S-=e.avail_in,C-=e.avail_out,e.total_in+=S,e.total_out+=C,n.total+=C,n.wrap&&C&&(e.adler=n.check=n.flags?a(n.check,m,C,e.next_out-C):i(n.check,m,C,e.next_out-C)),e.data_type=n.bits+(n.last?64:0)+(n.mode===12?128:0)+(n.mode===20||n.mode===15?256:0),(S==0&&C===0||t===4)&&I===u&&(I=-5),I)},n.inflateEnd=function(e){if(!e||!e.state)return d;var t=e.state;return t.window&&=null,e.state=null,u},n.inflateGetHeader=function(e,t){var n;return e&&e.state&&2&(n=e.state).wrap?((n.head=t).done=!1,u):d},n.inflateSetDictionary=function(e,t){var n,r=t.length;return e&&e.state?(n=e.state).wrap!==0&&n.mode!==11?d:n.mode===11&&i(1,t,r,0)!==n.check?-3:T(e,t,r,r)?(n.mode=31,-4):(n.havedict=1,u):d},n.inflateInfo=`pako inflate (from Nodeca project)`},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,t,n){var r=e(`../utils/common`),i=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],a=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],o=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],s=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];t.exports=function(e,t,n,c,l,u,d,f){var p,m,h,g,_,v,y,b,x,S=f.bits,C=0,w=0,T=0,E=0,D=0,O=0,k=0,A=0,j=0,M=0,N=null,P=0,F=new r.Buf16(16),I=new r.Buf16(16),L=null,R=0;for(C=0;C<=15;C++)F[C]=0;for(w=0;w<c;w++)F[t[n+w]]++;for(D=S,E=15;1<=E&&F[E]===0;E--);if(E<D&&(D=E),E===0)return l[u++]=20971520,l[u++]=20971520,f.bits=1,0;for(T=1;T<E&&F[T]===0;T++);for(D<T&&(D=T),C=A=1;C<=15;C++)if(A<<=1,(A-=F[C])<0)return-1;if(0<A&&(e===0||E!==1))return-1;for(I[1]=0,C=1;C<15;C++)I[C+1]=I[C]+F[C];for(w=0;w<c;w++)t[n+w]!==0&&(d[I[t[n+w]]++]=w);if(v=e===0?(N=L=d,19):e===1?(N=i,P-=257,L=a,R-=257,256):(N=o,L=s,-1),C=T,_=u,k=w=M=0,h=-1,g=(j=1<<(O=D))-1,e===1&&852<j||e===2&&592<j)return 1;for(;;){for(y=C-k,x=d[w]<v?(b=0,d[w]):d[w]>v?(b=L[R+d[w]],N[P+d[w]]):(b=96,0),p=1<<C-k,T=m=1<<O;l[_+(M>>k)+(m-=p)]=y<<24|b<<16|x|0,m!==0;);for(p=1<<C-1;M&p;)p>>=1;if(p===0?M=0:(M&=p-1,M+=p),w++,--F[C]==0){if(C===E)break;C=t[n+d[w]]}if(D<C&&(M&g)!==h){for(k===0&&(k=D),_+=T,A=1<<(O=C-k);O+k<E&&!((A-=F[O+k])<=0);)O++,A<<=1;if(j+=1<<O,e===1&&852<j||e===2&&592<j)return 1;l[h=M&g]=D<<24|O<<16|_-u|0}}return M!==0&&(l[_+M]=C-k<<24|4194304),f.bits=D,0}},{"../utils/common":41}],51:[function(e,t,n){t.exports={2:`need dictionary`,1:`stream end`,0:``,"-1":`file error`,"-2":`stream error`,"-3":`data error`,"-4":`insufficient memory`,"-5":`buffer error`,"-6":`incompatible version`}},{}],52:[function(e,t,n){var r=e(`../utils/common`),i=0,a=1;function o(e){for(var t=e.length;0<=--t;)e[t]=0}var s=0,c=29,l=256,u=l+1+c,d=30,f=19,p=2*u+1,m=15,h=16,g=7,_=256,v=16,y=17,b=18,x=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],S=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],C=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],w=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],T=Array(2*(u+2));o(T);var E=Array(2*d);o(E);var D=Array(512);o(D);var O=Array(256);o(O);var k=Array(c);o(k);var A,j,M,N=Array(d);function P(e,t,n,r,i){this.static_tree=e,this.extra_bits=t,this.extra_base=n,this.elems=r,this.max_length=i,this.has_stree=e&&e.length}function F(e,t){this.dyn_tree=e,this.max_code=0,this.stat_desc=t}function I(e){return e<256?D[e]:D[256+(e>>>7)]}function L(e,t){e.pending_buf[e.pending++]=255&t,e.pending_buf[e.pending++]=t>>>8&255}function R(e,t,n){e.bi_valid>h-n?(e.bi_buf|=t<<e.bi_valid&65535,L(e,e.bi_buf),e.bi_buf=t>>h-e.bi_valid,e.bi_valid+=n-h):(e.bi_buf|=t<<e.bi_valid&65535,e.bi_valid+=n)}function z(e,t,n){R(e,n[2*t],n[2*t+1])}function B(e,t){for(var n=0;n|=1&e,e>>>=1,n<<=1,0<--t;);return n>>>1}function ee(e,t,n){var r,i,a=Array(m+1),o=0;for(r=1;r<=m;r++)a[r]=o=o+n[r-1]<<1;for(i=0;i<=t;i++){var s=e[2*i+1];s!==0&&(e[2*i]=B(a[s]++,s))}}function te(e){var t;for(t=0;t<u;t++)e.dyn_ltree[2*t]=0;for(t=0;t<d;t++)e.dyn_dtree[2*t]=0;for(t=0;t<f;t++)e.bl_tree[2*t]=0;e.dyn_ltree[2*_]=1,e.opt_len=e.static_len=0,e.last_lit=e.matches=0}function ne(e){8<e.bi_valid?L(e,e.bi_buf):0<e.bi_valid&&(e.pending_buf[e.pending++]=e.bi_buf),e.bi_buf=0,e.bi_valid=0}function re(e,t,n,r){var i=2*t,a=2*n;return e[i]<e[a]||e[i]===e[a]&&r[t]<=r[n]}function ie(e,t,n){for(var r=e.heap[n],i=n<<1;i<=e.heap_len&&(i<e.heap_len&&re(t,e.heap[i+1],e.heap[i],e.depth)&&i++,!re(t,r,e.heap[i],e.depth));)e.heap[n]=e.heap[i],n=i,i<<=1;e.heap[n]=r}function ae(e,t,n){var r,i,a,o,s=0;if(e.last_lit!==0)for(;r=e.pending_buf[e.d_buf+2*s]<<8|e.pending_buf[e.d_buf+2*s+1],i=e.pending_buf[e.l_buf+s],s++,r===0?z(e,i,t):(z(e,(a=O[i])+l+1,t),(o=x[a])!==0&&R(e,i-=k[a],o),z(e,a=I(--r),n),(o=S[a])!==0&&R(e,r-=N[a],o)),s<e.last_lit;);z(e,_,t)}function oe(e,t){var n,r,i,a=t.dyn_tree,o=t.stat_desc.static_tree,s=t.stat_desc.has_stree,c=t.stat_desc.elems,l=-1;for(e.heap_len=0,e.heap_max=p,n=0;n<c;n++)a[2*n]===0?a[2*n+1]=0:(e.heap[++e.heap_len]=l=n,e.depth[n]=0);for(;e.heap_len<2;)a[2*(i=e.heap[++e.heap_len]=l<2?++l:0)]=1,e.depth[i]=0,e.opt_len--,s&&(e.static_len-=o[2*i+1]);for(t.max_code=l,n=e.heap_len>>1;1<=n;n--)ie(e,a,n);for(i=c;n=e.heap[1],e.heap[1]=e.heap[e.heap_len--],ie(e,a,1),r=e.heap[1],e.heap[--e.heap_max]=n,e.heap[--e.heap_max]=r,a[2*i]=a[2*n]+a[2*r],e.depth[i]=(e.depth[n]>=e.depth[r]?e.depth[n]:e.depth[r])+1,a[2*n+1]=a[2*r+1]=i,e.heap[1]=i++,ie(e,a,1),2<=e.heap_len;);e.heap[--e.heap_max]=e.heap[1],function(e,t){var n,r,i,a,o,s,c=t.dyn_tree,l=t.max_code,u=t.stat_desc.static_tree,d=t.stat_desc.has_stree,f=t.stat_desc.extra_bits,h=t.stat_desc.extra_base,g=t.stat_desc.max_length,_=0;for(a=0;a<=m;a++)e.bl_count[a]=0;for(c[2*e.heap[e.heap_max]+1]=0,n=e.heap_max+1;n<p;n++)g<(a=c[2*c[2*(r=e.heap[n])+1]+1]+1)&&(a=g,_++),c[2*r+1]=a,l<r||(e.bl_count[a]++,o=0,h<=r&&(o=f[r-h]),s=c[2*r],e.opt_len+=s*(a+o),d&&(e.static_len+=s*(u[2*r+1]+o)));if(_!==0){do{for(a=g-1;e.bl_count[a]===0;)a--;e.bl_count[a]--,e.bl_count[a+1]+=2,e.bl_count[g]--,_-=2}while(0<_);for(a=g;a!==0;a--)for(r=e.bl_count[a];r!==0;)l<(i=e.heap[--n])||(c[2*i+1]!==a&&(e.opt_len+=(a-c[2*i+1])*c[2*i],c[2*i+1]=a),r--)}}(e,t),ee(a,l,e.bl_count)}function se(e,t,n){var r,i,a=-1,o=t[1],s=0,c=7,l=4;for(o===0&&(c=138,l=3),t[2*(n+1)+1]=65535,r=0;r<=n;r++)i=o,o=t[2*(r+1)+1],++s<c&&i===o||(s<l?e.bl_tree[2*i]+=s:i===0?s<=10?e.bl_tree[2*y]++:e.bl_tree[2*b]++:(i!==a&&e.bl_tree[2*i]++,e.bl_tree[2*v]++),a=i,l=(s=0)===o?(c=138,3):i===o?(c=6,3):(c=7,4))}function ce(e,t,n){var r,i,a=-1,o=t[1],s=0,c=7,l=4;for(o===0&&(c=138,l=3),r=0;r<=n;r++)if(i=o,o=t[2*(r+1)+1],!(++s<c&&i===o)){if(s<l)for(;z(e,i,e.bl_tree),--s!=0;);else i===0?s<=10?(z(e,y,e.bl_tree),R(e,s-3,3)):(z(e,b,e.bl_tree),R(e,s-11,7)):(i!==a&&(z(e,i,e.bl_tree),s--),z(e,v,e.bl_tree),R(e,s-3,2));a=i,l=(s=0)===o?(c=138,3):i===o?(c=6,3):(c=7,4)}}o(N);var le=!1;function ue(e,t,n,i){R(e,(s<<1)+(i?1:0),3),function(e,t,n,i){ne(e),i&&(L(e,n),L(e,~n)),r.arraySet(e.pending_buf,e.window,t,n,e.pending),e.pending+=n}(e,t,n,!0)}n._tr_init=function(e){le||=(function(){var e,t,n,r,i,a=Array(m+1);for(r=n=0;r<c-1;r++)for(k[r]=n,e=0;e<1<<x[r];e++)O[n++]=r;for(O[n-1]=r,r=i=0;r<16;r++)for(N[r]=i,e=0;e<1<<S[r];e++)D[i++]=r;for(i>>=7;r<d;r++)for(N[r]=i<<7,e=0;e<1<<S[r]-7;e++)D[256+ i++]=r;for(t=0;t<=m;t++)a[t]=0;for(e=0;e<=143;)T[2*e+1]=8,e++,a[8]++;for(;e<=255;)T[2*e+1]=9,e++,a[9]++;for(;e<=279;)T[2*e+1]=7,e++,a[7]++;for(;e<=287;)T[2*e+1]=8,e++,a[8]++;for(ee(T,u+1,a),e=0;e<d;e++)E[2*e+1]=5,E[2*e]=B(e,5);A=new P(T,x,l+1,u,m),j=new P(E,S,0,d,m),M=new P([],C,0,f,g)}(),!0),e.l_desc=new F(e.dyn_ltree,A),e.d_desc=new F(e.dyn_dtree,j),e.bl_desc=new F(e.bl_tree,M),e.bi_buf=0,e.bi_valid=0,te(e)},n._tr_stored_block=ue,n._tr_flush_block=function(e,t,n,r){var o,s,c=0;0<e.level?(e.strm.data_type===2&&(e.strm.data_type=function(e){var t,n=4093624447;for(t=0;t<=31;t++,n>>>=1)if(1&n&&e.dyn_ltree[2*t]!==0)return i;if(e.dyn_ltree[18]!==0||e.dyn_ltree[20]!==0||e.dyn_ltree[26]!==0)return a;for(t=32;t<l;t++)if(e.dyn_ltree[2*t]!==0)return a;return i}(e)),oe(e,e.l_desc),oe(e,e.d_desc),c=function(e){var t;for(se(e,e.dyn_ltree,e.l_desc.max_code),se(e,e.dyn_dtree,e.d_desc.max_code),oe(e,e.bl_desc),t=f-1;3<=t&&e.bl_tree[2*w[t]+1]===0;t--);return e.opt_len+=3*(t+1)+5+5+4,t}(e),o=e.opt_len+3+7>>>3,(s=e.static_len+3+7>>>3)<=o&&(o=s)):o=s=n+5,n+4<=o&&t!==-1?ue(e,t,n,r):e.strategy===4||s===o?(R(e,2+(r?1:0),3),ae(e,T,E)):(R(e,4+(r?1:0),3),function(e,t,n,r){var i;for(R(e,t-257,5),R(e,n-1,5),R(e,r-4,4),i=0;i<r;i++)R(e,e.bl_tree[2*w[i]+1],3);ce(e,e.dyn_ltree,t-1),ce(e,e.dyn_dtree,n-1)}(e,e.l_desc.max_code+1,e.d_desc.max_code+1,c+1),ae(e,e.dyn_ltree,e.dyn_dtree)),te(e),r&&ne(e)},n._tr_tally=function(e,t,n){return e.pending_buf[e.d_buf+2*e.last_lit]=t>>>8&255,e.pending_buf[e.d_buf+2*e.last_lit+1]=255&t,e.pending_buf[e.l_buf+e.last_lit]=255&n,e.last_lit++,t===0?e.dyn_ltree[2*n]++:(e.matches++,t--,e.dyn_ltree[2*(O[n]+l+1)]++,e.dyn_dtree[2*I(t)]++),e.last_lit===e.lit_bufsize-1},n._tr_align=function(e){R(e,2,3),z(e,_,T),function(e){e.bi_valid===16?(L(e,e.bi_buf),e.bi_buf=0,e.bi_valid=0):8<=e.bi_valid&&(e.pending_buf[e.pending++]=255&e.bi_buf,e.bi_buf>>=8,e.bi_valid-=8)}(e)}},{"../utils/common":41}],53:[function(e,t,n){t.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg=``,this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,t,n){(function(e){(function(e,t){if(!e.setImmediate){var n,r,i,a,o=1,s={},c=!1,l=e.document,u=Object.getPrototypeOf&&Object.getPrototypeOf(e);u=u&&u.setTimeout?u:e,n={}.toString.call(e.process)===`[object process]`?function(e){process.nextTick(function(){f(e)})}:function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage(``,`*`),e.onmessage=n,t}}()?(a=`setImmediate$`+Math.random()+`$`,e.addEventListener?e.addEventListener(`message`,p,!1):e.attachEvent(`onmessage`,p),function(t){e.postMessage(a+t,`*`)}):e.MessageChannel?((i=new MessageChannel).port1.onmessage=function(e){f(e.data)},function(e){i.port2.postMessage(e)}):l&&`onreadystatechange`in l.createElement(`script`)?(r=l.documentElement,function(e){var t=l.createElement(`script`);t.onreadystatechange=function(){f(e),t.onreadystatechange=null,r.removeChild(t),t=null},r.appendChild(t)}):function(e){setTimeout(f,0,e)},u.setImmediate=function(e){typeof e!=`function`&&(e=Function(``+e));for(var t=Array(arguments.length-1),r=0;r<t.length;r++)t[r]=arguments[r+1];return s[o]={callback:e,args:t},n(o),o++},u.clearImmediate=d}function d(e){delete s[e]}function f(e){if(c)setTimeout(f,0,e);else{var n=s[e];if(n){c=!0;try{(function(e){var n=e.callback,r=e.args;switch(r.length){case 0:n();break;case 1:n(r[0]);break;case 2:n(r[0],r[1]);break;case 3:n(r[0],r[1],r[2]);break;default:n.apply(t,r)}})(n)}finally{d(e),c=!1}}}}function p(t){t.source===e&&typeof t.data==`string`&&t.data.indexOf(a)===0&&f(+t.data.slice(a.length))}})(typeof self>`u`?e===void 0?this:e:self)}).call(this,typeof global<`u`?global:typeof self<`u`?self:typeof window<`u`?window:{})},{}]},{},[10])(10)})})),Cc=c(xc(),1),wc=c(Sc(),1),Tc={width:18119,height:1080},Ec=Tc.width/Tc.height,Dc=`l21.l4.l1.l9.l10.l11.l23.l12.l13.l14.l19.l22.l20.l2.l3.l5.l6.l7.l8.l25.l26.l27.l28.l29.l30.l31.l32`.split(`.`),Oc={l21:`360 HDRI Pano`,l4:`Gradient`,l1:`Plasma`,l9:`Cells`,l10:`Smoke`,l11:`Marble`,l23:`Chrome Liquid`,l12:`Pixels`,l13:`Wormholes`,l14:`Waveforms`,l19:`Checkerboard`,l22:`Wave Grid`,l20:`Circles`,l2:`Grid`,l3:`Pulse`,l5:`Rain`,l6:`Stars`,l7:`Scanlines`,l8:`Image`,l25:`Custom Text`,l26:`VU Meter`,l27:`Voronoi`,l28:`Mandelbrot`,l29:`Neon Lightning`,l30:`Clock`,l31:`Lissajous`,l32:`Particles`},kc={presetName:`Retro Master`,cycles:1,duration:30,fps:60,exportScale:.5,showSeams:!0,splitView:!1,showGuide:!1,isolateWall:null,layerOrder:[...Dc],l1_en:!1,l1_opacity:1,l1_blend:1,l1_scale:5,l1_stretch:5,l1_rot:0,l1_panX:0,l1_motion:1,l1_con:.5,l1_blur:.1,l1_colA:`#1a0033`,l1_colB:`#00ffd0`,l9_en:!1,l9_opacity:1,l9_blend:1,l9_density:20,l9_size:.5,l9_speed:1,l9_panX:0,l9_choke:0,l9_blur:.1,l9_colA:`#001144`,l9_colB:`#ffb000`,l10_en:!1,l10_opacity:1,l10_blend:1,l10_density:5,l10_size:.5,l10_speed:1,l10_panX:0,l10_detail:5,l10_blur:.1,l10_colA:`#ff5500`,l10_colB:`#220000`,l11_en:!1,l11_opacity:1,l11_blend:1,l11_scale:5,l11_warp:4,l11_speed:1,l11_panX:0,l11_blur:.1,l11_colA:`#00ff88`,l11_colB:`#002244`,l12_en:!1,l12_opacity:1,l12_blend:1,l12_density:40,l12_size:.5,l12_speed:2,l12_panX:0,l12_blur:0,l12_colA:`#ffb000`,l12_colB:`#000000`,l23_en:!1,l23_opacity:1,l23_blend:0,l23_scale:.5,l23_depth:.8,l23_turb:.1,l23_speed:1,l23_speedX:0,l23_panX:0,l23_colTop:`#ffffff`,l23_colMid:`#888888`,l23_colBot:`#000000`,l2_en:!1,l2_opacity:1,l2_blend:1,l2_scale:50,l2_rot:0,l2_speed:1,l2_panX:0,l2_blur:.01,l2_col:`#ffb000`,l3_en:!1,l3_opacity:1,l3_blend:1,l3_freq:20,l3_wave:3,l3_speed:2,l3_panX:0,l3_blur:.1,l3_col:`#ff00ff`,l13_en:!1,l13_opacity:1,l13_blend:1,l13_scale:10,l13_depth:2,l13_speed:2,l13_panX:0,l13_blur:0,l13_colA:`#ff00ff`,l13_colB:`#000000`,l14_en:!1,l14_opacity:1,l14_blend:1,l14_petals:3,l14_size:.3,l14_speed:1,l14_panX:0,l14_thick:.02,l14_blur:0,l14_col:`#00ffff`,l19_en:!1,l19_opacity:1,l19_blend:0,l19_scale:10,l19_skew:0,l19_speed:0,l19_speedX:0,l19_panX:0,l19_panY:0,l19_squeeze:0,l19_topEdge:1,l19_botEdge:0,l19_cropT:0,l19_cropB:0,l19_colA:`#000000`,l19_colB:`#ffb000`,l22_en:!1,l22_opacity:1,l22_blend:1,l22_countX:0,l22_countY:15,l22_thick:.05,l22_speed:1,l22_amp:.1,l22_freq:5,l22_panX:0,l22_panY:0,l22_topEdge:1,l22_botEdge:0,l22_squeeze:0,l22_taper:.9,l22_blur:.01,l22_col:`#00ffff`,l4_en:!1,l4_opacity:1,l4_blend:1,l4_rot:0,l4_repeat:1,l4_panX:0,l4_col1:`#ff0000`,l4_col2:`#00ff00`,l4_col3:`#0000ff`,l5_en:!1,l5_opacity:1,l5_blend:1,l5_density:50,l5_rot:0,l5_speed:2,l5_panX:0,l5_width:50,l5_length:1,l5_blur:.02,l5_col:`#ffb000`,l6_en:!1,l6_opacity:1,l6_blend:1,l6_scale:20,l6_twinkle:5,l6_panX:0,l6_blur:.05,l6_colRand:0,l6_col:`#ffb000`,l7_en:!1,l7_opacity:1,l7_blend:2,l7_density:100,l7_speed:1,l7_panX:0,l7_blur:.01,l7_col:`#ffffff`,l8_en:!1,l8_opacity:1,l8_blend:1,l8_scale:1,l8_posX:0,l8_posY:0,l8_speed:0,l8_col:`#ffffff`,l21_en:!1,l21_opacity:1,l21_blend:0,l21_scale:1,l21_panX:0,l21_posY:0,l21_speed:0,l21_blur:0,l21_col:`#ffffff`,l20_en:!1,l20_opacity:1,l20_blend:1,l20_density:2,l20_size:.5,l20_speed:2,l20_panX:0,l20_blur:.01,l20_colRand:0,l20_col:`#ffb000`,l25_en:!1,l25_opacity:1,l25_blend:1,l25_scrollSpeed:1,l25_posY:.5,l25_size:.15,l25_tracking:0,l25_lineSpacing:1.2,l25_waveAmp:0,l25_waveFreq:3,l25_waveSpeed:1,l25_skewX:0,l25_glitch:0,l25_outline:0,l25_shadow:0,l25_panX:0,l25_col:`#ffb000`,l25_text:`RETRO MASTER LOOP`,l25_font:`Courier New`,l25_fontStyle:`bold`,l25_align:`center`,l26_en:!1,l26_opacity:1,l26_blend:1,l26_barW:8,l26_barGap:2,l26_hBars:8,l26_hBarH:2,l26_noiseAmt:.8,l26_noiseSpeed:3,l26_glowAmt:.6,l26_squeeze:.5,l26_gradient:!0,l26_topEdge:1,l26_botEdge:0,l26_colBot:`#00ff44`,l26_colMid:`#ffee00`,l26_colTop:`#ff2200`,l15_en:!1,l15_segments:6,l15_speed:1,l15_zoom:1,l15_offX:0,l15_offY:0,l16_en:!1,l16_amount:.05,l17_en:!1,l17_scale:100,l17_amount:.1,l17_speed:1,l18_en:!1,l18_scale:10,l18_amount:1,l18_col:`#000000`,l24_en:!1,l24_density:800,l24_intensity:1,l24_skew:0,l27_en:!1,l27_opacity:1,l27_blend:1,l27_density:10,l27_size:.3,l27_speed:1,l27_panX:0,l27_choke:0,l27_blur:.05,l27_colA:`#00ffcc`,l27_colB:`#000000`,l28_en:!1,l28_opacity:1,l28_blend:1,l28_zoom:.003,l28_panX:-.5,l28_panY:0,l28_iter:64,l28_julia:0,l28_jx:.355,l28_jy:.355,l28_speed:.1,l28_colA:`#ff6600`,l28_colB:`#001133`,l29_en:!1,l29_opacity:1,l29_blend:1,l29_density:5,l29_speed:2,l29_panX:0,l29_glow:.6,l29_thick:.012,l29_chaos:.5,l29_col:`#00aaff`,l30_en:!1,l30_opacity:1,l30_blend:1,l30_size:.12,l30_posX:.5,l30_posY:.5,l30_showDate:!1,l30_showFrames:!1,l30_col:`#00ff44`,l31_en:!1,l31_opacity:1,l31_blend:1,l31_freqX:3,l31_freqY:2,l31_speed:1,l31_trails:.92,l31_thick:2,l31_phase:0,l31_col:`#ff00ff`,l32_en:!1,l32_opacity:1,l32_blend:1,l32_count:200,l32_speed:1.5,l32_size:3,l32_trails:.93,l32_gravity:.3,l32_spread:.5,l32_turbulence:0,l32_spin:0,l32_burst:0,l32_glow:.5,l32_sizeRand:.5,l32_lifespan:1,l32_emitX:.5,l32_emitY:.5,l32_col:`#ffb000`,l32_colB:`#ff4400`,l33_en:!1,l33_amount:80,l33_aspect:1,l34_en:!1,l34_amount:.008,l34_angle:0};`l1.l2.l3.l4.l5.l6.l7.l8.l9.l10.l11.l12.l13.l14.l15.l16.l17.l18.l19.l20.l21.l22.l23.l24.l25.l26.l27.l28.l29.l30.l31.l32.l33.l34`.split(`.`).forEach(e=>{kc[`${e}_wN`]=!0,kc[`${e}_wE`]=!0,kc[`${e}_wS`]=!0,kc[`${e}_wW`]=!0});var Ac={ocean:{l22_en:!0,l22_countX:0,l22_countY:24,l22_amp:.15,l22_freq:3,l22_speed:1,l22_taper:.95,l22_thick:.08,l22_col:`#00aaff`,l22_blend:0,l22_opacity:1,l4_en:!0,l4_col1:`#000511`,l4_col2:`#002244`,l4_col3:`#000000`,l4_blend:0,l4_opacity:1,l6_en:!0,l6_scale:30,l6_twinkle:3,l6_col:`#ffffff`,l6_blend:1,l6_opacity:.7},mercury:{l23_en:!0,l23_scale:.25,l23_depth:1.2,l23_speed:.2,l23_speedX:.1,l23_colTop:`#ffffff`,l23_colMid:`#333333`,l23_colBot:`#000000`,l23_blend:0,l23_opacity:1,l16_en:!0,l16_amount:.015,l17_en:!0,l17_scale:150,l17_amount:.02,l17_speed:.5},synthwave:{l4_en:!0,l4_col1:`#0a0022`,l4_col2:`#ff0077`,l4_col3:`#ff7700`,l4_rot:0,l4_blend:0,l4_opacity:1,l22_en:!0,l22_countX:20,l22_countY:15,l22_amp:0,l22_freq:1,l22_speed:1.5,l22_taper:0,l22_thick:.03,l22_col:`#ff00ff`,l22_botEdge:0,l22_topEdge:.5,l22_blend:1,l22_opacity:1,l6_en:!0,l6_scale:40,l6_col:`#ffffff`,l6_blend:1,l6_opacity:.8,l6_wS:!1,l6_wW:!1,l6_wE:!1,l6_wN:!0,l7_en:!0,l7_density:120,l7_speed:.5,l7_col:`#ffffff`,l7_blend:2,l7_opacity:.3},cathedral:{l19_en:!0,l19_scale:12,l19_squeeze:3,l19_speed:.5,l19_colA:`#000000`,l19_colB:`#00ffcc`,l19_blend:0,l19_opacity:1,l13_en:!0,l13_scale:6,l13_depth:2.5,l13_speed:-1,l13_colA:`#ff0055`,l13_colB:`#000000`,l13_blend:1,l13_opacity:1,l15_en:!0,l15_segments:8,l15_speed:.2,l16_en:!0,l16_amount:.04},glitch:{l12_en:!0,l12_density:60,l12_size:.7,l12_speed:8,l12_colA:`#00ff33`,l12_colB:`#001100`,l12_blend:0,l12_opacity:1,l7_en:!0,l7_density:200,l7_speed:-2,l7_col:`#ffffff`,l7_blend:2,l7_opacity:.8,l17_en:!0,l17_amount:.25,l17_scale:60,l17_speed:4,l16_en:!0,l16_amount:.08}},jc={silicon_forest:[`#007a3f`,`#31edae`,`#f4730a`,`#2a2a2a`,`#ffffff`],vaporwave:[`#0a0022`,`#ff00ff`,`#00e5ff`,`#ff8800`,`#e0e0e0`],cyberpunk:[`#ff0077`,`#00ffff`,`#ffea00`,`#110022`,`#ffffff`]},X=JSON.parse(JSON.stringify(kc)),Mc={l21:`if(u_l21_en>0.5){float wM=getWallMask(uv.x,u_l21_wN,u_l21_wE,u_l21_wS,u_l21_wW);if(wM>0.0){float v21_sp=floor((u_l21_speed*5.0)+0.5);float v21_u=fract((uv.x+u_l21_panX)+p*v21_sp);float v21_vScale=(u_l21_ImgAspect/uAspect)/max(0.01,u_l21_scale);float v21_v=u_l21_posY+(uv.y-0.5)*v21_vScale+0.5;if(v21_v>=0.0&&v21_v<=1.0){vec4 v21_img=texture2D(u_l21_Tex,vec2(v21_u,v21_v));color=blend(color,v21_img.rgb*u_l21_col,u_l21_blend,v21_img.a*u_l21_opacity*wM);}}}`,l4:`if(u_l4_en>0.5){float wM=getWallMask(uv.x,u_l4_wN,u_l4_wE,u_l4_wS,u_l4_wW);if(wM>0.0){float v4_ang=u_l4_rot*TWO_PI/360.0;vec2 v4_ctr=vec2(uv.x+u_l4_panX-0.5,uv.y-0.5);float v4_proj=dot(v4_ctr,vec2(cos(v4_ang),sin(v4_ang)));float v4_t=fract((v4_proj+0.5)*u_l4_repeat);float v4_t2=abs(v4_t*2.0-1.0);vec3 v4_gCol=mix(u_l4_col1,u_l4_col2,smoothstep(0.0,0.5,v4_t2));color=blend(color,mix(v4_gCol,u_l4_col3,smoothstep(0.5,1.0,v4_t2)),u_l4_blend,u_l4_opacity*wM);}}`,l1:`if(u_l1_en>0.5){float wM=getWallMask(uv.x,u_l1_wN,u_l1_wE,u_l1_wS,u_l1_wW);if(wM>0.0){float v1_eX=uv.x+u_l1_panX;vec2 v1_pC=vec2(cos(v1_eX*TWO_PI),sin(v1_eX*TWO_PI));vec2 v1_rC=v1_pC*rot(u_l1_rot);float v1_spd=floor((u_l1_motion*5.0)+0.5)*TWO_PI;float v1_n=snoise(vec2(v1_rC.x*u_l1_scale+cos(p*v1_spd),uv.y*u_l1_stretch+sin(p*v1_spd)));vec3 v1_col=mix(u_l1_colA,u_l1_colB,smoothstep(u_l1_con-u_l1_blur,u_l1_con+u_l1_blur,v1_n));color=blend(color,v1_col,u_l1_blend,u_l1_opacity*wM);}}`,l9:`if(u_l9_en>0.5){float wM=getWallMask(uv.x,u_l9_wN,u_l9_wE,u_l9_wS,u_l9_wW);if(wM>0.0){float v9_eX=uv.x+u_l9_panX;vec2 v9_pC=vec2(cos(v9_eX*TWO_PI),sin(v9_eX*TWO_PI));float v9_spd=floor((u_l9_speed*5.0)+0.5)*TWO_PI;float v9_v=voronoi(vec2(v9_pC.x,uv.y)*u_l9_density,p*v9_spd);float v9_raw=sqrt(v9_v);float v9_chokeRaw=smoothstep(u_l9_choke*0.6,u_l9_choke*0.6+0.3,v9_raw);float v9_m=smoothstep(1.0-u_l9_size-u_l9_blur,1.0-u_l9_size+u_l9_blur+0.001,v9_chokeRaw);vec3 v9_col=mix(u_l9_colA,u_l9_colB,v9_m);color=blend(color,v9_col,u_l9_blend,u_l9_opacity*v9_m*wM);}}`,l10:`if(u_l10_en>0.5){float wM=getWallMask(uv.x,u_l10_wN,u_l10_wE,u_l10_wS,u_l10_wW);if(wM>0.0){float v10_eX=uv.x+u_l10_panX;vec2 v10_pC=vec2(cos(v10_eX*TWO_PI),sin(v10_eX*TWO_PI));float v10_spd=floor((u_l10_speed*10.0)+0.5);float v10_n1=fbm(vec2(v10_pC.x*u_l10_density,uv.y*u_l10_density)+vec2(p*v10_spd),u_l10_detail);float v10_n2=fbm(vec2(v10_pC.x*u_l10_density,uv.y*u_l10_density)+vec2((p-1.0)*v10_spd),u_l10_detail);float v10_n=mix(v10_n1,v10_n2,fade)*0.5+0.5;float v10_m=smoothstep(1.0-u_l10_size-u_l10_blur-0.01,1.0-u_l10_size+u_l10_blur+0.01,v10_n);vec3 v10_col=mix(u_l10_colA,u_l10_colB,v10_n);color=blend(color,v10_col,u_l10_blend,u_l10_opacity*v10_m*wM);}}`,l11:`if(u_l11_en>0.5){float wM=getWallMask(uv.x,u_l11_wN,u_l11_wE,u_l11_wS,u_l11_wW);if(wM>0.0){float v11_eX=uv.x+u_l11_panX;vec2 v11_pC=vec2(cos(v11_eX*TWO_PI),sin(v11_eX*TWO_PI));float v11_spd=floor((u_l11_speed*5.0)+0.5);vec2 v11_pos=vec2(v11_pC.x,uv.y)*u_l11_scale;float v11_x1=snoise(v11_pos+p*v11_spd);float v11_y1=snoise(v11_pos+vec2(5.2,1.3));float v11_n1=snoise(v11_pos+vec2(v11_x1,v11_y1)*u_l11_warp);float v11_x2=snoise(v11_pos+(p-1.0)*v11_spd);float v11_y2=snoise(v11_pos+vec2(5.2,1.3));float v11_n2=snoise(v11_pos+vec2(v11_x2,v11_y2)*u_l11_warp);float v11_n=smoothstep(0.0,u_l11_blur+0.01,mix(v11_n1,v11_n2,fade)*0.5+0.5);color=blend(color,mix(u_l11_colA,u_l11_colB,v11_n),u_l11_blend,u_l11_opacity*wM);}}`,l23:`if(u_l23_en>0.5){float wM=getWallMask(uv.x,u_l23_wN,u_l23_wE,u_l23_wS,u_l23_wW);if(wM>0.0){float v23_eX=uv.x+u_l23_panX;vec2 v23_pC=vec2(cos(v23_eX*TWO_PI),sin(v23_eX*TWO_PI));float v23_spY=floor((u_l23_speed*5.0)+0.5);float v23_spX=floor((u_l23_speedX*5.0)+0.5);vec2 v23_uv=vec2(v23_pC.x,uv.y)*u_l23_scale;vec2 tWarp1=vec2(p*1.0,p*1.0);vec2 tWarp2=vec2((p-1.0)*1.0,(p-1.0)*1.0);vec2 warpUv=v23_uv*1.0;float t1=mix(snoise(warpUv+tWarp1),snoise(warpUv+tWarp2),fade);float t2=mix(snoise(warpUv+vec2(5.2,1.3)+tWarp1),snoise(warpUv+vec2(5.2,1.3)+tWarp2),fade);vec2 warpedUv=v23_uv+vec2(t1,t2)*u_l23_turb;vec2 baseUv1=warpedUv+vec2(p*v23_spX,p*v23_spY);vec2 baseUv2=warpedUv+vec2((p-1.0)*v23_spX,(p-1.0)*v23_spY);float eps=0.01;float n0=mix(fbm(baseUv1,4.0),fbm(baseUv2,4.0),fade);float nx=mix(fbm(baseUv1+vec2(eps,0.0),4.0),fbm(baseUv2+vec2(eps,0.0),4.0),fade);float ny=mix(fbm(baseUv1+vec2(0.0,eps),4.0),fbm(baseUv2+vec2(0.0,eps),4.0),fade);vec3 normal=normalize(vec3((n0-nx)/eps*u_l23_depth,(n0-ny)/eps*u_l23_depth,1.0));vec3 view=vec3(0.0,0.0,-1.0);vec3 ref=reflect(view,normal);float y=ref.y;vec3 sky=mix(u_l23_colMid,u_l23_colTop,clamp(y*2.0,0.0,1.0));vec3 ground=mix(u_l23_colMid,u_l23_colBot,clamp(-y*2.0,0.0,1.0));float edge=smoothstep(-0.02,0.02,y);vec3 envCol=mix(ground,sky,edge);envCol*=mix(1.0,0.3,smoothstep(0.05,0.0,abs(y)));vec3 lightDir=normalize(vec3(0.5,0.8,1.0));float spec=pow(max(0.0,dot(ref,lightDir)),30.0);envCol+=spec;color=blend(color,envCol,u_l23_blend,u_l23_opacity*wM);}}`,l12:`if(u_l12_en>0.5){float wM=getWallMask(uv.x,u_l12_wN,u_l12_wE,u_l12_wS,u_l12_wW);if(wM>0.0){float v12_eX=uv.x+u_l12_panX;vec2 v12_pC=vec2(cos(v12_eX*TWO_PI),sin(v12_eX*TWO_PI));float v12_spd=floor((u_l12_speed*10.0)+0.5);float v12_n1=valueNoise(vec2(v12_pC.x*u_l12_density,uv.y*u_l12_density)+vec2(0.0,p*v12_spd));float v12_n2=valueNoise(vec2(v12_pC.x*u_l12_density,uv.y*u_l12_density)+vec2(0.0,(p-1.0)*v12_spd));float v12_n=mix(v12_n1,v12_n2,fade);float v12_m=smoothstep(1.0-u_l12_size-u_l12_blur-0.001,1.0-u_l12_size+u_l12_blur+0.001,v12_n);vec3 v12_col=mix(u_l12_colA,u_l12_colB,v12_n);color=blend(color,v12_col,u_l12_blend,u_l12_opacity*v12_m*wM);}}`,l13:`if(u_l13_en>0.5){float wM=getWallMask(uv.x,u_l13_wN,u_l13_wE,u_l13_wS,u_l13_wW);if(wM>0.0){float v13_eX=fract(uv.x+u_l13_panX);vec2 v13_c=vec2(v13_eX,uv.y)-0.5;v13_c.x*=uAspect;float v13_r=length(v13_c);float v13_a=atan(v13_c.y,v13_c.x);float v13_spd=floor((u_l13_speed*5.0)+0.5);vec2 v13_tUv=vec2(v13_a/TWO_PI,u_l13_depth/max(0.001,v13_r));float v13_g=smoothstep(0.9-u_l13_blur,0.9,fract(v13_tUv.x*u_l13_scale))+smoothstep(0.9-u_l13_blur,0.9,fract(v13_tUv.y*u_l13_scale+p*v13_spd));color=blend(color,mix(u_l13_colB,u_l13_colA,clamp(v13_g,0.0,1.0))*smoothstep(0.0,0.2,v13_r),u_l13_blend,u_l13_opacity*wM);}}`,l14:`if(u_l14_en>0.5){float wM=getWallMask(uv.x,u_l14_wN,u_l14_wE,u_l14_wS,u_l14_wW);if(wM>0.0){float v14_eX=fract(uv.x+u_l14_panX);float v14_lines=0.0;float v14_f,v14_s,v14_y,v14_d;v14_f=floor((u_l14_petals*1.0)+0.5);v14_s=floor((u_l14_speed*5.0)+0.5)*TWO_PI;v14_y=0.5+sin(v14_eX*TWO_PI*v14_f+p*v14_s)*u_l14_size*(0.5/1.0);v14_d=smoothstep(u_l14_thick+u_l14_blur,max(0.001,u_l14_thick-0.01),abs(uv.y-v14_y));v14_lines=max(v14_lines,v14_d);v14_f=floor((u_l14_petals*2.0)+0.5);v14_s=floor((u_l14_speed*5.0)+0.5)*TWO_PI;v14_y=0.5+sin(v14_eX*TWO_PI*v14_f+p*v14_s)*u_l14_size*(0.5/2.0);v14_d=smoothstep(u_l14_thick+u_l14_blur,max(0.001,u_l14_thick-0.01),abs(uv.y-v14_y));v14_lines=max(v14_lines,v14_d);v14_f=floor((u_l14_petals*3.0)+0.5);v14_s=floor((u_l14_speed*5.0)+0.5)*TWO_PI;v14_y=0.5+sin(v14_eX*TWO_PI*v14_f+p*v14_s)*u_l14_size*(0.5/3.0);v14_d=smoothstep(u_l14_thick+u_l14_blur,max(0.001,u_l14_thick-0.01),abs(uv.y-v14_y));v14_lines=max(v14_lines,v14_d);color=blend(color,u_l14_col*v14_lines,u_l14_blend,u_l14_opacity*wM);}}`,l19:`if(u_l19_en>0.5){float wM=getWallMask(uv.x,u_l19_wN,u_l19_wE,u_l19_wS,u_l19_wW);if(wM>0.0){float v19_xT=max(2.0,floor((u_l19_scale*uAspect/2.0)+0.5)*2.0);float v19_sk=floor((u_l19_skew/2.0)+0.5)*2.0;float v19_spY=floor((u_l19_speed*10.0)+0.5);float v19_spX=floor((u_l19_speedX*10.0)+0.5);float v19_mY=(uv.y-u_l19_botEdge)/max(0.001,(u_l19_topEdge-u_l19_botEdge));float v19_a=exp(-u_l19_squeeze*0.2);float v19_y=v19_mY/(v19_a+(1.0-v19_a)*v19_mY);vec2 v19_uv=vec2((uv.x+u_l19_panX)*v19_xT+p*v19_spX*2.0+v19_y*v19_sk,v19_y*u_l19_scale+p*v19_spY*2.0+u_l19_panY*u_l19_scale);float v19_c=mod(floor(v19_uv.x)+floor(v19_uv.y),2.0);vec3 v19_col=mix(u_l19_colA,u_l19_colB,v19_c);float v19_bounds=step(0.0,v19_mY)*step(v19_mY,1.0);float v19_m=step(u_l19_cropB,uv.y)*step(uv.y,1.0-u_l19_cropT)*v19_bounds;color=blend(color,v19_col,u_l19_blend,u_l19_opacity*v19_m*wM);}}`,l22:`if(u_l22_en>0.5){float wM=getWallMask(uv.x,u_l22_wN,u_l22_wE,u_l22_wS,u_l22_wW);if(wM>0.0){float v22_eX=fract(uv.x+u_l22_panX);float v22_sp=floor((u_l22_speed*10.0)+0.5);float v22_yT=max(1.0,floor(u_l22_countY+0.5));float v22_xT=floor(u_l22_countX*uAspect+0.5);float v22_mY=(uv.y-u_l22_botEdge)/max(0.001,(u_l22_topEdge-u_l22_botEdge));float v22_a=exp(-u_l22_squeeze*0.2);float v22_y=v22_mY/(v22_a+(1.0-v22_a)*v22_mY);float v22_yUv=(v22_y+u_l22_panY)*v22_yT;float v22_id=floor(v22_yUv);float topId=v22_yT-1.0;float topRnd=random(vec2(topId,1.13));float topF=max(1.0,floor(u_l22_freq*(0.5+0.5*topRnd)+0.5));float topDepth=1.0-(topId/max(1.0,v22_yT-1.0));float topSpeedMult=max(1.0,floor(topDepth*4.0+1.0));float topWave=sin(v22_eX*TWO_PI*topF+p*TWO_PI*v22_sp*topSpeedMult+topRnd*TWO_PI)*u_l22_amp;float topWaveY=topId+0.5+topWave*v22_yT;float botId=0.0;float botRnd=random(vec2(botId,1.13));float botF=max(1.0,floor(u_l22_freq*(0.5+0.5*botRnd)+0.5));float botDepth=1.0-(botId/max(1.0,v22_yT-1.0));float botSpeedMult=max(1.0,floor(botDepth*4.0+1.0));float botWave=sin(v22_eX*TWO_PI*botF+p*TWO_PI*v22_sp*botSpeedMult+botRnd*TWO_PI)*u_l22_amp;float botWaveY=botId+0.5+botWave*v22_yT;float v22_lineX=0.0;if(v22_xT>0.5){float depthY=clamp(v22_y,0.0,1.0);float lineX_taper=mix(1.0,1.0-u_l22_taper,depthY);float lineX_thick=max(0.001,u_l22_thick*lineX_taper);float v22_gX=abs(fract(v22_eX*v22_xT)-0.5)*2.0;v22_lineX=smoothstep(1.0-lineX_thick-u_l22_blur,1.0-lineX_thick+0.001,v22_gX);v22_lineX*=step(botWaveY,v22_yUv)*step(v22_yUv,topWaveY);}float v22_lineY=0.0;for(float i=-4.0;i<=4.0;i+=1.0){float cId=v22_id+i;if(cId>=0.0&&cId<v22_yT){float rnd=random(vec2(cId,1.13));float f=max(1.0,floor(u_l22_freq*(0.5+0.5*rnd)+0.5));float depth=1.0-(cId/max(1.0,v22_yT-1.0));float speedMult=max(1.0,floor(depth*4.0+1.0));float lineY_taper=mix(1.0-u_l22_taper,1.0,depth);float lineY_thick=max(0.001,u_l22_thick*lineY_taper);float wave=sin(v22_eX*TWO_PI*f+p*TWO_PI*v22_sp*speedMult+rnd*TWO_PI)*u_l22_amp;float distY=abs(v22_yUv-(cId+0.5+wave*v22_yT));v22_lineY=max(v22_lineY,smoothstep(lineY_thick+u_l22_blur,max(0.001,lineY_thick-0.01),distY));}}float v22_grid=clamp(v22_lineX+v22_lineY,0.0,1.0);float v22_bounds=step(0.0,v22_mY)*step(v22_mY,1.0);color=blend(color,u_l22_col*v22_grid,u_l22_blend,u_l22_opacity*v22_bounds*wM);}}`,l20:`if(u_l20_en>0.5){float wM=getWallMask(uv.x,u_l20_wN,u_l20_wE,u_l20_wS,u_l20_wW);if(wM>0.0){vec4 v20_c=vec4(0.0);float v20_lS,v20_xT,v20_spMult,v20_sp,v20_rnd,v20_r,v20_circ,v20_dist;vec2 v20_gUv,v20_id,v20_f,v20_nb,v20_cId,v20_wId,v20_off,v20_pos;vec3 v20_cR,v20_clr;v20_spMult=floor((u_l20_speed*5.0)+0.5);v20_xT=max(1.0,floor((u_l20_density*uAspect/1.0)+0.5));v20_lS=v20_xT/uAspect;v20_sp=v20_spMult*v20_xT*1.0;v20_gUv=vec2((uv.x+u_l20_panX)*v20_xT+p*v20_sp,uv.y*v20_lS+1.0*12.34);v20_id=floor(v20_gUv);v20_f=fract(v20_gUv);for(int y=-2;y<=2;y++){for(int x=-2;x<=2;x++){v20_nb=vec2(float(x),float(y));v20_cId=v20_id+v20_nb;v20_wId=vec2(mod(v20_cId.x,v20_xT),v20_cId.y);v20_rnd=random(v20_wId+1.0*1.13);if(v20_rnd>0.7){v20_off=(random2(v20_wId+3.14)-0.5)*2.5;v20_pos=v20_nb+0.5+v20_off-v20_f;v20_r=min(0.8,(u_l20_size*0.4)*(0.4+0.6*random(v20_wId+7.7)));v20_dist=length(v20_pos);v20_circ=smoothstep(u_l20_blur+0.01,0.0,v20_dist-v20_r);v20_cR=vec3(random(v20_wId+2.2),random(v20_wId+3.3),random(v20_wId+4.4));v20_clr=mix(u_l20_col,v20_cR,u_l20_colRand);v20_c.rgb=mix(v20_c.rgb,v20_clr,v20_circ);v20_c.a=max(v20_c.a,v20_circ);}}}v20_xT=max(1.0,floor((u_l20_density*uAspect/2.0)+0.5));v20_lS=v20_xT/uAspect;v20_sp=v20_spMult*v20_xT*2.0;v20_gUv=vec2((uv.x+u_l20_panX)*v20_xT+p*v20_sp,uv.y*v20_lS+2.0*12.34);v20_id=floor(v20_gUv);v20_f=fract(v20_gUv);for(int y=-2;y<=2;y++){for(int x=-2;x<=2;x++){v20_nb=vec2(float(x),float(y));v20_cId=v20_id+v20_nb;v20_wId=vec2(mod(v20_cId.x,v20_xT),v20_cId.y);v20_rnd=random(v20_wId+2.0*1.13);if(v20_rnd>0.7){v20_off=(random2(v20_wId+3.14)-0.5)*2.5;v20_pos=v20_nb+0.5+v20_off-v20_f;v20_r=min(0.8,(u_l20_size*0.4)*(0.4+0.6*random(v20_wId+7.7)));v20_dist=length(v20_pos);v20_circ=smoothstep(u_l20_blur+0.01,0.0,v20_dist-v20_r);v20_cR=vec3(random(v20_wId+2.2),random(v20_wId+3.3),random(v20_wId+4.4));v20_clr=mix(u_l20_col,v20_cR,u_l20_colRand);v20_c.rgb=mix(v20_c.rgb,v20_clr,v20_circ);v20_c.a=max(v20_c.a,v20_circ);}}}v20_xT=max(1.0,floor((u_l20_density*uAspect/3.0)+0.5));v20_lS=v20_xT/uAspect;v20_sp=v20_spMult*v20_xT*3.0;v20_gUv=vec2((uv.x+u_l20_panX)*v20_xT+p*v20_sp,uv.y*v20_lS+3.0*12.34);v20_id=floor(v20_gUv);v20_f=fract(v20_gUv);for(int y=-2;y<=2;y++){for(int x=-2;x<=2;x++){v20_nb=vec2(float(x),float(y));v20_cId=v20_id+v20_nb;v20_wId=vec2(mod(v20_cId.x,v20_xT),v20_cId.y);v20_rnd=random(v20_wId+3.0*1.13);if(v20_rnd>0.7){v20_off=(random2(v20_wId+3.14)-0.5)*2.5;v20_pos=v20_nb+0.5+v20_off-v20_f;v20_r=min(0.8,(u_l20_size*0.4)*(0.4+0.6*random(v20_wId+7.7)));v20_dist=length(v20_pos);v20_circ=smoothstep(u_l20_blur+0.01,0.0,v20_dist-v20_r);v20_cR=vec3(random(v20_wId+2.2),random(v20_wId+3.3),random(v20_wId+4.4));v20_clr=mix(u_l20_col,v20_cR,u_l20_colRand);v20_c.rgb=mix(v20_c.rgb,v20_clr,v20_circ);v20_c.a=max(v20_c.a,v20_circ);}}}color=blend(color,v20_c.rgb,u_l20_blend,u_l20_opacity*v20_c.a*wM);}}`,l2:`if(u_l2_en>0.5){float wM=getWallMask(uv.x,u_l2_wN,u_l2_wE,u_l2_wS,u_l2_wW);if(wM>0.0){float v2_xT=floor((u_l2_scale*uAspect)+0.5);float v2_sk=floor((u_l2_rot)+0.5);float v2_sp=floor((u_l2_speed*10.0)+0.5);float v2_gX=fract((uv.x+u_l2_panX)*v2_xT+uv.y*v2_sk);float v2_gY=fract(uv.y*u_l2_scale+p*v2_sp);float v2_g=smoothstep(0.95-u_l2_blur,0.95,v2_gX)+smoothstep(0.95-u_l2_blur,0.95,v2_gY);color=blend(color,vec3(u_l2_col)*clamp(v2_g,0.0,1.0),u_l2_blend,u_l2_opacity*wM);}}`,l3:`if(u_l3_en>0.5){float wM=getWallMask(uv.x,u_l3_wN,u_l3_wE,u_l3_wS,u_l3_wW);if(wM>0.0){float v3_eX=fract(uv.x+u_l3_panX);float v3_w=floor((u_l3_wave*5.0)+0.5);float v3_sp=floor((u_l3_speed*10.0)+0.5)*TWO_PI;float v3_yO=sin(v3_eX*TWO_PI*v3_w+p*TWO_PI)*0.1;float v3_pls=sin((abs(uv.y-0.5+v3_yO)*2.0)*u_l3_freq-p*v3_sp);color=blend(color,u_l3_col*smoothstep(0.8-u_l3_blur,1.0,v3_pls),u_l3_blend,u_l3_opacity*wM);}}`,l5:`if(u_l5_en>0.5){float wM=getWallMask(uv.x,u_l5_wN,u_l5_wE,u_l5_wS,u_l5_wW);if(wM>0.0){float v5_xT=floor((u_l5_width*uAspect)+0.5);float v5_sk=floor((u_l5_rot)+0.5);vec2 v5_rUv=vec2((uv.x+u_l5_panX)*v5_xT+uv.y*v5_sk,uv.y*u_l5_length);float v5_idX=mod(floor(v5_rUv.x),max(1.0,v5_xT));float v5_sp=floor((u_l5_speed*5.0)+0.5);if(random(vec2(v5_idX,0.0))>(1.0-u_l5_density/100.0)){float v5_drop=fract(v5_rUv.y+p*v5_sp+random(vec2(v5_idX,1.0)));color=blend(color,u_l5_col*smoothstep(0.8-u_l5_blur,1.0,1.0-v5_drop),u_l5_blend,u_l5_opacity*wM);}}}`,l6:`if(u_l6_en>0.5){float wM=getWallMask(uv.x,u_l6_wN,u_l6_wE,u_l6_wS,u_l6_wW);if(wM>0.0){float v6_xT=floor((u_l6_scale*uAspect)+0.5);vec2 v6_sUv=vec2((uv.x+u_l6_panX)*v6_xT,uv.y*u_l6_scale);vec2 v6_id=vec2(mod(floor(v6_sUv.x),max(1.0,v6_xT)),floor(v6_sUv.y));vec2 v6_sub=fract(v6_sUv)-0.5;float v6_n=random(v6_id);if(v6_n>0.9){float v6_sp=floor((u_l6_twinkle*5.0)+0.5)*TWO_PI;float v6_tw=sin(p*v6_sp+v6_n*100.0)*0.5+0.5;float v6_st=smoothstep(0.0,u_l6_blur+0.01,1.0-length(v6_sub)*4.0)*v6_tw;vec3 v6_fC=mix(u_l6_col,vec3(random(v6_id+1.1),random(v6_id+2.2),random(v6_id+3.3)),u_l6_colRand);color=blend(color,v6_fC*v6_st,u_l6_blend,u_l6_opacity*wM);}}}`,l7:`if(u_l7_en>0.5){float wM=getWallMask(uv.x,u_l7_wN,u_l7_wE,u_l7_wS,u_l7_wW);if(wM>0.0){float v7_eX=fract(uv.x+u_l7_panX);float v7_sp=floor((u_l7_speed*10.0)+0.5)*TWO_PI;float v7_sc=sin((uv.y*u_l7_density)+(p*v7_sp))*0.5+0.5;color=blend(color,u_l7_col*smoothstep(0.5-u_l7_blur,0.5+u_l7_blur,v7_sc),u_l7_blend,u_l7_opacity*wM);}}`,l8:`if(u_l8_en>0.5){float wM=getWallMask(uv.x,u_l8_wN,u_l8_wE,u_l8_wS,u_l8_wW);if(wM>0.0){float v8_sp=floor((u_l8_speed*10.0)+0.5);float v8_off=p*v8_sp;float v8_lX=fract((uv.x+u_l8_posX)-v8_off);vec2 v8_tUv=vec2(v8_lX,uv.y-u_l8_posY)-0.5;v8_tUv.x*=uAspect/max(0.01,u_l8_Aspect);v8_tUv/=max(0.01,u_l8_scale);v8_tUv+=0.5;if(v8_tUv.x>=0.0&&v8_tUv.x<=1.0&&v8_tUv.y>=0.0&&v8_tUv.y<=1.0){vec4 v8_img=texture2D(u_l8_Tex,v8_tUv);color=blend(color,v8_img.rgb,u_l8_blend,v8_img.a*u_l8_opacity*wM);}}}`,l25:`if(u_l25_en>0.5){float wM=getWallMask(uv.x,u_l25_wN,u_l25_wE,u_l25_wS,u_l25_wW);if(wM>0.0){float v25_sp=u_l25_scrollSpeed*p;float v25_wave=sin((uv.x+u_l25_panX)*TWO_PI*u_l25_waveFreq+p*u_l25_waveSpeed*TWO_PI)*u_l25_waveAmp;float v25_skew=(1.0-uv.y)*u_l25_skewX;float v25_x=fract(uv.x+u_l25_panX+v25_sp+v25_skew);float v25_y=clamp(uv.y-v25_wave,0.0,1.0);vec4 v25_col=texture2D(u_l25_Tex,vec2(v25_x,v25_y));color=blend(color,v25_col.rgb,u_l25_blend,v25_col.a*u_l25_opacity*wM);}}`,l26:`if(u_l26_en>0.5){float wM=getWallMask(uv.x,u_l26_wN,u_l26_wE,u_l26_wS,u_l26_wW);if(wM>0.0){vec4 v26_col=texture2D(u_l26_Tex,uv);color=blend(color,v26_col.rgb,u_l26_blend,v26_col.a*u_l26_opacity*wM);}}`,l27:`if(u_l27_en>0.5){float wM=getWallMask(uv.x,u_l27_wN,u_l27_wE,u_l27_wS,u_l27_wW);if(wM>0.0){float v27_eX=uv.x+u_l27_panX;vec2 v27_pC=vec2(cos(v27_eX*TWO_PI),sin(v27_eX*TWO_PI));float v27_spd=floor((u_l27_speed*5.0)+0.5)*TWO_PI;float v27_v=voronoi(vec2(v27_pC.x,uv.y)*u_l27_density,p*v27_spd);float v27_raw=sqrt(v27_v);float v27_choked=smoothstep(u_l27_choke*0.6,u_l27_choke*0.6+0.3,v27_raw);float v27_cell=smoothstep(u_l27_size-u_l27_blur,u_l27_size+u_l27_blur+0.001,v27_choked);float v27_edge=1.0-smoothstep(u_l27_size+u_l27_blur,u_l27_size+u_l27_blur+0.08,v27_choked);color=blend(color,mix(u_l27_colA,u_l27_colB,v27_cell)*max(v27_cell,v27_edge*0.8),u_l27_blend,u_l27_opacity*max(v27_cell,v27_edge)*wM);}}`,l28:`if(u_l28_en>0.5){float wM=getWallMask(uv.x,u_l28_wN,u_l28_wE,u_l28_wS,u_l28_wW);if(wM>0.0){vec2 v28_sc=vec2((uv.x+u_l28_panX-0.5)*u_l28_zoom*uAspect,(uv.y+u_l28_panY-0.5)*u_l28_zoom);vec2 v28_c,v28_z;if(u_l28_julia>0.5){v28_c=vec2(u_l28_jx+sin(p*TWO_PI*u_l28_speed)*0.15,u_l28_jy+cos(p*TWO_PI*u_l28_speed)*0.15);v28_z=v28_sc;}else{v28_c=v28_sc;v28_z=vec2(0.0);}float v28_i=0.0;for(int i=0;i<128;i++){if(float(i)>=u_l28_iter)break;if(dot(v28_z,v28_z)>4.0)break;v28_z=vec2(v28_z.x*v28_z.x-v28_z.y*v28_z.y+v28_c.x,2.0*v28_z.x*v28_z.y+v28_c.y);v28_i+=1.0;}float v28_t=v28_i/u_l28_iter;float v28_esc=smoothstep(0.98,1.0,v28_t);color=blend(color,mix(u_l28_colA,u_l28_colB,v28_t),u_l28_blend,u_l28_opacity*(1.0-v28_esc)*wM);}}`,l29:`if(u_l29_en>0.5){float wM=getWallMask(uv.x,u_l29_wN,u_l29_wE,u_l29_wS,u_l29_wW);if(wM>0.0){float v29_eX=fract(uv.x+u_l29_panX);float v29_sp=floor(u_l29_speed*5.0+0.5)*TWO_PI;float v29_total=0.0;for(float bi=0.0;bi<20.0;bi+=1.0){if(bi>=u_l29_density)break;float v29_rA=random(vec2(bi,3.7));float v29_rB=random(vec2(bi,9.1));float v29_cx=v29_rA;float v29_cy=0.2+v29_rB*0.6;float v29_seg=4.0+floor(random(vec2(bi,1.3))*5.0);for(float si=0.0;si<8.0;si+=1.0){if(si>=v29_seg)break;float v29_nx=v29_cx+(random(vec2(bi*3.1+si,2.7))-0.5)*u_l29_chaos*0.25;float v29_ny=v29_cy+(random(vec2(bi*3.1+si,4.3))-0.5)*u_l29_chaos*0.15;vec2 v29_seg_dir=vec2(v29_nx,v29_ny)-vec2(v29_cx,v29_cy);float v29_seg_len=length(v29_seg_dir)+0.0001;vec2 v29_seg_n=v29_seg_dir/v29_seg_len;vec2 v29_p=vec2(v29_eX-v29_cx,uv.y-v29_cy);float v29_t=clamp(dot(v29_p,v29_seg_n)/v29_seg_len,0.0,1.0);vec2 v29_closest=vec2(v29_cx,v29_cy)+v29_t*v29_seg_dir;float v29_d=length(vec2(v29_eX,uv.y)-v29_closest);float v29_bolt=smoothstep(u_l29_thick,0.0,v29_d);float v29_t2=fract(p*v29_sp*0.1+bi*0.37);float v29_flicker=step(0.25,sin(p*v29_sp+bi*17.3+si*3.1)*0.5+0.5);v29_total=max(v29_total,v29_bolt*v29_flicker);v29_cx=v29_nx;v29_cy=v29_ny;}}vec3 v29_c=u_l29_col*(v29_total+v29_total*v29_total*u_l29_glow*3.0);color=blend(color,v29_c,u_l29_blend,clamp(v29_total*u_l29_opacity,0.0,1.0)*wM);}}`,l30:`if(u_l30_en>0.5){float wM=getWallMask(uv.x,u_l30_wN,u_l30_wE,u_l30_wS,u_l30_wW);if(wM>0.0){vec4 v30_col=texture2D(u_l30_Tex,uv);color=blend(color,v30_col.rgb,u_l30_blend,v30_col.a*u_l30_opacity*wM);}}`,l31:`if(u_l31_en>0.5){float wM=getWallMask(uv.x,u_l31_wN,u_l31_wE,u_l31_wS,u_l31_wW);if(wM>0.0){vec4 v31_col=texture2D(u_l31_Tex,uv);color=blend(color,v31_col.rgb,u_l31_blend,v31_col.a*u_l31_opacity*wM);}}`,l32:`if(u_l32_en>0.5){float wM=getWallMask(uv.x,u_l32_wN,u_l32_wE,u_l32_wS,u_l32_wW);if(wM>0.0){vec4 v32_col=texture2D(u_l32_Tex,uv);color=blend(color,v32_col.rgb,u_l32_blend,v32_col.a*u_l32_opacity*wM);}}`},Nc=e=>`<select id="${e}"><option value="0">Normal</option><option value="1">Add</option><option value="2">Multiply</option><option value="3">Screen</option><option value="4">Overlay</option><option value="5">Difference</option></select>`,Z=(e,t,n,r,i,a)=>`<div class="ctrl-row">${e} <input type="range" id="${t}" min="${n}" max="${r}" step="${i}"> <input type="number" id="${t}-val" class="val-input">${a===void 0?``:`<button class="reset-btn" data-id="${t}" data-default="${a}" title="Reset to default">↺</button>`}</div>`,Q=e=>`<div style="display:flex; align-items:center; gap:5px;"><input type="color" id="${e}"> <input type="text" id="${e}-hex" class="val-input hex-input" maxlength="7"></div>`,Pc=e=>`<div class="wall-toggles" style="display:flex; justify-content:space-between; font-size:14px; font-weight:bold; margin-top:8px; padding-top:8px; border-top:1px dashed #444; color:var(--amber);">WALLS: <label><input type="checkbox" id="${e}-wN"> N</label><label><input type="checkbox" id="${e}-wE"> E</label><label><input type="checkbox" id="${e}-wS"> S</label><label><input type="checkbox" id="${e}-wW"> W</label></div>`,Fc=e=>`<button class="btn-local-pal" data-layer="${e}" style="margin-top:10px; width:100%; border-color:#00ffcc; color:#00ffcc; text-shadow:0 0 5px #00ffcc;">[ 🎲 SHUFFLE COLORS ]</button>`,Ic=document.querySelector(`#app`)||document.body;Ic.innerHTML=`
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
        <label class="render-param-label">LOOPS<input type="number" id="cycles" value="${X.cycles}" step="1" min="1"></label>
        <label class="render-param-label">SCALE<input type="number" id="exportScale" value="${X.exportScale}" step="0.1"></label>
        <label class="render-param-label">DUR<input type="number" id="duration" value="${X.duration}"><span class="render-param-unit">s</span></label>
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
        ${[1,2,3,4,5].map(e=>`<div style="display:flex; align-items:center; gap:3px;"><input type="color" id="pal-c${e}" value="#ffffff"><input type="text" id="pal-h${e}" class="val-input hex-input" maxlength="7" value="#ffffff" style="width:58px;"></div>`).join(``)}
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
          <div class="control-group"><h4>Master</h4>${Z(`Opacity`,`l1-opacity`,0,1,.01,1)}<div class="ctrl-row">Blend ${Nc(`l1-blend`)}</div>${Pc(`l1`)}</div>
          <div class="control-group"><h4>Motion</h4>${Z(`Scale`,`l1-scale`,.1,20,.1,5)}${Z(`Stretch`,`l1-stretch`,1,20,.1,5)}${Z(`Speed`,`l1-motion`,-5,5,.1,1)}${Z(`Pan X`,`l1-panX`,-.5,.5,.001,0)}</div>
          <div class="control-group"><h4>Look</h4>${Z(`Contrast`,`l1-con`,0,1,.01,.5)}${Z(`Blur`,`l1-blur`,0,1,.01,.1)}<div class="ctrl-row">Col A ${Q(`l1-colA`)} Col B ${Q(`l1-colB`)}</div>${Fc(`l1`)}</div>
        </div>
        <div id="tab-chrome" class="tab-content active">
          <div class="control-group"><h4>Master</h4>${Z(`Opacity`,`l23-opacity`,0,1,.01,1)}<div class="ctrl-row">Blend ${Nc(`l23-blend`)}</div>${Pc(`l23`)}</div>
          <div class="control-group"><h4>Distortion</h4>${Z(`Size`,`l23-scale`,.01,1,.01,.5)}${Z(`Bump`,`l23-depth`,0,2,.01,.8)}${Z(`Turbulence`,`l23-turb`,0,1,.01,.1)}${Z(`Speed Y`,`l23-speed`,-5,5,.1,1)}${Z(`Speed X`,`l23-speedX`,-5,5,.1,0)}${Z(`Pan X`,`l23-panX`,-.5,.5,.001,0)}</div>
          <div class="control-group"><h4>Environment</h4><div style="display:flex; flex-direction:column; gap:5px;"><div class="ctrl-row">Sky ${Q(`l23-colTop`)}</div><div class="ctrl-row">Horizon ${Q(`l23-colMid`)}</div><div class="ctrl-row">Ground ${Q(`l23-colBot`)}</div></div>${Fc(`l23`)}</div>
        </div>
        
        <div id="tab-fbm" class="tab-content">
          <div class="control-group"><h4>Master</h4>${Z(`Opacity`,`l10-opacity`,0,1,.01,1)}<div class="ctrl-row">Blend ${Nc(`l10-blend`)}</div>${Pc(`l10`)}</div>
          <div class="control-group"><h4>Masses</h4>${Z(`Density`,`l10-density`,.1,20,.1,5)}${Z(`Size`,`l10-size`,0,1,.01,.5)}${Z(`Speed`,`l10-speed`,-5,5,.1,1)}${Z(`Pan X`,`l10-panX`,-.5,.5,.001,0)}</div>
          <div class="control-group"><h4>Look</h4>${Z(`Detail`,`l10-detail`,1,10,1,5)}${Z(`Blur`,`l10-blur`,0,.5,.01,.1)}<div class="ctrl-row">Col A ${Q(`l10-colA`)} Col B ${Q(`l10-colB`)}</div>${Fc(`l10`)}</div>
        </div>
        <div id="tab-marble" class="tab-content">
          <div class="control-group"><h4>Master</h4>${Z(`Opacity`,`l11-opacity`,0,1,.01,1)}<div class="ctrl-row">Blend ${Nc(`l11-blend`)}</div>${Pc(`l11`)}</div>
          <div class="control-group"><h4>Motion</h4>${Z(`Scale`,`l11-scale`,.1,20,.1,5)}${Z(`Warp`,`l11-warp`,0,10,.1,4)}${Z(`Speed`,`l11-speed`,-5,5,.1,1)}${Z(`Pan X`,`l11-panX`,-.5,.5,.001,0)}</div>
          <div class="control-group"><h4>Colors</h4><div class="ctrl-row">Col A ${Q(`l11-colA`)} Col B ${Q(`l11-colB`)}</div>${Fc(`l11`)}</div>
        </div>
        <div id="tab-vnoise" class="tab-content">
          <div class="control-group"><h4>Master</h4>${Z(`Opacity`,`l12-opacity`,0,1,.01,1)}<div class="ctrl-row">Blend ${Nc(`l12-blend`)}</div>${Pc(`l12`)}</div>
          <div class="control-group"><h4>Grid & Size</h4>${Z(`Density`,`l12-density`,1,100,1,40)}${Z(`Size`,`l12-size`,0,1,.01,.5)}${Z(`Speed`,`l12-speed`,-10,10,.1,2)}${Z(`Pan X`,`l12-panX`,-.5,.5,.001,0)}</div>
          <div class="control-group"><h4>Look</h4>${Z(`Blur`,`l12-blur`,0,.5,.01,0)}<div class="ctrl-row">Col A ${Q(`l12-colA`)} Col B ${Q(`l12-colB`)}</div>${Fc(`l12`)}</div>
        </div>

        <div id="tab-grid" class="tab-content">
          <div class="control-group"><h4>Master</h4>${Z(`Opacity`,`l2-opacity`,0,1,.01,1)}<div class="ctrl-row">Blend ${Nc(`l2-blend`)}</div>${Pc(`l2`)}</div>
          <div class="control-group"><h4>Geo</h4>${Z(`Density`,`l2-scale`,1,100,1,50)}${Z(`Skew`,`l2-rot`,-5,5,1,0)}${Z(`Speed`,`l2-speed`,-5,5,.1,1)}${Z(`Pan X`,`l2-panX`,-.5,.5,.001,0)}</div>
          <div class="control-group"><h4>Look</h4>${Z(`Blur`,`l2-blur`,0,.5,.01,.01)}<div class="ctrl-row">Col ${Q(`l2-col`)}</div>${Fc(`l2`)}</div>
        </div>
        <div id="tab-pulse" class="tab-content">
          <div class="control-group"><h4>Master</h4>${Z(`Opacity`,`l3-opacity`,0,1,.01,1)}<div class="ctrl-row">Blend ${Nc(`l3-blend`)}</div>${Pc(`l3`)}</div>
          <div class="control-group"><h4>Geo</h4>${Z(`Freq`,`l3-freq`,1,50,1,20)}${Z(`Wave`,`l3-wave`,0,10,1,3)}${Z(`Speed`,`l3-speed`,-5,5,.1,2)}${Z(`Pan X`,`l3-panX`,-.5,.5,.001,0)}</div>
          <div class="control-group"><h4>Look</h4>${Z(`Blur`,`l3-blur`,0,1,.01,.1)}<div class="ctrl-row">Col ${Q(`l3-col`)}</div>${Fc(`l3`)}</div>
        </div>
        <div id="tab-wormhole" class="tab-content">
          <div class="control-group"><h4>Master</h4>${Z(`Opacity`,`l13-opacity`,0,1,.01,1)}<div class="ctrl-row">Blend ${Nc(`l13-blend`)}</div>${Pc(`l13`)}</div>
          <div class="control-group"><h4>Space</h4>${Z(`Scale`,`l13-scale`,1,50,.1,10)}${Z(`Speed`,`l13-speed`,-10,10,.1,2)}${Z(`Depth`,`l13-depth`,.1,5,.1,2)}${Z(`Pan X`,`l13-panX`,-.5,.5,.001,0)}</div>
          <div class="control-group"><h4>Look</h4>${Z(`Blur`,`l13-blur`,0,.5,.01,0)}<div class="ctrl-row">Col A ${Q(`l13-colA`)} Col B ${Q(`l13-colB`)}</div>${Fc(`l13`)}</div>
        </div>
        <div id="tab-mandala" class="tab-content">
          <div class="control-group"><h4>Master</h4>${Z(`Opacity`,`l14-opacity`,0,1,.01,1)}<div class="ctrl-row">Blend ${Nc(`l14-blend`)}</div>${Pc(`l14`)}</div>
          <div class="control-group"><h4>Shape</h4>${Z(`Complexity`,`l14-petals`,1,20,1,3)}${Z(`Size`,`l14-size`,.1,1,.01,.3)}${Z(`Speed`,`l14-speed`,-5,5,.1,1)}${Z(`Pan X`,`l14-panX`,-.5,.5,.001,0)}</div>
          <div class="control-group"><h4>Look</h4>${Z(`Thick`,`l14-thick`,.001,.1,.001,.02)}${Z(`Blur`,`l14-blur`,0,.1,.001,0)}<div class="ctrl-row">Col ${Q(`l14-col`)}</div>${Fc(`l14`)}</div>
        </div>
        <div id="tab-checker" class="tab-content">
          <div class="control-group"><h4>Master</h4>${Z(`Opacity`,`l19-opacity`,0,1,.01,1)}<div class="ctrl-row">Blend ${Nc(`l19-blend`)}</div>${Pc(`l19`)}</div>
          <div class="control-group"><h4>Bounds</h4>${Z(`Top Edge`,`l19-topEdge`,0,1,.01,1)}${Z(`Bot Edge`,`l19-botEdge`,0,1,.01,0)}${Z(`Squeeze`,`l19-squeeze`,-5,5,.1,0)}</div>
          <div class="control-group"><h4>Transform</h4>${Z(`Density`,`l19-scale`,.1,20,.1,10)}${Z(`Skew`,`l19-skew`,-10,10,1,0)}${Z(`Speed X`,`l19-speedX`,-5,5,.1,0)}${Z(`Speed Y`,`l19-speed`,-5,5,.1,0)}${Z(`Pan X`,`l19-panX`,-.5,.5,.001,0)}${Z(`Pan Y`,`l19-panY`,-.5,.5,.001,0)}</div>
          <div class="control-group"><h4>Mask & Colors</h4>${Z(`Crop Top`,`l19-cropT`,0,1,.01,0)}${Z(`Crop Bot`,`l19-cropB`,0,1,.01,0)}<div class="ctrl-row">Col A ${Q(`l19-colA`)} Col B ${Q(`l19-colB`)}</div>${Fc(`l19`)}</div>
        </div>
        <div id="tab-wavegrid" class="tab-content">
          <div class="control-group"><h4>Master</h4>${Z(`Opacity`,`l22-opacity`,0,1,.01,1)}<div class="ctrl-row">Blend ${Nc(`l22-blend`)}</div>${Pc(`l22`)}</div>
          <div class="control-group"><h4>Bounds & Squeeze</h4>${Z(`Top Edge`,`l22-topEdge`,0,1,.01,1)}${Z(`Bot Edge`,`l22-botEdge`,0,1,.01,0)}${Z(`Squeeze`,`l22-squeeze`,-5,5,.1,0)}${Z(`Taper`,`l22-taper`,0,1,.01,.9)}</div>
          <div class="control-group"><h4>Grid</h4>${Z(`Count X`,`l22-countX`,0,100,1,0)}${Z(`Count Y`,`l22-countY`,1,100,1,15)}${Z(`Thick`,`l22-thick`,.001,.2,.001,.05)}${Z(`Pan Y`,`l22-panY`,-.5,.5,.001,0)}</div>
          <div class="control-group"><h4>Wave & Motion</h4>${Z(`Amp`,`l22-amp`,0,1,.01,.1)}${Z(`Freq`,`l22-freq`,1,20,1,5)}${Z(`Speed`,`l22-speed`,-5,5,.1,1)}${Z(`Pan X`,`l22-panX`,-.5,.5,.001,0)}</div>
          <div class="control-group"><h4>Look</h4>${Z(`Blur`,`l22-blur`,0,.5,.01,.01)}<div class="ctrl-row">Col ${Q(`l22-col`)}</div>${Fc(`l22`)}</div>
        </div>

        <div id="tab-gradient" class="tab-content">
          <div class="control-group"><h4>Master</h4>${Z(`Opacity`,`l4-opacity`,0,1,.01,1)}<div class="ctrl-row">Blend ${Nc(`l4-blend`)}</div>${Pc(`l4`)}</div>
          <div class="control-group"><h4>Transform</h4>${Z(`Rotation`,`l4-rot`,0,360,1,0)}${Z(`Repeat`,`l4-repeat`,1,16,1,1)}${Z(`Pan X`,`l4-panX`,-.5,.5,.001,0)}</div>
          <div class="control-group"><h4>Colors</h4><div style="display:flex; flex-direction:column; gap:5px;">${Q(`l4-col1`)} ${Q(`l4-col2`)} ${Q(`l4-col3`)}</div>${Fc(`l4`)}</div>
        </div>
        <div id="tab-rain" class="tab-content">
          <div class="control-group"><h4>Master</h4>${Z(`Opacity`,`l5-opacity`,0,1,.01,1)}<div class="ctrl-row">Blend ${Nc(`l5-blend`)}</div>${Pc(`l5`)}</div>
          <div class="control-group"><h4>Geo</h4>${Z(`Density`,`l5-density`,1,100,1,50)}${Z(`Skew`,`l5-rot`,-5,5,1,0)}${Z(`Speed`,`l5-speed`,-5,5,.1,2)}${Z(`Pan X`,`l5-panX`,-.5,.5,.001,0)}</div>
          <div class="control-group"><h4>Look</h4>${Z(`Width`,`l5-width`,1,200,1,50)}${Z(`Length`,`l5-length`,.1,10,.1,1)}${Z(`Blur`,`l5-blur`,0,.5,.01,.02)}<div class="ctrl-row">Col ${Q(`l5-col`)}</div>${Fc(`l5`)}</div>
        </div>
        <div id="tab-stars" class="tab-content">
          <div class="control-group"><h4>Master</h4>${Z(`Opacity`,`l6-opacity`,0,1,.01,1)}<div class="ctrl-row">Blend ${Nc(`l6-blend`)}</div>${Pc(`l6`)}</div>
          <div class="control-group"><h4>Space</h4>${Z(`Scale`,`l6-scale`,1,100,1,20)}${Z(`Twinkle`,`l6-twinkle`,0,10,.1,5)}${Z(`Pan X`,`l6-panX`,-.5,.5,.001,0)}${Z(`Blur`,`l6-blur`,0,.5,.01,.05)}</div>
          <div class="control-group"><h4>Color</h4>${Z(`Rand Col`,`l6-colRand`,0,1,.01,0)}<div class="ctrl-row">Col ${Q(`l6-col`)}</div>${Fc(`l6`)}</div>
        </div>
        <div id="tab-scanline" class="tab-content">
          <div class="control-group"><h4>Master</h4>${Z(`Opacity`,`l7-opacity`,0,1,.01,1)}<div class="ctrl-row">Blend ${Nc(`l7-blend`)}</div>${Pc(`l7`)}</div>
          <div class="control-group"><h4>Geo</h4>${Z(`Density`,`l7-density`,1,200,1,100)}${Z(`Speed`,`l7-speed`,-10,10,.1,1)}${Z(`Pan X`,`l7-panX`,-.5,.5,.001,0)}${Z(`Blur`,`l7-blur`,0,.5,.01,.01)}</div>
          <div class="control-group"><h4>Color</h4><div class="ctrl-row">Col ${Q(`l7-col`)}</div>${Fc(`l7`)}</div>
        </div>
        <div id="tab-svg" class="tab-content">
          <div class="control-group"><h4>Master</h4>${Z(`Opacity`,`l8-opacity`,0,1,.01,1)}<div class="ctrl-row">Blend ${Nc(`l8-blend`)}</div>${Pc(`l8`)}</div>
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
              <div class="ctrl-row"><span style="font-size:10px;color:var(--text-dim);">Tint</span>${Q(`l8-itint`)}<span style="font-size:10px;color:var(--text-dim);margin-left:8px;">Blend</span>${Nc(`l8-iblend`)}</div>
            </div>
          </div>
        </div>
        <div id="tab-equi" class="tab-content">
          <div class="control-group"><h4>Master</h4>${Z(`Opacity`,`l21-opacity`,0,1,.01,1)}<div class="ctrl-row">Blend ${Nc(`l21-blend`)}</div>${Pc(`l21`)}</div>
          <div class="control-group"><h4>Environment</h4>${Z(`Zoom`,`l21-scale`,.1,3,.01,1)}${Z(`Tilt Y`,`l21-posY`,-.5,.5,.001,0)}${Z(`Pan X`,`l21-panX`,-.5,.5,.001,0)}${Z(`Spin Speed`,`l21-speed`,-2,2,.01,0)}</div>
          <div class="control-group"><h4>Look</h4>${Z(`Blur`,`l21-blur`,0,1,.01,0)}<div class="ctrl-row">Tint ${Q(`l21-col`)}</div><input type="file" id="l21-upload" accept=".jpg, .jpeg, .png">${Fc(`l21`)}</div>
        </div>
        <div id="tab-circles" class="tab-content">
          <div class="control-group"><h4>Master</h4>${Z(`Opacity`,`l20-opacity`,0,1,.01,1)}<div class="ctrl-row">Blend ${Nc(`l20-blend`)}</div>${Pc(`l20`)}</div>
          <div class="control-group"><h4>Shape</h4>${Z(`Density`,`l20-density`,.001,10,.001,2)}${Z(`Size`,`l20-size`,.1,1,.01,.5)}${Z(`Speed`,`l20-speed`,-5,5,.1,2)}${Z(`Pan X`,`l20-panX`,-.5,.5,.001,0)}</div>
          <div class="control-group"><h4>Look</h4>${Z(`Blur`,`l20-blur`,0,.5,.01,.01)}${Z(`Rand Col`,`l20-colRand`,0,1,.01,0)}<div class="ctrl-row">Col ${Q(`l20-col`)}</div>${Fc(`l20`)}</div>
        </div>

        <div id="tab-text" class="tab-content">
          <div class="control-group"><h4>Master</h4>${Z(`Opacity`,`l25-opacity`,0,1,.01,1)}<div class="ctrl-row">Blend ${Nc(`l25-blend`)}</div>${Pc(`l25`)}</div>
          <div class="control-group" style="min-width:320px;"><h4>Text Content</h4>
            <div class="ctrl-row" style="flex-direction:column; align-items:flex-start; gap:8px;">
              <label style="font-size:13px;">Text (use | for line break)</label>
              <textarea id="l25-text" rows="3" style="width:100%; background:#000; border:1px solid var(--amber); color:var(--amber); font-family:inherit; font-size:14px; padding:6px; resize:vertical; text-shadow:none;">RETRO MASTER LOOP</textarea>
            </div>
            <div class="ctrl-row">Font <select id="l25-font" style="font-size:14px; max-width:200px;"></select></div>
            <div class="ctrl-row">Style <select id="l25-fontStyle"><option value="normal">Normal</option><option value="bold">Bold</option><option value="italic">Italic</option><option value="bold italic">Bold Italic</option></select></div>
            <div class="ctrl-row">Align <select id="l25-align"><option value="center">Center</option><option value="left">Left</option><option value="right">Right</option></select></div>
            <div class="ctrl-row">Text Color ${Q(`l25-col`)}</div>
          </div>
          <div class="control-group"><h4>Layout & Motion</h4>
            ${Z(`Size`,`l25-size`,.01,.8,.01,.15)}
            ${Z(`Pos Y`,`l25-posY`,0,1,.01,.5)}
            ${Z(`Pan X`,`l25-panX`,-.5,.5,.001,0)}
            ${Z(`Scroll Speed`,`l25-scrollSpeed`,-5,5,.01,1)}
            ${Z(`Tracking`,`l25-tracking`,-.2,1,.01,0)}
            ${Z(`Line Spacing`,`l25-lineSpacing`,.5,3,.05,1.2)}
          </div>
          <div class="control-group"><h4>Distortion</h4>
            ${Z(`Wave Amp`,`l25-waveAmp`,0,.3,.005,0)}
            ${Z(`Wave Freq`,`l25-waveFreq`,.1,20,.1,3)}
            ${Z(`Wave Speed`,`l25-waveSpeed`,-5,5,.1,1)}
            ${Z(`Skew X`,`l25-skewX`,-1,1,.01,0)}
            ${Z(`Glitch`,`l25-glitch`,0,1,.01,0)}
            ${Z(`Outline`,`l25-outline`,0,20,.5,0)}
            ${Z(`Shadow`,`l25-shadow`,0,30,1,0)}
          </div>
        </div>

        <div id="tab-vumeter" class="tab-content">
          <div class="control-group"><h4>Master</h4>${Z(`Opacity`,`l26-opacity`,0,1,.01,1)}<div class="ctrl-row">Blend ${Nc(`l26-blend`)}</div>${Pc(`l26`)}</div>
          <div class="control-group"><h4>Bar Shape</h4>
            ${Z(`Bar Width`,`l26-barW`,1,60,1,8)}
            ${Z(`Bar Gap`,`l26-barGap`,0,30,1,2)}
            ${Z(`H-Bar Count`,`l26-hBars`,0,32,1,8)}
            ${Z(`H-Bar Height`,`l26-hBarH`,1,20,1,2)}
            ${Z(`Top Edge`,`l26-topEdge`,.01,1,.01,1)}
            ${Z(`Bot Edge`,`l26-botEdge`,0,.99,.01,0)}
            ${Z(`Squeeze`,`l26-squeeze`,0,1,.01,.5)}
          </div>
          <div class="control-group"><h4>Animation & Noise</h4>
            ${Z(`Noise Amt`,`l26-noiseAmt`,0,1,.01,.8)}
            ${Z(`Noise Speed`,`l26-noiseSpeed`,.1,20,.1,3)}
            ${Z(`Glow`,`l26-glowAmt`,0,1,.01,.6)}
          </div>
          <div class="control-group"><h4>Colors</h4>
            <div class="ctrl-row" style="margin-bottom:5px;"><label style="cursor:pointer; display:flex; align-items:center; gap:8px;"><input type="checkbox" id="l26-gradient" style="appearance:none; width:18px; height:18px; border:2px solid var(--border); cursor:pointer; position:relative;"> Smooth Gradient</label></div>
            <div class="ctrl-row">Bot Col ${Q(`l26-colBot`)}</div>
            <div class="ctrl-row">Mid Col ${Q(`l26-colMid`)}</div>
            <div class="ctrl-row">Top Col ${Q(`l26-colTop`)}</div>
            ${Fc(`l26`)}
          </div>
        </div>

        <div id="tab-voronoi" class="tab-content">
          <div class="control-group"><h4>Master</h4>${Z(`Opacity`,`l27-opacity`,0,1,.01,1)}<div class="ctrl-row">Blend ${Nc(`l27-blend`)}</div>${Pc(`l27`)}</div>
          <div class="control-group"><h4>Pattern</h4>${Z(`Density`,`l27-density`,.5,40,.5,10)}${Z(`Size`,`l27-size`,0,1,.01,.3)}${Z(`Speed`,`l27-speed`,-5,5,.1,1)}${Z(`Pan X`,`l27-panX`,-.5,.5,.001,0)}</div>
          <div class="control-group"><h4>Look</h4>${Z(`Choke`,`l27-choke`,0,1,.01,0)}${Z(`Blur`,`l27-blur`,0,.3,.01,.05)}<div class="ctrl-row">Col A ${Q(`l27-colA`)} Col B ${Q(`l27-colB`)}</div>${Fc(`l27`)}</div>
        </div>

        <div id="tab-neon" class="tab-content">
          <div class="control-group"><h4>Master</h4>${Z(`Opacity`,`l29-opacity`,0,1,.01,1)}<div class="ctrl-row">Blend ${Nc(`l29-blend`)}</div>${Pc(`l29`)}</div>
          <div class="control-group"><h4>Lightning</h4>${Z(`Count`,`l29-density`,1,20,1,5)}${Z(`Thickness`,`l29-thick`,.001,.05,.001,.012)}${Z(`Chaos`,`l29-chaos`,0,1,.01,.5)}${Z(`Speed`,`l29-speed`,.1,10,.1,2)}${Z(`Pan X`,`l29-panX`,-.5,.5,.001,0)}</div>
          <div class="control-group"><h4>Look</h4>${Z(`Glow`,`l29-glow`,0,2,.01,.6)}<div class="ctrl-row">Color ${Q(`l29-col`)}</div>${Fc(`l29`)}</div>
        </div>

        <div id="tab-clock" class="tab-content">
          <div class="control-group"><h4>Master</h4>${Z(`Opacity`,`l30-opacity`,0,1,.01,1)}<div class="ctrl-row">Blend ${Nc(`l30-blend`)}</div>${Pc(`l30`)}</div>
          <div class="control-group"><h4>Display</h4>
            ${Z(`Size`,`l30-size`,.02,.5,.01,.12)}
            ${Z(`Pos X`,`l30-posX`,0,1,.01,.5)}
            ${Z(`Pos Y`,`l30-posY`,0,1,.01,.5)}
            <div class="ctrl-row"><label>Show Date <input type="checkbox" id="l30-showDate" class="layer-toggle" style="width:18px;height:18px;"></label></div>
            <div class="ctrl-row"><label>Show Frames <input type="checkbox" id="l30-showFrames" class="layer-toggle" style="width:18px;height:18px;"></label></div>
          </div>
          <div class="control-group"><h4>Colors</h4><div class="ctrl-row">Color ${Q(`l30-col`)}</div>${Fc(`l30`)}</div>
        </div>

        <div id="tab-lissajous" class="tab-content">
          <div class="control-group"><h4>Master</h4>${Z(`Opacity`,`l31-opacity`,0,1,.01,1)}<div class="ctrl-row">Blend ${Nc(`l31-blend`)}</div>${Pc(`l31`)}</div>
          <div class="control-group"><h4>Pattern</h4>
            ${Z(`Freq X`,`l31-freqX`,1,12,1,3)}
            ${Z(`Freq Y`,`l31-freqY`,1,12,1,2)}
            ${Z(`Phase`,`l31-phase`,0,1,.01,0)}
            ${Z(`Speed`,`l31-speed`,-5,5,.1,1)}
          </div>
          <div class="control-group"><h4>Look</h4>
            ${Z(`Trail`,`l31-trails`,.5,.999,.001,.92)}
            ${Z(`Thickness`,`l31-thick`,1,8,1,2)}
            <div class="ctrl-row">Color ${Q(`l31-col`)}</div>
            ${Fc(`l31`)}
          </div>
        </div>

        <div id="tab-particles" class="tab-content">
          <div class="control-group"><h4>Master</h4>${Z(`Opacity`,`l32-opacity`,0,1,.01,1)}<div class="ctrl-row">Blend ${Nc(`l32-blend`)}</div>${Pc(`l32`)}</div>
          <div class="control-group"><h4>Emission</h4>
            ${Z(`Count`,`l32-count`,5,2e3,1,200)}
            ${Z(`Emit X`,`l32-emitX`,0,1,.01,.5)}
            ${Z(`Emit Y`,`l32-emitY`,0,1,.01,.5)}
            ${Z(`Spread`,`l32-spread`,.001,1,.001,.5)}
            ${Z(`Burst`,`l32-burst`,0,1,.01,0)}
          </div>
          <div class="control-group"><h4>Motion</h4>
            ${Z(`Speed`,`l32-speed`,0,15,.1,1.5)}
            ${Z(`Gravity`,`l32-gravity`,-5,5,.05,.3)}
            ${Z(`Turbulence`,`l32-turbulence`,0,5,.1,0)}
            ${Z(`Spin`,`l32-spin`,-5,5,.1,0)}
            ${Z(`Lifespan`,`l32-lifespan`,.1,3,.05,1)}
          </div>
          <div class="control-group"><h4>Appearance</h4>
            ${Z(`Size`,`l32-size`,1,30,.5,3)}
            ${Z(`Size Random`,`l32-sizeRand`,0,1,.01,.5)}
            ${Z(`Trail`,`l32-trails`,.5,.999,.001,.93)}
            ${Z(`Glow`,`l32-glow`,0,3,.05,.5)}
          </div>
          <div class="control-group"><h4>Colors</h4>
            <div class="ctrl-row">Birth Col ${Q(`l32-col`)}</div>
            <div class="ctrl-row">Death Col ${Q(`l32-colB`)}</div>
            ${Fc(`l32`)}
          </div>
        </div>

        <div id="tab-pixelate" class="tab-content">
          <div class="control-group"><h4>Master</h4><label style="display:flex; justify-content:space-between;">Enable <input type="checkbox" id="l33-en"></label>${Pc(`l33`)}</div>
          <div class="control-group"><h4>Pixel Grid</h4>${Z(`Pixel Size`,`l33-amount`,1,300,1,80)}${Z(`Aspect`,`l33-aspect`,.25,4,.05,1)}</div>
        </div>

        <div id="tab-rgbsplit" class="tab-content">
          <div class="control-group"><h4>Master</h4><label style="display:flex; justify-content:space-between;">Enable <input type="checkbox" id="l34-en"></label>${Pc(`l34`)}</div>
          <div class="control-group"><h4>Split</h4>${Z(`Amount`,`l34-amount`,0,.05,.001,.008)}${Z(`Angle`,`l34-angle`,0,360,1,0)}</div>
        </div>


        <div id="tab-kaleido" class="tab-content">
          <div class="control-group"><h4>Global Modifier</h4><p style="font-size:13px; color:#888;">Folds underlying layers.</p>${Pc(`l15`)}</div>
          <div class="control-group"><h4>Shape</h4>${Z(`Segments`,`l15-segments`,2,24,1,6)}${Z(`Spin`,`l15-speed`,-2,2,.1,1)}${Z(`Zoom`,`l15-zoom`,.1,5,.1,1)}${Z(`Pan X`,`l15-offX`,-1,1,.01,0)}${Z(`Pan Y`,`l15-offY`,-1,1,.01,0)}</div>
        </div>
        <div id="tab-crt" class="tab-content">
          <div class="control-group"><h4>Master</h4><label style="display:flex; justify-content:space-between;">Enable <input type="checkbox" id="l24-en"></label>${Pc(`l24`)}</div>
          <div class="control-group"><h4>Grid</h4>${Z(`Density`,`l24-density`,10,2e3,1,800)}${Z(`Intensity`,`l24-intensity`,0,2,.01,1)}${Z(`Skew`,`l24-skew`,-5,5,.01,0)}</div>
        </div>
        <div id="tab-post" class="tab-content">
          <div class="control-group"><h4>Chroma Aberration</h4><label style="display:flex; justify-content:space-between;">Enable <input type="checkbox" id="l16-en"></label>${Pc(`l16`)}${Z(`Amount`,`l16-amount`,0,.2,.001,.05)}</div>
          <div class="v-divider"></div>
          <div class="control-group"><h4>Pixel Melt</h4><label style="display:flex; justify-content:space-between;">Enable <input type="checkbox" id="l17-en"></label>${Pc(`l17`)}${Z(`Scale`,`l17-scale`,1,500,1,100)}${Z(`Amount`,`l17-amount`,0,.5,.01,.1)}${Z(`Speed`,`l17-speed`,0,5,.1,1)}</div>
          <div class="v-divider"></div>
          <div class="control-group"><h4>Halftone Print</h4><label style="display:flex; justify-content:space-between;">Enable <input type="checkbox" id="l18-en"></label>${Pc(`l18`)}${Z(`Scale`,`l18-scale`,10,500,1,10)}${Z(`Contrast`,`l18-amount`,.1,2,.1,1)}<div class="ctrl-row">Col ${Q(`l18-col`)}</div>${Fc(`l18`)}</div>
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
`;var Lc=new ai,Rc=new Ri(-Tc.width/Tc.height/2,Tc.width/Tc.height/2,.5,-.5,.1,100);Rc.position.z=1;var zc=new _c({antialias:!0,preserveDrawingBuffer:!0});document.getElementById(`canvas-holder`).appendChild(zc.domElement);var Bc=new Pt(1024,1024,{minFilter:g,magFilter:g,format:P}),Vc=new ai,Hc=new Ri(-.5,.5,.5,-.5,.1,100);Hc.position.z=1;var Uc=new jt,Wc=new jt,Gc=document.createElement(`canvas`);Gc.width=4096,Gc.height=Math.round(4096/Ec);var Kc=Gc.getContext(`2d`),qc=new hi(Gc);qc.wrapS=u,qc.minFilter=g;var Jc=document.createElement(`canvas`);Jc.width=4096,Jc.height=Math.round(4096/Ec);var Yc=Jc.getContext(`2d`),Xc=new hi(Jc);Xc.minFilter=g;var Zc=document.createElement(`canvas`);Zc.width=4096,Zc.height=Math.round(4096/Ec);var Qc=Zc.getContext(`2d`),$c=new hi(Zc);$c.minFilter=g;var el=document.createElement(`canvas`);el.width=2048,el.height=Math.round(2048/Ec);var tl=el.getContext(`2d`),nl=new hi(el);nl.minFilter=g;var rl=document.createElement(`canvas`);rl.width=2048,rl.height=Math.round(2048/Ec);var il=rl.getContext(`2d`),al=new hi(rl);al.minFilter=g;var ol=[],sl=0;function cl(e){let t=Zc.width,n=Zc.height;if(Qc.clearRect(0,0,t,n),!X.l30_en)return;let r=X.l30_col||`#00ff44`,i=Math.round(X.l30_size*n),a=X.l30_posX*t,o=X.l30_posY*n,s=new Date,c=[`${String(s.getHours()).padStart(2,`0`)}:${String(s.getMinutes()).padStart(2,`0`)}:${String(s.getSeconds()).padStart(2,`0`)}.${String(Math.floor(s.getMilliseconds()/10)).padStart(2,`0`)}`];X.l30_showDate&&c.unshift(s.toLocaleDateString(`en-US`,{year:`numeric`,month:`2-digit`,day:`2-digit`})),X.l30_showFrames&&c.push(`P:${e.toFixed(4)}`),Qc.font=`bold ${i}px 'Courier New', monospace`,Qc.textAlign=`center`,Qc.textBaseline=`middle`,Qc.fillStyle=r,Qc.shadowColor=r,Qc.shadowBlur=i*.3;let l=i*1.3,u=c.length*l;c.forEach((e,t)=>{Qc.fillText(e,a,o-u/2+t*l+l/2)}),$c.needsUpdate=!0}var ll=0;function ul(e){let t=el.width,n=el.height;if(tl.fillStyle=`rgba(0,0,0,${1-X.l31_trails})`,tl.fillRect(0,0,t,n),!X.l31_en){nl.needsUpdate=!0;return}ll+=e*X.l31_speed*Math.PI;let r=X.l31_col||`#ff00ff`,i=Math.round(X.l31_freqX),a=Math.round(X.l31_freqY),o=X.l31_phase*Math.PI*2+ll,s=t*.44,c=n*.44,l=t/2,u=n/2;tl.beginPath(),tl.strokeStyle=r,tl.shadowColor=r,tl.shadowBlur=8,tl.lineWidth=X.l31_thick,tl.lineCap=`round`;for(let e=0;e<=600;e++){let t=e/600*Math.PI*2,n=l+s*Math.sin(i*t+o),r=u+c*Math.sin(a*t);e===0?tl.moveTo(n,r):tl.lineTo(n,r)}tl.stroke(),nl.needsUpdate=!0}function dl(e){return[parseInt(e.slice(1,3),16),parseInt(e.slice(3,5),16),parseInt(e.slice(5,7),16)]}function fl(e,t,n){let r=dl(e||`#ffb000`),i=dl(t||`#ff4400`);return`rgb(${Math.round(r[0]+(i[0]-r[0])*n)},${Math.round(r[1]+(i[1]-r[1])*n)},${Math.round(r[2]+(i[2]-r[2])*n)})`}function pl(){let e=Math.round(X.l32_count||200);if(e===sl&&ol.length===e)return;for(;ol.length>e;)ol.pop();let t=rl.width,n=rl.height,r=(X.l32_emitX??.5)*t,i=(X.l32_emitY??.5)*n,a=Math.max(.001,X.l32_spread)*Math.min(t,n)*.5;for(;ol.length<e;){let e=Math.random()*Math.PI*2,t=Math.random()*a,n=X.l32_speed||1,o=X.l32_size*(1-(X.l32_sizeRand||0)*Math.random()*.9);ol.push({x:r+Math.cos(e)*t,y:i+Math.sin(e)*t,vx:(Math.random()-.5)*n*2,vy:(Math.random()-.5)*n*2,life:Math.random(),maxLife:(.5+Math.random()*.5)*(X.l32_lifespan||1),age:Math.random(),size:Math.max(.5,o),baseAngle:e})}sl=e}function ml(e){let t=rl.width,n=rl.height,r=1-X.l32_trails**(e*60);if(il.fillStyle=`rgba(0,0,0,${Math.max(.001,Math.min(1,r))})`,il.fillRect(0,0,t,n),!X.l32_en){al.needsUpdate=!0;return}pl();let i=X.l32_col||`#ffb000`,a=X.l32_colB||`#ff4400`,o=X.l32_speed,s=X.l32_gravity,c=X.l32_turbulence||0,l=X.l32_spin||0,u=X.l32_burst||0,d=X.l32_glow||0,f=Math.max(.1,X.l32_lifespan||1),p=(X.l32_emitX??.5)*t,m=(X.l32_emitY??.5)*n,h=Math.max(.001,X.l32_spread)*Math.min(t,n)*.5;for(let r=0;r<ol.length;r++){let g=ol[r];if(c>0&&(g.vx+=(Math.random()-.5)*c*e*10,g.vy+=(Math.random()-.5)*c*e*10),l!==0){let t=g.x-p,n=g.y-m,r=Math.atan2(n,t)+l*e,i=Math.sqrt(t*t+n*n);g.vx+=(Math.cos(r)*i-t)*.1,g.vy+=(Math.sin(r)*i-n)*.1}if(u>0&&g.life<.2){let t=g.x-p,n=g.y-m,r=Math.sqrt(t*t+n*n)+.01;g.vx+=t/r*u*o*e*20,g.vy+=n/r*u*o*e*20}let _=Math.sqrt(g.vx*g.vx+g.vy*g.vy),v=o*8;if(_>v&&(g.vx*=v/_,g.vy*=v/_),g.x+=g.vx*o*e*30,g.y+=g.vy*o*e*30,g.vy+=s*e*2,g.age+=e/f,g.life=1-g.age,g.life<=0||g.x<-50||g.x>t+50||g.y<-50||g.y>n+50){let e=Math.random()*Math.PI*2,t=Math.random()*h;g.x=p+Math.cos(e)*t,g.y=m+Math.sin(e)*t,g.vx=(Math.random()-.5)*o*2,g.vy=(Math.random()-.5)*o*2,g.age=0,g.life=1,g.maxLife=(.5+Math.random()*.5)*f;let n=X.l32_size*(1-(X.l32_sizeRand||0)*Math.random()*.9);g.size=Math.max(.5,n)}let y=Math.max(0,Math.min(1,g.life*2)),b=fl(i,a,1-g.life),x=g.size*(.3+g.life*.7);d>0?(il.shadowColor=b,il.shadowBlur=x*d*4):il.shadowBlur=0,il.globalAlpha=y,il.fillStyle=b,il.beginPath(),il.arc(g.x,g.y,Math.max(.5,x),0,Math.PI*2),il.fill()}il.globalAlpha=1,il.shadowBlur=0,al.needsUpdate=!0}var hl=`Courier New.Georgia.Impact.Arial Black.Orbitron.Russo One.Share Tech Mono.VT323.Press Start 2P.Oswald.Bebas Neue.Exo 2.Rajdhani.Michroma.Bruno Ace SC.Syncopate.Audiowide.Jura.Quantico.Space Mono.Nova Mono.Cutive Mono.IBM Plex Mono.Permanent Marker.Abril Fatface.Ultra.Alfa Slab One.Anton.Black Ops One.Boogaloo.Monoton.Righteous.Megrim.Stalinist One.Train One.Caesar Dressing`.split(`.`),gl=new Set([`Courier New`,`Georgia`,`Impact`,`Arial Black`]);function _l(e){return gl.has(e)?Promise.resolve():new Promise(t=>{let n=document.createElement(`link`);n.rel=`stylesheet`,n.href=`https://fonts.googleapis.com/css2?family=${encodeURIComponent(e.replace(/ /g,`+`))}&display=swap`,n.onload=()=>{gl.add(e),t()},n.onerror=()=>t(),document.head.appendChild(n),setTimeout(t,2e3)})}document.addEventListener(`DOMContentLoaded`,()=>{});function vl(){let e=document.getElementById(`l25-font`);e&&(e.innerHTML=``,hl.forEach(t=>{let n=document.createElement(`option`);n.value=t,n.textContent=t,t===X.l25_font&&(n.selected=!0),e.appendChild(n)}),e.onchange=async e=>{X.l25_font=e.target.value,await _l(X.l25_font)})}var yl=[];function bl(){let e=Jc.width,t=Math.max(1,X.l26_barW),n=Math.max(0,X.l26_barGap),r=Math.floor(e/(t+n));yl.length!==r&&(yl=Array.from({length:r},()=>.1+Math.random()*.5))}function xl(e){let t=Jc.width,n=Jc.height;if(Yc.clearRect(0,0,t,n),!X.l26_en)return;bl();let r=Math.max(1,X.l26_barW),i=Math.max(0,X.l26_barGap),a=Math.round(X.l26_hBars||0),o=Math.max(1,X.l26_hBarH||2),s=X.l26_noiseSpeed,c=X.l26_noiseAmt,l=X.l26_squeeze,u=X.l26_topEdge,d=X.l26_botEdge,f=X.l26_glowAmt,p=X.l26_colBot||`#00ff44`,m=X.l26_colMid||`#ffee00`,h=X.l26_colTop||`#ff2200`,g=(1-u)*n,_=(1-d)*n,v=_-g,y=yl.length,b=(t-(y*(r+i)-i))/2;for(let t=0;t<y;t++){let n=Math.max(.02,Math.min(1,yl[t]+(Math.random()-.45)*c*e*s));yl[t]=yl[t]*.85+n*.15;let u=t/Math.max(1,y-1),d=1-l*(1-Math.cos(u*Math.PI*2-Math.PI))*.5,x=yl[t]*d*v,S=b+t*(r+i),C=_-x;if(X.l26_gradient){let e=Yc.createLinearGradient(S,_,S,g);e.addColorStop(0,p),e.addColorStop(.5,m),e.addColorStop(1,h),Yc.fillStyle=e}else{let e=yl[t]*d;e<.5?Yc.fillStyle=fl(p,m,e*2):Yc.fillStyle=fl(m,h,(e-.5)*2)}if(Yc.fillRect(S,C,r,x),f>0){let e=Math.min(1,yl[t]*d),n;n=e<.5?fl(p,m,e*2):fl(m,h,(e-.5)*2),Yc.save(),Yc.shadowColor=n,Yc.shadowBlur=12*f,Yc.fillRect(S,C,r,x),Yc.restore()}if(a>0){let e=v/(a+1);Yc.save(),Yc.globalCompositeOperation=`destination-out`,Yc.fillStyle=`rgba(0,0,0,1)`;for(let t=0;t<=a;t++){let n=_-t*e-o/2;Yc.fillRect(S,n,r,o)}Yc.restore()}}Xc.needsUpdate=!0}function Sl(){let e=Gc.width,t=Gc.height;if(Kc.clearRect(0,0,e,t),!X.l25_en)return;let n=(X.l25_text||``).split(`|`),r=X.l25_font||`Courier New`,i=X.l25_fontStyle||`bold`,a=Math.round(X.l25_size*t),o=X.l25_col||`#ffb000`,s=X.l25_tracking||0,c=X.l25_lineSpacing||1.2,l=X.l25_align||`center`,u=X.l25_outline||0,d=X.l25_shadow||0,f=X.l25_glitch||0;Kc.font=`${i} ${a}px '${r}', monospace`,Kc.textAlign=l===`center`?`center`:l===`right`?`right`:`left`,Kc.textBaseline=`middle`;let p=l===`center`?e/2:l===`right`?e-a:a,m=a*c,h=X.l25_posY*t-n.length*m/2+m/2;d>0&&(Kc.save(),Kc.shadowColor=`rgba(0,0,0,0.8)`,Kc.shadowBlur=d,Kc.shadowOffsetX=d*.5,Kc.shadowOffsetY=d*.5),u>0&&(Kc.strokeStyle=`rgba(0,0,0,0.9)`,Kc.lineWidth=u,Kc.lineJoin=`round`,n.forEach((e,t)=>{let n=h+t*m;s===0?Kc.strokeText(e,p,n):Cl(Kc,e,p,n,s,`stroke`)})),Kc.fillStyle=o,n.forEach((e,t)=>{let n=h+t*m;if(f>0&&Math.random()<f*.3){Kc.save(),Kc.fillStyle=`rgba(255,0,80,0.7)`;let t=(Math.random()-.5)*f*30;s===0?Kc.fillText(e,p+t,n):Cl(Kc,e,p+t,n,s,`fill`),Kc.restore(),Kc.fillStyle=o}s===0?Kc.fillText(e,p,n):Cl(Kc,e,p,n,s,`fill`)}),d>0&&Kc.restore(),qc.needsUpdate=!0}function Cl(e,t,n,r,i,a){let o=t.split(``),s=e.measureText(t),c=s.width/Math.max(1,o.length),l=i*c,u=s.width+l*(o.length-1),d=n-u/2;e.textAlign===`right`?d=n-u:e.textAlign===`left`&&(d=n),e.save(),e.textAlign=`left`,o.forEach(t=>{a===`fill`?e.fillText(t,d,r):e.strokeText(t,d,r),d+=c+l}),e.restore()}var wl=[`presetName`,`duration`,`fps`,`exportScale`,`cycles`,`splitView`,`showGuide`,`isolateWall`,`layerOrder`,`l25_text`,`l25_font`,`l25_fontStyle`,`l25_align`,`l26_gradient`,`l31_col`,`l32_col`,`l32_colB`,`l30_col`,`l30_showDate`,`l30_showFrames`],Tl=`
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
`;Object.keys(X).forEach(e=>{wl.includes(e)||((typeof X[e]==`number`||typeof X[e]==`boolean`)&&(Tl+=`uniform float u_${e};\n`),typeof X[e]==`string`&&X[e].startsWith(`#`)&&(Tl+=`uniform vec3 u_${e};\n`))});var El=Tl+`
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
`,Dl=new Gr({vertexShader:`varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:El+`
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
`}),Ol=new Gr({vertexShader:`varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`void main() { gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0); }`});function kl(){let e=El+`
void main() {
  vec3 color = vec3(0.0);
  vec2 uv = vec2(u_globalOffset + vUv.x * u_globalScale, vUv.y);
  float p = u_progress;
  float fade = smoothstep(0.0, 1.0, p);
`;e+=`
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
    }
`,X.layerOrder.forEach(t=>{Mc[t]&&(e+=Mc[t]+`
`)}),e+=`  gl_FragColor = vec4(color, 1.0);
}`,Ol.fragmentShader=e,Ol.needsUpdate=!0}function Al(e){let t=document.getElementById(e.replace(/_/g,`-`)+`-en`);if(!t)return;let n=t.closest(`.tab-btn`);if(n){let e=n.closest(`.tab-headers`);if(e){let t=document.querySelector(`.cat-btn[data-cat="`+e.id+`"]`);t&&!t.classList.contains(`active`)&&t.click()}n.classList.contains(`active`)||n.click();let t=document.getElementById(n.dataset.tab);t&&t.scrollIntoView({behavior:`smooth`,block:`nearest`})}}window.focusTab=Al;var jl=null;window.dragStart=(e,t)=>{jl=t,e.dataTransfer.effectAllowed=`move`,setTimeout(()=>{e.target.classList.add(`dragging`)},0)},window.dragEnd=e=>{jl=null,e.target.classList.remove(`dragging`),document.querySelectorAll(`.layer-item`).forEach(e=>{e.classList.remove(`drag-over-top`),e.classList.remove(`drag-over-bot`)})},window.dragOver=e=>{e.preventDefault(),e.dataTransfer.dropEffect=`move`;let t=e.currentTarget.getBoundingClientRect(),n=t.top+t.height/2;e.clientY<n?(e.currentTarget.classList.add(`drag-over-top`),e.currentTarget.classList.remove(`drag-over-bot`)):(e.currentTarget.classList.add(`drag-over-bot`),e.currentTarget.classList.remove(`drag-over-top`))},window.dragLeave=e=>{e.currentTarget.classList.remove(`drag-over-top`),e.currentTarget.classList.remove(`drag-over-bot`)},window.drop=(e,t)=>{if(e.preventDefault(),e.currentTarget.classList.remove(`drag-over-top`),e.currentTarget.classList.remove(`drag-over-bot`),jl&&jl!==t){let n=e.currentTarget.getBoundingClientRect(),r=n.top+n.height/2,i=e.clientY<r,a=X.layerOrder.indexOf(jl);X.layerOrder.splice(a,1);let o=X.layerOrder.indexOf(t);i?X.layerOrder.splice(o+1,0,jl):X.layerOrder.splice(o,0,jl),Ml(),kl()}},window.toggleLayer=e=>{let t=document.getElementById(e.replace(/_/g,`-`)+`-en`);t&&(t.checked=!t.checked,t.dispatchEvent(new Event(`input`)))},window.moveLayer=(e,t)=>{let n=X.layerOrder.indexOf(e);n!==-1&&(t===`up`&&n<X.layerOrder.length-1?[X.layerOrder[n],X.layerOrder[n+1]]=[X.layerOrder[n+1],X.layerOrder[n]]:t===`down`&&n>0?[X.layerOrder[n],X.layerOrder[n-1]]=[X.layerOrder[n-1],X.layerOrder[n]]:t===`top`?(X.layerOrder.splice(n,1),X.layerOrder.push(e)):t===`bot`&&(X.layerOrder.splice(n,1),X.layerOrder.unshift(e)),Ml(),kl())};function Ml(){let e=document.getElementById(`layer-list`);e&&(e.innerHTML=``,X.layerOrder.filter(e=>X[e+`_en`]).reverse().forEach(t=>{let n=document.createElement(`div`);n.className=`layer-item active`,n.setAttribute(`draggable`,`true`),n.ondragstart=e=>window.dragStart(e,t),n.ondragend=window.dragEnd,n.ondragover=window.dragOver,n.ondragleave=window.dragLeave,n.ondrop=e=>window.drop(e,t),n.innerHTML=`
            <span class="eye-btn" onclick="toggleLayer('${t}')" title="Hide Effect">👁️</span>
            <span class="drag-handle" onclick="focusTab('${t}')">${Oc[t]||t}</span>
            <div class="layer-controls">
                <button class="layer-btn" onclick="moveLayer('${t}', 'up')" title="Move Up">▲</button>
                <button class="layer-btn" onclick="moveLayer('${t}', 'down')" title="Move Down">▼</button>
            </div>
        `,e.appendChild(n)}))}Lc.add(new Pr(new yi(Ec,1),Ol)),Vc.add(new Pr(new yi(1,1),Dl));var Nl=Ol.uniforms={u_progress:{value:0},uAspect:{value:Ec},u_l8_Tex:{value:Uc},u_l8_Aspect:{value:1},u_l21_Tex:{value:Wc},u_l21_ImgAspect:{value:2},u_l25_Tex:{value:qc},u_l26_Tex:{value:Xc},u_l30_Tex:{value:$c},u_l31_Tex:{value:nl},u_l32_Tex:{value:al},u_globalOffset:{value:0},u_globalScale:{value:1}},$=Dl.uniforms={u_progress:{value:0},uAspect:{value:Ec},tDiffuse:{value:null},u_splitView:{value:0},u_canvasWidth:{value:1e3},u_globalOffset:{value:0},u_globalScale:{value:1},u_isoWall:{value:-1}};function Pl(){Object.keys(X).forEach(e=>{if(wl.includes(e))return;let t=X[e];if(typeof t==`boolean`&&(t=t?1:0),Nl[`u_`+e])Nl[`u_`+e].value instanceof rr?Nl[`u_`+e].value.set(X[e]):Nl[`u_`+e].value=t;else{let n=typeof X[e]==`string`&&X[e].startsWith(`#`);Nl[`u_`+e]={value:n?new rr(X[e]):t}}if($[`u_`+e])$[`u_`+e].value instanceof rr?$[`u_`+e].value.set(X[e]):$[`u_`+e].value=t;else{let n=typeof X[e]==`string`&&X[e].startsWith(`#`);$[`u_`+e]={value:n?new rr(X[e]):t}}});let e=document.getElementById(`no-effect-msg`),t=Object.keys(X).some(e=>e.endsWith(`_en`)&&X[e]);e&&(e.style.display=t||X.showGuide?`none`:`flex`)}function Fl(){Object.keys(X).forEach(e=>{let t=e.replace(/_/g,`-`),n=document.getElementById(t),r=document.getElementById(t+`-hex`),i=document.getElementById(t+`-val`);if(!n&&!r&&![`presetName`,`duration`,`exportScale`,`cycles`,`splitView`,`layerOrder`].includes(e))return;let a=typeof X[e]==`boolean`,o=typeof X[e]==`string`&&X[e].startsWith(`#`);n&&(a?n.checked=X[e]:n.value=X[e]),r&&(r.value=X[e]);let s=e=>{if(i&&(i.value=a?e?`ON`:`OFF`:e),r&&document.activeElement!==r&&(r.value=e),o&&n&&document.activeElement!==n&&(n.value=e),t.endsWith(`-en`)&&n){let t=n.closest(`.tab-btn`);if(t){let n=document.getElementById(t.dataset.tab);e?(t.classList.add(`effect-on`),n&&n.classList.remove(`disabled-content`)):(t.classList.remove(`effect-on`),n&&n.classList.add(`disabled-content`))}Ml()}};s(X[e]),n&&(n.oninput=t=>{let n=a?t.target.checked:o?t.target.value:parseFloat(t.target.value);typeof X[e]==`string`&&!o&&(n=t.target.value),X[e]=n,Pl(),s(n),e===`l21_blur`&&tu(n)},a&&(n.onchange=n.oninput)),r&&(r.oninput=t=>{let n=t.target.value;/^#[0-9A-Fa-f]{6}$/i.test(n)&&(X[e]=n,Pl(),s(n))}),i&&(i.onchange=t=>{let r=parseFloat(t.target.value);X[e]=r,n&&(n.value=r),Pl(),s(r)})})}document.addEventListener(`click`,e=>{if(e.target.classList.contains(`reset-btn`)){let t=e.target.dataset.id,n=parseFloat(e.target.dataset.default),r=t.replace(/-/g,`_`),i=document.getElementById(t),a=document.getElementById(t+`-val`);X[r]=n,i&&(i.value=n),a&&(a.value=n),Pl()}});function Il(){vl();let e=document.getElementById(`l25-text`);e&&(e.value=X.l25_text||`RETRO MASTER LOOP`,e.oninput=e=>{X.l25_text=e.target.value});let t=document.getElementById(`l25-fontStyle`);t&&(t.value=X.l25_fontStyle||`bold`,t.onchange=e=>{X.l25_fontStyle=e.target.value});let n=document.getElementById(`l25-align`);n&&(n.value=X.l25_align||`center`,n.onchange=e=>{X.l25_align=e.target.value})}function Ll(){[[`l30-col`,`l30_col`],[`l31-col`,`l31_col`],[`l32-col`,`l32_col`],[`l32-colB`,`l32_colB`]].forEach(([e,t])=>{let n=document.getElementById(e),r=document.getElementById(e+`-hex`);n&&(n.value=X[t]||`#ffffff`,n.oninput=e=>{X[t]=e.target.value,r&&(r.value=e.target.value)}),r&&(r.value=X[t]||`#ffffff`,r.oninput=e=>{/^#[0-9A-Fa-f]{6}$/i.test(e.target.value)&&(X[t]=e.target.value,n&&(n.value=e.target.value))})}),[[`l30-showDate`,`l30_showDate`],[`l30-showFrames`,`l30_showFrames`]].forEach(([e,t])=>{let n=document.getElementById(e);n&&(n.checked=!!X[t],n.onchange=e=>{X[t]=e.target.checked})})}function Rl(){let e=document.getElementById(`l26-gradient`);e&&(e.checked=!!X.l26_gradient,e.checked&&(e.style.backgroundColor=`var(--amber)`),e.onchange=t=>{X.l26_gradient=t.target.checked,e.style.backgroundColor=t.target.checked?`var(--amber)`:``})}document.getElementById(`view-full`).onchange=e=>{e.target.checked&&(X.splitView=!1,$.u_splitView.value=0,Kl())},document.getElementById(`view-split`).onchange=e=>{e.target.checked&&(X.isolateWall=null,$.u_isoWall.value=-1,Object.keys(du||{}).forEach(e=>{let t=document.getElementById(e);t&&t.classList.remove(`active`)}),X.splitView=!0,$.u_splitView.value=1,Kl())},document.querySelectorAll(`.cat-btn`).forEach(e=>{e.onclick=()=>{document.querySelectorAll(`.cat-btn`).forEach(e=>e.classList.remove(`active`)),document.querySelectorAll(`.tab-headers`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`);let t=document.getElementById(e.dataset.cat);t&&t.classList.add(`active`);let n=t?t.querySelector(`.tab-btn`):null;n&&n.click()}}),document.querySelectorAll(`.tab-btn`).forEach(e=>{e.onclick=t=>{if(t.target.classList.contains(`layer-toggle`)||t.target.classList.contains(`tab-name`))return;document.querySelectorAll(`.tab-btn, .tab-content`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`);let n=document.getElementById(e.dataset.tab);n&&n.classList.add(`active`)}}),document.getElementById(`presetSelect`).onchange=e=>{let t=e.target.value,n=e.target.options[e.target.selectedIndex].text;Object.assign(X,JSON.parse(JSON.stringify(kc))),Ac[t]?(Object.assign(X,Ac[t]),X.presetName=n):X.presetName=`Retro Master`,document.getElementById(`view-full`).checked=!0,$.u_splitView.value=0,Fl(),Il(),Rl(),Ll(),Pl(),kl(),Ml()};var zl=jc.silicon_forest;for(let e=0;e<5;e++){let t=document.getElementById(`pal-c${e+1}`),n=document.getElementById(`pal-h${e+1}`);t.value=zl[e],n.value=zl[e],t.oninput=e=>n.value=e.target.value,n.oninput=e=>{/^#[0-9A-Fa-f]{6}$/i.test(e.target.value)&&(t.value=e.target.value),document.getElementById(`paletteSelect`).value=`custom`}}document.getElementById(`paletteSelect`).value=`silicon_forest`,document.getElementById(`paletteSelect`).onchange=e=>{let t=jc[e.target.value];if(t)for(let e=0;e<5;e++)document.getElementById(`pal-c${e+1}`).value=t[e],document.getElementById(`pal-h${e+1}`).value=t[e]},document.getElementById(`btn-apply-palette`).onclick=()=>{let e=[];for(let t=1;t<=5;t++)e.push(document.getElementById(`pal-c${t}`).value);let t=``;Object.keys(X).forEach(n=>{if(typeof X[n]==`string`&&X[n].startsWith(`#`)){let r=e.filter(e=>e!==t);r.length===0&&(r=e);let i=r[Math.floor(Math.random()*r.length)];X[n]=i,t=i}}),Fl(),Pl()},document.querySelectorAll(`.btn-local-pal`).forEach(e=>{e.onclick=()=>{let t=e.dataset.layer,n=[];for(let e=1;e<=5;e++)n.push(document.getElementById(`pal-c${e}`).value);let r=``;Object.keys(X).forEach(e=>{if((e.startsWith(t+`_`)||e===t)&&typeof X[e]==`string`&&X[e].startsWith(`#`)){let t=n.filter(e=>e!==r);t.length===0&&(t=n);let i=t[Math.floor(Math.random()*t.length)];X[e]=i,r=i}}),Fl(),Pl()}});var Bl=new Bi,Vl=!1,Hl=0;function Ul(){let e=document.getElementById(`guide-overlay-canvas`);if(!e)return;if(!X.showGuide){e.style.display=`none`;return}let t=parseInt(zc.domElement.style.width)||zc.domElement.width,n=parseInt(zc.domElement.style.height)||zc.domElement.height;if(!t||!n)return;e.style.display=`block`,(e.width!==t||e.height!==n)&&(e.width=t,e.height=n,e.style.width=t+`px`,e.style.height=n+`px`);let r=t,i=n,a=e.getContext(`2d`);if(a.clearRect(0,0,r,i),X.splitView&&!Vl){let e={N:3908,E:5151,S:3908,W:5152},t=Math.round(i*.04),n=Math.round((i-t)/2),o=Math.round(e.N/(e.N+e.E)*r),s=r-o,c=Math.round(e.S/(e.S+e.W)*r),l=r-c;vu(a,`N`,0,0,o,n),vu(a,`E`,o,0,s,n),vu(a,`S`,0,n+t,c,n),vu(a,`W`,c,n+t,l,n)}else vu(a,X.isolateWall||`ALL`,0,0,r,i)}function Wl(){if(!Vl){requestAnimationFrame(Wl);let e=performance.now(),t=Math.min(.1,(e-Hl)/1e3);Hl=e;let n=Math.max(1,Math.round(X.cycles)),r=X.duration/n,i=Bl.getElapsedTime()%r/r;Nl.u_progress.value=i,$.u_progress.value=i,Sl(),xl(t),cl(i),ul(t),ml(t),zc.setRenderTarget(Bc),zc.render(Lc,Rc),$.tDiffuse.value=Bc.texture,zc.setRenderTarget(null),zc.render(Vc,Hc),Ul()}}var Gl={N:3908,E:5151,S:3908,W:5152};function Kl(){let e=window.innerWidth-80,t=window.innerHeight-document.getElementById(`bottom-container`).offsetHeight-document.getElementById(`palette-bar`).offsetHeight-document.getElementById(`global-header`).offsetHeight-60,n,r;if(X.isolateWall&&!Vl){let i=Gl[X.isolateWall]||Tc.width,a=i/Tc.height;n=e,r=Math.floor(n/a),r>t&&(r=t,n=Math.floor(r*a)),zc.setSize(n,r),Bc.setSize(n,r);let o={N:0,E:3908,S:9059,W:12964}[X.isolateWall];Nl.u_globalOffset.value=o/Tc.width,Nl.u_globalScale.value=i/Tc.width,$.u_globalOffset.value=o/Tc.width,$.u_globalScale.value=i/Tc.width}else if(X.splitView&&!Vl){let i=.96,a=Tc.width/2/(Tc.height*2/i);n=e,r=Math.floor(n/a),r>t&&(r=t,n=Math.floor(r*a)),zc.setSize(n,r),Bc.setSize(n*2,Math.floor(r*i/2)),Nl.u_globalOffset.value=0,Nl.u_globalScale.value=1,$.u_globalOffset.value=0,$.u_globalScale.value=1}else{let i=e/Tc.width;n=Math.floor(Tc.width*i),r=Math.floor(Tc.height*i),r>t&&(r=t,n=Math.floor(r*(Tc.width/Tc.height))),zc.setSize(n,r),Bc.setSize(n,r),Nl.u_globalOffset.value=0,Nl.u_globalScale.value=1,$.u_globalOffset.value=0,$.u_globalScale.value=1}$.u_canvasWidth.value=n;let i=document.getElementById(`wall-labels-full`),a=document.getElementById(`split-labels-top`),o=document.getElementById(`split-labels-bottom`),s=document.getElementById(`iso-wall-label`);if(i&&a&&o){let e=X.splitView&&!Vl&&!X.isolateWall,t=!!X.isolateWall&&!Vl;if(i.style.display=!e&&!t?`flex`:`none`,a.style.display=e?`flex`:`none`,o.style.display=e?`flex`:`none`,i.style.width=n+`px`,a.style.width=n+`px`,o.style.width=n+`px`,s)if(t){let e={N:`NORTH`,E:`EAST`,S:`SOUTH`,W:`WEST`};s.querySelector(`.label-box`).textContent=`[ `+e[X.isolateWall]+` ]`,s.style.display=`flex`,s.style.width=n+`px`}else s.style.display=`none`}requestAnimationFrame(hu)}window.addEventListener(`resize`,Kl);var ql=[],Jl=0,Yl=null,Xl=18119,Zl=1080;function Ql(){let e=document.createElement(`canvas`);e.width=Xl,e.height=Zl;let t=e.getContext(`2d`);t.clearRect(0,0,Xl,Zl),ql.forEach(e=>{let n=e.img.width/e.img.height,r=Zl*e.scale,i=r*n,a=(e.posX+.5)*Xl-i/2,o=(.5-e.posY)*Zl-r/2;t.globalAlpha=e.opacity,t.drawImage(e.img,a,o,i,r),t.globalAlpha=1}),Uc&&Uc.dispose&&Uc.dispose(),Uc=new hi(e),Uc.minFilter=g,Uc.magFilter=g,Nl.u_l8_Tex.value=Uc,Nl.u_l8_Aspect.value=Xl/Zl,Nl.u_l8_scale&&(Nl.u_l8_scale.value=1),Nl.u_l8_posX&&(Nl.u_l8_posX.value=0),Nl.u_l8_posY&&(Nl.u_l8_posY.value=0)}function $l(){let e=document.getElementById(`l8-img-controls`),t=document.getElementById(`l8-tint-row`),n=document.getElementById(`l8-none-hint`),r=ql.find(e=>e.id===Yl);if(!r){e&&(e.style.display=`none`),t&&(t.style.display=`none`),n&&(n.style.display=ql.length?`none`:``);return}n&&(n.style.display=`none`),e&&(e.style.display=`grid`),t&&(t.style.display=``);let i={"l8c-scale":r.scale,"l8c-panx":r.posX,"l8c-posy":r.posY,"l8c-opacity":r.opacity};Object.entries(i).forEach(([e,t])=>{let n=document.getElementById(e),r=document.getElementById(e+`-n`);n&&(n.value=t),r&&(r.value=parseFloat(t).toFixed(3))})}function eu(){let e=document.getElementById(`l8-thumb-row`),t=document.getElementById(`l8-none-hint`);if(e){if(e.innerHTML=``,ql.length===0){Yl=null,$l(),t&&(t.style.display=``);return}t&&(t.style.display=`none`),ql.find(e=>e.id===Yl)||(Yl=ql[0].id),ql.forEach(t=>{let n=document.createElement(`div`);n.className=`l8-thumb`+(t.id===Yl?` selected`:``),n.innerHTML=`<img src="${t.thumbUrl}" alt="${t.name}"><div class="l8-del" data-id="${t.id}">✕</div>`,n.addEventListener(`click`,e=>{e.target.classList.contains(`l8-del`)||(Yl=t.id,eu(),$l())}),n.querySelector(`.l8-del`).addEventListener(`click`,e=>{e.stopPropagation();let n=ql.findIndex(e=>e.id===t.id);n>=0&&ql.splice(n,1),Yl===t.id&&(Yl=ql.length?ql[0].id:null),eu(),$l(),ql.length===0?(X.l8_en=!1,Fl(),Pl()):Ql()}),e.appendChild(n)}),$l()}}(function(){[[`l8c-scale`,`scale`,1],[`l8c-panx`,`posX`,3],[`l8c-posy`,`posY`,3],[`l8c-opacity`,`opacity`,2]].forEach(([e,t,n])=>{let r=document.getElementById(e),i=document.getElementById(e+`-n`);if(!r)return;let a=e=>{let a=ql.find(e=>e.id===Yl);a&&(a[t]=e,r&&(r.value=e),i&&(i.value=e.toFixed(n)),Ql())};r.addEventListener(`input`,()=>a(parseFloat(r.value))),i&&i.addEventListener(`change`,()=>a(parseFloat(i.value)))})})(),document.getElementById(`l8-add-btn`).onclick=()=>document.getElementById(`l8-upload`).click(),document.getElementById(`l8-upload`).onchange=e=>{let t=Array.from(e.target.files);if(!t.length)return;let n=t.length;t.forEach(e=>{let t=URL.createObjectURL(e),r=new Image;r.onload=()=>{let t=document.createElement(`canvas`);t.width=80,t.height=45,t.getContext(`2d`).drawImage(r,0,0,80,45);let i={id:Jl++,img:r,name:e.name,thumbUrl:t.toDataURL(),posX:0,posY:0,scale:1,opacity:1};ql.push(i),Yl=i.id,n--,n===0&&(Ql(),eu(),X.l8_en=!0,Fl(),Pl())},r.src=t}),e.target.value=``},document.getElementById(`l21-upload`).onchange=e=>{let t=e.target.files[0];if(!t)return;let n=new Image,r=URL.createObjectURL(t);n.onload=()=>{Nl.u_l21_ImgAspect.value=n.width/n.height,window._l21SrcImg=n,window._l21SrcAspect=n.width/n.height,tu(X.l21_blur||0),X.l21_en=!0,Fl(),Pl()},n.src=r};function tu(e){let t=window._l21SrcImg;if(!t)return;let n=Math.min(t.width,4096),r=Math.floor(n/(t.width/t.height)),i=document.createElement(`canvas`);i.width=n,i.height=r;let a=i.getContext(`2d`);if(e>0){let i=Math.round(e*40);a.filter=`blur(${i}px)`,a.drawImage(t,-i*2,-i*2,n+i*4,r+i*4),a.filter=`none`}else a.drawImage(t,0,0,n,r);let o=new hi(i);o.wrapS=u,o.minFilter=v,o.generateMipmaps=!0,Nl.u_l21_Tex.value=o,Nl.u_l21_ImgAspect.value=window._l21SrcAspect||2,Wc=o}(function(){let e=document.getElementById(`l21-blur`);e&&e.addEventListener(`input`,()=>{X.l21_blur=parseFloat(e.value),tu(X.l21_blur)})})(),(function(){let e=new Set([`tab-svg`,`tab-equi`]);document.querySelectorAll(`.tab-content`).forEach(t=>{if(e.has(t.id))return;let n=document.createElement(`button`);n.className=`btn-randomize`,n.dataset.tabId=t.id,n.textContent=`🎲  RANDOMIZE EFFECT`,t.appendChild(n)});function t(e,t,n){let r=Math.round((t-e)/n);return parseFloat((e+Math.round(Math.random()*r)*n).toFixed(6))}function n(e){e.querySelectorAll(`input[type="range"]`).forEach(e=>{let n=parseFloat(e.min),r=parseFloat(e.max),i=parseFloat(e.step)||.01,a=e.id.replace(/-/g,`_`);if(!Object.prototype.hasOwnProperty.call(X,a))return;let o=t((e=>e.includes(`speed`)||e.includes(`motion`)?Math.max(n,-2):n)(e.id),(e=>e.includes(`speed`)||e.includes(`motion`)?Math.min(r,2):r)(e.id),i);e.value=o,X[a]=o;let s=document.getElementById(e.id+`-val`);s&&(s.value=o)}),e.querySelectorAll(`input[type="color"]`).forEach(e=>{let t=e.id.replace(/-/g,`_`);if(!Object.prototype.hasOwnProperty.call(X,t))return;let n=r(Math.floor(Math.random()*360),60+Math.floor(Math.random()*40),30+Math.floor(Math.random()*40));e.value=n,X[t]=n;let i=document.getElementById(e.id+`-hex`);i&&(i.value=n)}),Pl(),kl()}function r(e,t,n){t/=100,n/=100;let r=t=>(t+e/30)%12,i=t*Math.min(n,1-n),a=e=>n-i*Math.max(-1,Math.min(r(e)-3,Math.min(9-r(e),1))),o=e=>Math.round(e*255).toString(16).padStart(2,`0`);return`#`+o(a(0))+o(a(8))+o(a(4))}document.getElementById(`effects-panel`).addEventListener(`click`,e=>{let t=e.target.closest(`.btn-randomize`);if(!t)return;let r=document.getElementById(t.dataset.tabId);r&&n(r)})})(),document.getElementById(`btn-reset`).onclick=()=>{Object.assign(X,JSON.parse(JSON.stringify(kc))),document.getElementById(`presetSelect`).value=`default`,document.getElementById(`view-full`).checked=!0,$.u_splitView.value=0,Fl(),Il(),Rl(),Ll(),Pl(),kl(),Ml()},document.getElementById(`btn-save`).onclick=()=>{let e=document.createElement(`a`);e.href=URL.createObjectURL(new Blob([JSON.stringify(X)],{type:`json`})),e.download=`${X.presetName}.json`,e.click()},document.getElementById(`btn-load`).onclick=()=>document.getElementById(`file-input`).click(),document.getElementById(`file-input`).onchange=e=>{let t=new FileReader;t.onload=e=>{Object.assign(X,JSON.parse(e.target.result)),document.getElementById(`presetSelect`).value=`default`,document.getElementById(X.splitView?`view-split`:`view-full`).checked=!0,$.u_splitView.value=X.splitView?1:0,Fl(),Il(),Rl(),Ll(),Pl(),kl(),Ml()},t.readAsText(e.target.files[0])},document.getElementById(`btn-record`).onclick=async()=>{Vl=!0;let e=document.getElementById(`export-overlay`),t=document.getElementById(`progress-bar`),n=document.getElementById(`progress-text`);e.style.display=`flex`;let r=X.splitView;X.splitView=!1,$.u_splitView.value=0,Kl(),Nl.u_globalOffset.value=0,Nl.u_globalScale.value=1,$.u_globalOffset.value=0,$.u_globalScale.value=1;let i=Math.floor(Tc.width*X.exportScale),a=Math.floor(Tc.height*X.exportScale);zc.setSize(i,a),Bc.setSize(i,a),$.u_canvasWidth.value=i;let o=new Cc.default({quality:.9,frameRate:X.fps}),s=new wc.default,c=s.folder(`image_sequence`),l=X.duration*X.fps;for(let e=0;e<l;e++){let r=Math.max(1,Math.round(X.cycles)),i=e/l*r%1;Nl.u_progress.value=i,$.u_progress.value=i,zc.setRenderTarget(Bc),zc.render(Lc,Rc),$.tDiffuse.value=Bc.texture,zc.setRenderTarget(null),zc.render(Vc,Hc),o.addFrame(zc.domElement);let a=await new Promise(e=>zc.domElement.toBlob(e,`image/png`));c.file(`frame_${String(e).padStart(5,`0`)}.png`,a),t.style.width=`${Math.floor(e/l*100)}%`,n.innerText=`RENDERING: ${e}/${l}`,e%10==0&&await new Promise(e=>setTimeout(e,0))}n.innerText=`COMPILING WEBM...`,await new Promise(e=>setTimeout(e,10));let u=await o.complete();s.file(`${X.presetName}_preview.webm`,u),n.innerText=`ZIPPING FILES (This may take a minute)...`,t.style.width=`100%`,await new Promise(e=>setTimeout(e,10));let d=await s.generateAsync({type:`blob`}),f=document.createElement(`a`);f.href=URL.createObjectURL(d),f.download=`${X.presetName}_Export.zip`,f.click(),X.splitView=r,$.u_splitView.value=r?1:0,e.style.display=`none`,Vl=!1,Kl(),Wl()},document.getElementById(`btn-record-walls`).onclick=async()=>{Vl=!0;let e=document.getElementById(`export-overlay`),t=document.getElementById(`progress-bar`),n=document.getElementById(`progress-text`);e.style.display=`flex`;let r=X.splitView;X.splitView=!1,$.u_splitView.value=0;let i=new wc.default,a=X.duration*X.fps,o=X.exportScale,s=[{name:`W1_North`,start:0,width:3908},{name:`W2_East`,start:3908,width:5151},{name:`W3_South`,start:9059,width:3905},{name:`W4_West`,start:12964,width:5155}];for(let e=0;e<s.length;e++){let r=s[e],c=r.start-64,l=r.start+r.width+64-c;Nl.u_globalOffset.value=c/Tc.width,Nl.u_globalScale.value=l/Tc.width,$.u_globalOffset.value=c/Tc.width,$.u_globalScale.value=l/Tc.width;let u=Math.floor(l*o),d=Math.floor(Tc.height*o);zc.setSize(u,d),Bc.setSize(u,d),$.u_canvasWidth.value=u;let f=Math.floor(r.width*o),p=document.createElement(`canvas`);p.width=f,p.height=d;let m=p.getContext(`2d`),h=Math.floor((r.start-c)*o),g=new Cc.default({quality:.9,frameRate:X.fps}),_=i.folder(r.name);for(let i=0;i<a;i++){let o=Math.max(1,Math.round(X.cycles)),s=i/a*o%1;Nl.u_progress.value=s,$.u_progress.value=s,zc.setRenderTarget(Bc),zc.render(Lc,Rc),$.tDiffuse.value=Bc.texture,zc.setRenderTarget(null),zc.render(Vc,Hc),m.drawImage(zc.domElement,-h,0),g.addFrame(p);let c=await new Promise(e=>p.toBlob(e,`image/png`));_.file(`frame_${String(i).padStart(5,`0`)}.png`,c);let l=a*4,u=e*a+i;t.style.width=`${Math.floor(u/l*100)}%`,n.innerText=`RENDERING ${r.name}: ${i}/${a}`,i%5==0&&await new Promise(e=>setTimeout(e,0))}n.innerText=`COMPILING ${r.name} WEBM...`,await new Promise(e=>setTimeout(e,10));let v=await g.complete();i.file(`${X.presetName}_${r.name}_preview.webm`,v)}n.innerText=`ZIPPING FILES (This may take a minute)...`,t.style.width=`100%`,await new Promise(e=>setTimeout(e,10));let c=await i.generateAsync({type:`blob`}),l=document.createElement(`a`);l.href=URL.createObjectURL(c),l.download=`${X.presetName}_Tiled_Export.zip`,l.click(),Nl.u_globalOffset.value=0,Nl.u_globalScale.value=1,$.u_globalOffset.value=0,$.u_globalScale.value=1,X.splitView=r,$.u_splitView.value=r?1:0,e.style.display=`none`,Vl=!1,Kl(),Wl()},document.querySelectorAll(`.btn-wall-single`).forEach(e=>{e.addEventListener(`click`,async()=>{let t={N:{name:`W1_North`,start:0,width:3908},E:{name:`W2_East`,start:3908,width:5151},S:{name:`W3_South`,start:9059,width:3905},W:{name:`W4_West`,start:12964,width:5155}}[e.dataset.wall];Vl=!0;let n=document.getElementById(`export-overlay`),r=document.getElementById(`progress-bar`),i=document.getElementById(`progress-text`);n.style.display=`flex`;let a=X.splitView;X.splitView=!1,$.u_splitView.value=0;let o=X.exportScale,s=X.duration*X.fps,c=t.start-64,l=t.start+t.width+64-c;Nl.u_globalOffset.value=c/Tc.width,Nl.u_globalScale.value=l/Tc.width,$.u_globalOffset.value=c/Tc.width,$.u_globalScale.value=l/Tc.width;let u=Math.floor(l*o),d=Math.floor(Tc.height*o);zc.setSize(u,d),Bc.setSize(u,d),$.u_canvasWidth.value=u;let f=Math.floor(t.width*o),p=document.createElement(`canvas`);p.width=f,p.height=d;let m=p.getContext(`2d`),h=Math.floor((t.start-c)*o),g=new Cc.default({quality:.9,frameRate:X.fps}),_=new wc.default,v=_.folder(t.name);for(let e=0;e<s;e++){let n=Math.max(1,Math.round(X.cycles)),a=e/s*n%1;Nl.u_progress.value=a,$.u_progress.value=a,zc.setRenderTarget(Bc),zc.render(Lc,Rc),$.tDiffuse.value=Bc.texture,zc.setRenderTarget(null),zc.render(Vc,Hc),m.clearRect(0,0,f,d),m.drawImage(zc.domElement,-h,0),g.addFrame(p);let o=await new Promise(e=>p.toBlob(e,`image/png`));v.file(`frame_${String(e).padStart(5,`0`)}.png`,o),r.style.width=`${Math.floor(e/s*100)}%`,i.innerText=`RENDERING ${t.name}: ${e+1}/${s}`,e%5==0&&await new Promise(e=>setTimeout(e,0))}i.innerText=`COMPILING ${t.name} WEBM...`,await new Promise(e=>setTimeout(e,10));let y=await g.complete();_.file(`${X.presetName}_${t.name}_preview.webm`,y),i.innerText=`ZIPPING...`,r.style.width=`100%`,await new Promise(e=>setTimeout(e,10));let b=await _.generateAsync({type:`blob`}),x=document.createElement(`a`);x.href=URL.createObjectURL(b),x.download=`${X.presetName}_${t.name}_Export.zip`,x.click(),Nl.u_globalOffset.value=0,Nl.u_globalScale.value=1,$.u_globalOffset.value=0,$.u_globalScale.value=1,X.splitView=a,$.u_splitView.value=a?1:0,n.style.display=`none`,Vl=!1,Kl(),Wl()})});var nu=document.getElementById(`btn-theme`),ru=!0;nu.addEventListener(`click`,()=>{ru=!ru,document.body.classList.toggle(`light-mode`,!ru),nu.textContent=ru?`☀︎`:`☾`,nu.title=ru?`Switch to light mode`:`Switch to dark mode`});var iu=[{fx:3,fy:2,speed:7e-4},{fx:5,fy:4,speed:6e-4},{fx:3,fy:4,speed:8e-4},{fx:5,fy:2,speed:5e-4}],au=[0,Math.PI*.5,Math.PI,Math.PI*1.5],ou=500,su=null;function cu(e,t,n,r){let i=e.getContext(`2d`),a=e.width,o=e.height;if(!a||!o)return;let s=(t*n.speed+r)%(Math.PI*2);i.clearRect(0,0,a,o);let c=getComputedStyle(document.body).getPropertyValue(`--amber`).trim()||`#ffb000`;for(let e=0;e<4;e++){i.beginPath(),i.strokeStyle=c,i.globalAlpha=.07+e*.22,i.lineWidth=.5+e*.4,i.lineCap=`round`;let t=a*.43,r=o*.43,l=a/2,u=o/2;for(let e=0;e<=ou;e++){let a=e/ou*Math.PI*2,o=l+t*Math.sin(n.fx*a+s),c=u+r*Math.sin(n.fy*a);e===0?i.moveTo(o,c):i.lineTo(o,c)}i.stroke()}i.globalAlpha=1}function lu(e){let t=document.getElementById(`no-effect-msg`);if(!t||t.style.display===`none`){su=null;return}t.querySelectorAll(`.idle-liss-canvas`).forEach((t,n)=>{cu(t,e,iu[n%iu.length],au[n%au.length])}),su=requestAnimationFrame(lu)}function uu(){su||=requestAnimationFrame(lu)}uu(),(function(){let e=document.getElementById(`no-effect-msg`);e&&new MutationObserver(()=>{e.style.display!==`none`&&!su&&uu()}).observe(e,{attributes:!0,attributeFilter:[`style`]})})();var du={"iso-N":`N`,"iso-E":`E`,"iso-S":`S`,"iso-W":`W`};function fu(e){X.isolateWall=e,Object.keys(du).forEach(t=>{let n=document.getElementById(t);n&&n.classList.toggle(`active`,du[t]===e)}),e||(document.getElementById(`view-full`).checked=!0,X.splitView=!1,$.u_splitView.value=0),$.u_isoWall.value=-1,Kl()}[`iso-N`,`iso-E`,`iso-S`,`iso-W`].forEach(e=>{let t=document.getElementById(e);t&&t.addEventListener(`click`,()=>{let t=du[e],n=X.isolateWall===t?null:t;n&&(document.getElementById(`view-full`).checked=!0,document.getElementById(`view-split`).checked=!1,X.splitView=!1,$.u_splitView.value=0),fu(n)})});var pu=document.getElementById(`showGuide`);pu&&(pu.onchange=e=>{X.showGuide=e.target.checked;let t=document.getElementById(`no-effect-msg`),n=Object.keys(X).some(e=>e.endsWith(`_en`)&&X[e]);t&&(t.style.display=n||X.showGuide?`none`:`flex`),Ul()}),(function(){window.TRUSS_IMG=new Image,window.TRUSS_IMG.src=`data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20145.9415205%201080%22%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C80%2C80%2C1)%22%20stroke-width%3D%224%22%20d%3D%22M133.4119829%2C1058h-6.7053934V22h6.7053934c5.5224609%2C0%2C10-4.4770508%2C10-10s-4.4775391-10-10-10H12.787329C7.264868%2C2%2C2.787329%2C6.4770508%2C2.787329%2C12s4.4775391%2C10%2C10%2C10h6.7044168v1036h-6.7044168c-5.5224609%2C0-10%2C4.4775391-10%2C10s4.4775391%2C10%2C10%2C10h120.624654c5.5224609%2C0%2C10-4.4775391%2C10-10s-4.4775391-10-10-10ZM109.1776589%2C22l-30.1907959%2C41.8546753V22h30.1907959ZM109.1176613%2C34.0491943l-30.1307983%2C84.3859253v-42.6144409l30.1307983-41.7714844ZM78.986863%2C855.854187v-45.854187h33.0757446l-33.0757446%2C45.854187ZM109.1172951%2C826.0501709l-30.1304321%2C84.3849487v-42.6139526l30.1304321-41.7709961ZM78.986863%2C723.854187v-45.854187h33.0757446l-33.0757446%2C45.854187ZM109.1172951%2C694.0501709l-30.1304321%2C84.3849487v-42.6139526l30.1304321-41.7709961ZM78.986863%2C591.8544922v-45.8544922h33.0760498l-33.0760498%2C45.8544922ZM109.1172951%2C562.0501709l-30.1304321%2C84.3849487v-42.6139526l30.1304321-41.7709961ZM78.986863%2C459.8546753v-45.8546753h33.0761108l-33.0761108%2C45.8546753ZM109.1176003%2C430.0493164l-30.1307373%2C84.3858032v-42.6142578l30.1307373-41.7715454ZM78.986863%2C327.8546753v-45.8546753h33.0761108l-33.0761108%2C45.8546753ZM109.1176613%2C298.0491943l-30.1307983%2C84.3859253v-42.6144409l30.1307983-41.7714844ZM78.986863%2C195.8546753v-45.8546753h33.0761108l-33.0761108%2C45.8546753ZM109.1176613%2C166.0491943l-30.1307983%2C84.3859253v-42.6144409l30.1307983-41.7714844ZM66.986863%2C138h-32.8515015l32.8515015-45.5432739v45.5432739ZM66.986863%2C212.4907227l-29.7785034%2C41.2831421%2C29.7785034-82.7614746v41.4783325ZM66.986863%2C224.4567261v45.5432739h-32.8515015l32.8515015-45.5432739ZM66.986863%2C344.4907227l-29.7785034%2C41.2831421%2C29.7785034-82.7614746v41.4783325ZM66.986863%2C356.4567261v45.5432739h-32.8515015l32.8515015-45.5432739ZM66.986863%2C476.4907227l-29.7788086%2C41.2835083%2C29.7788086-82.7619629v41.4784546ZM66.986863%2C488.4570312v45.5429688h-32.8511353l32.8511353-45.5429688ZM66.986863%2C608.4904785l-29.7785645%2C41.28302%2C29.7785645-82.7615967v41.4785767ZM66.986863%2C620.4572144v45.5427856h-32.8511353l32.8511353-45.5427856ZM66.986863%2C740.4902344l-29.7785034%2C41.2831421%2C29.7785034-82.7614746v41.4783325ZM66.986863%2C752.4572144v45.5427856h-32.8511353l32.8511353-45.5427856ZM66.986863%2C872.4902344l-29.7785034%2C41.2831421%2C29.7785034-82.7614746v41.4783325ZM66.986863%2C884.4572144v45.5427856h-32.8511353l32.8511353-45.5427856ZM66.986863%2C1004.4902344l-29.7785034%2C41.2832031%2C29.7785034-82.7615356v41.4783325ZM78.986863%2C942h33.0757446l-33.0757446%2C45.854187v-45.854187ZM66.986863%2C1016.4572144v41.5427856h-29.9658203l29.9658203-41.5427856ZM78.986863%2C999.821167l30.1304321-41.7709961-30.1304321%2C84.3848877v-42.6138916ZM114.7065895%2C930h-35.2734375l35.2734375-98.7886353v98.7886353ZM114.7065895%2C798h-35.2734375l35.2734375-98.7886353v98.7886353ZM114.7065895%2C666h-35.2734375l35.2734375-98.7886353v98.7886353ZM114.7065895%2C534h-35.2734375l35.2734375-98.7886353v98.7886353ZM114.7065895%2C402h-35.2734375l35.2734375-98.7886353v98.7886353ZM114.7065895%2C270h-35.2734375l35.2734375-98.7886353v98.7886353ZM114.7065895%2C138h-35.2734375l35.2734375-98.7886353v98.7886353ZM66.986863%2C80.4907227l-29.7785034%2C41.2831421%2C29.7785034-82.7614746v41.4783325ZM31.4917458%2C150h35.4951172v.3384399l-35.4951172%2C98.6491699v-98.9876099ZM31.4917458%2C282h35.4951172v.3384399l-35.4951172%2C98.6491699v-98.9876099ZM31.4917458%2C414h35.4951172v.3384399l-35.4951172%2C98.6491699v-98.9876099ZM31.4917458%2C546h35.4951172v.3384399l-35.4951172%2C98.6495972v-98.9880371ZM31.4917458%2C678h35.4951172v.3389282l-35.4951172%2C98.6491699v-98.9880981ZM31.4917458%2C810h35.4951172v.3389282l-35.4951172%2C98.6491699v-98.9880981ZM31.4917458%2C942h35.4951172v.3389282l-35.4951172%2C98.6491089v-98.9880371ZM80.8614357%2C1058l33.8451538-94.7886353v94.7886353h-33.8451538ZM65.6693581%2C22L31.4917458%2C116.9876099V22h34.1776123Z%22%2F%3E%3C%2Fsvg%3E`})();var mu={wallOffset:{N:0,E:3908,S:9059,W:12967},wallWidth:{N:3908,E:5151,S:3905,W:5155},obstacles:[{wall:`N`,type:`column`,x:197,y:0,w:192,h:1080},{wall:`N`,type:`column`,x:1552,y:0,w:192,h:1080},{wall:`N`,type:`door`,x:2247,y:604,w:233,h:476},{wall:`N`,type:`door`,x:3229,y:604,w:233,h:476},{wall:`N`,type:`topsect`,x:389,y:0,w:1163,h:361},{wall:`E`,type:`column`,x:209,y:0,w:189,h:1080},{wall:`E`,type:`column`,x:1835,y:0,w:129,h:1080},{wall:`E`,type:`column`,x:3342,y:0,w:128,h:1080},{wall:`S`,type:`column`,x:1888,y:0,w:160,h:1080}],trusses:[{wall:`E`,cx:1507},{wall:`E`,cx:4037},{wall:`W`,cx:899},{wall:`W`,cx:3571}]};function hu(){if(!document.getElementById(`canvas-wrapper`))return;let e=parseInt(zc.domElement.style.width)||zc.domElement.width,t=parseInt(zc.domElement.style.height)||zc.domElement.height;if(!e||!t)return;let n=document.getElementById(`guide-overlay-canvas`);if(n){(n.width!==e||n.height!==t)&&(n.width=e,n.height=t,n.style.width=e+`px`,n.style.height=t+`px`);let r=n.getContext(`2d`);if(r.clearRect(0,0,e,t),X.showGuide){let n=e,i=t;if(X.splitView&&!Vl){let e={N:3908,E:5151,S:3908,W:5152},t=Math.round(i*.04),a=Math.round((i-t)/2),o=e.N+e.E,s=e.S+e.W,c=Math.round(e.N/o*n),l=n-c,u=Math.round(e.S/s*n),d=n-u;vu(r,`N`,0,0,c,a),vu(r,`E`,c,0,l,a),vu(r,`S`,0,a+t,u,a),vu(r,`W`,u,a+t,d,a)}else vu(r,X.isolateWall||`ALL`,0,0,n,i)}}let r=document.getElementById(`canvas-holder`),i=document.getElementById(`no-effect-msg`);if(!i||!r)return;if(X.showGuide){i.style.display=`none`;return}let a=r.offsetLeft,o=r.offsetTop,s=e,c=t;i.style.left=a+`px`,i.style.top=o+`px`,i.style.width=s+`px`,i.style.height=c+`px`;let l={N:3908,E:5151,S:3908,W:5152};if(i.querySelector(`[data-wall="N"]`),i.querySelector(`[data-wall="E"]`),i.querySelector(`[data-wall="S"]`),i.querySelector(`[data-wall="W"]`),i.innerHTML=``,X.isolateWall&&!Vl){i.style.flexDirection=`row`;let e=X.isolateWall,t=gu(e);t.style.width=s+`px`,t.style.height=c+`px`,i.appendChild(t)}else if(X.splitView&&!Vl){let e=Math.round(c*.04),t=Math.round((c-e)/2),n=l.S+l.W,r=l.N+l.E,a=Math.round(l.S/n*s),o=s-a,u=Math.round(l.N/r*s),d=s-u;i.style.flexDirection=`column`,i.style.gap=`0`;let f=document.createElement(`div`);f.style.cssText=`display:flex;flex-direction:row;width:${s}px;height:${t}px;flex-shrink:0;`;let p=gu(`S`);p.style.width=a+`px`,p.style.height=t+`px`;let m=gu(`W`);m.style.width=o+`px`,m.style.height=t+`px`,f.appendChild(p),f.appendChild(m);let h=document.createElement(`div`);h.style.cssText=`width:${s}px;height:${e}px;flex-shrink:0;background:transparent;`;let g=document.createElement(`div`);g.style.cssText=`display:flex;flex-direction:row;width:${s}px;height:${t}px;flex-shrink:0;`;let _=gu(`N`);_.style.width=u+`px`,_.style.height=t+`px`;let v=gu(`E`);v.style.width=d+`px`,v.style.height=t+`px`,g.appendChild(_),g.appendChild(v),i.appendChild(f),i.appendChild(h),i.appendChild(g)}else{i.style.flexDirection=`row`;let e=l.N+l.E+l.S+l.W;[[`N`,l.N],[`E`,l.E],[`S`,l.S],[`W`,l.W]].forEach(([t,n])=>{let r=gu(t);r.style.width=Math.round(n/e*s)+`px`,r.style.height=c+`px`,i.appendChild(r)})}requestAnimationFrame(()=>{_u(),uu()})}function gu(e){let t=document.createElement(`div`);return t.className=`idle-wall-block`,t.dataset.wall=e,t.style.flexShrink=`0`,t.innerHTML=`
    <div class="idle-top-label">SYSTEM IDLE</div>
    <div class="idle-bottom-label">ENABLE MODULE</div>
    <canvas class="idle-liss-canvas" width="120" height="68"></canvas>`,t}function _u(){let e=document.getElementById(`no-effect-msg`);e&&e.querySelectorAll(`.idle-wall-block`).forEach(e=>{let t=e.querySelector(`.idle-liss-canvas`);if(!t)return;let n=e.clientWidth,r=e.clientHeight,i=Math.max(40,Math.min(120,Math.floor(n*.6))),a=Math.round(i*68/120);a<r*.7&&(t.width=i,t.height=a,t.style.width=i+`px`,t.style.height=a+`px`)})}function vu(e,t,n,r,i,a){if(i<1||a<1)return;let o=1080,s=mu.wallOffset,c,l;if(t===`ALL`)c=0,l=18119;else{let e={N:[0,3908],E:[3908,9059],S:[9059,12967],W:[12967,18119]};[c,l]=e[t]}let u=l-c;function d(e,t){return n+(s[e]+t-c)/u*i}function f(e){return r+e/o*a}function p(e){return e/u*i}function m(e){return e/o*a}e.save(),e.beginPath(),e.rect(n,r,i,a),e.clip();let h=`rgba(255,80,80,1)`,g={column:`COLUMN`,door:`DOOR`,topsect:`TOP SECT`};mu.obstacles.forEach(r=>{if(t!==`ALL`&&r.wall!==t)return;let o=d(r.wall,r.x),s=f(r.y),c=p(r.w),l=m(r.h);if(o+c<n||o>n+i)return;e.fillStyle=`rgba(255,60,60,0.18)`,e.fillRect(o,s,c,l),e.save(),e.beginPath(),e.rect(o,s,c,l),e.clip(),e.strokeStyle=`rgba(255,80,80,0.15)`,e.lineWidth=1;let u=Math.max(7,Math.round(10*i/1920));for(let t=-a;t<i+a;t+=u)e.beginPath(),e.moveTo(o+t,s),e.lineTo(o+t-a,s+a),e.stroke();e.restore(),e.strokeStyle=h,e.lineWidth=2,e.strokeRect(o+1,s+1,Math.max(1,c-2),Math.max(1,l-2));let _=Math.min(c,l);if(_>14){e.save(),e.translate(o+c/2,s+l/2),l>c*1.2&&e.rotate(-Math.PI/2);let t=Math.max(7,Math.min(11,_*.22));e.fillStyle=h,e.font=`bold ${t}px monospace`,e.textAlign=`center`,e.textBaseline=`middle`,e.fillText(g[r.type]||r.type.toUpperCase(),0,0),e.restore()}}),mu.trusses.forEach(o=>{if(t!==`ALL`&&o.wall!==t)return;let s=a,c=.1351310375*s,l=d(o.wall,o.cx)-c/2,u=r;l+c<n||l>n+i||TRUSS_IMG.complete&&TRUSS_IMG.naturalWidth>0&&e.drawImage(TRUSS_IMG,l,u,c,s)}),e.restore()}window.addEventListener(`resize`,()=>requestAnimationFrame(hu)),(function(){let e=document.getElementById(`logo-scanline`),t=document.getElementById(`header-logo`);if(!e||!t)return;let n=0;function r(){let n=t.getBoundingClientRect(),r=e.parentElement.getBoundingClientRect();e.style.left=n.left-r.left+`px`,e.style.top=n.top-r.top+`px`,e.style.width=n.width+`px`,e.style.height=n.height+`px`,e.width=Math.round(n.width),e.height=Math.round(n.height)}function i(){let t=e.width,r=e.height;if(!t||!r){requestAnimationFrame(i);return}let a=document.body.classList.contains(`light-mode`),o=e.getContext(`2d`);o.clearRect(0,0,t,r),n=(n+.126)%4,o.fillStyle=a?`rgba(255,255,255,0.75)`:`rgba(0,0,0,0.38)`;for(let e=Math.floor(-4+n);e<r+4;e+=4)o.fillRect(0,e,t,1);requestAnimationFrame(i)}window.addEventListener(`resize`,()=>requestAnimationFrame(r)),requestAnimationFrame(()=>{r(),i()})})(),Pl(),kl(),Ml(),Fl(),Il(),Rl(),Ll(),Kl(),Wl();