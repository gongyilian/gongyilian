webpackJsonp([17],{"7xTL":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("3Cg3"),n={name:"see",data:function(){return{loading:!0,id:"",data:{}}},methods:{onClickLeft:function(){this.$router.push({name:"deal",query:{active:2}})},getData:function(){var t=this;this.axios.get("/public/index.php/api/trade/querenxinxin/id/"+this.id).then(function(e){t.loading=!1,1===e.state&&(t.data=JSON.parse(e.data),t.data.error&&t.$dialog.alert({title:"提示",message:"交易成功，感谢您的一路相伴!"}).then(function(){t.$router.push({name:"deal",query:{active:2}})}))})},sure:function(){var t=this;this.$dialog.confirm({title:"警告",message:"确认收货后PPB将会自动打入买家账户，是否确定？"}).then(function(){t.axios.get("/public/index.php/api/trade/queren_aaala/id/"+t.id).then(function(e){1===e.state&&(t.$toast(e.msg),t.$router.push({name:"deal",query:{active:2}}))})}).catch(function(){})},orderError:function(){var t=this;this.$dialog.confirm({title:"警告",message:"是否冻结订单并要求客服介入？"}).then(function(){t.axios.get("/public/index.php/api/trade/dong_jie/id/"+t.id).then(function(e){1===e.state&&(t.$toast(e.msg),t.$router.push({name:"deal",query:{active:2}}))})}).catch(function(){})},imgPreview:function(){Object(i.b)([this.data.tupian])}},mounted:function(){this.id=this.$route.query.id,this.getData()}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"see"},[a("van-nav-bar",{attrs:{title:"确认订单","left-arrow":""},on:{"click-left":t.onClickLeft}}),t._v(" "),t.loading?a("p",{staticClass:"flex-center"},[a("van-loading")],1):t._e(),t._v(" "),t.loading?t._e():a("div",[a("div",{staticClass:"text-center"},[a("p",[t._v("买方打款信息")]),t._v(" "),a("div",{staticClass:"imgBox"},[a("img",{attrs:{src:t.data.tupian,alt:""},on:{click:t.imgPreview}})]),t._v(" "),a("div",{staticClass:"text-muted"},[t._v("点击查看大图")])]),t._v(" "),a("div",{staticClass:"text-center m-t"},[a("van-button",{attrs:{size:"large",type:"primary"},on:{click:t.sure}},[t._v("确认")]),t._v(" "),a("van-button",{staticClass:"m-t",attrs:{size:"large",type:"danger"},on:{click:t.orderError}},[t._v("订单有异议")])],1)])],1)},staticRenderFns:[]};var r=a("Mz/3")(n,s,!1,function(t){a("L+m7")},null,null);e.default=r.exports},"L+m7":function(t,e){}});