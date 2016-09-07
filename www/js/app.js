!function(){"use strict";angular.module("starter.controllers",[]),angular.module("starter",["ionic","starter.controllers"])}(),function(){"use strict";function t(t,e,n,o){var r=o.connPub.subscribe(function(e){t.$evalAsync(function(){t.CONNECTED=e})});n.get("tutorialDone")||(n.set("tutorialDone",!0),e.go("app.about_tutorial")),t.$on("$destroy",function(){r.dispose()})}angular.module("starter.controllers").controller("AppCtrl",["$scope","$state","storage","socket",t])}(),function(){"use strict";function t(t,e,n,o){function r(){e.nextViewOptions({disableBack:!0}),n.go("app.im.chat")}t.model={roomName:"",userName:""},t.submit=function(){t.model.loading=!0,o.join(t.model).then(function(){r()},function(t){toastr.warning(t)}).then(function(){t.$evalAsync(function(){t.model.loading=!1})})}}angular.module("starter.controllers").controller("LandingCtrl",["$scope","$ionicHistory","$state","roomIO",t])}(),function(){"use strict";function t(t){t.ready(function(){window.cordova&&window.cordova.plugins.Keyboard&&(cordova.plugins.Keyboard.hideKeyboardAccessoryBar(!0),cordova.plugins.Keyboard.disableScroll(!0))})}angular.module("starter").run(["$ionicPlatform",t])}(),function(){"use strict";function t(t){t.ready(function(){window.StatusBar&&StatusBar.styleDefault()})}angular.module("starter").run(["$ionicPlatform",t])}(),function(){"use strict";function t(t,e,n){t.$on("$stateChangeStart",function(t,o){"app.landing"===o.name&&n.isJoined()&&(t.preventDefault(),e.go("app.im.chat")),o.name.startsWith("app.im")&&!n.isJoined()&&(t.preventDefault(),e.go("app.landing"))})}angular.module("starter").run(["$rootScope","$state","roomIO",t])}(),function(){"use strict";function t(t,e){t.state("app",{url:"/app",abstract:!0,templateUrl:"templates/menu.html",controller:"AppCtrl"}).state("app.landing",{url:"/landing",cache:!1,views:{menuContent:{templateUrl:"templates/landing.html",controller:"LandingCtrl"}}}),t.state("app.im",{url:"/@",cache:!1,views:{menuContent:{templateUrl:"templates/im.html",controller:"ImCtrl"}}}).state("app.im.chat",{url:"/chat",cache:!1,views:{"chat-tab":{templateUrl:"templates/im_chat_tab.html"}}}).state("app.im.users",{url:"/users",cache:!1,views:{"users-tab":{templateUrl:"templates/im_users_tab.html"}}}).state("app.im.room",{url:"/room",cache:!1,views:{"room-tab":{templateUrl:"templates/im_room_tab.html",controller:"ImRoomCtrl"}}}),t.state("app.rc4",{url:"/rc4",views:{menuContent:{templateUrl:"templates/rc4.html",controller:"Rc4Ctrl"}}}).state("app.aes",{url:"/aes",views:{menuContent:{templateUrl:"templates/aes.html",controller:"AesCtrl"}}}).state("app.pgp",{url:"/pgp",cache:!1,views:{menuContent:{templateUrl:"templates/pgp.html",controller:"PgpCtrl"}}}).state("app.pgp_generate",{url:"/pgp/generate",views:{menuContent:{templateUrl:"templates/pgp_generate.html",controller:"PgpGenerateCtrl"}}}).state("app.pgp_my_private",{url:"/pgp/my-private",cache:!1,views:{menuContent:{templateUrl:"templates/pgp_my_private.html",controller:"PgpMyPrivateCtrl"}}}).state("app.pgp_my_public",{url:"/pgp/my-public",cache:!1,views:{menuContent:{templateUrl:"templates/pgp_my_public.html",controller:"PgpMyPublicCtrl"}}}).state("app.pgp_buddy_public",{url:"/pgp/buddy-public",cache:!1,views:{menuContent:{templateUrl:"templates/pgp_buddy_public.html",controller:"PgpBuddyPublicCtrl"}}}),t.state("app.android",{url:"/android",views:{menuContent:{templateUrl:"templates/android.html"}}}).state("app.blackberry",{url:"/blackberry",views:{menuContent:{templateUrl:"templates/blackberry.html"}}}),t.state("app.about",{url:"/about",views:{menuContent:{templateUrl:"templates/about.html"}}}).state("app.about_license",{url:"/about/license",views:{menuContent:{templateUrl:"templates/about_license.html"}}}).state("app.about_feedback",{url:"/about/feedback",cache:!1,views:{menuContent:{templateUrl:"templates/about_feedback.html",controller:"AboutFeedbackCtrl"}}}).state("app.about_vendors",{url:"/about/vendors",views:{menuContent:{templateUrl:"templates/about_vendors.html"}}}).state("app.about_security",{url:"/about/security",views:{menuContent:{templateUrl:"templates/about_security.html"}}}).state("app.about_tutorial",{url:"/about/tutorial",cache:!1,views:{menuContent:{templateUrl:"templates/about_tutorial.html",controller:"AboutTutorialCtrl"}}}),e.otherwise("/app/landing")}angular.module("starter").config(["$stateProvider","$urlRouterProvider",t])}(),function(){"use strict";toastr.options={closeButton:!1,debug:!1,newestOnTop:!0,progressBar:!1,positionClass:"toast-bottom-center",preventDuplicates:!0,onclick:null,showDuration:"100",hideDuration:"1000",timeOut:"2000",extendedTimeOut:"1000",showEasing:"swing",hideEasing:"linear",showMethod:"fadeIn",hideMethod:"fadeOut"}}(),function(){"use strict";function t(){return{restrict:"A",link:function(t,e,n){var o=$(e);o.on("click",function(){window.open(n.externalLink,"_system")}),t.$on("$destroy",function(){o.off()})}}}angular.module("starter").directive("externalLink",[t])}(),function(){"use strict";function t(){function t(){var t=document.location.href.startsWith("file:"),e=$("body").hasClass("platform-webview");return t&&!e}return{isLocalhost:t}}angular.module("starter").factory("host",[t])}(),function(){"use strict";function t(t,e){function n(e){var n=e.roomName,o=e.userName;t.set("roomName",n),t.set("userName",o)}function o(){return{roomName:t.get("roomName"),userName:t.get("userName")}}function r(){var t=o(),e=t.roomName,n=t.userName;return e&&n}function a(t){var o=t.roomName,r=t.userName;return new Promise(function(t,a){e.emit("room:join",{roomName:o,userName:r},function(e,s){s?a(s):(n({roomName:o,userName:r}),t())})})}function s(){return new Promise(function(t){e.emit("room:leave",function(){n({}),t()})})}return{join:a,leave:s,isJoined:r,getCredentials:o}}angular.module("starter").factory("roomIO",["settings","socket",t])}(),function(){"use strict";function t(){function t(t){return o[t]}function e(t,e){return o[t]=e,r.onNext({key:t,value:e}),e}function n(t){delete o[t],r.onNext({key:t,value:void 0})}var o={},r=new Rx.Subject;return{get:t,set:e,del:n,observer:r}}angular.module("starter").factory("settings",[t])}(),function(){"use strict";function t(t){var e=t.isLocalhost()?"http://localhost:5000":"https://silenceim.com",n=io.connect(e,{transports:["websocket"],path:"/socket-endpoint"}),o=new Rx.BehaviorSubject((!1));return n.on("connect",function(){o.onNext(!0)}),n.on("disconnect",function(){o.onNext(!1)}),{connPub:o,on:function(){n.on.apply(n,arguments)},emit:function(){n.emit.apply(n,arguments)}}}angular.module("starter").factory("socket",["host",t])}(),function(){"use strict";function t(){function t(t){return localStorage.getItem(t)}function e(t,e){return localStorage.setItem(t,e)}function n(t){return localStorage.removeItem(t)}return{get:t,set:e,del:n}}angular.module("starter").factory("storage",[t])}(),function(){"use strict";function t(){function t(t){return("string"!==$.type(t)||!/^\s+$/.test(t))&&!$.isEmptyObject(t)}function e(e){return t(e)?e:void 0}return{isPresent:t,presence:e}}angular.module("starter").factory("utils",[t])}(),function(){"use strict";function t(t,e,n,o,r){var a={device:o.presence(ionic.Platform.device()),platform:ionic.Platform.platform(),version:ionic.Platform.version()};t.model={},t.submit=function(){t.model.loading=!0,r.emit("feedback:send",$.extend(t.model,a),function(o,r){t.model.loading=!1,r?toastr.warning(r):(toastr.success("Feedback has been sent"),e.nextViewOptions({disableBack:!0}),n.go("app.about"))})}}angular.module("starter.controllers").controller("AboutFeedbackCtrl",["$scope","$ionicHistory","$state","utils","socket",t])}(),function(){"use strict";function t(t,e,n){var o=e.canDragContent();e.canDragContent(!1),t.isLastSlide=function(){return n.currentIndex()+1===n.slidesCount()},t.next=function(){n.next()},t.slide=function(t){n.slide(t)},t.$on("$destroy",function(){e.canDragContent(o)})}angular.module("starter.controllers").controller("AboutTutorialCtrl",["$scope","$ionicSideMenuDelegate","$ionicSlideBoxDelegate",t])}(),function(){"use strict";function t(t,e,n){function o(e){e?(n.set("aesPassphrase",t.model.passphrase),t.model.key=n.set("aesKey",e)):(n.del("aesPassphrase"),t.model.key=n.del("aesKey"))}t.model={bit:256,iterations:8192,passphrase:n.get("aesPassphrase"),key:n.get("aesKey")},t.submit=function(){e.isPresent(t.model.passphrase)?(o(enigma.misc.keygen.hex(t.model.passphrase,{iterations:t.model.iterations,length:t.model.bit})),toastr.success("AES key has been saved")):t.model.key?(o(),toastr.warning("AES key has been removed")):toastr.warning("Provide a passphrase")}}angular.module("starter.controllers").controller("AesCtrl",["$scope","utils","settings",t])}(),function(){"use strict";function t(t){return{restrict:"A",link:function(e,n){function o(){$.each(a,function(e,n){var o=$(n),r=!!t.get(o.attr("data-setting"));o.toggleClass("on",r)})}var r=$(n),a=r.find("ion-item[data-setting]");t.observer.subscribe(o),o()}}}angular.module("starter").directive("menuDirective",["settings",t])}(),function(){"use strict";function t(t,e,n,o){t.model={key:o.get("pgpBuddyPublicKey")},t.submit=function(){o.set("pgpBuddyPublicKey",t.model.key),toastr.success("Buddy's public key was saved"),e.nextViewOptions({disableBack:!0}),n.go("app.pgp")}}angular.module("starter.controllers").controller("PgpBuddyPublicCtrl",["$scope","$ionicHistory","$state","settings",t])}(),function(){"use strict";function t(t,e){t.myPrivateKey=!!e.get("pgpMyPrivateKey"),t.myPublicKey=!!e.get("pgpMyPublicKey"),t.buddyPublicKey=!!e.get("pgpBuddyPublicKey")}angular.module("starter.controllers").controller("PgpCtrl",["$scope","settings",t])}(),function(){"use strict";function t(t,n,o,r,a){t.generate=function(t){n.show({template:e});var s=openpgp.generateKey({numBits:t,userIds:[{name:"anonymous",email:"anonymous@example.com"}]});s.catch(function(t){n.hide().then(function(){toastr.error(t.toString())})}),s.then(function(t){a.set("pgpMyPublicKey",t.publicKeyArmored),a.set("pgpMyPrivateKey",t.privateKeyArmored),n.hide().then(function(){toastr.success("Keypair was saved"),o.nextViewOptions({disableBack:!0}),r.go("app.pgp_my_public")})})}}var e='\n<ion-spinner icon="dots" style="fill: #FFF; stroke: #FFF"></ion-spinner>\n';angular.module("starter.controllers").controller("PgpGenerateCtrl",["$scope","$ionicLoading","$ionicHistory","$state","settings",t])}(),function(){"use strict";function t(t,e,n,o){t.model={key:o.get("pgpMyPrivateKey")},t.submit=function(){o.set("pgpMyPrivateKey",t.model.key),toastr.success("My private key was saved"),e.nextViewOptions({disableBack:!0}),n.go("app.pgp")}}angular.module("starter.controllers").controller("PgpMyPrivateCtrl",["$scope","$ionicHistory","$state","settings",t])}(),function(){"use strict";function t(t,e,n,o){t.model={key:o.get("pgpMyPublicKey")},t.submit=function(){o.set("pgpMyPublicKey",t.model.key),toastr.success("My public key was saved"),e.nextViewOptions({disableBack:!0}),n.go("app.pgp")}}angular.module("starter.controllers").controller("PgpMyPublicCtrl",["$scope","$ionicHistory","$state","settings",t])}(),function(){"use strict";function t(t,e,n){function o(e){e?(n.set("rc4Passphrase",t.model.passphrase),t.model.key=n.set("rc4Key",e)):(n.del("rc4Passphrase"),t.model.key=n.del("rc4Key"))}t.model={bit:256,iterations:8192,passphrase:n.get("rc4Passphrase"),key:n.get("rc4Key")},t.submit=function(){e.isPresent(t.model.passphrase)?(o(enigma.misc.keygen.hex(t.model.passphrase,{iterations:t.model.iterations,length:t.model.bit})),toastr.success("RC4 key has been saved")):t.model.key?(o(),toastr.warning("RC4 key has been removed")):toastr.warning("Provide a passphrase")}}angular.module("starter.controllers").controller("Rc4Ctrl",["$scope","utils","settings",t])}(),function(){"use strict";function t(t,e,n,o){t.leave=function(){o.leave().then(function(){e.nextViewOptions({disableBack:!0}),n.go("app.landing")})}}angular.module("starter.controllers").controller("ImCtrl",["$scope","$ionicHistory","$state","roomIO",t])}(),function(){"use strict";function t(t,e){t.room=e.getCredentials()}angular.module("starter.controllers").controller("ImRoomCtrl",["$scope","roomIO",t])}();