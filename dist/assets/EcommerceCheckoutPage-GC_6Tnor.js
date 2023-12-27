import{ac as e,aD as j,aj as y,ae as h,an as u,aR as S,b2 as W,aN as b,bi as G,ah as je,aM as t,aO as H,aS as _,ai as ye,aP as fe,cf as be,ax as P,ap as Ce,a9 as L,aa as C,ab as Q,bh as ve,ad as $,bM as ge,ag as g,bY as Se,cg as ke,ak as V,al as Y,F as O,ch as De,bE as U,bI as J,bO as Z,ba as K,b6 as X,bP as ee,aw as we,aJ as Te,ci as Ie,cj as Ae,ao as Pe,at as Oe,aA as Be,bF as Fe,bW as Ne,ck as Ee,cl as z,as as qe,aB as We,cm as R,cn as ze,c2 as Re,co as Me,cp as Ge,cq as He,cr as _e,cs as Le,ct as Qe}from"./index-kAVNsXXW.js";import{C as $e}from"./CustomBreadcrumbs-07KkEdSP.js";import{E as Ve}from"./EmptyContent-vRT2zqjA.js";import{C as k}from"./Card-yNtnckip.js";import{C as T}from"./CardHeader-cbPk7NV8.js";import{C as B}from"./CardContent-Yl8ry9fC.js";import{T as Ye}from"./TablePaginationCustom-D5U7UEwi.js";import{C as Ue}from"./ColorSinglePicker-3AMF9EUF.js";import{I as Je}from"./IncrementerButton-SLvR_Q0x.js";import{c as Ze,T as Ke,a as Xe,b as et}from"./TableRow-zrsFapiu.js";import{T as w}from"./TableCell-7incTXUx.js";import{G as f}from"./Grid-UjSMx0L8.js";import{c as tt}from"./countries-ACrf0PN6.js";import{D as st}from"./DialogTitle-vCHwm-ka.js";import{D as rt}from"./DialogContent-DKzr_HVR.js";import{D as nt}from"./DialogActions-vKtJfWwg.js";import{P as it}from"./PaymentSummary-rEU011re.js";import{S as at,a as ot,b as ct,c as lt}from"./Stepper-Hf9fRn8C.js";import"./TablePagination-Vshr5hr6.js";import"./KeyboardArrowRight-6uRlvlB4.js";import"./LastPage-N6rQPigF.js";import"./dialogTitleClasses-wpKycvDL.js";F.propTypes={onEdit:t.func,total:t.number,discount:t.number,subtotal:t.number,shipping:t.number,enableEdit:t.bool,enableDiscount:t.bool,onApplyDiscount:t.func};function F({total:s,onEdit:i,discount:r,subtotal:l,shipping:n,onApplyDiscount:c,enableEdit:a=!1,enableDiscount:p=!1}){const x=n!==null?"Free":"-";return e.jsxs(k,{sx:{mb:3},children:[e.jsx(T,{title:"Order Summary",action:a&&e.jsx(j,{size:"small",onClick:i,startIcon:e.jsx(y,{icon:"eva:edit-fill"}),children:"Edit"})}),e.jsx(B,{children:e.jsxs(h,{spacing:2,children:[e.jsxs(h,{direction:"row",justifyContent:"space-between",children:[e.jsx(u,{variant:"body2",sx:{color:"text.secondary"},children:"Sub Total"}),e.jsx(u,{variant:"subtitle2",children:S(l)})]}),e.jsxs(h,{direction:"row",justifyContent:"space-between",children:[e.jsx(u,{variant:"body2",sx:{color:"text.secondary"},children:"Discount"}),e.jsx(u,{variant:"subtitle2",children:r?S(-r):"-"})]}),e.jsxs(h,{direction:"row",justifyContent:"space-between",children:[e.jsx(u,{variant:"body2",sx:{color:"text.secondary"},children:"Shipping"}),e.jsx(u,{variant:"subtitle2",children:n?S(n):x})]}),e.jsx(W,{}),e.jsxs(h,{direction:"row",justifyContent:"space-between",children:[e.jsx(u,{variant:"subtitle1",children:"Total"}),e.jsxs(b,{sx:{textAlign:"right"},children:[e.jsx(u,{variant:"subtitle1",sx:{color:"error.main"},children:S(s)}),e.jsx(u,{variant:"caption",sx:{fontStyle:"italic"},children:"(VAT included if applicable)"})]})]}),p&&c&&e.jsx(G,{fullWidth:!0,placeholder:"Discount codes / Gifts",value:"DISCOUNT5",InputProps:{endAdornment:e.jsx(je,{position:"end",children:e.jsx(j,{onClick:()=>c(5),sx:{mr:-.5},children:"Apply"})})}})]})})]})}te.propTypes={row:t.object,onDelete:t.func,onDecrease:t.func,onIncrease:t.func};function te({row:s,onDelete:i,onDecrease:r,onIncrease:l}){const{name:n,size:c,price:a,colors:p,cover:x,quantity:o,available:d}=s;return e.jsxs(Ze,{children:[e.jsxs(w,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(H,{alt:"product image",src:x,sx:{width:64,height:64,borderRadius:1.5,mr:2}}),e.jsxs(h,{spacing:.5,children:[e.jsx(u,{noWrap:!0,variant:"subtitle2",sx:{maxWidth:240},children:n}),e.jsxs(h,{direction:"row",alignItems:"center",sx:{typography:"body2",color:"text.secondary"},children:["size: ",e.jsxs(_,{sx:{ml:.5},children:[" ",c," "]}),e.jsx(W,{orientation:"vertical",sx:{mx:1,height:16}}),e.jsx(Ue,{colors:p})]})]})]}),e.jsx(w,{children:S(a)}),e.jsx(w,{children:e.jsxs(b,{sx:{width:96,textAlign:"right"},children:[e.jsx(Je,{quantity:o,onDecrease:r,onIncrease:l,disabledDecrease:o<=1,disabledIncrease:o>=d}),e.jsxs(u,{variant:"caption",sx:{color:"text.secondary"},children:["available: ",d]})]})}),e.jsx(w,{align:"right",children:S(a*o)}),e.jsx(w,{align:"right",children:e.jsx(ye,{onClick:i,children:e.jsx(y,{icon:"eva:trash-2-outline"})})})]})}const dt=[{id:"product",label:"Product"},{id:"price",label:"Price"},{id:"quantity",label:"Quantity"},{id:"totalPrice",label:"Total Price",align:"right"},{id:""}];se.propTypes={onDelete:t.func,products:t.array,onDecreaseQuantity:t.func,onIncreaseQuantity:t.func};function se({products:s,onDelete:i,onIncreaseQuantity:r,onDecreaseQuantity:l}){return e.jsx(Ke,{sx:{overflow:"unset"},children:e.jsx(fe,{children:e.jsxs(Xe,{sx:{minWidth:720},children:[e.jsx(Ye,{headLabel:dt}),e.jsx(et,{children:s.map(n=>e.jsx(te,{row:n,onDelete:()=>i(n.id),onDecrease:()=>l(n.id),onIncrease:()=>r(n.id)},n.id))})]})})})}re.propTypes={checkout:t.object,onNextStep:t.func,onDeleteCart:t.func,onApplyDiscount:t.func,onDecreaseQuantity:t.func,onIncreaseQuantity:t.func};function re({checkout:s,onNextStep:i,onApplyDiscount:r,onDeleteCart:l,onIncreaseQuantity:n,onDecreaseQuantity:c}){const{cart:a,total:p,discount:x,subtotal:o}=s,d=be(a.map(D=>D.quantity)),v=!a.length;return e.jsxs(f,{container:!0,spacing:3,children:[e.jsxs(f,{item:!0,xs:12,md:8,children:[e.jsxs(k,{sx:{mb:3},children:[e.jsx(T,{title:e.jsxs(u,{variant:"h6",children:["Cart",e.jsxs(u,{component:"span",sx:{color:"text.secondary"},children:[" (",d," item)"]})]}),sx:{mb:3}}),v?e.jsx(Ve,{title:"Cart is empty",description:"Look like you have no items in your shopping cart.",img:"/assets/illustrations/illustration_empty_cart.svg"}):e.jsx(se,{products:a,onDelete:l,onIncreaseQuantity:n,onDecreaseQuantity:c})]}),e.jsx(j,{to:P.eCommerce.root,component:Ce,color:"inherit",startIcon:e.jsx(y,{icon:"eva:arrow-ios-back-fill"}),children:"Continue Shopping"})]}),e.jsxs(f,{item:!0,xs:12,md:4,children:[e.jsx(F,{enableDiscount:!0,total:p,discount:x,subtotal:o,onApplyDiscount:r}),e.jsx(j,{fullWidth:!0,size:"large",type:"submit",variant:"contained",disabled:!a.length,onClick:i,children:"Check Out"})]})]})}ne.propTypes={open:t.bool,onClose:t.func,onCreateBilling:t.func};function ne({open:s,onClose:i,onCreateBilling:r}){const l=L().shape({receiver:C().required("Fullname is required"),phoneNumber:C().required("Phone number is required"),address:C().required("Address is required"),city:C().required("City is required"),state:C().required("State is required"),country:C().required("Country is required"),zipCode:C().required("Zip code is required")}),n={addressType:"Home",receiver:"",phoneNumber:"",address:"",city:"",state:"",country:"",zipCode:"",isDefault:!0},c=Q({resolver:Y(l),defaultValues:n}),{handleSubmit:a,formState:{isSubmitting:p}}=c,x=async o=>{try{r({receiver:o.receiver,phoneNumber:o.phoneNumber,fullAddress:`${o.address}, ${o.city}, ${o.state}, ${o.country}, ${o.zipCode}`,addressType:o.addressType,isDefault:o.isDefault})}catch(d){console.error(d)}};return e.jsx(ve,{fullWidth:!0,maxWidth:"sm",open:s,onClose:i,children:e.jsxs($,{methods:c,onSubmit:a(x),children:[e.jsx(st,{children:"Add new address"}),e.jsx(rt,{dividers:!0,children:e.jsxs(h,{spacing:3,children:[e.jsx(ge,{row:!0,name:"addressType",options:[{label:"Home",value:"Home"},{label:"Office",value:"Office"}]}),e.jsxs(b,{rowGap:3,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"},children:[e.jsx(g,{name:"receiver",label:"Full Name"}),e.jsx(g,{name:"phoneNumber",label:"Phone Number"})]}),e.jsx(g,{name:"address",label:"Address"}),e.jsxs(b,{rowGap:3,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(3, 1fr)"},children:[e.jsx(g,{name:"city",label:"Town / City"}),e.jsx(g,{name:"state",label:"State"}),e.jsx(g,{name:"zipCode",label:"Zip/Code"})]}),e.jsxs(Se,{native:!0,name:"country",label:"Country",children:[e.jsx("option",{value:""}),tt.map(o=>e.jsx("option",{value:o.label,children:o.label},o.code))]}),e.jsx(ke,{name:"isDefault",label:"Use this address as default.",sx:{mt:3}})]})}),e.jsxs(nt,{children:[e.jsx(V,{type:"submit",variant:"contained",loading:p,children:"Deliver to this Address"}),e.jsx(j,{color:"inherit",variant:"outlined",onClick:i,children:"Cancel"})]})]})})}ie.propTypes={checkout:t.object,onBackStep:t.func,onCreateBilling:t.func};function ie({checkout:s,onBackStep:i,onCreateBilling:r}){const{total:l,discount:n,subtotal:c}=s,[a,p]=O.useState(!1),x=()=>{p(!0)},o=()=>{p(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(f,{container:!0,spacing:3,children:[e.jsxs(f,{item:!0,xs:12,md:8,children:[De.map((d,v)=>e.jsx(ae,{address:d,onCreateBilling:()=>r(d)},v)),e.jsxs(h,{direction:"row",justifyContent:"space-between",children:[e.jsx(j,{size:"small",color:"inherit",onClick:i,startIcon:e.jsx(y,{icon:"eva:arrow-ios-back-fill"}),children:"Back"}),e.jsx(j,{size:"small",variant:"soft",onClick:x,startIcon:e.jsx(y,{icon:"eva:plus-fill"}),children:"Add new address"})]})]}),e.jsx(f,{item:!0,xs:12,md:4,children:e.jsx(F,{subtotal:c,total:l,discount:n})})]}),e.jsx(ne,{open:a,onClose:o,onCreateBilling:r})]})}ae.propTypes={address:t.object,onCreateBilling:t.func};function ae({address:s,onCreateBilling:i}){const{receiver:r,fullAddress:l,addressType:n,phoneNumber:c,isDefault:a}=s;return e.jsx(k,{sx:{p:3,mb:3},children:e.jsxs(h,{spacing:2,alignItems:{md:"flex-end"},direction:{xs:"column",md:"row"},children:[e.jsxs(h,{flexGrow:1,spacing:1,children:[e.jsxs(h,{direction:"row",alignItems:"center",children:[e.jsxs(u,{variant:"subtitle1",children:[r,e.jsxs(b,{component:"span",sx:{ml:.5,typography:"body2",color:"text.secondary"},children:["(",n,")"]})]}),a&&e.jsx(_,{color:"info",sx:{ml:1},children:"Default"})]}),e.jsx(u,{variant:"body2",children:l}),e.jsx(u,{variant:"body2",sx:{color:"text.secondary"},children:c})]}),e.jsxs(h,{flexDirection:"row",flexWrap:"wrap",flexShrink:0,children:[!a&&e.jsx(j,{variant:"outlined",size:"small",color:"inherit",sx:{mr:1},children:"Delete"}),e.jsx(j,{variant:"outlined",size:"small",onClick:i,children:"Deliver to this Address"})]})]})})}oe.propTypes={onApplyShipping:t.func,deliveryOptions:t.array};function oe({deliveryOptions:s,onApplyShipping:i,...r}){const{control:l}=U();return e.jsxs(k,{...r,children:[e.jsx(T,{title:"Delivery options"}),e.jsx(B,{children:e.jsx(J,{name:"delivery",control:l,render:({field:n})=>e.jsx(Z,{...n,onChange:c=>{const{value:a}=c.target;n.onChange(Number(a)),i(Number(a))},children:e.jsx(b,{gap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"},children:s.map(c=>e.jsx(ce,{option:c,isSelected:n.value===c.value},c.value))})})})})]})}ce.propTypes={option:t.object,isSelected:t.bool};function ce({option:s,isSelected:i}){const{value:r,title:l,description:n}=s;return e.jsx(K,{variant:"outlined",sx:{display:"flex",alignItems:"center",transition:c=>c.transitions.create("all"),...i&&{boxShadow:c=>c.customShadows.z20}},children:e.jsx(X,{value:r,control:e.jsx(ee,{checkedIcon:e.jsx(y,{icon:"eva:checkmark-circle-2-fill"})}),label:e.jsxs(b,{sx:{ml:1},children:[e.jsx(u,{variant:"subtitle2",children:l}),e.jsx(u,{variant:"body2",sx:{color:"text.secondary"},children:n})]}),sx:{py:3,px:2.5,flexGrow:1,mr:0}})},r)}le.propTypes={billing:t.object,onBackStep:t.func};function le({billing:s,onBackStep:i}){return e.jsxs(k,{sx:{mb:3},children:[e.jsx(T,{title:"Billing Address",action:e.jsx(j,{size:"small",startIcon:e.jsx(y,{icon:"eva:edit-fill"}),onClick:i,children:"Edit"})}),e.jsxs(B,{children:[e.jsxs(u,{variant:"subtitle2",gutterBottom:!0,children:[s==null?void 0:s.receiver," ",e.jsxs(u,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:["(",s==null?void 0:s.addressType,")"]})]}),e.jsx(u,{variant:"body2",gutterBottom:!0,children:s==null?void 0:s.fullAddress}),e.jsx(u,{variant:"body2",sx:{color:"text.secondary"},children:s==null?void 0:s.phoneNumber})]})]})}de.propTypes={cardOptions:t.array,paymentOptions:t.array};function de({paymentOptions:s,cardOptions:i,...r}){const{control:l}=U(),[n,c]=O.useState(!1),a=()=>{c(!0)},p=()=>{c(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(k,{...r,children:[e.jsx(T,{title:"Payment options"}),e.jsx(B,{children:e.jsx(J,{name:"payment",control:l,render:({field:x,fieldState:{error:o}})=>e.jsxs(e.Fragment,{children:[e.jsx(Z,{row:!0,...x,children:e.jsx(h,{spacing:3,sx:{width:1},children:s.map(d=>e.jsx(ue,{option:d,cardOptions:i,hasChild:d.value==="credit_card",isSelected:x.value===d.value,isCreditMethod:d.value==="credit_card"&&x.value==="credit_card",onOpen:a},d.title))})}),!!o&&e.jsx(we,{error:!0,sx:{pt:1,px:2},children:o.message})]})})})]}),e.jsx(it,{open:n,onClose:p})]})}ue.propTypes={onOpen:t.func,hasChild:t.bool,option:t.object,isSelected:t.bool,cardOptions:t.array,isCreditMethod:t.bool};function ue({option:s,cardOptions:i,hasChild:r,isSelected:l,isCreditMethod:n,onOpen:c}){const{value:a,title:p,icons:x,description:o}=s;return e.jsxs(K,{variant:"outlined",sx:{display:"flex",alignItems:"center",transition:d=>d.transitions.create("all"),...l&&{boxShadow:d=>d.customShadows.z20},...r&&{flexWrap:"wrap"}},children:[e.jsx(X,{value:a,control:e.jsx(ee,{checkedIcon:e.jsx(y,{icon:"eva:checkmark-circle-2-fill"})}),label:e.jsxs(b,{sx:{ml:1},children:[e.jsx(u,{variant:"subtitle2",children:p}),e.jsx(u,{variant:"body2",sx:{color:"text.secondary"},children:o})]}),sx:{py:3,pl:2.5,flexGrow:1,mr:0}}),e.jsx(h,{direction:"row",spacing:1,flexShrink:0,sx:{pr:2.5,display:{xs:"none",sm:"inline-flex"}},children:x.map(d=>e.jsx(H,{disabledEffect:!0,alt:"logo card",src:d},d))}),n&&e.jsxs(h,{alignItems:"flex-start",sx:{px:3,width:1},children:[e.jsx(G,{select:!0,fullWidth:!0,label:"Cards",SelectProps:{native:!0},children:i.map(d=>e.jsx("option",{value:d.value,children:d.label},d.value))}),e.jsx(j,{size:"small",startIcon:e.jsx(y,{icon:"eva:plus-fill"}),onClick:c,sx:{my:3},children:"Add new card"})]})]})}const ut=[{value:0,title:"Standard delivery (Free)",description:"Delivered on Monday, August 12"},{value:2,title:"Fast delivery ($2,00)",description:"Delivered on Monday, August 5"}],pt=[{value:"paypal",title:"Pay with Paypal",description:"You will be redirected to PayPal website to complete your purchase securely.",icons:["/assets/icons/payments/ic_paypal.svg"]},{value:"credit_card",title:"Credit / Debit Card",description:"We support Mastercard, Visa, Discover and Stripe.",icons:["/assets/icons/payments/ic_mastercard.svg","/assets/icons/payments/ic_visa.svg"]},{value:"cash",title:"Cash on CheckoutDelivery",description:"Pay with cash when your order is delivered.",icons:[]}],xt=[{value:"ViSa1",label:"**** **** **** 1212 - Jimmy Holland"},{value:"ViSa2",label:"**** **** **** 2424 - Shawn Stokes"},{value:"MasterCard",label:"**** **** **** 4545 - Cole Armstrong"}];pe.propTypes={onReset:t.func,checkout:t.object,onBackStep:t.func,onGotoStep:t.func,onNextStep:t.func,onApplyShipping:t.func};function pe({checkout:s,onReset:i,onNextStep:r,onBackStep:l,onGotoStep:n,onApplyShipping:c}){const{total:a,discount:p,subtotal:x,shipping:o,billing:d}=s,v=L().shape({payment:C().required("Payment is required!")}),D={delivery:o,payment:""},I=Q({resolver:Y(v),defaultValues:D}),{handleSubmit:N,formState:{isSubmitting:E}}=I,q=async()=>{try{r(),i()}catch(A){console.error(A)}};return e.jsx($,{methods:I,onSubmit:N(q),children:e.jsxs(f,{container:!0,spacing:3,children:[e.jsxs(f,{item:!0,xs:12,md:8,children:[e.jsx(oe,{onApplyShipping:c,deliveryOptions:ut}),e.jsx(de,{cardOptions:xt,paymentOptions:pt,sx:{my:3}}),e.jsx(j,{size:"small",color:"inherit",onClick:l,startIcon:e.jsx(y,{icon:"eva:arrow-ios-back-fill"}),children:"Back"})]}),e.jsxs(f,{item:!0,xs:12,md:4,children:[e.jsx(le,{onBackStep:l,billing:d}),e.jsx(F,{enableEdit:!0,total:a,subtotal:x,discount:p,shipping:o,onEdit:()=>n(0)}),e.jsx(V,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:E,children:"Complete Order"})]})]})})}const ht=Te(lt)(({theme:s})=>({top:10,left:"calc(-50% + 20px)",right:"calc(50% + 20px)","& .MuiStepConnector-line":{borderTopWidth:2,borderColor:s.palette.divider},"&.Mui-active, &.Mui-completed":{"& .MuiStepConnector-line":{borderColor:s.palette.primary.main}}}));xe.propTypes={sx:t.object,activeStep:t.number,steps:t.arrayOf(t.string)};function xe({steps:s,activeStep:i,sx:r,...l}){return e.jsx(at,{alternativeLabel:!0,activeStep:i,connector:e.jsx(ht,{}),sx:{mb:5,...r},...l,children:s.map(n=>e.jsx(ot,{children:e.jsx(ct,{StepIconComponent:he,sx:{"& .MuiStepLabel-label":{typography:"subtitle2"}},children:n})},n))})}he.propTypes={active:t.bool,completed:t.bool};function he({active:s,completed:i}){return e.jsx(h,{alignItems:"center",justifyContent:"center",sx:{width:24,height:24,color:"text.disabled",...s&&{color:"primary.main"}},children:i?e.jsx(y,{icon:"eva:checkmark-fill",sx:{color:"primary.main"}}):e.jsx(b,{sx:{width:8,height:8,borderRadius:"50%",backgroundColor:"currentColor"}})})}me.propTypes={open:t.bool,onReset:t.func,onDownloadPDF:t.func};function me({open:s,onReset:i,onDownloadPDF:r}){return e.jsx(Ie,{fullScreen:!0,open:s,PaperProps:{sx:{maxWidth:{md:"calc(100% - 48px)"},maxHeight:{md:"calc(100% - 48px)"}}},children:e.jsxs(h,{spacing:5,sx:{m:"auto",maxWidth:480,textAlign:"center",px:{xs:2,sm:0}},children:[e.jsx(u,{variant:"h4",children:"Thank you for your purchase!"}),e.jsx(Ae,{sx:{height:260}}),e.jsxs(u,{children:["Thanks for placing order",e.jsx("br",{}),e.jsx("br",{}),e.jsx(Pe,{children:"01dc1370-3df6-11eb-b378-0242ac130002"}),e.jsx("br",{}),e.jsx("br",{}),"We will send you a notification within 5 days when it ships.",e.jsx("br",{})," If you have any question or queries then fell to get in contact us. ",e.jsx("br",{})," ",e.jsx("br",{}),"All the best,"]}),e.jsx(W,{sx:{borderStyle:"dashed"}}),e.jsxs(h,{spacing:2,justifyContent:"space-between",direction:{xs:"column-reverse",sm:"row"},children:[e.jsx(j,{fullWidth:!0,size:"large",color:"inherit",variant:"outlined",onClick:i,startIcon:e.jsx(y,{icon:"eva:arrow-ios-back-fill"}),children:"Continue Shopping"}),e.jsx(j,{fullWidth:!0,size:"large",variant:"contained",startIcon:e.jsx(y,{icon:"ant-design:file-pdf-filled"}),onClick:r,children:"Download as PDF"})]})]})})}const M=["Cart","Billing & address","Payment"];function Wt(){const s=Oe(),{themeStretch:i}=Be(),r=Fe(),{checkout:l}=Ne(m=>m.product),{cart:n,billing:c,activeStep:a}=l,p=a===M.length;O.useEffect(()=>{r(Ee(n))},[r,n]),O.useEffect(()=>{a===1&&r(z(null))},[r,a]);const x=()=>{r(R())},o=()=>{r(ze())},d=m=>{r(Re(m))},v=m=>{n.length&&r(Me(m))},D=m=>{r(Ge(m))},I=m=>{r(He(m))},N=m=>{r(_e(m))},E=m=>{r(z(m)),r(R())},q=m=>{r(Le(m))},A=()=>{p&&(r(Qe()),s(P.eCommerce.shop,{replace:!0}))};return e.jsxs(e.Fragment,{children:[e.jsx(qe,{children:e.jsx("title",{children:" Ecommerce: Checkout | Minimal UI"})}),e.jsxs(We,{maxWidth:i?!1:"lg",children:[e.jsx($e,{heading:"Checkout",links:[{name:"Dashboard",href:P.root},{name:"E-Commerce",href:P.eCommerce.root},{name:"Checkout"}]}),e.jsx(f,{container:!0,justifyContent:p?"center":"flex-start",children:e.jsx(f,{item:!0,xs:12,md:8,children:e.jsx(xe,{activeStep:a,steps:M})})}),p?e.jsx(me,{open:p,onReset:A,onDownloadPDF:()=>{}}):e.jsxs(e.Fragment,{children:[a===0&&e.jsx(re,{checkout:l,onNextStep:x,onDeleteCart:D,onApplyDiscount:v,onIncreaseQuantity:I,onDecreaseQuantity:N}),a===1&&e.jsx(ie,{checkout:l,onBackStep:o,onCreateBilling:E}),a===2&&c&&e.jsx(pe,{checkout:l,onNextStep:x,onBackStep:o,onGotoStep:d,onApplyShipping:q,onReset:A})]})]})]})}export{Wt as default};