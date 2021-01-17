(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{518:function(e,t,n){"use strict";t.a={scrollTo:function(e,t){if(t){var n=t.querySelector(e);n&&n.scrollIntoView()}else console.error("Utils - scrollTo: Provide HTML document object!")}}},520:function(e,t,n){var content=n(529);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(80).default)("2e5e3efe",content,!0,{sourceMap:!1})},528:function(e,t,n){"use strict";n(520)},529:function(e,t,n){(t=n(79)(!1)).push([e.i,".node{stroke:currentColor}.node:hover{--text-opacity:1;color:#dd6b20;color:rgba(221,107,32,var(--text-opacity));stroke-width:2;stroke:currentColor}",""]),e.exports=t},530:function(e,t,n){"use strict";n.r(t);var l=n(518),o={methods:{scrollTo:function(e){l.a.scrollTo(e,document)}}},r=n(2),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"relative bg-gray-50 overflow-hidden"},[n("main",{staticClass:"my-16 mx-auto max-w-7xl px-4 sm:my-24"},[n("div",{staticClass:"text-center"},[e._m(0),e._v(" "),n("p",{staticClass:"mt-3 max-w-md mx-auto text-base text-black sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"},[e._v("\n        Visualize data about books and authors, that you are interested in.\n        Discover new pieces, authors and their series. ✌\n      ")]),e._v(" "),n("div",{staticClass:"mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8"},[n("Button",{staticClass:"w-full",attrs:{type:"primary",size:"lg"},on:{click:function(t){return e.scrollTo("#visualizer")}}},[e._v("Go ahead")]),e._v(" "),n("Button",{staticClass:"w-full mt-3 sm:mt-0 sm:ml-3",attrs:{type:"secondary",size:"lg"},on:{click:function(t){return e.scrollTo("#visualizer")}}},[e._v("Learn more")])],1)]),e._v(" "),n("div",{staticClass:"mt-32"},[n("Icon",{staticClass:"h-16 w-16 text-primary-light mx-auto animate-bounce",attrs:{name:"chevron-double-down"}})],1)])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{staticClass:"text-4xl tracking-tight font-extrabold text-secondary sm:text-5xl md:text-6xl"},[t("span",{staticClass:"block text-primary xl:inline"},[this._v("Linked Read")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{Button:n(107).default,Icon:n(169).default})},531:function(e,t,n){"use strict";n.r(t);n(43);var l=n(4),o=n(518),r=n(33),c={data:function(){return{nodes:[],links:[],isLoading:!1,detailNode:null}},methods:{searchByQuery:function(e){var t=this;return Object(l.a)(regeneratorRuntime.mark((function n(){var l,r,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(l=e.query,r=e.selectedSearchType,t.nodes=[],t.links=[],t.isLoading=!0,c=null,"book"!==r){n.next=11;break}return n.next=8,t.$fetcher.getBooksByQuery(l);case 8:c=n.sent,n.next=19;break;case 11:if("author"!==r){n.next=17;break}return n.next=14,t.$fetcher.getAuthorsByQuery(l);case 14:c=n.sent,n.next=19;break;case 17:return t.isLoading=!1,n.abrupt("return");case 19:c&&(t.nodes=c.nodes,t.links=c.links),t.isLoading=!1,o.a.scrollTo("#visualizator",document);case 22:case"end":return n.stop()}}),n)})))()},handleNodeSelect:function(e){var t=this;return Object(l.a)(regeneratorRuntime.mark((function n(){var l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.type===r.a.book){n.next=2;break}return n.abrupt("return");case 2:return t.detailNode=null,t.isLoading=!0,n.next=6,t.$fetcher.getBookDetail(e.id);case 6:l=n.sent,t.detailNode=l,t.isLoading=!1,o.a.scrollTo("#detail",document);case 10:case"end":return n.stop()}}),n)})))()}}},d=n(2),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col md:flex-row w-full justify-between"},[n("div",{staticClass:"min-h-16 w-full md:w-1/3 overflow-y-auto md:mr-8 pb-4 md:pb-8 space-y-8"},[n("div",{staticClass:"w-full mt-4 md:mt-6 flex flex-col items-center md:flex-row justify-center"},[n("Search",{staticClass:"w-full",on:{search:e.searchByQuery}})],1),e._v(" "),n("Loader",{directives:[{name:"show",rawName:"v-show",value:e.isLoading,expression:"isLoading"}],staticClass:"mt-2"}),e._v(" "),n("div",{attrs:{id:"detail"}},[n("transition",{attrs:{"enter-active-class":"duration-500 ease-out","enter-class":"opacity-0 scale-95","enter-to-class":"opacity-400 scale-100","leave-active-class":"duration-200 ease-in","leave-class":"opacity-400 scale-100","leave-to-class":"opacity-0 scale-95"}},[e.detailNode?n("DetailCard",{attrs:{node:e.detailNode}}):e._e()],1)],1)],1),e._v(" "),n("div",{staticClass:"w-full md:w-2/3 py-4 md:py-8 h-full md:h-screen",attrs:{id:"visualizator"}},[n("NetworkCanvas",{staticClass:"h-full",attrs:{nodes:e.nodes,links:e.links},on:{nodeSelect:e.handleNodeSelect}})],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Search:n(532).default,Loader:n(536).default,DetailCard:n(533).default,NetworkCanvas:n(534).default})},532:function(e,t,n){"use strict";n.r(t);var l={data:function(){return{query:"",selectedSearchType:"book"}}},o=n(2),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{staticClass:"flex flex-col space-y-4",on:{submit:function(t){return t.preventDefault(),e.$emit("search",{query:e.query,selectedSearchType:e.selectedSearchType})}}},[n("label",{staticClass:"text-lg font-light",attrs:{for:"search"}},[e._v("\n    Search your book or author\n  ")]),e._v(" "),n("div",{staticClass:"relative inline-flex items-center"},[n("div",{staticClass:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"},[n("Icon",{staticClass:"h-5 w-5 text-gray-400",attrs:{name:"search"}})],1),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],staticClass:"block w-full max-w-sm pl-10 mr-4 pr-3 py-2 border border-transparent shadow rounded-md leading-5 bg-white placeholder-secondary focus:outline-none focus:border-primary-light sm:text-sm",attrs:{id:"search",name:"search",placeholder:"book"===e.selectedSearchType?"Norwegian wood":"Murakami",type:"search",required:""},domProps:{value:e.query},on:{input:function(t){t.target.composing||(e.query=t.target.value)}}}),e._v(" "),n("Button",{attrs:{type:"secondary"}},[e._v(" Search ")])],1),e._v(" "),n("div",{staticClass:"flex flex-wrap"},[n("div",{staticClass:"inline-flex items-center flex-no-wrap space-x-1 p-1"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedSearchType,expression:"selectedSearchType"}],attrs:{type:"radio",value:"book"},domProps:{checked:e._q(e.selectedSearchType,"book")},on:{change:function(t){e.selectedSearchType="book"}}}),e._v(" "),n("label",{staticClass:"text-sm text-black text-opacity-75"},[e._v("Search book")])]),e._v(" "),n("div",{staticClass:"inline-flex items-center flex-no-wrap space-x-1 p-1"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedSearchType,expression:"selectedSearchType"}],attrs:{type:"radio",value:"author"},domProps:{checked:e._q(e.selectedSearchType,"author")},on:{change:function(t){e.selectedSearchType="author"}}}),e._v(" "),n("label",{staticClass:"text-sm text-black text-opacity-75"},[e._v("Search author")])])])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Icon:n(169).default,Button:n(107).default})},533:function(e,t,n){"use strict";n.r(t);n(521),n(524),n(38),n(35),n(85);var l=n(33),o={props:{node:{type:Object,required:!0}},computed:{book:function(){var e,t,n,o;return this.node.type===l.a.book?{iri:this.node.iri,title:this.node.title.value,description:this.node.description.value,authors:this.node.authors.value.split(",").map((function(a){return{iri:a.split(" - ")[0],name:a.split(" - ")[1]}})),isbn:null===(e=this.node.isbn)||void 0===e?void 0:e.value,pages:null===(t=this.node.pages)||void 0===t?void 0:t.value,publisher:null===(n=this.node.publisher)||void 0===n?void 0:n.value,genre:null===(o=this.node.genre)||void 0===o?void 0:o.value}:null}}},r=n(2),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col rounded-lg shadow-lg overflow-hidden"},[n("div",{staticClass:"flex-1 bg-white p-4 md:p-6 flex flex-col justify-between"},[n("div",{staticClass:"flex-1"},[n("p",{staticClass:"text-base md:text-lg font-medium text-primary"},e._l(e.book.authors,(function(t){return n("a",{key:t.iri,staticClass:"mr-2 hover:text-primary-light transition-colors duration-150",attrs:{href:t.iri,target:"_blank",rel:"nofollow noopener"}},[e._v("\n          "+e._s(t.name)+"\n        ")])})),0),e._v(" "),n("div",{staticClass:"block mt-2",attrs:{href:"#"}},[n("p",{staticClass:"text-lg md:text-xl font-medium text-black"},[n("a",{staticClass:"hover:text-secondary transition-colors duration-150",attrs:{href:e.book.iri,target:"_blank",rel:"nofollow noopener"}},[e._v("\n            "+e._s(e.book.title)+"\n          ")])]),e._v(" "),n("p",{staticClass:"mt-3 text-sm md:text-base text-black text-opacity-75"},[e._v("\n          "+e._s(e.book.description)+"\n        ")])])]),e._v(" "),n("div",{staticClass:"mt-6 flex items-center"},[n("ul",{staticClass:"w-full divide-y divide-secondary-light text-sm text-black text-opacity-50"},[e.book.isbn?n("li",{staticClass:"py-4 sm:px-0"},[e._v("ISBN: "+e._s(e.book.isbn))]):e._e(),e._v(" "),e.book.genre?n("li",{staticClass:"py-4 sm:px-0"},[e._v("\n          Genre: "+e._s(e.book.genre)+"\n        ")]):e._e(),e._v(" "),e.book.pages?n("li",{staticClass:"py-4 sm:px-0"},[e._v("\n          Pages: "+e._s(e.book.pages)+"\n        ")]):e._e(),e._v(" "),e.book.publisher?n("li",{staticClass:"py-4 sm:px-0"},[e._v("\n          Publisher:\n          "),n("a",{staticClass:"text-black text-opacity-50 hover:text-opacity-100 transition-all duration-150",attrs:{href:e.book.publisher,target:"_blank",rel:"nofollow noopener"}},[e._v(e._s(e.book.publisher))])]):e._e(),e._v(" "),n("li",{staticClass:"py-4 sm:px-0"},[n("a",{staticClass:"text-black text-opacity-50 hover:text-opacity-100 transition-all duration-150 inline-flex items-center flex-no-wrap",attrs:{href:e.book.iri,target:"_blank",rel:"nofollow noopener"}},[e._v("\n            Dbpedia "),n("Icon",{staticClass:"w-5 h-6 ml-1",attrs:{name:"external-link"}})],1)])])])])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Icon:n(169).default})},534:function(e,t,n){"use strict";n.r(t);n(275),n(81),n(35),n(83),n(84);var l=n(525),o=n.n(l),r=(n(526),3e3),c=24,d=12,f=!1,v={components:{D3Network:o.a},props:{nodes:{type:Array,default:function(){return[]}},links:{type:Array,default:function(){return[]}}},data:function(){return{netSettings:{}}},computed:{options:function(){return{nodeSize:this.netSettings.nodeSize,fontSize:this.netSettings.fontSize,force:this.netSettings.force,nodeLabels:!0,linkLabels:this.netSettings.linkLabels}}},created:function(){this.resetSettings()},methods:{resetSettings:function(){this.$set(this.netSettings,"nodeSize",c),this.$set(this.netSettings,"fontSize",d),this.$set(this.netSettings,"force",r),this.$set(this.netSettings,"linkLabels",f)},handleNodeClick:function(e,t){t._cssClass.includes("selected")||this.unselectNode(),t=Object.assign(t,{_cssClass:"".concat(t._cssClass," selected")}),this.$set(this.nodes,t.index,t),this.$emit("nodeSelect",t)},unselectNode:function(){var e=this.nodes.find((function(e){return e._cssClass.includes("selected")}));e&&this.$set(this.nodes,e.index,Object.assign(e,{_cssClass:"".concat(e._cssClass.replace("selected",""))}))}}},m=(n(528),n(2)),component=Object(m.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"relative border-2 border-secondary-light rounded-md space-y-4 overflow-hidden"},[n("div",{staticClass:"px-4 py-6 border-b border-secondary-light flex justify-between items-end flex-wrap"},[n("div",[n("label",[e._v("Node size")]),e._v(" "),n("div",{staticClass:"flex items-center space-x-2"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.netSettings.nodeSize,expression:"netSettings.nodeSize"}],attrs:{type:"range",min:"10",max:"100"},domProps:{value:e.netSettings.nodeSize},on:{__r:function(t){return e.$set(e.netSettings,"nodeSize",t.target.value)}}}),e._v(" "),n("span",[e._v(e._s(e.netSettings.nodeSize))])])]),e._v(" "),n("div",[n("label",[e._v("Font size")]),e._v(" "),n("div",{staticClass:"flex items-center space-x-2"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.netSettings.fontSize,expression:"netSettings.fontSize"}],attrs:{type:"range",min:"10",max:"36"},domProps:{value:e.netSettings.fontSize},on:{__r:function(t){return e.$set(e.netSettings,"fontSize",t.target.value)}}}),e._v(" "),n("span",[e._v(e._s(e.netSettings.fontSize))])])]),e._v(" "),n("div",[n("label",[e._v("Force")]),e._v(" "),n("div",{staticClass:"flex items-center space-x-2"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.netSettings.force,expression:"netSettings.force"}],attrs:{type:"range",min:"1000",max:"5000"},domProps:{value:e.netSettings.force},on:{__r:function(t){return e.$set(e.netSettings,"force",t.target.value)}}}),e._v(" "),n("span",[e._v(e._s(e.netSettings.force))])])]),e._v(" "),n("div",[n("label",[e._v("Show link labels")]),e._v(" "),n("div",{staticClass:"flex items-center space-x-2"},[n("Toggle",{attrs:{open:e.netSettings.linkLabels},on:{"update:open":function(t){return e.$set(e.netSettings,"linkLabels",t)}}})],1)]),e._v(" "),n("div",[n("div",{staticClass:"flex items-center space-x-2"},[n("Button",{attrs:{type:"secondary",title:"Reset custom settings"},on:{click:e.resetSettings}},[e._v("\n          Reset settings\n        ")])],1)])]),e._v(" "),n("D3Network",{ref:"net",attrs:{"net-nodes":e.nodes,"net-links":e.links,options:e.options},on:{"node-click":e.handleNodeClick}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Toggle:n(535).default,Button:n(107).default})},535:function(e,t,n){"use strict";n.r(t);var l={props:{open:{type:Boolean,default:!1}}},o=n(2),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"flex-shrink-0 group relative rounded-full inline-flex items-center justify-center h-5 w-10 cursor-pointer focus:outline-none",attrs:{type:"button","aria-pressed":"false"},on:{click:function(t){return e.$emit("update:open",!e.open)}}},[n("span",{staticClass:"sr-only"},[e._v("Toggle")]),e._v(" "),n("span",{staticClass:"absolute w-full h-4 mx-auto rounded-full transition-colors ease-in-out duration-200",class:e.open?"bg-primary":"bg-secondary-light",attrs:{"aria-hidden":"true"}}),e._v(" "),n("span",{staticClass:"absolute left-0 inline-block h-5 w-5 border border-white rounded-full bg-white shadow transform transition-all ease-in-out duration-200",class:e.open?"translate-x-5":"translate-x-0",attrs:{"aria-hidden":"true"}})])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Button:n(107).default})},536:function(e,t,n){"use strict";n.r(t);var l=n(2),component=Object(l.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"inline-flex items-center px-3 py-2 bg-primary text-white text-sm rounded-md"},[t("Icon",{staticClass:"animate-spin -ml-1 mr-3 h-5 w-5",attrs:{name:"load-circle"}}),this._v(" "),this._t("default",[t("span",[this._v("Loading")])])],2)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Icon:n(169).default})},537:function(e,t,n){"use strict";n.r(t);var l={},o=n(2),component=Object(o.a)(l,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("Hero",{staticClass:"sm:h-screen"}),this._v(" "),t("section",{staticClass:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",attrs:{id:"visualizer"}},[t("Visualizator")],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Hero:n(530).default,Visualizator:n(531).default})}}]);