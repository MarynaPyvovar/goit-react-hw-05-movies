"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[953],{776:function(n,t,e){e.d(t,{GZ:function(){return f},IV:function(){return v},g9:function(){return u},wH:function(){return Z},y_:function(){return l}});var r=e(861),c=e(757),a=e.n(c),i=e(44),s="1cf55529396093bd7165d94d7485d292",o="https://api.themoviedb.org/3/";function u(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(o,"trending/all/day?api_key=").concat(s));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(o,"search/movie?api_key=").concat(s,"&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(o,"movie/").concat(t,"?api_key=").concat(s));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(o,"movie/").concat(t,"/credits?api_key=").concat(s));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function Z(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(o,"movie/").concat(t,"/reviews?api_key=").concat(s));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},264:function(n,t,e){e.d(t,{FE:function(){return o},U3:function(){return u},y:function(){return p}});var r,c,a,i=e(168),s=e(444),o=s.ZP.div(r||(r=(0,i.Z)(["\n  padding: 20px;\n"]))),u=s.ZP.h1(c||(c=(0,i.Z)(["\n  margin: 0;\n  font-size: 40px;\n  color: #862d59;\n"]))),p=s.ZP.p(a||(a=(0,i.Z)(["\n  margin: 30px;\n  font-size: 20px;\n"])))},953:function(n,t,e){e.r(t),e.d(t,{default:function(){return U}});var r,c,a,i,s,o,u,p=e(861),l=e(885),d=e(757),f=e.n(d),h=e(791),v=e(731),x=e(689),Z=e(786),m=e(776),w=e(168),y=e(444),k=y.ZP.div(r||(r=(0,w.Z)(["\n  display: flex;\n"]))),g=y.ZP.img(c||(c=(0,w.Z)(["\n  width: 400px;\n"]))),j=y.ZP.div(a||(a=(0,w.Z)(["\n  padding: 10px;\n"]))),b=y.ZP.h1(i||(i=(0,w.Z)(["\n  color: #862d59;\n"]))),_=y.ZP.h2(s||(s=(0,w.Z)(["\n  color: #862d59;\n"]))),P=y.ZP.ul(o||(o=(0,w.Z)(["\n  display: flex;\n  list-style: none;\n"]))),G=(0,y.ZP)(v.OL)(u||(u=(0,w.Z)(["\n  display: block;\n  width: fit-content;\n  padding: 5px;\n  color: black;\n\n  :hover,\n  :focus {\n    color: #cc0066;\n  }\n"]))),O=e(264),S=e(184),U=function(){var n,t,e=(0,x.UO)().movieId,r=(0,h.useState)(null),c=(0,l.Z)(r,2),a=c[0],i=c[1],s=(0,h.useState)(null),o=(0,l.Z)(s,2),u=o[0],d=o[1],w=(0,x.TH)();if((0,h.useEffect)((function(){var n=function(){var n=(0,p.Z)(f().mark((function n(){var t;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return d(null),i(null),n.prev=2,n.next=5,(0,m.GZ)(e);case 5:t=n.sent,i(t),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),d(n.t0);case 12:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(){return n.apply(this,arguments)}}();n()}),[e]),!a)return null;var y=a.poster_path,U=a.title,C=a.vote_average,F=a.overview,z=a.genres,E=u||!a;return(0,S.jsxs)(S.Fragment,{children:[E&&(0,S.jsx)(O.y,{children:"Oops! Something went wrong :( Please, choose another movie"}),(0,S.jsx)(v.rU,{to:null!==(n=null===(t=w.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/",children:"Go back"}),(0,S.jsxs)(k,{children:[(0,S.jsx)(g,{src:"https://image.tmdb.org/t/p/w500".concat(y),alt:"Film poster"}),(0,S.jsxs)(j,{children:[(0,S.jsx)(b,{children:U}),(0,S.jsxs)("p",{children:["User score: ",C]}),(0,S.jsx)(_,{children:"Overwiev"}),(0,S.jsx)("p",{children:F}),(0,S.jsx)(_,{children:"Genres"}),(0,S.jsx)("p",{children:z.map((function(n){var t=n.name;return"".concat(t," ")}))})]})]}),(0,S.jsx)("h3",{children:"Additional information"}),(0,S.jsxs)(P,{children:[(0,S.jsx)(G,{to:"cast",children:"Cast"}),(0,S.jsx)(G,{to:"reviews",children:"Rewievs"})]}),(0,S.jsx)(h.Suspense,{fallback:(0,S.jsx)(Z.a,{}),children:(0,S.jsx)(x.j3,{})})]})}}}]);
//# sourceMappingURL=953.9ea108bd.chunk.js.map