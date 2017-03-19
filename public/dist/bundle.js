/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* global PIXI */

var Application = exports.Application = PIXI.Application;
var Loader = exports.Loader = PIXI.loader;
var Sprite = exports.Sprite = PIXI.Sprite;
var EventEmitter = exports.EventEmitter = PIXI.utils.EventEmitter;
var Rectangle = exports.Rectangle = PIXI.Rectangle;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _aliases = __webpack_require__(0);

var app = new _aliases.Application();
document.body.appendChild(app.view);

exports.default = app;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var EVENT_FRAGMENT_ANCHORED = exports.EVENT_FRAGMENT_ANCHORED = 'EVENT_FRAGMENT_ANCHORED';
var EVENT_ALL_FRAGMENTS_ANCHORED = exports.EVENT_ALL_FRAGMENTS_ANCHORED = 'EVENT_ALL_FRAGMENTS_ANCHORED';

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _HorizontalLayoutSettings = __webpack_require__(14);

var _HorizontalLayoutSettings2 = _interopRequireDefault(_HorizontalLayoutSettings);

var _VerticalLayoutSettings = __webpack_require__(15);

var _VerticalLayoutSettings2 = _interopRequireDefault(_VerticalLayoutSettings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Model = function () {
  function Model() {
    _classCallCheck(this, Model);

    /* TODO: put here and parse settings JSON */
    this._layoutSettings = undefined;
    this._fragmentsNumber = 12;
  }

  /*
    *    Factory method to init layout settings based on image dimentions
    */


  _createClass(Model, [{
    key: "initLayoutSettingsByImageDimensions",
    value: function initLayoutSettingsByImageDimensions(imageDimensions, rendererDimensions) {
      if (imageDimensions.width > imageDimensions.height) {
        this._layoutSettings = new _HorizontalLayoutSettings2.default(imageDimensions, rendererDimensions);
        return;
      }
      this._layoutSettings = new _VerticalLayoutSettings2.default(imageDimensions, rendererDimensions);
    }
  }, {
    key: "scale",
    get: function get() {
      return this._layoutSettings.scale;
    }
  }, {
    key: "rows",
    get: function get() {
      return this._layoutSettings.getRowsByFragmentsNumber(this._fragmentsNumber);
    }
  }, {
    key: "columns",
    get: function get() {
      return this._layoutSettings.getColumnsByFragmentsNumber(this._fragmentsNumber);
    }
  }, {
    key: "fragmentDimensions",
    get: function get() {
      return this._layoutSettings.getFragmentDimensionsByFragmentsNumber(this._fragmentsNumber);
    }

    // eslint-disable-next-line

  }, {
    key: "anchorPrecision",
    get: function get() {
      return 10;
    }
  }]);

  return Model;
}();

exports.default = new Model();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseFragmentState = function BaseFragmentState(fragment, statesFactory) {
  _classCallCheck(this, BaseFragmentState);

  this._fragment = fragment;
  this._statesFactory = statesFactory;
};

exports.default = BaseFragmentState;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _FragmentStateDraggable = __webpack_require__(12);

var _FragmentStateDraggable2 = _interopRequireDefault(_FragmentStateDraggable);

var _FragmentStateDragged = __webpack_require__(13);

var _FragmentStateDragged2 = _interopRequireDefault(_FragmentStateDragged);

var _FragmentStateAnchored = __webpack_require__(11);

var _FragmentStateAnchored2 = _interopRequireDefault(_FragmentStateAnchored);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FragmentStatesFactory = function () {
  function FragmentStatesFactory() {
    _classCallCheck(this, FragmentStatesFactory);
  }

  _createClass(FragmentStatesFactory, [{
    key: "getStateDraggable",
    value: function getStateDraggable(fragment) {
      return new _FragmentStateDraggable2.default(fragment, this);
    }
  }, {
    key: "getStateDragged",
    value: function getStateDragged(fragment) {
      return new _FragmentStateDragged2.default(fragment, this);
    }
  }, {
    key: "getStateAnchored",
    value: function getStateAnchored(fragment) {
      return new _FragmentStateAnchored2.default(fragment, this);
    }
  }]);

  return FragmentStatesFactory;
}();

exports.default = new FragmentStatesFactory();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* global PIXI Tink*/

var _app = __webpack_require__(1);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TinkManager = function () {
  function TinkManager() {
    var _this = this;

    _classCallCheck(this, TinkManager);

    this.tink = new Tink(PIXI, _app2.default.view);
    this._pointer = this.tink.makePointer();

    _app2.default.ticker.add(function () {
      _this.tink.update();
    });
  }

  _createClass(TinkManager, [{
    key: "makeDraggable",
    value: function makeDraggable(sprite) {
      if (!this.tink) throw new Error("TinkManager should be initialized first!");
      this.tink.makeDraggable(sprite);
    }
  }, {
    key: "makeUndraggable",
    value: function makeUndraggable(sprite) {
      if (!this.tink) throw new Error("TinkManager should be initialized first!");
      this.tink.makeUndraggable(sprite);
    }
  }, {
    key: "pointer",
    get: function get() {
      if (!this._pointer) {
        throw new Error("TinkManager should be initialized first!");
      }
      return this._pointer;
    }
  }]);

  return TinkManager;
}();

exports.default = new TinkManager();

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseLayoutSettings = function () {
  function BaseLayoutSettings(imageDimensions, rendererDimensions) {
    _classCallCheck(this, BaseLayoutSettings);

    this.imageDimensions = imageDimensions;
    this.rendererDimensions = rendererDimensions;
  }

  _createClass(BaseLayoutSettings, [{
    key: "getFragmentDimensionsByFragmentsNumber",
    value: function getFragmentDimensionsByFragmentsNumber(fragmentsNumber) {
      var width = this.imageDimensions.width / this.getColumnsByFragmentsNumber(fragmentsNumber);
      var height = this.imageDimensions.height / this.getRowsByFragmentsNumber(fragmentsNumber);
      return { width: width, height: height };
    }
  }]);

  return BaseLayoutSettings;
}();

exports.default = BaseLayoutSettings;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _aliases = __webpack_require__(0);

var _Model = __webpack_require__(3);

var _Model2 = _interopRequireDefault(_Model);

var _Fragment = __webpack_require__(10);

var _Fragment2 = _interopRequireDefault(_Fragment);

var _FragmentStatesFactory = __webpack_require__(5);

var _FragmentStatesFactory2 = _interopRequireDefault(_FragmentStatesFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FragmentsFactory = function () {
  function FragmentsFactory() {
    _classCallCheck(this, FragmentsFactory);
  }

  _createClass(FragmentsFactory, [{
    key: "getFragmentsForTexture",
    value: function getFragmentsForTexture(txr) {
      var texture = txr;
      var fragments = [];
      var fragmentDimensions = _Model2.default.fragmentDimensions;
      var rows = _Model2.default.rows;
      var columns = _Model2.default.columns;

      for (var i = 0; i < rows; i + 1) {
        for (var j = 0; j < columns; j + 1) {
          var anchorPosition = {
            x: j * fragmentDimensions.width,
            y: i * fragmentDimensions.height
          };
          var frameRect = new _aliases.Rectangle(anchorPosition.x, anchorPosition.y, fragmentDimensions.width, fragmentDimensions.height);
          texture.frame = frameRect;
          fragments.push(this.initFragment(this.createFragment(texture, anchorPosition)));
        }
      }

      return fragments;
    }

    // eslint-disable-next-line

  }, {
    key: "createFragment",
    value: function createFragment(texture, anchoredPosition) {
      return new _Fragment2.default(texture, anchoredPosition);
    }

    // eslint-disable-next-line

  }, {
    key: "initFragment",
    value: function initFragment(fragment) {
      return fragment.applyState(_FragmentStatesFactory2.default.getStateDraggable(fragment));
    }
  }]);

  return FragmentsFactory;
}();

exports.default = new FragmentsFactory();

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TinkManager = __webpack_require__(6);

var _TinkManager2 = _interopRequireDefault(_TinkManager);

var _aliases = __webpack_require__(0);

var _events = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FragmentsManager = function (_EventEmitter) {
  _inherits(FragmentsManager, _EventEmitter);

  function FragmentsManager() {
    _classCallCheck(this, FragmentsManager);

    var _this = _possibleConstructorReturn(this, (FragmentsManager.__proto__ || Object.getPrototypeOf(FragmentsManager)).call(this));

    _this._fragments = [];
    _this.draggingFragment = undefined;
    _this.anchoredFragments = 0;

    _TinkManager2.default.pointer.press = function () {
      if (!_this.fragments || !_this.fragments.length) return;

      _this.fragments.every(function (fragment) {
        if (_TinkManager2.default.pointer.hitTestSprite(fragment.view)) {
          if (_this.draggingFragment) _this.draggingFragment.toggleDrag();
          _this.draggingFragment = fragment;
          _this.draggingFragment.toggleDrag();
          return false;
        }
        return true;
      });
    };

    _TinkManager2.default.pointer.release = function () {
      if (!_this.draggingFragment) return;

      _this.draggingFragment.toggleDrag();
      _this.draggingFragment = null;
    };
    return _this;
  }

  _createClass(FragmentsManager, [{
    key: "subscribe",
    value: function subscribe() {
      var _this2 = this;

      this.fragments.forEach(function (fragment) {
        fragment.once(_events.EVENT_FRAGMENT_ANCHORED, _this2.fragmentAnchoredHandler);
      });
    }
  }, {
    key: "_fragmentAnchoredHandler",
    value: function _fragmentAnchoredHandler() {
      this.anchoredFragments += 1;
      if (this.anchoredFragments === this.fragments.length) {
        this.emit(_events.EVENT_ALL_FRAGMENTS_ANCHORED);
      }
    }
  }, {
    key: "fragments",
    set: function set(frags) {
      this._fragments = frags;
    },
    get: function get() {
      return this._fragments;
    }
  }]);

  return FragmentsManager;
}(_aliases.EventEmitter);

exports.default = new FragmentsManager();

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _aliases = __webpack_require__(0);

var _TinkManager = __webpack_require__(6);

var _TinkManager2 = _interopRequireDefault(_TinkManager);

var _events = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Fragment = function (_EventEmitter) {
  _inherits(Fragment, _EventEmitter);

  function Fragment(texture, anchorPosition) {
    _classCallCheck(this, Fragment);

    var _this = _possibleConstructorReturn(this, (Fragment.__proto__ || Object.getPrototypeOf(Fragment)).call(this));

    _this._sprite = new _aliases.Sprite(texture);
    _this._anchorPosition = anchorPosition;
    _this._state = undefined;
    return _this;
  }

  _createClass(Fragment, [{
    key: "applyState",
    value: function applyState(newState) {
      if (this._state) this._state.exit();
      this._state = newState;
      this._state.entry();
    }
  }, {
    key: "toggleDrag",
    value: function toggleDrag() {
      this._state.toggleDrag();
    }
  }, {
    key: "makeDraggable",
    value: function makeDraggable() {
      _TinkManager2.default.makeDraggable(this._sprite);
    }
  }, {
    key: "makeUndraggable",
    value: function makeUndraggable() {
      _TinkManager2.default.makeUndraggable(this._sprite);
    }
  }, {
    key: "dispatchAnchored",
    value: function dispatchAnchored() {
      this.emit(_events.EVENT_FRAGMENT_ANCHORED);
    }
  }, {
    key: "anchorPosition",
    set: function set(pos) {
      this._anchorPosition = pos;
    },
    get: function get() {
      return this._anchorPosition;
    }
  }, {
    key: "view",
    get: function get() {
      return this._sprite;
    }
  }]);

  return Fragment;
}(_aliases.EventEmitter);

exports.default = Fragment;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseFragmentState2 = __webpack_require__(4);

var _BaseFragmentState3 = _interopRequireDefault(_BaseFragmentState2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FragmentStateAnchored = function (_BaseFragmentState) {
  _inherits(FragmentStateAnchored, _BaseFragmentState);

  function FragmentStateAnchored() {
    _classCallCheck(this, FragmentStateAnchored);

    return _possibleConstructorReturn(this, (FragmentStateAnchored.__proto__ || Object.getPrototypeOf(FragmentStateAnchored)).apply(this, arguments));
  }

  _createClass(FragmentStateAnchored, [{
    key: "entry",
    value: function entry() {
      this._fragment.makeUndraggable();
    }
  }]);

  return FragmentStateAnchored;
}(_BaseFragmentState3.default);

exports.default = FragmentStateAnchored;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseFragmentState2 = __webpack_require__(4);

var _BaseFragmentState3 = _interopRequireDefault(_BaseFragmentState2);

var _FragmentStatesFactory = __webpack_require__(5);

var _FragmentStatesFactory2 = _interopRequireDefault(_FragmentStatesFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FragmentStateDraggable = function (_BaseFragmentState) {
  _inherits(FragmentStateDraggable, _BaseFragmentState);

  function FragmentStateDraggable() {
    _classCallCheck(this, FragmentStateDraggable);

    return _possibleConstructorReturn(this, (FragmentStateDraggable.__proto__ || Object.getPrototypeOf(FragmentStateDraggable)).apply(this, arguments));
  }

  _createClass(FragmentStateDraggable, [{
    key: "entry",
    value: function entry() {
      this._fragment.makeDraggable();
    }
  }, {
    key: "toggleDrag",
    value: function toggleDrag() {
      this._fragment.applyState(_FragmentStatesFactory2.default.getStateDragged(this._fragment, this._statesFactory));
    }
  }]);

  return FragmentStateDraggable;
}(_BaseFragmentState3.default);

exports.default = FragmentStateDraggable;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseFragmentState2 = __webpack_require__(4);

var _BaseFragmentState3 = _interopRequireDefault(_BaseFragmentState2);

var _Model = __webpack_require__(3);

var _Model2 = _interopRequireDefault(_Model);

var _FragmentStatesFactory = __webpack_require__(5);

var _FragmentStatesFactory2 = _interopRequireDefault(_FragmentStatesFactory);

var _app = __webpack_require__(1);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FragmentStateDragged = function (_BaseFragmentState) {
  _inherits(FragmentStateDragged, _BaseFragmentState);

  function FragmentStateDragged() {
    _classCallCheck(this, FragmentStateDragged);

    return _possibleConstructorReturn(this, (FragmentStateDragged.__proto__ || Object.getPrototypeOf(FragmentStateDragged)).apply(this, arguments));
  }

  _createClass(FragmentStateDragged, [{
    key: "entry",
    value: function entry() {
      _app2.default.ticker.add(this.checkPosition);
    }
  }, {
    key: "exit",
    value: function exit() {
      _app2.default.ticker.remove(this.checkPosition);
    }
  }, {
    key: "toggleDrag",
    value: function toggleDrag() {
      this._fragment.applyState(_FragmentStatesFactory2.default.getStateDraggable(this._fragment, this._statesFactory));
    }
  }, {
    key: "checkPosition",
    value: function checkPosition() {
      if (Math.abs(this._fragment.view.x - this._fragment.anchorPosition.x) > _Model2.default.anchorPrecision) {
        return;
      }

      if (Math.abs(this._fragment.view.y - this._fragment.anchorPosition.y) > _Model2.default.anchorPrecision) {
        return;
      }

      this._fragment.view.x = this._fragment.anchorPosition.x;
      this._fragment.view.y = this._fragment.anchorPosition.y;
      this._fragment.applyState(_FragmentStatesFactory2.default.getStateAnchored(this._fragment, this._statesFactory));
    }
  }]);

  return FragmentStateDragged;
}(_BaseFragmentState3.default);

exports.default = FragmentStateDragged;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseLayoutSettings2 = __webpack_require__(7);

var _BaseLayoutSettings3 = _interopRequireDefault(_BaseLayoutSettings2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HorizontalLayoutSettings = function (_BaseLayoutSettings) {
  _inherits(HorizontalLayoutSettings, _BaseLayoutSettings);

  function HorizontalLayoutSettings() {
    _classCallCheck(this, HorizontalLayoutSettings);

    return _possibleConstructorReturn(this, (HorizontalLayoutSettings.__proto__ || Object.getPrototypeOf(HorizontalLayoutSettings)).apply(this, arguments));
  }

  _createClass(HorizontalLayoutSettings, [{
    key: "getRowsByFragmentsNumber",

    //eslint-disable-next-line
    value: function getRowsByFragmentsNumber(fragmentsNumber) {
      switch (fragmentsNumber) {
        case 12:
          return 3;
        case 20:
          return 4;
        case 30:
          return 5;
        default:
          return 1;
      }
    }

    //eslint-disable-next-line

  }, {
    key: "getColumnsByFragmentsNumber",
    value: function getColumnsByFragmentsNumber(fragmentsNumber) {
      switch (fragmentsNumber) {
        case 12:
          return 4;
        case 20:
          return 5;
        case 30:
          return 6;
        default:
          return 1;
      }
    }
  }, {
    key: "scale",
    get: function get() {
      return this.rendererDimensions.width / this.imageDimensions.width;
    }
  }]);

  return HorizontalLayoutSettings;
}(_BaseLayoutSettings3.default);

exports.default = HorizontalLayoutSettings;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseLayoutSettings2 = __webpack_require__(7);

var _BaseLayoutSettings3 = _interopRequireDefault(_BaseLayoutSettings2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VerticalLayoutSettings = function (_BaseLayoutSettings) {
  _inherits(VerticalLayoutSettings, _BaseLayoutSettings);

  function VerticalLayoutSettings() {
    _classCallCheck(this, VerticalLayoutSettings);

    return _possibleConstructorReturn(this, (VerticalLayoutSettings.__proto__ || Object.getPrototypeOf(VerticalLayoutSettings)).apply(this, arguments));
  }

  _createClass(VerticalLayoutSettings, [{
    key: "getRowsByFragmentsNumber",

    //eslint-disable-next-line
    value: function getRowsByFragmentsNumber(fragmentsNumber) {
      switch (fragmentsNumber) {
        case 12:
          return 4;
        case 20:
          return 5;
        case 30:
          return 6;
        default:
          return 1;
      }
    }

    //eslint-disable-next-line

  }, {
    key: "getColumnsByFragmentsNumber",
    value: function getColumnsByFragmentsNumber(fragmentsNumber) {
      switch (fragmentsNumber) {
        case 12:
          return 3;
        case 20:
          return 4;
        case 30:
          return 5;
        default:
          return 1;
      }
    }
  }, {
    key: "scale",
    get: function get() {
      return this.rendererDimensions.height / this.imageDimensions.height;
    }
  }]);

  return VerticalLayoutSettings;
}(_BaseLayoutSettings3.default);

exports.default = VerticalLayoutSettings;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _aliases = __webpack_require__(0);

var _Model = __webpack_require__(3);

var _Model2 = _interopRequireDefault(_Model);

var _FragmentsFactory = __webpack_require__(8);

var _FragmentsFactory2 = _interopRequireDefault(_FragmentsFactory);

var _FragmentsManager = __webpack_require__(9);

var _FragmentsManager2 = _interopRequireDefault(_FragmentsManager);

var _app = __webpack_require__(1);

var _app2 = _interopRequireDefault(_app);

var _events = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_aliases.Loader.add("image", "image.jpg").load(function (loader, resources) {
  var texture = resources.image.texture;
  console.log("1");
  _Model2.default.initLayoutSettingsByImageDimensions({ width: texture.width, height: texture.height }, { width: _app2.default.renderer.width, height: _app2.default.renderer.height });
  console.log("2");
  var scale = _Model2.default.scale;
  var bg = new _aliases.Sprite(texture);
  bg.scale.set(scale);
  _app2.default.stage.addChild(bg);

  var fragments = _FragmentsFactory2.default.getFragmentsForTexture(texture);

  console.log("4");

  fragments.forEach(function (frag) {
    var fragment = frag;
    fragment.view.scale.set(scale, scale);
    //fragment.view.x = Math.random() * 500;
    //fragment.view.y = Math.random() * 500;
    _app2.default.stage.addChild(fragment.view);
  });
  console.log("4");
  _FragmentsManager2.default.fragments = fragments;
  _FragmentsManager2.default.subscribe();
  _FragmentsManager2.default.once(_events.EVENT_ALL_FRAGMENTS_ANCHORED, function () {
    console.log("THE END");
  });
  /*
    app.ticker.add(() => {
        tink.update();
        console.log("hello");
    });
     function gameLoop(){
        console.log("hello");
        requestAnimationFrame(gameLoop);
        tink.update();
        app.renderer.render(app.stage);
    }
    gameLoop();
    */
});

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvZGlzdC9idW5kbGUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjI5YzU1NjJiMDkxMjlkN2ZmM2MiLCJ3ZWJwYWNrOi8vL3B1YmxpYy9zcmMvYWxpYXNlcy5qcyIsIndlYnBhY2s6Ly8vcHVibGljL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vL3B1YmxpYy9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovLy9wdWJsaWMvc3JjL21vZGVsL01vZGVsLmpzIiwid2VicGFjazovLy9wdWJsaWMvc3JjL2ZyYWdtZW50cy9zdGF0ZXMvQmFzZUZyYWdtZW50U3RhdGUuanMiLCJ3ZWJwYWNrOi8vL3B1YmxpYy9zcmMvZnJhZ21lbnRzL3N0YXRlcy9GcmFnbWVudFN0YXRlc0ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vL3B1YmxpYy9zcmMvVGlua01hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vL3B1YmxpYy9zcmMvbW9kZWwvQmFzZUxheW91dFNldHRpbmdzLmpzIiwid2VicGFjazovLy9wdWJsaWMvc3JjL2ZyYWdtZW50cy9GcmFnbWVudHNGYWN0b3J5LmpzIiwid2VicGFjazovLy9wdWJsaWMvc3JjL2ZyYWdtZW50cy9GcmFnbWVudHNNYW5hZ2VyLmpzIiwid2VicGFjazovLy9wdWJsaWMvc3JjL2ZyYWdtZW50cy9GcmFnbWVudC5qcyIsIndlYnBhY2s6Ly8vcHVibGljL3NyYy9mcmFnbWVudHMvc3RhdGVzL0ZyYWdtZW50U3RhdGVBbmNob3JlZC5qcyIsIndlYnBhY2s6Ly8vcHVibGljL3NyYy9mcmFnbWVudHMvc3RhdGVzL0ZyYWdtZW50U3RhdGVEcmFnZ2FibGUuanMiLCJ3ZWJwYWNrOi8vL3B1YmxpYy9zcmMvZnJhZ21lbnRzL3N0YXRlcy9GcmFnbWVudFN0YXRlRHJhZ2dlZC5qcyIsIndlYnBhY2s6Ly8vcHVibGljL3NyYy9tb2RlbC9Ib3Jpem9udGFsTGF5b3V0U2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vL3B1YmxpYy9zcmMvbW9kZWwvVmVydGljYWxMYXlvdXRTZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vcHVibGljL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYjI5YzU1NjJiMDkxMjlkN2ZmM2MiLCIvKiBnbG9iYWwgUElYSSAqL1xuXG5leHBvcnQgY29uc3QgQXBwbGljYXRpb24gPSBQSVhJLkFwcGxpY2F0aW9uO1xuZXhwb3J0IGNvbnN0IExvYWRlciA9IFBJWEkubG9hZGVyO1xuZXhwb3J0IGNvbnN0IFNwcml0ZSA9IFBJWEkuU3ByaXRlO1xuZXhwb3J0IGNvbnN0IEV2ZW50RW1pdHRlciA9IFBJWEkudXRpbHMuRXZlbnRFbWl0dGVyO1xuZXhwb3J0IGNvbnN0IFJlY3RhbmdsZSA9IFBJWEkuUmVjdGFuZ2xlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHB1YmxpYy9zcmMvYWxpYXNlcy5qcyIsImltcG9ydCB7IEFwcGxpY2F0aW9uIH0gZnJvbSBcIi4vYWxpYXNlc1wiO1xuXG5jb25zdCBhcHAgPSBuZXcgQXBwbGljYXRpb24oKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYXBwLnZpZXcpO1xuXG5leHBvcnQgZGVmYXVsdCBhcHA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcHVibGljL3NyYy9hcHAuanMiLCJleHBvcnQgY29uc3QgRVZFTlRfRlJBR01FTlRfQU5DSE9SRUQ9J0VWRU5UX0ZSQUdNRU5UX0FOQ0hPUkVEJztcclxuZXhwb3J0IGNvbnN0IEVWRU5UX0FMTF9GUkFHTUVOVFNfQU5DSE9SRUQ9J0VWRU5UX0FMTF9GUkFHTUVOVFNfQU5DSE9SRUQnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBwdWJsaWMvc3JjL2V2ZW50cy5qcyIsImltcG9ydCBIb3Jpem9udGFsTGF5b3V0U2V0dGluZ3MgZnJvbSBcIi4vSG9yaXpvbnRhbExheW91dFNldHRpbmdzXCI7XG5pbXBvcnQgVmVydGljYWxMYXlvdXRTZXR0aW5ncyBmcm9tIFwiLi9WZXJ0aWNhbExheW91dFNldHRpbmdzXCI7XG5cbmNsYXNzIE1vZGVsIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyogVE9ETzogcHV0IGhlcmUgYW5kIHBhcnNlIHNldHRpbmdzIEpTT04gKi9cbiAgICB0aGlzLl9sYXlvdXRTZXR0aW5ncyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9mcmFnbWVudHNOdW1iZXIgPSAxMjtcbiAgfVxuXG4gIC8qXG4gICAgKiAgICBGYWN0b3J5IG1ldGhvZCB0byBpbml0IGxheW91dCBzZXR0aW5ncyBiYXNlZCBvbiBpbWFnZSBkaW1lbnRpb25zXG4gICAgKi9cbiAgaW5pdExheW91dFNldHRpbmdzQnlJbWFnZURpbWVuc2lvbnMoaW1hZ2VEaW1lbnNpb25zLCByZW5kZXJlckRpbWVuc2lvbnMpIHtcbiAgICBpZiAoaW1hZ2VEaW1lbnNpb25zLndpZHRoID4gaW1hZ2VEaW1lbnNpb25zLmhlaWdodCkge1xuICAgICAgdGhpcy5fbGF5b3V0U2V0dGluZ3MgPSBuZXcgSG9yaXpvbnRhbExheW91dFNldHRpbmdzKFxuICAgICAgICBpbWFnZURpbWVuc2lvbnMsXG4gICAgICAgIHJlbmRlcmVyRGltZW5zaW9uc1xuICAgICAgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fbGF5b3V0U2V0dGluZ3MgPSBuZXcgVmVydGljYWxMYXlvdXRTZXR0aW5ncyhcbiAgICAgIGltYWdlRGltZW5zaW9ucyxcbiAgICAgIHJlbmRlcmVyRGltZW5zaW9uc1xuICAgICk7XG4gIH1cblxuICBnZXQgc2NhbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xheW91dFNldHRpbmdzLnNjYWxlO1xuICB9XG5cbiAgZ2V0IHJvd3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xheW91dFNldHRpbmdzLmdldFJvd3NCeUZyYWdtZW50c051bWJlcih0aGlzLl9mcmFnbWVudHNOdW1iZXIpO1xuICB9XG5cbiAgZ2V0IGNvbHVtbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xheW91dFNldHRpbmdzLmdldENvbHVtbnNCeUZyYWdtZW50c051bWJlcihcbiAgICAgIHRoaXMuX2ZyYWdtZW50c051bWJlclxuICAgICk7XG4gIH1cblxuICBnZXQgZnJhZ21lbnREaW1lbnNpb25zKCkge1xuICAgIHJldHVybiB0aGlzLl9sYXlvdXRTZXR0aW5ncy5nZXRGcmFnbWVudERpbWVuc2lvbnNCeUZyYWdtZW50c051bWJlcihcbiAgICAgIHRoaXMuX2ZyYWdtZW50c051bWJlclxuICAgICk7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgZ2V0IGFuY2hvclByZWNpc2lvbigpIHtcbiAgICByZXR1cm4gMTA7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IE1vZGVsKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcHVibGljL3NyYy9tb2RlbC9Nb2RlbC5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VGcmFnbWVudFN0YXRlIHtcbiAgY29uc3RydWN0b3IoZnJhZ21lbnQsIHN0YXRlc0ZhY3RvcnkpIHtcbiAgICB0aGlzLl9mcmFnbWVudCA9IGZyYWdtZW50O1xuICAgIHRoaXMuX3N0YXRlc0ZhY3RvcnkgPSBzdGF0ZXNGYWN0b3J5O1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcHVibGljL3NyYy9mcmFnbWVudHMvc3RhdGVzL0Jhc2VGcmFnbWVudFN0YXRlLmpzIiwiaW1wb3J0IEZyYWdtZW50U3RhdGVEcmFnZ2FibGUgZnJvbSBcIi4vRnJhZ21lbnRTdGF0ZURyYWdnYWJsZVwiO1xuaW1wb3J0IEZyYWdtZW50U3RhdGVEcmFnZ2VkIGZyb20gXCIuL0ZyYWdtZW50U3RhdGVEcmFnZ2VkXCI7XG5pbXBvcnQgRnJhZ21lbnRTdGF0ZUFuY2hvcmVkIGZyb20gXCIuL0ZyYWdtZW50U3RhdGVBbmNob3JlZFwiO1xuXG5jbGFzcyBGcmFnbWVudFN0YXRlc0ZhY3Rvcnkge1xuICBnZXRTdGF0ZURyYWdnYWJsZShmcmFnbWVudCkge1xuICAgIHJldHVybiBuZXcgRnJhZ21lbnRTdGF0ZURyYWdnYWJsZShmcmFnbWVudCwgdGhpcyk7XG4gIH1cblxuICBnZXRTdGF0ZURyYWdnZWQoZnJhZ21lbnQpIHtcbiAgICByZXR1cm4gbmV3IEZyYWdtZW50U3RhdGVEcmFnZ2VkKGZyYWdtZW50LCB0aGlzKTtcbiAgfVxuXG4gIGdldFN0YXRlQW5jaG9yZWQoZnJhZ21lbnQpIHtcbiAgICByZXR1cm4gbmV3IEZyYWdtZW50U3RhdGVBbmNob3JlZChmcmFnbWVudCwgdGhpcyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEZyYWdtZW50U3RhdGVzRmFjdG9yeSgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHB1YmxpYy9zcmMvZnJhZ21lbnRzL3N0YXRlcy9GcmFnbWVudFN0YXRlc0ZhY3RvcnkuanMiLCIvKiBnbG9iYWwgUElYSSBUaW5rKi9cblxuaW1wb3J0IGFwcCBmcm9tIFwiLi9hcHBcIjtcblxuY2xhc3MgVGlua01hbmFnZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRpbmsgPSBuZXcgVGluayhQSVhJLCBhcHAudmlldyk7XG4gICAgdGhpcy5fcG9pbnRlciA9IHRoaXMudGluay5tYWtlUG9pbnRlcigpO1xuXG4gICAgYXBwLnRpY2tlci5hZGQoKCkgPT4ge1xuICAgICAgdGhpcy50aW5rLnVwZGF0ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgbWFrZURyYWdnYWJsZShzcHJpdGUpIHtcbiAgICBpZiAoIXRoaXMudGluaykgdGhyb3cgbmV3IEVycm9yKFwiVGlua01hbmFnZXIgc2hvdWxkIGJlIGluaXRpYWxpemVkIGZpcnN0IVwiKTtcbiAgICB0aGlzLnRpbmsubWFrZURyYWdnYWJsZShzcHJpdGUpO1xuICB9XG5cbiAgbWFrZVVuZHJhZ2dhYmxlKHNwcml0ZSkge1xuICAgIGlmICghdGhpcy50aW5rKSB0aHJvdyBuZXcgRXJyb3IoXCJUaW5rTWFuYWdlciBzaG91bGQgYmUgaW5pdGlhbGl6ZWQgZmlyc3QhXCIpO1xuICAgIHRoaXMudGluay5tYWtlVW5kcmFnZ2FibGUoc3ByaXRlKTtcbiAgfVxuXG4gIGdldCBwb2ludGVyKCkge1xuICAgIGlmICghdGhpcy5fcG9pbnRlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGlua01hbmFnZXIgc2hvdWxkIGJlIGluaXRpYWxpemVkIGZpcnN0IVwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3BvaW50ZXI7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFRpbmtNYW5hZ2VyKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcHVibGljL3NyYy9UaW5rTWFuYWdlci5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VMYXlvdXRTZXR0aW5ncyB7XG4gIGNvbnN0cnVjdG9yKGltYWdlRGltZW5zaW9ucywgcmVuZGVyZXJEaW1lbnNpb25zKSB7XG4gICAgdGhpcy5pbWFnZURpbWVuc2lvbnMgPSBpbWFnZURpbWVuc2lvbnM7XG4gICAgdGhpcy5yZW5kZXJlckRpbWVuc2lvbnMgPSByZW5kZXJlckRpbWVuc2lvbnM7XG4gIH1cblxuICBnZXRGcmFnbWVudERpbWVuc2lvbnNCeUZyYWdtZW50c051bWJlcihmcmFnbWVudHNOdW1iZXIpIHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuaW1hZ2VEaW1lbnNpb25zLndpZHRoIC9cbiAgICAgIHRoaXMuZ2V0Q29sdW1uc0J5RnJhZ21lbnRzTnVtYmVyKGZyYWdtZW50c051bWJlcik7XG4gICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5pbWFnZURpbWVuc2lvbnMuaGVpZ2h0IC9cbiAgICAgIHRoaXMuZ2V0Um93c0J5RnJhZ21lbnRzTnVtYmVyKGZyYWdtZW50c051bWJlcik7XG4gICAgcmV0dXJuIHsgd2lkdGgsIGhlaWdodCB9O1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcHVibGljL3NyYy9tb2RlbC9CYXNlTGF5b3V0U2V0dGluZ3MuanMiLCJpbXBvcnQgeyBSZWN0YW5nbGUgfSBmcm9tIFwiLi8uLi9hbGlhc2VzXCI7XG5pbXBvcnQgTW9kZWwgZnJvbSBcIi4vLi4vbW9kZWwvTW9kZWxcIjtcbmltcG9ydCBGcmFnbWVudCBmcm9tIFwiLi9GcmFnbWVudFwiO1xuaW1wb3J0IEZyYWdtZW50U3RhdGVzRmFjdG9yeSBmcm9tIFwiLi9zdGF0ZXMvRnJhZ21lbnRTdGF0ZXNGYWN0b3J5XCI7XG5cbmNsYXNzIEZyYWdtZW50c0ZhY3Rvcnkge1xuICBnZXRGcmFnbWVudHNGb3JUZXh0dXJlKHR4cikge1xuICAgIGNvbnN0IHRleHR1cmUgPSB0eHI7XG4gICAgY29uc3QgZnJhZ21lbnRzID0gW107XG4gICAgY29uc3QgZnJhZ21lbnREaW1lbnNpb25zID0gTW9kZWwuZnJhZ21lbnREaW1lbnNpb25zO1xuICAgIGNvbnN0IHJvd3MgPSBNb2RlbC5yb3dzO1xuICAgIGNvbnN0IGNvbHVtbnMgPSBNb2RlbC5jb2x1bW5zO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpICsgMSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2x1bW5zOyBqICsgMSkge1xuICAgICAgICBjb25zdCBhbmNob3JQb3NpdGlvbiA9IHtcbiAgICAgICAgICB4OiBqICogZnJhZ21lbnREaW1lbnNpb25zLndpZHRoLFxuICAgICAgICAgIHk6IGkgKiBmcmFnbWVudERpbWVuc2lvbnMuaGVpZ2h0XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGZyYW1lUmVjdCA9IG5ldyBSZWN0YW5nbGUoXG4gICAgICAgICAgYW5jaG9yUG9zaXRpb24ueCxcbiAgICAgICAgICBhbmNob3JQb3NpdGlvbi55LFxuICAgICAgICAgIGZyYWdtZW50RGltZW5zaW9ucy53aWR0aCxcbiAgICAgICAgICBmcmFnbWVudERpbWVuc2lvbnMuaGVpZ2h0XG4gICAgICAgICk7XG4gICAgICAgIHRleHR1cmUuZnJhbWUgPSBmcmFtZVJlY3Q7XG4gICAgICAgIGZyYWdtZW50cy5wdXNoKFxuICAgICAgICAgIHRoaXMuaW5pdEZyYWdtZW50KHRoaXMuY3JlYXRlRnJhZ21lbnQodGV4dHVyZSwgYW5jaG9yUG9zaXRpb24pKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmcmFnbWVudHM7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgY3JlYXRlRnJhZ21lbnQodGV4dHVyZSwgYW5jaG9yZWRQb3NpdGlvbikge1xuICAgIHJldHVybiBuZXcgRnJhZ21lbnQodGV4dHVyZSwgYW5jaG9yZWRQb3NpdGlvbik7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgaW5pdEZyYWdtZW50KGZyYWdtZW50KSB7XG4gICAgcmV0dXJuIGZyYWdtZW50LmFwcGx5U3RhdGUoXG4gICAgICBGcmFnbWVudFN0YXRlc0ZhY3RvcnkuZ2V0U3RhdGVEcmFnZ2FibGUoZnJhZ21lbnQpXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgRnJhZ21lbnRzRmFjdG9yeSgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHB1YmxpYy9zcmMvZnJhZ21lbnRzL0ZyYWdtZW50c0ZhY3RvcnkuanMiLCJpbXBvcnQgVGlua01hbmFnZXIgZnJvbSBcIi4vLi4vVGlua01hbmFnZXJcIjtcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gXCIuLy4uL2FsaWFzZXNcIjtcbmltcG9ydCB7XG4gIEVWRU5UX0ZSQUdNRU5UX0FOQ0hPUkVELFxuICBFVkVOVF9BTExfRlJBR01FTlRTX0FOQ0hPUkVEXG59IGZyb20gXCIuLy4uL2V2ZW50c1wiO1xuXG5jbGFzcyBGcmFnbWVudHNNYW5hZ2VyIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9mcmFnbWVudHMgPSBbXTtcbiAgICB0aGlzLmRyYWdnaW5nRnJhZ21lbnQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5hbmNob3JlZEZyYWdtZW50cyA9IDA7XG5cbiAgICBUaW5rTWFuYWdlci5wb2ludGVyLnByZXNzID0gKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmZyYWdtZW50cyB8fCAhdGhpcy5mcmFnbWVudHMubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgIHRoaXMuZnJhZ21lbnRzLmV2ZXJ5KGZyYWdtZW50ID0+IHtcbiAgICAgICAgaWYgKFRpbmtNYW5hZ2VyLnBvaW50ZXIuaGl0VGVzdFNwcml0ZShmcmFnbWVudC52aWV3KSkge1xuICAgICAgICAgIGlmICh0aGlzLmRyYWdnaW5nRnJhZ21lbnQpIHRoaXMuZHJhZ2dpbmdGcmFnbWVudC50b2dnbGVEcmFnKCk7XG4gICAgICAgICAgdGhpcy5kcmFnZ2luZ0ZyYWdtZW50ID0gZnJhZ21lbnQ7XG4gICAgICAgICAgdGhpcy5kcmFnZ2luZ0ZyYWdtZW50LnRvZ2dsZURyYWcoKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgVGlua01hbmFnZXIucG9pbnRlci5yZWxlYXNlID0gKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmRyYWdnaW5nRnJhZ21lbnQpIHJldHVybjtcblxuICAgICAgdGhpcy5kcmFnZ2luZ0ZyYWdtZW50LnRvZ2dsZURyYWcoKTtcbiAgICAgIHRoaXMuZHJhZ2dpbmdGcmFnbWVudCA9IG51bGw7XG4gICAgfTtcbiAgfVxuXG4gIHNldCBmcmFnbWVudHMoZnJhZ3MpIHtcbiAgICB0aGlzLl9mcmFnbWVudHMgPSBmcmFncztcbiAgfVxuXG4gIGdldCBmcmFnbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZyYWdtZW50cztcbiAgfVxuXG4gIHN1YnNjcmliZSgpIHtcbiAgICB0aGlzLmZyYWdtZW50cy5mb3JFYWNoKGZyYWdtZW50ID0+IHtcbiAgICAgIGZyYWdtZW50Lm9uY2UoRVZFTlRfRlJBR01FTlRfQU5DSE9SRUQsIHRoaXMuZnJhZ21lbnRBbmNob3JlZEhhbmRsZXIpO1xuICAgIH0pO1xuICB9XG5cbiAgX2ZyYWdtZW50QW5jaG9yZWRIYW5kbGVyKCkge1xuICAgIHRoaXMuYW5jaG9yZWRGcmFnbWVudHMgKz0gMTtcbiAgICBpZiAodGhpcy5hbmNob3JlZEZyYWdtZW50cyA9PT0gdGhpcy5mcmFnbWVudHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmVtaXQoRVZFTlRfQUxMX0ZSQUdNRU5UU19BTkNIT1JFRCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBGcmFnbWVudHNNYW5hZ2VyKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcHVibGljL3NyYy9mcmFnbWVudHMvRnJhZ21lbnRzTWFuYWdlci5qcyIsImltcG9ydCB7IFNwcml0ZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIi4vLi4vYWxpYXNlc1wiO1xuaW1wb3J0IFRpbmtNYW5hZ2VyIGZyb20gXCIuLy4uL1RpbmtNYW5hZ2VyXCI7XG5pbXBvcnQgeyBFVkVOVF9GUkFHTUVOVF9BTkNIT1JFRCB9IGZyb20gXCIuLy4uL2V2ZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmFnbWVudCBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKHRleHR1cmUsIGFuY2hvclBvc2l0aW9uKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9zcHJpdGUgPSBuZXcgU3ByaXRlKHRleHR1cmUpO1xuICAgIHRoaXMuX2FuY2hvclBvc2l0aW9uID0gYW5jaG9yUG9zaXRpb247XG4gICAgdGhpcy5fc3RhdGUgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBhcHBseVN0YXRlKG5ld1N0YXRlKSB7XG4gICAgaWYgKHRoaXMuX3N0YXRlKSB0aGlzLl9zdGF0ZS5leGl0KCk7XG4gICAgdGhpcy5fc3RhdGUgPSBuZXdTdGF0ZTtcbiAgICB0aGlzLl9zdGF0ZS5lbnRyeSgpO1xuICB9XG5cbiAgdG9nZ2xlRHJhZygpIHtcbiAgICB0aGlzLl9zdGF0ZS50b2dnbGVEcmFnKCk7XG4gIH1cblxuICBtYWtlRHJhZ2dhYmxlKCkge1xuICAgIFRpbmtNYW5hZ2VyLm1ha2VEcmFnZ2FibGUodGhpcy5fc3ByaXRlKTtcbiAgfVxuXG4gIG1ha2VVbmRyYWdnYWJsZSgpIHtcbiAgICBUaW5rTWFuYWdlci5tYWtlVW5kcmFnZ2FibGUodGhpcy5fc3ByaXRlKTtcbiAgfVxuXG4gIGRpc3BhdGNoQW5jaG9yZWQoKSB7XG4gICAgdGhpcy5lbWl0KEVWRU5UX0ZSQUdNRU5UX0FOQ0hPUkVEKTtcbiAgfVxuXG4gIHNldCBhbmNob3JQb3NpdGlvbihwb3MpIHtcbiAgICB0aGlzLl9hbmNob3JQb3NpdGlvbiA9IHBvcztcbiAgfVxuXG4gIGdldCBhbmNob3JQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fYW5jaG9yUG9zaXRpb247XG4gIH1cblxuICBnZXQgdmlldygpIHtcbiAgICByZXR1cm4gdGhpcy5fc3ByaXRlO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcHVibGljL3NyYy9mcmFnbWVudHMvRnJhZ21lbnQuanMiLCJpbXBvcnQgQmFzZUZyYWdtZW50U3RhdGUgZnJvbSBcIi4vQmFzZUZyYWdtZW50U3RhdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJhZ21lbnRTdGF0ZUFuY2hvcmVkIGV4dGVuZHMgQmFzZUZyYWdtZW50U3RhdGUge1xuICBlbnRyeSgpIHtcbiAgICB0aGlzLl9mcmFnbWVudC5tYWtlVW5kcmFnZ2FibGUoKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHB1YmxpYy9zcmMvZnJhZ21lbnRzL3N0YXRlcy9GcmFnbWVudFN0YXRlQW5jaG9yZWQuanMiLCJpbXBvcnQgQmFzZUZyYWdtZW50U3RhdGUgZnJvbSBcIi4vQmFzZUZyYWdtZW50U3RhdGVcIjtcbmltcG9ydCBGcmFnbWVudFN0YXRlc0ZhY3RvcnkgZnJvbSBcIi4vRnJhZ21lbnRTdGF0ZXNGYWN0b3J5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyYWdtZW50U3RhdGVEcmFnZ2FibGUgZXh0ZW5kcyBCYXNlRnJhZ21lbnRTdGF0ZSB7XG4gIGVudHJ5KCkge1xuICAgIHRoaXMuX2ZyYWdtZW50Lm1ha2VEcmFnZ2FibGUoKTtcbiAgfVxuXG4gIHRvZ2dsZURyYWcoKSB7XG4gICAgdGhpcy5fZnJhZ21lbnQuYXBwbHlTdGF0ZShcbiAgICAgIEZyYWdtZW50U3RhdGVzRmFjdG9yeS5nZXRTdGF0ZURyYWdnZWQodGhpcy5fZnJhZ21lbnQsIHRoaXMuX3N0YXRlc0ZhY3RvcnkpXG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHB1YmxpYy9zcmMvZnJhZ21lbnRzL3N0YXRlcy9GcmFnbWVudFN0YXRlRHJhZ2dhYmxlLmpzIiwiaW1wb3J0IEJhc2VGcmFnbWVudFN0YXRlIGZyb20gXCIuL0Jhc2VGcmFnbWVudFN0YXRlXCI7XG5pbXBvcnQgTW9kZWwgZnJvbSBcIi4vLi4vLi4vbW9kZWwvTW9kZWxcIjtcbmltcG9ydCBGcmFnbWVudFN0YXRlc0ZhY3RvcnkgZnJvbSBcIi4vRnJhZ21lbnRTdGF0ZXNGYWN0b3J5XCI7XG5pbXBvcnQgYXBwIGZyb20gXCIuLy4uLy4uL2FwcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmFnbWVudFN0YXRlRHJhZ2dlZCBleHRlbmRzIEJhc2VGcmFnbWVudFN0YXRlIHtcbiAgZW50cnkoKSB7XG4gICAgYXBwLnRpY2tlci5hZGQodGhpcy5jaGVja1Bvc2l0aW9uKTtcbiAgfVxuXG4gIGV4aXQoKSB7XG4gICAgYXBwLnRpY2tlci5yZW1vdmUodGhpcy5jaGVja1Bvc2l0aW9uKTtcbiAgfVxuXG4gIHRvZ2dsZURyYWcoKSB7XG4gICAgdGhpcy5fZnJhZ21lbnQuYXBwbHlTdGF0ZShcbiAgICAgIEZyYWdtZW50U3RhdGVzRmFjdG9yeS5nZXRTdGF0ZURyYWdnYWJsZShcbiAgICAgICAgdGhpcy5fZnJhZ21lbnQsXG4gICAgICAgIHRoaXMuX3N0YXRlc0ZhY3RvcnlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgY2hlY2tQb3NpdGlvbigpIHtcbiAgICBpZiAoXG4gICAgICBNYXRoLmFicyh0aGlzLl9mcmFnbWVudC52aWV3LnggLSB0aGlzLl9mcmFnbWVudC5hbmNob3JQb3NpdGlvbi54KSA+XG4gICAgICBNb2RlbC5hbmNob3JQcmVjaXNpb25cbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBNYXRoLmFicyh0aGlzLl9mcmFnbWVudC52aWV3LnkgLSB0aGlzLl9mcmFnbWVudC5hbmNob3JQb3NpdGlvbi55KSA+XG4gICAgICBNb2RlbC5hbmNob3JQcmVjaXNpb25cbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9mcmFnbWVudC52aWV3LnggPSB0aGlzLl9mcmFnbWVudC5hbmNob3JQb3NpdGlvbi54O1xuICAgIHRoaXMuX2ZyYWdtZW50LnZpZXcueSA9IHRoaXMuX2ZyYWdtZW50LmFuY2hvclBvc2l0aW9uLnk7XG4gICAgdGhpcy5fZnJhZ21lbnQuYXBwbHlTdGF0ZShcbiAgICAgIEZyYWdtZW50U3RhdGVzRmFjdG9yeS5nZXRTdGF0ZUFuY2hvcmVkKFxuICAgICAgICB0aGlzLl9mcmFnbWVudCxcbiAgICAgICAgdGhpcy5fc3RhdGVzRmFjdG9yeVxuICAgICAgKVxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBwdWJsaWMvc3JjL2ZyYWdtZW50cy9zdGF0ZXMvRnJhZ21lbnRTdGF0ZURyYWdnZWQuanMiLCJpbXBvcnQgQmFzZUxheW91dFNldHRpbmdzIGZyb20gXCIuL0Jhc2VMYXlvdXRTZXR0aW5nc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb3Jpem9udGFsTGF5b3V0U2V0dGluZ3MgZXh0ZW5kcyBCYXNlTGF5b3V0U2V0dGluZ3Mge1xuICAvL2VzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICBnZXRSb3dzQnlGcmFnbWVudHNOdW1iZXIoZnJhZ21lbnRzTnVtYmVyKSB7XG4gICAgc3dpdGNoIChmcmFnbWVudHNOdW1iZXIpIHtcbiAgICAgIGNhc2UgMTI6XG4gICAgICAgIHJldHVybiAzO1xuICAgICAgY2FzZSAyMDpcbiAgICAgICAgcmV0dXJuIDQ7XG4gICAgICBjYXNlIDMwOlxuICAgICAgICByZXR1cm4gNTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgfVxuXG4gIC8vZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gIGdldENvbHVtbnNCeUZyYWdtZW50c051bWJlcihmcmFnbWVudHNOdW1iZXIpIHtcbiAgICBzd2l0Y2ggKGZyYWdtZW50c051bWJlcikge1xuICAgICAgY2FzZSAxMjpcbiAgICAgICAgcmV0dXJuIDQ7XG4gICAgICBjYXNlIDIwOlxuICAgICAgICByZXR1cm4gNTtcbiAgICAgIGNhc2UgMzA6XG4gICAgICAgIHJldHVybiA2O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHNjYWxlKCkge1xuICAgIHJldHVybiB0aGlzLnJlbmRlcmVyRGltZW5zaW9ucy53aWR0aCAvIHRoaXMuaW1hZ2VEaW1lbnNpb25zLndpZHRoO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcHVibGljL3NyYy9tb2RlbC9Ib3Jpem9udGFsTGF5b3V0U2V0dGluZ3MuanMiLCJpbXBvcnQgQmFzZUxheW91dFNldHRpbmdzIGZyb20gXCIuL0Jhc2VMYXlvdXRTZXR0aW5nc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZXJ0aWNhbExheW91dFNldHRpbmdzIGV4dGVuZHMgQmFzZUxheW91dFNldHRpbmdzIHtcbiAgLy9lc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgZ2V0Um93c0J5RnJhZ21lbnRzTnVtYmVyKGZyYWdtZW50c051bWJlcikge1xuICAgIHN3aXRjaCAoZnJhZ21lbnRzTnVtYmVyKSB7XG4gICAgICBjYXNlIDEyOlxuICAgICAgICByZXR1cm4gNDtcbiAgICAgIGNhc2UgMjA6XG4gICAgICAgIHJldHVybiA1O1xuICAgICAgY2FzZSAzMDpcbiAgICAgICAgcmV0dXJuIDY7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG4gIH1cblxuICAvL2VzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICBnZXRDb2x1bW5zQnlGcmFnbWVudHNOdW1iZXIoZnJhZ21lbnRzTnVtYmVyKSB7XG4gICAgc3dpdGNoIChmcmFnbWVudHNOdW1iZXIpIHtcbiAgICAgIGNhc2UgMTI6XG4gICAgICAgIHJldHVybiAzO1xuICAgICAgY2FzZSAyMDpcbiAgICAgICAgcmV0dXJuIDQ7XG4gICAgICBjYXNlIDMwOlxuICAgICAgICByZXR1cm4gNTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgfVxuXG4gIGdldCBzY2FsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZW5kZXJlckRpbWVuc2lvbnMuaGVpZ2h0IC8gdGhpcy5pbWFnZURpbWVuc2lvbnMuaGVpZ2h0O1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcHVibGljL3NyYy9tb2RlbC9WZXJ0aWNhbExheW91dFNldHRpbmdzLmpzIiwiaW1wb3J0IHsgTG9hZGVyLCBTcHJpdGUgfSBmcm9tIFwiLi9hbGlhc2VzXCI7XG5pbXBvcnQgTW9kZWwgZnJvbSBcIi4vbW9kZWwvTW9kZWxcIjtcbmltcG9ydCBGcmFnbWVudHNGYWN0b3J5IGZyb20gXCIuL2ZyYWdtZW50cy9GcmFnbWVudHNGYWN0b3J5XCI7XG5pbXBvcnQgRnJhZ21lbnRzTWFuYWdlciBmcm9tIFwiLi9mcmFnbWVudHMvRnJhZ21lbnRzTWFuYWdlclwiO1xuaW1wb3J0IGFwcCBmcm9tIFwiLi9hcHBcIjtcbmltcG9ydCB7IEVWRU5UX0FMTF9GUkFHTUVOVFNfQU5DSE9SRUQgfSBmcm9tIFwiLi9ldmVudHNcIjtcblxuTG9hZGVyLmFkZChcImltYWdlXCIsIFwiaW1hZ2UuanBnXCIpLmxvYWQoKGxvYWRlciwgcmVzb3VyY2VzKSA9PiB7XG4gIGNvbnN0IHRleHR1cmUgPSByZXNvdXJjZXMuaW1hZ2UudGV4dHVyZTtcbiAgY29uc29sZS5sb2coXCIxXCIpO1xuICBNb2RlbC5pbml0TGF5b3V0U2V0dGluZ3NCeUltYWdlRGltZW5zaW9ucyhcbiAgICB7IHdpZHRoOiB0ZXh0dXJlLndpZHRoLCBoZWlnaHQ6IHRleHR1cmUuaGVpZ2h0IH0sXG4gICAgeyB3aWR0aDogYXBwLnJlbmRlcmVyLndpZHRoLCBoZWlnaHQ6IGFwcC5yZW5kZXJlci5oZWlnaHQgfVxuICApO1xuICBjb25zb2xlLmxvZyhcIjJcIik7XG4gIGNvbnN0IHNjYWxlID0gTW9kZWwuc2NhbGU7XG4gIGNvbnN0IGJnID0gbmV3IFNwcml0ZSh0ZXh0dXJlKTtcbiAgYmcuc2NhbGUuc2V0KHNjYWxlKTtcbiAgYXBwLnN0YWdlLmFkZENoaWxkKGJnKTtcblxuICBjb25zdCBmcmFnbWVudHMgPSBGcmFnbWVudHNGYWN0b3J5LmdldEZyYWdtZW50c0ZvclRleHR1cmUodGV4dHVyZSk7XG5cbiAgY29uc29sZS5sb2coXCI0XCIpO1xuXG4gIGZyYWdtZW50cy5mb3JFYWNoKGZyYWcgPT4ge1xuICAgIGNvbnN0IGZyYWdtZW50ID0gZnJhZztcbiAgICBmcmFnbWVudC52aWV3LnNjYWxlLnNldChzY2FsZSwgc2NhbGUpO1xuICAgIC8vZnJhZ21lbnQudmlldy54ID0gTWF0aC5yYW5kb20oKSAqIDUwMDtcbiAgICAvL2ZyYWdtZW50LnZpZXcueSA9IE1hdGgucmFuZG9tKCkgKiA1MDA7XG4gICAgYXBwLnN0YWdlLmFkZENoaWxkKGZyYWdtZW50LnZpZXcpO1xuICB9KTtcbiAgY29uc29sZS5sb2coXCI0XCIpO1xuICBGcmFnbWVudHNNYW5hZ2VyLmZyYWdtZW50cyA9IGZyYWdtZW50cztcbiAgRnJhZ21lbnRzTWFuYWdlci5zdWJzY3JpYmUoKTtcbiAgRnJhZ21lbnRzTWFuYWdlci5vbmNlKEVWRU5UX0FMTF9GUkFHTUVOVFNfQU5DSE9SRUQsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlRIRSBFTkRcIik7XG4gIH0pO1xuICAvKlxuICAgIGFwcC50aWNrZXIuYWRkKCgpID0+IHtcbiAgICAgICAgdGluay51cGRhdGUoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJoZWxsb1wiKTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGdhbWVMb29wKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaGVsbG9cIik7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG4gICAgICAgIHRpbmsudXBkYXRlKCk7XG4gICAgICAgIGFwcC5yZW5kZXJlci5yZW5kZXIoYXBwLnN0YWdlKTtcbiAgICB9XG4gICAgZ2FtZUxvb3AoKTtcbiAgICAqL1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcHVibGljL3NyYy9pbmRleC5qcyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNKQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUlBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUdBOzs7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTs7Ozs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7OztBQ3JEQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUxBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7QUFHQTs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTs7Ozs7O0FBWkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBTUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUdBOzs7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7O0FDaERBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFJQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXpCQTtBQTBCQTtBQUNBOzs7QUFTQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFuQkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7QUFnQkE7Ozs7Ozs7Ozs7Ozs7OztBQzFEQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUtBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7OztBQXhDQTs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUhBOzs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUdBOzs7Ozs7QUFUQTs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQU1BOzs7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTs7Ozs7O0FBekNBOzs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVVBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7OztBQS9CQTs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFVQTs7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7QUEvQkE7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQWNBOzs7Iiwic291cmNlUm9vdCI6IiJ9