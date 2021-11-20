(this["webpackJsonpreact-socket"]=this["webpackJsonpreact-socket"]||[]).push([[0],{101:function(e,t,r){},135:function(e,t,r){},150:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r(46),o=r.n(c),a=(r(135),r(8)),s=r(84),l=r(14),i=r(200),u=r(205),j=r(48),d=(r(101),r(203)),b=r(24),O=r(117),h=r(197),g=r(105),x=r(185),m=r(1),f=Object(n.createContext)({toggleColorMode:function(){}});function p(e){var t=e.children,r=localStorage.mode||D.standartMode,c=Object(n.useState)(r),o=Object(a.a)(c,2),s=o[0],l=o[1],i=Object(x.a)("(prefers-color-scheme: dark)"),u=Object(n.useState)({light:v(localStorage.colorLight)||D.standartColor.light,dark:v(localStorage.colorDark)||D.standartColor.dark}),j=Object(a.a)(u,2),d=j[0],p=j[1];function v(e){var t=null;return D.COLORS.forEach((function(r){e===r.name&&(t=r.color)})),t}Object(n.useEffect)((function(){if(r)return"system"===r?l(i?{ststem:!0,active:"dark"}:{ststem:!0,active:"light"}):void("light"===r?l({system:!1,active:"light"}):"dark"===r&&l({system:!1,active:"dark"}))}),[r,i]);var S=Object(n.useCallback)((function(e){var t=null;return D.COLORS.forEach((function(r){e===r.color&&(t=r.name)})),t}),[]),k=Object(n.useCallback)((function(e,t){p("light"===e?function(e){return localStorage.colorLight=S(t),{light:t,dark:e.dark}}:function(e){return localStorage.colorDark=S(t),{light:e.light,dark:t}})}),[S]),y=Object(n.useCallback)((function(e){var t={};return D.COLORS.forEach((function(r){t[r.name]=function(){return k("light"===e?"light":"dark",r.color)}})),t}),[k]),C=Object(n.useMemo)((function(){return Object(O.a)({palette:Object(b.a)({mode:s.active},"light"===s.active?{primary:d.light,secondary:d.light,background:{default:g.a[100],myBox:"white"}}:{primary:d.dark,secondary:d.dark,background:{default:g.a[900],myBox:"rgb(255, 255, 255, 0.05)"}})})}),[s,d]),w=Object(n.useMemo)((function(){return{Mode:{system:function(){localStorage.mode="system",l(Object(b.a)(Object(b.a)({},s),{},{system:!0}))},light:function(){localStorage.mode="light",l({system:!1,active:"light"})},dark:function(){localStorage.mode="dark",l({system:!1,active:"dark"})}},Color:{light:y("light"),dark:y("dark"),colorDefiner:S("light"===C.palette.mode?d.light:d.dark)}}}),[y,S,s,d,C.palette.mode]);return Object(m.jsx)(f.Provider,{value:w,children:Object(m.jsx)(h.a,{theme:C,children:t})})}function v(e){return Object(m.jsx)(i.a,Object(b.a)(Object(b.a)({},e),{},{sx:{m:2,p:2,boxShadow:e.bSh?e.bSh:5,borderRadius:3,bgcolor:e.nobg?null:"background.myBox"},children:e.children}))}var S=r(201);function k(e){return Object(m.jsx)(S.a,Object(b.a)(Object(b.a)({},e),{},{style:{textTransform:"none"},children:e.children}))}var y=r(196);function C(e){return Object(m.jsx)(y.a,Object(b.a)(Object(b.a)({},e),{},{style:{textTransform:"none"},children:e.children}))}var w=r(202);function E(e){return Object(m.jsx)(w.a,Object(b.a)(Object(b.a)({},e),{},{style:{textTransform:"none"},children:e.children}))}var M=r(191),T=r(51),L=r(53),N=r(52),R=r(60),D={AUTH:"https://emmastonenodejs.herokuapp.com",socket:"https://emmastonenodejs.herokuapp.com",COLORS:[{name:"yellow",color:M.a,Name:"Yellow"},{name:"blue",color:T.a,Name:"Blue"},{name:"green",color:L.a,Name:"Green"},{name:"purple",color:N.a,Name:"Purple"},{name:"orange",color:R.a,Name:"Orange"}],standartMode:"system",standartColor:{light:T.a,dark:M.a}};function A(e){var t=e.text,r=e.setText,c=Object(n.useState)(!1),o=Object(a.a)(c,2),s=o[0],l=o[1];return Object(m.jsx)(m.Fragment,{children:t.length?Object(m.jsxs)(v,{children:[Object(m.jsxs)("div",{style:{justifyContent:"space-between",boxSizing:"border-box",display:"flex"},children:[Object(m.jsx)("span",{}),Object(m.jsxs)("span",{children:[s?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(k,{color:"error",onClick:function(){r([]),delete localStorage.text},children:"Delete text"}),Object(m.jsx)(k,{onClick:function(){localStorage.text=JSON.stringify(t),l(!1)},children:"Save text"})]}):null,Object(m.jsx)(k,{onClick:function(){return l((function(e){return!e}))},children:"\u2022\u2022\u2022"})]})]}),Object(m.jsx)("div",{children:t.map((function(e,t){return Object(m.jsxs)(d.a,{component:"p",className:"\n                  textLeft\n                  ".concat("\u041c\u0438\u0448\u0430"===e.user?"textRight":null," \n                  ").concat("Emma Stone"===e.user?"textCenter":null,"\n                "),children:[null!==e.user&&"null"!==e.user&&e.user?Object(m.jsxs)(d.a,{component:"b",color:"primary",children:["\xa0 ",e.user]}):null,"\xa0 ",e.message," \xa0"]},t)}))})]}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(d.a,{variant:"p",children:"\u041d\u0438\u0447\u0435\u0433\u043e \u0442\u0443\u0442 \u043d\u0435\u0442\u0443"}),Object(m.jsx)("br",{})]})})}var B=r(15),F=r(198),H=r(194),J=r(116),W=function(e){var t=e.text,r=e.setText,c=e.end,o=Object(n.useState)(""),s=Object(a.a)(o,2),l=s[0],i=s[1],u=Object(n.useState)(!1),j=Object(a.a)(u,2),d=j[0],b=j[1],O=Object(n.useRef)();Object(n.useEffect)((function(){return O.current=J.a.connect(D.socket),O.current.on("message",(function(e){r([].concat(Object(B.a)(t),[e])),b(!1)})),c.current.scrollIntoView({behavior:"smooth"}),function(){return O.current.disconnect()}}),[t,r,c]);var h=Object(n.useCallback)((function(e){e.preventDefault(),b(!0),O.current.emit("message",{message:l,user:localStorage.username}),i("")}),[l]);return Object(m.jsx)(v,{children:Object(m.jsx)("form",{onSubmit:h,children:Object(m.jsxs)(F.a,{container:!0,sx:{p:1},children:[Object(m.jsx)(F.a,{item:!0,xs:10,children:Object(m.jsx)(H.a,{required:!0,label:"\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0441\u044e\u0434\u0430",variant:"outlined",value:l,fullWidth:!0,onChange:function(e){return i(e.target.value)}})}),Object(m.jsx)(F.a,{item:!0,xs:2,sx:{mt:"11px",textAlign:"end"},children:Object(m.jsx)(C,{loading:d,type:"submit",color:"secondary",children:"Send"})})]})})})},q=r(96),P=r.n(q),z=r(111);function I(e){var t=e.logged,r=e.setLogged,c=Object(n.useState)({password:"",login:""}),o=Object(a.a)(c,2),s=o[0],l=o[1],i=Object(n.useState)({error:{login:!1,password:!1},login:"\u043b\u043e\u0433\u0438\u043d \u041d\u043e\u0443\u043d\u0435\u0439\u043c",password:"\u043f\u0430\u0440\u043e\u043b\u044c 1234"}),u=Object(a.a)(i,2),j=u[0],b=u[1],O=Object(n.useState)(!1),h=Object(a.a)(O,2),g=h[0],x=h[1];function f(){return(f=Object(z.a)(P.a.mark((function e(){var t,n;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={username:s.login,password:s.password},console.log("\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u044e:",t),e.next=4,fetch("".concat(D.AUTH,"/auth/login"),{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(t)});case 4:return e.next=6,e.sent.json();case 6:n=e.sent,console.log("\u041f\u0440\u0438\u0448\u043b\u043e:",n),!n.username||n.userError||n.passwordError?p(n):(localStorage.username=n.username,localStorage.token=n.token,console.log("\u0412\u0441\u0435 \u0437\u0431\u0441",localStorage),r(!0));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){e.userError?b({error:{login:!0,password:!0},login:e.userError,password:"\u0438 \u043f\u0430\u0440\u043e\u043b\u044c \u0442\u0432\u043e\u0439 \u0433\u043e\u0432\u043d\u043e"}):e.passwordError&&b({error:{login:!1,password:!0},login:"\u0442\u044b \u0442\u0443\u043f\u043e\u0439, ",password:e.passwordError}),x(!1)}function S(e){e.preventDefault(),x(!0),function(){f.apply(this,arguments)}(),l((function(e){return{login:e.login,password:""}}))}return Object(m.jsx)(v,{children:t?Object(m.jsxs)("div",{style:{textAlign:"end"},children:[Object(m.jsxs)(d.a,{variant:"label",children:[""!==s.login?s.login:localStorage.username," \xa0 \xa0"]}),Object(m.jsx)(k,{style:{marginLeft:10},color:"secondary",variant:"text",onClick:function(){delete localStorage.username,delete localStorage.token,console.log(localStorage),x(!1),r(!1),l({login:"",password:""}),b({error:{login:!1,password:!1},login:"\u043b\u043e\u0433\u0438\u043d \u041d\u043e\u0443\u043d\u0435\u0439\u043c",password:"\u043f\u0430\u0440\u043e\u043b\u044c 1234"})},children:"\u0412\u044b\u0439\u0442\u0438"})]}):Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("form",{onSubmit:function(e){return S(e)},children:[Object(m.jsx)(d.a,{variant:"label",sx:{mr:"25px"},children:"\u042d\u0439 \u044e \u0442\u044b \u043a\u0442\u043e? \u0430"}),Object(m.jsx)(C,{loading:g,type:"submit",color:"secondary",variant:"outlined",children:"\u0412o\u0439\u0442\u0438"}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)(H.a,{required:!0,fullWidth:!0,type:"username",error:j.error.login,label:j.login,vlaue:s.login,onChange:function(e){return l((function(t){return{login:e.target.value,password:t.password}}))}}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)(H.a,{required:!0,fullWidth:!0,type:"password",error:j.error.password,label:j.password,value:s.password,onChange:function(e){return l((function(t){return{login:t.login,password:e.target.value}}))}})]})})})}var U=r(199),G=r(112),V=r.n(G),Y=r(114),K=r.n(Y),Q=r(113),X=r.n(Q);function Z(e){var t=e.theme,r=e.colorMode,c=Object(n.useState)((function(){return"system"===localStorage.mode?"system":"light"===localStorage.mode?"light":"dark"===localStorage.mode?"dark":D.standartMode})),o=Object(a.a)(c,2),s=o[0],l=o[1],i=Object(n.useState)(),u=Object(a.a)(i,2),j=u[0],d=u[1];return Object(n.useEffect)((function(){return t.palette.mode,d(r.Color.colorDefiner),r.Color.colorDefiner}),[r.Color,t.palette.mode]),Object(m.jsxs)(v,{children:[Object(m.jsxs)(U.a,{color:"primary",exclusive:!0,value:s,onChange:function(e,t){"system"===t?(r.Mode.system(),l(t)):"light"===t?(r.Mode.light(),l(t)):"dark"===t&&(r.Mode.dark(),l(t))},children:[Object(m.jsxs)(E,{value:"system",children:["System \xa0",Object(m.jsx)(V.a,{})]}),Object(m.jsx)(E,{value:"light",children:Object(m.jsx)(X.a,{})}),Object(m.jsx)(E,{value:"dark",children:Object(m.jsx)(K.a,{})})]}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)(U.a,{size:"small",color:"primary",exclusive:!0,value:j,onChange:function(e,n){try{"system"===s?"light"===t.palette.mode?(r.Color.light[n](),d(n)):(r.Color.dark[n](),d(n)):"light"===s?(r.Color.light[n](),d(n)):"dark"===s&&(r.Color.dark[n](),d(n))}catch(c){return}},children:D.COLORS.map((function(e,t){return Object(m.jsx)(E,{value:e.name,children:e.Name},t)}))})]})}var $=r(204),_=r(115),ee=r.n(_);function te(e){var t=e.setSettings;return Object(m.jsx)(v,{bSh:"0px",nobg:!0,children:Object(m.jsxs)(d.a,{variant:"h4",children:["Emma Stone \xa0",Object(m.jsx)($.a,{color:"primary",onClick:function(){return t((function(e){return!e}))},children:Object(m.jsx)(ee.a,{})})]})})}function re(){return Object(m.jsx)(v,{children:Object(m.jsx)(d.a,{variant:"h4",children:"\u0416\u043e\u043f\u0430"})})}function ne(){var e=Object(n.useState)(function(){try{return JSON.parse(localStorage.text)}catch(e){return[]}}()||[]),t=Object(a.a)(e,2),r=t[0],c=t[1],o=Object(n.useState)((function(){return!(!localStorage.username||null===localStorage.username||"null"===localStorage.username)})),d=Object(a.a)(o,2),b=d[0],O=d[1],h=Object(n.useState)(!1),g=Object(a.a)(h,2),x=g[0],p=g[1],v=Object(j.a)(),S=Object(n.useContext)(f),k=Object(n.useRef)();return Object(m.jsxs)(i.a,{sx:{bgcolor:"background.default",color:"text.primary",minHeight:"100vh"},children:[Object(m.jsxs)(u.a,{className:"App",maxWidth:"sm",sx:{pt:5},children:[Object(m.jsx)(te,{setSettings:p}),x?Object(m.jsx)(Z,{theme:v,colorMode:S}):null,Object(m.jsx)(I,{logged:b,setLogged:O,text:r,setText:c}),Object(m.jsxs)(s.a,{children:[Object(m.jsx)(s.b,{to:"react-socket/",children:"Home"})," ",Object(m.jsx)(s.b,{to:"react-socket/alise",children:"Alise"}),Object(m.jsx)("br",{}),Object(m.jsx)("a",{href:"https://emmastonelover.github.io/react-socket/",children:"Home"})," ",Object(m.jsx)("a",{href:"https://emmastonelover.github.io/react-socket/alise",children:"Alise"}),Object(m.jsx)("br",{}),Object(m.jsxs)(l.c,{children:[Object(m.jsx)(l.a,{path:"react-socket/*",exact:!0,element:Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(A,{text:r,setText:c}),Object(m.jsx)(W,{text:r,setText:c,end:k})]})}),Object(m.jsx)(l.a,{path:"react-socket/alise",element:Object(m.jsx)(re,{})})]})]})]}),Object(m.jsx)("br",{ref:k})]})}o.a.render(Object(m.jsx)(p,{children:Object(m.jsx)(ne,{})}),document.getElementById("root"))}},[[150,1,2]]]);
//# sourceMappingURL=main.7a83f529.chunk.js.map