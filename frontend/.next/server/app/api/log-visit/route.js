"use strict";(()=>{var e={};e.id=315,e.ids=[315],e.modules={11185:e=>{e.exports=require("mongoose")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},84770:e=>{e.exports=require("crypto")},72085:(e,t,s)=>{s.r(t),s.d(t,{originalPathname:()=>w,patchFetch:()=>N,requestAsyncStorage:()=>f,routeModule:()=>v,serverHooks:()=>O,staticGenerationAsyncStorage:()=>x});var n={};s.r(n),s.d(n,{POST:()=>h});var r=s(16078),o=s(68203),a=s(24960),i=s(20049),u=s(21899),c=s(84770),p=s.n(c),l=s(11185),g=s.n(l);!function(){var e=Error("Cannot find module '@/src/utils/token'");throw e.code="MODULE_NOT_FOUND",e}();let d=new(g()).Schema({timestamp:Date,pageType:String,ipHash:String,userAgentHash:String}),m=g().models.PageVisit||g().model("PageVisit",d);async function h(e){try{var t;let s=e.cookies.get("token")?.value;if(!s)return i.NextResponse.json({success:!1,message:"인증되지 않은 요청입니다."},{status:401});try{Object(function(){var e=Error("Cannot find module '@/src/utils/token'");throw e.code="MODULE_NOT_FOUND",e}())(s)}catch(e){return i.NextResponse.json({success:!1,message:"유효하지 않은 토큰입니다."},{status:401})}let{pageType:n}=await e.json();if(!n)return i.NextResponse.json({success:!1,message:"pageType이 제공되지 않았습니다."},{status:400});await (0,u.Z)();let r=new Date,o=e.ip?(t=e.ip,p().createHash("sha256").update(t).digest("hex")):"unknown",a=e.headers.get("user-agent")||"unknown",c=new m({timestamp:r,pageType:n,ipHash:o,userAgentHash:p().createHash("sha256").update(a).digest("hex")});return await c.save(),console.log(`페이지 방문 기록: ${JSON.stringify({...c.toObject(),ipHash:"***",userAgentHash:"***"})}`),i.NextResponse.json({success:!0,message:"방문이 기록되었습니다."})}catch(e){return console.error("방문 기록 오류:",e),i.NextResponse.json({success:!1,message:"방문 기록 중 오류가 발생했습니다."},{status:500})}}let v=new r.AppRouteRouteModule({definition:{kind:o.x.APP_ROUTE,page:"/api/log-visit/route",pathname:"/api/log-visit",filename:"route",bundlePath:"app/api/log-visit/route"},resolvedPagePath:"C:\\Users\\이지은 선임\\2u_lab\\2u_tubelab\\frontend\\app\\api\\log-visit\\route.ts",nextConfigOutput:"",userland:n}),{requestAsyncStorage:f,staticGenerationAsyncStorage:x,serverHooks:O}=v,w="/api/log-visit/route";function N(){return(0,a.patchFetch)({serverHooks:O,staticGenerationAsyncStorage:x})}},21899:(e,t,s)=>{s.d(t,{Z:()=>i});var n=s(11185),r=s.n(n);let o=process.env.MONGODB_URI;if(!o)throw Error("Please define the MONGODB_URI environment variable inside .env.local");let a=global.mongoose;a||(a=global.mongoose={conn:null,promise:null});let i=async function(){if(a.conn)return a.conn;a.promise||(a.promise=r().connect(o,{bufferCommands:!1}).then(e=>e));try{a.conn=await a.promise}catch(e){throw a.promise=null,e}return a.conn}}};var t=require("../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),n=t.X(0,[130,221],()=>s(72085));module.exports=n})();