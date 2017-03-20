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
var Texture = exports.Texture = PIXI.Texture;

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseFragmentState = function () {
  function BaseFragmentState(fragment, statesFactory) {
    _classCallCheck(this, BaseFragmentState);

    this._fragment = fragment;
    this._statesFactory = statesFactory;
  }

  // eslint-disable-next-line class-methods-use-this


  _createClass(BaseFragmentState, [{
    key: "entry",
    value: function entry() {}

    // eslint-disable-next-line class-methods-use-this

  }, {
    key: "exit",
    value: function exit() {}
  }]);

  return BaseFragmentState;
}();

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
      var fragments = [];
      var fragmentDimensions = _Model2.default.fragmentDimensions;
      var rows = _Model2.default.rows;
      var columns = _Model2.default.columns;

      for (var i = 0; i < rows - 1; i += 1) {
        for (var j = 0; j < columns - 1; j += 1) {
          var anchorPosition = {
            x: j * fragmentDimensions.width,
            y: i * fragmentDimensions.height
          };

          var frameRect = new _aliases.Rectangle(anchorPosition.x, anchorPosition.y, fragmentDimensions.width, fragmentDimensions.height);

          var texture = txr.clone();
          texture.frame = frameRect;

          var fragment = this.initFragment(this.createFragment(texture, anchorPosition));
          fragments.push(fragment);
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
      fragment.applyState(_FragmentStatesFactory2.default.getStateDraggable(fragment));
      return fragment;
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

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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
      _get(FragmentStateAnchored.prototype.__proto__ || Object.getPrototypeOf(FragmentStateAnchored.prototype), "entry", this).call(this);
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

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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
      _get(FragmentStateDraggable.prototype.__proto__ || Object.getPrototypeOf(FragmentStateDraggable.prototype), "entry", this).call(this);
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

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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
      _get(FragmentStateDragged.prototype.__proto__ || Object.getPrototypeOf(FragmentStateDragged.prototype), "entry", this).call(this);
      _app2.default.ticker.add(this.checkPosition.bind(this));
    }
  }, {
    key: "exit",
    value: function exit() {
      _get(FragmentStateDragged.prototype.__proto__ || Object.getPrototypeOf(FragmentStateDragged.prototype), "exit", this).call(this);
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

  _Model2.default.initLayoutSettingsByImageDimensions({ width: texture.width, height: texture.height }, { width: _app2.default.renderer.width, height: _app2.default.renderer.height });

  var scale = _Model2.default.scale;
  var bg = new _aliases.Sprite(texture);
  bg.scale.set(scale);
  _app2.default.stage.addChild(bg);

  var fragments = _FragmentsFactory2.default.getFragmentsForTexture(texture);
  /* eslint-disable */
  fragments.forEach(function (fragment) {
    fragment.view.scale.set(scale, scale);
    fragment.view.x = Math.random() * 500;
    fragment.view.y = Math.random() * 500;
    _app2.default.stage.addChild(fragment.view);
  });
  /* eslint-enable */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvZGlzdC9idW5kbGUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2VkOTc3NDBlZDVmMGM2OTMyMWQiLCJ3ZWJwYWNrOi8vL3B1YmxpYy9zcmMvYWxpYXNlcy5qcyIsIndlYnBhY2s6Ly8vcHVibGljL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vL3B1YmxpYy9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovLy9wdWJsaWMvc3JjL21vZGVsL01vZGVsLmpzIiwid2VicGFjazovLy9wdWJsaWMvc3JjL2ZyYWdtZW50cy9zdGF0ZXMvQmFzZUZyYWdtZW50U3RhdGUuanMiLCJ3ZWJwYWNrOi8vL3B1YmxpYy9zcmMvZnJhZ21lbnRzL3N0YXRlcy9GcmFnbWVudFN0YXRlc0ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vL3B1YmxpYy9zcmMvVGlua01hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vL3B1YmxpYy9zcmMvbW9kZWwvQmFzZUxheW91dFNldHRpbmdzLmpzIiwid2VicGFjazovLy9wdWJsaWMvc3JjL2ZyYWdtZW50cy9GcmFnbWVudHNGYWN0b3J5LmpzIiwid2VicGFjazovLy9wdWJsaWMvc3JjL2ZyYWdtZW50cy9GcmFnbWVudHNNYW5hZ2VyLmpzIiwid2VicGFjazovLy9wdWJsaWMvc3JjL2ZyYWdtZW50cy9GcmFnbWVudC5qcyIsIndlYnBhY2s6Ly8vcHVibGljL3NyYy9mcmFnbWVudHMvc3RhdGVzL0ZyYWdtZW50U3RhdGVBbmNob3JlZC5qcyIsIndlYnBhY2s6Ly8vcHVibGljL3NyYy9mcmFnbWVudHMvc3RhdGVzL0ZyYWdtZW50U3RhdGVEcmFnZ2FibGUuanMiLCJ3ZWJwYWNrOi8vL3B1YmxpYy9zcmMvZnJhZ21lbnRzL3N0YXRlcy9GcmFnbWVudFN0YXRlRHJhZ2dlZC5qcyIsIndlYnBhY2s6Ly8vcHVibGljL3NyYy9tb2RlbC9Ib3Jpem9udGFsTGF5b3V0U2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vL3B1YmxpYy9zcmMvbW9kZWwvVmVydGljYWxMYXlvdXRTZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vcHVibGljL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgM2VkOTc3NDBlZDVmMGM2OTMyMWQiLCIvKiBnbG9iYWwgUElYSSAqL1xuXG5leHBvcnQgY29uc3QgQXBwbGljYXRpb24gPSBQSVhJLkFwcGxpY2F0aW9uO1xuZXhwb3J0IGNvbnN0IExvYWRlciA9IFBJWEkubG9hZGVyO1xuZXhwb3J0IGNvbnN0IFNwcml0ZSA9IFBJWEkuU3ByaXRlO1xuZXhwb3J0IGNvbnN0IEV2ZW50RW1pdHRlciA9IFBJWEkudXRpbHMuRXZlbnRFbWl0dGVyO1xuZXhwb3J0IGNvbnN0IFJlY3RhbmdsZSA9IFBJWEkuUmVjdGFuZ2xlO1xuZXhwb3J0IGNvbnN0IFRleHR1cmUgPSBQSVhJLlRleHR1cmU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcHVibGljL3NyYy9hbGlhc2VzLmpzIiwiaW1wb3J0IHsgQXBwbGljYXRpb24gfSBmcm9tIFwiLi9hbGlhc2VzXCI7XG5cbmNvbnN0IGFwcCA9IG5ldyBBcHBsaWNhdGlvbigpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhcHAudmlldyk7XG5cbmV4cG9ydCBkZWZhdWx0IGFwcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBwdWJsaWMvc3JjL2FwcC5qcyIsImV4cG9ydCBjb25zdCBFVkVOVF9GUkFHTUVOVF9BTkNIT1JFRD0nRVZFTlRfRlJBR01FTlRfQU5DSE9SRUQnO1xyXG5leHBvcnQgY29uc3QgRVZFTlRfQUxMX0ZSQUdNRU5UU19BTkNIT1JFRD0nRVZFTlRfQUxMX0ZSQUdNRU5UU19BTkNIT1JFRCc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHB1YmxpYy9zcmMvZXZlbnRzLmpzIiwiaW1wb3J0IEhvcml6b250YWxMYXlvdXRTZXR0aW5ncyBmcm9tIFwiLi9Ib3Jpem9udGFsTGF5b3V0U2V0dGluZ3NcIjtcbmltcG9ydCBWZXJ0aWNhbExheW91dFNldHRpbmdzIGZyb20gXCIuL1ZlcnRpY2FsTGF5b3V0U2V0dGluZ3NcIjtcblxuY2xhc3MgTW9kZWwge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKiBUT0RPOiBwdXQgaGVyZSBhbmQgcGFyc2Ugc2V0dGluZ3MgSlNPTiAqL1xuICAgIHRoaXMuX2xheW91dFNldHRpbmdzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX2ZyYWdtZW50c051bWJlciA9IDEyO1xuICB9XG5cbiAgLypcbiAgICAqICAgIEZhY3RvcnkgbWV0aG9kIHRvIGluaXQgbGF5b3V0IHNldHRpbmdzIGJhc2VkIG9uIGltYWdlIGRpbWVudGlvbnNcbiAgICAqL1xuICBpbml0TGF5b3V0U2V0dGluZ3NCeUltYWdlRGltZW5zaW9ucyhpbWFnZURpbWVuc2lvbnMsIHJlbmRlcmVyRGltZW5zaW9ucykge1xuICAgIGlmIChpbWFnZURpbWVuc2lvbnMud2lkdGggPiBpbWFnZURpbWVuc2lvbnMuaGVpZ2h0KSB7XG4gICAgICB0aGlzLl9sYXlvdXRTZXR0aW5ncyA9IG5ldyBIb3Jpem9udGFsTGF5b3V0U2V0dGluZ3MoXG4gICAgICAgIGltYWdlRGltZW5zaW9ucyxcbiAgICAgICAgcmVuZGVyZXJEaW1lbnNpb25zXG4gICAgICApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9sYXlvdXRTZXR0aW5ncyA9IG5ldyBWZXJ0aWNhbExheW91dFNldHRpbmdzKFxuICAgICAgaW1hZ2VEaW1lbnNpb25zLFxuICAgICAgcmVuZGVyZXJEaW1lbnNpb25zXG4gICAgKTtcbiAgfVxuXG4gIGdldCBzY2FsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGF5b3V0U2V0dGluZ3Muc2NhbGU7XG4gIH1cblxuICBnZXQgcm93cygpIHtcbiAgICByZXR1cm4gdGhpcy5fbGF5b3V0U2V0dGluZ3MuZ2V0Um93c0J5RnJhZ21lbnRzTnVtYmVyKHRoaXMuX2ZyYWdtZW50c051bWJlcik7XG4gIH1cblxuICBnZXQgY29sdW1ucygpIHtcbiAgICByZXR1cm4gdGhpcy5fbGF5b3V0U2V0dGluZ3MuZ2V0Q29sdW1uc0J5RnJhZ21lbnRzTnVtYmVyKFxuICAgICAgdGhpcy5fZnJhZ21lbnRzTnVtYmVyXG4gICAgKTtcbiAgfVxuXG4gIGdldCBmcmFnbWVudERpbWVuc2lvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xheW91dFNldHRpbmdzLmdldEZyYWdtZW50RGltZW5zaW9uc0J5RnJhZ21lbnRzTnVtYmVyKFxuICAgICAgdGhpcy5fZnJhZ21lbnRzTnVtYmVyXG4gICAgKTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICBnZXQgYW5jaG9yUHJlY2lzaW9uKCkge1xuICAgIHJldHVybiAxMDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgTW9kZWwoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBwdWJsaWMvc3JjL21vZGVsL01vZGVsLmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZUZyYWdtZW50U3RhdGUge1xuICBjb25zdHJ1Y3RvcihmcmFnbWVudCwgc3RhdGVzRmFjdG9yeSkge1xuICAgIHRoaXMuX2ZyYWdtZW50ID0gZnJhZ21lbnQ7XG4gICAgdGhpcy5fc3RhdGVzRmFjdG9yeSA9IHN0YXRlc0ZhY3Rvcnk7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2xhc3MtbWV0aG9kcy11c2UtdGhpc1xuICBlbnRyeSgpIHt9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcbiAgZXhpdCgpIHt9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcHVibGljL3NyYy9mcmFnbWVudHMvc3RhdGVzL0Jhc2VGcmFnbWVudFN0YXRlLmpzIiwiaW1wb3J0IEZyYWdtZW50U3RhdGVEcmFnZ2FibGUgZnJvbSBcIi4vRnJhZ21lbnRTdGF0ZURyYWdnYWJsZVwiO1xuaW1wb3J0IEZyYWdtZW50U3RhdGVEcmFnZ2VkIGZyb20gXCIuL0ZyYWdtZW50U3RhdGVEcmFnZ2VkXCI7XG5pbXBvcnQgRnJhZ21lbnRTdGF0ZUFuY2hvcmVkIGZyb20gXCIuL0ZyYWdtZW50U3RhdGVBbmNob3JlZFwiO1xuXG5jbGFzcyBGcmFnbWVudFN0YXRlc0ZhY3Rvcnkge1xuICBnZXRTdGF0ZURyYWdnYWJsZShmcmFnbWVudCkge1xuICAgIHJldHVybiBuZXcgRnJhZ21lbnRTdGF0ZURyYWdnYWJsZShmcmFnbWVudCwgdGhpcyk7XG4gIH1cblxuICBnZXRTdGF0ZURyYWdnZWQoZnJhZ21lbnQpIHtcbiAgICByZXR1cm4gbmV3IEZyYWdtZW50U3RhdGVEcmFnZ2VkKGZyYWdtZW50LCB0aGlzKTtcbiAgfVxuXG4gIGdldFN0YXRlQW5jaG9yZWQoZnJhZ21lbnQpIHtcbiAgICByZXR1cm4gbmV3IEZyYWdtZW50U3RhdGVBbmNob3JlZChmcmFnbWVudCwgdGhpcyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEZyYWdtZW50U3RhdGVzRmFjdG9yeSgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHB1YmxpYy9zcmMvZnJhZ21lbnRzL3N0YXRlcy9GcmFnbWVudFN0YXRlc0ZhY3RvcnkuanMiLCIvKiBnbG9iYWwgUElYSSBUaW5rKi9cblxuaW1wb3J0IGFwcCBmcm9tIFwiLi9hcHBcIjtcblxuY2xhc3MgVGlua01hbmFnZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRpbmsgPSBuZXcgVGluayhQSVhJLCBhcHAudmlldyk7XG4gICAgdGhpcy5fcG9pbnRlciA9IHRoaXMudGluay5tYWtlUG9pbnRlcigpO1xuXG4gICAgYXBwLnRpY2tlci5hZGQoKCkgPT4ge1xuICAgICAgdGhpcy50aW5rLnVwZGF0ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgbWFrZURyYWdnYWJsZShzcHJpdGUpIHtcbiAgICBpZiAoIXRoaXMudGluaykgdGhyb3cgbmV3IEVycm9yKFwiVGlua01hbmFnZXIgc2hvdWxkIGJlIGluaXRpYWxpemVkIGZpcnN0IVwiKTtcbiAgICB0aGlzLnRpbmsubWFrZURyYWdnYWJsZShzcHJpdGUpO1xuICB9XG5cbiAgbWFrZVVuZHJhZ2dhYmxlKHNwcml0ZSkge1xuICAgIGlmICghdGhpcy50aW5rKSB0aHJvdyBuZXcgRXJyb3IoXCJUaW5rTWFuYWdlciBzaG91bGQgYmUgaW5pdGlhbGl6ZWQgZmlyc3QhXCIpO1xuICAgIHRoaXMudGluay5tYWtlVW5kcmFnZ2FibGUoc3ByaXRlKTtcbiAgfVxuXG4gIGdldCBwb2ludGVyKCkge1xuICAgIGlmICghdGhpcy5fcG9pbnRlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGlua01hbmFnZXIgc2hvdWxkIGJlIGluaXRpYWxpemVkIGZpcnN0IVwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3BvaW50ZXI7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFRpbmtNYW5hZ2VyKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcHVibGljL3NyYy9UaW5rTWFuYWdlci5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VMYXlvdXRTZXR0aW5ncyB7XG4gIGNvbnN0cnVjdG9yKGltYWdlRGltZW5zaW9ucywgcmVuZGVyZXJEaW1lbnNpb25zKSB7XG4gICAgdGhpcy5pbWFnZURpbWVuc2lvbnMgPSBpbWFnZURpbWVuc2lvbnM7XG4gICAgdGhpcy5yZW5kZXJlckRpbWVuc2lvbnMgPSByZW5kZXJlckRpbWVuc2lvbnM7XG4gIH1cblxuICBnZXRGcmFnbWVudERpbWVuc2lvbnNCeUZyYWdtZW50c051bWJlcihmcmFnbWVudHNOdW1iZXIpIHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuaW1hZ2VEaW1lbnNpb25zLndpZHRoIC9cbiAgICAgIHRoaXMuZ2V0Q29sdW1uc0J5RnJhZ21lbnRzTnVtYmVyKGZyYWdtZW50c051bWJlcik7XG4gICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5pbWFnZURpbWVuc2lvbnMuaGVpZ2h0IC9cbiAgICAgIHRoaXMuZ2V0Um93c0J5RnJhZ21lbnRzTnVtYmVyKGZyYWdtZW50c051bWJlcik7XG4gICAgcmV0dXJuIHsgd2lkdGgsIGhlaWdodCB9O1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcHVibGljL3NyYy9tb2RlbC9CYXNlTGF5b3V0U2V0dGluZ3MuanMiLCJpbXBvcnQgeyBSZWN0YW5nbGUgfSBmcm9tIFwiLi8uLi9hbGlhc2VzXCI7XG5pbXBvcnQgTW9kZWwgZnJvbSBcIi4vLi4vbW9kZWwvTW9kZWxcIjtcbmltcG9ydCBGcmFnbWVudCBmcm9tIFwiLi9GcmFnbWVudFwiO1xuaW1wb3J0IEZyYWdtZW50U3RhdGVzRmFjdG9yeSBmcm9tIFwiLi9zdGF0ZXMvRnJhZ21lbnRTdGF0ZXNGYWN0b3J5XCI7XG5cbmNsYXNzIEZyYWdtZW50c0ZhY3Rvcnkge1xuICBnZXRGcmFnbWVudHNGb3JUZXh0dXJlKHR4cikge1xuICAgIGNvbnN0IGZyYWdtZW50cyA9IFtdO1xuICAgIGNvbnN0IGZyYWdtZW50RGltZW5zaW9ucyA9IE1vZGVsLmZyYWdtZW50RGltZW5zaW9ucztcbiAgICBjb25zdCByb3dzID0gTW9kZWwucm93cztcbiAgICBjb25zdCBjb2x1bW5zID0gTW9kZWwuY29sdW1ucztcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93cyAtIDE7IGkgKz0gMSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2x1bW5zIC0gMTsgaiArPSAxKSB7XG4gICAgICAgIGNvbnN0IGFuY2hvclBvc2l0aW9uID0ge1xuICAgICAgICAgIHg6IGogKiBmcmFnbWVudERpbWVuc2lvbnMud2lkdGgsXG4gICAgICAgICAgeTogaSAqIGZyYWdtZW50RGltZW5zaW9ucy5oZWlnaHRcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBmcmFtZVJlY3QgPSBuZXcgUmVjdGFuZ2xlKFxuICAgICAgICAgIGFuY2hvclBvc2l0aW9uLngsXG4gICAgICAgICAgYW5jaG9yUG9zaXRpb24ueSxcbiAgICAgICAgICBmcmFnbWVudERpbWVuc2lvbnMud2lkdGgsXG4gICAgICAgICAgZnJhZ21lbnREaW1lbnNpb25zLmhlaWdodFxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IHRleHR1cmUgPSB0eHIuY2xvbmUoKTtcbiAgICAgICAgdGV4dHVyZS5mcmFtZSA9IGZyYW1lUmVjdDtcblxuICAgICAgICBjb25zdCBmcmFnbWVudCA9IHRoaXMuaW5pdEZyYWdtZW50KFxuICAgICAgICAgIHRoaXMuY3JlYXRlRnJhZ21lbnQodGV4dHVyZSwgYW5jaG9yUG9zaXRpb24pXG4gICAgICAgICk7XG4gICAgICAgIGZyYWdtZW50cy5wdXNoKGZyYWdtZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnJhZ21lbnRzO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gIGNyZWF0ZUZyYWdtZW50KHRleHR1cmUsIGFuY2hvcmVkUG9zaXRpb24pIHtcbiAgICByZXR1cm4gbmV3IEZyYWdtZW50KHRleHR1cmUsIGFuY2hvcmVkUG9zaXRpb24pO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gIGluaXRGcmFnbWVudChmcmFnbWVudCkge1xuICAgIGZyYWdtZW50LmFwcGx5U3RhdGUoRnJhZ21lbnRTdGF0ZXNGYWN0b3J5LmdldFN0YXRlRHJhZ2dhYmxlKGZyYWdtZW50KSk7XG4gICAgcmV0dXJuIGZyYWdtZW50O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBGcmFnbWVudHNGYWN0b3J5KCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcHVibGljL3NyYy9mcmFnbWVudHMvRnJhZ21lbnRzRmFjdG9yeS5qcyIsImltcG9ydCBUaW5rTWFuYWdlciBmcm9tIFwiLi8uLi9UaW5rTWFuYWdlclwiO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIi4vLi4vYWxpYXNlc1wiO1xuaW1wb3J0IHtcbiAgRVZFTlRfRlJBR01FTlRfQU5DSE9SRUQsXG4gIEVWRU5UX0FMTF9GUkFHTUVOVFNfQU5DSE9SRURcbn0gZnJvbSBcIi4vLi4vZXZlbnRzXCI7XG5cbmNsYXNzIEZyYWdtZW50c01hbmFnZXIgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX2ZyYWdtZW50cyA9IFtdO1xuICAgIHRoaXMuZHJhZ2dpbmdGcmFnbWVudCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmFuY2hvcmVkRnJhZ21lbnRzID0gMDtcblxuICAgIFRpbmtNYW5hZ2VyLnBvaW50ZXIucHJlc3MgPSAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZnJhZ21lbnRzIHx8ICF0aGlzLmZyYWdtZW50cy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgdGhpcy5mcmFnbWVudHMuZXZlcnkoZnJhZ21lbnQgPT4ge1xuICAgICAgICBpZiAoVGlua01hbmFnZXIucG9pbnRlci5oaXRUZXN0U3ByaXRlKGZyYWdtZW50LnZpZXcpKSB7XG4gICAgICAgICAgaWYgKHRoaXMuZHJhZ2dpbmdGcmFnbWVudCkgdGhpcy5kcmFnZ2luZ0ZyYWdtZW50LnRvZ2dsZURyYWcoKTtcbiAgICAgICAgICB0aGlzLmRyYWdnaW5nRnJhZ21lbnQgPSBmcmFnbWVudDtcbiAgICAgICAgICB0aGlzLmRyYWdnaW5nRnJhZ21lbnQudG9nZ2xlRHJhZygpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBUaW5rTWFuYWdlci5wb2ludGVyLnJlbGVhc2UgPSAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZHJhZ2dpbmdGcmFnbWVudCkgcmV0dXJuO1xuXG4gICAgICB0aGlzLmRyYWdnaW5nRnJhZ21lbnQudG9nZ2xlRHJhZygpO1xuICAgICAgdGhpcy5kcmFnZ2luZ0ZyYWdtZW50ID0gbnVsbDtcbiAgICB9O1xuICB9XG5cbiAgc2V0IGZyYWdtZW50cyhmcmFncykge1xuICAgIHRoaXMuX2ZyYWdtZW50cyA9IGZyYWdzO1xuICB9XG5cbiAgZ2V0IGZyYWdtZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5fZnJhZ21lbnRzO1xuICB9XG5cbiAgc3Vic2NyaWJlKCkge1xuICAgIHRoaXMuZnJhZ21lbnRzLmZvckVhY2goZnJhZ21lbnQgPT4ge1xuICAgICAgZnJhZ21lbnQub25jZShFVkVOVF9GUkFHTUVOVF9BTkNIT1JFRCwgdGhpcy5mcmFnbWVudEFuY2hvcmVkSGFuZGxlcik7XG4gICAgfSk7XG4gIH1cblxuICBfZnJhZ21lbnRBbmNob3JlZEhhbmRsZXIoKSB7XG4gICAgdGhpcy5hbmNob3JlZEZyYWdtZW50cyArPSAxO1xuICAgIGlmICh0aGlzLmFuY2hvcmVkRnJhZ21lbnRzID09PSB0aGlzLmZyYWdtZW50cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZW1pdChFVkVOVF9BTExfRlJBR01FTlRTX0FOQ0hPUkVEKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEZyYWdtZW50c01hbmFnZXIoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBwdWJsaWMvc3JjL2ZyYWdtZW50cy9GcmFnbWVudHNNYW5hZ2VyLmpzIiwiaW1wb3J0IHsgU3ByaXRlLCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiLi8uLi9hbGlhc2VzXCI7XG5pbXBvcnQgVGlua01hbmFnZXIgZnJvbSBcIi4vLi4vVGlua01hbmFnZXJcIjtcbmltcG9ydCB7IEVWRU5UX0ZSQUdNRU5UX0FOQ0hPUkVEIH0gZnJvbSBcIi4vLi4vZXZlbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyYWdtZW50IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IodGV4dHVyZSwgYW5jaG9yUG9zaXRpb24pIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX3Nwcml0ZSA9IG5ldyBTcHJpdGUodGV4dHVyZSk7XG4gICAgdGhpcy5fYW5jaG9yUG9zaXRpb24gPSBhbmNob3JQb3NpdGlvbjtcbiAgICB0aGlzLl9zdGF0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGFwcGx5U3RhdGUobmV3U3RhdGUpIHtcbiAgICBpZiAodGhpcy5fc3RhdGUpIHRoaXMuX3N0YXRlLmV4aXQoKTtcbiAgICB0aGlzLl9zdGF0ZSA9IG5ld1N0YXRlO1xuICAgIHRoaXMuX3N0YXRlLmVudHJ5KCk7XG4gIH1cblxuICB0b2dnbGVEcmFnKCkge1xuICAgIHRoaXMuX3N0YXRlLnRvZ2dsZURyYWcoKTtcbiAgfVxuXG4gIG1ha2VEcmFnZ2FibGUoKSB7XG4gICAgVGlua01hbmFnZXIubWFrZURyYWdnYWJsZSh0aGlzLl9zcHJpdGUpO1xuICB9XG5cbiAgbWFrZVVuZHJhZ2dhYmxlKCkge1xuICAgIFRpbmtNYW5hZ2VyLm1ha2VVbmRyYWdnYWJsZSh0aGlzLl9zcHJpdGUpO1xuICB9XG5cbiAgZGlzcGF0Y2hBbmNob3JlZCgpIHtcbiAgICB0aGlzLmVtaXQoRVZFTlRfRlJBR01FTlRfQU5DSE9SRUQpO1xuICB9XG5cbiAgc2V0IGFuY2hvclBvc2l0aW9uKHBvcykge1xuICAgIHRoaXMuX2FuY2hvclBvc2l0aW9uID0gcG9zO1xuICB9XG5cbiAgZ2V0IGFuY2hvclBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9hbmNob3JQb3NpdGlvbjtcbiAgfVxuXG4gIGdldCB2aWV3KCkge1xuICAgIHJldHVybiB0aGlzLl9zcHJpdGU7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBwdWJsaWMvc3JjL2ZyYWdtZW50cy9GcmFnbWVudC5qcyIsImltcG9ydCBCYXNlRnJhZ21lbnRTdGF0ZSBmcm9tIFwiLi9CYXNlRnJhZ21lbnRTdGF0ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmFnbWVudFN0YXRlQW5jaG9yZWQgZXh0ZW5kcyBCYXNlRnJhZ21lbnRTdGF0ZSB7XG4gIGVudHJ5KCkge1xuICAgIHN1cGVyLmVudHJ5KCk7XG4gICAgdGhpcy5fZnJhZ21lbnQubWFrZVVuZHJhZ2dhYmxlKCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBwdWJsaWMvc3JjL2ZyYWdtZW50cy9zdGF0ZXMvRnJhZ21lbnRTdGF0ZUFuY2hvcmVkLmpzIiwiaW1wb3J0IEJhc2VGcmFnbWVudFN0YXRlIGZyb20gXCIuL0Jhc2VGcmFnbWVudFN0YXRlXCI7XG5pbXBvcnQgRnJhZ21lbnRTdGF0ZXNGYWN0b3J5IGZyb20gXCIuL0ZyYWdtZW50U3RhdGVzRmFjdG9yeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmFnbWVudFN0YXRlRHJhZ2dhYmxlIGV4dGVuZHMgQmFzZUZyYWdtZW50U3RhdGUge1xuICBlbnRyeSgpIHtcbiAgICBzdXBlci5lbnRyeSgpO1xuICAgIHRoaXMuX2ZyYWdtZW50Lm1ha2VEcmFnZ2FibGUoKTtcbiAgfVxuXG4gIHRvZ2dsZURyYWcoKSB7XG4gICAgdGhpcy5fZnJhZ21lbnQuYXBwbHlTdGF0ZShcbiAgICAgIEZyYWdtZW50U3RhdGVzRmFjdG9yeS5nZXRTdGF0ZURyYWdnZWQodGhpcy5fZnJhZ21lbnQsIHRoaXMuX3N0YXRlc0ZhY3RvcnkpXG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHB1YmxpYy9zcmMvZnJhZ21lbnRzL3N0YXRlcy9GcmFnbWVudFN0YXRlRHJhZ2dhYmxlLmpzIiwiaW1wb3J0IEJhc2VGcmFnbWVudFN0YXRlIGZyb20gXCIuL0Jhc2VGcmFnbWVudFN0YXRlXCI7XG5pbXBvcnQgTW9kZWwgZnJvbSBcIi4vLi4vLi4vbW9kZWwvTW9kZWxcIjtcbmltcG9ydCBGcmFnbWVudFN0YXRlc0ZhY3RvcnkgZnJvbSBcIi4vRnJhZ21lbnRTdGF0ZXNGYWN0b3J5XCI7XG5pbXBvcnQgYXBwIGZyb20gXCIuLy4uLy4uL2FwcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmFnbWVudFN0YXRlRHJhZ2dlZCBleHRlbmRzIEJhc2VGcmFnbWVudFN0YXRlIHtcbiAgZW50cnkoKSB7XG4gICAgc3VwZXIuZW50cnkoKTtcbiAgICBhcHAudGlja2VyLmFkZCh0aGlzLmNoZWNrUG9zaXRpb24uYmluZCh0aGlzKSk7XG4gIH1cblxuICBleGl0KCkge1xuICAgIHN1cGVyLmV4aXQoKTtcbiAgICBhcHAudGlja2VyLnJlbW92ZSh0aGlzLmNoZWNrUG9zaXRpb24pO1xuICB9XG5cbiAgdG9nZ2xlRHJhZygpIHtcbiAgICB0aGlzLl9mcmFnbWVudC5hcHBseVN0YXRlKFxuICAgICAgRnJhZ21lbnRTdGF0ZXNGYWN0b3J5LmdldFN0YXRlRHJhZ2dhYmxlKFxuICAgICAgICB0aGlzLl9mcmFnbWVudCxcbiAgICAgICAgdGhpcy5fc3RhdGVzRmFjdG9yeVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBjaGVja1Bvc2l0aW9uKCkge1xuICAgIGlmIChcbiAgICAgIE1hdGguYWJzKHRoaXMuX2ZyYWdtZW50LnZpZXcueCAtIHRoaXMuX2ZyYWdtZW50LmFuY2hvclBvc2l0aW9uLngpID5cbiAgICAgIE1vZGVsLmFuY2hvclByZWNpc2lvblxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIE1hdGguYWJzKHRoaXMuX2ZyYWdtZW50LnZpZXcueSAtIHRoaXMuX2ZyYWdtZW50LmFuY2hvclBvc2l0aW9uLnkpID5cbiAgICAgIE1vZGVsLmFuY2hvclByZWNpc2lvblxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2ZyYWdtZW50LnZpZXcueCA9IHRoaXMuX2ZyYWdtZW50LmFuY2hvclBvc2l0aW9uLng7XG4gICAgdGhpcy5fZnJhZ21lbnQudmlldy55ID0gdGhpcy5fZnJhZ21lbnQuYW5jaG9yUG9zaXRpb24ueTtcbiAgICB0aGlzLl9mcmFnbWVudC5hcHBseVN0YXRlKFxuICAgICAgRnJhZ21lbnRTdGF0ZXNGYWN0b3J5LmdldFN0YXRlQW5jaG9yZWQoXG4gICAgICAgIHRoaXMuX2ZyYWdtZW50LFxuICAgICAgICB0aGlzLl9zdGF0ZXNGYWN0b3J5XG4gICAgICApXG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHB1YmxpYy9zcmMvZnJhZ21lbnRzL3N0YXRlcy9GcmFnbWVudFN0YXRlRHJhZ2dlZC5qcyIsImltcG9ydCBCYXNlTGF5b3V0U2V0dGluZ3MgZnJvbSBcIi4vQmFzZUxheW91dFNldHRpbmdzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvcml6b250YWxMYXlvdXRTZXR0aW5ncyBleHRlbmRzIEJhc2VMYXlvdXRTZXR0aW5ncyB7XG4gIC8vZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gIGdldFJvd3NCeUZyYWdtZW50c051bWJlcihmcmFnbWVudHNOdW1iZXIpIHtcbiAgICBzd2l0Y2ggKGZyYWdtZW50c051bWJlcikge1xuICAgICAgY2FzZSAxMjpcbiAgICAgICAgcmV0dXJuIDM7XG4gICAgICBjYXNlIDIwOlxuICAgICAgICByZXR1cm4gNDtcbiAgICAgIGNhc2UgMzA6XG4gICAgICAgIHJldHVybiA1O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICB9XG5cbiAgLy9lc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgZ2V0Q29sdW1uc0J5RnJhZ21lbnRzTnVtYmVyKGZyYWdtZW50c051bWJlcikge1xuICAgIHN3aXRjaCAoZnJhZ21lbnRzTnVtYmVyKSB7XG4gICAgICBjYXNlIDEyOlxuICAgICAgICByZXR1cm4gNDtcbiAgICAgIGNhc2UgMjA6XG4gICAgICAgIHJldHVybiA1O1xuICAgICAgY2FzZSAzMDpcbiAgICAgICAgcmV0dXJuIDY7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG4gIH1cblxuICBnZXQgc2NhbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVuZGVyZXJEaW1lbnNpb25zLndpZHRoIC8gdGhpcy5pbWFnZURpbWVuc2lvbnMud2lkdGg7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBwdWJsaWMvc3JjL21vZGVsL0hvcml6b250YWxMYXlvdXRTZXR0aW5ncy5qcyIsImltcG9ydCBCYXNlTGF5b3V0U2V0dGluZ3MgZnJvbSBcIi4vQmFzZUxheW91dFNldHRpbmdzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlcnRpY2FsTGF5b3V0U2V0dGluZ3MgZXh0ZW5kcyBCYXNlTGF5b3V0U2V0dGluZ3Mge1xuICAvL2VzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICBnZXRSb3dzQnlGcmFnbWVudHNOdW1iZXIoZnJhZ21lbnRzTnVtYmVyKSB7XG4gICAgc3dpdGNoIChmcmFnbWVudHNOdW1iZXIpIHtcbiAgICAgIGNhc2UgMTI6XG4gICAgICAgIHJldHVybiA0O1xuICAgICAgY2FzZSAyMDpcbiAgICAgICAgcmV0dXJuIDU7XG4gICAgICBjYXNlIDMwOlxuICAgICAgICByZXR1cm4gNjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgfVxuXG4gIC8vZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gIGdldENvbHVtbnNCeUZyYWdtZW50c051bWJlcihmcmFnbWVudHNOdW1iZXIpIHtcbiAgICBzd2l0Y2ggKGZyYWdtZW50c051bWJlcikge1xuICAgICAgY2FzZSAxMjpcbiAgICAgICAgcmV0dXJuIDM7XG4gICAgICBjYXNlIDIwOlxuICAgICAgICByZXR1cm4gNDtcbiAgICAgIGNhc2UgMzA6XG4gICAgICAgIHJldHVybiA1O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHNjYWxlKCkge1xuICAgIHJldHVybiB0aGlzLnJlbmRlcmVyRGltZW5zaW9ucy5oZWlnaHQgLyB0aGlzLmltYWdlRGltZW5zaW9ucy5oZWlnaHQ7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBwdWJsaWMvc3JjL21vZGVsL1ZlcnRpY2FsTGF5b3V0U2V0dGluZ3MuanMiLCJpbXBvcnQgeyBMb2FkZXIsIFNwcml0ZSB9IGZyb20gXCIuL2FsaWFzZXNcIjtcbmltcG9ydCBNb2RlbCBmcm9tIFwiLi9tb2RlbC9Nb2RlbFwiO1xuaW1wb3J0IEZyYWdtZW50c0ZhY3RvcnkgZnJvbSBcIi4vZnJhZ21lbnRzL0ZyYWdtZW50c0ZhY3RvcnlcIjtcbmltcG9ydCBGcmFnbWVudHNNYW5hZ2VyIGZyb20gXCIuL2ZyYWdtZW50cy9GcmFnbWVudHNNYW5hZ2VyXCI7XG5pbXBvcnQgYXBwIGZyb20gXCIuL2FwcFwiO1xuaW1wb3J0IHsgRVZFTlRfQUxMX0ZSQUdNRU5UU19BTkNIT1JFRCB9IGZyb20gXCIuL2V2ZW50c1wiO1xuXG5Mb2FkZXIuYWRkKFwiaW1hZ2VcIiwgXCJpbWFnZS5qcGdcIikubG9hZCgobG9hZGVyLCByZXNvdXJjZXMpID0+IHtcbiAgY29uc3QgdGV4dHVyZSA9IHJlc291cmNlcy5pbWFnZS50ZXh0dXJlO1xuXG4gIE1vZGVsLmluaXRMYXlvdXRTZXR0aW5nc0J5SW1hZ2VEaW1lbnNpb25zKFxuICAgIHsgd2lkdGg6IHRleHR1cmUud2lkdGgsIGhlaWdodDogdGV4dHVyZS5oZWlnaHQgfSxcbiAgICB7IHdpZHRoOiBhcHAucmVuZGVyZXIud2lkdGgsIGhlaWdodDogYXBwLnJlbmRlcmVyLmhlaWdodCB9XG4gICk7XG5cbiAgY29uc3Qgc2NhbGUgPSBNb2RlbC5zY2FsZTtcbiAgY29uc3QgYmcgPSBuZXcgU3ByaXRlKHRleHR1cmUpO1xuICBiZy5zY2FsZS5zZXQoc2NhbGUpO1xuICBhcHAuc3RhZ2UuYWRkQ2hpbGQoYmcpO1xuXG4gIGNvbnN0IGZyYWdtZW50cyA9IEZyYWdtZW50c0ZhY3RvcnkuZ2V0RnJhZ21lbnRzRm9yVGV4dHVyZSh0ZXh0dXJlKTtcbiAgLyogZXNsaW50LWRpc2FibGUgKi9cbiAgZnJhZ21lbnRzLmZvckVhY2goZnJhZ21lbnQgPT4ge1xuICAgIGZyYWdtZW50LnZpZXcuc2NhbGUuc2V0KHNjYWxlLCBzY2FsZSk7XG4gICAgZnJhZ21lbnQudmlldy54ID0gTWF0aC5yYW5kb20oKSAqIDUwMDtcbiAgICBmcmFnbWVudC52aWV3LnkgPSBNYXRoLnJhbmRvbSgpICogNTAwO1xuICAgIGFwcC5zdGFnZS5hZGRDaGlsZChmcmFnbWVudC52aWV3KTtcbiAgfSk7XG4gIC8qIGVzbGludC1lbmFibGUgKi9cbiAgRnJhZ21lbnRzTWFuYWdlci5mcmFnbWVudHMgPSBmcmFnbWVudHM7XG4gIEZyYWdtZW50c01hbmFnZXIuc3Vic2NyaWJlKCk7XG4gIEZyYWdtZW50c01hbmFnZXIub25jZShFVkVOVF9BTExfRlJBR01FTlRTX0FOQ0hPUkVELCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJUSEUgRU5EXCIpO1xuICB9KTtcbiAgLypcbiAgICBhcHAudGlja2VyLmFkZCgoKSA9PiB7XG4gICAgICAgIHRpbmsudXBkYXRlKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaGVsbG9cIik7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBnYW1lTG9vcCgpe1xuICAgICAgICBjb25zb2xlLmxvZyhcImhlbGxvXCIpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xuICAgICAgICB0aW5rLnVwZGF0ZSgpO1xuICAgICAgICBhcHAucmVuZGVyZXIucmVuZGVyKGFwcC5zdGFnZSk7XG4gICAgfVxuICAgIGdhbWVMb29wKCk7XG4gICAgKi9cbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHB1YmxpYy9zcmMvaW5kZXguanMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNKQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUlBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUdBOzs7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTs7Ozs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckRBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQURBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTs7Ozs7O0FBVkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7OztBQUdBOzs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBOzs7Ozs7QUFaQTs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7O0FDbkRBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFJQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXpCQTtBQTBCQTtBQUNBOzs7QUFTQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFuQkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7QUFnQkE7Ozs7Ozs7Ozs7Ozs7OztBQzFEQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUtBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7OztBQXhDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFKQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBR0E7Ozs7OztBQVZBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBTUE7OztBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BOzs7Ozs7QUEzQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7OztBQUVBO0FBQ0E7QUFDQTs7Ozs7O0FBL0JBOzs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVVBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7OztBQS9CQTs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBY0E7OzsiLCJzb3VyY2VSb290IjoiIn0=