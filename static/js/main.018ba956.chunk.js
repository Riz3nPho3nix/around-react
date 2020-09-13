(this["webpackJsonparound-react"]=this["webpackJsonparound-react"]||[]).push([[0],{1088:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),r=t(20),o=t.n(r),i=(t(226),t(221)),l=t(7),s=t(214),u=t.n(s);var d=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("header",{className:"header"},c.a.createElement("img",{src:u.a,alt:"Around the US logo",className:"header__logo"})))},m=c.a.createContext({});var f=function(e){var a=c.a.useContext(m),t=e.card.owner._id===a._id,n=e.card.likes.some((function(e){return e._id===a._id})),r="card__delete-btn ".concat(t?"card__delete-btn_visible":"card__delete-btn_hidden"),o="card__heart ".concat(n?"card__liked":"");return c.a.createElement("li",{className:"card"},c.a.createElement("div",{className:"card__image",style:{backgroundImage:"url(".concat(e.card.link,")")},onClick:function(a){e.onCardClick(e.card)}},c.a.createElement("button",{className:r,onClick:function(a){e.onCardDelete(e.card),a.stopPropagation()}})),c.a.createElement("div",{className:"card__label"},c.a.createElement("h2",{className:"card__heading"},e.card.name),c.a.createElement("div",{className:"card__likes"},c.a.createElement("button",{className:o,onClick:function(){e.onCardLike(e.card)}}),c.a.createElement("p",{className:"card__like-count"},e.card.likes.length))))};var h=function(e){var a=c.a.useContext(m);return c.a.createElement(m.Provider,{value:a},c.a.createElement("main",{className:"main"},c.a.createElement("section",{className:"profile"},c.a.createElement("div",{className:"profile__avatar"},c.a.createElement("img",{alt:"Profile portrait",className:"profile__picture",src:a.avatar}),c.a.createElement("button",{className:"profile__overlay",onClick:e.onEditAvatar})),c.a.createElement("div",{className:"profile__info"},c.a.createElement("h1",{className:"profile__name"},a.name),c.a.createElement("p",{className:"profile__job"},a.about),c.a.createElement("button",{className:"profile__edit link","aria-label":"Edit Profile",onClick:e.onEditProfile})),c.a.createElement("button",{className:"profile__add-btn link",onClick:e.onAddPlace})),c.a.createElement("ul",{className:"cards"},e.cards.map((function(a){return c.a.createElement(f,{key:a._id,card:a,onCardLike:function(a){e.onCardLike(a)},onCardClick:function(a){e.onCardClick(a)},onCardDelete:function(a){e.onCardDelete(a)}})})))))};var _=function(){return c.a.createElement("footer",{className:"footer"},c.a.createElement("p",{className:"footer__copyright"},"\xa9 2020 Brian Wilson"))},p=t(215),v=t(216),E=(t(227),new(function(){function e(a){var t=a.baseURL,n=a.headers;Object(p.a)(this,e),this._baseURL=t,this._headers=n}return Object(v.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._baseURL,"/cards"),{headers:this._headers}).then((function(a){return e._checkResponse(a)}))}},{key:"getProfileInfo",value:function(){var e=this;return fetch("".concat(this._baseURL,"/users/me"),{headers:this._headers}).then((function(a){return e._checkResponse(a)}))}},{key:"getAppInfo",value:function(){return Promise.all([this.getProfileInfo(),this.getInitialCards()])}},{key:"setProfileInfo",value:function(e){var a=this;return fetch("".concat(this._baseURL,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return a._checkResponse(e)}))}},{key:"createCard",value:function(e){var a=this;return fetch("".concat(this._baseURL,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return a._checkResponse(e)})).catch((function(e){return console.log(e)}))}},{key:"deleteCard",value:function(e){var a=this;return fetch("".concat(this._baseURL,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return a._checkResponse(e)})).catch((function(e){return console.log(e)}))}},{key:"cardLike",value:function(e){var a=this;return fetch("".concat(this._baseURL,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then((function(e){return a._checkResponse(e)})).catch((function(e){return console.log(e)}))}},{key:"cardUnlike",value:function(e){var a=this;return fetch("".concat(this._baseURL,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return a._checkResponse(e)})).catch((function(e){return console.log(e)}))}},{key:"updateAvatar",value:function(e){var a=this;return fetch("".concat(this._baseURL,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then((function(e){return a._checkResponse(e)})).catch((function(e){return console.log(e)}))}}]),e}())({baseURL:"https://around.nomoreparties.co/v1/group-3",headers:{authorization:"85b65791-c6f6-4567-a451-befb44448843","Content-Type":"application/json"}}));t(812);var k=function(e){return c.a.createElement("div",{className:"".concat(e.name," modal ").concat(e.isOpen?"modal__open":"")},c.a.createElement("div",{className:"modal__window"},c.a.createElement("button",{className:"modal__close link",onClick:e.onClose}),c.a.createElement("form",{action:"submit",onSubmit:e.onSubmit,className:"modal__form",name:"".concat(e.name),noValidate:!0},c.a.createElement("h2",{className:"modal__heading"},e.title),e.children,c.a.createElement("button",{className:"modal__button button"},"Save"))))};var b=function(e){var a=c.a.useContext(m),t=c.a.useState(""),n=Object(l.a)(t,2),r=n[0],o=n[1],i=c.a.useState(""),s=Object(l.a)(i,2),u=s[0],d=s[1];return c.a.createElement(k,{name:"profile-edit",title:"Edit Profile",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(a){a.preventDefault(),e.onUpdateUser({name:r,about:u}),e.onClose()}},c.a.createElement("input",{className:"modal__input",name:"name",type:"text",minLength:"2",maxLength:"40",required:!0,defaultValue:a.name,onChange:function(e){o(e.target.value)}}),c.a.createElement("input",{className:"modal__input",name:"about",type:"text",minLength:"2",maxLength:"200",required:!0,defaultValue:a.about,onChange:function(e){d(e.target.value)}}))};var g=function(e){var a=c.a.useState(),t=Object(l.a)(a,2),n=t[0],r=t[1],o=c.a.useState(),i=Object(l.a)(o,2),s=i[0],u=i[1];return c.a.createElement(k,{name:"new-card",title:"New Place",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(a){a.preventDefault(),e.onAddCard({name:n,link:s}),e.onClose()}},c.a.createElement("input",{className:"modal__input",name:"name",type:"text",placeholder:"Title",minLength:"1",maxLength:"30",required:!0,value:n,onChange:function(e){r(e.target.value)}}),c.a.createElement("input",{className:"modal__input",name:"link",type:"url",placeholder:"Image link",required:!0,value:s,onChange:function(e){u(e.target.value)}}))};var C=function(e){var a=c.a.useState(""),t=Object(l.a)(a,2),n=t[0],r=t[1],o=c.a.useRef(n);return c.a.createElement(k,{name:"new-avatar",title:"Change Profile Picture",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(a){a.preventDefault(),e.onUpdateAvatar({avatar:n}),e.onClose()}},c.a.createElement("input",{ref:o,className:"modal__input",name:"avatar",type:"url",placeholder:"Image link",required:!0,onChange:function(e){r(e.target.value)}}))};var N=function(e){return c.a.createElement("div",{className:"display modal ".concat(""!==e.card?"modal__open":""),onClick:e.onClose},c.a.createElement("div",{className:"modal__window display__window"},c.a.createElement("button",{className:"modal__close link",onClick:e.onClose}),c.a.createElement("figure",null,c.a.createElement("img",{className:"display__image",src:"".concat(e.card.link)}),c.a.createElement("figcaption",{className:"display__caption"},e.card.name))))};var y=function(){var e=c.a.useState({}),a=Object(l.a)(e,2),t=a[0],n=a[1],r=c.a.useState(!1),o=Object(l.a)(r,2),s=o[0],u=o[1],f=c.a.useState(!1),p=Object(l.a)(f,2),v=p[0],k=p[1],y=c.a.useState(!1),O=Object(l.a)(y,2),L=O[0],P=O[1],S=c.a.useState(""),R=Object(l.a)(S,2),U=R[0],w=R[1],j=c.a.useState([]),A=Object(l.a)(j,2),I=A[0],x=A[1];function D(){u(!1),k(!1),P(!1),w("")}return c.a.useEffect((function(){E.getProfileInfo().then((function(e){n(e)})).catch((function(e){return console.log(e)}))})),E.getInitialCards().then((function(e){x(e)})).catch((function(e){return console.log(e)})),c.a.createElement(m.Provider,{value:t},c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"page"},c.a.createElement(d,null),c.a.createElement(h,{onEditProfile:function(){u(!0)},onAddPlace:function(){k(!0)},onEditAvatar:function(){P(!0)},onCardClick:function(e){return function(e){w(e)}(e)},selectedCard:U,onClose:D,cards:I,onCardLike:function(e){(e.likes.some((function(e){return e._id===t._id}))?E.cardUnlike(e._id):E.cardLike(e._id)).then((function(a){var t=I.map((function(t){return t._id===e._id?a:t}));x(t)}))},onCardDelete:function(e){E.deleteCard(e._id).then((function(){var a=I.filter((function(a){return a._id!==e._id}));x(a)}))}}),c.a.createElement(_,null),c.a.createElement(b,{isOpen:s,onClose:D,onUpdateUser:function(e){E.setProfileInfo(e).then((function(e){t.name=e.name,t.about=e.about})).catch((function(e){return console.log(e)}))}}),c.a.createElement(g,{isOpen:v,onClose:D,onAddCard:function(e){E.createCard(e).then((function(e){return x([].concat(Object(i.a)(I),[e]))}))}}),c.a.createElement(C,{isOpen:L,onClose:D,onUpdateAvatar:function(e){console.log(e),E.updateAvatar(e).then((function(e){return t.avatar=e})).catch((function(e){return console.log(e)}))}}),c.a.createElement(N,{onClose:D,card:U}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},214:function(e,a,t){e.exports=t.p+"static/media/logo-white.3e6893cd.svg"},222:function(e,a,t){e.exports=t(1088)},226:function(e,a,t){},233:function(e,a){},236:function(e,a){},237:function(e,a){},238:function(e,a){},239:function(e,a){},257:function(e,a){}},[[222,1,2]]]);
//# sourceMappingURL=main.018ba956.chunk.js.map