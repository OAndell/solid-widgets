import{s as u,c as l,a as t,S as W,d as a,u as j,g as A,C as D,i as L,e as O,t as o}from"./index-ba58a731.js";const F=u("button")`
  padding: 20px 16px 0px;
  background: #e5e0eb;
  border: none;
  width: 100%;
  &.active {
    color: #9d3fe7;
    border-bottom: 2px solid #9d3fe7;
  }
`,G=u("div")`
  display: flex;
`,ue=({tabs:n,activeTab:i,onChange:$})=>{const[g,v]=l(i),p=c=>{v(c),$&&$(c)};return t(G,{get children(){return n.map((c,s)=>t(F,{get class(){return`${s===g()&&"active"}`},onClick:()=>p(s),get children(){return c.label}}))}})},q=o("<label>Background color</label>",2),z=o("<label>Text color</label>",2),H=o("<label>Shadow color</label>",2),J=o("<label>Shadow spread</label>",2),K=o('<input type="range" min="0" max="5" step="0.1">',1),M=o("<label>Shadow Y</label>",2),k=o('<input type="range" min="-5" max="5" step="0.1">',1),Q=o("<label>Shadow X</label>",2),U=o("<label>Corner Radius</label>",2),V=o('<input type="range" min="0" max="4" step="0.05">',1),Z=o("<label>Website Id</label>",2),C=o("<input>",1),ee=o("<label>Property Id</label>",2),te=o('<input type="number">',1),re=o("<label>Link</label>",2),oe=o("<review-widget></review-widget>",2),ne=o("<code></code>",2),le=u("div")`
  --oa-widget-reviews-background: ${n=>n.background};
  --oa-widget-reviews-color: ${n=>n.textColor};
  --oa-widget-reviews-box-shadow: ${n=>`${n.shadowX}em ${n.shadowY}em ${n.shadowSpread}em ${n.shadowColor};`}
  --oa-widget-reviews-border-radius: ${n=>n.borderRadius}em;
    
  grid-column: 2 / 3;
`,d=u("div")`
  display: flex;
  align-items: center;
`,w=u("div")`
  display: flex;
  flex-direction: column;
`,N=u("input")`
  background-color: transparent;
  border: none;
  width: 30px;
  height: 30px;
`,de=u("section")`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 20px;
  grid-template-rows: auto 1fr;

  .sidebar {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
  }

  .code {
    grid-column: 2 / 3;
  }
`,ce=n=>{const[i,$]=l("#E8DFD7"),[g,v]=l("#111111"),[p,c]=l("#bababa"),[s,I]=l(1),[b,R]=l(.5),[h,P]=l(.5),[m,X]=l(1),[_,Y]=l("149038"),[y,B]=l("199259"),[x,E]=l("https://oscar-andell.lodgify.com/");return t(de,{get children(){return[t(W,{class:"sidebar",get children(){return[t(w,{get children(){return[t(d,{get children(){return[q.cloneNode(!0),t(N,{type:"color",get value(){return i()},onInput:e=>$(e.currentTarget.value)})]}}),t(d,{get children(){return[z.cloneNode(!0),t(N,{type:"color",get value(){return g()},onInput:e=>v(e.currentTarget.value)})]}})]}}),t(w,{get children(){return[t(d,{get children(){return[H.cloneNode(!0),t(N,{type:"color",get value(){return p()},onInput:e=>c(e.currentTarget.value)})]}}),t(d,{get children(){return[J.cloneNode(!0),(()=>{const e=K.cloneNode(!0);return e.$$input=r=>I(+r.currentTarget.value),a(()=>e.value=s()),e})()]}}),t(d,{get children(){return[M.cloneNode(!0),(()=>{const e=k.cloneNode(!0);return e.$$input=r=>P(+r.currentTarget.value),a(()=>e.value=h()),e})()]}}),t(d,{get children(){return[Q.cloneNode(!0),(()=>{const e=k.cloneNode(!0);return e.$$input=r=>R(+r.currentTarget.value),a(()=>e.value=b()),e})()]}})]}}),t(d,{get children(){return[U.cloneNode(!0),(()=>{const e=V.cloneNode(!0);return e.$$input=r=>X(+r.currentTarget.value),a(()=>e.value=m()),e})()]}}),t(w,{get children(){return[t(d,{get children(){return[Z.cloneNode(!0),(()=>{const e=C.cloneNode(!0);return e.$$input=r=>Y(r.currentTarget.value),a(()=>e.value=_()),e})()]}}),t(d,{get children(){return[ee.cloneNode(!0),(()=>{const e=te.cloneNode(!0);return e.$$input=r=>B(r.currentTarget.value),a(()=>e.value=y()),e})()]}})]}}),t(w,{get children(){return t(d,{get children(){return[re.cloneNode(!0),(()=>{const e=C.cloneNode(!0);return e.$$input=r=>E(r.currentTarget.value),a(()=>e.value=x()),e})()]}})}})]}}),t(le,{get background(){return i()},get textColor(){return g()},get shadowColor(){return p()},get shadowSpread(){return s()},get shadowX(){return b()},get shadowY(){return h()},get borderRadius(){return m()},get children(){const e=j(()=>document.importNode(oe,!0));return e._$owner=A(),a(r=>{const f=_(),S=y(),T=x();return f!==r._v$&&(e.website=r._v$=f),S!==r._v$2&&(e.property=r._v$2=S),T!==r._v$3&&(e.href=r._v$3=T),r},{_v$:void 0,_v$2:void 0,_v$3:void 0}),e}}),t(D,{class:"code",get children(){const e=ne.cloneNode(!0);return L(e,()=>`
<script src="https://cdn.jsdelivr.net/gh/OAndell/solid-widgets@latest/dist/widget.mjs" type="module"><\/script>
<style>
  .oa-widget-reviews-wrapper {
    --oa-widget-reviews-background: ${i()};
    --oa-widget-reviews-color: ${g()};
    --oa-widget-reviews-box-shadow: ${b()}em ${h()}em ${s()}em ${p()};
    --oa-widget-reviews-border-radius: ${m()}em;
  }
</style>
<div class="oa-widget-reviews-wrapper">
    <review-widget website="${_()}" property="${y()}" href="${x()}"></review-widget>
</div>`),e}})]}})};O(["input"]);export{ce as P,ue as T};
