(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[4,5,6,7],{33:function(e,t,c){"use strict";var n=c.p+"static/media/error.42292aa1.gif",a=c(0);t.a=function(e){var t=e.children;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},alt:"error",src:n}),t]})}},35:function(e,t,c){"use strict";var n=c(36),a=c.n(n),r=c(37),s=c(34),i=c(1);t.a=function(){var e=function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),c=t[0],n=t[1],o=Object(i.useState)(null),l=Object(s.a)(o,2),u=l[0],j=l[1];return{loading:c,request:Object(i.useCallback)(function(){var e=Object(r.a)(a.a.mark((function e(t){var c,r,s,i,o,l=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=l.length>1&&void 0!==l[1]?l[1]:"GET",r=l.length>2&&void 0!==l[2]?l[2]:null,s=l.length>3&&void 0!==l[3]?l[3]:{"Content-Type":"application/json"},n(!0),e.prev=4,e.next=7,fetch(t,{method:c,body:r,headers:s});case 7:if((i=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(i.status));case 10:return e.next=12,i.json();case 12:return o=e.sent,n(!1),e.abrupt("return",o);case 17:throw e.prev=17,e.t0=e.catch(4),n(!1),j(e.t0.message),e.t0;case 22:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(t){return e.apply(this,arguments)}}(),[]),error:u,clearError:Object(i.useCallback)((function(){return j(null)}),[])}}(),t=e.loading,c=e.request,n=e.error,o=e.clearError,l="https://gateway.marvel.com:443/v1/public/",u="5fb08fddb575a55d82219f9e2320f5e7",j=210,b=function(){var e=Object(r.a)(a.a.mark((function e(){var t,n,r=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:j,e.next=3,c("".concat(l,"characters?limit=9&offset=").concat(t,"&apikey=").concat(u));case 3:return n=e.sent,e.abrupt("return",n.data.results.map(p));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(r.a)(a.a.mark((function e(){var t,n,r=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:0,e.next=3,c("".concat(l,"comics?limit=8&offset=").concat(t,"&apikey=").concat(u));case 3:return n=e.sent,e.abrupt("return",n.data.results.map(x));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(r.a)(a.a.mark((function e(){var t,n,r=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:j,e.next=3,c("".concat(l,"characters?limit=9&offset=").concat(t,"&apikey=").concat(u));case 3:return n=e.sent,e.abrupt("return",n.data.total);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(r.a)(a.a.mark((function e(){var t,n,r=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:j,e.next=3,c("".concat(l,"comics?limit=8&offset=").concat(t,"&apikey=").concat(u));case 3:return n=e.sent,e.abrupt("return",n.data.total);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(r.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(l,"characters/").concat(t,"?apikey=").concat(u));case 2:return n=e.sent,e.abrupt("return",p(n.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(r.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(l,"comics/").concat(t,"?apikey=").concat(u));case 2:return n=e.sent,e.abrupt("return",x(n.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){return{name:e.name,description:e.description,thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,id:e.id,comics:e.comics.items.slice(0,10)}},x=function(e){var t;return{name:e.title,description:e.description||"No description",pageCount:e.pageCount?e.pageCount+" pages":"No Information",language:(null===(t=e.textObjects[0])||void 0===t?void 0:t.language)||"en-us",price:e.prices[0].price?e.prices[0].price+"$":"NOT AVAILABLE",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,id:e.id}};return{loading:t,error:n,getTotalCharacters:d,getAllCharacters:b,getTotalComics:h,getCharacter:f,getComics:O,getAllComics:m,clearError:o}}},38:function(e,t,c){"use strict";var n=c(46),a=c(47),r=c(53),s=c(51),i=c(1),o=c(33),l=c(0),u=function(e){Object(r.a)(c,e);var t=Object(s.a)(c);function c(){var e;Object(n.a)(this,c);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={error:!1},e}return Object(a.a)(c,[{key:"componentDidCatch",value:function(e,t){console.log(e,t),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(l.jsx)(o.a,{}):this.props.children}}]),c}(i.Component);t.a=u},41:function(e,t,c){"use strict";c.r(t);var n=c(33),a=c(2),r=c(0);t.default=function(){var e=Object(a.f)();return Object(r.jsx)("div",{children:Object(r.jsxs)(n.a,{children:[Object(r.jsx)("p",{style:{textAlign:"center",fontWeight:"bold",fontSize:"24px"},children:"Page doesn't exist"}),Object(r.jsx)("div",{onClick:function(){return e.goBack()},style:{cursor:"pointer",display:"block",textAlign:"center",fontWeight:"bold",fontSize:"24px",marginTop:"30px"},children:"Go Back"})]})})}},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){"use strict";c.r(t);var n=c(34),a=c(1),r=c(13),s=c(33),i=c(35),o=(c(42),c.p+"static/media/mjolnir.61f31e18.png"),l=c(0),u=function(e){var t=e.char,c=t.name,n=t.description,a=t.thumbnail,r=t.homepage,s=t.wiki,i="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===a?{objectFit:"contain"}:null;return Object(l.jsxs)("div",{className:"randomchar__block",children:[Object(l.jsx)("img",{style:i,src:a,alt:"Random character",className:"randomchar__img"}),Object(l.jsxs)("div",{className:"randomchar__info",children:[Object(l.jsx)("p",{className:"randomchar__name",children:c}),Object(l.jsx)("p",{className:"randomchar__descr",children:n?n.length>=10?n.slice(0,100)+"...":n:"No Description"}),Object(l.jsxs)("div",{className:"randomchar__btns",children:[Object(l.jsx)("a",{href:r,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"homepage"})}),Object(l.jsx)("a",{href:s,className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},j=function(){var e=Object(a.useState)({}),t=Object(n.a)(e,2),c=t[0],j=t[1],b=Object(i.a)(),m=b.loading,d=b.error,h=b.getCharacter,f=b.clearError;Object(a.useEffect)((function(){p()}),[]);var O=function(e){return j(e)},p=function(){f();var e=Math.floor(400*Math.random()+1011e3);h(e).then(O)},x=d?Object(l.jsx)(s.a,{}):null,v=m?Object(l.jsx)(r.a,{}):null,_=m||d?null:Object(l.jsx)(u,{char:c});return Object(l.jsxs)("div",{className:"randomchar",children:[x,v,_,Object(l.jsxs)("div",{className:"randomchar__static",children:[Object(l.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(l.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(l.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(l.jsx)("button",{onClick:p,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"try it"})}),Object(l.jsx)("img",{src:o,alt:"mjolnir",className:"randomchar__decoration"})]})]})},b=c(36),m=c.n(b),d=c(39),h=c(37),f=c(60),O=c(61),p=(c(43),function(e){var t=e.characters,c=e.onCharSelected,n=e.onFocusItem,a=e.itemRefs,r=t.map((function(e,t){var r=e.name,s=e.thumbnail,i=e.id,o="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===s||"http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708.gif"===s?{objectFit:"fill"}:null;return Object(l.jsx)(f.a,{timeout:500,classNames:"csstransition",children:Object(l.jsxs)("li",{ref:function(e){return a.current[t]=e},tabIndex:0,onClick:function(){c(i),n(t)},onKeyDown:function(e){" "!==e.key&&"Enter"!==e.key||(c(i),n(t))},className:"char__item",children:[Object(l.jsx)("img",{style:o,src:s,alt:r}),Object(l.jsx)("div",{className:"char__name",children:r})]},i)},i)}));return Object(l.jsx)("ul",{className:"char__grid",children:Object(l.jsx)(O.a,{component:null,children:r})})}),x=function(e){var t=e.onCharSelected,c=Object(a.useState)([]),o=Object(n.a)(c,2),u=o[0],j=o[1],b=Object(a.useState)(!1),f=Object(n.a)(b,2),O=f[0],x=f[1],v=Object(a.useState)(210),_=Object(n.a)(v,2),g=_[0],N=_[1],k=Object(a.useState)(!1),y=Object(n.a)(k,2),w=y[0],C=y[1],S=Object(i.a)(),E=S.loading,A=S.error,F=S.getTotalCharacters,I=S.getAllCharacters;Object(a.useEffect)((function(){R()}),[]);var T=function(){var e=Object(h.a)(m.a.mark((function e(t){var c,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:c=e.sent,n=!1,c-9<=g&&(n=!0),j((function(e){return[].concat(Object(d.a)(e),Object(d.a)(t))})),x(!1),N((function(e){return e+9})),C(n);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=Object(a.useRef)([]),R=function(){I().then(T).catch((function(){return C(!0)}))},D=A?Object(l.jsx)(s.a,{}):null,B=E&&!O?Object(l.jsx)(r.a,{}):null;return Object(l.jsxs)("div",{className:"char__list",children:[D,B,Object(l.jsx)(p,{onFocusItem:function(e){L.current.forEach((function(e){return e.classList.remove("char__item_selected")})),L.current[e].classList.add("char__item_selected"),L.current[e].focus()},onCharSelected:t,characters:u,itemRefs:L}),Object(l.jsx)("button",{style:{display:w?"none":"block"},disabled:O,onClick:function(){!function(e){x(!0),I(e).then(T)}(g)},className:"button button__main button__long",children:Object(l.jsx)("div",{className:"inner",children:"load more"})})]})},v=c(8),_=(c(44),function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(l.jsxs)("div",{className:"skeleton",children:[Object(l.jsxs)("div",{className:"pulse skeleton__header",children:[Object(l.jsx)("div",{className:"pulse skeleton__circle"}),Object(l.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(l.jsx)("div",{className:"pulse skeleton__block"}),Object(l.jsx)("div",{className:"pulse skeleton__block"}),Object(l.jsx)("div",{className:"pulse skeleton__block"})]})]})}),g=(c(45),function(e){var t=e.char,c=t.comics,n=t.description,a=t.homepage,r=t.name,s=t.thumbnail,i=t.wiki,o=c.map((function(e,t){var c=e.name,n=e.resourceURI.split("/").pop();return Object(l.jsx)("li",{className:"char__comics-item",children:Object(l.jsx)(v.b,{className:"char__comics-link",to:"/comics/".concat(n),children:c})},t)})),u="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===s||"http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708.gif"===s?{objectFit:"contain"}:null;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"char__basics",children:[Object(l.jsx)("img",{style:u,src:s,alt:r}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"char__info-name",children:r}),Object(l.jsxs)("div",{className:"char__btns",children:[Object(l.jsx)("a",{href:a,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"homepage"})}),Object(l.jsx)("a",{href:i,className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(l.jsx)("div",{className:"char__descr",children:n||"No Description"}),0===o.length?Object(l.jsx)("div",{className:"char__comics",children:"Comics not found"}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(l.jsx)("ul",{className:"char__comics-list",children:o})]})]})}),N=function(e){var t=e.charId,c=Object(a.useState)(null),o=Object(n.a)(c,2),u=o[0],j=o[1],b=Object(i.a)(),m=b.loading,d=b.error,h=b.getCharacter,f=b.clearError;Object(a.useEffect)((function(){p()}),[t]);var O=function(e){j(e)},p=function(){t&&(f(),h(t).then(O))},x=u||m||d?null:Object(l.jsx)(_,{}),v=d?Object(l.jsx)(s.a,{}):null,N=m?Object(l.jsx)(r.a,{}):null,k=m||d||!u?null:Object(l.jsx)(g,{char:u});return Object(l.jsxs)("div",{className:"char__info",children:[x,v,N,k]})},k=c(38),y=c.p+"static/media/vision.067d4ae1.png";t.default=function(){var e=Object(a.useState)(null),t=Object(n.a)(e,2),c=t[0],r=t[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(k.a,{children:Object(l.jsx)(j,{})}),Object(l.jsxs)("div",{className:"char__content",children:[Object(l.jsx)(k.a,{children:Object(l.jsx)(x,{onCharSelected:function(e){r(e)}})}),Object(l.jsx)(k.a,{children:Object(l.jsx)(N,{charId:c})})]}),Object(l.jsx)("img",{className:"bg-decoration",src:y,alt:"vision"})]})}},52:function(e,t,c){"use strict";c.r(t);c(48);var n=c.p+"static/media/Avengers.4065c8f9.png",a=c.p+"static/media/Avengers_logo.9eaf2193.png",r=c(0),s=function(){return Object(r.jsxs)("div",{className:"app__banner",children:[Object(r.jsx)("img",{src:n,alt:"Avengers"}),Object(r.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",Object(r.jsx)("br",{}),"Stay tuned!"]}),Object(r.jsx)("img",{src:a,alt:"Avengers logo"})]})},i=c(36),o=c.n(i),l=c(39),u=c(37),j=c(34),b=c(1),m=c(8),d=c(60),h=c(61),f=c(13),O=c(33),p=c(35),x=(c(49),function(e){var t=e.comicsList.map((function(e,t){var c=e.name,n=e.thumbnail,a=e.price,s=e.id;return Object(r.jsx)(d.a,{timeout:500,classNames:"csstransition",children:Object(r.jsx)("li",{className:"comics__item",children:Object(r.jsxs)(m.b,{to:"/comics/".concat(s),children:[Object(r.jsx)("img",{src:n,alt:c,className:"comics__item-img"}),Object(r.jsx)("div",{className:"comics__item-name",children:c}),Object(r.jsx)("div",{className:"comics__item-price",children:a})]})},t)},s)}));return Object(r.jsx)("ul",{className:"comics__grid",children:Object(r.jsx)(h.a,{component:null,children:t})})}),v=function(){var e=Object(b.useState)([]),t=Object(j.a)(e,2),c=t[0],n=t[1],a=Object(b.useState)(!1),s=Object(j.a)(a,2),i=s[0],m=s[1],d=Object(b.useState)(210),h=Object(j.a)(d,2),v=h[0],_=h[1],g=Object(b.useState)(!1),N=Object(j.a)(g,2),k=N[0],y=N[1],w=Object(p.a)(),C=w.loading,S=w.error,E=w.getTotalComics,A=w.getAllComics;Object(b.useEffect)((function(){I()}),[]);var F=function(){var e=Object(u.a)(o.a.mark((function e(t){var c,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:c=e.sent,a=!1,c-8<=v&&(a=!0),n((function(e){return[].concat(Object(l.a)(e),Object(l.a)(t))})),m(!1),_((function(e){return e+8})),y(a);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){A().then(F).catch((function(){return y(!0)}))},T=S?Object(r.jsx)(O.a,{}):null,L=C&&!i?Object(r.jsx)(f.a,{}):null;return Object(r.jsxs)("div",{className:"comics__list",children:[T,L,Object(r.jsx)(x,{comicsList:c}),Object(r.jsx)("button",{style:{display:k?"none":"block"},disabled:i,onClick:function(){!function(e){m(!0),A(e).then(F)}(v)},className:"button button__main button__long",children:Object(r.jsx)("div",{className:"inner",children:"load more"})})]})},_=c(38);t.default=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(_.a,{children:[Object(r.jsx)(s,{}),Object(r.jsx)(v,{})]})})}},59:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var n=c(34),a=c(1),r=c(2),s=c(8),i=c(13),o=c(35),l=(c(50),c(52),c(41)),u=(c(59),c(0)),j=function(e){var t=e.comic,c=t.name,n=t.description,a=t.pageCount,r=t.language,i=t.price,o=t.thumbnail;return Object(u.jsxs)("div",{className:"single-comic",children:[Object(u.jsx)("img",{src:o,alt:c,className:"single-comic__img"}),Object(u.jsxs)("div",{className:"single-comic__info",children:[Object(u.jsx)("h2",{className:"single-comic__name",children:c}),Object(u.jsx)("p",{className:"single-comic__descr",children:n}),Object(u.jsx)("p",{className:"single-comic__descr",children:a}),Object(u.jsxs)("p",{className:"single-comic__descr",children:["Language: ",r]}),Object(u.jsx)("div",{className:"single-comic__price",children:i})]}),Object(u.jsx)(s.b,{to:"/comics",className:"single-comic__back",children:"Back to all"})]})};t.default=function(){var e=Object(r.g)().comicId,t=Object(a.useState)(null),c=Object(n.a)(t,2),s=c[0],b=c[1],m=Object(o.a)(),d=m.loading,h=m.error,f=m.getComics,O=m.clearError;Object(a.useEffect)((function(){x()}),[e]);var p=function(e){b(e)},x=function(){O(),f(e).then(p)},v=h?Object(u.jsx)(l.default,{}):null,_=d?Object(u.jsx)(i.a,{}):null,g=d||h||!s?null:Object(u.jsx)(j,{comic:s});return Object(u.jsxs)(u.Fragment,{children:[v,_,g]})}}}]);
//# sourceMappingURL=4.268f6482.chunk.js.map