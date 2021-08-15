(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={form:"Checkout_form__2iZMo",control:"Checkout_control__D-XgS",actions:"Checkout_actions__VgK7U",submit:"Checkout_submit__1fyTF",invalid:"Checkout_invalid__2DmiK"}},,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__3N5im",total:"Cart_total__8Uu_E",actions:"Cart_actions__1aevv","button--alt":"Cart_button--alt__2u8r4",button:"Cart_button__3FujE"}},function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__3owGM",summary:"CartItem_summary__lNXXQ",price:"CartItem_price__3HLSw",amount:"CartItem_amount__1MymJ",actions:"CartItem_actions__2NE4V"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__HuYjE",icon:"HeaderCartButton_icon__1Z-Ps",badge:"HeaderCartButton_badge__32Ren",bump:"HeaderCartButton_bump__3UIH_"}},,function(e,t,n){e.exports={backdrop:"Modal_backdrop__8IOxx",modal:"Modal_modal__3ArCv","slide-down":"Modal_slide-down__3yj0I"}},function(e,t,n){e.exports={meal:"MealItem_meal__3NuvP",description:"MealItem_description__1qXOW",price:"MealItem_price__1ZgkF"}},,,function(e,t,n){e.exports={header:"Header_header__1SQc2",mainImage:"Header_mainImage__81v7i"}},,,function(e,t,n){e.exports={card:"Card_card__3XwpU"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__N3KZL","meals-appear":"AvailableMeals_meals-appear__2JmfW",MealsLoading:"AvailableMeals_MealsLoading__1enl1",MealsError:"AvailableMeals_MealsError__39zNW"}},function(e,t,n){e.exports={input:"Input_input__-Ppwn"}},function(e,t,n){e.exports={form:"MealItemForm_form__kRNuw"}},function(e,t,n){e.exports={summary:"MealsSummary_summary__1S3Q7"}},,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(7),c=n.n(a),r=(n(27),n(2)),i=n(1),s=n.n(i),o=n(14),l=n.n(o),u=n(17),d=n(4),j=n(11),m=n.n(j),b=n(0),O=function(e){return Object(b.jsx)("div",{className:m.a.backdrop,onClick:e.onClose})},x=function(e){return Object(b.jsx)("div",{className:m.a.modal,children:Object(b.jsx)("div",{className:m.a.content,children:e.children})})},p=document.getElementById("overlay"),h=function(e){return Object(b.jsxs)(i.Fragment,{children:[c.a.createPortal(Object(b.jsx)(O,{onClose:e.onClose}),p),c.a.createPortal(Object(b.jsx)(x,{children:e.children}),p)]})},f=n(5),_=n.n(f),v=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},clearCart:function(){}}),C=n(6),y=n.n(C),N=function(e){var t="$".concat(e.price);return Object(b.jsxs)("li",{className:y.a["cart-item"],children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:e.name}),Object(b.jsxs)("div",{className:y.a.summary,children:[Object(b.jsx)("span",{className:y.a.price,children:t}),Object(b.jsxs)("span",{className:y.a.amount,children:["x ",e.amount]})]})]}),Object(b.jsxs)("div",{className:y.a.actions,children:[Object(b.jsx)("button",{onClick:e.onRemove,children:"-"}),Object(b.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},g=n(3),A=n.n(g),I=function(e){return""===e.trim()},M=function(e){var t=Object(i.useState)({name:!0,street:!0,city:!0,postalCode:!0}),n=Object(r.a)(t,2),a=n[0],c=n[1],s=Object(i.useRef)(),o=Object(i.useRef)(),l=Object(i.useRef)(),u=Object(i.useRef)(),d="".concat(A.a.control," ").concat(a.name?"":A.a.invalid),j="".concat(A.a.control," ").concat(a.street?"":A.a.invalid),m="".concat(A.a.control," ").concat(a.postalCode?"":A.a.invalid),O="".concat(A.a.control," ").concat(a.city?"":A.a.invalid);return Object(b.jsxs)("form",{className:A.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,a=o.current.value,r=l.current.value,i=u.current.value,d=!I(n),j=!I(a),m=!I(i),b=5===r.trim().length;c({name:d,street:j,city:m,postalCode:b}),d&&b&&j&&m&&e.onConfirm({name:n,street:a,city:i,postalCode:r})},children:[Object(b.jsxs)("div",{className:d,children:[Object(b.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(b.jsx)("input",{type:"text",id:"name",ref:s}),!a.name&&Object(b.jsx)("p",{children:"Please enter valid name!"})]}),Object(b.jsxs)("div",{className:j,children:[Object(b.jsx)("label",{htmlFor:"street",children:"Street"}),Object(b.jsx)("input",{type:"text",id:"street",ref:o}),!a.street&&Object(b.jsx)("p",{children:"Please enter valid street name!"})]}),Object(b.jsxs)("div",{className:m,children:[Object(b.jsx)("label",{htmlFor:"postal",children:"Postal Code"}),Object(b.jsx)("input",{type:"text",id:"postal",ref:l}),!a.postalCode&&Object(b.jsx)("p",{children:"Please enter valid postal code(5 char long)!"})]}),Object(b.jsxs)("div",{className:O,children:[Object(b.jsx)("label",{htmlFor:"city",children:"City"}),Object(b.jsx)("input",{type:"text",id:"city",ref:u}),!a.city&&Object(b.jsx)("p",{children:"Please enter valid city name!"})]}),Object(b.jsxs)("div",{className:A.a.actions,children:[Object(b.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(b.jsx)("button",{className:A.a.submit,children:"Confirm"})]})]})},S=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),a=n[0],c=n[1],o=Object(i.useState)(!1),j=Object(r.a)(o,2),m=j[0],O=j[1],x=Object(i.useState)(!1),p=Object(r.a)(x,2),f=p[0],C=p[1],y=Object(i.useContext)(v),g="$".concat(y.totalAmount.toFixed(2)),A=y.items.length>0,I=function(e){y.removeItem(e)},S=function(e){y.addItem(Object(d.a)(Object(d.a)({},e),{},{amount:1}))},k=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.next=3,fetch("https://react-food-ordering-app-e9334-default-rtdb.firebaseio.com/orders.json",{method:"POST",body:JSON.stringify({user:t,orderedItems:y.items})});case 3:O(!1),C(!0),y.clearCart();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=Object(b.jsx)("ul",{className:_.a["cart-items"],children:y.items.map((function(e){return Object(b.jsx)(N,{name:e.name,amount:e.amount,price:e.price,onRemove:I.bind(null,e.id),onAdd:S.bind(null,e)},e.id)}))}),F=Object(b.jsxs)("div",{className:_.a.actions,children:[Object(b.jsx)("button",{className:_.a["button--alt"],onClick:e.onClose,children:"Close"}),A&&Object(b.jsx)("button",{className:_.a.button,onClick:function(){c(!0)},children:"Order"})]}),H=Object(b.jsxs)(s.a.Fragment,{children:[w,Object(b.jsxs)("div",{className:_.a.total,children:[Object(b.jsx)("span",{children:"Total Amount"}),Object(b.jsx)("span",{children:g})]}),a&&Object(b.jsx)(M,{onConfirm:k,onCancel:e.onClose}),!a&&F]}),E=Object(b.jsx)("p",{children:"Sending order Data..."}),P=Object(b.jsxs)(s.a.Fragment,{children:[Object(b.jsx)("p",{children:"Successfully sent the order!"}),Object(b.jsx)("div",{className:_.a.actions,children:Object(b.jsx)("button",{className:_.a.button,onClick:e.onClose,children:"Close"})})]});return Object(b.jsxs)(h,{onClose:e.onClose,children:[!m&&!f&&H,m&&E,!m&&f&&P]})},k=n.p+"static/media/meals.2971f633.jpg",w=n(15),F=n.n(w),H=function(){return Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(b.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},E=n(9),P=n.n(E),R=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),a=n[0],c=n[1],s=Object(i.useContext)(v),o=s.items,l=o.reduce((function(e,t){return e+t.amount}),0),u="".concat(P.a.button," ").concat(a?P.a.bump:"");return Object(i.useEffect)((function(){if(0!==s.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[o]),Object(b.jsxs)("button",{className:u,onClick:e.onClick,children:[Object(b.jsx)("span",{className:P.a.icon,children:Object(b.jsx)(H,{})}),Object(b.jsx)("span",{children:"Your Cart"}),Object(b.jsx)("span",{className:P.a.badge,children:l})]})},D=function(e){return Object(b.jsxs)(i.Fragment,{children:[Object(b.jsxs)("header",{className:F.a.header,children:[Object(b.jsx)("h1",{children:"Fresh Meals"}),Object(b.jsx)(R,{onClick:e.onShowCart})]}),Object(b.jsx)("div",{className:F.a.mainImage,children:Object(b.jsx)("img",{src:k,alt:"A table full of food!"})})]})},B=n(18),T=n.n(B),z=function(e){return Object(b.jsx)("div",{className:T.a.card,children:e.children})},J=n(19),L=n.n(J),V=n(12),X=n.n(V),U=n(20),Y=n.n(U),Z=s.a.forwardRef((function(e,t){return Object(b.jsxs)("div",{className:Y.a.input,children:[Object(b.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(b.jsx)("input",Object(d.a)({ref:t},e.input))]})})),K=n(21),Q=n.n(K),W=function(e){var t=Object(i.useState)(!0),n=Object(r.a)(t,2),a=n[0],c=n[1],s=Object(i.useRef)();return Object(b.jsxs)("form",{className:Q.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,a=+n;0===n.trim().length||a<1||a>5?c(!1):e.onAddToCart(a)},children:[Object(b.jsx)(Z,{ref:s,label:"Amount",input:{id:"amount"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(b.jsx)("button",{children:"+ Add"}),!a&&Object(b.jsx)("p",{children:"Please enter a valid amount (1-5)"})]})},$=function(e){var t=Object(i.useContext)(v),n="$".concat(e.price.toFixed(2));return Object(b.jsxs)("li",{className:X.a.meal,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:e.name}),Object(b.jsx)("div",{className:X.a.description,children:e.description}),Object(b.jsx)("div",{className:X.a.price,children:n})]}),Object(b.jsx)("div",{children:Object(b.jsx)(W,{id:e.id,onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},G=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99}],q=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),n=(t[0],t[1],Object(i.useState)(!0)),a=Object(r.a)(n,2),c=(a[0],a[1],Object(i.useState)()),s=Object(r.a)(c,2),o=(s[0],s[1],G.map((function(e){return Object(b.jsx)($,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)})));return Object(b.jsx)("section",{className:L.a.meals,children:Object(b.jsx)(z,{children:Object(b.jsx)("ul",{children:o})})})},ee=n(22),te=n.n(ee),ne=function(){return Object(b.jsxs)("section",{className:te.a.summary,children:[Object(b.jsx)("h2",{children:"Delicious Meals, Delivered To You"}),Object(b.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious breakfast, lunch or dinner at home."}),Object(b.jsx)("p",{children:"Perfect for anyone who wants to eat and feel better, especially if you're busy or working."})]})},ae=function(){return Object(b.jsxs)(i.Fragment,{children:[Object(b.jsx)(ne,{}),Object(b.jsx)(q,{})]})},ce=n(16),re={items:[],totalAmount:0},ie=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[c];if(r){var i=Object(d.a)(Object(d.a)({},r),{},{amount:r.amount+t.item.amount});(n=Object(ce.a)(e.items))[c]=i}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],u=e.totalAmount-l.price;if(1===l.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var j=Object(d.a)(Object(d.a)({},l),{},{amount:l.amount-1});(s=Object(ce.a)(e.items))[o]=j}return{items:s,totalAmount:u}}return t.type,re},se=function(e){var t=Object(i.useReducer)(ie,re),n=Object(r.a)(t,2),a=n[0],c=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})},clearCart:function(){c({type:"CLEAR"})}};return Object(b.jsx)(v.Provider,{value:s,children:e.children})};var oe=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(b.jsxs)(se,{children:[n&&Object(b.jsx)(S,{onClose:function(){a(!1)}}),Object(b.jsx)(D,{onShowCart:function(){a(!0)}}),Object(b.jsx)("main",{children:Object(b.jsx)(ae,{})})]})};c.a.render(Object(b.jsx)(oe,{}),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.6f740404.chunk.js.map