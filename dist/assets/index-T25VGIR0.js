import{n as J,U as st,d3 as ot,d4 as Q,d5 as rt,D as L,t as ct,s as it,q as at}from"./index-kAVNsXXW.js";const q=t=>n=>n<=.5?t(2*n)/2:(2-t(2*(1-n)))/2,R=t=>n=>1-t(1-n),z=t=>t*t,lt=R(z),N=q(z);function ut(t,n){return t.map(e=>e*n)}const U=(t,n,e)=>(((1-3*e+3*n)*t+(3*e-6*n))*t+3*n)*t,ft=1e-7,pt=12;function ht(t,n,e,c,i){let s,o,p=0;do o=n+(e-n)/2,s=U(o,c,i)-t,s>0?e=o:n=o;while(Math.abs(s)>ft&&++p<pt);return o}function W(t,n,e,c){if(t===n&&e===c)return J;const i=s=>ht(s,0,1,t,e);return s=>s===0||s===1?s:U(i(s),n,c)}const X=t=>1-Math.sin(Math.acos(t)),Z=R(X),gt=q(Z),k=W(.33,1.53,.69,.99),C=R(k),mt=q(C),Mt=t=>(t*=2)<1?.5*C(t):.5*(2-Math.pow(2,-10*(t-1))),vt={linear:J,easeIn:z,easeInOut:N,easeOut:lt,circIn:X,circInOut:gt,circOut:Z,backIn:C,backInOut:mt,backOut:k,anticipate:Mt},_=t=>{if(Array.isArray(t)){st(t.length===4);const[n,e,c,i]=t;return W(n,e,c,i)}else if(typeof t=="string")return vt[t];return t},xt=t=>Array.isArray(t)&&typeof t[0]!="number";function bt(t,n){return t.map(()=>n||N).splice(0,t.length-1)}function F({keyframes:t,ease:n=N,times:e,duration:c=300}){t=[...t];const i=xt(n)?n.map(_):_(n),s={done:!1,value:t[0]},o=ut(e&&e.length===t.length?e:ot(t),c);function p(){return Q(o,t,{ease:Array.isArray(i)?i:bt(t,i)})}let m=p();return{next:r=>(s.value=m(r),s.done=r>=c,s),flipTarget:()=>{t.reverse(),m=p()}}}const d=.001,yt=.01,j=10,Tt=.05,Dt=1;function It({duration:t=800,bounce:n=.25,velocity:e=0,mass:c=1}){let i,s;rt(t<=j*1e3);let o=1-n;o=L(Tt,Dt,o),t=L(yt,j,t/1e3),o<1?(i=r=>{const l=r*o,h=l*t,M=l-e,b=S(r,o),v=Math.exp(-h);return d-M/b*v},s=r=>{const h=r*o*t,M=h*e+e,b=Math.pow(o,2)*Math.pow(r,2)*t,v=Math.exp(-h),g=S(Math.pow(r,2),o);return(-i(r)+d>0?-1:1)*((M-b)*v)/g}):(i=r=>{const l=Math.exp(-r*t),h=(r-e)*t+1;return-d+l*h},s=r=>{const l=Math.exp(-r*t),h=(e-r)*(t*t);return l*h});const p=5/t,m=At(i,s,p);if(t=t*1e3,isNaN(m))return{stiffness:100,damping:10,duration:t};{const r=Math.pow(m,2)*c;return{stiffness:r,damping:o*2*Math.sqrt(c*r),duration:t}}}const wt=12;function At(t,n,e){let c=e;for(let i=1;i<wt;i++)c=c-t(c)/n(c);return c}function S(t,n){return t*Math.sqrt(1-n*n)}const Ot=["duration","bounce"],Et=["stiffness","damping","mass"];function H(t,n){return n.some(e=>t[e]!==void 0)}function dt(t){let n={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...t};if(!H(t,Et)&&H(t,Ot)){const e=It(t);n={...n,...e,velocity:0,mass:1},n.isResolvedFromDuration=!0}return n}const Ft=5;function Y({keyframes:t,restDelta:n,restSpeed:e,...c}){let i=t[0],s=t[t.length-1];const o={done:!1,value:i},{stiffness:p,damping:m,mass:r,velocity:l,duration:h,isResolvedFromDuration:M}=dt(c);let b=St,v=l?-(l/1e3):0;const g=m/(2*Math.sqrt(p*r));function T(){const u=s-i,a=Math.sqrt(p/r)/1e3,y=Math.abs(u)<5;if(e||(e=y?.01:2),n||(n=y?.005:.5),g<1){const f=S(a,g);b=x=>{const D=Math.exp(-g*a*x);return s-D*((v+g*a*u)/f*Math.sin(f*x)+u*Math.cos(f*x))}}else if(g===1)b=f=>s-Math.exp(-a*f)*(u+(v+a*u)*f);else{const f=a*Math.sqrt(g*g-1);b=x=>{const D=Math.exp(-g*a*x),w=Math.min(f*x,300);return s-D*((v+g*a*u)*Math.sinh(w)+f*u*Math.cosh(w))/f}}}return T(),{next:u=>{const a=b(u);if(M)o.done=u>=h;else{let y=v;if(u!==0)if(g<1){const D=Math.max(0,u-Ft);y=ct(a-b(D),u-D)}else y=0;const f=Math.abs(y)<=e,x=Math.abs(s-a)<=n;o.done=f&&x}return o.value=o.done?s:a,o},flipTarget:()=>{v=-v,[i,s]=[s,i],T()}}}Y.needsInterpolation=(t,n)=>typeof t=="string"||typeof n=="string";const St=t=>0;function qt({keyframes:t=[0],velocity:n=0,power:e=.8,timeConstant:c=350,restDelta:i=.5,modifyTarget:s}){const o=t[0],p={done:!1,value:o};let m=e*n;const r=o+m,l=s===void 0?r:s(r);return l!==r&&(m=l-o),{next:h=>{const M=-m*Math.exp(-h/c);return p.done=!(M>i||M<-i),p.value=p.done?l:l+M,p},flipTarget:()=>{}}}const Rt={decay:qt,keyframes:F,tween:F,spring:Y};function V(t,n,e=0){return t-n-e}function zt(t,n=0,e=0,c=!0){return c?V(n+-t,n,e):n-(t-n)+e}function Nt(t,n,e,c){return c?t>=n+e:t<=-e}const Ct=t=>{const n=({delta:e})=>t(e);return{start:()=>it.update(n,!0),stop:()=>at.update(n)}};function Kt({duration:t,driver:n=Ct,elapsed:e=0,repeat:c=0,repeatType:i="loop",repeatDelay:s=0,keyframes:o,autoplay:p=!0,onPlay:m,onStop:r,onComplete:l,onRepeat:h,onUpdate:M,type:b="keyframes",...v}){const g=e;let T,u=0,a=t,y=!1,f=!0,x;const D=Rt[o.length>2?"keyframes":b]||F,w=o[0],G=o[o.length-1];let A={done:!1,value:w};const{needsInterpolation:K}=D;K&&K(w,G)&&(x=Q([0,100],[w,G],{clamp:!1}),o=[0,100]);const P=D({...v,duration:t,keyframes:o});function $(){u++,i==="reverse"?(f=u%2===0,e=zt(e,a,s,f)):(e=V(e,a,s),i==="mirror"&&P.flipTarget()),y=!1,h&&h()}function tt(){T&&T.stop(),l&&l()}function O(I){f||(I=-I),e+=I,y||(A=P.next(Math.max(0,e)),x&&(A.value=x(A.value)),y=f?A.done:e<=0),M&&M(A.value),y&&(u===0&&(a=a!==void 0?a:e),u<c?Nt(e,a,s,f)&&$():tt())}function nt(){m&&m(),T=n(O),T.start()}return p&&nt(),{stop:()=>{r&&r(),T&&T.stop()},set currentTime(I){e=g,O(I)},sample:I=>{e=g;const B=t&&typeof t=="number"?Math.max(t*.5,50):50;let E=0;for(O(0);E<=I;){const et=I-E;O(Math.min(et,B)),E+=B}return A}}}export{Kt as a,Z as c};