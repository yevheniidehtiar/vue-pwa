importScripts("/vue-pwa/precache-manifest.475e881d4234d82a50295095e006ce75.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");


workbox.core.setCacheNameDetails({prefix: "vue-pwa"});

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

