"use strict";(self.webpackChunkmovies=self.webpackChunkmovies||[]).push([[553],{3229:function(n,r,e){e.d(r,{A:function(){return i},k:function(){return o}});var t=e(5667),o={duration:1200,delay:200,smooth:"linear",isDynamic:!0},i=t.NY},5553:function(n,r,e){e.r(r),e.d(r,{default:function(){return D}});var t,o,i,c,a,s,u,l,p,d,f,x,m,h=e(9439),v=e(2791),g=e(7689),b=e(4390),w=e(168),j=e(1087),Z=e(6444),y=Z.ZP.div(t||(t=(0,w.Z)(["\n  max-width: 768px;\n"]))),k=Z.ZP.li(o||(o=(0,w.Z)(["\n  color: ",";\n  text-transform: uppercase;\n  font-weight: 700;\n  font-size: 14px;\n  margin-bottom: 20px;\n"])),(function(n){return n.theme.colors.title})),P=Z.ZP.h2(i||(i=(0,w.Z)(["\n  color: ",";\n  text-transform: uppercase;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px;\n"])),(function(n){return n.theme.colors.title})),A=(0,Z.ZP)(j.OL)(c||(c=(0,w.Z)(["\n  display:block;\n  width: 100px;\n  text-align: center;\n  padding: 8px 16px;\n  border-radius: 25px;\n  text-decoration: none;\n  color: black;\n  font-weight: 500;\n  background-color: lightgrey;\n  margin-bottom: 10px;\n\n  &.active {\n    color: white;\n    background-color: ",";\n  }\n\n  :hover:not(.active),\n  :focus-visible:not(.active) {\n    background-color: ",";\n    color: ",";\n  }\n}\n"])),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.white})),_=Z.ZP.ul(a||(a=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  text-transform: uppercase;\n  font-weight: 500;\n  font-size: 12px;\n  color: ",";\n"])),(function(n){return n.theme.colors.title})),S=e(184),U=function(n){var r=n.movieGenres;return(0,S.jsx)(_,{children:r.map((function(n){return(0,S.jsx)("li",{children:n.name},n.id)}))})},z=Z.ZP.div(s||(s=(0,w.Z)(["\n  display: flex;\n  max-width: 1200px;\n  margin-bottom: 20px;\n  color: ",";\n  border-bottom: 1px solid ",";\n"])),(function(n){return n.theme.colors.text}),(function(n){return n.theme.colors.border})),C=Z.ZP.img(u||(u=(0,w.Z)(["\n  display: block;\n  width: 350px;\n  margin-right: 20px;\n  margin-bottom: 20px;\n"]))),B=Z.ZP.h2(l||(l=(0,w.Z)(["\n  margin-bottom: 10px;\n  text-transform: uppercase;\n  color: ",";\n"])),(function(n){return n.theme.colors.title})),G=Z.ZP.div(p||(p=(0,w.Z)(["\n  margin-bottom: 10px;\n  color: ",";\n"])),(function(n){return n.theme.colors.title})),N=Z.ZP.h3(d||(d=(0,w.Z)(["\n  font-size: 12px;\n  text-transform: uppercase;\n  color: ",";\n"])),(function(n){return n.theme.colors.title})),O=Z.ZP.p(f||(f=(0,w.Z)(["\n  width: 75px;\n  text-align: center;\n  padding: 5px;\n  border-radius: 25px;\n  text-decoration: none;\n  color: black;\n  font-weight: 500;\n  background-color: lightgrey;\n  margin-top: 5px;\n"]))),E=function(n){var r,e,t,o=n.movie,i=o.overview,c=o.poster_path,a=o.title,s=o.name,u=o.original_title,l=o.original_name,p=o.release_date,d=o.vote_average,f=o.genres,x=null!==(r=null!==(e=null!==(t=null!==a&&void 0!==a?a:s)&&void 0!==t?t:u)&&void 0!==e?e:l)&&void 0!==r?r:"No data",m=p.slice(0,4),h=Math.ceil(10*d)+"%";return(0,S.jsxs)(z,{children:[(0,S.jsx)(C,{src:c?"https://image.tmdb.org/t/p/w500"+c:"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",alt:""}),(0,S.jsxs)("div",{children:[(0,S.jsxs)(B,{children:[x,"  ","(",m,")"]}),(0,S.jsxs)(G,{children:[(0,S.jsx)(N,{children:"User Score:"}),(0,S.jsx)(O,{children:h})]}),(0,S.jsxs)(G,{children:[(0,S.jsx)(N,{children:"Overview:"})," ",i]}),(0,S.jsxs)(G,{children:[(0,S.jsx)(N,{children:"Genres:"}),(0,S.jsx)(U,{movieGenres:f})]})]})]})},H=e(6355),I=(0,Z.ZP)(j.rU)(x||(x=(0,w.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 180px;\n  margin-bottom: 40px;\n  padding: 5px;\n  color: ",";\n  text-transform: uppercase;\n  background-color: lightgrey;\n  border-radius: 25px;\n  box-shadow: 2px 2px 5px #babecc, -5px -5px 10px #ffffff73;\n  transition: color 450ms ease-in-out;\n\n  :hover {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.text}),(function(n){return n.theme.colors.accent})),L=(0,Z.ZP)(H.x_l)(m||(m=(0,w.Z)(["\n  width: 20px;\n  height: 20px;\n  margin-right: 10px;\n"]))),R=e(8033),T=e(3229);function D(){var n,r,e=(0,g.UO)().movieId,t=(0,v.useState)(),o=(0,h.Z)(t,2),i=o[0],c=o[1],a=null!==(n=null===(r=(0,g.TH)().state)||void 0===r?void 0:r.from)&&void 0!==n?n:"/";return(0,v.useEffect)((function(){(0,b.mU)(e).then((function(n){c(n.data)}))}),[e]),(0,v.useEffect)((function(){T.A.scrollToBottom(T.k)}),[]),i?(0,S.jsxs)(y,{children:[(0,S.jsxs)(I,{to:a,children:[(0,S.jsx)(L,{}),"Back"]}),i&&(0,S.jsxs)("div",{children:[(0,S.jsx)(E,{movie:i}),(0,S.jsx)(P,{children:"Addictional information:"}),(0,S.jsxs)("ul",{style:{display:"flex",justifyContent:"space-evenly",marginBottom:"10px"},children:[(0,S.jsx)(k,{children:(0,S.jsx)(A,{to:"cast",state:{from:a},children:"Cast"})}),(0,S.jsx)(k,{children:(0,S.jsx)(A,{to:"reviews",state:{from:a},children:"Reviews"})})]}),(0,S.jsx)(v.Suspense,{fallback:(0,S.jsx)(R.c,{}),children:(0,S.jsx)(g.j3,{})})]})]}):null}},4390:function(n,r,e){e.d(r,{Hu:function(){return f},V0:function(){return p},mU:function(){return l},rP:function(){return d},z5:function(){return u}});var t=e(5861),o=e(7757),i=e.n(o),c=e(3263),a=e(7596),s=c.Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"58e3b7ceceb51aa1e95a679f50fa8e58"}}),u=function(){var n=(0,t.Z)(i().mark((function n(){var r,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.get("/trending/movie/day");case 3:return r=n.sent,e=r.data,n.abrupt("return",e);case 8:n.prev=8,n.t0=n.catch(0),a.Am.error("Sorry error server!",{});case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(i().mark((function n(r){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.get("/movie/".concat(r));case 3:return e=n.sent,n.abrupt("return",e);case 7:n.prev=7,n.t0=n.catch(0),a.Am.error("Sorry error server!",{});case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(r){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(i().mark((function n(r){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.get("/search/movie",{params:r});case 3:return e=n.sent,n.abrupt("return",e);case 7:n.prev=7,n.t0=n.catch(0),a.Am.error("Sorry error server!",{});case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(r){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(i().mark((function n(r){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.get("/movie/".concat(r,"/credits"));case 3:return e=n.sent,n.abrupt("return",e);case 7:n.prev=7,n.t0=n.catch(0),a.Am.error("Sorry error server!",{});case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(i().mark((function n(r){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.get("/movie/".concat(r,"/reviews"));case 3:return e=n.sent,n.abrupt("return",e);case 7:n.prev=7,n.t0=n.catch(0),a.Am.error("Sorry error server!",{});case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(r){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=553.913a0349.chunk.js.map