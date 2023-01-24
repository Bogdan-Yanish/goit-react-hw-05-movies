"use strict";(self.webpackChunkmovies=self.webpackChunkmovies||[]).push([[213],{4901:function(r,n,e){e.d(n,{O:function(){return v}});var t,c,o=e(1087),u=e(7689),a=e(168),i=e(6444),s=i.ZP.ul(t||(t=(0,a.Z)(["\n  justify-content: center;\n  flex-wrap: wrap;\n  margin: -10px;\n"]))),p=i.ZP.li(c||(c=(0,a.Z)(["\n    display:flex;\n    align-items:center;\n    gap:5px;\n    padding:8px;\n    boreder-radius:4px;\n    color:",";\n    font-weight:500;\n    font-size:24px;\n\n    // &.active {\n    //   background-color: ",";\n    //   color:white;\n    // }\n\n    :hover:not(.active),\n    :focus-visible:not(.active) {\n      background-color: ",";\n      color: ",";\n    }\n"])),(function(r){return r.theme.colors.text}),(function(r){return r.theme.colors.accent}),(function(r){return r.theme.colors.accent}),(function(r){return r.theme.colors.white})),f=e(184),v=function(r){var n=r.movies,e=(0,u.TH)();return(0,f.jsx)(s,{children:n.map((function(r){var n=r.id,t=r.title,c=r.name;return(0,f.jsx)(p,{children:(0,f.jsx)(o.rU,{to:"/movies/".concat(n),state:{from:e},children:null!==t&&void 0!==t?t:c})},n)}))})}},8213:function(r,n,e){e.r(n),e.d(n,{default:function(){return f}});var t,c=e(9439),o=e(2791),u=e(4390),a=e(4901),i=e(168),s=e(6444).ZP.h2(t||(t=(0,i.Z)(["\n  margin-bottom: 20px;\n  text-align: center;\n  text-transform: uppercase;\n  color: ",";\n"])),(function(r){return r.theme.colors.accent})),p=e(184);function f(){var r=(0,o.useState)([]),n=(0,c.Z)(r,2),e=n[0],t=n[1];return(0,o.useEffect)((function(){(0,u.z5)().then((function(r){var n=r.results;console.log(n),t(n)}))}),[]),(0,p.jsxs)("div",{children:[(0,p.jsx)(s,{children:"Trending movies"}),(0,p.jsx)(a.O,{movies:e})]})}},4390:function(r,n,e){e.d(n,{Hu:function(){return l},V0:function(){return f},mU:function(){return p},rP:function(){return v},z5:function(){return s}});var t=e(5861),c=e(7757),o=e.n(c),u=e(3263),a=e(7596),i=u.Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"58e3b7ceceb51aa1e95a679f50fa8e58"}}),s=function(){var r=(0,t.Z)(o().mark((function r(){var n,e;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i.get("/trending/movie/day");case 3:return n=r.sent,e=n.data,r.abrupt("return",e);case 8:r.prev=8,r.t0=r.catch(0),a.Am.error("Sorry error server!",{});case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(){return r.apply(this,arguments)}}(),p=function(){var r=(0,t.Z)(o().mark((function r(n){var e;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i.get("/movie/".concat(n));case 3:return e=r.sent,r.abrupt("return",e);case 7:r.prev=7,r.t0=r.catch(0),a.Am.error("Sorry error server!",{});case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(n){return r.apply(this,arguments)}}(),f=function(){var r=(0,t.Z)(o().mark((function r(n){var e;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i.get("/search/movie",{params:n});case 3:return e=r.sent,r.abrupt("return",e);case 7:r.prev=7,r.t0=r.catch(0),a.Am.error("Sorry error server!",{});case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(n){return r.apply(this,arguments)}}(),v=function(){var r=(0,t.Z)(o().mark((function r(n){var e;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i.get("/movie/".concat(n,"/credits"));case 3:return e=r.sent,r.abrupt("return",e);case 7:r.prev=7,r.t0=r.catch(0),a.Am.error("Sorry error server!",{});case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(n){return r.apply(this,arguments)}}(),l=function(){var r=(0,t.Z)(o().mark((function r(n){var e;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i.get("/movie/".concat(n,"/reviews"));case 3:return e=r.sent,r.abrupt("return",e);case 7:r.prev=7,r.t0=r.catch(0),a.Am.error("Sorry error server!",{});case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(n){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=213.ea408033.chunk.js.map