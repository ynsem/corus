import u from '../src/core/util';

describe('ajax', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('login', () => {
    const admin = {
      login: 'admin',
      password: '12345',
    };

    fetch.mockResponseOnce(JSON.stringify({ data: { name: 'ЭТО АДМИН' } }));

    u.ajax('user/login', admin).then((res) => {
      expect(res.data.name).toEqual('ЭТО АДМИН');
    });

    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][0]).toEqual('http://blackbeltroom.ru/my/api/korus/user/login');
  });
});

describe('isType', () => {
  test('isStr', () => {
    expect(u.isStr('str')).toBeTruthy();
    expect(u.isStr()).toBeTruthy();
    expect(u.isStr(true)).toBeFalsy();
    expect(u.isStr(111)).toBeFalsy();
    expect(u.isStr(null)).toBeFalsy();
    expect(u.isStr(undefined)).toBeTruthy();
    expect(u.isStr(NaN)).toBeFalsy();
    expect(u.isStr(Infinity)).toBeFalsy();
    expect(u.isStr({ a: 1, b: 2 })).toBeFalsy();
    expect(u.isStr([1, 2])).toBeFalsy();
  });

  test('isNumTest', () => {
    expect(u.isNum(111)).toBeTruthy();
    expect(u.isNum()).toBeFalsy();
    expect(u.isNum(true)).toBeFalsy();
    expect(u.isNum('str')).toBeFalsy();
    expect(u.isNum(null)).toBeFalsy();
    expect(u.isNum(undefined)).toBeFalsy();
    expect(u.isNum(NaN)).toBeFalsy();
    expect(u.isNum(Infinity)).toBeTruthy();
    expect(u.isNum({ a: 1, b: 2 })).toBeFalsy();
    expect(u.isNum([1, 2])).toBeFalsy();
  });

  test('isBooleanTest', () => {
    expect(u.isBoolean(false)).toBeTruthy();
    expect(u.isBoolean()).toBeFalsy();
    expect(u.isBoolean(111)).toBeFalsy();
    expect(u.isBoolean('str')).toBeFalsy();
    expect(u.isBoolean(null)).toBeFalsy();
    expect(u.isBoolean(undefined)).toBeFalsy();
    expect(u.isBoolean(NaN)).toBeFalsy();
    expect(u.isBoolean(Infinity)).toBeFalsy();
    expect(u.isBoolean({ a: 1, b: 2 })).toBeFalsy();
    expect(u.isBoolean([1, 2])).toBeFalsy();
  });

  test('isNullTest', () => {
    expect(u.isNull(null)).toBeTruthy();
    expect(u.isNull()).toBeFalsy();
    expect(u.isNull(111)).toBeFalsy();
    expect(u.isNull('str')).toBeFalsy();
    expect(u.isNull(false)).toBeFalsy();
    expect(u.isNull(undefined)).toBeFalsy();
    expect(u.isNull(NaN)).toBeFalsy();
    expect(u.isNull(Infinity)).toBeFalsy();
    expect(u.isNull({ a: 1, b: 2 })).toBeFalsy();
    expect(u.isNull([1, 2])).toBeFalsy();
  });

  test('isNanTest', () => {
    expect(u.isNan(NaN)).toBeTruthy();
    expect(u.isNan()).toBeFalsy();
    expect(u.isNan(111)).toBeFalsy();
    expect(u.isNan('str')).toBeFalsy();
    expect(u.isNan(false)).toBeFalsy();
    expect(u.isNan(undefined)).toBeFalsy();
    expect(u.isNan(null)).toBeFalsy();
    expect(u.isNan(Infinity)).toBeFalsy();
    expect(u.isNan({ a: 1, b: 2 })).toBeFalsy();
    expect(u.isNan([1, 2])).toBeFalsy();
  });

  test('isUndefTest', () => {
    expect(u.isUndef(undefined)).toBeTruthy();
    expect(u.isUndef()).toBeTruthy();
    expect(u.isUndef(111)).toBeFalsy();
    expect(u.isUndef('str')).toBeFalsy();
    expect(u.isUndef(false)).toBeFalsy();
    expect(u.isUndef(NaN)).toBeFalsy();
    expect(u.isUndef(null)).toBeFalsy();
    expect(u.isUndef(Infinity)).toBeFalsy();
    expect(u.isUndef({ a: 1, b: 2 })).toBeFalsy();
    expect(u.isUndef([1, 2])).toBeFalsy();
  });

  test('isObjTest', () => {
    expect(u.isObj({ a: 1, b: 2 })).toBeTruthy();
    expect(u.isObj()).toBeFalsy();
    expect(u.isObj(111)).toBeFalsy();
    expect(u.isObj('str')).toBeFalsy();
    expect(u.isObj(false)).toBeFalsy();
    expect(u.isObj(NaN)).toBeFalsy();
    expect(u.isObj(null)).toBeFalsy();
    expect(u.isObj(Infinity)).toBeFalsy();
    expect(u.isObj(undefined)).toBeFalsy();
    expect(u.isObj([1, 2])).toBeFalsy();
  });
});

describe('toSomeType', () => {
  test('toStrTest', () => {
    expect(u.toStr({ a: 1, b: 2 })).toBe('[object Object]');
    expect(u.toStr()).toBe('');
    expect(u.toStr(111)).toBe('111');
    expect(u.toStr('str')).toBe('str');
    expect(u.toStr(false)).toBe('false');
    expect(u.toStr(NaN)).toBe('NaN');
    expect(u.toStr(null)).toBe('null');
    expect(u.toStr(Infinity)).toBe('Infinity');
    expect(u.toStr(undefined)).toBe('');
    expect(u.toStr([1, 2])).toBe('1,2');
  });

  test('toNumTest', () => {
    expect(u.toNum({ a: 1, b: 2 })).toBe(NaN);
    expect(u.toNum()).toBe(NaN);
    expect(u.toNum(111)).toBe(111);
    expect(u.toNum('str')).toBe(NaN);
    expect(u.toNum(false)).toBe(0);
    expect(u.toNum(NaN)).toBe(NaN);
    expect(u.toNum(null)).toBe(0);
    expect(u.toNum(Infinity)).toBe(Infinity);
    expect(u.toNum(undefined)).toBe(NaN);
    expect(u.toNum([1, 2])).toBe(NaN);
  });

  test('toBooleanTest', () => {
    expect(u.toBoolean({ a: 1, b: 2 })).toBe(true);
    expect(u.toBoolean()).toBe(false);
    expect(u.toBoolean(111)).toBe(true);
    expect(u.toBoolean('str')).toBe(true);
    expect(u.toBoolean(false)).toBe(false);
    expect(u.toBoolean(NaN)).toBe(false);
    expect(u.toBoolean(null)).toBe(false);
    expect(u.toBoolean(Infinity)).toBe(true);
    expect(u.toBoolean(undefined)).toBe(false);
    expect(u.toBoolean([1, 2])).toBe(true);
  });
});
