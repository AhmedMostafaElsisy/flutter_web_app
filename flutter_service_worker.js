'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "18ad993561703f9cd46341924491a491",
"version.json": "1896b9e8b9bf0b945f5a6a110f9bd0ae",
"index.html": "a17bd90d04c2a7f53a4cb94aa60f5156",
"/": "a17bd90d04c2a7f53a4cb94aa60f5156",
"main.dart.js": "8bd88258c93fd43a1adb567ffa0d6bc2",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c1b657a950b1f75d79689b599eded302",
".git/config": "29605a1ccc3641005ec813ba376d260f",
".git/objects/3e/cfec9dc56d723da8ec138765ec0eda791528e1": "e762952a892610c2c1bef8383cf27731",
".git/objects/9e/df8ab5c8a7ae075b02760e1c01e24184b53076": "97b031bf02bd67cf70581b7dc287dc6a",
".git/objects/56/50a3c4a861f68ff0c91cb393f2f81efc31cdeb": "4181e57cc012196e5e56aab70a1ac662",
".git/objects/67/fcf360a3c6b00af806b75e826098b1448ea6e4": "fd43dbf2feef57233bd6068b10f8462c",
".git/objects/9c/489dd89979e57bfef99a2a34766f31843a933e": "4785d559436fd6d20f467647fdc7fc4b",
".git/objects/02/d3db73017eb4ae78884087f42817f8264da05a": "2a397d472df8ab40c69f1d71ab44434c",
".git/objects/be/8d717ef4e9277697570eee3eb41117cb44ca9a": "3787a0877a95e88d83d0748ed05fcc5f",
".git/objects/be/2fd3ad45e87fd983a56b8370692199c965120f": "6c7b1b99b9967b2f34a9c81ae2b6d77c",
".git/objects/bd/ddf09bc8e5c7a45449617e77344415b972ee34": "21c9211e12bf5866d43d0f9858672b1e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/f4/8eb068abd2b8f3a43427b89a0009a61e9b2ae1": "f682407f1c7e226ea500831bb1d24c67",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/cf/262965561f3f8a9903b987e262b04c834a4afb": "c6a8ba92c400ddf242a32a065be42de7",
".git/objects/fe/5aea04bfd7132759360fb581819a2581978d3f": "399d1eae5cc6b54b7f48465dd4799601",
".git/objects/c8/c1c328cf42629c85cb116a648c19d9cd696f55": "6fe4aae4c360bd80a3b357a20aaf8809",
".git/objects/c6/9512782c222ef11c6659acbf234a32aabefaa7": "b1327c571b9309240487024c46fdcc0a",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/20/62c5d90cdbb6e502bb022fb110f20edba24bc2": "72ff16ccd3b9d406bc2f14e30472a2a6",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/4b/8d6188c521361f212354274ceef925b40e91bb": "34eb644c21d0de33f8074dece2311976",
".git/objects/1f/99764317245f5218ffa5469d0babfd3d14daa5": "8b5cbdd3b5742b4e40e94ffa6fd83631",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/1a/2a6f252d75104b822141ee84d2d7f89edd0944": "53fcbe69764e65809b73f6af93e510fc",
".git/objects/7b/8f59114bac709ac1eb5cb2fd2dd07fc56b701a": "b303f4d8d05473f7d22f19cd447b0a83",
".git/objects/8f/db353e4b42f901f971729029bedaa07f3f7c2c": "bf85a3154c680779753b8a54674b27ac",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/7630c56c86efaf5933b1825d2650e8a08ab742": "266055e2fc23f002d161413718d5374d",
".git/objects/10/90f335bcdad08958928cfb912dee887064590c": "164996f9abe965c1782d8557edead42f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/088a71193dc27290d27f910bc5d73214f3bbc1": "f06a2b93ff042e59f73cfc0d222c097f",
".git/objects/5c/88739bdf1b4aec798fb58c873483a08a538b2a": "56696b488f8365e771240915ac8ceb9e",
".git/objects/62/314acbb5eaa8c49e94c65f1a778df8179635ea": "82b15200153c70c402c52337bdf2a06c",
".git/objects/3a/8f731cef3ba3622e94230ffa015a6162c848dc": "c87df53e5b12f64a2a49c7cfe18f3a39",
".git/objects/54/66dd2aa3d049223c2ab41c4fcc6f2e88347cd8": "2c99dfa02a2d427f11babf73cdce8b2a",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/55/4981d85e23e4e0ebc916a60ee63907df994d35": "d85fd3832df1969a2f74c8eb3180b0b4",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/90/8ff6bbe6ffcce3ca759d8875bf62d1d97f5be3": "50d1931807a8cbcd0dde2f9353bb6bfb",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/2426d57d8d1a0fa012f91f405f4ee0f73f7935": "74aa985d790ba0c888e980463066cc7d",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/dc/136586358434b24b51e855289d01e7ae847363": "f58b516d71a21b878a3a4f0c394c0f92",
".git/objects/dc/ff8b03db713303b2c9e0516303b9e0843be137": "8c42b7d8d9a6cd4714a2c20090216bae",
".git/objects/b6/11d749c7f58f2c6ed1dfe19c891eb824bb3631": "1775d1d42851a68c6d23532f3896309d",
".git/objects/aa/29492bc94e2a0a9a12d602c59b3575a976409c": "50d049aae54a7bb97ba613486263f214",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/af/9df0c7581e287fd0c2e12135791b039c779676": "2e78ec25c79bba48a948633c271c7ffe",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/24f2326c6369546d7dca11338b821a00c7fb6c": "a0482c061c13fa880f0e417449ecc6da",
".git/objects/b0/19d11e804e356e4c4a25b61177d4d4033be9ea": "f41e79c259b0dba7a392b599a163da43",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/e1/c47676a1d1c24f3cbdf1f0c46953c032ad7d7c": "913a88b7041ef3b2d584b951fa41f469",
".git/objects/46/b3583c5fd4c82cdd3d5ee7a4403cb4896bc1a6": "8bd74ad23834222b8e4f5cef2f21cca1",
".git/objects/2c/261590c0ce11f296b5c6a42d03bbfb2581255f": "9ba2944fc2a07b3c012573986482c4ae",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "b40637ed7a305a7a7296f4f96b139cc1",
".git/objects/41/bd2817c4c2979dfb38456b7e7c2e1214eb41f3": "c083cde276347e1de9c48f0f83a09df9",
".git/objects/48/b81513aaa03e066bf8390816cd41ea057da461": "a5192cc85d29245b96883b614beb9637",
".git/objects/1e/5c18082a3600d91c4dd5a2847fb12bc40d7604": "c043d47c7723c32b5bf0dc06c986eeb3",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "99981890f1649c8ef95c28d9e5a27d4e",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/5018d5feaf0206a7ec42ad1cf807343887f028": "91213f456c5943821b09813f1fac6312",
".git/objects/71/fc7d31a1089a113cb46e0cd22c7b96ecb0d39b": "189ba27c0dc1546d61a50abcc174d9f5",
".git/objects/71/ea596ac08e96b6f26690148c81e886acd3bad9": "2aacb0561c945ce11c0bbc5387c097c8",
".git/objects/82/544b913d17dd0b70a7cce5e230e35be53d0cc9": "6cabed06fa6ee6b6774d2b71582ee618",
".git/objects/49/fb08efaa736a3a20a2ce9fe8a7f310260c0a85": "07c42db18e04547b5115510f951edeec",
".git/objects/8b/3f9cb0058eae94f4df8a62ffca0eb459d50351": "a4b322254976d5fadd3a322b05c6b18e",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f8b6176b52c8b4b95319f48eb71b9a60",
".git/logs/refs/heads/main": "f8b6176b52c8b4b95319f48eb71b9a60",
".git/logs/refs/remotes/origin/main": "10dbd7b406caeae9f2ad024f8820b497",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "87b2f9477459639ff3be9209e57b490c",
".git/refs/remotes/origin/main": "87b2f9477459639ff3be9209e57b490c",
".git/index": "08779821addca8a8c7b69a99f4d0ee62",
".git/COMMIT_EDITMSG": "6a12d4b931339124fccfa227e4ebe6a6",
"assets/AssetManifest.json": "e0fd73afbfb7b9a1e27871b449552a73",
"assets/NOTICES": "48a11f738fe8a53d91eb024ba7d0b075",
"assets/FontManifest.json": "046016cc64c7cb925cccaa8ae1e5770a",
"assets/AssetManifest.bin.json": "fd1d695c6df31fcaef187010167db697",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "3511d17c662355a70f72b905f2bbdab1",
"assets/fonts/MaterialIcons-Regular.otf": "8227937358f9bb70ad24cf62d6deff4f",
"assets/assets/images/image_2.png": "a7a850b423beef285d24ceaf3720e722",
"assets/assets/images/image_3.png": "270906efadbca8c110f69961a504c286",
"assets/assets/images/setting.svg": "5af8fd6c2cfd8607a1c262f47da38bd1",
"assets/assets/images/image_1.png": "3d16febf151681397d10c4e85a3d8fe4",
"assets/assets/images/notification.svg": "019d7a9d8f76b67bdf52d966a2fc8973",
"assets/assets/images/calendar.svg": "bf4b1680058c91a248d973a9d9a6f499",
"assets/assets/images/logo.svg": "57d6eb29ed3c47c3286327efb61ccbea",
"assets/assets/fonts/Inter/Inter_24pt-Medium.ttf": "4591e900425d177e6ba268d165bf12e8",
"assets/assets/fonts/Inter/Inter_24pt-Regular.ttf": "e48c1217adab2a0e44f8df400d33c325",
"assets/assets/fonts/Inter/Inter_24pt-Light.ttf": "65ec965bd90e1a297cdb3be407420abc",
"assets/assets/fonts/Inter/Inter_24pt-Bold.ttf": "8b04b3bd9435341377d7f4b4d68b6ecc",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
