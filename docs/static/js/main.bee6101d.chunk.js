(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(18),c=n.n(a),r=n(5),s=n(12),i=n(7),o=n(3),u=n.n(o),l=n(6),d="[movies] Set cinema movies",m="[movies] Add cinema movies",j="[movies] Set popular movies",p="[movies] Add popular movies",v="[movies] Set upcoming movies",b="[movies] Add upcoming movies",f="[active] Set cast active",h="[active] Set movie active",O="[active] Set similar active",x="[active] Add similar active",y="[active] Set recommendations active",g="[active] Add recommendations active",_="[active] Set details active",w="[load] Set load true",N="[load] Set load false",k="[search] Set results",S="[search] Delete results",A=0,R=0,E=0,F=function(){var e=Object(l.a)(u.a.mark((function e(t,n){var a,c,r,s=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.length>2&&void 0!==s[2]?s[2]:1,e.next=3,fetch("https://api.themoviedb.org/3/search/".concat(t,"?api_key=48850b823f47e823c190a7f32e7f45de&language=es-ES&page=").concat(a,"&query=").concat(n));case 3:return c=e.sent,e.next=6,c.json();case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),L=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F("movie",t);case 2:return n=e.sent,a=n.results,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,a,c,r=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:1,e.next=3,fetch("https://api.themoviedb.org".concat(t,"?api_key=48850b823f47e823c190a7f32e7f45de&language=es-ES&page=").concat(n));case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(l.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A++,e.next=3,C("/3/movie/now_playing",A);case 3:if(t=e.sent,!(A>=t.total_pages)){e.next=8;break}return e.abrupt("return",[]);case 8:return e.next=10,t.results;case 10:return n=e.sent,e.abrupt("return",n);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(l.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return R++,e.next=3,C("/3/movie/popular",R);case 3:if(t=e.sent,!(R>=t.total_pages)){e.next=8;break}return e.abrupt("return",[]);case 8:return e.next=10,t.results;case 10:return n=e.sent,e.abrupt("return",n);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(l.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E++,e.next=3,C("/3/movie/upcoming",E);case 3:if(t=e.sent,!(E>=t.total_pages)){e.next=8;break}return e.abrupt("return",[]);case 8:return e.next=10,t.results;case 10:return n=e.sent,e.abrupt("return",n);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C("/3/movie/".concat(t,"/credits"));case 2:return n=e.sent,e.next=5,n.cast;case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C("/3/movie/".concat(t,"/similar"));case 2:return n=e.sent,e.next=5,n.results;case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C("/3/movie/".concat(t,"/recommendations"));case 2:return n=e.sent,e.next=5,n.results;case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C("/3/movie/".concat(t));case 2:return n=e.sent,e.next=5,n;case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(e){return{type:k,payload:e}},X=function(){return{type:S}},z=n(22),J=n(1),W=n(21),$=n(2),G=n(0),V=function(){var e=Object(r.b)(),t=function(e){var t=Object(J.useState)(e),n=Object(z.a)(t,2),a=n[0],c=n[1];return[a,function(e){var t=e.target;c(Object($.a)(Object($.a)({},a),{},Object(W.a)({},t.name,t.value)))},function(){c(e)}]}({query:""}),n=Object(z.a)(t,3),a=n[0],c=n[1],s=n[2],i=a.query;return Object(J.useEffect)((function(){i.length>2?e(function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:w}),t.next=4,L(e);case 4:a=t.sent,n(M(a)),setTimeout((function(){n({type:N})}),1e3),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.warn(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}(i)):e(X())}),[i.length]),Object(G.jsxs)("div",{className:"search-frame",children:[Object(G.jsx)("i",{className:"fas fa-search",style:{fontSize:13},role:"button"}),Object(G.jsx)("input",{className:"input-search ms-3 cursor animate__animated animate__fadeInRight",type:"text",placeholder:"Buscar...",name:"query",value:i,onChange:c,autoComplete:"off"}),Object(G.jsx)("i",{className:"fas fa-times",style:{marginLeft:10,fontSize:13},onClick:s})]})},Y=function(){var e=Object(r.b)();return Object(G.jsxs)("ul",{className:"myNav animate__animated animate__fadeIn",children:[Object(G.jsx)("li",{className:"myNav-item ",onClick:function(){return e(X())},children:Object(G.jsx)(s.b,{to:"/films",className:"nav-link",children:"Peliculas"})}),Object(G.jsx)("li",{className:"myNav-item",children:Object(G.jsx)(s.b,{to:"/auth/login",className:"nav-link",children:"Tv"})}),Object(G.jsx)(s.b,{className:"myNav-item",to:"/search",children:Object(G.jsx)("div",{className:"nav-link search",children:Object(G.jsx)(V,{})})})]})},H=function(e){return{type:h,payload:e}},K=function(e){return{type:f,payload:e}},Q=function(e){return{type:O,payload:e}},Z=function(e){return{type:x,payload:e}},ee=function(e){return{type:y,payload:e}},te=function(e){return{type:g,payload:e}},ne=function(e){return{type:_,payload:e}},ae=function(e){return null!=e?"https://image.tmdb.org/t/p/w500".concat(e):"https://static.thenounproject.com/png/3674269-200.png"},ce=function(e){var t=e.movie,n=Object(r.b)(),a=ae(t.poster_path);return Object(G.jsx)(s.b,{to:"/details",children:Object(G.jsxs)("div",{className:"slider-item",style:{backgroundImage:"url(".concat(a,")")},onClick:function(){n(H(t))},children:[Object(G.jsx)("div",{className:"col-4"}),Object(G.jsxs)("div",{className:"slider-item-description col-8 animate__animated animate__fadeIn",children:[Object(G.jsxs)("div",{className:"slider-item-title",children:[Object(G.jsx)("h3",{children:t.title}),Object(G.jsxs)("i",{className:"far fa-star",children:[" ",t.vote_average]})]}),Object(G.jsx)("span",{children:t.overview})]})]})})},re=function(e){var t=document.querySelector("#slider-".concat(e));t.addEventListener("touchstart",(function(n){var a=document.getElementsByTagName("body")[0];a.className="stop-scrolling";var c=n.touches[0].clientX;t.addEventListener("touchmove",(function(t){var n=t.touches[0].clientX;c<n?document.querySelector("#slider-".concat(e)).scrollLeft-=350:document.querySelector("#slider-".concat(e)).scrollLeft+=350})),t.addEventListener("touchend",(function(){a.className="",console.log("cancel touch")}))}))},se=function(e){var t=e.cast,n=(Object(r.b)(),ae(t.profile_path));return Object(G.jsx)(s.b,{to:"/details",children:Object(G.jsxs)("div",{className:"slider-item cast",style:{backgroundImage:"url(".concat(n,")")},children:[Object(G.jsx)("div",{className:"col-4"}),Object(G.jsxs)("div",{className:"slider-item-description des-cast col-8 animate__animated animate__fadeInDown",children:[Object(G.jsxs)("div",{className:"slider-item-title",children:[Object(G.jsx)("h3",{children:t.name}),Object(G.jsx)("i",{className:"far fa-star",children:t.popularity})]}),Object(G.jsxs)("ul",{children:[Object(G.jsxs)("li",{children:[Object(G.jsx)("span",{children:"Nombre original: "})," ",t.original_name]}),Object(G.jsxs)("li",{children:[Object(G.jsx)("span",{children:"Personaje: "})," ",t.character]})]})]})]})})},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return function(){var t=Object(l.a)(u.a.mark((function t(n){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,I();case 3:if(0!==(a=t.sent).length){t.next=8;break}return t.abrupt("return");case 8:n(e?le(a):de(a));case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return function(){var t=Object(l.a)(u.a.mark((function t(n){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,P();case 3:if(0!==(a=t.sent).length){t.next=8;break}return t.abrupt("return");case 8:n(e?me(a):je(a));case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return function(){var t=Object(l.a)(u.a.mark((function t(n){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,q();case 3:if(0!==(a=t.sent).length){t.next=8;break}return t.abrupt("return");case 8:n(e?pe(a):ve(a));case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()},le=function(e){return{type:d,payload:e}},de=function(e){return{type:m,payload:e}},me=function(e){return{type:j,payload:e}},je=function(e){return{type:p,payload:e}},pe=function(e){return{type:v,payload:e}},ve=function(e){return{type:b,payload:e}},be=function(e){var t,n=e.title,a=(e.itemCounter,e.items),c=e.component,s=e.functionDispatch;t="cinema"===s?ie:"popular"===s?oe:ue;var i=Object(r.b)(),o=n.replace(" ",""),u=function(e){var n=e.target;"cast"!==c&&n.scrollWidth-n.scrollLeft<=2e3&&i(t(!1))};Object(J.useEffect)((function(){!function(e){var t=document.querySelector("#slider-".concat(e));re(e),t.addEventListener("mouseover",(function(){var n=document.getElementsByTagName("body")[0];n.className="stop-scrolling",t.addEventListener("wheel",(function(t){t.deltaY>0?document.querySelector("#slider-".concat(e)).scrollLeft-=350:document.querySelector("#slider-".concat(e)).scrollLeft+=350})),t.addEventListener("mouseout",(function(){n.className=""})),t.addEventListener("click",(function(){n.className=""}))}))}(o)}),[]);return Object(G.jsxs)("div",{className:"animate__animated animate__fadeIn",children:[Object(G.jsx)("h2",{className:"slider-title",children:n}),Object(G.jsx)("div",{id:"slider-".concat(o),className:"slider-frame",onWheel:u,onTouchMove:u,children:Object(G.jsx)("div",{className:"slider-container ".concat("cast"===c?"cast":"movie"),children:"movies"===c?null===a||void 0===a?void 0:a.map((function(e){return Object(G.jsx)(ce,{movie:e},e.id)})):null===a||void 0===a?void 0:a.map((function(e){return Object(G.jsx)(se,{cast:e},e.id)}))})})]})},fe=Intl.NumberFormat("en-US"),he=function(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.activeR})),n=t.ActiveCast,a=t.ActiveSimilar,c=t.ActiveMovie,s=t.ActiveRecommend,i=t.ActiveDetails;return console.log(null===c||void 0===c?void 0:c.id),Object(J.useEffect)((function(){var t;window.scrollTo(0,0),void 0!==c&&(e((t=null===c||void 0===c?void 0:c.id,function(){var e=Object(l.a)(u.a.mark((function e(n){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D(t);case 3:a=e.sent,n(K(a)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.warn(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())),e(function(e,t){return function(){var n=Object(l.a)(u.a.mark((function n(a){var c;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,T(e);case 3:0!=(c=n.sent).length&&t?a(Q(c)):a(Z(c)),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.warn(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()}(null===c||void 0===c?void 0:c.id,!0)),e(function(e,t){return function(){var n=Object(l.a)(u.a.mark((function n(a){var c;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,U(e);case 3:0!=(c=n.sent).length&&t?a(ee(c)):a(te(c)),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.warn(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()}(null===c||void 0===c?void 0:c.id,!0)),e(function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,B(e);case 3:a=t.sent,n(ne(a)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.warn(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(null===c||void 0===c?void 0:c.id)))}),[c]),Object(G.jsx)(G.Fragment,{children:Object(G.jsxs)("div",{className:"details-frame animate__animated animate__fadeIn",children:[Object(G.jsxs)("div",{className:"details-title",children:[Object(G.jsx)("h2",{children:null===c||void 0===c?void 0:c.title}),Object(G.jsxs)("i",{className:"far fa-star",children:[" ",null===c||void 0===c?void 0:c.vote_average]}),Object(G.jsxs)("span",{children:[" A\xf1o: ",null===c||void 0===c?void 0:c.release_date.substring(0,4)]})]}),Object(G.jsxs)("div",{className:"details-row",children:[Object(G.jsxs)("div",{className:"details-container row",children:[Object(G.jsx)("div",{className:"details-poster col-xl-6",style:{backgroundImage:"url(".concat(ae(c.poster_path),")")}}),Object(G.jsxs)("div",{className:"details-description col-xl-6",children:[Object(G.jsxs)("div",{className:"details-text",children:[Object(G.jsx)("h1",{className:"title ms-0",children:null===c||void 0===c?void 0:c.original_title}),Object(G.jsx)("hr",{}),null===c||void 0===c?void 0:c.overview]}),Object(G.jsxs)("ul",{children:[Object(G.jsxs)("li",{children:["Presupuesto: $",fe.format(null===i||void 0===i?void 0:i.budget)]}),Object(G.jsxs)("li",{children:["Ganancias: $",fe.format(null===i||void 0===i?void 0:i.revenue)]})]})]})]}),Object(G.jsx)("div",{className:"details-actors",children:Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(be,{component:"cast",title:"Actores",items:n}),Object(G.jsx)(be,{component:"movies",title:"Peliculas similares",items:a}),Object(G.jsx)(be,{component:"movies",title:"Recomendaciones",items:s})]})})]})]})})},Oe=(n(39),function(){return Object(G.jsx)("div",{className:"spinner-frame",children:Object(G.jsx)("div",{className:"spinner"})})}),xe=function(e){var t=e.movie,n=Object(r.b)(),a=ae(t.poster_path);return Object(G.jsx)(s.b,{to:"/details",children:Object(G.jsx)("div",{className:"search-card",style:{backgroundImage:"url(".concat(a,")")},onClick:function(){n(H(t))},children:Object(G.jsx)("div",{className:"search-card-description animate__animated animate__fadeIn",children:Object(G.jsxs)("div",{className:"search-card-title animate__animated animate__fadeIn",children:[Object(G.jsx)("h4",{children:t.title}),Object(G.jsxs)("i",{className:"far fa-star",children:[" ",t.vote_average]}),Object(G.jsx)("br",{}),Object(G.jsx)("span",{children:t.original_title})]})})})})},ye=function(){var e=Object(r.c)((function(e){return e.searchR})).Results,t=Object(r.c)((function(e){return e.loadR})).Loading;return Object(G.jsx)(G.Fragment,{children:t?Object(G.jsx)(Oe,{}):Object(G.jsxs)("div",{className:"search-res-frame animate__animated animate__fadeIn",children:[Object(G.jsx)("h1",{className:"search-res-title animate__animated animate__fadeIn",children:e.length>0?"Resultado b\xfasqueda":"Esperando b\xfasqueda..."}),Object(G.jsx)("div",{className:"search-res-container",children:e.map((function(e){return Object(G.jsx)(xe,{movie:e},e.id)}))})]})})},ge=function(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.moviesR})),n=Object(r.c)((function(e){return e.loadR})).Loading,a=Object(r.c)((function(e){return e.searchR})).Results;Object(J.useEffect)((function(){0===t.CinemaFilms.length&&(e(ie(!0)),e(oe(!0)),e(ue(!0)))}),[]);return Object(G.jsx)(G.Fragment,{children:n?Object(G.jsx)(Oe,{}):a.length>0?Object(G.jsx)(ye,{}):Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(be,{component:"movies",title:"Pr\xf3ximamente",items:t.UpcomingFilms,functionDispatch:"upcoming"}),Object(G.jsx)(be,{component:"movies",title:"En cines",items:t.CinemaFilms,functionDispatch:"cinema"}),Object(G.jsx)(be,{component:"movies",title:"Populares",items:t.PopularFilms,functionDispatch:"popular"})]})})},_e=function(){return Object(G.jsx)(G.Fragment,{children:Object(G.jsx)("h1",{children:"LoginPage"})})},we=function(){return Object(G.jsxs)(s.a,{children:[Object(G.jsx)(Y,{}),Object(G.jsxs)(i.d,{children:[Object(G.jsx)(i.b,{exact:!0,path:"/films",component:ge}),Object(G.jsx)(i.b,{exact:!0,path:"/search",component:ye}),Object(G.jsx)(i.b,{exact:!0,path:"/details",component:he}),Object(G.jsx)(i.b,{exact:!0,path:"/auth/login",component:_e}),Object(G.jsx)(i.a,{to:"/films"})]})]})},Ne=n(17),ke=n(27),Se=n(13),Ae={CinemaFilms:[],PopularFilms:[],UpcomingFilms:[]},Re={Results:[]},Ee={Loading:!1},Fe={ActiveCast:[],ActiveSimilar:[],ActiveRecommend:[]},Le=Object(Ne.b)({moviesR:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object($.a)(Object($.a)({},e),{},{CinemaFilms:t.payload});case m:return Object($.a)(Object($.a)({},e),{},{CinemaFilms:[].concat(Object(Se.a)(e.CinemaFilms),Object(Se.a)(t.payload))});case j:return Object($.a)(Object($.a)({},e),{},{PopularFilms:t.payload});case p:return Object($.a)(Object($.a)({},e),{},{PopularFilms:[].concat(Object(Se.a)(e.PopularFilms),Object(Se.a)(t.payload))});case v:return Object($.a)(Object($.a)({},e),{},{UpcomingFilms:t.payload});case b:return Object($.a)(Object($.a)({},e),{},{UpcomingFilms:[].concat(Object(Se.a)(e.UpcomingFilms),Object(Se.a)(t.payload))});default:return e}},activeR:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object($.a)(Object($.a)({},e),{},{ActiveCast:t.payload});case h:return Object($.a)(Object($.a)({},e),{},{ActiveMovie:t.payload});case O:return Object($.a)(Object($.a)({},e),{},{ActiveSimilar:t.payload});case x:return Object($.a)(Object($.a)({},e),{},{ActiveSimilar:[].concat(Object(Se.a)(e.ActiveSimilar),Object(Se.a)(t.payload))});case y:return Object($.a)(Object($.a)({},e),{},{ActiveRecommend:t.payload});case g:return Object($.a)(Object($.a)({},e),{},{ActiveRecommend:[].concat(Object(Se.a)(e.ActiveRecommend),Object(Se.a)(t.payload))});case _:return Object($.a)(Object($.a)({},e),{},{ActiveDetails:t.payload});default:return e}},loadR:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object($.a)(Object($.a)({},e),{},{Loading:!0});case N:return Object($.a)(Object($.a)({},e),{},{Loading:!1});default:return e}},searchR:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object($.a)(Object($.a)({},e),{},{Results:t.payload});case S:return Object($.a)(Object($.a)({},e),{},{Results:[]});default:return e}}}),Ce=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Ne.c,Ie=Object(Ne.d)(Le,Ce(Object(Ne.a)(ke.a))),Pe=function(){return Object(G.jsx)(r.a,{store:Ie,children:Object(G.jsx)(we,{})})};c.a.render(Object(G.jsx)(Pe,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.bee6101d.chunk.js.map