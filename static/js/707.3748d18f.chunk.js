"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[707],{426:function(n,t,e){e.d(t,{Df:function(){return i},TP:function(){return s},tx:function(){return h},z1:function(){return v},zv:function(){return l}});var r=e(861),a=e(757),c=e.n(a),u=e(243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"d2c1d24020287e7b546fb1f2d1960a86",language:"en-US"}});function i(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"/trending/movie/week",n.prev=1,n.next=4,u.get("/trending/movie/week");case 4:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 9:throw n.prev=9,n.t0=n.catch(1),n.t0;case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}function s(n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="/movie/".concat(t),n.prev=1,n.next=4,u.get(e);case 4:return r=n.sent,a=r.data,n.abrupt("return",a);case 9:throw n.prev=9,n.t0=n.catch(1),n.t0;case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}function l(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="/movie/".concat(t,"/credits"),n.prev=1,n.next=4,u.get(e);case 4:return r=n.sent,a=r.data,n.abrupt("return",a);case 9:throw n.prev=9,n.t0=n.catch(1),n.t0;case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}function h(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="/movie/".concat(t,"/reviews"),n.prev=1,n.next=4,u.get(e);case 4:return r=n.sent,a=r.data,n.abrupt("return",a);case 9:throw n.prev=9,n.t0=n.catch(1),n.t0;case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}function v(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="/search/movie?query=".concat(t),n.prev=1,n.next=4,u.get(e);case 4:return r=n.sent,a=r.data,n.abrupt("return",a);case 9:throw n.prev=9,n.t0=n.catch(1),n.t0;case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}},707:function(n,t,e){e.r(t),e.d(t,{default:function(){return v}});var r,a=e(861),c=e(439),u=e(757),i=e.n(u),o=e(426),s=e(791),p=e(87),l=e(689),f=e(168),h=e(444).ZP.div(r||(r=(0,f.Z)(["\n\n    padding-top: 20px;\n    padding-left: 15px;\n\n    h2{\n      font-family: 'Lato', 'Poppins',sans-serif;\n      text-align: center;\n    }\n\n    form {\n      margin-top: 20px;\n      margin-bottom: 30px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n\n    input{\n      width: 30%;\n      height: 30px;\n      font-size: 17px;\n      border-radius: 4px;\n      border: 1px solid #cacdd1;\n    }\n\n    &::placeholder {\n      font-size: 16px;\n    }\n\n    button{\n      width: 60px;\n      height: 30px;\n      background-color: #11b6dd;\n      color: white;\n      border: 0;\n      border-radius: 4px;\n      cursor: pointer;\n      margin-left:5px;\n\n      &:hover{\n        background-color: #551aa5;\n      }\n    }\n\n"]))),d=e(184),v=function(){var n=(0,s.useState)(null),t=(0,c.Z)(n,2),e=t[0],r=t[1],u=(0,s.useState)(!0),f=(0,c.Z)(u,2),v=f[0],x=f[1],m=(0,p.lr)(),g=(0,c.Z)(m,2),w=g[0],b=g[1],y=w.get("query"),k=(0,s.useState)((function(){return y||""})),Z=(0,c.Z)(k,2),j=Z[0],S=Z[1],z=(0,l.TH)();(0,s.useEffect)((function(){var n=function(){var n=(0,a.Z)(i().mark((function n(){var t,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,x(!0),n.next=4,(0,o.z1)(y);case 4:t=n.sent,e=t.results,r(e),x(!1),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:return n.prev=13,x(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[0,10,13,16]])})));return function(){return n.apply(this,arguments)}}();y&&n()}),[y]);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(h,{children:[(0,d.jsx)("h2",{children:"Search Movies"}),(0,d.jsxs)("form",{onSubmit:function(n){n.preventDefault(),b({query:j})},children:[(0,d.jsx)("input",{value:j,onChange:function(n){S(n.target.value)},name:"search",type:"text",placeholder:"Movie Search Here"}),(0,d.jsx)("button",{type:"submit",children:"Search"})]})]}),(0,d.jsx)("ul",{children:y?v?"Loading...":e.length>0?e.map((function(n){var t=n.title,e=n.id;return(0,d.jsx)("li",{children:(0,d.jsx)(p.rU,{state:{from:z},to:"/movies/".concat(e),children:t})},e)})):(0,d.jsx)("p",{children:"No movies with this title were found. Try entering another title"}):(0,d.jsx)("p",{})})]})}}}]);
//# sourceMappingURL=707.3748d18f.chunk.js.map