(this.webpackJsonp=this.webpackJsonp||[]).push([[102,113],{YeWz:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var a=function(t,e){return t.map((function(t,e){return[e,t]})).sort(function(t,e){return this(t[1],e[1])||t[0]-e[0]}.bind(e)).map((function(t){return t[1]}))}},"f/vg":function(t,e){var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getRef"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"ref"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"client"},arguments:[]}]},{kind:"Field",name:{kind:"Name",value:"escapedRef"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"client"},arguments:[]}]}]}}],loc:{start:0,end:52}};i.loc.source={body:"query getRef {\n  ref @client\n  escapedRef @client\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var a={};function n(t,e){for(var i=0;i<t.definitions.length;i++){var a=t.definitions[i];if(a.name&&a.name.value==e)return a}}i.definitions.forEach((function(t){if(t.name){var e=new Set;!function t(e,i){if("FragmentSpread"===e.kind)i.add(e.name.value);else if("VariableDefinition"===e.kind){var a=e.type;"NamedType"===a.kind&&i.add(a.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){t(e,i)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){t(e,i)})),e.definitions&&e.definitions.forEach((function(e){t(e,i)}))}(t,e),a[t.name.value]=e}})),t.exports=i,t.exports.getRef=function(t,e){var i={kind:t.kind,definitions:[n(t,e)]};t.hasOwnProperty("loc")&&(i.loc=t.loc);var r=a[e]||new Set,s=new Set,c=new Set;for(r.forEach((function(t){c.add(t)}));c.size>0;){var o=c;c=new Set,o.forEach((function(t){s.has(t)||(s.add(t),(a[t]||new Set).forEach((function(t){c.add(t)})))}))}return s.forEach((function(e){var a=n(t,e);a&&i.definitions.push(a)})),i}(i,"getRef")},pbPB:function(t,e,i){"use strict";var a=i("8ENL"),n=i("0zRR"),r=i("MtBe"),s=i("h3Ey"),c=i("/GZH"),o=i("fkuG"),b=i("dOr5"),l=i("TjC/"),u=i("sOG4"),d=i("o/E4"),f=i("QXXq"),v=i("qTlp"),h=i("BrvI"),y=i("NSGy"),m=i("9aS3"),p=i("vI7E"),g=i("Ddgg"),O=i("7bmO"),T=i("cfII"),j=i("ua/H"),k=i("YeWz"),_=i("DXSV"),S=i("EQ0+"),P=i("1m+M"),w=i("lgrP");function x(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var B,$=Object(j.c)({align:Object(j.b)(o.r),cardHeader:Object(j.b)(o.g,!1),fill:Object(j.b)(o.g,!1),justified:Object(j.b)(o.g,!1),pills:Object(j.b)(o.g,!1),small:Object(j.b)(o.g,!1),tabs:Object(j.b)(o.g,!1),tag:Object(j.b)(o.r,"ul"),vertical:Object(j.b)(o.g,!1)},n.N),C=Object(a.c)({name:n.N,functional:!0,props:$,render:function(t,e){var i,a,n=e.props,r=e.data,s=e.children,c=n.tabs,o=n.pills,b=n.vertical,l=n.align,u=n.cardHeader;return t(n.tag,Object(w.a)(r,{staticClass:"nav",class:(i={"nav-tabs":c,"nav-pills":o&&!c,"card-header-tabs":!b&&u&&c,"card-header-pills":!b&&u&&o&&!c,"flex-column":b,"nav-fill":!b&&n.fill,"nav-justified":!b&&n.justified},x(i,(a=l,"justify-content-".concat(a="left"===a?"start":"right"===a?"end":a)),!b&&l),x(i,"small",n.small),i)}),s)}});function I(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function A(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?I(Object(i),!0).forEach((function(e){N(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):I(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function N(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var E=Object(p.a)("value",{type:o.k}),q=E.mixin,z=E.props,D=E.prop,F=E.event,Q=function(t){return!t.disabled},V=Object(a.c)({name:n.ab,inject:{getBvTabs:{default:function(){return function(){return{}}}}},props:{controls:Object(j.b)(o.r),id:Object(j.b)(o.r),noKeyNav:Object(j.b)(o.g,!1),posInSet:Object(j.b)(o.k),setSize:Object(j.b)(o.k),tab:Object(j.b)(),tabIndex:Object(j.b)(o.k)},computed:{bvTabs:function(){return this.getBvTabs()}},methods:{focus:function(){Object(d.d)(this.$refs.link)},handleEvent:function(t){if(!this.tab.disabled){var e=t.type,i=t.keyCode,a=t.shiftKey;"click"===e||"keydown"===e&&i===c.h?(Object(f.f)(t),this.$emit(s.f,t)):"keydown"!==e||this.noKeyNav||(-1!==[c.i,c.f,c.e].indexOf(i)?(Object(f.f)(t),a||i===c.e?this.$emit(s.o,t):this.$emit(s.B,t)):-1!==[c.a,c.g,c.b].indexOf(i)&&(Object(f.f)(t),a||i===c.b?this.$emit(s.v,t):this.$emit(s.y,t)))}}},render:function(t){var e=this.id,i=this.tabIndex,a=this.setSize,n=this.posInSet,r=this.controls,s=this.handleEvent,c=this.tab,o=c.title,l=c.localActive,u=c.disabled,d=c.titleItemClass,f=c.titleLinkClass,v=c.titleLinkAttributes,h=t(P.a,{staticClass:"nav-link",class:[{active:l&&!u,disabled:u},f,l?this.bvTabs.activeNavItemClass:null],props:{disabled:u},attrs:A(A({},v),{},{id:e,role:"tab",tabindex:i,"aria-selected":l&&!u?"true":"false","aria-setsize":a,"aria-posinset":n,"aria-controls":r}),on:{click:s,keydown:s},ref:"link"},[this.tab.normalizeSlot(b.A)||o]);return t("li",{staticClass:"nav-item",class:[d],attrs:{role:"presentation"}},[h])}}),L=Object(O.j)($,["tabs","isNavBar","cardHeader"]),R=Object(j.c)(Object(O.m)(A(A(A(A({},_.b),z),L),{},{activeNavItemClass:Object(j.b)(o.e),activeTabClass:Object(j.b)(o.e),card:Object(j.b)(o.g,!1),contentClass:Object(j.b)(o.e),end:Object(j.b)(o.g,!1),lazy:Object(j.b)(o.g,!1),navClass:Object(j.b)(o.e),navWrapperClass:Object(j.b)(o.e),noFade:Object(j.b)(o.g,!1),noKeyNav:Object(j.b)(o.g,!1),noNavStyle:Object(j.b)(o.g,!1),tag:Object(j.b)(o.r,"div")})),n.Z),G=Object(a.c)({name:n.Z,mixins:[_.a,q,S.a],provide:function(){var t=this;return{getBvTabs:function(){return t}}},props:R,data:function(){return{currentTab:Object(g.c)(this[D],-1),tabs:[],registeredTabs:[]}},computed:{fade:function(){return!this.noFade},localNavClass:function(){var t=[];return this.card&&this.vertical&&t.push("card-header","h-100","border-bottom-0","rounded-0"),[].concat(t,[this.navClass])}},watch:(B={},N(B,D,(function(t,e){if(t!==e){t=Object(g.c)(t,-1),e=Object(g.c)(e,0);var i=this.tabs[t];i&&!i.disabled?this.activateTab(i):t<e?this.previousTab():this.nextTab()}})),N(B,"currentTab",(function(t){var e=-1;this.tabs.forEach((function(i,a){a!==t||i.disabled?i.localActive=!1:(i.localActive=!0,e=a)})),this.$emit(F,e)})),N(B,"tabs",(function(t,e){var i=this;Object(y.a)(t.map((function(t){return t[a.a]})),e.map((function(t){return t[a.a]})))||this.$nextTick((function(){i.$emit(s.e,t.slice(),e.slice())}))})),N(B,"registeredTabs",(function(){this.updateTabs()})),B),created:function(){this.$_observer=null},mounted:function(){this.setObserver(!0)},beforeDestroy:function(){this.setObserver(!1),this.tabs=[]},methods:{registerTab:function(t){Object(l.a)(this.registeredTabs,t)||this.registeredTabs.push(t)},unregisterTab:function(t){this.registeredTabs=this.registeredTabs.slice().filter((function(e){return e!==t}))},setObserver:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.$_observer&&this.$_observer.disconnect(),this.$_observer=null,e){var i=function(){t.$nextTick((function(){Object(d.B)((function(){t.updateTabs()}))}))};this.$_observer=Object(T.a)(this.$refs.content,i,{childList:!0,subtree:!1,attributes:!0,attributeFilter:["id"]})}},getTabs:function(){var t=this.registeredTabs,e=[];if(r.g&&t.length>0){var i=t.map((function(t){return"#".concat(t.safeId())})).join(", ");e=Object(d.D)(i,this.$el).map((function(t){return t.id})).filter(v.a)}return Object(k.a)(t,(function(t,i){return e.indexOf(t.safeId())-e.indexOf(i.safeId())}))},updateTabs:function(){var t=this.getTabs(),e=t.indexOf(t.slice().reverse().find((function(t){return t.localActive&&!t.disabled})));if(e<0){var i=this.currentTab;i>=t.length?e=t.indexOf(t.slice().reverse().find(Q)):t[i]&&!t[i].disabled&&(e=i)}e<0&&(e=t.indexOf(t.find(Q))),t.forEach((function(t,i){t.localActive=i===e})),this.tabs=t,this.currentTab=e},getButtonForTab:function(t){return(this.$refs.buttons||[]).find((function(e){return e.tab===t}))},updateButton:function(t){var e=this.getButtonForTab(t);e&&e.$forceUpdate&&e.$forceUpdate()},activateTab:function(t){var e=this.currentTab,i=this.tabs,a=!1;if(t){var n=i.indexOf(t);if(n!==e&&n>-1&&!t.disabled){var r=new u.a(s.a,{cancelable:!0,vueTarget:this,componentId:this.safeId()});this.$emit(r.type,n,e,r),r.defaultPrevented||(this.currentTab=n,a=!0)}}return a||this[D]===e||this.$emit(F,e),a},deactivateTab:function(t){return!!t&&this.activateTab(this.tabs.filter((function(e){return e!==t})).find(Q))},focusButton:function(t){var e=this;this.$nextTick((function(){Object(d.d)(e.getButtonForTab(t))}))},emitTabClick:function(t,e){Object(h.d)(e)&&t&&t.$emit&&!t.disabled&&t.$emit(s.f,e)},clickTab:function(t,e){this.activateTab(t),this.emitTabClick(t,e)},firstTab:function(t){var e=this.tabs.find(Q);this.activateTab(e)&&t&&(this.focusButton(e),this.emitTabClick(e,t))},previousTab:function(t){var e=Object(m.b)(this.currentTab,0),i=this.tabs.slice(0,e).reverse().find(Q);this.activateTab(i)&&t&&(this.focusButton(i),this.emitTabClick(i,t))},nextTab:function(t){var e=Object(m.b)(this.currentTab,-1),i=this.tabs.slice(e+1).find(Q);this.activateTab(i)&&t&&(this.focusButton(i),this.emitTabClick(i,t))},lastTab:function(t){var e=this.tabs.slice().reverse().find(Q);this.activateTab(e)&&t&&(this.focusButton(e),this.emitTabClick(e,t))}},render:function(t){var e=this,i=this.align,n=this.card,r=this.end,c=this.fill,o=this.firstTab,l=this.justified,u=this.lastTab,d=this.nextTab,f=this.noKeyNav,v=this.noNavStyle,h=this.pills,y=this.previousTab,m=this.small,p=this.tabs,g=this.vertical,O=p.find((function(t){return t.localActive&&!t.disabled})),T=p.find((function(t){return!t.disabled})),j=p.map((function(i,n){var r,c=i.safeId,b=null;return f||(b=-1,(i===O||!O&&i===T)&&(b=null)),t(V,N({props:{controls:c?c():null,id:i.controlledBy||(c?c("_BV_tab_button_"):null),noKeyNav:f,posInSet:n+1,setSize:p.length,tab:i,tabIndex:b},on:(r={},N(r,s.f,(function(t){e.clickTab(i,t)})),N(r,s.o,o),N(r,s.B,y),N(r,s.y,d),N(r,s.v,u),r),key:i[a.a]||n,ref:"buttons"},a.b,!0))})),k=t(C,{class:this.localNavClass,attrs:{role:"tablist",id:this.safeId("_BV_tab_controls_")},props:{fill:c,justified:l,align:i,tabs:!v&&!h,pills:!v&&h,vertical:g,small:m,cardHeader:n&&!g},ref:"nav"},[this.normalizeSlot(b.y)||t(),j,this.normalizeSlot(b.x)||t()]);k=t("div",{class:[{"card-header":n&&!g&&!r,"card-footer":n&&!g&&r,"col-auto":g},this.navWrapperClass],key:"bv-tabs-nav"},[k]);var _=this.normalizeSlot()||[],S=t();0===_.length&&(S=t("div",{class:["tab-pane","active",{"card-body":n}],key:"bv-empty-tab"},this.normalizeSlot(b.g)));var P=t("div",{staticClass:"tab-content",class:[{col:g},this.contentClass],attrs:{id:this.safeId("_BV_tab_container_")},key:"bv-content",ref:"content"},[_,S]);return t(this.tag,{staticClass:"tabs",class:{row:g,"no-gutters":g&&n},attrs:{id:this.safeId()}},[r?P:t(),k,r?t():P])}}),H=i("XBTk"),W=i("4lAS"),K=i("Pyw5"),U=i.n(K);const X=t=>Object.keys(t).every(t=>"text"===t||"attributes"===t);const Z={name:"GlTabs",components:{BTabs:G,GlButton:W.a},inheritAttrs:!1,props:{actionPrimary:{type:Object,required:!1,default:null,validator:t=>X(t)},actionSecondary:{type:Object,required:!1,default:null,validator:t=>X(t)},actionTertiary:{type:Object,required:!1,default:null,validator:t=>X(t)},contentClass:{type:[String,Array,Object],required:!1,default:null},navClass:{type:[String,Array,Object],required:!1,default:null},justified:{type:Boolean,required:!1,default:!1},syncActiveTabWithQueryParams:{type:Boolean,required:!1,default:!1},queryParamName:{type:String,required:!1,default:"tab"},value:{type:Number,required:!1,default:0}},data:()=>({activeTabIndex:0}),computed:{hasActions(){return[this.actionPrimary,this.actionSecondary,this.actionTertiary].some(Boolean)},listeners(){return{...this.$listeners,input:this.handleInput}}},watch:{value:{handler(t){this.activeTabIndex!==t&&(this.activeTabIndex=t)},immediate:!0}},mounted(){this.syncActiveTabWithQueryParams&&(this.syncActiveTabFromQueryParams(),window.addEventListener("popstate",this.syncActiveTabFromQueryParams)),this.$emit("input",this.activeTabIndex)},destroyed(){window.removeEventListener("popstate",this.syncActiveTabFromQueryParams)},methods:{buttonBinding:(t,e)=>t.attributes?t.attributes:H.H[e],primary(){this.$emit("primary")},secondary(){this.$emit("secondary")},tertiary(){this.$emit("tertiary")},async syncActiveTabFromQueryParams(){await this.$nextTick();const t=this.getQueryParamValue(),e=this.getTabs().findIndex((e,i)=>this.getTabQueryParamValue(i)===t);this.activeTabIndex=-1!==e?e:0},getTabs(){return this.$refs.bTabs.getTabs()},getQueryParamValue(){return new URLSearchParams(window.location.search).get(this.queryParamName)},setQueryParamValueIfNecessary(t){const e=this.getQueryParamValue(),i=this.getTabQueryParamValue(t);if(0===t&&!e||0!==t&&e===i)return;const a=new URLSearchParams(window.location.search);a.set(this.queryParamName,i),window.history.pushState({},"",`${window.location.pathname}?${a.toString()}`)},getTabQueryParamValue(t){const e=this.getTabs()[t];return(null==e?void 0:e.$attrs["query-param-value"])||t.toString()},handleInput(t){this.$emit("input",t),this.activeTabIndex=t,this.syncActiveTabWithQueryParams&&this.setQueryParamValueIfNecessary(t)}}};const J=U()({render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-tabs",t._g(t._b({ref:"bTabs",staticClass:"gl-tabs",attrs:{"no-nav-style":!0,"no-fade":!0,"active-nav-item-class":"gl-tab-nav-item-active","content-class":[t.contentClass,"gl-tab-content"],"nav-class":[t.navClass,"gl-tabs-nav"],justified:t.justified,value:t.activeTabIndex},scopedSlots:t._u([t._l(Object.keys(t.$slots),(function(e){return{key:e,fn:function(){return[t._t(e)]},proxy:!0}})),t.hasActions?{key:"tabs-start",fn:function(){return[i("div",{staticClass:"gl-actions-tabs-start",attrs:{"data-testid":"actions-tabs-start"}},[t.actionPrimary?i("gl-button",t._b({attrs:{"data-testid":"action-primary"},on:{click:t.primary}},"gl-button",t.buttonBinding(t.actionPrimary,"actionPrimary"),!1),[t._v("\n        "+t._s(t.actionPrimary.text)+"\n      ")]):t._e(),t._v(" "),t.actionSecondary?i("gl-button",t._b({attrs:{"data-testid":"action-secondary"},on:{click:t.secondary}},"gl-button",t.buttonBinding(t.actionSecondary,"actionSecondary"),!1),[t._v("\n        "+t._s(t.actionSecondary.text)+"\n      ")]):t._e(),t._v(" "),t.actionTertiary?i("gl-button",t._b({attrs:{"data-testid":"action-tertiary"},on:{click:t.tertiary}},"gl-button",t.buttonBinding(t.actionTertiary,"actionTertiary"),!1),[t._v("\n        "+t._s(t.actionTertiary.text)+"\n      ")]):t._e()],1)]},proxy:!0}:null,t.hasActions?{key:"tabs-end",fn:function(){return[i("div",{staticClass:"gl-actions-tabs-end",attrs:{"data-testid":"actions-tabs-end"}},[t.actionPrimary?i("gl-button",t._b({attrs:{"data-testid":"action-primary"},on:{click:t.primary}},"gl-button",t.buttonBinding(t.actionPrimary,"actionPrimary"),!1),[t._v("\n        "+t._s(t.actionPrimary.text)+"\n      ")]):t._e(),t._v(" "),t.actionSecondary?i("gl-button",t._b({attrs:{"data-testid":"action-secondary"},on:{click:t.secondary}},"gl-button",t.buttonBinding(t.actionSecondary,"actionSecondary"),!1),[t._v("\n        "+t._s(t.actionSecondary.text)+"\n      ")]):t._e(),t._v(" "),t.actionTertiary?i("gl-button",t._b({attrs:{"data-testid":"action-tertiary"},on:{click:t.tertiary}},"gl-button",t.buttonBinding(t.actionTertiary,"actionTertiary"),!1),[t._v("\n        "+t._s(t.actionTertiary.text)+"\n      ")]):t._e()],1)]},proxy:!0}:null],null,!0)},"b-tabs",t.$attrs,!1),t.listeners))},staticRenderFns:[]},void 0,Z,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=J},"sF+2":function(t,e,i){"use strict";var a,n,r=i("8ENL"),s=i("0zRR"),c=i("h3Ey"),o=i("fkuG"),b=i("dOr5"),l=i("7bmO"),u=i("ua/H"),d=i("DXSV"),f=i("EQ0+"),v=i("Lgtt");function h(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function y(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?h(Object(i),!0).forEach((function(e){m(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):h(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function m(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var p=c.U+"active",g=Object(u.c)(Object(l.m)(y(y({},d.b),{},(m(a={},"active",Object(u.b)(o.g,!1)),m(a,"buttonId",Object(u.b)(o.r)),m(a,"disabled",Object(u.b)(o.g,!1)),m(a,"lazy",Object(u.b)(o.g,!1)),m(a,"noBody",Object(u.b)(o.g,!1)),m(a,"tag",Object(u.b)(o.r,"div")),m(a,"title",Object(u.b)(o.r)),m(a,"titleItemClass",Object(u.b)(o.e)),m(a,"titleLinkAttributes",Object(u.b)(o.n)),m(a,"titleLinkClass",Object(u.b)(o.e)),a))),s.V),O=Object(r.c)({name:s.V,mixins:[d.a,f.a],inject:{getBvTabs:{default:function(){return function(){return{}}}}},props:g,data:function(){return{localActive:this.active&&!this.disabled}},computed:{bvTabs:function(){return this.getBvTabs()},_isTab:function(){return!0},tabClasses:function(){var t=this.localActive;return[{active:t,disabled:this.disabled,"card-body":this.bvTabs.card&&!this.noBody},t?this.bvTabs.activeTabClass:null]},controlledBy:function(){return this.buttonId||this.safeId("__BV_tab_button__")},computedNoFade:function(){return!this.bvTabs.fade},computedLazy:function(){return this.bvTabs.lazy||this.lazy}},watch:(n={},m(n,"active",(function(t,e){t!==e&&(t?this.activate():this.deactivate()||this.$emit(p,this.localActive))})),m(n,"disabled",(function(t,e){if(t!==e){var i=this.bvTabs.firstTab;t&&this.localActive&&i&&(this.localActive=!1,i())}})),m(n,"localActive",(function(t){this.$emit(p,t)})),n),mounted:function(){this.registerTab()},updated:function(){var t=this.bvTabs.updateButton;t&&this.hasNormalizedSlot(b.A)&&t(this)},beforeDestroy:function(){this.unregisterTab()},methods:{registerTab:function(){var t=this.bvTabs.registerTab;t&&t(this)},unregisterTab:function(){var t=this.bvTabs.unregisterTab;t&&t(this)},activate:function(){var t=this.bvTabs.activateTab;return!(!t||this.disabled)&&t(this)},deactivate:function(){var t=this.bvTabs.deactivateTab;return!(!t||!this.localActive)&&t(this)}},render:function(t){var e=this.localActive,i=t(this.tag,{staticClass:"tab-pane",class:this.tabClasses,directives:[{name:"show",value:e}],attrs:{role:"tabpanel",id:this.safeId(),"aria-hidden":e?"false":"true","aria-labelledby":this.controlledBy||null},ref:"panel"},[e||!this.computedLazy?this.normalizeSlot():t()]);return t(v.a,{props:{mode:"out-in",noFade:this.computedNoFade}},[i])}}),T=i("8Ei6"),j=i.n(T);var k=i("Pyw5");const _={name:"GlTab",components:{BTab:O},inheritAttrs:!1,props:{titleLinkClass:{type:[String,Array,Object],required:!1,default:""},queryParamValue:{type:String,required:!1,default:null}},computed:{linkClass(){const{titleLinkClass:t}=this;return Array.isArray(t)?[...t,"gl-tab-nav-item"]:j()(t)?{...t,"gl-tab-nav-item":!0}:(t+" gl-tab-nav-item").trim()}}};const S=i.n(k)()({render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("b-tab",t._g(t._b({attrs:{"title-link-class":t.linkClass,"query-param-value":t.queryParamValue},scopedSlots:t._u([t._l(Object.keys(t.$slots),(function(e){return{key:e,fn:function(){return[t._t(e)]},proxy:!0}}))],null,!0)},"b-tab",t.$attrs,!1),t.$listeners))},staticRenderFns:[]},void 0,_,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=S}}]);
//# sourceMappingURL=commons-pages.groups.show-pages.projects.blob.show-pages.projects.show-pages.projects.tree.show.602e8fd6.chunk.js.map