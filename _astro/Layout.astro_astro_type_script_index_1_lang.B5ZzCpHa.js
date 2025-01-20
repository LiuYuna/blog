import{B as Bo,g as Fo,s as Vo,d as Uo,b as jo,e as je,M as Wo,f as Zo}from"./setting-utils.De4sCiaH.js";import{p as qo,u as Xo}from"./url-utils.Cvx6LZw3.js";import"./zh_TW.DA4cTuyj.js";const pt=(t,e)=>{const{o:n,i:o,u:s}=t;let r,c=n;const l=(t,e)=>{const n=c,l=t,i=e||(o?!o(n,l):n!==l);return(i||s)&&(c=l,r=n),[c,i,r]};return[e?t=>l(e(c,r),t):l,t=>[c,!!t,r]]},Go=typeof window<"u"&&typeof HTMLElement<"u"&&!!window.document,ft=Go?window:{},Zn=Math.max,Yo=Math.min,We=Math.round,be=Math.abs,Hn=Math.sign,qn=ft.cancelAnimationFrame,ln=ft.requestAnimationFrame,ve=ft.setTimeout,Ze=ft.clearTimeout,He=t=>typeof ft[t]<"u"?ft[t]:void 0,Ko=He("MutationObserver"),Tn=He("IntersectionObserver"),we=He("ResizeObserver"),me=He("ScrollTimeline"),an=t=>void 0===t,Te=t=>null===t,Et=t=>"number"==typeof t,Qt=t=>"string"==typeof t,un=t=>"boolean"==typeof t,bt=t=>"function"==typeof t,Ct=t=>Array.isArray(t),Se=t=>"object"==typeof t&&!Ct(t)&&!Te(t),dn=t=>{const e=!!t&&t.length,n=Et(e)&&e>-1&&e%1==0;return!!(Ct(t)||!bt(t)&&n)&&(!(e>0&&Se(t))||e-1 in t)},xe=t=>!!t&&t.constructor===Object,Ee=t=>t instanceof HTMLElement,Ae=t=>t instanceof Element;function X(t,e){if(dn(t))for(let n=0;n<t.length&&!1!==e(t[n],n,t);n++);else t&&X(Object.keys(t),(n=>e(t[n],n,t)));return t}const Xn=(t,e)=>t.indexOf(e)>=0,Yt=(t,e)=>t.concat(e),tt=(t,e,n)=>(!Qt(e)&&dn(e)?Array.prototype.push.apply(t,e):t.push(e),t),Dt=t=>Array.from(t||[]),fn=t=>Ct(t)?t:!Qt(t)&&dn(t)?Dt(t):[t],qe=t=>!!t&&!t.length,Xe=t=>Dt(new Set(t)),yt=(t,e,n)=>{X(t,(t=>!t||t.apply(void 0,e||[]))),!n&&(t.length=0)},Gn="paddingTop",Yn="paddingRight",Kn="paddingLeft",Jn="paddingBottom",Qn="marginLeft",to="marginRight",eo="marginBottom",no="overflowX",oo="overflowY",$e="width",Le="height",It="visible",_t="hidden",Vt="scroll",Jo=t=>{const e=String(t||"");return e?e[0].toUpperCase()+e.slice(1):""},Ie=(t,e,n,o)=>{if(t&&e){let o=!0;return X(n,(n=>{t[n]!==e[n]&&(o=!1)})),o}return!1},so=(t,e)=>Ie(t,e,["w","h"]),he=(t,e)=>Ie(t,e,["x","y"]),Qo=(t,e)=>Ie(t,e,["t","r","b","l"]),Pt=()=>{},k=(t,...e)=>t.bind(0,...e),Rt=t=>{let e;const n=t?ve:ln,o=t?Ze:qn;return[s=>{o(e),e=n((()=>s()),bt(t)?t():t)},()=>o(e)]},Ge=(t,e)=>{const{_:n,p:o,v:s,S:r}=e||{};let c,l,i,a,d=Pt;const u=function(e){d(),Ze(c),a=c=l=void 0,d=Pt,t.apply(this,e)},p=t=>r&&l?r(l,t):t,y=()=>{d!==Pt&&u(p(i)||i)},h=function(){const t=Dt(arguments),e=bt(n)?n():n;if(Et(e)&&e>=0){const n=bt(o)?o():o,r=Et(n)&&n>=0,h=e>0?ve:ln,m=e>0?Ze:qn,f=p(t)||t,b=u.bind(0,f);let g;d(),s&&!a?(b(),a=!0,g=h((()=>a=void 0),e)):(g=h(b,e),r&&!c&&(c=ve(y,n))),d=()=>m(g),l=i=f}else u(t)};return h.m=y,h},co=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),vt=t=>t?Object.keys(t):[],j=(t,e,n,o,s,r,c)=>{const l=[e,n,o,s,r,c];return("object"!=typeof t||Te(t))&&!bt(t)&&(t={}),X(l,(e=>{X(e,((n,o)=>{const s=e[o];if(t===s)return!0;const r=Ct(s);if(s&&xe(s)){const e=t[o];let n=e;r&&!Ct(e)?n=[]:!r&&!xe(e)&&(n={}),t[o]=j(n,s)}else t[o]=r?s.slice():s}))})),t},ro=(t,e)=>X(j({},t),((t,e,n)=>{void 0===t?delete n[e]:t&&xe(t)&&(n[e]=ro(t))})),pn=t=>!vt(t).length,lo=(t,e,n)=>Zn(t,Yo(e,n)),Nt=t=>Xe((Ct(t)?t:(t||"").split(" ")).filter((t=>t))),mn=(t,e)=>t&&t.getAttribute(e),An=(t,e)=>t&&t.hasAttribute(e),Ht=(t,e,n)=>{X(Nt(e),(e=>{t&&t.setAttribute(e,String(n||""))}))},St=(t,e)=>{X(Nt(e),(e=>t&&t.removeAttribute(e)))},ke=(t,e)=>{const n=Nt(mn(t,e)),o=k(Ht,t,e),s=(t,e)=>{const o=new Set(n);return X(Nt(t),(t=>{o[e](t)})),Dt(o).join(" ")};return{O:t=>o(s(t,"delete")),$:t=>o(s(t,"add")),C:t=>{const e=Nt(t);return e.reduce(((t,e)=>t&&n.includes(e)),e.length>0)}}},io=(t,e,n)=>(ke(t,e).O(n),k(hn,t,e,n)),hn=(t,e,n)=>(ke(t,e).$(n),k(io,t,e,n)),Ce=(t,e,n,o)=>(o?hn:io)(t,e,n),yn=(t,e,n)=>ke(t,e).C(n),ao=t=>ke(t,"class"),uo=(t,e)=>{ao(t).O(e)},gn=(t,e)=>(ao(t).$(e),k(uo,t,e)),fo=(t,e)=>{const n=e?Ae(e)&&e:document;return n?Dt(n.querySelectorAll(t)):[]},ts=(t,e)=>{const n=e?Ae(e)&&e:document;return n&&n.querySelector(t)},Ye=(t,e)=>Ae(t)&&t.matches(e),po=t=>Ye(t,"body"),Ke=t=>t?Dt(t.childNodes):[],Kt=t=>t&&t.parentElement,zt=(t,e)=>Ae(t)&&t.closest(e),Je=t=>document.activeElement,es=(t,e,n)=>{const o=zt(t,e),s=t&&ts(n,o),r=zt(s,e)===o;return!(!o||!s)&&(o===t||s===t||r&&zt(zt(t,n),e)!==o)},Ut=t=>{X(fn(t),(t=>{const e=Kt(t);t&&e&&e.removeChild(t)}))},mt=(t,e)=>k(Ut,t&&e&&X(fn(e),(e=>{e&&t.appendChild(e)}))),Bt=t=>{const e=document.createElement("div");return Ht(e,"class",t),e},mo=t=>{const e=Bt();return e.innerHTML=t.trim(),X(Ke(e),(t=>Ut(t)))},$n=(t,e)=>t.getPropertyValue(e)||t[e]||"",ho=t=>{const e=t||0;return isFinite(e)?e:0},fe=t=>ho(parseFloat(t||"")),Qe=t=>Math.round(1e4*t)/1e4,yo=t=>`${Qe(ho(t))}px`;function Jt(t,e){t&&e&&X(e,((e,n)=>{try{const o=t.style,s=Te(e)||un(e)?"":Et(e)?yo(e):e;0===n.indexOf("--")?o.setProperty(n,s):o[n]=s}catch{}}))}function $t(t,e,n){const o=Qt(e);let s=o?"":{};if(t){const r=ft.getComputedStyle(t,n)||t.style;s=o?$n(r,e):Dt(e).reduce(((t,e)=>(t[e]=$n(r,e),t)),s)}return s}const Ln=(t,e,n)=>{const o=e?`${e}-`:"",s=n?`-${n}`:"",r=`${o}top${s}`,c=`${o}right${s}`,l=`${o}bottom${s}`,i=`${o}left${s}`,a=$t(t,[r,c,l,i]);return{t:fe(a[r]),r:fe(a[c]),b:fe(a[l]),l:fe(a[i])}},ns=(t,e)=>"translate"+(Se(t)?`(${t.x},${t.y})`:`Y(${t})`),os=t=>!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length),ss={w:0,h:0},De=(t,e)=>e?{w:e[`${t}Width`],h:e[`${t}Height`]}:ss,cs=t=>De("inner",t||ft),Ft=k(De,"offset"),go=k(De,"client"),Oe=k(De,"scroll"),bn=t=>{const e=parseFloat($t(t,$e))||0,n=parseFloat($t(t,Le))||0;return{w:e-We(e),h:n-We(n)}},Re=t=>t.getBoundingClientRect(),rs=t=>!!t&&os(t),tn=t=>!(!t||!t[Le]&&!t[$e]),bo=(t,e)=>{const n=tn(t);return!tn(e)&&n},In=(t,e,n,o)=>{X(Nt(e),(e=>{t&&t.removeEventListener(e,n,o)}))},K=(t,e,n,o)=>{var s;const r=null==(s=o&&o.H)||s,c=o&&o.I||!1,l=o&&o.A||!1,i={passive:r,capture:c};return k(yt,Nt(e).map((e=>{const o=l?s=>{In(t,e,o,c),n&&n(s)}:n;return t&&t.addEventListener(e,o,i),k(In,t,e,o,c)})))},vo=t=>t.stopPropagation(),en=t=>t.preventDefault(),wo=t=>vo(t)||en(t),xt=(t,e)=>{const{x:n,y:o}=Et(e)?{x:e,y:e}:e||{};Et(n)&&(t.scrollLeft=n),Et(o)&&(t.scrollTop=o)},ht=t=>({x:t.scrollLeft,y:t.scrollTop}),So=()=>({D:{x:0,y:0},M:{x:0,y:0}}),ls=(t,e)=>{const{D:n,M:o}=t,{w:s,h:r}=e,c=(t,e,n)=>{let o=Hn(t)*n,s=Hn(e)*n;if(o===s){const n=be(t),r=be(e);s=n>r?0:s,o=n<r?0:o}return o=o===s?0:o,[o+0,s+0]},[l,i]=c(n.x,o.x,s),[a,d]=c(n.y,o.y,r);return{D:{x:l,y:a},M:{x:i,y:d}}},kn=({D:t,M:e})=>{const n=(t,e)=>0===t&&t<=e;return{x:n(t.x,e.x),y:n(t.y,e.y)}},Dn=({D:t,M:e},n)=>{const o=(t,e,n)=>lo(0,1,(t-n)/(t-e)||0);return{x:o(t.x,e.x,n.x),y:o(t.y,e.y,n.y)}},nn=t=>{t&&t.focus&&t.focus({preventScroll:!0})},Mn=(t,e)=>{X(fn(e),t)},on=t=>{const e=new Map,n=(t,n)=>{if(t){const o=e.get(t);Mn((t=>{o&&o[t?"delete":"clear"](t)}),n)}else e.forEach((t=>{t.clear()})),e.clear()},o=(t,s)=>{if(Qt(t)){const o=e.get(t)||new Set;return e.set(t,o),Mn((t=>{bt(t)&&o.add(t)}),s),k(n,t,s)}un(s)&&s&&n();const r=vt(t),c=[];return X(r,(e=>{const n=t[e];n&&tt(c,o(e,n))})),k(yt,c)};return o(t||{}),[o,n,(t,n)=>{X(Dt(e.get(t)),(t=>{n&&!qe(n)?t.apply(0,n):t()}))}]},xo={},Eo={},is=t=>{X(t,(t=>X(t,((e,n)=>{xo[n]=t[n]}))))},Co=(t,e,n)=>vt(t).map((o=>{const{static:s,instance:r}=t[o],[c,l,i]=n||[],a=n?r:s;if(a){const t=n?a(c,l,e):a(e);return(i||Eo)[o]=t}})),te=t=>Eo[t],as="__osOptionsValidationPlugin",Wt="data-overlayscrollbars",ye="os-environment",pe=`${ye}-scrollbar-hidden`,ze=`${Wt}-initialize`,ge="noClipping",_n=`${Wt}-body`,kt=Wt,us="host",Tt=`${Wt}-viewport`,ds=no,fs=oo,ps="arrange",Oo="measuring",ms="scrolling",Ho="scrollbarHidden",hs="noContent",sn=`${Wt}-padding`,Pn=`${Wt}-content`,vn="os-size-observer",ys=`${vn}-appear`,gs=`${vn}-listener`,bs="os-trinsic-observer",vs="os-theme-none",gt="os-scrollbar",ws=`${gt}-rtl`,Ss=`${gt}-horizontal`,xs=`${gt}-vertical`,To=`${gt}-track`,wn=`${gt}-handle`,Es=`${gt}-visible`,Cs=`${gt}-cornerless`,Nn=`${gt}-interaction`,Rn=`${gt}-unusable`,cn=`${gt}-auto-hide`,zn=`${cn}-hidden`,Bn=`${gt}-wheel`,Os=`${To}-interactive`,Hs=`${wn}-interactive`,Ts="__osSizeObserverPlugin",As=(t,e)=>{const{T:n}=e,[o,s]=t("showNativeOverlaidScrollbars");return[o&&n.x&&n.y,s]},jt=t=>0===t.indexOf(It),$s=(t,e)=>{const n=(t,e,n,o)=>{const s=t===It?_t:t.replace(`${It}-`,""),r=jt(t),c=jt(n);return e||o?r&&c?It:r?e&&o?s:e?It:_t:e?s:c&&o?It:_t:_t},o={x:n(e.x,t.x,e.y,t.y),y:n(e.y,t.y,e.x,t.x)};return{k:o,R:{x:o.x===Vt,y:o.y===Vt}}},Ao="__osScrollbarsHidingPlugin",Ls="__osClickScrollPlugin",Fn=t=>JSON.stringify(t,((t,e)=>{if(bt(e))throw 0;return e})),Vn=(t,e)=>t?`${e}`.split(".").reduce(((t,e)=>t&&co(t,e)?t[e]:void 0),t):void 0,Is={paddingAbsolute:!1,showNativeOverlaidScrollbars:!1,update:{elementEvents:[["img","load"]],debounce:[0,33],attributes:null,ignoreMutation:null},overflow:{x:"scroll",y:"scroll"},scrollbars:{theme:"os-theme-dark",visibility:"auto",autoHide:"never",autoHideDelay:1300,autoHideSuspend:!1,dragScroll:!0,clickScroll:!1,pointers:["mouse","touch","pen"]}},$o=(t,e)=>{const n={};return X(Yt(vt(e),vt(t)),(o=>{const s=t[o],r=e[o];if(Se(s)&&Se(r))j(n[o]={},$o(s,r)),pn(n[o])&&delete n[o];else if(co(e,o)&&r!==s){let t=!0;if(Ct(s)||Ct(r))try{Fn(s)===Fn(r)&&(t=!1)}catch{}t&&(n[o]=r)}})),n},Un=(t,e,n)=>o=>[Vn(t,o),n||void 0!==Vn(e,o)];let Lo;const ks=()=>Lo,Ds=t=>{Lo=t};let Be;const Ms=()=>{const t=(t,e,n)=>{mt(document.body,t),mt(document.body,t);const o=go(t),s=Ft(t),r=bn(e);return n&&Ut(t),{x:s.h-o.h+r.h,y:s.w-o.w+r.w}},e=mo(`<div class="${ye}"><div></div><style>${`.${ye}{scroll-behavior:auto!important;position:fixed;opacity:0;visibility:hidden;overflow:scroll;height:200px;width:200px;z-index:-1}.${ye} div{width:200%;height:200%;margin:10px 0}.${pe}{scrollbar-width:none!important}.${pe}::-webkit-scrollbar,.${pe}::-webkit-scrollbar-corner{appearance:none!important;display:none!important;width:0!important;height:0!important}`}</style></div>`)[0],n=e.firstChild,o=e.lastChild,s=ks();s&&(o.nonce=s);const[r,,c]=on(),[l,i]=pt({o:t(e,n),i:he},k(t,e,n,!0)),[a]=i(),d=(t=>{let e=!1;const n=gn(t,pe);try{e="none"===$t(t,"scrollbar-width")||"none"===$t(t,"display","::-webkit-scrollbar")}catch{}return n(),e})(e),u={x:0===a.x,y:0===a.y},p={elements:{host:null,padding:!d,viewport:t=>d&&po(t)&&t,content:!1},scrollbars:{slot:!0},cancel:{nativeScrollbarsOverlaid:!1,body:null}},y=j({},Is),h=k(j,{},y),m=k(j,{},p),f={N:a,T:u,P:d,G:!!me,K:k(r,"r"),Z:m,tt:t=>j(p,t)&&m(),nt:h,ot:t=>j(y,t)&&h(),st:j({},p),et:j({},y)};if(St(e,"style"),Ut(e),K(ft,"resize",(()=>{c("r",[])})),bt(ft.matchMedia)&&!d&&(!u.x||!u.y)){const t=e=>{const n=ft.matchMedia(`(resolution: ${ft.devicePixelRatio}dppx)`);K(n,"change",(()=>{e(),t(e)}),{A:!0})};t((()=>{const[t,e]=l();j(f.N,t),c("r",[e])}))}return f},Ot=()=>(Be||(Be=Ms()),Be),_s=(t,e,n)=>{let o=!1;const s=!!n&&new WeakMap,r=r=>{if(s&&n){X(n.map((e=>{const[n,o]=e||[];return[o&&n?(r||fo)(n,t):[],o]})),(n=>X(n[0],(r=>{const c=n[1],l=s.get(r)||[];if(t.contains(r)&&c){const t=K(r,c,(n=>{o?(t(),s.delete(r)):e(n)}));s.set(r,tt(l,t))}else yt(l),s.delete(r)}))))}};return r(),[()=>{o=!0},r]},jn=(t,e,n,o)=>{let s=!1;const{ct:r,rt:c,lt:l,it:i,ut:a,_t:d}=o||{},u=Ge((()=>s&&n(!0)),{_:33,p:99}),[p,y]=_s(t,u,l),h=c||[],m=Yt(r||[],h),f=(s,r)=>{if(!qe(r)){const c=a||Pt,l=d||Pt,u=[],p=[];let m=!1,f=!1;if(X(r,(n=>{const{attributeName:s,target:r,type:a,oldValue:d,addedNodes:y,removedNodes:b}=n,g="attributes"===a,v="childList"===a,w=t===r,x=g&&s,k=x&&mn(r,s||""),$=Qt(k)?k:null,j=x&&d!==$,S=Xn(h,s)&&j;if(e&&(v||!w)){const e=g&&j,a=e&&i&&Ye(r,i),p=(a?!c(r,s,d,$):!g||e)&&!l(n,!!a,t,o);X(y,(t=>tt(u,t))),X(b,(t=>tt(u,t))),f=f||p}!e&&w&&j&&!c(r,s,d,$)&&(tt(p,s),m=m||S)})),y((t=>Xe(u).reduce(((e,n)=>(tt(e,fo(t,n)),Ye(n,t)?tt(e,n):e)),[]))),e)return!s&&f&&n(!1),[!1];if(!qe(p)||m){const t=[Xe(p),m];return!s&&n.apply(0,t),t}}},b=new Ko(k(f,!1));return[()=>(b.observe(t,{attributes:!0,attributeOldValue:!0,attributeFilter:m,subtree:e,childList:e,characterData:e}),s=!0,()=>{s&&(p(),b.disconnect(),s=!1)}),()=>{if(s)return u.m(),f(!0,b.takeRecords())}]},Io=(t,e,n)=>{const{dt:o}=n||{},s=te(Ts),[r]=pt({o:!1,u:!0});return()=>{const n=[],c=mo(`<div class="${vn}"><div class="${gs}"></div></div>`)[0],l=c.firstChild,i=t=>{let n=!1,o=!1;if(t instanceof ResizeObserverEntry){const[e,,s]=r(t.contentRect),c=tn(e);o=bo(e,s),n=!o&&!c}else o=!0===t;n||e({ft:!0,dt:o})};if(we){const t=new we((t=>i(t.pop())));t.observe(l),tt(n,(()=>{t.disconnect()}))}else{if(!s)return Pt;{const[t,e]=s(l,i,o);tt(n,Yt([gn(c,ys),K(c,"animationstart",t)],e))}}return k(yt,tt(n,mt(t,c)))}},Ps=(t,e)=>{let n;const o=Bt(bs),[s]=pt({o:!1}),r=(t,n)=>{if(t){const o=s((t=>0===t.h||t.isIntersecting||t.intersectionRatio>0)(t)),[,r]=o;return r&&!n&&e(o)&&[o]}},c=(t,e)=>r(e.pop(),t);return[()=>{const e=[];if(Tn)n=new Tn(k(c,!1),{root:t}),n.observe(o),tt(e,(()=>{n.disconnect()}));else{const t=()=>{const t=Ft(o);r(t)};tt(e,Io(o,t)()),t()}return k(yt,tt(e,mt(t,o)))},()=>n&&c(!0,n.takeRecords())]},Ns=(t,e,n,o)=>{let s,r,c,l,i,a;const d=`[${kt}]`,u=`[${Tt}]`,p=["id","class","style","open","wrap","cols","rows"],{vt:y,ht:h,U:m,gt:f,bt:b,L:g,wt:v,yt:w,St:x,Ot:k}=t,$=t=>"rtl"===$t(t,"direction"),S={$t:!1,F:$(y)},T=Ot(),E=te(Ao),[H]=pt({i:so,o:{w:0,h:0}},(()=>{const o=E&&E.V(t,e,S,T,n).X,s=!(v&&g)&&yn(h,kt,ge),r=!g&&w(ps),c=r&&ht(f),l=c&&k(),i=x(Oo,s),a=r&&o&&o()[0],d=Oe(m),u=bn(m);return a&&a(),xt(f,c),l&&l(),s&&i(),{w:d.w+u.w,h:d.h+u.h}})),L=Ge(o,{_:()=>s,p:()=>r,S(t,e){const[n]=t,[o]=e;return[Yt(vt(n),vt(o)).reduce(((t,e)=>(t[e]=n[e]||o[e],t)),{})]}}),O=t=>{const e=$(y);j(t,{Ct:a!==e}),j(S,{F:e}),a=e},D=(t,e)=>{const[n,s]=t,r={xt:s};return j(S,{$t:n}),!e&&o(r),r},I=({ft:t,dt:e})=>{const n=t&&!e||!T.P?o:L,s={ft:t||e,dt:e};O(s),n(s)},C=(t,e)=>{const[,n]=H(),s={Ht:n};return O(s),n&&!e&&(t?o:L)(s),s},A=(t,e,n)=>{const o={Et:e};return O(o),e&&!n&&L(o),o},[X,K]=b?Ps(h,D):[],M=!g&&Io(h,I,{dt:!0}),[B,P]=jn(h,!1,A,{rt:p,ct:p}),R=g&&we&&new we((t=>{const e=t[t.length-1].contentRect;I({ft:!0,dt:bo(e,i)}),i=e})),z=Ge((()=>{const[,t]=H();o({Ht:t})}),{_:222,v:!0});return[()=>{R&&R.observe(h);const t=M&&M(),e=X&&X(),n=B(),o=T.K((t=>{t?L({zt:t}):z()}));return()=>{R&&R.disconnect(),t&&t(),e&&e(),l&&l(),n(),o()}},({It:t,At:e,Dt:n})=>{const o={},[i]=t("update.ignoreMutation"),[a,y]=t("update.attributes"),[h,f]=t("update.elementEvents"),[v,w]=t("update.debounce"),x=e||n;if(f||y){c&&c(),l&&l();const[t,e]=jn(b||m,!0,C,{ct:Yt(p,a||[]),lt:h,it:d,_t:(t,e)=>{const{target:n,attributeName:o}=t;return!(e||!o||g)&&es(n,d,u)||!!zt(n,`.${gt}`)||!!(t=>bt(i)&&i(t))(t)}});l=t(),c=e}if(w)if(L.m(),Ct(v)){const t=v[0],e=v[1];s=Et(t)&&t,r=Et(e)&&e}else Et(v)?(s=v,r=!1):(s=!1,r=!1);if(x){const t=P(),e=K&&K(),n=c&&c();t&&j(o,A(t[0],t[1],x)),e&&j(o,D(e[0],x)),n&&j(o,C(n[0],x))}return O(o),o},S]},ko=(t,e)=>bt(e)?e.apply(0,t):e,Rs=(t,e,n,o)=>{const s=an(o)?n:o;return ko(t,s)||e.apply(0,t)},Do=(t,e,n,o)=>{const s=an(o)?n:o,r=ko(t,s);return!!r&&(Ee(r)?r:e.apply(0,t))},zs=(t,e)=>{const{nativeScrollbarsOverlaid:n,body:o}=e||{},{T:s,P:r,Z:c}=Ot(),{nativeScrollbarsOverlaid:l,body:i}=c().cancel,a=n??l,d=an(o)?i:o,u=(s.x||s.y)&&a,p=t&&(Te(d)?!r:d);return!!u||!!p},Bs=(t,e,n,o)=>{const s="--os-viewport-percent",r="--os-scroll-percent",c="--os-scroll-direction",{Z:l}=Ot(),{scrollbars:i}=l(),{slot:a}=i,{vt:d,ht:u,U:p,Mt:y,gt:h,wt:m,L:f}=e,{scrollbars:b}=y?{}:t,{slot:g}=b||{},v=[],w=[],x=[],$=Do([d,u,p],(()=>f&&m?d:u),a,g),j=t=>{if(me){const e=new me({source:h,axis:t});return{kt:t=>{const n=t.Tt.animate({clear:["left"],[r]:[0,1]},{timeline:e});return()=>n.cancel()}}}},S={x:j("x"),y:j("y")},T=(t,e,n)=>{const o=n?gn:uo;X(t,(t=>{o(t.Tt,e)}))},E=(t,e)=>{X(t,(t=>{const[n,o]=e(t);Jt(n,o)}))},H=(t,e,n)=>{const o=un(n),s=!o||!n;(!o||n)&&T(w,t,e),s&&T(x,t,e)},L=t=>{const e=t?"x":"y",n=Bt(`${gt} ${t?Ss:xs}`),s=Bt(To),r=Bt(wn),c={Tt:n,Ut:s,Pt:r},l=S[e];return tt(t?w:x,c),tt(v,[mt(n,s),mt(s,r),k(Ut,n),l&&l.kt(c),o(c,H,t)]),c},O=k(L,!0),D=k(L,!1);return O(),D(),[{Nt:()=>{const t=(()=>{const{Rt:t,Vt:e}=n,o=(t,e)=>lo(0,1,t/(t+e)||0);return{x:o(e.x,t.x),y:o(e.y,t.y)}})(),e=t=>e=>[e.Tt,{[s]:Qe(t)+""}];E(w,e(t.x)),E(x,e(t.y))},qt:()=>{if(!me){const{Lt:t}=n,e=Dn(t,ht(h)),o=t=>e=>[e.Tt,{[r]:Qe(t)+""}];E(w,o(e.x)),E(x,o(e.y))}},Bt:()=>{const{Lt:t}=n,e=kn(t),o=t=>e=>[e.Tt,{[c]:t?"0":"1"}];E(w,o(e.x)),E(x,o(e.y))},Ft:()=>{if(f&&!m){const{Rt:t,Lt:e}=n,o=kn(e),s=Dn(e,ht(h)),r=e=>{const{Tt:n}=e,r=Kt(n)===p&&n,c=(t,e,n)=>{const o=e*t;return yo(n?o:-o)};return[r,r&&{transform:ns({x:c(s.x,t.x,o.x),y:c(s.y,t.y,o.y)})}]};E(w,r),E(x,r)}},jt:H,Yt:{Wt:w,Xt:O,Jt:k(E,w)},Gt:{Wt:x,Xt:D,Jt:k(E,x)}},()=>(mt($,w[0].Tt),mt($,x[0].Tt),k(yt,v))]},Fs=(t,e,n,o)=>(s,r,c)=>{const{ht:l,U:i,L:a,gt:d,Kt:u,Ot:p}=e,{Tt:y,Ut:h,Pt:m}=s,[f,b]=Rt(333),[g,v]=Rt(444),w=t=>{bt(d.scrollBy)&&d.scrollBy({behavior:"smooth",left:t.x,top:t.y})};let x=!0;return k(yt,[K(m,"pointermove pointerleave",o),K(y,"pointerenter",(()=>{r(Nn,!0)})),K(y,"pointerleave pointercancel",(()=>{r(Nn,!1)})),!a&&K(y,"mousedown",(()=>{const t=Je();(An(t,Tt)||An(t,kt)||t===document.body)&&ve(k(nn,i),25)})),K(y,"wheel",(t=>{const{deltaX:e,deltaY:n,deltaMode:o}=t;x&&0===o&&Kt(y)===l&&w({x:e,y:n}),x=!1,r(Bn,!0),f((()=>{x=!0,r(Bn)})),en(t)}),{H:!1,I:!0}),K(y,"pointerdown",k(K,u,"click",wo,{A:!0,I:!0,H:!1}),{I:!0}),(()=>{const e="pointerup pointercancel lostpointercapture",o="client"+(c?"X":"Y"),s=c?$e:Le,r=c?"left":"top",l=c?"w":"h",i=c?"x":"y",a=[];return K(h,"pointerdown",(c=>{const y=zt(c.target,`.${wn}`)===m,f=y?m:h,b=t.scrollbars,x=b[y?"dragScroll":"clickScroll"],{button:$,isPrimary:j,pointerType:S}=c,{pointers:T}=b;if(0===$&&j&&x&&(T||[]).includes(S)){yt(a),v();const t=!y&&(c.shiftKey||"instant"===x),b=k(Re,m),$=k(Re,h),j=(t,e)=>(t||b())[r]-(e||$())[r],S=We(Re(d)[s])/Ft(d)[l]||1,T=((t,e)=>o=>{const{Rt:s}=n,r=Ft(h)[l]-Ft(m)[l],c=e*o/r*s[i];xt(d,{[i]:t+c})})(ht(d)[i],1/S),E=c[o],H=b(),L=$(),O=H[s],D=j(H,L)+O/2,I=E-L[r],C=y?0:I-D,A=t=>{yt(B),f.releasePointerCapture(t.pointerId)},X=y||t,M=p(),B=[K(u,e,A),K(u,"selectstart",(t=>en(t)),{H:!1}),K(h,e,A),X&&K(h,"pointermove",(t=>T(C+(t[o]-E)))),X&&(()=>{const t=ht(d);M();const e=ht(d),n={x:e.x-t.x,y:e.y-t.y};(be(n.x)>3||be(n.y)>3)&&(p(),xt(d,t),w(n),g(M))})];if(f.setPointerCapture(c.pointerId),t)T(C);else if(!y){const t=te(Ls);if(t){const e=t(T,C,O,(t=>{t?M():tt(B,M)}));tt(B,e),tt(a,k(e,!0))}}}}))})(),b,v])},Vs=(t,e,n,o,s,r)=>{let c,l,i,a,d,u=Pt,p=0;const y=["mouse","pen"],h=t=>y.includes(t.pointerType),[m,f]=Rt(),[b,g]=Rt(100),[v,w]=Rt(100),[x,$]=Rt((()=>p)),[j,S]=Bs(t,s,o,Fs(e,s,o,(t=>h(t)&&X()))),{ht:T,Qt:E,wt:H}=s,{jt:L,Nt:O,qt:D,Bt:I,Ft:C}=j,A=(t,e)=>{if($(),t)L(zn);else{const t=k(L,zn,!0);p>0&&!e?x(t):t()}},X=()=>{(i?!c:!a)&&(A(!0),b((()=>{A(!1)})))},M=t=>{L(cn,t,!0),L(cn,t,!1)},B=t=>{h(t)&&(c=i,i&&A(!0))},P=[$,g,w,f,()=>u(),K(T,"pointerover",B,{A:!0}),K(T,"pointerenter",B),K(T,"pointerleave",(t=>{h(t)&&(c=!1,i&&A(!1))})),K(T,"pointermove",(t=>{h(t)&&l&&X()})),K(E,"scroll",(t=>{m((()=>{D(),X()})),r(t),C()}))];return[()=>k(yt,tt(P,S())),({It:t,Dt:e,Zt:s,tn:r})=>{const{nn:c,sn:y,en:h,cn:m}=r||{},{Ct:f,dt:b}=s||{},{F:g}=n,{T:w}=Ot(),{k:x,rn:$}=o,[j,S]=t("showNativeOverlaidScrollbars"),[T,X]=t("scrollbars.theme"),[B,P]=t("scrollbars.visibility"),[R,z]=t("scrollbars.autoHide"),[_,F]=t("scrollbars.autoHideSuspend"),[U]=t("scrollbars.autoHideDelay"),[V,W]=t("scrollbars.dragScroll"),[N,Z]=t("scrollbars.clickScroll"),[Y,J]=t("overflow"),Q=b&&!e,q=$.x||$.y,G=c||y||m||f||e,tt=h||P||J,et=j&&w.x&&w.y,nt=(t,e,n)=>{const o=t.includes(Vt)&&(B===It||"auto"===B&&e===Vt);return L(Es,o,n),o};if(p=U,Q&&(_&&q?(M(!1),u(),v((()=>{u=K(E,"scroll",k(M,!0),{A:!0})}))):M(!0)),S&&L(vs,et),X&&(L(d),L(T,!0),d=T),F&&!_&&M(!0),z&&(l="move"===R,i="leave"===R,a="never"===R,A(a,!0)),W&&L(Hs,V),Z&&L(Os,!!N),tt){const t=nt(Y.x,x.x,!0),e=nt(Y.y,x.y,!1);L(Cs,!(t&&e))}G&&(D(),O(),C(),m&&I(),L(Rn,!$.x,!0),L(Rn,!$.y,!1),L(ws,g&&!H))},{},j]},Us=t=>{const e=Ot(),{Z:n,P:o}=e,{elements:s}=n(),{padding:r,viewport:c,content:l}=s,i=Ee(t),a=i?{}:t,{elements:d}=a,{padding:u,viewport:p,content:y}=d||{},h=i?t:a.target,m=po(h),f=h.ownerDocument,b=f.documentElement,g=()=>f.defaultView||ft,v=k(Rs,[h]),w=k(Do,[h]),x=k(Bt,""),$=k(v,x,c),j=k(w,x,l),S=$(p),T=S===h,E=T&&m,H=!T&&j(y),L=!T&&S===H,O=E?b:S,D=E?O:h,I=!T&&w(x,r,u),C=!L&&H,A=[C,O,I,D].map((t=>Ee(t)&&!Kt(t)&&t)),X=t=>t&&Xn(A,t),M=!X(O)&&(t=>{const e=Ft(t),n=Oe(t),o=$t(t,no),s=$t(t,oo);return n.w-e.w>0&&!jt(o)||n.h-e.h>0&&!jt(s)})(O)?O:h,B=E?b:O,P={vt:h,ht:D,U:O,ln:I,bt:C,gt:B,Qt:E?f:O,an:m?b:M,Kt:f,wt:m,Mt:i,L:T,un:g,yt:t=>yn(O,Tt,t),St:(t,e)=>Ce(O,Tt,t,e),Ot:()=>Ce(B,Tt,ms,!0)},{vt:R,ht:z,ln:_,U:F,bt:U}=P,V=[()=>{St(z,[kt,ze]),St(R,ze),m&&St(b,[ze,kt])}];let W=Ke([U,F,_,z,R].find((t=>t&&!X(t))));const N=E?R:U||F,Z=k(yt,V);return[P,()=>{const t=g(),e=Je(),n=t=>{mt(Kt(t),Ke(t)),Ut(t)},s=t=>K(t,"focusin focusout focus blur",wo,{I:!0,H:!1}),r="tabindex",c=mn(F,r),l=s(e);return Ht(z,kt,T?"":us),Ht(_,sn,""),Ht(F,Tt,""),Ht(U,Pn,""),T||(Ht(F,r,c||"-1"),m&&Ht(b,_n,"")),mt(N,W),mt(z,_),mt(_||z,!T&&F),mt(F,U),tt(V,[l,()=>{const t=Je(),e=X(F),o=e&&t===F?R:t,l=s(o);St(_,sn),St(U,Pn),St(F,Tt),m&&St(b,_n),c?Ht(F,r,c):St(F,r),X(U)&&n(U),e&&n(F),X(_)&&n(_),nn(o),l()}]),o&&!T&&(hn(F,Tt,Ho),tt(V,k(St,F,Tt))),nn(!T&&m&&e===R&&t.top===t?F:e),l(),W=0,Z},Z]},js=({bt:t})=>({Zt:e,_n:n,Dt:o})=>{const{xt:s}=e||{},{$t:r}=n;t&&(s||o)&&Jt(t,{[Le]:r&&"100%"})},Ws=({ht:t,ln:e,U:n,L:o},s)=>{const[r,c]=pt({i:Qo,o:Ln()},k(Ln,t,"padding",""));return({It:t,Zt:l,_n:i,Dt:a})=>{let[d,u]=c(a);const{P:p}=Ot(),{ft:y,Ht:h,Ct:m}=l||{},{F:f}=i,[b,g]=t("paddingAbsolute");(y||u||a||h)&&([d,u]=r(a));const v=!o&&(g||m||u);if(v){const t=!b||!e&&!p,o=d.r+d.l,r=d.t+d.b,c={[to]:t&&!f?-o:0,[eo]:t?-r:0,[Qn]:t&&f?-o:0,top:t?-d.t:0,right:t?f?-d.r:"auto":0,left:t?f?"auto":-d.l:0,[$e]:t&&`calc(100% + ${o}px)`},l={[Gn]:t?d.t:0,[Yn]:t?d.r:0,[Jn]:t?d.b:0,[Kn]:t?d.l:0};Jt(e||n,c),Jt(n,l),j(s,{ln:d,dn:!t,j:e?l:j({},c,l)})}return{fn:v}}},Zs=(t,e)=>{const n=Ot(),{ht:o,ln:s,U:r,L:c,Qt:l,gt:i,wt:a,St:d,un:u}=t,{P:p}=n,y=a&&c,h=k(Zn,0),m={display:()=>!1,direction:t=>"ltr"!==t,flexDirection:t=>t.endsWith("-reverse"),writingMode:t=>"horizontal-tb"!==t},f=vt(m),b={i:so,o:{w:0,h:0}},g={i:he,o:{}},v=t=>{d(Oo,!y&&t)},[w,x]=pt(b,k(bn,r)),[$,S]=pt(b,k(Oe,r)),[T,E]=pt(b),[H]=pt(g),[L,O]=pt(b),[D]=pt(g),[I]=pt({i:(t,e)=>Ie(t,e,f),o:{}},(()=>rs(r)?$t(r,f):{})),[C,A]=pt({i:(t,e)=>he(t.D,e.D)&&he(t.M,e.M),o:So()}),X=te(Ao),M=(t,e)=>`${e?ds:fs}${Jo(t)}`;return({It:c,Zt:a,_n:b,Dt:g},{fn:k})=>{const{ft:B,Ht:P,Ct:R,dt:z,zt:_}=a||{},F=X&&X.V(t,e,b,n,c),{W:U,X:V,J:W}=F||{},[N,Z]=As(c,n),[Y,J]=c("overflow"),Q=jt(Y.x),q=jt(Y.y);let G=x(g),tt=S(g),et=E(g),nt=O(g);Z&&p&&d(Ho,!N);{yn(o,kt,ge)&&v(!0);const[t]=V?V():[],[e]=G=w(g),[n]=tt=$(g),s=go(r),c=y&&cs(u()),l={w:h(n.w+e.w),h:h(n.h+e.h)},i={w:h((c?c.w:s.w+h(s.w-n.w))+e.w),h:h((c?c.h:s.h+h(s.h-n.h))+e.h)};t&&t(),nt=L(i),et=T(((t,e)=>{const n=ft.devicePixelRatio%1!=0?1:0,o={w:h(t.w-e.w),h:h(t.h-e.h)};return{w:o.w>n?o.w:0,h:o.h>n?o.h:0}})(l,i),g)}const[ot,st]=nt,[rt,ct]=et,[lt,it]=tt,[at,dt]=G,[ut,pt]=H({x:rt.w>0,y:rt.h>0}),yt=Q&&q&&(ut.x||ut.y)||Q&&ut.x&&!ut.y||q&&ut.y&&!ut.x,mt=k||R||_||dt||it||st||ct||J||Z||!0,bt=$s(ut,Y),[gt,wt]=D(bt.k),[$t,St]=I(g),Tt=R||z||St||pt||g,[Et,Ht]=Tt?C((t=>{if(!f.some((e=>{const n=t[e];return n&&m[e](n)})))return{D:{x:0,y:0},M:{x:1,y:1}};v(!0);const e=ht(i),n=d(hs,!0),o=K(l,Vt,(t=>{const n=ht(i);t.isTrusted&&n.x===e.x&&n.y===e.y&&vo(t)}),{I:!0,A:!0});xt(i,{x:0,y:0}),n();const s=ht(i),r=Oe(i);xt(i,{x:r.w,y:r.h});const c=ht(i);xt(i,{x:c.x-s.x<1&&-r.w,y:c.y-s.y<1&&-r.h});const a=ht(i);return xt(i,e),ln((()=>o())),{D:s,M:a}})($t),g):A();return mt&&(wt&&(t=>{const e=t=>[It,_t,Vt].map((e=>M(e,t))),n=e(!0).concat(e()).join(" ");d(n),d(vt(t).map((e=>M(t[e],"x"===e))).join(" "),!0)})(bt.k),W&&U&&Jt(r,W(bt,b,U(bt,lt,at)))),v(!1),Ce(o,kt,ge,yt),Ce(s,sn,ge,yt),j(e,{k:gt,Vt:{x:ot.w,y:ot.h},Rt:{x:rt.w,y:rt.h},rn:ut,Lt:ls(Et,rt)}),{en:wt,nn:st,sn:ct,cn:Ht||ct,pn:Tt}}},qs=t=>{const[e,n,o]=Us(t),s={ln:{t:0,r:0,b:0,l:0},dn:!1,j:{[to]:0,[eo]:0,[Qn]:0,[Gn]:0,[Yn]:0,[Jn]:0,[Kn]:0},Vt:{x:0,y:0},Rt:{x:0,y:0},k:{x:_t,y:_t},rn:{x:!1,y:!1},Lt:So()},{vt:r,gt:c,L:l,Ot:i}=e,{P:a,T:d}=Ot(),u=!a&&(d.x||d.y),p=[js(e),Ws(e,s),Zs(e,s)];return[n,t=>{const e={},n=u&&ht(c),o=n&&i();return X(p,(n=>{j(e,n(t,e)||{})})),xt(c,n),o&&o(),!l&&xt(r,0),e},s,e,o]},Xs=(t,e,n,o,s)=>{let r=!1;const c=Un(e,{}),[l,i,a,d,u]=qs(t),[p,y,h]=Ns(d,a,c,(t=>{v({},t)})),[m,f,,b]=Vs(t,e,h,a,d,s),g=t=>vt(t).some((e=>!!t[e])),v=(t,s)=>{if(n())return!1;const{vn:c,Dt:l,At:a,hn:d}=t,u=c||{},p=!!l||!r,m={It:Un(e,u,p),vn:u,Dt:p};if(d)return f(m),!1;const b=s||y(j({},m,{At:a})),v=i(j({},m,{_n:h,Zt:b}));f(j({},m,{Zt:b,tn:v}));const w=g(b),x=g(v),k=w||x||!pn(u)||p;return r=!0,k&&o(t,{Zt:b,tn:v}),k};return[()=>{const{an:t,gt:e,Ot:n}=d,o=ht(t),s=[p(),l(),m()],r=n();return xt(e,o),r(),k(yt,s)},v,()=>({gn:h,bn:a}),{wn:d,yn:b},u]},Sn=new WeakMap,Gs=(t,e)=>{Sn.set(t,e)},Ys=t=>{Sn.delete(t)},Mo=t=>Sn.get(t),At=(t,e,n)=>{const{nt:o}=Ot(),s=Ee(t),r=s?t:t.target,c=Mo(r);if(e&&!c){let c=!1;const l=[],i={},a=t=>{const e=ro(t),n=te(as);return n?n(e,!0):e},d=j({},o(),a(e)),[u,p,y]=on(),[h,m,f]=on(n),b=(t,e)=>{f(t,e),y(t,e)},[g,v,w,x,$]=Xs(t,d,(()=>c),(({vn:t,Dt:e},{Zt:n,tn:o})=>{const{ft:s,Ct:r,xt:c,Ht:l,Et:i,dt:a}=n,{nn:d,sn:u,en:p,cn:y}=o;b("updated",[T,{updateHints:{sizeChanged:!!s,directionChanged:!!r,heightIntrinsicChanged:!!c,overflowEdgeChanged:!!d,overflowAmountChanged:!!u,overflowStyleChanged:!!p,scrollCoordinatesChanged:!!y,contentMutation:!!l,hostMutation:!!i,appear:!!a},changedOptions:t||{},force:!!e}])}),(t=>b("scroll",[T,t]))),S=t=>{Ys(r),yt(l),c=!0,b("destroyed",[T,t]),p(),m()},T={options(t,e){if(t){const n=e?o():{},s=$o(d,j(n,a(t)));pn(s)||(j(d,s),v({vn:s}))}return j({},d)},on:h,off:(t,e)=>{t&&e&&m(t,e)},state(){const{gn:t,bn:e}=w(),{F:n}=t,{Vt:o,Rt:s,k:r,rn:l,ln:i,dn:a,Lt:d}=e;return j({},{overflowEdge:o,overflowAmount:s,overflowStyle:r,hasOverflow:l,scrollCoordinates:{start:d.D,end:d.M},padding:i,paddingAbsolute:a,directionRTL:n,destroyed:c})},elements(){const{vt:t,ht:e,ln:n,U:o,bt:s,gt:r,Qt:c}=x.wn,{Yt:l,Gt:i}=x.yn,a=t=>{const{Pt:e,Ut:n,Tt:o}=t;return{scrollbar:o,track:n,handle:e}},d=t=>{const{Wt:e,Xt:n}=t,o=a(e[0]);return j({},o,{clone:()=>{const t=a(n());return v({hn:!0}),t}})};return j({},{target:t,host:e,padding:n||o,viewport:o,content:s||o,scrollOffsetElement:r,scrollEventElement:c,scrollbarHorizontal:d(l),scrollbarVertical:d(i)})},update:t=>v({Dt:t,At:!0}),destroy:k(S,!1),plugin:t=>i[vt(t)[0]]};return tt(l,[$]),Gs(r,T),Co(xo,At,[T,u,i]),zs(x.wn.wt,!s&&t.cancel)?(S(!0),T):(tt(l,g()),b("initialized",[T]),T.update(),T)}return c};At.plugin=t=>{const e=Ct(t),n=e?t:[t],o=n.map((t=>Co(t,At)[0]));return is(n),e?o:o[0]},At.valid=t=>{const e=t&&t.elements,n=bt(e)&&e();return xe(n)&&!!Mo(n.target)},At.env=()=>{const{N:t,T:e,P:n,G:o,st:s,et:r,Z:c,tt:l,nt:i,ot:a}=Ot();return j({},{scrollbarsSize:t,scrollbarsOverlaid:e,scrollbarsHiding:n,scrollTimeline:o,staticDefaultInitialization:s,staticDefaultOptions:r,getDefaultInitialization:c,setDefaultInitialization:l,getDefaultOptions:i,setDefaultOptions:a})},At.nonce=Ds;const rn=!!document.getElementById("banner-wrapper");function xn(t,e){document.addEventListener("click",(n=>{let o=document.getElementById(t),s=n.target;if(s instanceof Node){for(let t of e){let e=document.getElementById(t);if(e==s||e?.contains(s))return}o.classList.add("float-panel-closed")}}))}function Ks(){const t=Fo();Vo(t)}function Js(){Uo(jo())}function _o(){const t=document.querySelector("body");t&&(At({target:t,cancel:{nativeScrollbarsOverlaid:!0}},{scrollbars:{theme:"scrollbar-base scrollbar-auto py-1",autoHide:"move",autoHideDelay:500,autoHideSuspend:!1}}),document.querySelectorAll("pre").forEach((t=>{At(t,{scrollbars:{theme:"scrollbar-base scrollbar-dark px-2",autoHide:"leave",autoHideDelay:500,autoHideSuspend:!1}})})),document.querySelectorAll(".katex-display").forEach((t=>{At(t,{scrollbars:{theme:"scrollbar-base scrollbar-auto py-1"}})})))}function Qs(){const t=document.getElementById("banner");t?t.classList.remove("opacity-0","scale-105"):console.error("Failed to find the banner element")}function tc(){Ks(),Js(),_o(),Qs()}xn("display-setting",["display-setting","display-settings-switch"]),xn("nav-menu-panel",["nav-menu-panel","nav-menu-switch"]),xn("search-panel",["search-panel","search-bar","search-switch"]),tc();const Wn=()=>{window.swup.hooks.on("link:click",(()=>{if(document.documentElement.style.setProperty("--content-delay","0ms"),!rn)return;let t=window.innerHeight*(je/100)-72-16,e=document.getElementById("navbar-wrapper");!e||!document.body.classList.contains("lg:is-home")||(document.body.scrollTop>=t||document.documentElement.scrollTop>=t)&&e.classList.add("navbar-hidden")})),window.swup.hooks.on("content:replace",_o),window.swup.hooks.on("visit:start",(t=>{const e=document.querySelector("body");qo(t.to.url,Xo("/"))?e.classList.add("lg:is-home"):e.classList.remove("lg:is-home");const n=document.getElementById("page-height-extend");n&&n.classList.remove("hidden");let o=document.getElementById("toc-wrapper");o&&o.classList.add("toc-not-ready")})),window.swup.hooks.on("page:view",(()=>{const t=document.getElementById("page-height-extend");t&&t.classList.remove("hidden")})),window.swup.hooks.on("visit:end",(t=>{setTimeout((()=>{const t=document.getElementById("page-height-extend");t&&t.classList.add("hidden");const e=document.getElementById("toc-wrapper");e&&e.classList.remove("toc-not-ready")}),200)}))};window?.swup?.hooks?Wn():document.addEventListener("swup:enable",Wn);let Fe=document.getElementById("back-to-top-btn"),Ve=document.getElementById("toc-wrapper"),Ue=document.getElementById("navbar-wrapper");function ec(){let t=window.innerHeight*(je/100);if(Fe&&(document.body.scrollTop>t||document.documentElement.scrollTop>t?Fe.classList.remove("hide"):Fe.classList.add("hide")),rn&&Ve&&(document.body.scrollTop>t||document.documentElement.scrollTop>t?Ve.classList.remove("toc-hide"):Ve.classList.add("toc-hide")),rn&&Ue){const t=16*Wo;let e=je;document.body.classList.contains("lg:is-home")&&window.innerWidth>=1024&&(e=Zo);let n=window.innerHeight*(e/100)-72-t-16;document.body.scrollTop>=n||document.documentElement.scrollTop>=n?Ue.classList.add("navbar-hidden"):Ue.classList.remove("navbar-hidden")}}window.onscroll=ec,window.onresize=()=>{let t=Math.floor(window.innerHeight*(Bo/100));t-=t%4,document.documentElement.style.setProperty("--banner-height-extend",`${t}px`)};