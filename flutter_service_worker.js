'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "875872dbf09a4ed8c5b48547527c9030",
"version.json": "e2cb7a8140eab6243eb6ddd163a22f74",
"index.html": "808939325cdf35c385b0bc3fc537971f",
"/": "808939325cdf35c385b0bc3fc537971f",
"main.dart.js": "4fff8624f1aeaabec7f591da4b997425",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "652936b08bed86e915a29f144c0ffb04",
".git/REBASE_HEAD": "5786aefb468dcab134b5ae1a7f7bfd0c",
".git/ORIG_HEAD": "5786aefb468dcab134b5ae1a7f7bfd0c",
".git/config": "195fc0a569d4c0cf631bc25fedf679b5",
".git/objects/61/f3bfffc7f9fde916ccb74fe48c5c2f37ed0d00": "47a483700c23a2d66344202c240de43c",
".git/objects/61/c9940edeec1d103e5b2fc0633d2be6c75ff4e6": "c75008b9605164286e37db0146983de1",
".git/objects/0d/468cb35cc6d5f111dbf248c664bde020a91ae0": "10e36c507bf88389c64ea102316b3a41",
".git/objects/59/857e8a42d1b6d5472625e5c227fdf08b3df83b": "367601bb87ace7fbba125ee45c488d62",
".git/objects/92/eab450609b7dc5d076ddf6c8416de8209373e0": "9b3d4cb7f5916a87f36a18b466ea7ac4",
".git/objects/0c/4f3d2c1b249b76de030b49673bd5d28158f262": "c0f2d93a3e5adc93b8745246b9baed38",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/56/2909bc29582b591c648e4f8fde9a9c23fe9ddc": "30cb392120460468af8d0afb78d0b89d",
".git/objects/51/469202b08ce3c655c974ba8669a06b104f65f0": "e779c72f361f4b88926ca71447d2c259",
".git/objects/0b/abe5d8e1fccf490a4754b6030a2d720f19ae7e": "80137a15e1cb1b04250aeb94f10e5557",
".git/objects/94/40e5b3df70ceaefda051d9baf23dc373aa4840": "8dc86dc1e01968d380b4da7de7db398e",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/02/8ed45c7de2dde63c4d521d41f7f74ce351b0c2": "7f5af736669b263393ae130393f53214",
".git/objects/a4/d0ea2b4d1bc5929f6d9ee4f3d4a41c1388f8d6": "89394625d4b91df9010fb69a83e49656",
".git/objects/b5/dcc2d47cb0b746c164ecee8aa1ea3468c8e8f1": "c7adc2cb27ae2de2248c83defc0838a0",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d7/280c59fb3213d63f68be33fcd2bc531865606b": "0382b4eb8c1c5e2aba4cab37d47573dd",
".git/objects/a2/37c7b3cea0dd6df73554370960ca5fcdda7cc1": "d9793634d9b324a26a94a49c9b97ab47",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/f3/1693bb17aace116889210dc3d049e1a98eae73": "495de52e312c0e4a12eb213a55d9937a",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/08318a4aa293cd4535d90399d3cad710787e02": "b8b229dbfa6c1226e316b774401e4100",
".git/objects/ca/d6163626056bc8e79b0a0131ce3dc9d353bd03": "54b46f4315d672751f5a966d2f8bbb0b",
".git/objects/27/dddea5ee80c874fb2cd3bb09364e4c5ee02019": "b23525ee3002e74f9aebfae36bd1b57b",
".git/objects/42/c047f92854c8df63e94f7065c904a5987e78ff": "a5d51b9806b55cd978d02f33dcfb57e3",
".git/objects/89/515a96f366dfb5b773ffba96a6fd3e15f15aea": "380be8472ce619ff7271038cfb51d745",
".git/objects/1f/96f18f342b43f8b27b7fc9a1a39034ed587a9c": "6f51834fcefb9a3db1829b94c9e3bac7",
".git/objects/28/d6e7cea684a73431bba360c89f1e93c718f246": "66f98c12e0927ae201d2819d9f1fbda5",
".git/objects/17/6e8888c0c29a229d0adce47b01f73834701cd5": "a5f56d3ea6e4573628bbcdc59f8292b7",
".git/objects/17/1f963a06bc757822898341f34dee18c93cceb7": "aedeaa7a0edc76ac22ba6ab1bbea8186",
".git/objects/8a/0db19c7eb519b6dc7f872d1be8d3d55ad23c87": "1a919d2e2052bdc790fb4890cb390441",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/21/f9fe963354ff9db44a5ad1c2c18c7c604132fe": "bea4e411308129bf64d7f625dd3e8e9e",
".git/objects/4d/43933dbeed4abebcd0fab098fa32bea4c3830a": "64c0a6059b33b78668b328cdeb5ca233",
".git/objects/86/b9351b830a065636073bdd41a61d5ee88bbb3d": "84cef15a0a9040d8528eff8222b4f628",
".git/objects/43/43381e0b040a00c98574cc005b511e4286090a": "a18b0dfb62b0b5e11c53413ea25cbaf8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/b8bbeb74b39c851ed490c91f076e8b2d950054": "5322943da9ade92a86c60993c612f73a",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/9f18a92371a8b7154e440fe5f047eb9ac57c50": "b22c4aebd0032a5460fa8b93d5adbd5d",
".git/objects/00/84e1b960f551e12a4ef0b3095cb94545fcac79": "8f7ee6dd3c3036a72e288f4a724ded15",
".git/objects/00/79f2a93813dfe052f261e1e2659dea8cc01212": "95ed0412bdc7d00bf5805fbfcbb5dfbd",
".git/objects/5d/2a3381e7424838a892c3d9d4db368188fd7acb": "696e23789840f346051b4b24f896a721",
".git/objects/31/98bbcaad3b2841700015236413d19fa0815316": "aecda4794e7410eea0f4dc7976711339",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/5e/9730e69b89c9dc7c65a35720ca891d8e916e68": "9db8eca3d535c98d8f4c6cd4b12ede56",
".git/objects/08/5eb2931edf5b7054e9d9ea6d780b88df2e4071": "9b05d5cfbbcf983af85b7ba357201907",
".git/objects/55/3373b459f9d416f5df75b07292727ce9400648": "f0d5a25aa924fb69c8f096fcb876bb08",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/90/bebfa829cd6aafcb501bd6f6cf229393c444b9": "2b8b4e896e2b55eb507d57228811a944",
".git/objects/bf/bc576816d985ce01ef4cf2d4c790d62624c276": "0662a289b95803c4a7e786bd60e88493",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/dd/83ed61f4f682c44e41353d6ba49ae6d8ac5fbb": "b827f662fd139e252ff8046ffec49df7",
".git/objects/dc/f83695f71da8c6278eb914cdd42692c427924e": "9ca7f32e12839dea4610032ada023058",
".git/objects/b6/ad9823caca3a3379c63390bc51eade267b955f": "c1bfe5a648e15137d50f44ab1702b55b",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/d5/78e18ff2d22b9f0332c00a31f17aa60a27b1c6": "f38d394190ded0646d00f21cc566932f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/de/8e26e392834fb9e2ca3126c6d4d501bf094c90": "356a39b634298c9ca5bd2a0ee1523bf8",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/03599941949336d7e5a1fc58618a5cb53d51ea": "e3469be80e850f6a9896a3aa5821758f",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/e1/3d52d7c3a60ac665c77dc94f935ee63ba8ea47": "b1584910c78334cbbbde343d836d5351",
".git/objects/e1/4b312bdc1c10f05c6af4ae7ffa4e662d8d58b5": "0175dc2422ee5f73a77f1971966ea1bb",
".git/objects/e6/25ba0d2b9f70a7843f656223179a14ebfb958b": "e6e224df8551c1dab051e439bb41da22",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/c5/e97a3a525b08eec51a922014e79d5286b89c2b": "452ae07836a736dd6223f261715d6676",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e7/6c4d9a835fd50212967185bb0fad73035de0fc": "1bee277373e05d4e27e3624e4bf4b853",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/cb/1d0bd7f773884b23dec2b83c28db2ee8663cdb": "cb0aa9061e313e31608f0940028c4fba",
".git/objects/cb/48f8e457efa94652a456be8a6335947fb59999": "797ddf884912f491c03fa6e607881c0f",
".git/objects/ce/35c0d72c76f93112df55a9193d565fb707b6fe": "8d1f34a79bb96d21bf9c021e7b37e4f0",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/77/3300bf8009bb495aa8e6e81eac058307673c69": "e2e120caf6139e44cc3d0f5e68aaa015",
".git/objects/48/b4b06ab4841be5ea0fc98f81cbafe802a19518": "8c6fb8c589f6fbdf682f8bb9b9940bc8",
".git/objects/70/293367738795d80fccaa430e0c9e235ba433b6": "d88333c288788fe5862175b409128e2a",
".git/objects/84/56c1510dfbaa0b43625c0861f6342abb716936": "d8623e608b7aec1465fa264b95469bd3",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/4f/453e388fcdc0194aa95a55a04155e55dfb3c6f": "1e6837591758a95447953fbcc1a8057e",
".git/objects/15/4128a08544aab722700116567d596ac769e589": "dc5592106c8c123af59e17ebd1b7e626",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/1d/8ec0daa0b7b43451a272ea804d4639f3753b6f": "0f8223a2fa62d2d21227f0616e7c55ce",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/82/66831be515ffdc645063e4599cfa983373d1f0": "7d3c9e89764d57940cc2448dce013475",
".git/objects/82/c2d3a764dd952c4b54bfd5aaae561913cebb87": "2c04eae6851dd6cbed7be4d901bb022b",
".git/objects/49/b179a809c655a65f9633a8837f11747637f064": "431f3e5d868c960a0070055dddfd522d",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/7f/6876ed61ad8300657d22476f1401dbc54238a0": "abf8469cd2e1ce53a4fc62b9ea7647ac",
".git/objects/8e/7e3f4c7408370e02a0b37a7f2b6571b151849e": "951632d16ccb7ef6fb6ba03b117f3320",
".git/HEAD": "c67921b440970657ae8259a0b480e6b2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2ea4287a459d2dd12a4c1dd9b6368830",
".git/logs/refs/heads/main": "7539034e12152a8c38a9853617d53b65",
".git/logs/refs/remotes/origin/main": "e7729840c63a4bdcf82cf264d8d138a1",
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
".git/refs/heads/main": "5786aefb468dcab134b5ae1a7f7bfd0c",
".git/refs/remotes/origin/main": "de0dc045d233bfbbc795b8be356fdcea",
".git/index": "114089ba49155cf40e510c71235d0f7c",
".git/COMMIT_EDITMSG": "c291e54d4e8b62cea520f8b65e722507",
".git/FETCH_HEAD": "3bb03b3b75bb624c53be6780a7a5e55d",
".git/rebase-merge/git-rebase-todo.backup": "c7d93b588c26a24238bd440c0d5496d8",
".git/rebase-merge/head-name": "360efc618fa1294192e18ee097c9fae4",
".git/rebase-merge/orig-head": "5786aefb468dcab134b5ae1a7f7bfd0c",
".git/rebase-merge/git-rebase-todo": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/message": "993dff42ea889f5bc5ef46627f3c542b",
".git/rebase-merge/onto": "de0dc045d233bfbbc795b8be356fdcea",
".git/rebase-merge/drop_redundant_commits": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/end": "b026324c6904b2a9cb4b88d6d61c81d1",
".git/rebase-merge/patch": "5f997c3bc08e32abbbb997ff9cbeca9d",
".git/rebase-merge/done": "f39f1f862f2246d60c43a71ca97920cc",
".git/rebase-merge/no-reschedule-failed-exec": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/stopped-sha": "5786aefb468dcab134b5ae1a7f7bfd0c",
".git/rebase-merge/interactive": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/msgnum": "b026324c6904b2a9cb4b88d6d61c81d1",
".git/rebase-merge/author-script": "d5b01f5aa7eceda903269194bda642cb",
"assets/assests/images/photo2.jpg": "290d4e26acdb1d6c21446c7d69ba0a79",
"assets/assests/images/photo1.jpg": "00ed93a2f2b747634e61065db8c3fcdc",
"assets/AssetManifest.json": "54cfe725b7fa2ab3f39bb09335eca51e",
"assets/NOTICES": "4463de0a9cef05e9cdff9f20137310aa",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "e7216e7c30c0b767bb0a5207eb334995",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "034404dbf95c2b902ca7c7534bea054e",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
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
