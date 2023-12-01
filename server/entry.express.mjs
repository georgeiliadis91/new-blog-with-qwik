import{s as _e,r as ke,m as Ce}from"./assets/entry.ssr-0d223b6c.mjs";import{getNotFound as De}from"./@qwik-city-not-found-paths.js";import{isStaticPath as Pe}from"./@qwik-city-static-paths.js";import{createReadStream as Me}from"fs";import{join as O,basename as Oe,extname as We}from"path";import{fileURLToPath as $e}from"url";import{Http2ServerRequest as He}from"http2";import{TextEncoderStream as Ne,TextDecoderStream as Le,WritableStream as je,ReadableStream as Ue}from"stream/web";import{fetch as Ie,Headers as ze,Request as Fe,Response as Qe,FormData as Ge}from"undici";import Be from"crypto";import{_ as Je,a as Ke,v as Xe,q as Ye}from"./assets/@qwik-city-plan-4a357a6a.mjs";import K from"express";import{fileURLToPath as Ve}from"node:url";import{join as le}from"node:path";import"showdown";var fe=class extends Error{constructor(e,t){super(t),this.status=e}};function Ee(e,t){let n="Server Error";return t!=null&&(typeof t.message=="string"?n=t.message:n=String(t)),"<html>"+de(e,n)+"</html>"}function de(e,t){typeof e!="number"&&(e=500),typeof t=="string"?t=qe(t):t="";const n=typeof t=="string"?"600px":"300px",a=e>=500?tt:et;return`
<head>
  <meta charset="utf-8">
  <meta http-equiv="Status" content="${e}">
  <title>${e} ${t}</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <style>
    body { color: ${a}; background-color: #fafafa; padding: 30px; font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Roboto, sans-serif; }
    p { max-width: ${n}; margin: 60px auto 30px auto; background: white; border-radius: 4px; box-shadow: 0px 0px 50px -20px ${a}; overflow: hidden; }
    strong { display: inline-block; padding: 15px; background: ${a}; color: white; }
    span { display: inline-block; padding: 15px; }
  </style>
</head>
<body><p><strong>${e}</strong> <span>${t}</span></p></body>
`}var Ze=/[&<>]/g,qe=e=>e.replace(Ze,t=>{switch(t){case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";default:return""}}),et="#006ce9",tt="#713fc2",nt={lax:"Lax",none:"None",strict:"Strict"},at={seconds:1,minutes:1*60,hours:1*60*60,days:1*60*60*24,weeks:1*60*60*24*7},rt=(e,t,n)=>{const a=[`${e}=${t}`];typeof n.domain=="string"&&a.push(`Domain=${n.domain}`),typeof n.maxAge=="number"?a.push(`Max-Age=${n.maxAge}`):Array.isArray(n.maxAge)?a.push(`Max-Age=${n.maxAge[0]*at[n.maxAge[1]]}`):typeof n.expires=="number"||typeof n.expires=="string"?a.push(`Expires=${n.expires}`):n.expires instanceof Date&&a.push(`Expires=${n.expires.toUTCString()}`),n.httpOnly&&a.push("HttpOnly"),typeof n.path=="string"&&a.push(`Path=${n.path}`);const i=st(n.sameSite);return i&&a.push(`SameSite=${i}`),n.secure&&a.push("Secure"),a.join("; ")};function V(e){try{return decodeURIComponent(e)}catch{return e}}var it=e=>{const t={};if(typeof e=="string"&&e!==""){const n=e.split(";");for(const a of n){const i=a.indexOf("=");i!==-1&&(t[V(a.slice(0,i).trim())]=V(a.slice(i+1).trim()))}}return t};function st(e){if(e===!0)return"Strict";if(e===!1)return"None";if(e)return nt[e]}var k=Symbol("request-cookies"),J=Symbol("response-cookies"),x=Symbol("live-cookies"),ue,me,ot=class{constructor(e){this[ue]={},this[me]={},this[k]=it(e),this[x]={...this[k]}}get(e,t=!0){const n=this[t?x:k][e];return n?{value:n,json(){return JSON.parse(n)},number(){return Number(n)}}:null}getAll(e=!0){return Object.keys(this[e?x:k]).reduce((t,n)=>(t[n]=this.get(n),t),{})}has(e,t=!0){return!!this[t?x:k][e]}set(e,t,n={}){this[x][e]=typeof t=="string"?t:JSON.stringify(t);const a=typeof t=="string"?t:encodeURIComponent(JSON.stringify(t));this[J][e]=rt(e,a,n)}delete(e,t){this.set(e,"deleted",{...t,maxAge:0}),this[x][e]=null}headers(){return Object.values(this[J])}};ue=J,me=x;var X=class{},W=class extends X{},E=new WeakMap,Z="qaction",ct="qfunc";function lt(e){const{url:t,params:n,request:a,status:i,locale:r}=e,c={};a.headers.forEach((y,w)=>c[w]=y);const s=e.sharedMap.get(j),l=e.sharedMap.get(Se),o=e.sharedMap.get(be),f=e.sharedMap.get(At),u=e.request.headers,d=new URL(t.pathname+t.search,t),m=u.get("X-Forwarded-Host"),p=u.get("X-Forwarded-Proto");return m&&(d.port="",d.host=m),p&&(d.protocol=p),{url:d.href,requestHeaders:c,locale:r(),nonce:f,containerAttributes:{"q:route":o},qwikcity:{routeName:o,ev:e,params:{...n},loadedRoute:kt(e),response:{status:i(),loaders:U(e),action:s,formData:l}}}}var ft=(e,t,n,a,i)=>{const r=[],c=[],s=[],l=!!(t&&gt(t[2]));if(e&&q(r,c,s,e,l,n),t){const o=t[0];a&&(n==="POST"||n==="PUT"||n==="PATCH"||n==="DELETE")&&s.unshift(yt),l&&(n==="POST"&&s.push(mt),s.push(ht),s.push(St)),s.push(bt),q(r,c,s,t[2],l,n),l&&(s.push(f=>{f.sharedMap.set(be,o)}),s.push(dt(r,c)),s.push(i))}return s},q=(e,t,n,a,i,r)=>{for(const c of a){typeof c.onRequest=="function"?n.push(c.onRequest):Array.isArray(c.onRequest)&&n.push(...c.onRequest);let s;switch(r){case"GET":{s=c.onGet;break}case"POST":{s=c.onPost;break}case"PUT":{s=c.onPut;break}case"PATCH":{s=c.onPatch;break}case"DELETE":{s=c.onDelete;break}case"OPTIONS":{s=c.onOptions;break}case"HEAD":{s=c.onHead;break}}if(typeof s=="function"?n.push(s):Array.isArray(s)&&n.push(...s),i){const l=Object.values(c).filter(f=>ee(f,"server_loader"));e.push(...l);const o=Object.values(c).filter(f=>ee(f,"server_action"));t.push(...o)}}},ee=(e,t)=>e&&typeof e=="function"&&e.__brand===t;function dt(e,t){return async n=>{if(n.headersSent){n.exit();return}const{method:a}=n,i=U(n),r=I(n)==="dev",c=n[L];if(r&&a==="GET"&&n.query.has(Z)&&console.warn(`Seems like you are submitting a Qwik Action via GET request. Qwik Actions should be submitted via POST request.
Make sure your <form> has method="POST" attribute, like this: <form method="POST">`),a==="POST"){const s=n.query.get(Z);if(s){const l=globalThis._qwikActionsMap,o=t.find(f=>f.__id===s)??(l==null?void 0:l.get(s));if(o){n.sharedMap.set(j,s);const f=await n.parseBody();if(!f||typeof f!="object")throw new Error("Expected request data to be an object");const u=await te(n,o.__validators,f,r);if(!u.success)i[s]=n.fail(u.status??500,u.error);else{const d=r?await H(n,o.__qrl.getSymbol().split("_",1)[0],()=>o.__qrl.call(n,u.data,n)):await o.__qrl.call(n,u.data,n);r&&$(c,d,o.__qrl),i[s]=d}}}}e.length>0&&await Promise.all(e.map(s=>{const l=s.__id;return i[l]=te(n,s.__validators,void 0,r).then(o=>o.success?r?H(n,s.__qrl.getSymbol().split("_",1)[0],()=>s.__qrl.call(n,n)):s.__qrl.call(n,n):n.fail(o.status??500,o.error)).then(o=>(typeof o=="function"?i[l]=o():(r&&$(c,o,s.__qrl),i[l]=o),o))}))}}async function te(e,t,n,a){let i={success:!0,data:n};if(t)for(const r of t)if(a?i=await H(e,"validator$",()=>r.validate(e,n)):i=await r.validate(e,n),i.success)n=i.data;else return i;return i}function ut(e){return e&&typeof e=="object"&&Symbol.asyncIterator in e}async function mt(e){const t=e.query.get(ct);if(t&&e.request.headers.get("X-QRL")===t&&e.request.headers.get("Content-Type")==="application/qwik-json"){e.exit();const n=I(e)==="dev",a=e[L],i=await e.parseBody();if(Array.isArray(i)){const[r,...c]=i;if(pt(r)&&r.getHash()===t){let s;try{n?s=await H(e,`server_${r.getSymbol()}`,()=>r.apply(e,c)):s=await r.apply(e,c)}catch(l){e.headers.set("Content-Type","application/qwik-json"),e.send(500,await a._serializeData(l,!0));return}if(ut(s)){e.headers.set("Content-Type","text/qwik-json-stream");const o=e.getWritableStream().getWriter();for await(const f of s){n&&$(a,f,r);const u=await a._serializeData(f,!0);if(e.signal.aborted)break;await o.write(N.encode(`${u}
`))}o.close()}else{$(a,s,r),e.headers.set("Content-Type","application/qwik-json");const l=await a._serializeData(s,!0);e.send(200,l)}return}}throw e.error(500,"Invalid request")}}function ht(e){const t=Y(e),{basePathname:n,pathname:a,url:i,sharedMap:r}=e;if(!r.has(C)&&a!==n&&!a.endsWith(".html")){if(t){if(!a.endsWith("/"))throw e.redirect(302,a+"/"+i.search)}else if(a.endsWith("/"))throw e.redirect(302,a.slice(0,a.length-1)+i.search)}}function $(e,t,n){try{e._verifySerializable(t,void 0)}catch(a){throw a instanceof Error&&n.dev&&(a.loc=n.dev),a}}var pt=e=>typeof e=="function"&&typeof e.getSymbol=="function";function gt(e){const t=e[e.length-1];return t&&typeof t.default=="function"}function he(e,t){return e=new URL(e),e.pathname.endsWith(v)&&(e.pathname=e.pathname.slice(0,-v.length)),t?e.pathname.endsWith("/")||(e.pathname+="/"):e.pathname.endsWith("/")&&(e.pathname=e.pathname.slice(0,-1)),e.toString().substring(e.origin.length)}var N=new TextEncoder;function yt(e){if(Tt(e.request.headers,"application/x-www-form-urlencoded","multipart/form-data","text/plain")){const n=e.request.headers.get("origin"),a=e.url.origin;if(n!==a)throw e.error(403,`CSRF check failed. Cross-site ${e.method} form submissions are forbidden.
The request origin "${n}" does not match the server origin "${a}".`)}}function wt(e){return async t=>{if(t.headersSent||t.sharedMap.has(C))return;t.request.headers.forEach((u,d)=>u);const a=t.headers;a.has("Content-Type")||a.set("Content-Type","text/html; charset=utf-8");const i=Y(t),{readable:r,writable:c}=new TextEncoderStream,s=t.getWritableStream(),l=r.pipeTo(s,{preventClose:!0}),o=c.getWriter(),f=t.status();try{const u=I(t)==="static",d=lt(t),m=await e({base:t.basePathname+"build/",stream:o,serverData:d,containerAttributes:{"q:render":u?"static":"",...d.containerAttributes}}),p={loaders:U(t),action:t.sharedMap.get(j),status:f!==200?f:200,href:he(t.url,i)};typeof m.html=="string"&&await o.write(m.html),t.sharedMap.set("qData",p)}finally{await o.ready,await o.close(),await l}await s.close()}}async function bt(e){if(e.sharedMap.has(C)){try{await e.next()}catch(r){if(!(r instanceof W))throw r}if(e.headersSent)return;const n=e.status(),a=e.headers.get("Location");if(n>=301&&n<=308&&a){const r=Rt(a);if(r){e.headers.set("Location",r),e.getWritableStream().close();return}else e.status(200),e.headers.delete("Location")}}}async function St(e){if(e.sharedMap.has(C)){if(await e.next(),e.headersSent||e.exited)return;const n=e.status(),a=e.headers.get("Location"),i=Y(e);e.request.headers.forEach((o,f)=>o),e.headers.set("Content-Type","application/json; charset=utf-8");const r={loaders:U(e),action:e.sharedMap.get(j),status:n!==200?n:200,href:he(e.url,i),redirect:a??void 0},c=e.getWritableStream().getWriter(),l=await e[L]._serializeData(r,!0);c.write(N.encode(l)),e.sharedMap.set("qData",r),c.close()}}function Rt(e){if(e.startsWith("/")){const t=v,n=new URL(e,"http://localhost");return(n.pathname.endsWith("/")?n.pathname.slice(0,-1):n.pathname)+(t.startsWith("/")?"":"/")+t+n.search}else return}function ne(){return typeof performance<"u"?performance.now():0}async function H(e,t,n){const a=ne();try{return await n()}finally{const i=ne()-a;let r=e.sharedMap.get("@serverTiming");r||e.sharedMap.set("@serverTiming",r=[]),r.push([t,i])}}function Tt(e,...t){var n;const a=((n=e.get("content-type"))==null?void 0:n.split(/;,/,1)[0].trim())??"";return t.includes(a)}function xt(e){const t=[];return e==="day"?e=60*60*24:e==="week"?e=60*60*24*7:e==="month"?e=60*60*24*30:e==="year"?e=60*60*24*365:e==="private"?e={private:!0,noCache:!0}:e==="immutable"?e={public:!0,immutable:!0,maxAge:60*60*24*365,staleWhileRevalidate:60*60*24*365}:e==="no-cache"&&(e={noCache:!0}),typeof e=="number"&&(e={maxAge:e,sMaxAge:e,staleWhileRevalidate:e}),e.immutable&&t.push("immutable"),e.maxAge&&t.push(`max-age=${e.maxAge}`),e.sMaxAge&&t.push(`s-maxage=${e.sMaxAge}`),e.noStore&&t.push("no-store"),e.noCache&&t.push("no-cache"),e.private&&t.push("private"),e.public&&t.push("public"),e.staleWhileRevalidate&&t.push(`stale-while-revalidate=${e.staleWhileRevalidate}`),e.staleIfError&&t.push(`stale-if-error=${e.staleIfError}`),t.join(", ")}var vt=e=>e&&typeof e.then=="function",pe=Symbol("RequestEvLoaders"),ge=Symbol("RequestEvMode"),ye=Symbol("RequestEvRoute"),L=Symbol("RequestEvQwikSerializer"),we=Symbol("RequestEvTrailingSlash"),be="@routeName",j="@actionId",Se="@actionFormData",At="@nonce";function _t(e,t,n,a,i,r,c,s){const{request:l,platform:o,env:f}=e,u=new Map,d=new ot(l.headers.get("cookie")),m=new Headers,p=new URL(l.url);p.pathname.endsWith(v)&&(p.pathname=p.pathname.slice(0,-Re),i&&!p.pathname.endsWith("/")&&(p.pathname+="/"),u.set(C,!0)),u.set("@manifest",a);let y=-1,w=null,b,A=e.locale,S=200;const Ae=async()=>{for(y++;y<n.length;){const h=n[y],g=h(T);vt(g)&&await g,y++}},_=()=>{if(w!==null)throw new Error("Response already sent")},P=(h,g)=>{if(_(),typeof h=="number"){S=h;const M=T.getWritableStream().getWriter();M.write(typeof g=="string"?N.encode(g):g),M.close()}else if(S=h.status,h.headers.forEach((R,M)=>{m.append(M,R)}),h.body){const R=T.getWritableStream();h.body.pipeTo(R)}else{if(S>=300&&S<400)return new W;T.getWritableStream().getWriter().close()}return z()},z=()=>(y=ae,new X),F={},T={[pe]:F,[ge]:e.mode,[we]:i,[ye]:t,[L]:c,cookie:d,headers:m,env:f,method:l.method,signal:l.signal,params:(t==null?void 0:t[1])??{},pathname:p.pathname,platform:o,query:p.searchParams,request:l,url:p,basePathname:r,sharedMap:u,get headersSent(){return w!==null},get exited(){return y>=ae},get clientConn(){return e.getClientConn()},next:Ae,exit:z,cacheControl:(h,g="Cache-Control")=>{_(),m.set(g,xt(h))},resolveValue:async h=>{const g=h.__id;if(h.__brand==="server_loader"&&!(g in F))throw new Error("You can not get the returned data of a loader that has not been executed for this request.");return F[g]},status:h=>typeof h=="number"?(_(),S=h,h):S,locale:h=>(typeof h=="string"&&(A=h),A||""),error:(h,g)=>(S=h,m.delete("Cache-Control"),new fe(h,g)),redirect:(h,g)=>{if(_(),S=h,g){const R=g.replace(/([^:])\/{2,}/g,"$1/");g!==R&&console.warn(`Redirect URL ${g} is invalid, fixing to ${R}`),m.set("Location",R)}return m.delete("Cache-Control"),h>301&&m.set("Cache-Control","no-store"),z(),new W},defer:h=>typeof h=="function"?h:()=>h,fail:(h,g)=>(_(),S=h,m.delete("Cache-Control"),{failed:!0,...g}),text:(h,g)=>(m.set("Content-Type","text/plain; charset=utf-8"),P(h,g)),html:(h,g)=>(m.set("Content-Type","text/html; charset=utf-8"),P(h,g)),parseBody:async()=>b!==void 0?b:b=Ct(T.request,u,c),json:(h,g)=>(m.set("Content-Type","application/json; charset=utf-8"),P(h,JSON.stringify(g))),send:P,isDirty:()=>w!==null,getWritableStream:()=>{if(w===null){if(e.mode==="dev"){const h=u.get("@serverTiming");h&&m.set("Server-Timing",h.map(g=>`${g[0]};dur=${g[1]}`).join(","))}w=e.getWritableStream(S,m,d,s,T)}return w}};return Object.freeze(T)}function U(e){return e[pe]}function Y(e){return e[we]}function kt(e){return e[ye]}function I(e){return e[ge]}var ae=Number.MAX_SAFE_INTEGER,Ct=async(e,t,n)=>{var a;const i=((a=e.headers.get("content-type"))==null?void 0:a.split(/[;,]/,1)[0].trim())??"";if(i==="application/x-www-form-urlencoded"||i==="multipart/form-data"){const r=await e.formData();return t.set(Se,r),Dt(r)}else{if(i==="application/json")return await e.json();if(i==="application/qwik-json")return n._deserializeData(await e.text())}},Dt=e=>[...e.entries()].reduce((n,[a,i])=>(a.split(".").reduce((r,c,s,l)=>{if(c.endsWith("[]")){const o=c.slice(0,-2);return r[o]=r[o]||[],r[o]=[...r[o],i]}return s<l.length-1?r[c]=r[c]||(Number.isNaN(+l[s+1])?{}:[]):r[c]=i},n),n),{});function Pt(e,t,n,a,i=!0,r="/",c){let s;const l=new Promise(f=>s=f),o=_t(e,t,n,a,i,r,c,s);return{response:l,requestEv:o,completion:Mt(o,s)}}async function Mt(e,t){try{await e.next()}catch(n){if(n instanceof W)await e.getWritableStream().close();else if(n instanceof fe){if(console.error(n),!e.headersSent){const a=Ee(n.status,n),i=n.status;e.html(i,a)}}else if(!(n instanceof X)){if(I(e)!=="dev")try{e.headersSent||(e.headers.set("content-type","text/html; charset=utf-8"),e.cacheControl({noCache:!0}),e.status(500));const a=e.getWritableStream();if(!a.locked){const i=a.getWriter();await i.write(N.encode(de(500,"Internal Server Error"))),await i.close()}}catch{console.error("Unable to render error page")}return n}}finally{e.isDirty()||t(null)}}function Ot(e,t){if(e.endsWith(v)){const n=e.length-Re+(t?1:0);e=e.slice(0,n),e===""&&(e="/")}return e}var C="@isQData",v="/q-data.json",Re=v.length;function Wt(e,t){const n=se(e),a=re(e),i=se(t),r=re(t);return Te(e,n,a,t,i,r)}function Te(e,t,n,a,i,r){let c=null;for(;t<n;){const s=e.charCodeAt(t++),l=a.charCodeAt(i++);if(s===91){const o=xe(e,t),f=t+(o?3:0),u=Q(e,f,n,93),d=e.substring(f,u),m=Q(e,u+1,n,47),p=e.substring(u+1,m);t=u+1;const y=i-1;if(o){const A=Ht(d,p,a,y,r,e,t+p.length+1,n);if(A)return Object.assign(c||(c={}),A)}const w=Q(a,y,r,47,p);if(w==-1)return null;const b=a.substring(y,w);if(!o&&!p&&!b)return null;i=w,(c||(c={}))[d]=decodeURIComponent(b)}else if(s!==l&&!(isNaN(l)&&$t(e,t)))return null}return ie(e,t)&&ie(a,i)?c||{}:null}function $t(e,t){return e.charCodeAt(t)===91&&xe(e,t+1)}function re(e){const t=e.length;return t>1&&e.charCodeAt(t-1)===47?t-1:t}function ie(e,t){const n=e.length;return t>=n||t==n-1&&e.charCodeAt(t)===47}function se(e){return e.charCodeAt(0)===47?1:0}function xe(e,t){return e.charCodeAt(t)===46&&e.charCodeAt(t+1)===46&&e.charCodeAt(t+2)===46}function Q(e,t,n,a,i=""){for(;t<n&&e.charCodeAt(t)!==a;)t++;const r=i.length;for(let c=0;c<r;c++)if(e.charCodeAt(t-r+c)!==i.charCodeAt(c))return-1;return t-r}function Ht(e,t,n,a,i,r,c,s){n.charCodeAt(a)===47&&a++;let l=i;const o=t+"/";let f=5;for(;l>=a&&f--;){const u=Te(r,c,s,n,l,i);if(u){let d=n.substring(a,Math.min(l,i));return d.endsWith(o)&&(d=d.substring(0,d.length-o.length)),u[e]=decodeURIComponent(d),u}l=Nt(n,a,o,l,a-1)+o.length}return null}function Nt(e,t,n,a,i){let r=e.lastIndexOf(n,a);return r==a-n.length&&(r=e.lastIndexOf(n,a-n.length-1)),r>t?r:i}var Lt=async(e,t,n,a)=>{if(Array.isArray(e))for(const i of e){const r=i[0],c=Wt(r,a);if(c){const s=i[1],l=i[3],o=new Array(s.length),f=[],u=jt(t,a);let d;return s.forEach((m,p)=>{oe(m,f,y=>o[p]=y,n)}),oe(u,f,m=>d=m==null?void 0:m.default,n),f.length>0&&await Promise.all(f),[r,c,o,d,l]}}return null},oe=(e,t,n,a)=>{if(typeof e=="function"){const i=E.get(e);if(i)n(i);else{const r=e();typeof r.then=="function"?t.push(r.then(c=>{a!==!1&&E.set(e,c),n(c)})):r&&n(r)}}},jt=(e,t)=>{if(e){t=t.endsWith("/")?t:t+"/";const n=e.find(a=>a[0]===t||t.startsWith(a[0]+(t.endsWith("/")?"":"/")));if(n)return n[1]}};async function Ut(e,t,n){const{render:a,qwikCityPlan:i,manifest:r,checkOrigin:c}=t,s=e.url.pathname,l=Ot(s,i.trailingSlash),o=await It(i,l,e.request.method,c??!0,a);return o?Pt(e,o[0],o[1],r,i.trailingSlash,i.basePathname,n):null}async function It(e,t,n,a,i){const{routes:r,serverPlugins:c,menus:s,cacheModules:l}=e,o=await Lt(r,s,l,t),f=ft(c,o,n,a,wt(i));return f.length>0?[o,f]:null}function G(e,t){var n;return((n=t==null?void 0:t.getOrigin)==null?void 0:n.call(t,e))??(t==null?void 0:t.origin)??process.env.ORIGIN??zt(e)}function zt(e){const{PROTOCOL_HEADER:t,HOST_HEADER:n}=process.env,a=e.headers,i=t&&a[t]||(e.socket.encrypted||e.connection.encrypted?"https":"http"),r=n??(e instanceof He?":authority":"host"),c=a[r];return`${i}://${c}`}function B(e,t){return Qt(e.originalUrl||e.url||"/",t)}var Ft=/\/\/|\\\\/g;function Qt(e,t){return new URL(e.replace(Ft,"/"),t)}async function Gt(e,t,n,a,i){const r=new Headers,c=t.headers;for(const d in c){const m=c[d];if(typeof m=="string")r.set(d,m);else if(Array.isArray(m))for(const p of m)r.append(d,p)}const s=async function*(){for await(const d of t)yield d},l=t.method==="HEAD"||t.method==="GET"?void 0:s(),o=new AbortController,f={method:t.method,headers:r,body:l,signal:o.signal,duplex:"half"};return n.on("close",()=>{o.abort()}),{mode:a,url:e,request:new Request(e.href,f),env:{get(d){return process.env[d]}},getWritableStream:(d,m,p)=>{n.statusCode=d,m.forEach((w,b)=>n.setHeader(b,w));const y=p.headers();return y.length>0&&n.setHeader("Set-Cookie",y),new WritableStream({write(w){n.closed||n.destroyed||n.write(w,b=>{b&&console.error(b)})},close(){n.end()}})},getClientConn:()=>i?i(t):{ip:t.socket.remoteAddress},platform:{ssr:!0,incomingMessage:t,node:process.versions.node},locale:void 0}}var Bt={"3gp":"video/3gpp","3gpp":"video/3gpp",asf:"video/x-ms-asf",asx:"video/x-ms-asf",avi:"video/x-msvideo",avif:"image/avif",bmp:"image/x-ms-bmp",css:"text/css",flv:"video/x-flv",gif:"image/gif",htm:"text/html",html:"text/html",ico:"image/x-icon",jng:"image/x-jng",jpeg:"image/jpeg",jpg:"image/jpeg",js:"application/javascript",json:"application/json",kar:"audio/midi",m4a:"audio/x-m4a",m4v:"video/x-m4v",mid:"audio/midi",midi:"audio/midi",mng:"video/x-mng",mov:"video/quicktime",mp3:"audio/mpeg",mp4:"video/mp4",mpeg:"video/mpeg",mpg:"video/mpeg",ogg:"audio/ogg",pdf:"application/pdf",png:"image/png",rar:"application/x-rar-compressed",shtml:"text/html",svg:"image/svg+xml",svgz:"image/svg+xml",tif:"image/tiff",tiff:"image/tiff",ts:"video/mp2t",txt:"text/plain",wbmp:"image/vnd.wap.wbmp",webm:"video/webm",webp:"image/webp",wmv:"video/x-ms-wmv",woff:"font/woff",woff2:"font/woff2",xml:"text/xml",zip:"application/zip"};function Jt(){typeof global<"u"&&typeof globalThis.fetch!="function"&&typeof process<"u"&&process.versions.node&&(globalThis.fetch=Ie,globalThis.Headers=ze,globalThis.Request=Fe,globalThis.Response=Qe,globalThis.FormData=Ge),typeof globalThis.TextEncoderStream>"u"&&(globalThis.TextEncoderStream=Ne,globalThis.TextDecoderStream=Le),typeof globalThis.WritableStream>"u"&&(globalThis.WritableStream=je,globalThis.ReadableStream=Ue),typeof globalThis.crypto>"u"&&(globalThis.crypto=Be.webcrypto)}function Kt(e){var t;Jt();const n={_deserializeData:Je,_serializeData:Ke,_verifySerializable:Xe};e.manifest&&_e(e.manifest);const a=((t=e.static)==null?void 0:t.root)??O($e(import.meta.url),"..","..","dist");return{router:async(s,l,o)=>{try{const f=G(s,e),u=await Gt(B(s,f),s,l,"server",e.getClientConn),d=await Ut(u,e,n);if(d){const m=await d.completion;if(m)throw m;if(d.requestEv.headersSent)return}o()}catch(f){console.error(f),o(f)}},notFound:async(s,l,o)=>{try{if(!l.headersSent){const f=G(s,e),u=B(s,f),d=De(u.pathname);l.writeHead(404,{"Content-Type":"text/html; charset=utf-8","X-Not-Found":u.pathname}),l.end(d)}}catch(f){console.error(f),o(f)}},staticFile:async(s,l,o)=>{var f;try{const u=G(s,e),d=B(s,u);if(Pe(s.method||"GET",d)){const m=d.pathname;let p;Oe(m).includes(".")?p=O(a,m):e.qwikCityPlan.trailingSlash?p=O(a,m+"index.html"):p=O(a,m,"index.html");const y=Me(p),w=We(p).replace(/^\./,""),b=Bt[w];b&&l.setHeader("Content-Type",b),(f=e.static)!=null&&f.cacheControl&&l.setHeader("Cache-Control",e.static.cacheControl),y.on("error",o),y.pipe(l);return}return o()}catch(u){console.error(u),o(u)}}}}const ve=le(Ve(import.meta.url),"..","..","dist"),Xt=le(ve,"build"),ce=process.env.PORT??3e3,{router:Yt,notFound:Vt}=Kt({render:ke,qwikCityPlan:Ye,manifest:Ce}),D=K();D.use("/build",K.static(Xt,{immutable:!0,maxAge:"1y"}));D.use(K.static(ve,{redirect:!1}));D.use(Yt);D.use(Vt);D.listen(ce,()=>{console.log(`Server started: http://localhost:${ce}/`)});
