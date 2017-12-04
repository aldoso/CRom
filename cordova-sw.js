/**
Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
'License'); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
'AS IS' BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License.
*/

// Note, these will be updated automatically at build time
var CACHE_VERSION = '1512386830312';
var CACHE_LIST = [
    "/config.xml",
    "/cordova-sw.js",
    "/cordova.js",
    "/cordova_plugins.js",
    "/css/bootstrap-grid.css",
    "/css/bootstrap-grid.css.map",
    "/css/bootstrap-grid.min.css",
    "/css/bootstrap-grid.min.css.map",
    "/css/bootstrap-reboot.css",
    "/css/bootstrap-reboot.css.map",
    "/css/bootstrap-reboot.min.css",
    "/css/bootstrap-reboot.min.css.map",
    "/css/bootstrap.css",
    "/css/bootstrap.css.map",
    "/css/bootstrap.min.css",
    "/css/bootstrap.min.css.map",
    "/css/index.css",
    "/css/index_cordova.css",
    "/css/jquery.mobile.structure-1.4.5.min.css",
    "/favicon.ico",
    "/footer.html",
    "/header.html",
    "/ii.html",
    "/iii.html",
    "/img/logo.png",
    "/img/searchicon.png",
    "/index.html",
    "/iv.html",
    "/js/bootstrap.min.js",
    "/js/index.js",
    "/js/jquery-3.2.1.min.js",
    "/js/jquery.mark.js",
    "/js/jquery.mobile-1.4.5.min.js",
    "/js/mark.min.js",
    "/js/popper.min.js",
    "/lib/angular-admob/angular-admob.js",
    "/manifest.json",
    "/plugins/cordova-connectivity-monitor/www/connectivity.js",
    "/plugins/cordova-plugin-admob-simple/www/AdMob.js",
    "/plugins/cordova-plugin-firebase/www/firebase-browser.js",
    "/test.html",
    "/v.html",
    "/vi.html",
    "/vii.html",
    "/viii.html"
];

this.addEventListener('install', function (event) {
    // Perform install steps
    console.log('cordova service worker is installing.');
    event.waitUntil(caches.open(CACHE_VERSION) /* eslint no-undef : 0 */
        .then(function (cache) {
            return cache.addAll(CACHE_LIST);
        }));
});

this.addEventListener('activate', function (event) {
    // Perform activate steps
    console.log('cordova service worker is activated.');
});

this.addEventListener('fetch', function (event) {
    console.log('cordova service worker : fetch : ' + event.request.url);

    event.respondWith(caches.match(event.request).then(function (response) { /* eslint no-undef : 0 */
        // Cache hit? return response else fetch it
        return response || fetch(event.request); /* eslint no-undef : 0 */
    }));
});
