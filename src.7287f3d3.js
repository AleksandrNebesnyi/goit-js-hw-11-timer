parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"fx60":[function(require,module,exports) {

},{}],"yCUT":[function(require,module,exports) {
function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var e={timer:document.querySelector('[data-value="days"]'),days:document.querySelector('[data-value="days"]'),hours:document.querySelector('[data-value="hours"]'),mins:document.querySelector('[data-value="mins"]'),secs:document.querySelector('[data-value="secs"]')};function n(t){return String(t).padStart(2,"0")}function a(t){return{days:n(Math.floor(t/864e5)),hours:n(Math.floor(t%864e5/36e5)),mins:n(Math.floor(t%36e5/6e4)),secs:n(Math.floor(t%6e4/1e3))}}var o=function e(){t(this,e)},s=null,c=new Date("Oct 25, 2021"),r=!1;function u(){r||(r=!0,s=setInterval(function(){var t=Date.now(),e=a(c-t);i({days:e.days,hours:e.hours,mins:e.mins,secs:e.secs})},1e3))}function i(t){var n=t.days,a=t.hours,o=t.mins,s=t.secs;e.days.textContent="".concat(n),e.hours.textContent="".concat(a),e.mins.textContent="".concat(o),e.secs.textContent="".concat(s)}function l(){i(a(c-Date.now()))}u();
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./scss/main.scss"),require("./js/timer");
},{"./scss/main.scss":"fx60","./js/timer":"yCUT"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-11-color-switch/src.7287f3d3.js.map