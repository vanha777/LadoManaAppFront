import{F as h,ac as l,as as j,aN as x,aB as u,fo as p,ae as b,aj as i}from"./index-kAVNsXXW.js";import{C as f}from"./CustomBreadcrumbs-07KkEdSP.js";import{B as o}from"./Block-GOmpvx5w.js";import{M as g}from"./Masonry-3kExvnkR.js";import{T as c,a as t}from"./Tabs-vRgd6uc9.js";import"./CardHeader-cbPk7NV8.js";import"./KeyboardArrowRight-6uRlvlB4.js";const r={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{mx:"8px !important"}},s=[{value:"one",icon:l.jsx(i,{icon:"eva:phone-call-fill",width:24}),label:"Item One"},{value:"two",icon:l.jsx(i,{icon:"eva:heart-fill",width:24}),label:"Item Two"},{value:"three",icon:l.jsx(i,{icon:"eva:headphones-fill",width:24}),label:"Item Three",disabled:!0},{value:"four",icon:l.jsx(i,{icon:"eva:headphones-fill",width:24}),label:"Item Four"},{value:"five",icon:l.jsx(i,{icon:"eva:headphones-fill",width:24}),label:"Item Five",disabled:!0},{value:"six",icon:l.jsx(i,{icon:"eva:headphones-fill",width:24}),label:"Item Six"},{value:"seven",icon:l.jsx(i,{icon:"eva:headphones-fill",width:24}),label:"Item Seven"}];function P(){const[n,d]=h.useState("one"),[v,m]=h.useState("one");return l.jsxs(l.Fragment,{children:[l.jsx(j,{children:l.jsx("title",{children:" MUI Components: Tabs | Minimal UI"})}),l.jsx(x,{sx:{pt:6,pb:1,bgcolor:e=>e.palette.mode==="light"?"grey.200":"grey.800"},children:l.jsx(u,{children:l.jsx(f,{heading:"Tabs",links:[{name:"Components",href:p.components},{name:"Tabs"}],moreLink:["https://mui.com/components/tabs"]})})}),l.jsx(u,{sx:{my:10},children:l.jsxs(g,{columns:{xs:1,md:2},spacing:3,children:[l.jsx(o,{title:"Text",sx:r,children:l.jsxs(b,{spacing:2,sx:{width:1},children:[l.jsx(c,{value:n,onChange:(e,a)=>d(a),children:s.slice(0,3).map(e=>l.jsx(t,{value:e.value,label:e.label},e.value))}),s.slice(0,3).map(e=>e.value===n&&l.jsx(x,{sx:{p:2,borderRadius:1,bgcolor:"background.neutral"},children:e.label},e.value))]})}),l.jsx(o,{title:"Icon",sx:r,children:l.jsx(c,{value:n,onChange:(e,a)=>d(a),children:s.slice(0,3).map(e=>l.jsx(t,{icon:e.icon,value:e.value},e.value))})}),l.jsx(o,{title:"Top",sx:r,children:l.jsx(c,{value:n,onChange:(e,a)=>d(a),children:s.slice(0,3).map(e=>l.jsx(t,{iconPosition:"top",icon:e.icon,label:e.label,value:e.value,disabled:e.disabled},e.value))})}),l.jsx(o,{title:"Bottom",sx:r,children:l.jsx(c,{value:n,onChange:(e,a)=>d(a),children:s.slice(0,3).map(e=>l.jsx(t,{iconPosition:"bottom",icon:e.icon,label:e.label,value:e.value,disabled:e.disabled},e.value))})}),l.jsx(o,{title:"Start",sx:r,children:l.jsx(c,{value:n,onChange:(e,a)=>d(a),children:s.slice(0,3).map(e=>l.jsx(t,{icon:e.icon,label:e.label,value:e.value,disabled:e.disabled},e.value))})}),l.jsx(o,{title:"End",sx:r,children:l.jsx(c,{value:n,onChange:(e,a)=>d(a),children:s.slice(0,3).map(e=>l.jsx(t,{iconPosition:"end",icon:e.icon,label:e.label,value:e.value,disabled:e.disabled},e.value))})}),l.jsx(o,{title:"Scrollable",sx:r,children:l.jsx(x,{sx:{flexGrow:1,width:"100%",maxWidth:320},children:l.jsx(c,{value:v,onChange:(e,a)=>m(a),children:s.map(e=>l.jsx(t,{label:e.label,value:e.value},e.value))})})})]})})]})}export{P as default};
