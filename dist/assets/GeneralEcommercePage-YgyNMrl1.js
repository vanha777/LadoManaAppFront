import{az as I,ac as e,aJ as G,aK as K,aL as B,aM as r,aN as b,an as i,aD as S,aO as k,F as Q,aP as L,ae as c,aQ as V,aR as x,aS as X,aT as E,aU as O,aV as Z,aj as q,ao as ee,a8 as te,aA as re,as as ae,aB as se,aW as ne,aX as ie,aY as oe,aZ as le,a_ as ce}from"./index-kAVNsXXW.js";import{C as de,a as me}from"./CarouselArrowIndex-o3dBDXN5.js";import{C as h}from"./Card-yNtnckip.js";import{C as xe}from"./CardContent-Yl8ry9fC.js";import{C as he}from"./IncrementerButton-SLvR_Q0x.js";import{u as P,C as W}from"./index-EQs3GfuX.js";import{C as T}from"./CardHeader-cbPk7NV8.js";import{T as pe}from"./TablePaginationCustom-D5U7UEwi.js";import{T as ue,a as je,b as ge,c as be}from"./TableRow-zrsFapiu.js";import{T as v}from"./TableCell-7incTXUx.js";import{C as ye}from"./ColorSinglePicker-3AMF9EUF.js";import{A as fe}from"./AppTopInstalledCountries-Uj5Oy7T5.js";import{G as d}from"./Grid-UjSMx0L8.js";import"./EmptyContent-vRT2zqjA.js";import"./TablePagination-Vshr5hr6.js";import"./KeyboardArrowRight-6uRlvlB4.js";import"./LastPage-N6rQPigF.js";import"./index-Y0zBF9nK.js";import"./orderBy-9liVrfYv.js";import"./Rating-w1NpzLI0.js";const ve=G("div")(({theme:t})=>({...K({startColor:`${B(t.palette.common.black,0)} 0%`,endColor:`${t.palette.common.black} 75%`}),top:0,left:0,right:0,bottom:0,zIndex:8,position:"absolute"}));R.propTypes={list:r.array};function R({list:t,...a}){const o={speed:1e3,dots:!0,arrows:!1,autoplay:!0,slidesToShow:1,slidesToScroll:1,rtl:I().direction==="rtl",...de({sx:{right:24,bottom:24,position:"absolute"}})};return e.jsx(h,{...a,children:e.jsx(me,{...o,children:t.map(n=>e.jsx(D,{item:n},n.id))})})}D.propTypes={item:r.object};function D({item:t}){const{image:a,name:s}=t;return e.jsxs(b,{sx:{position:"relative"},children:[e.jsxs(xe,{sx:{left:0,bottom:0,zIndex:9,maxWidth:"80%",position:"absolute",color:"common.white"},children:[e.jsx(i,{variant:"overline",sx:{opacity:.48},children:"New"}),e.jsx(i,{noWrap:!0,variant:"h5",sx:{mt:1,mb:3},children:s}),e.jsx(S,{variant:"contained",children:"Buy Now"})]}),e.jsx(ve,{}),e.jsx(k,{alt:s,src:a,sx:{height:{xs:280,xl:320}}})]})}N.propTypes={chart:r.object,title:r.string,subheader:r.string};function N({title:t,subheader:a,chart:s,...o}){const{colors:n,categories:l,series:p,options:u}=s,[j,y]=Q.useState("2019"),f=P({colors:n,legend:{position:"top",horizontalAlign:"right"},xaxis:{categories:l},...u});return e.jsxs(h,{...o,children:[e.jsx(T,{title:t,subheader:a,action:e.jsx(he,{value:j,onChange:m=>y(m.target.value),children:p.map(m=>e.jsx("option",{value:m.year,children:m.year},m.year))})}),p.map(m=>e.jsx(b,{sx:{mt:3,mx:3},dir:"ltr",children:m.year===j&&e.jsx(W,{type:"area",series:m.data,options:f,height:364})},m.year))]})}_.propTypes={title:r.string,tableData:r.array,subheader:r.string,tableLabels:r.array};function _({title:t,subheader:a,tableData:s,tableLabels:o,...n}){return e.jsxs(h,{...n,children:[e.jsx(T,{title:t,subheader:a,sx:{mb:3}}),e.jsx(ue,{sx:{overflow:"unset"},children:e.jsx(L,{children:e.jsxs(je,{sx:{minWidth:720},children:[e.jsx(pe,{headLabel:o}),e.jsx(ge,{children:s.map(l=>e.jsx(H,{row:l},l.id))})]})})})]})}H.propTypes={row:r.shape({flag:r.string,name:r.string,rank:r.string,email:r.string,total:r.number,avatar:r.string,category:r.string})};function H({row:t}){return e.jsxs(be,{children:[e.jsx(v,{children:e.jsxs(c,{direction:"row",alignItems:"center",children:[e.jsx(V,{alt:t.name,src:t.avatar}),e.jsxs(b,{sx:{ml:2},children:[e.jsxs(i,{variant:"subtitle2",children:[" ",t.name," "]}),e.jsx(i,{variant:"body2",sx:{color:"text.secondary"},children:t.email})]})]})}),e.jsx(v,{children:t.category}),e.jsx(v,{children:e.jsx(k,{src:t.flag,alt:"country flag",sx:{maxWidth:28,mx:"auto"}})}),e.jsx(v,{children:x(t.total)}),e.jsx(v,{align:"right",children:e.jsx(X,{variant:"soft",color:t.rank==="Top 1"&&"primary"||t.rank==="Top 2"&&"info"||t.rank==="Top 3"&&"success"||t.rank==="Top 4"&&"warning"||"error",children:t.rank})})]})}const w=400,A=72,Te=G("div")(({theme:t})=>({height:w,marginTop:t.spacing(5),"& .apexcharts-canvas svg":{height:w},"& .apexcharts-canvas svg,.apexcharts-canvas foreignObject":{overflow:"visible"},"& .apexcharts-legend":{height:A,alignContent:"center",position:"relative !important",borderTop:`solid 1px ${t.palette.divider}`,top:`calc(${w-A}px) !important`}}));z.propTypes={chart:r.object,title:r.string,total:r.number,subheader:r.string};function z({title:t,subheader:a,total:s,chart:o,...n}){const l=I(),{colors:p,series:u,options:j}=o,y=u.map(g=>g.value),f=p||[[l.palette.primary.light,l.palette.primary.main],[l.palette.warning.light,l.palette.warning.main]],m=P({chart:{sparkline:{enabled:!0}},labels:u.map(g=>g.label),legend:{floating:!0,horizontalAlign:"center"},fill:{type:"gradient",gradient:{colorStops:f.map(g=>[{offset:0,color:g[0]},{offset:100,color:g[1]}])}},plotOptions:{radialBar:{hollow:{size:"68%"},dataLabels:{value:{offsetY:16},total:{formatter:()=>E(s)}}}},...j});return e.jsxs(h,{...n,children:[e.jsx(T,{title:t,subheader:a}),e.jsx(Te,{dir:"ltr",children:e.jsx(W,{type:"radialBar",series:y,options:m,height:300})})]})}M.propTypes={data:r.array,title:r.string,subheader:r.string};function M({title:t,subheader:a,data:s,...o}){return e.jsxs(h,{...o,children:[e.jsx(T,{title:t,subheader:a}),e.jsx(c,{spacing:4,sx:{p:3},children:s.map(n=>e.jsx(Y,{progress:n},n.label))})]})}Y.propTypes={progress:r.shape({amount:r.number,label:r.string,value:r.number})};function Y({progress:t}){return e.jsxs(c,{spacing:1,children:[e.jsxs(c,{direction:"row",alignItems:"center",children:[e.jsx(i,{variant:"subtitle2",sx:{flexGrow:1},children:t.label}),e.jsx(i,{variant:"subtitle2",children:x(t.amount)}),e.jsxs(i,{variant:"body2",sx:{color:"text.secondary"},children:[" (",O(t.value),")"]})]}),e.jsx(Z,{variant:"determinate",value:t.value,color:t.label==="Total Income"&&"info"||t.label==="Total Expenses"&&"warning"||"primary"})]})}C.propTypes={sx:r.object,chart:r.object,title:r.string,total:r.number,percent:r.number};function C({title:t,percent:a,total:s,chart:o,sx:n,...l}){const{colors:p,series:u,options:j}=o,y=P({colors:p,chart:{animations:{enabled:!0},sparkline:{enabled:!0}},stroke:{width:2},tooltip:{x:{show:!1},y:{formatter:f=>E(f),title:{formatter:()=>""}},marker:{show:!1}},...j});return e.jsxs(h,{sx:{display:"flex",alignItems:"center",p:3,...n},...l,children:[e.jsxs(b,{sx:{flexGrow:1},children:[e.jsx(i,{variant:"subtitle2",paragraph:!0,children:t}),e.jsx(i,{variant:"h3",gutterBottom:!0,children:E(s)}),e.jsx($,{percent:a})]}),e.jsx(W,{type:"line",series:[{data:u}],options:y,width:120,height:80})]})}$.propTypes={percent:r.number};function $({percent:t}){return e.jsxs(c,{direction:"row",alignItems:"center",sx:{mt:2,mb:1},children:[e.jsx(q,{icon:t<0?"eva:trending-down-fill":"eva:trending-up-fill",sx:{mr:1,p:.5,width:24,height:24,borderRadius:"50%",color:"success.main",bgcolor:a=>B(a.palette.success.main,.16),...t<0&&{color:"error.main",bgcolor:a=>B(a.palette.error.main,.16)}}}),e.jsxs(i,{variant:"subtitle2",component:"div",noWrap:!0,children:[t>0&&"+",O(t),e.jsx(b,{component:"span",sx:{color:"text.secondary",typography:"body2"},children:" than last week"})]})]})}function J({title:t,subheader:a,list:s,...o}){return e.jsxs(h,{...o,children:[e.jsx(T,{title:t,subheader:a}),e.jsx(L,{children:e.jsx(c,{spacing:3,sx:{p:3,pr:0},children:s.map(n=>e.jsx(F,{product:n},n.id))})})]})}J.propTypes={list:r.array,title:r.string,subheader:r.string};F.propTypes={product:r.shape({image:r.string,name:r.string,price:r.number,priceSale:r.number,colors:r.arrayOf(r.string)})};function F({product:t}){const{name:a,image:s,price:o,priceSale:n}=t,l=n>0;return e.jsxs(c,{direction:"row",spacing:2,children:[e.jsx(k,{alt:a,src:s,sx:{width:48,height:48,borderRadius:1.5,flexShrink:0}}),e.jsxs(b,{sx:{flexGrow:1,minWidth:200},children:[e.jsx(ee,{sx:{color:"text.primary",typography:"subtitle2"},children:a}),e.jsxs(c,{direction:"row",children:[l&&e.jsx(i,{variant:"body2",sx:{color:"text.secondary",textDecoration:"line-through"},children:x(n)})," ",e.jsx(i,{variant:"body2",sx:{color:n?"error.main":"text.secondary"},children:x(o)})]})]}),e.jsx(ye,{limit:3,colors:t.colors,sx:{minWidth:72,pr:3}})]})}U.propTypes={sx:r.object,title:r.string,sentAmount:r.number,currentBalance:r.number};function U({title:t,sentAmount:a,currentBalance:s,sx:o,...n}){const l=s-a;return e.jsxs(h,{sx:{p:3,...o},...n,children:[e.jsx(i,{variant:"subtitle2",gutterBottom:!0,children:t}),e.jsxs(c,{spacing:2,children:[e.jsx(i,{variant:"h3",children:x(l)}),e.jsxs(c,{direction:"row",justifyContent:"space-between",children:[e.jsx(i,{variant:"body2",sx:{color:"text.secondary"},children:"Your Current Balance"}),e.jsx(i,{variant:"body2",children:x(s)})]}),e.jsxs(c,{direction:"row",justifyContent:"space-between",children:[e.jsx(i,{variant:"body2",sx:{color:"text.secondary"},children:"Sent Amount"}),e.jsxs(i,{variant:"body2",children:["- ",x(a)]})]}),e.jsxs(c,{direction:"row",justifyContent:"space-between",children:[e.jsx(i,{variant:"body2",sx:{color:"text.secondary"},children:"Total Amount"}),e.jsx(i,{variant:"subtitle1",children:x(l)})]}),e.jsxs(c,{direction:"row",spacing:1.5,children:[e.jsx(S,{fullWidth:!0,variant:"contained",color:"warning",children:"Transfer"}),e.jsx(S,{fullWidth:!0,variant:"contained",children:"Receive"})]})]})]})}function Ye(){const{user:t}=te(),a=I(),{themeStretch:s}=re();return e.jsxs(e.Fragment,{children:[e.jsx(ae,{children:e.jsx("title",{children:" General: E-commerce | Minimal UI"})}),e.jsx(se,{maxWidth:s?!1:"xl",children:e.jsxs(d,{container:!0,spacing:3,children:[e.jsx(d,{item:!0,xs:12,md:8,children:e.jsx(fe,{title:`Congratulations! 
 ${t==null?void 0:t.first_name}`,description:"Best seller of the month You have done 57.6% more sales today.",img:e.jsx(ne,{sx:{p:3,width:360,margin:{xs:"auto",md:"inherit"}}}),action:e.jsx(S,{variant:"contained",children:"Go Now"})})}),e.jsx(d,{item:!0,xs:12,md:4,children:e.jsx(R,{list:ie})}),e.jsx(d,{item:!0,xs:12,md:4,children:e.jsx(C,{title:"Product Sold",percent:2.6,total:765,chart:{colors:[a.palette.primary.main],series:[22,8,35,50,82,84,77,12,87,43]}})}),e.jsx(d,{item:!0,xs:12,md:4,children:e.jsx(C,{title:"Total Balance",percent:-.1,total:18765,chart:{colors:[a.palette.info.main],series:[56,47,40,62,73,30,23,54,67,68]}})}),e.jsx(d,{item:!0,xs:12,md:4,children:e.jsx(C,{title:"Sales Profit",percent:.6,total:4876,chart:{colors:[a.palette.warning.main],series:[40,70,75,70,50,28,7,64,38,27]}})}),e.jsx(d,{item:!0,xs:12,md:6,lg:4,children:e.jsx(z,{title:"Sale By Gender",total:2324,chart:{series:[{label:"Mens",value:44},{label:"Womens",value:75}]}})}),e.jsx(d,{item:!0,xs:12,md:6,lg:8,children:e.jsx(N,{title:"Yearly Sales",subheader:"(+43%) than last year",chart:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"],series:[{year:"2019",data:[{name:"Total Income",data:[10,41,35,151,49,62,69,91,48]},{name:"Total Expenses",data:[10,34,13,56,77,88,99,77,45]}]},{year:"2020",data:[{name:"Total Income",data:[148,91,69,62,49,51,35,41,10]},{name:"Total Expenses",data:[45,77,99,88,77,56,13,34,10]}]}]}})}),e.jsx(d,{item:!0,xs:12,md:6,lg:8,children:e.jsx(M,{title:"Sales Overview",data:oe})}),e.jsx(d,{item:!0,xs:12,md:6,lg:4,children:e.jsx(U,{title:"Current Balance",currentBalance:187650,sentAmount:25500})}),e.jsx(d,{item:!0,xs:12,md:6,lg:8,children:e.jsx(_,{title:"Best Salesman",tableData:le,tableLabels:[{id:"seller",label:"Seller"},{id:"product",label:"Product"},{id:"country",label:"Country",align:"center"},{id:"total",label:"Total"},{id:"rank",label:"Rank",align:"right"}]})}),e.jsx(d,{item:!0,xs:12,md:6,lg:4,children:e.jsx(J,{title:"Latest Products",list:ce})})]})})]})}export{Ye as default};
