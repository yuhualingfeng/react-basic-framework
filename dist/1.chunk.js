(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{19:function(t,n,o){"use strict";o.r(n),function(c,u){var i=o(0);o(21);function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function a(t,n){return!n||"object"!==e(n)&&"function"!=typeof n?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):n}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t,n){return(p=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}var t=function(t){function n(t){return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),a(this,l(n).call(this,t))}var e,o,r;return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&p(t,n)}(n,c.Component),e=n,(o=[{key:"componentDidMount",value:function(){fetch("/package.json").then(function(t){return t.json()}).then(function(t){console.log("parsed json",t)}).catch(function(t){console.log("parsing failed",t)})}},{key:"render",value:function(){return c.createElement("div",null,"my  ",u.name,c.createElement(i.Link,{to:"/demo1"},"demo1"))}}])&&f(e.prototype,o),r&&f(e,r),n}();n.default=t}.call(this,o(1),o(12))},21:function(t,n,e){}}]);