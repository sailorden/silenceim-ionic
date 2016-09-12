!function(){"use strict";angular.module("starter.controllers",[]),angular.module("starter",["ionic","starter.controllers"])}(),function(){"use strict";function e(e,t,n,r,o){n.hide();var i=o.connPub.subscribe(function(t){e.$evalAsync(function(){e.CONNECTED=t,e.DISCONNECTED=!t})});r.get("tutorialDone")||(r.set("tutorialDone",!0),t.go("app.about_tutorial")),e.$on("$destroy",function(){i.dispose()})}angular.module("starter.controllers").controller("AppCtrl",["$scope","$state","splashScreen","storage","socket",e])}(),function(){"use strict";function e(e,t,n,r){function o(){t.nextViewOptions({disableBack:!0}),n.go("app.im.chat")}e.model={roomName:"",userName:""},e.submit=function(){e.model.loading=!0,r.join(e.model).then(function(){o()},function(e){toastr.warning(e)}).then(function(){e.$evalAsync(function(){e.model.loading=!1})})}}angular.module("starter.controllers").controller("LandingCtrl",["$scope","$ionicHistory","$state","roomIO",e])}(),function(){"use strict";angular.module("starter").value("apiBackendVersion",1)}(),function(){"use strict";function e(e){e.ready(function(){window.cordova&&window.cordova.plugins.Keyboard&&(cordova.plugins.Keyboard.hideKeyboardAccessoryBar(!0),cordova.plugins.Keyboard.disableScroll(!0))})}angular.module("starter").run(["$ionicPlatform",e])}(),function(){"use strict";function e(e){e.ready(function(){window.StatusBar&&StatusBar.styleDefault()})}angular.module("starter").run(["$ionicPlatform",e])}(),function(){"use strict";function e(e,t,n,r){n.pushPub.subscribe(function(t){r.push(new e({kind:"system",body:"User "+t.userName+" has join the channel"}))}),n.removePub.subscribe(function(t){r.push(new e({kind:"system",body:"User "+t.userName+" left the channel"}))}),t.on("chat:message:add",function(t){r.push(new e($.extend(t.message,{user:t.user,kind:"in"})))})}angular.module("starter").run(["Message","socket","rosterIO","chatIO",e])}(),function(){"use strict";function e(e,t,n){e.$on("$stateChangeStart",function(e,r){"app.landing"===r.name&&n.isJoined()&&(e.preventDefault(),t.go("app.im.chat")),r.name.startsWith("app.im")&&!n.isJoined()&&(e.preventDefault(),t.go("app.landing"))})}angular.module("starter").run(["$rootScope","$state","roomIO",e])}(),function(){"use strict";function e(e,n){var r=["ping","pong"];n.emitPub.subscribe(function(n){var o=t(n,2),i=o[0],s=o[1];r.includes(i)||e.info("socket:"+i,s)}),n.oneventPub.subscribe(function(n){var o=t(n[0].data,2),i=o[0],s=o[1];r.includes(i)||e.info("socket:"+i,s)})}var t=function(){function e(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var s,a=e[Symbol.iterator]();!(r=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();angular.module("starter").run(["logr","socket",e])}(),function(){"use strict";angular.module("starter").value("references",{googlePlay:"https://play.google.com/apps/testing/com.silenceim"})}(),function(){"use strict";function e(e,t){e.state("app",{url:"/app",abstract:!0,templateUrl:"templates/menu.html",controller:"AppCtrl"}).state("app.landing",{url:"/landing",cache:!1,views:{menuContent:{templateUrl:"templates/landing.html",controller:"LandingCtrl"}}}),e.state("app.im",{url:"/@",cache:!1,views:{menuContent:{templateUrl:"templates/im.html",controller:"ImCtrl"}}}).state("app.im.chat",{url:"/chat",cache:!1,views:{"chat-tab":{templateUrl:"templates/im/chat_tab.html",controller:"ImChatCtrl"}}}).state("app.im.users",{url:"/users",cache:!1,views:{"users-tab":{templateUrl:"templates/im/users_tab.html",controller:"ImUsersCtrl"}}}).state("app.im.room",{url:"/room",cache:!1,views:{"room-tab":{templateUrl:"templates/im/room_tab.html",controller:"ImRoomCtrl"}}}).state("app.im.log",{url:"/log",cache:!1,views:{"log-tab":{templateUrl:"templates/im/log_tab.html"}}}),e.state("app.rc4",{url:"/rc4",views:{menuContent:{templateUrl:"templates/rc4.html",controller:"Rc4Ctrl"}}}).state("app.aes",{url:"/aes",views:{menuContent:{templateUrl:"templates/aes.html",controller:"AesCtrl"}}}).state("app.pgp",{url:"/pgp",cache:!1,views:{menuContent:{templateUrl:"templates/pgp.html",controller:"PgpCtrl"}}}).state("app.pgp_generate",{url:"/pgp/generate",views:{menuContent:{templateUrl:"templates/pgp_generate.html",controller:"PgpGenerateCtrl"}}}).state("app.pgp_my_private",{url:"/pgp/my-private",cache:!1,views:{menuContent:{templateUrl:"templates/pgp_my_private.html",controller:"PgpMyPrivateCtrl"}}}).state("app.pgp_my_public",{url:"/pgp/my-public",cache:!1,views:{menuContent:{templateUrl:"templates/pgp_my_public.html",controller:"PgpMyPublicCtrl"}}}).state("app.pgp_buddy_public",{url:"/pgp/buddy-public",cache:!1,views:{menuContent:{templateUrl:"templates/pgp_buddy_public.html",controller:"PgpBuddyPublicCtrl"}}}),e.state("app.android",{url:"/android",views:{menuContent:{templateUrl:"templates/download/android.html",controller:"DownloadAndroidCtrl"}}}).state("app.blackberry",{url:"/blackberry",views:{menuContent:{templateUrl:"templates/download/blackberry.html"}}}),e.state("app.about",{url:"/about",views:{menuContent:{templateUrl:"templates/about.html"}}}).state("app.about_license",{url:"/about/license",views:{menuContent:{templateUrl:"templates/about_license.html"}}}).state("app.about_feedback",{url:"/about/feedback",cache:!1,views:{menuContent:{templateUrl:"templates/about_feedback.html",controller:"AboutFeedbackCtrl"}}}).state("app.about_vendors",{url:"/about/vendors",views:{menuContent:{templateUrl:"templates/about_vendors.html"}}}).state("app.about_security",{url:"/about/security",views:{menuContent:{templateUrl:"templates/about_security.html"}}}).state("app.about_tutorial",{url:"/about/tutorial",cache:!1,views:{menuContent:{templateUrl:"templates/about_tutorial.html",controller:"AboutTutorialCtrl"}}}),t.otherwise("/app/landing")}angular.module("starter").config(["$stateProvider","$urlRouterProvider",e])}(),function(){"use strict";function e(e){e.tabs.position("bottom")}angular.module("starter").config(["$ionicConfigProvider",e])}(),function(){"use strict";toastr.options={closeButton:!1,debug:!1,newestOnTop:!0,progressBar:!1,positionClass:"toast-bottom-center",preventDuplicates:!0,onclick:null,showDuration:"100",hideDuration:"1000",timeOut:"2000",extendedTimeOut:"1000",showEasing:"swing",hideEasing:"linear",showMethod:"fadeIn",hideMethod:"fadeOut"}}(),function(){"use strict";function e(){return{restrict:"A",link:function(e,t,n){var r=$(t);r.on("click",function(){window.open(n.externalLink,"_system")}),e.$on("$destroy",function(){r.off()})}}}angular.module("starter").directive("externalLink",[e])}(),function(){"use strict";function e(e){function t(e,t){$.each(t,function(t,n){e.set(t,n)}),u.onNext(e)}function n(){s.length=0}function r(e){var t=s.find(function(t){return t.cid===e});if(!t)throw new l.notFoundError("cid = "+e);return t}function o(e){var t=s.push(e);return c.onNext(e),t}function i(n){n.enc().then(function(r){var o=r.cd.map(function(e){return $.merge({name:e.name},e.publicData)});e.emit("chat:message:post",{ct:r.ct,cd:o},function(){t(n,{sent:!0,cbm:r.measure()})})}).catch(function(e){alert(e)})}var s=[],a=new Rx.BehaviorSubject(s),c=new Rx.Subject,u=new Rx.Subject,l={notFoundError:function(e){this.toString=function(){return"chatIO NOT FOUND: "+this.message},this.message=e}};return{find:r,push:o,emit:i,prune:n,messages:s,historyPub:a,pushPub:c,updatePub:u}}angular.module("starter").factory("chatIO",["socket",e])}(),function(){"use strict";function e(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function t(){function t(e,t){var n=t.iterations,r=t.length;return new Promise(function(t,o){require(["enigma/keyGen"],function(i){try{t(i.hex(e,{iterations:n,length:r}))}catch(e){o(e)}},function(e){o(e)})})}function n(e){var t=function(e){return e.replace(/Version: OpenPGP.js v/,"Version: ").replace(/Comment.*/,"Comment: SilenceIM")};return new Promise(function(n,r){require(["openpgp"],function(o){var i=o.generateKey({numBits:e,userIds:[{name:"anonymous",email:"anonymous@example.com"}]});i.then(function(e){n({privateKey:t(e.privateKeyArmored),publicKey:t(e.publicKeyArmored)})}),i.catch(function(e){r(e)})},function(e){r(e)})})}function r(t,n){return new Promise(function(r,o){require(["enigma"],function(i){i[t].apply(i,e(n)).then(function(e){r(e)}).catch(function(e){o(e)})},function(e){o(e)})})}return{keyGen:t,pgpKeypairGen:n,enc:function(){return r("enc",arguments)},dec:function(){return r("dec",arguments)}}}angular.module("starter").factory("enigma",[t])}(),function(){"use strict";function e(){function e(){var e=document.location.href.startsWith("file:"),t=$("body").hasClass("platform-webview");return e&&!t}return{isLocalhost:e}}angular.module("starter").factory("host",[e])}(),function(){"use strict";function e(){function e(e,t,a){var c={cid:++s,kind:e,prefix:t,message:a,date:new Date};r.push(c),o.onNext(c),r.length>=n&&i.onNext(r.shift())}function t(e){return void 0===e?"":JSON.stringify(e)}var n=20,r=[],o=new Rx.Subject,i=new Rx.Subject,s=0;return{messages:r,pushPub:o,deletePub:i,info:function(n,r){e("info",n,t(r))},error:function(n,r){e("error",n,t(r))}}}angular.module("starter").factory("logr",[e])}(),function(){"use strict";function e(e){function t(t){switch(t){case"aes":return!!e.get("aesKey");case"rc4":return!!e.get("rc4Key");case"pgp":return!!e.get("pgpBuddyPublicKey");default:return!1}}return{is:t}}angular.module("starter").factory("preferences",["settings",e])}(),function(){"use strict";function e(e,t){function n(t){var n=t.roomName,r=t.userName;e.set("roomName",n),e.set("userName",r)}function r(){return{roomName:e.get("roomName"),userName:e.get("userName")}}function o(){var e=r(),t=e.roomName,n=e.userName;return t&&n}function i(e){var r=e.roomName,o=e.userName;return new Promise(function(e,i){t.emit("room:join",{roomName:r,userName:o},function(t,s){s?i(s):(n({roomName:r,userName:o}),e())})})}function s(){return new Promise(function(e){t.emit("room:leave",function(){n({}),e()})})}return{join:i,leave:s,isJoined:o,getCredentials:r}}angular.module("starter").factory("roomIO",["settings","socket",e])}(),function(){"use strict";function e(e,t){function n(e){r.length=0,e&&r.push.apply(r,e)}var r=[],o=new Rx.Subject,i=new Rx.Subject,s=new Rx.BehaviorSubject(r);return t.on("roster:list",function(t){n(t.map(function(t){return new e(t)})),s.onNext(r)}),t.on("roster:add",function(t){var n=new e(t);r.push(n),o.onNext(n)}),t.on("roster:remove",function(e){var t=r.findIndex(function(t){return t.cid===e.cid}),n=r[t];n&&(r.splice(t,1),i.onNext(n))}),{listPub:s,pushPub:o,removePub:i,prune:n}}angular.module("starter").factory("rosterIO",["User","socket",e])}(),function(){"use strict";function e(){function e(e){return r[e]}function t(e,t){return r[e]=t,o.onNext({key:e,value:t}),t}function n(e){delete r[e],o.onNext({key:e,value:void 0})}var r={},o=new Rx.Subject;return{get:e,set:t,del:n,observer:o}}angular.module("starter").factory("settings",[e])}(),function(){"use strict";function e(e,t){var n=e.isLocalhost()?"http://localhost:5000":"https://silenceim.com",r=io.connect(n,{query:"apiVersion="+t+"&platform="+ionic.Platform.platform(),transports:["websocket"],path:"/socket-endpoint"}),o=new Rx.BehaviorSubject((!1)),i=Rx.Observable.create(function(e){var t=r.emit;r.emit=function(){e.onNext(arguments),t.apply(this,arguments)}}),s=Rx.Observable.create(function(e){var t=r.onevent;r.onevent=function(){e.onNext(arguments),t.apply(this,arguments)}});return r.on("connect",function(){o.onNext(!0)}),r.on("disconnect",function(){o.onNext(!1)}),{connPub:o,emitPub:i,oneventPub:s,on:function(){r.on.apply(r,arguments)},emit:function(){r.emit.apply(r,arguments)}}}angular.module("starter").factory("socket",["host","apiBackendVersion",e])}(),function(){"use strict";function e(e){function t(t){e.ready(function(){var e=navigator.splashscreen;e&&t(e)})}function n(){t(function(e){e.hide()})}return{hide:n}}angular.module("starter").factory("splashScreen",["$ionicPlatform",e])}(),function(){"use strict";function e(){function e(e){return localStorage.getItem(e)}function t(e,t){return localStorage.setItem(e,t)}function n(e){return localStorage.removeItem(e)}return{get:e,set:t,del:n}}angular.module("starter").factory("storage",[e])}(),function(){"use strict";function e(){function e(e){return("string"!==$.type(e)||!/^\s+$/.test(e))&&!$.isEmptyObject(e)}function t(t){return e(t)?t:void 0}return{isPresent:e,presence:t}}angular.module("starter").factory("utils",[e])}(),function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(t,r){var o=0,i=function(){function i(t){var n=t.body,r=t.kind,s=t.user,a=t.ct,c=t.cd;e(this,i),this.body=n,this.kind=r,this.cid=++o,this.user=s,this.ct=a,this.cd=c}return n(i,[{key:"encCd",value:function(){var e=[],n=t.get("rc4Key");return n&&e.push({name:"rc4",key:n}),e}},{key:"decCd",value:function(){return this.cd.map(function(e){var n={};switch(e.name){case"rc4":n.key=t.get("rc4Key")}return $.extend(e,n)})}},{key:"set",value:function(e,t){this[e]=t}},{key:"get",value:function(e){return this[e]}},{key:"enc",value:function(){return r.enc(this.body,this.encCd())}},{key:"dec",value:function(){return r.dec(this.ct,this.decCd())}}]),i}();return i}var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();angular.module("starter").factory("Message",["settings","enigma",t])}(),function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(){var t=function(){function t(n){var r=n.cid,o=n.userName;e(this,t),this.cid=r,this.userName=o}return n(t,[{key:"set",value:function(e,t){this[e]=t}},{key:"get",value:function(e){return this[e]}},{key:"abbrev",value:function(){return this.userName.slice(0,2)}}]),t}();return t}var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();angular.module("starter").factory("User",[t])}(),function(){"use strict";function e(e,t,n,r){e.model={},e.submit=function(){e.model.loading=!0,r.emit("feedback:send",e.model,function(r,o){e.$evalAsync(function(){e.model.loading=!1}),o?toastr.warning(o):(toastr.success("Feedback has been sent"),t.nextViewOptions({disableBack:!0}),n.go("app.about"))})}}angular.module("starter.controllers").controller("AboutFeedbackCtrl",["$scope","$ionicHistory","$state","socket",e])}(),function(){"use strict";function e(e,t,n){var r=t.canDragContent();t.canDragContent(!1),e.isLastSlide=function(){return n.currentIndex()+1===n.slidesCount()},e.next=function(){n.next()},e.slide=function(e){n.slide(e)},e.$on("$destroy",function(){t.canDragContent(r)})}angular.module("starter.controllers").controller("AboutTutorialCtrl",["$scope","$ionicSideMenuDelegate","$ionicSlideBoxDelegate",e])}(),function(){"use strict";function e(e,t,n,r){function o(t){t?(n.set("aesPassphrase",e.model.passphrase),e.model.key=n.set("aesKey",t)):(n.del("aesPassphrase"),e.model.key=n.del("aesKey"))}e.model={bit:256,iterations:8192,passphrase:n.get("aesPassphrase"),key:n.get("aesKey")},e.submit=function(){if(t.isPresent(e.model.passphrase)){var n=r.keyGen(e.model.passphrase,{iterations:e.model.iterations,length:e.model.bit});n.then(function(t){e.$evalAsync(function(){o(t),toastr.success("AES key has been saved")})}),n.catch(function(e){toastr.warning(e)})}else e.model.key?(o(),toastr.warning("AES key has been removed")):toastr.warning("Provide a passphrase")}}angular.module("starter.controllers").controller("AesCtrl",["$scope","utils","settings","enigma",e])}(),function(){"use strict";function e(e,t){e.url=t.googlePlay}angular.module("starter.controllers").controller("DownloadAndroidCtrl",["$scope","references",e])}(),function(){"use strict";function e(e,t,n,r){function o(n,r){var o='\n<div data-id="'+n.get("cid")+'" class="im-chat-message im-chat-message-'+n.get("kind")+'" />\n',i=$(t(o)(e.$new()));r&&(i.addClass("animate"),i.css({display:"none",opacity:0})),$("#messages").prepend(i),r&&i.slideDown(200,function(){$(this).fadeTo(100,1)})}r.historyPub.subscribe(function(e){e.forEach(function(e){return o(e,!1)})}).dispose();var i=r.pushPub.subscribe(function(e){o(e,!0),"out"===e.get("kind")&&r.emit(e)});r.messages.length||r.push(new n({body:"You may change settings on the fly. Tap on message to see the original",kind:"system"})),e.$on("$destroy",function(){i.dispose()})}angular.module("starter.controllers").controller("ImChatCtrl",["$scope","$compile","Message","chatIO",e])}(),function(){"use strict";function e(e,n,r,o,i,s,a){e.leave=function(){e.CONNECTED&&r.show({template:t,delay:150}),i.leave().then(function(){r.hide().then(function(){a.prune(),s.prune(),n.nextViewOptions({disableBack:!0}),o.go("app.landing")})})}}var t='\n<ion-spinner icon="dots" style="fill: #FFF; stroke: #FFF"></ion-spinner>\n';angular.module("starter.controllers").controller("ImCtrl",["$scope","$ionicHistory","$ionicLoading","$state","roomIO","rosterIO","chatIO",e])}(),function(){"use strict";function e(e,t,n){e.room=n.getCredentials(),e.aes=t.is("aes"),e.rc4=t.is("rc4"),e.pgp=t.is("pgp")}angular.module("starter.controllers").controller("ImRoomCtrl",["$scope","preferences","roomIO",e])}(),function(){"use strict";function e(e,t){return{restrict:"A",link:function(n,r){function o(){$.each(s,function(e,n){var r=$(n);r.toggleClass("on",t.is(r.attr("data-preference")))})}var i=$(r),s=i.find("ion-item[data-preference]");e.observer.subscribe(o),o()}}}angular.module("starter").directive("menuDirective",["settings","preferences",e])}(),function(){"use strict";function e(e,t,n,r){e.model={key:r.get("pgpBuddyPublicKey")},e.submit=function(){r.set("pgpBuddyPublicKey",e.model.key),toastr.success("Buddy's public key was saved"),t.nextViewOptions({disableBack:!0}),n.go("app.pgp")}}angular.module("starter.controllers").controller("PgpBuddyPublicCtrl",["$scope","$ionicHistory","$state","settings",e])}(),function(){"use strict";function e(e,t){e.myPrivateKey=!!t.get("pgpMyPrivateKey"),e.myPublicKey=!!t.get("pgpMyPublicKey"),e.buddyPublicKey=!!t.get("pgpBuddyPublicKey")}angular.module("starter.controllers").controller("PgpCtrl",["$scope","settings",e])}(),function(){"use strict";function e(e,n,r,o,i,s){e.generate=function(e){n.show({template:t});var a=s.pgpKeypairGen(e);a.then(function(e){i.set("pgpMyPrivateKey",e.privateKey),i.set("pgpMyPublicKey",e.publicKey),n.hide().then(function(){toastr.success("Keypair was saved"),r.nextViewOptions({disableBack:!0}),o.go("app.pgp_my_public")})}),a.catch(function(e){n.hide().then(function(){toastr.error(e.toString())})})}}var t='\n<ion-spinner icon="dots" style="fill: #FFF; stroke: #FFF"></ion-spinner>\n';angular.module("starter.controllers").controller("PgpGenerateCtrl",["$scope","$ionicLoading","$ionicHistory","$state","settings","enigma",e])}(),function(){"use strict";function e(e,t,n,r){e.model={key:r.get("pgpMyPrivateKey")},e.submit=function(){r.set("pgpMyPrivateKey",e.model.key),toastr.success("My private key was saved"),t.nextViewOptions({disableBack:!0}),n.go("app.pgp")}}angular.module("starter.controllers").controller("PgpMyPrivateCtrl",["$scope","$ionicHistory","$state","settings",e])}(),function(){"use strict";function e(e,t,n,r){e.model={key:r.get("pgpMyPublicKey")},e.submit=function(){r.set("pgpMyPublicKey",e.model.key),toastr.success("My public key was saved"),t.nextViewOptions({disableBack:!0}),n.go("app.pgp")}}angular.module("starter.controllers").controller("PgpMyPublicCtrl",["$scope","$ionicHistory","$state","settings",e])}(),function(){"use strict";function e(e,t,n,r){function o(t){t?(n.set("rc4Passphrase",e.model.passphrase),e.model.key=n.set("rc4Key",t)):(n.del("rc4Passphrase"),e.model.key=n.del("rc4Key"))}e.model={bit:256,iterations:8192,passphrase:n.get("rc4Passphrase"),key:n.get("rc4Key")},e.submit=function(){if(t.isPresent(e.model.passphrase)){var n=r.keyGen(e.model.passphrase,{iterations:e.model.iterations,length:e.model.bit});n.then(function(t){e.$evalAsync(function(){o(t),toastr.success("AES key has been saved")})}),n.catch(function(e){toastr.warning(e)})}else e.model.key?(o(),toastr.warning("RC4 key has been removed")):toastr.warning("Provide a passphrase")}}angular.module("starter.controllers").controller("Rc4Ctrl",["$scope","utils","settings","enigma",e])}(),function(){"use strict";function e(e){return{restrict:"C",link:function(t,n){var r=$(n),o=r.find("span");$.each(o,function(t,n){var r=$(n);r.toggleClass("on",e.is(r.attr("data-preference")))})}}}angular.module("starter.controllers").directive("imChatControlPreferences",["preferences",e])}(),function(){"use strict";function e(e){return{restrict:"C",link:function(t,n){function r(e){var t='\n<div class="user" data-id="'+e.cid+'">\n  <div class="avatar">\n    '+e.abbrev()+"\n  </div>  \n</div>\n";o.prepend(t)}var o=$(n),i=e.listPub.subscribe(function(e){o.html(""),e.forEach(function(e){return r(e)})}),s=e.pushPub.subscribe(function(e){r(e)}),a=e.removePub.subscribe(function(e){o.find(".user[data-id="+e.cid+"]").remove()});t.$on("$destroy",function(){i.dispose(),s.dispose(),a.dispose()})}}}angular.module("starter.controllers").directive("imChatUsersViewport",["rosterIO",e])}(),function(){"use strict";function e(e,t,n){var r=13;return{restrict:"C",link:function(o,i){function s(t){n.push(new e({body:t,kind:"out"}))}function a(){var e=u.val();t.isPresent(e)&&(s(e),u.val(""))}var c=$(i),u=c.find("textarea");u.keypress(function(e){e.ctrlKey&&e.keyCode===r?u.val(u.val()+"\n"):e.keyCode===r&&(e.preventDefault(),a())}),o.$on("$destroy",function(){u.off(),c.off()})}}}angular.module("starter.controllers").directive("imChatControlViewport",["Message","utils","chatIO",e])}(),function(){"use strict";function e(){return{restrict:"C",link:function(e,t){var n=$(t);n.on("click",".balloon",function(){var e=n.find(".primary");e.slideToggle(200),$(".im-chat-message .primary").not(e).slideUp(200)}),e.$on("$destroy",function(){n.off()})}}}angular.module("starter.controllers").directive("imChatMessage",[e])}(),function(){"use strict";function e(e,t){var n='\n<div class="primary"><span class="user"></span> wrote, <a href="javascript:;" role="show-original">show original</a></div>\n\n<div class="message">\n  <div class="balloon">\n    <div class="body">\n      <i class="icon ion-android-lock"></i>\n    </div>\n  </div>\n</div>\n';return{restrict:"C",link:function(e,r){var o=$(r),i=$(n),s=i.find(".body"),a=i.find(".user"),c=t.find(o.data("id"));a.text(c.user.userName),o.html(i),c.dec().then(function(e){s.text(e.ct)}).catch(function(e){s.text(e)})}}}angular.module("starter.controllers").directive("imChatMessageIn",["settings","chatIO",e])}(),function(){"use strict";function e(e){var t='\n<div class="primary">Your wrote, <a href="javascript:;" role="show-original">show original</a></div>\n\n<div class="message">\n  <div class="balloon">\n    <div class="body"></div>    \n  </div>\n</div>\n<div class="clearfix"></div>\n\n<div class="secondary">\n  <span class="status">Sending..</span>\n  <bdi class="crypto"></bdi>\n</div>\n';return{restrict:"C",link:function(n,r){function o(){l.sent&&c.text("Sent"),$.isEmptyObject(l.cbm)?u.html('<span class="color-danger">Plaintext</span>'):(u.html(""),$.each(l.cbm,function(e,t){u.append('<span class="color-success">'+e+": "+t+"MS.</span>")}))}var i=$(r),s=$(t),a=s.find(".body"),c=s.find(".status"),u=s.find(".crypto"),l=e.find(i.data("id"));a.text(l.body),i.html(s),o();var d=e.updatePub.subscribe(function(e){e.cid===l.cid&&o()});n.$on("$destroy",function(){i.off(),d.dispose()})}}}angular.module("starter.controllers").directive("imChatMessageOut",["chatIO",e])}(),function(){"use strict";function e(e){var t='\n<div class="message"></div>\n';return{restrict:"C",link:function(n,r){var o=$(r),i=e.find(o.data("id")),s=$(t);s.text(i.body),o.html(s)}}}angular.module("starter.controllers").directive("imChatMessageSystem",["chatIO",e])}(),function(){"use strict";function e(e,t){return{restrict:"C",link:function(n,r){function o(t,n){var r='\n<div class="card  im-chat-log">\n <div class="item item-divider">\n    '+t.kind+" "+t.prefix+'\n  </div>\n  <div class="item '+(e.isPresent(t.message)?"":"empty")+'">\n    '+t.message+'\n  </div>\n   <div class="item item-divider">\n    '+t.date+"\n  </div>\n</div>\n",o=$(r);n&&o.css({display:"none",opacity:0}),i.prepend(o),n&&o.slideDown(200,function(){$(this).fadeTo(100,1)})}var i=$(r);t.messages.forEach(function(e){o(e,!1)});var s=t.deletePub.subscribe(function(e){i.find(".im-chat-log[data-id="+e.cid+"]").slideUp(function(){$(this).remove()})}),a=t.pushPub.subscribe(function(e){o(e,!0)});n.$on("$destroy",function(){a.dispose(),s.dispose()})}}}angular.module("starter.controllers").directive("imChatLogs",["utils","logr",e])}(),function(){"use strict";function e(e,t){}angular.module("starter.controllers").controller("ImUsersCtrl",["$scope","rosterIO",e])}(),function(){"use strict";function e(e){return{restrict:"C",link:function(t,n){function r(e){var t='\n<div class="item item-avatar" data-id="'+e.cid+'">\n  <div class="avatar"><div>'+e.abbrev()+"</div></div>\n  <h2>"+e.userName+"</h2>\n  <p>"+e.cid+"</p>\n</div>\n";o.prepend(t)}var o=$(n),i=e.listPub.subscribe(function(e){o.html(""),e.forEach(function(e){return r(e)})}),s=e.pushPub.subscribe(function(e){r(e)}),a=e.removePub.subscribe(function(e){o.find(".item[data-id="+e.cid+"]").remove()});t.$on("$destroy",function(){i.dispose(),s.dispose(),a.dispose()})}}}angular.module("starter.controllers").directive("imUsersList",["rosterIO",e])}();