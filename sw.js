if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let c={};const o=e=>s(e,t),d={module:{uri:t},exports:c,require:o};i[t]=Promise.all(n.map((e=>d[e]||o(e)))).then((e=>(r(...e),c)))}}define(["./workbox-fc255c04"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"3a2f4e3555dea2b0f635250adc41ed59"},{url:"assets/index-04dec7dd.js",revision:null},{url:"assets/index-94e75903.css",revision:null},{url:"index.html",revision:"b0d5e2a120ceb28a2eca579cf9f58419"},{url:"registerSW.js",revision:"36a8c3eb862bdcf4382e8845651d1c5f"},{url:"maskable_icon.png",revision:"02893c08d87e077d24e65a53e61f8f52"},{url:"404.html",revision:"3a2f4e3555dea2b0f635250adc41ed59"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"manifest.webmanifest",revision:"1039661bcac15209342c5b72d3fce900"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
