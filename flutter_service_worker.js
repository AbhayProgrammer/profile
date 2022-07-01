'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "manifest.json": "494f760a69a36a53df565cb598294750",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"index.html": "48ecd7a4f8b2be93e38001de9eb8d0c6",
"/": "48ecd7a4f8b2be93e38001de9eb8d0c6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "389dc47c70cd15d8ecfaced79b3f5d81",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/assets/images/my_profile.jpeg": "f7abc9bff238d79260fbf31d11ade12e",
"assets/assets/images/bg.jpeg": "c6449162dc3940daa640a43101cfd66c",
"assets/AssetManifest.json": "f16bcef41c6aa4da46ddc026314eb340",
"main.dart.js": "2bc9e1afb79ca650ae2bc600eaee510a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"version.json": "dfa7d0ef13fc852513466093b6539970",
".git/logs/refs/heads/main": "9a1fa6f6a5d10ce68c6c81e6894fd0cb",
".git/logs/refs/remotes/origin/main": "e57759f35679d018aaa399126313928e",
".git/logs/HEAD": "4b48d0d8e92ad88dc784806c589b1c17",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/config": "04283abc907fc3e603f97cc550f63346",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/prepare-commit-msg.sample": "7dfe15854212a30f346da5255c1d794b",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "3ff6ba9cf6d8e5332978e057559b5562",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/index": "87a289f70bf1e84c96f2f250ed5f1cca",
".git/COMMIT_EDITMSG": "a0344c3f520dd0e8699688a3465c1c81",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/refs/heads/main": "3c517ebfbd90cf3471c060db722c0637",
".git/refs/remotes/origin/main": "3c517ebfbd90cf3471c060db722c0637",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/1b/a2724403176db642fac68445337d484f7051de": "ef350b5fbe038fdc10400026964e6610",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/f4/c86e47892f5af5f606ca74d6133efef65e1381": "527c7698268844d4a8c39160c137cf7a",
".git/objects/bb/e09ab2afb22734853169433f416e3e6598afc4": "519224c4197014de6cf47c92d56f8ccf",
".git/objects/10/0a0ead86ffbf2d3490bb56b766c1020bbf04c7": "3d38db5597b98bf656a450d36e0c0fd2",
".git/objects/19/e8b4bb848f355a6c4a303fa631c49e82a8417f": "ca33ea45dcf7ae4e906bc198425c1f28",
".git/objects/6f/dd69fad1366b6d9f16d015327e016aa75aa9c4": "2ed6be346766d4c295809986332a639e",
".git/objects/84/ab81b4d21526acbbad31f36c0acebb90c9957c": "f80b9783448f23e58cf2932b16b9b3b4",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/17/23e4b05032ca0a11292a6aa26045e6883b937b": "2d062eefb129c0bb6fd5c5a628afbd15",
".git/objects/e6/0aa45373c890fe2c9ce0dd3dbcb1ccb70d0dd3": "a0c63a5639be879852870c0773357bed",
".git/objects/9f/c27050ca4c0e3555d0ef75c364257e66f2b275": "f18cb6c4b1258ad27393d5b70c1e8842",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/68ae6f352cd479692e872ee244d3d55c4f359f": "559f98582eb1d20dcac520f524e29ddd",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/75f0edda0b3dc7c501525bd1c0f7f04137982d": "d7060f271764b2b0492ee640dd3dcb8e",
".git/objects/1c/a8f138a0404a6c604b75e8d25736080cac232e": "1c0d8b4281dfedffec941d542fd13b35",
".git/objects/26/1832385db73e26e69a23995d05acf35175ed88": "3fa563559897aca616cda718c6c955d7",
".git/objects/3d/16715b3a3619954aa7a7d0afb3a42e12ffb54b": "a1857ea01d5eb40da62befedab4c70d7",
".git/objects/d1/63b00f12a2b669415a916b39359d656f0a9486": "b94d3a21f4544ae6853c495008e003ef",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/cb/6da939eafe2121664d15ee4161308a1e2f0749": "14bc771d2ef27847b4aa895991c462c5",
".git/objects/ee/deb6e48f3e76a9fde4fb87e5cb2c19a4c0158c": "d7a566542c14a4c0ca632d5bc81764e8",
".git/objects/00/872401d541499f41b800154c6bfa5c529f8e29": "16076fc3308dbaba6d9a780b8148708a",
".git/objects/5f/72d28df5027711adaa320e1e72ed43111e6f3b": "9dcdc22a1ab23b8a9f38d9601ac48f59",
".git/objects/97/c06a92a3f11bedc1d1369a10c2068b5bcc8370": "c0cafb5a4f5b269c9a461bcccc64a9bc",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/7a/35f8f8f42f7ad00676a17152483f5a3c6f071d": "c6fd8b23b79888f7f1ea279f494cfc3d",
".git/objects/8b/bb869c1ccd406354c5b53dc26c2d6581455201": "01356d6f7767346b86e7ae22ded743ee",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/92/374fc7d8fb29e50883c4c86429a8909b3d9132": "47abf790b4f56838081573a890e61fbc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/91/bb1140384a71326d9d5a2e0edcbe30fd7ddd98": "3572333b987f77e2a3a9035074df7a38",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/56/0e9679bcfc538e9044d7ec47ccdc3bb042f033": "54db886a30dce276555d27326b7782bf",
".git/objects/94/b7b54cb063f3131e835f2640ac486c022849cf": "ea33b48dcc4bae4418330526522733b9",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/07/50a2ae2ffd7193966694e916ed6ce67041e99a": "d0e02189677d4b94d89113b8ee20709a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
