(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{112:function(e,a,t){e.exports=t.p+"static/media/logo.ee7cd8ed.svg"},125:function(e,a,t){e.exports=t(139)},130:function(e,a,t){},136:function(e,a,t){},138:function(e,a,t){},139:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(10),l=t.n(c),o=(t(130),t(70)),s=t(12),i=t(181),u=t(186),m=t(182),d=t(113),p=t(114),E=t(178),f=t(179),h=t(187),v=t(180),b=t(33),g=t(16),w=t(174),y=t(185),x=t(176),k=t(177),j=t(21),O=t.n(j),S=t(41),P=t(88),q=t(89);function T(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return"https://api-nodejs-todolist.herokuapp.com"+e}function R(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=localStorage.getItem("user"),t=localStorage.getItem("token"),r=a&&t?"Bearer "+t:"",n=e?"application/json":"";return{"Content-Type":n,Authorization:r}}var I=new(function(){function e(){Object(P.a)(this,e)}return Object(q.a)(e,[{key:"doGet",value:function(){var e=Object(S.a)(O.a.mark((function e(){var a,t,r=arguments;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.length>0&&void 0!==r[0]?r[0]:"",e.next=3,fetch(T(a),{headers:R()});case 3:return t=e.sent,e.next=6,t.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"doPost",value:function(){var e=Object(S.a)(O.a.mark((function e(){var a,t,r,n=arguments;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.length>0&&void 0!==n[0]?n[0]:"",t=n.length>1&&void 0!==n[1]?n[1]:{},e.next=4,fetch(T(a),{method:"POST",headers:R(!0),body:JSON.stringify(t)});case 4:return r=e.sent,e.next=7,r.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"doDelete",value:function(){var e=Object(S.a)(O.a.mark((function e(){var a,t,r=arguments;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.length>0&&void 0!==r[0]?r[0]:"",e.next=3,fetch(T(a),{method:"DELETE",headers:R()});case 3:return t=e.sent,e.next=6,t.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"doPut",value:function(){var e=Object(S.a)(O.a.mark((function e(){var a,t,r,n=arguments;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.length>0&&void 0!==n[0]?n[0]:"",t=n.length>1&&void 0!==n[1]?n[1]:{},e.next=4,fetch(T(a),{method:"PUT",headers:R(!0),body:JSON.stringify(t)});case 4:return r=e.sent,e.next=7,r.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}()),N=function(){function e(){Object(P.a)(this,e)}return Object(q.a)(e,[{key:"registerUser",value:function(){var e=Object(S.a)(O.a.mark((function e(){var a,t,r,n,c=arguments;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>0&&void 0!==c[0]?c[0]:{},e.next=3,I.doPost("/user/register",a);case 3:t=e.sent,r=t.user,n=t.token,localStorage.setItem("token",n),localStorage.setItem("user",r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"loginUser",value:function(){var e=Object(S.a)(O.a.mark((function e(){var a,t,r,n,c=arguments;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>0&&void 0!==c[0]?c[0]:{},e.next=3,I.doPost("/user/login",a);case 3:t=e.sent,r=t.user,n=t.token,localStorage.setItem("token",n),localStorage.setItem("user",r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"logoutUser",value:function(){var e=Object(S.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.doPost("/user/logout");case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}(),A=new N,U={name:"",email:"",password:"",acceptedTerms:!1},J=b.b({name:b.c().max(15,"Must be 15 characters or less").required("Required"),email:b.c().email("Invalid email addresss").required("Required"),acceptedTerms:b.a().required("Required").oneOf([!0],"You must accept the terms and conditions."),password:b.c().min(8,"Password should contain at least 8 characters").required("Required"),repeatPassword:b.c().min(8,"Password should contain at least 8 characters").required("Required").test("passwords-match","Passwords must match",(function(e){return this.parent.password===e}))});function L(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null,"Registration form"),n.a.createElement(g.d,{initialValues:U,validationSchema:J,onSubmit:function(e){A.registerUser(e),console.log(JSON.stringify(e,null,4))}},(function(e){e.values;var a=e.errors,t=e.isSubmitting,r=e.isValidating,c=e.touched;return n.a.createElement(g.c,null,n.a.createElement(u.a,{mb:2},n.a.createElement(w.a,null,n.a.createElement(g.b,{as:y.a,name:"name",label:"First Name",error:c.name&&!!a.name}),n.a.createElement(g.a,{component:x.a,name:"name",error:!0})),n.a.createElement(w.a,null,n.a.createElement(g.b,{as:y.a,name:"email",type:"email",label:"Email",error:c.email&&!!a.email}),n.a.createElement(g.a,{component:x.a,name:"email",error:!0})),n.a.createElement(w.a,null,n.a.createElement(g.b,{as:y.a,name:"password",type:"password",label:"Password",error:c.password&&!!a.password}),n.a.createElement(g.a,{component:x.a,name:"password",error:!0})),n.a.createElement(w.a,null,n.a.createElement(g.b,{as:y.a,name:"repeatPassword",type:"password",label:"Repeat Password",error:c.repeatPassword&&!!a.repeatPassword}),n.a.createElement(g.a,{component:x.a,name:"repeatPassword",error:!0})),n.a.createElement(w.a,null,n.a.createElement(g.b,{name:"acceptedTerms",type:"checkbox",label:"Accept Terms And Conditions",error:c.acceptedTerms&&!!a.acceptedTerms}),n.a.createElement(g.a,{component:x.a,name:"acceptedTerms",error:!0}))),n.a.createElement(k.a,{variant:"contained",color:"primary",type:"submit",disabled:t||r},"Submit"))})))}var C={email:"",password:""},V=b.b({email:b.c().email("Invalid email addresss").required("Required"),password:b.c().required("Required")}),D=new N;function F(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null,"Login form"),n.a.createElement(g.d,{initialValues:C,validationSchema:V,onSubmit:function(e){D.loginUser(e)}},(function(e){e.values;var a=e.errors,t=e.isSubmitting,r=e.isValidating,c=e.touched;return n.a.createElement(g.c,null,n.a.createElement(u.a,{mb:2},n.a.createElement(w.a,null,n.a.createElement(g.b,{as:y.a,name:"email",type:"email",label:"Email",error:c.email&&!!a.email}),n.a.createElement(g.a,{component:x.a,name:"email",error:!0})),n.a.createElement(w.a,null,n.a.createElement(g.b,{as:y.a,name:"password",type:"password",label:"Password",error:c.password&&!!a.password}),n.a.createElement(g.a,{component:x.a,name:"password",error:!0}))),n.a.createElement(k.a,{variant:"contained",color:"primary",type:"submit",disabled:t||r},"Submit"))})))}function B(e){var a=e.children,t=e.value,r=e.index,c=Object(p.a)(e,["children","value","index"]);return n.a.createElement("div",Object.assign({role:"tabpanel",hidden:t!==r,id:"simple-tabpanel-".concat(r),"aria-labelledby":"simple-tab-".concat(r)},c),t===r&&n.a.createElement(u.a,{p:3},a))}var G=Object(E.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper}}}));function M(){var e=G(),a=n.a.useState(0),t=Object(d.a)(a,2),r=t[0],c=t[1];return n.a.createElement("div",{className:e.root},n.a.createElement(f.a,{position:"static"},n.a.createElement(h.a,{value:r,onChange:function(e,a){c(a)},centered:!0,"aria-label":"simple tabs example"},n.a.createElement(v.a,{label:"Login"}),n.a.createElement(v.a,{label:"Register"}))),n.a.createElement(B,{value:r,index:0},n.a.createElement(F,null)),n.a.createElement(B,{value:r,index:1},n.a.createElement(L,null)))}function z(){return n.a.createElement(i.a,{fixed:!0},n.a.createElement(u.a,{mt:5},n.a.createElement(m.a,{container:!0,justify:"center"},n.a.createElement(m.a,{item:!0,xs:8},n.a.createElement(M,null)))))}var Y=t(183),H=t(184);t(136);function K(){var e=localStorage.getItem("token")&&localStorage.getItem("user");return n.a.createElement(o.b,{to:e?"/logout":"/login"},n.a.createElement(k.a,{color:"inherit"}," ",e?"Logout":"Login"," "))}function Q(){return n.a.createElement(f.a,{position:"static"},n.a.createElement(i.a,null,n.a.createElement(Y.a,{className:"menu-bar"},n.a.createElement(o.b,{to:"/"},n.a.createElement(H.a,{variant:"h6",className:""},"React TODO")),n.a.createElement(K,null))))}var W=t(112),X=t.n(W);function Z(){return n.a.createElement(i.a,null,n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement("img",{src:X.a,className:"App-logo",alt:"logo"}),n.a.createElement("p",{className:"App-link"},"React Todo list app"))))}t(138);var $=function(){return n.a.createElement(o.a,null,n.a.createElement(Q,null),n.a.createElement(s.c,null,n.a.createElement(s.a,{exact:!0,path:"/"},n.a.createElement(Z,null)),n.a.createElement(s.a,{path:"/login"},n.a.createElement(z,null))))};l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement($,null)),document.getElementById("root"))}},[[125,1,2]]]);
//# sourceMappingURL=main.ded97eb5.chunk.js.map