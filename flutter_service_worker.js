'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "d5ee0209833bc2a04709f06731fb01c9",
"/main.dart.js": "a0804f4ab7b2ce10ca4a2f6f9e9ecd39",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/manifest.json": "8b1e325cad02bec9d950c30a85e8c6fe",
"/assets/LICENSE": "58c31503932a82e7331f70ce0d0abe6a",
"/assets/AssetManifest.json": "6f690695834135d83f232ebc7fa7869e",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/assets/images/android_icon.png": "e31913a2ee3f7913740849dc58b789c5",
"/assets/assets/images/logo.png": "0dc14754148383d7c10bb98610927fe6",
"/assets/assets/images/bottomBg.png": "247a5ce344223fb58cfb1cf9e0dc17a7",
"/assets/assets/images/ios_icon.png": "9592f3c8d3b08c950587900e7a046ffb",
"/assets/assets/images/bg.png": "aa5e868c71b0feee2cba5cb0dac26cf1"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
