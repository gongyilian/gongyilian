webpackJsonp([16],{P3L9:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("van-nav-bar",{attrs:{title:"分享","left-arrow":""},on:{"click-left":this.onClickLeft}}),this._v(" "),e("div",{staticClass:"recruit"},[e("img",{attrs:{src:this.tupian,alt:""}})])],1)},staticRenderFns:[]};var a=n("Mz/3")({name:"recruit",data:function(){return{tupian:""}},methods:{onClickLeft:function(){this.$router.push({name:"userInfo"})}},mounted:function(){var t=this;this.axios.get("/public/index.php/api/user/shengchenghuzhuerweima").then(function(e){1===e.state&&(t.tupian=e.tupian)})}},i,!1,function(t){n("foDm")},"data-v-19a35111",null);e.default=a.exports},foDm:function(t,e){}});