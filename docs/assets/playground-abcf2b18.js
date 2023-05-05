import{s as u,c as l,a as r,S as D,d,u as L,g as O,C as F,i as G,e as q,t as n}from"./index-ce63c8a4.js";const z=u("button")`
  padding: 20px 16px 0px;
  background: #e5e0eb;
  border: none;
  width: 100%;
  &.active {
    color: #9d3fe7;
    border-bottom: 2px solid #9d3fe7;
  }
`,H=u("div")`
  display: flex;
`,ge=({tabs:o,activeTab:i,onChange:$})=>{const[g,v]=l(i),p=c=>{v(c),$&&$(c)};return r(H,{get children(){return o.map((c,s)=>r(z,{get class(){return`${s===g()&&"active"}`},onClick:()=>p(s),get children(){return c.label}}))}})},J=n("<label>Background color</label>",2),K=n("<label>Text color</label>",2),M=n("<label>Shadow color</label>",2),Q=n("<label>Shadow spread</label>",2),U=n('<input type="range" min="0" max="5" step="0.1">',1),V=n("<label>Shadow Y</label>",2),R=n('<input type="range" min="-5" max="5" step="0.1">',1),Z=n("<label>Shadow X</label>",2),ee=n("<label>Corner Radius</label>",2),te=n('<input type="range" min="0" max="4" step="0.05">',1),re=n("<label>Website Id</label>",2),T=n("<input>",1),ne=n("<label>Property Id</label>",2),oe=n('<input type="number">',1),le=n("<label>Link</label>",2),ae=n("<label>CTA Text</label>",2),de=n("<review-widget></review-widget>",2),ue=n("<code></code>",2),ce=u("div")`
  --oa-widget-reviews-background: ${o=>o.background};
  --oa-widget-reviews-color: ${o=>o.textColor};
  --oa-widget-reviews-box-shadow: ${o=>`${o.shadowX}em ${o.shadowY}em ${o.shadowSpread}em ${o.shadowColor};`}
  --oa-widget-reviews-border-radius: ${o=>o.borderRadius}em;
    
  grid-column: 2 / 3;
`,a=u("div")`
  display: flex;
  align-items: center;
`,w=u("div")`
  display: flex;
  flex-direction: column;
`,f=u("input")`
  background-color: transparent;
  border: none;
  width: 30px;
  height: 30px;
`,se=u("section")`
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
`,pe=o=>{const[i,$]=l("#E8DFD7"),[g,v]=l("#111111"),[p,c]=l("#bababa"),[s,P]=l(1),[b,X]=l(.5),[h,Y]=l(.5),[m,B]=l(1),[_,A]=l("149038"),[x,E]=l("199259"),[y,W]=l("https://oscar-andell.lodgify.com/"),[N,j]=l("Book now");return r(se,{get children(){return[r(D,{class:"sidebar",get children(){return[r(w,{get children(){return[r(a,{get children(){return[J.cloneNode(!0),r(f,{type:"color",get value(){return i()},onInput:e=>$(e.currentTarget.value)})]}}),r(a,{get children(){return[K.cloneNode(!0),r(f,{type:"color",get value(){return g()},onInput:e=>v(e.currentTarget.value)})]}})]}}),r(w,{get children(){return[r(a,{get children(){return[M.cloneNode(!0),r(f,{type:"color",get value(){return p()},onInput:e=>c(e.currentTarget.value)})]}}),r(a,{get children(){return[Q.cloneNode(!0),(()=>{const e=U.cloneNode(!0);return e.$$input=t=>P(+t.currentTarget.value),d(()=>e.value=s()),e})()]}}),r(a,{get children(){return[V.cloneNode(!0),(()=>{const e=R.cloneNode(!0);return e.$$input=t=>Y(+t.currentTarget.value),d(()=>e.value=h()),e})()]}}),r(a,{get children(){return[Z.cloneNode(!0),(()=>{const e=R.cloneNode(!0);return e.$$input=t=>X(+t.currentTarget.value),d(()=>e.value=b()),e})()]}})]}}),r(a,{get children(){return[ee.cloneNode(!0),(()=>{const e=te.cloneNode(!0);return e.$$input=t=>B(+t.currentTarget.value),d(()=>e.value=m()),e})()]}}),r(w,{get children(){return[r(a,{get children(){return[re.cloneNode(!0),(()=>{const e=T.cloneNode(!0);return e.$$input=t=>A(t.currentTarget.value),d(()=>e.value=_()),e})()]}}),r(a,{get children(){return[ne.cloneNode(!0),(()=>{const e=oe.cloneNode(!0);return e.$$input=t=>E(t.currentTarget.value),d(()=>e.value=x()),e})()]}})]}}),r(w,{get children(){return[r(a,{get children(){return[le.cloneNode(!0),(()=>{const e=T.cloneNode(!0);return e.$$input=t=>W(t.currentTarget.value),d(()=>e.value=y()),e})()]}}),r(a,{get children(){return[ae.cloneNode(!0),(()=>{const e=T.cloneNode(!0);return e.$$input=t=>j(t.currentTarget.value),d(()=>e.value=N()),e})()]}})]}})]}}),r(ce,{get background(){return i()},get textColor(){return g()},get shadowColor(){return p()},get shadowSpread(){return s()},get shadowX(){return b()},get shadowY(){return h()},get borderRadius(){return m()},get children(){const e=L(()=>document.importNode(de,!0));return e._$owner=O(),d(t=>{const S=_(),C=x(),k=y(),I=N();return S!==t._v$&&(e.website=t._v$=S),C!==t._v$2&&(e.property=t._v$2=C),k!==t._v$3&&(e.href=t._v$3=k),I!==t._v$4&&(e.cta=t._v$4=I),t},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),e}}),r(F,{class:"code",get children(){const e=ue.cloneNode(!0);return G(e,()=>`
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
    <review-widget website="${_()}" property="${x()}" href="${y()}" cta="${N()}"></review-widget>
</div>`),e}})]}})};q(["input"]);export{pe as P,ge as T};
