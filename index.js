'use strict';

var fs = require('fs'),
    Enum = require('enum'),
    _defs = JSON.parse(fs.readFileSync(__dirname + '/defs/defs.json', { encoding: 'utf8' })),
    _specificRid = _defs.specificRid,
    DEFS = {
        _defs: _defs,
        RspCode: null,
        Cmd: null,
        Oid: null,
        UniqueRid: null,
        SpecificRid: {},
        SpecificResrcChar: _defs.specificResrcChar
    };

/*************************************************************************************************/
/*** Loading Enumerations                                                                      ***/
/*************************************************************************************************/
DEFS.RspCode = new Enum(_defs.rspCode);
DEFS.Cmd = new Enum(_defs.cmdId);
DEFS.Oid = new Enum(_defs.oid);
DEFS.UniqueRid = new Enum(_defs.uniqueRid);

for (var key in _specificRid) {
    if (_specificRid.hasOwnProperty(key))
        DEFS.SpecificRid[key] = new Enum(_specificRid[key]);
}

/*************************************************************************************************/
/*** DEFS Methods                                                                              ***/
/*************************************************************************************************/
DEFS.getOid = function (oid) {
    if (typeof oid !== 'number' && typeof oid !== 'string')
        throw new TypeError('oid should be a number or a string.');

    var oidNumber = parseInt(oid),
        oidItem;

    if (!isNaN(oidNumber))
        oid = oidNumber;

    oidItem = this.Oid.get(oid);

    return oidItem;
};

DEFS.addOid = function (items) {
    var _oid = DEFS._defs.oid;

    for (var key in items) {
        if (this.Oid.get(key))
            throw new Error(`oid: ${key} name conflicts.`);
        else if (this.Oid.get(items[key]))
            throw new Error(`oid: ${key} value conflicts.`);
        else
            _oid[key] = items[key];
    }

    this.Oid = null;
    this.Oid = new Enum(_oid);

    return this;
};

DEFS.getRid = function (oid, rid) {
    var oidItem = this.getOid(oid),
        ridNumber,
        ridItem,
        oidKey;

    if (typeof rid === 'undefined') {
        if (typeof oid === 'undefined')
            throw new Error('Bad arguments');

        rid = oid;
        oid = undefined;
    }

    ridNumber = parseInt(rid);
    if (!isNaN(ridNumber))
        rid = ridNumber;

    if (typeof oid !== 'undefined') {           // searching in MDEFS.RIDOFOID
        if (typeof rid === 'undefined')
            throw new Error('rid should be given');

        oidKey = oidItem ? oidItem.key : oid.toString();

        if (this.SpecificRid[oidKey] instanceof Enum)
            ridItem = this.SpecificRid[oidKey].get(rid);
    } else {
        ridItem = this.UniqueRid.get(rid);
    }

    return ridItem;
};

DEFS.addUniqueRid = function (items) {
    var _uRid = DEFS._defs.uniqueRid;

    for (var key in items) {
        if (this.UniqueRid.get(key))
            throw new Error(`unique rid: ${key} name conflicts.`);
        else if (this.UniqueRid.get(items[key]))
            throw new Error(`unique rid: ${key} value conflicts.`);
        else
            _uRid[key] = items[key];
    }

    this.UniqueRid = null;
    this.UniqueRid = new Enum(_uRid);

    return this;
};

DEFS.addSpecificRid = function (oid, items) {
    var oidItem = this.getOid(oid),
        oidKey,
        ridItem, 
        _spfRid = DEFS._defs.specificRid;

    if (!oidItem)
        throw new Error(`oid: ${oid} does not exist. Please do addOid() first.`);

    oidKey = oidItem.key;

    _spfRid[oidKey] = _spfRid[oidKey] || {};

    for (var key in items) {
        if (typeof _spfRid[oidKey][key] !== 'undefined') {
            throw new Error(`rid: ${key} within oid: ${oidKey} conflicts.`);
        }

        _spfRid[oidKey][key] = items[key];
    }

    this.SpecificRid[oidKey] = null;
    this.SpecificRid[oidKey] = new Enum(_spfRid[oidKey]);

    return this;
};

DEFS.getSpecificResrcChar = function (oid, rid) {
    var oidItem = this.getOid(oid),
        ridItem = this.getRid(oid, rid),
        characteristic;

    if (oidItem) {
        characteristic = DEFS.SpecificResrcChar[oidItem.key];
        if (ridItem)
            characteristic = characteristic[ridItem.key];
    }

    return characteristic;
};  // undefined / resrc characteristic

DEFS.addSpecificResrcChar = function (oid, chars) {
    var _rChar = DEFS._defs.specificResrcChar,
        oidItem = this.getOid(oid),
        ridItem,
        pass = _checkCharFormat(chars);

    if (!oidItem)
        throw new Error(`oid: ${oid} does not exist. Please do addOid() first.`);

    _rChar[oidItem.key] = _rChar[oidItem.key] || {};
    _rChar = _rChar[oidItem.key];

    for (var rid in chars) {
        ridItem = this.getRid(oid, rid);
        if (!ridItem)
            throw new Error(`rid: ${rid} does not exist. Please do addSpecificRid() first.`);

        if (_rChar[ridItem.key]) {
            throw new Error(`rid: ${rid} conflicts in oid: ${oid}`);
        } else {
            if (!_checkCharFormat(chars[rid]))
                throw new Error(`Invalid characteristic format within rid: ${rid}`);

             _rChar[ridItem.key] = chars[rid];
        }
    }

    return this;
};

/*************************************************************************************************/
/*** Private Functions                                                                         ***/
/*************************************************************************************************/
function _checkCharFormat(charItem) {
    var keysChecked = {
        access: false,
        multi: false,
        mand: false,
        type: false,
        range: false,
        init: false
    },
    pass = true;

    if (typeof charItem !== 'object')
        throw new TypeError(`Resource characteristic should be an object.`);

    for (var key in charItem) {
        if (keysChecked.hasOwnProperty(key))
            keysChecked[key] = true;
    }

    for (var k in keysChecked) {
        pass = pass & keysChecked[k];
    }

    return pass;
}

module.exports = DEFS;
