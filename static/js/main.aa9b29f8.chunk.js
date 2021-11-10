(this["webpackJsonpreact-socket"]=this["webpackJsonpreact-socket"]||[]).push([[0],{111:function(e,t,r){},126:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r(40),a=r.n(o),c=(r(111),r(10)),l=r(175),s=r(179),i=r(177),u=r(42),j=(r(82),r(23)),d=r(1);function b(e){return Object(d.jsx)(l.a,Object(j.a)(Object(j.a)({},e),{},{sx:{m:2,p:2,boxShadow:5,borderRadius:3,bgcolor:"background.myBox"},children:e.children}))}var O=r(173),g=r(176);function h(e){return Object(d.jsx)(g.a,Object(j.a)(Object(j.a)({},e),{},{style:{textTransform:"none"},children:e.children}))}function m(e){var t=e.text,r=e.setText,o=Object(n.useState)(!1),a=Object(c.a)(o,2),l=a[0],s=a[1];return Object(d.jsx)(d.Fragment,{children:t.length?Object(d.jsxs)(b,{children:[t.map((function(e,t){return Object(d.jsxs)(i.a,{component:"p",className:"\n              textLeft\n              ".concat("\u041c\u0438\u0448\u0430"===e.user?"textRight":""," \n              ").concat("Emma Stone"===e.user?"textCenter":"","\n              "),children:[null!==e.user&&"null"!==e.user&&e.user?Object(d.jsxs)(i.a,{component:"b",color:"primary",children:["\xa0 ",e.user," \xa0"]}):"",e.message]},t)})),Object(d.jsx)("br",{}),Object(d.jsx)("div",{children:Object(d.jsxs)(O.a,{container:!0,style:{textAlign:"start"},children:[Object(d.jsx)(O.a,{item:!0,xs:2,children:Object(d.jsx)(h,{onClick:function(){return s((function(e){return!e}))},children:"\u2022\u2022\u2022"})}),l?Object(d.jsxs)(O.a,{item:!0,xs:10,children:["\xa0 \xa0",Object(d.jsx)(g.a,{color:"success",onClick:function(){localStorage.text=JSON.stringify(t),s(!1)},children:"Save text"}),Object(d.jsx)(g.a,{color:"error",onClick:function(){r([]),delete localStorage.text},children:"Delete text"})]}):""]})})]}):Object(d.jsxs)("div",{children:[Object(d.jsx)(i.a,{variant:"p",children:"\u041d\u0438\u0447\u0435\u0433\u043e \u0442\u0443\u0442 \u043d\u0435\u0442\u0443"}),Object(d.jsx)("br",{})]})})}var x=r(14),f=r(169),p=r(91),v=r(92),k=r(172),S=r(85),y=r(166),C=Object(n.createContext)({toggleColorMode:function(){}});function w(e){var t=e.children,r=localStorage.mode||J.standartMode,o=Object(n.useState)(r),a=Object(c.a)(o,2),l=a[0],s=a[1],i=Object(y.a)("(prefers-color-scheme: dark)"),u=Object(n.useState)({light:h(localStorage.colorLight)||J.standartColor.light,dark:h(localStorage.colorDark)||J.standartColor.dark}),b=Object(c.a)(u,2),O=b[0],g=b[1];function h(e){var t=null;return J.COLORS.forEach((function(r){e===r.name&&(t=r.color)})),t}Object(n.useEffect)((function(){if(r)return"system"===r?s(i?{ststem:!0,active:"dark"}:{ststem:!0,active:"light"}):void("light"===r?s({system:!1,active:"light"}):"dark"===r&&s({system:!1,active:"dark"}))}),[r,i]);var m=Object(n.useCallback)((function(e){var t=null;return J.COLORS.forEach((function(r){e===r.color&&(t=r.name)})),t}),[]),x=Object(n.useCallback)((function(e,t){g("light"===e?function(e){return localStorage.colorLight=m(t),{light:t,dark:e.dark}}:function(e){return localStorage.colorDark=m(t),{light:e.light,dark:t}})}),[m]),f=Object(n.useCallback)((function(e){var t={};return J.COLORS.forEach((function(r){t[r.name]=function(){return x("light"===e?"light":"dark",r.color)}})),t}),[x]),p=Object(n.useMemo)((function(){return Object(v.a)({palette:Object(j.a)({mode:l.active},"light"===l.active?{primary:O.light,secondary:O.light,background:{default:S.a[100],myBox:"white"}}:{primary:O.dark,secondary:O.dark,background:{default:S.a[900],myBox:"rgb(255, 255, 255, 0.05)"}})})}),[l,O]),w=Object(n.useMemo)((function(){return{Mode:{system:function(){localStorage.mode="system",s(Object(j.a)(Object(j.a)({},l),{},{system:!0}))},light:function(){localStorage.mode="light",s({system:!1,active:"light"})},dark:function(){localStorage.mode="dark",s({system:!1,active:"dark"})}},Color:{light:f("light"),dark:f("dark"),colorDefiner:m("light"===p.palette.mode?O.light:O.dark)}}}),[f,m,l,O,p.palette.mode]);return Object(d.jsx)(C.Provider,{value:w,children:Object(d.jsx)(k.a,{theme:p,children:t})})}var E=r(171);function L(e){return Object(d.jsx)(E.a,Object(j.a)(Object(j.a)({},e),{},{style:{textTransform:"none"},children:e.children}))}var M=r(178);function T(e){return Object(d.jsx)(M.a,Object(j.a)(Object(j.a)({},e),{},{style:{textTransform:"none"},children:e.children}))}var N=r(167),D=r(44),R=r(46),A=r(45),B=r(54),J={AUTH:"https://emmastonenodejs.herokuapp.com",socket:"https://node7socket.herokuapp.com",COLORS:[{name:"yellow",color:N.a,Name:"Yellow"},{name:"blue",color:D.a,Name:"Blue"},{name:"green",color:R.a,Name:"Green"},{name:"purple",color:A.a,Name:"Purple"},{name:"orange",color:B.a,Name:"Orange"}],standartMode:"system",standartColor:{light:D.a,dark:N.a}},W=function(e){var t=e.text,r=e.setText,o=e.end,a=Object(n.useState)(""),l=Object(c.a)(a,2),s=l[0],i=l[1],u=Object(n.useState)(!1),j=Object(c.a)(u,2),b=j[0],g=j[1],h=Object(n.useRef)();Object(n.useEffect)((function(){return h.current=p.a.connect(J.socket),h.current.on("message",(function(e){r([].concat(Object(x.a)(t),[e])),g(!1)})),o.current.scrollIntoView({behavior:"smooth"}),function(){return h.current.disconnect()}}),[t,r,o]);var m=Object(n.useCallback)((function(e){e.preventDefault(),g(!0),h.current.emit("message",{message:s,user:localStorage.username}),i("")}),[s]);return Object(d.jsx)("form",{onSubmit:m,children:Object(d.jsxs)(O.a,{container:!0,sx:{p:1},children:[Object(d.jsx)(O.a,{item:!0,xs:10,children:Object(d.jsx)(f.a,{required:!0,label:"\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0441\u044e\u0434\u0430",variant:"outlined",value:s,fullWidth:!0,onChange:function(e){return i(e.target.value)}})}),Object(d.jsx)(O.a,{item:!0,xs:2,sx:{mt:"11px",textAlign:"end"},children:Object(d.jsx)(L,{loading:b,type:"submit",color:"secondary",children:"Send"})})]})})},q=r(78),F=r.n(q),H=r(90);function P(e){var t=e.logged,r=e.setLogged,o=Object(n.useState)({password:"",login:""}),a=Object(c.a)(o,2),l=a[0],s=a[1],u=Object(n.useState)({error:{login:!1,password:!1},login:"\u043b\u043e\u0433\u0438\u043d \u041d\u043e\u0443\u043d\u0435\u0439\u043c",password:"\u043f\u0430\u0440\u043e\u043b\u044c 1234"}),j=Object(c.a)(u,2),b=j[0],O=j[1],g=Object(n.useState)(!1),m=Object(c.a)(g,2),x=m[0],p=m[1];function v(){return(v=Object(H.a)(F.a.mark((function e(){var t,n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={username:l.login,password:l.password},console.log("\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u044e:",t),e.next=4,fetch("".concat(J.AUTH,"/auth/login"),{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(t)});case 4:return e.next=6,e.sent.json();case 6:n=e.sent,console.log("\u041f\u0440\u0438\u0448\u043b\u043e:",n),!n.username||n.userError||n.passwordError?k(n):(localStorage.username=n.username,localStorage.token=n.token,console.log("\u0412\u0441\u0435 \u0437\u0431\u0441",localStorage),r(!0));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e){e.userError?O({error:{login:!0,password:!0},login:e.userError,password:"\u0438 \u043f\u0430\u0440\u043e\u043b\u044c \u0442\u0432\u043e\u0439 \u0433\u043e\u0432\u043d\u043e"}):e.passwordError&&O({error:{login:!1,password:!0},login:"\u0442\u044b \u0442\u0443\u043f\u043e\u0439, ",password:e.passwordError}),p(!1)}function S(e){e.preventDefault(),p(!0),function(){v.apply(this,arguments)}(),s((function(e){return{login:e.login,password:""}}))}return Object(d.jsx)("div",{children:t?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)(i.a,{variant:"label",children:[localStorage.username," \xa0 \xa0"]}),Object(d.jsx)(h,{style:{marginLeft:10},color:"secondary",variant:"outlined",onClick:function(){delete localStorage.username,delete localStorage.token,console.log(localStorage),p(!1),r(!1),s({login:"",password:""}),O({error:{login:!1,password:!1},login:"\u043b\u043e\u0433\u0438\u043d \u041d\u043e\u0443\u043d\u0435\u0439\u043c",password:"\u043f\u0430\u0440\u043e\u043b\u044c 1234"})},children:"\u0412\u044b\u0439\u0442\u0438"})]}):Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("form",{onSubmit:function(e){return S(e)},children:[Object(d.jsx)(i.a,{variant:"label",sx:{mr:"25px"},children:"\u042d\u0439 \u044e \u0442\u044b \u043a\u0442\u043e? \u0430"}),Object(d.jsx)(L,{loading:x,type:"submit",color:"secondary",variant:"outlined",children:"\u0412o\u0439\u0442\u0438"}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)(f.a,{required:!0,fullWidth:!0,type:"text",error:b.error.login,label:b.login,vlaue:l.login,onChange:function(e){return s((function(t){return{login:e.target.value,password:t.password}}))}}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)(f.a,{required:!0,fullWidth:!0,type:"text",error:b.error.password,label:b.password,value:l.password,onChange:function(e){return s((function(t){return{login:t.login,password:e.target.value}}))}})]})})})}var I=r(174);function U(e){var t=e.theme,r=e.colorMode,o=Object(n.useState)((function(){return"system"===localStorage.mode?"system":"light"===localStorage.mode?"light":"dark"===localStorage.mode?"dark":J.standartMode})),a=Object(c.a)(o,2),l=a[0],s=a[1],i=Object(n.useState)(),u=Object(c.a)(i,2),j=u[0],O=u[1];return Object(n.useEffect)((function(){return t.palette.mode,O(r.Color.colorDefiner),r.Color.colorDefiner}),[r.Color,t.palette.mode]),Object(d.jsxs)(b,{children:[Object(d.jsxs)(I.a,{color:"primary",exclusive:!0,value:l,onChange:function(e,t){"system"===t?(r.Mode.system(),s(t)):"light"===t?(r.Mode.light(),s(t)):"dark"===t&&(r.Mode.dark(),s(t))},children:[Object(d.jsx)(T,{value:"system",children:"System"}),Object(d.jsx)(T,{value:"light",children:"Light"}),Object(d.jsx)(T,{value:"dark",children:"Dark"})]}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)(I.a,{size:"small",color:"primary",exclusive:!0,value:j,onChange:function(e,n){try{"system"===l?"light"===t.palette.mode?(r.Color.light[n](),O(n)):(r.Color.dark[n](),O(n)):"light"===l?(r.Color.light[n](),O(n)):"dark"===l&&(r.Color.dark[n](),O(n))}catch(o){return}},children:J.COLORS.map((function(e,t){return Object(d.jsx)(T,{value:e.name,children:e.Name},t)}))})]})}function z(){var e=Object(n.useState)(function(){try{return JSON.parse(localStorage.text)}catch(e){return[]}}()||[]),t=Object(c.a)(e,2),r=t[0],o=t[1],a=Object(n.useState)((function(){return!(!localStorage.username||null===localStorage.username||"null"===localStorage.username)})),j=Object(c.a)(a,2),O=j[0],g=j[1],h=Object(u.a)(),x=Object(n.useContext)(C),f=Object(n.useRef)();return Object(d.jsxs)(l.a,{sx:{bgcolor:"background.default",color:"text.primary",minHeight:"100vh"},children:[Object(d.jsxs)(s.a,{className:"App",maxWidth:"sm",children:[Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)(i.a,{variant:"h4",children:"Emma Stone"}),Object(d.jsx)("br",{}),Object(d.jsx)(U,{theme:h,colorMode:x}),Object(d.jsx)(b,{children:Object(d.jsx)(P,{logged:O,setLogged:g,text:r,setText:o})}),Object(d.jsx)(m,{text:r,setText:o}),Object(d.jsx)(b,{children:Object(d.jsx)(W,{text:r,setText:o,end:f})})]}),Object(d.jsx)("br",{ref:f})]})}a.a.render(Object(d.jsx)(w,{children:Object(d.jsx)(z,{})}),document.getElementById("root"))},82:function(e,t,r){}},[[126,1,2]]]);
//# sourceMappingURL=main.aa9b29f8.chunk.js.map