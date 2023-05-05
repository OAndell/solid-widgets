import{s as c,c as l,a as t,S as j,b as u,u as D,g as L,C as M,i as R,d as O,t as n,e as w,P as F}from"./index-a05e9350.js";const G=c("button")`
  padding: 20px 16px 0px;
  background: #e5e0eb;
  border: none;
  width: 100%;
  &.active {
    color: #9d3fe7;
    border-bottom: 2px solid #9d3fe7;
  }
`,H=c("div")`
  display: flex;
`,Q=({tabs:o,activeTab:i,onChange:s})=>{const[d,v]=l(i),$=g=>{v(g),s&&s(g)};return t(H,{get children(){return o.map((g,p)=>t(G,{get class(){return`${p===d()&&"active"}`},onClick:()=>$(p),get children(){return g.label}}))}})},q=n("<label>Background color</label>",2),z=n("<label>Text color</label>",2),J=n("<label>Shadow color</label>",2),K=n("<label>Shadow spread</label>",2),U=n('<input type="range" min="0" max="5" step="0.1">',1),V=n("<label>Shadow Y</label>",2),k=n('<input type="range" min="-5" max="5" step="0.1">',1),Z=n("<label>Shadow X</label>",2),ee=n("<label>Corner Radius</label>",2),te=n('<input type="range" min="0" max="4" step="0.05">',1),re=n("<label>Website Id</label>",2),I=n("<input>",1),ne=n("<label>Property Id</label>",2),oe=n('<input type="number">',1),le=n("<label>Link</label>",2),ae=n("<review-widget></review-widget>",2),de=n("<code></code>",2),ue=c("div")`
  --oa-widget-reviews-background: ${o=>o.background};
  --oa-widget-reviews-color: ${o=>o.textColor};
  --oa-widget-reviews-box-shadow: ${o=>`${o.shadowX}em ${o.shadowY}em ${o.shadowSpread}em ${o.shadowColor};`}
  --oa-widget-reviews-border-radius: ${o=>o.borderRadius}em;
    
  grid-column: 2 / 3;
`,a=c("div")`
  display: flex;
  align-items: center;
`,b=c("div")`
  display: flex;
  flex-direction: column;
`,N=c("input")`
  background-color: transparent;
  border: none;
  width: 30px;
  height: 30px;
`,ce=c("section")`
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
`,ie=o=>{const[i,s]=l("#E8DFD7"),[d,v]=l("#111111"),[$,g]=l("#bababa"),[p,P]=l(1),[m,X]=l(.5),[h,Y]=l(.5),[_,A]=l(1),[x,B]=l("149038"),[y,E]=l("199259"),[f,W]=l("https://oscar-andell.lodgify.com/");return t(ce,{get children(){return[t(j,{class:"sidebar",get children(){return[t(b,{get children(){return[t(a,{get children(){return[q.cloneNode(!0),t(N,{type:"color",get value(){return i()},onInput:e=>s(e.currentTarget.value)})]}}),t(a,{get children(){return[z.cloneNode(!0),t(N,{type:"color",get value(){return d()},onInput:e=>v(e.currentTarget.value)})]}})]}}),t(b,{get children(){return[t(a,{get children(){return[J.cloneNode(!0),t(N,{type:"color",get value(){return $()},onInput:e=>g(e.currentTarget.value)})]}}),t(a,{get children(){return[K.cloneNode(!0),(()=>{const e=U.cloneNode(!0);return e.$$input=r=>P(+r.currentTarget.value),u(()=>e.value=p()),e})()]}}),t(a,{get children(){return[V.cloneNode(!0),(()=>{const e=k.cloneNode(!0);return e.$$input=r=>Y(+r.currentTarget.value),u(()=>e.value=h()),e})()]}}),t(a,{get children(){return[Z.cloneNode(!0),(()=>{const e=k.cloneNode(!0);return e.$$input=r=>X(+r.currentTarget.value),u(()=>e.value=m()),e})()]}})]}}),t(a,{get children(){return[ee.cloneNode(!0),(()=>{const e=te.cloneNode(!0);return e.$$input=r=>A(+r.currentTarget.value),u(()=>e.value=_()),e})()]}}),t(b,{get children(){return[t(a,{get children(){return[re.cloneNode(!0),(()=>{const e=I.cloneNode(!0);return e.$$input=r=>B(r.currentTarget.value),u(()=>e.value=x()),e})()]}}),t(a,{get children(){return[ne.cloneNode(!0),(()=>{const e=oe.cloneNode(!0);return e.$$input=r=>E(r.currentTarget.value),u(()=>e.value=y()),e})()]}})]}}),t(b,{get children(){return t(a,{get children(){return[le.cloneNode(!0),(()=>{const e=I.cloneNode(!0);return e.$$input=r=>W(r.currentTarget.value),u(()=>e.value=f()),e})()]}})}})]}}),t(ue,{get background(){return i()},get textColor(){return d()},get shadowColor(){return $()},get shadowSpread(){return p()},get shadowX(){return m()},get shadowY(){return h()},get borderRadius(){return _()},get children(){const e=D(()=>document.importNode(ae,!0));return e._$owner=L(),u(r=>{const S=x(),T=y(),C=f();return S!==r._v$&&(e.website=r._v$=S),T!==r._v$2&&(e.property=r._v$2=T),C!==r._v$3&&(e.href=r._v$3=C),r},{_v$:void 0,_v$2:void 0,_v$3:void 0}),e}}),t(M,{class:"code",get children(){const e=de.cloneNode(!0);return R(e,()=>`
<script src="https://cdn.jsdelivr.net/gh/OAndell/solid-widgets@latest/dist/widget.mjs" type="module"><\/script>
<style>
  .oa-widget-reviews-wrapper {
    --oa-widget-reviews-background: ${i()};
    --oa-widget-reviews-color: ${d()};
    --oa-widget-reviews-box-shadow: ${m()}em ${h()}em ${p()}em ${$()};
    --oa-widget-reviews-border-radius: ${_()}em;
  }
</style>
<div class="oa-widget-reviews-wrapper">
    <review-widget website="${x()}" property="${y()}" href="${f()}"></review-widget>
</div>`),e}})]}})};O(["input"]);const se=n("<header></header>",2),ge=c.main`
  max-width: 1000px;
  margin: auto;
`;function $e(){const[o,i]=l(0),s=[{label:"Review"},{label:"Quote"},{label:"Tab 3"}];return[(()=>{const d=se.cloneNode(!0);return R(d,t(Q,{tabs:s,activeTab:0,onChange:i})),d})(),t(ge,{get children(){return[w(()=>w(()=>o()===1)()&&t(F,{})),w(()=>w(()=>o()===0)()&&t(ie,{}))]}})]}export{$e as default};
