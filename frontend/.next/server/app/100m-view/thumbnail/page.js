(()=>{var e={};e.id=8,e.ids=[8],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},48918:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>s.a,__next_app__:()=>h,originalPathname:()=>d,pages:()=>c,routeModule:()=>m,tree:()=>u}),a(90938),a(18090),a(45047);var n=a(96870),i=a(68203),r=a(2595),s=a.n(r),l=a(33059),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);a.d(t,o);let u=["",{children:["100m-view",{children:["thumbnail",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,90938)),"C:\\Users\\이지은 선임\\2u_lab\\2u_tubelab\\frontend\\app\\100m-view\\thumbnail\\page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(a.bind(a,18090)),"C:\\Users\\이지은 선임\\2u_lab\\2u_tubelab\\frontend\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,45047,23)),"next/dist/client/components/not-found-error"]}],c=["C:\\Users\\이지은 선임\\2u_lab\\2u_tubelab\\frontend\\app\\100m-view\\thumbnail\\page.tsx"],d="/100m-view/thumbnail/page",h={require:a,loadChunk:()=>Promise.resolve()},m=new n.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/100m-view/thumbnail/page",pathname:"/100m-view/thumbnail",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},43738:(e,t,a)=>{Promise.resolve().then(a.bind(a,12269))},68894:()=>{},59300:(e,t,a)=>{Promise.resolve().then(a.t.bind(a,45752,23)),Promise.resolve().then(a.t.bind(a,69483,23)),Promise.resolve().then(a.t.bind(a,83349,23)),Promise.resolve().then(a.t.bind(a,41019,23)),Promise.resolve().then(a.t.bind(a,54754,23)),Promise.resolve().then(a.t.bind(a,1987,23))},12269:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>c});var n=a(91964),i=a(17433),r=a(44186),s=a(92221),l=a.n(s),o=a(48093);let u=()=>{let[e,t]=(0,i.useState)(""),[a,r]=(0,i.useState)([]),[s,u]=(0,i.useState)(null),[c,d]=(0,i.useState)(!1),h=async()=>{if(!e.trim()){u("검색어를 입력해주세요.");return}d(!0),u(null),r([]);try{let t=await fetch(`/api/youtube-search?q=${encodeURIComponent(e)}`);if(!t.ok)throw Error(`API responded with status: ${t.status}`);let a=await t.json();if(a&&a.items&&Array.isArray(a.items)){let e=a.items.map(e=>({url:e.snippet.thumbnails.high.url,title:e.snippet.title,videoId:e.id.videoId}));r(e),0===e.length&&u("검색 결과가 없습니다. 다른 키워드로 시도해보세요.")}else console.error("Invalid data format received from API"),u("데이터 형식이 올바르지 않습니다.")}catch(e){console.error("Error fetching YouTube data:",e),u("데이터를 불러오는 중 오류가 발생했습니다.")}finally{d(!1)}},m=e=>{"Best"===e?u("맞았습니다! \uD83D\uDC4D"):u("틀렸습니다! \uD83D\uDE22")};return(0,n.jsxs)("div",{className:l().quizContainer,children:[(0,n.jsxs)("div",{className:l().searchContainer,children:[n.jsx("input",{type:"text",value:e,onChange:e=>t(e.target.value),placeholder:"주제를 입력하세요",className:l().searchInput,onKeyPress:e=>"Enter"===e.key&&h()}),n.jsx("button",{onClick:h,className:l().searchButton,disabled:c,children:c?"검색 중...":"검색"})]}),s&&n.jsx("p",{className:l().feedback,children:s}),c?n.jsx("p",{className:l().loadingMessage,children:"검색 결과를 불러오는 중..."}):a.length>0?n.jsx("div",{className:l().thumbnailsContainer,children:a.map(e=>(0,n.jsxs)("div",{className:l().thumbnailItem,children:[n.jsx("div",{className:l().thumbnailImageContainer,children:n.jsx(o.default,{src:e.url,alt:e.title,width:320,height:180,style:{objectFit:"cover"},onError:e=>{e.currentTarget.src="/path/to/fallback/image.jpg"}})}),n.jsx("p",{className:l().thumbnailTitle,children:e.title}),(0,n.jsxs)("div",{className:l().buttonContainer,children:[n.jsx("button",{onClick:()=>m("Best"),className:l().choiceButton,children:"Best"}),n.jsx("button",{onClick:()=>m("Bad"),className:l().choiceButton,children:"Bad"})]})]},e.videoId))}):e?n.jsx("p",{className:l().errorMessage,children:"검색 결과가 없습니다. 다른 주제를 입력해보세요."}):n.jsx("p",{className:l().errorMessage,children:"주제를 입력하고 검색 버튼을 클릭하세요."})]})};function c(){return(0,n.jsxs)("div",{className:l().pageContainer,children:[n.jsx("nav",{className:l().nav,children:(0,n.jsxs)("div",{className:l().navContent,children:[n.jsx("div",{className:l().logoContainer,children:n.jsx(r.default,{href:"/",className:l().logo,children:"2U_lab"})}),(0,n.jsxs)("div",{className:l().navLinks,children:[n.jsx(r.default,{href:"/target-search",className:l().navLink,children:"타겟영상검색"}),n.jsx(r.default,{href:"/100m-view",className:l().navLink,children:"100M view 따라하기"}),n.jsx(r.default,{href:"/target-source-collection",className:l().navLink,children:"타겟소스수집목록"}),n.jsx(r.default,{href:"/membership",className:l().navLink,children:"멤버십 신청"})]})]})}),(0,n.jsxs)("div",{className:l().contentContainer,children:[n.jsx("h1",{className:l().title,children:"Best 썸네일 구분하기"}),n.jsx("div",{className:l().description,children:n.jsx("p",{children:"클릭을 부르는 Best 썸네일의 특징을 분석하여 효과적인 썸네일 제작 방법을 제시합니다"})}),n.jsx(u,{})]})]})}},48093:(e,t,a)=>{"use strict";a.d(t,{default:()=>i.a});var n=a(77228),i=a.n(n)},77228:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var a in t)Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}(t,{default:function(){return o},getImageProps:function(){return l}});let n=a(25145),i=a(84442),r=a(68338),s=n._(a(3288));function l(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,a]of Object.entries(t))void 0===a&&delete t[e];return{props:t}}let o=r.Image},92221:e=>{e.exports={pageContainer:"ThumbnailPage_pageContainer__PRRa9",title:"ThumbnailPage_title__3JaHr",quizContainer:"ThumbnailPage_quizContainer__N_5E3",searchContainer:"ThumbnailPage_searchContainer__txSYe",searchInput:"ThumbnailPage_searchInput__6DOgg",searchButton:"ThumbnailPage_searchButton__CD7as",thumbnailsContainer:"ThumbnailPage_thumbnailsContainer__xtYFF",thumbnailItem:"ThumbnailPage_thumbnailItem__cdDR1",thumbnailTitle:"ThumbnailPage_thumbnailTitle__RqHZl",buttonContainer:"ThumbnailPage_buttonContainer__gt5he",choiceButton:"ThumbnailPage_choiceButton__sAvPA",feedback:"ThumbnailPage_feedback__0wI19",errorMessage:"ThumbnailPage_errorMessage__uc_bZ",nav:"ThumbnailPage_nav__RW24S",navContent:"ThumbnailPage_navContent__ZvGpK",logoContainer:"ThumbnailPage_logoContainer__MI9A8",logo:"ThumbnailPage_logo__RTH_A",navLinks:"ThumbnailPage_navLinks__fFieW",navLink:"ThumbnailPage_navLink__p8YTG",contentContainer:"ThumbnailPage_contentContainer__tGdxZ",description:"ThumbnailPage_description__UwBQL",thumbnailContainer:"ThumbnailPage_thumbnailContainer__DjSrS"}},90938:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});let n=(0,a(17117).createProxy)(String.raw`C:\Users\이지은 선임\2u_lab\2u_tubelab\frontend\app\100m-view\thumbnail\page.tsx#default`)},18090:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s,metadata:()=>i,viewport:()=>r});var n=a(14497);a(93185),a(45865);let i={title:"2U Tubelab - AI 기반 유튜브 분석 솔루션",description:"2U Tubelab은 AI 기반 유튜브 분석 솔루션을 통해 크리에이터의 성장을 지원합니다."},r={width:"device-width",initialScale:1};function s({children:e}){return n.jsx("html",{lang:"ko",children:n.jsx("body",{children:n.jsx("div",{className:"app-layout",children:e})})})}},45865:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),n=t.X(0,[130,167,186,338],()=>a(48918));module.exports=n})();