(this.webpackJsonp=this.webpackJsonp||[]).push([[112],{"3fen":function(e,t,s){"use strict";s.d(t,"a",(function(){return c})),s.d(t,"b",(function(){return n})),s.d(t,"c",(function(){return u}));var i=s("6npM"),l=s.n(i),o=s("lx39"),r=s.n(o);const n=e=>Boolean(e)&&(r()(e.value)||l()(e.value)),a=function(){let{options:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Array.isArray(e)&&e.every(n)},d=e=>e.length===new Set(e).size,c=e=>e.flatMap(e=>n(e)?e:e.options),u=e=>(e=>e.every(n)||e.every(a))(e)&&(e=>d(c(e).map(e=>{let{value:t}=e;return t})))(e)&&(e=>d(e.filter(a).map(e=>{let{text:t}=e;return t})))(e)},crTv:function(e,t,s){"use strict";var i=s("3CjL"),l=s.n(i),o=s("o4PY"),r=s.n(o),n=s("59DU"),a=s.n(n),d=s("Qog8"),c=s("V5u/"),u=s("XBTk"),h=s("4lAS"),g=s("FkSe"),p=s("ehHk"),b=s("iN9h"),m=s("qaCH"),f=s("s1D3"),v=s("Pyw5"),y=s.n(v);const x={name:"GlListboxItem",components:{GlIcon:f.a},props:{isSelected:{type:Boolean,default:!1,required:!1},isFocused:{type:Boolean,default:!1,required:!1},isCheckCentered:{type:Boolean,required:!1,default:!1}},computed:{checkedClasses(){return this.isCheckCentered?"":"gl-mt-3 gl-align-self-start"}},methods:{toggleSelection(){this.$emit("select",!this.isSelected)},onKeydown(e){const{code:t}=e;t!==c.d&&t!==c.m||(Object(d.k)(e),this.toggleSelection())}}};var _=y()({render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("li",{staticClass:"gl-new-dropdown-item",attrs:{role:"option",tabindex:e.isFocused?0:-1,"aria-selected":e.isSelected},on:{click:e.toggleSelection,keydown:e.onKeydown}},[s("span",{staticClass:"gl-new-dropdown-item-content"},[s("gl-icon",{class:["gl-new-dropdown-item-check-icon",{"gl-visibility-hidden":!e.isSelected},e.checkedClasses],attrs:{name:"mobile-issue-close","data-testid":"dropdown-item-checkbox"}}),e._v(" "),s("span",{staticClass:"gl-new-dropdown-item-text-wrapper"},[e._t("default")],2)],1)])},staticRenderFns:[]},void 0,x,void 0,!1,void 0,!1,void 0,void 0,void 0);const S={name:"GlListboxSearchInput",components:{GlClearIconButton:s("3A1J").a,GlIcon:f.a},model:{prop:"value",event:"input"},props:{value:{type:String,required:!1,default:""},placeholder:{type:String,required:!1,default:"Search"}},computed:{hasValue(){return Boolean(this.value.length)},inputListeners(){return{...this.$listeners,input:e=>{this.$emit("input",e.target.value)}}}},methods:{clearInput(){this.$emit("input",""),this.focusInput()},focusInput(){this.$refs.input.focus()}}};var I=y()({render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"gl-listbox-search"},[s("gl-icon",{staticClass:"gl-listbox-search-icon",attrs:{name:"search-sm",size:12}}),e._v(" "),s("input",e._g({ref:"input",staticClass:"gl-listbox-search-input",attrs:{type:"search","aria-label":e.placeholder,placeholder:e.placeholder},domProps:{value:e.value}},e.inputListeners)),e._v(" "),e.hasValue?s("gl-clear-icon-button",{staticClass:"gl-listbox-search-clear-button",on:{click:function(t){return t.stopPropagation(),e.clearInput.apply(null,arguments)}}}):e._e()],1)},staticRenderFns:[]},void 0,S,void 0,!1,void 0,!1,void 0,void 0,void 0);const w={name:"GlListboxGroup",props:{name:{type:String,required:!0},textSrOnly:{type:Boolean,required:!1,default:!1}},created(){this.nameId=r()("gl-listbox-group-")}};var B=y()({render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",{staticClass:"gl-mb-0 gl-pl-0",attrs:{role:"group","aria-labelledby":e.nameId}},[s("li",{staticClass:"gl-pl-4 gl-pt-3 gl-pb-2 gl-font-sm gl-font-weight-bold",class:{"gl-sr-only":e.textSrOnly},attrs:{id:e.nameId,role:"presentation"}},[e._t("group-label",(function(){return[e._v(e._s(e.name))]}))],2),e._v(" "),e._t("default")],2)},staticRenderFns:[]},void 0,w,void 0,!1,void 0,!1,void 0,void 0,void 0),C=s("3fen");const O=["gl-border-t","gl-border-t-gray-200","gl-pt-1","gl-mt-2"];const $={name:"GlCollapsibleListbox",HEADER_ITEMS_BORDER_CLASSES:["gl-border-b-1","gl-border-b-solid","gl-border-b-gray-200"],events:{GL_DROPDOWN_SHOWN:c.i,GL_DROPDOWN_HIDDEN:c.h},components:{GlBaseDropdown:m.b,GlListboxItem:_,GlListboxGroup:B,GlButton:h.a,GlSearchBoxByType:b.a,GlListboxSearchInput:I,GlLoadingIcon:g.a,GlIntersectionObserver:p.a},model:{prop:"selected",event:"select"},props:{items:{type:Array,required:!1,default:()=>[],validator:C.c},selected:{type:[Array,String,Number],required:!1,default:()=>[]},multiple:{type:Boolean,required:!1,default:!1},toggleText:{type:String,required:!1,default:""},textSrOnly:{type:Boolean,required:!1,default:!1},headerText:{type:String,required:!1,default:""},category:{type:String,required:!1,default:u.m.primary,validator:e=>e in u.m},variant:{type:String,required:!1,default:u.w.default,validator:e=>e in u.w},size:{type:String,required:!1,default:"medium",validator:e=>e in u.n},icon:{type:String,required:!1,default:""},disabled:{type:Boolean,required:!1,default:!1},loading:{type:Boolean,required:!1,default:!1},toggleClass:{type:[String,Array,Object],required:!1,default:null},noCaret:{type:Boolean,required:!1,default:!1},placement:{type:String,required:!1,default:"left",validator:e=>Object.keys(u.v).includes(e)},isCheckCentered:{type:Boolean,required:!1,default:!1},toggleAriaLabelledBy:{type:String,required:!1,default:null},listAriaLabelledBy:{type:String,required:!1,default:null},searchable:{type:Boolean,required:!1,default:!1},searching:{type:Boolean,required:!1,default:!1},infiniteScroll:{type:Boolean,required:!1,default:!1},totalItems:{type:Number,required:!1,default:null},infiniteScrollLoading:{type:Boolean,required:!1,default:!1},noResultsText:{type:String,required:!1,default:"No results found"},searchPlaceholder:{type:String,required:!1,default:"Search"},resetButtonLabel:{type:String,required:!1,default:""},showSelectAllButtonLabel:{type:String,required:!1,default:""},block:{type:Boolean,required:!1,default:!1},dropdownOffset:{type:[Number,Object],required:!1,default:void 0},fluidWidth:{type:Boolean,required:!1,default:!1},positioningStrategy:{type:String,required:!1,default:c.k,validator:e=>[c.k,c.l].includes(e)},startOpened:{type:Boolean,required:!1,default:!1}},data:()=>({selectedValues:[],toggleId:r()("dropdown-toggle-btn-"),listboxId:r()("listbox-"),nextFocusedItemIndex:null,searchStr:"",topBoundaryVisible:!0,bottomBoundaryVisible:!0}),computed:{listboxTag(){return!this.hasItems||Object(C.b)(this.items[0])?"ul":"div"},listboxClasses(){return{"top-scrim-visible":!this.topBoundaryVisible,"bottom-scrim-visible":!this.bottomBoundaryVisible,[c.f]:!0}},itemTag(){return"ul"===this.listboxTag?"li":"div"},flattenedOptions(){return Object(C.a)(this.items)},hasItems(){return this.items.length>0},listboxToggleText(){var e;return this.toggleText?this.toggleText:!this.multiple&&this.selectedValues.length?null===(e=this.flattenedOptions.find(e=>{let{value:t}=e;return t===this.selectedValues[0]}))||void 0===e?void 0:e.text:""},selectedIndices(){return this.selectedValues.map(e=>this.flattenedOptions.findIndex(t=>{let{value:s}=t;return s===e})).sort()},showList(){return this.flattenedOptions.length&&!this.searching},showNoResultsText(){return!this.flattenedOptions.length&&!this.searching},announceSRSearchResults(){return this.searchable&&!this.showNoResultsText&&this.$scopedSlots["search-summary-sr-only"]},headerId(){return this.headerText&&r()("listbox-header-")},showResetButton(){return!!this.resetButtonLabel&&(!!this.hasItems&&(!(!this.selected||0===this.selected.length)&&!this.showSelectAllButton))},showSelectAllButton(){return!!this.showSelectAllButtonLabel&&(!!this.multiple&&(!!this.hasItems&&this.selected.length!==this.flattenedOptions.length))},showIntersectionObserver(){return this.infiniteScroll&&!this.infiniteScrollLoading&&!this.loading&&!this.searching},hasCustomToggle(){return Boolean(this.$scopedSlots.toggle)},hasSelection(){return Boolean(this.selectedValues.length)},toggleButtonClasses(){const e=[this.toggleClass];return this.hasSelection||e.push("gl-text-gray-500!"),e},hasHeader(){return this.headerText||this.searchable},hasFooter(){return Boolean(this.$scopedSlots.footer)}},watch:{selected:{immediate:!0,handler(e){Array.isArray(e)?this.selectedValues=[...e]:this.selectedValues=a()(e)?[]:[e]}},items:{handler(){this.$nextTick(()=>{this.observeScroll()})}}},mounted(){this.startOpened&&this.open(),this.observeScroll()},beforeDestroy(){var e;null===(e=this.scrollObserver)||void 0===e||e.disconnect()},methods:{open(){this.$refs.baseDropdown.open()},close(){this.$refs.baseDropdown.close()},groupClasses:e=>0===e?null:O,onShow(){var e;this.searchable?this.focusSearchInput():this.focusItem(null!==(e=this.selectedIndices[0])&&void 0!==e?e:0,this.getFocusableListItemElements());this.$emit(c.i)},onHide(){this.$emit(c.h),this.nextFocusedItemIndex=null},onKeydown(e){const{code:t,target:s}=e,i=this.getFocusableListItemElements();if(i.length<1)return;let l=!0;const o=s.matches(".gl-listbox-search-input");if(t===c.j){if(o)return;this.focusItem(0,i)}else if(t===c.c){if(o)return;this.focusItem(i.length-1,i)}else if(t===c.b){if(o)return;this.searchable&&0===i.indexOf(s)?this.focusSearchInput():this.focusNextItem(e,i,-1)}else t===c.a?o?this.focusItem(0,i):this.focusNextItem(e,i,1):l=!1;l&&Object(d.k)(e)},getFocusableListItemElements(){var e;const t=null===(e=this.$refs.list)||void 0===e?void 0:e.querySelectorAll('[role="option"]');return Array.from(t||[])},focusNextItem(e,t,s){const{target:i}=e,o=t.indexOf(i),r=l()(o+s,0,t.length-1);this.focusItem(r,t)},focusItem(e,t){var s;this.nextFocusedItemIndex=e,null===(s=t[e])||void 0===s||s.focus()},focusSearchInput(){this.$refs.searchBox.focusInput()},onSelect(e,t){this.multiple?this.onMultiSelect(e.value,t):this.onSingleSelect(e.value,t)},isSelected(e){return this.selectedValues.some(t=>t===e.value)},isFocused(e){return this.nextFocusedItemIndex===this.flattenedOptions.indexOf(e)},onSingleSelect(e,t){t&&this.$emit("select",e),this.closeAndFocus()},onMultiSelect(e,t){t?this.$emit("select",[...this.selectedValues,e]):this.$emit("select",this.selectedValues.filter(t=>t!==e))},search(e){this.$emit("search",e)},onResetButtonClicked(){this.$emit("reset")},onSelectAllButtonClicked(){this.$emit("select-all")},closeAndFocus(){this.$refs.baseDropdown.closeAndFocus()},onIntersectionObserverAppear(){this.$emit("bottom-reached")},listboxItemMoreItemsAriaAttributes(e){return null===this.totalItems?{}:{"aria-setsize":this.totalItems,"aria-posinset":e+1}},observeScroll(){var e;const t={rootMargin:"8px",root:this.$refs.list,threshold:1};null===(e=this.scrollObserver)||void 0===e||e.disconnect();const s=new IntersectionObserver(e=>{e.forEach(e=>{var t;this[null===(t=e.target)||void 0===t?void 0:t.$__visibilityProp]=e.isIntersecting})},t),i=this.$refs["top-boundary"],l=this.$refs["bottom-boundary"];i&&(i.$__visibilityProp="topBoundaryVisible",s.observe(i)),l&&(l.$__visibilityProp="bottomBoundaryVisible",s.observe(l)),this.scrollObserver=s},isOption:C.b}};const k=y()({render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("gl-base-dropdown",{ref:"baseDropdown",attrs:{"aria-haspopup":"listbox","aria-labelledby":e.toggleAriaLabelledBy,block:e.block,"toggle-id":e.toggleId,"toggle-text":e.listboxToggleText,"toggle-class":e.toggleButtonClasses,"text-sr-only":e.textSrOnly,category:e.category,variant:e.variant,size:e.size,icon:e.icon,disabled:e.disabled,loading:e.loading,"no-caret":e.noCaret,placement:e.placement,offset:e.dropdownOffset,"fluid-width":e.fluidWidth,"positioning-strategy":e.positioningStrategy},on:e._d({},[e.$options.events.GL_DROPDOWN_SHOWN,e.onShow,e.$options.events.GL_DROPDOWN_HIDDEN,e.onHide]),scopedSlots:e._u([e.hasCustomToggle?{key:"toggle",fn:function(){return[e._t("toggle")]},proxy:!0}:null],null,!0)},[e._v(" "),e.headerText?s("div",{staticClass:"gl-display-flex gl-align-items-center gl-p-4! gl-min-h-8",class:e.$options.HEADER_ITEMS_BORDER_CLASSES},[s("div",{staticClass:"gl-flex-grow-1 gl-font-weight-bold gl-font-sm gl-pr-2",attrs:{id:e.headerId,"data-testid":"listbox-header-text"}},[e._v("\n      "+e._s(e.headerText)+"\n    ")]),e._v(" "),e.showResetButton?s("gl-button",{staticClass:"gl-focus-inset-border-2-blue-400! gl-flex-shrink-0 gl-font-sm! gl-px-2! gl-py-2! gl-w-auto! gl-m-0! gl-max-w-50p gl-text-overflow-ellipsis",attrs:{category:"tertiary","data-testid":"listbox-reset-button"},on:{click:e.onResetButtonClicked}},[e._v("\n      "+e._s(e.resetButtonLabel)+"\n    ")]):e._e(),e._v(" "),e.showSelectAllButton?s("gl-button",{staticClass:"gl-focus-inset-border-2-blue-400! gl-flex-shrink-0 gl-font-sm! gl-px-2! gl-py-2! gl-w-auto! gl-m-0! gl-max-w-50p gl-text-overflow-ellipsis",attrs:{category:"tertiary","data-testid":"listbox-select-all-button"},on:{click:e.onSelectAllButtonClicked}},[e._v("\n      "+e._s(e.showSelectAllButtonLabel)+"\n    ")]):e._e()],1):e._e(),e._v(" "),e.searchable?s("div",{class:e.$options.HEADER_ITEMS_BORDER_CLASSES},[s("gl-listbox-search-input",{ref:"searchBox",class:{"gl-listbox-topmost":!e.headerText},attrs:{"aria-owns":e.listboxId,"data-testid":"listbox-search-input",placeholder:e.searchPlaceholder},on:{input:e.search,keydown:[function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;t.preventDefault()},e.onKeydown]},model:{value:e.searchStr,callback:function(t){e.searchStr=t},expression:"searchStr"}}),e._v(" "),e.searching?s("gl-loading-icon",{staticClass:"gl-my-3",attrs:{"data-testid":"listbox-search-loader",size:"md"}}):e._e()],1):e._e(),e._v(" "),e.showList?s(e.listboxTag,{ref:"list",tag:"component",staticClass:"gl-new-dropdown-contents gl-new-dropdown-contents-with-scrim-overlay",class:e.listboxClasses,attrs:{id:e.listboxId,"aria-labelledby":e.listAriaLabelledBy||e.headerId||e.toggleId,role:"listbox",tabindex:"-1"},on:{keydown:e.onKeydown}},[s(e.itemTag,{tag:"component",staticClass:"top-scrim-wrapper",attrs:{"aria-hidden":"true","data-testid":"top-scrim"}},[s("div",{staticClass:"top-scrim",class:{"top-scrim-light":!e.hasHeader,"top-scrim-dark":e.hasHeader}})]),e._v(" "),s(e.itemTag,{ref:"top-boundary",tag:"component",attrs:{"aria-hidden":"true"}}),e._v(" "),e._l(e.items,(function(t,i){return[e.isOption(t)?[s("gl-listbox-item",e._b({key:t.value,attrs:{"data-testid":"listbox-item-"+t.value,"is-selected":e.isSelected(t),"is-focused":e.isFocused(t),"is-check-centered":e.isCheckCentered},on:{select:function(s){return e.onSelect(t,s)}}},"gl-listbox-item",e.listboxItemMoreItemsAriaAttributes(i),!1),[e._t("list-item",(function(){return[e._v("\n            "+e._s(t.text)+"\n          ")]}),{item:t})],2)]:[s("gl-listbox-group",{key:t.text,class:e.groupClasses(i),attrs:{name:t.text,"text-sr-only":t.textSrOnly},scopedSlots:e._u([e.$scopedSlots["group-label"]?{key:"group-label",fn:function(){return[e._t("group-label",null,{group:t})]},proxy:!0}:null],null,!0)},[e._v(" "),e._l(t.options,(function(t){return s("gl-listbox-item",{key:t.value,attrs:{"data-testid":"listbox-item-"+t.value,"is-selected":e.isSelected(t),"is-focused":e.isFocused(t),"is-check-centered":e.isCheckCentered},on:{select:function(s){return e.onSelect(t,s)}}},[e._t("list-item",(function(){return[e._v("\n              "+e._s(t.text)+"\n            ")]}),{item:t})],2)}))],2)]]})),e._v(" "),e.infiniteScrollLoading?s(e.itemTag,{tag:"component"},[s("gl-loading-icon",{staticClass:"gl-my-3",attrs:{"data-testid":"listbox-infinite-scroll-loader",size:"md"}})],1):e._e(),e._v(" "),e.showIntersectionObserver?s("gl-intersection-observer",{on:{appear:e.onIntersectionObserverAppear}}):e._e(),e._v(" "),s(e.itemTag,{ref:"bottom-boundary",tag:"component",attrs:{"aria-hidden":"true"}}),e._v(" "),s(e.itemTag,{tag:"component",staticClass:"bottom-scrim-wrapper",attrs:{"aria-hidden":"true","data-testid":"bottom-scrim"}},[s("div",{staticClass:"bottom-scrim",class:{"gl-rounded-0!":e.hasFooter}})])],2):e._e(),e._v(" "),e.announceSRSearchResults?s("span",{staticClass:"gl-sr-only",attrs:{"data-testid":"listbox-number-of-results","aria-live":"assertive"}},[e._t("search-summary-sr-only")],2):e.showNoResultsText?s("div",{staticClass:"gl-pl-7 gl-pr-5 gl-py-3 gl-font-base gl-text-gray-600",attrs:{"aria-live":"assertive","data-testid":"listbox-no-results-text"}},[e._v("\n    "+e._s(e.noResultsText)+"\n  ")]):e._e(),e._v(" "),e._t("footer")],2)},staticRenderFns:[]},void 0,$,void 0,!1,void 0,!1,void 0,void 0,void 0);t.a=k},ehHk:function(e,t,s){"use strict";var i=s("htNe"),l=s.n(i),o=s("Pyw5"),r=s.n(o);const n=l()(e=>new IntersectionObserver(e=>{e.forEach(e=>{e.target.$_gl_intersectionHandler(e)})},e||{}));const a={name:"GlIntersectionObserver",props:{options:{type:Object,required:!1,default:null}},mounted(){const e=n(this.options);this.$el.$_gl_intersectionHandler=e=>{this.$emit("update",e),e.isIntersecting?this.$emit("appear"):this.$emit("disappear")},this.$el.$_gl_intersectionObserver=e,e.observe(this.$el)},destroyed(){this.$el.$_gl_intersectionObserver.unobserve(this.$el),delete this.$el.$_gl_intersectionHandler,delete this.$el.$_gl_intersectionObserver},getObserver:n};const d=r()({render:function(){var e=this.$createElement;return(this._self._c||e)("div",[this._t("default")],2)},staticRenderFns:[]},void 0,a,void 0,!1,void 0,!1,void 0,void 0,void 0);t.a=d}}]);
//# sourceMappingURL=112.3d5e7f3b.chunk.js.map