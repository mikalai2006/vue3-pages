import{j as x,k as y,d as u,o as c,b as k,e as l,t as m,l as C,u as E,m as P,p as S,a as v,q as n,g as i,h as w}from"./index.453b3a08.js";import{u as N}from"./useGlobalComponents.dc8f62cb.js";const d=x({error:null}),B=()=>{const t=r=>{d.error=r};return{errorPage:y(()=>d.error),onSetErrorPage:t}},V={class:"bg-white shadow"},j={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},D={class:"text-3xl font-bold leading-tight text-gray-900"},O=C(" ErrorPage "),R=u({__name:"ErrorPage",props:{error:Object},setup(t){return(e,r)=>(c(),k("header",V,[l("div",j,[l("h1",D,[O,l("pre",null,`          Route name and path
          `+m(e.$route.path)+`
          /
          `+m(t.error)+`
        `,1)])])]))}}),$=u({suspensible:!1}),G=u({...$,__name:"all",async setup(t){let e,r;const g=E(),{onSetErrorPage:_,errorPage:p}=B();let s=null;const{globalComponents:h,onSetComponents:b}=N();try{_(null);let o=g.params.slug;console.log("slug",o),s=([e,r]=P(()=>S(o||"home",{version:{}.NODE_ENV==="production"?"published":"draft",resolve_relations:"global_reference.reference"}).then(a=>(h.value.header||b(a.value),a))),e=await e,r(),e)}catch(o){_(o)}return(o,a)=>{const f=v("StoryblokComponent");return n(p)?(c(),i(R,{key:0,error:n(p)},null,8,["error"])):n(s)?(c(),i(f,{key:1,blok:n(s).content},null,8,["blok"])):w("",!0)}}});export{G as default};
