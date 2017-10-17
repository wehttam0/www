"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","8b0c542770966df688f4fc889ea76006"],["/static/css/main.e833da70.css","bc9e3baf1f0daa6322087fe68c962394"],["/static/js/main.ae5019a3.js","4650d4515f96453f5461baa92e9f66cc"],["/static/media/detroit-skyline.ef3cc586.jpg","ef3cc586de4fc42b8a850e73395d19b3"],["/static/media/logo-bamboo.ebe6c74f.png","ebe6c74fcd274779ef16cd69dbc15d67"],["/static/media/logo-distilnetworks.33e3b3eb.png","33e3b3eb79f81fb6fe8553b1f2123a95"],["/static/media/logo-lunar.18ffb04a.png","18ffb04a5dac4b25221347af49a95a75"],["/static/media/logo-mapbox.b96e838c.png","b96e838c077735197d1452e833f47f03"],["/static/media/logo-mvca.a77937bf.png","a77937bf5f66efc7ea0714e4e5e1421c"],["/static/media/logo-repurpose.e5554f64.jpg","e5554f64bcc85be1e594a8a9e4411ca5"],["/static/media/logo-skyspecs.90c2db6a.png","90c2db6aee6fa29f5ff26fedded28c9b"],["/static/media/logo-spothero.5490a752.png","5490a7520dcb49ad52d5854ce33dcf9f"],["/static/media/logo-techstars.07c42782.png","07c42782fef5cb54460a0fbba057fa00"],["/static/media/logo-trucks.4de17e0b.png","4de17e0b4ee2a7be436e530f2967e4b5"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});