import{d6 as c,d7 as p,aJ as u,cE as i,F as g,d8 as v,cF as x,ac as C,da as f,dd as m}from"./index-kAVNsXXW.js";import{d as D}from"./dialogTitleClasses-wpKycvDL.js";function w(o){return c("MuiDialogContent",o)}p("MuiDialogContent",["root","dividers"]);const R=["className","dividers"],b=o=>{const{classes:s,dividers:t}=o;return m({root:["root",t&&"dividers"]},w,s)},y=u("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(o,s)=>{const{ownerState:t}=o;return[s.root,t.dividers&&s.dividers]}})(({theme:o,ownerState:s})=>i({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},s.dividers?{padding:"16px 24px",borderTop:`1px solid ${(o.vars||o).palette.divider}`,borderBottom:`1px solid ${(o.vars||o).palette.divider}`}:{[`.${D.root} + &`]:{paddingTop:0}})),M=g.forwardRef(function(s,t){const e=v({props:s,name:"MuiDialogContent"}),{className:r,dividers:n=!1}=e,d=x(e,R),a=i({},e,{dividers:n}),l=b(a);return C.jsx(y,i({className:f(l.root,r),ownerState:a,ref:t},d))}),$=M;export{$ as D};
