webpackJsonp([25],{hbou:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a={name:"bill",data:function(){return{loading:!0,inCome:[],out:[]}},methods:{onClickLeft:function(){this.$router.push({name:"userInfo"})},getData:function(){var t=this;this.axios.get("/public/index.php/api/user/zhangdan1").then(function(n){t.loading=!1,1===n.state&&(t.inCome=JSON.parse(n.data_shouru),t.out=JSON.parse(n.data_zhichu))})}},mounted:function(){this.getData()}},i={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"bill"},[e("van-nav-bar",{attrs:{title:"账单","left-arrow":""},on:{"click-left":t.onClickLeft}}),t._v(" "),t.loading?e("p",{staticClass:"flex-center"},[e("van-loading")],1):t._e(),t._v(" "),t.loading?t._e():e("van-tabs",[e("van-tab",{attrs:{title:"收入"}},[e("van-cell-group",t._l(t.inCome,function(n,a){return e("van-cell",{key:a},[e("p",[t._v("类型："+t._s(n.leixingmingcheng))]),t._v(" "),e("p",[t._v("数量："),e("span",{staticClass:"text-danger"},[t._v("+"+t._s(n.jine))])]),t._v(" "),e("p",[t._v("时间："+t._s(n.shijian))])])}))],1),t._v(" "),e("van-tab",{attrs:{title:"支出"}},[e("van-cell-group",t._l(t.out,function(n,a){return e("van-cell",{key:a},[e("p",[t._v("类型："+t._s(n.leixingmingcheng))]),t._v(" "),e("p",[t._v("数量："),e("span",{staticClass:"text-success"},[t._v("-"+t._s(n.jine))])]),t._v(" "),e("p",[t._v("时间："+t._s(n.shijian))])])}))],1)],1)],1)},staticRenderFns:[]};var s=e("Mz/3")(a,i,!1,function(t){e("iu5K")},null,null);n.default=s.exports},iu5K:function(t,n){}});