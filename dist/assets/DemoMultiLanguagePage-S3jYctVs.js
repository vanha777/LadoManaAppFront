import{g2 as C,F as o,ac as e,as as P,aN as r,aB as i,fo as f,ae as l,bO as L,b6 as y,bP as v,be as w,aO as R,an as E}from"./index-kAVNsXXW.js";import{C as M}from"./CustomBreadcrumbs-07KkEdSP.js";import{C as c}from"./Card-yNtnckip.js";import{C as m}from"./CardHeader-cbPk7NV8.js";import{T}from"./TablePagination-Vshr5hr6.js";import"./KeyboardArrowRight-6uRlvlB4.js";import"./LastPage-N6rQPigF.js";import"./TableCell-7incTXUx.js";function O(){const{allLangs:g,currentLang:s,translate:t,onChangeLang:x}=C(),[d,n]=o.useState(2),[p,u]=o.useState(10),h=(a,b)=>{n(b)},j=a=>{u(parseInt(a.target.value,10)),n(0)};return e.jsxs(e.Fragment,{children:[e.jsx(P,{children:e.jsx("title",{children:" Extra Components: Multi Language | Minimal UI"})}),e.jsx(r,{sx:{pt:6,pb:1,bgcolor:a=>a.palette.mode==="light"?"grey.200":"grey.800"},children:e.jsx(i,{children:e.jsx(M,{heading:"Multi Language",links:[{name:"Components",href:f.components},{name:"Multi Language"}],moreLink:["https://react.i18next.com","https://mui.com/guides/localization/#main-content"]})})}),e.jsx(i,{sx:{my:10},children:e.jsxs(l,{spacing:5,children:[e.jsxs(c,{children:[e.jsx(m,{title:"Flexible"}),e.jsxs(r,{sx:{p:3},children:[e.jsx(L,{row:!0,value:s.value,onChange:a=>x(a.target.value),children:g.map(a=>e.jsx(y,{value:a.value,label:a.label,control:e.jsx(v,{})},a.label))}),e.jsx(w,{title:s.label,children:e.jsxs(l,{direction:"row",alignItems:"center",sx:{typography:"h2",my:3},children:[e.jsx(R,{disabledEffect:!0,alt:s.label,src:s.icon,sx:{mr:1}}),`${t("demo.title")}`]})}),e.jsx(E,{children:`${t("demo.introduction")}`})]})]}),e.jsxs(c,{children:[e.jsx(m,{title:"System",sx:{pb:2}}),e.jsx(T,{component:"div",count:100,page:d,onPageChange:h,rowsPerPage:p,onRowsPerPageChange:j})]})]})})]})}export{O as default};