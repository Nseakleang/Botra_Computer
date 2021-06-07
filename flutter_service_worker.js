'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js": "a6f4e726bbd56cdf9229e5d540e951b8",
"version.json": "59907644f65c35036214ec336c22c7a8",
"assets/images/product_image.jpeg": "2c3ddd1f7212e7d351ba3f032c6739e7",
"assets/images/home_banner_3.jpeg": "a25d9625dc9d480b696aeae273624e7f",
"assets/images/home_banner_1.jpeg": "2d74726360fa1577e192ff8898b2dbda",
"assets/images/home_banner_2.jpeg": "2122c66876b0f324e266a70154b0a646",
"assets/images/brand_logo.jpeg": "8abfbe72f610a24c528b6ea7a0077dc0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/AssetManifest.json": "e82bb4db96a7ed0b94f4a81e82c4f259",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "bde9ee889e7cdb2c908965b81d635c52",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "0606b262e780db75ff6d5114c627bfc7",
"/": "0606b262e780db75ff6d5114c627bfc7",
"manifest.json": "937686f21b934a0c9b7a3fe71b7855aa",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/main": "afffb749caa4ffedf9d7b27fb3a515b2",
".git/refs/remotes/origin/main": "afffb749caa4ffedf9d7b27fb3a515b2",
".git/objects/6d/1ee2846d109f2944da24735f13b88372559835": "a8a81988be58bfe124a2465b52667deb",
".git/objects/36/87f9e10b621f1405a3e02d87a737ca09dba6ce": "8b26da7aefa5a22022fe6cc7c808ccdf",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/1a/cb64ca867eaeaecd0d0cbe5748a574c46af9d7": "f9f6ea6cdd926a71a8a68c2731489891",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/694a78ed02be1b1529915e406467e6539a237d": "c79eea612b8757b6cffcac3493cadfa6",
".git/objects/6b/a1c2d5478a04ef46029a8091beb53a79e41d74": "45d9eada1f0f08c5e611d6e0957b7861",
".git/objects/64/bbb0ccd3b9894e6898dd82e372d517f4a34088": "04a9baaacfd12af2203a72078ff6744b",
".git/objects/e7/465cdf5b48b0f2331207c1b2d72d51854b10df": "c884f1d0bc699d48d78dd1df315e8dc5",
".git/objects/53/c9b6376dcaba116067e22c236fd91f73fe49d7": "4ba2182c8f9ece1300e625414dbed6ac",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/e9/771d1979ae65253ada8ee328f1d61aedfd05ac": "8f3ea6ac459f387ffe21d390673bdd01",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8d/1966ed5f0a95a462880468a48a11dcf644d6f1": "d635addbd65af7cda34b2fd0e19d5a5d",
".git/objects/d2/d7bc225f3a211ba8f63258f2339cc0925fee5b": "35cbfc85bf5a092e53bf6ea6fe44a695",
".git/objects/c0/7c34f7b75c8e213e682659637d8a8c78412835": "baa2d54ef3a3c26c025445928a13d4ed",
".git/objects/5e/6c98c1ecadd19885d2cdd6f668ee57781dff89": "944020fa9b1bb6098d7e78a68d1e0bbf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/5d/dc575e1614943080c26706f96ef16a38a15901": "7946ff8f1c682aae5691c737c525a781",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b3/d3186a4d4ef2d5a133b5a3f5b3b0a265fd1a45": "4038215cf0b7d0a02219f9e00811a687",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/5a/3d233863dde8cc51c8d95b4229df8080f4b34d": "00a778503dea4e3f2fd176445f2683b8",
".git/objects/c7/a38d50b420356d3eff6ccbebb4b20ef98f472c": "5c0b113be5e73b2bbe9f6e0258ee8673",
".git/objects/51/0d8086db386c77d7231c1e650734fe9d40fbdf": "bd3d0d7cf49f2d6592b84d1857dc424a",
".git/objects/0d/9c9643fed712ecf3f4fa3f7b1e40fb93d304a0": "d2fb6935ad5aaad3937bfd90df8875f7",
".git/objects/02/37b8d2b7cc79d29271aaf83fd0ae45688c7b36": "a75972e79feccdbf24eee2aa1c497913",
".git/COMMIT_EDITMSG": "3a5897c4fc398e2e733526a01acaac98",
".git/FETCH_HEAD": "fa408f9789adc7041b3900a0b4d6fa60",
".git/index": "8cd185e6f469ff59d222080669c0c686",
".git/logs/HEAD": "8a79b453f7994932b3318a7cce4c5bd2",
".git/logs/refs/heads/main": "9e0705f9fd61911c9fdd41298d7e8667",
".git/logs/refs/remotes/origin/main": "0a82468671425bd24deadeda3e15351c",
".git/config": "3eb12cf6650fe95752c0e8e043f90e21",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"styles.css": "38fa2f84b80f8f791b2486abed5df71c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
