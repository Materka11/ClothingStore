(this.webpackJsonpclothingstore=this.webpackJsonpclothingstore||[]).push([[0],[,,,,,,,,,,,function(e,c,t){},,,,,,,function(e,c,t){},function(e,c,t){},,function(e,c,t){},,,,,,function(e,c,t){},function(e,c,t){},function(e,c,t){},,function(e,c,t){},function(e,c,t){"use strict";t.r(c);var n=t(1),s=t.n(n),a=t(12),i=t.n(a),r=(t(18),t(4)),j=(t(11),t(19),t(0));var o=function(e){var c=e.classNone;return Object(j.jsxs)("div",{className:"newsletter ".concat(c),children:[Object(j.jsx)("h1",{children:"Zapisz si\u0119 do newslettera"}),Object(j.jsx)("h2",{children:"Zarejestruj si\u0119 i b\u0105d\u017a na bie\u017c\u0105co z nowo\u015bciami i okazjami"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{children:"Tw\xf3j adres e-mail"}),Object(j.jsx)("input",{type:"text"}),Object(j.jsx)("h1",{children:"Zarz\u0105dzaj preferencjami"}),Object(j.jsx)("h1",{children:"Co najbardziej Ci\u0119 interesuje?"}),Object(j.jsxs)("label",{className:"radio",children:[Object(j.jsx)("input",{type:"radio",name:"fashion"}),Object(j.jsx)("span",{}),Object(j.jsx)("h2",{children:"Moda damska"})]}),Object(j.jsxs)("label",{className:"radio",children:[Object(j.jsx)("input",{type:"radio",name:"fashion"}),Object(j.jsx)("span",{}),Object(j.jsx)("h2",{children:"Moda m\u0119ska"})]}),Object(j.jsx)("button",{children:"Zapisz mnie"}),Object(j.jsx)("p",{children:"Sprawd\u017a nasz\u0105 Polityk\u0119 Prywatno\u015bci i dowiedz si\u0119, w jaki spos\xf3b przetwarzamy dane. W ka\u017cdej chwili mo\u017cesz przerwa\u0107 subskrybcj\u0119 newslettera za darmo."})]})]})},l=(t(21),t(3)),b=t(7),d=t.p+"static/media/logo.d16de761.png";var u=function(e){var c=e.classNone;return Object(j.jsxs)("div",{className:"footer ".concat(c),children:[Object(j.jsx)("img",{src:d,alt:"logo"}),Object(j.jsx)("h1",{children:"Do\u0142\u0105cz do nas"}),Object(j.jsxs)("div",{children:[Object(j.jsx)(l.a,{className:"icon",icon:b.a}),Object(j.jsx)(l.a,{className:"icon",icon:b.b}),Object(j.jsx)(l.a,{className:"icon",icon:b.c})]})]})};t(27),t.p;t(28);t(29);var O=t(5);var h=function(e){var c=e.classNone,t=e.classInput,n=e.classNoneBorder,a=e.classLeftIcon,i=e.handleClickBack,r=e.handleClickInput;return Object(j.jsxs)(s.a.Fragment,{children:[Object(j.jsxs)("div",{className:"header ".concat(c),children:[Object(j.jsx)("img",{src:d,alt:"logo"}),Object(j.jsxs)("div",{children:[Object(j.jsx)(l.a,{className:"icon",icon:O.h}),Object(j.jsx)(l.a,{className:"icon",icon:O.k}),Object(j.jsx)(l.a,{className:"icon",icon:O.o})]})]}),Object(j.jsxs)("div",{className:"inputDiv ".concat(n),children:[Object(j.jsx)(l.a,{className:"icon left ".concat(a),icon:O.b,onClick:i}),Object(j.jsx)("input",{type:"text",placeholder:"Szukaj...",className:"input ".concat(t),onClick:r}),Object(j.jsx)(l.a,{className:"icon right",icon:O.i})]})]})};var x=t(10),p=t.n(x),m=t(13);var f=function(e){var c=Object(n.useState)(null),t=Object(r.a)(c,2),s=t[0],a=t[1],i=Object(n.useState)(null),j=Object(r.a)(i,2),o=j[0],l=j[1],b=Object(n.useState)(!0),d=Object(r.a)(b,2),u=d[0],O=d[1];return Object(n.useEffect)((function(){var c=function(){var c=Object(m.a)(p.a.mark((function c(){var t,n;return p.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return O(!0),c.prev=1,c.next=4,fetch(e);case 4:return t=c.sent,c.next=7,t.json();case 7:n=c.sent,a(n),O(!1),c.next=16;break;case 12:c.prev=12,c.t0=c.catch(1),l(c.t0),O(!1);case 16:case"end":return c.stop()}}),c,null,[[1,12]])})));return function(){return c.apply(this,arguments)}}();c()}),[e]),{loading:u,error:o,data:s}};t(31);var v=function(e){var c=e.classNone,t=f("http://192.168.8.107:1337/products"),s=t.loading,a=t.error,i=t.data,o=Object(n.useState)(!1),b=Object(r.a)(o,2),d=b[0],u=b[1],h=Object(n.useState)(""),x=Object(r.a)(h,2),p=x[0],m=x[1],v=Object(n.useState)(O.a),N=Object(r.a)(v,2),g=N[0],k=N[1],z=Object(n.useState)("none"),S=Object(r.a)(z,2),w=S[0],C=S[1];return s?Object(j.jsx)("h1",{children:"loading..."}):a?Object(j.jsx)("h1",{children:"Error..."}):Object(j.jsxs)("div",{className:"items ".concat(c),children:[Object(j.jsxs)("div",{className:"upSubcategories",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)(l.a,{className:"icon",icon:O.f}),Object(j.jsx)("h2",{children:"Filtr"})]}),Object(j.jsx)("h1",{children:"Wszystko"})]}),Object(j.jsx)("div",{className:"subcategories",children:function(e){var c=[],t={};for(var n in e)t[e[n].subcategories[0].id]=e[n];for(var s in t)c.push(t[s]);return c}(i).map((function(e){return e.subcategories.filter((function(c){return 0===e.subcategories.indexOf(c)})).map((function(e){return Object(j.jsx)("button",{children:Object(j.jsx)("span",{children:e.name})},e.id)}))}))}),Object(j.jsxs)("div",{className:"sortDiv",children:[Object(j.jsxs)("button",{className:"sort ".concat(p),onClick:function(){d?(m(""),k(O.a),C("none"),u(!1)):(m("noneBorderBotton"),k(O.c),C(""),u(!0))},children:[Object(j.jsx)("span",{children:"Sortuj"}),Object(j.jsx)(l.a,{className:"icon",icon:g})]}),Object(j.jsxs)("div",{className:w,children:[Object(j.jsx)("span",{children:"Popularno\u015b\u0107"}),Object(j.jsx)("span",{children:"Nowo\u015bci"}),Object(j.jsx)("span",{children:"Najni\u017csza cena"}),Object(j.jsx)("span",{children:"Najwy\u017csza cena"}),Object(j.jsx)("div",{})]})]}),Object(j.jsx)("div",{className:"allProducts",children:i.map((function(e){return Object(j.jsxs)("div",{className:"product",children:[Object(j.jsx)("div",{className:"image",children:Object(j.jsx)("img",{src:"http://192.168.8.107:1337"+e.photos[0].url,alt:"product image"})}),Object(j.jsx)("div",{className:"backgroundPurple"}),Object(j.jsxs)("div",{className:"productStats",children:[Object(j.jsx)("h1",{children:e.brand.name}),Object(j.jsx)("h2",{children:e.subcategories[0].name}),Object(j.jsxs)("span",{children:[e.price," z\u0142"]}),Object(j.jsxs)("div",{className:"productOptions",children:[Object(j.jsx)("h1",{children:"ROZMIARY"}),e.sizes.map((function(e){return Object(j.jsx)("span",{children:e.name},e.id)})),Object(j.jsx)("h1",{children:"KOLORY"}),e.colors.map((function(e){return Object(j.jsx)("span",{children:e.name},e.id)})),Object(j.jsx)("button",{children:"WI\u0118CEJ SZCZEG\xd3\u0141\xd3W"})]})]})]},e.id)}))})]})};var N=function(){var e=Object(n.useState)(!1),c=Object(r.a)(e,2),t=(c[0],c[1]),a=Object(n.useState)(""),i=Object(r.a)(a,2),l=i[0],b=i[1],d=Object(n.useState)("input"),O=Object(r.a)(d,2),x=O[0],p=O[1],m=Object(n.useState)("none"),f=Object(r.a)(m,2),N=f[0],g=f[1],k=Object(n.useState)(""),z=Object(r.a)(k,2),S=z[0],w=z[1];return Object(j.jsxs)(s.a.Fragment,{children:[Object(j.jsx)(h,{classNone:l,classInput:x,classNoneBorder:S,classLeftIcon:N,handleClickBack:function(){t(!1),b(""),p("input"),g("none"),w("")},handleClickInput:function(){t(!0),b("none"),p("input-active"),g(""),w("noneBorder")}}),Object(j.jsx)(v,{classNone:l}),Object(j.jsx)(o,{classNone:l}),Object(j.jsx)(u,{classNone:l})]})};var g=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(N,{})})},k=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,33)).then((function(c){var t=c.getCLS,n=c.getFID,s=c.getFCP,a=c.getLCP,i=c.getTTFB;t(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root")),k()}],[[32,1,2]]]);
//# sourceMappingURL=main.503e151c.chunk.js.map