import{F as c,d7 as M,d6 as N,aJ as g,ba as P,cE as n,d8 as G,cF as j,dx as T,ac as l,da as v,dd as k,dK as U,dh as W}from"./index-kAVNsXXW.js";const q=c.createContext({}),V=q;function _(o){return N("MuiAccordion",o)}const L=M("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]),R=L,F=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"],H=o=>{const{classes:s,square:e,expanded:t,disabled:a,disableGutters:i}=o;return k({root:["root",!e&&"rounded",t&&"expanded",a&&"disabled",!i&&"gutters"],region:["region"]},_,s)},J=g(P,{name:"MuiAccordion",slot:"Root",overridesResolver:(o,s)=>{const{ownerState:e}=o;return[{[`& .${R.region}`]:s.region},s.root,!e.square&&s.rounded,!e.disableGutters&&s.gutters]}})(({theme:o})=>{const s={duration:o.transitions.duration.shortest};return{position:"relative",transition:o.transitions.create(["margin"],s),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(o.vars||o).palette.divider,transition:o.transitions.create(["opacity","background-color"],s)},"&:first-of-type":{"&:before":{display:"none"}},[`&.${R.expanded}`]:{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}},[`&.${R.disabled}`]:{backgroundColor:(o.vars||o).palette.action.disabledBackground}}},({theme:o,ownerState:s})=>n({},!s.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(o.vars||o).shape.borderRadius,borderTopRightRadius:(o.vars||o).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(o.vars||o).shape.borderRadius,borderBottomRightRadius:(o.vars||o).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!s.disableGutters&&{[`&.${R.expanded}`]:{margin:"16px 0"}})),K=c.forwardRef(function(s,e){const t=G({props:s,name:"MuiAccordion"}),{children:a,className:i,defaultExpanded:d=!1,disabled:u=!1,disableGutters:m=!1,expanded:h,onChange:x,square:y=!1,TransitionComponent:C=U,TransitionProps:A}=t,$=j(t,F),[r,p]=T({controlled:h,default:d,name:"Accordion",state:"expanded"}),f=c.useCallback(E=>{p(!r),x&&x(E,!r)},[r,x,p]),[S,...w]=c.Children.toArray(a),B=c.useMemo(()=>({expanded:r,disabled:u,disableGutters:m,toggle:f}),[r,u,m,f]),D=n({},t,{square:y,disabled:u,disableGutters:m,expanded:r}),I=H(D);return l.jsxs(J,n({className:v(I.root,i),ref:e,ownerState:D,square:y},$,{children:[l.jsx(V.Provider,{value:B,children:S}),l.jsx(C,n({in:r,timeout:"auto"},A,{children:l.jsx("div",{"aria-labelledby":S.props.id,id:S.props["aria-controls"],role:"region",className:I.region,children:w})}))]}))}),co=K;function O(o){return N("MuiAccordionDetails",o)}M("MuiAccordionDetails",["root"]);const z=["className"],Q=o=>{const{classes:s}=o;return k({root:["root"]},O,s)},X=g("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(o,s)=>s.root})(({theme:o})=>({padding:o.spacing(1,2,2)})),Y=c.forwardRef(function(s,e){const t=G({props:s,name:"MuiAccordionDetails"}),{className:a}=t,i=j(t,z),d=t,u=Q(d);return l.jsx(X,n({className:v(u.root,a),ref:e,ownerState:d},i))}),lo=Y;function Z(o){return N("MuiAccordionSummary",o)}const oo=M("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),b=oo,so=["children","className","expandIcon","focusVisibleClassName","onClick"],eo=o=>{const{classes:s,expanded:e,disabled:t,disableGutters:a}=o;return k({root:["root",e&&"expanded",t&&"disabled",!a&&"gutters"],focusVisible:["focusVisible"],content:["content",e&&"expanded",!a&&"contentGutters"],expandIconWrapper:["expandIconWrapper",e&&"expanded"]},Z,s)},to=g(W,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(o,s)=>s.root})(({theme:o,ownerState:s})=>{const e={duration:o.transitions.duration.shortest};return n({display:"flex",minHeight:48,padding:o.spacing(0,2),transition:o.transitions.create(["min-height","background-color"],e),[`&.${b.focusVisible}`]:{backgroundColor:(o.vars||o).palette.action.focus},[`&.${b.disabled}`]:{opacity:(o.vars||o).palette.action.disabledOpacity},[`&:hover:not(.${b.disabled})`]:{cursor:"pointer"}},!s.disableGutters&&{[`&.${b.expanded}`]:{minHeight:64}})}),ro=g("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(o,s)=>s.content})(({theme:o,ownerState:s})=>n({display:"flex",flexGrow:1,margin:"12px 0"},!s.disableGutters&&{transition:o.transitions.create(["margin"],{duration:o.transitions.duration.shortest}),[`&.${b.expanded}`]:{margin:"20px 0"}})),ao=g("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(o,s)=>s.expandIconWrapper})(({theme:o})=>({display:"flex",color:(o.vars||o).palette.action.active,transform:"rotate(0deg)",transition:o.transitions.create("transform",{duration:o.transitions.duration.shortest}),[`&.${b.expanded}`]:{transform:"rotate(180deg)"}})),no=c.forwardRef(function(s,e){const t=G({props:s,name:"MuiAccordionSummary"}),{children:a,className:i,expandIcon:d,focusVisibleClassName:u,onClick:m}=t,h=j(t,so),{disabled:x=!1,disableGutters:y,expanded:C,toggle:A}=c.useContext(V),$=f=>{A&&A(f),m&&m(f)},r=n({},t,{expanded:C,disabled:x,disableGutters:y}),p=eo(r);return l.jsxs(to,n({focusRipple:!1,disableRipple:!0,disabled:x,component:"div","aria-expanded":C,className:v(p.root,i),focusVisibleClassName:v(p.focusVisible,u),onClick:$,ref:e,ownerState:r},h,{children:[l.jsx(ro,{className:p.content,ownerState:r,children:a}),d&&l.jsx(ao,{className:p.expandIconWrapper,ownerState:r,children:d})]}))}),uo=no;export{co as A,uo as a,lo as b};
