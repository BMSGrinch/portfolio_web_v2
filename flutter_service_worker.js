'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/asset/project_img/Details_screen.mvpfast.png": "3655d7e7e180386ce84660dbdf9bfe3e",
"assets/asset/project_img/Favoris_screen.mvpfast.png": "e4a2a1e7fc4f32a9145828bbcc5e2631",
"assets/asset/project_img/Main_page_appvitrine.png": "385e89413cfaf0d45d61b708d761f316",
"assets/asset/project_img/Main_screen.mvpfast.png": "8fd7c3e321b8b2cc94a335f91f62f4ee",
"assets/asset/project_img/Main_screen_animal_fav.png": "6747db187abf404dae497bed0f91bb80",
"assets/asset/project_img/modafripedetail.png": "e8dc95fd009aa411e283f8a621f1d549",
"assets/asset/project_img/modafripehome.png": "fc0c8636f324d476922e07ddbd251dcb",
"assets/asset/project_img/modafripepanier.png": "db10ca9c5e5953fd8bc5af6259d18410",
"assets/asset/project_img/Panier_screen.mvpfast.png": "7fdacd7dd56f64944d7f3ddb65c3311e",
"assets/asset/project_img/stockflow-dashboard.png": "24df079db2ba93fa13afd5e6bd8d2bd7",
"assets/asset/project_img/stockflownewsell.png": "2485a44d675e2a9a32bedd38586c1fd5",
"assets/asset/project_img/stockflowstocksmouv.png": "a236cda871b2867c87aed40662ab6523",
"assets/asset/utils_img/Bms2.png": "250a57c663a1d09173af87d3c746638f",
"assets/asset/utils_img/Bms_grinch.png": "0690135a4a20a2d64fc328695b48870c",
"assets/asset/utils_img/claude-ai-icon.png": "089872c10c26022eede5ecb082b0e5a9",
"assets/asset/utils_img/cursor-ai-code-icon.png": "03e6488e6a1ab5aaf76676062e5434fa",
"assets/asset/utils_img/dart-logo-png_seeklogo-273023.png": "f7a0bcf536d9ec9fa8b197d6739db858",
"assets/asset/utils_img/flutter-logo-png_seeklogo-354671.png": "0dfb837f2d64414fbb1b569f073459ed",
"assets/asset/utils_img/github-logo-png_seeklogo-273183.png": "31a63e837cb3765dbe78bf984a71dfdd",
"assets/asset/utils_img/gmail-new-2020-logo-png_seeklogo-389043.png": "35d905019e394d0f77d6cdf9929d453d",
"assets/asset/utils_img/google-gemini-icon.png": "fe38b5629ba31edf52df0697642b7587",
"assets/asset/utils_img/icons8-tailwindcss-600.png": "6c22e6bfba48a3bf3e46c19918da079c",
"assets/asset/utils_img/img_serieuse.png": "f0579ab5cb66f872ba9cdf39e9b9ec94",
"assets/asset/utils_img/laravel-logo-png_seeklogo-363134.png": "400410d1db929c983008f0b1751d347e",
"assets/asset/utils_img/Logo_dev%2520en1024.png": "da0f7ee202d3f62402192678ce72f1ca",
"assets/asset/utils_img/php-logo-png_seeklogo-265704.png": "5a1c564deaa4226dfdf9d454b37b7ee1",
"assets/asset/utils_img/sql-logo-png_seeklogo-505247.png": "c42c9f4b1e563efb971842b7b204ef30",
"assets/asset/utils_img/supabase-logo-png_seeklogo-435677.png": "bfd3c48998def989a95509485565f658",
"assets/asset/utils_img/windsurf-icon.png": "67790c5afea99894a224812b0f9a15bb",
"assets/AssetManifest.bin": "5dbc5d51dbaa1784bf6f4e55ec73fde8",
"assets/AssetManifest.bin.json": "9c4d58e573dd711d058c0ed57b24f22f",
"assets/AssetManifest.json": "5aa055da982652f1f4eed58c391f31d6",
"assets/FontManifest.json": "aed2b02323ee1c15e32a18f07088b8e3",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "380d640873c47d30a013010123ef1938",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "76bd55cc08e511bb603cc53003b81051",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"Cv_Ouattara_Kindouli_Jonathan_sj.pdf": "fdd25db474af322ac2e1620f417cbdcc",
"favicon.png": "d3ace21c6164414732422cf5ebe594e4",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "c4cf83f0b654e468f096c7d5ec2ed61e",
"icons/Icon-192.png": "1b81251e3c920926277a7ce8b6921b85",
"icons/Icon-512.png": "9535bfdd2f4b7c9d35e2c1f96f70497c",
"icons/Icon-maskable-192.png": "1b81251e3c920926277a7ce8b6921b85",
"icons/Icon-maskable-512.png": "9535bfdd2f4b7c9d35e2c1f96f70497c",
"index.html": "7b3a8c71c81de4bbdb025c35f9e1a09c",
"/": "7b3a8c71c81de4bbdb025c35f9e1a09c",
"main.dart.js": "13e0fc6b8d7a8ce5cd23c662db0c7df6",
"main.dart.mjs": "b1ec488c3a662ca03ef58b733383702a",
"main.dart.wasm": "5ac8c1a02963c1f70ef70e26858fd977",
"manifest.json": "93d585fde3a9e5d7393b62184bc47d05",
"version.json": "3fb385a06b77667ea2402fd1ba06f56d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
