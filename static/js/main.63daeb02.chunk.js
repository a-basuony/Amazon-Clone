(this.webpackJsonpamazone_clone=this.webpackJsonpamazone_clone||[]).push([[0],{102:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},110:function(e,t,a){},128:function(e,t,a){},129:function(e,t,a){},132:function(e,t,a){"use strict";a.r(t);var c=a(3),s=a.n(c),i=a(29),n=a.n(i),r=(a(69),a(70),a(90),a(57)),o=a(9),l=(a(91),a(92),a(59)),j=a.n(l),d=a(60),m=a.n(d),u=a(16),b=a(2),h=Object(c.createContext)(),O=function(e){var t=e.reducer,a=e.initialState,s=e.children;return Object(b.jsx)(h.Provider,{value:Object(c.useReducer)(t,a),children:s})},p=function(){return Object(c.useContext)(h)},_=a(39),x=_.a.initializeApp({apiKey:"AIzaSyCcPSKlYtpdzBoAC8soeSmIARMzVKzrf5I",authDomain:"challenge-4b2b2.firebaseapp.com",databaseURL:"https://challenge-4b2b2.firebaseio.com",projectId:"challenge-4b2b2",storageBucket:"challenge-4b2b2.appspot.com",messagingSenderId:"962418448875",appId:"1:962418448875:web:f6cce5eeaf819481f661ae"}).firestore(),g=_.a.auth();var v=function(){var e=p(),t=Object(o.a)(e,2),a=t[0],c=a.basket,s=a.user;return t[1],Object(b.jsxs)("div",{className:"header",children:[Object(b.jsx)("div",{className:"brand",children:Object(b.jsx)(u.b,{to:"/",children:Object(b.jsx)("img",{className:"header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png"})})}),Object(b.jsxs)("div",{className:"header__search",children:[Object(b.jsx)("input",{className:"header__searchInput",type:"text"}),Object(b.jsx)(j.a,{className:"header__searchIcon"})]}),Object(b.jsxs)("div",{className:"header__nav",children:[Object(b.jsx)(u.b,{to:!s&&"/login",children:Object(b.jsxs)("div",{onClick:function(){s&&g.signOut()},className:"header__option",children:[Object(b.jsxs)("span",{className:"header__optionLineOne",children:["Hello ",s?s.email:"Guest"]}),Object(b.jsx)("span",{className:"header__optionLineTwo",children:s?"Sign Out":"Sign In"})]})}),Object(b.jsx)(u.b,{to:"/orders",children:Object(b.jsxs)("div",{className:"header__option",children:[Object(b.jsx)("span",{className:"header__optionLineOne",children:"Returns"}),Object(b.jsx)("span",{className:"header__optionLineTwo",children:"& Orders"})]})}),Object(b.jsxs)("div",{className:"header__option",children:[Object(b.jsx)("span",{className:"header__optionLineOne",children:"Your"}),Object(b.jsx)("span",{className:"header__optionLineTwo",children:"Prime"})]}),Object(b.jsx)(u.b,{to:"/checkout",children:Object(b.jsxs)("div",{className:"header__optionBasket",children:[Object(b.jsx)(m.a,{}),Object(b.jsx)("span",{className:"header__optionLineTwo header__basketCount",children:null===c||void 0===c?void 0:c.length})]})})]})]})};a(102),a(103);var f=function(e){var t=e.id,a=e.title,c=e.image,s=e.price,i=e.rating,n=p(),r=Object(o.a)(n,2),l=(r[0].basket,r[1]);return Object(b.jsxs)("div",{className:"product",children:[Object(b.jsxs)("div",{className:"product__info",children:[Object(b.jsx)("p",{children:a}),Object(b.jsxs)("p",{className:"product__price",children:[Object(b.jsx)("small",{children:"$"}),Object(b.jsx)("strong",{children:s})]}),Object(b.jsx)("div",{className:"product__rating",children:Array(i).fill().map((function(e,t){return Object(b.jsx)("p",{children:"\ud83c\udf1f"})}))})]}),Object(b.jsx)("img",{src:c,alt:""}),Object(b.jsx)("button",{onClick:function(){l({type:"ADD_TO_BASKET",item:{id:t,title:a,image:c,price:s,rating:i}})},children:"Add to Basket"})]})};var N=function(){return Object(b.jsx)("div",{className:"home",children:Object(b.jsxs)("div",{className:"home__container",children:[Object(b.jsx)("div",{className:"card__imageSlider home__image ",children:Object(b.jsxs)("div",{id:"carouselExampleControls",className:"carousel slide","data-bs-ride":"carousel",children:[Object(b.jsxs)("div",{className:"carousel-inner",children:[Object(b.jsx)("div",{className:"carousel-item",children:Object(b.jsx)("img",{src:"https://m.media-amazon.com/images/I/71ydqTGrflL._SX3000_.jpg",className:"d-block w-100",alt:"..."})}),Object(b.jsx)("div",{className:"carousel-item",children:Object(b.jsx)("img",{src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",className:"d-block w-100",alt:"..."})}),Object(b.jsx)("div",{className:"carousel-item active",children:Object(b.jsx)("img",{src:"https://m.media-amazon.com/images/I/616gGDCH6LL._SX3000_.jpg",className:"d-block w-100",alt:"..."})}),Object(b.jsx)("div",{className:"carousel-item",children:Object(b.jsx)("img",{src:"https://m.media-amazon.com/images/I/615WFa7ZkYL._SX3000_.jpg",className:"d-block w-100",alt:"..."})}),Object(b.jsx)("div",{className:"carousel-item",children:Object(b.jsx)("img",{src:"https://m.media-amazon.com/images/I/7102I1D+77L._SX3000_.jpg",className:"d-block w-100",alt:"..."})}),Object(b.jsx)("div",{className:"carousel-item",children:Object(b.jsx)("img",{src:"https://m.media-amazon.com/images/I/615qQvjJw3L._SX3000_.jpg",className:"d-block w-100",alt:"..."})}),Object(b.jsx)("div",{className:"carousel-item",children:Object(b.jsx)("img",{src:"https://m.media-amazon.com/images/I/619xcE1JVEL._SX3000_.jpg",className:"d-block w-100",alt:"..."})}),Object(b.jsx)("div",{className:"carousel-item",children:Object(b.jsx)("img",{src:"https://m.media-amazon.com/images/I/61TpbnyJiWL._SX3000_.jpg",className:"d-block w-100",alt:"..."})})]}),Object(b.jsxs)("button",{className:"carousel-control-prev",type:"button","data-bs-target":"#carouselExampleControls","data-bs-slide":"prev",children:[Object(b.jsx)("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),Object(b.jsx)("span",{className:"visually-hidden",children:"Previous"})]}),Object(b.jsxs)("button",{className:"carousel-control-next",type:"button","data-bs-target":"#carouselExampleControls","data-bs-slide":"next",children:[Object(b.jsx)("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),Object(b.jsx)("span",{className:"visually-hidden",children:"Next"})]})]})}),Object(b.jsxs)("div",{className:"home__row",children:[Object(b.jsx)(f,{id:"12321341",title:"The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",price:11.96,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"}),Object(b.jsx)(f,{id:"49538094",title:"Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl",price:239,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"})]}),Object(b.jsxs)("div",{className:"home__row",children:[Object(b.jsx)(f,{id:"4903850",title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",price:199.99,rating:3,image:"https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"}),Object(b.jsx)(f,{id:"23445930",title:"Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",price:98.99,rating:5,image:"https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"}),Object(b.jsx)(f,{id:"3254354345",title:"New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",price:598.99,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"})]}),Object(b.jsxs)("div",{className:"home__row",children:[Object(b.jsx)(f,{id:12321341,title:"Banbao - Turbo Power Dragon Building Set 102pcs",price:11.96,rating:5,image:"https://m.media-amazon.com/images/I/51Dw8+L+0PL._AC_.jpg"}),Object(b.jsx)(f,{id:12321341,title:"Banbao - Fire Truck Building Kit 290pcs",price:11.96,rating:5,image:"https://m.media-amazon.com/images/I/71pY0jixT+L._AC_SX679_.jpg"}),Object(b.jsx)(f,{id:12321341,title:"BanBao Police Station Toy Building Set, 718-Piece",price:11.96,rating:5,image:"https://m.media-amazon.com/images/I/51M6u5hv3eL._AC_.jpg"}),Object(b.jsx)(f,{id:12321341,title:"Paw Patrol, True Metal Total City Rescue Movie Track Set with Exclusive Marshall Vehicle, 1:55 Scale",price:11.96,rating:5,image:"https://images-eu.ssl-images-amazon.com/images/I/71VKpfI59EL._AC_UL232_SR232,232_.jpg"})]}),Object(b.jsxs)("div",{className:"home__row ",children:[Object(b.jsx)(f,{id:12321341,title:"Kitchen essentials | Up to 15% off",price:11.96,rating:5,image:"https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/OHL/Gateway/XCM_Manual_1466738_4981387_379x304_1X._SY304_CB609258982_.jpg"}),Object(b.jsx)(f,{id:12321341,title:"New arrivals | Bags & Wallets",price:11.96,rating:5,image:"https://images-eu.ssl-images-amazon.com/images/G/42/SL/DEC/GW/XCM_Manual_1396328_4379575_Egypt_EG_BAU_GW_DC_SL_Bags_Wallets_379x304_1X._SY304_CB650636675_.jpg"}),Object(b.jsx)(f,{id:12321341,title:"Women's Shoes | Up to 25% off",price:11.96,rating:5,image:"https://images-eu.ssl-images-amazon.com/images/G/42/SL/October/XCM_Manual_1478080_5091646_379x304_1X._SY304_CB606174996_.jpg"}),Object(b.jsx)(f,{id:12321341,title:"Men's Clothes | Up to 40%",price:11.96,rating:5,image:"https://images-eu.ssl-images-amazon.com/images/G/42/SL/October/XCM_Manual_1478080_5091637_379x304_1X._SY304_CB606163859_.jpg"})]}),Object(b.jsx)("div",{className:"home__row",children:Object(b.jsx)(f,{id:"90829332",title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",price:1094.98,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"})})]})})},S=a(11),k=(a(104),a(105),a(25)),C=a.n(k),y=a(40),w=a(22),E=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},B=function(e,t){switch(console.log(t),t.type){case"ADD_TO_BASKET":return Object(w.a)(Object(w.a)({},e),{},{basket:[].concat(Object(y.a)(e.basket),[t.item])});case"EMPTY_BASKET":return Object(w.a)(Object(w.a)({},e),{},{basket:[]});case"REMOVE_FROM_BASKET":var a=e.basket.findIndex((function(e){return e.id===t.id})),c=Object(y.a)(e.basket);return a>=0?c.splice(a,1):console.warn("Cant remove product (id: ".concat(t.id,") as its not in basket!")),Object(w.a)(Object(w.a)({},e),{},{basket:c});case"SET_USER":return Object(w.a)(Object(w.a)({},e),{},{user:t.user});default:return e}};var A=function(){var e=Object(S.f)(),t=p(),a=Object(o.a)(t,2),c=a[0].basket;return a[1],Object(b.jsxs)("div",{className:"subtotal",children:[Object(b.jsx)(C.a,{renderText:function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("p",{children:["Subtotal (",c.length," items): ",Object(b.jsx)("strong",{children:e})]}),Object(b.jsxs)("small",{className:"subtotal__gift",children:[Object(b.jsx)("input",{type:"checkbox"})," This order contains a gift"]})]})},decimalScale:2,value:E(c),displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(b.jsx)("button",{onClick:function(t){return e.push("/payment")},children:"Proceed to Checkout"})]})};a(107);var L=function(e){var t=e.id,a=e.image,c=e.title,s=e.price,i=e.rating,n=e.hideButton,r=p(),l=Object(o.a)(r,2),j=(l[0].basket,l[1]);return Object(b.jsxs)("div",{className:"checkoutProduct",children:[Object(b.jsx)("img",{className:"checkoutProduct__image",src:a}),Object(b.jsxs)("div",{className:"checkoutProduct__info",children:[Object(b.jsx)("p",{className:"checkoutProduct__title",children:c}),Object(b.jsxs)("p",{className:"checkoutProduct__price",children:[Object(b.jsx)("small",{children:"$"}),Object(b.jsx)("strong",{children:s})]}),Object(b.jsx)("div",{className:"checkoutProduct__rating",children:Array(i).fill().map((function(e,t){return Object(b.jsx)("p",{children:"\ud83c\udf1f"})}))}),!n&&Object(b.jsx)("button",{onClick:function(){j({type:"REMOVE_FROM_BASKET",id:t})},children:"Remove from Basket"})]})]})};var T=function(){var e=p(),t=Object(o.a)(e,2),a=t[0],c=a.basket,s=a.user;return t[1],Object(b.jsxs)("div",{className:"checkout",children:[Object(b.jsxs)("div",{className:"checkout__left",children:[Object(b.jsx)("img",{className:"checkout__ad",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:""}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("h3",{children:["Hello, ",null===s||void 0===s?void 0:s.email]}),Object(b.jsx)("h2",{className:"checkout__title",children:"Your shopping Basket"}),c.map((function(e){return Object(b.jsx)(L,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))]})]}),Object(b.jsx)("div",{className:"checkout__right",children:Object(b.jsx)(A,{})})]})};a(108);var I=function(){var e=Object(S.f)(),t=Object(c.useState)(""),a=Object(o.a)(t,2),s=a[0],i=a[1],n=Object(c.useState)(""),r=Object(o.a)(n,2),l=r[0],j=r[1];return Object(b.jsxs)("div",{className:"login",children:[Object(b.jsx)(u.b,{to:"/",children:Object(b.jsx)("img",{className:"login__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"})}),Object(b.jsxs)("div",{className:"login__container",children:[Object(b.jsx)("h1",{children:"Sign-in"}),Object(b.jsxs)("form",{children:[Object(b.jsx)("h5",{children:"E-mail"}),Object(b.jsx)("input",{type:"text",value:s,onChange:function(e){return i(e.target.value)}}),Object(b.jsx)("h5",{children:"Password"}),Object(b.jsx)("input",{type:"password",value:l,onChange:function(e){return j(e.target.value)}}),Object(b.jsx)("button",{type:"submit",onClick:function(t){t.preventDefault(),g.signInWithEmailAndPassword(s,l).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__signInButton",children:"Sign In"})]}),Object(b.jsx)("p",{children:"By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice."}),Object(b.jsx)("button",{onClick:function(t){t.preventDefault(),g.createUserWithEmailAndPassword(s,l).then((function(t){t&&e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__registerButton",children:"Create your Amazon Account"})]})]})},z=a(27),P=a.n(z),M=a(38),G=(a(110),a(24)),X=a(61),D=a.n(X).a.create({baseURL:"https://us-central1-challenge-4b2b2.cloudfunctions.net/api"});var R=function(){var e=p(),t=Object(o.a)(e,2),a=t[0],s=a.basket,i=a.user,n=t[1],r=Object(S.f)(),l=Object(G.useStripe)(),j=Object(G.useElements)(),d=Object(c.useState)(!1),m=Object(o.a)(d,2),h=m[0],O=m[1],_=Object(c.useState)(""),g=Object(o.a)(_,2),v=g[0],f=g[1],N=Object(c.useState)(null),k=Object(o.a)(N,2),y=k[0],w=k[1],B=Object(c.useState)(!0),A=Object(o.a)(B,2),T=A[0],I=A[1],z=Object(c.useState)(!0),X=Object(o.a)(z,2),R=X[0],U=X[1];Object(c.useEffect)((function(){(function(){var e=Object(M.a)(P.a.mark((function e(){var t;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D({method:"post",url:"/payments/create?total=".concat(100*E(s))});case 2:t=e.sent,U(t.data.clientSecret);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]),console.log("THE SECRET IS >>>",R),console.log("\ud83d\udc71",i);var K=function(){var e=Object(M.a)(P.a.mark((function e(t){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),f(!0),e.next=4,l.confirmCardPayment(R,{payment_method:{card:j.getElement(G.CardElement)}}).then((function(e){var t=e.paymentIntent;x.collection("users").doc(null===i||void 0===i?void 0:i.uid).collection("orders").doc(t.id).set({basket:s,amount:t.amount,created:t.created}),O(!0),w(null),f(!1),n({type:"EMPTY_BASKET"}),r.replace("/orders")}));case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)("div",{className:"payment",children:Object(b.jsxs)("div",{className:"payment__container",children:[Object(b.jsxs)("h1",{children:["Checkout (",Object(b.jsxs)(u.b,{to:"/checkout",children:[null===s||void 0===s?void 0:s.length," items"]}),")"]}),Object(b.jsxs)("div",{className:"payment__section",children:[Object(b.jsx)("div",{className:"payment__title",children:Object(b.jsx)("h3",{children:"Delivery Address"})}),Object(b.jsxs)("div",{className:"payment__address",children:[Object(b.jsx)("p",{children:null===i||void 0===i?void 0:i.email}),Object(b.jsx)("p",{children:"123 React Lane"}),Object(b.jsx)("p",{children:"Los Angeles, CA"})]})]}),Object(b.jsxs)("div",{className:"payment__section",children:[Object(b.jsx)("div",{className:"payment__title",children:Object(b.jsx)("h3",{children:"Review items and delivery"})}),Object(b.jsx)("div",{className:"payment__items",children:s.map((function(e){return Object(b.jsx)(L,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))})]}),Object(b.jsxs)("div",{className:"payment__section",children:[Object(b.jsx)("div",{className:"payment__title",children:Object(b.jsx)("h3",{children:"Payment Method"})}),Object(b.jsx)("div",{className:"payment__details",children:Object(b.jsxs)("form",{onSubmit:K,children:[Object(b.jsx)(G.CardElement,{onChange:function(e){I(e.empty),w(e.error?e.error.message:"")}}),Object(b.jsxs)("div",{className:"payment__priceContainer",children:[Object(b.jsx)(C.a,{renderText:function(e){return Object(b.jsxs)("h3",{children:["Order Total: ",e]})},decimalScale:2,value:E(s),displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(b.jsx)("button",{disabled:v||T||h,children:Object(b.jsx)("span",{children:v?Object(b.jsx)("p",{children:"Processing"}):"Buy Now"})})]}),y&&Object(b.jsx)("div",{children:y})]})})]})]})})},U=(a(128),a(129),a(62)),K=a.n(U);var W=function(e){var t,a=e.order;return Object(b.jsxs)("div",{className:"order",children:[Object(b.jsx)("h2",{children:"Order"}),Object(b.jsx)("p",{children:K.a.unix(a.data.created).format("MMMM Do YYYY, h:mma")}),Object(b.jsx)("p",{className:"order__id",children:Object(b.jsx)("small",{children:a.id})}),null===(t=a.data.basket)||void 0===t?void 0:t.map((function(e){return Object(b.jsx)(L,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating,hideButton:!0})})),Object(b.jsx)(C.a,{renderText:function(e){return Object(b.jsxs)("h3",{className:"order__total",children:["Order Total: ",e]})},decimalScale:2,value:a.data.amount/100,displayType:"text",thousandSeparator:!0,prefix:"$"})]})};var Y=function(){var e=p(),t=Object(o.a)(e,2),a=t[0],s=(a.basket,a.user),i=(t[1],Object(c.useState)([])),n=Object(o.a)(i,2),r=n[0],l=n[1];return Object(c.useEffect)((function(){s?x.collection("users").doc(null===s||void 0===s?void 0:s.uid).collection("orders").orderBy("created","desc").onSnapshot((function(e){return l(e.docs.map((function(e){return{id:e.id,data:e.data()}})))})):l([])}),[s]),Object(b.jsxs)("div",{className:"orders",children:[Object(b.jsx)("h1",{children:"Your Orders"}),Object(b.jsx)("div",{className:"orders__order",children:null===r||void 0===r?void 0:r.map((function(e){return Object(b.jsx)(W,{order:e})}))})]})},H=a(63),F=Object(H.a)("pk_test_51HPvU9DFg5koCdLGJJbNo60QAU99BejacsvnKvT8xnCu1wFLCuQP3WBArscK3RvSQmSIB3N0Pbsc7TtbQiJ1vaOi00X9sIbazL");var V=function(){var e=p(),t=Object(o.a)(e,2);Object(r.a)(t[0]);var a=t[1];return Object(c.useEffect)((function(){g.onAuthStateChanged((function(e){console.log("THE USER IS >>> ",e),a(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),Object(b.jsx)(u.a,{children:Object(b.jsx)("div",{className:"app",children:Object(b.jsxs)(S.c,{children:[Object(b.jsxs)(S.a,{path:"/orders",children:[Object(b.jsx)(v,{}),Object(b.jsx)(Y,{})]}),Object(b.jsx)(S.a,{path:"/login",children:Object(b.jsx)(I,{})}),Object(b.jsxs)(S.a,{path:"/checkout",children:[Object(b.jsx)(v,{}),Object(b.jsx)(T,{})]}),Object(b.jsxs)(S.a,{path:"/payment",children:[Object(b.jsx)(v,{}),Object(b.jsx)(G.Elements,{stripe:F,children:Object(b.jsx)(R,{})})]}),Object(b.jsxs)(S.a,{path:"/",children:[Object(b.jsx)(v,{}),Object(b.jsx)(N,{})]})]})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(O,{initialState:{basket:[],user:null},reducer:B,children:Object(b.jsx)(V,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},90:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){}},[[132,1,2]]]);
//# sourceMappingURL=main.63daeb02.chunk.js.map