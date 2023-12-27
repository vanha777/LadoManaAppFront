import{aJ as w,an as j,cE as h,F as y,d8 as O,cF as I,ac as e,da as P,dd as E,as as R,aN as N,aB as f,fo as S,ba as A,aL as B,aj as l}from"./index-kAVNsXXW.js";import{C as L}from"./CustomBreadcrumbs-07KkEdSP.js";import{B as r}from"./Block-GOmpvx5w.js";import{M as U}from"./Masonry-3kExvnkR.js";import{f as T,g as F,h as _,T as a,a as c,b as d,c as x,d as m,e as p}from"./TimelineSeparator-1vsZBoTC.js";import"./CardHeader-cbPk7NV8.js";const D=["className"],W=i=>{const{position:t,classes:s}=i,n={root:["root",T(t)]};return E(n,_,s)},z=w(j,{name:"MuiTimelineOppositeContent",slot:"Root",overridesResolver:(i,t)=>{const{ownerState:s}=i;return[t.root,t[T(s.position)]]}})(({ownerState:i})=>h({padding:"6px 16px",marginRight:"auto",textAlign:"right",flex:1},i.position==="left"&&{textAlign:"left"})),k=y.forwardRef(function(t,s){const n=O({props:t,name:"MuiTimelineOppositeContent"}),{className:C}=n,b=I(n,D),{position:v}=y.useContext(F),u=h({},n,{position:v||"left"}),M=W(u);return e.jsx(z,h({component:"div",className:P(M.root,C),ownerState:u,ref:s},b))});k.muiName="TimelineOppositeContent";const g=k,o=[{key:1,title:"Default",des:"Morbi mattis ullamcorper",time:"09:30 am",icon:e.jsx(l,{icon:"eva:folder-add-fill",width:24})},{key:2,title:"Primary",des:"Morbi mattis ullamcorper",time:"10:00 am",color:"primary",icon:e.jsx(l,{icon:"eva:image-2-fill",width:24})},{key:3,title:"Secondary",des:"Morbi mattis ullamcorper",time:"10:00 am",color:"secondary",icon:e.jsx(l,{icon:"eva:pantone-fill",width:24})},{key:4,title:"Info",des:"Morbi mattis ullamcorper",time:"10:30 am",color:"info",icon:e.jsx(l,{icon:"eva:tv-fill",width:24})},{key:5,title:"Success",des:"Morbi mattis ullamcorper",time:"11:00 am",color:"success",icon:e.jsx(l,{icon:"eva:activity-fill",width:24})},{key:6,title:"Warning",des:"Morbi mattis ullamcorper",time:"11:30 am",color:"warning",icon:e.jsx(l,{icon:"eva:cube-fill",width:24})},{key:7,title:"Error",des:"Morbi mattis ullamcorper",time:"12:00 am",color:"error",icon:e.jsx(l,{icon:"eva:film-fill",width:24})}];function Q(){const i=o[o.length-1].key,t=o.slice(o.length-3);return e.jsxs(e.Fragment,{children:[e.jsx(R,{children:e.jsx("title",{children:" MUI Components: Timeline | Minimal UI"})}),e.jsx(N,{sx:{pt:6,pb:1,bgcolor:s=>s.palette.mode==="light"?"grey.200":"grey.800"},children:e.jsx(f,{children:e.jsx(L,{heading:"Timeline",links:[{name:"Components",href:S.components},{name:"Timeline"}],moreLink:["https://mui.com/components/timeline"]})})}),e.jsxs(f,{sx:{my:10},children:[e.jsxs(U,{columns:{xs:1,md:3},spacing:3,children:[e.jsx(r,{title:"Default",children:e.jsx(a,{children:t.map(s=>e.jsxs(c,{children:[e.jsxs(d,{children:[e.jsx(x,{}),i===s.key?null:e.jsx(m,{})]}),e.jsx(p,{children:s.title})]},s.key))})}),e.jsx(r,{title:"Right",children:e.jsx(a,{position:"right",children:t.map(s=>e.jsxs(c,{children:[e.jsxs(d,{children:[e.jsx(x,{}),i===s.key?null:e.jsx(m,{})]}),e.jsx(p,{children:s.title})]},s.key))})}),e.jsx(r,{title:"Alternating",children:e.jsx(a,{position:"alternate",children:t.map(s=>e.jsxs(c,{children:[e.jsxs(d,{children:[e.jsx(x,{}),i===s.key?null:e.jsx(m,{})]}),e.jsx(p,{children:s.title})]},s.key))})}),e.jsx(r,{title:"Filled",children:e.jsx(a,{position:"alternate",children:o.map(s=>e.jsxs(c,{children:[e.jsxs(d,{children:[e.jsx(x,{color:s.color}),i===s.key?null:e.jsx(m,{})]}),e.jsx(p,{children:s.title})]},s.key))})}),e.jsx(r,{title:"Outlined",children:e.jsx(a,{position:"alternate",children:o.map(s=>e.jsxs(c,{children:[e.jsxs(d,{children:[e.jsx(x,{variant:"outlined",color:s.color}),i===s.key?null:e.jsx(m,{})]}),e.jsx(p,{children:s.title})]},s.key))})}),e.jsx(r,{title:"Opposite content",children:e.jsx(a,{position:"alternate",children:o.map(s=>e.jsxs(c,{children:[e.jsx(g,{children:e.jsx(j,{sx:{color:"text.secondary"},children:s.time})}),e.jsxs(d,{children:[e.jsx(x,{color:s.color}),i===s.key?null:e.jsx(m,{})]}),e.jsx(p,{children:e.jsxs(j,{children:[" ",s.title]})})]},s.key))})})]}),e.jsx(r,{title:"Customized",children:e.jsx(a,{position:"alternate",children:o.map(s=>e.jsxs(c,{children:[e.jsx(g,{children:e.jsx(j,{variant:"body2",sx:{color:"text.secondary"},children:s.time})}),e.jsxs(d,{children:[e.jsx(x,{color:s.color,children:s.icon}),e.jsx(m,{})]}),e.jsx(p,{children:e.jsxs(A,{sx:{p:3,bgcolor:n=>B(n.palette.grey[500],.12)},children:[e.jsx(j,{variant:"subtitle2",children:s.title}),e.jsx(j,{variant:"body2",sx:{color:"text.secondary"},children:s.des})]})})]},s.key))})})]})]})}export{Q as default};