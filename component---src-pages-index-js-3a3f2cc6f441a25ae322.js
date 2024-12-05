"use strict";(self.webpackChunkwebsitename=self.webpackChunkwebsitename||[]).push([[678],{4296:function(e,t,r){r.d(t,{Z:function(){return O}});var n=r(7294),o=r(5086);var a=(0,o.createGlobalStyle)([':root{--color-primary:#7026b9;--color-text:#333;--color-background:#fff;--color-link:#7026b9;--color-link-hover:#5a1e8f;--font-sans:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;--font-size-base:16px;--space-md:16px;}*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}html,body{margin:0;padding:0;height:100%;font-size:var(--font-size-base);font-family:var(--font-sans);color:var(--color-text);background-color:var(--color-background);}#root{display:flex;flex-direction:column;min-height:100vh;}main{flex:1;}a{color:var(--color-link);text-decoration:none;transition:color 0.2s ease-in-out;}a:hover{color:var(--color-link-hover);}h1,h2,h3,h4,h5,h6{font-weight:bold;margin-bottom:var(--space-md);}p{margin-bottom:var(--space-md);}img{max-width:100%;height:auto;}hr{border:none;border-top:1px solid #ddd;margin:var(--space-md) 0;}']),l=r(2091);const i={backgroundColor:"#333",color:"#fff",padding:"40px 20px",textAlign:"center",fontSize:"14px"},c={display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",maxWidth:"1200px",margin:"0 auto",gap:"20px"},s={margin:"10px 0"},m={listStyle:"none",padding:0,margin:0,display:"flex",gap:"20px"},p={color:"#fff",textDecoration:"none",margin:"0 10px",fontSize:"14px",transition:"color 0.3s ease"},f={color:"#fff",margin:"0 10px",fontSize:"20px",transition:"color 0.3s ease"},d={display:"flex",justifyContent:"center",gap:"15px"};var u=()=>n.createElement("footer",{style:i},n.createElement("div",{style:{...c,flexDirection:"row"}},n.createElement("div",{style:s},n.createElement("ul",{style:m},n.createElement("li",null,n.createElement("a",{href:"/about",style:p},"About Us")),n.createElement("li",null,n.createElement("a",{href:"/contact",style:p},"Contact")),n.createElement("li",null,n.createElement("a",{href:"/privacy",style:p},"Privacy Policy")),n.createElement("li",null,n.createElement("a",{href:"/terms",style:p},"Terms of Service")))),n.createElement("div",{style:d},n.createElement("a",{href:"https://facebook.com",target:"_blank",rel:"noopener noreferrer",style:f},n.createElement(l.tBk,null)),n.createElement("a",{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",style:f},n.createElement(l.fWC,null)),n.createElement("a",{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",style:f},n.createElement(l.BUd,null)),n.createElement("a",{href:"https://github.com",target:"_blank",rel:"noopener noreferrer",style:f},n.createElement(l.hJX,null))),n.createElement("div",null,n.createElement("p",null,"© ",(new Date).getFullYear()," ")))),g=r(4160),b=r(2148);const h=o.default.header.withConfig({displayName:"Header__HeaderWrapper",componentId:"sc-149mbcs-0"})(["background:var(--color-primary);padding:1rem 2rem;color:#fff;position:sticky;top:0;z-index:1000;display:flex;justify-content:space-between;align-items:center;box-shadow:0 4px 12px rgba(0,0,0,0.1);@media (max-width:768px){padding:0.75rem 1rem;}"]),y=(0,o.default)(g.rU).withConfig({displayName:"Header__Title",componentId:"sc-149mbcs-1"})(["font-size:1.8rem;font-weight:700;color:#fff;text-decoration:none;transition:color 0.3s ease;&:hover{color:var(--color-accent);}"]),v=(0,o.default)(l.Fm7).withConfig({displayName:"Header__Hamburger",componentId:"sc-149mbcs-2"})(["display:none;color:#fff;font-size:1.8rem;cursor:pointer;&:hover{color:var(--color-accent);}@media (max-width:768px){display:block;}"]),x=o.default.nav.withConfig({displayName:"Header__Nav",componentId:"sc-149mbcs-3"})(["@media (max-width:768px){display:",";position:absolute;top:100%;left:0;width:100%;background:var(--color-primary);padding:1rem 0;box-shadow:0 4px 12px rgba(0,0,0,0.1);}"],(e=>{let{open:t}=e;return t?"block":"none"})),E=o.default.ul.withConfig({displayName:"Header__NavList",componentId:"sc-149mbcs-4"})(["display:flex;gap:2rem;list-style:none;padding:0;@media (max-width:768px){flex-direction:column;gap:1.5rem;align-items:center;}"]),w=(0,o.default)(g.rU).withConfig({displayName:"Header__NavLink",componentId:"sc-149mbcs-5"})(["color:#fff;font-size:1rem;font-weight:500;text-decoration:none;transition:color 0.3s ease;&:hover{color:var(--color-accent);}&.active{color:var(--color-accent);text-decoration:underline;}"]);var k=e=>{let{siteTitle:t}=e;const{0:r,1:o}=(0,n.useState)(!1),{0:a,1:l}=(0,n.useState)(null);return(0,n.useEffect)((()=>b.I.onAuthStateChanged(l)),[]),n.createElement(h,null,n.createElement(y,{to:"/"},t),n.createElement(v,{onClick:()=>o((e=>!e))}),n.createElement(x,{open:r},n.createElement(E,null,n.createElement(w,{to:"/",activeClassName:"active"},"Home"),n.createElement(w,{to:"/about",activeClassName:"active"},"About"),n.createElement(w,{to:"/contact",activeClassName:"active"},"Contact"))))};var O=e=>{let{children:t}=e;return n.createElement(n.Fragment,null,n.createElement(a,null),n.createElement(k,{siteTitle:"static website"}),t,n.createElement(u,null))}},1755:function(e,t,r){var n=r(7294),o=r(4160);t.Z=e=>{let{description:t,title:r,children:a}=e;const{site:l}=(0,o.K2)("764694655"),i=t||l.siteMetadata.description,c=l.siteMetadata.title||"",s=l.siteMetadata.siteUrl||"";return n.createElement(n.Fragment,null,n.createElement("title",null,r?`${r} | ${c}`:c),n.createElement("meta",{name:"description",content:i}),n.createElement("meta",{property:"og:title",content:r||c}),n.createElement("meta",{property:"og:description",content:i}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("meta",{property:"og:url",content:s}),n.createElement("meta",{name:"twitter:card",content:"summary"}),n.createElement("meta",{name:"twitter:creator",content:l.siteMetadata.author||"Default Author"}),n.createElement("meta",{name:"twitter:title",content:r||c}),n.createElement("meta",{name:"twitter:description",content:i}),a)}},6558:function(e,t,r){r.r(t),r.d(t,{Head:function(){return p}});var n=r(7294),o=r(4160),a=r(5086),l=r(4296),i=r(1755);const c=a.default.header.withConfig({displayName:"pages__HeroSection",componentId:"sc-1veo2g4-0"})(["display:flex;flex-direction:column;align-items:center;text-align:center;padding:80px 20px;min-height:80vh;h1{font-size:2.5rem;margin-bottom:1rem;}p{font-size:1.2rem;max-width:500px;margin-bottom:1.5rem;}"]),s=a.default.div.withConfig({displayName:"pages__ButtonGroup",componentId:"sc-1veo2g4-1"})(["display:flex;gap:15px;justify-content:center;"]),m=(0,a.default)(o.rU).withConfig({displayName:"pages__ButtonLink",componentId:"sc-1veo2g4-2"})(["background-color:#333;color:#fff;padding:8px 16px;font-size:1rem;border-radius:4px;text-decoration:none;&:hover{background-color:#111;color:#fff;}"]),p=()=>n.createElement(i.Z,{title:"Home",description:"Welcome to our website. Learn more about us or get in touch with our team."});t.default=()=>n.createElement(l.Z,null,n.createElement(c,null,n.createElement("h1",null,"Welcome to Our Website"),n.createElement("p",null,"Explore more about us or get in touch with our team."),n.createElement(s,null,n.createElement(m,{to:"/about"},"About Us"),n.createElement(m,{to:"/contact"},"Contact Us"))))},3621:function(e,t,r){r.d(t,{w_:function(){return d}});var n=r(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(o),l=["attr","size","title"];function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t,r){var n;return(t="symbol"==typeof(n=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?n:n+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e){return e&&e.map(((e,t)=>n.createElement(e.tag,m({key:t},e.attr),f(e.child))))}function d(e){return t=>n.createElement(u,c({attr:m({},e.attr)},t),f(e.child))}function u(e){var t=t=>{var r,{attr:o,size:a,title:s}=e,p=i(e,l),f=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,p,{className:r,style:m(m({color:e.color||t.color},t.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),e.children)};return void 0!==a?n.createElement(a.Consumer,null,(e=>t(e))):t(o)}}}]);
//# sourceMappingURL=component---src-pages-index-js-3a3f2cc6f441a25ae322.js.map