(this["webpackJsonpreact-socket"]=this["webpackJsonpreact-socket"]||[]).push([[0],{101:function(e,t,n){},135:function(e,t,n){},150:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(46),o=n.n(a),c=(n(135),n(8)),s=n(200),l=n(205),i=n(48),u=(n(101),n(203)),j=n(24),d=n(117),b=n(197),h=n(105),O=n(185),x=n(1),g=Object(r.createContext)({toggleColorMode:function(){}});function m(e){var t=e.children,n=localStorage.mode||T.standartMode,a=Object(r.useState)(n),o=Object(c.a)(a,2),s=o[0],l=o[1],i=Object(O.a)("(prefers-color-scheme: dark)"),u=Object(r.useState)({light:v(localStorage.colorLight)||T.standartColor.light,dark:v(localStorage.colorDark)||T.standartColor.dark}),m=Object(c.a)(u,2),f=m[0],p=m[1];function v(e){var t=null;return T.COLORS.forEach((function(n){e===n.name&&(t=n.color)})),t}Object(r.useEffect)((function(){if(n)return"system"===n?l(i?{ststem:!0,active:"dark"}:{ststem:!0,active:"light"}):void("light"===n?l({system:!1,active:"light"}):"dark"===n&&l({system:!1,active:"dark"}))}),[n,i]);var S=Object(r.useCallback)((function(e){var t=null;return T.COLORS.forEach((function(n){e===n.color&&(t=n.name)})),t}),[]),y=Object(r.useCallback)((function(e,t){p("light"===e?function(e){return localStorage.colorLight=S(t),{light:t,dark:e.dark}}:function(e){return localStorage.colorDark=S(t),{light:e.light,dark:t}})}),[S]),w=Object(r.useCallback)((function(e){var t={};return T.COLORS.forEach((function(n){t[n.name]=function(){return y("light"===e?"light":"dark",n.color)}})),t}),[y]),k=Object(r.useMemo)((function(){return Object(d.a)({palette:Object(j.a)({mode:s.active},"light"===s.active?{primary:f.light,secondary:f.light,background:{default:h.a[100],myBox:"white"}}:{primary:f.dark,secondary:f.dark,background:{default:h.a[900],myBox:"rgb(255, 255, 255, 0.05)"}})})}),[s,f]),C=Object(r.useMemo)((function(){return{Mode:{system:function(){localStorage.mode="system",l(Object(j.a)(Object(j.a)({},s),{},{system:!0}))},light:function(){localStorage.mode="light",l({system:!1,active:"light"})},dark:function(){localStorage.mode="dark",l({system:!1,active:"dark"})}},Color:{light:w("light"),dark:w("dark"),colorDefiner:S("light"===k.palette.mode?f.light:f.dark)}}}),[w,S,s,f,k.palette.mode]);return Object(x.jsx)(g.Provider,{value:C,children:Object(x.jsx)(b.a,{theme:k,children:t})})}function f(e){return Object(x.jsx)(s.a,Object(j.a)(Object(j.a)({},e),{},{sx:{m:2,p:2,boxShadow:e.bSh?e.bSh:5,borderRadius:3,bgcolor:e.nobg?null:"background.myBox"},children:e.children}))}var p=n(201);function v(e){return Object(x.jsx)(p.a,Object(j.a)(Object(j.a)({},e),{},{style:{textTransform:"none"},children:e.children}))}var S=n(196);function y(e){return Object(x.jsx)(S.a,Object(j.a)(Object(j.a)({},e),{},{style:{textTransform:"none"},children:e.children}))}var w=n(202);function k(e){return Object(x.jsx)(w.a,Object(j.a)(Object(j.a)({},e),{},{style:{textTransform:"none"},children:e.children}))}var C=n(191),q=n(51),E=n(53),M=n(52),L=n(61),T={AUTH:"https://emmastonenodejs.herokuapp.com",socket:"https://emmastonenodejs.herokuapp.com",COLORS:[{name:"yellow",color:C.a,Name:"Yellow"},{name:"blue",color:q.a,Name:"Blue"},{name:"green",color:E.a,Name:"Green"},{name:"purple",color:M.a,Name:"Purple"},{name:"orange",color:L.a,Name:"Orange"}],standartMode:"system",standartColor:{light:q.a,dark:C.a}};function D(e){var t=e.text,n=e.setText,a=Object(r.useState)(!1),o=Object(c.a)(a,2),s=o[0],l=o[1];return Object(x.jsx)(x.Fragment,{children:t.length?Object(x.jsxs)(f,{children:[Object(x.jsxs)("div",{style:{justifyContent:"space-between",boxSizing:"border-box",display:"flex"},children:[Object(x.jsx)("span",{}),Object(x.jsxs)("span",{children:[s?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(v,{color:"error",onClick:function(){n([]),delete localStorage.text},children:"Delete text"}),Object(x.jsx)(v,{onClick:function(){localStorage.text=JSON.stringify(t),l(!1)},children:"Save text"})]}):null,Object(x.jsx)(v,{onClick:function(){return l((function(e){return!e}))},children:"\u2022\u2022\u2022"})]})]}),Object(x.jsx)("div",{children:t.map((function(e,t){return Object(x.jsxs)(u.a,{component:"p",className:"\n                  textLeft\n                  ".concat("\u041c\u0438\u0448\u0430"===e.user?"textRight":null," \n                  ").concat("Emma Stone"===e.user?"textCenter":null,"\n                "),children:[null!==e.user&&"null"!==e.user&&e.user?Object(x.jsxs)(u.a,{component:"b",color:"primary",children:["\xa0 ",e.user]}):null,"\xa0 ",e.message," \xa0"]},t)}))})]}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(u.a,{variant:"p",children:"\u041d\u0438\u0447\u0435\u0433\u043e \u0442\u0443\u0442 \u043d\u0435\u0442\u0443"}),Object(x.jsx)("br",{})]})})}var N=n(15),R=n(198),A=n(194),F=n(116),B=function(e){var t=e.text,n=e.setText,a=e.end,o=Object(r.useState)(""),s=Object(c.a)(o,2),l=s[0],i=s[1],u=Object(r.useState)(!1),j=Object(c.a)(u,2),d=j[0],b=j[1],h=Object(r.useRef)();Object(r.useEffect)((function(){return h.current=F.a.connect(T.socket),h.current.on("message",(function(e){n([].concat(Object(N.a)(t),[e])),b(!1)})),a.current.scrollIntoView({behavior:"smooth"}),function(){return h.current.disconnect()}}),[t,n,a]);var O=Object(r.useCallback)((function(e){e.preventDefault(),b(!0),h.current.emit("message",{message:l,user:localStorage.username}),i("")}),[l]);return Object(x.jsx)(f,{children:Object(x.jsx)("form",{onSubmit:O,children:Object(x.jsxs)(R.a,{container:!0,sx:{p:1},children:[Object(x.jsx)(R.a,{item:!0,xs:10,children:Object(x.jsx)(A.a,{required:!0,label:"\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0441\u044e\u0434\u0430",variant:"outlined",value:l,fullWidth:!0,onChange:function(e){return i(e.target.value)}})}),Object(x.jsx)(R.a,{item:!0,xs:2,sx:{mt:"11px",textAlign:"end"},children:Object(x.jsx)(y,{loading:d,type:"submit",color:"secondary",children:"Send"})})]})})})},I=n(96),J=n.n(I),W=n(111);function H(e){var t=e.logged,n=e.setLogged,a=Object(r.useState)({password:"",login:""}),o=Object(c.a)(a,2),s=o[0],l=o[1],i=Object(r.useState)({error:{login:!1,password:!1},login:"\u043b\u043e\u0433\u0438\u043d \u041d\u043e\u0443\u043d\u0435\u0439\u043c",password:"\u043f\u0430\u0440\u043e\u043b\u044c 1234"}),j=Object(c.a)(i,2),d=j[0],b=j[1],h=Object(r.useState)(!1),O=Object(c.a)(h,2),g=O[0],m=O[1];function p(){return(p=Object(W.a)(J.a.mark((function e(){var t,r;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={username:s.login,password:s.password},console.log("\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u044e:",t),e.next=4,fetch("".concat(T.AUTH,"/auth/login"),{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(t)});case 4:return e.next=6,e.sent.json();case 6:r=e.sent,console.log("\u041f\u0440\u0438\u0448\u043b\u043e:",r),!r.username||r.userError||r.passwordError?S(r):(localStorage.username=r.username,localStorage.token=r.token,console.log("\u0412\u0441\u0435 \u0437\u0431\u0441",localStorage),n(!0));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e){e.userError?b({error:{login:!0,password:!0},login:e.userError,password:"\u0438 \u043f\u0430\u0440\u043e\u043b\u044c \u0442\u0432\u043e\u0439 \u0433\u043e\u0432\u043d\u043e"}):e.passwordError&&b({error:{login:!1,password:!0},login:"\u0442\u044b \u0442\u0443\u043f\u043e\u0439, ",password:e.passwordError}),m(!1)}function w(e){e.preventDefault(),m(!0),function(){p.apply(this,arguments)}(),l((function(e){return{login:e.login,password:""}}))}return Object(x.jsx)(f,{children:t?Object(x.jsxs)("div",{style:{textAlign:"end"},children:[Object(x.jsxs)(u.a,{variant:"label",children:[""!==s.login?s.login:localStorage.username," \xa0 \xa0"]}),Object(x.jsx)(v,{style:{marginLeft:10},color:"secondary",variant:"text",onClick:function(){delete localStorage.username,delete localStorage.token,console.log(localStorage),m(!1),n(!1),l({login:"",password:""}),b({error:{login:!1,password:!1},login:"\u043b\u043e\u0433\u0438\u043d \u041d\u043e\u0443\u043d\u0435\u0439\u043c",password:"\u043f\u0430\u0440\u043e\u043b\u044c 1234"})},children:"\u0412\u044b\u0439\u0442\u0438"})]}):Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("form",{onSubmit:function(e){return w(e)},children:[Object(x.jsx)(u.a,{variant:"label",sx:{mr:"25px"},children:"\u042d\u0439 \u044e \u0442\u044b \u043a\u0442\u043e? \u0430"}),Object(x.jsx)(y,{loading:g,type:"submit",color:"secondary",variant:"outlined",children:"\u0412o\u0439\u0442\u0438"}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)(A.a,{required:!0,fullWidth:!0,type:"username",error:d.error.login,label:d.login,vlaue:s.login,onChange:function(e){return l((function(t){return{login:e.target.value,password:t.password}}))}}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)(A.a,{required:!0,fullWidth:!0,type:"password",error:d.error.password,label:d.password,value:s.password,onChange:function(e){return l((function(t){return{login:t.login,password:e.target.value}}))}})]})})})}var V=n(199),P=n(112),z=n.n(P),U=n(114),_=n.n(U),G=n(113),Y=n.n(G);function K(e){var t=e.theme,n=e.colorMode,a=Object(r.useState)((function(){return"system"===localStorage.mode?"system":"light"===localStorage.mode?"light":"dark"===localStorage.mode?"dark":T.standartMode})),o=Object(c.a)(a,2),s=o[0],l=o[1],i=Object(r.useState)(),u=Object(c.a)(i,2),j=u[0],d=u[1];return Object(r.useEffect)((function(){return t.palette.mode,d(n.Color.colorDefiner),n.Color.colorDefiner}),[n.Color,t.palette.mode]),Object(x.jsxs)(f,{children:[Object(x.jsxs)(V.a,{color:"primary",exclusive:!0,value:s,onChange:function(e,t){"system"===t?(n.Mode.system(),l(t)):"light"===t?(n.Mode.light(),l(t)):"dark"===t&&(n.Mode.dark(),l(t))},children:[Object(x.jsxs)(k,{value:"system",children:["System \xa0",Object(x.jsx)(z.a,{})]}),Object(x.jsx)(k,{value:"light",children:Object(x.jsx)(Y.a,{})}),Object(x.jsx)(k,{value:"dark",children:Object(x.jsx)(_.a,{})})]}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)(V.a,{size:"small",color:"primary",exclusive:!0,value:j,onChange:function(e,r){try{"system"===s?"light"===t.palette.mode?(n.Color.light[r](),d(r)):(n.Color.dark[r](),d(r)):"light"===s?(n.Color.light[r](),d(r)):"dark"===s&&(n.Color.dark[r](),d(r))}catch(a){return}},children:T.COLORS.map((function(e,t){return Object(x.jsx)(k,{value:e.name,children:e.Name},t)}))})]})}var Q=n(204),X=n(115),Z=n.n(X),$=n(57);function ee(e){var t=e.setSettings;return Object(x.jsxs)(f,{bSh:"0px",nobg:!0,children:[Object(x.jsxs)(u.a,{component:"span",variant:"h4",children:["Emma Stone \xa0",Object(x.jsx)(Q.a,{color:"primary",onClick:function(){return t((function(e){return!e}))},children:Object(x.jsx)(Z.a,{})})]}),"\xa0",Object(x.jsxs)("span",{children:[Object(x.jsx)($.b,{to:"/",style:{textDecoration:"none"},children:Object(x.jsx)(u.a,{component:"span",color:"primary",children:"Socket"})}),"\xa0 \xa0",Object(x.jsx)($.b,{to:"/alise",style:{textDecoration:"none"},children:Object(x.jsx)(u.a,{component:"span",color:"primary",children:"Alise"})})]})]})}var te=n(14),ne=[{question:["\u0445\u0430\u0439\u0443\u0448\u043a\u0438","\u043f\u0440\u0438\u0432\u0435\u0442","\u043f\u0440\u0438\u0432\u0435\u0442\u0438\u043a\u0438","\u043f\u0440\u0438\u0432\u0435\u0442\u0443\u043b\u0438","\u0445\u0430\u0439","\u0434\u043e\u0431\u0440\u044b\u0439 \u0434\u0435\u043d\u044c","\u0434\u043e\u0431\u0440\u044b\u0439 \u0432\u0435\u0447\u0435\u0440","\u0434\u043e\u0431\u0440\u043e\u0435 \u0443\u0442\u0440\u043e"],answer:["\u041f\u0440\u0438\u0432\u0435\u0442, \u0435\u0431\u043b\u0430\u043d","\u041f\u0440\u0438\u0432\u0435\u0442, \u0434\u0435\u0431\u0438\u043b","\u0417\u0434\u0430\u0440\u043e\u0432\u0430, \u043e\u0442\u0435\u0446","Oh shit, here we go again"]},{question:["\u043f\u043e\u0448\u043b\u0430 \u043d\u0430\u0445\u0443\u0439","\u0438\u0434\u0438 \u043d\u0430\u0445\u0443\u0439","\u043d\u0430\u0445\u0443\u0439 \u0438\u0434\u0438"],answer:["\u0421\u0430\u043c \u043f\u043e\u0448\u0435\u043b \u043d\u0430\u0445\u0443\u0439","Fuck you"]},{question:["\u0442\u044b \u043a\u0442\u043e","\u043a\u0442\u043e \u0442\u044b","\u0447\u0442\u043e \u0442\u044b \u0442\u0430\u043a\u043e\u0435"],answer:["\u042f \u0410\u043b\u0438\u0441\u0430"]},{question:["\u043a\u0430\u043a \u0434\u0435\u043b\u0430","\u0447\u0435 \u043a\u0430\u043a"],answer:["\u041d\u043e\u0440\u043c","\u0415\u0449\u0451 \u043d\u0435 \u0440\u043e\u0434\u0438\u043b\u0430 \u044a\u0430\u044a\u044a\u0430\u044a\u0430\u044a\u0430","\u0425\u043e\u0440\u043e\u0448\u043e, \u0442\u043e\u043b\u044c\u043a\u043e \u0436\u043e\u043f\u0430 \u043e\u0442\u0432\u0430\u043b\u0438\u043b\u0430\u0441\u044c","\u0425\u043e\u0440\u043e\u0448\u043e, \u0430 \u0443 \u0442\u0435\u0431\u044f?"]},{question:["\u0436\u043e\u043f\u0430","\u043f\u043e\u043f\u0430"],answer:["\u042d\u0442\u043e \u0442\u044b \u0436\u043e\u043f\u0430!","\u0421\u0430\u043c \u0442\u044b \u043f\u043e\u043f\u0430","\u0421\u0430\u043c \u0442\u0430\u043a\u043e\u0439("]},{question:["\u044f \u0445\u043e\u0447\u0443 \u043a\u0443\u0448\u0430\u0442\u044c","\u0445\u043e\u0447\u0443 \u0435\u0441\u0442\u044c","\u0436\u0440\u0430\u0442\u044c \u0445\u043e\u0447\u0443","\u0445\u043e\u0447\u0443 \u0436\u0440\u0430\u0442\u044c"],answer:["\u0445\u043e\u0440\u043e\u0448\u043e, \u043f\u043e\u0448\u043b\u0438 \u0432 \u043c\u0430\u043a","\u0418\u0434\u0438 \u043f\u043e\u0435\u0448\u044c"]},{question:["\u043f\u043e\u043f\u0430 \u0447\u0435\u0448\u0435\u0442\u0441\u044f"],answer:["\u041f\u043e\u0447\u0435\u0448\u0438"]},{question:["\u043f\u043e \u043f\u0438\u0432\u043a\u0443"],answer:["\u043f\u043e \u043f\u0438\u0432\u043a\u0443"]},{question:["\u0441\u0438\u043c\u043f\u043b \u0434\u0438\u043c\u043f\u043b"],answer:["\u041d\u0435\u0442, \u041f\u043e\u043f \u0418\u0442!"]},{question:["\u0433\u043e\u0432\u043d\u043e","\u0442\u044b \u0433\u043e\u0432\u043d\u043e","\u043b\u043e\u0445","\u043c\u043e\u0447\u0430","\u0447\u043c\u043e"],answer:["\u0422\u044b)","\u044d\u0442\u043e \u0442\u044b \u043f\u0440\u043e \u0441\u0435\u0431\u044f?","\u0411\u0415\u0411\u0415\u0411\u0415","\u0430 \u0442\u044b \u043a\u0430\u043a\u0430\u0448\u043a\u0430","\u0441\u0430\u043c \u0442\u0430\u043a\u043e\u0439"]},{question:["\u0442\u044b \u0442\u0443\u043f\u0430\u044f"],answer:["\u043d\u0435\u0442 \u0442\u044b("]},{question:["\u0447\u0442\u043e \u0442\u044b \u0443\u043c\u0435\u0435\u0448\u044c"],answer:["\u042f \u0443\u043c\u0435\u044e \u043d\u0438\u0445\u0443\u044f, \u044f \u0442\u0443\u043f\u0430\u044f)"]},{question:["\u0447\u0442\u043e \u0442\u044b \u043c\u043e\u0436\u0435\u0448\u044c"],answer:["\u042f \u043c\u043e\u0433\u0443 \u043d\u0438\u0445\u0443\u044f, \u044f \u0442\u0443\u043f\u0430\u044f)"]},{question:["\u0440\u0430\u0441\u0441\u043a\u0430\u0436\u0438 \u0448\u0443\u0442\u043a\u0443","\u043f\u043e\u0448\u0443\u0442\u0438"],answer:["\u041d\u0435 \u0431\u0443\u0434\u0443 \u0433\u043e\u0432\u043e\u0440\u0438\u0442\u044c \u043a\u0430\u043a\u043e\u0435 \u043c\u0435\u0441\u0442\u043e \u0432 \u043c\u043e\u0435\u0439 \u0436\u0438\u0437\u043d\u0438 \u0437\u0430\u043d\u0438\u043c\u0430\u0435\u0442 \u0430\u043b\u043a\u043e\u0433\u043e\u043b\u044c, \u043d\u043e \u0441\u043a\u0430\u0436\u0443 \u0447\u0442\u043e \u0441\u0435\u0440\u0435\u0431\u0440\u043e \u0438 \u0431\u0440\u043e\u043d\u0437\u0430 \u043f\u043e-\u0431\u043e\u043a\u0430\u043c"]},{question:["\u0441\u043f\u043e\u0439 \u043f\u0435\u0441\u043d\u044e","\u0445\u043e\u0447\u0443 \u043f\u0435\u0441\u043d\u044e","\u043f\u0435\u0441\u043d\u044f","\u043f\u0435\u0441\u0435\u043d\u043a\u0430","\u0441\u043f\u043e\u0439"],answer:["\n\u042d\u0439, \u0446\u0435\u043f\u044c \u043d\u0430 \u043c\u043d\u0435, \n\u0441\u044b\u043f\u044c \u043b\u0430\u0432\u044d \n\u0421\u043e\u0442\u043a\u0430 \u0442\u044b\u0449 \u043d\u0430 Bag LV \n\u0421\u043e\u0442\u043d\u0438 \u0441\u0443\u043a \u0445\u043e\u0442\u044f\u0442 \u043a\u043e \u043c\u043d\u0435 \n\u0421\u043e\u0442\u043d\u0438 \u0441\u0443\u043a \u0445\u043e\u0442\u044f\u0442 \u043a\u0430\u043c\u043d\u0435\u0439 \n\n\u041a\u0430\u043a \u0434\u0435\u043b\u0430? \n\u041a\u0430\u043a \u0434\u0435\u043b\u0430? \n\u042d\u0442\u043e \u043d\u043e\u0432\u044b\u0439 Cadillac \n\u0414\u0435\u043b\u0430\u0442\u044c \u0434\u0435\u043d\u044c\u0433\u0438, \n\u0434\u0435\u043b\u0430\u0442\u044c \u0434\u0435\u043d\u044c\u0433\u0438 \n\u0414\u0435\u043b\u0430\u0442\u044c \u0434\u0435\u043d\u044c\u0433\u0438, \u0431\u043b\u044f*\u044c, \u0432\u043e\u0442 \u0442\u0430\u043a \n(\u0441) \u041c\u043e\u0440\u0433\u0435\u043d\u0448\u0442\u0435\u0440\u043d","\n\u042f \u043b\u044c\u044e Cristal \u0438 Chandon Mo\xebt \n\u041c\u0435\u0447\u0442\u0430\u043b \u2014 \u0442\u0435\u043f\u0435\u0440\u044c \u043c\u043e\u0451 \n\u0422\u0440\u0430\u0447\u0443 \u043d\u0430 \u044d\u0442\u043e, \u0442\u0440\u0430\u0447\u0443 \u043d\u0430 \u0442\u043e, \n\u0442\u0440\u0430\u0447\u0443 \u043d\u0430 \u044d\u0442\u043e, \u0442\u0440\u0430\u0447\u0443 \u043d\u0430 \u0442\u043e \n\u042f \u043b\u044c\u044e Cristal \u0438 Chandon Mo\xebt \n\u041c\u0435\u0447\u0442\u0430\u043b \u2014 \u0442\u0435\u043f\u0435\u0440\u044c \u043c\u043e\u0451 \n\u0422\u0440\u0430\u0447\u0443 \u043d\u0430 \u044d\u0442\u043e, \u0442\u0440\u0430\u0447\u0443 \u043d\u0430 \u0442\u043e, \n\u0442\u0440\u0430\u0447\u0443 \u043d\u0430 \u044d\u0442\u043e, \u0442\u0440\u0430\u0447\u0443 \u043d\u0430 \u0442\u043e \n(c) \u041c\u043e\u0440\u0433\u0435\u043d\u0448\u0442\u0435\u0440\u043d"]},{question:["\u043c\u043e\u043b\u043e\u0434\u0435\u0446"],answer:["\u042f \u0441\u0442\u0430\u0440\u0430\u043b\u0430\u0441\u044c","\u0421\u043f\u0430\u0441\u0438\u0431\u043e, \u043c\u043d\u0435 \u043f\u0440\u0438\u044f\u0442\u043d\u043e"]},{question:["\u0441\u0443\u043a\u0430"],answer:["\u041c\u0443\u0434\u0430\u043a"]},{question:["\u0441\u043f\u0430\u0441\u0438\u0431\u043e","\u0441\u043f\u0441"],answer:["\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430)","\u041d\u0435\u0437\u0430\u0448\u0442\u043e","\u0421\u043f\u0430\u0441\u0438\u0431\u043e \u0432 \u043a\u043e\u0440\u043c\u0430\u043d \u043d\u0435 \u043f\u043e\u043b\u043e\u0436\u0438\u0448\u044c"]},{question:["\u0434\u0443\u0440\u0430"],answer:["\u043a\u0442\u043e \u043e\u0431\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f - \u0442\u043e\u0442 \u0441\u0430\u043c \u0442\u0430\u043a \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f, \u0441\u0443\u0447\u0430\u0440\u0430","\u0434\u0430 \u0438\u0434\u0438 \u0442\u044b \u0432 \u043f\u043e\u043f\u0443","\u0441\u0430\u043c \u0434\u0443\u0440\u0430\u043a("]},{question:["\u043a\u0442\u043e \u044f"],answer:["\u043a\u0442\u043e-\u0442\u043e","\u0442\u044b \u043b\u043e\u0445","\u0447\u043c\u0430"]},{question:["\u0445\u043e\u0440\u043e\u0448\u043e","\u043b\u0430\u0434\u043d\u043e","\u043e\u043a"],answer:["\u0434\u0430\u0434\u0430","\u0443\u0433\u0443","\u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0438\u043b\u0438\u0441\u044c","\u0432\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0442\u0435\u043a\u0441\u0442","\u043d\u0435 \u0437\u043d\u0430\u044e \u0447\u0442\u043e \u043e\u0442\u0432\u0435\u0442\u0438\u0442\u044c"]}];function re(e){var t=e.end,n=Object(r.useState)(""),a=Object(c.a)(n,2),o=a[0],s=a[1],l=Object(r.useState)([{text:"\u041f\u0440\u0438\u0432\u0435\u0442, \u0447\u0435\u043c \u044f \u043c\u043e\u0433\u0443 \u043f\u043e\u043c\u043e\u0447\u044c?",user:"\u0410\u043b\u0438\u0441\u0430"}]),i=Object(c.a)(l,2),j=i[0],d=i[1];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(u.a,{variant:"h5",children:"\u0410\u043b\u0438\u0441\u0430"}),Object(x.jsx)(f,{children:j.map((function(e,t){return Object(x.jsx)("div",{style:{textAlign:e.right?"end":"start"},children:Object(x.jsxs)(u.a,{variant:"p",children:[Object(x.jsx)(u.a,{variant:"span",color:"primary",children:e.user}),"\xa0",Object(x.jsx)("span",{dangerouslySetInnerHTML:{__html:e.text.replace(/\n/g,"<br />&nbsp; &nbsp;")}})]})},t)}))}),Object(x.jsx)(f,{children:Object(x.jsx)("form",{onSubmit:function(e){e.preventDefault(),d((function(e){return[].concat(Object(N.a)(e),[{text:o,user:localStorage.username,right:!0}])}));var n=null;ne.forEach((function(e){e.question.forEach((function(t){if(t===o.toLocaleLowerCase()){var r=Math.floor(Math.random()*e.answer.length);return n=e.answer[r]}}))})),setTimeout((function(){d((function(e){return[].concat(Object(N.a)(e),[{text:n||"\u041f\u043e\u0448\u0435\u043b \u043d\u0430\u0445\u0443\u0439",user:"\u0410\u043b\u0438\u0441\u0430"}])}))}),[200]),s(""),t.current.scrollIntoView({behavior:"smooth"}),setTimeout((function(){t.current.scrollIntoView({behavior:"smooth"})}),[250])},children:Object(x.jsxs)(R.a,{container:!0,sx:{p:1},children:[Object(x.jsx)(R.a,{item:!0,xs:10,children:Object(x.jsx)(A.a,{required:!0,fullWidth:!0,label:"\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0441\u044e\u0434\u0430",variant:"outlined",value:o,onChange:function(e){return s(e.target.value)}})}),Object(x.jsx)(R.a,{item:!0,xs:2,sx:{mt:"11px",textAlign:"end"},children:Object(x.jsx)(y,{color:"secondary",children:"Send"})})]})})})]})}function ae(){var e=Object(r.useState)(function(){try{return JSON.parse(localStorage.text)}catch(e){return[]}}()||[]),t=Object(c.a)(e,2),n=t[0],a=t[1],o=Object(r.useState)((function(){return!(!localStorage.username||null===localStorage.username||"null"===localStorage.username)})),u=Object(c.a)(o,2),j=u[0],d=u[1],b=Object(r.useState)(!1),h=Object(c.a)(b,2),O=h[0],m=h[1],f=Object(i.a)(),p=Object(r.useContext)(g),v=Object(r.useRef)();return Object(x.jsxs)(s.a,{sx:{bgcolor:"background.default",color:"text.primary",minHeight:"100vh"},children:[Object(x.jsxs)(l.a,{className:"App",maxWidth:"sm",sx:{pt:5},children:[Object(x.jsx)(ee,{setSettings:m}),O?Object(x.jsx)(K,{theme:f,colorMode:p}):null,Object(x.jsx)(H,{logged:j,setLogged:d,text:n,setText:a}),Object(x.jsxs)(te.c,{children:[Object(x.jsx)(te.a,{path:"*",element:Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(D,{text:n,setText:a}),Object(x.jsx)(B,{text:n,setText:a,end:v})]})}),Object(x.jsx)(te.a,{path:"/alise",element:Object(x.jsx)(re,{end:v})})]})]}),Object(x.jsx)("br",{ref:v})]})}o.a.render(Object(x.jsx)(m,{children:Object(x.jsx)($.a,{children:Object(x.jsx)(ae,{})})}),document.getElementById("root"))}},[[150,1,2]]]);
//# sourceMappingURL=main.837a8722.chunk.js.map