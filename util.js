'use strict';

;(function Util() {
  // проверки типов

  var isStr = function isStr(param = '') {
    if (typeof param === 'string') {
      return true;
    }
    return false;
  };

  var isNum = function isNum(param) {
    if (typeof param === 'number' && param === param) {
      return true;
    }
    return false;
  };

  // true вернет true - непонятно это как-то
  var isBoolean = function isBoolean(param) {
    if (typeof param === 'boolean') {
      return true;
    }
    return false;
  };

  var isNull = function isNull(param) {
    if (param === null) {
      return true;
    }
    return false;
  };

  var isNan = function isNan(param) {
    if (param !== param) {
      return true;
    }
    return false;
  };

  var isUndef = function isUndef(param = '') {
    if (typeof param === 'undefined') {
      return true;
    }
    return false;
  };

  var isObj = function isObj(param) {
    if (typeof param === 'object' && param !== null) {
      return true;
    }
    return false;
  };

  // преобразование типов

  var toStr = function toStr(param = '') {
    return String(param);
  };

  var toNum = function toNum(param) {
    return Number(param);
  };

  // строка с нулем тоже true
  var toBoolean = function toBoolean(param) {
    return Boolean(param);
  };

  // заглушка,
  var toObj = function toObj(obj) {
    return obj;
  };

  // заглушки
  var toNull = function toNull() {
    return null;
  };

  var toNan = function toNan() {
    return NaN;
  };

  var toUndef = function toUndef() {
    return undefined;
  };

  window.util = {
    // проверка типов
    isStr,
    isNum,
    isBoolean,
    isNull,
    isNan,
    isUndef,
    isObj,
    // преобразование типов
    toStr,
    toNum,
    toBoolean,
    toObj,
    toNull,
    toNan,
    toUndef,
  };
})();
