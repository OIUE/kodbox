/*! Powered by kodbox;hash:a93a80adabe4abd89862 [2024/07/05 18:21:29] */
!function(s){function t(t){for(var e,n,i=t[0],o=t[1],r=0,a=[];r<i.length;r++)n=i[r],Object.prototype.hasOwnProperty.call(l,n)&&l[n]&&a.push(l[n][0]),l[n]=0;for(e in o)Object.prototype.hasOwnProperty.call(o,e)&&(s[e]=o[e]);for(u&&u(t);a.length;)a.shift()()}var n={},l={"1":0};function d(t){var e;return(n[t]||(e=n[t]={"i":t,"l":!1,"exports":{}},s[t].call(e.exports,e,e.exports,d),e.l=!0,e)).exports}d.e=function(i){var o,r,t,a,e,n=[],s=l[i];return 0!==s&&(s?n.push(s[2]):(e=new Promise(function(t,e){s=l[i]=[t,e]}),n.push(s[2]=e),(o=document.createElement("script")).charset="utf-8",o.timeout=120,d.nc&&o.setAttribute("nonce",d.nc),o.src=d.p+""+({"4":"vendor"}[e=i]||e)+".js?v=a93a80ad",r=new Error,t=function(t){o.onerror=o.onload=null,clearTimeout(a);var e,n=l[i];0!==n&&(n&&(e=t&&("load"===t.type?"missing":t.type),t=t&&t.target&&t.target.src,r.message="Loading chunk "+i+" failed.\n("+e+": "+t+")",r.name="ChunkLoadError",r.type=e,r.request=t,n[1](r)),l[i]=undefined)},a=setTimeout(function(){t({"type":"timeout","target":o})},12e4),o.onerror=o.onload=t,document.head.appendChild(o))),Promise.all(n)},d.m=s,d.c=n,d.d=function(t,e,n){d.o(t,e)||Object.defineProperty(t,e,{"enumerable":!0,"get":n})},d.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{"value":"Module"}),Object.defineProperty(t,"__esModule",{"value":!0})},d.t=function(e,t){if(1&t&&(e=d(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(d.r(n),Object.defineProperty(n,"default",{"enumerable":!0,"value":e}),2&t&&"string"!=typeof e)for(var i in e)d.d(n,i,function(t){return e[t]}.bind(null,i));return n},d.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return d.d(e,"a",e),e},d.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},d.p="",d.oe=function(t){throw console.error(t),t};var e=(i=window["webpackJsonp"]=window["webpackJsonp"]||[]).push.bind(i);i.push=t;for(var i=i.slice(),o=0;o<i.length;o++)t(i[o]);var u=e;d(d.s=687)}({"23":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{"value":!0}),window.Promise||(window.Promise=Promise);var i="./static/",o=(window.API_HOST&&((o=API_HOST.split("/")).pop(),i=o.join("/")+"/static/"),window.API_URL=function(t,e){var n=window.API_HOST,i="&";return""===e||_.isNull(e)||_.isUndefined(e)?n+(t||""):(-1==n.indexOf("?")&&(i="?"),n+(t||"")+i+(e||""))},window.API_URL_TRUE=function(t){t=(t=t||window.location.href).replace(API_URL(),"").replace(G.kod.APP_HOST,"").replace("?","&");return G.kod.APP_HOST+"?"+t},window.STATIC_PATH||i),r=(n.p=o+"app/dist/",n.e(4).then(function(t){n(571),n(572),n(573),n(574),n(124),n(131),n(575),n(576),n(577),n(578),n(579),n(580),n(581),n(582),n(583),n(584),n(132),n(585),n(586),n(587),n(588),n(589),n(590),n(591),n(592),n(593),n(594),n(595),n(596),window.Pinyin=n(597)["default"],n(598),n(599),n(600),n(601),n(602),n(603),n(604),n(605),n(606),n(607),n(608),n(128),n(609),n(129),n(130),n(127),n(610),n(611),n(612),n(613),n(614),n(125),n(126),n(615),window.Backbone.$=$,window.Events=Backbone.Events,s()}.bind(null,n))["catch"](n.oe)),a=Date.now(),s=function s(){var n=seajs.use;seajs.use=function(){var t=_.toArray(arguments),i=function i(t){var e=_.get(window,"G.kod.version",""),n=_.get(window,"G.kod.build","");return!(e=1==_.get(window,"G.kod.ENV_DEV")?a:e+"."+n)||_.includes(t,"&v=")||_.includes(t,"?v=")||_.includes(t,"?")?t:(_.endsWith(t,".htm")||_.endsWith(t,".html")||_.endsWith(t,".css")||_.endsWith(t,".json")||_.endsWith(t,".js")||(t+=".js"),t+"?v="+e)},e=t[0];_.isString(e)?t[0]=i(e):_.isArray(e)&&(t[0]=_.map(e,function(t){return i(t)})),n.apply(seajs,t)},window._ktime=dateFormat(!1,"dhi"),window.requireAsync=seajs.use,window.requirePromise=function(t){var e=$.Deferred();return seajs.use(t,e.resolve),e}},l=(function(){var i;"development"==window.lessENV&&(i=XMLHttpRequest.prototype.open,XMLHttpRequest.prototype.open=function(t,e){var n=Array.prototype.slice.call(arguments,0);return e.match(/\.less$/)&&(n[1]=e+"?_t="+a),i.apply(this,n)})}(),function l(){var t=window.STATIC_PATH_ALL||i;requireAsync([t+"style/lib/alifont/iconfont.css",t+"style/lib/font-icon/style.css"])}),d=function d(){var t=$.parseUrl(),e=API_URL("user/view/plugins","v="+time());return _.get(t,"params.accessToken")&&(e+="&accessToken="+t.params.accessToken),requirePromise(e)},u=function u(i){Events.trigger("user.optionLoadBefore");var t=$.parseUrl(),e=API_URL("user/view/options","v="+time()+(i?"&full=1":""));return _.get(t,"params.accessToken")&&(e+="&accessToken="+t.params.accessToken),t.hash&&"s/"==t.hash.substr(0,2)&&(e+="&shareID="+t.hash.substr(2)),requirePromise("text!"+e).then(function(t){var e,n;(t=t&&JSON.parse(t))&&t.code&&t.data&&(window.G=_.extend(window.G||{},t.data),n=G.kod.staticPath,e=API_URL(),_.startsWith(n,"http")||(n=(n=_.startsWith(n,"/")?$.parseUrl(e).origin+n:e.substr(0,_.lastIndexOf(e,"/"))+"/"+n).replace("/./","/")),window.STATIC_PATH_ALL=window.STATIC_PATH_ALL||G.kod.APP_HOST+"static/",window.STATIC_PATH=n,window.VENDER_PATH=window.STATIC_PATH+"app/vender/",window.API_HOST=G.kod.appApi,i&&t.data._lang&&(p(t.data._lang),delete t.data._lang),$.dialog.defaults.path=window.STATIC_PATH+"app/vender/artDialog-icon/",requireAsync(window.STATIC_PATH+"style/lib/alifont/iconfont.js"),l(),Events.trigger("user.optionLoadAfter"))})},c=function c(){return u(!0)},p=function p(t){window.LNG=_.extend(window.LNG||{},_.get(t,"list")),window.G.lang=_.get(t,"lang","zh-CN"),LNG.find=function(n){var i={};return _.each(LNG,function(t,e){_.includes(t,n)&&(i[e]=t)}),i},LNG.set=function(t){t&&_.isObject(t)&&_.extend(LNG,t)},LNG.make=function(t){var e=_.toArray(arguments),n=LNG[t];if(!n)return t;for(var i=1;i<e.length;i++)n=n.replace(/(%d|%s)/,e[i]);return n},LNG.space='<i class="char-space"></i>',LNG.logo=function(t){var e,n,i=window.G.system.options||{},o="image"==i.systemNameType,r=i.systemLogo,a=STATIC_PATH+"images/common/logo.png",s=(_.includes(["zh-CN","zh-TW"],G.lang)||(a=STATIC_PATH+"images/common/logo-en.png"),G.kod.companyInfo||!1);return s&&"text"==s.logoType&&s.logoText?'<span class="logo-text" title="'+s.logoText+'" title-timeout="200"><i class="font-icon ri-cloud-fill mr-5"></i>'+s.logoText+"</span>":(e=function e(t){return'<img src="'+t+'" onerror="this.src=\''+a+"'\"/>"},n=function n(t){return'<span class="logo-text">'+t+"</span>"},"copyright"==t?(s=LNG["common.copyright.name"],"A"==window.G.kod.versionType&&LNG["common.oemCompany"]!=window.md5(_.get(window,"G.kod.channel",""))&&(r=a,s="kodbox"),o?e(r):n(s)):"login"!=t||o?e(r):n(i.systemName))}},f=function f(){var t=API_URL("user/view/lang","v="+time());return requirePromise("text!"+t).then(function(t){if(t){try{t=JSON.parse(t)}catch(e){return h(t)}t&&t.code&&t.data&&p(t.data)}})},h=function h(t){Tips.close("System error!",!1);var e=(e=$.dialog.list["xhrErrorDialog"])||$.dialog({"id":"xhrErrorDialog","padding":0,"width":"55%","height":"60%","fixed":!0,"resize":!0,"title":"System Error","content":""}),t='\n\t\t<div class="ajaxError">\n\t\t<div class="content-preview">\n\t\t<style>\n\t\t.ajaxError{\n\t\t\toverflow:auto;padding:20px 5%;color:#555;font-size:13px;line-height:1.5em;\n\t\t\tfont-family:"Lantinghei SC","Hiragino Sans GB","Microsoft Yahei",Helvetica,arial,sans-serif;\n\t\t}\n\t\t.ajaxError #msgbox{margin:0;}\n\t\t.error-tips{padding:5px 0 10px;border-bottom:1px solid #eee;margin-bottom:10px;font-size: 14px;}\n\t\t.content-preview{\n\t\t\tborder: 1px solid #fff1f0;padding:5px 20px 10px 20px;\n\t\t\tbackground: #fff9f9;border-radius:4px;margin-bottom:50px;\n\t\t}\n\t\t</style>\n\t\t<h3 style="color:#f04134" >System Error!</h3>'+htmlSafe(t)+"\n\t\t</div></div>";$.iframeHtml(e.$main.find(".aui-content"),t)},m=function m(){return r.then(function(){NProgress.isStarted()||NProgress.start(),NProgress.set(.5)}).then(d).then(function(){NProgress.set(.6)}).then(c).then(function(){NProgress.done(),$("body > .loading-body").fadeOut(1e3,function(){$(this).remove()})})},w=function w(){return window.API_HOST?r.then(function(){NProgress.isStarted()||NProgress.start(),NProgress.set(.6)}).then(c).then(function(){NProgress.done()}):r.then()};e.loadMain=m,e.loadApi=w,e.loadOption=u,e.loadLang=f,e.loadPlugin=d},"62":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{"value":!0}),e["default"]=function(){i(),r(),o(),l(),s(),Events.trigger("windowReady");var t=document.createEvent("CustomEvent");t.initCustomEvent("kodReadyView",!0,!0,{"source":window}),document.dispatchEvent(t)};var i=function i(){var t;$.fn.perfectScroll&&(t=function t(){$(".perfectScroll").perfectScroll()},$(window).bind("resize",t),$(window).bind("scoller",t))},r=function r(){var t,o,e;$.isWindowTouch()||$.fn.poshytip&&(t=$("[title]"),o=!1,t.poshytip({"className":"ptips-skin","liveEvents":!0,"slide":!1,"alignTo":"cursor","alignX":"right","alignY":"bottom","showAniDuration":150,"hideAniDuration":200,"offsetY":10,"offsetX":20,"showTimeout":function(t){var e,n=1500,i=($(this).attr("title-timeout")?n=parseInt($(this).attr("title-timeout")):(e=$(this).parentNode("[title-root-set]"))&&e.attr("title-timeout")&&(n=parseInt(e.attr("title-timeout"))),function i(){t.opts.showAniDuration=150,t.opts.hideAniDuration=200});return timeFloat()-$.fn.poshytip.lastHideBefore<.15?(clearTimeout(o),o=setTimeout(i,110),n<=100?n:100):(i(),n)},"content":function(t){var e,n,i,o,r=$(this);if(!$.isDraging&&!($(this).hasClass("context-menu-active")||$(this).is(":focus")||r.hasClass("disable")||r.hasClass("disable-title")))return i=r.attr("title-skin"),o=r.attr("title-position"),(e=r.parentNode("[title-root-set]"))&&(i=e.attr("title-skin"),o=e.attr("title-position")),t.addClass(i||"yellow"),o&&(e=["center bottom","center top-5"],(n=2!=(n=o.split(",")).length?e:n)[0]||(n[0]=e[0]),n[1]||(n[1]=e[1]),setTimeout(function(){t.position({"my":n[0],"at":n[1],"of":r,"collision":"flipfit flipfit"})},0)),(i=$(this).data("titleCreate"))&&_.isFunction(i)?i($(this)):(o=$(this).data("title.poshytip"),(o=-1==(o=(o=$(this).attr("title-data")?(r=$($(this).attr("title-data"))).is("input")||r.is("textarea")?r.val():r.html():o)||"").indexOf("<")&&-1==o.indexOf(">")?o.replace(/\n/g,"<br/>"):o).replace(/ /g," "))}}),e=function e(t){$("[title]").poshytip("clearTimeouts").poshytip("hide"),$(".ptips-skin").remove(),$.fn.poshytip.lastHideBefore=0},$(document).bind("mousedown mouseup click touchend touchstart",function(t){$.fn.poshytip&&!$(t.target).attr("data-require")&&e(t)}),$("input,textarea").live("focus",function(t){$.fn.poshytip&&!$(this).attr("data-require")&&e(t)}))},o=function o(){window.API_HOST&&(template.defaults.cache=!0,template.defaults.minimize=!1,template.defaults.compileDebug=!1)},a=function a(){var t,e;$.isWindowTouch()||(t=[".hover-animate-item",".menuBar .menu-item",".menu-group-submenu .menu-item-sub",".menuBar .dropdown-menu-main li.ripple-item",".setting-menu-left .menu-item-content",".admin-menu-left .menu-item-content",".frame-main-explorer .file-panel > .tab-group-line .tab-item"].join(","),e=[".disable,.disabled,.not-selectable",".select",".this",".hover-active",".active",".menuBar .menu-group.open > .menu-item",".setting-menu-left .menu-item.select .menu-item-content",".admin-menu-left .menu-item.select .menu-item-content"].join(","),$.hoverAnimate({"el":t,"delegate":"body","disable":e,"scale":1}))},l=function l(){var s,t=["a,button,.ripple-item,.kui-btn,.btn,[ripple-item],.button.switch",".form-row.style-list-block label"].join(","),e=t+",.context-menu-item",n=($.isWindowTouch()&&(e=t),loadRipple(e,".disable-ripple,.disabled,.disable,.ztree a.tree-node,.not-selectable,.tox-tbtn--disabled"),a(),$(window).bind("resize",function(){Events.trigger("window.resize")}),function n(t){return!!$(t.target).isEdit()||stopPP(t)});$(document).bind("dragover",n).bind("drop",n),$("body").delegate(".password-view","click",function(t){var e,n,i=$(this),o=i.parent().children('input[type="password"],input.input-password').not("._password-input");1==o.length&&(o.hasClass("input-password")?(i.toggleClass("active"),o.toggleClass("input-password-show").focus()):i.hasClass("active")?(o.css("display",""),i.removeClass("active"),$(i.data("textBtn")).remove(),setTimeout(function(){o.focus()},0)):(e=(e=$(o.get(0)).prop("outerHTML")).replace(/type\s*=\s*("|')?password("|')?/i,'type="text"'),n=$(e).removeAttr("readonly").insertAfter(o),o.css("display","none"),i.data("textBtn",n).addClass("active"),n.focus().val(o.val()),n.addClass("_password-view-field").data("_password-input",o),setTimeout(function(){n.focus()},0)))}),$("body").delegate("._password-view-field","change keyup keydown",function(t){var e,n=$(this).data("_password-input");1==n.length&&((e=jQuery.Event(t.type)).key=t.key,e.keyCode=t.keyCode,e.which=t.which,n.val($(this).val()).trigger(e))}),$("body").delegate("img,a","dragstart",function(t){return stopPP(t)}),window.API_HOST&&($("body").delegate("a","click",function(t){"#"==$(this).attr("href")&&t.preventDefault()}),$("body").delegate("[link-href]","click",function(t){return s(t,"")}),$("body").delegate("[link-href]","mouseup",function(t){if(2==t.which)return s(t,"_blank")}),s=function s(t,e){var n,i=$(t.currentTarget),o=i.attr("link-href")||"#",e=e||i.attr("target"),r=_.startsWith(o,"http://")||_.startsWith(o,"https://"),a=o;if(!r){if(o.startsWith("/")||o.startsWith("./"))return 2==t.which||"_blank"==e?window.open(a):void(window.location.href=o);a=$.parseUrl().urlPath+("#"==o?"":"#"+o)}if(i.attr("dialog-open")||"dialog"==e)return n=i.find(".font-icon").prop("outerHTML")||"",n=htmlSafe(n+i.text()),core.openDialog(a,"",n);if(r)"_blank"==e?window.open(a):window.location.href=a;else{if(2==t.which||"_blank"==e)return window.open(a);o="#"==o&&window.parent!=window?"#&_a=1":o,Router.go(o)}})},s=function s(){$.fn.tabCurrent=function(t,e){var n=$(this);if(n&&0!=n.length){var i=n.parent(),o=(n.outerWidth(),n.offset().left-i.offset().left),r=i.children(".tab-item-bar");if(0!=r.length){var a=i.parent(),a=(a=i.attr("tab-pan-parent")?i.parents(i.attr("tab-pan-parent")):a).children(".tab-group-pan").children(".tab-content"),s=(r.data("initTab")||(r.data("initTab",1),a.hide(),r.addClass("no-animate opacity-hidden"),setTimeout(function(){r.removeClass("opacity-hidden")},10),setTimeout(function(){i.children(".tab-item").filter(".active").tabCurrent(),r.removeClass("no-animate")},300)),i.scrollLeft()||0),l=i.offset().top+i.outerHeight(),d=n.offset().top+n.outerHeight(),o={"width":(p=+n.width())+"px","left":o+(n.outerWidth()-p)/2+s+"px","transform":"translate3d(0px,-"+Math.abs(l-d+1)+"px, 0px)"};if(t&&r.addClass("no-animate"),r.css(o),i.children(".tab-item").removeClass("active"),n.addClass("active"),t&&(r.offset(),r.removeClass("no-animate")),0!=a.length){var u,c,p=n.attr("tab-name").replace(/'/g,"\\'"),f=a.filter(":visible"),h=a.filter("."+p);if(f.get(0)==h.get(0))return n.trigger("tab-select"),this;_.isArray(e)&&4==e.length?(u=e[0],s=parseInt(e[1])||0,c=e[2],l=parseInt(e[3])||s,f.addClass(c),h.show().addClass(u),setTimeout(function(){h.removeClass(u)},s),setTimeout(function(){f.hide().removeClass(c)},l)):f.switchTo(h),n.trigger("tab-select")}}}return this},$(document).delegate(".tab-group-line .tab-item","click",function(){$(this).attr("link-href")&&"self"==$(this).parent().attr("tab-tirgger")||$(this).tabCurrent(!1)});var t=_.debounce(function(){$(".tab-group-line .tab-item.active").each(function(){$(this).tabCurrent(!0)})},50);$(window).bind("resize",t),$.isWindowTouch()&&d()},d=function d(){}},"687":function(t,e,n){t.exports=n(688)},"688":function(t,e,n){"use strict";var i=n(23),n=n(62),o=(n=n)&&n.__esModule?n:{"default":n};(0,i.loadApi)().then(function(){(0,o["default"])()})}});