(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{108:function(t,e,n){},109:function(t,e,n){},171:function(t,e,n){"use strict";n.r(e);var a=n(29),i={name:"SidebarGroup",components:{DropdownTransition:n(172).a},props:["item","open","collapsable","depth"],beforeCreate:function(){this.$options.components.SidebarLinks=n(171).default},methods:{isActive:a.e}},s=n(0),r=Object(s.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?n("router-link",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,"sidebar-depth":t.item.sidebarDepth,depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null).exports;n(242);function o(t,e,n,a){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:a,"sidebar-link":!0}},n)}function l(t,e,n,i,s){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||r>s?null:t("ul",{class:"sidebar-sub-headers"},e.map((function(e){var c=Object(a.e)(i,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[o(t,n+"#"+e.slug,e.title,c),l(t,e.children,n,i,s,r+1)])})))}var c={functional:!0,props:["item","sidebarDepth"],render:function(t,e){var n=e.parent,i=n.$page,s=(n.$site,n.$route),r=n.$themeConfig,c=n.$themeLocaleConfig,u=e.props,p=u.item,h=u.sidebarDepth,d=Object(a.e)(s,p.path),f="auto"===p.type?d||p.children.some((function(t){return Object(a.e)(s,p.basePath+"#"+t.slug)})):d,v="external"===p.type?function(t,e,n){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,t("OutboundLink")])}(t,p.path,p.title||p.path):o(t,p.path,p.title||p.path,f),b=[i.frontmatter.sidebarDepth,h,c.sidebarDepth,r.sidebarDepth,1].find((function(t){return void 0!==t})),m=c.displayAllHeaders||r.displayAllHeaders;return"auto"===p.type?[v,l(t,p.children,p.basePath,s,b)]:(f||m)&&p.headers&&!a.d.test(p.path)?[v,l(t,Object(a.c)(p.headers),p.path,s,b)]:v}};n(247);var u={name:"SidebarLinks",components:{SidebarGroup:r,SidebarLink:Object(s.a)(c,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth"],data:function(){return{openGroupIndex:0}},watch:{$route:function(){this.refreshIndex()}},created:function(){this.refreshIndex()},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var i=e[n];if("group"===i.type&&i.children.some((function(e){return"page"===e.type&&Object(a.e)(t,e.path)})))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(a.e)(this.$route,t.regularPath)}}},p=(n(248),Object(s.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(e,a){return n("li",{key:a,staticClass:"sidebar-links__item"},["group"===e.type?n("SidebarGroup",{attrs:{item:e,open:a===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(a)}}}):n("SidebarLink",{staticClass:"sidebar-links__link",attrs:{"sidebar-depth":t.sidebarDepth,item:e}})],1)})),0):t._e()}),[],!1,null,"99e331ba",null));e.default=p.exports},172:function(t,e,n){"use strict";var a={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},i=n(0),s=Object(i.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.a=s.exports},191:function(t,e,n){"use strict";var a=n(79);n.n(a).a},192:function(t,e,n){"use strict";var a=n(80);n.n(a).a},234:function(t,e,n){"use strict";var a=n(89);n.n(a).a},235:function(t,e,n){"use strict";var a=n(90);n.n(a).a},236:function(t,e,n){"use strict";var a=n(91);n.n(a).a},247:function(t,e,n){"use strict";var a=n(93);n.n(a).a},248:function(t,e,n){"use strict";var a=n(94);n.n(a).a},29:function(t,e,n){"use strict";n.d(e,"d",(function(){return a})),n.d(e,"a",(function(){return s})),n.d(e,"i",(function(){return r})),n.d(e,"f",(function(){return l})),n.d(e,"g",(function(){return c})),n.d(e,"h",(function(){return u})),n.d(e,"b",(function(){return p})),n.d(e,"e",(function(){return h})),n.d(e,"k",(function(){return d})),n.d(e,"l",(function(){return f})),n.d(e,"c",(function(){return v})),n.d(e,"j",(function(){return b}));n(62),n(186),n(77),n(78);var a=/#.*$/,i=/\.(md|html)$/,s=/\/$/,r=/^(https?:|mailto:|tel:|[a-zA-Z]{4,}:)/;function o(t){return decodeURI(t).replace(a,"").replace(i,"")}function l(t){return r.test(t)}function c(t){return/^mailto:/.test(t)}function u(t){return/^tel:/.test(t)}function p(t){if(l(t))return t;var e=t.match(a),n=e?e[0]:"",i=o(t);return s.test(i)?t:i+".html"+n}function h(t,e){var n=t.hash,i=function(t){var e=t.match(a);if(e)return e[0]}(e);return(!i||n===i)&&o(t.path)===o(e)}function d(t,e,n){if(l(e))return{type:"external",path:e};n&&(e=function(t,e,n){var a=t.charAt(0);if("/"===a)return t;if("?"===a||"#"===a)return e+t;var i=e.split("/");n&&i[i.length-1]||i.pop();for(var s=t.replace(/^\//,"").split("/"),r=0;r<s.length;r++){var o=s[r];".."===o?i.pop():"."!==o&&i.push(o)}""!==i[0]&&i.unshift("");return i.join("/")}(e,n));for(var a=o(e),i=0;i<t.length;i++)if(o(t[i].regularPath)===a)return Object.assign({},t[i],{type:"page",path:p(t[i].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function f(t,e,n,a){var i=n.pages,s=n.themeConfig,r=a&&s.locales&&s.locales[a]||s;if("auto"===(t.frontmatter.sidebar||r.sidebar||s.sidebar))return function(t){var e=v(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map((function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}}))}]}(t);var o=r.sidebar||s.sidebar;if(o){var l=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var n in e)if(0===(a=t,/(\.html|\/)$/.test(a)?a:a+"/").indexOf(encodeURI(n)))return{base:n,config:e[n]};var a;return{}}(e,o),c=l.base,u=l.config;return u?u.map((function(t){return function t(e,n,a){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof e)return d(n,e,a);if(Array.isArray(e))return Object.assign(d(n,e[0],a),{title:e[1]});i>3&&console.error("[vuepress] detected a too deep nested sidebar group.");var s=e.children||[];return 0===s.length&&e.path?Object.assign(d(n,e.path,a),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:s.map((function(e){return t(e,n,a,i+1)})),collapsable:!1!==e.collapsable}}(t,i,c)})):[]}return[]}function v(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}function b(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},298:function(t,e,n){"use strict";var a=n(108);n.n(a).a},299:function(t,e,n){"use strict";var a=n(109);n.n(a).a},305:function(t,e,n){"use strict";n.r(e);n(62),n(121),n(184);var a=n(29),i={props:{item:{type:Object,required:!0}},computed:{link:function(){return Object(a.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(e){return e===t.link})):"/"===this.link}},methods:{isExternal:a.f,isMailto:a.g,isTel:a.h}},s=(n(191),n(0)),r=Object(s.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isExternal(t.link)?n("a",{staticClass:"nav-links__link nav-links__link--external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[t._v("\n    "+t._s(t.item.text)+"\n    "),n("OutboundLink")],1):n("router-link",{staticClass:"nav-links__link",attrs:{to:t.link,exact:t.exact}},[t._v("\n    "+t._s(t.item.text)+"\n")])}),[],!1,null,"ad52937c",null).exports,o={components:{NavLink:r},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},l=Object(s.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[n("header",{staticClass:"hero"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?n("h1",{attrs:{id:"main-title"}},[t._v("\n            "+t._s(t.data.heroText||t.$title||"Hello")+"\n        ")]):t._e(),t._v(" "),n("p",{staticClass:"description"},[t._v("\n            "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n        ")]),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,(function(e,a){return n("div",{key:a,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])})),0):t._e(),t._v(" "),n("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v("\n        "+t._s(t.data.footer)+"\n    ")]):t._e()],1)}),[],!1,null,null,null).exports,c=(n(192),Object(s.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,"c930e686",null).exports),u=(n(193),n(77),n(303)),p=(n(78),{components:{NavLink:r,DropdownTransition:n(172).a},props:{item:{type:Object,required:!0},mobile:{type:Boolean,default:!1}},data:function(){return{open:!1}},methods:{toggle:function(){this.open=!this.open}}}),h=(n(234),{components:{NavLink:r,DropdownLink:Object(s.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown",class:{open:t.open,"dropdown--mobile":t.mobile}},[n("a",{staticClass:"dropdown__title",on:{click:t.toggle}},[n("span",{staticClass:"dropdown__title-text"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"dropdown__arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"dropdown__nav"},t._l(t.item.items,(function(e,a){return n("li",{key:e.link||a,staticClass:"dropdown__item",class:{"dropdown__item--subitem":"links"===e.type}},["links"===e.type?n("h4",{staticClass:"dropdown__subtitle"},[t._v("\n                    "+t._s(e.text)+"\n                ")]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown__subnav"},t._l(e.items,(function(t){return n("li",{key:t.link,staticClass:"dropdown__item"},[n("NavLink",{staticClass:"dropdown__link",attrs:{item:t}})],1)})),0):n("NavLink",{staticClass:"dropdown__link",attrs:{item:e}})],1)})),0)])],1)}),[],!1,null,"18d8aaea",null).exports},props:{mobile:{type:Boolean,default:!1}},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,a=this.$router.options.routes,i=this.$site.themeConfig.locales||{},s={text:this.$themeLocaleConfig.selectText||"Languages",items:Object.keys(e).map((function(s){var r,o=e[s],l=i[s]&&i[s].label||o.lang;return o.lang===t.$lang?r=n:(r=n.replace(t.$localeConfig.path,s),a.some((function(t){return t.path===r}))||(r=s)),{text:l,link:r}}))};return[].concat(Object(u.a)(this.userNav),[s])}return this.userNav},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(Object(a.j)(t),{items:(t.items||[]).map(a.j)})}))},repoLink:function(){var t=this.$site.themeConfig.repo;if(t)return/^https?:/.test(t)?t:"https://github.com/".concat(t)},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var a=e[n];if(new RegExp(a,"i").test(t))return a}return"Source"}}}}),d=(n(235),Object(s.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(e){return n("div",{key:e.link,staticClass:"nav-links__item"},["links"===e.type?n("DropdownLink",{attrs:{item:e,mobile:t.mobile}}):n("NavLink",{attrs:{item:e}})],1)})),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.repoLabel)+"\n        "),n("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,"ff4aab6c",null).exports),f={components:{SidebarButton:c,NavLinks:d},data:function(){return{linksWrapMaxWidth:null}}},v=(n(236),Object(s.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{staticClass:"navbar__sidebar-button",on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),n("router-link",{staticClass:"navbar__brand",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"navbar__logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"navbar__title",class:{"can-hide":t.$site.themeConfig.logo}},[t._v("\n            "+t._s(t.$siteTitle)+"\n        ")]):t._e()]),t._v(" "),n("div",{staticClass:"navbar__links"},[n("NavLinks")],1)],1)}),[],!1,null,"a210b908",null).exports);function b(t,e,n){var a=[];!function t(e,n){for(var a=0,i=e.length;a<i;a++)"group"===e[a].type?t(e[a].children||[],n):n.push(e[a])}(e,a);for(var i=0;i<a.length;i++){var s=a[i];if("page"===s.type&&s.path===decodeURIComponent(t.path))return a[i+n]}}var m={props:{sidebarItems:{type:Array,default:function(){}}},computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},prev:function(){var t,e,n=this.$page.frontmatter.prev;return!1===n?void 0:n?Object(a.k)(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,b(t,e,-1))},next:function(){var t,e,n=this.$page.frontmatter.next;return!1===n?void 0:n?Object(a.k)(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,b(t,e,1))},editLink:function(){if(!1!==this.$page.frontmatter.editLink){var t=this.$site.themeConfig,e=t.repo,n=t.editLinks,a=t.docsDir,i=void 0===a?"":a,s=t.docsBranch,r=void 0===s?"master":s,o=t.docsRepo,l=void 0===o?e:o;return l&&n&&this.$page.relativePath?this.createEditLink(e,l,i,r,this.$page.relativePath):void 0}},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,i,s){return/bitbucket.org/.test(t)?(a.i.test(e)?e:t).replace(a.a,"")+"/src"+"/".concat(i,"/")+(n?n.replace(a.a,"")+"/":"")+s+"?mode=edit&spa=0&at=".concat(i,"&fileviewer=file-view-default"):(a.i.test(e)?e:"https://github.com/".concat(e)).replace(a.a,"")+"/edit"+"/".concat(i,"/")+(n?n.replace(a.a,"")+"/":"")+s}}},_=Object(s.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[t._t("top"),t._v(" "),n("Content",{staticClass:"page__content theme-default-content"}),t._v(" "),n("footer",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+": ")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()]),t._v(" "),t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n                ←\n                "),t.prev?n("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n                    "+t._s(t.prev.title||t.prev.path)+"\n                ")]):t._e()],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},[t.next?n("router-link",{attrs:{to:t.next.path}},[t._v("\n                    "+t._s(t.next.title||t.next.path)+"\n                ")]):t._e(),t._v("\n                →\n            ")],1):t._e()])]):t._e(),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null).exports,g=n(302),k=n(171),C=n(304),$={name:"Sidebar",components:{SidebarLinks:k.default,NavLinks:d,SearchBox:g.a,AlgoliaSearchBox:{},simplebar:C.a},props:{items:{type:Array,default:function(){return[]}}},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},x=(n(298),{components:{Home:l,Page:_,Sidebar:Object(s.a)($,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",{staticClass:"sidebar"},[n("div",{staticClass:"sidebar__inner"},[n("simplebar",{staticClass:"sidebar__scrollbar"},[n("div",{staticClass:"sidebar__box"},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?n("SearchBox",{staticClass:"sidebar__search"}):t._e(),t._v(" "),n("NavLinks",{staticClass:"nav-links--mobile",attrs:{mobile:""}}),t._v(" "),t._t("top")],2),t._v(" "),n("div",{staticClass:"sidebar__box sidebar__box--not-padding"},[n("SidebarLinks",{attrs:{depth:0,items:t.items}}),t._v(" "),t._t("bottom")],2)])],1)])}),[],!1,null,"23da1a1b",null).exports,Navbar:v},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(a.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"layout--no-navbar":!this.shouldShowNavbar,"layout--sidebar-open":this.isSidebarOpen,"layout--no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}}),L=(n(299),Object(s.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{staticClass:"layout__navbar",on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"layout__sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{staticClass:"layout__sidebar",attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._v(" "),t._t("sidebar-bottom",null,{slot:"bottom"})],2),t._v(" "),t.$page.frontmatter.home?n("Home",{staticClass:"layout__home"}):n("Page",{staticClass:"layout__page",attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top",null,{slot:"top"}),t._v(" "),t._t("page-bottom",null,{slot:"bottom"})],2)],1)}),[],!1,null,"04333842",null));e.default=L.exports},79:function(t,e,n){},80:function(t,e,n){},89:function(t,e,n){},90:function(t,e,n){},91:function(t,e,n){},93:function(t,e,n){},94:function(t,e,n){}}]);