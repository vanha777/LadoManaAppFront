import{a8 as w,F as v,a9 as S,aa as r,ab as A,ac as e,ad as P,ae as i,af as q,ag as t,ah as F,ai as N,aj as L,ak as R,al as E,am as I,an as o,ao as l,ap as k,aq as T,ar as B,as as C}from"./index-kAVNsXXW.js";function H(){const{register:c}=w(),[n,u]=v.useState(!1),h=S().shape({firstName:r().required("First name required"),lastName:r().required("Last name required"),email:r().required("Email is required").email("Email must be a valid email address"),password:r().required("Password is required")}),x={firstName:"",lastName:"",email:"",password:""},m=A({resolver:E(h),defaultValues:x}),{reset:g,setError:p,handleSubmit:j,formState:{errors:d,isSubmitting:y,isSubmitSuccessful:f}}=m,b=async a=>{try{c&&await c(a.email,a.password,a.firstName,a.lastName)}catch(s){console.error(s),g(),p("afterSubmit",{...s,message:s.message||s})}};return e.jsx(P,{methods:m,onSubmit:j(b),children:e.jsxs(i,{spacing:2.5,children:[!!d.afterSubmit&&e.jsx(q,{severity:"error",children:d.afterSubmit.message}),e.jsxs(i,{direction:{xs:"column",sm:"row"},spacing:2,children:[e.jsx(t,{name:"firstName",label:"First name"}),e.jsx(t,{name:"lastName",label:"Last name"})]}),e.jsx(t,{name:"email",label:"Email address"}),e.jsx(t,{name:"password",label:"Password",type:n?"text":"password",InputProps:{endAdornment:e.jsx(F,{position:"end",children:e.jsx(N,{onClick:()=>u(!n),edge:"end",children:e.jsx(L,{icon:n?"eva:eye-fill":"eva:eye-off-fill"})})})}}),e.jsx(R,{fullWidth:!0,color:"inherit",size:"large",type:"submit",variant:"contained",loading:y||f,sx:{bgcolor:"text.primary",color:a=>a.palette.mode==="light"?"common.white":"grey.800","&:hover":{bgcolor:"text.primary",color:a=>a.palette.mode==="light"?"common.white":"grey.800"}},children:"Create account"})]})})}function M(){return e.jsxs(I,{title:"Manage the job more effectively with Minimal",children:[e.jsxs(i,{spacing:2,sx:{mb:5,position:"relative"},children:[e.jsx(o,{variant:"h4",children:"Get started absolutely free."}),e.jsxs(i,{direction:"row",spacing:.5,children:[e.jsx(o,{variant:"body2",children:" Already have an account? "}),e.jsx(l,{component:k,to:T.login,variant:"subtitle2",children:"Sign in"})]})]}),e.jsx(H,{}),e.jsxs(o,{component:"div",sx:{color:"text.secondary",mt:3,typography:"caption",textAlign:"center"},children:["By signing up, I agree to ",e.jsx(l,{underline:"always",color:"text.primary",children:"Terms of Service"})," and ",e.jsx(l,{underline:"always",color:"text.primary",children:"Privacy Policy"}),"."]}),e.jsx(B,{})]})}function $(){return e.jsxs(e.Fragment,{children:[e.jsx(C,{children:e.jsx("title",{children:" Register | Minimal UI"})}),e.jsx(M,{})]})}export{$ as default};