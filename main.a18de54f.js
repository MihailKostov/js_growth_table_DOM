parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=document.querySelector(".field"),t=document.querySelector(".append-row"),r=document.querySelector(".remove-row"),l=document.querySelector(".append-column"),n=document.querySelector(".remove-column"),o=10,d=2;t.addEventListener("click",function(){e.rows.length<o&&(e.insertAdjacentHTML("afterbegin",e.rows[0].outerHTML),e.rows.length===o&&t.setAttribute("disabled",!0),r.removeAttribute("disabled"))}),r.addEventListener("click",function(){e.rows.length>d&&(e.deleteRow(0),e.rows.length===d&&r.setAttribute("disabled",!0),t.removeAttribute("disabled"))}),l.addEventListener("click",function(){if(e.rows[0].cells.length<o){for(var t=e.querySelectorAll("tr"),r=0;r<e.rows.length;r++){var d=document.createElement("td");t[r].append(d)}e.rows[0].cells.length===o&&l.setAttribute("disabled",!0),n.removeAttribute("disabled")}}),n.addEventListener("click",function(){if(e.rows[0].cells.length>d){for(var t=e.rows,r=0;r<t.length;r++)t[r].deleteCell(0);e.rows[0].cells.length===d&&n.setAttribute("disabled",!0),l.removeAttribute("disabled")}});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.a18de54f.js.map