!function(e){var n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(r,i,function(n){return e[n]}.bind(null,i));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s="./main.js")}({"./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('const mouseWheel = __webpack_require__(/*! ./source/demo.js */ "./source/demo.js");\n\n__webpack_require__(/*! ./source/demo.css */ "./source/demo.css");\n\nmouseWheel();\n\n//# sourceURL=webpack:///./main.js?')},"./source/demo.css":
/*!*************************!*\
  !*** ./source/demo.css ***!
  \*************************/
/*! no static exports found */function(module,exports){eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./source/demo.css?")},"./source/demo.js":
/*!************************!*\
  !*** ./source/demo.js ***!
  \************************/
/*! no static exports found */function(module,exports){eval('function mouseWheel() {\n  // 动态获取inner的子元素的数量，而且分别为inner和它的子元素动态设置高度百分比\n  var inner = document.querySelectorAll(".inner")[0];\n  var innerChildren = inner.children;\n  inner.style.height = 100 * innerChildren.length + \'%\';\n\n  for (let x = 0; x < innerChildren.length; x++) {\n    innerChildren[x].style.height = 100 / innerChildren.length + \'%\';\n  } // 为下面动态修改top值做准备,先获取每一个子元素的具体height值\n\n\n  var height = window.getComputedStyle(innerChildren[0]).height;\n  height = parseInt(height); // 动态生成相对应数量的li(右侧的小球)\n  // （1）判断是否有.navList_ul\n\n  var navList_ul = document.querySelectorAll(".navList_ul")[0];\n\n  if (navList_ul) {\n    // var li = innerChildren;\n    // （2）动态生成小球(li)\n    for (let x = 0; x < innerChildren.length; x++) {\n      navList_ul.appendChild(document.createElement("li"));\n    } // (3)为第一个小球初始为选中状态\n\n\n    navList_ul.children[0].classList.add("current");\n  }\n\n  document.getElementsByClassName("inner")[0].addEventListener(\'wheel\', function (e) {\n    var _this = this;\n\n    setTimeout(function () {\n      // 向下滚\n      if (e.deltaY > 0 && _this.dataset.page != innerChildren.length) {\n        _this.style.top = -height * _this.dataset.page + \'px\'; // 渐进特效\n\n        if (innerChildren[_this.dataset.page].children[0]) {\n          innerChildren[_this.dataset.page].children[0].style.animation = "h1Move 2s";\n        }\n\n        _this.dataset.page++; // 小圆球随页面滑动而滑动的特效\n\n        if (innerChildren.length && navList_ul) {\n          for (let x = 0; x < innerChildren.length; x++) {\n            navList_ul.children[x].classList.remove("current");\n          }\n\n          navList_ul.children[_this.dataset.page - 1].classList.add("current");\n        }\n      }\n\n      if (e.deltaY > 0 && _this.dataset.page == innerChildren.length) {\n        return;\n      } // 向上滚\n\n\n      if (e.deltaY < 0 && _this.dataset.page != 1) {\n        _this.dataset.page--;\n        _this.style.top = -height * (_this.dataset.page - 1) + \'px\'; // 小圆球随页面滑动而滑动的特效\n\n        if (innerChildren.length && navList_ul) {\n          for (let x = 0; x < innerChildren.length; x++) {\n            navList_ul.children[x].classList.remove("current");\n          }\n\n          navList_ul.children[_this.dataset.page - 1].classList.add("current");\n        }\n      }\n\n      if (e.deltaY < 0 && _this.dataset.page == 1) {\n        return;\n      }\n    }, 500);\n  });\n}\n\nmodule.exports = mouseWheel;\n\n//# sourceURL=webpack:///./source/demo.js?')}});