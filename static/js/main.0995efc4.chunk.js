(this.webpackJsonpreacttodolist=this.webpackJsonpreacttodolist||[]).push([[0],{48:function(e,n,t){},49:function(e,n,t){},62:function(e,n,t){"use strict";t.r(n);var c,o,a=t(1),i=t.n(a),r=t(34),l=t.n(r),s=(t(48),t(27)),j=t(41),u=t(26),b=(t(49),t(21)),d=t(67),h=t(22),O=t(40),f=t.n(O),p=t(2),m=Object(h.b)(d.a)(c||(c=Object(b.a)(["\n    margin-top: 5px;\n    text-align: left;\n    &, &:hover{","}\n    \n\n    &:hover{\n        .check-icon{\n        display: inline-block;\n        }\n    }\n\n    .check-icon{\n        display:none;\n        &:hover{\n            background-color: #e2e2e2;\n            border-radius: 3px;\n        }\n    }\n"])),(function(e){return e.isComplete&&Object(h.a)(o||(o=Object(b.a)(["\n    text-decoration: line-through;\n"])))}));var C=function(e){var n=e.atodo,t=e.onCheckBtnClick;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(m,{isComplete:n.isComplete,shouldFitContainer:!0,iconAfter:!n.isComplete&&Object(p.jsx)("span",{className:"check-icon",onClick:function(){return t(n.id)},children:Object(p.jsx)(f.a,{primaryColor:"#4fff4f"})}),children:n.name})})};var g=function(e){var n=e.todoList,t=e.onCheckBtnClick;return Object(p.jsx)(p.Fragment,{children:n.map((function(e){return Object(p.jsx)(C,{atodo:e,onCheckBtnClick:t},e.id)}))})},x=t(69),k=t(68),v="TODO_APP";var F=function(){var e=Object(a.useState)([]),n=Object(u.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)(""),i=Object(u.a)(o,2),r=i[0],l=i[1];Object(a.useEffect)((function(){var e=localStorage.getItem(v);e&&c(JSON.parse(e))}),[]),Object(a.useEffect)((function(){localStorage.setItem(v,JSON.stringify(t))}),[t]);var b=Object(a.useCallback)((function(e){l(e.target.value)}),[]),h=Object(a.useCallback)((function(e){c([{id:Object(k.a)(),name:r,isComplete:!1}].concat(Object(j.a)(t))),l("")}),[r,t]),O=Object(a.useCallback)((function(e){c((function(n){return n.map((function(n){return n.id===e?Object(s.a)(Object(s.a)({},n),{},{isComplete:!0}):n}))}))}),[]);return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{style:{width:"600px",color:"red"},children:"\u1ee8ng d\u1ee5ng To do List"}),Object(p.jsx)("h3",{children:"Danh s\xe1ch c\u1ea7n l\xe0m"}),Object(p.jsx)(x.a,{name:"add-todo",placeholder:"Th\xeam vi\u1ec7c c\u1ea7n l\xe0m...",elemAfterInput:Object(p.jsx)(d.a,{isDisabled:!r,appearance:"primary",onClick:h,children:"Th\xeam"}),css:{padding:"2px 4px 2px"},value:r,onChange:b}),Object(p.jsx)(g,{todoList:t,onCheckBtnClick:O})]})},S=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,71)).then((function(n){var t=n.getCLS,c=n.getFID,o=n.getFCP,a=n.getLCP,i=n.getTTFB;t(e),c(e),o(e),a(e),i(e)}))};l.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(F,{})}),document.getElementById("root")),S()}},[[62,1,2]]]);
//# sourceMappingURL=main.0995efc4.chunk.js.map