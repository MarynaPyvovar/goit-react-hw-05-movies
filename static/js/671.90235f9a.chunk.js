"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[671],{776:function(n,t,e){e.d(t,{GZ:function(){return f},IV:function(){return v},g9:function(){return u},wH:function(){return Z},y_:function(){return l}});var r=e(861),c=e(757),a=e.n(c),i=e(44),o="1cf55529396093bd7165d94d7485d292",s="https://api.themoviedb.org/3/";function u(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(s,"trending/all/day?api_key=").concat(o));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(s,"search/movie?api_key=").concat(o,"&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(s,"movie/").concat(t,"?api_key=").concat(o));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(s,"movie/").concat(t,"/credits?api_key=").concat(o));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function Z(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(s,"movie/").concat(t,"/reviews?api_key=").concat(o));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},264:function(n,t,e){e.d(t,{FE:function(){return s},U3:function(){return u},y:function(){return p}});var r,c,a,i=e(168),o=e(444),s=o.ZP.div(r||(r=(0,i.Z)(["\n  padding: 20px;\n"]))),u=o.ZP.h1(c||(c=(0,i.Z)(["\n  margin: 0;\n  font-size: 40px;\n  color: #862d59;\n"]))),p=o.ZP.p(a||(a=(0,i.Z)(["\n  margin: 30px;\n  font-size: 20px;\n"])))},873:function(n,t,e){e.r(t),e.d(t,{default:function(){return F}});var r,c,a,i,o,s,u,p,l,d=e(861),f=e(885),h=e(757),v=e.n(h),x=e(791),Z=e(689),m=e(786),w=e(776),g=e(168),y=e(444),k=e(731),j=y.ZP.div(r||(r=(0,g.Z)(["\n  padding: 10px 20px;\n"]))),b=y.ZP.div(c||(c=(0,g.Z)(["\n  display: flex;\n"]))),P=y.ZP.img(a||(a=(0,g.Z)(["\n  width: 400px;\n"]))),_=y.ZP.div(i||(i=(0,g.Z)(["\n  padding: 20px;\n"]))),O=y.ZP.h1(o||(o=(0,g.Z)(["\n  margin: 0;\n  color: #862d59;\n"]))),G=y.ZP.h2(s||(s=(0,g.Z)(["\n  margin: 0;\n  color: #862d59;\n"]))),S=y.ZP.ul(u||(u=(0,g.Z)(["\n  display: flex;\n  list-style: none;\n  margin: 0;\n"]))),z=(0,y.ZP)(k.OL)(p||(p=(0,g.Z)(["\n  display: block;\n  width: fit-content;\n  padding: 10px;\n  color: black;\n\n  &.active {\n    font-size: larger;\n    color: #cc0066;\n  }\n\n  :hover:not(.active),\n  :focus-visible:not(.active) {\n    color: #cc0066;\n  }\n"]))),C=(0,y.ZP)(k.OL)(l||(l=(0,g.Z)(["\n  display: block;\n  width: fit-content;\n  padding: 10px;\n  color: black;\n\n  :hover,\n  :focus {\n    color: #cc0066;\n  }\n"]))),U=e(264),E=e(184),F=function(){var n,t,e=(0,Z.UO)().movieId,r=(0,x.useState)(null),c=(0,f.Z)(r,2),a=c[0],i=c[1],o=(0,x.useState)(null),s=(0,f.Z)(o,2),u=s[0],p=s[1],l=(0,Z.TH)();if((0,x.useEffect)((function(){var n=function(){var n=(0,d.Z)(v().mark((function n(){var t;return v().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return p(null),i(null),n.prev=2,n.next=5,(0,w.GZ)(e);case 5:t=n.sent,i(t),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),p(n.t0);case 12:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(){return n.apply(this,arguments)}}();n()}),[e]),!a)return null;var h=a.poster_path,g=a.title,y=a.vote_average,k=a.overview,F=a.genres,H=u||!a;return(0,E.jsxs)(j,{children:[H&&(0,E.jsx)(U.y,{children:"Oops! Something went wrong :( Please, choose another movie"}),(0,E.jsx)(C,{to:null!==(n=null===(t=l.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/",children:"Go back"}),(0,E.jsxs)(b,{children:[(0,E.jsx)(P,{src:"https://image.tmdb.org/t/p/w500".concat(h),alt:"Film poster"}),(0,E.jsxs)(_,{children:[(0,E.jsx)(O,{children:g}),(0,E.jsxs)("p",{children:["User score: ",y]}),(0,E.jsx)(G,{children:"Overwiev"}),(0,E.jsx)("p",{children:k}),(0,E.jsx)(G,{children:"Genres"}),(0,E.jsx)("p",{children:F.map((function(n){var t=n.name;return"".concat(t," ")}))})]})]}),(0,E.jsx)("h3",{children:"Additional information"}),(0,E.jsxs)(S,{children:[(0,E.jsx)(z,{to:"cast",children:"Cast"}),(0,E.jsx)(z,{to:"reviews",children:"Rewievs"})]}),(0,E.jsx)(x.Suspense,{fallback:(0,E.jsx)(m.a,{}),children:(0,E.jsx)(Z.j3,{})})]})}}}]);
//# sourceMappingURL=671.90235f9a.chunk.js.map