import{au as d,ac as n,as as x,aN as m,aB as s,fo as f,aD as i}from"./index-kAVNsXXW.js";import{C as u}from"./CustomBreadcrumbs-07KkEdSP.js";import{B as t}from"./Block-GOmpvx5w.js";import{M as j}from"./Masonry-3kExvnkR.js";import"./CardHeader-cbPk7NV8.js";const e={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{mx:"8px !important"}};function b(){const{enqueueSnackbar:r,closeSnackbar:l}=d(),a=(o,h)=>{r(`This is an ${o}`,{variant:o,anchorOrigin:h,action:c=>n.jsxs(n.Fragment,{children:[n.jsx(i,{size:"small",color:o!=="default"?o:"primary",onClick:()=>{console.log(`I belong to snackbar with key ${c}`)},children:"Alert"}),n.jsx(i,{size:"small",color:"inherit",onClick:()=>l(c),children:"Dismiss"})]})})};return n.jsxs(n.Fragment,{children:[n.jsx(x,{children:n.jsx("title",{children:" Extra Components: Snackbar | Minimal UI"})}),n.jsx(m,{sx:{pt:6,pb:1,bgcolor:o=>o.palette.mode==="light"?"grey.200":"grey.800"},children:n.jsx(s,{children:n.jsx(u,{heading:"Snackbar",links:[{name:"Components",href:f.components},{name:"Snackbar"}],moreLink:["https://mui.com/components/snackbars","https://www.iamhosseindhv.com/notistack"]})})}),n.jsx(s,{sx:{my:10},children:n.jsxs(j,{columns:{xs:1,md:2},spacing:3,children:[n.jsxs(t,{title:"Simple",sx:e,children:[n.jsx(i,{variant:"contained",color:"inherit",onClick:()=>r("This is an default",{variant:"default"}),children:"Default"}),n.jsx(i,{variant:"contained",color:"info",onClick:()=>r("This is an info",{variant:"info"}),children:"Info"}),n.jsx(i,{variant:"contained",color:"success",onClick:()=>r("This is an success",{}),children:"Success"}),n.jsx(i,{variant:"contained",color:"warning",onClick:()=>r("This is an warning",{variant:"warning"}),children:"Warning"}),n.jsx(i,{variant:"contained",color:"error",onClick:()=>r("This is an error",{variant:"error"}),children:"Error"})]}),n.jsxs(t,{title:"With Close",sx:e,children:[n.jsx(i,{variant:"contained",color:"inherit",onClick:()=>r("This is an default",{variant:"default"}),children:"Default"}),n.jsx(i,{variant:"contained",color:"info",onClick:()=>r("This is an info",{variant:"info"}),children:"Info"}),n.jsx(i,{variant:"contained",color:"success",onClick:()=>r("This is an success",{variant:"success"}),children:"Success"}),n.jsx(i,{variant:"contained",color:"warning",onClick:()=>r("This is an warning",{variant:"warning"}),children:"Warning"}),n.jsx(i,{variant:"contained",color:"error",onClick:()=>r("This is an error",{variant:"error"}),children:"Error"})]}),n.jsxs(t,{title:"With Action",sx:e,children:[n.jsx(i,{variant:"contained",color:"inherit",onClick:()=>a("default"),children:"Default"}),n.jsx(i,{variant:"contained",color:"info",onClick:()=>a("info"),children:"Info"}),n.jsx(i,{variant:"contained",color:"success",onClick:()=>a("success"),children:"Success"}),n.jsx(i,{variant:"contained",color:"warning",onClick:()=>a("warning"),children:"Warning"}),n.jsx(i,{variant:"contained",color:"error",onClick:()=>a("error"),children:"Error"})]}),n.jsxs(t,{title:"anchorOrigin",sx:e,children:[n.jsx(i,{variant:"text",color:"inherit",onClick:()=>a("default",{vertical:"top",horizontal:"left"}),children:"Top Left"}),n.jsx(i,{variant:"text",color:"inherit",onClick:()=>a("default",{vertical:"top",horizontal:"center"}),children:"Top Center"}),n.jsx(i,{variant:"text",color:"inherit",onClick:()=>a("default"),children:"Top Right"}),n.jsx(i,{variant:"text",color:"inherit",onClick:()=>a("default",{vertical:"bottom",horizontal:"left"}),children:"Bottom Left"}),n.jsx(i,{variant:"text",color:"inherit",onClick:()=>a("default",{vertical:"bottom",horizontal:"center"}),children:"Bottom Center"}),n.jsx(i,{variant:"text",color:"inherit",onClick:()=>a("default",{vertical:"bottom",horizontal:"right"}),children:"Bottom Right"})]})]})})]})}export{b as default};