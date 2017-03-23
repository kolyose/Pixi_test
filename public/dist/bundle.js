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
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
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
var ColorMatrixFilter = exports.ColorMatrixFilter = PIXI.filters.ColorMatrixFilter;
var Text = exports.Text = PIXI.Text;
var Graphics = exports.Graphics = PIXI.Graphics;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseGameState = function () {
  function BaseGameState(game, statesFactory) {
    _classCallCheck(this, BaseGameState);

    this._game = game;
    this._statesFactory = statesFactory;
  }

  // eslint-disable-next-line


  _createClass(BaseGameState, [{
    key: "entry",
    value: function entry() {}

    // eslint-disable-next-line

  }, {
    key: "exit",
    value: function exit() {}

    // eslint-disable-next-line

  }, {
    key: "startGameplay",
    value: function startGameplay() {}

    // eslint-disable-next-line

  }, {
    key: "stopGameplay",
    value: function stopGameplay() {}

    // eslint-disable-next-line

  }, {
    key: "onLoadComplete",
    value: function onLoadComplete() {}
  }]);

  return BaseGameState;
}();

exports.default = BaseGameState;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var EVENT_FRAGMENT_ANCHORED = exports.EVENT_FRAGMENT_ANCHORED = "EVENT_FRAGMENT_ANCHORED";
var EVENT_ALL_FRAGMENTS_ANCHORED = exports.EVENT_ALL_FRAGMENTS_ANCHORED = "EVENT_ALL_FRAGMENTS_ANCHORED";
var EVENT_PLAY = exports.EVENT_PLAY = "EVENT_PLAY";

/***/ }),
/* 3 */
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _HorizontalLayoutSettings = __webpack_require__(18);

var _HorizontalLayoutSettings2 = _interopRequireDefault(_HorizontalLayoutSettings);

var _VerticalLayoutSettings = __webpack_require__(19);

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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* global PIXI Tink*/

var _app = __webpack_require__(3);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TinkManager = function () {
  function TinkManager() {
    var _this = this;

    _classCallCheck(this, TinkManager);

    this._tink = new Tink(PIXI, _app2.default.view);
    this._pointer = this._tink.makePointer();

    _app2.default.ticker.add(function () {
      _this._tink.update();
    });
  }

  _createClass(TinkManager, [{
    key: "makeDraggable",
    value: function makeDraggable(sprite) {
      if (!this._tink) {
        throw new Error("TinkManager should be initialized first!");
      }

      this._tink.makeDraggable(sprite);
    }
  }, {
    key: "makeUndraggable",
    value: function makeUndraggable(sprite) {
      if (!this._tink) {
        throw new Error("TinkManager should be initialized first!");
      }
      this._tink.makeUndraggable(sprite);
    }
  }, {
    key: "createButton",
    value: function createButton(frames) {
      return this._tink.button(frames);
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
/* 6 */
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

  _createClass(BaseFragmentState, [{
    key: "reset",
    value: function reset() {
      this._fragment.applyState(this._statesFactory.getStateDraggable(this._fragment));
    }

    // eslint-disable-next-line class-methods-use-this

  }, {
    key: "entry",
    value: function entry() {}

    // eslint-disable-next-line class-methods-use-this

  }, {
    key: "exit",
    value: function exit() {}

    // eslint-disable-next-line class-methods-use-this

  }, {
    key: "toggleDrag",
    value: function toggleDrag() {}
  }]);

  return BaseFragmentState;
}();

exports.default = BaseFragmentState;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _FragmentStateDraggable = __webpack_require__(16);

var _FragmentStateDraggable2 = _interopRequireDefault(_FragmentStateDraggable);

var _FragmentStateDragged = __webpack_require__(17);

var _FragmentStateDragged2 = _interopRequireDefault(_FragmentStateDragged);

var _FragmentStateAnchored = __webpack_require__(15);

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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var BTN_LABEL_PLAY = exports.BTN_LABEL_PLAY = "PLAY";
var MESSAGE_PLAY = exports.MESSAGE_PLAY = "Let's play!";
var MESSAGE_WIN = exports.MESSAGE_WIN = "You win! \n Do you want to play again?";
var MESSAGE_LOSE = exports.MESSAGE_LOSE = "You lose! \n Do you want to play again?";

/***/ }),
/* 9 */
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

    // eslint-disable-next-line

  }, {
    key: "scale",
    get: function get() {}
  }]);

  return BaseLayoutSettings;
}();

exports.default = BaseLayoutSettings;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _aliases = __webpack_require__(0);

var _PlayPopup = __webpack_require__(20);

var _PlayPopup2 = _interopRequireDefault(_PlayPopup);

var _events = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GameView = function (_EventEmitter) {
  _inherits(GameView, _EventEmitter);

  function GameView(stage) {
    _classCallCheck(this, GameView);

    var _this = _possibleConstructorReturn(this, (GameView.__proto__ || Object.getPrototypeOf(GameView)).call(this));

    _this._stage = stage;
    _this._fragmentsContainer = new _aliases.Sprite();
    _this._stage.addChild(_this._fragmentsContainer);
    return _this;
  }

  _createClass(GameView, [{
    key: "initBackground",
    value: function initBackground(texture, scale) {
      var bg = new _aliases.Sprite(texture);
      bg.scale.set(scale);
      this._stage.addChildAt(bg, 0);
      var colorMatrix = new _aliases.ColorMatrixFilter();
      bg.filters = [colorMatrix];
      colorMatrix.greyscale(0.1);
    }
  }, {
    key: "addFragments",
    value: function addFragments(fragments, scale) {
      var _this2 = this;

      /* eslint-disable */
      fragments.forEach(function (fragment) {
        fragment.view.scale.set(scale, scale);
        fragment.view.x = Math.random() * 500;
        fragment.view.y = Math.random() * 500;
        _this2._fragmentsContainer.addChild(fragment.view);
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this._fragmentsContainer.removeChildren();
    }
  }, {
    key: "initPlayPopup",
    value: function initPlayPopup() {
      var _this3 = this;

      this._playPopup = new _PlayPopup2.default();
      this._playPopup.init();
      this._playPopup.on(_events.EVENT_PLAY, function () {
        _this3.emit(_events.EVENT_PLAY);
      });
      this._stage.addChild(this._playPopup.view);
    }
  }, {
    key: "showPlayPopup",
    value: function showPlayPopup(message) {
      this._playPopup.message = message;
      this._playPopup.show();
    }
  }, {
    key: "hidePlayPopup",
    value: function hidePlayPopup() {
      this._playPopup.hide();
    }
  }]);

  return GameView;
}(_aliases.EventEmitter);

exports.default = GameView;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _aliases = __webpack_require__(0);

var _Model = __webpack_require__(4);

var _Model2 = _interopRequireDefault(_Model);

var _Fragment = __webpack_require__(14);

var _Fragment2 = _interopRequireDefault(_Fragment);

var _FragmentStatesFactory = __webpack_require__(7);

var _FragmentStatesFactory2 = _interopRequireDefault(_FragmentStatesFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FragmentsFactory = function () {
  function FragmentsFactory() {
    _classCallCheck(this, FragmentsFactory);

    this._fragmentsPool = [];
  }

  _createClass(FragmentsFactory, [{
    key: "getFragmentsForTexture",
    value: function getFragmentsForTexture(txr) {
      if (this._fragmentsPool.length) return this._fragmentsPool;

      var fragmentDimensions = _Model2.default.fragmentDimensions;
      var rows = _Model2.default.rows;
      var columns = _Model2.default.columns;
      var fragmentId = 0;

      for (var i = 0; i < rows; i += 1) {
        for (var j = 0; j < columns; j += 1) {
          var anchorPosition = {
            x: j * fragmentDimensions.width,
            y: i * fragmentDimensions.height
          };

          var frameRect = new _aliases.Rectangle(anchorPosition.x, anchorPosition.y, fragmentDimensions.width, fragmentDimensions.height);

          var texture = txr.clone();
          texture.frame = frameRect;

          var fragment = this.initFragment(this.createFragment(fragmentId, texture, anchorPosition));
          this._fragmentsPool.push(fragment);

          fragmentId += 1;
        }
      }

      return this._fragmentsPool;
    }

    // eslint-disable-next-line

  }, {
    key: "createFragment",
    value: function createFragment(fragmentId, texture, anchoredPosition) {
      return new _Fragment2.default(fragmentId, texture, anchoredPosition);
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TinkManager = __webpack_require__(5);

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

    _TinkManager2.default.pointer.press = function () {
      if (!_this.fragments || !_this.fragments.length) return;

      _this.fragments.every(function (fragment) {
        if (_TinkManager2.default.pointer.hitTestSprite(fragment.view)) {
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
    key: "reset",
    value: function reset() {
      if (this._fragments) {
        this._fragments.forEach(function (fragment) {
          fragment.reset();
        });
      }
      this._fragments = [];
      this.draggingFragment = undefined;
      this.anchoredFragments = 0;
    }
  }, {
    key: "fragments",
    set: function set(frags) {
      var _this2 = this;

      this._fragments = frags;
      this._fragments.forEach(function (fragment) {
        fragment.once(_events.EVENT_FRAGMENT_ANCHORED, function () {
          _this2.anchoredFragments += 1;
          if (_this2.anchoredFragments === _this2.fragments.length) {
            _this2.emit(_events.EVENT_ALL_FRAGMENTS_ANCHORED);
          }
        });
      });
    },
    get: function get() {
      return this._fragments;
    }
  }]);

  return FragmentsManager;
}(_aliases.EventEmitter);

exports.default = new FragmentsManager();

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GameStateLoading = __webpack_require__(22);

var _GameStateLoading2 = _interopRequireDefault(_GameStateLoading);

var _GameStateInit = __webpack_require__(21);

var _GameStateInit2 = _interopRequireDefault(_GameStateInit);

var _GameStateReadyToPlay = __webpack_require__(25);

var _GameStateReadyToPlay2 = _interopRequireDefault(_GameStateReadyToPlay);

var _GameStatePlaying = __webpack_require__(24);

var _GameStatePlaying2 = _interopRequireDefault(_GameStatePlaying);

var _GameStateWin = __webpack_require__(26);

var _GameStateWin2 = _interopRequireDefault(_GameStateWin);

var _GameStateLose = __webpack_require__(23);

var _GameStateLose2 = _interopRequireDefault(_GameStateLose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameStatesFactory = function () {
  function GameStatesFactory() {
    _classCallCheck(this, GameStatesFactory);

    this._statesPool = new WeakMap();
  }

  _createClass(GameStatesFactory, [{
    key: "getStateLoading",
    value: function getStateLoading(game) {
      if (!this._statesPool.get(_GameStateLoading2.default)) {
        this._statesPool.set(_GameStateLoading2.default, new _GameStateLoading2.default(game, this));
      }
      return this._statesPool.get(_GameStateLoading2.default);
    }
  }, {
    key: "getStateInit",
    value: function getStateInit(game) {
      if (!this._statesPool.get(_GameStateInit2.default)) {
        this._statesPool.set(_GameStateInit2.default, new _GameStateInit2.default(game, this));
      }
      return this._statesPool.get(_GameStateInit2.default);
    }
  }, {
    key: "getStateReadyToPlay",
    value: function getStateReadyToPlay(game) {
      if (!this._statesPool.get(_GameStateReadyToPlay2.default)) {
        this._statesPool.set(_GameStateReadyToPlay2.default, new _GameStateReadyToPlay2.default(game, this));
      }
      return this._statesPool.get(_GameStateReadyToPlay2.default);
    }
  }, {
    key: "getStatePlaying",
    value: function getStatePlaying(game) {
      if (!this._statesPool.get(_GameStatePlaying2.default)) {
        this._statesPool.set(_GameStatePlaying2.default, new _GameStatePlaying2.default(game, this));
      }
      return this._statesPool.get(_GameStatePlaying2.default);
    }
  }, {
    key: "getStateWin",
    value: function getStateWin(game) {
      if (!this._statesPool.get(_GameStateWin2.default)) {
        this._statesPool.set(_GameStateWin2.default, new _GameStateWin2.default(game, this));
      }
      return this._statesPool.get(_GameStateWin2.default);
    }
  }, {
    key: "getStateLose",
    value: function getStateLose(game) {
      if (!this._statesPool.get(_GameStateLose2.default)) {
        this._statesPool.set(_GameStateLose2.default, new _GameStateLose2.default(game, this));
      }
      return this._statesPool.get(_GameStateLose2.default);
    }
  }]);

  return GameStatesFactory;
}();

exports.default = new GameStatesFactory();

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _aliases = __webpack_require__(0);

var _TinkManager = __webpack_require__(5);

var _TinkManager2 = _interopRequireDefault(_TinkManager);

var _events = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Fragment = function (_EventEmitter) {
  _inherits(Fragment, _EventEmitter);

  function Fragment(id, texture, anchorPosition) {
    _classCallCheck(this, Fragment);

    var _this = _possibleConstructorReturn(this, (Fragment.__proto__ || Object.getPrototypeOf(Fragment)).call(this));

    _this._id = id;
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
    key: "reset",
    value: function reset() {
      this._state.reset();
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
      this._sprite.draggable = false;
      _TinkManager2.default.makeUndraggable(this._sprite);
    }
  }, {
    key: "dispatchAnchored",
    value: function dispatchAnchored() {
      this.emit(_events.EVENT_FRAGMENT_ANCHORED);
    }
  }, {
    key: "anchorPosition",
    get: function get() {
      return this._anchorPosition;
    }
  }, {
    key: "view",
    get: function get() {
      return this._sprite;
    }
  }, {
    key: "id",
    get: function get() {
      return this._id;
    }
  }]);

  return Fragment;
}(_aliases.EventEmitter);

exports.default = Fragment;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _BaseFragmentState2 = __webpack_require__(6);

var _BaseFragmentState3 = _interopRequireDefault(_BaseFragmentState2);

var _Model = __webpack_require__(4);

var _Model2 = _interopRequireDefault(_Model);

var _app = __webpack_require__(3);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FragmentStateAnchored = function (_BaseFragmentState) {
  _inherits(FragmentStateAnchored, _BaseFragmentState);

  function FragmentStateAnchored(fragment, statesFactory) {
    _classCallCheck(this, FragmentStateAnchored);

    var _this = _possibleConstructorReturn(this, (FragmentStateAnchored.__proto__ || Object.getPrototypeOf(FragmentStateAnchored)).call(this, fragment, statesFactory));

    _this._preventMovement = _this.preventMovement.bind(_this);
    return _this;
  }

  _createClass(FragmentStateAnchored, [{
    key: "entry",
    value: function entry() {
      _get(FragmentStateAnchored.prototype.__proto__ || Object.getPrototypeOf(FragmentStateAnchored.prototype), "entry", this).call(this);
      this._fragment.makeUndraggable();
      _app2.default.ticker.add(this._preventMovement);
      this._fragment.dispatchAnchored();
    }
  }, {
    key: "toggleDrag",
    value: function toggleDrag() {
      _app2.default.ticker.remove(this._preventMovement);
    }
  }, {
    key: "preventMovement",
    value: function preventMovement() {
      var scale = _Model2.default.scale;
      this._fragment.view.x = this._fragment.anchorPosition.x * scale;
      this._fragment.view.y = this._fragment.anchorPosition.y * scale;
    }
  }]);

  return FragmentStateAnchored;
}(_BaseFragmentState3.default);

exports.default = FragmentStateAnchored;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _BaseFragmentState2 = __webpack_require__(6);

var _BaseFragmentState3 = _interopRequireDefault(_BaseFragmentState2);

var _FragmentStatesFactory = __webpack_require__(7);

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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _BaseFragmentState2 = __webpack_require__(6);

var _BaseFragmentState3 = _interopRequireDefault(_BaseFragmentState2);

var _Model = __webpack_require__(4);

var _Model2 = _interopRequireDefault(_Model);

var _FragmentStatesFactory = __webpack_require__(7);

var _FragmentStatesFactory2 = _interopRequireDefault(_FragmentStatesFactory);

var _app = __webpack_require__(3);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FragmentStateDragged = function (_BaseFragmentState) {
  _inherits(FragmentStateDragged, _BaseFragmentState);

  function FragmentStateDragged(fragment, statesFactory) {
    _classCallCheck(this, FragmentStateDragged);

    var _this = _possibleConstructorReturn(this, (FragmentStateDragged.__proto__ || Object.getPrototypeOf(FragmentStateDragged)).call(this, fragment, statesFactory));

    _this._checkPosition = _this.checkPosition.bind(_this);
    return _this;
  }

  _createClass(FragmentStateDragged, [{
    key: "entry",
    value: function entry() {
      _get(FragmentStateDragged.prototype.__proto__ || Object.getPrototypeOf(FragmentStateDragged.prototype), "entry", this).call(this);
      _app2.default.ticker.add(this._checkPosition);
    }
  }, {
    key: "exit",
    value: function exit() {
      _get(FragmentStateDragged.prototype.__proto__ || Object.getPrototypeOf(FragmentStateDragged.prototype), "exit", this).call(this);
      _app2.default.ticker.remove(this._checkPosition);
    }
  }, {
    key: "toggleDrag",
    value: function toggleDrag() {
      this._fragment.applyState(_FragmentStatesFactory2.default.getStateDraggable(this._fragment, this._statesFactory));
    }
  }, {
    key: "checkPosition",
    value: function checkPosition() {
      if (Math.abs(this._fragment.view.x - this._fragment.anchorPosition.x * _Model2.default.scale) > _Model2.default.anchorPrecision) {
        return;
      }

      if (Math.abs(this._fragment.view.y - this._fragment.anchorPosition.y * _Model2.default.scale) > _Model2.default.anchorPrecision) {
        return;
      }

      this._fragment.applyState(_FragmentStatesFactory2.default.getStateAnchored(this._fragment, this._statesFactory));
    }
  }]);

  return FragmentStateDragged;
}(_BaseFragmentState3.default);

exports.default = FragmentStateDragged;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseLayoutSettings2 = __webpack_require__(9);

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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseLayoutSettings2 = __webpack_require__(9);

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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _aliases = __webpack_require__(0);

var _events = __webpack_require__(2);

var _TinkManager = __webpack_require__(5);

var _TinkManager2 = _interopRequireDefault(_TinkManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PlayPopup = function (_EventEmitter) {
  _inherits(PlayPopup, _EventEmitter);

  function PlayPopup() {
    _classCallCheck(this, PlayPopup);

    var _this = _possibleConstructorReturn(this, (PlayPopup.__proto__ || Object.getPrototypeOf(PlayPopup)).call(this));

    _this._view = new _aliases.Sprite();
    _this._label = new _aliases.Text();
    return _this;
  }

  _createClass(PlayPopup, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      var roundedRect = new _aliases.Graphics();
      roundedRect.lineStyle(1, 0x000000, 1);
      roundedRect.beginFill(0xffffff);
      roundedRect.drawRoundedRect(0, 0, 600, 300, 10);
      roundedRect.endFill();
      this._view.addChild(roundedRect);
      this._view.addChild(this._label);
      this._btn = _TinkManager2.default.createButton([_aliases.Loader.resources.btn.texture]);
      this._btn.release = function () {
        _this2.emit(_events.EVENT_PLAY);
      };
      this._view.addChild(this._btn);
    }
  }, {
    key: "show",
    value: function show() {
      this._view.visible = true;
    }
  }, {
    key: "hide",
    value: function hide() {
      this._view.visible = false;
    }
  }, {
    key: "message",
    set: function set(txt) {
      this._label.text = txt;
    }
  }, {
    key: "view",
    get: function get() {
      return this._view;
    }
  }]);

  return PlayPopup;
}(_aliases.EventEmitter);

exports.default = PlayPopup;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _BaseGameState2 = __webpack_require__(1);

var _BaseGameState3 = _interopRequireDefault(_BaseGameState2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GameStateInit = function (_BaseGameState) {
  _inherits(GameStateInit, _BaseGameState);

  function GameStateInit() {
    _classCallCheck(this, GameStateInit);

    return _possibleConstructorReturn(this, (GameStateInit.__proto__ || Object.getPrototypeOf(GameStateInit)).apply(this, arguments));
  }

  _createClass(GameStateInit, [{
    key: "entry",
    value: function entry() {
      _get(GameStateInit.prototype.__proto__ || Object.getPrototypeOf(GameStateInit.prototype), "entry", this).call(this);
      this._game.initModel();
      this._game.initPopups();
      // this._game.initBackground();
      this._game.applyState(this._statesFactory.getStateReadyToPlay(this._game));
    }
  }]);

  return GameStateInit;
}(_BaseGameState3.default);

exports.default = GameStateInit;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _BaseGameState2 = __webpack_require__(1);

var _BaseGameState3 = _interopRequireDefault(_BaseGameState2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GameStateLoading = function (_BaseGameState) {
  _inherits(GameStateLoading, _BaseGameState);

  function GameStateLoading() {
    _classCallCheck(this, GameStateLoading);

    return _possibleConstructorReturn(this, (GameStateLoading.__proto__ || Object.getPrototypeOf(GameStateLoading)).apply(this, arguments));
  }

  _createClass(GameStateLoading, [{
    key: "entry",
    value: function entry() {
      _get(GameStateLoading.prototype.__proto__ || Object.getPrototypeOf(GameStateLoading.prototype), "entry", this).call(this);
      this._game.loadImage();
    }
  }, {
    key: "onLoadComplete",
    value: function onLoadComplete() {
      _get(GameStateLoading.prototype.__proto__ || Object.getPrototypeOf(GameStateLoading.prototype), "onLoadComplete", this).call(this);
      this._game.applyState(this._statesFactory.getStateInit(this._game));
    }
  }]);

  return GameStateLoading;
}(_BaseGameState3.default);

exports.default = GameStateLoading;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _BaseGameState2 = __webpack_require__(1);

var _BaseGameState3 = _interopRequireDefault(_BaseGameState2);

var _localization = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GameStateLose = function (_BaseGameState) {
  _inherits(GameStateLose, _BaseGameState);

  function GameStateLose() {
    _classCallCheck(this, GameStateLose);

    return _possibleConstructorReturn(this, (GameStateLose.__proto__ || Object.getPrototypeOf(GameStateLose)).apply(this, arguments));
  }

  _createClass(GameStateLose, [{
    key: "entry",
    value: function entry() {
      _get(GameStateLose.prototype.__proto__ || Object.getPrototypeOf(GameStateLose.prototype), "entry", this).call(this);
      this._game.showPlayPopup(_localization.MESSAGE_LOSE);
    }
  }, {
    key: "exit",
    value: function exit() {
      _get(GameStateLose.prototype.__proto__ || Object.getPrototypeOf(GameStateLose.prototype), "exit", this).call(this);
      this._game.hidePlayPopup();
    }
  }, {
    key: "startGameplay",
    value: function startGameplay() {
      _get(GameStateLose.prototype.__proto__ || Object.getPrototypeOf(GameStateLose.prototype), "startGameplay", this).call(this);
      this._game.applyState(this._statesFactory.getStatePlaying(this._game));
    }
  }]);

  return GameStateLose;
}(_BaseGameState3.default);

exports.default = GameStateLose;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _BaseGameState2 = __webpack_require__(1);

var _BaseGameState3 = _interopRequireDefault(_BaseGameState2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GameStatePlaying = function (_BaseGameState) {
  _inherits(GameStatePlaying, _BaseGameState);

  function GameStatePlaying() {
    _classCallCheck(this, GameStatePlaying);

    return _possibleConstructorReturn(this, (GameStatePlaying.__proto__ || Object.getPrototypeOf(GameStatePlaying)).apply(this, arguments));
  }

  _createClass(GameStatePlaying, [{
    key: "entry",
    value: function entry() {
      _get(GameStatePlaying.prototype.__proto__ || Object.getPrototypeOf(GameStatePlaying.prototype), "entry", this).call(this);
      this._game.resetView();
      this._game.initBackground();
      this._game.setupFragments();
    }
  }, {
    key: "stopGameplay",
    value: function stopGameplay(isWin) {
      _get(GameStatePlaying.prototype.__proto__ || Object.getPrototypeOf(GameStatePlaying.prototype), "stopGameplay", this).call(this);

      if (isWin) {
        this._game.applyState(this._statesFactory.getStateWin(this._game));
      } else {
        this._game.applyState(this._statesFactory.getStateLose(this._game));
      }
    }
  }]);

  return GameStatePlaying;
}(_BaseGameState3.default);

exports.default = GameStatePlaying;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _BaseGameState2 = __webpack_require__(1);

var _BaseGameState3 = _interopRequireDefault(_BaseGameState2);

var _localization = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GameStateReadyToPlay = function (_BaseGameState) {
  _inherits(GameStateReadyToPlay, _BaseGameState);

  function GameStateReadyToPlay() {
    _classCallCheck(this, GameStateReadyToPlay);

    return _possibleConstructorReturn(this, (GameStateReadyToPlay.__proto__ || Object.getPrototypeOf(GameStateReadyToPlay)).apply(this, arguments));
  }

  _createClass(GameStateReadyToPlay, [{
    key: "entry",
    value: function entry() {
      _get(GameStateReadyToPlay.prototype.__proto__ || Object.getPrototypeOf(GameStateReadyToPlay.prototype), "entry", this).call(this);
      this._game.showPlayPopup(_localization.MESSAGE_PLAY);
    }
  }, {
    key: "exit",
    value: function exit() {
      _get(GameStateReadyToPlay.prototype.__proto__ || Object.getPrototypeOf(GameStateReadyToPlay.prototype), "exit", this).call(this);
      this._game.hidePlayPopup();
    }
  }, {
    key: "startGameplay",
    value: function startGameplay() {
      _get(GameStateReadyToPlay.prototype.__proto__ || Object.getPrototypeOf(GameStateReadyToPlay.prototype), "startGameplay", this).call(this);
      this._game.applyState(this._statesFactory.getStatePlaying(this._game));
    }
  }]);

  return GameStateReadyToPlay;
}(_BaseGameState3.default);

exports.default = GameStateReadyToPlay;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _BaseGameState2 = __webpack_require__(1);

var _BaseGameState3 = _interopRequireDefault(_BaseGameState2);

var _localization = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GameStateWin = function (_BaseGameState) {
  _inherits(GameStateWin, _BaseGameState);

  function GameStateWin() {
    _classCallCheck(this, GameStateWin);

    return _possibleConstructorReturn(this, (GameStateWin.__proto__ || Object.getPrototypeOf(GameStateWin)).apply(this, arguments));
  }

  _createClass(GameStateWin, [{
    key: "entry",
    value: function entry() {
      _get(GameStateWin.prototype.__proto__ || Object.getPrototypeOf(GameStateWin.prototype), "entry", this).call(this);
      this._game.showPlayPopup(_localization.MESSAGE_WIN);
    }
  }, {
    key: "exit",
    value: function exit() {
      _get(GameStateWin.prototype.__proto__ || Object.getPrototypeOf(GameStateWin.prototype), "exit", this).call(this);
      this._game.hidePlayPopup();
    }
  }, {
    key: "startGameplay",
    value: function startGameplay() {
      _get(GameStateWin.prototype.__proto__ || Object.getPrototypeOf(GameStateWin.prototype), "startGameplay", this).call(this);
      this._game.applyState(this._statesFactory.getStatePlaying(this._game));
    }
  }]);

  return GameStateWin;
}(_BaseGameState3.default);

exports.default = GameStateWin;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _aliases = __webpack_require__(0);

var _Model = __webpack_require__(4);

var _Model2 = _interopRequireDefault(_Model);

var _FragmentsFactory = __webpack_require__(11);

var _FragmentsFactory2 = _interopRequireDefault(_FragmentsFactory);

var _FragmentsManager = __webpack_require__(12);

var _FragmentsManager2 = _interopRequireDefault(_FragmentsManager);

var _app = __webpack_require__(3);

var _app2 = _interopRequireDefault(_app);

var _events = __webpack_require__(2);

var _GameView = __webpack_require__(10);

var _GameView2 = _interopRequireDefault(_GameView);

var _GameStatesFactory = __webpack_require__(13);

var _GameStatesFactory2 = _interopRequireDefault(_GameStatesFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  function Game() {
    _classCallCheck(this, Game);

    this._state = undefined;
    this._view = new _GameView2.default(_app2.default.stage);
    this._view.on(_events.EVENT_PLAY, this.startGameplay.bind(this));
  }

  _createClass(Game, [{
    key: "applyState",
    value: function applyState(newState) {
      if (this._state) this._state.exit();

      this._state = newState;
      this._state.entry();
    }
  }, {
    key: "loadImage",
    value: function loadImage() {
      var _this = this;

      _aliases.Loader.add([{ name: "main", url: "img/image.jpg" }, { name: "btn", url: "img/play-button.jpg" }]).load(function (loader, resources) {
        _this._state.onLoadComplete();
      });
    }

    // eslint-disable-next-line class-methods-use-this

  }, {
    key: "initModel",
    value: function initModel() {
      var mainTexture = _aliases.Loader.resources.main.texture;
      _Model2.default.initLayoutSettingsByImageDimensions({ width: mainTexture.width, height: mainTexture.height }, { width: _app2.default.renderer.width, height: _app2.default.renderer.height });
    }
  }, {
    key: "initPopups",
    value: function initPopups() {
      this._view.initPlayPopup();
    }
  }, {
    key: "initBackground",
    value: function initBackground() {
      this._view.initBackground(_aliases.Loader.resources.main.texture, _Model2.default.scale);
    }
  }, {
    key: "resetView",
    value: function resetView() {
      this._view.reset();
    }
  }, {
    key: "setupFragments",
    value: function setupFragments() {
      var _this2 = this;

      var fragments = _FragmentsFactory2.default.getFragmentsForTexture(_aliases.Loader.resources.main.texture);
      this._view.addFragments(fragments, _Model2.default.scale);

      _FragmentsManager2.default.reset();
      _FragmentsManager2.default.fragments = fragments;
      _FragmentsManager2.default.once(_events.EVENT_ALL_FRAGMENTS_ANCHORED, function () {
        _this2._state.stopGameplay();
      });
    }
  }, {
    key: "showPlayPopup",
    value: function showPlayPopup(message) {
      this._view.showPlayPopup(message);
    }
  }, {
    key: "hidePlayPopup",
    value: function hidePlayPopup() {
      this._view.hidePlayPopup();
    }
  }, {
    key: "startGameplay",
    value: function startGameplay() {
      this._state.startGameplay();
    }
  }, {
    key: "stopGameplay",
    value: function stopGameplay() {
      this._state.stopGameplay();
    }
  }]);

  return Game;
}();

var game = new Game();
game.applyState(_GameStatesFactory2.default.getStateLoading(game));

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvZGlzdC9idW5kbGUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzhhMTBkOWQxMTI5MzBlMmZjZDgiLCJ3ZWJwYWNrOi8vL3B1YmxpYy9zcmMvYWxpYXNlcy5qcyIsIndlYnBhY2s6Ly8vcHVibGljL3NyYy9zdGF0ZXMvQmFzZUdhbWVTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vcHVibGljL3NyYy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vL3B1YmxpYy9zcmMvYXBwLmpzIiwid2VicGFjazovLy9wdWJsaWMvc3JjL21vZGVsL01vZGVsLmpzIiwid2VicGFjazovLy9wdWJsaWMvc3JjL1RpbmtNYW5hZ2VyLmpzIiwid2VicGFjazovLy9wdWJsaWMvc3JjL2ZyYWdtZW50cy9zdGF0ZXMvQmFzZUZyYWdtZW50U3RhdGUuanMiLCJ3ZWJwYWNrOi8vL3B1YmxpYy9zcmMvZnJhZ21lbnRzL3N0YXRlcy9GcmFnbWVudFN0YXRlc0ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vL3B1YmxpYy9zcmMvbG9jYWxpemF0aW9uLmpzIiwid2VicGFjazovLy9wdWJsaWMvc3JjL21vZGVsL0Jhc2VMYXlvdXRTZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vcHVibGljL3NyYy9HYW1lVmlldy5qcyIsIndlYnBhY2s6Ly8vcHVibGljL3NyYy9mcmFnbWVudHMvRnJhZ21lbnRzRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vcHVibGljL3NyYy9mcmFnbWVudHMvRnJhZ21lbnRzTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vcHVibGljL3NyYy9zdGF0ZXMvR2FtZVN0YXRlc0ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vL3B1YmxpYy9zcmMvZnJhZ21lbnRzL0ZyYWdtZW50LmpzIiwid2VicGFjazovLy9wdWJsaWMvc3JjL2ZyYWdtZW50cy9zdGF0ZXMvRnJhZ21lbnRTdGF0ZUFuY2hvcmVkLmpzIiwid2VicGFjazovLy9wdWJsaWMvc3JjL2ZyYWdtZW50cy9zdGF0ZXMvRnJhZ21lbnRTdGF0ZURyYWdnYWJsZS5qcyIsIndlYnBhY2s6Ly8vcHVibGljL3NyYy9mcmFnbWVudHMvc3RhdGVzL0ZyYWdtZW50U3RhdGVEcmFnZ2VkLmpzIiwid2VicGFjazovLy9wdWJsaWMvc3JjL21vZGVsL0hvcml6b250YWxMYXlvdXRTZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vcHVibGljL3NyYy9tb2RlbC9WZXJ0aWNhbExheW91dFNldHRpbmdzLmpzIiwid2VicGFjazovLy9wdWJsaWMvc3JjL3BvcHVwcy9QbGF5UG9wdXAuanMiLCJ3ZWJwYWNrOi8vL3B1YmxpYy9zcmMvc3RhdGVzL0dhbWVTdGF0ZUluaXQuanMiLCJ3ZWJwYWNrOi8vL3B1YmxpYy9zcmMvc3RhdGVzL0dhbWVTdGF0ZUxvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vL3B1YmxpYy9zcmMvc3RhdGVzL0dhbWVTdGF0ZUxvc2UuanMiLCJ3ZWJwYWNrOi8vL3B1YmxpYy9zcmMvc3RhdGVzL0dhbWVTdGF0ZVBsYXlpbmcuanMiLCJ3ZWJwYWNrOi8vL3B1YmxpYy9zcmMvc3RhdGVzL0dhbWVTdGF0ZVJlYWR5VG9QbGF5LmpzIiwid2VicGFjazovLy9wdWJsaWMvc3JjL3N0YXRlcy9HYW1lU3RhdGVXaW4uanMiLCJ3ZWJwYWNrOi8vL3B1YmxpYy9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMjcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGM4YTEwZDlkMTEyOTMwZTJmY2Q4IiwiLyogZ2xvYmFsIFBJWEkgKi9cblxuZXhwb3J0IGNvbnN0IEFwcGxpY2F0aW9uID0gUElYSS5BcHBsaWNhdGlvbjtcbmV4cG9ydCBjb25zdCBMb2FkZXIgPSBQSVhJLmxvYWRlcjtcbmV4cG9ydCBjb25zdCBTcHJpdGUgPSBQSVhJLlNwcml0ZTtcbmV4cG9ydCBjb25zdCBFdmVudEVtaXR0ZXIgPSBQSVhJLnV0aWxzLkV2ZW50RW1pdHRlcjtcbmV4cG9ydCBjb25zdCBSZWN0YW5nbGUgPSBQSVhJLlJlY3RhbmdsZTtcbmV4cG9ydCBjb25zdCBUZXh0dXJlID0gUElYSS5UZXh0dXJlO1xuZXhwb3J0IGNvbnN0IENvbG9yTWF0cml4RmlsdGVyID0gUElYSS5maWx0ZXJzLkNvbG9yTWF0cml4RmlsdGVyO1xuZXhwb3J0IGNvbnN0IFRleHQgPSBQSVhJLlRleHQ7XG5leHBvcnQgY29uc3QgR3JhcGhpY3MgPSBQSVhJLkdyYXBoaWNzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHB1YmxpYy9zcmMvYWxpYXNlcy5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VHYW1lU3RhdGUge1xuICBjb25zdHJ1Y3RvcihnYW1lLCBzdGF0ZXNGYWN0b3J5KSB7XG4gICAgdGhpcy5fZ2FtZSA9IGdhbWU7XG4gICAgdGhpcy5fc3RhdGVzRmFjdG9yeSA9IHN0YXRlc0ZhY3Rvcnk7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgZW50cnkoKSB7fVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICBleGl0KCkge31cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgc3RhcnRHYW1lcGxheSgpIHt9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gIHN0b3BHYW1lcGxheSgpIHt9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gIG9uTG9hZENvbXBsZXRlKCkge31cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBwdWJsaWMvc3JjL3N0YXRlcy9CYXNlR2FtZVN0YXRlLmpzIiwiZXhwb3J0IGNvbnN0IEVWRU5UX0ZSQUdNRU5UX0FOQ0hPUkVEID0gXCJFVkVOVF9GUkFHTUVOVF9BTkNIT1JFRFwiO1xuZXhwb3J0IGNvbnN0IEVWRU5UX0FMTF9GUkFHTUVOVFNfQU5DSE9SRUQgPSBcIkVWRU5UX0FMTF9GUkFHTUVOVFNfQU5DSE9SRURcIjtcbmV4cG9ydCBjb25zdCBFVkVOVF9QTEFZID0gXCJFVkVOVF9QTEFZXCI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcHVibGljL3NyYy9ldmVudHMuanMiLCJpbXBvcnQgeyBBcHBsaWNhdGlvbiB9IGZyb20gXCIuL2FsaWFzZXNcIjtcblxuY29uc3QgYXBwID0gbmV3IEFwcGxpY2F0aW9uKCk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFwcC52aWV3KTtcblxuZXhwb3J0IGRlZmF1bHQgYXBwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHB1YmxpYy9zcmMvYXBwLmpzIiwiaW1wb3J0IEhvcml6b250YWxMYXlvdXRTZXR0aW5ncyBmcm9tIFwiLi9Ib3Jpem9udGFsTGF5b3V0U2V0dGluZ3NcIjtcbmltcG9ydCBWZXJ0aWNhbExheW91dFNldHRpbmdzIGZyb20gXCIuL1ZlcnRpY2FsTGF5b3V0U2V0dGluZ3NcIjtcblxuY2xhc3MgTW9kZWwge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKiBUT0RPOiBwdXQgaGVyZSBhbmQgcGFyc2Ugc2V0dGluZ3MgSlNPTiAqL1xuICAgIHRoaXMuX2xheW91dFNldHRpbmdzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX2ZyYWdtZW50c051bWJlciA9IDEyO1xuICB9XG5cbiAgLypcbiAgICAqICAgIEZhY3RvcnkgbWV0aG9kIHRvIGluaXQgbGF5b3V0IHNldHRpbmdzIGJhc2VkIG9uIGltYWdlIGRpbWVudGlvbnNcbiAgICAqL1xuICBpbml0TGF5b3V0U2V0dGluZ3NCeUltYWdlRGltZW5zaW9ucyhpbWFnZURpbWVuc2lvbnMsIHJlbmRlcmVyRGltZW5zaW9ucykge1xuICAgIGlmIChpbWFnZURpbWVuc2lvbnMud2lkdGggPiBpbWFnZURpbWVuc2lvbnMuaGVpZ2h0KSB7XG4gICAgICB0aGlzLl9sYXlvdXRTZXR0aW5ncyA9IG5ldyBIb3Jpem9udGFsTGF5b3V0U2V0dGluZ3MoXG4gICAgICAgIGltYWdlRGltZW5zaW9ucyxcbiAgICAgICAgcmVuZGVyZXJEaW1lbnNpb25zXG4gICAgICApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9sYXlvdXRTZXR0aW5ncyA9IG5ldyBWZXJ0aWNhbExheW91dFNldHRpbmdzKFxuICAgICAgaW1hZ2VEaW1lbnNpb25zLFxuICAgICAgcmVuZGVyZXJEaW1lbnNpb25zXG4gICAgKTtcbiAgfVxuXG4gIGdldCBzY2FsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGF5b3V0U2V0dGluZ3Muc2NhbGU7XG4gIH1cblxuICBnZXQgcm93cygpIHtcbiAgICByZXR1cm4gdGhpcy5fbGF5b3V0U2V0dGluZ3MuZ2V0Um93c0J5RnJhZ21lbnRzTnVtYmVyKHRoaXMuX2ZyYWdtZW50c051bWJlcik7XG4gIH1cblxuICBnZXQgY29sdW1ucygpIHtcbiAgICByZXR1cm4gdGhpcy5fbGF5b3V0U2V0dGluZ3MuZ2V0Q29sdW1uc0J5RnJhZ21lbnRzTnVtYmVyKFxuICAgICAgdGhpcy5fZnJhZ21lbnRzTnVtYmVyXG4gICAgKTtcbiAgfVxuXG4gIGdldCBmcmFnbWVudERpbWVuc2lvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xheW91dFNldHRpbmdzLmdldEZyYWdtZW50RGltZW5zaW9uc0J5RnJhZ21lbnRzTnVtYmVyKFxuICAgICAgdGhpcy5fZnJhZ21lbnRzTnVtYmVyXG4gICAgKTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICBnZXQgYW5jaG9yUHJlY2lzaW9uKCkge1xuICAgIHJldHVybiAxMDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgTW9kZWwoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBwdWJsaWMvc3JjL21vZGVsL01vZGVsLmpzIiwiLyogZ2xvYmFsIFBJWEkgVGluayovXG5cbmltcG9ydCBhcHAgZnJvbSBcIi4vYXBwXCI7XG5cbmNsYXNzIFRpbmtNYW5hZ2VyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fdGluayA9IG5ldyBUaW5rKFBJWEksIGFwcC52aWV3KTtcbiAgICB0aGlzLl9wb2ludGVyID0gdGhpcy5fdGluay5tYWtlUG9pbnRlcigpO1xuXG4gICAgYXBwLnRpY2tlci5hZGQoKCkgPT4ge1xuICAgICAgdGhpcy5fdGluay51cGRhdGUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG1ha2VEcmFnZ2FibGUoc3ByaXRlKSB7XG4gICAgaWYgKCF0aGlzLl90aW5rKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaW5rTWFuYWdlciBzaG91bGQgYmUgaW5pdGlhbGl6ZWQgZmlyc3QhXCIpO1xuICAgIH1cblxuICAgIHRoaXMuX3RpbmsubWFrZURyYWdnYWJsZShzcHJpdGUpO1xuICB9XG5cbiAgbWFrZVVuZHJhZ2dhYmxlKHNwcml0ZSkge1xuICAgIGlmICghdGhpcy5fdGluaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGlua01hbmFnZXIgc2hvdWxkIGJlIGluaXRpYWxpemVkIGZpcnN0IVwiKTtcbiAgICB9XG4gICAgdGhpcy5fdGluay5tYWtlVW5kcmFnZ2FibGUoc3ByaXRlKTtcbiAgfVxuXG4gIGNyZWF0ZUJ1dHRvbihmcmFtZXMpIHtcbiAgICByZXR1cm4gdGhpcy5fdGluay5idXR0b24oZnJhbWVzKTtcbiAgfVxuXG4gIGdldCBwb2ludGVyKCkge1xuICAgIGlmICghdGhpcy5fcG9pbnRlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGlua01hbmFnZXIgc2hvdWxkIGJlIGluaXRpYWxpemVkIGZpcnN0IVwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3BvaW50ZXI7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFRpbmtNYW5hZ2VyKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcHVibGljL3NyYy9UaW5rTWFuYWdlci5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VGcmFnbWVudFN0YXRlIHtcbiAgY29uc3RydWN0b3IoZnJhZ21lbnQsIHN0YXRlc0ZhY3RvcnkpIHtcbiAgICB0aGlzLl9mcmFnbWVudCA9IGZyYWdtZW50O1xuICAgIHRoaXMuX3N0YXRlc0ZhY3RvcnkgPSBzdGF0ZXNGYWN0b3J5O1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5fZnJhZ21lbnQuYXBwbHlTdGF0ZShcbiAgICAgIHRoaXMuX3N0YXRlc0ZhY3RvcnkuZ2V0U3RhdGVEcmFnZ2FibGUodGhpcy5fZnJhZ21lbnQpXG4gICAgKTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzXG4gIGVudHJ5KCkge31cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2xhc3MtbWV0aG9kcy11c2UtdGhpc1xuICBleGl0KCkge31cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2xhc3MtbWV0aG9kcy11c2UtdGhpc1xuICB0b2dnbGVEcmFnKCkge31cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBwdWJsaWMvc3JjL2ZyYWdtZW50cy9zdGF0ZXMvQmFzZUZyYWdtZW50U3RhdGUuanMiLCJpbXBvcnQgRnJhZ21lbnRTdGF0ZURyYWdnYWJsZSBmcm9tIFwiLi9GcmFnbWVudFN0YXRlRHJhZ2dhYmxlXCI7XG5pbXBvcnQgRnJhZ21lbnRTdGF0ZURyYWdnZWQgZnJvbSBcIi4vRnJhZ21lbnRTdGF0ZURyYWdnZWRcIjtcbmltcG9ydCBGcmFnbWVudFN0YXRlQW5jaG9yZWQgZnJvbSBcIi4vRnJhZ21lbnRTdGF0ZUFuY2hvcmVkXCI7XG5cbmNsYXNzIEZyYWdtZW50U3RhdGVzRmFjdG9yeSB7XG4gIGdldFN0YXRlRHJhZ2dhYmxlKGZyYWdtZW50KSB7XG4gICAgcmV0dXJuIG5ldyBGcmFnbWVudFN0YXRlRHJhZ2dhYmxlKGZyYWdtZW50LCB0aGlzKTtcbiAgfVxuXG4gIGdldFN0YXRlRHJhZ2dlZChmcmFnbWVudCkge1xuICAgIHJldHVybiBuZXcgRnJhZ21lbnRTdGF0ZURyYWdnZWQoZnJhZ21lbnQsIHRoaXMpO1xuICB9XG5cbiAgZ2V0U3RhdGVBbmNob3JlZChmcmFnbWVudCkge1xuICAgIHJldHVybiBuZXcgRnJhZ21lbnRTdGF0ZUFuY2hvcmVkKGZyYWdtZW50LCB0aGlzKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgRnJhZ21lbnRTdGF0ZXNGYWN0b3J5KCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcHVibGljL3NyYy9mcmFnbWVudHMvc3RhdGVzL0ZyYWdtZW50U3RhdGVzRmFjdG9yeS5qcyIsImV4cG9ydCBjb25zdCBCVE5fTEFCRUxfUExBWSA9IGBQTEFZYDtcbmV4cG9ydCBjb25zdCBNRVNTQUdFX1BMQVkgPSBgTGV0J3MgcGxheSFgO1xuZXhwb3J0IGNvbnN0IE1FU1NBR0VfV0lOID0gYFlvdSB3aW4hIFxcbiBEbyB5b3Ugd2FudCB0byBwbGF5IGFnYWluP2A7XG5leHBvcnQgY29uc3QgTUVTU0FHRV9MT1NFID0gYFlvdSBsb3NlISBcXG4gRG8geW91IHdhbnQgdG8gcGxheSBhZ2Fpbj9gO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHB1YmxpYy9zcmMvbG9jYWxpemF0aW9uLmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZUxheW91dFNldHRpbmdzIHtcclxuICBjb25zdHJ1Y3RvcihpbWFnZURpbWVuc2lvbnMsIHJlbmRlcmVyRGltZW5zaW9ucykge1xyXG4gICAgdGhpcy5pbWFnZURpbWVuc2lvbnMgPSBpbWFnZURpbWVuc2lvbnM7XHJcbiAgICB0aGlzLnJlbmRlcmVyRGltZW5zaW9ucyA9IHJlbmRlcmVyRGltZW5zaW9ucztcclxuICB9XHJcblxyXG4gIGdldEZyYWdtZW50RGltZW5zaW9uc0J5RnJhZ21lbnRzTnVtYmVyKGZyYWdtZW50c051bWJlcikge1xyXG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmltYWdlRGltZW5zaW9ucy53aWR0aCAvXHJcbiAgICAgIHRoaXMuZ2V0Q29sdW1uc0J5RnJhZ21lbnRzTnVtYmVyKGZyYWdtZW50c051bWJlcik7XHJcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmltYWdlRGltZW5zaW9ucy5oZWlnaHQgL1xyXG4gICAgICB0aGlzLmdldFJvd3NCeUZyYWdtZW50c051bWJlcihmcmFnbWVudHNOdW1iZXIpO1xyXG4gICAgcmV0dXJuIHsgd2lkdGgsIGhlaWdodCB9O1xyXG4gIH1cclxuXHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgZ2V0IHNjYWxlKCkge31cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcHVibGljL3NyYy9tb2RlbC9CYXNlTGF5b3V0U2V0dGluZ3MuanMiLCJpbXBvcnQgeyBTcHJpdGUsIENvbG9yTWF0cml4RmlsdGVyLCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiLi9hbGlhc2VzXCI7XG5pbXBvcnQgUGxheVBvcHVwIGZyb20gXCIuL3BvcHVwcy9QbGF5UG9wdXBcIjtcbmltcG9ydCB7IEVWRU5UX1BMQVkgfSBmcm9tIFwiLi9ldmVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVZpZXcgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihzdGFnZSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fc3RhZ2UgPSBzdGFnZTtcbiAgICB0aGlzLl9mcmFnbWVudHNDb250YWluZXIgPSBuZXcgU3ByaXRlKCk7XG4gICAgdGhpcy5fc3RhZ2UuYWRkQ2hpbGQodGhpcy5fZnJhZ21lbnRzQ29udGFpbmVyKTtcbiAgfVxuXG4gIGluaXRCYWNrZ3JvdW5kKHRleHR1cmUsIHNjYWxlKSB7XG4gICAgY29uc3QgYmcgPSBuZXcgU3ByaXRlKHRleHR1cmUpO1xuICAgIGJnLnNjYWxlLnNldChzY2FsZSk7XG4gICAgdGhpcy5fc3RhZ2UuYWRkQ2hpbGRBdChiZywgMCk7XG4gICAgY29uc3QgY29sb3JNYXRyaXggPSBuZXcgQ29sb3JNYXRyaXhGaWx0ZXIoKTtcbiAgICBiZy5maWx0ZXJzID0gW2NvbG9yTWF0cml4XTtcbiAgICBjb2xvck1hdHJpeC5ncmV5c2NhbGUoMC4xKTtcbiAgfVxuXG4gIGFkZEZyYWdtZW50cyhmcmFnbWVudHMsIHNjYWxlKSB7XG4gICAgLyogZXNsaW50LWRpc2FibGUgKi9cbiAgICBmcmFnbWVudHMuZm9yRWFjaChmcmFnbWVudCA9PiB7XG4gICAgICBmcmFnbWVudC52aWV3LnNjYWxlLnNldChzY2FsZSwgc2NhbGUpO1xuICAgICAgZnJhZ21lbnQudmlldy54ID0gTWF0aC5yYW5kb20oKSAqIDUwMDtcbiAgICAgIGZyYWdtZW50LnZpZXcueSA9IE1hdGgucmFuZG9tKCkgKiA1MDA7XG4gICAgICB0aGlzLl9mcmFnbWVudHNDb250YWluZXIuYWRkQ2hpbGQoZnJhZ21lbnQudmlldyk7XG4gICAgfSk7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLl9mcmFnbWVudHNDb250YWluZXIucmVtb3ZlQ2hpbGRyZW4oKTtcbiAgfVxuXG4gIGluaXRQbGF5UG9wdXAoKSB7XG4gICAgdGhpcy5fcGxheVBvcHVwID0gbmV3IFBsYXlQb3B1cCgpO1xuICAgIHRoaXMuX3BsYXlQb3B1cC5pbml0KCk7XG4gICAgdGhpcy5fcGxheVBvcHVwLm9uKEVWRU5UX1BMQVksICgpID0+IHtcbiAgICAgIHRoaXMuZW1pdChFVkVOVF9QTEFZKTtcbiAgICB9KTtcbiAgICB0aGlzLl9zdGFnZS5hZGRDaGlsZCh0aGlzLl9wbGF5UG9wdXAudmlldyk7XG4gIH1cblxuICBzaG93UGxheVBvcHVwKG1lc3NhZ2UpIHtcbiAgICB0aGlzLl9wbGF5UG9wdXAubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy5fcGxheVBvcHVwLnNob3coKTtcbiAgfVxuXG4gIGhpZGVQbGF5UG9wdXAoKSB7XG4gICAgdGhpcy5fcGxheVBvcHVwLmhpZGUoKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHB1YmxpYy9zcmMvR2FtZVZpZXcuanMiLCJpbXBvcnQgeyBSZWN0YW5nbGUgfSBmcm9tIFwiLi8uLi9hbGlhc2VzXCI7XG5pbXBvcnQgTW9kZWwgZnJvbSBcIi4vLi4vbW9kZWwvTW9kZWxcIjtcbmltcG9ydCBGcmFnbWVudCBmcm9tIFwiLi9GcmFnbWVudFwiO1xuaW1wb3J0IEZyYWdtZW50U3RhdGVzRmFjdG9yeSBmcm9tIFwiLi9zdGF0ZXMvRnJhZ21lbnRTdGF0ZXNGYWN0b3J5XCI7XG5cbmNsYXNzIEZyYWdtZW50c0ZhY3Rvcnkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9mcmFnbWVudHNQb29sID0gW107XG4gIH1cblxuICBnZXRGcmFnbWVudHNGb3JUZXh0dXJlKHR4cikge1xuICAgIGlmICh0aGlzLl9mcmFnbWVudHNQb29sLmxlbmd0aCkgcmV0dXJuIHRoaXMuX2ZyYWdtZW50c1Bvb2w7XG5cbiAgICBjb25zdCBmcmFnbWVudERpbWVuc2lvbnMgPSBNb2RlbC5mcmFnbWVudERpbWVuc2lvbnM7XG4gICAgY29uc3Qgcm93cyA9IE1vZGVsLnJvd3M7XG4gICAgY29uc3QgY29sdW1ucyA9IE1vZGVsLmNvbHVtbnM7XG4gICAgbGV0IGZyYWdtZW50SWQgPSAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29sdW1uczsgaiArPSAxKSB7XG4gICAgICAgIGNvbnN0IGFuY2hvclBvc2l0aW9uID0ge1xuICAgICAgICAgIHg6IGogKiBmcmFnbWVudERpbWVuc2lvbnMud2lkdGgsXG4gICAgICAgICAgeTogaSAqIGZyYWdtZW50RGltZW5zaW9ucy5oZWlnaHRcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBmcmFtZVJlY3QgPSBuZXcgUmVjdGFuZ2xlKFxuICAgICAgICAgIGFuY2hvclBvc2l0aW9uLngsXG4gICAgICAgICAgYW5jaG9yUG9zaXRpb24ueSxcbiAgICAgICAgICBmcmFnbWVudERpbWVuc2lvbnMud2lkdGgsXG4gICAgICAgICAgZnJhZ21lbnREaW1lbnNpb25zLmhlaWdodFxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IHRleHR1cmUgPSB0eHIuY2xvbmUoKTtcbiAgICAgICAgdGV4dHVyZS5mcmFtZSA9IGZyYW1lUmVjdDtcblxuICAgICAgICBjb25zdCBmcmFnbWVudCA9IHRoaXMuaW5pdEZyYWdtZW50KFxuICAgICAgICAgIHRoaXMuY3JlYXRlRnJhZ21lbnQoZnJhZ21lbnRJZCwgdGV4dHVyZSwgYW5jaG9yUG9zaXRpb24pXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuX2ZyYWdtZW50c1Bvb2wucHVzaChmcmFnbWVudCk7XG5cbiAgICAgICAgZnJhZ21lbnRJZCArPSAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9mcmFnbWVudHNQb29sO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gIGNyZWF0ZUZyYWdtZW50KGZyYWdtZW50SWQsIHRleHR1cmUsIGFuY2hvcmVkUG9zaXRpb24pIHtcbiAgICByZXR1cm4gbmV3IEZyYWdtZW50KGZyYWdtZW50SWQsIHRleHR1cmUsIGFuY2hvcmVkUG9zaXRpb24pO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gIGluaXRGcmFnbWVudChmcmFnbWVudCkge1xuICAgIGZyYWdtZW50LmFwcGx5U3RhdGUoRnJhZ21lbnRTdGF0ZXNGYWN0b3J5LmdldFN0YXRlRHJhZ2dhYmxlKGZyYWdtZW50KSk7XG4gICAgcmV0dXJuIGZyYWdtZW50O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBGcmFnbWVudHNGYWN0b3J5KCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcHVibGljL3NyYy9mcmFnbWVudHMvRnJhZ21lbnRzRmFjdG9yeS5qcyIsImltcG9ydCBUaW5rTWFuYWdlciBmcm9tIFwiLi8uLi9UaW5rTWFuYWdlclwiO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIi4vLi4vYWxpYXNlc1wiO1xuaW1wb3J0IHtcbiAgRVZFTlRfRlJBR01FTlRfQU5DSE9SRUQsXG4gIEVWRU5UX0FMTF9GUkFHTUVOVFNfQU5DSE9SRURcbn0gZnJvbSBcIi4vLi4vZXZlbnRzXCI7XG5cbmNsYXNzIEZyYWdtZW50c01hbmFnZXIgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgVGlua01hbmFnZXIucG9pbnRlci5wcmVzcyA9ICgpID0+IHtcbiAgICAgIGlmICghdGhpcy5mcmFnbWVudHMgfHwgIXRoaXMuZnJhZ21lbnRzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICB0aGlzLmZyYWdtZW50cy5ldmVyeShmcmFnbWVudCA9PiB7XG4gICAgICAgIGlmIChUaW5rTWFuYWdlci5wb2ludGVyLmhpdFRlc3RTcHJpdGUoZnJhZ21lbnQudmlldykpIHtcbiAgICAgICAgICB0aGlzLmRyYWdnaW5nRnJhZ21lbnQgPSBmcmFnbWVudDtcbiAgICAgICAgICB0aGlzLmRyYWdnaW5nRnJhZ21lbnQudG9nZ2xlRHJhZygpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBUaW5rTWFuYWdlci5wb2ludGVyLnJlbGVhc2UgPSAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZHJhZ2dpbmdGcmFnbWVudCkgcmV0dXJuO1xuICAgICAgdGhpcy5kcmFnZ2luZ0ZyYWdtZW50LnRvZ2dsZURyYWcoKTtcbiAgICAgIHRoaXMuZHJhZ2dpbmdGcmFnbWVudCA9IG51bGw7XG4gICAgfTtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIGlmICh0aGlzLl9mcmFnbWVudHMpIHtcbiAgICAgIHRoaXMuX2ZyYWdtZW50cy5mb3JFYWNoKGZyYWdtZW50ID0+IHtcbiAgICAgICAgZnJhZ21lbnQucmVzZXQoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLl9mcmFnbWVudHMgPSBbXTtcbiAgICB0aGlzLmRyYWdnaW5nRnJhZ21lbnQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5hbmNob3JlZEZyYWdtZW50cyA9IDA7XG4gIH1cblxuICBzZXQgZnJhZ21lbnRzKGZyYWdzKSB7XG4gICAgdGhpcy5fZnJhZ21lbnRzID0gZnJhZ3M7XG4gICAgdGhpcy5fZnJhZ21lbnRzLmZvckVhY2goZnJhZ21lbnQgPT4ge1xuICAgICAgZnJhZ21lbnQub25jZShFVkVOVF9GUkFHTUVOVF9BTkNIT1JFRCwgKCkgPT4ge1xuICAgICAgICB0aGlzLmFuY2hvcmVkRnJhZ21lbnRzICs9IDE7XG4gICAgICAgIGlmICh0aGlzLmFuY2hvcmVkRnJhZ21lbnRzID09PSB0aGlzLmZyYWdtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLmVtaXQoRVZFTlRfQUxMX0ZSQUdNRU5UU19BTkNIT1JFRCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0IGZyYWdtZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5fZnJhZ21lbnRzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBGcmFnbWVudHNNYW5hZ2VyKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcHVibGljL3NyYy9mcmFnbWVudHMvRnJhZ21lbnRzTWFuYWdlci5qcyIsImltcG9ydCBHYW1lU3RhdGVMb2FkaW5nIGZyb20gXCIuL0dhbWVTdGF0ZUxvYWRpbmdcIjtcbmltcG9ydCBHYW1lU3RhdGVJbml0IGZyb20gXCIuL0dhbWVTdGF0ZUluaXRcIjtcbmltcG9ydCBHYW1lU3RhdGVSZWFkeVRvUGxheSBmcm9tIFwiLi9HYW1lU3RhdGVSZWFkeVRvUGxheVwiO1xuaW1wb3J0IEdhbWVTdGF0ZVBsYXlpbmcgZnJvbSBcIi4vR2FtZVN0YXRlUGxheWluZ1wiO1xuaW1wb3J0IEdhbWVTdGF0ZVdpbiBmcm9tIFwiLi9HYW1lU3RhdGVXaW5cIjtcbmltcG9ydCBHYW1lU3RhdGVMb3NlIGZyb20gXCIuL0dhbWVTdGF0ZUxvc2VcIjtcblxuY2xhc3MgR2FtZVN0YXRlc0ZhY3Rvcnkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9zdGF0ZXNQb29sID0gbmV3IFdlYWtNYXAoKTtcbiAgfVxuXG4gIGdldFN0YXRlTG9hZGluZyhnYW1lKSB7XG4gICAgaWYgKCF0aGlzLl9zdGF0ZXNQb29sLmdldChHYW1lU3RhdGVMb2FkaW5nKSkge1xuICAgICAgdGhpcy5fc3RhdGVzUG9vbC5zZXQoR2FtZVN0YXRlTG9hZGluZywgbmV3IEdhbWVTdGF0ZUxvYWRpbmcoZ2FtZSwgdGhpcykpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fc3RhdGVzUG9vbC5nZXQoR2FtZVN0YXRlTG9hZGluZyk7XG4gIH1cblxuICBnZXRTdGF0ZUluaXQoZ2FtZSkge1xuICAgIGlmICghdGhpcy5fc3RhdGVzUG9vbC5nZXQoR2FtZVN0YXRlSW5pdCkpIHtcbiAgICAgIHRoaXMuX3N0YXRlc1Bvb2wuc2V0KEdhbWVTdGF0ZUluaXQsIG5ldyBHYW1lU3RhdGVJbml0KGdhbWUsIHRoaXMpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlc1Bvb2wuZ2V0KEdhbWVTdGF0ZUluaXQpO1xuICB9XG5cbiAgZ2V0U3RhdGVSZWFkeVRvUGxheShnYW1lKSB7XG4gICAgaWYgKCF0aGlzLl9zdGF0ZXNQb29sLmdldChHYW1lU3RhdGVSZWFkeVRvUGxheSkpIHtcbiAgICAgIHRoaXMuX3N0YXRlc1Bvb2wuc2V0KFxuICAgICAgICBHYW1lU3RhdGVSZWFkeVRvUGxheSxcbiAgICAgICAgbmV3IEdhbWVTdGF0ZVJlYWR5VG9QbGF5KGdhbWUsIHRoaXMpXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fc3RhdGVzUG9vbC5nZXQoR2FtZVN0YXRlUmVhZHlUb1BsYXkpO1xuICB9XG5cbiAgZ2V0U3RhdGVQbGF5aW5nKGdhbWUpIHtcbiAgICBpZiAoIXRoaXMuX3N0YXRlc1Bvb2wuZ2V0KEdhbWVTdGF0ZVBsYXlpbmcpKSB7XG4gICAgICB0aGlzLl9zdGF0ZXNQb29sLnNldChHYW1lU3RhdGVQbGF5aW5nLCBuZXcgR2FtZVN0YXRlUGxheWluZyhnYW1lLCB0aGlzKSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9zdGF0ZXNQb29sLmdldChHYW1lU3RhdGVQbGF5aW5nKTtcbiAgfVxuXG4gIGdldFN0YXRlV2luKGdhbWUpIHtcbiAgICBpZiAoIXRoaXMuX3N0YXRlc1Bvb2wuZ2V0KEdhbWVTdGF0ZVdpbikpIHtcbiAgICAgIHRoaXMuX3N0YXRlc1Bvb2wuc2V0KEdhbWVTdGF0ZVdpbiwgbmV3IEdhbWVTdGF0ZVdpbihnYW1lLCB0aGlzKSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9zdGF0ZXNQb29sLmdldChHYW1lU3RhdGVXaW4pO1xuICB9XG5cbiAgZ2V0U3RhdGVMb3NlKGdhbWUpIHtcbiAgICBpZiAoIXRoaXMuX3N0YXRlc1Bvb2wuZ2V0KEdhbWVTdGF0ZUxvc2UpKSB7XG4gICAgICB0aGlzLl9zdGF0ZXNQb29sLnNldChHYW1lU3RhdGVMb3NlLCBuZXcgR2FtZVN0YXRlTG9zZShnYW1lLCB0aGlzKSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9zdGF0ZXNQb29sLmdldChHYW1lU3RhdGVMb3NlKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgR2FtZVN0YXRlc0ZhY3RvcnkoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBwdWJsaWMvc3JjL3N0YXRlcy9HYW1lU3RhdGVzRmFjdG9yeS5qcyIsImltcG9ydCB7IFNwcml0ZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIi4vLi4vYWxpYXNlc1wiO1xuaW1wb3J0IFRpbmtNYW5hZ2VyIGZyb20gXCIuLy4uL1RpbmtNYW5hZ2VyXCI7XG5pbXBvcnQgeyBFVkVOVF9GUkFHTUVOVF9BTkNIT1JFRCB9IGZyb20gXCIuLy4uL2V2ZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmFnbWVudCBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGlkLCB0ZXh0dXJlLCBhbmNob3JQb3NpdGlvbikge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5faWQgPSBpZDtcbiAgICB0aGlzLl9zcHJpdGUgPSBuZXcgU3ByaXRlKHRleHR1cmUpO1xuICAgIHRoaXMuX2FuY2hvclBvc2l0aW9uID0gYW5jaG9yUG9zaXRpb247XG4gICAgdGhpcy5fc3RhdGUgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBhcHBseVN0YXRlKG5ld1N0YXRlKSB7XG4gICAgaWYgKHRoaXMuX3N0YXRlKSB0aGlzLl9zdGF0ZS5leGl0KCk7XG4gICAgdGhpcy5fc3RhdGUgPSBuZXdTdGF0ZTtcbiAgICB0aGlzLl9zdGF0ZS5lbnRyeSgpO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5fc3RhdGUucmVzZXQoKTtcbiAgfVxuXG4gIHRvZ2dsZURyYWcoKSB7XG4gICAgdGhpcy5fc3RhdGUudG9nZ2xlRHJhZygpO1xuICB9XG5cbiAgbWFrZURyYWdnYWJsZSgpIHtcbiAgICBUaW5rTWFuYWdlci5tYWtlRHJhZ2dhYmxlKHRoaXMuX3Nwcml0ZSk7XG4gIH1cblxuICBtYWtlVW5kcmFnZ2FibGUoKSB7XG4gICAgdGhpcy5fc3ByaXRlLmRyYWdnYWJsZSA9IGZhbHNlO1xuICAgIFRpbmtNYW5hZ2VyLm1ha2VVbmRyYWdnYWJsZSh0aGlzLl9zcHJpdGUpO1xuICB9XG5cbiAgZGlzcGF0Y2hBbmNob3JlZCgpIHtcbiAgICB0aGlzLmVtaXQoRVZFTlRfRlJBR01FTlRfQU5DSE9SRUQpO1xuICB9XG5cbiAgZ2V0IGFuY2hvclBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9hbmNob3JQb3NpdGlvbjtcbiAgfVxuXG4gIGdldCB2aWV3KCkge1xuICAgIHJldHVybiB0aGlzLl9zcHJpdGU7XG4gIH1cblxuICBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcHVibGljL3NyYy9mcmFnbWVudHMvRnJhZ21lbnQuanMiLCJpbXBvcnQgQmFzZUZyYWdtZW50U3RhdGUgZnJvbSBcIi4vQmFzZUZyYWdtZW50U3RhdGVcIjtcbmltcG9ydCBNb2RlbCBmcm9tIFwiLi8uLi8uLi9tb2RlbC9Nb2RlbFwiO1xuaW1wb3J0IGFwcCBmcm9tIFwiLi8uLi8uLi9hcHBcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJhZ21lbnRTdGF0ZUFuY2hvcmVkIGV4dGVuZHMgQmFzZUZyYWdtZW50U3RhdGUge1xuICBjb25zdHJ1Y3RvcihmcmFnbWVudCwgc3RhdGVzRmFjdG9yeSkge1xuICAgIHN1cGVyKGZyYWdtZW50LCBzdGF0ZXNGYWN0b3J5KTtcbiAgICB0aGlzLl9wcmV2ZW50TW92ZW1lbnQgPSB0aGlzLnByZXZlbnRNb3ZlbWVudC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgZW50cnkoKSB7XG4gICAgc3VwZXIuZW50cnkoKTtcbiAgICB0aGlzLl9mcmFnbWVudC5tYWtlVW5kcmFnZ2FibGUoKTtcbiAgICBhcHAudGlja2VyLmFkZCh0aGlzLl9wcmV2ZW50TW92ZW1lbnQpO1xuICAgIHRoaXMuX2ZyYWdtZW50LmRpc3BhdGNoQW5jaG9yZWQoKTtcbiAgfVxuXG4gIHRvZ2dsZURyYWcoKSB7XG4gICAgYXBwLnRpY2tlci5yZW1vdmUodGhpcy5fcHJldmVudE1vdmVtZW50KTtcbiAgfVxuXG4gIHByZXZlbnRNb3ZlbWVudCgpIHtcbiAgICBjb25zdCBzY2FsZSA9IE1vZGVsLnNjYWxlO1xuICAgIHRoaXMuX2ZyYWdtZW50LnZpZXcueCA9IHRoaXMuX2ZyYWdtZW50LmFuY2hvclBvc2l0aW9uLnggKiBzY2FsZTtcbiAgICB0aGlzLl9mcmFnbWVudC52aWV3LnkgPSB0aGlzLl9mcmFnbWVudC5hbmNob3JQb3NpdGlvbi55ICogc2NhbGU7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBwdWJsaWMvc3JjL2ZyYWdtZW50cy9zdGF0ZXMvRnJhZ21lbnRTdGF0ZUFuY2hvcmVkLmpzIiwiaW1wb3J0IEJhc2VGcmFnbWVudFN0YXRlIGZyb20gXCIuL0Jhc2VGcmFnbWVudFN0YXRlXCI7XG5pbXBvcnQgRnJhZ21lbnRTdGF0ZXNGYWN0b3J5IGZyb20gXCIuL0ZyYWdtZW50U3RhdGVzRmFjdG9yeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmFnbWVudFN0YXRlRHJhZ2dhYmxlIGV4dGVuZHMgQmFzZUZyYWdtZW50U3RhdGUge1xuICBlbnRyeSgpIHtcbiAgICBzdXBlci5lbnRyeSgpO1xuICAgIHRoaXMuX2ZyYWdtZW50Lm1ha2VEcmFnZ2FibGUoKTtcbiAgfVxuXG4gIHRvZ2dsZURyYWcoKSB7XG4gICAgdGhpcy5fZnJhZ21lbnQuYXBwbHlTdGF0ZShcbiAgICAgIEZyYWdtZW50U3RhdGVzRmFjdG9yeS5nZXRTdGF0ZURyYWdnZWQodGhpcy5fZnJhZ21lbnQsIHRoaXMuX3N0YXRlc0ZhY3RvcnkpXG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHB1YmxpYy9zcmMvZnJhZ21lbnRzL3N0YXRlcy9GcmFnbWVudFN0YXRlRHJhZ2dhYmxlLmpzIiwiaW1wb3J0IEJhc2VGcmFnbWVudFN0YXRlIGZyb20gXCIuL0Jhc2VGcmFnbWVudFN0YXRlXCI7XHJcbmltcG9ydCBNb2RlbCBmcm9tIFwiLi8uLi8uLi9tb2RlbC9Nb2RlbFwiO1xyXG5pbXBvcnQgRnJhZ21lbnRTdGF0ZXNGYWN0b3J5IGZyb20gXCIuL0ZyYWdtZW50U3RhdGVzRmFjdG9yeVwiO1xyXG5pbXBvcnQgYXBwIGZyb20gXCIuLy4uLy4uL2FwcFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJhZ21lbnRTdGF0ZURyYWdnZWQgZXh0ZW5kcyBCYXNlRnJhZ21lbnRTdGF0ZSB7XHJcbiAgY29uc3RydWN0b3IoZnJhZ21lbnQsIHN0YXRlc0ZhY3RvcnkpIHtcclxuICAgIHN1cGVyKGZyYWdtZW50LCBzdGF0ZXNGYWN0b3J5KTtcclxuXHJcbiAgICB0aGlzLl9jaGVja1Bvc2l0aW9uID0gdGhpcy5jaGVja1Bvc2l0aW9uLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBlbnRyeSgpIHtcclxuICAgIHN1cGVyLmVudHJ5KCk7XHJcbiAgICBhcHAudGlja2VyLmFkZCh0aGlzLl9jaGVja1Bvc2l0aW9uKTtcclxuICB9XHJcblxyXG4gIGV4aXQoKSB7XHJcbiAgICBzdXBlci5leGl0KCk7XHJcbiAgICBhcHAudGlja2VyLnJlbW92ZSh0aGlzLl9jaGVja1Bvc2l0aW9uKTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZURyYWcoKSB7XHJcbiAgICB0aGlzLl9mcmFnbWVudC5hcHBseVN0YXRlKFxyXG4gICAgICBGcmFnbWVudFN0YXRlc0ZhY3RvcnkuZ2V0U3RhdGVEcmFnZ2FibGUoXHJcbiAgICAgICAgdGhpcy5fZnJhZ21lbnQsXHJcbiAgICAgICAgdGhpcy5fc3RhdGVzRmFjdG9yeVxyXG4gICAgICApXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tQb3NpdGlvbigpIHtcclxuICAgIGlmIChcclxuICAgICAgTWF0aC5hYnMoXHJcbiAgICAgICAgdGhpcy5fZnJhZ21lbnQudmlldy54IC0gdGhpcy5fZnJhZ21lbnQuYW5jaG9yUG9zaXRpb24ueCAqIE1vZGVsLnNjYWxlXHJcbiAgICAgICkgPiBNb2RlbC5hbmNob3JQcmVjaXNpb25cclxuICAgICkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICBNYXRoLmFicyhcclxuICAgICAgICB0aGlzLl9mcmFnbWVudC52aWV3LnkgLSB0aGlzLl9mcmFnbWVudC5hbmNob3JQb3NpdGlvbi55ICogTW9kZWwuc2NhbGVcclxuICAgICAgKSA+IE1vZGVsLmFuY2hvclByZWNpc2lvblxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9mcmFnbWVudC5hcHBseVN0YXRlKFxyXG4gICAgICBGcmFnbWVudFN0YXRlc0ZhY3RvcnkuZ2V0U3RhdGVBbmNob3JlZChcclxuICAgICAgICB0aGlzLl9mcmFnbWVudCxcclxuICAgICAgICB0aGlzLl9zdGF0ZXNGYWN0b3J5XHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBwdWJsaWMvc3JjL2ZyYWdtZW50cy9zdGF0ZXMvRnJhZ21lbnRTdGF0ZURyYWdnZWQuanMiLCJpbXBvcnQgQmFzZUxheW91dFNldHRpbmdzIGZyb20gXCIuL0Jhc2VMYXlvdXRTZXR0aW5nc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb3Jpem9udGFsTGF5b3V0U2V0dGluZ3MgZXh0ZW5kcyBCYXNlTGF5b3V0U2V0dGluZ3Mge1xuICAvL2VzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICBnZXRSb3dzQnlGcmFnbWVudHNOdW1iZXIoZnJhZ21lbnRzTnVtYmVyKSB7XG4gICAgc3dpdGNoIChmcmFnbWVudHNOdW1iZXIpIHtcbiAgICAgIGNhc2UgMTI6XG4gICAgICAgIHJldHVybiAzO1xuICAgICAgY2FzZSAyMDpcbiAgICAgICAgcmV0dXJuIDQ7XG4gICAgICBjYXNlIDMwOlxuICAgICAgICByZXR1cm4gNTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgfVxuXG4gIC8vZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gIGdldENvbHVtbnNCeUZyYWdtZW50c051bWJlcihmcmFnbWVudHNOdW1iZXIpIHtcbiAgICBzd2l0Y2ggKGZyYWdtZW50c051bWJlcikge1xuICAgICAgY2FzZSAxMjpcbiAgICAgICAgcmV0dXJuIDQ7XG4gICAgICBjYXNlIDIwOlxuICAgICAgICByZXR1cm4gNTtcbiAgICAgIGNhc2UgMzA6XG4gICAgICAgIHJldHVybiA2O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHNjYWxlKCkge1xuICAgIHJldHVybiB0aGlzLnJlbmRlcmVyRGltZW5zaW9ucy53aWR0aCAvIHRoaXMuaW1hZ2VEaW1lbnNpb25zLndpZHRoO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcHVibGljL3NyYy9tb2RlbC9Ib3Jpem9udGFsTGF5b3V0U2V0dGluZ3MuanMiLCJpbXBvcnQgQmFzZUxheW91dFNldHRpbmdzIGZyb20gXCIuL0Jhc2VMYXlvdXRTZXR0aW5nc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZXJ0aWNhbExheW91dFNldHRpbmdzIGV4dGVuZHMgQmFzZUxheW91dFNldHRpbmdzIHtcbiAgLy9lc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgZ2V0Um93c0J5RnJhZ21lbnRzTnVtYmVyKGZyYWdtZW50c051bWJlcikge1xuICAgIHN3aXRjaCAoZnJhZ21lbnRzTnVtYmVyKSB7XG4gICAgICBjYXNlIDEyOlxuICAgICAgICByZXR1cm4gNDtcbiAgICAgIGNhc2UgMjA6XG4gICAgICAgIHJldHVybiA1O1xuICAgICAgY2FzZSAzMDpcbiAgICAgICAgcmV0dXJuIDY7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG4gIH1cblxuICAvL2VzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICBnZXRDb2x1bW5zQnlGcmFnbWVudHNOdW1iZXIoZnJhZ21lbnRzTnVtYmVyKSB7XG4gICAgc3dpdGNoIChmcmFnbWVudHNOdW1iZXIpIHtcbiAgICAgIGNhc2UgMTI6XG4gICAgICAgIHJldHVybiAzO1xuICAgICAgY2FzZSAyMDpcbiAgICAgICAgcmV0dXJuIDQ7XG4gICAgICBjYXNlIDMwOlxuICAgICAgICByZXR1cm4gNTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgfVxuXG4gIGdldCBzY2FsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZW5kZXJlckRpbWVuc2lvbnMuaGVpZ2h0IC8gdGhpcy5pbWFnZURpbWVuc2lvbnMuaGVpZ2h0O1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcHVibGljL3NyYy9tb2RlbC9WZXJ0aWNhbExheW91dFNldHRpbmdzLmpzIiwiaW1wb3J0IHsgU3ByaXRlLCBHcmFwaGljcywgTG9hZGVyLCBUZXh0LCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiLi8uLi9hbGlhc2VzXCI7XG5pbXBvcnQgeyBFVkVOVF9QTEFZIH0gZnJvbSBcIi4vLi4vZXZlbnRzXCI7XG5pbXBvcnQgVGlua01hbmFnZXIgZnJvbSBcIi4vLi4vVGlua01hbmFnZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheVBvcHVwIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl92aWV3ID0gbmV3IFNwcml0ZSgpO1xuICAgIHRoaXMuX2xhYmVsID0gbmV3IFRleHQoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgY29uc3Qgcm91bmRlZFJlY3QgPSBuZXcgR3JhcGhpY3MoKTtcbiAgICByb3VuZGVkUmVjdC5saW5lU3R5bGUoMSwgMHgwMDAwMDAsIDEpO1xuICAgIHJvdW5kZWRSZWN0LmJlZ2luRmlsbCgweGZmZmZmZik7XG4gICAgcm91bmRlZFJlY3QuZHJhd1JvdW5kZWRSZWN0KDAsIDAsIDYwMCwgMzAwLCAxMCk7XG4gICAgcm91bmRlZFJlY3QuZW5kRmlsbCgpO1xuICAgIHRoaXMuX3ZpZXcuYWRkQ2hpbGQocm91bmRlZFJlY3QpO1xuICAgIHRoaXMuX3ZpZXcuYWRkQ2hpbGQodGhpcy5fbGFiZWwpO1xuICAgIHRoaXMuX2J0biA9IFRpbmtNYW5hZ2VyLmNyZWF0ZUJ1dHRvbihbTG9hZGVyLnJlc291cmNlcy5idG4udGV4dHVyZV0pO1xuICAgIHRoaXMuX2J0bi5yZWxlYXNlID0gKCkgPT4ge1xuICAgICAgdGhpcy5lbWl0KEVWRU5UX1BMQVkpO1xuICAgIH07XG4gICAgdGhpcy5fdmlldy5hZGRDaGlsZCh0aGlzLl9idG4pO1xuICB9XG5cbiAgc2hvdygpIHtcbiAgICB0aGlzLl92aWV3LnZpc2libGUgPSB0cnVlO1xuICB9XG5cbiAgaGlkZSgpIHtcbiAgICB0aGlzLl92aWV3LnZpc2libGUgPSBmYWxzZTtcbiAgfVxuXG4gIHNldCBtZXNzYWdlKHR4dCkge1xuICAgIHRoaXMuX2xhYmVsLnRleHQgPSB0eHQ7XG4gIH1cblxuICBnZXQgdmlldygpIHtcbiAgICByZXR1cm4gdGhpcy5fdmlldztcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHB1YmxpYy9zcmMvcG9wdXBzL1BsYXlQb3B1cC5qcyIsImltcG9ydCBCYXNlR2FtZVN0YXRlIGZyb20gXCIuL0Jhc2VHYW1lU3RhdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVN0YXRlSW5pdCBleHRlbmRzIEJhc2VHYW1lU3RhdGUge1xuICBlbnRyeSgpIHtcbiAgICBzdXBlci5lbnRyeSgpO1xuICAgIHRoaXMuX2dhbWUuaW5pdE1vZGVsKCk7XG4gICAgdGhpcy5fZ2FtZS5pbml0UG9wdXBzKCk7XG4gICAgLy8gdGhpcy5fZ2FtZS5pbml0QmFja2dyb3VuZCgpO1xuICAgIHRoaXMuX2dhbWUuYXBwbHlTdGF0ZSh0aGlzLl9zdGF0ZXNGYWN0b3J5LmdldFN0YXRlUmVhZHlUb1BsYXkodGhpcy5fZ2FtZSkpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcHVibGljL3NyYy9zdGF0ZXMvR2FtZVN0YXRlSW5pdC5qcyIsImltcG9ydCBCYXNlR2FtZVN0YXRlIGZyb20gXCIuL0Jhc2VHYW1lU3RhdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVN0YXRlTG9hZGluZyBleHRlbmRzIEJhc2VHYW1lU3RhdGUge1xuICBlbnRyeSgpIHtcbiAgICBzdXBlci5lbnRyeSgpO1xuICAgIHRoaXMuX2dhbWUubG9hZEltYWdlKCk7XG4gIH1cblxuICBvbkxvYWRDb21wbGV0ZSgpIHtcbiAgICBzdXBlci5vbkxvYWRDb21wbGV0ZSgpO1xuICAgIHRoaXMuX2dhbWUuYXBwbHlTdGF0ZSh0aGlzLl9zdGF0ZXNGYWN0b3J5LmdldFN0YXRlSW5pdCh0aGlzLl9nYW1lKSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBwdWJsaWMvc3JjL3N0YXRlcy9HYW1lU3RhdGVMb2FkaW5nLmpzIiwiaW1wb3J0IEJhc2VHYW1lU3RhdGUgZnJvbSBcIi4vQmFzZUdhbWVTdGF0ZVwiO1xuaW1wb3J0IHsgTUVTU0FHRV9MT1NFIH0gZnJvbSBcIi4vLi4vbG9jYWxpemF0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVTdGF0ZUxvc2UgZXh0ZW5kcyBCYXNlR2FtZVN0YXRlIHtcbiAgZW50cnkoKSB7XG4gICAgc3VwZXIuZW50cnkoKTtcbiAgICB0aGlzLl9nYW1lLnNob3dQbGF5UG9wdXAoTUVTU0FHRV9MT1NFKTtcbiAgfVxuXG4gIGV4aXQoKSB7XG4gICAgc3VwZXIuZXhpdCgpO1xuICAgIHRoaXMuX2dhbWUuaGlkZVBsYXlQb3B1cCgpO1xuICB9XG5cbiAgc3RhcnRHYW1lcGxheSgpIHtcbiAgICBzdXBlci5zdGFydEdhbWVwbGF5KCk7XG4gICAgdGhpcy5fZ2FtZS5hcHBseVN0YXRlKHRoaXMuX3N0YXRlc0ZhY3RvcnkuZ2V0U3RhdGVQbGF5aW5nKHRoaXMuX2dhbWUpKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHB1YmxpYy9zcmMvc3RhdGVzL0dhbWVTdGF0ZUxvc2UuanMiLCJpbXBvcnQgQmFzZUdhbWVTdGF0ZSBmcm9tIFwiLi9CYXNlR2FtZVN0YXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVTdGF0ZVBsYXlpbmcgZXh0ZW5kcyBCYXNlR2FtZVN0YXRlIHtcbiAgZW50cnkoKSB7XG4gICAgc3VwZXIuZW50cnkoKTtcbiAgICB0aGlzLl9nYW1lLnJlc2V0VmlldygpO1xuICAgIHRoaXMuX2dhbWUuaW5pdEJhY2tncm91bmQoKTtcbiAgICB0aGlzLl9nYW1lLnNldHVwRnJhZ21lbnRzKCk7XG4gIH1cblxuICBzdG9wR2FtZXBsYXkoaXNXaW4pIHtcbiAgICBzdXBlci5zdG9wR2FtZXBsYXkoKTtcblxuICAgIGlmIChpc1dpbikge1xuICAgICAgdGhpcy5fZ2FtZS5hcHBseVN0YXRlKHRoaXMuX3N0YXRlc0ZhY3RvcnkuZ2V0U3RhdGVXaW4odGhpcy5fZ2FtZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9nYW1lLmFwcGx5U3RhdGUodGhpcy5fc3RhdGVzRmFjdG9yeS5nZXRTdGF0ZUxvc2UodGhpcy5fZ2FtZSkpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHB1YmxpYy9zcmMvc3RhdGVzL0dhbWVTdGF0ZVBsYXlpbmcuanMiLCJpbXBvcnQgQmFzZUdhbWVTdGF0ZSBmcm9tIFwiLi9CYXNlR2FtZVN0YXRlXCI7XG5pbXBvcnQgeyBNRVNTQUdFX1BMQVkgfSBmcm9tIFwiLi8uLi9sb2NhbGl6YXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVN0YXRlUmVhZHlUb1BsYXkgZXh0ZW5kcyBCYXNlR2FtZVN0YXRlIHtcbiAgZW50cnkoKSB7XG4gICAgc3VwZXIuZW50cnkoKTtcbiAgICB0aGlzLl9nYW1lLnNob3dQbGF5UG9wdXAoTUVTU0FHRV9QTEFZKTtcbiAgfVxuXG4gIGV4aXQoKSB7XG4gICAgc3VwZXIuZXhpdCgpO1xuICAgIHRoaXMuX2dhbWUuaGlkZVBsYXlQb3B1cCgpO1xuICB9XG5cbiAgc3RhcnRHYW1lcGxheSgpIHtcbiAgICBzdXBlci5zdGFydEdhbWVwbGF5KCk7XG4gICAgdGhpcy5fZ2FtZS5hcHBseVN0YXRlKHRoaXMuX3N0YXRlc0ZhY3RvcnkuZ2V0U3RhdGVQbGF5aW5nKHRoaXMuX2dhbWUpKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHB1YmxpYy9zcmMvc3RhdGVzL0dhbWVTdGF0ZVJlYWR5VG9QbGF5LmpzIiwiaW1wb3J0IEJhc2VHYW1lU3RhdGUgZnJvbSBcIi4vQmFzZUdhbWVTdGF0ZVwiO1xuaW1wb3J0IHsgTUVTU0FHRV9XSU4gfSBmcm9tIFwiLi8uLi9sb2NhbGl6YXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVN0YXRlV2luIGV4dGVuZHMgQmFzZUdhbWVTdGF0ZSB7XG4gIGVudHJ5KCkge1xuICAgIHN1cGVyLmVudHJ5KCk7XG4gICAgdGhpcy5fZ2FtZS5zaG93UGxheVBvcHVwKE1FU1NBR0VfV0lOKTtcbiAgfVxuXG4gIGV4aXQoKSB7XG4gICAgc3VwZXIuZXhpdCgpO1xuICAgIHRoaXMuX2dhbWUuaGlkZVBsYXlQb3B1cCgpO1xuICB9XG5cbiAgc3RhcnRHYW1lcGxheSgpIHtcbiAgICBzdXBlci5zdGFydEdhbWVwbGF5KCk7XG4gICAgdGhpcy5fZ2FtZS5hcHBseVN0YXRlKHRoaXMuX3N0YXRlc0ZhY3RvcnkuZ2V0U3RhdGVQbGF5aW5nKHRoaXMuX2dhbWUpKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHB1YmxpYy9zcmMvc3RhdGVzL0dhbWVTdGF0ZVdpbi5qcyIsImltcG9ydCB7IExvYWRlciB9IGZyb20gXCIuL2FsaWFzZXNcIjtcbmltcG9ydCBNb2RlbCBmcm9tIFwiLi9tb2RlbC9Nb2RlbFwiO1xuaW1wb3J0IEZyYWdtZW50c0ZhY3RvcnkgZnJvbSBcIi4vZnJhZ21lbnRzL0ZyYWdtZW50c0ZhY3RvcnlcIjtcbmltcG9ydCBGcmFnbWVudHNNYW5hZ2VyIGZyb20gXCIuL2ZyYWdtZW50cy9GcmFnbWVudHNNYW5hZ2VyXCI7XG5pbXBvcnQgYXBwIGZyb20gXCIuL2FwcFwiO1xuaW1wb3J0IHsgRVZFTlRfQUxMX0ZSQUdNRU5UU19BTkNIT1JFRCwgRVZFTlRfUExBWSB9IGZyb20gXCIuL2V2ZW50c1wiO1xuaW1wb3J0IEdhbWVWaWV3IGZyb20gXCIuL0dhbWVWaWV3XCI7XG5pbXBvcnQgR2FtZVN0YXRlc0ZhY3RvcnkgZnJvbSBcIi4vc3RhdGVzL0dhbWVTdGF0ZXNGYWN0b3J5XCI7XG5cbmNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9zdGF0ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl92aWV3ID0gbmV3IEdhbWVWaWV3KGFwcC5zdGFnZSk7XG4gICAgdGhpcy5fdmlldy5vbihFVkVOVF9QTEFZLCB0aGlzLnN0YXJ0R2FtZXBsYXkuYmluZCh0aGlzKSk7XG4gIH1cblxuICBhcHBseVN0YXRlKG5ld1N0YXRlKSB7XG4gICAgaWYgKHRoaXMuX3N0YXRlKSB0aGlzLl9zdGF0ZS5leGl0KCk7XG5cbiAgICB0aGlzLl9zdGF0ZSA9IG5ld1N0YXRlO1xuICAgIHRoaXMuX3N0YXRlLmVudHJ5KCk7XG4gIH1cblxuICBsb2FkSW1hZ2UoKSB7XG4gICAgTG9hZGVyLmFkZChbXG4gICAgICB7IG5hbWU6IFwibWFpblwiLCB1cmw6IFwiaW1nL2ltYWdlLmpwZ1wiIH0sXG4gICAgICB7IG5hbWU6IFwiYnRuXCIsIHVybDogXCJpbWcvcGxheS1idXR0b24uanBnXCIgfVxuICAgIF0pLmxvYWQoKGxvYWRlciwgcmVzb3VyY2VzKSA9PiB7XG4gICAgICB0aGlzLl9zdGF0ZS5vbkxvYWRDb21wbGV0ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcbiAgaW5pdE1vZGVsKCkge1xuICAgIGNvbnN0IG1haW5UZXh0dXJlID0gTG9hZGVyLnJlc291cmNlcy5tYWluLnRleHR1cmU7XG4gICAgTW9kZWwuaW5pdExheW91dFNldHRpbmdzQnlJbWFnZURpbWVuc2lvbnMoXG4gICAgICB7IHdpZHRoOiBtYWluVGV4dHVyZS53aWR0aCwgaGVpZ2h0OiBtYWluVGV4dHVyZS5oZWlnaHQgfSxcbiAgICAgIHsgd2lkdGg6IGFwcC5yZW5kZXJlci53aWR0aCwgaGVpZ2h0OiBhcHAucmVuZGVyZXIuaGVpZ2h0IH1cbiAgICApO1xuICB9XG5cbiAgaW5pdFBvcHVwcygpIHtcbiAgICB0aGlzLl92aWV3LmluaXRQbGF5UG9wdXAoKTtcbiAgfVxuXG4gIGluaXRCYWNrZ3JvdW5kKCkge1xuICAgIHRoaXMuX3ZpZXcuaW5pdEJhY2tncm91bmQoTG9hZGVyLnJlc291cmNlcy5tYWluLnRleHR1cmUsIE1vZGVsLnNjYWxlKTtcbiAgfVxuXG4gIHJlc2V0VmlldygpIHtcbiAgICB0aGlzLl92aWV3LnJlc2V0KCk7XG4gIH1cblxuICBzZXR1cEZyYWdtZW50cygpIHtcbiAgICBjb25zdCBmcmFnbWVudHMgPSBGcmFnbWVudHNGYWN0b3J5LmdldEZyYWdtZW50c0ZvclRleHR1cmUoXG4gICAgICBMb2FkZXIucmVzb3VyY2VzLm1haW4udGV4dHVyZVxuICAgICk7XG4gICAgdGhpcy5fdmlldy5hZGRGcmFnbWVudHMoZnJhZ21lbnRzLCBNb2RlbC5zY2FsZSk7XG5cbiAgICBGcmFnbWVudHNNYW5hZ2VyLnJlc2V0KCk7XG4gICAgRnJhZ21lbnRzTWFuYWdlci5mcmFnbWVudHMgPSBmcmFnbWVudHM7XG4gICAgRnJhZ21lbnRzTWFuYWdlci5vbmNlKEVWRU5UX0FMTF9GUkFHTUVOVFNfQU5DSE9SRUQsICgpID0+IHtcbiAgICAgIHRoaXMuX3N0YXRlLnN0b3BHYW1lcGxheSgpO1xuICAgIH0pO1xuICB9XG5cbiAgc2hvd1BsYXlQb3B1cChtZXNzYWdlKSB7XG4gICAgdGhpcy5fdmlldy5zaG93UGxheVBvcHVwKG1lc3NhZ2UpO1xuICB9XG5cbiAgaGlkZVBsYXlQb3B1cCgpIHtcbiAgICB0aGlzLl92aWV3LmhpZGVQbGF5UG9wdXAoKTtcbiAgfVxuXG4gIHN0YXJ0R2FtZXBsYXkoKSB7XG4gICAgdGhpcy5fc3RhdGUuc3RhcnRHYW1lcGxheSgpO1xuICB9XG5cbiAgc3RvcEdhbWVwbGF5KCkge1xuICAgIHRoaXMuX3N0YXRlLnN0b3BHYW1lcGxheSgpO1xuICB9XG59XG5cbmNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpO1xuZ2FtZS5hcHBseVN0YXRlKEdhbWVTdGF0ZXNGYWN0b3J5LmdldFN0YXRlTG9hZGluZyhnYW1lKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcHVibGljL3NyYy9pbmRleC5qcyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQURBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTs7Ozs7O0FBbkJBOzs7Ozs7Ozs7Ozs7QUNBQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFJQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFHQTs7O0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7Ozs7OztBQUdBOzs7Ozs7Ozs7Ozs7O0FDckRBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7Ozs7OztBQW5CQTs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7OztBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7Ozs7O0FBR0E7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBOzs7Ozs7QUFmQTs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFLQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7QUEvQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7QUMzREE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7OztBQUlBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcEJBO0FBcUJBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7OztBQzNEQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7QUMxREE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU1BO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7OztBQTlDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFGQTtBQUdBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUdBOzs7Ozs7QUFWQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFIQTtBQUlBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQU1BOzs7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQU1BOzs7Ozs7QUFqREE7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7OztBQUVBO0FBQ0E7QUFDQTs7Ozs7O0FBL0JBOzs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVVBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7OztBQS9CQTs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7Ozs7O0FBcENBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQVBBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFUQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFkQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFoQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBZEE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBZEE7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFJQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7OztBQUdBOzs7OyIsInNvdXJjZVJvb3QiOiIifQ==