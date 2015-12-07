lwm2m-id
===============

**lwm2m-id** is a dictionary of identifiers defined by OMA LightweightM2M(v1.0) and IPSO SmartObject Guideline(Smart Objects Starter Pack1.0).

<br>
Overview
--------

<br>
Identifier Definitions
--------
The lwm2m v1.0 defines many unique object id (oid) for different purpose. Such as `"device"` object that contains many optional resources. Each resource has an unique id within that object. For those reusable unique resources ids, they are under the `"uniqueRid"` namespace. For those resources subject to a specific object, are defined under the namespace `"specificRid"`. In `"specificRid"`, the rids are categories by the object id. For example, if you got a an object with id `"tempSensor"`, and it can contains the rids of `"sensorValue"`, `"units"`, .etc.
defs/defs.json

    {
        "oid": {
            "lwm2mSecurity": 0,
            "lwm2mServer": 1,
            "accessControl": 2,
            "device": 3,
            "connMonitor": 4,
            "firmware": 5,
            // ...
            "illumSensor": 3301,
            "presenceSensor": 3302,
            "tempSensor": 3303,
            "humidSensor": 3304,
            // ...
        },
        "uniqueRid": {
            "objectInstanceHandle": 4000,
            "objectVersion": 4001,
            "dInState": 5500,
            "counter": 5501,
            // ...
            "onOff": 5850,
            "dimmer": 5851,
            "onTime": 5852,
            // ...
        },
        "specificRid": {
            // ...
            "device": {
                "manuf": 0,
                "model": 1,
                "serial": 2,
                "firmware": 3,
                // ...
            },
            // ...
            "tempSensor": {
                "sensorValue": 5700,
                "units": 5701,
                "minMeaValue": 5601,
                "maxMeaValue": 5602,
                "minRangeValue": 5603,
                "maxRangeValue": 5604,
                "resetMinMaxMeaValues": 5605
            },
            "humidSensor": {
                "sensorValue": 5700,
                "units": 5701,
                "minMeaValue": 5601,
                "maxMeaValue": 5602,
                "minRangeValue": 5603,
                "maxRangeValue": 5604,
                "resetMinMaxMeaValues": 5605
            },
            // ...
        },
        "specificResrcChar": {
            // ...
            "device": {
                "manuf": { "access": "R", "multi": false, "mand": false, "type": "string", "range": null, "init": "my company" },
                "model": { "access": "R", "multi": false, "mand": false, "type": "string", "range": null, "init": "machine-gun" },
                "serial": { "access": "R", "multi": false, "mand": false, "type": "string", "range": null, "init": "fb-0000-0001" },
                "firmware": { "access": "R", "multi": false, "mand": false, "type": "string", "range": null, "init": "0.0.1" },
                // ...
            },
            // ...
            "humidSensor": {
                "sensorValue": { "access": "R", "multi": false, "mand": true, "type": "float", "range": null, "init": 0 },
                "units": { "access": "R", "multi": false, "mand": false, "type": "string", "range": null, "init": "%" },
                "minMeaValue": { "access": "R", "multi": false, "mand": false, "type": "float", "range": null, "init": 0 },
                "maxMeaValue": { "access": "R", "multi": false, "mand": false, "type": "float", "range": null, "init": 0 },
                "minRangeValue": { "access": "R", "multi": false, "mand": false, "type": "float", "range": null, "init": 0 },
                "maxRangeValue": { "access": "R", "multi": false, "mand": false, "type": "float", "range": null, "init": 0 },
                "resetMinMaxMeaValues": { "access": "E", "multi": false, "mand": false, "type": "opaque", "range": null, "init": null }
            },
            // ...
    }

APIs
--------
**lwm2m-id*** provides two kinds of APIs:

<a name="close"></a>
### .getOid(oid)
> This method returns the enumerable item.

**Arguments**
- oid (*String|Number*)


**Example**

    lwm2mid.getOid('tempSensor');
    lwm2mid.getOid('3303');
    lwm2mid.getOid(3303);
    // these all calls will return { key: 'tempSensor', value: 3303 }

    lwm2mid.getOid('xxxx'); // return undefined 
    lwm2mid.getOid('9999'); // return undefined 
    lwm2mid.getOid(9999);   // return undefined 

    lwm2mid.getOid('tempSensor').key;   // return 'tempSensor'
    lwm2mid.getOid('3303').key;         // return 'tempSensor'
    lwm2mid.getOid(3303).key;           // return 'tempSensor'

    lwm2mid.getOid('tempSensor').value; // return 3303
    lwm2mid.getOid('3303').value;       // return 3303
    lwm2mid.getOid(3303).value;         // return 3303

<br>
<a name="close"></a>
### .addOid(items)
> This method will close the opened serial port.

**Arguments**

- callback(err)
    - `'err'` (*Error*) - [Error Message](#errcodes)

**Example**
```javascript
    ccBnp.close(function (err) {
        if (err) console.log(err);
    });
```
<br>

<a name="close"></a>
### .getRid(oid, rid)
> This method will close the opened serial port.

**Arguments**

- callback(err)
    - `'err'` (*Error*) - [Error Message](#errcodes)

**Example**
```javascript
    ccBnp.close(function (err) {
        if (err) console.log(err);
    });
```
<br>


<a name="close"></a>
### .addUniqueRid(items)
> This method will close the opened serial port.

**Arguments**

- callback(err)
    - `'err'` (*Error*) - [Error Message](#errcodes)

**Example**
```javascript
    ccBnp.close(function (err) {
        if (err) console.log(err);
    });
```
<br>

<a name="close"></a>
### .addSpecificRid(oid, items)
> This method will close the opened serial port.

**Arguments**

- callback(err)
    - `'err'` (*Error*) - [Error Message](#errcodes)

**Example**
```javascript
    ccBnp.close(function (err) {
        if (err) console.log(err);
    });
```
<br>

<a name="close"></a>
### .getSpecificResrcChar(oid, rid)
> This method will close the opened serial port.

**Arguments**

- callback(err)
    - `'err'` (*Error*) - [Error Message](#errcodes)

**Example**
```javascript
    ccBnp.close(function (err) {
        if (err) console.log(err);
    });
```
<br>

<a name="close"></a>
### .addSpecificResrcChar(oid, chars)
> This method will close the opened serial port.

**Arguments**

- callback(err)
    - `'err'` (*Error*) - [Error Message](#errcodes)

**Example**
```javascript
    ccBnp.close(function (err) {
        if (err) console.log(err);
    });
```
<br>


| LWM2M Object Id | LWM2M Object Name | key of lwm2m-id |
|:---------------:|:-----------------:|:---------------:|
|        0        |                   |  lwm2mSecurity  |
|        1        |                   |   lwm2mServer   |
|        2        |                   |  accessControl  |
|        3        |                   |      device     |
|        4        |                   |   connMonitor   |
|        5        |                   |     firmware    |
|        6        |                   |     location    |
|        7        |                   |  connStatistics |
|        8        |                   |   lockAndWipe   |
|        9        |                   |     swUpdate    |
|        10       |                   |   cellularConn  |
|        11       |                   |  apnConnProfile |
|        12       |                   |     wlanConn    |
|        13       |                   | bearerSelection |
|        14       |                   |   devCapMgmt    |--
|        2048     |                   |   cmdhPolicy   |
|        2049     |                   |  activeCmdhPolicy  |
|        2050     |                   |      cmdhDefaults     |
|        2051     |                   |   cmdhDefEcValues   |
|        2052     |                   |     cmdhDefEcParamsValues    |
|        2053     |                   |     cmdhLimits    |
|        2054     |                   |  cmdhNetworkAccessRules |
|        2055     |                   |   cmdhNwAccessRule   |
|        2056     |                   |     cmdhBuffer    |
|        3200     |                   |   digitalInput  |
|        3201     |                   |  digitalOutput |
|        3202     |                   |     analogInput    |
|        3203     |                   | analogOutput |
|        3300     |                   |   genericSensor   |
|        3301     |                   |  presenceSensor  |
|        3302     |                   |      presenceSensor     |
|        3303     |                   |   tempSensor   |
|        3304     |                   |     humidSensor    |
|        3305     |                   |     pwrMea    |
|        3306     |                   |  actuation |
|        3308     |                   |   setPoint   |
|        3310     |                   |     loadCtrl    |
|        3311     |                   |   lightCtrl  |
|        3312     |                   |  pwrCtrl |
|        3313     |                   |     accelerometer    |
|        3314     |                   | magnetometer |
|        3315     |                   | barometer |


