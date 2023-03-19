function e(e){return Object.keys(e).reduce(((t,n)=>{const o=e[n];var s;return t[n]=Object.assign({},o),r(o.value)&&(s=o.value,"[object Function]"!==Object.prototype.toString.call(s))&&!Array.isArray(o.value)&&(t[n].value=Object.assign({},o.value)),Array.isArray(o.value)&&(t[n].value=o.value.slice(0)),t}),{})}function t(e){if(e)try{return JSON.parse(e)}catch(t){return e}}function n(e,t,n){if(null==n||!1===n)return e.removeAttribute(t);let r=JSON.stringify(n);e.__updating[t]=!0,"true"===r&&(r=""),e.setAttribute(t,r),Promise.resolve().then((()=>delete e.__updating[t]))}function r(e){return null!=e&&("object"==typeof e||"function"==typeof e)}let o;function s(r,s){const l=Object.keys(s);return class extends r{static get observedAttributes(){return l.map((e=>s[e].attribute))}constructor(){super(),this.__initialized=!1,this.__released=!1,this.__releaseCallbacks=[],this.__propertyChangedCallbacks=[],this.__updating={},this.props={}}connectedCallback(){if(this.__initialized)return;this.__releaseCallbacks=[],this.__propertyChangedCallbacks=[],this.__updating={},this.props=function(r,o){const s=e(o);return Object.keys(o).forEach((e=>{const o=s[e],l=r.getAttribute(o.attribute),i=r[e];l&&(o.value=o.parse?t(l):l),null!=i&&(o.value=Array.isArray(i)?i.slice(0):i),o.reflect&&n(r,o.attribute,o.value),Object.defineProperty(r,e,{get:()=>o.value,set(t){const r=o.value;o.value=t,o.reflect&&n(this,o.attribute,o.value);for(let n=0,o=this.__propertyChangedCallbacks.length;n<o;n++)this.__propertyChangedCallbacks[n](e,t,r)},enumerable:!0,configurable:!0})})),s}(this,s);const r=function(e){return Object.keys(e).reduce(((t,n)=>(t[n]=e[n].value,t)),{})}(this.props),l=this.Component,i=o;try{o=this,this.__initialized=!0,"function"==typeof(u=l)&&0===u.toString().indexOf("class")?new l(r,{element:this}):l(r,{element:this})}finally{o=i}var u}async disconnectedCallback(){if(await Promise.resolve(),this.isConnected)return;this.__propertyChangedCallbacks.length=0;let e=null;for(;e=this.__releaseCallbacks.pop();)e(this);delete this.__initialized,this.__released=!0}attributeChangedCallback(e,n,r){if(this.__initialized&&!this.__updating[e]&&(e=this.lookupProp(e))in s){if(null==r&&!this[e])return;this[e]=s[e].parse?t(r):r}}lookupProp(e){if(s)return l.find((t=>e===t||e===s[t].attribute))}get renderRoot(){return this.shadowRoot||this.attachShadow({mode:"open"})}addReleaseCallback(e){this.__releaseCallbacks.push(e)}addPropertyChangedCallback(e){this.__propertyChangedCallbacks.push(e)}}}function l(e,t={},n={}){const{BaseElement:o=HTMLElement,extension:l}=n;return n=>{if(!e)throw new Error("tag is required to register a Component");let i=customElements.get(e);return i?(i.prototype.Component=n,i):(i=s(o,function(e){return e?Object.keys(e).reduce(((t,n)=>{const o=e[n];return t[n]=r(o)&&"value"in o?o:{value:o},t[n].attribute||(t[n].attribute=n.replace(/\.?([A-Z]+)/g,((e,t)=>"-"+t.toLowerCase())).replace("_","-").replace(/^-/,"")),t[n].parse="parse"in t[n]?t[n].parse:"string"!=typeof t[n].value,t}),{}):{}}(t)),i.prototype.Component=n,i.prototype.registeredTag=e,customElements.define(e,i,l),i)}}const i={},u={equals:(e,t)=>e===t};let a=N;const c=1,f=2,d={owned:null,cleanups:null,context:null,owner:null};var p=null;let h=null,g=null,b=null,v=null,y=0;function m(e,t){const n={value:e,observers:null,observerSlots:null,comparator:(t=t?Object.assign({},u,t):u).equals||void 0};return[w.bind(n),e=>("function"==typeof e&&(e=e(n.value)),A(n,e))]}function _(e,t,n){const r=function(e,t,n,r=c,o){const s={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:p,context:null,pure:n};null===p||p!==d&&(p.owned?p.owned.push(s):p.owned=[s]);return s}(e,t,!1,c);S(r)}function C(e){if(null===g)return e();const t=g;g=null;try{return e()}finally{g=t}}function w(){const e=h;if(this.sources&&(this.state||e))if(this.state===c||e)S(this);else{const e=b;b=null,x((()=>O(this)),!1),b=e}if(g){const e=this.observers?this.observers.length:0;g.sources?(g.sources.push(this),g.sourceSlots.push(e)):(g.sources=[this],g.sourceSlots=[e]),this.observers?(this.observers.push(g),this.observerSlots.push(g.sources.length-1)):(this.observers=[g],this.observerSlots=[g.sources.length-1])}return this.value}function A(e,t,n){let r=e.value;return e.comparator&&e.comparator(r,t)||(e.value=t,e.observers&&e.observers.length&&x((()=>{for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t],r=h&&h.running;r&&h.disposed.has(n),(r&&!n.tState||!r&&!n.state)&&(n.pure?b.push(n):v.push(n),n.observers&&j(n)),r||(n.state=c)}if(b.length>1e6)throw b=[],new Error}),!1)),t}function S(e){if(!e.fn)return;T(e);const t=p,n=g,r=y;g=p=e,function(e,t,n){let r;try{r=e.fn(t)}catch(t){return e.pure&&(e.state=c,e.owned&&e.owned.forEach(T),e.owned=null),e.updatedAt=n+1,E(t)}(!e.updatedAt||e.updatedAt<=n)&&(null!=e.updatedAt&&"observers"in e?A(e,r):e.value=r,e.updatedAt=n)}(e,e.value,r),g=n,p=t}function k(e){const t=h;if(0===e.state||t)return;if(e.state===f||t)return O(e);if(e.suspense&&C(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<y);)(e.state||t)&&n.push(e);for(let r=n.length-1;r>=0;r--)if((e=n[r]).state===c||t)S(e);else if(e.state===f||t){const t=b;b=null,x((()=>O(e,n[0])),!1),b=t}}function x(e,t){if(b)return e();let n=!1;t||(b=[]),v?n=!0:v=[],y++;try{const t=e();return function(e){b&&(N(b),b=null);if(e)return;const t=v;v=null,t.length&&x((()=>a(t)),!1)}(n),t}catch(e){n||(v=null),b=null,E(e)}}function N(e){for(let t=0;t<e.length;t++)k(e[t])}function O(e,t){const n=h;e.state=0;for(let r=0;r<e.sources.length;r+=1){const o=e.sources[r];o.sources&&(o.state===c||n?o!==t&&(!o.updatedAt||o.updatedAt<y)&&k(o):(o.state===f||n)&&O(o,t))}}function j(e){const t=h;for(let n=0;n<e.observers.length;n+=1){const r=e.observers[n];r.state&&!t||(r.state=f,r.pure?b.push(r):v.push(r),r.observers&&j(r))}}function T(e){let t;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),n=e.sourceSlots.pop(),r=t.observers;if(r&&r.length){const e=r.pop(),o=t.observerSlots.pop();n<r.length&&(e.sourceSlots[o]=n,r[n]=e,t.observerSlots[n]=o)}}if(e.owned){for(t=0;t<e.owned.length;t++)T(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function E(e){throw e=function(e){return e instanceof Error||"string"==typeof e?e:new Error("Unknown error")}(e)}function q(e,t,n){const r=document.createElement("template");if(r.innerHTML=e,t&&r.innerHTML.split("<").length-1!==t)throw`The browser resolved template HTML does not match JSX input:\n${r.innerHTML}\n\n${e}. Is your HTML properly formed?`;let o=r.content.firstChild;return n&&(o=o.firstChild),o}function B(e,t,n,r,o){for(i.context&&!n&&(n=[...e.childNodes]);"function"==typeof n;)n=n();if(t===n)return n;const s=typeof t,l=void 0!==r;if(e=l&&n[0]&&n[0].parentNode||e,"string"===s||"number"===s){if(i.context)return n;if("number"===s&&(t=t.toString()),l){let o=n[0];o&&3===o.nodeType?o.data=t:o=document.createTextNode(t),n=$(e,n,r,o)}else n=""!==n&&"string"==typeof n?e.firstChild.data=t:e.textContent=t}else if(null==t||"boolean"===s){if(i.context)return n;n=$(e,n,r)}else{if("function"===s)return _((()=>{let o=t();for(;"function"==typeof o;)o=o();n=B(e,o,n,r)})),()=>n;if(Array.isArray(t)){const s=[],u=n&&Array.isArray(n);if(L(s,t,n,o))return _((()=>n=B(e,s,n,r,!0))),()=>n;if(i.context){if(!s.length)return n;for(let e=0;e<s.length;e++)if(s[e].parentNode)return n=s}if(0===s.length){if(n=$(e,n,r),l)return n}else u?0===n.length?P(e,s,r):function(e,t,n){let r=n.length,o=t.length,s=r,l=0,i=0,u=t[o-1].nextSibling,a=null;for(;l<o||i<s;)if(t[l]!==n[i]){for(;t[o-1]===n[s-1];)o--,s--;if(o===l){const t=s<r?i?n[i-1].nextSibling:n[s-i]:u;for(;i<s;)e.insertBefore(n[i++],t)}else if(s===i)for(;l<o;)a&&a.has(t[l])||t[l].remove(),l++;else if(t[l]===n[s-1]&&n[i]===t[o-1]){const r=t[--o].nextSibling;e.insertBefore(n[i++],t[l++].nextSibling),e.insertBefore(n[--s],r),t[o]=n[s]}else{if(!a){a=new Map;let e=i;for(;e<s;)a.set(n[e],e++)}const r=a.get(t[l]);if(null!=r)if(i<r&&r<s){let u,c=l,f=1;for(;++c<o&&c<s&&null!=(u=a.get(t[c]))&&u===r+f;)f++;if(f>r-i){const o=t[l];for(;i<r;)e.insertBefore(n[i++],o)}else e.replaceChild(n[i++],t[l++])}else l++;else t[l++].remove()}}else l++,i++}(e,n,s):(n&&$(e),P(e,s));n=s}else if(t instanceof Node){if(i.context&&t.parentNode)return n=l?[t]:t;if(Array.isArray(n)){if(l)return n=$(e,n,r,t);$(e,n,null,t)}else null!=n&&""!==n&&e.firstChild?e.replaceChild(t,e.firstChild):e.appendChild(t);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function L(e,t,n,r){let o=!1;for(let s=0,l=t.length;s<l;s++){let l=t[s],i=n&&n[s];if(l instanceof Node)e.push(l);else if(null==l||!0===l||!1===l);else if(Array.isArray(l))o=L(e,l,i)||o;else if("function"==typeof l)if(r){for(;"function"==typeof l;)l=l();o=L(e,Array.isArray(l)?l:[l],Array.isArray(i)?i:[i])||o}else e.push(l),o=!0;else{const t=String(l);"<!>"===t?i&&8===i.nodeType&&e.push(i):i&&3===i.nodeType&&i.data===t?e.push(i):e.push(document.createTextNode(t))}}return o}function P(e,t,n=null){for(let r=0,o=t.length;r<o;r++)e.insertBefore(t[r],n)}function $(e,t,n,r){if(void 0===n)return e.textContent="";const o=r||document.createTextNode("");if(t.length){let r=!1;for(let s=t.length-1;s>=0;s--){const l=t[s];if(o!==l){const t=l.parentNode===e;r||s?t&&l.remove():t?e.replaceChild(o,l):e.insertBefore(o,n)}else r=!0}}else e.insertBefore(o,n);return[o]}function M(e){return(t,n)=>{const{element:r}=n;return function(e,t){const n=g,r=p,o=0===e.length,s=o?d:{owned:null,cleanups:null,context:null,owner:void 0===t?r:t},l=o?e:()=>e((()=>C((()=>T(s)))));p=s,g=null;try{return x(l,!0)}finally{g=n,p=r}}((o=>{const s=function(e){const t=Object.keys(e),n={};for(let r=0;r<t.length;r++){const[o,s]=m(e[t[r]]);Object.defineProperty(n,t[r],{get:o,set(e){s((()=>e))}})}return n}(t);r.addPropertyChangedCallback(((e,t)=>s[e]=t)),r.addReleaseCallback((()=>{r.renderRoot.textContent="",o()}));const l=e(s,n);return function(e,t,n,r){if(void 0===n||r||(r=[]),"function"!=typeof t)return B(e,t,r,n);_((r=>B(e,t(),r,n)),r)}(r.renderRoot,l)}),function(e){if(e.assignedSlot&&e.assignedSlot._$owner)return e.assignedSlot._$owner;let t=e.parentNode;for(;t&&!t._$owner&&(!t.assignedSlot||!t.assignedSlot._$owner);)t=t.parentNode;return t&&t.assignedSlot?t.assignedSlot._$owner:e._$owner}(r))}}const z=q("<blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</blockquote>",2);!function(e,t,n){2===arguments.length&&(n=t,t={}),l(e,t)(M(n))}("quote-widget",{asset:""},(e=>z.cloneNode(!0)));
