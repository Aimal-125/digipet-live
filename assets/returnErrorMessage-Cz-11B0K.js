import{r as d}from"./index-IPEpSqwp.js";let I={data:""},O=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||I,S=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,C=/\/\*[^]*?\*\/|  +/g,A=/\n+/g,g=(t,e)=>{let a="",r="",s="";for(let o in t){let i=t[o];o[0]=="@"?o[1]=="i"?a=o+" "+i+";":r+=o[1]=="f"?g(i,o):o+"{"+g(i,o[1]=="k"?"":e)+"}":typeof i=="object"?r+=g(i,e?e.replace(/([^,])+/g,n=>o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,n):n?n+" "+l:l)):o):i!=null&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=g.p?g.p(o,i):o+":"+i+";")}return a+(e&&s?e+"{"+s+"}":s)+r},u={},z=t=>{if(typeof t=="object"){let e="";for(let a in t)e+=a+z(t[a]);return e}return t},D=(t,e,a,r,s)=>{let o=z(t),i=u[o]||(u[o]=(l=>{let c=0,m=11;for(;c<l.length;)m=101*m+l.charCodeAt(c++)>>>0;return"go"+m})(o));if(!u[i]){let l=o!==t?t:(c=>{let m,b,h=[{}];for(;m=S.exec(c.replace(C,""));)m[4]?h.shift():m[3]?(b=m[3].replace(A," ").trim(),h.unshift(h[0][b]=h[0][b]||{})):h[0][m[1]]=m[2].replace(A," ").trim();return h[0]})(t);u[i]=g(s?{["@keyframes "+i]:l}:l,a?"":"."+i)}let n=a&&u.g?u.g:null;return a&&(u.g=u[i]),((l,c,m,b)=>{b?c.data=c.data.replace(b,l):c.data.indexOf(l)===-1&&(c.data=m?l+c.data:c.data+l)})(u[i],e,r,n),i},M=(t,e,a)=>t.reduce((r,s,o)=>{let i=e[o];if(i&&i.call){let n=i(a),l=n&&n.props&&n.props.className||/^go/.test(n)&&n;i=l?"."+l:n&&typeof n=="object"?n.props?"":g(n,""):n===!1?"":n}return r+s+(i??"")},"");function v(t){let e=this||{},a=t.call?t(e.p):t;return D(a.unshift?a.raw?M(a,[].slice.call(arguments,1),e.p):a.reduce((r,s)=>Object.assign(r,s&&s.call?s(e.p):s),{}):a,O(e.target),e.g,e.o,e.k)}let F,$,E;v.bind({g:1});let f=v.bind({k:1});function _(t,e,a,r){g.p=e,F=t,$=a,E=r}function y(t,e){let a=this||{};return function(){let r=arguments;function s(o,i){let n=Object.assign({},o),l=n.className||s.className;a.p=Object.assign({theme:$&&$()},n),a.o=/ *go\d+/.test(l),n.className=v.apply(a,r)+(l?" "+l:"");let c=t;return t[0]&&(c=n.as||t,delete n.as),E&&c[0]&&E(n),F(c,n)}return s}}var P=t=>typeof t=="function",k=(t,e)=>P(t)?t(e):t,T=(()=>{let t=0;return()=>(++t).toString()})(),V=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),L=20,N=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,L)};case 1:return{...t,toasts:t.toasts.map(o=>o.id===e.toast.id?{...o,...e.toast}:o)};case 2:let{toast:a}=e;return N(t,{type:t.toasts.find(o=>o.id===a.id)?1:0,toast:a});case 3:let{toastId:r}=e;return{...t,toasts:t.toasts.map(o=>o.id===r||r===void 0?{...o,dismissed:!0,visible:!1}:o)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(o=>o.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let s=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+s}))}}},q=[],w={toasts:[],pausedAt:void 0},j=t=>{w=N(w,t),q.forEach(e=>{e(w)})},H=(t,e="blank",a)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...a,id:(a==null?void 0:a.id)||T()}),x=t=>(e,a)=>{let r=H(e,t,a);return j({type:2,toast:r}),r.id},p=(t,e)=>x("blank")(t,e);p.error=x("error");p.success=x("success");p.loading=x("loading");p.custom=x("custom");p.dismiss=t=>{j({type:3,toastId:t})};p.remove=t=>j({type:4,toastId:t});p.promise=(t,e,a)=>{let r=p.loading(e.loading,{...a,...a==null?void 0:a.loading});return typeof t=="function"&&(t=t()),t.then(s=>{let o=e.success?k(e.success,s):void 0;return o?p.success(o,{id:r,...a,...a==null?void 0:a.success}):p.dismiss(r),s}).catch(s=>{let o=e.error?k(e.error,s):void 0;o?p.error(o,{id:r,...a,...a==null?void 0:a.error}):p.dismiss(r)}),t};var J=f`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,U=f`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,W=f`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Y=y("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${J} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${U} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${W} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Z=f`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,B=y("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${Z} 1s linear infinite;
`,G=f`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,K=f`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Q=y("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${G} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${K} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,R=y("div")`
  position: absolute;
`,X=y("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,tt=f`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,et=y("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${tt} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,at=({toast:t})=>{let{icon:e,type:a,iconTheme:r}=t;return e!==void 0?typeof e=="string"?d.createElement(et,null,e):e:a==="blank"?null:d.createElement(X,null,d.createElement(B,{...r}),a!=="loading"&&d.createElement(R,null,a==="error"?d.createElement(Y,{...r}):d.createElement(Q,{...r})))},ot=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,rt=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,st="0%{opacity:0;} 100%{opacity:1;}",it="0%{opacity:1;} 100%{opacity:0;}",nt=y("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,lt=y("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,ct=(t,e)=>{let a=t.includes("top")?1:-1,[r,s]=V()?[st,it]:[ot(a),rt(a)];return{animation:e?`${f(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${f(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}};d.memo(({toast:t,position:e,style:a,children:r})=>{let s=t.height?ct(t.position||e||"top-center",t.visible):{opacity:0},o=d.createElement(at,{toast:t}),i=d.createElement(lt,{...t.ariaProps},k(t.message,t));return d.createElement(nt,{className:t.className,style:{...s,...a,...t.style}},typeof r=="function"?r({icon:o,message:i}):d.createElement(d.Fragment,null,o,i))});_(d.createElement);v`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;var pt=p;const mt=t=>{var e,a,r,s,o;return((a=(e=t==null?void 0:t.response)==null?void 0:e.data)==null?void 0:a.message)||((o=(s=(r=t==null?void 0:t.response)==null?void 0:r.data)==null?void 0:s.data)==null?void 0:o.message)||(t==null?void 0:t.message)||"Something went wrong."};export{pt as V,mt as r};
