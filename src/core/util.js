import * as C from '../core/constants';

let id = 0;

export default class Util {
  // проверки типов
  static isStr(param = '') {
    if (typeof param === 'string') {
      return true;
    }
    return false;
  }

  static isNum(param) {
    if (typeof param === 'number' && param === param) {
      return true;
    }
    return false;
  }

  // true вернет true - непонятно это как-то
  static isBoolean(param) {
    if (typeof param === 'boolean') {
      return true;
    }
    return false;
  }

  static isNull(param) {
    if (param === null) {
      return true;
    }
    return false;
  }

  static isNan(param) {
    if (param !== param) {
      return true;
    }
    return false;
  }

  static isUndef(param) {
    if (typeof param === 'undefined') {
      return true;
    }
    return false;
  }

  static isObj(param) {
    if (typeof param === 'object' && param !== null && !Array.isArray(param)) {
      return true;
    }
    return false;
  }

  // преобразование типов
  static toStr(param = '') {
    return String(param);
  }

  static toNum(param) {
    return Number(param);
  }

  // строка с нулем тоже true
  static toBoolean(param) {
    return Boolean(param);
  }

  // заглушки
  static toObj(obj) {
    return obj;
  }

  static toNull() {
    return null;
  }

  static toNan() {
    return NaN;
  }

  static toUndef() {
    return undefined;
  }

  static getComponentUid() {
    id += 1;
    return id;
  }

  static getCollectionElement(collection, key, value) {
    return collection.find((el) => el[key] === value);
  }

  static ajax(adressParam, data = {}) {
    if (this.isUserLogin()) {
      if (data) {
        data.userHash = this.getAuthUser().userHash;
      }
    }
    const params = Object.keys(data)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&');

    return fetch(C.serverAddress + adressParam, {
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params,
    }).then((response) => response.json());
  }

  static isUserLogin() {
    return !!localStorage.getItem('user');
  }

  static setAuthUser(u) {
    if (u == null) {
      window.localStorage.removeItem('user');
    } else {
      window.localStorage.setItem('userHash', JSON.stringify(u));
      window.localStorage.setItem('user', JSON.stringify(u));
    }
  }

  static getAuthUser() {
    return window.localStorage.getItem('user') && JSON.parse(window.localStorage.getItem('user'));
  }
}
