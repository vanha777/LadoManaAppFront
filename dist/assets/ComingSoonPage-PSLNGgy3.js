import{F as l,ac as e,as as g,an as d,fy as f,ae as u,aN as c,ah as v,aD as w,bZ as C,ai as I,aL as M,aj as S,aM as x}from"./index-kAVNsXXW.js";import{a as T}from"./IncrementerButton-SLvR_Q0x.js";function b(o){const[s,a]=l.useState({days:"00",hours:"00",minutes:"00",seconds:"00"});l.useEffect(()=>{const n=setInterval(()=>i(),1e3);return()=>clearInterval(n)},[]);const i=()=>{const n=o,h=new Date,r=n.valueOf()-h.valueOf(),m=Math.floor(r/(1e3*60*60*24)),p=`0${Math.floor(r%(1e3*60*60*24)/(1e3*60*60))}`.slice(-2),y=`0${Math.floor(r%(1e3*60*60)/(1e3*60))}`.slice(-2),j=`0${Math.floor(r%(1e3*60)/1e3)}`.slice(-2);a({days:m.toString()||"000",hours:p||"000",minutes:y||"000",seconds:j||"000"})};return{days:s.days,hours:s.hours,minutes:s.minutes,seconds:s.seconds}}function E(){const{days:o,hours:s,minutes:a,seconds:i}=b(new Date("07/07/2024 21:30"));return e.jsxs(e.Fragment,{children:[e.jsx(g,{children:e.jsx("title",{children:" Coming Soon | Minimal UI"})}),e.jsx(d,{variant:"h3",paragraph:!0,children:"Coming Soon!"}),e.jsx(d,{sx:{color:"text.secondary"},children:"We are currently working hard on this page!"}),e.jsx(f,{sx:{my:10,height:240}}),e.jsxs(u,{direction:"row",justifyContent:"center",divider:e.jsx(c,{sx:{mx:{xs:1,sm:2.5}},children:":"}),sx:{typography:"h2"},children:[e.jsx(t,{label:"Days",value:o}),e.jsx(t,{label:"Hours",value:s}),e.jsx(t,{label:"Minutes",value:a}),e.jsx(t,{label:"Seconds",value:i})]}),e.jsx(T,{fullWidth:!0,placeholder:"Enter your email",InputProps:{endAdornment:e.jsx(v,{position:"end",children:e.jsx(w,{variant:"contained",size:"large",children:"Notify Me"})}),sx:{pr:.5}},sx:{my:5}}),e.jsx(u,{spacing:1,alignItems:"center",justifyContent:"center",direction:"row",children:C.map(n=>e.jsx(I,{sx:{color:n.color,"&:hover":{bgcolor:M(n.color,.08)}},children:e.jsx(S,{icon:n.icon})},n.name))})]})}t.propTypes={label:x.string,value:x.string};function t({label:o,value:s}){return e.jsxs("div",{children:[e.jsxs(c,{children:[" ",s," "]}),e.jsx(c,{sx:{color:"text.secondary",typography:"body1"},children:o})]})}export{E as default};
