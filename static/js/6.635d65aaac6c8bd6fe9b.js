webpackJsonp([6],{"2NXm":function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=s("UIuv"),n=s.n(e),a=s("VUb2"),o=s.n(a),c={name:"index",data:function(){return{info:{},btnLoading:!1,videoShow:!1,show:!1,nowShouyi:0}},computed:{lq:function(){return this.info.suanliaaa?0==this.info.shifoulingqu?"开采中":"领取收益":"没有矿机"},ggIcon:function(){return o.a}},methods:{stop:function(){this.$refs.video.pause()},has:function(){var t=this;window.timer=setInterval(function(i){var s=new Date,e=60*s.getHours()*60+60*s.getMinutes()+s.getSeconds();t.nowShouyi=t.info.mingrishouyi/86400*e},1e3)},getData:function(){var t=this;return new n.a(function(i){t.axios.get("/public/index.php/api/user/index1").then(function(s){i(),1===s.state&&(t.info=s)})})},receive:function(){var t=this;this.info.suanliaaa&&0!=this.info.shifoulingqu&&(this.btnLoading=!0,this.axios.get("/public/index.php/api/user/collect").then(function(i){t.btnLoading=!1,1===i.state&&(t.$toast("领取成功"),t.getData())}))},beforeClose:function(t,i){i()}},mounted:function(){var t=this;this.has(),this.getData().then(function(i){localStorage.indexDialog&&t.$nextTick(function(i){t.show=!0,localStorage.removeItem("indexDialog")})})},beforeRouteLeave:function(t,i,s){clearInterval(window.timer),window.timer=null,s()}},A={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"index"},[e("div",[e("div",{staticClass:"head"},[e("van-row",[e("van-col",{attrs:{span:"12"}},[e("div",{staticClass:"h-item"},[e("img",{staticClass:"suanli",attrs:{src:s("ao4o"),alt:""}}),t._v(" "),e("span",[t._v("目前算力 "+t._s(t.info.suanli))])])]),t._v(" "),e("van-col",{attrs:{span:"10",offset:"1"}},[e("div",{staticClass:"h-item"},[e("img",{staticClass:"icon",attrs:{src:s("YxCX"),alt:""}}),t._v(" "),e("span",[t._v("挖矿难度 "+t._s(t.info.nandu))])])])],1),t._v(" "),e("van-row",{staticClass:"m-t"},[e("van-col",{attrs:{span:"24"}},[e("div",{staticClass:"h-item notice"},[e("van-notice-bar",{attrs:{mode:"link",text:t.info.honggao,"left-icon":t.ggIcon},on:{click:function(i){t.$router.push({name:"notice"})}}})],1)])],1),t._v(" "),t.info.shipinkaiguan?e("p",{staticClass:"text-center text-white",staticStyle:{display:"flex","justify-content":"center","align-items":"center"},on:{click:function(i){t.videoShow=!0}}},[e("van-icon",{attrs:{name:"play",size:"20px"}}),t._v(" "),e("span",{staticClass:"m-l-sm"},[t._v("2分钟快速了解公益链")])],1):t._e(),t._v(" "),e("van-popup",{on:{"click-overlay":t.stop},model:{value:t.videoShow,callback:function(i){t.videoShow=i},expression:"videoShow"}},[e("video",{ref:"video",attrs:{width:"352",height:"264",controls:""}},[e("source",{attrs:{src:"/public/media/index.948d56d.mp4",type:'video/mp4; codecs="avc1.42E01E, mp4a.40.2"'}})])])],1),t._v(" "),e("div",{staticClass:"body"},[e("div",{staticClass:"img-box"},[e("img",{ref:"indexImg",attrs:{src:s("HrCB"),alt:""}})]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"dsq m-t-n-xxl"},["0"!=t.info.shifoulingqu?[t._v("\n            待收取PPB\n          ")]:[t._v("\n            当前产出PPB\n          ")],t._v(" "),e("div",{staticClass:"text-white"},["0"==t.info.shifoulingqu?[t._v("\n              "+t._s(t.nowShouyi.toFixed(4))+"\n            ")]:[t._v("\n              "+t._s(t.info.shouyi)+"\n            ")]],2)],2),t._v(" "),e("div",{staticClass:" text-center  m-t"},[e("van-button",{staticClass:"get-btn",attrs:{size:"large",type:"primary",loading:t.btnLoading,disabled:"0"==t.info.shifoulingqu},on:{click:t.receive}},[t._v("\n            "+t._s(t.lq)+"\n          ")])],1),t._v(" "),e("p",{staticClass:"text-muted text-center"},[t._v("PPB请在24小时内收取,过期会自动消失")])])])]),t._v(" "),e("van-dialog",{attrs:{"before-close":t.beforeClose},model:{value:t.show,callback:function(i){t.show=i},expression:"show"}},[e("div",{staticClass:"padder padder-v text-center"},[e("div",{staticClass:"m-b-sm"},[t._v("提示")]),t._v(" "),e("div",{staticStyle:{"font-size":"16px","line-height":"23px"},domProps:{innerHTML:t._s(t.info.gonggao)}})])])],1)},staticRenderFns:[]};var r=s("Mz/3")(c,A,!1,function(t){s("6ir5")},null,null);i.default=r.exports},"6ir5":function(t,i){},HrCB:function(t,i,s){t.exports=s.p+"static/img/2.5D@3x.5aa2137.png"},VUb2:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAhCAYAAADOHBvaAAAEFUlEQVRYR8WXeeilYxTHP8cuZM2+79kl2UIksmQt/9i3bP+QbYY0SlG2SKJMsoWxZcsyDFkijD/INJTMGGvZMjHGevQx5/31unPv/d17f+Kp2729933O95zzfM853ycYcmXmcsARwFHAt8CjwCsR8dswpmKYlzNzGWBT4CTgGOBH4E7gvoj4ZhhbAwFn5irAusBmwO7A4cDWwB/A68ADwLvA18BXEbFgPCf6AmfmksA6wL7APsD25cBqwFJl/BfgC2Ae8B7wIvCG2YiIP3s50BM4M1cAdgEOA/YCjNoznQt8CRiV+1cCNgY2ApYvB2YA04FZEWFWFltdgTNzWWA34ATgQOAn4E3gJeCdirAhk2TbAtizsrJTOfVInf+cbuCLAWemz7YDzilQz+3hSuHciPiu0/3MNO1rAlsV4w8t4t0DTIuIzzv3/AO4QNcuxp5Vnk8FnjK9EZH9SFMObAscBwju2d9gpiJiYXtvJ7Bk2hs4F9gBeAy4aRDQxmhmLg3sDJwH7GqpAXcBpnzM8U5gz+s04Owiya3AcxHx63jl0f6/iHkmcHqR8Tbg2badMeBK8wbAhcAhwEPA7Z2eDuJApXw/4Hxgc+AO4OaIkKR/rzawad4RuLjIdT3wYPvlQUB9p4LYsghqhzOIKRExvxewdSuwNXl5pbkvoXo5k5my/BTAlD8PTIqI73sBW4OXABsCl0aEXWiklZl2t+OLqNb+FOCjhmCdqW6AjVhgO9BIKzNXL2D7wYfAVcDbTTPpB3xZRLwwEuqic26ALU2Br7b7/dfAH/xfEY8LbDlNKlb/m6nuC7xEzdvJpTIEtgxGWpm5Rk03u+DsSvXMbmdsj90DuAhYC5g8QVavWsPCni25rgTeasRBm9WCHVteWuhXRIRKYqSVmYqCow2gBMQ1jtaI+HmsZVaLc5LYp52pjsGpETFnJNRF5eTRKSYuKK32RNn8tA28ckVrU/8MuBZ4rfFuAuDNbD+xhIFN5OWI+D1KJ9uxLHTli2rjuohQeUxolVg0g/Z/ddvdgKpknsCOwiOBU0sx3GJTH1ag9xkW6jd1uMPCYJzN0wU+uNK8f90K7gU+8Zg6jHlmCoL5nRKohL6q1NHauc9navEzgG2A+41c4BsBh7bn8biUr81tdeJvBZ1CT+2sjFlYpLQnm85NAMHV0g243+71HTEkmxeAaQLPKpWgZ4pyS8ma7lSgRvwD8H5pMQ2sCBwEmLVGV7cjbn671/lsUxFjhsBP14N2ZnsJfcW7m18FngFsEgKrNsyGSrLb3nYGvGPNFtjwm+uIUetdt6VBpevJwPoF5D6NzgSe9N7Upwy8UfjxIrBgoEtbY6xm7AFVdusV2ezDKhX7sPeogdZQwFosSeOVxTM1tR8X2cYU5CDIfwEjOZMAYhY9vQAAAABJRU5ErkJggg=="},YxCX:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAYAAAC3g3x9AAACFElEQVRIS6XUwYrTQBgH8G8yk5VFcS0sXbYUJVDZPXioeBJB9JD0uNsnyOYJ7Cv4BLVP4OQJ7HnT2RQPehGWghdvnkWwiHuwZuaTTLfdTZPMpt1AIKcf//nPl4/ABo/74xtHSX1E2hUNZ3idIOt67s+vHBXzQTJQkgZnTYdvDLq/JjoZKAYpmAB1xvvO941A9/cXjnKeLAUxoRPReNxePWGlI7t/PnNQto8ptgTZQDRavbVB9+ITB7T0MVfArmi0MheS4saE7t+PHHRndH7MawmTizu1seNMKyf0ZjFHtcCyICo2EfXDXH+lCb3kjIMiPupki/cqISo2EPXDXH+FoCdPOWCazIJSUNpdsXeQ6y8DvsL4wRYm7wHhGNACE5jQu7VxLd/fEtSYSmIAmPdyA7gYbH1Jl0M+/7YHJIfdBpT0LdGdAfEz179BQiVZGLd2T0hHjt4h4JvbgXYonL0T42C7s7gNip4Xjc1Kh6F42NSYEezM4p5StG8G7VA0Hy0xI+j9i4co6VEZSCQLo/1WBjODs3iKiu4UgUTZYVQ/yGGlYNofATgv+lNQsoHYfVL425WCHSl6KK3+KgiSBlHtaWblV9o2XjIagqJHWdAOovvPjJhh24gpKGvnCrSC6N7zG7FC0MXTNpHp/F1uG6RBtP2iElYIdmTUQ7T6Gkw7235ZGSveh8noGIB8QGUF0dbrtbAU/A9JwHtRQV/6iAAAAABJRU5ErkJggg=="},ao4o:function(t,i){t.exports="data:image/png;base64,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"}});