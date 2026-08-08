/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1c405af2fe6a1214a9080bbe33f25bb1"
  },
  {
    "url": "assets/css/0.styles.48943fff.css",
    "revision": "8cae073722f35cf5eeb526365b01c67f"
  },
  {
    "url": "assets/img/001.f43a98a7.jpg",
    "revision": "f43a98a7dc7e03f868319f95f313a901"
  },
  {
    "url": "assets/img/037.96b3ac90.jpg",
    "revision": "96b3ac901b9e0d611906b92be07dd444"
  },
  {
    "url": "assets/img/133.761ce896.jpg",
    "revision": "761ce896432c4cc986e9b44a5058d9bf"
  },
  {
    "url": "assets/img/160.d795c87a.jpg",
    "revision": "d795c87a22c2428e48a6f55e9388c6b0"
  },
  {
    "url": "assets/img/2020-event.46e9909f.png",
    "revision": "46e9909f7ab08aa28a6fa421230448e5"
  },
  {
    "url": "assets/img/2020-finance.94fdc591.png",
    "revision": "94fdc591ba37831ae3485a15fd3e1764"
  },
  {
    "url": "assets/img/2021-event.a8e1ef38.png",
    "revision": "a8e1ef38c46789364b5fdb49352a9ae7"
  },
  {
    "url": "assets/img/2021-finance.78c83c3d.png",
    "revision": "78c83c3da78b9dc62b4436bd1c552a01"
  },
  {
    "url": "assets/img/2022-event.53f0d17f.png",
    "revision": "53f0d17f38aff43aa653b8a5b8924e9c"
  },
  {
    "url": "assets/img/2022-finance.52b33856.png",
    "revision": "52b3385640dcfcd10a5a73d51a67d38a"
  },
  {
    "url": "assets/img/2023-event.6ac851e0.png",
    "revision": "6ac851e0cff5de0cbdc4e8a421d1a66f"
  },
  {
    "url": "assets/img/2023-finance.d500475e.png",
    "revision": "d500475e14e19fec541f9e9393d38938"
  },
  {
    "url": "assets/img/2024-event.5bb675f5.png",
    "revision": "5bb675f50843b1b615a7e4b10eadea67"
  },
  {
    "url": "assets/img/2024-finance.b8777d77.png",
    "revision": "b8777d776f6ba8bcdec9b15d9d9c39b4"
  },
  {
    "url": "assets/img/2025-event.44fe6ac2.png",
    "revision": "44fe6ac2a075ead1486cbd68a31b214b"
  },
  {
    "url": "assets/img/2025-finance.3f966217.png",
    "revision": "3f9662178d21ab3aef5ed996d0981b5b"
  },
  {
    "url": "assets/img/211.dfaab6a5.jpg",
    "revision": "dfaab6a5a71d956f6c177072bddd9367"
  },
  {
    "url": "assets/img/213.0e16713b.jpg",
    "revision": "0e16713ba143eaa6427f3e5e17ee667a"
  },
  {
    "url": "assets/img/215.e80805e9.jpg",
    "revision": "e80805e99db5bf943aa6f3e9205db472"
  },
  {
    "url": "assets/img/217.86918423.jpg",
    "revision": "869184239f810ac46b68e8c5f19985b6"
  },
  {
    "url": "assets/img/221.f2df829e.jpg",
    "revision": "f2df829ef802bb0ff58b42fbc6e2b16d"
  },
  {
    "url": "assets/img/222.65cbfced.jpg",
    "revision": "65cbfced6c82bfaba8310eb22ae2c4f9"
  },
  {
    "url": "assets/img/champion.8739e9cb.jpeg",
    "revision": "8739e9cb64bb3b19114fe651c4e30cc9"
  },
  {
    "url": "assets/img/Juca.331cee0a.jpg",
    "revision": "331cee0a94d59a6017209f6010a89eb0"
  },
  {
    "url": "assets/img/Maciel.f591c5f3.jpg",
    "revision": "f591c5f33f541365380373f73fc50700"
  },
  {
    "url": "assets/img/nanshancup.06707e7d.jpeg",
    "revision": "06707e7d34f34ceb40c755c04eb815e6"
  },
  {
    "url": "assets/img/Ouyang.48afe9ab.jpg",
    "revision": "48afe9abef4759f190ca59b04aa49a90"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/Sidine.baea7a3b.jpg",
    "revision": "baea7a3b506287c0bb35ea53b773f2b2"
  },
  {
    "url": "assets/img/Ten.7731ca3e.jpg",
    "revision": "7731ca3e63823fc061792b8d45eec940"
  },
  {
    "url": "assets/img/training.dc29935f.jpg",
    "revision": "dc29935ffdb28ccb823dee2e55a04401"
  },
  {
    "url": "assets/js/1.94d3fdf3.js",
    "revision": "4924ab966dc312672e2d7bd86edf9006"
  },
  {
    "url": "assets/js/10.6ecd8f41.js",
    "revision": "a84f078943341c4803099fd06704c227"
  },
  {
    "url": "assets/js/11.64bf4331.js",
    "revision": "f5512674ce994a98cb63a8f25674ebb4"
  },
  {
    "url": "assets/js/12.5a54a0e5.js",
    "revision": "0f1d5640677a6174f813fc625263a4ca"
  },
  {
    "url": "assets/js/13.8debd684.js",
    "revision": "afd0f80280a598109ea7ac5941ac2fc8"
  },
  {
    "url": "assets/js/14.beba6c86.js",
    "revision": "2557623ca3cda7990fc293682253a538"
  },
  {
    "url": "assets/js/15.2b704e35.js",
    "revision": "66670e224fc7c3786426793ff95abcdb"
  },
  {
    "url": "assets/js/16.d7954d75.js",
    "revision": "bcc54531901f4197bfd6608101092976"
  },
  {
    "url": "assets/js/17.3bed7fce.js",
    "revision": "74395bfe726708665662f7f1d864e585"
  },
  {
    "url": "assets/js/18.231d0dd1.js",
    "revision": "fc0cf063f942b4468bb173614320744e"
  },
  {
    "url": "assets/js/19.1351e6c7.js",
    "revision": "2eeaf987b84523ceffa69f84dc163753"
  },
  {
    "url": "assets/js/2.2bb73bc9.js",
    "revision": "1578151324dbacf1572c0588f93e02d0"
  },
  {
    "url": "assets/js/20.1e6deb51.js",
    "revision": "22bb38cfc2a37e9c731c3f53c9813ecf"
  },
  {
    "url": "assets/js/21.188b9b01.js",
    "revision": "db6004e32cca338acd3297d928464b8e"
  },
  {
    "url": "assets/js/22.9d6e7530.js",
    "revision": "6272752137ed7dc8927a106db3a66376"
  },
  {
    "url": "assets/js/23.8fa05138.js",
    "revision": "959132811430e441558c35b6a96453d8"
  },
  {
    "url": "assets/js/24.aca4eab3.js",
    "revision": "4bbad179ac682489d03b526e3e55ea4d"
  },
  {
    "url": "assets/js/25.fd35bcaf.js",
    "revision": "d8c3f7ac814540bc0adef7cb5580de1a"
  },
  {
    "url": "assets/js/26.15a3191f.js",
    "revision": "fa1985b12f063d5add96bac1f7e6406a"
  },
  {
    "url": "assets/js/27.fc560681.js",
    "revision": "13c6013d53fb76c528e4a09902cda8bd"
  },
  {
    "url": "assets/js/28.6a3eb84e.js",
    "revision": "ecb01ebc01de691dd67042e5c17b02d0"
  },
  {
    "url": "assets/js/29.315557c2.js",
    "revision": "a812e56bb5b78077353e242df39b7d24"
  },
  {
    "url": "assets/js/3.ddfbbc55.js",
    "revision": "a9877bc3813f8a91b215a5d56fa8cea5"
  },
  {
    "url": "assets/js/30.6d609d29.js",
    "revision": "3ff2c809131f29c61d30e9b322aec62e"
  },
  {
    "url": "assets/js/31.47c84f0a.js",
    "revision": "3c02045eb5526d221028227e194b461c"
  },
  {
    "url": "assets/js/32.ab3016c2.js",
    "revision": "a354c1f94b4286dfe563f60614bcdb39"
  },
  {
    "url": "assets/js/33.64e00c8e.js",
    "revision": "200b5c9d1753ceac85ed8aa72fa3eea9"
  },
  {
    "url": "assets/js/34.502bdf75.js",
    "revision": "249ab7313a9b605e8575ee2a8bfa7a1d"
  },
  {
    "url": "assets/js/4.4406ce9f.js",
    "revision": "8241f14f006633992acc0d23bd3258c8"
  },
  {
    "url": "assets/js/5.954f78c1.js",
    "revision": "0e38c8e639af88d62473a268c225f08e"
  },
  {
    "url": "assets/js/6.5cf9b5bf.js",
    "revision": "82dcf85efddcbbd86985e684454f5e0c"
  },
  {
    "url": "assets/js/7.494fac9c.js",
    "revision": "f40240526b2e42d33d89ddd1a145034f"
  },
  {
    "url": "assets/js/app.a41a17bc.js",
    "revision": "d713aa5f1b9e873524d1ff79fc9f28f0"
  },
  {
    "url": "assets/js/vendors~docsearch.0d9671a6.js",
    "revision": "08d5ce9cddb8ec38fe1d48d8d1d52c05"
  },
  {
    "url": "en/get-started.html",
    "revision": "f14b8e9202fdff7dfa5f9d97d14f8f77"
  },
  {
    "url": "en/index.html",
    "revision": "ac01e1de59c5e598654ec5c5d0caedd3"
  },
  {
    "url": "finance.html",
    "revision": "02edc857b92d8217e4cff5b7fe4cae08"
  },
  {
    "url": "get-started.html",
    "revision": "9e324f7212de807b377e335da42a828c"
  },
  {
    "url": "hire.html",
    "revision": "0298c8d1483e620c2c0c9dfdf98a7dcc"
  },
  {
    "url": "index.html",
    "revision": "6ef689acf157a14807396c6a536bc517"
  },
  {
    "url": "logo.png",
    "revision": "03ea45a1c37ffa4e41dab04e0b2a4fda"
  },
  {
    "url": "manage-team.html",
    "revision": "1b31fa492e6aff20fc7c760623359984"
  },
  {
    "url": "medical-emergency-action-plan.html",
    "revision": "7de18a01dc661222c80c15adccba8164"
  },
  {
    "url": "members.html",
    "revision": "8d820fb52a2961fc1239aa4a71fdf6da"
  },
  {
    "url": "schedule.html",
    "revision": "08d9ae6ae4424729510eda1dc6ff1371"
  },
  {
    "url": "wechat-official-accounts.html",
    "revision": "22196b3ee7e7c77eac400d87dcc7ed6f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
