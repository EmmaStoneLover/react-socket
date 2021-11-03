(this["webpackJsonpreact-socket"]=this["webpackJsonpreact-socket"]||[]).push([[0],{111:function(e,t,r){},112:function(e,t,r){},127:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r(40),a=r.n(c),o=(r(111),r(13)),l=r(174),s=r(178),i=r(175),u=r(176),j=r(42),b=(r(112),r(1));function d(e){var t=e.children;return Object(b.jsx)(l.a,{sx:{m:2,p:2,boxShadow:5,borderRadius:3},children:t})}var O=r(173);function h(e){var t=e.text,r=e.setText,c=Object(n.useState)(!1),a=Object(o.a)(c,2),l=a[0],s=a[1];return Object(b.jsxs)(d,{children:[t.map((function(e,t){return Object(b.jsxs)(i.a,{component:"p",className:"\n              textLeft\n              ".concat("\u041c\u0438\u0448\u0430"===e.user?"textRight":""," \n              ").concat("Emma Stone"===e.user?"textCenter":"","\n              "),children:[null!==e.user&&"null"!==e.user&&e.user?Object(b.jsxs)(i.a,{variant:"b",color:"primary",children:["\xa0 ",e.user," \xa0"]}):"",e.message]},t)})),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{children:Object(b.jsxs)(O.a,{container:!0,style:{textAlign:"start"},children:[Object(b.jsx)(O.a,{item:!0,xs:2,children:Object(b.jsx)(u.a,{onClick:function(){return s((function(e){return!e}))},children:"\u2022\u2022\u2022"})}),l?Object(b.jsxs)(O.a,{item:!0,xs:10,children:[Object(b.jsx)(u.a,{color:"success",onClick:function(){localStorage.text=JSON.stringify(t),s(!1)},children:"Save text"}),Object(b.jsx)(u.a,{color:"error",onClick:function(){r([]),delete localStorage.text},children:"Delete text"})]}):""]})})]})}var g=r(14),x=r(167),m=r(169),f=r(91),p=function(e){var t=e.socket,r=e.text,c=e.setText,a=Object(n.useState)(""),l=Object(o.a)(a,2),s=l[0],u=l[1],j=Object(n.useState)(!1),d=Object(o.a)(j,2),O=d[0],h=d[1],p=Object(n.useRef)();Object(n.useEffect)((function(){return p.current=f.a.connect(t),p.current.on("message",(function(e){c([].concat(Object(g.a)(r),[e])),h(!1)})),function(){return p.current.disconnect()}}),[r,c,t]);var k=Object(n.useCallback)((function(e){e.preventDefault(),h(!0),p.current.emit("message",{message:s,user:localStorage.username}),u("")}),[s]);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(i.a,{variant:"h5",children:"\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0442\u0435\u043a\u0441\u0442"}),Object(b.jsx)("br",{}),Object(b.jsxs)("form",{onSubmit:k,children:[Object(b.jsx)(m.a,{loading:O,type:"submit",color:"secondary",variant:"outlined",children:"Send"}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)(x.a,{label:"\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0441\u044e\u0434\u0430",value:s,onChange:function(e){return u(e.target.value)},required:!0,fullWidth:!0})]})]})},k=r(77),v=r.n(k),S=r(89);function y(e){var t=e.AUTH,r=e.logged,c=e.setLogged,a=Object(n.useState)(""),l=Object(o.a)(a,2),s=l[0],j=l[1],d=Object(n.useState)(""),O=Object(o.a)(d,2),h=O[0],g=O[1],f=Object(n.useState)(!1),p=Object(o.a)(f,2),k=p[0],y=p[1];function C(){return(C=Object(S.a)(v.a.mark((function e(){var r,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={username:s,password:h},console.log("\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u044e:",r),e.next=4,fetch("".concat(t,"/auth/login"),{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(r)});case 4:return e.next=6,e.sent.json();case 6:n=e.sent,console.log("\u041f\u0440\u0438\u0448\u043b\u043e:",n),n.userError||n.passwordError||!n.username?(j(""),g(""),c(!1),y(!1),console.log("Errreeeeeeeeooeoeoeoeooeoeoeor")):(localStorage.username=n.username,localStorage.token=n.token,c(!0),console.log("\u0412\u0441\u0435 \u0437\u0431\u0441",localStorage));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e){e.preventDefault(),y(!0),function(){C.apply(this,arguments)}()}return Object(b.jsx)("div",{children:r?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(i.a,{variant:"label",children:[localStorage.username," \xa0 \xa0"]}),Object(b.jsx)(u.a,{style:{marginLeft:10},color:"secondary",variant:"outlined",onClick:function(){delete localStorage.username,delete localStorage.token,y(!1),console.log(localStorage),c(!1),j(""),g("")},children:"\u0412\u044b\u0439\u0442\u0438"})]}):Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("form",{onSubmit:function(e){return D(e)},children:[Object(b.jsx)(i.a,{variant:"label",style:{marginRight:25},children:"\u042d\u0439 \u044e \u0442\u044b \u043a\u0442\u043e? \u0430"}),Object(b.jsx)(m.a,{loading:k,type:"submit",color:"secondary",variant:"outlined",children:"\u0412o\u0439\u0442\u0438"}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)(x.a,{required:!0,fullWidth:!0,style:{maxWidth:500},type:"username",label:"\u043b\u043e\u0433\u0438\u043d \u041d\u043e\u0443\u043d\u0435\u0439\u043c",vlaue:s,onChange:function(e){return j(e.target.value)}}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)(x.a,{required:!0,fullWidth:!0,style:{maxWidth:500},type:"password",label:"\u043f\u0430\u0440\u043e\u043b\u044c 1234",value:h,onChange:function(e){return g(e.target.value)}})]})})})}var C=r(177),D=r(170),E=r(90),M=r(92),w=r(172),T=r(166),L=r(44),W=r(47),J=r(46),N=r(45),A=r(54),R=r(83),q=Object(n.createContext)({toggleColorMode:function(){}}),F=[{name:"yellow",color:T.a},{name:"blue",color:L.a},{name:"green",color:W.a},{name:"red",color:J.a},{name:"purple",color:N.a},{name:"orange",color:A.a}];function H(e){var t=e.children,r=Object(n.useState)(function(e){return"light"===e?"light":"dark"===e?"dark":void 0}(localStorage.darkMode)||"light"),c=Object(o.a)(r,2),a=c[0],l=c[1],s=Object(n.useState)({light:d(localStorage.colorLight)||L.a,dark:d(localStorage.colorDark)||W.a}),i=Object(o.a)(s,2),u=i[0],j=i[1];function d(e){var t=null;return F.forEach((function(r){e===r.name&&(t=r.color)})),t}var O=Object(n.useCallback)((function(e){var t=null;return F.forEach((function(r){e===r.color&&(t=r.name)})),t}),[]),h=Object(n.useCallback)((function(e,t){j("light"===e?function(e){return localStorage.colorLight=O(t),{light:t,dark:e.dark}}:function(e){return localStorage.colorDark=O(t),{light:e.light,dark:t}})}),[O]),g=Object(n.useCallback)((function(e){var t={};return F.forEach((function(r){t[r.name]=function(){return h("light"===e?"light":"dark",r.color)}})),t}),[h]),x=Object(n.useMemo)((function(){return{toggleDarkMode:function(){l((function(e){return e="light"===e?"dark":"light",localStorage.darkMode=e,e}))},toggleColorLight:g("light"),toggleColorDark:g("dark")}}),[g]),m=Object(n.useMemo)((function(){return Object(M.a)({palette:Object(E.a)({mode:a},"light"===a?{primary:u.light,secondary:u.light}:{primary:u.dark,secondary:u.dark,background:{default:R.a[800],paper:R.a[900]}})})}),[a,u]);return Object(b.jsx)(q.Provider,{value:x,children:Object(b.jsx)(w.a,{theme:m,children:t})})}function P(e){var t=e.theme,r=e.colorMode;return Object(b.jsxs)(d,{children:[Object(b.jsx)(C.a,{control:Object(b.jsx)(D.a,{onClick:r.toggleDarkMode,checked:"light"!==t.palette.mode}),label:"Dark Mode",labelPlacement:"start"}),Object(b.jsx)("br",{}),"light"===t.palette.mode?Object(b.jsx)("div",{children:F.map((function(e,t){return Object(b.jsx)(u.a,{onClick:r.toggleColorLight[e.name],children:e.name},t)}))}):Object(b.jsx)("div",{children:F.map((function(e,t){return Object(b.jsx)(u.a,{onClick:r.toggleColorDark[e.name],children:e.name},t)}))})]})}function U(){var e=Object(n.useState)(function(){try{return JSON.parse(localStorage.text)}catch(e){return[]}}()||[]),t=Object(o.a)(e,2),r=t[0],c=t[1],a=Object(n.useState)((function(){return!(!localStorage.username||null===localStorage.username||"null"===localStorage.username)})),O=Object(o.a)(a,2),g=O[0],x=O[1],m=Object(j.a)(),f=Object(n.useContext)(q),k=Object(n.useState)(!1),v=Object(o.a)(k,2),S=v[0],C=v[1];return Object(b.jsxs)(l.a,{sx:{bgcolor:"background.default",color:"text.primary",minHeight:"100vh"},children:[Object(b.jsxs)(s.a,{className:"App",maxWidth:"sm",children:[Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)(i.a,{variant:"h4",children:"Emma Stone"}),Object(b.jsx)("br",{}),Object(b.jsx)(u.a,{onClick:function(){return C((function(e){return!e}))},children:"Settings"}),S?Object(b.jsx)(P,{theme:m,colorMode:f}):"",Object(b.jsx)(d,{children:Object(b.jsx)(y,{AUTH:"https://emmastonenodejs.herokuapp.com",logged:g,setLogged:x,text:r,setText:c})}),r.length?Object(b.jsx)(h,{text:r,setText:c}):Object(b.jsxs)("div",{children:[Object(b.jsx)(i.a,{variant:"p",children:"\u041d\u0438\u0447\u0435\u0433\u043e \u0442\u0443\u0442 \u043d\u0435\u0442\u0443"}),Object(b.jsx)("br",{})]}),Object(b.jsx)(d,{children:Object(b.jsx)(p,{socket:"https://node7socket.herokuapp.com",text:r,setText:c})})]}),Object(b.jsx)("br",{})]})}a.a.render(Object(b.jsx)(H,{children:Object(b.jsx)(U,{})}),document.getElementById("root"))}},[[127,1,2]]]);
//# sourceMappingURL=main.d53281cc.chunk.js.map