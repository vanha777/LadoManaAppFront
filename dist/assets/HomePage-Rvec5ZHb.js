import{fa as pe,j as he,F as u,fb as X,l as J,fc as ge,fd as Z,ac as e,aN as c,b0 as n,aM as b,bl as _,aB as S,a$ as me,aJ as g,aK as H,aL as w,fe as Q,b1 as t,an as r,ae as l,aD as k,ap as ue,ax as je,aj as h,ao as ve,ff as Y,fg as ee,cX as E,az as U,fh as fe,fi as $,aO as C,aA as V,ai as F,fj as be,fk as K,bO as ye,be as ke,b6 as T,bP as ie,fl as L,b2 as we,fm as ne,bG as Ce,cu as Se,bp as $e,cv as z,fn as P,eq as te,cQ as _e,aS as Ie,bf as Ae,af as De,b3 as Te,aP as Pe,b4 as q,d1 as Re,b7 as M,bi as O,fo as ze,ba as Ee,as as He}from"./index-kAVNsXXW.js";import{a as Ue}from"./index-T25VGIR0.js";import{G as f}from"./Grid-UjSMx0L8.js";import{R as se}from"./Rating-w1NpzLI0.js";import{C as Le}from"./Card-yNtnckip.js";import{C as Oe}from"./CardActionArea-SwEECdnZ.js";import{T as re,a as ae}from"./Tabs-vRgd6uc9.js";import{T as Fe,a as Me}from"./ToggleButtonGroup-wQIhh8zC.js";import{A as Be}from"./AlertTitle-avrAo-R4.js";import{P as We}from"./Pagination-jQ-Mbb_4.js";import{C as Ve}from"./CardHeader-cbPk7NV8.js";import"./KeyboardArrowRight-6uRlvlB4.js";import"./LastPage-N6rQPigF.js";function Ge(i){const s=pe(()=>he(i)),{isStatic:o}=u.useContext(X);if(o){const[,p]=u.useState(i);u.useEffect(()=>s.on("change",p),[])}return s}function Ne(i,s={}){const{isStatic:o}=u.useContext(X),p=u.useRef(null),d=Ge(J(i)?i.get():i),a=()=>{p.current&&p.current.stop()};return u.useInsertionEffect(()=>d.attach((m,y)=>o?y(m):(a(),p.current=Ue({keyframes:[d.get(),m],velocity:d.getVelocity(),type:"spring",...s,onUpdate:y}),d.get()),a),[JSON.stringify(s)]),ge(()=>{if(J(i))return i.on("change",m=>d.set(parseFloat(m)))},[d]),d}const oe=u.forwardRef(({color:i="primary",size:s=3,sx:o,...p},d)=>{const{scrollYProgress:a}=Z(),m=Ne(a,{stiffness:100,damping:30,restDelta:.001});return e.jsx(c,{ref:d,component:n.div,sx:{top:0,left:0,right:0,height:s,zIndex:1999,position:"fixed",transformOrigin:"0%",bgcolor:`${i}.main`,...i==="inherit"&&{bgcolor:"text.primary"},...o},style:{scaleX:m},...p})});oe.propTypes={sx:b.object,size:b.number,color:b.oneOf(["inherit","primary","secondary","info","success","warning","error"])};const Je=oe,Ke=g("div")(({theme:i})=>({position:"relative",...H({color:w(i.palette.background.default,i.palette.mode==="light"?.9:.94),imgUrl:"/assets/background/overlay_2.jpg"}),[i.breakpoints.up("md")]:{top:0,left:0,width:"100%",height:"100vh",position:"fixed"}})),qe=g("div")(({theme:i})=>({maxWidth:480,margin:"auto",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:i.spacing(15,0),height:"100%"})),Xe=g(n.h1)(({theme:i})=>({...Q(`300deg, ${i.palette.primary.main} 0%, ${i.palette.warning.main} 25%, ${i.palette.primary.main} 50%, ${i.palette.warning.main} 75%, ${i.palette.primary.main} 100%`),backgroundSize:"400%",fontFamily:"'Barlow', sans-serif",fontSize:`${64/16}rem`,textAlign:"center",lineHeight:1,padding:0,marginTop:8,marginBottom:24,letterSpacing:8,[i.breakpoints.up("md")]:{fontSize:`${96/16}rem`}})),Ze=g("div")(({theme:i})=>({position:"absolute",width:480,height:480,top:-80,right:-80,borderRadius:"50%",filter:"blur(100px)",WebkitFilter:"blur(100px)",backgroundColor:w(i.palette.primary.darker,.12)})),Qe=g("div")(({theme:i})=>({position:"absolute",height:400,bottom:-200,left:"10%",right:"10%",borderRadius:"50%",filter:"blur(100px)",WebkitFilter:"blur(100px)",backgroundColor:w(i.palette.primary.darker,.08)}));function Ye(){const i=_("up","md"),{scrollYProgress:s}=Z(),[o,p]=u.useState(!1);return u.useEffect(()=>s.on("change",d=>{d>.8?p(!0):p(!1)}),[s]),e.jsxs(e.Fragment,{children:[e.jsxs(Ke,{sx:{...o&&{opacity:0}},children:[e.jsx(S,{component:me,sx:{height:1},children:e.jsxs(f,{container:!0,spacing:10,sx:{height:1},children:[e.jsx(f,{item:!0,xs:12,md:6,sx:{height:1},children:e.jsx(ei,{})}),i&&e.jsx(f,{item:!0,xs:12,md:6,children:e.jsx(ii,{})})]})}),i&&e.jsx(Ze,{}),e.jsx(Qe,{})]}),e.jsx(c,{sx:{height:{md:"100vh"}}})]})}function ei(){return e.jsxs(qe,{children:[e.jsx(n.div,{variants:t().in,children:e.jsxs(r,{variant:"h2",sx:{textAlign:"center"},children:["Start a ",e.jsx("br",{}),"new project with"]})}),e.jsx(n.div,{variants:t().in,children:e.jsx(Xe,{animate:{backgroundPosition:"200% center"},transition:{repeatType:"reverse",ease:"linear",duration:20,repeat:1/0},children:"Minimal"})}),e.jsx(n.div,{variants:t().in,children:e.jsx(r,{variant:"body2",sx:{textAlign:"center"},children:"The starting point for your next project is based on MUI.Easy customization Helps you build apps faster and better."})}),e.jsx(n.div,{variants:t().in,children:e.jsxs(l,{spacing:.75,direction:"row",alignItems:"center",justifyContent:"center",sx:{my:3},children:[e.jsx(se,{readOnly:!0,value:4.95,precision:.1,max:5}),e.jsxs(r,{variant:"caption",sx:{color:"text.secondary"},children:[e.jsx(c,{component:"strong",sx:{mr:.5,color:"text.primary"},children:"4.95/5"}),"(99+ reviews)"]})]})}),e.jsx(n.div,{variants:t().in,children:e.jsxs(l,{spacing:1.5,direction:{xs:"column-reverse",sm:"row"},sx:{mb:5},children:[e.jsxs(l,{alignItems:"center",spacing:2,children:[e.jsx(k,{component:ue,to:je.root,color:"inherit",size:"large",variant:"contained",startIcon:e.jsx(h,{icon:"eva:flash-fill",width:24}),sx:{bgcolor:"text.primary",color:i=>i.palette.mode==="light"?"common.white":"grey.800","&:hover":{bgcolor:"text.primary"}},children:"Live Preview"}),e.jsxs(ve,{color:"inherit",variant:"caption",target:"_blank",rel:"noopener",href:Y,sx:{textDecoration:"underline",display:"inline-flex",alignItems:"center"},children:[e.jsx(h,{icon:"eva:external-link-fill",width:16,sx:{mr:.5}}),"Get Free Version"]})]}),e.jsx(k,{color:"inherit",size:"large",variant:"outlined",startIcon:e.jsx(h,{icon:"eva:external-link-fill",width:24}),target:"_blank",rel:"noopener",href:ee,sx:{borderColor:"text.primary"},children:"Design Preview"})]})}),e.jsxs(l,{spacing:3,sx:{textAlign:"center",opacity:.48},children:[e.jsx(n.div,{variants:t().in,children:e.jsx(r,{variant:"overline",children:"Available For"})}),e.jsx(l,{spacing:2,direction:"row",justifyContent:"center",children:["sketch","figma","js","ts","nextjs"].map(i=>e.jsx(n.div,{variants:t().in,children:e.jsx(E,{src:`/assets/icons/platforms/ic_${i}.svg`})},i))})]})]})}function ii(){const s=U().palette.mode==="light",o={repeatType:"loop",ease:"linear",duration:60*4,repeat:1/0};return e.jsxs(l,{direction:"row",alignItems:"flex-start",sx:{height:1,overflow:"hidden",position:"absolute",mt:`${fe.H_MAIN_DESKTOP}px`},children:[e.jsxs(l,{component:n.div,variants:t().in,sx:{width:344,position:"relative"},children:[e.jsx(c,{component:n.img,animate:{y:["0%","100%"]},transition:o,alt:`hero_${s?"light":"dark"}_1`,src:`/assets/images/home/hero_${s?"light":"dark"}_1.png`,sx:{position:"absolute"}}),e.jsx(c,{component:n.img,animate:{y:["-100%","0%"]},transition:o,alt:`hero_${s?"light":"dark"}_1`,src:`/assets/images/home/hero_${s?"light":"dark"}_1.png`,sx:{position:"absolute"}})]}),e.jsxs(l,{component:n.div,variants:t().in,sx:{width:720,position:"relative",ml:-2},children:[e.jsx(c,{component:n.img,animate:{y:["100%","0%"]},transition:o,alt:`hero_${s?"light":"dark"}_2`,src:`/assets/images/home/hero_${s?"light":"dark"}_2.png`,sx:{position:"absolute"}}),e.jsx(c,{component:n.img,animate:{y:["0%","-100%"]},transition:o,alt:`hero_${s?"light":"dark"}_2`,src:`/assets/images/home/hero_${s?"light":"dark"}_2.png`,sx:{position:"absolute"}})]})]})}const ni=[{icon:" /assets/icons/home/ic_make_brand.svg",title:"Branding",description:"Consistent design makes it easy to brand your own."},{icon:" /assets/icons/home/ic_design.svg",title:"UI & UX Design",description:"The kit is built on the principles of the atomic design system. It helps you to create projects fastest and easily customized packages for your projects."},{icon:" /assets/icons/home/ic_development.svg",title:"Development",description:"Easy to customize and extend, saving you time and money."}],ti=g("div")(({theme:i})=>({padding:i.spacing(10,0),[i.breakpoints.up("md")]:{padding:i.spacing(15,0)}})),si=g(Le)(({theme:i})=>({backgroundColor:i.palette.background.default,textAlign:"center",padding:i.spacing(10,5),[i.breakpoints.up("md")]:{boxShadow:"none"}}));function ri(){return e.jsx(ti,{children:e.jsxs(S,{component:$,children:[e.jsxs(l,{spacing:3,sx:{textAlign:"center",mb:{xs:5,md:10}},children:[e.jsx(n.div,{variants:t().inUp,children:e.jsx(r,{component:"div",variant:"overline",sx:{color:"text.disabled"},children:"Minimal UI"})}),e.jsx(n.div,{variants:t().inDown,children:e.jsxs(r,{variant:"h2",children:["What minimal ",e.jsx("br",{})," helps you?"]})})]}),e.jsx(c,{gap:{xs:3,lg:10},display:"grid",alignItems:"center",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(3, 1fr)"},children:ni.map((i,s)=>e.jsx(n.div,{variants:t().inUp,children:e.jsxs(si,{sx:{...s===1&&{boxShadow:o=>({md:`-40px 40px 80px ${o.palette.mode==="light"?w(o.palette.grey[500],.16):w(o.palette.common.black,.4)}`})}},children:[e.jsx(C,{src:i.icon,alt:i.title,sx:{mx:"auto",width:48,height:48}}),e.jsx(r,{variant:"h5",sx:{mt:8,mb:2},children:i.title}),e.jsx(r,{sx:{color:"text.secondary"},children:i.description})]})},i.title))})]})})}const ai=g("div")(({theme:i})=>({textAlign:"center",padding:i.spacing(10,0),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundImage:"url('/assets/background/overlay_4.jpg')",[i.breakpoints.up("md")]:{padding:i.spacing(20,0)}}));function oi(){const{themeMode:i,onToggleMode:s}=V();return e.jsx(ai,{children:e.jsxs(S,{component:$,children:[e.jsx(n.div,{variants:t().inUp,children:e.jsx(r,{component:"div",variant:"overline",sx:{color:"primary.main"},children:"Easy switch between styles."})}),e.jsx(n.div,{variants:t().inUp,children:e.jsxs(l,{spacing:2,direction:"row",alignItems:"center",display:"inline-flex",children:[e.jsx(r,{variant:"h2",sx:{my:3,color:"common.white"},children:"Dark mode"}),e.jsx(F,{color:i==="dark"?"warning":"default",onClick:s,children:e.jsx(E,{src:`/assets/icons/setting/ic_${i==="light"?"moon":"sun"}.svg`})})]})}),e.jsx(n.div,{variants:t().inUp,children:e.jsx(r,{sx:{color:"grey.500"},children:"A dark theme that feels easier on the eyes."})}),e.jsx(n.div,{variants:t().inUp,children:e.jsx(C,{alt:"darkmode",src:"/assets/images/home/darkmode.jpg",sx:{borderRadius:2,my:{xs:5,md:10},boxShadow:o=>`-40px 40px 80px ${w(o.palette.common.black,.24)}`}})})]})})}const li=g("div")(({theme:i})=>({padding:i.spacing(10,0),[i.breakpoints.up("md")]:{padding:i.spacing(15,0)}}));function ci(){const i=_("up","md");return e.jsx(li,{children:e.jsx(S,{component:$,children:e.jsxs(f,{container:!0,alignItems:"center",justifyContent:"space-between",spacing:{xs:5,md:0},children:[e.jsx(f,{item:!0,xs:12,md:4,children:e.jsx(di,{})}),e.jsx(f,{item:!0,xs:12,md:7,children:e.jsx(xi,{})}),!i&&e.jsx(f,{item:!0,xs:12,sx:{textAlign:"center"},children:le})]})})})}function di(){const i=_("up","md");return e.jsxs(l,{sx:{textAlign:{xs:"center",md:"left"}},children:[e.jsx(n.div,{variants:t().inDown,children:e.jsx(r,{variant:"overline",component:"div",sx:{color:"text.disabled"},children:"Looking For a"})}),e.jsx(n.div,{variants:t().inDown,children:e.jsx(r,{variant:"h2",sx:{mt:3,mb:{md:5}},children:"Landing Page Template?"})}),i&&e.jsxs(n.div,{variants:t().inDown,children:[" ",le," "]})]})}function xi(){return e.jsx(c,{component:n.div,variants:t().inUp,children:e.jsx(C,{disabledEffect:!0,alt:"rocket",src:"/assets/images/home/zone_landing.png"})})}const le=e.jsx(k,{color:"inherit",size:"large",variant:"outlined",target:"_blank",rel:"noopener",href:be,endIcon:e.jsx(h,{icon:"ic:round-arrow-right-alt"}),children:"Visit Zone Landing Page"}),pi=g("div")(({theme:i})=>({position:"relative","&:before":{height:2,bottom:-1,zIndex:11,content:'""',width:"100%",position:"absolute",backgroundColor:i.palette.grey[900]}})),hi=g("div")(({theme:i})=>({overflow:"hidden",position:"relative",backgroundColor:w(i.palette.grey[500],.08)})),gi=g("div")(({theme:i})=>({top:0,left:0,zIndex:8,width:"100%",height:"100%",textAlign:"center",position:"absolute",paddingTop:i.spacing(10),...H({startColor:`${i.palette.background.default} 25%`,endColor:w(i.palette.background.default,0)}),[i.breakpoints.up("md")]:{background:"unset",position:"unset",textAlign:"left",padding:i.spacing(25,0)}})),mi=g(n.img)(({theme:i})=>({minHeight:560,[i.breakpoints.up("md")]:{top:1,zIndex:8,minHeight:"auto",position:"absolute",boxShadow:`-40px 80px 80px ${i.palette.mode==="light"?w(i.palette.grey[500],.4):i.palette.common.black}`}}));function ui(){return e.jsx(pi,{children:e.jsxs(hi,{children:[e.jsx(S,{component:$,sx:{position:"relative"},children:e.jsxs(f,{container:!0,children:[e.jsx(f,{item:!0,md:6,children:e.jsx(ji,{})}),e.jsx(f,{item:!0,md:6,children:e.jsx(mi,{src:"/assets/images/home/for_designer.jpg",variants:t().in})})]})}),e.jsx(B,{}),e.jsx(B,{anchor:"bottom"})]})})}function ji(){const i=U();return e.jsxs(gi,{children:[e.jsx(n.div,{variants:t().inUp,children:e.jsx(r,{component:"div",variant:"overline",sx:{color:"text.disabled"},children:"Professional Kit"})}),e.jsx(n.div,{variants:t().inUp,children:e.jsx(r,{variant:"h2",sx:{mt:3,mb:5,...Q(`300deg, ${i.palette.primary.main} 0%, ${i.palette.warning.main} 100%`)},children:"For Designer"})}),e.jsx(n.div,{variants:t().inUp,children:e.jsx(k,{color:"inherit",size:"large",variant:"outlined",endIcon:e.jsx(h,{icon:"ic:round-arrow-right-alt"}),target:"_blank",rel:"noopener",href:ee,sx:{bgcolor:"text.primary",color:i.palette.mode==="light"?"common.white":"grey.800","&:hover":{bgcolor:"text.primary"}},children:"Go to Figma Workspace"})})]})}B.propTypes={anchor:b.oneOf(["top","bottom"])};function B({anchor:i="top",...s}){const o=U(),p=o.palette.mode==="light";return e.jsx(c,{sx:{top:0,left:0,width:1,position:"absolute",color:"background.default",zIndex:{xs:0,md:9},height:{xs:40,md:64},...K(`drop-shadow(320px 20px 80px ${p?w(o.palette.grey[700],.4):o.palette.common.black})`),...i==="bottom"&&{zIndex:9,bottom:0,top:"unset",color:"grey.900",transform:"scale(-1)",...K("none")}},...s,children:e.jsx("svg",{width:"100%",height:"100%",viewBox:"0 0 1440 64",preserveAspectRatio:"none",children:e.jsx("path",{d:"M1440 0H0L1440 64V0Z",fill:"currentColor"})})})}const vi=g("div")(({theme:i})=>({padding:i.spacing(10,0),[i.breakpoints.up("md")]:{padding:i.spacing(15,0)}}));function fi(){return e.jsx(vi,{children:e.jsxs(S,{component:$,sx:{position:"relative"},children:[e.jsx(bi,{}),e.jsx(n.div,{variants:t().inDown,children:e.jsx(ki,{})}),e.jsx(yi,{})]})})}function bi(){return e.jsxs(l,{spacing:3,sx:{textAlign:"center"},children:[e.jsx(n.div,{variants:t().inDown,children:e.jsx(r,{component:"div",variant:"overline",sx:{color:"text.disabled"},children:"choose your style"})}),e.jsx(n.div,{variants:t().inDown,children:e.jsx(r,{variant:"h2",children:" Color presets "})}),e.jsx(n.div,{variants:t().inDown,children:e.jsx(r,{sx:{color:"text.secondary"},children:"Express your own style with just one click"})})]})}function yi(){const{themeColorPresets:i}=V();return e.jsxs(c,{sx:{position:"relative"},children:[e.jsx(C,{disabledEffect:!0,alt:"grid",src:"/assets/images/home/presets_grid.png"}),e.jsx(c,{sx:{position:"absolute",top:0},children:e.jsx(n.div,{variants:t().inUp,children:e.jsx(C,{disabledEffect:!0,alt:"screen",src:`/assets/images/home/presets_screen_${i}.png`})})}),e.jsx(c,{sx:{position:"absolute",top:0},children:e.jsx(n.div,{variants:t().inDown,children:e.jsx(n.div,{animate:{y:[0,-15,0]},transition:{duration:8,repeat:1/0},children:e.jsx(C,{disabledEffect:!0,alt:"sidebar",src:`/assets/images/home/presets_block_${i}.png`})})})}),e.jsx(c,{sx:{position:"absolute",top:0},children:e.jsx(n.div,{variants:t().inDown,children:e.jsx(n.div,{animate:{y:[-5,10,-5]},transition:{duration:8,repeat:1/0},children:e.jsx(C,{disabledEffect:!0,alt:"sidebar",src:`/assets/images/home/presets_chart_${i}.png`})})})}),e.jsx(c,{sx:{position:"absolute",top:0},children:e.jsx(n.div,{variants:t().inDown,children:e.jsx(n.div,{animate:{y:[-25,5,-25]},transition:{duration:10,repeat:1/0},children:e.jsx(C,{disabledEffect:!0,alt:"sidebar",src:`/assets/images/home/presets_sidebar_${i}.png`})})})})]})}function ki(){const{themeColorPresets:i,onChangeColorPresets:s,presetsOption:o}=V();return e.jsx(ye,{name:"themeColorPresets",value:i,onChange:s,sx:{my:5},children:e.jsx(l,{alignItems:"center",justifyContent:"center",sx:{width:100,height:88,mx:"auto",position:"relative"},children:o.map((p,d)=>{const{name:a,value:m}=p,y=i===a;return e.jsx(ke,{title:a,children:e.jsx(Oe,{sx:{width:24,height:24,borderRadius:"50%",position:"absolute",color:"common.white",...d===0&&{bottom:0},...d===1&&{left:19},...d===2&&{right:19},...d===3&&{top:0,left:0},...d===4&&{top:0},...d===5&&{top:0,right:0}},children:e.jsxs(c,{sx:{bgcolor:m,width:1,height:1,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"50%"},children:[y&&e.jsx(h,{icon:"eva:color-picker-fill",width:16}),e.jsx(T,{label:"",value:a,control:e.jsx(ie,{sx:{display:"none"}}),sx:{top:0,left:0,margin:0,width:1,height:1,position:"absolute"}})]})})},a)})})})}const wi=g("div")(({theme:i})=>({backgroundColor:i.palette.background.neutral,padding:i.spacing(10,0),[i.breakpoints.up("md")]:{padding:i.spacing(15,0)}}));function Ci(){return e.jsx(wi,{children:e.jsxs(S,{component:$,children:[e.jsx(Si,{}),e.jsx($i,{})]})})}function Si(){return e.jsxs(l,{spacing:3,sx:{mb:10,textAlign:"center"},children:[e.jsx(n.div,{variants:t().inUp,children:e.jsx(r,{component:"div",variant:"overline",sx:{mb:2,color:"text.disabled"},children:"pricing plans"})}),e.jsx(n.div,{variants:t().inDown,children:e.jsxs(r,{variant:"h2",children:["The right plan for ",e.jsx("br",{})," your business"]})}),e.jsx(n.div,{variants:t().inDown,children:e.jsx(r,{sx:{color:"text.secondary"},children:"Choose the perfect plan for your needs. Always flexible to grow"})})]})}function $i(){const i=_("up","md"),[s,o]=u.useState("Standard"),p=e.jsx(c,{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",sx:{borderRadius:2,border:a=>`dashed 1px ${a.palette.divider}`},children:L.map(a=>e.jsx(n.div,{variants:t().in,children:e.jsx(W,{plan:a},a.license)},a.license))}),d=e.jsxs(e.Fragment,{children:[e.jsx(l,{alignItems:"center",sx:{mb:5},children:e.jsx(re,{value:s,onChange:(a,m)=>o(m),children:L.map(a=>e.jsx(ae,{value:a.license,label:a.license},a.license))})}),e.jsx(c,{sx:{borderRadius:2,border:a=>`dashed 1px ${a.palette.divider}`},children:L.map(a=>a.license===s&&e.jsx(W,{plan:a,sx:{borderLeft:m=>`dashed 1px ${m.palette.divider}`}},a.license))})]});return e.jsxs(e.Fragment,{children:[i?p:d,e.jsx(n.div,{variants:t().in,children:e.jsxs(c,{sx:{textAlign:"center",mt:{xs:5,md:10}},children:[e.jsx(n.div,{variants:t().inDown,children:e.jsx(r,{variant:"h4",children:"Still have questions?"})}),e.jsx(n.div,{variants:t().inDown,children:e.jsx(r,{sx:{mt:2,mb:5,color:"text.secondary"},children:"Please describe your case to receive the most accurate advice."})}),e.jsx(n.div,{variants:t().inUp,children:e.jsx(k,{color:"inherit",size:"large",variant:"contained",href:"mailto:support@minimals.cc?subject=[Feedback] from Customer",sx:{bgcolor:"text.primary",color:a=>a.palette.mode==="light"?"common.white":"grey.800","&:hover":{bgcolor:"text.primary"}},children:"Contact us"})})]})})]})}W.propTypes={sx:b.object,plan:b.shape({license:b.string,icons:b.arrayOf(b.string),commons:b.arrayOf(b.string),options:b.arrayOf(b.string)})};function W({plan:i,sx:s,...o}){const{license:p,commons:d,options:a,icons:m}=i,y=p==="Standard",D=p==="Standard Plus";return e.jsxs(l,{spacing:5,sx:{p:5,pt:10,...D&&{borderLeft:j=>`dashed 1px ${j.palette.divider}`,borderRight:j=>`dashed 1px ${j.palette.divider}`,...s}},...o,children:[e.jsxs(l,{spacing:2,children:[e.jsx(r,{variant:"overline",component:"div",sx:{color:"text.disabled"},children:"License"}),e.jsxs(c,{sx:{position:"relative"},children:[e.jsx(r,{variant:"h4",children:p}),e.jsx(c,{sx:{left:0,bottom:4,width:40,height:8,opacity:.48,bgcolor:"error.main",position:"absolute",...y&&{bgcolor:"primary.main"},...D&&{bgcolor:"warning.main"}}})]})]}),y?e.jsx(E,{src:m[2],sx:{width:24,height:24}}):e.jsx(l,{direction:"row",spacing:2,children:m.map(j=>e.jsx(E,{src:j,sx:{width:24,height:24}},j))}),e.jsxs(l,{spacing:2.5,children:[d.map(j=>e.jsxs(l,{spacing:1,direction:"row",alignItems:"center",children:[e.jsx(h,{icon:"eva:checkmark-fill",width:16}),e.jsx(r,{variant:"body2",children:j})]},j)),e.jsx(we,{sx:{borderStyle:"dashed"}}),a.map((j,A)=>{const R=y&&A===1||y&&A===2||y&&A===3||D&&A===3;return e.jsxs(l,{spacing:1,direction:"row",alignItems:"center",sx:{...R&&{color:"text.disabled"}},children:[e.jsx(h,{icon:R?"eva:close-fill":"eva:checkmark-fill",width:16}),e.jsx(r,{variant:"body2",children:j})]},j)})]}),e.jsx(l,{alignItems:"flex-end",children:e.jsx(k,{color:"inherit",size:"small",target:"_blank",rel:"noopener",href:ne,endIcon:e.jsx(h,{icon:"eva:chevron-right-fill"}),children:"Learn more"})})]})}function _i(){const i=U();return e.jsx(S,{component:$,children:e.jsxs(l,{alignItems:"center",direction:{xs:"column",md:"row"},sx:{...H({direction:"135deg",startColor:i.palette.primary.main,endColor:i.palette.primary.dark}),borderRadius:2,pb:{xs:5,md:0}},children:[e.jsx(Ai,{}),e.jsx(Ii,{})]})})}function Ii(){return e.jsxs(c,{sx:{textAlign:{xs:"center",md:"left"}},children:[e.jsxs(c,{component:n.div,variants:t().inDown,sx:{color:"common.white",mb:5,typography:"h2"},children:["Get started with",e.jsx("br",{})," minimal kit today"]}),e.jsxs(l,{direction:{xs:"column",md:"row"},justifyContent:{xs:"center",md:"flex-start"},spacing:2,children:[e.jsx(n.div,{variants:t().inRight,children:e.jsx(k,{color:"inherit",size:"large",variant:"contained",target:"_blank",rel:"noopener",href:ne,sx:{color:"grey.800",bgcolor:"common.white"},children:"Purchase Now"})}),e.jsx(n.div,{variants:t().inRight,children:e.jsx(k,{color:"inherit",size:"large",variant:"outlined",target:"_blank",rel:"noopener",href:Y,endIcon:e.jsx(h,{icon:"eva:external-link-fill",width:16,sx:{mr:.5}}),sx:{color:"common.white","&:hover":{borderColor:"currentColor"}},children:"Get Free Version"})})]})]})}function Ai(){return e.jsx(l,{component:n.div,variants:t().inUp,alignItems:"center",children:e.jsx(n.div,{animate:{y:[-20,0,-20]},transition:{duration:4,repeat:1/0},children:e.jsx(C,{visibleByDefault:!0,disabledEffect:!0,alt:"rocket",src:"/assets/images/home/rocket.png",sx:{maxWidth:460}})})})}const Di=g("div")(({theme:i})=>({padding:i.spacing(10,0),[i.breakpoints.up("md")]:{padding:i.spacing(15,0)}}));function Ti(){return e.jsx(Di,{children:e.jsxs(S,{component:$,children:[e.jsx(Pi,{}),e.jsx(Ri,{})]})})}function Pi(){return e.jsxs(l,{spacing:3,sx:{maxWidth:520,mx:"auto",zIndex:{md:99},position:{md:"absolute"},textAlign:{xs:"center",md:"left"}},children:[e.jsx(n.div,{variants:t().inUp,children:e.jsx(r,{component:"div",variant:"overline",sx:{color:"text.disabled"},children:"clean & clear"})}),e.jsx(n.div,{variants:t().inUp,children:e.jsx(r,{variant:"h2",sx:{textShadow:i=>i.palette.mode==="light"?"unset":`4px 4px 16px ${w(i.palette.grey[800],.48)}`},children:"Beautiful, modern and clean user interfaces"})})]})}function Ri(){return e.jsx(c,{sx:{position:"relative"},children:[...Array(10)].map((i,s)=>e.jsx(c,{component:n.div,variants:t().inUp,sx:{top:0,left:0,position:"absolute",...s===0&&{zIndex:8},...s===9&&{position:"relative",zIndex:9}},children:e.jsx(C,{disabledEffect:!0,alt:`clean-${s+1}`,src:`/assets/images/home/clean_${s+1}.png`})},s))})}const zi=g("div")(({theme:i})=>({padding:i.spacing(10,0),[i.breakpoints.up("md")]:{paddingTop:i.spacing(15),paddingBottom:i.spacing(20)}})),Ei=g("div")(({theme:i})=>({...H({color:w(i.palette.background.default,i.palette.mode==="light"?.9:.98),imgUrl:"/assets/background/overlay_3.jpg"}),padding:i.spacing(1.5,0),borderRadius:Number(i.shape.borderRadius)*2,[i.breakpoints.up("md")]:{padding:i.spacing(2,0)},[i.breakpoints.up("md")]:{padding:i.spacing(2.5)}})),Hi=g("div")(({theme:i})=>({textAlign:"center",[i.breakpoints.up("md")]:{textAlign:"left",paddingLeft:i.spacing(5),paddingTop:i.spacing(15)}})),I=g("div")(({theme:i})=>({display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{margin:i.spacing(1.5),[i.breakpoints.up("md")]:{margin:i.spacing(2)},[i.breakpoints.up("lg")]:{margin:i.spacing(2.5)}}}));function Ui(){const i=_("up","md");return e.jsx(zi,{children:e.jsx(S,{component:$,children:e.jsxs(f,{direction:{xs:"column",md:"row-reverse"},container:!0,spacing:5,children:[e.jsx(f,{item:!0,xs:12,md:5,children:e.jsx(Li,{})}),e.jsx(f,{item:!0,xs:12,md:7,children:e.jsx(Oi,{})}),!i&&e.jsx(f,{item:!0,xs:12,sx:{textAlign:"center"},children:ce})]})})})}function Li(){const i=_("up","md");return e.jsxs(Hi,{children:[e.jsx(n.div,{variants:t().inUp,children:e.jsx(r,{component:"div",variant:"overline",sx:{color:"text.disabled"},children:"Interface Starter Kit"})}),e.jsx(n.div,{variants:t().inUp,children:e.jsxs(r,{variant:"h2",sx:{my:3},children:["Huge pack ",e.jsx("br",{}),"of elements"]})}),e.jsx(n.div,{variants:t().inUp,children:e.jsx(r,{sx:{mb:5,color:"text.secondary"},children:"We collected most popular elements. Menu, sliders, buttons, inputs etc. are all here. Just dive in!"})}),i&&ce]})}function Oi(){const i=_("up","md"),s=_("up","lg"),[o,p]=u.useState(24),[d,a]=u.useState("Option 1"),[m,y]=u.useState("left"),[D,j]=u.useState(2),[A,R]=u.useState("Angular"),[de,G]=u.useState(null),xe=x=>{G(x.currentTarget)},N=()=>{G(null)};return e.jsxs(Ei,{children:[e.jsxs(I,{children:[e.jsx(n.div,{variants:t().in,children:e.jsx(k,{variant:"contained",startIcon:e.jsx(h,{icon:"ic:round-add-shopping-cart"}),children:"Add To Cart"})}),e.jsx(n.div,{variants:t().in,children:e.jsx(k,{variant:"soft",startIcon:e.jsx(h,{icon:"eva:cloud-upload-fill"}),children:"Upload"})}),e.jsx(n.div,{variants:t().in,children:e.jsx(Ce,{color:"info",size:"medium",children:e.jsx(h,{icon:"eva:search-fill"})})}),e.jsx(n.div,{variants:t().in,children:e.jsx(Se,{color:"error"})})]}),e.jsxs(I,{children:[e.jsx(n.div,{variants:t().in,children:e.jsx(re,{value:A,onChange:(x,v)=>R(v),sx:{borderBottom:x=>`solid 1px ${x.palette.divider}`},children:["Angular","React","Vue"].map(x=>e.jsx(ae,{value:x,label:x,sx:{"&:not(:last-of-type)":{mr:3}}},x))})}),e.jsx(n.div,{variants:t().in,children:e.jsx(Fe,{size:"small",color:"primary",value:m,exclusive:!0,onChange:(x,v)=>{v!==null&&y(v)},"aria-label":"text alignment",children:["left","center","right"].map(x=>e.jsx(Me,{value:x,"aria-label":`${x} aligned`,children:e.jsx(h,{icon:`carbon:align-horizontal-${x}`})},x))})}),e.jsx(n.div,{variants:t().in,children:e.jsx($e,{color:"warning",onDelete:()=>{},avatar:e.jsx(z,{src:P.image.avatar(2)}),label:"Chip"})})]}),e.jsxs(I,{children:[e.jsx(n.div,{variants:t().in,children:e.jsx(z,{src:P.image.avatar(19),BadgeProps:{badgeContent:e.jsx(te,{status:"online"})}})}),e.jsx(n.div,{variants:t().in,children:e.jsx(_e,{children:[...Array(8)].map((x,v)=>e.jsx(z,{src:P.image.avatar(v)},v))})}),e.jsx(n.div,{variants:t().in,children:e.jsx(se,{value:D,onChange:(x,v)=>{j(v)}})}),e.jsx(n.div,{variants:t().in,children:e.jsx(Ie,{variant:"filled",color:"error",startIcon:e.jsx(h,{icon:"eva:email-fill"}),children:"Label"})})]}),e.jsxs(I,{sx:{flexWrap:{lg:"nowrap"}},children:[e.jsx(n.div,{variants:t().in,children:e.jsx(Ae,{valueLabelDisplay:"on",value:o,onChange:(x,v)=>{p(v)},sx:{maxWidth:220}})}),e.jsx(n.div,{variants:t().in,children:e.jsxs(De,{severity:"success",onClose:()=>{},children:[e.jsx(Be,{children:"Success"}),"This is a success alert — ",e.jsx("strong",{children:"check it out!"})]})})]}),i&&e.jsxs(I,{children:[e.jsx(n.div,{variants:t().in,children:e.jsx(We,{count:10})}),e.jsx(n.div,{variants:t().in,children:e.jsx(k,{color:"info",variant:"contained",onClick:xe,startIcon:e.jsx(h,{icon:"eva:menu-fill"}),children:"Menu"})}),e.jsx(Te,{open:de,onClose:N,sx:{width:160},children:e.jsx(Pe,{sx:{maxHeight:160},children:[...Array(8)].map((x,v)=>e.jsxs(q,{onClick:N,children:["Item ",v+1]},v))})})]}),i&&e.jsxs(I,{children:[e.jsx(n.div,{variants:t().in,children:e.jsx(T,{control:e.jsx(Re,{defaultChecked:!0}),label:"Label"})}),e.jsx(n.div,{variants:t().in,children:e.jsx(T,{control:e.jsx(ie,{color:"error",defaultChecked:!0}),label:"Radio Button"})}),e.jsx(n.div,{variants:t().in,children:e.jsx(T,{control:e.jsx(M,{color:"info",defaultChecked:!0}),label:"Checkbox"})}),e.jsx(n.div,{variants:t().in,children:e.jsx(T,{control:e.jsx(M,{color:"warning",indeterminate:!0}),label:"Checkbox"})})]}),s&&e.jsxs(I,{sx:{flexWrap:"nowrap"},children:[e.jsx(n.div,{variants:t().in,children:Fi}),e.jsxs(l,{spacing:3,sx:{width:1},children:[e.jsx(n.div,{variants:t().in,children:e.jsx(O,{fullWidth:!0,label:"Text Field",value:"Value"})}),e.jsx(n.div,{variants:t().in,children:e.jsx(O,{select:!0,fullWidth:!0,label:"Select",value:d,onChange:x=>{a(x.target.value)},children:["Option 1","Option 2","Option 3","Option 4"].map(x=>e.jsx(q,{value:x,sx:{mx:1,borderRadius:.75,typography:"body2",textTransform:"capitalize"},children:x},x))})}),e.jsx(n.div,{variants:t().in,children:e.jsx(O,{fullWidth:!0,multiline:!0,rows:3,label:"Textarea"})})]})]})]})}const ce=e.jsx(n.div,{variants:t().inUp,children:e.jsx(k,{size:"large",color:"inherit",variant:"outlined",target:"_blank",rel:"noopener",href:ze.components,endIcon:e.jsx(h,{icon:"ic:round-arrow-right-alt"}),children:"View All Components"})}),Fi=e.jsxs(Ee,{sx:{width:320,borderRadius:2,boxShadow:i=>i.customShadows.z24},children:[e.jsx(Ve,{title:"Jayvion Simon",subheader:"California, United States",avatar:e.jsx(z,{src:P.image.avatar(0),BadgeProps:{badgeContent:e.jsx(te,{status:"online"})},sx:{width:48,height:48}}),titleTypographyProps:{typography:"subtitle2",sx:{mb:.25}},subheaderTypographyProps:{typography:"caption"},sx:{p:2}}),e.jsx(C,{alt:"cover",src:P.image.cover(12),ratio:"16/9"}),e.jsx(r,{variant:"body2",sx:{color:"text.secondary",pt:2,px:2},children:"Phasellus dolor. Fusce egestas elit eget lorem. Quisque id odio."}),e.jsxs(l,{direction:"row",sx:{px:2,py:1},children:[e.jsx(M,{defaultChecked:!0,color:"error",size:"small",icon:e.jsx(h,{icon:"eva:heart-fill"}),checkedIcon:e.jsx(h,{icon:"eva:heart-fill"})}),e.jsx(c,{sx:{flexGrow:1}}),e.jsx(F,{children:e.jsx(h,{icon:"eva:share-outline"})}),e.jsx(F,{children:e.jsx(h,{icon:"eva:message-circle-fill"})})]})]});function en(){return e.jsxs(e.Fragment,{children:[e.jsx(He,{children:e.jsx("title",{children:" The starting point for your next project | Minimal UI"})}),e.jsx(Je,{}),e.jsx(Ye,{}),e.jsxs(c,{sx:{overflow:"hidden",position:"relative",bgcolor:"background.default"},children:[e.jsx(ri,{}),e.jsx(Ui,{}),e.jsx(ui,{}),e.jsx(oi,{}),e.jsx(fi,{}),e.jsx(Ti,{}),e.jsx(Ci,{}),e.jsx(ci,{}),e.jsx(_i,{})]})]})}export{en as default};