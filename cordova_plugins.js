cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-admob-simple/www/AdMob.js",
        "id": "cordova-plugin-admob-simple.AdMob",
        "pluginId": "cordova-plugin-admob-simple",
        "clobbers": [
            "window.plugins.AdMob"
        ]
    },
    {
        "file": "plugins/cordova-plugin-firebase/www/firebase-browser.js",
        "id": "cordova-plugin-firebase.FirebasePlugin",
        "pluginId": "cordova-plugin-firebase",
        "clobbers": [
            "FirebasePlugin"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.2",
    "cordova-admob-sdklibs": "2.1.6",
    "cordova-plugin-admob-simple": "3.3.4",
    "cordova-plugin-firebase": "0.1.24"
}
// BOTTOM OF METADATA
});