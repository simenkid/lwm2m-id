var Enum = require('enum'),
    should = require('should');

var lwm2mid = require('../index.js');

var rspCodeKeys = [],
    rspCodeVals = [],
    cmdIdKeys = [],
    cmdIdVals = [],
    oidKeys = [],
    oidVals = [],
    uRidKeys = [],
    uRidVals = [],
    sOidKeys = [],
    sOidVals = [],
    sRidKeys = {},
    sRidVals = {},
    sOidCharKeys = [],
    sOidCharVals = [],
    k;

for (k in lwm2mid._defs.rspCode) {
    rspCodeKeys.push(k);
    rspCodeVals.push(lwm2mid._defs.rspCode[k]);
}

for (k in lwm2mid._defs.cmdId) {
    cmdIdKeys.push(k);
    cmdIdVals.push(lwm2mid._defs.cmdId[k]);
}

for (k in lwm2mid._defs.oid) {
    oidKeys.push(k);
    oidVals.push(lwm2mid._defs.oid[k]);
}

for (k in lwm2mid._defs.uniqueRid) {
    uRidKeys.push(k);
    uRidVals.push(lwm2mid._defs.uniqueRid[k]);
}

for (k in lwm2mid._defs.specificRid) {
    sOidKeys.push(k);
    sOidVals.push(lwm2mid._defs.oid[k]);
    sRidKeys[k] = [];
    sRidVals[k] = [];
    for (var i in lwm2mid._defs.specificRid[k]) {
        sRidKeys[k].push(i);
        sRidVals[k].push(lwm2mid._defs.specificRid[k][i]);
    }
}

for (k in lwm2mid._defs.specificResrcChar) {
    sOidCharKeys.push(k);
    sOidCharVals.push(lwm2mid.Oid.get(k).value);
}

describe('Enum Instance Check', function () {
    it('_defs Not Enum', function () {
        (lwm2mid._defs instanceof Enum).should.be.false();
    });

    it('RspCode Enum', function () {
        (lwm2mid.RspCode instanceof Enum).should.be.true();
    });

    it('Cmd Enum', function () {
        (lwm2mid.Cmd instanceof Enum).should.be.true();
    });

    it('Oid Enum', function () {
        (lwm2mid.Oid instanceof Enum).should.be.true();
    });

    it('UniqueRid Enum', function () {
        (lwm2mid.UniqueRid instanceof Enum).should.be.true();
    });

    it('SpecificRid Enum', function () {
        var pass = true;
        for (var oid in lwm2mid.SpecificRid) {
            pass = pass & (lwm2mid.SpecificRid[oid] instanceof Enum);
        }
        pass.should.not.be.false();
    });

    it('specificResrcChar Not Enum', function () {
        (lwm2mid.specificResrcChar instanceof Enum).should.be.false();
    });
});

describe('Enum Get Method Check', function () {

    it('get RspCode', function () {
        rspCodeKeys.forEach(function (key) {
            var item = lwm2mid.RspCode.get(key),
                itemData = lwm2mid._defs.rspCode,
                val = item.value;

            should(item).not.be.undefined();
            (val).should.be.eql(itemData[key]);

            item = lwm2mid.RspCode.get(val);
            should(item).not.be.undefined();
            (item.key).should.be.eql(key);
        });

        rspCodeVals.forEach(function (val) {
            var item = lwm2mid.RspCode.get(val),
                itemData = lwm2mid._defs.rspCode,
                key = item.key;

            should(item).not.be.undefined();
            (val).should.be.eql(itemData[key]);

            item = lwm2mid.RspCode.get(key);
            should(item).not.be.undefined();
            (item.value).should.be.eql(val);
        });
    });

    it('get cmdId', function () {
        cmdIdKeys.forEach(function (key) {
            var item = lwm2mid.Cmd.get(key),
                itemData = lwm2mid._defs.cmdId,
                val = item.value;

            should(item).not.be.undefined();
            (val).should.be.eql(itemData[key]);

            item = lwm2mid.Cmd.get(val);
            should(item).not.be.undefined();
            (item.key).should.be.eql(key);
        });

        cmdIdVals.forEach(function (val) {
            var item = lwm2mid.Cmd.get(val),
                itemData = lwm2mid._defs.cmdId,
                key = item.key;

            should(item).not.be.undefined();
            (val).should.be.eql(itemData[key]);

            item = lwm2mid.Cmd.get(key);
            should(item).not.be.undefined();
            (item.value).should.be.eql(val);
        });
    });

    it('get Oid', function () {
        oidKeys.forEach(function (key) {
            var item = lwm2mid.Oid.get(key),
                itemData = lwm2mid._defs.oid,
                val = item.value;

            should(item).not.be.undefined();
            (val).should.be.eql(itemData[key]);

            item = lwm2mid.Oid.get(val);
            should(item).not.be.undefined();
            (item.key).should.be.eql(key);
        });

        oidVals.forEach(function (val) {
            var item = lwm2mid.Oid.get(val),
                itemData = lwm2mid._defs.oid,
                key = item.key;

            should(item).not.be.undefined();
            (val).should.be.eql(itemData[key]);

            item = lwm2mid.Oid.get(key);
            should(item).not.be.undefined();
            (item.value).should.be.eql(val);
        });
    });

    it('get UniqueRid', function () {
        uRidKeys.forEach(function (key) {
            var item = lwm2mid.UniqueRid.get(key),
                itemData = lwm2mid._defs.uniqueRid,
                val = item.value;

            should(item).not.be.undefined();
            (val).should.be.eql(itemData[key]);

            item = lwm2mid.UniqueRid.get(val);
            should(item).not.be.undefined();
            (item.key).should.be.eql(key);
        });

        uRidVals.forEach(function (val) {
            var item = lwm2mid.UniqueRid.get(val),
                itemData = lwm2mid._defs.uniqueRid,
                key = item.key;

            should(item).not.be.undefined();
            (val).should.be.eql(itemData[key]);

            item = lwm2mid.UniqueRid.get(key);
            should(item).not.be.undefined();
            (item.value).should.be.eql(val);
        });
    });

    it('get SpecificRid', function () {
        for (var sk in sRidKeys) {

            sRidKeys[sk].forEach(function (key) {
                var item = lwm2mid.SpecificRid[sk].get(key),
                    itemData = lwm2mid._defs.specificRid[sk],
                    val = item.value;

                should(item).not.be.undefined();
                (val).should.be.eql(itemData[key]);

                item = lwm2mid.SpecificRid[sk].get(val);
                should(item).not.be.undefined();
                (item.key).should.be.eql(key);
            });

            sRidVals[sk].forEach(function (val) {
                var item = lwm2mid.SpecificRid[sk].get(val),
                    itemData = lwm2mid._defs.specificRid[sk],
                    key = item.key;

                should(item).not.be.undefined();
                (val).should.be.eql(itemData[key]);

                item = lwm2mid.SpecificRid[sk].get(key);
                should(item).not.be.undefined();
                (item.value).should.be.eql(val);
            });
        }
    });
});

describe('lwm2m-id Get Method Check', function () {
    // oidKeys, oidVals

    it('getOid()', function () {
        oidKeys.forEach(function (okey) {
            var hitA = lwm2mid.getOid(okey),
                hitB = lwm2mid.Oid.get(okey);

            should(hitA).not.be.undefined();
            should(hitA.key).be.eql(hitB.key);
            should(hitA.value).be.eql(hitB.value);
        });

        oidVals.forEach(function (oval) {
            var hitA = lwm2mid.getOid(oval),
                hitB = lwm2mid.Oid.get(oval);

            should(hitA).not.be.undefined();
            should(hitA.key).be.eql(hitB.key);
            should(hitA.value).be.eql(hitB.value);
        });
    
        should(lwm2mid.getOid('xxx')).be.undefined();
        should(lwm2mid.getOid(12345)).be.undefined();

    });

    it('getRid() - UniqueRid', function () {
        uRidKeys.forEach(function (rkey) {
            var hitA = lwm2mid.getRid(rkey),
                hitB = lwm2mid.UniqueRid.get(rkey);

            should(hitA).not.be.undefined();
            should(hitA.key).be.eql(hitB.key);
            should(hitA.value).be.eql(hitB.value);
        });

        uRidVals.forEach(function (rval) {
            var hitA = lwm2mid.getRid(rval),
                hitB = lwm2mid.UniqueRid.get(rval);

            should(hitA).not.be.undefined();
            should(hitA.key).be.eql(hitB.key);
            should(hitA.value).be.eql(hitB.value);
        });

        should(lwm2mid.getRid('xxx')).be.undefined();
        should(lwm2mid.getRid(12345)).be.undefined();
    });

    it('getRid() - SpecificRid', function () {
        sOidKeys.forEach(function (okey) {
            sRidKeys[okey].forEach(function (rkey) {
                var hitA = lwm2mid.getRid(okey, rkey),
                    hitB = lwm2mid.SpecificRid[okey].get(rkey);

                should(hitA).not.be.undefined();
                should(hitA.key).be.eql(hitB.key);
                should(hitA.value).be.eql(hitB.value);
            });

            sRidVals[okey].forEach(function (rval) {
                var hitA = lwm2mid.getRid(okey, rval),
                    hitB = lwm2mid.SpecificRid[okey].get(rval);

                should(hitA).not.be.undefined();
                should(hitA.key).be.eql(hitB.key);
                should(hitA.value).be.eql(hitB.value);
            });
        });

        sOidVals.forEach(function (oval) {
            var okey = lwm2mid.getOid(oval).key;

            sRidKeys[okey].forEach(function (rkey) {
                var hitA = lwm2mid.getRid(oval, rkey),
                    hitB = lwm2mid.SpecificRid[okey].get(rkey);

                should(hitA).not.be.undefined();
                should(hitA.key).be.eql(hitB.key);
                should(hitA.value).be.eql(hitB.value);
            });

            sRidVals[okey].forEach(function (rval) {
                var hitA = lwm2mid.getRid(oval, rval),
                    hitB = lwm2mid.SpecificRid[okey].get(rval);

                should(hitA).not.be.undefined();
                should(hitA.key).be.eql(hitB.key);
                should(hitA.value).be.eql(hitB.value);
            });
        });
        should(lwm2mid.getRid('device', 'dddd')).be.undefined();
        should(lwm2mid.getRid('device', 12345)).be.undefined();
        should(lwm2mid.getRid(3, 'dddd')).be.undefined();
        should(lwm2mid.getRid(3, 12345)).be.undefined();
        should(lwm2mid.getRid('device', 'reboot')).not.be.undefined();
        should(lwm2mid.getRid('device', 4)).not.be.undefined();
        should(lwm2mid.getRid(3, 'reboot')).not.be.undefined();
        should(lwm2mid.getRid(3, 4)).not.be.undefined();
    });

    it('getSpecificResrcChar()', function () {
        sOidCharKeys.forEach(function (okey) {
            sRidKeys[okey].forEach(function (skey) {
                lwm2mid.getSpecificResrcChar(okey, skey).should.be.eql(lwm2mid.SpecificResrcChar[okey][skey]);
            });
        });

        sOidCharVals.forEach(function (oval) {
            var okey = lwm2mid.getOid(oval).key;

            sRidKeys[okey].forEach(function (skey) {
                var sid = lwm2mid.getRid(oval, skey).value;
                lwm2mid.getSpecificResrcChar(oval, sid).should.be.eql(lwm2mid.SpecificResrcChar[okey][skey]);
            });
        });
    });

});

describe('lwm2m-id Add Method Check', function () {
    it('addOid()', function () {
        lwm2mid.addOid({
            'test1': 1001,
            'test2': 1002
        });

        lwm2mid.getOid('test1').key.should.be.eql('test1');
        lwm2mid.getOid('test2').key.should.be.eql('test2');
        lwm2mid.getOid('test1').value.should.be.eql(1001);
        lwm2mid.getOid('test2').value.should.be.eql(1002);

        lwm2mid.getOid('1001').key.should.be.eql('test1');
        lwm2mid.getOid('1002').key.should.be.eql('test2');
        lwm2mid.getOid('1001').value.should.be.eql(1001);
        lwm2mid.getOid('1002').value.should.be.eql(1002);

        lwm2mid.getOid(1001).key.should.be.eql('test1');
        lwm2mid.getOid(1002).key.should.be.eql('test2');
        lwm2mid.getOid(1001).value.should.be.eql(1001);
        lwm2mid.getOid(1002).value.should.be.eql(1002);

        (function () {
            lwm2mid.addOid({
                "cmdhLimits": 1234
            });
        }).should.throw();


        (function () {
            lwm2mid.addOid({
                "xxxxx": 2053
            });
        }).should.throw();
    });

    it('addUniqueRid()', function () {
        lwm2mid.addUniqueRid({
            'rtest1': 1001,
            'rtest2': 1002
        });

        lwm2mid.getRid('rtest1').key.should.be.eql('rtest1');
        lwm2mid.getRid('rtest2').key.should.be.eql('rtest2');
        lwm2mid.getRid('rtest1').value.should.be.eql(1001);
        lwm2mid.getRid('rtest2').value.should.be.eql(1002);

        lwm2mid.getRid('1001').key.should.be.eql('rtest1');
        lwm2mid.getRid('1002').key.should.be.eql('rtest2');
        lwm2mid.getRid('1001').value.should.be.eql(1001);
        lwm2mid.getRid('1002').value.should.be.eql(1002);

        lwm2mid.getRid(1001).key.should.be.eql('rtest1');
        lwm2mid.getRid(1002).key.should.be.eql('rtest2');
        lwm2mid.getRid(1001).value.should.be.eql(1001);
        lwm2mid.getRid(1002).value.should.be.eql(1002);

        (function () {
            lwm2mid.addUniqueRid({
                "edgeSelection": 1234
            });
        }).should.throw();


        (function () {
            lwm2mid.addUniqueRid({
                "xxxxx": 5504
            });
        }).should.throw();
    });

    it('addUniqueRid()', function () {
        lwm2mid.addSpecificRid('lwm2mServer', {
            'srTest1': 1001,
            'srTest2': 1002,
        });

        lwm2mid.getRid('lwm2mServer', 'srTest1').key.should.be.eql('srTest1');
        lwm2mid.getRid('lwm2mServer', 'srTest2').key.should.be.eql('srTest2');
        lwm2mid.getRid('lwm2mServer', 'srTest1').value.should.be.eql(1001);
        lwm2mid.getRid('lwm2mServer', 'srTest2').value.should.be.eql(1002);

        lwm2mid.getRid('lwm2mServer', '1001').key.should.be.eql('srTest1');
        lwm2mid.getRid('lwm2mServer', '1002').key.should.be.eql('srTest2');
        lwm2mid.getRid('lwm2mServer', '1001').value.should.be.eql(1001);
        lwm2mid.getRid('lwm2mServer', '1002').value.should.be.eql(1002);

        lwm2mid.getRid('lwm2mServer', 1001).key.should.be.eql('srTest1');
        lwm2mid.getRid('lwm2mServer', 1002).key.should.be.eql('srTest2');
        lwm2mid.getRid('lwm2mServer', 1001).value.should.be.eql(1001);
        lwm2mid.getRid('lwm2mServer', 1002).value.should.be.eql(1002);

        (function() {
            lwm2mid.addSpecificRid('xyz', {
                'xyzTest1': 1001,
                'xyzTest2': 1002,
            });
        }).should.throw();

        lwm2mid.addOid({ 'xyz': 9999 });

        (function() {
            lwm2mid.addSpecificRid('xyz', {
                'xyzTest1': 1001,
                'xyzTest2': 1002,
            });
        }).should.not.throw();

        lwm2mid.getRid('xyz', 'xyzTest1').key.should.be.eql('xyzTest1');
        lwm2mid.getRid('xyz', 'xyzTest2').key.should.be.eql('xyzTest2');
        lwm2mid.getRid('xyz', 'xyzTest1').value.should.be.eql(1001);
        lwm2mid.getRid('xyz', 'xyzTest2').value.should.be.eql(1002);

        lwm2mid.getRid('xyz', '1001').key.should.be.eql('xyzTest1');
        lwm2mid.getRid('xyz', '1002').key.should.be.eql('xyzTest2');
        lwm2mid.getRid('xyz', '1001').value.should.be.eql(1001);
        lwm2mid.getRid('xyz', '1002').value.should.be.eql(1002);

        lwm2mid.getRid('xyz', 1001).key.should.be.eql('xyzTest1');
        lwm2mid.getRid('xyz', 1002).key.should.be.eql('xyzTest2');
        lwm2mid.getRid('xyz', 1001).value.should.be.eql(1001);
        lwm2mid.getRid('xyz', 1002).value.should.be.eql(1002);

        lwm2mid.getRid(9999, 'xyzTest1').key.should.be.eql('xyzTest1');
        lwm2mid.getRid(9999, 'xyzTest2').key.should.be.eql('xyzTest2');
        lwm2mid.getRid(9999, 'xyzTest1').value.should.be.eql(1001);
        lwm2mid.getRid(9999, 'xyzTest2').value.should.be.eql(1002);

        lwm2mid.getRid(9999, '1001').key.should.be.eql('xyzTest1');
        lwm2mid.getRid(9999, '1002').key.should.be.eql('xyzTest2');
        lwm2mid.getRid(9999, '1001').value.should.be.eql(1001);
        lwm2mid.getRid(9999, '1002').value.should.be.eql(1002);

        lwm2mid.getRid(9999, 1001).key.should.be.eql('xyzTest1');
        lwm2mid.getRid(9999, 1002).key.should.be.eql('xyzTest2');
        lwm2mid.getRid(9999, 1001).value.should.be.eql(1001);
        lwm2mid.getRid(9999, 1002).value.should.be.eql(1002);
    });


    it('addSpecificResrcChar()', function () {
        (function () {
            lwm2mid.addSpecificResrcChar('abc', {
                "xValue": { "access": "R", "multi": false, "mand": true, "type": "float", "range": null, "init": 0 },
                "yValue": { "access": "R", "multi": false, "mand": false, "type": "float", "range": null, "init": 0 },
                "zValue": { "access": "R", "multi": false, "mand": false, "type": "float", "range": null, "init": 0 },
                "units": { "access": "R", "multi": false, "mand": false, "type": "string", "range": null, "init": "uint" },
                "compassDir": { "access": "R", "multi": false, "mand": false, "type": "float", "range": 360, "init": 0 }
            });
        }).should.throw();

        lwm2mid.addOid({ abc: 9998 });

        (function () {
            lwm2mid.addSpecificResrcChar('abc', {
                "xValue": { "access": "R", "multi": false, "mand": true, "type": "float", "range": null, "init": 0 },
                "yValue": { "access": "R", "multi": false, "mand": false, "type": "float", "range": null, "init": 0 },
            });
        }).should.throw();

        lwm2mid.addSpecificRid(9998, {
            xValue: 3000,
            yValue: 3001
        });

        (function () {
            lwm2mid.addSpecificResrcChar('abc', {
                "xValue": { "access": "R", "multi": false, "mand": true, "type": "float", "range": null, "init": 0 },
                "yValue": { "access": "R", "multi": false, "mand": false, "type": "float", "range": null, "init": 0 },
                "zValue": { "access": "R", "multi": false, "mand": false, "type": "float", "range": null, "init": 0 },
            });
        }).should.throw();

        (function () {
            lwm2mid.addSpecificRid(9998, {
                xValue: 3000,
                yValue: 3001,
                zValue: 3002,
            });
        }).should.throw();

        (function () {
            lwm2mid.addSpecificRid(9998, {
                zValue: 3002,
            });
        }).should.not.throw();

        (function () {
            lwm2mid.addSpecificResrcChar('abc', {
                "zValue": { "access": "R", "multi": false, "mand": false, "type": "float", "range": null, "init": 0 },
            });
        }).should.not.throw();
    

        (function () {
            lwm2mid.addSpecificResrcChar('setPoint', {
                "zValue": { "access": "R", "multi": false, "mand": false, "type": "float", "range": null, "init": 0 },
            });
        }).should.throw();


        (function () {
            lwm2mid.addSpecificRid('setPoint', {
                zValue: 3002,
            });
        }).should.not.throw();

        (function () {
            lwm2mid.addSpecificResrcChar('setPoint', {
                "zValue": { "access": "R", "multi": false, "mand": false, "type": "float", "range": null, "init": 0 },
            });
        }).should.not.throw();

        lwm2mid.getSpecificResrcChar('setPoint', 3002).should.be.eql({
           "access": "R", "multi": false, "mand": false, "type": "float", "range": null, "init": 0 
        });
    });
});
