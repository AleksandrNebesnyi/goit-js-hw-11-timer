parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"fx60":[function(require,module,exports) {

},{}],"yCUT":[function(require,module,exports) {
function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function n(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}var a={timer:document.querySelector('[data-value="days"]'),days:document.querySelector('[data-value="days"]'),hours:document.querySelector('[data-value="hours"]'),mins:document.querySelector('[data-value="mins"]'),secs:document.querySelector('[data-value="secs"]')};function r(t){return String(t).padStart(2,"0")}function o(t){return{days:r(Math.floor(t/864e5)),hours:r(Math.floor(t%864e5/36e5)),mins:r(Math.floor(t%36e5/6e4)),secs:r(Math.floor(t%6e4/1e3))}}var i=function(){function e(n){var a=n.onTick,r=n.TargetDate;t(this,e),this.intervalId=null,this.isActive=!1,this.onTick=a,this.TargetDate=r}return n(e,[{key:"start",value:function(){var t=this;this.isActive||(this.isActive=!0,this.intervalId=setInterval(function(){var e=Date.now(),n=o(t.TargetDate-e);t.onTick(n)},1e3))}},{key:"stop",value:function(){clearInterval(this.intervalId),this.isActive=!1}}]),e}();function c(t){var e=t.days,n=t.hours,r=t.mins,o=t.secs;a.days.textContent="".concat(e),a.hours.textContent="".concat(n),a.mins.textContent="".concat(r),a.secs.textContent="".concat(o)}var s=new i({onTick:c,TargetDate:new Date("Oct 18, 2021")});s.start();
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./scss/main.scss"),require("./js/timer");
},{"./scss/main.scss":"fx60","./js/timer":"yCUT"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-11-timer/src.e9305c97.js.map