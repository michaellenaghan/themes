var e=Object.defineProperty,t=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,n=(t,s,a)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[s]=a;import{o as r,c as o,a as i,w as l,b as c,n as u,F as m,r as h,d as g,e as p,f as d,g as v,t as f,h as b,i as y,j as w,k as x,l as _}from"./vendor.125b0e43.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const s of e)if("childList"===s.type)for(const e of s.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var k=[{name:"ueno","name#ja":"上野","name#zh":"上野",author:"Typlog",repo:"typlog/ueno",version:"0.4.2",tags:["blog","podcast"],images:["https://user-images.githubusercontent.com/290496/133878072-0286669c-2cc8-4976-99d2-2a59b7181bd5.png"],id:"ueno",avatar:"https://avatars.githubusercontent.com/u/26949884?v=4",stars:1},{name:"nezu","name#ja":"根津","name#zh":"根津",author:"Typlog",repo:"typlog/nezu",version:"0.4.2",tags:["blog","podcast"],images:["https://user-images.githubusercontent.com/290496/133878159-69f77262-26d9-426a-b984-8e72b551f5f3.png"],id:"nezu",avatar:"https://avatars.githubusercontent.com/u/26949884?v=4",stars:2},{name:"ginza","name#ja":"銀座","name#zh":"银座",author:"Typlog",repo:"typlog/ginza",version:"0.4.2",tags:["blog","podcast"],images:["https://user-images.githubusercontent.com/290496/133878214-faf64fa7-02b3-49df-ab79-601366a19422.png"],id:"ginza",avatar:"https://avatars.githubusercontent.com/u/26949884?v=4",stars:2},{name:"meguro","name#zh":"目黑","name#ja":"目黒",repo:"typlog/meguro",version:"0.3.2",author:"Typlog",tags:["blog"],images:["https://user-images.githubusercontent.com/290496/137299261-e56658ae-29af-4b7d-a3ac-ce4aa348c915.png"],id:"meguro",avatar:"https://avatars.githubusercontent.com/u/26949884?v=4",stars:0},{name:"akasaka","name#ja":"赤坂","name#zh":"赤坂",author:"Typlog",repo:"typlog/akasaka",version:"0.3.1",preview:"https://docs.typlog.com/",templates:["home.j2","item.j2","list.j2","lang.j2"],tags:["doc"],images:["https://user-images.githubusercontent.com/290496/143881184-a7427865-d1c7-472e-9dc0-d28beb38cf62.png","https://user-images.githubusercontent.com/290496/143881498-a996ead3-ca3c-47a6-9048-a593f055c1e7.png"],id:"akasaka",avatar:"https://avatars.githubusercontent.com/u/26949884?v=4",stars:0},{name:"aoyama","name#zh":"青山","name#ja":"青山",description:"A typlog theme that mimics magazine. It provides extra exposure for your featured articles/episodes and is best suited for showcasing posts with covers.",repo:"jessuni/typlog-aoyama",version:"0.1.1",author:"Jessie Ji",tags:["blog","podcast"],images:["https://user-images.githubusercontent.com/290496/161203111-d93435a0-c69d-4ed2-a810-f39f3550353e.jpg"],id:"aoyama",avatar:"https://avatars.githubusercontent.com/u/41285428?v=4",stars:0},{name:"coffee","name#zh":"咖啡","name#ja":"コーヒー",description:"A podcast theme designed by uxcoffee.",repo:"lepture/typlog-coffee",version:"0.3.1",author:"Hsiaoming Yang",images:["https://user-images.githubusercontent.com/290496/144819329-d42a0cd7-2b90-439b-85e8-d74783a51d4a.png","https://user-images.githubusercontent.com/290496/144819322-415c9567-678d-410a-8a19-a529d06f8a4c.png","https://user-images.githubusercontent.com/290496/144819338-f57c5259-94c5-4cf7-a162-d2a906a2ecb4.png"],tags:["podcast"],site:{id:3010,name:"Coffee",primary_links:[{title:"By tag",url:"/topic/design/"},{title:"By host",url:"/by/cat/"},{title:"Elements",url:"/posts/elements"},{title:"Source code",url:"https://github.com/lepture/typlog-coffee"}]},id:"coffee",avatar:"https://avatars.githubusercontent.com/u/290496?v=4",stars:1},{name:"puti","name#zh":"菩提","name#ja":"菩提",description:"A blog theme designed by Caicai.",repo:"jessuni/typlog-puti",version:"0.1.4",author:"Jessie Ji",tags:["blog"],images:["https://user-images.githubusercontent.com/290496/158343805-0a62c4a4-a4ef-4784-b5f2-7d2723cc6fc0.png"],id:"puti",avatar:"https://avatars.githubusercontent.com/u/41285428?v=4",stars:2}];const j={};let C=null;window.addEventListener("message",(function e(t){t.ports&&t.ports[0]&&(C=t.ports[0],C.onmessage=e);try{const e=JSON.parse(t.data),s=e.event;delete e.event;const a=j[s];a&&a.forEach((t=>t(e)))}catch(s){}}));var z={emit:function(e,r={}){const o=((e,r)=>{for(var o in r||(r={}))s.call(r,o)&&n(e,o,r[o]);if(t)for(var o of t(r))a.call(r,o)&&n(e,o,r[o]);return e})({event:e},r);C&&C.postMessage(JSON.stringify(o))},on:function(e,t){j[e]?j[e].push(t):j[e]=[t]}},T=(e,t)=>{for(const[s,a]of t)e[s]=a;return e};const O={props:{images:Array},data:()=>({current:1}),computed:{scrollStyle(){return{transform:`translateX(${1-this.current}00%)`}},prev(){return this.current>1?this.current-1:null},next(){return this.current<this.images.length?this.current+1:null}}},q={class:"browser"},L=i("div",{class:"browser_toolbar"},[i("span")],-1),$={class:"browser_content"},A={class:"browser_inner"},S=[i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[i("polyline",{points:"15 18 9 12 15 6"})],-1)],U=["src"],B=[i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[i("polyline",{points:"9 18 15 12 9 6"})],-1)],N={key:0,class:"browser_mask"};var J=T(O,[["render",function(e,t,s,a,n,g){return r(),o("div",q,[L,i("div",$,[i("div",A,[g.prev?(r(),o("button",{key:0,class:"browser_prev",onClick:t[0]||(t[0]=l((e=>n.current=g.prev),["prevent"]))},S)):c("",!0),i("ul",{class:"browser_scroll",style:u(g.scrollStyle)},[(r(!0),o(m,null,h(s.images,(e=>(r(),o("li",{class:"browser_image",key:e},[i("img",{src:e,alt:"screenshot"},null,8,U)])))),128))],4),g.next?(r(),o("button",{key:1,class:"browser_next",onClick:t[1]||(t[1]=l((e=>n.current=g.next),["prevent"]))},B)):c("",!0)]),s.images.length>1?(r(),o("div",N)):c("",!0)])])}]]);const P={components:{Browser:J},data(){const e=this.$route.query.q||"";return{themes:k,q:e}},watch:{"$route.query.tag":{immediate:!0,handler(e){this.filterThemes(e)}}},methods:{hasTag(e){return this.$route.query.tag===e},onUse(e){z.emit("select",e)},filterThemes(e){this.themes=e?k.filter((t=>-1!==(t.tags||[]).indexOf(e))):k}}},E={class:"home"},H={class:"home_nav inner"},M=i("strong",null,"Categories",-1),I=b("All"),D=b("Blog"),F=b("Podcast"),R=b("Documentation"),G={class:"home_main inner"},K={class:"theme-list"},V={key:0,class:"theme_star"},X={class:"theme_info"},Y={class:"theme_name"},Q=["textContent"],W=["textContent"],Z=i("div",{class:"theme_price"},"Free",-1);var ee=T(P,[["render",function(e,t,s,a,n,l){const u=g("router-link"),b=g("browser");return r(),o("div",E,[i("nav",H,[M,i("ul",null,[i("li",null,[p(u,{class:v({active:l.hasTag()}),to:"/"},{default:d((()=>[I])),_:1},8,["class"])]),i("li",null,[p(u,{class:v({active:l.hasTag("blog")}),to:{query:{tag:"blog"}}},{default:d((()=>[D])),_:1},8,["class"])]),i("li",null,[p(u,{class:v({active:l.hasTag("podcast")}),to:{query:{tag:"podcast"}}},{default:d((()=>[F])),_:1},8,["class"])]),i("li",null,[p(u,{class:v({active:l.hasTag("doc")}),to:{query:{tag:"doc"}}},{default:d((()=>[R])),_:1},8,["class"])])])]),i("main",G,[i("div",K,[(r(!0),o(m,null,h(n.themes,(e=>(r(),o("div",{class:"theme",key:e.id},[p(u,{class:"theme_image",title:e.name,to:e.id},{default:d((()=>[p(b,{images:e.images},null,8,["images"]),e.stars?(r(),o("span",V,"★ "+f(e.stars),1)):c("",!0)])),_:2},1032,["title","to"]),i("div",X,[i("div",Y,[i("strong",{textContent:f(e.name)},null,8,Q),i("div",{textContent:f(e["name#ja"])},null,8,W)]),Z])])))),128))])])])}]]);const te={components:{Browser:J},data(){const e=this.$route.params.slug;return{theme:k.filter((t=>t.id===e))[0]}},computed:{names(){const e=[["Name",this.theme.name.toUpperCase()]];return this.theme["name#zh"]&&e.push(["名稱",this.theme["name#zh"]]),this.theme["name#ja"]&&e.push(["名前",this.theme["name#ja"]]),e},previewURL(){return this.theme.preview?this.theme.preview:`https://theme-${this.theme.id}.typlog.io/`}},methods:{onUse(){z.emit("select",this.theme)}},async created(){const e=this.$route.params.slug,t=await fetch(`/data/${e}.json`),s=await t.json();this.theme=s}},se={class:"detail inner"},ae={class:"breadcrumbs"},ne=b("All themes"),re=i("span",{class:"sep"},"/",-1),oe=["textContent"],ie={class:"detail_head"},le={class:"detail_images"},ce={class:"detail_info"},ue=["textContent"],me=["textContent"],he=i("th",null,"Author",-1),ge=["textContent"],pe={key:0},de=i("th",null,"GitHub",-1),ve=["href","textContent"],fe={key:1},be=i("th",null,"Version",-1),ye=["textContent"],we={key:2},xe=i("th",null,"Stars",-1),_e=["textContent"],ke={class:"detail_action"},je=["href"],Ce=["innerHTML"];var ze=y({routes:[{path:"",component:ee,name:"Home"},{path:"/:slug",component:T(te,[["render",function(e,t,s,a,n,u){const v=g("router-link"),b=g("browser");return r(),o("div",se,[i("nav",ae,[p(v,{to:"/"},{default:d((()=>[ne])),_:1}),re,i("span",{class:"detail_name",textContent:f(e.$route.params.slug)},null,8,oe)]),i("div",ie,[i("div",le,[p(b,{images:n.theme.images},null,8,["images"])]),i("div",ce,[i("table",null,[i("tbody",null,[(r(!0),o(m,null,h(u.names,(e=>(r(),o("tr",{key:e[0]},[i("th",{textContent:f(e[0])},null,8,ue),i("td",{textContent:f(e[1])},null,8,me)])))),128)),i("tr",null,[he,i("td",{textContent:f(n.theme.author)},null,8,ge)]),n.theme.repo?(r(),o("tr",pe,[de,i("td",null,[i("a",{href:"https://github.com/"+n.theme.repo,target:"_blank",textContent:f(n.theme.repo)},null,8,ve)])])):c("",!0),n.theme.version?(r(),o("tr",fe,[be,i("td",{textContent:f(n.theme.version)},null,8,ye)])):c("",!0),n.theme.stars?(r(),o("tr",we,[xe,i("td",{textContent:f(n.theme.stars)},null,8,_e)])):c("",!0)])]),i("div",ke,[i("a",{class:"button",href:u.previewURL,target:"_blank"},"Preview",8,je),i("button",{class:"js-use button",onClick:t[0]||(t[0]=l(((...e)=>u.onUse&&u.onUse(...e)),["prevent"]))},"Use")])])]),i("div",{class:"detail_readme yue",innerHTML:n.theme.readme},null,8,Ce)])}]]),name:"Detail"}],history:w()});var Te=T({},[["render",function(e,t){const s=g("router-view");return r(),x(s)}]]);z.on("load",(()=>{document.body.className="embed",z.emit("ready")}));const Oe=_(Te);Oe.use(ze),Oe.mount("#app");
