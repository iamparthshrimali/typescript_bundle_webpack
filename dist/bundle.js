(()=>{"use strict";var e={342:function(e,t){var r=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,s){function a(e){try{c(n.next(e))}catch(e){s(e)}}function i(e){try{c(n.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,i)}c((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),e.exports=function(){return r(this,void 0,void 0,(function*(){const e=new URLSearchParams(window.location.search);if(!e.has("userId"))throw console.log("User id is not present in query params"),new Error("User id is not present in query params");const t=e.get("userId");return yield fetch(`https://jsonplaceholder.typicode.com/todos/${t}`)}))}},827:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getQueryParams=void 0,t.getQueryParams=function(){const e=new URLSearchParams(window.location.search);let t={};return e.forEach(((e,r)=>{t[r]=e})),t}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,r),s.exports}(()=>{const e=r(342),t=r(827);const n=window;n.getUser=function(){return e().then((e=>e.json()))},n.queryParams=t.getQueryParams})()})();