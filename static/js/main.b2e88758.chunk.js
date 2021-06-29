(this["webpackJsonppomodoro-clock"]=this["webpackJsonppomodoro-clock"]||[]).push([[0],{12:function(e,t,s){},15:function(e,t,s){},16:function(e,t,s){},17:function(e,t,s){"use strict";s.r(t);var n=s(0),c=s.n(n),a=s(7),r=s.n(a),o=(s(12),s(13),s(6)),i=s(2),l=s(20),d=s(1);function b(e){var t=Math.floor(e.store.breakLength/60);return Object(d.jsxs)("div",{className:"mx-1 flex-1 grid grid-rows-2 grid-cols-3 text-center justify-items-center content-center align-middle",children:[Object(d.jsx)("h2",{id:"break-label",className:"col-span-3",children:"Break Length"}),Object(d.jsx)("button",{onClick:function(){e.dispatch({type:O.BREAK_INC})},id:"break-increment",className:"btn",children:Object(d.jsx)("i",{className:"bi bi-plus-lg"})}),Object(d.jsx)("span",{id:"break-length",className:"text-xl",children:t}),Object(d.jsx)("button",{onClick:function(){e.dispatch({type:O.BREAK_DEC})},id:"break-decrement",className:"btn",children:Object(d.jsx)("i",{className:"bi bi-dash-lg"})})]})}function u(e){var t=Math.floor(e.store.sessionLength/60);return Object(d.jsxs)("div",{className:"mx-1 flex-1 grid grid-rows-2 grid-cols-3 text-center justify-items-center content-center align-middle",children:[Object(d.jsx)("h2",{id:"session-label",className:"col-span-3",children:"Session Length"}),Object(d.jsx)("button",{onClick:function(){e.dispatch({type:O.SESSION_INC})},id:"session-increment",className:"btn",children:Object(d.jsx)("i",{className:"bi bi-plus-lg"})}),Object(d.jsx)("span",{id:"session-length",className:"text-xl",children:t}),Object(d.jsx)("button",{onClick:function(){e.dispatch({type:O.SESSION_DEC})},id:"session-decrement",className:"btn",children:Object(d.jsx)("i",{className:"bi bi-dash-lg"})})]})}function j(e){return Object(d.jsxs)("div",{className:"text-white flex justify-around",children:[Object(d.jsx)("button",{id:"start_stop",className:"btn w-4/12",onClick:function(){e.dispatch({type:O.SET_PAUSED,payload:!e.store.paused})},children:e.store.paused?"Play":"Pause"}),Object(d.jsx)("button",{id:"reset",className:"btn w-4/12",onClick:function(){console.log("reset button pressed"),e.dispatch({type:O.RESET,setcountdown:e.setcountdown})},children:"Reset"})]})}function h(e){var t=Math.floor(e.seconds/60),s=e.seconds-60*t;return 1===String(t).length&&(t="0"+String(t)),1===String(s).length&&(s="0"+String(s)),Object(d.jsxs)("div",{className:"mb-12",children:[Object(d.jsx)("h2",{id:"timer-label",className:"text-3xl",children:e.break?"Break":"Session"}),Object(d.jsx)("div",{id:"timer-container",children:Object(d.jsxs)("span",{id:"time-left",className:"text-8xl",children:[t,":",s]})})]})}s(15),s(16);var O={SET_PAUSED:"set-paused",RESET:"reset",SET_BREAK:"set-break",SESSION_INC:"session-inc",SESSION_DEC:"session-dec",BREAK_INC:"break-inc",BREAK_DEC:"break-dec"},p=1500,g=function(e,t){switch(console.log("action dispatched",t),t.type){case O.SET_PAUSED:return Object(i.a)(Object(i.a)({},e),{},{paused:t.payload});case O.RESET:t.setcountdown((function(e){return Object(i.a)(Object(i.a)({},e),{},{seconds:p})}));var s=document.getElementById("beep");return s.pause(),s.currentTime=0,Object(i.a)(Object(i.a)({},e),{},{paused:!0,break:!1,breakLength:300,sessionLength:p});case O.SESSION_INC:return!e.paused||e.sessionLength>=3600?e:Object(i.a)(Object(i.a)({},e),{},{sessionLength:e.sessionLength+60});case O.SESSION_DEC:return!e.paused||e.sessionLength<=60?e:Object(i.a)(Object(i.a)({},e),{},{sessionLength:e.sessionLength-60});case O.BREAK_INC:return!e.paused||e.breakLength>=3600?e:Object(i.a)(Object(i.a)({},e),{},{breakLength:e.breakLength+60});case O.BREAK_DEC:return!e.paused||e.breakLength<=60?e:Object(i.a)(Object(i.a)({},e),{},{breakLength:e.breakLength-60});case O.SET_BREAK:return console.log("set break",t.payload,"end",e),e.break?t.setcountdown((function(e){return Object(i.a)(Object(i.a)({},e),{},{seconds:p})})):t.setcountdown((function(e){return Object(i.a)(Object(i.a)({},e),{},{seconds:300})})),Object(i.a)(Object(i.a)({},e),{},{break:t.payload});default:return e}};var f=function(){var e=Object(n.useState)({seconds:p}),t=Object(o.a)(e,2),s=t[0],c=t[1],a=Object(n.useReducer)(g,{paused:!0,break:!1,sessionLength:p,breakLength:300}),r=Object(o.a)(a,2),f=r[0],m=r[1];Object(n.useEffect)((function(){f.break||(console.log("set seconds",f.sessionLength),c((function(e){return Object(i.a)(Object(i.a)({},e),{},{seconds:f.sessionLength})})))}),[f.sessionLength,f.break]),Object(n.useEffect)((function(){f.break&&(console.log("set seconds",f.breakLength),c((function(e){return Object(i.a)(Object(i.a)({},e),{},{seconds:f.breakLength})})))}),[f.breakLength,f.break]);var x=Object(n.useRef)(void 0);return Object(n.useEffect)((function(){f.paused?window.clearInterval(x.current):x.current=window.setInterval((function(){c((function(e){return Object(i.a)(Object(i.a)({},e),{},{seconds:e.seconds-1})}))}),1e3)}),[f.paused]),Object(n.useEffect)((function(){if(s.seconds<1){console.log("this useEffect is triggered",s.seconds);var e=document.getElementById("beep");e.volume=.1,e.play(),m({type:O.SET_BREAK,payload:!f.break,setcountdown:c})}}),[f.break,s.seconds]),Object(d.jsxs)("div",{className:"App-container h-screen w-screen flex flex-col justify-center",children:[Object(d.jsx)(l.a.div,{className:"overlay1 absolute w-full h-full z-0 bg-gradient-to-tr from-purple-500 via-blue-500 to-green-500"}),Object(d.jsx)(l.a.div,{className:"overlay2 absolute w-full h-full z-0 bg-gradient-to-tr from-yellow-500 via-purple-500 via-purple-500 to-blue-500 opacity-0",animate:f.break?{opacity:1}:{opacity:0},transition:{duration:3}}),Object(d.jsxs)("div",{className:"App mx-auto w-11/12 h-4/6 text-center flex flex-col justify-center  rounded-lg p-2 z-10 max-w-4xl",children:[Object(d.jsx)(h,{seconds:s.seconds,break:f.break}),Object(d.jsxs)("div",{className:"flex justify-center mb-4",children:[Object(d.jsx)(u,{store:f,dispatch:m}),Object(d.jsx)(b,{store:f,dispatch:m})]}),Object(d.jsx)(j,{store:f,dispatch:m,setcountdown:c}),Object(d.jsx)("audio",{id:"beep",src:"alarm.wav",type:"audio/wav",className:"hidden",children:"Your browser does not support the audio element."})]})]})},m=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,21)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;s(e),n(e),c(e),a(e),r(e)}))};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),m()}},[[17,1,2]]]);
//# sourceMappingURL=main.b2e88758.chunk.js.map