"use strict";(self.webpackChunkwebsitename=self.webpackChunkwebsitename||[]).push([[883],{4296:function(e,t,r){r.d(t,{Z:function(){return O}});var n=r(7294),a=r(5086);var o=(0,a.createGlobalStyle)([':root{--color-primary:#7026b9;--color-secondary:#f4f4f4;--color-text:#333333;--color-background:#ffffff;--color-link:#7026b9;--color-link-hover:#5a1e8f;--font-sans:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";--font-mono:SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--font-size-base:16px;--font-size-large:18px;--font-size-small:14px;--line-height-normal:1.5;--line-height-tight:1.25;--line-height-loose:1.75;--space-xs:4px;--space-sm:8px;--space-md:16px;--space-lg:32px;--space-xl:64px;--border-radius:4px;--border-color:#dddddd;}*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}html{font-size:var(--font-size-base);line-height:var(--line-height-normal);font-family:var(--font-sans);color:var(--color-text);background-color:var(--color-background);}body{margin:0;font-family:var(--font-sans);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}a{color:var(--color-link);text-decoration:none;transition:color 0.2s ease-in-out;}a:hover,a:focus{color:var(--color-link-hover);}h1,h2,h3,h4,h5,h6{line-height:var(--line-height-tight);margin-bottom:var(--space-md);font-weight:bold;}p{margin-bottom:var(--space-md);}img{max-width:100%;height:auto;border-radius:var(--border-radius);}hr{border:none;border-top:1px solid var(--border-color);margin:var(--space-lg) 0;}']),l=r(2091);const i={backgroundColor:"#333",color:"#fff",padding:"40px 20px",textAlign:"center",fontSize:"14px"},c={display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",maxWidth:"1200px",margin:"0 auto",gap:"20px"},s={margin:"10px 0"},m={listStyle:"none",padding:0,margin:0,display:"flex",gap:"20px"},f={color:"#fff",textDecoration:"none",margin:"0 10px",fontSize:"14px",transition:"color 0.3s ease"},p={color:"#fff",margin:"0 10px",fontSize:"20px",transition:"color 0.3s ease"},u={display:"flex",justifyContent:"center",gap:"15px"};var d=()=>n.createElement("footer",{style:i},n.createElement("div",{style:{...c,flexDirection:"row"}},n.createElement("div",{style:s},n.createElement("p",null,"© ",(new Date).getFullYear()," CustomCraft Software, LLC"),n.createElement("a",{href:"https://www.customcraftsoftware.com/",target:"_blank",rel:"noopener noreferrer",style:f},"Visit Our Website")),n.createElement("div",{style:s},n.createElement("ul",{style:m},n.createElement("li",null,n.createElement("a",{href:"/about",style:f},"About Us")),n.createElement("li",null,n.createElement("a",{href:"/services",style:f},"Services")),n.createElement("li",null,n.createElement("a",{href:"/contact",style:f},"Contact")),n.createElement("li",null,n.createElement("a",{href:"/privacy",style:f},"Privacy Policy")),n.createElement("li",null,n.createElement("a",{href:"/terms",style:f},"Terms of Service")))),n.createElement("div",{style:u},n.createElement("a",{href:"https://facebook.com",target:"_blank",rel:"noopener noreferrer",style:p},n.createElement(l.tBk,null)),n.createElement("a",{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",style:p},n.createElement(l.fWC,null)),n.createElement("a",{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",style:p},n.createElement(l.BUd,null)),n.createElement("a",{href:"https://github.com",target:"_blank",rel:"noopener noreferrer",style:p},n.createElement(l.hJX,null))))),g=r(4160);const b=a.default.header.withConfig({displayName:"Header__HeaderWrapper",componentId:"sc-149mbcs-0"})(["background:var(--color-primary);padding:1rem 2rem;color:#fff;text-align:center;box-shadow:0 4px 12px rgba(0,0,0,0.1);border-bottom:1px solid rgba(255,255,255,0.2);position:sticky;top:0;z-index:1000;transition:background 0.3s ease;@media (max-width:768px){padding:0.75rem 1rem;}"]),h=a.default.h1.withConfig({displayName:"Header__Title",componentId:"sc-149mbcs-1"})(["margin:0;font-size:2rem;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#fff;transition:color 0.3s ease-in-out;&:hover{color:var(--color-accent);}"]),y=a.default.nav.withConfig({displayName:"Header__Nav",componentId:"sc-149mbcs-2"})(["margin-top:0.5rem;"]),v=a.default.ul.withConfig({displayName:"Header__NavList",componentId:"sc-149mbcs-3"})(["list-style:none;padding:0;display:flex;justify-content:center;gap:2rem;flex-wrap:wrap;"]),E=a.default.li.withConfig({displayName:"Header__NavItem",componentId:"sc-149mbcs-4"})(["margin:0;"]),x=(0,a.default)(g.rU).withConfig({displayName:"Header__NavLink",componentId:"sc-149mbcs-5"})(["color:#fff;text-decoration:none;font-weight:500;font-size:1rem;letter-spacing:0.5px;transition:color 0.3s ease,transform 0.3s ease;&:hover,&:focus{color:var(--color-accent);transform:translateY(-5px);}&.active{color:var(--color-accent);text-decoration:underline;}"]);var w=e=>{let{siteTitle:t}=e;return n.createElement(b,null,n.createElement(h,null,t),n.createElement(y,{"aria-label":"Main Navigation"},n.createElement(v,null,n.createElement(E,null,n.createElement(x,{to:"/",activeClassName:"active"},"Home")),n.createElement(E,null,n.createElement(x,{to:"/about",activeClassName:"active"},"About")),n.createElement(E,null,n.createElement(x,{to:"/contact",activeClassName:"active"},"Contact")))))};var O=e=>{let{children:t}=e;return n.createElement(n.Fragment,null,n.createElement(o,null),n.createElement(w,{siteTitle:"static website"}),t,n.createElement(d,null))}},1755:function(e,t,r){var n=r(7294),a=r(4160);t.Z=e=>{let{description:t,title:r,children:o}=e;const{site:l}=(0,a.K2)("764694655"),i=t||l.siteMetadata.description,c=l.siteMetadata.title||"",s=l.siteMetadata.siteUrl||"";return n.createElement(n.Fragment,null,n.createElement("title",null,r?`${r} | ${c}`:c),n.createElement("meta",{name:"description",content:i}),n.createElement("meta",{property:"og:title",content:r||c}),n.createElement("meta",{property:"og:description",content:i}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("meta",{property:"og:url",content:s}),n.createElement("meta",{name:"twitter:card",content:"summary"}),n.createElement("meta",{name:"twitter:creator",content:l.siteMetadata.author||"Default Author"}),n.createElement("meta",{name:"twitter:title",content:r||c}),n.createElement("meta",{name:"twitter:description",content:i}),o)}},429:function(e,t,r){r.r(t),r.d(t,{Head:function(){return l}});var n=r(7294),a=r(4296),o=r(1755);const l=()=>n.createElement(o.Z,{title:"404: Not Found"});t.default=()=>n.createElement(a.Z,null,n.createElement("h1",null,"404: Not Found"),n.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},3621:function(e,t,r){r.d(t,{w_:function(){return u}});var n=r(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(a),l=["attr","size","title"];function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){var n;return(t="symbol"==typeof(n=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?n:n+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e){return e&&e.map(((e,t)=>n.createElement(e.tag,m({key:t},e.attr),p(e.child))))}function u(e){return t=>n.createElement(d,c({attr:m({},e.attr)},t),p(e.child))}function d(e){var t=t=>{var r,{attr:a,size:o,title:s}=e,f=i(e,l),p=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,f,{className:r,style:m(m({color:e.color||t.color},t.style),e.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),e.children)};return void 0!==o?n.createElement(o.Consumer,null,(e=>t(e))):t(a)}}}]);
//# sourceMappingURL=component---src-pages-404-js-564e7a969ca610924391.js.map