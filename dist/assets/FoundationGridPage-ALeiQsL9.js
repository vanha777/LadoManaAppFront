import{az as S,F as i,ac as e,as as C,aN as y,aB as l,fo as f,ae as G,an as v,ba as o,bO as c,b6 as d,bP as x,aJ as B}from"./index-kAVNsXXW.js";import{C as w}from"./CustomBreadcrumbs-07KkEdSP.js";import{B as m}from"./Block-GOmpvx5w.js";import{G as s}from"./Grid-UjSMx0L8.js";import"./CardHeader-cbPk7NV8.js";const k=["1col","2col","3col","4col","6col","12col"],p=B(o)(({theme:t})=>({padding:t.spacing(5),border:`solid 1px ${t.palette.divider}`,borderRadius:Number(t.shape.borderRadius)*1.5,backgroundColor:t.palette.grey[t.palette.mode==="light"?100:800]}));function E(){const t=S(),[a,u]=i.useState(2),[r,g]=i.useState(3),h=n=>{u(Number(n.target.value))},j=n=>{g(Number(n.target.value))};return e.jsxs(e.Fragment,{children:[e.jsx(C,{children:e.jsx("title",{children:" Foundations: Grid | Minimal UI"})}),e.jsx(y,{sx:{pt:6,pb:1,bgcolor:t.palette.mode==="light"?"grey.200":"grey.800"},children:e.jsx(l,{children:e.jsx(w,{heading:"Grid",links:[{name:"Components",href:f.components},{name:"Grid"}]})})}),e.jsx(l,{sx:{my:10},children:e.jsxs(G,{spacing:5,children:[e.jsx(m,{title:"Spacing",children:e.jsxs(p,{variant:"outlined",children:[e.jsxs(v,{variant:"body2",sx:{mb:3,textAlign:"center"},children:["Spacing: ",e.jsx("strong",{children:t.spacing(Number(a))})]}),e.jsx(s,{container:!0,spacing:a,children:[0,1,2,3,4,5,6,7,8,9,10,11].map(n=>e.jsx(s,{item:!0,xs:1,children:e.jsx(o,{sx:{height:80,boxShadow:t.customShadows.z8}})},n))}),e.jsx(c,{row:!0,name:"spacing",value:a.toString(),onChange:h,sx:{mt:3,display:"flex",justifyContent:"center"},children:[0,1,2,3,4,5,6,7,8,9,10].map(n=>e.jsx(d,{value:n.toString(),label:n.toString(),control:e.jsx(x,{})},n))})]})}),e.jsx(m,{title:"Column",children:e.jsxs(p,{variant:"outlined",children:[e.jsx(s,{container:!0,spacing:3,children:[0,1,2,3,4,5,6,7,8,9,10,11].map(n=>e.jsx(s,{item:!0,xs:r,children:e.jsxs(o,{sx:{py:3,textAlign:"center",boxShadow:t.customShadows.z8},children:["xs = ",r]})},n))}),e.jsx(c,{row:!0,name:"column",value:r.toString(),onChange:j,sx:{mt:3,display:"flex",justifyContent:"center"},children:[12,6,4,3,2,1].map((n,b)=>e.jsx(d,{value:n.toString(),label:k[b],control:e.jsx(x,{})},n))})]})})]})})]})}export{E as default};
