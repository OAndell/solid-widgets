import{s as u,b as o,c as t,d as L,e as M,g as n,f as i,r as g,h as O,C as F,i as X,t as a,j as v,P as G}from"./entry-client-d6311556.js";const N=u("button")`
  padding: 20px 16px 0px;
  background: #e5e0eb;
  border: none;
  width: 100%;
  &.active {
    color: #9d3fe7;
    border-bottom: 2px solid #9d3fe7;
  }
`,Q=u("div")`
  display: flex;
`,q=({tabs:l,activeTab:c,onChange:p})=>{const[s,m]=o(c),b=$=>{m($),p&&p($)};return t(Q,{get children(){return l.map(($,w)=>t(N,{get class(){return`${w===s()&&"active"}`},onClick:()=>b(w),get children(){return $.label}}))}})},z=a("<label>Background color</label>",2),J=a("<label>Text color</label>",2),K=a("<label>Shadow color</label>",2),U=a("<label>Shadow spread</label>",2),V=a('<input type="range" min="0" max="5" step="0.1">',1),Z=a("<label>Shadow Y</label>",2),P=a('<input type="range" min="-5" max="5" step="0.1">',1),ee=a("<label>Shadow X</label>",2),te=a("<label>Corner Radius</label>",2),re=a('<input type="range" min="0" max="4" step="0.05">',1),ne=a("<label>Website Id</label>",2),E=a("<input>",1),ae=a("<label>Property Id</label>",2),le=a('<input type="number">',1),oe=a("<label>Link</label>",2),de=a("<review-widget></review-widget>",2),se=a("<code></code>",2),ie=u("div")`
  --oa-widget-reviews-background: ${l=>l.background};
  --oa-widget-reviews-color: ${l=>l.textColor};
  --oa-widget-reviews-box-shadow: ${l=>`${l.shadowX}em ${l.shadowY}em ${l.shadowSpread}em ${l.shadowColor};`}
  --oa-widget-reviews-border-radius: ${l=>l.borderRadius}em;
    
  grid-column: 2 / 3;
`,d=u("div")`
  display: flex;
  align-items: center;
`,h=u("div")`
  display: flex;
  flex-direction: column;
`,C=u("input")`
  background-color: transparent;
  border: none;
  width: 30px;
  height: 30px;
`,ue=u("section")`
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
`,ce=l=>{const[c,p]=o("#E8DFD7"),[s,m]=o("#111111"),[b,$]=o("#bababa"),[w,Y]=o(1),[_,j]=o(.5),[x,A]=o(.5),[y,B]=o(1),[f,W]=o("149038"),[S,D]=o("199259"),[T,H]=o("https://oscar-andell.lodgify.com/");return t(ue,{get children(){return[t(M,{class:"sidebar",get children(){return[t(h,{get children(){return[t(d,{get children(){return[n(z),t(C,{type:"color",get value(){return c()},onInput:e=>p(e.currentTarget.value)})]}}),t(d,{get children(){return[n(J),t(C,{type:"color",get value(){return s()},onInput:e=>m(e.currentTarget.value)})]}})]}}),t(h,{get children(){return[t(d,{get children(){return[n(K),t(C,{type:"color",get value(){return b()},onInput:e=>$(e.currentTarget.value)})]}}),t(d,{get children(){return[n(U),(()=>{const e=n(V);return e.$$input=r=>Y(+r.currentTarget.value),i(()=>e.value=w()),g(),e})()]}}),t(d,{get children(){return[n(Z),(()=>{const e=n(P);return e.$$input=r=>A(+r.currentTarget.value),i(()=>e.value=x()),g(),e})()]}}),t(d,{get children(){return[n(ee),(()=>{const e=n(P);return e.$$input=r=>j(+r.currentTarget.value),i(()=>e.value=_()),g(),e})()]}})]}}),t(d,{get children(){return[n(te),(()=>{const e=n(re);return e.$$input=r=>B(+r.currentTarget.value),i(()=>e.value=y()),g(),e})()]}}),t(h,{get children(){return[t(d,{get children(){return[n(ne),(()=>{const e=n(E);return e.$$input=r=>W(r.currentTarget.value),i(()=>e.value=f()),g(),e})()]}}),t(d,{get children(){return[n(ae),(()=>{const e=n(le);return e.$$input=r=>D(r.currentTarget.value),i(()=>e.value=S()),g(),e})()]}})]}}),t(h,{get children(){return t(d,{get children(){return[n(oe),(()=>{const e=n(E);return e.$$input=r=>H(r.currentTarget.value),i(()=>e.value=T()),g(),e})()]}})}})]}}),t(ie,{get background(){return c()},get textColor(){return s()},get shadowColor(){return b()},get shadowSpread(){return w()},get shadowX(){return _()},get shadowY(){return x()},get borderRadius(){return y()},get children(){const e=n(de);return e._$owner=O(),i(r=>{const k=f(),I=S(),R=T();return k!==r._v$&&(e.website=r._v$=k),I!==r._v$2&&(e.property=r._v$2=I),R!==r._v$3&&(e.href=r._v$3=R),r},{_v$:void 0,_v$2:void 0,_v$3:void 0}),e}}),t(F,{class:"code",get children(){const e=n(se);return X(e,()=>`
<script src="https://cdn.jsdelivr.net/gh/OAndell/solid-widgets@latest/dist/widget.mjs" type="module"><\/script>
<style>
  .oa-widget-reviews-wrapper {
    --oa-widget-reviews-background: ${c()};
    --oa-widget-reviews-color: ${s()};
    --oa-widget-reviews-box-shadow: ${_()}em ${x()}em ${w()}em ${b()};
    --oa-widget-reviews-border-radius: ${y()}em;
  }
</style>
<div class="oa-widget-reviews-wrapper">
    <review-widget website="${f()}" property="${S()}" href="${T()}"></review-widget>
</div>`),e}})]}})};L(["input"]);const ge=a("<header></header>",2),pe=u.main`
  max-width: 1000px;
  margin: auto;
`;function we(){const[l,c]=o(0),p=[{label:"Review"},{label:"Quote"},{label:"Tab 3"}];return[(()=>{const s=n(ge);return X(s,t(q,{tabs:p,activeTab:0,onChange:c})),s})(),t(pe,{get children(){return[v(()=>v(()=>l()===1)()&&t(G,{})),v(()=>v(()=>l()===0)()&&t(ce,{}))]}})]}export{we as default};
