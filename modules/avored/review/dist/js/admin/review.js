!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=4)}([function(e,t,n){"use strict";function r(e,t,n,r,o,i,s,a){var u,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),s?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},c._ssrRegister=u):o&&(u=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),u)if(c.functional){c._injectStyles=u;var d=c.render;c.render=function(e,t){return u.call(t),d(e,t)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,u):[u]}return{exports:e,options:c}}n.d(t,"a",(function(){return r}))},function(e,t){e.exports=function(e){return null==e}},,,function(e,t,n){e.exports=n(5)},function(e,t,n){AvoRed.initialize((function(e){e.component("catalog-review",n(7).default)}))},,function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),i=[{title:"Name",dataIndex:"name",key:"name",sorter:!0},{title:"Email",dataIndex:"email",key:"email",sorter:!0},{title:"Action",key:"action",scopedSlots:{customRender:"action"},sorter:!1,width:"10%"}],s={props:["baseUrl","reviews"],data:function(){return{columns:i}},methods:{handleTableChange:function(e,t,n){this.banners.sort((function(e,t){var r=n.columnKey,i=n.order;if(o()(e[r])&&(e[r]=""),o()(t[r])&&(t[r]=""),"ascend"===i){if(e[r]<t[r])return-1;if(e[r]>t[r])return 1}if("descend"===i){if(e[r]>t[r])return-1;if(e[r]<t[r])return 1}return 0}))},getApprovedUrl:function(e){return this.baseUrl+"/review/"+e.id+"/approved"},clickOnApproved:function(e,t){var n=this.baseUrl+"/review/"+e.id+"/approved",r=this;this.$confirm({title:"Do you Want to approved this review",okType:"success",onOk:function(){axios.post(n).then((function(e){!0===e.data.success&&(r.$notification.success({key:"review.approved.success",message:e.data.message}),window.location.reload())})).catch((function(e){r.$notification.error({key:"review.approved.error",message:e.message})}))},onCancel:function(){}})}}},a=n(0),u=Object(a.a)(s,void 0,void 0,!1,null,null,null);t.default=u.exports}]);