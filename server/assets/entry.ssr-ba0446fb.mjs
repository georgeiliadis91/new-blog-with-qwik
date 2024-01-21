import{j as m,b as le,c as de,F as N,s as W,d as Z,i as V,u as ue,e as me,f as v,g as y,h as pe,k as g,l as J,S as fe,R as be,Q as ye}from"./@qwik-city-plan-c3ab55b3.mjs";/**
 * @license
 * @builder.io/qwik/server 1.2.19
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */var qe=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(n,t)=>(typeof require<"u"?require:n)[t]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});function X(e,n){const t=n==null?void 0:n.mapper,s=e.symbolMapper?e.symbolMapper:i=>{var a;if(t){const o=k(i),c=t[o];if(!c){if((a=globalThis.__qwik_reg_symbols)==null?void 0:a.has(o))return[i,"_"];console.error("Cannot resolve symbol",i,"in",t)}return c}};return{isServer:!0,async importSymbol(i,a,o){var _;const c=k(o),l=(_=globalThis.__qwik_reg_symbols)==null?void 0:_.get(c);if(l)return l;let u=String(a);u.endsWith(".js")||(u+=".js");const w=qe(u);if(!(o in w))throw new Error(`Q-ERROR: missing symbol '${o}' in module '${u}'.`);return w[o]},raf:()=>(console.error("server can not rerender"),Promise.resolve()),nextTick:i=>new Promise(a=>{setTimeout(()=>{a(i())})}),chunkForSymbol(i){return s(i,t)}}}async function he(e,n){const t=X(e,n);W(t)}var k=e=>{const n=e.lastIndexOf("_");return n>-1?e.slice(n+1):e};function x(){if(typeof performance>"u")return()=>0;const e=performance.now();return()=>(performance.now()-e)/1e6}function G(e){let n=e.base;return typeof e.base=="function"&&(n=e.base(e)),typeof n=="string"?(n.endsWith("/")||(n+="/"),n):"/build/"}var ve=`((e,t)=>{const n="__q_context__",o=window,s=new Set,i=t=>e.querySelectorAll(t),a=(e,t,n=t.type)=>{i("[on"+e+"\\\\:"+n+"]").forEach((o=>f(o,e,t,n)))},r=(e,t)=>e.getAttribute(t),l=t=>{if(void 0===t._qwikjson_){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===r(n,"type")){t._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/g,"<$1"));break}n=n.previousElementSibling}}},c=(e,t)=>new CustomEvent(e,{detail:t}),f=async(t,o,s,i=s.type)=>{const a="on"+o+":"+i;t.hasAttribute("preventdefault:"+i)&&s.preventDefault();const c=t._qc_,f=null==c?void 0:c.li.filter((e=>e[0]===a));if(f&&f.length>0){for(const e of f)await e[1].getFn([t,s],(()=>t.isConnected))(s,t);return}const b=r(t,a);if(b){const o=t.closest("[q\\\\:container]"),i=new URL(r(o,"q:base"),e.baseURI);for(const a of b.split("\\n")){const r=new URL(a,i),c=r.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",f=performance.now(),b=import(
/* @vite-ignore */
r.href.split("#")[0]);l(o);const p=(await b)[c],u=e[n];if(t.isConnected)try{e[n]=[t,s,r],d("qsymbol",{symbol:c,element:t,reqTime:f}),await p(s,t)}finally{e[n]=u}}}},d=(t,n)=>{e.dispatchEvent(c(t,n))},b=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),p=async e=>{let t=b(e.type),n=e.target;for(a("-document",e,t);n&&n.getAttribute;)await f(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},u=e=>{a("-window",e,b(e.type))},w=()=>{var n;const a=e.readyState;if(!t&&("interactive"==a||"complete"==a)&&(t=1,d("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>d("qidle"))),s.has("qvisible"))){const e=i("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),f(n.target,"",c("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},q=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o,passive:!1}),v=t=>{for(const n of t)s.has(n)||(q(e,n,p,!0),q(o,n,u),s.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&v(t),o.qwikevents={push:(...e)=>v(e)},q(e,"readystatechange",w),w()}})(document);`,_e=`(() => {
    ((doc, hasInitialized) => {
        const win = window;
        const events =  new Set;
        const querySelectorAll = query => doc.querySelectorAll(query);
        const broadcast = (infix, ev, type = ev.type) => {
            querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((target => dispatch(target, infix, ev, type)));
        };
        const getAttribute = (el, name) => el.getAttribute(name);
        const resolveContainer = containerEl => {
            if (void 0 === containerEl._qwikjson_) {
                let script = (containerEl === doc.documentElement ? doc.body : containerEl).lastElementChild;
                while (script) {
                    if ("SCRIPT" === script.tagName && "qwik/json" === getAttribute(script, "type")) {
                        containerEl._qwikjson_ = JSON.parse(script.textContent.replace(/\\\\x3C(\\/?script)/g, "<$1"));
                        break;
                    }
                    script = script.previousElementSibling;
                }
            }
        };
        const createEvent = (eventName, detail) => new CustomEvent(eventName, {
            detail: detail
        });
        const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
            const attrName = "on" + onPrefix + ":" + eventName;
            element.hasAttribute("preventdefault:" + eventName) && ev.preventDefault();
            const ctx = element._qc_;
            const qrls = null == ctx ? void 0 : ctx.li.filter((li => li[0] === attrName));
            if (qrls && qrls.length > 0) {
                for (const q of qrls) {
                    await q[1].getFn([ element, ev ], (() => element.isConnected))(ev, element);
                }
                return;
            }
            const attrValue = getAttribute(element, attrName);
            if (attrValue) {
                const container = element.closest("[q\\\\:container]");
                const base = new URL(getAttribute(container, "q:base"), doc.baseURI);
                for (const qrl of attrValue.split("\\n")) {
                    const url = new URL(qrl, base);
                    const symbolName = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
                    const reqTime = performance.now();
                    const module = import(
                    /* @vite-ignore */
                    url.href.split("#")[0]);
                    resolveContainer(container);
                    const handler = (await module)[symbolName];
                    const previousCtx = doc.__q_context__;
                    if (element.isConnected) {
                        try {
                            doc.__q_context__ = [ element, ev, url ];
                            emitEvent("qsymbol", {
                                symbol: symbolName,
                                element: element,
                                reqTime: reqTime
                            });
                            await handler(ev, element);
                        } finally {
                            doc.__q_context__ = previousCtx;
                        }
                    }
                }
            }
        };
        const emitEvent = (eventName, detail) => {
            doc.dispatchEvent(createEvent(eventName, detail));
        };
        const camelToKebab = str => str.replace(/([A-Z])/g, (a => "-" + a.toLowerCase()));
        const processDocumentEvent = async ev => {
            let type = camelToKebab(ev.type);
            let element = ev.target;
            broadcast("-document", ev, type);
            while (element && element.getAttribute) {
                await dispatch(element, "", ev, type);
                element = ev.bubbles && !0 !== ev.cancelBubble ? element.parentElement : null;
            }
        };
        const processWindowEvent = ev => {
            broadcast("-window", ev, camelToKebab(ev.type));
        };
        const processReadyStateChange = () => {
            var _a;
            const readyState = doc.readyState;
            if (!hasInitialized && ("interactive" == readyState || "complete" == readyState)) {
                hasInitialized = 1;
                emitEvent("qinit");
                (null != (_a = win.requestIdleCallback) ? _a : win.setTimeout).bind(win)((() => emitEvent("qidle")));
                if (events.has("qvisible")) {
                    const results = querySelectorAll("[on\\\\:qvisible]");
                    const observer = new IntersectionObserver((entries => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                observer.unobserve(entry.target);
                                dispatch(entry.target, "", createEvent("qvisible", entry));
                            }
                        }
                    }));
                    results.forEach((el => observer.observe(el)));
                }
            }
        };
        const addEventListener = (el, eventName, handler, capture = !1) => el.addEventListener(eventName, handler, {
            capture: capture,
            passive: !1
        });
        const push = eventNames => {
            for (const eventName of eventNames) {
                if (!events.has(eventName)) {
                    addEventListener(doc, eventName, processDocumentEvent, !0);
                    addEventListener(win, eventName, processWindowEvent);
                    events.add(eventName);
                }
            }
        };
        if (!doc.qR) {
            const qwikevents = win.qwikevents;
            Array.isArray(qwikevents) && push(qwikevents);
            win.qwikevents = {
                push: (...e) => push(e)
            };
            addEventListener(doc, "readystatechange", processReadyStateChange);
            processReadyStateChange();
        }
    })(document);
})();`,we=`((e,t)=>{const n="__q_context__",o=window,s=new Set,i=t=>e.querySelectorAll(t),a=(e,t,n=t.type)=>{i("[on"+e+"\\\\:"+n+"]").forEach((o=>f(o,e,t,n)))},r=(e,t)=>e.getAttribute(t),l=t=>{if(void 0===t._qwikjson_){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===r(n,"type")){t._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/g,"<$1"));break}n=n.previousElementSibling}}},c=(e,t)=>new CustomEvent(e,{detail:t}),f=async(t,o,s,i=s.type)=>{const a="on"+o+":"+i;t.hasAttribute("preventdefault:"+i)&&s.preventDefault();const c=t._qc_,f=null==c?void 0:c.li.filter((e=>e[0]===a));if(f&&f.length>0){for(const e of f)await e[1].getFn([t,s],(()=>t.isConnected))(s,t);return}const b=r(t,a);if(b){const o=t.closest("[q\\\\:container]"),i=new URL(r(o,"q:base"),e.baseURI);for(const a of b.split("\\n")){const r=new URL(a,i),c=r.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",f=performance.now(),b=import(
/* @vite-ignore */
r.href.split("#")[0]);l(o);const p=(await b)[c],u=e[n];if(t.isConnected)try{e[n]=[t,s,r],d("qsymbol",{symbol:c,element:t,reqTime:f}),await p(s,t)}finally{e[n]=u}}}},d=(t,n)=>{e.dispatchEvent(c(t,n))},b=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),p=async e=>{let t=b(e.type),n=e.target;for(a("-document",e,t);n&&n.getAttribute;)await f(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},u=e=>{a("-window",e,b(e.type))},w=()=>{var n;const a=e.readyState;if(!t&&("interactive"==a||"complete"==a)&&(t=1,d("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>d("qidle"))),s.has("qvisible"))){const e=i("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),f(n.target,"",c("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},q=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o,passive:!1}),v=t=>{for(const n of t)s.has(n)||(q(e,n,p,!0),q(o,n,u),s.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&v(t),o.qwikevents={push:(...e)=>v(e)},q(e,"readystatechange",w),w()}})(document);`,ge=`(() => {
    ((doc, hasInitialized) => {
        const win = window;
        const events = new Set;
        const querySelectorAll = query => doc.querySelectorAll(query);
        const broadcast = (infix, ev, type = ev.type) => {
            querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((target => dispatch(target, infix, ev, type)));
        };
        const getAttribute = (el, name) => el.getAttribute(name);
        const resolveContainer = containerEl => {
            if (void 0 === containerEl._qwikjson_) {
                let script = (containerEl === doc.documentElement ? doc.body : containerEl).lastElementChild;
                while (script) {
                    if ("SCRIPT" === script.tagName && "qwik/json" === getAttribute(script, "type")) {
                        containerEl._qwikjson_ = JSON.parse(script.textContent.replace(/\\\\x3C(\\/?script)/g, "<$1"));
                        break;
                    }
                    script = script.previousElementSibling;
                }
            }
        };
        const createEvent = (eventName, detail) => new CustomEvent(eventName, {
            detail: detail
        });
        const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
            const attrName = "on" + onPrefix + ":" + eventName;
            element.hasAttribute("preventdefault:" + eventName) && ev.preventDefault();
            const ctx = element._qc_;
            const qrls = null == ctx ? void 0 : ctx.li.filter((li => li[0] === attrName));
            if (qrls && qrls.length > 0) {
                for (const q of qrls) {
                    await q[1].getFn([ element, ev ], (() => element.isConnected))(ev, element);
                }
                return;
            }
            const attrValue = getAttribute(element, attrName);
            if (attrValue) {
                const container = element.closest("[q\\\\:container]");
                const base = new URL(getAttribute(container, "q:base"), doc.baseURI);
                for (const qrl of attrValue.split("\\n")) {
                    const url = new URL(qrl, base);
                    const symbolName = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
                    const reqTime = performance.now();
                    const module = import(
                    /* @vite-ignore */
                    url.href.split("#")[0]);
                    resolveContainer(container);
                    const handler = (await module)[symbolName];
                    const previousCtx = doc.__q_context__;
                    if (element.isConnected) {
                        try {
                            doc.__q_context__ = [ element, ev, url ];
                            emitEvent("qsymbol", {
                                symbol: symbolName,
                                element: element,
                                reqTime: reqTime
                            });
                            await handler(ev, element);
                        } finally {
                            doc.__q_context__ = previousCtx;
                        }
                    }
                }
            }
        };
        const emitEvent = (eventName, detail) => {
            doc.dispatchEvent(createEvent(eventName, detail));
        };
        const camelToKebab = str => str.replace(/([A-Z])/g, (a => "-" + a.toLowerCase()));
        const processDocumentEvent = async ev => {
            let type = camelToKebab(ev.type);
            let element = ev.target;
            broadcast("-document", ev, type);
            while (element && element.getAttribute) {
                await dispatch(element, "", ev, type);
                element = ev.bubbles && !0 !== ev.cancelBubble ? element.parentElement : null;
            }
        };
        const processWindowEvent = ev => {
            broadcast("-window", ev, camelToKebab(ev.type));
        };
        const processReadyStateChange = () => {
            var _a;
            const readyState = doc.readyState;
            if (!hasInitialized && ("interactive" == readyState || "complete" == readyState)) {
                hasInitialized = 1;
                emitEvent("qinit");
                (null != (_a = win.requestIdleCallback) ? _a : win.setTimeout).bind(win)((() => emitEvent("qidle")));
                if (events.has("qvisible")) {
                    const results = querySelectorAll("[on\\\\:qvisible]");
                    const observer = new IntersectionObserver((entries => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                observer.unobserve(entry.target);
                                dispatch(entry.target, "", createEvent("qvisible", entry));
                            }
                        }
                    }));
                    results.forEach((el => observer.observe(el)));
                }
            }
        };
        const addEventListener = (el, eventName, handler, capture = !1) => el.addEventListener(eventName, handler, {
            capture: capture,
            passive: !1
        });
        const push = eventNames => {
            for (const eventName of eventNames) {
                if (!events.has(eventName)) {
                    addEventListener(doc, eventName, processDocumentEvent, !0);
                    addEventListener(win, eventName, processWindowEvent);
                    events.add(eventName);
                }
            }
        };
        if (!doc.qR) {
            const qwikevents = win.qwikevents;
            Array.isArray(qwikevents) && push(qwikevents);
            win.qwikevents = {
                push: (...e) => push(e)
            };
            addEventListener(doc, "readystatechange", processReadyStateChange);
            processReadyStateChange();
        }
    })(document);
})();`;function je(e={}){return Array.isArray(e.events)&&e.events.length>0?(e.debug?ge:we).replace("window.qEvents",JSON.stringify(e.events)):e.debug?_e:ve}function xe(e,n,t){if(!t)return[];const s=n.prefetchStrategy,r=G(n);if(s!==null){if(!s||!s.symbolsToPrefetch||s.symbolsToPrefetch==="auto")return ke(e,t,r);if(typeof s.symbolsToPrefetch=="function")try{return s.symbolsToPrefetch({manifest:t.manifest})}catch(i){console.error("getPrefetchUrls, symbolsToPrefetch()",i)}}return[]}function ke(e,n,t){const s=[],r=e==null?void 0:e.qrls,{mapper:i,manifest:a}=n,o=new Map;if(Array.isArray(r))for(const c of r){const l=c.getHash(),u=i[l];u&&ee(a,o,s,t,u[1])}return s}function ee(e,n,t,s,r){const i=s+r;let a=n.get(i);if(!a){a={url:i,imports:[]},n.set(i,a);const o=e.bundles[r];if(o&&Array.isArray(o.imports))for(const c of o.imports)ee(e,n,a.imports,s,c)}t.push(a)}function Ee(e){if(e!=null&&e.mapping!=null&&typeof e.mapping=="object"&&e.symbols!=null&&typeof e.symbols=="object"&&e.bundles!=null&&typeof e.bundles=="object")return e}function E(){let r=`const w=new Worker(URL.createObjectURL(new Blob(['onmessage=(e)=>{Promise.all(e.data.map(u=>fetch(u))).finally(()=>{setTimeout(postMessage({}),9999)})}'],{type:"text/javascript"})));`;return r+="w.postMessage(u.map(u=>new URL(u,origin)+''));",r+="w.onmessage=()=>{w.terminate()};",r}function S(e){const n=[],t=s=>{if(Array.isArray(s))for(const r of s)n.includes(r.url)||(n.push(r.url),t(r.imports))};return t(e),n}function Ne(e){const n=new Map;let t=0;const s=(o,c)=>{if(Array.isArray(o))for(const l of o){const u=n.get(l.url)||0;n.set(l.url,u+1),t++,c.has(l.url)||(c.add(l.url),s(l.imports,c))}},r=new Set;for(const o of e)r.clear(),s(o.imports,r);const i=t/n.size*2,a=Array.from(n.entries());return a.sort((o,c)=>c[1]-o[1]),a.slice(0,5).filter(o=>o[1]>i).map(o=>o[0])}function Se(e,n,t){const s=ze(e==null?void 0:e.implementation),r=[];return s.prefetchEvent==="always"&&Ce(r,n,t),s.linkInsert==="html-append"&&Ie(r,n,s),s.linkInsert==="js-append"?Ae(r,n,s,t):s.workerFetchInsert==="always"&&Le(r,n,t),r.length>0?m(N,{children:r}):null}function Ce(e,n,t){const s=Ne(n);for(const r of s)e.push(m("link",{rel:"modulepreload",href:r,nonce:t}));e.push(m("script",{"q:type":"prefetch-bundles",dangerouslySetInnerHTML:"document.dispatchEvent(new CustomEvent('qprefetch', {detail:{links: [location.pathname]}}))",nonce:t}))}function Ie(e,n,t){const s=S(n),r=t.linkRel||"prefetch";for(const i of s){const a={};a.href=i,a.rel=r,(r==="prefetch"||r==="preload")&&i.endsWith(".js")&&(a.as="script"),e.push(m("link",a,void 0))}}function Ae(e,n,t,s){const r=t.linkRel||"prefetch";let i="";t.workerFetchInsert==="no-link-support"&&(i+="let supportsLinkRel = true;"),i+=`const u=${JSON.stringify(S(n))};`,i+="u.map((u,i)=>{",i+="const l=document.createElement('link');",i+='l.setAttribute("href",u);',i+=`l.setAttribute("rel","${r}");`,t.workerFetchInsert==="no-link-support"&&(i+="if(i===0){",i+="try{",i+=`supportsLinkRel=l.relList.supports("${r}");`,i+="}catch(e){}",i+="}"),i+="document.body.appendChild(l);",i+="});",t.workerFetchInsert==="no-link-support"&&(i+="if(!supportsLinkRel){",i+=E(),i+="}"),t.workerFetchInsert==="always"&&(i+=E()),e.push(m("script",{type:"module","q:type":"link-js",dangerouslySetInnerHTML:i,nonce:s}))}function Le(e,n,t){let s=`const u=${JSON.stringify(S(n))};`;s+=E(),e.push(m("script",{type:"module","q:type":"prefetch-worker",dangerouslySetInnerHTML:s,nonce:t}))}function ze(e){return e&&typeof e=="object"?e:Re}var Re={linkInsert:null,linkRel:null,workerFetchInsert:null,prefetchEvent:"always"},Fe="<!DOCTYPE html>";async function Pe(e,n){var F;let t=n.stream,s=0,r=0,i=0,a=0,o="",c;const l=((F=n.streaming)==null?void 0:F.inOrder)??{strategy:"auto",maximunInitialChunk:5e4,maximunChunk:3e4},u=n.containerTagName??"html",w=n.containerAttributes??{},_=t,te=x(),se=G(n),p=ne(n.manifest);function C(){o&&(_.write(o),o="",s=0,i++,i===1&&(a=te()))}function I(d){const f=d.length;s+=f,r+=f,o+=d}switch(l.strategy){case"disabled":t={write:I};break;case"direct":t=_;break;case"auto":let d=0,f=!1;const P=l.maximunChunk??0,j=l.maximunInitialChunk??0;t={write(h){h==="<!--qkssr-f-->"?f||(f=!0):h==="<!--qkssr-pu-->"?d++:h==="<!--qkssr-po-->"?d--:I(h),d===0&&(f||s>=(i===0?j:P))&&(f=!1,C())}};break}u==="html"?t.write(Fe):(t.write("<!--cq-->"),n.qwikLoader?(n.qwikLoader.include===void 0&&(n.qwikLoader.include="never"),n.qwikLoader.position===void 0&&(n.qwikLoader.position="bottom")):n.qwikLoader={include:"never"}),n.manifest||console.warn("Missing client manifest, loading symbols in the client might 404. Please ensure the client build has run and generated the manifest for the server build."),await he(n,p);const A=p==null?void 0:p.manifest.injections,ie=A?A.map(d=>m(d.tag,d.attributes??{})):void 0,re=x(),L=[];let z=0,R=0;await le(e,{stream:t,containerTagName:u,containerAttributes:w,serverData:n.serverData,base:se,beforeContent:ie,beforeClose:async(d,f,P,j)=>{var Q,$,M,Y,K,U,B;z=re();const h=x();c=await de(d,f,void 0,j);const q=[];if(n.prefetchStrategy!==null){const b=xe(c,n,p);if(b.length>0){const H=Se(n.prefetchStrategy,b,(Q=n.serverData)==null?void 0:Q.nonce);H&&q.push(H)}}const ae=JSON.stringify(c.state,void 0,void 0);q.push(m("script",{type:"qwik/json",dangerouslySetInnerHTML:Te(ae),nonce:($=n.serverData)==null?void 0:$.nonce})),c.funcs.length>0&&q.push(m("script",{"q:func":"qwik/json",dangerouslySetInnerHTML:Oe(c.funcs),nonce:(M=n.serverData)==null?void 0:M.nonce}));const ce=!c||c.mode!=="static",T=((Y=n.qwikLoader)==null?void 0:Y.include)??"auto",D=T==="always"||T==="auto"&&ce;if(D){const b=je({events:(K=n.qwikLoader)==null?void 0:K.events,debug:n.debug});q.push(m("script",{id:"qwikloader",dangerouslySetInnerHTML:b,nonce:(U=n.serverData)==null?void 0:U.nonce}))}const O=Array.from(f.$events$,b=>JSON.stringify(b));if(O.length>0){let b=`window.qwikevents.push(${O.join(", ")})`;D||(b=`window.qwikevents||=[];${b}`),q.push(m("script",{dangerouslySetInnerHTML:b,nonce:(B=n.serverData)==null?void 0:B.nonce}))}return De(L,d),R=h(),m(N,{children:q})},manifestHash:(p==null?void 0:p.manifest.manifestHash)||"dev"}),u!=="html"&&t.write("<!--/cq-->"),C();const oe=c.resources.some(d=>d._cache!==1/0);return{prefetchResources:void 0,snapshotResult:c,flushes:i,manifest:p==null?void 0:p.manifest,size:r,isStatic:!oe,timing:{render:z,snapshot:R,firstFlush:a},_symbols:L}}function ne(e){if(e){if("mapper"in e)return e;if(e=Ee(e),e){const n={};return Object.entries(e.mapping).forEach(([t,s])=>{n[k(t)]=[t,s]}),{mapper:n,manifest:e}}}}var Te=e=>e.replace(/<(\/?script)/g,"\\x3C$1");function De(e,n){var t;for(const s of n){const r=(t=s.$componentQrl$)==null?void 0:t.getSymbol();r&&!e.includes(r)&&e.push(r)}}function Oe(e){return`document.currentScript.qFuncs=[${e.join(`,
`)}]`}async function He(e){const n=X({manifest:e},ne(e));W(n)}const Qe={manifestHash:"oi5m5s",symbols:{s_02wMImzEAbk:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_useTask",canonicalFilename:"s_02wmimzeabk",hash:"02wMImzEAbk",ctxKind:"function",ctxName:"useTask$",captures:!0,parent:"s_TxCFOy819ag",loc:[26295,35258]},s_0RuWJF374SY:{origin:"routes/blog/index.tsx",displayName:"blog_component",canonicalFilename:"s_0ruwjf374sy",hash:"0RuWJF374SY",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[814,1305]},s_3sccYCDd1Z0:{origin:"root.tsx",displayName:"root_component",canonicalFilename:"s_3sccycdd1z0",hash:"3sccYCDd1Z0",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[268,927]},s_8gdLBszqbaM:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component",canonicalFilename:"s_8gdlbszqbam",hash:"8gdLBszqbaM",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[37211,38862]},s_Nk9PlpjQm9Y:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"GetForm_component",canonicalFilename:"s_nk9plpjqm9y",hash:"Nk9PlpjQm9Y",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[48978,50329]},s_TxCFOy819ag:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component",canonicalFilename:"s_txcfoy819ag",hash:"TxCFOy819ag",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[23025,35545]},s_VkLNXphUh5s:{origin:"routes/layout.tsx",displayName:"layout_component",canonicalFilename:"s_vklnxphuh5s",hash:"VkLNXphUh5s",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[1036,1819]},s_WmYC5H00wtI:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityMockProvider_component",canonicalFilename:"s_wmyc5h00wti",hash:"WmYC5H00wtI",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[35829,37092]},s_e0ssiDXoeAM:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"RouterOutlet_component",canonicalFilename:"s_e0ssidxoeam",hash:"e0ssiDXoeAM",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[7931,8645]},s_lh6kH0PQDG4:{origin:"routes/blog/[slug]/index.tsx",displayName:"_slug__component",canonicalFilename:"s_lh6kh0pqdg4",hash:"lh6kH0PQDG4",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[657,982]},s_xYL1qOwPyDI:{origin:"routes/index.tsx",displayName:"routes_component",canonicalFilename:"s_xyl1qowpydi",hash:"xYL1qOwPyDI",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[513,817]},s_zrbrqoaqXSY:{origin:"components/router-head/router-head.tsx",displayName:"RouterHead_component",canonicalFilename:"s_zrbrqoaqxsy",hash:"zrbrqoaqXSY",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[244,911]},s_JKHgMZ4xLZQ:{origin:"routes/layout.tsx",displayName:"layout_component_useStyles",canonicalFilename:"s_jkhgmz4xlzq",hash:"JKHgMZ4xLZQ",ctxKind:"function",ctxName:"useStyles$",captures:!1,parent:"s_VkLNXphUh5s",loc:[1101,1107]},s_RPDJAz33WLA:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_useStyles",canonicalFilename:"s_rpdjaz33wla",hash:"RPDJAz33WLA",ctxKind:"function",ctxName:"useStyles$",captures:!1,parent:"s_TxCFOy819ag",loc:[23080,23114]},s_A5bZC7WO00A:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"routeActionQrl_action_submit",canonicalFilename:"s_a5bzc7wo00a",hash:"A5bZC7WO00A",ctxKind:"function",ctxName:"submit",captures:!0,parent:null,loc:[40230,41864]},s_DyVc0YBIqQU:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"spa_init",canonicalFilename:"s_dyvc0ybiqqu",hash:"DyVc0YBIqQU",ctxKind:"function",ctxName:"spaInit",captures:!1,parent:null,loc:[1391,6872]},s_wOIPfiQ04l4:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"serverQrl_stuff",canonicalFilename:"s_woipfiq04l4",hash:"wOIPfiQ04l4",ctxKind:"function",ctxName:"stuff",captures:!0,parent:null,loc:[44878,46864]},s_BUbtvTyvVRE:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityMockProvider_component_goto",canonicalFilename:"s_bubtvtyvvre",hash:"BUbtvTyvVRE",ctxKind:"function",ctxName:"goto",captures:!1,parent:"s_WmYC5H00wtI",loc:[36230,36291]},s_eBQ0vFsFKsk:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component_onPrefetch_event",canonicalFilename:"s_ebq0vfsfksk",hash:"eBQ0vFsFKsk",ctxKind:"function",ctxName:"event$",captures:!1,parent:"s_8gdLBszqbaM",loc:[37738,37801]},s_fX0bDjeJa0E:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_goto",canonicalFilename:"s_fx0bdjeja0e",hash:"fX0bDjeJa0E",ctxKind:"function",ctxName:"goto",captures:!0,parent:"s_TxCFOy819ag",loc:[24364,25683]},s_i1Cv0pYJNR0:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component_handleClick_event",canonicalFilename:"s_i1cv0pyjnr0",hash:"i1Cv0pYJNR0",ctxKind:"function",ctxName:"event$",captures:!0,parent:"s_8gdLBszqbaM",loc:[37919,38434]},s_p9MSze0ojs4:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"GetForm_component_form_onSubmit",canonicalFilename:"s_p9msze0ojs4",hash:"p9MSze0ojs4",ctxKind:"function",ctxName:"_jsxS",captures:!0,parent:"s_Nk9PlpjQm9Y",loc:[49285,49982]}},mapping:{s_02wMImzEAbk:"q-16e57f0b.js",s_0RuWJF374SY:"q-6980b2f5.js",s_3sccYCDd1Z0:"q-9df2e710.js",s_8gdLBszqbaM:"q-57efc2a3.js",s_Nk9PlpjQm9Y:"q-d4c28f5a.js",s_TxCFOy819ag:"q-16e57f0b.js",s_VkLNXphUh5s:"q-1c06da91.js",s_WmYC5H00wtI:"q-aab73701.js",s_e0ssiDXoeAM:"q-4b3cca8f.js",s_lh6kH0PQDG4:"q-b56cc9f8.js",s_xYL1qOwPyDI:"q-969242e6.js",s_zrbrqoaqXSY:"q-6eada0b2.js",s_JKHgMZ4xLZQ:"q-1c06da91.js",s_RPDJAz33WLA:"q-16e57f0b.js",s_A5bZC7WO00A:"q-513dd9d9.js",s_DyVc0YBIqQU:"q-663033b0.js",s_wOIPfiQ04l4:"q-f61f81c2.js",s_BUbtvTyvVRE:"q-aab73701.js",s_eBQ0vFsFKsk:"q-f0ba5d47.js",s_fX0bDjeJa0E:"q-16e57f0b.js",s_i1Cv0pYJNR0:"q-57efc2a3.js",s_p9MSze0ojs4:"q-d4c28f5a.js"},bundles:{"q-16e57f0b.js":{size:5882,imports:["q-5b735a63.js","q-a6647022.js"],dynamicImports:["q-4a7843c0.js","q-528670b2.js","q-d14d7670.js","q-e7ff12b4.js","q-ee918083.js"],origins:["@qwik-city-plan","src/entry_QwikCityProvider.js","src/s_02wmimzeabk.js","src/s_fx0bdjeja0e.js","src/s_rpdjaz33wla.js","src/s_txcfoy819ag.js"],symbols:["s_02wMImzEAbk","s_fX0bDjeJa0E","s_RPDJAz33WLA","s_TxCFOy819ag"]},"q-1c06da91.js":{size:1788,imports:["q-5b735a63.js","q-a6647022.js","q-d14d7670.js","q-f87459be.js"],origins:["src/entry_layout.js","src/routes/styles.css?used&inline","src/s_jkhgmz4xlzq.js","src/s_vklnxphuh5s.js"],symbols:["s_JKHgMZ4xLZQ","s_VkLNXphUh5s"]},"q-4a7843c0.js":{size:125,imports:["q-5b735a63.js"],dynamicImports:["q-8ea06850.js"],origins:["@qwik-city-entries"]},"q-4b3cca8f.js":{size:467,imports:["q-5b735a63.js","q-a6647022.js"],origins:["src/entry_RouterOutlet.js","src/s_e0ssidxoeam.js"],symbols:["s_e0ssiDXoeAM"]},"q-513dd9d9.js":{size:751,imports:["q-5b735a63.js"],origins:["src/entry_routeActionQrl.js","src/s_a5bzc7wo00a.js"],symbols:["s_A5bZC7WO00A"]},"q-528670b2.js":{size:444,imports:["q-5b735a63.js","q-a6647022.js"],dynamicImports:["q-b56cc9f8.js"],origins:["src/routes/blog/[slug]/index.tsx"]},"q-57efc2a3.js":{size:1144,imports:["q-5b735a63.js","q-a6647022.js"],dynamicImports:["q-f0ba5d47.js"],origins:["src/entry_Link.js","src/s_8gdlbszqbam.js","src/s_i1cv0pyjnr0.js"],symbols:["s_8gdLBszqbaM","s_i1Cv0pYJNR0"]},"q-5b735a63.js":{size:47563,origins:["node_modules/@builder.io/qwik/core.min.mjs"]},"q-663033b0.js":{size:2286,origins:["src/entry_spaInit.js","src/s_dyvc0ybiqqu.js"],symbols:["s_DyVc0YBIqQU"]},"q-6980b2f5.js":{size:535,imports:["q-5b735a63.js","q-a6647022.js","q-ee918083.js","q-f87459be.js"],origins:["src/entry_blog.js","src/s_0ruwjf374sy.js"],symbols:["s_0RuWJF374SY"]},"q-6eada0b2.js":{size:684,imports:["q-5b735a63.js","q-a6647022.js"],origins:["src/entry_RouterHead.js","src/s_zrbrqoaqxsy.js"],symbols:["s_zrbrqoaqXSY"]},"q-81b10739.js":{size:207,imports:["q-5b735a63.js"],dynamicImports:["q-9df2e710.js"],origins:["src/global.css","src/root.tsx"]},"q-8ea06850.js":{size:2539,origins:["node_modules/@builder.io/qwik-city/service-worker.mjs","src/routes/service-worker.ts"]},"q-969242e6.js":{size:461,imports:["q-5b735a63.js","q-a6647022.js","q-e7ff12b4.js","q-f87459be.js"],origins:["src/entry_routes.js","src/s_xyl1qowpydi.js"],symbols:["s_xYL1qOwPyDI"]},"q-9df2e710.js":{size:659,imports:["q-5b735a63.js","q-a6647022.js"],dynamicImports:["q-6eada0b2.js"],origins:["src/components/router-head/router-head.tsx","src/entry_root.js","src/s_3sccycdd1z0.js"],symbols:["s_3sccYCDd1Z0"]},"q-a6647022.js":{size:8388,imports:["q-5b735a63.js"],dynamicImports:["q-16e57f0b.js","q-4b3cca8f.js","q-57efc2a3.js","q-663033b0.js"],origins:["@qwik-city-sw-register","node_modules/@builder.io/qwik-city/index.qwik.mjs"]},"q-aab73701.js":{size:787,imports:["q-5b735a63.js","q-a6647022.js"],origins:["src/entry_QwikCityMockProvider.js","src/s_bubtvtyvvre.js","src/s_wmyc5h00wti.js"],symbols:["s_BUbtvTyvVRE","s_WmYC5H00wtI"]},"q-b56cc9f8.js":{size:517,imports:["q-528670b2.js","q-5b735a63.js","q-a6647022.js","q-f87459be.js"],origins:["src/entry__slug_.js","src/s_lh6kh0pqdg4.js"],symbols:["s_lh6kH0PQDG4"]},"q-d14d7670.js":{size:424,imports:["q-5b735a63.js","q-a6647022.js"],dynamicImports:["q-1c06da91.js"],origins:["src/routes/layout.tsx"]},"q-d4c28f5a.js":{size:1032,imports:["q-5b735a63.js","q-a6647022.js"],origins:["src/entry_GetForm.js","src/s_nk9plpjqm9y.js","src/s_p9msze0ojs4.js"],symbols:["s_Nk9PlpjQm9Y","s_p9MSze0ojs4"]},"q-e7ff12b4.js":{size:434,imports:["q-5b735a63.js","q-a6647022.js"],dynamicImports:["q-969242e6.js"],origins:["src/routes/index.tsx"]},"q-ee918083.js":{size:430,imports:["q-5b735a63.js","q-a6647022.js"],dynamicImports:["q-6980b2f5.js"],origins:["src/routes/blog/index.tsx"]},"q-f0ba5d47.js":{size:128,imports:["q-5b735a63.js","q-a6647022.js"],origins:["src/s_ebq0vfsfksk.js"],symbols:["s_eBQ0vFsFKsk"]},"q-f61f81c2.js":{size:889,imports:["q-5b735a63.js","q-a6647022.js"],origins:["src/entry_serverQrl.js","src/s_woipfiq04l4.js"],symbols:["s_wOIPfiQ04l4"]},"q-f87459be.js":{size:77313,origins:["node_modules/showdown/dist/showdown.js","src/helpers/index.ts"]}},injections:[{tag:"style",location:"head",attributes:{"data-src":"/build/q-97925b84.css",dangerouslySetInnerHTML:`body{padding:0;margin:0;line-height:inherit}body{font-family:IBM Plex Mono,monospace;color:#d5d7d8;background:#1d1f20}header,main,footer{margin:0 auto;max-width:768px}@media (max-width: 992px){header,main,footer{max-width:100%;padding:0 16px}}main{margin-bottom:96px}header{display:flex;justify-content:space-between;align-items:center;padding:32px 0;border-bottom:1px solid #f96743;margin-bottom:42px}header nav{display:flex;justify-content:space-between;align-items:center;gap:16px}header a{text-decoration:none;color:#d5d7d8}header a:hover{color:#f96743}header nav a:hover{text-underline-offset:4px;text-decoration-line:underline;text-decoration-style:wavy;text-decoration-thickness:2px}header .header-label{font-size:24px;font-weight:700;text-decoration:none}footer{display:flex;justify-content:space-between;align-items:center;padding:16px 0;border-top:1px solid #f96743}footer div.social-container{display:flex;justify-content:space-between;align-items:center;gap:16px}footer div.social-container svg{width:24px;height:24px;fill:#f96743}footer div.social-container svg path{fill:#f96743}h1{color:#f96743}article p{line-height:24px}main a{color:#f96743}@media (max-width: 992px){footer,header{padding:16px;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;gap:8px}h1{font-size:24px}}
`}}],version:"1",options:{target:"client",buildMode:"production",entryStrategy:{type:"smart"}},platform:{qwik:"1.2.19",vite:"",rollup:"3.29.4",env:"node",os:"darwin",node:"18.18.2"}},$e=()=>{const e=ue(),n=me();return v(N,{children:[y("title",null,null,e.title,1,null),y("link",null,{href:pe(t=>t.url.href,[n],"p0.url.href"),rel:"canonical"},null,3,null),y("meta",null,{content:"width=device-width, initial-scale=1.0",name:"viewport"},null,3,null),e.meta.map(t=>g("meta",{...t},null,0,t.key)),e.links.map(t=>g("link",{...t},null,0,t.key)),e.styles.map(t=>g("style",{...t.props,dangerouslySetInnerHTML:J(t,"style")},null,0,t.key)),e.scripts.map(t=>g("script",{...t.props,dangerouslySetInnerHTML:J(t,"script")},null,0,t.key))]},1,"OA_0")},Me=Z(V($e,"s_zrbrqoaqXSY"));const Ye=()=>v(ye,{children:[y("head",null,null,[y("meta",null,{charSet:"utf-8"},null,3,null),y("link",null,{href:"/manifest.json",rel:"manifest"},null,3,null),y("link",null,{href:"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap",rel:"preload"},null,3,null),v(Me,null,3,"35_0"),v(fe,null,3,"35_1")],1,null),y("body",null,{lang:"en"},v(be,null,3,"35_2"),1,null)]},1,"35_3"),Ke=Z(V(Ye,"s_3sccYCDd1Z0"));function Je(e){return Pe(v(Ke,null,3,"pY_0"),{manifest:Qe,...e,containerAttributes:{lang:"en-us",...e.containerAttributes}})}export{Qe as m,Je as r,He as s};
