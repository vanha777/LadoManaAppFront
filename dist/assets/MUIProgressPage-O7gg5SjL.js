import{ac as e,ba as a,aV as x,aM as f,cu as n,F as l,as as P,aN as L,aB as h,fo as I,ae as M}from"./index-kAVNsXXW.js";import{C as B}from"./CustomBreadcrumbs-07KkEdSP.js";import{L as o,B as v}from"./Block-GOmpvx5w.js";import{M as g}from"./Masonry-3kExvnkR.js";import"./CardHeader-cbPk7NV8.js";const d=["inherit","primary","secondary","info","success","warning","error"],m={p:2,minHeight:160,display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center","& > *":{m:1}};y.propTypes={buffer:f.number,progress:f.number};function y({progress:s,buffer:t}){return e.jsxs(g,{columns:{xs:1,md:2},spacing:3,children:[e.jsxs("div",{children:[e.jsx(o,{title:"Linears Indeterminate"}),e.jsx(a,{variant:"outlined",sx:m,children:d.map(r=>e.jsx(x,{color:r,sx:{mb:2,width:1}},r))})]}),e.jsxs("div",{children:[e.jsx(o,{title:"Linears Determinate"}),e.jsx(a,{variant:"outlined",sx:m,children:d.map(r=>e.jsx(x,{color:r,value:s,variant:"determinate",sx:{mb:2,width:1}},r))})]}),e.jsxs("div",{children:[e.jsx(o,{title:"Linears Buffer"}),e.jsx(a,{variant:"outlined",sx:m,children:d.map(r=>e.jsx(x,{color:r,variant:"buffer",value:s,valueBuffer:t,sx:{mb:2,width:1}},r))})]}),e.jsxs("div",{children:[e.jsx(o,{title:"Linears Query"}),e.jsx(a,{variant:"outlined",sx:m,children:d.map(r=>e.jsx(x,{color:r,variant:"query",value:s,valueBuffer:t,sx:{mb:2,width:1}},r))})]})]})}const u={minHeight:160,display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center","& > *":{m:1}},w=["inherit","primary","secondary","info","success","warning","error"];C.propTypes={progress:f.number};function C({progress:s}){return e.jsxs(g,{columns:{xs:1,md:3},spacing:3,children:[e.jsxs("div",{children:[e.jsx(o,{title:"Circular Indeterminate"}),e.jsx(a,{variant:"outlined",sx:u,children:w.map(t=>e.jsx(n,{color:t},t))})]}),e.jsxs("div",{children:[e.jsx(o,{title:"Circular determinate"}),e.jsxs(a,{variant:"outlined",sx:u,children:[e.jsx(n,{color:"info"}),e.jsx(n,{color:"info",variant:"determinate",value:25}),e.jsx(n,{color:"info",variant:"determinate",value:50}),e.jsx(n,{color:"info",variant:"determinate",value:75}),e.jsx(n,{color:"info",variant:"determinate",value:100}),e.jsx(n,{color:"info",variant:"determinate",value:s})]})]}),e.jsxs("div",{children:[e.jsx(o,{title:"Circular Size"}),e.jsxs(a,{variant:"outlined",sx:u,children:[e.jsx(n,{size:48,color:"info"}),e.jsx(n,{color:"info"}),e.jsx(n,{size:32,color:"info"}),e.jsx(n,{size:24,color:"info"})]})]})]})}function O(){const[s,t]=l.useState(0),[r,j]=l.useState(10);l.useEffect(()=>{const i=setInterval(()=>{t(c=>{if(c===100)return 0;const b=Math.random()*10;return Math.min(c+b,100)})},500);return()=>{clearInterval(i)}},[]);const p=l.useRef(()=>{});return l.useEffect(()=>{p.current=()=>{if(s>100)t(0),j(10);else{const i=Math.random()*10,c=Math.random()*10;t(s+i),j(s+i+c)}}}),l.useEffect(()=>{const i=setInterval(()=>{p.current()},500);return()=>{clearInterval(i)}},[]),e.jsxs(e.Fragment,{children:[e.jsx(P,{children:e.jsx("title",{children:" MUI Components: Progress | Minimal UI"})}),e.jsx(L,{sx:{pt:6,pb:1,bgcolor:i=>i.palette.mode==="light"?"grey.200":"grey.800"},children:e.jsx(h,{children:e.jsx(B,{heading:"Progress",links:[{name:"Components",href:I.components},{name:"Progress"}],moreLink:["https://mui.com/components/progress"]})})}),e.jsx(h,{sx:{my:10},children:e.jsxs(M,{spacing:5,children:[e.jsx(v,{title:"Circular",children:e.jsx(C,{progress:s})}),e.jsx(v,{title:"Linear",children:e.jsx(y,{progress:s,buffer:r})})]})})]})}export{O as default};