(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(5),s=a(2),c=a(7),l=a(1),o=(a(14),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}]),d=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}];function u(e){return Math.max.apply(Math,Object(r.a)(e.map((function(e){return e.id}))))+1}var m=a(9),j=a.n(m),b=a(0),h=function(e){var t=e.user;return Object(b.jsx)("a",{className:"UserInfo",href:"mailto:".concat(null===t||void 0===t?void 0:t.email),children:null===t||void 0===t?void 0:t.name})},O=function(e){var t=e.todo;return Object(b.jsxs)("article",{"data-id":t.id,className:j()("TodoInfo",{"TodoInfo--completed":t.completed}),children:[Object(b.jsx)("h2",{className:"TodoInfo__title",children:t.title}),t.user&&Object(b.jsx)(h,{user:t.user})]})},f=function(e){var t=e.todos;return Object(b.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(b.jsx)(O,{todo:e},e.id)}))})};var p=function(){var e=Object(l.useState)(""),t=Object(s.a)(e,2),a=t[0],n=t[1],i=Object(l.useState)(0),m=Object(s.a)(i,2),j=m[0],h=m[1],O=Object(l.useState)(!1),p=Object(s.a)(O,2),v=p[0],x=p[1],y=Object(l.useState)(!1),S=Object(s.a)(y,2),N=S[0],_=S[1],I=Object(l.useState)(d),g=Object(s.a)(I,2),C=g[0],k=g[1],D=function(e){return e.map((function(e){var t=o.find((function(t){return t.id===e.userId}));return Object(c.a)(Object(c.a)({},e),{},{user:t||null})}))}(C);return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"Add todo form"}),Object(b.jsxs)("form",{action:"/api/todos",method:"POST",onSubmit:function(e){if(e.preventDefault(),!a||!j)return x(!a),void _(!j);k([].concat(Object(r.a)(C),[{id:u(C),title:a,completed:!1,userId:j}])),n(""),h(0),x(!1),_(!1)},children:[Object(b.jsxs)("div",{className:"field",children:[Object(b.jsx)("label",{htmlFor:"title",className:"field__label",children:"Title:"}),Object(b.jsx)("input",{id:"title",type:"text","data-cy":"titleInput",placeholder:"Enter a title",value:a,onChange:function(e){var t=e.target.value;n(t.replace(/[^a-z\u0430\u0431\u0432\u0433\u0491\u0434\u0435\u0454\u0436\u0437\u0438\u0456\u0457\u0439\u043a\u043b\u043c\u043d\u043e\u043f\u0440\u0441\u0442\u0443\u0444\u0445\u0446\u0447\u0448\u0449\u044c\u044e\u044f0-9\s']()/gi,"")),x(!1)}}),v&&Object(b.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(b.jsxs)("div",{className:"field",children:[Object(b.jsx)("label",{htmlFor:"user",className:"field__label",children:"User:"}),Object(b.jsxs)("select",{"data-cy":"userSelect",id:"user",value:j,onChange:function(e){h(+e.target.value),_(!1)},children:[Object(b.jsx)("option",{value:"0",children:"Choose a user"}),o.map((function(e){return Object(b.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),N&&Object(b.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(b.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(b.jsx)(f,{todos:D})]})};i.a.render(Object(b.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.52f1d64d.chunk.js.map