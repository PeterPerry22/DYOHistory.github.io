(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{34:function(e,t,a){},44:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(27),c=a.n(s),i=(a(18),a(9)),o=a(2),l=(a(34),a(8)),r=a.n(l),j=a(0),d=function(){function e(){var e=r()("#navbarSupportedContent").find(".active"),t=e.innerHeight(),a=e.innerWidth(),n=e.position(),s=e.position();r()(".hori-selector").css({top:n.top+"px",left:s.left+"px",height:t+"px",width:a+"px"}),r()("#navbarSupportedContent").on("click","li",(function(e){r()("#navbarSupportedContent ul li").removeClass("active"),r()(this).addClass("active");var t=r()(this).innerHeight(),a=r()(this).innerWidth(),n=r()(this).position(),s=r()(this).position();r()(".hori-selector").css({top:n.top+"px",left:s.left+"px",height:t+"px",width:a+"px"})}))}return Object(n.useEffect)((function(){e(),r()(window).on("resize",(function(){setTimeout((function(){e()}),500)}))}),[]),Object(j.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-mainbg",children:[Object(j.jsx)("button",{className:"navbar-toggler",onClick:function(){setTimeout((function(){e()}))},type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("i",{className:"fas fa-bars text-white"})}),Object(j.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(j.jsxs)("ul",{className:"navbar-nav ml-auto nav-fill w-100",children:[Object(j.jsxs)("div",{className:"hori-selector",children:[Object(j.jsx)("div",{className:"left"}),Object(j.jsx)("div",{className:"right"})]}),Object(j.jsx)("li",{className:"nav-item active",children:Object(j.jsxs)(i.b,{className:"nav-link",to:"/",exact:!0,children:[Object(j.jsx)("i",{className:"fas fa-tachometer-alt"}),"Anthology"]})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsxs)(i.b,{className:"nav-link",to:"/news",exact:!0,children:[Object(j.jsx)("i",{className:"far fa-address-book"}),"News"]})}),Object(j.jsx)("ui",{className:"navbar-logo-ui",children:Object(j.jsx)(i.b,{className:"navbar-logo",to:"/",exact:!0,children:"Modern Luddism"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsxs)(i.b,{className:"nav-link",to:"/store",exact:!0,children:[Object(j.jsx)("i",{className:"far fa-clone"}),"Support"]})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsxs)(i.b,{className:"nav-link",to:"/profile",exact:!0,children:[Object(j.jsx)("i",{className:"far fa-copy"}),"Profile"]})})]})})]})},b=(a(44),a(29));var h=function(){return document.body.style="background: #7A00B2;",Object(j.jsx)("div",{className:"App-bg",children:Object(j.jsx)("div",{className:"Doc",children:Object(j.jsx)(b.a,{allowtransparency:"true",src:"https://docs.google.com/document/d/e/2PACX-1vQBKJKOAI-EM2GfNLCml4ozkxl3POVAUk-shrFzMtIrVlNLvnWdyXHZNHG_P6REmObTUe2XUl1ufsQ_/pub?embedded=true",width:"900px",height:"1000px",id:"myId",className:"myClassname",display:"flex",text:!0,align:"right",position:"relative",frameborder:"10",style:"background: #7A00B2;"})})})},p=function(){return Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("h1",{className:"text-center",style:{paddingTop:"30%"},children:"News"})})},x=function(){return Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("h1",{className:"text-center",style:{paddingTop:"30%"},children:"Store"})})},u=a(11),O=a(14),m=a.n(O),f=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(""),i=Object(u.a)(c,2),o=i[0],l=i[1],r=Object(n.useState)(""),d=Object(u.a)(r,2),b=d[0],h=d[1],p=Object(n.useState)(""),x=Object(u.a)(p,2),O=x[0],f=x[1],v=Object(n.useState)(!1),g=Object(u.a)(v,2),N=g[0],w=g[1];m.a.defaults.withCredentials=!0;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("div",{className:"registration",children:[Object(j.jsx)("h1",{children:"Registration"}),Object(j.jsx)("label",{children:"Username"}),Object(j.jsx)("input",{type:"text",onChange:function(e){s(e.target.value)}}),Object(j.jsx)("label",{children:"Password"}),Object(j.jsx)("input",{type:"password",onChange:function(e){l(e.target.value)}}),Object(j.jsx)("button",{onClick:function(){m.a.post("http://localhost:3002/register",{username:a,password:o}).then((function(e){console.log(e)}))},children:"Register"})]}),Object(j.jsxs)("div",{className:"login",children:[Object(j.jsx)("h1",{children:"Login"}),Object(j.jsx)("input",{type:"text",placeholder:"Username...",onChange:function(e){h(e.target.value)}}),Object(j.jsx)("input",{type:"password",placeholder:"Password...",onChange:function(e){f(e.target.value)}}),Object(j.jsx)("button",{onClick:function(){m.a.post("http://localhost:3002/login",{username:b,password:O}).then((function(e){e.data.error?w(!1):(console.log(e.data),w(!0))}))},children:"Login"})]}),N&&Object(j.jsx)("button",{onClick:function(){m.a.get("http://localhost:3002/profile").then((function(e){console.log(e)}))},children:"Check if Authenticated"})]})},v=function(){return Object(j.jsx)(i.a,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)(d,{}),Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{path:"/",component:h,exact:!0}),Object(j.jsx)(o.a,{path:"/news",component:p,exact:!0}),Object(j.jsx)(o.a,{path:"/store",component:x,exact:!0}),Object(j.jsx)(o.a,{path:"/profile",component:f,exact:!0}),Object(j.jsx)(o.a,{path:"*",component:h})]})]})})};c.a.render(Object(j.jsx)(v,{}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.1702dc15.chunk.js.map