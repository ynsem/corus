;(function UtilTest() {
  var util = Util;

  // проверки типов
  var isStrTest = function isStrTest() {
    console.info('isStrTest');

    console.warn(util.isStr('str'));
    console.warn(util.isStr());
    console.error(util.isStr(true));
    console.error(util.isStr(111));
    console.error(util.isStr(null));
    console.warn(util.isStr(undefined));
    console.error(util.isStr(NaN));
    console.error(util.isStr(Infinity));
    console.error(util.isStr({ a: 1, b: 2 }));
    console.error(util.isStr([1, 2]));

    console.log('\n');
  };

  var isNumTest = function isNumTest() {
    console.info('isNumTest');

    console.warn(util.isNum(111));
    console.error(util.isNum());
    console.error(util.isNum(true));
    console.error(util.isNum('str'));
    console.error(util.isNum(null));
    console.error(util.isNum(undefined));
    console.error(util.isNum(NaN));
    console.warn(util.isNum(Infinity));
    console.error(util.isNum({ a: 1, b: 2 }));
    console.error(util.isNum([1, 2]));

    console.log('\n');
  };

  var isBooleanTest = function isBooleanTest() {
    console.info('isBooleanTest');

    console.warn(util.isBoolean(false));
    console.error(util.isBoolean());
    console.error(util.isBoolean(111));
    console.error(util.isBoolean('str'));
    console.error(util.isBoolean(null));
    console.error(util.isBoolean(undefined));
    console.error(util.isBoolean(NaN));
    console.error(util.isBoolean(Infinity));
    console.error(util.isBoolean({ a: 1, b: 2 }));
    console.error(util.isBoolean([1, 2]));

    console.log('\n');
  };

  var isNullTest = function isNullTest() {
    console.info('isNullTest');

    console.warn(util.isNull(null));
    console.error(util.isNull());
    console.error(util.isNull(111));
    console.error(util.isNull('str'));
    console.error(util.isNull(false));
    console.error(util.isNull(undefined));
    console.error(util.isNull(NaN));
    console.error(util.isNull(Infinity));
    console.error(util.isNull({ a: 1, b: 2 }));
    console.error(util.isNull([1, 2]));

    console.log('\n');
  };

  var isNanTest = function isNanTest() {
    console.info('isNanTest');

    console.warn(util.isNan(NaN));
    console.error(util.isNan());
    console.error(util.isNan(111));
    console.error(util.isNan('str'));
    console.error(util.isNan(false));
    console.error(util.isNan(undefined));
    console.error(util.isNan(null));
    console.error(util.isNan(Infinity));
    console.error(util.isNan({ a: 1, b: 2 }));
    console.error(util.isNan([1, 2]));

    console.log('\n');
  };

  var isUndefTest = function isUndefTest() {
    console.info('isUndefTest');

    console.warn(util.isUndef(undefined));
    console.warn(util.isUndef());
    console.error(util.isUndef(111));
    console.error(util.isUndef('str'));
    console.error(util.isUndef(false));
    console.error(util.isUndef(NaN));
    console.error(util.isUndef(null));
    console.error(util.isUndef(Infinity));
    console.error(util.isUndef({ a: 1, b: 2 }));
    console.error(util.isUndef([1, 2]));

    console.log('\n');
  };

  var isObjTest = function isObjTest() {
    console.info('isObjTest');

    console.warn(util.isObj({ a: 1, b: 2 }));
    console.error(util.isObj());
    console.error(util.isObj(111));
    console.error(util.isObj('str'));
    console.error(util.isObj(false));
    console.error(util.isObj(NaN));
    console.error(util.isObj(null));
    console.error(util.isObj(Infinity));
    console.error(util.isObj(undefined));
    console.error(util.isObj([1, 2]));

    console.log('\n');
  };

  // преобразования типов

  var toStrTest = function toStrTest() {
    console.info('toStrTest');

    console.error(util.toStr({ a: 1, b: 2 }));
    console.warn(util.toStr());
    console.info(util.toStr(111));
    console.info(util.toStr('str'));
    console.info(util.toStr(false));
    console.info(util.toStr(NaN));
    console.info(util.toStr(null));
    console.info(util.toStr(Infinity));
    console.warn(util.toStr(undefined));
    console.info(util.toStr([1, 2]));

    console.log('\n');
  };

  var toNumTest = function toNumTest() {
    console.info('toNumTest');

    console.warn(util.toNum({ a: 1, b: 2 }));
    console.warn(util.toNum());
    console.info(util.toNum(111));
    console.warn(util.toNum('str'));
    console.info(util.toNum(false));
    console.warn(util.toNum(NaN));
    console.info(util.toNum(null));
    console.warn(util.toNum(Infinity));
    console.warn(util.toNum(undefined));
    console.warn(util.toNum([1, 2]));

    console.log('\n');
  };

  var toBooleanTest = function toBooleanTest() {
    console.info('toBooleanTest');

    console.warn(util.toBoolean({ a: 1, b: 2 }));
    console.error(util.toBoolean());
    console.warn(util.toBoolean(111));
    console.warn(util.toBoolean('str'));
    console.error(util.toBoolean(false));
    console.error(util.toBoolean(NaN));
    console.error(util.toBoolean(null));
    console.warn(util.toBoolean(Infinity));
    console.error(util.toBoolean(undefined));
    console.warn(util.toBoolean([1, 2]));

    console.log('\n');
  };

  // toNullTest();
  // toNanTest();
  // toUndefTest();
  // тестировать нет смысла

  isStrTest();
  isNumTest();
  isBooleanTest();
  isNullTest();
  isNanTest();
  isUndefTest();
  isObjTest();

  toStrTest();
  toNumTest();
  toBooleanTest();
})();
