(self.webpackChunktouchlab=self.webpackChunktouchlab||[]).push([[447],{2711:function(t,e,n){t.exports=function(){"use strict";var t="undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{},e="Expected a function",o=NaN,i="[object Symbol]",a=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,c=/^0o[0-7]+$/i,u=parseInt,l="object"==typeof t&&t&&t.Object===Object&&t,d="object"==typeof self&&self&&self.Object===Object&&self,p=l||d||Function("return this")(),f=Object.prototype.toString,m=Math.max,v=Math.min,b=function(){return p.Date.now()};function h(t,n,o){var i,a,r,s,c,u,l=0,d=!1,p=!1,f=!0;if("function"!=typeof t)throw new TypeError(e);function h(e){var n=i,o=a;return i=a=void 0,l=e,s=t.apply(o,n)}function y(t){var e=t-u;return void 0===u||e>=n||e<0||p&&t-l>=r}function w(){var t=b();if(y(t))return x(t);c=setTimeout(w,function(t){var e=n-(t-u);return p?v(e,r-(t-l)):e}(t))}function x(t){return c=void 0,f&&i?h(t):(i=a=void 0,s)}function k(){var t=b(),e=y(t);if(i=arguments,a=this,u=t,e){if(void 0===c)return function(t){return l=t,c=setTimeout(w,n),d?h(t):s}(u);if(p)return c=setTimeout(w,n),h(u)}return void 0===c&&(c=setTimeout(w,n)),s}return n=E(n)||0,g(o)&&(d=!!o.leading,r=(p="maxWait"in o)?m(E(o.maxWait)||0,n):r,f="trailing"in o?!!o.trailing:f),k.cancel=function(){void 0!==c&&clearTimeout(c),l=0,i=u=a=c=void 0},k.flush=function(){return void 0===c?s:x(b())},k}function g(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function E(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&f.call(t)==i}(t))return o;if(g(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=g(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var n=s.test(t);return n||c.test(t)?u(t.slice(2),n?2:8):r.test(t)?o:+t}var y=function(t,n,o){var i=!0,a=!0;if("function"!=typeof t)throw new TypeError(e);return g(o)&&(i="leading"in o?!!o.leading:i,a="trailing"in o?!!o.trailing:a),h(t,n,{leading:i,maxWait:n,trailing:a})},w="Expected a function",x=NaN,k="[object Symbol]",C=/^\s+|\s+$/g,N=/^[-+]0x[0-9a-f]+$/i,O=/^0b[01]+$/i,S=/^0o[0-7]+$/i,T=parseInt,j="object"==typeof t&&t&&t.Object===Object&&t,A="object"==typeof self&&self&&self.Object===Object&&self,L=j||A||Function("return this")(),M=Object.prototype.toString,D=Math.max,z=Math.min,q=function(){return L.Date.now()};function R(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function H(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&M.call(t)==k}(t))return x;if(R(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=R(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(C,"");var n=O.test(t);return n||S.test(t)?T(t.slice(2),n?2:8):N.test(t)?x:+t}var $=function(t,e,n){var o,i,a,r,s,c,u=0,l=!1,d=!1,p=!0;if("function"!=typeof t)throw new TypeError(w);function f(e){var n=o,a=i;return o=i=void 0,u=e,r=t.apply(a,n)}function m(t){var n=t-c;return void 0===c||n>=e||n<0||d&&t-u>=a}function v(){var t=q();if(m(t))return b(t);s=setTimeout(v,function(t){var n=e-(t-c);return d?z(n,a-(t-u)):n}(t))}function b(t){return s=void 0,p&&o?f(t):(o=i=void 0,r)}function h(){var t=q(),n=m(t);if(o=arguments,i=this,c=t,n){if(void 0===s)return function(t){return u=t,s=setTimeout(v,e),l?f(t):r}(c);if(d)return s=setTimeout(v,e),f(c)}return void 0===s&&(s=setTimeout(v,e)),r}return e=H(e)||0,R(n)&&(l=!!n.leading,a=(d="maxWait"in n)?D(H(n.maxWait)||0,e):a,p="trailing"in n?!!n.trailing:p),h.cancel=function(){void 0!==s&&clearTimeout(s),u=0,o=c=i=s=void 0},h.flush=function(){return void 0===s?r:b(q())},h},P=function(){};function W(t){t&&t.forEach((function(t){var e=Array.prototype.slice.call(t.addedNodes),n=Array.prototype.slice.call(t.removedNodes);if(function t(e){var n=void 0,o=void 0;for(n=0;n<e.length;n+=1){if((o=e[n]).dataset&&o.dataset.aos)return!0;if(o.children&&t(o.children))return!0}return!1}(e.concat(n)))return P()}))}function I(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}var Z={isSupported:function(){return!!I()},ready:function(t,e){var n=window.document,o=new(I())(W);P=e,o.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}},U=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},Y=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),_=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},F=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,V=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,B=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,G=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;function X(){return navigator.userAgent||navigator.vendor||window.opera||""}var K=new(function(){function t(){U(this,t)}return Y(t,[{key:"phone",value:function(){var t=X();return!(!F.test(t)&&!V.test(t.substr(0,4)))}},{key:"mobile",value:function(){var t=X();return!(!B.test(t)&&!G.test(t.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}},{key:"ie11",value:function(){return"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style}}]),t}()),J=function(t,e){var n=void 0;return K.ie11()?(n=document.createEvent("CustomEvent")).initCustomEvent(t,!0,!0,{detail:e}):n=new CustomEvent(t,{detail:e}),document.dispatchEvent(n)},Q=function(t){return t.forEach((function(t,e){return function(t,e){var n=t.options,o=t.position,i=t.node,a=(t.data,function(){t.animated&&(function(t,e){e&&e.forEach((function(e){return t.classList.remove(e)}))}(i,n.animatedClassNames),J("aos:out",i),t.options.id&&J("aos:in:"+t.options.id,i),t.animated=!1)});n.mirror&&e>=o.out&&!n.once?a():e>=o.in?t.animated||(function(t,e){e&&e.forEach((function(e){return t.classList.add(e)}))}(i,n.animatedClassNames),J("aos:in",i),t.options.id&&J("aos:in:"+t.options.id,i),t.animated=!0):t.animated&&!n.once&&a()}(t,window.pageYOffset)}))},tt=function(t){for(var e=0,n=0;t&&!isNaN(t.offsetLeft)&&!isNaN(t.offsetTop);)e+=t.offsetLeft-("BODY"!=t.tagName?t.scrollLeft:0),n+=t.offsetTop-("BODY"!=t.tagName?t.scrollTop:0),t=t.offsetParent;return{top:n,left:e}},et=function(t,e,n){var o=t.getAttribute("data-aos-"+e);if(void 0!==o){if("true"===o)return!0;if("false"===o)return!1}return o||n},nt=function(t,e){return t.forEach((function(t,n){var o=et(t.node,"mirror",e.mirror),i=et(t.node,"once",e.once),a=et(t.node,"id"),r=e.useClassNames&&t.node.getAttribute("data-aos"),s=[e.animatedClassName].concat(r?r.split(" "):[]).filter((function(t){return"string"==typeof t}));e.initClassName&&t.node.classList.add(e.initClassName),t.position={in:function(t,e,n){var o=window.innerHeight,i=et(t,"anchor"),a=et(t,"anchor-placement"),r=Number(et(t,"offset",a?0:e)),s=a||n,c=t;i&&document.querySelectorAll(i)&&(c=document.querySelectorAll(i)[0]);var u=tt(c).top-o;switch(s){case"top-bottom":break;case"center-bottom":u+=c.offsetHeight/2;break;case"bottom-bottom":u+=c.offsetHeight;break;case"top-center":u+=o/2;break;case"center-center":u+=o/2+c.offsetHeight/2;break;case"bottom-center":u+=o/2+c.offsetHeight;break;case"top-top":u+=o;break;case"bottom-top":u+=o+c.offsetHeight;break;case"center-top":u+=o+c.offsetHeight/2}return u+r}(t.node,e.offset,e.anchorPlacement),out:o&&function(t,e){window.innerHeight;var n=et(t,"anchor"),o=et(t,"offset",e),i=t;return n&&document.querySelectorAll(n)&&(i=document.querySelectorAll(n)[0]),tt(i).top+i.offsetHeight-o}(t.node,e.offset)},t.options={once:i,mirror:o,animatedClassNames:s,id:a}})),t},ot=function(){var t=document.querySelectorAll("[data-aos]");return Array.prototype.map.call(t,(function(t){return{node:t}}))},it=[],at=!1,rt={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,mirror:!1,anchorPlacement:"top-bottom",startEvent:"DOMContentLoaded",animatedClassName:"aos-animate",initClassName:"aos-init",useClassNames:!1,disableMutationObserver:!1,throttleDelay:99,debounceDelay:50},st=function(){return document.all&&!window.atob},ct=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(at=!0),at&&(it=nt(it,rt),Q(it),window.addEventListener("scroll",y((function(){Q(it,rt.once)}),rt.throttleDelay)))},ut=function(){if(it=ot(),dt(rt.disable)||st())return lt();ct()},lt=function(){it.forEach((function(t,e){t.node.removeAttribute("data-aos"),t.node.removeAttribute("data-aos-easing"),t.node.removeAttribute("data-aos-duration"),t.node.removeAttribute("data-aos-delay"),rt.initClassName&&t.node.classList.remove(rt.initClassName),rt.animatedClassName&&t.node.classList.remove(rt.animatedClassName)}))},dt=function(t){return!0===t||"mobile"===t&&K.mobile()||"phone"===t&&K.phone()||"tablet"===t&&K.tablet()||"function"==typeof t&&!0===t()};return{init:function(t){return rt=_(rt,t),it=ot(),rt.disableMutationObserver||Z.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),rt.disableMutationObserver=!0),rt.disableMutationObserver||Z.ready("[data-aos]",ut),dt(rt.disable)||st()?lt():(document.querySelector("body").setAttribute("data-aos-easing",rt.easing),document.querySelector("body").setAttribute("data-aos-duration",rt.duration),document.querySelector("body").setAttribute("data-aos-delay",rt.delay),-1===["DOMContentLoaded","load"].indexOf(rt.startEvent)?document.addEventListener(rt.startEvent,(function(){ct(!0)})):window.addEventListener("load",(function(){ct(!0)})),"DOMContentLoaded"===rt.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1&&ct(!0),window.addEventListener("resize",$(ct,rt.debounceDelay,!0)),window.addEventListener("orientationchange",$(ct,rt.debounceDelay,!0)),it)},refresh:ct,refreshHard:ut}}()},6398:(t,e,n)=>{"use strict";n.d(e,{Z:()=>x});var o=n(7462),i=n(3366),a=n(5068);function r(t,e){return t.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var s=n(7294),c=n(3935);const u=!1,l=s.createContext(null);var d=function(t){return t.scrollTop},p="unmounted",f="exited",m="entering",v="entered",b="exiting",h=function(t){function e(e,n){var o;o=t.call(this,e,n)||this;var i,a=n&&!n.isMounting?e.enter:e.appear;return o.appearStatus=null,e.in?a?(i=f,o.appearStatus=m):i=v:i=e.unmountOnExit||e.mountOnEnter?p:f,o.state={status:i},o.nextCallback=null,o}(0,a.Z)(e,t),e.getDerivedStateFromProps=function(t,e){return t.in&&e.status===p?{status:f}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(t){var e=null;if(t!==this.props){var n=this.state.status;this.props.in?n!==m&&n!==v&&(e=m):n!==m&&n!==v||(e=b)}this.updateStatus(!1,e)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var t,e,n,o=this.props.timeout;return t=e=n=o,null!=o&&"number"!=typeof o&&(t=o.exit,e=o.enter,n=void 0!==o.appear?o.appear:e),{exit:t,enter:e,appear:n}},n.updateStatus=function(t,e){if(void 0===t&&(t=!1),null!==e)if(this.cancelNextCallback(),e===m){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:c.findDOMNode(this);n&&d(n)}this.performEnter(t)}else this.performExit();else this.props.unmountOnExit&&this.state.status===f&&this.setState({status:p})},n.performEnter=function(t){var e=this,n=this.props.enter,o=this.context?this.context.isMounting:t,i=this.props.nodeRef?[o]:[c.findDOMNode(this),o],a=i[0],r=i[1],s=this.getTimeouts(),l=o?s.appear:s.enter;!t&&!n||u?this.safeSetState({status:v},(function(){e.props.onEntered(a)})):(this.props.onEnter(a,r),this.safeSetState({status:m},(function(){e.props.onEntering(a,r),e.onTransitionEnd(l,(function(){e.safeSetState({status:v},(function(){e.props.onEntered(a,r)}))}))})))},n.performExit=function(){var t=this,e=this.props.exit,n=this.getTimeouts(),o=this.props.nodeRef?void 0:c.findDOMNode(this);e&&!u?(this.props.onExit(o),this.safeSetState({status:b},(function(){t.props.onExiting(o),t.onTransitionEnd(n.exit,(function(){t.safeSetState({status:f},(function(){t.props.onExited(o)}))}))}))):this.safeSetState({status:f},(function(){t.props.onExited(o)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},n.setNextCallback=function(t){var e=this,n=!0;return this.nextCallback=function(o){n&&(n=!1,e.nextCallback=null,t(o))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(t,e){this.setNextCallback(e);var n=this.props.nodeRef?this.props.nodeRef.current:c.findDOMNode(this),o=null==t&&!this.props.addEndListener;if(n&&!o){if(this.props.addEndListener){var i=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],a=i[0],r=i[1];this.props.addEndListener(a,r)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},n.render=function(){var t=this.state.status;if(t===p)return null;var e=this.props,n=e.children,o=(e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef,(0,i.Z)(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return s.createElement(l.Provider,{value:null},"function"==typeof n?n(t,o):s.cloneElement(s.Children.only(n),o))},e}(s.Component);function g(){}h.contextType=l,h.propTypes={},h.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:g,onEntering:g,onEntered:g,onExit:g,onExiting:g,onExited:g},h.UNMOUNTED=p,h.EXITED=f,h.ENTERING=m,h.ENTERED=v,h.EXITING=b;const E=h;var y=function(t,e){return t&&e&&e.split(" ").forEach((function(e){return o=e,void((n=t).classList?n.classList.remove(o):"string"==typeof n.className?n.className=r(n.className,o):n.setAttribute("class",r(n.className&&n.className.baseVal||"",o)));var n,o}))},w=function(t){function e(){for(var e,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))||this).appliedClasses={appear:{},enter:{},exit:{}},e.onEnter=function(t,n){var o=e.resolveArguments(t,n),i=o[0],a=o[1];e.removeClasses(i,"exit"),e.addClass(i,a?"appear":"enter","base"),e.props.onEnter&&e.props.onEnter(t,n)},e.onEntering=function(t,n){var o=e.resolveArguments(t,n),i=o[0],a=o[1]?"appear":"enter";e.addClass(i,a,"active"),e.props.onEntering&&e.props.onEntering(t,n)},e.onEntered=function(t,n){var o=e.resolveArguments(t,n),i=o[0],a=o[1]?"appear":"enter";e.removeClasses(i,a),e.addClass(i,a,"done"),e.props.onEntered&&e.props.onEntered(t,n)},e.onExit=function(t){var n=e.resolveArguments(t)[0];e.removeClasses(n,"appear"),e.removeClasses(n,"enter"),e.addClass(n,"exit","base"),e.props.onExit&&e.props.onExit(t)},e.onExiting=function(t){var n=e.resolveArguments(t)[0];e.addClass(n,"exit","active"),e.props.onExiting&&e.props.onExiting(t)},e.onExited=function(t){var n=e.resolveArguments(t)[0];e.removeClasses(n,"exit"),e.addClass(n,"exit","done"),e.props.onExited&&e.props.onExited(t)},e.resolveArguments=function(t,n){return e.props.nodeRef?[e.props.nodeRef.current,t]:[t,n]},e.getClassNames=function(t){var n=e.props.classNames,o="string"==typeof n,i=o?""+(o&&n?n+"-":"")+t:n[t];return{baseClassName:i,activeClassName:o?i+"-active":n[t+"Active"],doneClassName:o?i+"-done":n[t+"Done"]}},e}(0,a.Z)(e,t);var n=e.prototype;return n.addClass=function(t,e,n){var o=this.getClassNames(e)[n+"ClassName"],i=this.getClassNames("enter").doneClassName;"appear"===e&&"done"===n&&i&&(o+=" "+i),"active"===n&&t&&d(t),o&&(this.appliedClasses[e][n]=o,function(t,e){t&&e&&e.split(" ").forEach((function(e){return o=e,void((n=t).classList?n.classList.add(o):function(t,e){return t.classList?!!e&&t.classList.contains(e):-1!==(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")}(n,o)||("string"==typeof n.className?n.className=n.className+" "+o:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+o)));var n,o}))}(t,o))},n.removeClasses=function(t,e){var n=this.appliedClasses[e],o=n.base,i=n.active,a=n.done;this.appliedClasses[e]={},o&&y(t,o),i&&y(t,i),a&&y(t,a)},n.render=function(){var t=this.props,e=(t.classNames,(0,i.Z)(t,["classNames"]));return s.createElement(E,(0,o.Z)({},e,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},e}(s.Component);w.defaultProps={classNames:""},w.propTypes={};const x=w}}]);