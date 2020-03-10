// current sw cache to keep
const latestCache = 'mws-restaurant-static-v3';

// current localserver urls to cache
const cachedItems = [
  './',
  './index.html',
  './restaurant.html',
  './css/styles.css',
  './css/responsive.css',
  './js/dbhelper.js',
  './js/main.js',
  './js/restaurant_info.js',
  './data/restaurants.json',
  './img/1.jpg',
  './img/1_2.jpg',
  './img/2.jpg',
  './img/2_2.jpg',
  './img/3.jpg',
  './img/3_2.jpg',
  './img/4.jpg',
  './img/4_2.jpg',
  './img/5.jpg',
  './img/5_2.jpg',
  './img/6.jpg',
  './img/6_2.jpg',
  './img/7.jpg',
  './img/7_2.jpg',
  './img/8.jpg',
  './img/8_2.jpg',
  './img/9.jpg',
  './img/9_2.jpg',
  './img/10.jpg',
  './img/10_2.jpg',
];

// the sw install event and create the cache and add in the local server urls
self.addEventListener('install', function(event) {
  console.log('SW-installed');
  event.waitUntil(
    caches.open(latestCache).then(function (cache) {
      console.log('SW-caching');
      return cache.addAll(cachedItems);
    })
  );
});

// the sw activate event and opportunity to clear old caches.
self.addEventListener('activate', function(event) {
  console.log('SW-activated');
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cache){
          if (cache !== latestCache) {
            console.log('SW-clearing caches');
            return caches.delete(cache);
          }
        })
      )
    })
  )
});

/*  Next we can then respond to the fetch requests using the cache as so.
    The following will responsd with a match in the catch for each request
    if a match exists. Otherwise return a fetch to the network. */
self.addEventListener('fetch', function(event) {
  console.log('SW-fetching');
  event.respondWith(
    caches.match(event.request).then(function(response) {
      // if the request is truthy meanign I got a match in the cache, then ill return it.
      if (response) return response;
      // otherwise I'll return a fetch to the network for the orig request.
      return fetch(event.request);
    })
  );
});
