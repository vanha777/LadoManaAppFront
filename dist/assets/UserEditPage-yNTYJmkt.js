import{aA as o,c0 as m,F as r,ac as e,as as c,aB as l,ax as a}from"./index-kAVNsXXW.js";import{C as u}from"./CustomBreadcrumbs-07KkEdSP.js";import{U as d}from"./UserNewEditForm-xZWxjLIG.js";import"./Grid-UjSMx0L8.js";import"./Card-yNtnckip.js";function j(){const{themeStretch:n}=o(),{name:t}=m();console.log(`edit page ${t}`),r.useEffect(()=>{i({profile:{first_name:"Alice",last_name:"Johnson",avatar_url:"http://example.com/avatar.jpg",number_of_class:15,number_of_month:6,status:"pending",class:"Biology",date_of_birth:"1995-05-20"},info:{email:"alice.johnson@example.com",mobile:"1234567890",address:"456 Park Avenue",suburb:"Greenwood",city:"Springfield",post_code:"98765"}})},[t]);const[s,i]=r.useState();return e.jsxs(e.Fragment,{children:[e.jsx(c,{children:e.jsx("title",{children:" User: Edit user | Minimal UI"})}),e.jsxs(l,{maxWidth:n?!1:"lg",children:[e.jsx(u,{heading:"Chi Tiết Học Sinh",links:[{name:"Trang Chủ",href:a.root},{name:"Học Viên",href:a.user.list},{name:s==null?void 0:s.first_name}]}),e.jsx(d,{isEdit:!0,currentUser:s})]})]})}export{j as default};