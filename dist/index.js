!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react")):"function"==typeof define&&define.amd?define(["react"],e):"object"==typeof exports?exports.ReactFlipPage=e(require("react")):t.ReactFlipPage=e(t.react)}(this,function(t){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=5)}([function(t,e){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function i(t){if(c===setTimeout)return setTimeout(t,0);if((c===n||!c)&&setTimeout)return c=setTimeout,setTimeout(t,0);try{return c(t,0)}catch(e){try{return c.call(null,t,0)}catch(e){return c.call(this,t,0)}}}function o(t){if(f===clearTimeout)return clearTimeout(t);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(t);try{return f(t)}catch(e){try{return f.call(null,t)}catch(e){return f.call(this,t)}}}function a(){v&&d&&(v=!1,d.length?h=d.concat(h):g=-1,h.length&&s())}function s(){if(!v){var t=i(a);v=!0;for(var e=h.length;e;){for(d=h,h=[];++g<e;)d&&d[g].run();g=-1,e=h.length}d=null,v=!1,o(t)}}function u(t,e){this.fun=t,this.array=e}function l(){}var c,f,p=t.exports={};!function(){try{c="function"==typeof setTimeout?setTimeout:n}catch(t){c=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(t){f=r}}();var d,h=[],v=!1,g=-1;p.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];h.push(new u(t,e)),1!==h.length||v||i(s)},u.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=l,p.addListener=l,p.once=l,p.off=l,p.removeListener=l,p.removeAllListeners=l,p.emit=l,p.prependListener=l,p.prependOnceListener=l,p.listeners=function(t){return[]},p.binding=function(t){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(t){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(t,e,n){"use strict";function r(t){return function(){return t}}var i=function(){};i.thatReturns=r,i.thatReturnsFalse=r(!1),i.thatReturnsTrue=r(!0),i.thatReturnsNull=r(null),i.thatReturnsThis=function(){return this},i.thatReturnsArgument=function(t){return t},t.exports=i},function(t,e,n){"use strict";(function(e){function n(t,e,n,i,o,a,s,u){if(r(e),!t){var l;if(void 0===e)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,i,o,a,s,u],f=0;l=new Error(e.replace(/%s/g,function(){return c[f++]})),l.name="Invariant Violation"}throw l.framesToPop=1,l}}var r=function(t){};"production"!==e.env.NODE_ENV&&(r=function(t){if(void 0===t)throw new Error("invariant requires an error message argument")}),t.exports=n}).call(e,n(0))},function(t,e,n){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,e,n){"use strict";(function(e){var r=n(1),i=r;"production"!==e.env.NODE_ENV&&function(){var t=function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=0,o="Warning: "+t.replace(/%s/g,function(){return n[i++]});"undefined"!=typeof console&&console.error(o);try{throw new Error(o)}catch(t){}};i=function(e,n){if(void 0===n)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(0!==n.indexOf("Failed Composite propType: ")&&!e){for(var r=arguments.length,i=Array(r>2?r-2:0),o=2;o<r;o++)i[o-2]=arguments[o];t.apply(void 0,[n].concat(i))}}}(),t.exports=i}).call(e,n(0))},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=n(6),l=r(u),c=n(7),f=r(c),p=n(11),d=(r(p),n(17)),h=r(d),v=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return Object.assign.apply(Object,[{}].concat(e))},g=function(t){function e(t){i(this,e);var n=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.state={page:0,startY:-1,diffY:0,timestamp:0,angle:0,rotate:0,direction:"",lastDirection:"",secondHalfStyle:{},firstHalfStyle:{},hintVisible:!1},n.startMoving=n.startMoving.bind(n),n.moveGesture=n.moveGesture.bind(n),n.stopMoving=n.stopMoving.bind(n),n.reset=n.reset.bind(n),n.transition="transform "+n.props.animationDuration/1e3+"s ease-in-out",n}return a(e,t),s(e,[{key:"componentDidMount",value:function(){var t=this,e=this.props,n=e.showHint,r=e.showTouchHint;n&&(this.hintTimeout=setTimeout(function(){return t.showHint()},r?1800:1e3)),r&&(this.touchHintTimeout=setTimeout(function(){return t.showTouchHint()},1e3))}},{key:"componentWillUnmount",value:function(){clearTimeout(this.hintTimeout),clearTimeout(this.hintHideTimeout),clearTimeout(this.touchHintTimeout),clearTimeout(this.touchHintHideTimeout)}},{key:"showHint",value:function(){var t=this,e=this.props,n=e.orientation,r=e.perspective,i=this.transition;this.setState({secondHalfStyle:{transition:i}},function(){t.setState({secondHalfStyle:{transition:i,transform:"vertical"===n?"perspective("+r+") rotateX(30deg)":"perspective("+r+") rotateY(-30deg)"}}),t.hintHideTimeout=setTimeout(function(){return t.setState({secondHalfStyle:{transition:i}})},1e3)})}},{key:"showTouchHint",value:function(){var t=this;this.setState({hintVisible:!0},function(){t.touchHintHideTimeout=setTimeout(function(){return t.setState({hintVisible:!1})},4e3)})}},{key:"isLastPage",value:function(){return this.state.page+1===u.Children.count(this.props.children)}},{key:"isFirstPage",value:function(){return 0===this.state.page}},{key:"getHeight",value:function(){return this.props.height+"px"}},{key:"getHalfHeight",value:function(){return this.props.height/2+"px"}},{key:"getWidth",value:function(){return this.props.width+"px"}},{key:"getHalfWidth",value:function(){return this.props.width/2+"px"}},{key:"startMoving",value:function(t){t.preventDefault();var e=t.pageX||t.touches[0].pageX,n=t.pageY||t.touches[0].pageY;this.setState({startX:e,startY:n})}},{key:"moveGesture",value:function(t){t.preventDefault();var e=t.pageX||t.touches[0].pageX,n=t.pageY||t.touches[0].pageY,r=this.props,i=r.orientation,o=r.treshold,a=r.maxAngle,s=r.perspective,u=this.state,l=u.startX,c=u.startY,f=u.diffX,p=u.diffY,d=u.direction,h=u.lastDirection;if(-1!==c){var v=n-c,g=e-l,y="up"===d||"down"===d?v:g,m=y/250*180,b=!1;"up"===d||"left"===d?b=this.isLastPage():"down"!==d&&"right"!==d||(b=this.isFirstPage());var w=Math.min(Math.abs(m),b?a:180),x="";""===d&&(Math.abs(g)>o||Math.abs(v)>o)&&(v<0&&"vertical"===i?x="up":v>0&&"vertical"===i?x="down":g<0&&"horizontal"===i?x="left":g>0&&"horizontal"===i&&(x="right"),this.setState({direction:x}));var E=h;p>v?E="up":p<v?E="down":f>g?E="right":f<g&&(E="left"),this.setState({angle:m,rotate:w,timestamp:Date.now(),diffY:v,diffX:g,lastDirection:E}),v<0&&"up"===this.state.direction?this.setState({angle:m,secondHalfStyle:{transform:"perspective("+s+") rotateX("+w+"deg)"}}):v>0&&"down"===this.state.direction?this.setState({angle:m,firstHalfStyle:{transform:"perspective("+s+") rotateX(-"+w+"deg)",zIndex:2}}):g<0&&"left"===this.state.direction?this.setState({angle:m,secondHalfStyle:{transform:"perspective("+s+") rotateY(-"+w+"deg)"}}):g>0&&"right"===this.state.direction&&this.setState({angle:m,firstHalfStyle:{transform:"perspective("+s+") rotateY("+w+"deg)",zIndex:2}})}}},{key:"gotoNextPage",value:function(){var t=this;if(!this.isLastPage()){var e=this.props,n=e.perspective,r=e.orientation,i=e.onPageChange,o=e.animationDuration,a=this.state.page,s=this.transition,u="perspective("+n+") ";u+="vertical"===r?"rotateX(180deg)":"rotateY(-180deg)",this.setState({firstHalfStyle:{transition:s,transform:"",zIndex:"auto"},secondHalfStyle:{transition:s,transform:u}},function(){setTimeout(function(){t.setState({secondHalfStyle:{},page:a+1},function(){i(a)})},o)})}}},{key:"gotoPreviousPage",value:function(){var t=this;if(!this.isFirstPage()){var e=this.props,n=e.perspective,r=e.orientation,i=e.onPageChange,o=e.animationDuration,a=this.state.page,s=this.transition,u="perspective("+n+") ";u+="vertical"===r?"rotateX(-180deg)":"rotateY(180deg)",this.setState({firstHalfStyle:{transition:s,transform:u,zIndex:2},secondHalfStyle:{transition:s,transform:""}},function(){setTimeout(function(){t.setState({firstHalfStyle:{},page:a-1},function(){i(a)})},o)})}}},{key:"stopMoving",value:function(t){var e=this.state,n=e.timestamp,r=e.angle,i=e.direction,o=e.lastDirection,a=Date.now()-n,s=!this.isLastPage()&&(r<=-90||a<=20&&"up"===i&&"up"===o||a<=20&&"right"===i&&"right"===o),u=!this.isFirstPage()&&(r>=90||a<=20&&"down"===i&&"down"===o||a<=20&&"left"===i&&"left"===o);this.reset(),s&&this.gotoNextPage(),u&&this.gotoPreviousPage()}},{key:"_beforeItem",value:function(){var t=this.props,e=t.children,n=t.firstComponent;return this.isFirstPage()?n:e[this.state.page-1]}},{key:"_afterItem",value:function(){var t=this.props,e=t.children,n=t.lastComponent;return this.isLastPage()?n:e[this.state.page+1]}},{key:"reset",value:function(){var t=this.transition;this.setState({startY:-1,startX:-1,angle:0,rotate:0,direction:"",lastDirection:"",secondHalfStyle:{transition:t},firstHalfStyle:{transition:t}})}},{key:"renderPage",value:function(t,e){var n=this.getHeight(),r=this.getHalfHeight(),i=this.getWidth(),o=this.getHalfWidth(),a={height:n},s=(0,u.cloneElement)(t,{style:Object.assign({},t.props.style,a)}),c=this.state,f=c.page,p=c.direction,d=c.rotate,g=this.props,y=g.orientation,m=g.uncutPages,b=g.maskOpacity,w=g.pageBackground,x=g.animationDuration,E=(0,h.default)(f,e,p,d,m,i,o,n,r,y,b,w,x),T=E.container,S=E.part,k=E.visiblePart,C=E.firstHalf,O=E.secondHalf,P=E.face,H=E.back,L=E.before,j=E.after,R=E.cut,N=E.pull,M=E.gradient,_=E.gradientSecondHalfBack,I=E.gradientFirstHalfBack,D=E.gradientSecondHalf,A=E.gradientFirstHalf,U=E.mask,Y=E.zIndex,z=this._beforeItem(),B=this._afterItem(),V=z&&(0,u.cloneElement)(z,{style:Object.assign({},z.props.style,a)}),F=B&&(0,u.cloneElement)(B,{style:Object.assign({},B.props.style,a)});return l.default.createElement("div",{key:e,onMouseDown:this.startMoving,onTouchStart:this.startMoving,onMouseMove:this.moveGesture,onTouchMove:this.moveGesture,onMouseUp:this.stopMoving,onTouchEnd:this.stopMoving,onMouseLeave:this.reset,style:T},l.default.createElement("div",{style:v(S,L,R)},V,l.default.createElement("div",{style:U})),l.default.createElement("div",{style:v(S,R,j)},l.default.createElement("div",{style:N},F),l.default.createElement("div",{style:U})),l.default.createElement("div",{style:v(S,k,C,this.state.firstHalfStyle)},l.default.createElement("div",{style:P},l.default.createElement("div",{style:v(R,Y)},s),l.default.createElement("div",{style:v(M,A)})),l.default.createElement("div",{style:v(P,H)},l.default.createElement("div",{style:R},l.default.createElement("div",{style:N},V)),l.default.createElement("div",{style:v(M,I)}))),l.default.createElement("div",{style:v(S,k,O,this.state.secondHalfStyle)},l.default.createElement("div",{style:P},l.default.createElement("div",{style:v(R,Y)},l.default.createElement("div",{style:N},s)),l.default.createElement("div",{style:v(M,D)})),l.default.createElement("div",{style:v(P,H)},l.default.createElement("div",{style:v(S,j,R)},F),l.default.createElement("div",{style:v(M,_)}))))}},{key:"render",value:function(){var t=this,e=this.props,n=e.style,r=e.children,i=e.className,o=e.orientation,a=this.state.hintVisible,s=v(n,{height:this.getHeight(),position:"relative",width:this.getWidth()});return l.default.createElement("div",{style:s,className:i},u.Children.map(r,function(e,n){return t.renderPage(e,n)}),a&&l.default.createElement("div",{className:"rfp-hint rfp-hint--"+o}))}}]),e}(u.Component);g.defaultProps={orientation:"vertical",animationDuration:200,treshold:10,maxAngle:45,maskOpacity:.4,perspective:"130em",pageBackground:"#fff",firstComponent:null,lastComponent:null,showHint:!1,showTouchHint:!1,uncutPages:!1,style:{},height:480,width:320,onPageChange:function(){},className:""},g.propTypes={orientation:function(t,e,n){if(!/(vertical|horizontal)/.test(t[e]))return new Error("Invalid prop `"+e+"` supplied to  `"+n+"`. Expected `horizontal` or `vertical`. Validation failed.")},animationDuration:f.default.number,treshold:f.default.number,maxAngle:f.default.number,maskOpacity:f.default.number,perspective:f.default.string,pageBackground:f.default.string,firstComponent:f.default.element,lastComponent:f.default.element,showHint:f.default.bool,uncutPages:f.default.bool,style:f.default.object,height:f.default.number,width:f.default.number,onPageChange:f.default.func,className:f.default.string},e.default=g},function(e,n){e.exports=t},function(t,e,n){(function(e){if("production"!==e.env.NODE_ENV){var r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,i=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===r};t.exports=n(8)(i,!0)}else t.exports=n(10)()}).call(e,n(0))},function(t,e,n){"use strict";(function(e){var r=n(1),i=n(2),o=n(4),a=n(3),s=n(9);t.exports=function(t,n){function u(t){var e=t&&(k&&t[k]||t[C]);if("function"==typeof e)return e}function l(t,e){return t===e?0!==t||1/t==1/e:t!==t&&e!==e}function c(t){this.message=t,this.stack=""}function f(t){function r(r,l,f,p,d,h,v){if(p=p||O,h=h||f,v!==a)if(n)i(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");else if("production"!==e.env.NODE_ENV&&"undefined"!=typeof console){var g=p+":"+f;!s[g]&&u<3&&(o(!1,"You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.",h,p),s[g]=!0,u++)}return null==l[f]?r?new c(null===l[f]?"The "+d+" `"+h+"` is marked as required in `"+p+"`, but its value is `null`.":"The "+d+" `"+h+"` is marked as required in `"+p+"`, but its value is `undefined`."):null:t(l,f,p,d,h)}if("production"!==e.env.NODE_ENV)var s={},u=0;var l=r.bind(null,!1);return l.isRequired=r.bind(null,!0),l}function p(t){function e(e,n,r,i,o,a){var s=e[n];if(x(s)!==t)return new c("Invalid "+i+" `"+o+"` of type `"+E(s)+"` supplied to `"+r+"`, expected `"+t+"`.");return null}return f(e)}function d(t){function e(e,n,r,i,o){if("function"!=typeof t)return new c("Property `"+o+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var s=e[n];if(!Array.isArray(s)){return new c("Invalid "+i+" `"+o+"` of type `"+x(s)+"` supplied to `"+r+"`, expected an array.")}for(var u=0;u<s.length;u++){var l=t(s,u,r,i,o+"["+u+"]",a);if(l instanceof Error)return l}return null}return f(e)}function h(t){function e(e,n,r,i,o){if(!(e[n]instanceof t)){var a=t.name||O;return new c("Invalid "+i+" `"+o+"` of type `"+S(e[n])+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}return null}return f(e)}function v(t){function n(e,n,r,i,o){for(var a=e[n],s=0;s<t.length;s++)if(l(a,t[s]))return null;return new c("Invalid "+i+" `"+o+"` of value `"+a+"` supplied to `"+r+"`, expected one of "+JSON.stringify(t)+".")}return Array.isArray(t)?f(n):("production"!==e.env.NODE_ENV&&o(!1,"Invalid argument supplied to oneOf, expected an instance of array."),r.thatReturnsNull)}function g(t){function e(e,n,r,i,o){if("function"!=typeof t)return new c("Property `"+o+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var s=e[n],u=x(s);if("object"!==u)return new c("Invalid "+i+" `"+o+"` of type `"+u+"` supplied to `"+r+"`, expected an object.");for(var l in s)if(s.hasOwnProperty(l)){var f=t(s,l,r,i,o+"."+l,a);if(f instanceof Error)return f}return null}return f(e)}function y(t){function n(e,n,r,i,o){for(var s=0;s<t.length;s++){if(null==(0,t[s])(e,n,r,i,o,a))return null}return new c("Invalid "+i+" `"+o+"` supplied to `"+r+"`.")}if(!Array.isArray(t))return"production"!==e.env.NODE_ENV&&o(!1,"Invalid argument supplied to oneOfType, expected an instance of array."),r.thatReturnsNull;for(var i=0;i<t.length;i++){var s=t[i];if("function"!=typeof s)return o(!1,"Invalid argument supplid to oneOfType. Expected an array of check functions, but received %s at index %s.",T(s),i),r.thatReturnsNull}return f(n)}function m(t){function e(e,n,r,i,o){var s=e[n],u=x(s);if("object"!==u)return new c("Invalid "+i+" `"+o+"` of type `"+u+"` supplied to `"+r+"`, expected `object`.");for(var l in t){var f=t[l];if(f){var p=f(s,l,r,i,o+"."+l,a);if(p)return p}}return null}return f(e)}function b(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(b);if(null===e||t(e))return!0;var n=u(e);if(!n)return!1;var r,i=n.call(e);if(n!==e.entries){for(;!(r=i.next()).done;)if(!b(r.value))return!1}else for(;!(r=i.next()).done;){var o=r.value;if(o&&!b(o[1]))return!1}return!0;default:return!1}}function w(t,e){return"symbol"===t||("Symbol"===e["@@toStringTag"]||"function"==typeof Symbol&&e instanceof Symbol)}function x(t){var e=typeof t;return Array.isArray(t)?"array":t instanceof RegExp?"object":w(e,t)?"symbol":e}function E(t){if(void 0===t||null===t)return""+t;var e=x(t);if("object"===e){if(t instanceof Date)return"date";if(t instanceof RegExp)return"regexp"}return e}function T(t){var e=E(t);switch(e){case"array":case"object":return"an "+e;case"boolean":case"date":case"regexp":return"a "+e;default:return e}}function S(t){return t.constructor&&t.constructor.name?t.constructor.name:O}var k="function"==typeof Symbol&&Symbol.iterator,C="@@iterator",O="<<anonymous>>",P={array:p("array"),bool:p("boolean"),func:p("function"),number:p("number"),object:p("object"),string:p("string"),symbol:p("symbol"),any:function(){return f(r.thatReturnsNull)}(),arrayOf:d,element:function(){function e(e,n,r,i,o){var a=e[n];if(!t(a)){return new c("Invalid "+i+" `"+o+"` of type `"+x(a)+"` supplied to `"+r+"`, expected a single ReactElement.")}return null}return f(e)}(),instanceOf:h,node:function(){function t(t,e,n,r,i){return b(t[e])?null:new c("Invalid "+r+" `"+i+"` supplied to `"+n+"`, expected a ReactNode.")}return f(t)}(),objectOf:g,oneOf:v,oneOfType:y,shape:m};return c.prototype=Error.prototype,P.checkPropTypes=s,P.PropTypes=P,P}}).call(e,n(0))},function(t,e,n){"use strict";(function(e){function r(t,n,r,u,l){if("production"!==e.env.NODE_ENV)for(var c in t)if(t.hasOwnProperty(c)){var f;try{i("function"==typeof t[c],"%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.",u||"React class",r,c),f=t[c](n,c,u,r,null,a)}catch(t){f=t}if(o(!f||f instanceof Error,"%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",u||"React class",r,c,typeof f),f instanceof Error&&!(f.message in s)){s[f.message]=!0;var p=l?l():"";o(!1,"Failed %s type: %s%s",r,f.message,null!=p?p:"")}}}if("production"!==e.env.NODE_ENV)var i=n(2),o=n(4),a=n(3),s={};t.exports=r}).call(e,n(0))},function(t,e,n){"use strict";var r=n(1),i=n(2),o=n(3);t.exports=function(){function t(t,e,n,r,a,s){s!==o&&i(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e};return n.checkPropTypes=r,n.PropTypes=n,n}},function(t,e,n){var r=n(12);"string"==typeof r&&(r=[[t.i,r,""]]);var i={};i.transform=void 0;n(15)(r,i);r.locals&&(t.exports=r.locals)},function(t,e,n){e=t.exports=n(13)(void 0),e.push([t.i,'.rfp-hint{animation:2s ease-in-out rfp-hint-vertical 2;background-color:hsla(0,0%,100%,.5);border-radius:15px;box-sizing:border-box;height:30px;opacity:0;pointer-events:none;position:absolute;width:30px}.rfp-hint--vertical{animation-name:rfp-hint-vertical;bottom:20%;left:50%;margin-left:-15px}.rfp-hint--horizontal{animation-name:rfp-hint-horizontal;margin-top:-15px;right:20%;top:50%}.rfp-hint:before{border-radius:15px;border:3px double hsla(0,0%,100%,.5);box-sizing:border-box;content:"";height:28px;position:absolute;width:28px}.rfp-hint--vertical:before{left:50%;margin-left:-14px;top:1px}.rfp-hint--horizontal:before{left:1px;top:1px}.rfp-hint:after{content:url('+n(14)+");position:absolute;top:8px;left:1px}@keyframes rfp-hint-vertical{0%{opacity:0;height:30px}20%,40%{opacity:1;height:30px}60%,80%{opacity:1;height:60%}to{opacity:0;height:60%}}@keyframes rfp-hint-horizontal{0%{opacity:0;width:30px}20%,40%{opacity:1;width:30px}60%,80%{opacity:1;width:60%}to{opacity:0;width:60%}}",""])},function(t,e){function n(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var o=r(i);return[n].concat(i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"})).concat([o]).join("\n")}return[n].join("\n")}function r(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=n(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e){t.exports="\"data:image/svg+xml,%3Csvg height='32px' version='1.1' viewBox='0 0 32 32' width='32px' xmlns='http://www.w3.org/2000/svg' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle/%3E%3Cdesc/%3E%3Cdefs/%3E%3Cg fill='none' fill-rule='evenodd' id='Page-1' stroke='none' stroke-width='1'%3E%3Cg fill='%23929292' id='icon-24-one-finger-tap'%3E%3Cpath d='M17.1244203,9.32866727 C17.7498203,8.55580421 18.1244203,7.57164839 18.1244203,6.5 C18.1244203,4.0147185 16.1097018,2 13.6244203,2 C11.1391388,2 9.12442034,4.0147185 9.12442034,6.5 C9.12442034,7.57164839 9.49902039,8.55580421 10.1244203,9.32866727 L10.1244203,6.49129639 C10.1244203,4.56125662 11.6914237,3 13.6244203,3 C15.5534837,3 17.1244203,4.56310664 17.1244203,6.49129639 L17.1244203,9.32866727 L17.1244203,9.32866727 L17.1244203,9.32866727 Z M19.6231595,29.9999999 C23.7659915,30 27.1244203,26.4147752 27.1244203,22.5 C27.1244203,22.5 27.1244203,24.8132437 27.1244203,22.5 L27.1244203,18.7491622 L27.1244203,16.5016756 C27.1244203,15.6723231 26.4586231,15 25.6244203,15 C24.7959932,15 24.1244203,15.6711894 24.1244203,16.5016756 L24.1244203,17 L23.1244203,17 L23.1244203,14.5064385 C23.1244203,13.6744555 22.4586231,13 21.6244203,13 C20.7959932,13 20.1244203,13.6715406 20.1244203,14.5064385 L20.1244203,16 L19.1244203,16 L19.1244203,13.5064385 C19.1244203,12.6744555 18.4586231,12 17.6244203,12 C16.7959932,12 16.1244203,12.6715406 16.1244203,13.5064385 L16.1244203,17 L15.1244203,17 L15.1244203,6.50524116 C15.1244203,5.67391942 14.4586231,5 13.6244203,5 C12.7959932,5 12.1244203,5.66712976 12.1244203,6.50524116 L12.1244203,17.7999878 C10.0660207,15.599567 7.35605012,13.1791206 6.24545305,14.2957153 C5.15828327,15.3887562 7.95978233,18.4007216 11.8717958,24.9830936 C13.6344162,27.9488875 15.8647052,29.9995418 19.6231595,29.9999999 L19.6231595,29.9999999 Z M28.1244203,22.5 C28.1244203,27.1944206 24.3188409,31 19.6244203,31.0000003 C16.5115051,31.0000003 13.2262274,29.5474856 10.9652407,25.4282229 C7.70175208,19.4825159 3.52827319,15.5832077 5.51553361,13.5959473 C6.9371827,12.1742982 9.16926196,13.5381668 11.1244203,15.3667868 L11.1244203,15.3667868 L11.1244203,6.50840855 C11.1244203,5.11541748 12.2437085,4 13.6244203,4 C15.0147583,4 16.1244203,5.12305276 16.1244203,6.50840855 L16.1244203,11.4983653 C16.5422506,11.1853054 17.0616174,11 17.6244203,11 C18.7069384,11 19.6193054,11.6774672 19.9702378,12.6281239 C20.4110134,12.2379894 20.9901312,12 21.6244203,12 C23.0147583,12 24.1244203,13.1182256 24.1244203,14.4976267 L24.1244203,14.5110883 C24.5422506,14.1985158 25.0616174,14.014191 25.6244203,14.014191 C27.0147583,14.014191 28.1244203,15.1335355 28.1244203,16.5143168 L28.1244203,22.5 L28.1244203,22.5 Z' id='one-finger-tap'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\""},function(t,e,n){function r(t,e){for(var n=0;n<t.length;n++){var r=t[n],i=h[r.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(c(r.parts[o],e))}else{for(var a=[],o=0;o<r.parts.length;o++)a.push(c(r.parts[o],e));h[r.id]={id:r.id,refs:1,parts:a}}}}function i(t,e){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],a=e.base?o[0]+e.base:o[0],s=o[1],u=o[2],l=o[3],c={css:s,media:u,sourceMap:l};r[a]?r[a].parts.push(c):n.push(r[a]={id:a,parts:[c]})}return n}function o(t,e){var n=g(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=b[b.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),b.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function a(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=b.indexOf(t);e>=0&&b.splice(e,1)}function s(t){var e=document.createElement("style");return t.attrs.type="text/css",l(e,t.attrs),o(t,e),e}function u(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",l(e,t.attrs),o(t,e),e}function l(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function c(t,e){var n,r,i,o;if(e.transform&&t.css){if(!(o=e.transform(t.css)))return function(){};t.css=o}if(e.singleton){var l=m++;n=y||(y=s(e)),r=f.bind(null,n,l,!1),i=f.bind(null,n,l,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=u(e),r=d.bind(null,n,e),i=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(e),r=p.bind(null,n),i=function(){a(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}function f(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=x(e,i);else{var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}function p(t,e){var n=e.css,r=e.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function d(t,e,n){var r=n.css,i=n.sourceMap,o=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||o)&&(r=w(r)),i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var h={},v=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),g=function(t){var e={};return function(n){return void 0===e[n]&&(e[n]=t.call(this,n)),e[n]}}(function(t){return document.querySelector(t)}),y=null,m=0,b=[],w=n(16);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||(e.singleton=v()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=i(t,e);return r(n,e),function(t){for(var o=[],a=0;a<n.length;a++){var s=n[a],u=h[s.id];u.refs--,o.push(u)}if(t){r(i(t,e),e)}for(var a=0;a<o.length;a++){var u=o[a];if(0===u.refs){for(var l=0;l<u.parts.length;l++)u.parts[l]();delete h[u.id]}}}};var x=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i))return t;var o;return o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")"})}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r="0 -100px 100px -100px rgba(0,0,0,0.25) inset",i="-100px 0 100px -100px rgba(0,0,0,0.25) inset",o="0 100px 100px -100px rgba(0,0,0,0.25) inset",a="100px 0 100px -100px rgba(0,0,0,0.25) inset";e.default=function(t,e,n,s,u,l,c,f,p,d,h,v,g){return{container:{display:t===e?"block":"none",height:f,overflow:!1===u?"hidden":"",position:"relative",width:l},part:{height:"vertical"===d?p:f,left:0,position:"absolute",width:"vertical"===d?l:c},visiblePart:{transformStyle:"preserve-3d"},firstHalf:{top:0,left:0,transformOrigin:"vertical"===d?"bottom center":"right center"},secondHalf:{left:"vertical"===d?0:c,bottom:0,right:0,transformOrigin:"vertical"===d?"top center":"left center"},face:{backfaceVisibility:"hidden",WebkitBackfaceVisibility:"hidden",height:"vertical"===d?p:f,left:0,position:"absolute",top:0,overflow:"hidden",transformStyle:"preserve-3d",width:"vertical"===d?l:c},back:{transform:"vertical"===d?"rotateX(180deg)":"rotateY(180deg)"},before:{top:0,left:0},after:{top:"vertical"===d?p:0,left:"vertical"===d?0:c,width:"horizontal"===d?c:l},cut:{background:v,height:"vertical"===d?p:f,overflow:"hidden",position:"absolute",left:0,top:0,width:l},pull:{marginTop:"vertical"===d?"-"+p:0,marginLeft:"vertical"===d?0:"-"+c,width:l},gradient:{position:"absolute",left:0,right:0,bottom:0,top:0,transition:"box-shadow "+g/1e3+"s ease-in-out"},gradientSecondHalf:{boxShadow:function(){return"up"===n?o:"right"===n?a:void 0}()},gradientFirstHalf:{boxShadow:function(){return"down"===n?r:"left"===n?i:void 0}()},gradientSecondHalfBack:{boxShadow:function(){return"up"===n?r:"left"===n?i:void 0}()},gradientFirstHalfBack:{boxShadow:function(){return"down"===n?o:"right"===n?a:void 0}()},mask:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundColor:"#000",opacity:""!==n?Math.max(h-Math.abs(s)/90*h,0):0},zIndex:{zIndex:2}}}}])});