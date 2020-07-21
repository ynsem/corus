// проверки типов

function isStr (param = '') {
    if (typeof param === 'string') {
        return true;
    } else return false;
};

function isNum (param) {
    if (typeof param === 'number' && param === param) {
        return true;
    } else return false;
};

// true вернет true - непонятно это как-то
function isBoolean (param) {
    if (typeof param === 'boolean') {
        return true;
    } else return false;
};

function isNull (param) {
    if (param === null) {
        return true;
    } else return false;
};

function isNan (param) {
    if (param !== param) {
        return true;
    } else return false;
};

function isUndef (param = '') {
    if (typeof param === undefined) {
        return true;
    } else return false;
};

function isObj (param) {
    if (typeof param === 'object' && param !== null) {
        return true;
    } else return false;
};


// преобразование типов

function toStr (param = '') {
    return String(param);
};

function toNum (param) {
    return Number(param);
};

// строка с нулем тоже true
function toBoolean (param) {
    return Boolean(param);
};

// пока не трогаю, надо переписать на JSON
function toObj (keys, values) {
    const obj = {};
    for (let i = 0; i < keys.length; i += 1) {
        obj[keys[i]] = values[i];
    }
    return obj;
};


// заглушки
function toNull () {
    return null
};

function toNan () {
    return NaN;
};

function toUndef () {
    return undefined;
};

//фиктивный коммит
