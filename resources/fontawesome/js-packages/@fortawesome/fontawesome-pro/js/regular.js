/*!
 * Font Awesome Pro 5.13.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license (Commercial License)
 */
(function () {
  'use strict';

  var _WINDOW = {};
  var _DOCUMENT = {};

  try {
    if (typeof window !== 'undefined') _WINDOW = window;
    if (typeof document !== 'undefined') _DOCUMENT = document;
  } catch (e) {}

  var _ref = _WINDOW.navigator || {},
      _ref$userAgent = _ref.userAgent,
      userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;

  var WINDOW = _WINDOW;
  var DOCUMENT = _DOCUMENT;
  var IS_BROWSER = !!WINDOW.document;
  var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
  var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

  var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
  var PRODUCTION = function () {
    try {
      return "production" === 'production';
    } catch (e) {
      return false;
    }
  }();

  function bunker(fn) {
    try {
      fn();
    } catch (e) {
      if (!PRODUCTION) {
        throw e;
      }
    }
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  var w = WINDOW || {};
  if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
  if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
  if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
  if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
  var namespace = w[NAMESPACE_IDENTIFIER];

  function defineIcons(prefix, icons) {
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var _params$skipHooks = params.skipHooks,
        skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
    var normalized = Object.keys(icons).reduce(function (acc, iconName) {
      var icon = icons[iconName];
      var expanded = !!icon.icon;

      if (expanded) {
        acc[icon.iconName] = icon.icon;
      } else {
        acc[iconName] = icon;
      }

      return acc;
    }, {});

    if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
      namespace.hooks.addPack(prefix, normalized);
    } else {
      namespace.styles[prefix] = _objectSpread2(_objectSpread2({}, namespace.styles[prefix] || {}), normalized);
    }
    /**
     * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
     * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
     * for `fas` so we'll easy the upgrade process for our users by automatically defining
     * this as well.
     */


    if (prefix === 'fas') {
      defineIcons('fa', icons);
    }
  }

  var icons = {
    "abacus": [576, 512, [], "f640", "M552 0c-13.25 0-24 10.74-24 24v48h-48V48c0-8.84-7.16-16-16-16h-16c-8.84 0-16 7.16-16 16v24H240V48c0-8.84-7.16-16-16-16h-16c-8.84 0-16 7.16-16 16v24h-48V48c0-8.84-7.16-16-16-16h-16c-8.84 0-16 7.16-16 16v24H48V24C48 10.74 37.25 0 24 0S0 10.74 0 24v476c0 6.63 5.37 12 12 12h24c6.63 0 12-5.37 12-12v-60h48v24c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-24h48v24c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-24h192v24c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-24h48v60c0 6.63 5.37 12 12 12h24c6.63 0 12-5.37 12-12V24c0-13.26-10.75-24-24-24zM96 120v24c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-24h48v24c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-24h192v24c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-24h48v112H336v-24c0-8.84-7.16-16-16-16h-16c-8.84 0-16 7.16-16 16v24h-48v-24c0-8.84-7.16-16-16-16h-16c-8.84 0-16 7.16-16 16v24h-48v-24c0-8.84-7.16-16-16-16h-16c-8.84 0-16 7.16-16 16v24H48V120h48zm384 272v-24c0-8.84-7.16-16-16-16h-16c-8.84 0-16 7.16-16 16v24H240v-24c0-8.84-7.16-16-16-16h-16c-8.84 0-16 7.16-16 16v24h-48v-24c0-8.84-7.16-16-16-16h-16c-8.84 0-16 7.16-16 16v24H48V280h48v24c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-24h48v24c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-24h48v24c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-24h192v112h-48z"]
  };

  bunker(function () {
    defineIcons('far', icons);
  });

}());
