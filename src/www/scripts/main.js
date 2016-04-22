"use strict";function makeStampsPretty(){$(".stamp").height($(".stamp").width()),$(".stamp").on("click",function(){showPeak(this)})}function showPeak(e){thisPeak=e,$("#stamps").addClass("hidden"),$("#addstamp").removeClass("hidden"),$("#stampme").removeClass(),$("#stampme").addClass(e.id),$(e).hasClass("stamped")&&$("#stampme").addClass("stamped"),$(".vrhname").text($(e).data().peak),$(".vrhheight").text($(e).data().height),$(".prev-peak").off().on("click",function(a){console.log("nazaj");try{showPeak($(e).prev()[0])}catch(t){showPeak($(".stamp").slice(-1)[0])}}),$(".next-peak").off().on("click",function(a){console.log("naprej");try{showPeak($(e).next()[0])}catch(t){showPeak($(".stamp")[0])}})}function ping(e,a,t){$.ajax({url:e,success:function(e){a()},error:function(e){t()}})}function initLogin(){$("#loginform").on("submit",function(e){e.preventDefault();var a=!1,t=gun.get("people").get("person/"+CryptoJS.SHA256($("#emailinput").val()).toString(CryptoJS.enc.Base64));t.not(function(e){createUser()}),t.val(function(e){a=!0,e.password==CryptoJS.SHA256($("#passwordinput").val()).toString(CryptoJS.enc.Base64)?(localStorage.setItem("user","person/"+CryptoJS.SHA256($("#emailinput").val()).toString(CryptoJS.enc.Base64)),$("#login").addClass("hidden"),$("#register").addClass("hidden"),$("#stamps").removeClass("hidden"),makeStampsPretty(),location.reload()):alert("Geslo ne ustreza uporabniku")})})}function saveEmail(e){$.ajax({url:"http://luna.webfactional.com/api/save_email/"+$("#emailinput").val(),cache:!1,success:function(e){return e.saved},error:function(e){localStorage.setItem("mail",$("#emailinput").val())}})}function createUser(){if(saveEmail($("#emailinput").val()),offlineMode===!0)offline=!0,localStorage.setItem("update","person/"+CryptoJS.SHA256($("#emailinput").val()).toString(CryptoJS.enc.Base64)),localStorage.setItem("lpeaks",JSON.stringify({})),localStorage.setItem("lperson",JSON.stringify({email:CryptoJS.SHA256($("#emailinput").val()).toString(CryptoJS.enc.Base64),password:CryptoJS.SHA256($("#passwordinput").val()).toString(CryptoJS.enc.Base64)}));else{var e=gun.get("peaks").put({}),a=gun.get("person/"+CryptoJS.SHA256($("#emailinput").val()).toString(CryptoJS.enc.Base64)).put({email:CryptoJS.SHA256($("#emailinput").val()).toString(CryptoJS.enc.Base64),password:CryptoJS.SHA256($("#passwordinput").val()).toString(CryptoJS.enc.Base64)});a.set(e);var t=gun.get("people");t.set(a)}localStorage.setItem("user","person/"+CryptoJS.SHA256($("#emailinput").val()).toString(CryptoJS.enc.Base64)),$("#login").addClass("hidden"),$("#register").addClass("hidden"),$("#stamps").removeClass("hidden"),makeStampsPretty(),location.reload()}function initReg(){$("#registerform").on("submit",function(e){e.preventDefault();var a=!1,t=gun.get("people").get("person/"+CryptoJS.SHA256($("#registeremailinput").val()).toString(CryptoJS.enc.Base64));t.val(function(e){"undefined"===e.name||a||(a=!0,alert("Uporabnik s tem emailom že obstaja"))}),t.not(function(e){a=!0,createUser()})})}function addPeak(e,a){if(e!==!1)e.path("peaks").path(a).put(!0);else{var t=JSON.parse(localStorage.getItem("lpeaks"));t[a]=!0,localStorage.setItem("lpeaks",JSON.stringify(t))}console.log("Dodal "+a+"!"),$("#"+a).addClass("stamped"),showPeak($("#"+a)[0]),setTimeout(function(){$("#addstamp").addClass("hidden"),$("#stamps").removeClass("hidden"),makeStampsPretty()},3e3)}function initStampScreen(){var e=localStorage.getItem("user");if(offline===!1){var a=gun.get("people").get(e);return a.path("name").val(function(e){$("#my_name").text(e)}),a.path("peaks").val(function(e){console.log(e);for(var a in e)console.log("kluc:"+a),e[a]===!0&&$("#"+a).addClass("stamped")}),makeStampsPretty(),a}var t=JSON.parse(localStorage.getItem("lpeaks"));for(var n in t)console.log("kluc:"+n),t[n]===!0&&$("#"+n).addClass("stamped");return makeStampsPretty(),!1}function onBackKeyDown(){console.log("BACK"),$("#addstamp").hasClass("hidden")||(console.log("fkorze"),$("#stampme").removeClass(),$("#addstamp").addClass("hidden"),$("#stamps").removeClass("hidden"))}function back(e){$("#addstamp").hasClass("hidden")?(console.log("Doma si dj zapri"),navigator.app.exitApp()):(e.preventDefault(),onBackKeyDown()),console.log("back btn event")}function onDeviceReady(){console.log("device ready"),document.addEventListener("backbutton",back,!1)}function onLoad(){console.log("onLoad"),document.addEventListener("deviceready",onDeviceReady,!1)}var stampsData='[{"name":"kopitnik","distance":788.9165917817996,"distance1":179.52608967525748,"height1":173.0014951786888,"distance2":148.73335245607677,"height2":287.31301467005244,"distance3":394.6227219737723,"height3":393.9254076521277},{"name":"loka","distance":788.077280397853,"distance1":110.102594303584,"height1":241.27079827042098,"distance2":218.1099195686663,"height2":305.73618706496575,"distance3":197.19972162491547,"height3":546.9373178076386},{"name":"mrzlica","distance":791.5561738003921,"distance1":260.22745128086063,"height1":282.6342245953566,"distance2":225.20739936838243,"height2":286.64157247316086,"distance3":195.9947764957078,"height3":547.488279544431},{"name":"nanos","distance":794.8592043476448,"distance1":173.0649363714298,"height1":171.8070553760666,"distance2":367.1593012679395,"height2":368.092613531208,"distance3":86.51737658216179,"height3":480.99582779710653},{"name":"peca","distance":798.1742312626278,"distance1":199.15828088925082,"height1":203.21796600368708,"distance2":24.31086700004934,"height2":321.3944261547411,"distance3":138.8557948312689,"height3":547.8417219143066},{"name":"razor","distance":795.9136726385296,"distance1":150.0011788977442,"height1":253.0166019532731,"distance2":159.0825778315585,"height2":416.49787497076795,"distance3":206.5537330659056,"height3":479.5522143799252},{"name":"smohor","distance":797.5808579133177,"distance1":144.18834897726097,"height1":205.1785009127214,"distance2":314.73738829498257,"height2":305.0259132058097,"distance3":206.25011121804994,"height3":481.18836100088635},{"name":"studenec","distance":794.3244211899139,"distance1":208.05520873525705,"height1":315.7648192461357,"distance2":29.692872480507983,"height2":374.22217238001537,"distance3":143.06837176536158,"height3":544.5956000150824},{"name":"zelenica","distance":788.8802934393119,"distance1":260.80665381459744,"height1":258.0170287857977,"distance2":134.58014728859052,"height2":435.0123700386654,"distance3":110.25482389515054,"height3":540.014152748903},{"name":"stol","distance":793.8043906770282,"distance1":131.39150523436126,"height1":308.4662278640607,"distance2":108.46641055293163,"height2":499.8495161483444,"distance3":234.647562002757,"height3":551.7603235824396}]';stampsData=JSON.parse(stampsData),function(e){e.fn.lunastamps={init:function(a){function t(e,a){return Math.sqrt((e.pageY-a.pageY)*(e.pageY-a.pageY)+(e.pageX-a.pageX)*(e.pageX-a.pageX))}function n(e,a,n){return Math.abs((a.pageY-e.pageY)*n.pageX-(a.pageX-e.pageX)*n.pageY+a.pageX*e.pageY-a.pageY*e.pageX)/t(e,a)}function s(e,a,n){return((a.pageY-e.pageY)*n.pageX-(a.pageX-e.pageX)*n.pageY+a.pageX*e.pageY-a.pageY*e.pageX)/t(e,a)}function o(e,a,s){var o=t(e,s),i=n(e,a,s);return Math.sqrt(o*o-i*i)}function i(e,a){return e.sort(function(e,t){var n=e[a],s=t[a];return s>n?-1:n>s?1:0})}function r(e){console.log("get stamp");for(var t=0;t<p.length;t++){var n=e.max_distance/p[t].distance,s=s+"max_distance: "+e.max_distance+"<br>",o=Array();o[0]=Math.floor(Math.abs(e.points[0].distance/n-p[t].distance1)),o[1]=Math.floor(Math.abs(e.points[1].distance/n-p[t].distance2)),o[2]=Math.floor(Math.abs(e.points[2].distance/n-p[t].distance3)),o[3]=Math.floor(Math.abs(e.points[0].height/n-p[t].height1)),o[4]=Math.floor(Math.abs(e.points[1].height/n-p[t].height2)),o[5]=Math.floor(Math.abs(e.points[2].height/n-p[t].height3)),s=s+"razlika: "+p[t].name+" : "+o+"<br>",Math.max.apply(null,o)<25/n&&a(p[t].name)}}function l(){console.log("filam");var e='[{"name":"triglav","distance":788.9165917817996,"distance1":179.52608967525748,"height1":173.0014951786888,"distance2":148.73335245607677,"height2":287.31301467005244,"distance3":394.6227219737723,"height3":393.9254076521277},{"name":"smarna","distance":788.077280397853,"distance1":110.102594303584,"height1":241.27079827042098,"distance2":218.1099195686663,"height2":305.73618706496575,"distance3":197.19972162491547,"height3":546.9373178076386},{"name":"neki","distance":791.5561738003921,"distance1":260.22745128086063,"height1":282.6342245953566,"distance2":225.20739936838243,"height2":286.64157247316086,"distance3":195.9947764957078,"height3":547.488279544431}]';return JSON.parse(e)}var c=e(".stampme");"stampsData"in window||(stampsData=l());var p=stampsData,g="";console.log("init stamp"),c.on("touchstart",function(e){if(g="",console.log("touch"+e.originalEvent.touches.length),g="touch"+e.originalEvent.touches.length+"<br>",5===e.originalEvent.touches.length){console.log("5");for(var a=Object(),l=e.originalEvent.touches,c=0,p=[],d=[],h=0;4>h;h++)for(var m=h+1;5>m;m++){var u=t(l[h],l[m]);u>c&&(c=u,l[h].pageY>l[m].pageY?(p=[l[h],l[m]],d=[h,m]):(p=[l[m],l[h]],d=[m,h]))}a.max_distance=c,a.points=Array();for(var f=0,h=0;5>h;h++)-1==d.indexOf(h)&&s(l[d[0]],l[d[1]],l[h])<0&&f++;for(f>1&&(p.reverse(),d.reverse()),h=0;5>h;h++)if(-1==d.indexOf(h)){var v=Object();v.distance=n(l[d[0]],l[d[1]],l[h]),v.height=o(l[d[0]],l[d[1]],l[h]),a.points.push(v)}a.points=i(a.points,"height"),r(a)}})}}}(jQuery);var gun=null,offline=!1,offlineMode=!1,thisPeak=null;$(document).ready(function(){function e(){initLogin(),initReg();var e=initStampScreen();$("#stampme").lunastamps.init(function(a){addPeak(e,a)});var a=localStorage.getItem("user");console.log(a),null!==a?($("#splash").addClass("hidden"),$("#login").addClass("hidden"),$("#register").addClass("hidden"),$("#stamps").removeClass("hidden"),makeStampsPretty()):($("#splash").addClass("hidden"),$("#login").removeClass("hidden")),initStampScreen()}ping("http://luna.webfactional.com/api/ping/",function(){console.log("online"),gun=Gun(["http://pelji.se/ponosen/"]);var a=localStorage.getItem("update"),t=localStorage.getItem("mail");if(null!==t){var n=saveEmail(t);n===!0&&localStorage.removeItem("mail")}if(null!==a){var s=JSON.parse(localStorage.getItem("lpeaks")),o=JSON.parse(localStorage.getItem("lperson"));0===a.localeCompare("person/"+o.email)&&(console.log("Update user is in progres"),gun.get("people").get("person/"+o.email).put(o),gun.get("people").get("person/"+o.email).path("peaks").put(s),localStorage.removeItem("lpeaks"),localStorage.removeItem("lperson"),localStorage.removeItem("update"))}e()},function(){console.log("offline");var a=localStorage.getItem("update");null!==a&&(offline=!0),gun=Gun(),offlineMode=!0,e()}),$(".btn-nazaj").on("click",function(){onBackKeyDown()}),$(".stampme").on("swiperight",function(e){console.log("right");try{showPeak($(thisPeak).prev()[0])}catch(a){showPeak($(".stamp").slice(-1)[0])}}).on("swipeleft",function(e){console.log("left");try{showPeak($(thisPeak).next()[0])}catch(a){showPeak($(".stamp")[0])}})});