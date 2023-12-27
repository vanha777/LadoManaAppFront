import{F as d,ac as e,as as g,aN as x,aB as p,fo as y,ae as C,aj as h,bf as l,aL as V,an as j}from"./index-kAVNsXXW.js";import{C as L}from"./CustomBreadcrumbs-07KkEdSP.js";import{B as t}from"./Block-GOmpvx5w.js";import{M as k}from"./Masonry-3kExvnkR.js";import"./CardHeader-cbPk7NV8.js";const m=[{value:0,label:"0°C"},{value:20,label:"20°C"},{value:37,label:"37°C"},{value:100,label:"100°C"}],S=[{value:0,label:"$0"},{value:25,label:"250"},{value:50,label:"500"},{value:75,label:"750"},{value:100,label:"1000"}],s={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{mx:"8px !important"}};function c(a){return a>0?`$${a}0`:`${a}`}function T(a){return a>0?`$${a}`:a}function r(a){return`$${a}°C`}function A(a){return m.findIndex(n=>n.value===a)+1}function P(){const[a,n]=d.useState(30),[u,b]=d.useState([20,37]),v=(i,o)=>{n(o)},f=(i,o)=>{b(o)};return e.jsxs(e.Fragment,{children:[e.jsx(g,{children:e.jsx("title",{children:" MUI Components: Slider | Minimal UI"})}),e.jsx(x,{sx:{pt:6,pb:1,bgcolor:i=>i.palette.mode==="light"?"grey.200":"grey.800"},children:e.jsx(p,{children:e.jsx(L,{heading:"Slider",links:[{name:"Components",href:y.components},{name:"Slider"}],moreLink:["https://mui.com/components/slider"]})})}),e.jsx(p,{sx:{my:10},children:e.jsxs(k,{columns:{xs:1,md:3},spacing:3,children:[e.jsx(t,{title:"Volume",sx:s,children:e.jsxs(C,{direction:"row",alignItems:"center",spacing:1,width:1,children:[e.jsx(h,{icon:"eva:volume-mute-fill",width:24}),e.jsx(l,{value:a,onChange:v,"aria-labelledby":"continuous-slider"}),e.jsx(h,{icon:"eva:volume-up-fill",width:24})]})}),e.jsx(t,{title:"Disabled",sx:s,children:e.jsx(l,{disabled:!0,defaultValue:30})}),e.jsx(t,{title:"Temperature",sx:s,children:e.jsx(l,{defaultValue:30,getAriaValueText:r,valueLabelDisplay:"auto",step:10,marks:!0,min:10,max:110})}),e.jsxs(t,{title:"Size",sx:s,children:[e.jsx(l,{size:"medium",marks:!0,min:10,step:10,max:110,defaultValue:30,valueLabelDisplay:"auto",getAriaValueText:r}),e.jsx(l,{marks:!0,min:10,step:10,max:110,defaultValue:30,valueLabelDisplay:"auto",getAriaValueText:r})]}),e.jsx(t,{title:"Small steps",sx:s,children:e.jsx(l,{defaultValue:5e-8,getAriaValueText:r,step:1e-8,marks:!0,min:-5e-8,max:1e-7,valueLabelDisplay:"auto"})}),e.jsx(t,{title:"Custom marks",sx:s,children:e.jsx(l,{defaultValue:20,getAriaValueText:r,step:10,valueLabelDisplay:"auto",marks:m})}),e.jsx(t,{title:"Restricted values",sx:s,children:e.jsx(l,{defaultValue:20,valueLabelFormat:A,getAriaValueText:r,step:null,valueLabelDisplay:"auto",marks:m})}),e.jsxs(t,{title:"Range",sx:s,children:[e.jsx(x,{sx:{width:"100%"},children:e.jsx(l,{scale:i=>i*10,step:10,marks:S,value:u,onChange:f,valueLabelDisplay:"on",getAriaValueText:c,valueLabelFormat:T})}),e.jsxs(x,{sx:{p:2,width:"100%",borderRadius:1,bgcolor:i=>V(i.palette.grey[500],.12)},children:[e.jsxs(j,{variant:"subtitle2",gutterBottom:!0,children:["Min: ",c(u[0])]}),e.jsxs(j,{variant:"subtitle2",children:["Max: ",c(u[1])]})]})]})]})})]})}export{P as default};
