"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[473],{473:function(n,t,e){e.r(t),e.d(t,{default:function(){return s}});var r=e(885),i=e(791),o=e(739),c=e(595),a=e(656),u=e(184);function s(){var n=(0,i.useState)(null),t=(0,r.Z)(n,2),e=t[0],s=t[1],p=(0,o.s0)(),l=(0,o.TH)(),f=(0,o.UO)().movieID;if((0,i.useEffect)((function(){(0,c.Rg)(f).then(s)}),[f]),e)return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(a.zx,{onClick:function(){var n,t;p(null!==(n=null===l||void 0===l||null===(t=l.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/")},children:"Go back"}),(0,u.jsx)(a.Ee,{src:"https://image.tmdb.org/t/p/w300".concat(e.poster_path),alt:""}),(0,u.jsx)(a.Dx,{children:e.original_title}),(0,u.jsx)(a.Ju,{children:"Overview:"}),(0,u.jsx)(a.uN,{children:e.overview}),(0,u.jsx)(a.a9,{children:"Genres:"}),(0,u.jsx)(a.aV,{children:e.genres.map((function(n){var t=n.id,e=n.name;return(0,u.jsx)(a.HC,{children:e},t)}))}),(0,u.jsx)(a.A,{to:"cast",children:"Cast"}),(0,u.jsx)(a.A,{to:"reviews",children:"Reviews"}),(0,u.jsx)(o.j3,{})]})}},656:function(n,t,e){e.d(t,{A:function(){return D},Cn:function(){return g},Dx:function(){return k},Ee:function(){return w},HC:function(){return A},Ju:function(){return P},a9:function(){return z},aV:function(){return C},ds:function(){return H},jK:function(){return R},os:function(){return j},su:function(){return b},uN:function(){return _},zx:function(){return E}});var r,i,o,c,a,u,s,p,l,f,d,x,h,m,v=e(168),y=e(731),Z=e(444),b=Z.ZP.h2(r||(r=(0,v.Z)(["\n  display: flex;\n  justify-content: center;\n  font-size: 25px;\n  color: #60c15c;\n"]))),g=Z.ZP.ul(i||(i=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  align-items: center;\n  gap: 10px;\n  list-style: none;\n"]))),j=(0,Z.ZP)(y.rU)(o||(o=(0,v.Z)(["\n  color: #60c15c;\n  text-decoration: none;\n  cursor: pointer;\n"]))),k=Z.ZP.h2(c||(c=(0,v.Z)(["\n  display: flex;\n  justify-content: center;\n  font-size: 25px;\n  color: #60c15c;\n"]))),w=Z.ZP.img(a||(a=(0,v.Z)(["\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 20px;\n"]))),P=Z.ZP.h3(u||(u=(0,v.Z)(["\n  display: flex;\n  justify-content: center;\n\n  font-size: 20px;\n  color: #b2d129;\n"]))),_=Z.ZP.p(s||(s=(0,v.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-left: 20px;\n  font-size: 16px;\n  color: #242424;\n"]))),z=Z.ZP.h3(p||(p=(0,v.Z)(["\n  display: flex;\n  justify-content: center;\n  font-size: 20px;\n  margin-left: 20px;\n  color: #b2d129;\n"]))),C=Z.ZP.ul(l||(l=(0,v.Z)(["\n  display: flex;\n  justify-content: center;\n  list-style: none;\n\n  border-bottom: 4px solid #1da585;\n"]))),A=Z.ZP.li(f||(f=(0,v.Z)(["\n  padding: 10px;\n"]))),D=(0,Z.ZP)(y.rU)(d||(d=(0,v.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px;\n  font-size: 18px;\n\n  text-decoration: none;\n  color: #009975;\n"]))),E=Z.ZP.button(x||(x=(0,v.Z)(["\n  margin-left: 20px;\n  color: #024024;\n  background-color: #1bde87;\n\n  border: 2px solid #5cabc1;\n  border-radius: 4px;\n  cursor: pointer;\n  &:hover {\n    background-color: #a41bde;\n  }\n"]))),H=Z.ZP.ul(h||(h=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  list-style: none;\n"]))),R=Z.ZP.ul(m||(m=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  list-style: none;\n"])))},595:function(n,t,e){e.d(t,{Av:function(){return x},CD:function(){return p},Rg:function(){return f},V1:function(){return m},YK:function(){return u}});var r=e(861),i=e(757),o=e.n(i),c=e(388),a="894a5fcb5eb3af426933275e70f0cd83";function u(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("https://api.themoviedb.org/3/trending/movie/day",{params:{api_key:a}});case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("https://api.themoviedb.org/3/search/movie?",{params:{api_key:a,query:t,include_adult:!1}});case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("https://api.themoviedb.org/3/movie/".concat(t),{params:{api_key:a}});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("https://api.themoviedb.org/3/movie/".concat(t,"/credits"),{params:{api_key:a}});case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("https://api.themoviedb.org/3/movie/".concat(t,"/reviews"),{params:{api_key:a}});case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=473.c487b706.chunk.js.map