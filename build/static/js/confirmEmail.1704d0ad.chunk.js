webpackJsonp([12],{1015:function(n,e,t){"use strict";function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function i(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?n:e}function o(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),t.d(e,"ConfirmEmail",function(){return y});var a=t(0),c=t.n(a),u=t(31),l=t(134),s=t(1016),f=t(1020),p=t(222),m=t(83),d=t(38),g=function(){function n(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),h=function(n,e){return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}(["\n  --fg: ",";\n  --bg: ",";\n  --activeLink: ",";\n  \n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  \n  > .header {\n    height: 70px;\n  }\n  \n  .main-content {\n    flex: 1;\n    margin-top: 60px;\n  }\n  \n  .footer {\n    height: 200px;\n    background: #eee;\n  }\n"],["\n  --fg: ",";\n  --bg: ",";\n  --activeLink: ",";\n  \n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  \n  > .header {\n    height: 70px;\n  }\n  \n  .main-content {\n    flex: 1;\n    margin-top: 60px;\n  }\n  \n  .footer {\n    height: 200px;\n    background: #eee;\n  }\n"]),b=u.b.div(h,l.a.fg,l.a.bg,l.a.activeLink),y=function(n){function e(){var n,t,o,a;r(this,e);for(var c=arguments.length,u=Array(c),l=0;l<c;l++)u[l]=arguments[l];return t=o=i(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this].concat(u))),o.state={confirmed:!1},o.confirmToken=function(){var n=o.props.match?o.props.match.params.token:null;n&&o.props.confirmEmail({token:n})},o.confirmed=function(){return"confirmed"===o.props.status},a=t,i(o,a)}return o(e,n),g(e,[{key:"componentDidMount",value:function(){this.confirmToken()}},{key:"render",value:function(){var n=this;return this.confirmed()&&setTimeout(function(){return n.props.history.push({pathname:"/login",state:{flash_msg:"Your email confirmation was successful. Logging you in in a sec ..."}})},2e3),c.a.createElement(b,null,c.a.createElement(s.a,{confirmed:this.confirmed,status:this.props.status,token:this.state.token}))}}],[{key:"getDerivedStateFromProps",value:function(n,e){return{token:n.match?n.match.params.token:null}}}]),e}(a.Component),v=function(n){return{status:n.users.confirmedStatus}},O=function(n){return Object(m.b)({confirmEmail:f.a},n)};e.default=Object(d.g)(Object(p.b)(v,O)(y))},1016:function(n,e,t){"use strict";var r=t(1017);t.d(e,"a",function(){return r.a})},1017:function(n,e,t){"use strict";var r=t(0),i=t.n(r),o=t(31),a=(t(223),t(1018)),c=t.n(a),u=t(1019),l=t.n(u),s=function(n,e){return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}(['\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  \n  > h1 {\n    font-size: 3rem;\n    font-weight: 300;\n    font-family: "Andale Mono", AndaleMono, monospace;\n  }\n  \n  > p {\n    margin: 20px 0 50px;\n  }\n  \n  > img {\n    width: 500px;\n    margin: 10px 0 100px;\n  }\n'],['\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  \n  > h1 {\n    font-size: 3rem;\n    font-weight: 300;\n    font-family: "Andale Mono", AndaleMono, monospace;\n  }\n  \n  > p {\n    margin: 20px 0 50px;\n  }\n  \n  > img {\n    width: 500px;\n    margin: 10px 0 100px;\n  }\n']),f=o.b.div(s),p=function(n,e){if(!n)return"One step left!";switch(e){case"procesing":return"Hang on ...";case"failed":return"Uh oh!";default:return"Yayyy! Welcome!!"}},m=function(n){var e=n.status,t=n.token,r=n.confirmed;return i.a.createElement(f,{className:"main-content app-container"},i.a.createElement("h1",null,p(t,e)),t&&[i.a.createElement("p",null,"processing"==e&&"Confirming your email, please wait....",r()&&"Your email is confirmed! Loggin you in in a sec ...","failed"==e&&"Your email confirmation failed. Please request for a new one."),i.a.createElement("img",{src:c.a,alt:"welcome-image"})],!t&&[i.a.createElement("p",null,"We've sent you an email with a link to confirm your email address. \xa0 Please click on that link to get started."),i.a.createElement("img",{src:l.a,alt:"people-dancing"})])};e.a=m},1018:function(n,e,t){n.exports=t.p+"static/media/welcome.52366797.gif"},1019:function(n,e,t){n.exports=t.p+"static/media/people-dancing.2e873ad8.gif"},1020:function(n,e,t){"use strict";t.d(e,"a",function(){return o});var r=t(1021),i=t(421),o=function(n){var e=Object(i.a)({requestType:r.a.CONFIRM_START,receiveType:r.a.CONFIRM_COMPLETE,failType:r.a.CONFIRM_FAIL});return Object(i.b)({actions:e,data:n,errorMessage:"Something prevented confirming this email address",caller:"new event",route:"/api/v1/web/users/confirm",requestMethod:"POST"})}},1021:function(n,e,t){"use strict";var r=t(225),i=t.n(r);e.a=i()({CONFIRM_START:null,CONFIRM_COMPLETE:null,CONFIRM_FAIL:null})}});
//# sourceMappingURL=confirmEmail.1704d0ad.chunk.js.map