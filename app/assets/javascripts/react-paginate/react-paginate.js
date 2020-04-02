!function(e,a){"object"==typeof exports&&"object"==typeof module?module.exports=a(require("react")):"function"==typeof define&&define.amd?define(["react"],a):"object"==typeof exports?exports.ReactPaginate=a(require("react")):e.ReactPaginate=a(e.React)}(window,function(e){return function(e){var a={};function t(r){if(a[r])return a[r].exports;var n=a[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}return t.m=e,t.c=a,t.d=function(e,a,r){t.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,a){if(1&a&&(e=t(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)t.d(r,n,function(a){return e[a]}.bind(null,n));return r},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},t.p="",t(t.s=2)}([function(a,t){a.exports=e},function(e,a,t){e.exports=t(4)()},function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r,n=t(3),l=(r=n)&&r.__esModule?r:{default:r};a.default=l.default},function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=function(){function e(e,a){for(var t=0;t<a.length;t++){var r=a[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(a,t,r){return t&&e(a.prototype,t),r&&e(a,r),a}}(),n=t(0),l=o(n),s=o(t(1)),i=o(t(6)),u=o(t(7));function o(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function a(e){!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a);var t=function(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?e:a}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));t.handlePreviousPage=function(e){var a=t.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,a>0&&t.handlePageSelected(a-1,e)},t.handleNextPage=function(e){var a=t.state.selected,r=t.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,a<r-1&&t.handlePageSelected(a+1,e)},t.handlePageSelected=function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1,t.state.selected!==e&&(t.setState({selected:e}),t.callCallback(e))},t.handleBreakClick=function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1;var r=t.state.selected;t.handlePageSelected(r<e?t.getForwardJump():t.getBackwardJump(),a)},t.callCallback=function(e){void 0!==t.props.onPageChange&&"function"==typeof t.props.onPageChange&&t.props.onPageChange({selected:e})},t.pagination=function(){var e=[],a=t.props,r=a.pageRangeDisplayed,n=a.pageCount,s=a.marginPagesDisplayed,i=a.breakLabel,o=a.breakClassName,c=a.breakLinkClassName,d=t.state.selected;if(n<=r)for(var f=0;f<n;f++)e.push(t.getPageElement(f));else{var p=r/2,g=r-p;d>n-r/2?p=r-(g=n-d):d<r/2&&(g=r-(p=d));var b=void 0,m=void 0,v=void 0,C=function(e){return t.getPageElement(e)};for(b=0;b<n;b++)(m=b+1)<=s?e.push(C(b)):m>n-s?e.push(C(b)):b>=d-p&&b<=d+g?e.push(C(b)):i&&e[e.length-1]!==v&&(v=l.default.createElement(u.default,{key:b,breakLabel:i,breakClassName:o,breakLinkClassName:c,onClick:t.handleBreakClick.bind(null,b)}),e.push(v))}return e};var r=void 0;return r=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,t.state={selected:r},t}return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}(a,n.Component),r(a,[{key:"componentDidMount",value:function(){var e=this.props,a=e.initialPage,t=e.disableInitialCallback,r=e.extraAriaContext;void 0===a||t||this.callCallback(a),r&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.")}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:this.props.forcePage})}},{key:"getForwardJump",value:function(){var e=this.state.selected,a=this.props,t=a.pageCount,r=e+a.pageRangeDisplayed;return r>=t?t-1:r}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"hrefBuilder",value:function(e){var a=this.props,t=a.hrefBuilder,r=a.pageCount;if(t&&e!==this.state.selected&&e>=0&&e<r)return t(e+1)}},{key:"ariaLabelBuilder",value:function(e){var a=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var t=this.props.ariaLabelBuilder(e+1,a);return this.props.extraAriaContext&&!a&&(t=t+" "+this.props.extraAriaContext),t}}},{key:"getPageElement",value:function(e){var a=this.state.selected,t=this.props,r=t.pageClassName,n=t.pageLinkClassName,s=t.activeClassName,u=t.activeLinkClassName,o=t.extraAriaContext;return l.default.createElement(i.default,{key:e,onClick:this.handlePageSelected.bind(null,e),selected:a===e,pageClassName:r,pageLinkClassName:n,activeClassName:s,activeLinkClassName:u,extraAriaContext:o,href:this.hrefBuilder(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1})}},{key:"render",value:function(){var e=this.props,a=e.disabledClassName,t=e.previousClassName,r=e.nextClassName,n=e.pageCount,s=e.containerClassName,i=e.previousLinkClassName,u=e.previousLabel,o=e.nextLinkClassName,c=e.nextLabel,d=this.state.selected,f=t+(0===d?" "+a:""),p=r+(d===n-1?" "+a:""),g=0===d?"true":"false",b=d===n-1?"true":"false";return l.default.createElement("ul",{className:s},l.default.createElement("li",{className:f},l.default.createElement("a",{onClick:this.handlePreviousPage,className:i,href:this.hrefBuilder(d-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":g},u)),this.pagination(),l.default.createElement("li",{className:p},l.default.createElement("a",{onClick:this.handleNextPage,className:o,href:this.hrefBuilder(d+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":b},c)))}}]),a}();c.propTypes={pageCount:s.default.number.isRequired,pageRangeDisplayed:s.default.number.isRequired,marginPagesDisplayed:s.default.number.isRequired,previousLabel:s.default.node,nextLabel:s.default.node,breakLabel:s.default.oneOfType([s.default.string,s.default.node]),hrefBuilder:s.default.func,onPageChange:s.default.func,initialPage:s.default.number,forcePage:s.default.number,disableInitialCallback:s.default.bool,containerClassName:s.default.string,pageClassName:s.default.string,pageLinkClassName:s.default.string,activeClassName:s.default.string,activeLinkClassName:s.default.string,previousClassName:s.default.string,nextClassName:s.default.string,previousLinkClassName:s.default.string,nextLinkClassName:s.default.string,disabledClassName:s.default.string,breakClassName:s.default.string,breakLinkClassName:s.default.string,extraAriaContext:s.default.string,ariaLabelBuilder:s.default.func},c.defaultProps={pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousClassName:"previous",nextClassName:"next",previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1},a.default=c},function(e,a,t){"use strict";var r=t(5);function n(){}e.exports=function(){function e(e,a,t,n,l,s){if(s!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function a(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:a,element:e,instanceOf:a,node:e,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a};return t.checkPropTypes=n,t.PropTypes=t,t}},function(e,a,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=l(t(0)),n=l(t(1));function l(e){return e&&e.__esModule?e:{default:e}}var s=function(e){var a=e.pageClassName,t=e.pageLinkClassName,n=e.onClick,l=e.href,s=e.ariaLabel||"Page "+e.page+(e.extraAriaContext?" "+e.extraAriaContext:""),i=null;return e.selected&&(i="page",s=e.ariaLabel||"Page "+e.page+" is your current page",a=void 0!==a?a+" "+e.activeClassName:e.activeClassName,void 0!==t?void 0!==e.activeLinkClassName&&(t=t+" "+e.activeLinkClassName):t=e.activeLinkClassName),r.default.createElement("li",{className:a},r.default.createElement("a",{onClick:n,role:"button",className:t,href:l,tabIndex:"0","aria-label":s,"aria-current":i,onKeyPress:n},e.page))};s.propTypes={onClick:n.default.func.isRequired,selected:n.default.bool.isRequired,pageClassName:n.default.string,pageLinkClassName:n.default.string,activeClassName:n.default.string,activeLinkClassName:n.default.string,extraAriaContext:n.default.string,href:n.default.string,ariaLabel:n.default.string,page:n.default.number.isRequired},a.default=s},function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=l(t(0)),n=l(t(1));function l(e){return e&&e.__esModule?e:{default:e}}var s=function(e){var a=e.breakLabel,t=e.breakClassName,n=e.breakLinkClassName,l=e.onClick,s=t||"break";return r.default.createElement("li",{className:s},r.default.createElement("a",{className:n,onClick:l,role:"button",tabIndex:"0",onKeyPress:l},a))};s.propTypes={breakLabel:n.default.oneOfType([n.default.string,n.default.node]),breakClassName:n.default.string,breakLinkClassName:n.default.string,onClick:n.default.func.isRequired},a.default=s}])});
//# sourceMappingURL=react-paginate.js.map