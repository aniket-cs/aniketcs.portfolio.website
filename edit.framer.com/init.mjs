var f;(n=>(n.isTouch="ontouchstart"in window||navigator.maxTouchPoints>0,n.isChrome=navigator.userAgent.toLowerCase().includes("chrome/"),n.isWebKit=navigator.userAgent.toLowerCase().includes("applewebkit/"),n.isSafari=n.isWebKit&&!n.isChrome,n.isSafariDesktop=n.isSafari&&!n.isTouch,n.isWindows=/Win/u.test(navigator.platform),n.isMacOS=/Mac/u.test(navigator.platform),n.isAndroidWebView=n.isChrome&&navigator.userAgent.toLowerCase().includes("; wv)"),n.isIosWebView=n.isWebKit&&!navigator.userAgent.toLowerCase().includes("safari/"),n.isWebView=n.isAndroidWebView||n.isIosWebView))(f||={});var g="__framer_hide_editorbar_until",x="2147483647";function W(){let s=localStorage.getItem(g);if(!s)return!1;let d=Date.now(),c=Number(s);return d>=c||Number.isNaN(c)?(localStorage.removeItem(g),!1):!0}function M(){return window.self!==window.top}var H=`
#__framer-editorbar {
    color-scheme: light;
}
#__framer-editorbar.mode_normal {
    overflow: hidden;
    position: fixed;
    bottom: 10px;
    height: 34px;
    border: none;
    z-index: ${x};
}

#__framer-editorbar.mode_normal.status_hidden {
    display: none;
}

#__framer-editorbar.mode_normal.status_measuring {
    left: 0;
    width: 100%;
}

#__framer-editorbar.mode_normal[width] {
    box-shadow: 0px 0px 0px 1px rgba(255, 255, 255, 0.2), 0px 10px 20px 0px rgba(0, 0, 0, 0.2);
    left: 50%;
    transform: translateX(-50%);
}

#__framer-editorbar.mode_subtle {
    --padding-right: 10px;
    overflow: hidden;
    position: fixed;
    right: var(--padding-right);
    border: none;
    z-index: ${x};
    top: 0;
    width: calc(100vw - var(--padding-right));
    height: 100vh;
}

#__framer-editorbar.mode_subtle.status_hidden {
    display: none;
}

#__framer-editorbar.mode_subtle.status_measuring {
    clip-path: unset;
}

#__framer-editorbar.mode_subtle.fullscreen {
    --padding-right: 0px;
    left: 0;
    right: initial;
}
`,I=document.createElement("style");I.type="text/css";I.innerHTML=H;document.head.appendChild(I);var N=new URL(import.meta.url),p=N.origin,O=/^\/(.+)\/.+$/u.exec(N.pathname)?.[1]??"";function X({dependencies:s}){if(s.__version!==1)throw new Error("Unsupported dependencies version");if(W()||M()||f.isWebView)return function(){return null};let{createElement:d,memo:c,useCallback:h,useEffect:l,useRef:w,useState:u}=s.react,{createPortal:_}=s["react-dom"],{useCurrentRoute:b,useLocaleInfo:S,useRouter:n}=s.framer;function D(){let[o,r]=u(!1),t=h(()=>{"requestIdleCallback"in window?requestIdleCallback(()=>{r(!0)}):setTimeout(()=>{r(!0)},300)},[]);return l(()=>{let e;return document.readyState==="complete"?t():(e=()=>{document.readyState==="complete"&&t()},document.addEventListener("readystatechange",e,{once:!0})),()=>{e&&document.removeEventListener("readystatechange",e)}},[t]),o}function R(o){let[r,t]=u({className:"status_hidden"});return l(()=>{let e=a=>{a.origin===p&&typeof a.data=="object"&&a.data?.apiVersion===1&&(a.data.type==="beginSizeMeasuring"&&t({className:"status_measuring"}),a.data.type==="updateStyle"&&o.editorBarSubtle?t({style:{clipPath:a.data.clipPath}}):a.data.type==="updateStyle"&&!o.editorBarSubtle&&t({height:a.data.height,width:a.data.width,style:{background:a.data.background,borderRadius:a.data.borderRadius}}),a.data.type==="editorBarHidden"&&(t({className:"status_hidden"}),window.removeEventListener("message",e)),a.data.type==="enterFullscreen"&&(t({className:"fullscreen"}),window.removeEventListener("message",e)))};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},[]),r}function v(){let[o,r]=u(!1);return l(()=>{if(o)return;let t=e=>{if(e.origin===p&&typeof e.data=="object"&&e.data?.apiVersion===1&&e.data.type==="editorBarHidden"&&!o){let i=Date.now()+6048e5;localStorage.setItem(g,i.toString()),r(!0),window.removeEventListener("message",t)}};return window.addEventListener("message",t),()=>{window.removeEventListener("message",t)}},[]),o}function L({iframeRef:o}){let[r,t]=u(void 0),e=C();return l(()=>{t(a=>a??e),e&&o.current&&o.current.contentWindow.postMessage({apiVersion:1,type:"updateNodeId",nodeId:e},p)},[o,e]),r}function C(){let o=b(),r=S()?.activeLocale??void 0,{collectionUtils:t}=n(),[e,a]=u(void 0),i=o?.id,m=o?.collectionId,y=o?.pathVariables;return l(()=>{let E=!1;return U({activeLocale:r,collectionId:m,collectionUtils:t,pathVariables:y}).then(V=>{E||a(V??i)}).catch(()=>{E||a(i)}),()=>{E=!0}},[r,m,t,y,i]),e}async function U({activeLocale:o,collectionId:r,collectionUtils:t,pathVariables:e}){if(r){let a=Object.values(e);if(a.length!==1)return;let i=t?.[r];return await(await i?.())?.getRecordIdBySlug(a[0],o)}}function A(){l(()=>{let o=r=>{if(r.origin===p&&typeof r.data=="object"&&r.data?.apiVersion===1&&r.data.type==="initializeController"){let t=document.createElement("link");t.rel="stylesheet",t.href=r.data.cssUrl,document.head.appendChild(t),import(r.data.jsUrl).then(e=>{e.initializeController({editorBarOrigin:p,trackingUrl:r.data.trackingUrl})})}};return window.addEventListener("message",o),()=>{window.removeEventListener("message",o)}},[])}function k({framerSiteId:o,features:r,iframeRef:t,measuringProps:e,initialNodeId:a}){let i=new URLSearchParams;i.set("framerSiteId",o),i.set("nodeId",a),i.set("source",window.location.hostname),i.set("features",JSON.stringify(r||{}));let m=r.editorBarSubtle?"mode_subtle":"mode_normal";return d("iframe",{...e,id:"__framer-editorbar",ref:t,src:`${p}/${O}?${i.toString()}`,className:e.className?`${m} ${e.className}`:m})}function T({framerSiteId:o,features:r}){let t=w(null),e=D(),a=R(r),i=L({iframeRef:t});return v(),A(),!e||!i?null:_(d(k,{framerSiteId:o,features:r,iframeRef:t,measuringProps:a,initialNodeId:i}),document.body)}return c(T)}export{X as createEditorBar};
