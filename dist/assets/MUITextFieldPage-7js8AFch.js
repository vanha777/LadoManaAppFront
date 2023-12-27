import{aM as W,F as c,ac as e,bi as t,ah as i,aj as u,ai as C,b4 as T,as as v,aN as f,aB as j,fo as I}from"./index-kAVNsXXW.js";import{C as M}from"./CustomBreadcrumbs-07KkEdSP.js";import{B as n}from"./Block-GOmpvx5w.js";import{M as S}from"./Masonry-3kExvnkR.js";import{T as A,a as V}from"./Tabs-vRgd6uc9.js";import"./CardHeader-cbPk7NV8.js";import"./KeyboardArrowRight-6uRlvlB4.js";const b=[{value:"USD",label:"$"},{value:"EUR",label:"€"},{value:"BTC",label:"฿"},{value:"JPY",label:"¥"}],o={"& > *":{my:"8px !important"}};h.propTypes={variant:W.string};function h({variant:l}){const[d,r]=c.useState("EUR"),[a,x]=c.useState({amount:"",password:"",weight:"",weightRange:"",showPassword:!1}),p=s=>{r(s.target.value)},m=s=>P=>{x({...a,[s]:P.target.value})},g=()=>{x({...a,showPassword:!a.showPassword})},y=s=>{s.preventDefault()};return e.jsxs(S,{columns:{xs:1,md:2},spacing:3,children:[e.jsxs(n,{title:"General",sx:o,children:[e.jsx(t,{variant:l,fullWidth:!0,label:"Inactive"}),e.jsx(t,{variant:l,required:!0,fullWidth:!0,label:"Activated",defaultValue:"Hello Minimal"}),e.jsx(t,{variant:l,fullWidth:!0,type:"password",label:"Password",autoComplete:"current-password"}),e.jsx(t,{variant:l,disabled:!0,fullWidth:!0,label:"Disabled",defaultValue:"Hello Minimal"})]}),e.jsxs(n,{title:"With Icon & Adornments",sx:o,children:[e.jsx(t,{variant:l,fullWidth:!0,label:"Filled",InputProps:{startAdornment:e.jsx(i,{position:"start",children:e.jsx(u,{icon:"eva:person-fill",width:24})})}}),e.jsx(t,{variant:l,disabled:!0,fullWidth:!0,label:"Disabled",defaultValue:"Hello Minimal",InputProps:{startAdornment:e.jsx(i,{position:"start",children:e.jsx(u,{icon:"eva:person-fill",width:24})})}}),e.jsx(t,{variant:l,fullWidth:!0,label:"With normal TextField",InputProps:{startAdornment:e.jsx(i,{position:"start",children:"Kg"})}}),e.jsx(t,{variant:l,fullWidth:!0,value:a.weight,onChange:m("weight"),helperText:"Weight",InputProps:{endAdornment:e.jsx(i,{position:"end",children:"Kg"})}}),e.jsx(t,{variant:l,fullWidth:!0,type:a.showPassword?"text":"password",value:a.password,onChange:m("password"),label:"Password",InputProps:{startAdornment:e.jsx(i,{position:"start",children:e.jsx(u,{icon:"eva:person-fill",width:24})}),endAdornment:e.jsx(i,{position:"end",children:e.jsx(C,{onClick:g,onMouseDown:y,edge:"end",children:a.showPassword?e.jsx(u,{icon:"eva:eye-fill",width:24}):e.jsx(u,{icon:"eva:eye-off-fill",width:24})})})}})]}),e.jsxs(n,{title:"With Caption",sx:o,children:[e.jsx(t,{variant:l,fullWidth:!0,label:"Error",defaultValue:"Hello Minimal",helperText:"Incorrect entry."}),e.jsx(t,{variant:l,error:!0,fullWidth:!0,label:"Error",defaultValue:"Hello Minimal",helperText:"Incorrect entry."})]}),e.jsxs(n,{title:"Type",sx:o,children:[e.jsx(t,{variant:l,fullWidth:!0,type:"password",label:"Password",autoComplete:"current-password"}),e.jsx(t,{variant:l,fullWidth:!0,type:"number",label:"Number",defaultValue:0,InputLabelProps:{shrink:!0}}),e.jsx(t,{variant:l,fullWidth:!0,label:"Search",type:"search"})]}),e.jsxs(n,{title:"Size",sx:o,children:[e.jsx(t,{variant:l,fullWidth:!0,label:"Size",size:"small",defaultValue:"Small"}),e.jsx(t,{variant:l,fullWidth:!0,label:"Size",defaultValue:"Normal"})]}),e.jsxs(n,{title:"Select",sx:o,children:[e.jsx(t,{variant:l,select:!0,fullWidth:!0,label:"Select",value:d,onChange:p,helperText:"Please select your currency",children:b.map(s=>e.jsx(T,{value:s.value,children:s.label},s.value))}),e.jsx(t,{variant:l,select:!0,fullWidth:!0,size:"small",value:d,label:"Native select",SelectProps:{native:!0},onChange:p,helperText:"Please select your currency",children:b.map(s=>e.jsx("option",{value:s.value,children:s.label},s.value))})]}),e.jsxs(n,{title:"Multiline",sx:o,children:[e.jsx(t,{variant:l,fullWidth:!0,label:"Multiline",multiline:!0,maxRows:4,value:"Controlled"}),e.jsx(t,{variant:l,fullWidth:!0,multiline:!0,placeholder:"Placeholder",label:"Multiline Placeholder"}),e.jsx(t,{variant:l,rows:4,fullWidth:!0,multiline:!0,label:"Multiline",defaultValue:"Default Value"})]})]})}const w=[{value:"outlined",label:"Outlined",component:e.jsx(h,{variant:"outlined"})},{value:"filled",label:"Filled",component:e.jsx(h,{variant:"filled"})},{value:"standard",label:"Standard",component:e.jsx(h,{variant:"standard"})}];function H(){const[l,d]=c.useState("outlined");return e.jsxs(e.Fragment,{children:[e.jsx(v,{children:e.jsx("title",{children:" MUI Components: Textfield | Minimal UI"})}),e.jsx(f,{sx:{pt:6,pb:1,bgcolor:r=>r.palette.mode==="light"?"grey.200":"grey.800"},children:e.jsx(j,{children:e.jsx(M,{heading:"Textfield",links:[{name:"Components",href:I.components},{name:"Textfield"}],moreLink:["https://mui.com/components/text-fields"]})})}),e.jsxs(j,{sx:{my:10},children:[e.jsx(A,{value:l,onChange:(r,a)=>d(a),children:w.map(r=>e.jsx(V,{value:r.value,label:r.label},r.value))}),e.jsx("form",{noValidate:!0,autoComplete:"off",children:w.map(r=>r.value===l&&e.jsx(f,{sx:{mt:5},children:r.component},r.value))})]})]})}export{H as default};
