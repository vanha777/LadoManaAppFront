import{F as g,d7 as tn,d6 as on,aJ as rn,cE as b,aL as sn,d8 as an,cF as ln,ac as n,fF as cn,fG as dn,da as un,di as x,dd as xn,ai as B,aj as t,fH as hn,aD as o,aM as jn,ak as M,bG as l,fI as pn,as as mn,aN as Z,aB as _,fo as gn}from"./index-kAVNsXXW.js";import{C as vn}from"./CustomBreadcrumbs-07KkEdSP.js";import{B as s}from"./Block-GOmpvx5w.js";import{M as A}from"./Masonry-3kExvnkR.js";import{T as C,a as d}from"./ToggleButtonGroup-wQIhh8zC.js";import{T as fn,a as bn}from"./Tabs-vRgd6uc9.js";import"./CardHeader-cbPk7NV8.js";import"./KeyboardArrowRight-6uRlvlB4.js";function Bn(e){return g.Children.toArray(e).filter(i=>g.isValidElement(i))}function Cn(e){return on("MuiButtonGroup",e)}const $n=tn("MuiButtonGroup",["root","contained","outlined","text","disableElevation","disabled","firstButton","fullWidth","vertical","grouped","groupedHorizontal","groupedVertical","groupedText","groupedTextHorizontal","groupedTextVertical","groupedTextPrimary","groupedTextSecondary","groupedOutlined","groupedOutlinedHorizontal","groupedOutlinedVertical","groupedOutlinedPrimary","groupedOutlinedSecondary","groupedContained","groupedContainedHorizontal","groupedContainedVertical","groupedContainedPrimary","groupedContainedSecondary","lastButton","middleButton"]),c=$n,Tn=["children","className","color","component","disabled","disableElevation","disableFocusRipple","disableRipple","fullWidth","orientation","size","variant"],yn=(e,i)=>{const{ownerState:r}=e;return[{[`& .${c.grouped}`]:i.grouped},{[`& .${c.grouped}`]:i[`grouped${x(r.orientation)}`]},{[`& .${c.grouped}`]:i[`grouped${x(r.variant)}`]},{[`& .${c.grouped}`]:i[`grouped${x(r.variant)}${x(r.orientation)}`]},{[`& .${c.grouped}`]:i[`grouped${x(r.variant)}${x(r.color)}`]},{[`& .${c.firstButton}`]:i.firstButton},{[`& .${c.lastButton}`]:i.lastButton},{[`& .${c.middleButton}`]:i.middleButton},i.root,i[r.variant],r.disableElevation===!0&&i.disableElevation,r.fullWidth&&i.fullWidth,r.orientation==="vertical"&&i.vertical]},Rn=e=>{const{classes:i,color:r,disabled:p,disableElevation:T,fullWidth:w,orientation:u,variant:j}=e,v={root:["root",j,u==="vertical"&&"vertical",w&&"fullWidth",T&&"disableElevation"],grouped:["grouped",`grouped${x(u)}`,`grouped${x(j)}`,`grouped${x(j)}${x(u)}`,`grouped${x(j)}${x(r)}`,p&&"disabled"],firstButton:["firstButton"],lastButton:["lastButton"],middleButton:["middleButton"]};return xn(v,Cn,i)},On=rn("div",{name:"MuiButtonGroup",slot:"Root",overridesResolver:yn})(({theme:e,ownerState:i})=>b({display:"inline-flex",borderRadius:(e.vars||e).shape.borderRadius},i.variant==="contained"&&{boxShadow:(e.vars||e).shadows[2]},i.disableElevation&&{boxShadow:"none"},i.fullWidth&&{width:"100%"},i.orientation==="vertical"&&{flexDirection:"column"},{[`& .${c.grouped}`]:b({minWidth:40,"&:hover":b({},i.variant==="contained"&&{boxShadow:"none"})},i.variant==="contained"&&{boxShadow:"none"}),[`& .${c.firstButton},& .${c.middleButton}`]:b({},i.orientation==="horizontal"&&{borderTopRightRadius:0,borderBottomRightRadius:0},i.orientation==="vertical"&&{borderBottomRightRadius:0,borderBottomLeftRadius:0},i.variant==="text"&&i.orientation==="horizontal"&&{borderRight:e.vars?`1px solid rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${e.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${c.disabled}`]:{borderRight:`1px solid ${(e.vars||e).palette.action.disabled}`}},i.variant==="text"&&i.orientation==="vertical"&&{borderBottom:e.vars?`1px solid rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${e.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${c.disabled}`]:{borderBottom:`1px solid ${(e.vars||e).palette.action.disabled}`}},i.variant==="text"&&i.color!=="inherit"&&{borderColor:e.vars?`rgba(${e.vars.palette[i.color].mainChannel} / 0.5)`:sn(e.palette[i.color].main,.5)},i.variant==="outlined"&&i.orientation==="horizontal"&&{borderRightColor:"transparent"},i.variant==="outlined"&&i.orientation==="vertical"&&{borderBottomColor:"transparent"},i.variant==="contained"&&i.orientation==="horizontal"&&{borderRight:`1px solid ${(e.vars||e).palette.grey[400]}`,[`&.${c.disabled}`]:{borderRight:`1px solid ${(e.vars||e).palette.action.disabled}`}},i.variant==="contained"&&i.orientation==="vertical"&&{borderBottom:`1px solid ${(e.vars||e).palette.grey[400]}`,[`&.${c.disabled}`]:{borderBottom:`1px solid ${(e.vars||e).palette.action.disabled}`}},i.variant==="contained"&&i.color!=="inherit"&&{borderColor:(e.vars||e).palette[i.color].dark},{"&:hover":b({},i.variant==="outlined"&&i.orientation==="horizontal"&&{borderRightColor:"currentColor"},i.variant==="outlined"&&i.orientation==="vertical"&&{borderBottomColor:"currentColor"})}),[`& .${c.lastButton},& .${c.middleButton}`]:b({},i.orientation==="horizontal"&&{borderTopLeftRadius:0,borderBottomLeftRadius:0},i.orientation==="vertical"&&{borderTopRightRadius:0,borderTopLeftRadius:0},i.variant==="outlined"&&i.orientation==="horizontal"&&{marginLeft:-1},i.variant==="outlined"&&i.orientation==="vertical"&&{marginTop:-1})})),In=g.forwardRef(function(i,r){const p=an({props:i,name:"MuiButtonGroup"}),{children:T,className:w,color:u="primary",component:j="div",disabled:v=!1,disableElevation:G=!1,disableFocusRipple:y=!1,disableRipple:R=!1,fullWidth:f=!1,orientation:U="horizontal",size:a="medium",variant:m="outlined"}=p,X=ln(p,Tn),z=b({},p,{color:u,component:j,disabled:v,disableElevation:G,disableFocusRipple:y,disableRipple:R,fullWidth:f,orientation:U,size:a,variant:m}),O=Rn(z),Y=g.useMemo(()=>({className:O.grouped,color:u,disabled:v,disableElevation:G,disableFocusRipple:y,disableRipple:R,fullWidth:f,size:a,variant:m}),[u,v,G,y,R,f,a,m,O.grouped]),D=Bn(T),nn=D.length,en=F=>{const L=F===0,H=F===nn-1;return L&&H?"":L?O.firstButton:H?O.lastButton:O.middleButton};return n.jsx(On,b({as:j,role:"group",className:un(O.root,w),ref:r,ownerState:z},X,{children:n.jsx(cn.Provider,{value:Y,children:D.map((F,L)=>n.jsx(dn.Provider,{value:en(L),children:F},L))})}))}),h=In,En=["inherit","default","primary","secondary","info","success","warning","error"],q=["small","medium","large"],S={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{mx:"8px !important"}};function kn(){return n.jsxs(A,{columns:2,spacing:3,children:[n.jsxs(s,{title:"Base",sx:S,children:[n.jsx(B,{color:"inherit",children:n.jsx(t,{icon:"ic:round-access-alarm"})}),n.jsx(B,{children:n.jsx(t,{icon:"ic:round-access-alarm"})}),n.jsx(B,{color:"primary",children:n.jsx(t,{icon:"ic:round-access-alarm"})}),n.jsx(B,{color:"secondary",children:n.jsx(t,{icon:"ic:round-access-alarm"})}),n.jsx(B,{disabled:!0,children:n.jsx(t,{icon:"ic:round-access-alarm"})})]}),n.jsx(s,{title:"Colors",sx:S,children:En.map(e=>n.jsx(B,{color:e,children:n.jsx(t,{icon:"ic:round-access-alarm"})},e))}),n.jsx(s,{title:"Size",sx:S,children:q.map(e=>n.jsx(B,{size:e,color:"info",children:n.jsx(t,{fontSize:"inherit",icon:"ic:round-access-alarm"})},e))}),n.jsx(s,{title:"With Animate",sx:S,children:q.map(e=>n.jsx(hn,{size:e,color:"error",children:n.jsx(t,{fontSize:"inherit",icon:"ic:round-access-alarm"})},e))})]})}const I={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{m:"8px !important"}},V=["inherit","primary","secondary","success","error","info","warning"],wn=["small","medium","large"],Gn=["contained","outlined","text","soft"];function Ln(){return n.jsxs(A,{columns:2,spacing:3,children:[n.jsxs(s,{title:"Contained",sx:I,children:[V.map(e=>n.jsxs(h,{variant:"contained",color:e,children:[n.jsx(o,{children:"One"}),n.jsx(o,{children:"Two"}),n.jsx(o,{children:"Three"})]},e)),n.jsxs(h,{disabled:!0,variant:"contained",color:"info",children:[n.jsx(o,{children:"One"}),n.jsx(o,{children:"Two"}),n.jsx(o,{children:"Three"})]})]}),n.jsxs(s,{title:"Outlined",sx:I,children:[V.map(e=>n.jsxs(h,{variant:"outlined",color:e,children:[n.jsx(o,{children:"One"}),n.jsx(o,{children:"Two"}),n.jsx(o,{children:"Three"})]},e)),n.jsxs(h,{disabled:!0,variant:"outlined",color:"info",children:[n.jsx(o,{children:"One"}),n.jsx(o,{children:"Two"}),n.jsx(o,{children:"Three"})]})]}),n.jsxs(s,{title:"Text",sx:I,children:[V.map(e=>n.jsxs(h,{variant:"text",color:e,children:[n.jsx(o,{children:"One"}),n.jsx(o,{children:"Two"}),n.jsx(o,{children:"Three"})]},e)),n.jsxs(h,{disabled:!0,variant:"text",color:"info",children:[n.jsx(o,{children:"One"}),n.jsx(o,{children:"Two"}),n.jsx(o,{children:"Three"})]})]}),n.jsxs(s,{title:"Soft",sx:I,children:[V.map(e=>n.jsxs(h,{variant:"soft",color:e,children:[n.jsx(o,{children:"One"}),n.jsx(o,{children:"Two"}),n.jsx(o,{children:"Three"})]},e)),n.jsxs(h,{disabled:!0,variant:"soft",color:"info",children:[n.jsx(o,{children:"One"}),n.jsx(o,{children:"Two"}),n.jsx(o,{children:"Three"})]})]}),n.jsx(s,{title:"Size",sx:I,children:wn.map(e=>n.jsxs(h,{size:e,variant:"contained",children:[n.jsx(o,{children:"One"}),n.jsx(o,{children:"Two"}),n.jsx(o,{children:"Three"})]},e))}),n.jsxs(s,{title:"Orientation",sx:I,children:[Gn.map(e=>n.jsxs(h,{variant:e,orientation:"vertical",children:[n.jsx(o,{children:"One"}),n.jsx(o,{children:"Two"}),n.jsx(o,{children:"Three"})]},e)),n.jsxs(h,{disabled:!0,variant:"soft",color:"info",orientation:"vertical",children:[n.jsx(o,{children:"One"}),n.jsx(o,{children:"Two"}),n.jsx(o,{children:"Three"})]})]})]})}const J=["standard","primary","secondary","info","success","warning","error"],K=["small","medium","large"],E={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{m:"8px !important"},"& svg":{width:24,height:24}};function Wn(){const[e,i]=g.useState("left"),[r,p]=g.useState(()=>["bold","italic"]),[T,w]=g.useState("list"),[u,j]=g.useState(!0),v=(a,m)=>{i(m)},G=(a,m)=>{p(m)},y=(a,m)=>{w(m)},R=[n.jsx(d,{value:"list",children:n.jsx(t,{icon:"ic:round-view-list"})},"list"),n.jsx(d,{value:"module",children:n.jsx(t,{icon:"ic:round-view-module"})},"module"),n.jsx(d,{value:"quilt",children:n.jsx(t,{icon:"ic:round-view-quilt"})},"quilt")],f=[n.jsx(d,{value:"left",children:n.jsx(t,{icon:"ic:round-format-align-left"})},"left"),n.jsx(d,{value:"center",children:n.jsx(t,{icon:"ic:round-format-align-center"})},"center"),n.jsx(d,{value:"right",children:n.jsx(t,{icon:"ic:round-format-align-right"})},"right"),n.jsx(d,{value:"justify",disabled:!0,children:n.jsx(t,{icon:"ic:round-format-align-justify"})},"justify")],U=[n.jsx(d,{value:"bold",children:n.jsx(t,{icon:"ic:round-format-bold"})},"bold"),n.jsx(d,{value:"italic",children:n.jsx(t,{icon:"ic:round-format-italic"})},"italic"),n.jsx(d,{value:"underlined",children:n.jsx(t,{icon:"ic:round-format-underlined"})},"underlined"),n.jsxs(d,{value:"color",disabled:!0,children:[n.jsx(t,{icon:"ic:baseline-format-color-fill"}),n.jsx(t,{icon:"ic:baseline-arrow-drop-down"})]},"color")];return n.jsxs(A,{columns:3,spacing:3,children:[n.jsx(s,{title:"Exclusive selection",sx:E,children:n.jsx(C,{value:e,exclusive:!0,onChange:v,children:f})}),n.jsx(s,{title:"Multiple selection",sx:E,children:n.jsx(C,{value:r,onChange:G,children:U})}),n.jsxs(s,{title:"Colors",sx:E,children:[J.map(a=>n.jsx(C,{exclusive:!0,color:a,value:T,onChange:y,children:R},a)),J.map(a=>n.jsx(d,{color:a,value:"check",selected:u,onChange:()=>{j(!u)},children:n.jsx(t,{icon:"eva:checkmark-fill"})},a))]}),n.jsxs(s,{title:"Vertical & Standalone buttons",sx:E,children:[n.jsx(C,{orientation:"vertical",value:T,exclusive:!0,onChange:y,children:R}),n.jsx(d,{value:"check",selected:u,onChange:()=>{j(!u)},children:n.jsx(t,{icon:"eva:checkmark-fill"})})]}),n.jsxs(s,{title:"Size",sx:E,children:[K.map(a=>n.jsx(d,{size:a,value:"check",children:n.jsx(t,{icon:"eva:checkmark-fill"})},a)),K.map(a=>n.jsx(C,{exclusive:!0,size:a,value:e,onChange:v,children:f},a))]}),n.jsxs(s,{title:"Disabled",sx:E,children:[n.jsx(d,{value:"check",disabled:!0,children:n.jsx(t,{icon:"eva:checkmark-fill"})}),n.jsx(d,{value:"check",disabled:!0,selected:!0,children:n.jsx(t,{icon:"eva:checkmark-fill"})}),n.jsx(C,{value:"left",exclusive:!0,children:f}),n.jsx(C,{disabled:!0,value:"left",exclusive:!0,children:f})]})]})}const N={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{mx:"8px !important"}},Pn=["inherit","primary","secondary","info","success","warning","error"],An=["small","medium","large"];P.propTypes={variant:jn.string};function P({variant:e="text"}){return n.jsxs(A,{columns:2,spacing:3,children:[n.jsxs(s,{title:"Base",sx:N,children:[n.jsx(o,{variant:e,color:"inherit",children:"Default"}),n.jsx(o,{variant:e,children:"Primary"}),n.jsx(o,{variant:e,color:"secondary",children:"Secondary"}),n.jsx(o,{variant:e,disabled:!0,children:"Disabled"}),n.jsx(o,{variant:e,children:"Link"})]}),n.jsx(s,{title:"Colors",sx:N,children:Pn.map(i=>n.jsx(o,{variant:e,color:i,children:i==="inherit"?"default":i},i))}),n.jsxs(s,{title:"With Icon & Loading",sx:N,children:[n.jsx(o,{variant:e,color:"error",startIcon:n.jsx(t,{icon:"ic:round-access-alarm"}),children:"Icon Left"}),n.jsx(o,{variant:e,color:"error",endIcon:n.jsx(t,{icon:"ic:round-access-alarm"}),children:"Icon Right"}),n.jsx(M,{loading:!0,variant:e,children:"Submit"}),n.jsx(M,{loading:!0,loadingIndicator:"Loading...",variant:e,children:"Fetch data"}),n.jsx(M,{loading:!0,size:"large",loadingPosition:"start",startIcon:n.jsx(t,{icon:"ic:round-access-alarm"}),variant:e,children:"Start"}),n.jsx(M,{loading:!0,size:"large",loadingPosition:"end",endIcon:n.jsx(t,{icon:"ic:round-access-alarm"}),variant:e,children:"End"})]}),n.jsx(s,{title:"Size",sx:N,children:An.map(i=>n.jsx(o,{variant:e,color:"info",size:i,children:i},i))})]})}const W={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{m:"8px !important"}},k=["default","inherit","primary","secondary","info","success","warning","error"],$=["small","medium","large"];function Fn(){return n.jsxs(A,{columns:2,spacing:3,children:[n.jsxs(s,{title:"Default",sx:W,children:[k.map(e=>n.jsx(l,{color:e,children:n.jsx(t,{icon:"ic:round-access-alarm",width:24})},e)),k.map(e=>n.jsxs(l,{color:e,variant:"extended",children:[n.jsx(t,{icon:"ic:round-access-alarm",width:24}),e]},e)),n.jsx(l,{color:"info",disabled:!0,children:n.jsx(t,{icon:"ic:round-access-alarm",width:24})}),n.jsxs(l,{color:"info",disabled:!0,variant:"extended",children:[n.jsx(t,{icon:"ic:round-access-alarm",width:24}),"disabled"]})]}),n.jsxs(s,{title:"Outlined",sx:W,children:[k.map(e=>n.jsx(l,{color:e,variant:"outlined",children:n.jsx(t,{icon:"ic:round-access-alarm",width:24})},e)),k.map(e=>n.jsxs(l,{color:e,variant:"outlinedExtended",children:[n.jsx(t,{icon:"ic:round-access-alarm",width:24}),e]},e)),n.jsx(l,{color:"info",disabled:!0,variant:"outlined",children:n.jsx(t,{icon:"ic:round-access-alarm",width:24})}),n.jsxs(l,{color:"info",disabled:!0,variant:"outlinedExtended",children:[n.jsx(t,{icon:"ic:round-access-alarm",width:24}),"disabled"]})]}),n.jsxs(s,{title:"Soft",sx:W,children:[k.map(e=>n.jsx(l,{color:e,variant:"soft",children:n.jsx(t,{icon:"ic:round-access-alarm",width:24})},e)),k.map(e=>n.jsxs(l,{color:e,variant:"softExtended",children:[n.jsx(t,{icon:"ic:round-access-alarm",width:24}),e]},e)),n.jsx(l,{color:"info",disabled:!0,variant:"soft",children:n.jsx(t,{icon:"ic:round-access-alarm",width:24})}),n.jsxs(l,{color:"info",disabled:!0,variant:"softExtended",children:[n.jsx(t,{icon:"ic:round-access-alarm",width:24}),"disabled"]})]}),n.jsxs(s,{title:"Size",sx:W,children:[$.map(e=>n.jsx(l,{size:e,color:"info",children:n.jsx(t,{icon:"ic:round-access-alarm",width:24})},e)),$.map(e=>n.jsxs(l,{size:e,color:"info",variant:"extended",children:[n.jsx(t,{icon:"ic:round-access-alarm",width:24}),e]},e)),$.map(e=>n.jsx(l,{size:e,color:"info",variant:"soft",children:n.jsx(t,{icon:"ic:round-access-alarm",width:24})},e)),$.map(e=>n.jsxs(l,{size:e,color:"info",variant:"softExtended",children:[n.jsx(t,{icon:"ic:round-access-alarm",width:24}),e]},e)),$.map(e=>n.jsx(l,{size:e,color:"info",variant:"outlined",children:n.jsx(t,{icon:"ic:round-access-alarm",width:24})},e)),$.map(e=>n.jsxs(l,{size:e,color:"info",variant:"outlinedExtended",children:[n.jsx(t,{icon:"ic:round-access-alarm",width:24}),e]},e))]}),n.jsx(s,{title:"With Animate",sx:W,children:$.map(e=>n.jsxs(pn,{variant:"extended",size:e,color:"info",children:[n.jsx(t,{icon:"ic:round-access-alarm",width:24}),e]},e))})]})}const Q=[{value:"contained",label:"Contained Buttons",component:n.jsx(P,{variant:"contained"})},{value:"outlined",label:"Outlined Buttons",component:n.jsx(P,{variant:"outlined"})},{value:"text",label:"Text Buttons",component:n.jsx(P,{})},{value:"soft",label:"Soft Buttons",component:n.jsx(P,{variant:"soft"})},{value:"icon",label:"Icon Buttons",component:n.jsx(kn,{})},{value:"fab",label:"Floating Action Button",component:n.jsx(Fn,{})},{value:"groups",label:"Button Groups",component:n.jsx(Ln,{})},{value:"toggle",label:"Toggle Buttons",component:n.jsx(Wn,{})}];function Zn(){const[e,i]=g.useState("contained");return n.jsxs(n.Fragment,{children:[n.jsx(mn,{children:n.jsx("title",{children:" MUI Components: Buttons | Minimal UI"})}),n.jsx(Z,{sx:{pt:6,pb:1,bgcolor:r=>r.palette.mode==="light"?"grey.200":"grey.800"},children:n.jsx(_,{children:n.jsx(vn,{heading:"Buttons",links:[{name:"Components",href:gn.components},{name:"Buttons"}],moreLink:["https://mui.com/components/buttons","https://mui.com/components/button-group","https://mui.com/components/floating-action-button","https://mui.com/components/toggle-button"]})})}),n.jsxs(_,{sx:{my:10},children:[n.jsx(fn,{value:e,onChange:(r,p)=>i(p),children:Q.map(r=>n.jsx(bn,{value:r.value,label:r.label},r.value))}),Q.map(r=>r.value===e&&n.jsx(Z,{sx:{mt:5},children:r.component},r.value))]})]})}export{Zn as default};