(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{108:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(25),u=n.n(a),i=n(16),o=n(8),s=n(46),l=n(6),b=n(9),j=n(31),d=n.n(j),f=n(1),h={activeLink:{color:"rgb(40, 23, 22)"}},O=function(){var e=Object(o.c)(b.c.getIsLoggedIn);return Object(f.jsxs)("nav",{children:[Object(f.jsx)(i.b,{to:"/",exact:!0,className:d.a.link,activeStyle:h.activeLink,children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),e&&Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(i.b,{to:"/contacts",exact:!0,className:d.a.link,activeStyle:h.activeLink,children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})})]})},g=n(27),p=n.n(g);function x(){var e=Object(o.b)(),t=Object(o.c)(b.c.getUsername);return Object(f.jsxs)("div",{className:p.a.container,children:[Object(f.jsxs)("span",{className:p.a.name,children:["\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c, ",t]}),Object(f.jsx)("button",{className:p.a.button,type:"button",onClick:function(){return e(b.a.logOut())},children:"\u0412\u044b\u0439\u0442\u0438"})]})}var v=n(33),k=n.n(v),m={activeLink:{color:"#E84A5F"}};function y(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(i.b,{to:"/register",exact:!0,className:k.a.link,activeStyle:m.activeLink,children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(f.jsx)(i.b,{to:"/login",exact:!0,className:k.a.link,activeStyle:m.activeLink,children:"\u041b\u043e\u0433\u0438\u043d"})]})}var C=n(48),_=n.n(C);function I(){var e=Object(o.c)(b.c.getIsLoggedIn);return Object(f.jsxs)("header",{className:_.a.header,children:[Object(f.jsx)(O,{}),e?Object(f.jsx)(x,{}):Object(f.jsx)(y,{})]})}var L=n(49),w=n.n(L);function U(e){var t=e.children;return Object(f.jsx)("div",{className:w.a.container,children:t})}var F=n(20),N=n(26),S=["children","redirectTo"];function T(e){var t=e.children,n=e.redirectTo,r=void 0===n?"/":n,c=Object(N.a)(e,S),a=Object(o.c)(b.c.getIsLoggedIn);return Object(f.jsx)(l.b,Object(F.a)(Object(F.a)({},c),{},{children:a?t:Object(f.jsx)(l.a,{to:r})}))}var z=["children","restricted","redirectTo"];function E(e){var t=e.children,n=e.restricted,r=void 0!==n&&n,c=e.redirectTo,a=void 0===c?"/":c,u=Object(N.a)(e,z),i=Object(o.c)(b.c.getIsLoggedIn)&&r;return Object(f.jsx)(l.b,Object(F.a)(Object(F.a)({},u),{},{children:i?Object(f.jsx)(l.a,{to:a}):t}))}var R=n(44),A=n.n(R),B=function(){return Object(f.jsx)(A.a,{type:"Rings",color:"#00BFFF",height:80,width:120})},M=Object(r.lazy)((function(){return n.e(6).then(n.bind(null,115))})),V=Object(r.lazy)((function(){return n.e(5).then(n.bind(null,116))})),W=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,117))})),q=Object(r.lazy)((function(){return n.e(3).then(n.bind(null,118))}));function J(){var e=Object(o.b)();return Object(r.useEffect)((function(){e(b.a.fetchCurrentUser())}),[e]),Object(f.jsxs)(U,{children:[Object(f.jsx)(I,{}),Object(f.jsx)(l.d,{children:Object(f.jsxs)(r.Suspense,{fallback:Object(f.jsx)(B,{}),children:[Object(f.jsx)(E,{exact:!0,path:"/",children:Object(f.jsx)(M,{})}),Object(f.jsx)(E,{exact:!0,path:"/register",restricted:!0,children:Object(f.jsx)(V,{})}),Object(f.jsx)(E,{exact:!0,path:"/login",redirectTo:"/todos",restricted:!0,children:Object(f.jsx)(W,{})}),Object(f.jsx)(T,{path:"/contacts",redirectTo:"/login",children:Object(f.jsx)(q,{})})]})})]})}var K,Y,Z=n(4),D=n(50),G=n.n(D),H=n(18),P=n(51),Q=n.n(P),X=n(5),$=n(52),ee=n(7),te=n(11),ne=Object(Z.d)([],(K={},Object(X.a)(K,te.j,(function(e,t){return t.payload})),Object(X.a)(K,te.c,(function(e,t){var n=t.payload;return[].concat(Object($.a)(e),[n])})),Object(X.a)(K,te.g,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),K)),re=Object(Z.d)(!1,(Y={},Object(X.a)(Y,te.i,(function(){return!0})),Object(X.a)(Y,te.j,(function(){return!1})),Object(X.a)(Y,te.h,(function(){return!1})),Object(X.a)(Y,te.b,(function(){return!0})),Object(X.a)(Y,te.c,(function(){return!1})),Object(X.a)(Y,te.a,(function(){return!1})),Object(X.a)(Y,te.f,(function(){return!0})),Object(X.a)(Y,te.g,(function(){return!1})),Object(X.a)(Y,te.e,(function(){return!1})),Y)),ce=Object(Z.d)("",Object(X.a)({},te.d,(function(e,t){return t.payload}))),ae=Object(ee.b)({items:ne,filter:ce,loading:re}),ue={key:"auth",storage:Q.a,whitelist:["token"]},ie=Object(Z.a)({reducer:{auth:Object(H.g)(ue,b.b),contacts:ae},middleware:function(e){return e({serializableCheck:{ignoredActions:[H.a,H.f,H.b,H.c,H.d,H.e]}}).concat(G.a)},devTools:!1}),oe=Object(H.h)(ie);n(106),n(107);u.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(o.a,{store:ie,children:Object(f.jsx)(s.a,{loading:null,persistor:oe,children:Object(f.jsx)(i.a,{children:Object(f.jsx)(J,{})})})})}),document.getElementById("root"))},11:function(e,t,n){"use strict";n.d(t,"i",(function(){return c})),n.d(t,"j",(function(){return a})),n.d(t,"h",(function(){return u})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return s})),n.d(t,"f",(function(){return l})),n.d(t,"g",(function(){return b})),n.d(t,"e",(function(){return j})),n.d(t,"d",(function(){return d}));var r=n(4),c=Object(r.b)("contacts/fetchContactsRequest"),a=Object(r.b)("contacts/fetchContactsSuccess"),u=Object(r.b)("contacts/fetchContactsError"),i=Object(r.b)("contacts/addContactRequest"),o=Object(r.b)("contacts/addContactSuccess"),s=Object(r.b)("contacts/addContactError"),l=Object(r.b)("contacts/deleteContactRequest"),b=Object(r.b)("contacts/deleteContactSuccess"),j=Object(r.b)("contacts/deleteContactError"),d=Object(r.b)("contacts/changeFilter")},27:function(e,t,n){e.exports={container:"UserMenu_container__3TKBT",name:"UserMenu_name__E42Uy",button:"UserMenu_button__3vY9f"}},31:function(e,t,n){e.exports={link:"Navigation_link__3x8g-"}},33:function(e,t,n){e.exports={link:"AuthNav_link__3z4lR"}},48:function(e,t,n){e.exports={header:"AppBar_header__3EZre"}},49:function(e,t,n){e.exports={container:"Container_container__13whM"}},9:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return h})),n.d(t,"b",(function(){return g}));var r=n(17),c=n.n(r),a=n(23),u=n(19),i=n.n(u),o=n(4);i.a.defaults.baseURL="https://connections-api.herokuapp.com";var s,l=function(e){i.a.defaults.headers.common.Authorization="Bearer ".concat(e)},b=function(){i.a.defaults.headers.common.Authorization=""},j=Object(o.c)("auth/register",function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r,a,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,i.a.post("/users/signup",t);case 4:return a=e.sent,u=a.data,l(u.token),e.abrupt("return",u);case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",r(e.t0.response.data));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,n){return e.apply(this,arguments)}}()),d=Object(o.c)("auth/login",function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r,a,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,i.a.post("/users/login",t);case 4:return a=e.sent,u=a.data,l(u.token),e.abrupt("return",u);case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",r(e.t0.message));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,n){return e.apply(this,arguments)}}()),f={register:j,logOut:Object(o.c)("auth/logout",function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,i.a.post("/users/logout");case 4:b(),e.next=10;break;case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",r(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}()),logIn:d,fetchCurrentUser:Object(o.c)("auth/refresh",function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r,a,u,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.getState(),null!==(a=r.auth.token)){e.next=5;break}return console.log("\u0422\u043e\u043a\u0435\u043d\u0430 \u043d\u0435\u0442, \u0443\u0445\u043e\u0434\u0438\u043c \u0438\u0437 fetchCurrentUser"),e.abrupt("return",n.rejectWithValue());case 5:return l(a),e.prev=6,e.next=9,i.a.get("/users/current");case 9:return u=e.sent,o=u.data,e.abrupt("return",o);case 14:return e.prev=14,e.t0=e.catch(6),e.abrupt("return",n.rejectWithValue(e.t0.message));case 17:case"end":return e.stop()}}),e,null,[[6,14]])})));return function(t,n){return e.apply(this,arguments)}}())},h={getIsLoggedIn:function(e){return e.auth.isLoggedIn},getUsername:function(e){return e.auth.user.name},getIsFetchingCurrent:function(e){return e.auth.isFetchingCurrentUser}},O=n(5),g=Object(o.e)({name:"auth",initialState:{user:{name:null,email:null},token:null,isLoggedIn:!1,isFetchingCurrentUser:!1},extraReducers:(s={},Object(O.a)(s,f.register.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0})),Object(O.a)(s,f.logIn.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0})),Object(O.a)(s,f.logOut.fulfilled,(function(e,t){e.user={name:null,email:null},e.token=null,e.isLoggedIn=!1})),Object(O.a)(s,f.fetchCurrentUser.fulfilled,(function(e,t){e.user=t.payload,e.isLoggedIn=!0,e.isFetchingCurrentUser=!1})),Object(O.a)(s,f.fetchCurrentUser.rejected,(function(e){e.isFetchingCurrentUser=!1})),s)}).reducer}},[[108,1,2]]]);
//# sourceMappingURL=main.d398a66f.chunk.js.map