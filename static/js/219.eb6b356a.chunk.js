"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[219],{4219:function(r,e,n){n.r(e),n.d(e,{default:function(){return w}});var t,a,c,u,o=n(9439),i=n(7689),s=n(2791),p=n(4390),f=n(168),l=n(6444),v=l.ZP.ul(t||(t=(0,f.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n  justify-content: center;\n  margin: -3px;\n"]))),m=l.ZP.li(a||(a=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: baseline;\n  max-width: 130px;\n  margin: 3px;\n  flex-grow: 1;\n"]))),h=l.ZP.img(c||(c=(0,f.Z)(["\n  display: block;\n  max-width: 100%;\n  height: 100%;\n  margin-bottom: 3px;\n"]))),d=l.ZP.p(u||(u=(0,f.Z)(["\n  display: block;\n  text-align: center;\n  font-size: 13px;\n  font-weight: 500;\n  margin-top: 5px;\n  color: ",";\n"])),(function(r){return r.theme.colors.text})),x=n(184);function w(){var r=(0,s.useState)([]),e=(0,o.Z)(r,2),n=e[0],t=e[1],a=(0,i.UO)().movieId;return(0,s.useEffect)((function(){(0,p.rP)(a).then((function(r){t(r.data.cast)}))}),[a]),n?(0,x.jsx)("div",{children:(0,x.jsx)(v,{children:n.length>0&&n.map((function(r){var e=r.credit_id,n=r.profile_path,t=r.name;return(0,x.jsxs)(m,{children:[(0,x.jsx)(h,{src:n?"https://image.tmdb.org/t/p/w500"+n:"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",alt:""}),(0,x.jsx)(d,{children:t})]},e)}))})}):null}},4390:function(r,e,n){n.d(e,{Hu:function(){return v},V0:function(){return f},mU:function(){return p},rP:function(){return l},z5:function(){return s}});var t=n(5861),a=n(7757),c=n.n(a),u=n(3263),o=n(7596),i=u.Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"58e3b7ceceb51aa1e95a679f50fa8e58"}}),s=function(){var r=(0,t.Z)(c().mark((function r(){var e,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i.get("/trending/movie/day");case 3:return e=r.sent,n=e.data,r.abrupt("return",n);case 8:r.prev=8,r.t0=r.catch(0),o.Am.error("Sorry error server!",{});case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(){return r.apply(this,arguments)}}(),p=function(){var r=(0,t.Z)(c().mark((function r(e){var n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i.get("/movie/".concat(e));case 3:return n=r.sent,r.abrupt("return",n);case 7:r.prev=7,r.t0=r.catch(0),o.Am.error("Sorry error server!",{});case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),f=function(){var r=(0,t.Z)(c().mark((function r(e){var n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i.get("/search/movie",{params:e});case 3:return n=r.sent,r.abrupt("return",n);case 7:r.prev=7,r.t0=r.catch(0),o.Am.error("Sorry error server!",{});case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),l=function(){var r=(0,t.Z)(c().mark((function r(e){var n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i.get("/movie/".concat(e,"/credits"));case 3:return n=r.sent,r.abrupt("return",n);case 7:r.prev=7,r.t0=r.catch(0),o.Am.error("Sorry error server!",{});case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),v=function(){var r=(0,t.Z)(c().mark((function r(e){var n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i.get("/movie/".concat(e,"/reviews"));case 3:return n=r.sent,r.abrupt("return",n);case 7:r.prev=7,r.t0=r.catch(0),o.Am.error("Sorry error server!",{});case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=219.eb6b356a.chunk.js.map