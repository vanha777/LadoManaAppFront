import{au as x,F as C,ac as e,as as h,aN as r,aB as t,fo as g,ae as l,an as s,bi as j,ah as b,be as y,ai as f,aj as k}from"./index-kAVNsXXW.js";import{u as v}from"./useCopyToClipboard-4iGMhLUz.js";import{u as T}from"./useDoubleClick-jJv6AhXe.js";import{C as P}from"./CustomBreadcrumbs-07KkEdSP.js";import{C as q}from"./Card-yNtnckip.js";function A(){const{enqueueSnackbar:c}=x(),{copy:u}=v(),[a,p]=C.useState("https://www.npmjs.com/package/"),i=`Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
  Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat
  dolor lectus quis orci. Cras non dolor. Praesent egestas neque eu enim. Ut varius
  tincidunt libero. Fusce fermentum odio nec arcu. Etiam rhoncus. Nulla sit amet est.
  Donec posuere vulputate arcu. Vestibulum ullamcorper mauris at ligula. Praesent ut
  ligula non mi varius sagittis. Pellentesque posuere. Praesent adipiscing. Sed
  libero. Duis leo. Nulla porta dolor.`,n=o=>{o&&(c("Copied!"),u(o))},d=T({doubleClick:()=>n(i)}),m=o=>{p(o.target.value)};return e.jsxs(e.Fragment,{children:[e.jsx(h,{children:e.jsx("title",{children:" Extra Components: Copy To Clipboard | Minimal UI"})}),e.jsx(r,{sx:{pt:6,pb:1,bgcolor:o=>o.palette.mode==="light"?"grey.200":"grey.800"},children:e.jsx(t,{children:e.jsx(P,{heading:"Copy To Clipboard",links:[{name:"Components",href:g.components},{name:"Copy To Clipboard"}]})})}),e.jsx(t,{sx:{my:10},children:e.jsx(q,{sx:{p:5},children:e.jsxs(r,{display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},gap:5,children:[e.jsxs(l,{spacing:2,children:[e.jsx(s,{variant:"overline",sx:{color:"text.secondary"},children:"on Change"}),e.jsx(j,{fullWidth:!0,value:a,onChange:m,InputProps:{endAdornment:e.jsx(b,{position:"end",children:e.jsx(y,{title:"Copy",children:e.jsx(f,{onClick:()=>n(a),children:e.jsx(k,{icon:"eva:copy-fill",width:24})})})})}})]}),e.jsxs(l,{spacing:2,children:[e.jsx(s,{variant:"overline",sx:{color:"text.secondary"},children:"on Double Click"}),e.jsx(s,{onClick:d,children:i})]})]})})})]})}export{A as default};
