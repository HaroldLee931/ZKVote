if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const d=e=>n(e,c),r={module:{uri:c},exports:t,require:d};s[c]=Promise.all(a.map((e=>r[e]||d(e)))).then((e=>(i(...e),t)))}}define(["./workbox-c5ed321c"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/2066cd3e-a477c41a6068f61b.js",revision:"a477c41a6068f61b"},{url:"/_next/static/chunks/436-08ec352c5cb8b7a2.js",revision:"08ec352c5cb8b7a2"},{url:"/_next/static/chunks/463-df7c3ea6b7be4f0f.js",revision:"df7c3ea6b7be4f0f"},{url:"/_next/static/chunks/842-dde8be3d13833e56.js",revision:"dde8be3d13833e56"},{url:"/_next/static/chunks/e893f787-e4b8623b14b8af07.js",revision:"e4b8623b14b8af07"},{url:"/_next/static/chunks/framework-d03cfd015ff68d6d.js",revision:"d03cfd015ff68d6d"},{url:"/_next/static/chunks/main-4f8b92697d11e91d.js",revision:"4f8b92697d11e91d"},{url:"/_next/static/chunks/pages/_app-35bbf1febd26bd0a.js",revision:"35bbf1febd26bd0a"},{url:"/_next/static/chunks/pages/_error-d490dba0ce0720b8.js",revision:"d490dba0ce0720b8"},{url:"/_next/static/chunks/pages/groups-7eca7a155e453736.js",revision:"7eca7a155e453736"},{url:"/_next/static/chunks/pages/index-0a32d551ad915418.js",revision:"0a32d551ad915418"},{url:"/_next/static/chunks/pages/proofs-98579d4f3ba9e58d.js",revision:"98579d4f3ba9e58d"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-626770f5da670b40.js",revision:"626770f5da670b40"},{url:"/_next/static/css/fb736ddcef13b708.css",revision:"fb736ddcef13b708"},{url:"/_next/static/media/05a31a2ca4975f99.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/tckJexEirC39W6398KD_j/_buildManifest.js",revision:"7a23fb02a63938476c4473ec3739bafa"},{url:"/_next/static/tckJexEirC39W6398KD_j/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/apple-touch-icon.png",revision:"4f2943a38ea95459d5b5241ef1281aba"},{url:"/favicon-16x16.png",revision:"dfd78a1dcb062b50f4b1743b36b9bf4e"},{url:"/favicon-32x32.png",revision:"8afd2a9dd0c8f0538f6095f1d5cd2619"},{url:"/favicon.ico",revision:"9e2b10d1c6f297d6a2e4dc7438f14bdb"},{url:"/icon-192x192.png",revision:"b20d74848e1667cdc76099e62853dd8e"},{url:"/icon-256x256.png",revision:"3291df154ab9e7dbd5cbe5ed495a9481"},{url:"/icon-384x384.png",revision:"4f01480006b3313ed34b5fe3e94e2f76"},{url:"/icon-512x512.png",revision:"a5dab2674ed628931f73199977db1c72"},{url:"/manifest.json",revision:"387a1cf4f55bc260d0d5f910268d4ab1"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
