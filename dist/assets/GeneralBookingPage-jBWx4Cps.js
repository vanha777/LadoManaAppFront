import{ac as e,aP as se,b2 as P,aN as y,aD as O,aj as b,aM as s,az as k,F as w,ae as d,aQ as D,an as p,bk as A,aS as L,ai as te,b3 as re,b4 as T,aV as ne,aL as z,b5 as E,aR as N,aU as ae,aT as W,ba as ie,b9 as H,aO as oe,bl as le,bp as ce,aA as de,as as he,aB as xe,bq as pe,br as ue,bs as me,bt as je,bu as M,bv as ge,bw as be}from"./index-kAVNsXXW.js";import{T as fe}from"./TablePaginationCustom-D5U7UEwi.js";import{C as f}from"./Card-yNtnckip.js";import{C}from"./CardHeader-cbPk7NV8.js";import{T as ve,a as ye,b as ke,c as Ce}from"./TableRow-zrsFapiu.js";import{T as v}from"./TableCell-7incTXUx.js";import{s as we}from"./index-Y0zBF9nK.js";import{u as S,C as R}from"./index-EQs3GfuX.js";import{s as Te}from"./sumBy-LVdRNqgV.js";import{b as _,a as F}from"./CarouselArrowIndex-o3dBDXN5.js";import{R as Ie}from"./Rating-w1NpzLI0.js";import{C as Se}from"./IncrementerButton-SLvR_Q0x.js";import{G as g}from"./Grid-UjSMx0L8.js";import"./EmptyContent-vRT2zqjA.js";import"./TablePagination-Vshr5hr6.js";import"./KeyboardArrowRight-6uRlvlB4.js";import"./LastPage-N6rQPigF.js";Y.propTypes={title:s.string,tableData:s.array,subheader:s.string,tableLabels:s.array};function Y({title:t,subheader:a,tableLabels:n,tableData:l,...r}){return e.jsxs(f,{...r,children:[e.jsx(C,{title:t,subheader:a,sx:{mb:3}}),e.jsx(ve,{sx:{overflow:"unset"},children:e.jsx(se,{children:e.jsxs(ye,{sx:{minWidth:960},children:[e.jsx(fe,{headLabel:n}),e.jsx(ke,{children:l.map(i=>e.jsx($,{row:i},i.id))})]})})}),e.jsx(P,{}),e.jsx(y,{sx:{p:2,textAlign:"right"},children:e.jsx(O,{size:"small",color:"inherit",endIcon:e.jsx(b,{icon:"eva:arrow-ios-forward-fill"}),children:"View All"})})]})}$.propTypes={row:s.shape({id:s.string,name:s.string,avatar:s.string,status:s.string,roomType:s.string,phoneNumber:s.string,checkIn:s.instanceOf(Date),checkOut:s.instanceOf(Date)})};function $({row:t}){const n=k().palette.mode==="light",[l,r]=w.useState(null),i=m=>{r(m.currentTarget)},o=()=>{r(null)},c=()=>{o(),console.log("DOWNLOAD",t.id)},h=()=>{o(),console.log("PRINT",t.id)},j=()=>{o(),console.log("SHARE",t.id)},x=()=>{o(),console.log("DELETE",t.id)};return e.jsxs(e.Fragment,{children:[e.jsxs(Ce,{children:[e.jsx(v,{children:e.jsxs(d,{direction:"row",alignItems:"center",spacing:2,children:[e.jsx(D,{alt:t.name,src:t.avatar}),e.jsx(p,{variant:"subtitle2",children:t.name})]})}),e.jsx(v,{children:A(new Date(t.checkIn),"dd MMM yyyy")}),e.jsx(v,{children:A(new Date(t.checkOut),"dd MMM yyyy")}),e.jsx(v,{children:e.jsx(L,{variant:n?"soft":"filled",color:t.status==="paid"&&"success"||t.status==="pending"&&"warning"||"error",children:we(t.status)})}),e.jsx(v,{children:t.phoneNumber}),e.jsx(v,{sx:{textTransform:"capitalize"},children:t.roomType}),e.jsx(v,{align:"right",children:e.jsx(te,{color:l?"inherit":"default",onClick:i,children:e.jsx(b,{icon:"eva:more-vertical-fill"})})})]}),e.jsxs(re,{open:l,onClose:o,arrow:"right-top",sx:{width:160},children:[e.jsxs(T,{onClick:c,children:[e.jsx(b,{icon:"eva:download-fill"}),"Download"]}),e.jsxs(T,{onClick:h,children:[e.jsx(b,{icon:"eva:printer-fill"}),"Print"]}),e.jsxs(T,{onClick:j,children:[e.jsx(b,{icon:"eva:share-fill"}),"Share"]}),e.jsx(P,{sx:{borderStyle:"dashed"}}),e.jsxs(T,{onClick:x,sx:{color:"error.main"},children:[e.jsx(b,{icon:"eva:trash-2-outline"}),"Delete"]})]})]})}G.propTypes={data:s.array,title:s.string,subheader:s.string};function G({title:t,subheader:a,data:n,...l}){return e.jsxs(f,{...l,children:[e.jsx(C,{title:t,subheader:a}),e.jsx(d,{spacing:3,sx:{px:3,my:5},children:n.map(r=>e.jsx(ne,{variant:"determinate",value:r.value,color:r.status==="Pending"&&"warning"||r.status==="Cancel"&&"error"||"success",sx:{height:8,bgcolor:i=>z(i.palette.grey[500],.16)}},r.status))}),e.jsx(d,{direction:"row",justifyContent:"space-between",sx:{px:3,pb:3},children:n.map(r=>e.jsxs(d,{alignItems:"center",children:[e.jsxs(d,{direction:"row",alignItems:"center",spacing:1,sx:{mb:1},children:[e.jsx(y,{sx:{width:12,height:12,borderRadius:.5,bgcolor:"success.main",...r.status==="Pending"&&{bgcolor:"warning.main"},...r.status==="Cancel"&&{bgcolor:"error.main"}}}),e.jsx(p,{variant:"subtitle2",sx:{color:"text.secondary"},children:r.status})]}),e.jsx(p,{variant:"h6",children:E(r.quantity)})]},r.status))})]})}J.propTypes={sx:s.object,chart:s.object,color:s.string,total:s.number,percent:s.number};function J({total:t,percent:a,color:n="primary",chart:l,sx:r,...i}){const o=k(),{series:c,options:h}=l,j=S({colors:[o.palette[n].main],chart:{sparkline:{enabled:!0}},xaxis:{labels:{show:!1}},yaxis:{labels:{show:!1}},stroke:{width:4},legend:{show:!1},grid:{show:!1},tooltip:{marker:{show:!1},y:{formatter:x=>N(x),title:{formatter:()=>""}}},fill:{gradient:{opacityFrom:0,opacityTo:0}},...h});return e.jsxs(f,{sx:{p:3,boxShadow:0,color:`${n}.darker`,bgcolor:`${n}.lighter`,...r},...i,children:[e.jsxs(d,{direction:"row",justifyContent:"space-between",sx:{mb:3},children:[e.jsxs("div",{children:[e.jsx(p,{sx:{mb:2,typography:"subtitle2"},children:"Total Incomes"}),e.jsx(p,{sx:{typography:"h3"},children:N(t)})]}),e.jsxs("div",{children:[e.jsxs(d,{direction:"row",alignItems:"center",justifyContent:"flex-end",sx:{mb:.6},children:[e.jsx(b,{icon:a>=0?"eva:trending-up-fill":"eva:trending-down-fill"}),e.jsxs(p,{variant:"subtitle2",component:"span",sx:{ml:.5},children:[a>0&&"+",ae(a)]})]}),e.jsx(p,{variant:"body2",component:"span",sx:{opacity:.72},children:" than last month"})]})]}),e.jsx(R,{type:"area",series:[{data:c}],options:j,height:132})]})}q.propTypes={chart:s.object,title:s.string,subheader:s.string};function q({title:t,subheader:a,chart:n,...l}){const r=k(),{colors:i,series:o,options:c}=n,h=Te(o,"value"),j=o.filter(u=>u.label==="Sold out")[0].value/h*100,x=i||[r.palette.primary.light,r.palette.primary.main],m=S({legend:{show:!1},grid:{padding:{top:-32,bottom:-32}},fill:{type:"gradient",gradient:{colorStops:[x].map(u=>[{offset:0,color:u[0]},{offset:100,color:u[1]}])}},plotOptions:{radialBar:{hollow:{size:"64%"},dataLabels:{name:{offsetY:-16},value:{offsetY:8},total:{label:"Rooms",formatter:()=>W(h)}}}},...c});return e.jsxs(f,{...l,children:[e.jsx(C,{title:t,subheader:a,sx:{mb:8}}),e.jsx(R,{type:"radialBar",series:[j],options:m,height:310}),e.jsx(d,{spacing:2,sx:{p:5},children:o.map(u=>e.jsx(U,{item:u},u.label))})]})}U.propTypes={item:s.shape({label:s.string,value:s.number})};function U({item:t}){return e.jsxs(d,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[e.jsxs(d,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(y,{sx:{width:16,height:16,bgcolor:a=>z(a.palette.grey[500],.16),borderRadius:.75,...t.label==="Sold out"&&{bgcolor:"primary.main"}}}),e.jsx(p,{variant:"subtitle2",sx:{color:"text.secondary"},children:t.label})]}),e.jsxs(p,{variant:"subtitle1",children:[" ",t.value," Rooms"]})]})}V.propTypes={sx:s.object,list:s.array,title:s.string,subheader:s.string};function V({title:t,subheader:a,list:n,sx:l,...r}){const i=k(),o=w.useRef(null),c={dots:!1,arrows:!1,slidesToShow:4,slidesToScroll:1,rtl:i.direction==="rtl",responsive:[{breakpoint:i.breakpoints.values.lg,settings:{slidesToShow:3}},{breakpoint:i.breakpoints.values.md,settings:{slidesToShow:2}},{breakpoint:i.breakpoints.values.sm,settings:{slidesToShow:1}}]},h=()=>{var x;(x=o.current)==null||x.slickPrev()},j=()=>{var x;(x=o.current)==null||x.slickNext()};return e.jsxs(y,{sx:{py:2,...l},...r,children:[e.jsx(C,{title:t,subheader:a,action:e.jsx(_,{onNext:j,onPrevious:h}),sx:{p:0,mb:3,"& .MuiCardHeader-action":{alignSelf:"center"}}}),e.jsx(F,{ref:o,...c,children:n.map(x=>e.jsx(Q,{item:x},x.id))})]})}Q.propTypes={item:s.shape({name:s.string,cover:s.string,avatar:s.string,person:s.string,roomType:s.string,roomNumber:s.string,bookdAt:s.instanceOf(Date)})};function Q({item:t}){const{avatar:a,name:n,roomNumber:l,bookdAt:r,person:i,cover:o,roomType:c}=t;return e.jsxs(ie,{sx:{mx:1.5,borderRadius:2,bgcolor:"background.neutral"},children:[e.jsxs(d,{spacing:2.5,sx:{p:3,pb:2.5},children:[e.jsxs(d,{direction:"row",alignItems:"center",spacing:2,children:[e.jsx(D,{alt:n,src:a}),e.jsxs("div",{children:[e.jsx(p,{variant:"subtitle2",children:n}),e.jsx(p,{variant:"caption",sx:{color:"text.disabled",mt:.5,display:"block"},children:H(r)})]})]}),e.jsxs(d,{direction:"row",alignItems:"center",spacing:3,sx:{color:"text.secondary"},children:[e.jsxs(d,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(b,{icon:"ic:round-vpn-key",width:16}),e.jsxs(p,{variant:"caption",children:["Room ",l]})]}),e.jsxs(d,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(b,{icon:"eva:people-fill",width:16}),e.jsxs(p,{variant:"caption",children:[i," Person"]})]})]})]}),e.jsxs(y,{sx:{p:1,position:"relative"},children:[e.jsx(L,{variant:"filled",color:c==="king"&&"error"||c==="double"&&"info"||"warning",sx:{right:16,zIndex:9,bottom:16,position:"absolute"},children:c}),e.jsx(oe,{alt:"cover",src:o,ratio:"1/1",sx:{borderRadius:1.5}})]})]})}const Re={width:106,height:106};Z.propTypes={chart:s.object};function Z({chart:t,...a}){const n=k(),l=le("up","sm"),{colors:r,series:i,options:o}=t,c=S({chart:{sparkline:{enabled:!0}},grid:{padding:{top:-9,bottom:-9}},legend:{show:!1},plotOptions:{radialBar:{hollow:{size:"64%"},track:{margin:0},dataLabels:{name:{show:!1},value:{offsetY:6,fontSize:n.typography.subtitle2.fontSize}}}},...o}),h={...c,colors:r};return e.jsx(f,{...a,children:e.jsx(d,{direction:{xs:"column",sm:"row"},divider:e.jsx(P,{orientation:l?"vertical":"horizontal",flexItem:!0,sx:{borderStyle:"dashed"}}),children:i.map((j,x)=>e.jsxs(d,{direction:"row",alignItems:"center",justifyContent:"center",spacing:3,sx:{width:1,py:5},children:[e.jsx(R,{type:"radialBar",series:[j.percent],options:x===1?h:c,...Re}),e.jsxs("div",{children:[e.jsx(p,{variant:"h4",sx:{mb:.5},children:W(j.total)}),e.jsx(p,{variant:"body2",sx:{opacity:.72},children:j.label})]})]},j.label))})})}K.propTypes={list:s.array,title:s.string,subheader:s.string};function K({title:t,subheader:a,list:n,...l}){const r=k(),i=w.useRef(null),[o,c]=w.useState(0),h=n.find((u,B)=>B===o),j={dots:!1,arrows:!1,slidesToShow:1,slidesToScroll:1,adaptiveHeight:!0,rtl:r.direction==="rtl",beforeChange:(u,B)=>c(B)},x=()=>{var u;(u=i.current)==null||u.slickPrev()},m=()=>{var u;(u=i.current)==null||u.slickNext()};return e.jsxs(f,{...l,children:[e.jsx(C,{title:t,subheader:a,action:e.jsx(_,{onNext:m,onPrevious:x}),sx:{"& .MuiCardHeader-action":{alignSelf:"center"}}}),e.jsx(F,{ref:i,...j,children:n.map(u=>e.jsx(X,{item:u},u.id))}),e.jsxs(d,{spacing:2,direction:"row",alignItems:"flex-end",sx:{p:r.spacing(0,3,3,3)},children:[e.jsx(O,{fullWidth:!0,color:"success",variant:"contained",startIcon:e.jsx(b,{icon:"eva:checkmark-circle-2-fill"}),onClick:()=>console.log("ACCEPT",h==null?void 0:h.id),children:"Accept"}),e.jsx(O,{fullWidth:!0,color:"error",variant:"contained",startIcon:e.jsx(b,{icon:"eva:close-circle-fill"}),onClick:()=>console.log("REJECT",h==null?void 0:h.id),children:"Reject"})]})]})}X.propTypes={item:s.shape({tags:s.array,name:s.string,avatar:s.string,rating:s.number,description:s.string,postedAt:s.instanceOf(Date)})};function X({item:t}){const{avatar:a,name:n,description:l,rating:r,postedAt:i,tags:o}=t;return e.jsxs(d,{spacing:2,sx:{position:"relative",p:c=>c.spacing(3,3,2,3)},children:[e.jsxs(d,{direction:"row",alignItems:"center",spacing:2,children:[e.jsx(D,{alt:n,src:a}),e.jsxs("div",{children:[e.jsx(p,{variant:"subtitle2",children:n}),e.jsxs(p,{variant:"caption",sx:{color:"text.secondary",mt:.5,display:"block"},children:["Posted ",H(i)]})]})]}),e.jsx(Ie,{value:r,size:"small",readOnly:!0,precision:.5}),e.jsx(p,{variant:"body2",children:l}),e.jsx(d,{direction:"row",flexWrap:"wrap",children:o.map(c=>e.jsx(ce,{size:"small",label:c,sx:{mr:1,mb:1,color:"text.secondary"}},c))})]})}ee.propTypes={chart:s.object,title:s.string,subheader:s.string};function ee({title:t,subheader:a,chart:n,...l}){const{categories:r,colors:i,series:o,options:c}=n,[h,j]=w.useState("Year"),x=S({colors:i,stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:r},tooltip:{y:{formatter:m=>`$${m}`}},...c});return e.jsxs(f,{...l,children:[e.jsx(C,{title:t,subheader:a,action:e.jsx(Se,{value:h,onChange:m=>j(m.target.value),children:o.map(m=>e.jsx("option",{value:m.type,children:m.type},m.type))})}),o.map(m=>e.jsx(y,{sx:{mt:3,mx:3},dir:"ltr",children:m.type===h&&e.jsx(R,{type:"bar",series:m.data,options:x,height:364})},m.type))]})}I.propTypes={icon:s.node,sx:s.object,title:s.string,total:s.number};function I({title:t,total:a,icon:n,sx:l,...r}){return e.jsxs(f,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",p:2,pl:3,...l},...r,children:[e.jsxs("div",{children:[e.jsx(p,{variant:"h3",children:E(a)}),e.jsx(p,{variant:"subtitle2",sx:{color:"text.secondary"},children:t})]}),e.jsx(y,{sx:{width:120,height:120,lineHeight:0,borderRadius:"50%",bgcolor:"background.neutral"},children:n})]})}function Je(){const t=k(),{themeStretch:a}=de();return e.jsxs(e.Fragment,{children:[e.jsx(he,{children:e.jsx("title",{children:" General: Booking | Minimal UI"})}),e.jsx(xe,{maxWidth:a?!1:"xl",children:e.jsxs(g,{container:!0,spacing:3,children:[e.jsx(g,{item:!0,xs:12,md:4,children:e.jsx(I,{title:"Total Booking",total:714e3,icon:e.jsx(pe,{})})}),e.jsx(g,{item:!0,xs:12,md:4,children:e.jsx(I,{title:"Check In",total:311e3,icon:e.jsx(ue,{})})}),e.jsx(g,{item:!0,xs:12,md:4,children:e.jsx(I,{title:"Check Out",total:124e3,icon:e.jsx(me,{})})}),e.jsx(g,{item:!0,xs:12,md:8,children:e.jsxs(g,{container:!0,spacing:3,children:[e.jsx(g,{item:!0,xs:12,md:6,children:e.jsx(J,{total:18765,percent:2.6,chart:{series:[111,136,76,108,74,54,57,84]}})}),e.jsx(g,{item:!0,xs:12,md:6,children:e.jsx(G,{title:"Booked Room",data:je})}),e.jsx(g,{item:!0,xs:12,md:12,children:e.jsx(Z,{chart:{colors:[t.palette.warning.main],series:[{label:"Check In",percent:72,total:38566},{label:"Check Out",percent:64,total:18472}]}})})]})}),e.jsx(g,{item:!0,xs:12,md:4,children:e.jsx(q,{title:"Room Available",chart:{series:[{label:"Sold out",value:120},{label:"Available",value:66}]}})}),e.jsx(g,{item:!0,xs:12,md:8,children:e.jsx(ee,{title:"Reservation Stats",subheader:"(+43% Check In | +12% Check Out) than last year",chart:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"],series:[{type:"Week",data:[{name:"Check In",data:[10,41,35,151,49,62,69,91,48]},{name:"Check Out",data:[10,34,13,56,77,88,99,77,45]}]},{type:"Month",data:[{name:"Check In",data:[148,91,69,62,49,51,35,41,10]},{name:"Check Out",data:[45,77,99,88,77,56,13,34,10]}]},{type:"Year",data:[{name:"Check In",data:[76,42,29,41,27,138,117,86,63]},{name:"Check Out",data:[80,55,34,114,80,130,15,28,55]}]}]}})}),e.jsx(g,{item:!0,xs:12,md:4,children:e.jsx(K,{title:"Customer Reviews",subheader:`${M.length} Reviews`,list:M})}),e.jsx(g,{item:!0,xs:12,children:e.jsx(V,{title:"Newest Booking",subheader:"12 Booking",list:ge})}),e.jsx(g,{item:!0,xs:12,children:e.jsx(Y,{title:"Booking Details",tableData:be,tableLabels:[{id:"booker",label:"Booker"},{id:"checkIn",label:"Check In"},{id:"checkOut",label:"Check Out"},{id:"status",label:"Status"},{id:"phone",label:"Phone"},{id:"roomType",label:"Room Type"},{id:""}]})})]})})]})}export{Je as default};