"use strict";(self.webpackChunkgamevault_docs=self.webpackChunkgamevault_docs||[]).push([[7747],{84750:(e,t,s)=>{s.d(t,{Z:()=>f});var r=s(50959),a=s(5341),n=s(21012),l=s(47361),i=s(52687),o=s(31609),c=s(28903),m=s(92704);function d(e){const{pathname:t}=(0,c.TH)();return(0,r.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,m.Mg)(e.permalink,t))}(e,t)))),[e,t])}const u={sidebar:"sidebar_UakA",sidebarItemTitle:"sidebarItemTitle_zQtS",sidebarItemList:"sidebarItemList_yYzj",sidebarItem:"sidebarItem_zWbJ",sidebarItemLink:"sidebarItemLink_qXPQ",sidebarItemLinkActive:"sidebarItemLinkActive_lGOR"};var h=s(11527);function g(e){let{sidebar:t}=e;const s=d(t.items);return(0,h.jsx)("aside",{className:"col col--3",children:(0,h.jsxs)("nav",{className:(0,a.Z)(u.sidebar,"thin-scrollbar"),"aria-label":(0,o.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,h.jsx)("div",{className:(0,a.Z)(u.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,h.jsx)("ul",{className:(0,a.Z)(u.sidebarItemList,"clean-list"),children:s.map((e=>(0,h.jsx)("li",{className:u.sidebarItem,children:(0,h.jsx)(i.Z,{isNavLink:!0,to:e.permalink,className:u.sidebarItemLink,activeClassName:u.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var p=s(63622);function x(e){let{sidebar:t}=e;const s=d(t.items);return(0,h.jsx)("ul",{className:"menu__list",children:s.map((e=>(0,h.jsx)("li",{className:"menu__list-item",children:(0,h.jsx)(i.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function j(e){return(0,h.jsx)(p.Zo,{component:x,props:e})}function b(e){let{sidebar:t}=e;const s=(0,l.i)();return t?.items.length?"mobile"===s?(0,h.jsx)(j,{sidebar:t}):(0,h.jsx)(g,{sidebar:t}):null}function f(e){const{sidebar:t,toc:s,children:r,...l}=e,i=t&&t.items.length>0;return(0,h.jsx)(n.Z,{...l,children:(0,h.jsx)("div",{className:"container margin-vert--lg",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)(b,{sidebar:t}),(0,h.jsx)("main",{className:(0,a.Z)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"https://schema.org/Blog",children:r}),s&&(0,h.jsx)("div",{className:"col col--2",children:s})]})})})}},55876:(e,t,s)=>{s.d(t,{Z:()=>L});s(50959);var r=s(5341),a=s(25781),n=s(57661),l=s(11527);function i(e){let{children:t,className:s}=e;const{frontMatter:r,assets:i,metadata:{description:o}}=(0,a.C)(),{withBaseUrl:c}=(0,n.C)(),m=i.image??r.image,d=r.keywords??[];return(0,l.jsxs)("article",{className:s,itemProp:"blogPost",itemScope:!0,itemType:"https://schema.org/BlogPosting",children:[o&&(0,l.jsx)("meta",{itemProp:"description",content:o}),m&&(0,l.jsx)("link",{itemProp:"image",href:c(m,{absolute:!0})}),d.length>0&&(0,l.jsx)("meta",{itemProp:"keywords",content:d.join(",")}),t]})}var o=s(52687);const c={title:"title_qpDf"};function m(e){let{className:t}=e;const{metadata:s,isBlogPostPage:n}=(0,a.C)(),{permalink:i,title:m}=s,d=n?"h1":"h2";return(0,l.jsx)(d,{className:(0,r.Z)(c.title,t),itemProp:"headline",children:n?m:(0,l.jsx)(o.Z,{itemProp:"url",to:i,children:m})})}var d=s(31609),u=s(15757);const h={container:"container_t5sc"};function g(e){let{readingTime:t}=e;const s=function(){const{selectMessage:e}=(0,u.c)();return t=>{const s=Math.ceil(t);return e(s,(0,d.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:s}))}}();return(0,l.jsx)(l.Fragment,{children:s(t)})}function p(e){let{date:t,formattedDate:s}=e;return(0,l.jsx)("time",{dateTime:t,itemProp:"datePublished",children:s})}function x(){return(0,l.jsx)(l.Fragment,{children:" \xb7 "})}function j(e){let{className:t}=e;const{metadata:s}=(0,a.C)(),{date:n,formattedDate:i,readingTime:o}=s;return(0,l.jsxs)("div",{className:(0,r.Z)(h.container,"margin-vert--md",t),children:[(0,l.jsx)(p,{date:n,formattedDate:i}),void 0!==o&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(x,{}),(0,l.jsx)(g,{readingTime:o})]})]})}function b(e){return e.href?(0,l.jsx)(o.Z,{...e}):(0,l.jsx)(l.Fragment,{children:e.children})}function f(e){let{author:t,className:s}=e;const{name:a,title:n,url:i,imageURL:o,email:c}=t,m=i||c&&`mailto:${c}`||void 0;return(0,l.jsxs)("div",{className:(0,r.Z)("avatar margin-bottom--sm",s),children:[o&&(0,l.jsx)(b,{href:m,className:"avatar__photo-link",children:(0,l.jsx)("img",{className:"avatar__photo",src:o,alt:a,itemProp:"image"})}),a&&(0,l.jsxs)("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person",children:[(0,l.jsx)("div",{className:"avatar__name",children:(0,l.jsx)(b,{href:m,itemProp:"url",children:(0,l.jsx)("span",{itemProp:"name",children:a})})}),n&&(0,l.jsx)("small",{className:"avatar__subtitle",itemProp:"description",children:n})]})]})}const v={authorCol:"authorCol_mvK0",imageOnlyAuthorRow:"imageOnlyAuthorRow_jkt6",imageOnlyAuthorCol:"imageOnlyAuthorCol_URcm"};function P(e){let{className:t}=e;const{metadata:{authors:s},assets:n}=(0,a.C)();if(0===s.length)return null;const i=s.every((e=>{let{name:t}=e;return!t}));return(0,l.jsx)("div",{className:(0,r.Z)("margin-top--md margin-bottom--sm",i?v.imageOnlyAuthorRow:"row",t),children:s.map(((e,t)=>(0,l.jsx)("div",{className:(0,r.Z)(!i&&"col col--6",i?v.imageOnlyAuthorCol:v.authorCol),children:(0,l.jsx)(f,{author:{...e,imageURL:n.authorsImageUrls[t]??e.imageURL}})},t)))})}function N(){return(0,l.jsxs)("header",{children:[(0,l.jsx)(m,{}),(0,l.jsx)(j,{}),(0,l.jsx)(P,{})]})}var _=s(88668),k=s(2330);function Z(e){let{children:t,className:s}=e;const{isBlogPostPage:n}=(0,a.C)();return(0,l.jsx)("div",{id:n?_.blogPostContainerID:void 0,className:(0,r.Z)("markdown",s),itemProp:"articleBody",children:(0,l.jsx)(k.Z,{children:t})})}var I=s(67346),C=s(7983);function w(){return(0,l.jsx)("b",{children:(0,l.jsx)(d.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function T(e){const{blogPostTitle:t,...s}=e;return(0,l.jsx)(o.Z,{"aria-label":(0,d.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...s,children:(0,l.jsx)(w,{})})}const y={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_wX3W"};function F(){const{metadata:e,isBlogPostPage:t}=(0,a.C)(),{tags:s,title:n,editUrl:i,hasTruncateMarker:o}=e,c=!t&&o,m=s.length>0;return m||c||i?(0,l.jsxs)("footer",{className:(0,r.Z)("row docusaurus-mt-lg",t&&y.blogPostFooterDetailsFull),children:[m&&(0,l.jsx)("div",{className:(0,r.Z)("col",{"col--9":c}),children:(0,l.jsx)(C.Z,{tags:s})}),t&&i&&(0,l.jsx)("div",{className:"col margin-top--sm",children:(0,l.jsx)(I.Z,{editUrl:i})}),c&&(0,l.jsx)("div",{className:(0,r.Z)("col text--right",{"col--3":m}),children:(0,l.jsx)(T,{blogPostTitle:n,to:e.permalink})})]}):null}function L(e){let{children:t,className:s}=e;const n=function(){const{isBlogPostPage:e}=(0,a.C)();return e?void 0:"margin-bottom--xl"}();return(0,l.jsxs)(i,{className:(0,r.Z)(n,s),children:[(0,l.jsx)(N,{}),(0,l.jsx)(Z,{children:t}),(0,l.jsx)(F,{})]})}},25781:(e,t,s)=>{s.d(t,{C:()=>o,n:()=>i});var r=s(50959),a=s(62721),n=s(11527);const l=r.createContext(null);function i(e){let{children:t,content:s,isBlogPostPage:a=!1}=e;const i=function(e){let{content:t,isBlogPostPage:s}=e;return(0,r.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:s})),[t,s])}({content:s,isBlogPostPage:a});return(0,n.jsx)(l.Provider,{value:i,children:t})}function o(){const e=(0,r.useContext)(l);if(null===e)throw new a.i6("BlogPostProvider");return e}},15757:(e,t,s)=>{s.d(t,{c:()=>c});var r=s(50959),a=s(61423);const n=["zero","one","two","few","many","other"];function l(e){return n.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,a.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function c(){const e=o();return{selectMessage:(t,s)=>function(e,t,s){const r=e.split("|");if(1===r.length)return r[0];r.length>s.pluralForms.length&&console.error(`For locale=${s.locale}, a maximum of ${s.pluralForms.length} plural forms are expected (${s.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const a=s.select(t),n=s.pluralForms.indexOf(a);return r[Math.min(n,r.length-1)]}(s,t,e)}}}}]);