'use strict';

var cacheVersion = 1;
var currentCache = {
  offline: 'offline-cache' + cacheVersion
};
const offlineUrl = './offline.html';

this.addEventListener('install', event => {
  event.waitUntil(
    caches.open(currentCache.offline).then(function(cache) {
      return cache.addAll([
          './favicon.ico',
          '/cdn/offline/png/background_offline.png',
          '/cdn/offline/css/offline.css',
          '/cdn/offline/font/Roboto.woff',
          '/cdn/offline/font/Roboto.woff2',
          '/cdn/offline/font/Signika.woff',
          '/cdn/offline/font/Signika.woff2',
          '/cdn/offline/font/Montserrat.woff',
          '/cdn/offline/font/Montserrat.woff2',
          offlineUrl
      ]);
    })
  );
});

this.addEventListener('fetch', event => {
  // request.mode = navigate isn't supported in all browsers
  // so include a check for Accept: text/html header.
  if (event.request.mode === 'navigate' || (event.request.method === 'GET' && event.request.headers.get('accept').includes('text/html'))) {
        event.respondWith(
          fetch(event.request.url).catch(error => {
              // Return the offline page
              return caches.match(offlineUrl);
          })
    );
  }
  else{
        // Respond with everything else if we can
        event.respondWith(caches.match(event.request)
                        .then(function (response) {
                        return response || fetch(event.request);
                    })
            );
      }
});