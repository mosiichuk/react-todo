(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{113:function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},125:function(e,t,a){e.exports=a(139)},130:function(e,t,a){},137:function(e,t,a){},138:function(e,t,a){},139:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),o=a.n(c),s=(a(130),a(74)),u=a(38),l=a(14),i=a(181),m=a(186),p=a(182),d=a(114),f=a(178),g=a(179),h=a(187),v=a(180),b=a(6),E=a.n(b),w=a(13),k=a(34),y=a(18),x=a(174),j=a(185),O=a(176),I=a(177),S=a(70),L=a(71);function P(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return"https://api-nodejs-todolist.herokuapp.com"+e}function T(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=localStorage.getItem("user"),a=localStorage.getItem("token"),n=t&&a?"Bearer "+a:"",r=e?"application/json":"";return{"Content-Type":r,Authorization:n}}var q=function(){function e(){Object(S.a)(this,e)}return Object(L.a)(e,[{key:"doGet",value:function(){var e=Object(w.a)(E.a.mark((function e(){var t,a,n=arguments;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:"",e.next=3,fetch(P(t),{headers:T()});case 3:return a=e.sent,e.next=6,a.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"doPost",value:function(){var e=Object(w.a)(E.a.mark((function e(){var t,a,n,r=arguments;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",a=r.length>1&&void 0!==r[1]?r[1]:{},e.next=4,fetch(P(t),{method:"POST",headers:T(!0),body:JSON.stringify(a)});case 4:return n=e.sent,e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"doDelete",value:function(){var e=Object(w.a)(E.a.mark((function e(){var t,a,n=arguments;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:"",e.next=3,fetch(P(t),{method:"DELETE",headers:T()});case 3:return a=e.sent,e.next=6,a.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"doPut",value:function(){var e=Object(w.a)(E.a.mark((function e(){var t,a,n,r=arguments;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",a=r.length>1&&void 0!==r[1]?r[1]:{},e.next=4,fetch(P(t),{method:"PUT",headers:T(!0),body:JSON.stringify(a)});case 4:return n=e.sent,e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}(),R=new q,N=function(){function e(){Object(S.a)(this,e)}return Object(L.a)(e,[{key:"registerUser",value:function(){var e=Object(w.a)(E.a.mark((function e(){var t,a,n,r,c=arguments;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:{},e.next=3,R.doPost("/user/register",t);case 3:a=e.sent,n=a.user,r=a.token,localStorage.setItem("token",r),localStorage.setItem("user",n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"loginUser",value:function(){var e=Object(w.a)(E.a.mark((function e(){var t,a,n,r,c=arguments;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:{},e.next=3,R.doPost("/user/login",t);case 3:a=e.sent,n=a.user,r=a.token,localStorage.setItem("token",r),localStorage.setItem("user",n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"logoutUser",value:function(){var e=Object(w.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.doPost("/user/logout");case 2:e.sent.success&&(localStorage.removeItem("token"),localStorage.removeItem("user"));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}(),A=new N,U={name:"",email:"",password:"",acceptedTerms:!1},C=k.b({name:k.c().max(15,"Must be 15 characters or less").required("Required"),email:k.c().email("Invalid email addresss").required("Required"),acceptedTerms:k.a().required("Required").oneOf([!0],"You must accept the terms and conditions."),password:k.c().min(8,"Password should contain at least 8 characters").required("Required"),repeatPassword:k.c().min(8,"Password should contain at least 8 characters").required("Required").test("passwords-match","Passwords must match",(function(e){return this.parent.password===e}))}),D=Object(l.f)((function(e){var t=e.changeLoggedIn,a=e.history;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Registration form"),r.a.createElement(y.d,{initialValues:U,validationSchema:C,onSubmit:function(){var e=Object(w.a)(E.a.mark((function e(n,r){var c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=r.setSubmitting,e.next=3,A.registerUser(n);case 3:c(!0),t(!0),a.push("/");case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},(function(e){e.values;var t=e.errors,a=e.isSubmitting,n=e.isValidating,c=e.touched;return r.a.createElement(y.c,null,r.a.createElement(m.a,{mb:2},r.a.createElement(x.a,null,r.a.createElement(y.b,{as:j.a,name:"name",label:"First Name",error:c.name&&!!t.name}),r.a.createElement(y.a,{component:O.a,name:"name",error:!0})),r.a.createElement(x.a,null,r.a.createElement(y.b,{as:j.a,name:"email",type:"email",label:"Email",error:c.email&&!!t.email}),r.a.createElement(y.a,{component:O.a,name:"email",error:!0})),r.a.createElement(x.a,null,r.a.createElement(y.b,{as:j.a,name:"password",type:"password",label:"Password",error:c.password&&!!t.password}),r.a.createElement(y.a,{component:O.a,name:"password",error:!0})),r.a.createElement(x.a,null,r.a.createElement(y.b,{as:j.a,name:"repeatPassword",type:"password",label:"Repeat Password",error:c.repeatPassword&&!!t.repeatPassword}),r.a.createElement(y.a,{component:O.a,name:"repeatPassword",error:!0})),r.a.createElement(x.a,null,r.a.createElement(y.b,{name:"acceptedTerms",type:"checkbox",label:"Accept Terms And Conditions",error:c.acceptedTerms&&!!t.acceptedTerms}),r.a.createElement(y.a,{component:O.a,name:"acceptedTerms",error:!0}))),r.a.createElement(I.a,{variant:"contained",color:"primary",type:"submit",disabled:a||n},"Submit"))})))})),F={email:"",password:""},J=k.b({email:k.c().email("Invalid email address").required("Required"),password:k.c().required("Required")}),V=new N,G=Object(l.f)((function(e){var t=e.history,a=e.changeLoggedIn;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Login form"),r.a.createElement(y.d,{initialValues:F,validationSchema:J,onSubmit:function(){var e=Object(w.a)(E.a.mark((function e(n,r){var c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=r.setSubmitting,e.next=3,V.loginUser(n);case 3:c(!0),a(!0),t.push("/");case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},(function(e){e.values;var t=e.errors,a=e.isSubmitting,n=e.isValidating,c=e.touched;return r.a.createElement(y.c,null,r.a.createElement(m.a,{mb:2},r.a.createElement(x.a,null,r.a.createElement(y.b,{as:j.a,name:"email",type:"email",label:"Email",error:c.email&&!!t.email}),r.a.createElement(y.a,{component:O.a,name:"email",error:!0})),r.a.createElement(x.a,null,r.a.createElement(y.b,{as:j.a,name:"password",type:"password",label:"Password",error:c.password&&!!t.password}),r.a.createElement(y.a,{component:O.a,name:"password",error:!0}))),r.a.createElement(I.a,{variant:"contained",color:"primary",type:"submit",disabled:a||n},"Submit"))})))}));function B(e){var t=e.children,a=e.value,n=e.index,c=Object(d.a)(e,["children","value","index"]);return r.a.createElement("div",Object.assign({role:"tabpanel",hidden:a!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},c),a===n&&r.a.createElement(m.a,{p:3},t))}var M=Object(f.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper}}}));function z(e){var t=e.changeLoggedIn,a=M(),n=r.a.useState(0),c=Object(s.a)(n,2),o=c[0],u=c[1];return r.a.createElement("div",{className:a.root},r.a.createElement(g.a,{position:"static"},r.a.createElement(h.a,{value:o,onChange:function(e,t){u(t)},centered:!0},r.a.createElement(v.a,{label:"Login"}),r.a.createElement(v.a,{label:"Register"}))),r.a.createElement(B,{value:o,index:0},r.a.createElement(G,{changeLoggedIn:t})),r.a.createElement(B,{value:o,index:1},r.a.createElement(D,{changeLoggedIn:t})))}function Y(e){var t=e.changeLoggedIn;return r.a.createElement(i.a,{fixed:!0},r.a.createElement(m.a,{mt:5},r.a.createElement(p.a,{container:!0,justify:"center"},r.a.createElement(p.a,{item:!0,xs:8},r.a.createElement(z,{changeLoggedIn:t})))))}var H=new q,K=new(function(){function e(){Object(S.a)(this,e)}return Object(L.a)(e,[{key:"getAllTasks",value:function(){var e=Object(w.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.doGet("/task");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"addTask",value:function(){var e=Object(w.a)(E.a.mark((function e(){var t,a=arguments;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:{},e.next=3,H.doPost("/task",t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"updateTask",value:function(){var e=Object(w.a)(E.a.mark((function e(t){var a,n=arguments;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.length>1&&void 0!==n[1]?n[1]:{},e.next=3,H.doPut("/task/".concat(t),a);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"deleteTask",value:function(){var e=Object(w.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.doDelete("/task/".concat(t));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}()),Q=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){c(o())}),[]);var o=function(){var e=Object(w.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.getAllTasks();case 2:console.log(a);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(i.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Todo list")))},W=a(183),X=a(184),Z=(a(137),new N);function $(e){var t,a=e.isLoggedIn,n=e.changeLoggedIn,c=function(){var e=Object(w.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z.logoutUser();case 2:n(!1);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return t=a?r.a.createElement(u.b,{to:"/",onClick:c},r.a.createElement(I.a,{color:"inherit"},"Logout")):r.a.createElement(u.b,{to:"/login"},r.a.createElement(I.a,{color:"inherit"},"Login")),r.a.createElement(r.a.Fragment,null,t)}var _=function(e){var t=e.isLoggedIn,a=e.changeLoggedIn;return r.a.createElement(g.a,{position:"static"},r.a.createElement(i.a,null,r.a.createElement(W.a,{className:"menu-bar"},r.a.createElement(u.b,{to:"/"},r.a.createElement(X.a,{variant:"h6",className:""},"React TODO")),r.a.createElement($,{changeLoggedIn:a,isLoggedIn:t}))))},ee=a(113),te=a.n(ee);function ae(){return r.a.createElement(i.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:te.a,className:"App-logo",alt:"logo"}),r.a.createElement("p",{className:"App-link"},"React Todo list app"))))}a(138);var ne=function(){var e=Object(n.useState)(localStorage.getItem("token")&&localStorage.getItem("user")),t=Object(s.a)(e,2),a=t[0],c=t[1];return r.a.createElement(u.a,{basename:"/react-todo/"},r.a.createElement(_,{changeLoggedIn:c,isLoggedIn:a}),r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/"},!a&&r.a.createElement(ae,null),a&&r.a.createElement(Q,null)),r.a.createElement(l.a,{path:"/login"},r.a.createElement(Y,{changeLoggedIn:c}))))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ne,null)),document.getElementById("root"))}},[[125,1,2]]]);
//# sourceMappingURL=main.f00c53b2.chunk.js.map