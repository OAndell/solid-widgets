function e(e){return Object.keys(e).reduce(((t,n)=>{const o=e[n];var s;return t[n]=Object.assign({},o),r(o.value)&&(s=o.value,"[object Function]"!==Object.prototype.toString.call(s))&&!Array.isArray(o.value)&&(t[n].value=Object.assign({},o.value)),Array.isArray(o.value)&&(t[n].value=o.value.slice(0)),t}),{})}function t(e){if(e)try{return JSON.parse(e)}catch(t){return e}}function n(e,t,n){if(null==n||!1===n)return e.removeAttribute(t);let r=JSON.stringify(n);e.__updating[t]=!0,"true"===r&&(r=""),e.setAttribute(t,r),Promise.resolve().then((()=>delete e.__updating[t]))}function r(e){return null!=e&&("object"==typeof e||"function"==typeof e)}let o;function s(r,s){const i=Object.keys(s);return class extends r{static get observedAttributes(){return i.map((e=>s[e].attribute))}constructor(){super(),this.__initialized=!1,this.__released=!1,this.__releaseCallbacks=[],this.__propertyChangedCallbacks=[],this.__updating={},this.props={}}connectedCallback(){if(this.__initialized)return;this.__releaseCallbacks=[],this.__propertyChangedCallbacks=[],this.__updating={},this.props=function(r,o){const s=e(o);return Object.keys(o).forEach((e=>{const o=s[e],i=r.getAttribute(o.attribute),l=r[e];i&&(o.value=o.parse?t(i):i),null!=l&&(o.value=Array.isArray(l)?l.slice(0):l),o.reflect&&n(r,o.attribute,o.value),Object.defineProperty(r,e,{get:()=>o.value,set(t){const r=o.value;o.value=t,o.reflect&&n(this,o.attribute,o.value);for(let n=0,o=this.__propertyChangedCallbacks.length;n<o;n++)this.__propertyChangedCallbacks[n](e,t,r)},enumerable:!0,configurable:!0})})),s}(this,s);const r=function(e){return Object.keys(e).reduce(((t,n)=>(t[n]=e[n].value,t)),{})}(this.props),i=this.Component,l=o;try{o=this,this.__initialized=!0,"function"==typeof(a=i)&&0===a.toString().indexOf("class")?new i(r,{element:this}):i(r,{element:this})}finally{o=l}var a}async disconnectedCallback(){if(await Promise.resolve(),this.isConnected)return;this.__propertyChangedCallbacks.length=0;let e=null;for(;e=this.__releaseCallbacks.pop();)e(this);delete this.__initialized,this.__released=!0}attributeChangedCallback(e,n,r){if(this.__initialized&&!this.__updating[e]&&(e=this.lookupProp(e))in s){if(null==r&&!this[e])return;this[e]=s[e].parse?t(r):r}}lookupProp(e){if(s)return i.find((t=>e===t||e===s[t].attribute))}get renderRoot(){return this.shadowRoot||this.attachShadow({mode:"open"})}addReleaseCallback(e){this.__releaseCallbacks.push(e)}addPropertyChangedCallback(e){this.__propertyChangedCallbacks.push(e)}}}function i(e,t={},n={}){const{BaseElement:o=HTMLElement,extension:i}=n;return n=>{if(!e)throw new Error("tag is required to register a Component");let l=customElements.get(e);return l?(l.prototype.Component=n,l):(l=s(o,function(e){return e?Object.keys(e).reduce(((t,n)=>{const o=e[n];return t[n]=r(o)&&"value"in o?o:{value:o},t[n].attribute||(t[n].attribute=n.replace(/\.?([A-Z]+)/g,((e,t)=>"-"+t.toLowerCase())).replace("_","-").replace(/^-/,"")),t[n].parse="parse"in t[n]?t[n].parse:"string"!=typeof t[n].value,t}),{}):{}}(t)),l.prototype.Component=n,l.prototype.registeredTag=e,customElements.define(e,l,i),l)}}const l={};const a={equals:(e,t)=>e===t};let u=N;const c=1,f=2,d={owned:null,cleanups:null,context:null,owner:null};var p=null;let h=null,g=null,v=null,b=null,_=0;function w(e,t){const n={value:e,observers:null,observerSlots:null,comparator:(t=t?Object.assign({},a,t):a).equals||void 0};return[x.bind(n),e=>("function"==typeof e&&(e=e(n.value)),A(n,e))]}function y(e,t,n){k(S(e,t,!1,c))}function m(e,t,n){u=T;const r=S(e,t,!1,c);r.user=!0,b?b.push(r):k(r)}function C(e){if(null===g)return e();const t=g;g=null;try{return e()}finally{g=t}}function x(){const e=h;if(this.sources&&(this.state||e))if(this.state===c||e)k(this);else{const e=v;v=null,j((()=>O(this)),!1),v=e}if(g){const e=this.observers?this.observers.length:0;g.sources?(g.sources.push(this),g.sourceSlots.push(e)):(g.sources=[this],g.sourceSlots=[e]),this.observers?(this.observers.push(g),this.observerSlots.push(g.sources.length-1)):(this.observers=[g],this.observerSlots=[g.sources.length-1])}return this.value}function A(e,t,n){let r=e.value;return e.comparator&&e.comparator(r,t)||(e.value=t,e.observers&&e.observers.length&&j((()=>{for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t],r=h&&h.running;r&&h.disposed.has(n),(r&&!n.tState||!r&&!n.state)&&(n.pure?v.push(n):b.push(n),n.observers&&E(n)),r||(n.state=c)}if(v.length>1e6)throw v=[],new Error}),!1)),t}function k(e){if(!e.fn)return;z(e);const t=p,n=g,r=_;g=p=e,function(e,t,n){let r;try{r=e.fn(t)}catch(t){return e.pure&&(e.state=c,e.owned&&e.owned.forEach(z),e.owned=null),e.updatedAt=n+1,B(t)}(!e.updatedAt||e.updatedAt<=n)&&(null!=e.updatedAt&&"observers"in e?A(e,r):e.value=r,e.updatedAt=n)}(e,e.value,r),g=n,p=t}function S(e,t,n,r=c,o){const s={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:p,context:null,pure:n};return null===p||p!==d&&(p.owned?p.owned.push(s):p.owned=[s]),s}function q(e){const t=h;if(0===e.state||t)return;if(e.state===f||t)return O(e);if(e.suspense&&C(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<_);)(e.state||t)&&n.push(e);for(let r=n.length-1;r>=0;r--)if((e=n[r]).state===c||t)k(e);else if(e.state===f||t){const t=v;v=null,j((()=>O(e,n[0])),!1),v=t}}function j(e,t){if(v)return e();let n=!1;t||(v=[]),b?n=!0:b=[],_++;try{const t=e();return function(e){v&&(N(v),v=null);if(e)return;const t=b;b=null,t.length&&j((()=>u(t)),!1)}(n),t}catch(e){n||(b=null),v=null,B(e)}}function N(e){for(let t=0;t<e.length;t++)q(e[t])}function T(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:q(r)}var r;for(l.context&&(l.context=r),t=0;t<n;t++)q(e[t])}function O(e,t){const n=h;e.state=0;for(let r=0;r<e.sources.length;r+=1){const o=e.sources[r];o.sources&&(o.state===c||n?o!==t&&(!o.updatedAt||o.updatedAt<_)&&q(o):(o.state===f||n)&&O(o,t))}}function E(e){const t=h;for(let n=0;n<e.observers.length;n+=1){const r=e.observers[n];r.state&&!t||(r.state=f,r.pure?v.push(r):b.push(r),r.observers&&E(r))}}function z(e){let t;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),n=e.sourceSlots.pop(),r=t.observers;if(r&&r.length){const e=r.pop(),o=t.observerSlots.pop();n<r.length&&(e.sourceSlots[o]=n,r[n]=e,t.observerSlots[n]=o)}}if(e.owned){for(t=0;t<e.owned.length;t++)z(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function B(e){throw e=function(e){return e instanceof Error||"string"==typeof e?e:new Error("Unknown error")}(e)}function $(e,t,n){const r=document.createElement("template");if(r.innerHTML=e,t&&r.innerHTML.split("<").length-1!==t)throw`The browser resolved template HTML does not match JSX input:\n${r.innerHTML}\n\n${e}. Is your HTML properly formed?`;let o=r.content.firstChild;return n&&(o=o.firstChild),o}function M(e,t,n,r){if(void 0===n||r||(r=[]),"function"!=typeof t)return L(e,t,r,n);y((r=>L(e,t(),r,n)),r)}function L(e,t,n,r,o){for(l.context&&!n&&(n=[...e.childNodes]);"function"==typeof n;)n=n();if(t===n)return n;const s=typeof t,i=void 0!==r;if(e=i&&n[0]&&n[0].parentNode||e,"string"===s||"number"===s){if(l.context)return n;if("number"===s&&(t=t.toString()),i){let o=n[0];o&&3===o.nodeType?o.data=t:o=document.createTextNode(t),n=H(e,n,r,o)}else n=""!==n&&"string"==typeof n?e.firstChild.data=t:e.textContent=t}else if(null==t||"boolean"===s){if(l.context)return n;n=H(e,n,r)}else{if("function"===s)return y((()=>{let o=t();for(;"function"==typeof o;)o=o();n=L(e,o,n,r)})),()=>n;if(Array.isArray(t)){const s=[],a=n&&Array.isArray(n);if(P(s,t,n,o))return y((()=>n=L(e,s,n,r,!0))),()=>n;if(l.context){if(!s.length)return n;for(let e=0;e<s.length;e++)if(s[e].parentNode)return n=s}if(0===s.length){if(n=H(e,n,r),i)return n}else a?0===n.length?R(e,s,r):function(e,t,n){let r=n.length,o=t.length,s=r,i=0,l=0,a=t[o-1].nextSibling,u=null;for(;i<o||l<s;)if(t[i]!==n[l]){for(;t[o-1]===n[s-1];)o--,s--;if(o===i){const t=s<r?l?n[l-1].nextSibling:n[s-l]:a;for(;l<s;)e.insertBefore(n[l++],t)}else if(s===l)for(;i<o;)u&&u.has(t[i])||t[i].remove(),i++;else if(t[i]===n[s-1]&&n[l]===t[o-1]){const r=t[--o].nextSibling;e.insertBefore(n[l++],t[i++].nextSibling),e.insertBefore(n[--s],r),t[o]=n[s]}else{if(!u){u=new Map;let e=l;for(;e<s;)u.set(n[e],e++)}const r=u.get(t[i]);if(null!=r)if(l<r&&r<s){let a,c=i,f=1;for(;++c<o&&c<s&&null!=(a=u.get(t[c]))&&a===r+f;)f++;if(f>r-l){const o=t[i];for(;l<r;)e.insertBefore(n[l++],o)}else e.replaceChild(n[l++],t[i++])}else i++;else t[i++].remove()}}else i++,l++}(e,n,s):(n&&H(e),R(e,s));n=s}else if(t instanceof Node){if(l.context&&t.parentNode)return n=i?[t]:t;if(Array.isArray(n)){if(i)return n=H(e,n,r,t);H(e,n,null,t)}else null!=n&&""!==n&&e.firstChild?e.replaceChild(t,e.firstChild):e.appendChild(t);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function P(e,t,n,r){let o=!1;for(let s=0,i=t.length;s<i;s++){let i=t[s],l=n&&n[s];if(i instanceof Node)e.push(i);else if(null==i||!0===i||!1===i);else if(Array.isArray(i))o=P(e,i,l)||o;else if("function"==typeof i)if(r){for(;"function"==typeof i;)i=i();o=P(e,Array.isArray(i)?i:[i],Array.isArray(l)?l:[l])||o}else e.push(i),o=!0;else{const t=String(i);"<!>"===t?l&&8===l.nodeType&&e.push(l):l&&3===l.nodeType&&l.data===t?e.push(l):e.push(document.createTextNode(t))}}return o}function R(e,t,n=null){for(let r=0,o=t.length;r<o;r++)e.insertBefore(t[r],n)}function H(e,t,n,r){if(void 0===n)return e.textContent="";const o=r||document.createTextNode("");if(t.length){let r=!1;for(let s=t.length-1;s>=0;s--){const i=t[s];if(o!==i){const t=i.parentNode===e;r||s?t&&i.remove():t?e.replaceChild(o,i):e.insertBefore(o,n)}else r=!0}}else e.insertBefore(o,n);return[o]}function V(e){return(t,n)=>{const{element:r}=n;return function(e,t){const n=g,r=p,o=0===e.length,s=o?d:{owned:null,cleanups:null,context:null,owner:void 0===t?r:t},i=o?e:()=>e((()=>C((()=>z(s)))));p=s,g=null;try{return j(i,!0)}finally{g=n,p=r}}((o=>{const s=function(e){const t=Object.keys(e),n={};for(let r=0;r<t.length;r++){const[o,s]=w(e[t[r]]);Object.defineProperty(n,t[r],{get:o,set(e){s((()=>e))}})}return n}(t);r.addPropertyChangedCallback(((e,t)=>s[e]=t)),r.addReleaseCallback((()=>{r.renderRoot.textContent="",o()}));const i=e(s,n);return M(r.renderRoot,i)}),function(e){if(e.assignedSlot&&e.assignedSlot._$owner)return e.assignedSlot._$owner;let t=e.parentNode;for(;t&&!t._$owner&&(!t.assignedSlot||!t.assignedSlot._$owner);)t=t.parentNode;return t&&t.assignedSlot?t.assignedSlot._$owner:e._$owner}(r))}}var J=[],Z=[];var F='\n.review-widget__container {\n    position: relative;\n}\n\n.quote__blockquote {\n    font-size: 1.25em;\n    height: 100px;\n    display: flex;\n    justify-content: center;\n    text-align: center;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    align-items: center;\n    height: 100%;\n}\n  \n.quote__wrapper {\n    background: var(--oa-widget-reviews-background);\n    color: var(--oa-widget-reviews-color);\n    text-align: start;\n    border-radius: var(--oa-widget-reviews-border-radius);\n    box-shadow: var(--oa-widget-reviews-box-shadow);\n    cursor: pointer;\n    overflow: hidden;\n    position: relative;\n}\n\n.review-widget__container:hover > .quote__wrapper {\n    filter: blur(2px);\n}\n\n.quote__wrapper:before {\n    content: "“";\n    font-size: 4em;\n    position: absolute;\n    margin-left: 0.2em;\n}\n  \n.quote__citation {\n    font-size: 1.5em;\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    position: absolute;\n    bottom: 0.5em;\n    z-index: 2;\n    color: var(--oa-widget-reviews-background);\n}\n\n.quote__footer {\n    transform: rotate(180deg);\n    fill: var(--oa-widget-reviews-color);\n    display: flex;\n    flex-direction: column;\n    height: 300px;\n}\n\n.quote__footer__rect {\n    height: 50px;\n    background: var(--oa-widget-reviews-color);\n    outline: auto;\n}\n  \n\n.quote__citation__cite {\n    margin-left: 1em;\n}\n\n.quote__citation__stars {\n    margin-right: 1em;\n}\n\n.review-widget__cta-text {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%,-50%);\n    font-size: 1.5rem;\n    color: var(--oa-widget-reviews-background);\n    background: var(--oa-widget-reviews-color);\n    border-radius: var(--oa-widget-reviews-border-radius);\n    padding: 0.5em;\n    opacity: 0;\n    transition: .7s opacity;\n}\n\n.review-widget__container:hover > .review-widget__cta-text {\n    opacity: 1;    \n}\n';!function(e,t){if(e&&"undefined"!=typeof document){var n,r=!0===t.prepend?"prepend":"append",o=!0===t.singleTag,s="string"==typeof t.container?document.querySelector(t.container):document.getElementsByTagName("head")[0];if(o){var i=J.indexOf(s);-1===i&&(i=J.push(s)-1,Z[i]={}),n=Z[i]&&Z[i][r]?Z[i][r]:Z[i][r]=l()}else n=l();65279===e.charCodeAt(0)&&(e=e.substring(1)),n.styleSheet?n.styleSheet.cssText+=e:n.appendChild(document.createTextNode(e))}function l(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),t.attributes)for(var n=Object.keys(t.attributes),o=0;o<n.length;o++)e.setAttribute(n[o],t.attributes[n[o]]);var i="prepend"===r?"afterbegin":"beforeend";return s.insertAdjacentElement(i,e),e}}(F,{});const I=$('<span class="review__rating__star">★</span>',2),U=$('<a class="review-widget__container"><figure class="quote__wrapper"><style></style><blockquote class="quote__blockquote"></blockquote><figcaption class="quote__citation"><cite class="quote__citation__cite"></cite><div class="quote__citation__stars"></div></figcaption><div class="quote__footer"><div class="quote__footer__rect"></div><svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 200" preserveAspectRatio="none"><path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".35" class="shape-fill"></path><path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path></svg></div></figure><div class="review-widget__cta-text"></div></a>',26),X=e=>{const[t,n]=w([]),[r,o]=w(0);m((()=>{fetch(`https://websiteserver.lodgify.com/v2/websites/reviews/website/${e.website}/property/${e.property}?page=1&count=100`).then((e=>e.json())).then((e=>{n(e.reviews)})).catch((e=>{console.error(e)}))})),m((()=>{setInterval((()=>{const e=r()+1;o(e>t().length-1?0:e)}),4e3)}));return(()=>{const n=U.cloneNode(!0),o=n.firstChild,s=o.firstChild,i=s.nextSibling,l=i.nextSibling.firstChild,a=l.nextSibling,u=o.nextSibling;return M(s,F),M(i,(()=>((e="")=>e.length>200?e.substring(0,200)+"...":e)(t()[r()]?.text))),M(l,(()=>`-${t()[r()]?.author}`)),M(a,(()=>((e=0)=>Array(e).fill(0).map((()=>I.cloneNode(!0))))(t()[r()]?.rating))),M(u,(()=>e.cta)),y((()=>{return t=n,r="href",void(null==(o=e.href)?t.removeAttribute(r):t.setAttribute(r,o));var t,r,o})),n})()};!function(e,t,n){2===arguments.length&&(n=t,t={}),i(e,t)(V(n))}("review-widget",{website:"314075",property:"315887",href:"/",cta:"Book Now"},X);
