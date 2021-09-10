(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[5592],{60603:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var s=r(14983),o=r(32744),n=r(84066),i=(r(77645),r(38215),r(45851),r(74184));let a=class extends o.r{initialize(){}destroy(){}get supportsTileUpdates(){return!1}get spatialReference(){const e=this.get("tileStore.tileScheme.spatialReference");return e&&e.toJSON()||null}};(0,s._)([(0,n.Cb)({readOnly:!0})],a.prototype,"supportsTileUpdates",null),(0,s._)([(0,n.Cb)({constructOnly:!0})],a.prototype,"remoteClient",void 0),(0,s._)([(0,n.Cb)({constructOnly:!0})],a.prototype,"service",void 0),(0,s._)([(0,n.Cb)()],a.prototype,"spatialReference",null),(0,s._)([(0,n.Cb)({constructOnly:!0})],a.prototype,"tileInfo",void 0),(0,s._)([(0,n.Cb)({constructOnly:!0})],a.prototype,"tileStore",void 0),a=(0,s._)([(0,i.j)("esri.views.2d.layers.features.processors.BaseProcessor")],a);const l=a},35592:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p});var s=r(14983),o=(r(77645),r(67380)),n=(r(84066),r(38215),r(45851),r(74184)),i=r(74727),a=r(327);r(68589),(()=>{if(!("document"in a.Z))return()=>null;const e=document.createElement("canvas");e.getContext("2d");e.height=512,e.width=1})();var l=r(70238),d=r(60603),c=r(77164);class u{constructor(e,t){this.offset=e,this.extent=t}}let h=class extends d.Z{constructor(){super(...arguments),this.type="heatmap",this._tileKeyToFeatureSets=new Map}initialize(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))])}async update(e,t){const r=t.schema.processors[0];"heatmap"===r.type&&(0,i.Hg)(this._schema,r)&&(e.mesh=!0,this._schema=r)}onTileUpdate(e){for(const t of e.removed)this._tileKeyToFeatureSets.delete(t.key.id)}onTileClear(e){return this._tileKeyToFeatureSets.delete(e.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:{clear:!0}})}async onTileMessage(e,t,r){this._tileKeyToFeatureSets.has(e.key.id)||this._tileKeyToFeatureSets.set(e.key.id,new Map);const s=this._tileKeyToFeatureSets.get(e.key.id);if((0,o.pC)(t.addOrUpdate)&&t.addOrUpdate.hasFeatures&&s.set(t.addOrUpdate.instance,t),t.end){const t=[],s=function(e){const t=e.key,r=new Map,s=256,o=l.I_,n=e.tileInfoView.tileInfo.isWrappable;return r.set((0,c.M)(t,-1,-1,n).id,new u([-o,-o],[o-s,o-s,o,o])),r.set((0,c.M)(t,0,-1,n).id,new u([0,-o],[0,o-s,o,o])),r.set((0,c.M)(t,1,-1,n).id,new u([o,-o],[0,o-s,s,o])),r.set((0,c.M)(t,-1,0,n).id,new u([-o,0],[o-s,0,o,o])),r.set((0,c.M)(t,1,0,n).id,new u([o,0],[0,0,s,o])),r.set((0,c.M)(t,-1,1,n).id,new u([-o,o],[o-s,0,o,s])),r.set((0,c.M)(t,0,1,n).id,new u([0,o],[0,0,o,s])),r.set((0,c.M)(t,1,1,n).id,new u([o,o],[0,0,s,s])),r}(e);this._tileKeyToFeatureSets.forEach(((r,n)=>{if(n===e.key.id)r.forEach((e=>(0,o.Po)(e.addOrUpdate,(e=>t.push(e)))));else if(s.has(n)){const e=s.get(n),[i,a]=e.offset;r.forEach((e=>(0,o.Po)(e.addOrUpdate,(e=>{const r=e.transform(i,a,1,1);t.push(r)}))))}}));const n=function(e,t,r,s){const{blurRadius:o,fieldOffset:n,field:i}=t,a=new Float64Array(512*r),l=function(e){const t=Math.round(3*e),r=2*e*e,s=new Float64Array(2*t+1);for(let o=0;o<=s.length;o++)s[o]=Math.exp(-((o-t)**2)/r)/Math.sqrt(2*Math.PI)*(e/2);return s}(o),d=Math.round(3*o);let c,u=Number.NEGATIVE_INFINITY;const h=function(e,t){return null!=e?"string"==typeof t?t=>-1*+t.readAttribute(e):r=>+r.readAttribute(e)+t:e=>1}(i,n),p=new Set;for(const t of e){const e=t.getCursor();for(;e.next();){const t=e.getObjectId();if(p.has(t))continue;p.add(t);const s=e.readLegacyPointGeometry(),o=128;if(s.x<-o||s.x>=r+o||s.y<-o||s.y>512+o)continue;const n=+h(e),i=Math.round(s.x)-d,f=Math.round(s.y)-d,y=Math.max(0,i),m=Math.max(0,f),M=Math.min(512,Math.round(s.y)+d),w=Math.min(r,Math.round(s.x)+d);for(let e=m;e<M;e++){const t=l[e-f];for(let s=y;s<w;s++){const o=l[s-i];c=a[e*r+s]+=t*o*n,c>u&&(u=c)}}}}return{matrix:a.buffer,max:u}}(t,this._schema.mesh,512),i={tileKey:e.key.id,intensityInfo:n},a=[n.matrix];return this.remoteClient.invoke("tileRenderer.onTileData",i,{...r,transferList:a})}}onTileError(e,t,r){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:e.id,error:t},r)}};h=(0,s._)([(0,n.j)("esri.views.2d.layers.features.processors.HeatmapProcessor")],h);const p=h},77164:(e,t,r)=>{"use strict";function s(e,t,r,s){const o=e.clone(),n=1<<o.level,i=o.col+t,a=o.row+r;return s&&i<0?(o.col=i+n,o.world-=1):i>=n?(o.col=i-n,o.world+=1):o.col=i,o.row=a,o}r.d(t,{M:()=>s}),r(97181)}}]);