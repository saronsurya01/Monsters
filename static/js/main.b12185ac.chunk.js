(this["webpackJsonpmonster-rolodex"]=this["webpackJsonpmonster-rolodex"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(3),a=n.n(s),o=(n(12),n(4)),i=n(5),u=n(7),l=n(6),h=(n.p,n(13),n(14),n(15),n(0)),j=function(e){return Object(h.jsxs)("div",{className:"card-container",children:[Object(h.jsx)("img",{src:""}),Object(h.jsx)("img",{src:"https://robohash.org/".concat(e.name.id,"?set=set2&size=180x180")}),Object(h.jsx)("h2",{children:e.name.name}),Object(h.jsx)("p",{children:e.name.email})]})},d=function(e){return Object(h.jsx)("div",{className:"card-list",children:e.name.map((function(e){return Object(h.jsx)(j,{name:e})}))})},p=(n(17),function(e){return Object(h.jsx)("div",{children:Object(h.jsx)("input",{className:"search",type:e.type.type,onChange:function(t){e.updateState(t.target.value)},placeholder:e.type.placeholder})})}),m=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={monsters:[],searchFeild:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.monsters,c=t.searchFeild,r=n.filter((function(e){return e.name.toLowerCase().includes(c.toLowerCase())}));return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{style:{fontStyle:"Monster Kit"},children:"MONSTERS ROLEDEX"}),Object(h.jsx)(p,{type:{type:"search",placeholder:"Search Monster"},updateState:function(t){return e.setState({searchFeild:t})}}),Object(h.jsx)(d,{name:r})]})}}]),n}(c.Component),f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};a.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(m,{})}),document.getElementById("root")),f()}],[[18,1,2]]]);
//# sourceMappingURL=main.b12185ac.chunk.js.map