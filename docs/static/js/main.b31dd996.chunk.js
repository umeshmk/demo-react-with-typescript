(this["webpackJsonpdemo-react-with-typescript"]=this["webpackJsonpdemo-react-with-typescript"]||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var s=t(1),n=t.n(s),c=t(8),r=t.n(c),i=(t(14),t(5)),m=(t(15),t(0)),l=function(e){var a=e.member;return Object(m.jsx)("div",{className:"list-wrap",children:a.map((function(e){return Object(m.jsxs)("div",{className:"list",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"avatar",children:Object(m.jsx)("img",{src:e.avatar,alt:""})}),Object(m.jsx)("div",{className:"name",children:e.name}),Object(m.jsxs)("div",{className:"age",children:["Age : ",e.age]})]}),Object(m.jsx)("div",{className:"message",children:Object(m.jsx)("q",{children:e.message})})]})}))})},j=t(9),b=t(4),g=t(7),h=function(e){var a=e.member,t=e.setMember,n=Object(s.useState)({name:"",age:"",avatar:"",message:""}),c=Object(i.a)(n,2),r=c[0],l=c[1],h=function(e){l(Object(g.a)(Object(g.a)({},r),{},Object(b.a)({},e.target.name,[e.target.value])))};return Object(m.jsxs)("div",{className:"register-wrap",children:[Object(m.jsx)("input",{type:"text",className:"",placeholder:"Name",name:"name",value:r.name,onChange:h}),Object(m.jsx)("input",{type:"number",className:"",placeholder:"Age",name:"age",value:r.age,onChange:h}),Object(m.jsx)("input",{type:"text",className:"",placeholder:"Avatar Url",name:"avatar",value:r.avatar,onChange:h}),Object(m.jsx)("textarea",{className:"",placeholder:"Message (Optional)",name:"message",value:r.message,onChange:h}),Object(m.jsx)("button",{onClick:function(){r.name&&r.avatar&&r.age&&(t([{name:r.name,age:parseInt(r.age),avatar:r.avatar,message:r.message}].concat(Object(j.a)(a))),l({name:"",age:"",avatar:"",message:""}))},children:"Register"})]})};var o=function(){var e=Object(s.useState)([{name:"umesh",age:30,avatar:"https://avatars.githubusercontent.com/u/19268386?v=4",message:"Ok. I'll be there."},{name:"Sachin",age:44,avatar:"https://c.ndtvimg.com/2021-03/u0812bl8_sachin-tendulkar-afp_625x300_27_March_21.jpg?q=60",message:"Yeah Definately, I will be coming."}]),a=Object(i.a)(e,2),t=a[0],n=a[1];return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Register For Event"}),Object(m.jsx)(h,{member:t,setMember:n}),Object(m.jsx)("h1",{children:"Members Registered For Event"}),Object(m.jsx)(l,{member:t})]})},u=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,18)).then((function(a){var t=a.getCLS,s=a.getFID,n=a.getFCP,c=a.getLCP,r=a.getTTFB;t(e),s(e),n(e),c(e),r(e)}))};r.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(o,{})}),document.getElementById("root")),u()}},[[17,1,2]]]);
//# sourceMappingURL=main.b31dd996.chunk.js.map