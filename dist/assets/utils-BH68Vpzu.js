function a(n,u,t){return n>0?Math.max(0,(1+n)*u-t):0}function r(n,u,t){return u[t]<n[t]?-1:u[t]>n[t]?1:0}function i(n,u){return n==="desc"?(t,e)=>r(t,e,u):(t,e)=>-r(t,e,u)}export{a as e,i as g};
