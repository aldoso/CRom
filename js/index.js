/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {

        // functions for admob plugin
        initAd();
        showBannerFunc();
        showInterstitialFunc();

        $(document).on("mobileinit", function () {
    $.mobile.ignoreContentEnabled=true;
});

    }
}; //end of app

// ADMOB ---------------------------------------------------------------------
// admob https://www.npmjs.com/package/cordova-plugin-admob-simple -----------
//initialize the goodies
function initAd(){
        if ( window.plugins && window.plugins.AdMob ) {
            var ad_units = {
                ios : {
                    banner: 'ca-app-pub-xxxxxxxxxxx/xxxxxxxxxxx',		//PUT ADMOB ADCODE HERE
                    interstitial: 'ca-app-pub-xxxxxxxxxxx/xxxxxxxxxxx'	//PUT ADMOB ADCODE HERE
                },
                android : {
                    banner: 'ca-app-pub-4009298172097154/1960689523',		//PUT ADMOB ADCODE HERE
                    interstitial: 'ca-app-pub-4009298172097154/2220474165'	//PUT ADMOB ADCODE HERE
                }
            };
            var admobid = ( /(android)/i.test(navigator.userAgent) ) ? ad_units.android : ad_units.ios;

            window.plugins.AdMob.setOptions( {
                publisherId: admobid.banner,
                interstitialAdId: admobid.interstitial,
                adSize: window.plugins.AdMob.AD_SIZE.SMART_BANNER,	//use SMART_BANNER, BANNER, LARGE_BANNER, IAB_MRECT, IAB_BANNER, IAB_LEADERBOARD
                bannerAtTop: false, // set to true, to put banner at top
                overlap: false, // banner will overlap webview
                offsetTopBar: false, // set to true to avoid ios7 status bar overlap
                isTesting: false, // receiving test ad
                autoShow: false, // auto show interstitial ad when loaded
            });

            registerAdEvents();
        } else {
            // alert( 'admob plugin not ready' );
        }
}
//functions to allow you to know when ads are shown, etc.
function registerAdEvents() {
        document.addEventListener('onReceiveAd', function(){});
        document.addEventListener('onFailedToReceiveAd', function(data){});
        document.addEventListener('onPresentAd', function(){});
        document.addEventListener('onDismissAd', function(){ });
        document.addEventListener('onLeaveToAd', function(){ });
        document.addEventListener('onReceiveInterstitialAd', function(){ });
        document.addEventListener('onPresentInterstitialAd', function(){ });
        document.addEventListener('onDismissInterstitialAd', function(){ });
    }

//display the ad banner
function showBannerFunc(){
    window.plugins.AdMob.createBannerView();
}
//display the interstitial
function showInterstitialFunc(){
    window.plugins.AdMob.createInterstitialView();	//get the interstitials ready to be shown and show when it's loaded.
    window.plugins.AdMob.requestInterstitialAd();
}

// end of ADMOB --------------------------------------------------------------------

app.initialize();



// Search bar - seaching single page
$(function() {

  var mark = function() {

    // Read the keyword
    var keyword = $("input[name='searchup']").val();

    // Determine selected options
    var options = {
      // separateWordSearch: false,
      // diacritics: true;
    };
    $("input[name='opt[]']").each(function() {
      options[$(this).val()] = $(this).is(":checked");
    });

    // Remove previous marked elements and mark
    // the new keyword inside the context
    $(".content").unmark({
      done: function() {
        $(".content").mark(keyword, options);
      }
    });
  };

  $("input[name='searchup']").on("input", mark);
  $("input[type='searchup']").on("change", mark);

});


////////// Search and hide others ----->  It doesn't work with diacritics / accents :(((
// function searchArticle() {
//     var input, filter, content, art, a, i;
//     input = document.getElementById("searchbox");
//     filter = input.value.toUpperCase();
//
//     content = document.querySelector(".content");
//
//     art = document.querySelectorAll(".artbox");
//
//
//     for (i = 0; i < art.length; i++) {
//         a = art[i].getElementsByTagName("p")[0];
//         if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
//             art[i].style.display = "";
//         } else {
//             art[i].style.display = "none";
//
//         }
//     }
// }
