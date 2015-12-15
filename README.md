lwm2m-id
===============

**lwm2m-id** is a dictionary of identifiers defined by OMA LightweightM2M(v1.0) and IPSO SmartObject Guideline(Smart Objects Starter Pack1.0).

<br>
Overview
--------

<br>
Identifier Definitions
--------
**lwm2m-id** is a dictionary of identifiers defined by OMA LightweightM2M(v1.0) and IPSO SmartObject Guideline(Smart Objects Starter Pack1.0). If you want more information about what lwm2m and IPSO are doing, you can take a look at their websites.

**lwm2m-id** provides you with two getters to get the key-value pair of the identifier. This two getter are `.getOid()` and `.getRid()`. The item, returned from the getter, has properties `'key'` and `'value'` in string and number, respectively. Let me show you some example.

// examples go here

Custom Definitions
--------
**lwm2m-id** allows you to add the custom-defined idetifiers with `.addUniqueRid()`, `.addSpecificRid()`. You can also use `.addSpecificResrcChar()` to assign the resource characteritics of access control to the dictionary at runtime. If you want to add some definition statically, you can modify the JSON file lies in `defs/defs.json`.


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

Identifier Table
--------
| LWM2M/IPSO Object Id  | LWM2M/IPSO Object Name | lwm2m-id Key             |
|:---------------      :|:-----------------     :|:---------------         :|
|        0              |LWM2M Security         |  lwm2mSecurity            |
|        1              |LWM2M Server           |   lwm2mServer             |
|        2              |Access Control         |  accessControl            |
|        3              |Device                 |      device               |
|        4              |Connectivity Monitoring|   connMonitor             |
|        5              | Firmware              |     firmware              |
|        6              |Location               |     location              |
|        7              |Connectivity Statistics|  connStatistics           |
|        8              |Lock and Wipe          |   lockAndWipe             |
|        9              |Sofware Update         |     swUpdate              |
|        10             |Cellular connectivity  |   cellularConn            |
|        11             |APN connection profile |  apnConnProfile           |
|        12             |WLAN connectivity      |     wlanConn              |
|        13             |Bearer selection       | bearerSelection           |
|        15             |DevCapMgmt             |   devCapMgmt              |--
|        2048           |CmdhPolicy             |   cmdhPolicy              |
|        2049           |ActiveCmdhPolicy       |  activeCmdhPolicy         |
|        2050           |CmdhDefaults           |      cmdhDefaults         |
|        2051           |CmdhDefEcValues        |   cmdhDefEcValues         |
|        2052           |cmdhDefEcParamsValues  |     cmdhDefEcParamsValues |
|        2053           |CmdhLimits             |     cmdhLimits            |
|        2054           |CmdhNetworkAccessRules |  cmdhNetworkAccessRules   |
|        2055           |CmdhNwAccessRule       |   cmdhNwAccessRule        |
|        2056           |CmdhBuffer             |     cmdhBuffer            |
|        3200           | Digital Input         |   digitalInput            |
|        3201           | Digital Output        |  digitalOutput            |
|        3202           | Analogue Input        |     analogInput           |
|        3203           | Analogue Output       | analogOutput              |
|        3300           | Generic Sensor        |   genericSensor           |
|        3301           | Illuminance Sensor    |  presenceSensor           |
|        3302           | Presence Sensor       |      presenceSensor       |
|        3303           | Temperature Sensor    |   tempSensor              |
|        3304           | Humidity Sensor       |     humidSensor           |
|        3305           | Power Measurement     |     pwrMea                |
|        3306           | Actuation             |  actuation                |
|        3308           | Set Point             |   setPoint                |
|        3310           | Load Control          |     loadCtrl              |
|        3311           | Light Control         |   lightCtrl               |
|        3312           | Power Control         |  pwrCtrl                  |
|        3313           | Accelerometer         |     accelerometer         |
|        3314           | Magnetometer          | magnetometer              |
|        3315           | Barometer             | barometer                 |


Unique Resource Id
        "objectInstanceHandle": 4000,
        "objectVersion": 4001,
        "dInState": 5500,
        "counter": 5501,
        "dInPolarity": 5502,
        "debouncePeriod": 5503,
        "edgeSelection": 5504,
        "counterReset": 5505,
        "dOutState": 5550,
        "dOutpolarity": 5551,
        "aInCurrValue": 5600,
        "minMeaValue": 5601,
        "maxMeaValue": 5602,
        "minRangeValue": 5603,
        "maxRangeValue": 5604,
        "resetMinMaxMeaValues": 5605,
        "aOutCurrValue": 5650,
        "sensorValue": 5700,
        "units": 5701,
        "xValue": 5702,
        "yValue": 5703,
        "zValue": 5704,
        "compassDir": 5705,
        "colour": 5706,
        "appType": 5750,
        "sensorType": 5751,
        "instActivePwr": 5800,
        "minMeaActivePwr": 5801,
        "maxMeaActivePwr": 5802,
        "minRangeActivePwr": 5803,
        "maxRangeActivePwr": 5804,
        "cumulActivePwr": 5805,
        "activePwrCal": 5806,
        "instReactivePwr": 5810,
        "minMeaReactivePwr": 5811,
        "maxMeaReactivePwr": 5812,
        "minRangeReactivePwr": 5813,
        "maxRangeReactivePwr": 5814,
        "cumulReactivePwr": 5815,
        "reactivePwrCal": 5816,
        "pwrFactor": 5820,
        "currCal": 5821,
        "resetCumulEnergy": 5822,
        "eventId": 5823,
        "startTime": 5824,
        "durationInMin": 5825,
        "criticalLevel": 5826,
        "avgLoadAdjPct": 5827,
        "dutyCycle": 5828,
        "onOff": 5850,
        "dimmer": 5851,
        "onTime": 5852,
        "mstateOut": 5853,
        "setPointValue": 5900,
        "busyToClearDelay": 5903,
        "clearToBusyDelay": 5904,
        "hostDeviceManuf": 5905,
        "hostDeviceMdl": 5906,
        "hostDeviceUID": 5907,
        "hostDeviceSwVer": 5908

Specified Resource Id
    "specificRid": {
        "lwm2mSecurity": {
            "lwm2mServerURI": 0,
            "bootstrapServer": 1,
            "securityMode": 2,
            "pubKeyId": 3,
            "serverPubKeyId": 4,
            "secretKey": 5,
            "smsSecurityMode": 6,
            "smsBindingKeyParam": 7,
            "smsBindingSecretKey": 8,
            "lwm2mServerSmsNum": 9,
            "shortServerId": 10,
            "clientHoldOffTime": 11
        },
        "lwm2mServer": {
            "shortServerId": 0,
            "lifetime": 1,
            "defaultMinPeriod": 2,
            "defaultMaxPeriod": 3,
            "disable": 4,
            "disableTimeout": 5,
            "notificationStoring": 6,
            "binding": 7,
            "regUpdateTrigger": 8
        },
        "accessControl": {
            "objectId": 0,
            "objectInstanceId": 1,
            "ACL": 2,
            "ACLOwner": 3
        },
        "device": {
            "manuf": 0,
            "model": 1,
            "serial": 2,
            "firmware": 3,
            "reboot": 4,
            "factoryReset": 5,
            "availPwrSrc": 6,
            "pwrSrcVoltage": 7,
            "pwrSrcCurrent": 8,
            "battLevel": 9,
            "memFree": 10,
            "errCode": 11,
            "resetErrCode": 12,
            "currTime": 13,
            "UTCOffset": 14,
            "timezone": 15,
            "suppBindAndMode": 16,
            "devType": 17,
            "hwVer": 18,
            "swVer": 19,
            "battStatus": 20,
            "memTotal": 21
        },
        "connMonitor": {
            "nwkBearer": 0,
            "availNwkBearer": 1,
            "radioSS": 2,
            "linkQuality": 3,
            "ip": 4,
            "routeIp": 5,
            "linkUtil": 6,
            "APN": 7,
            "cellId": 8,
            "SMNC": 9,
            "SMCC": 10
        },
        "firmware": {
            "package": 0,
            "packageURI": 1,
            "update": 2,
            "state": 3,
            "updateSuppObjects": 4,
            "updateResult": 5,
            "pkgName": 6,
            "pkgVer": 7
        },
        "location": {
            "lat": 0,
            "lon": 1,
            "alt": 2,
            "uncertainty": 3,
            "velocity": 4,
            "timestamp": 5
        },
        "connStatistics": {
            "SMSTxCounter": 0,
            "SMSRxCounter": 1,
            "txData": 2,
            "rxData": 3,
            "maxMsgSize": 4,
            "avgMsgSize": 5,
            "startOrReset": 6
        },
        "digitalInput": {
            "dInState": 5500,
            "counter": 5501,
            "dInPolarity": 5502,
            "debouncePeriod": 5503,
            "edgeSelection": 5504,
            "counterReset": 5505,
            "appType": 5750,
            "sensorType": 5751
        },
        "digitalOutput": {
            "dOutState": 5550,
            "dOutpolarity": 5551,
            "appType": 5750
        },
        "analogInput": {
            "aInCurrValue": 5600,
            "minMeaValue": 5601,
            "maxMeaValue": 5602,
            "minRangeValue": 5603,
            "maxRangeValue": 5604,
            "resetMinMaxMeaValues": 5605,
            "appType": 5750,
            "sensorType": 5751
        },
        "analogOutput": {
            "aOutCurrValue": 5650,
            "minRangeValue": 5603,
            "maxRangeValue": 5604,
            "appType": 5750
        },
        "genericSensor": {
            "sensorValue": 5700,
            "units": 5701,
            "minMeaValue": 5601,
            "maxMeaValue": 5602,
            "minRangeValue": 5603,
            "maxRangeValue": 5604,
            "resetMinMaxMeaValues": 5605,
            "appType": 5750,
            "sensorType": 5751
        },
        "illumSensor": {
            "sensorValue": 5700,
            "units": 5701,
            "minMeaValue": 5601,
            "maxMeaValue": 5602,
            "minRangeValue": 5603,
            "maxRangeValue": 5604,
            "resetMinMaxMeaValues": 5605
        },
        "presenceSensor": {
            "dInState": 5500,
            "counter": 5501,
            "counterReset": 5505,
            "sensorType": 5751,
            "busyToClearDelay": 5903,
            "clearToBusyDelay": 5904
        },
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
        "pwrMea": {
            "instActivePwr": 5800,
            "minMeaActivePwr": 5801,
            "maxMeaActivePwr": 5802,
            "minRangeActivePwr": 5803,
            "maxRangeActivePwr": 5804,
            "cumulActivePwr": 5805,
            "activePwrCal": 5806,
            "instReactivePwr": 5810,
            "minMeaReactivePwr": 5811,
            "maxMeaReactivePwr": 5812,
            "minRangeReactivePwr": 5813,
            "maxRangeReactivePwr": 5814,
            "resetMinMaxMeaValues": 5605,
            "cumulReactivePwr": 5815,
            "reactivePwrCal": 5816,
            "pwrFactor": 5820,
            "currCal": 5821,
            "resetCumulEnergy": 5822
        },
        "actuation": {
            "onOff": 5850,
            "dimmer": 5851,
            "onTime": 5852,
            "mstateOut": 5853,
            "appType": 5750
        },
        "setPoint": {
            "setPointValue": 5900,
            "colour": 5706,
            "units": 5701,
            "appType": 5750
        },
        "loadCtrl": {
            "eventId": 5823,
            "startTime": 5824,
            "durationInMin": 5825,
            "criticalLevel": 5826,
            "avgLoadAdjPct": 5827,
            "dutyCycle": 5828
        },
        "lightCtrl": {
            "onOff": 5850,
            "dimmer": 5851,
            "colour": 5706,
            "units": 5701,
            "onTime": 5852,
            "cumulActivePwr": 5805,
            "pwrFactor": 5820
        },
        "pwrCtrl": {
            "onOff": 5850,
            "dimmer": 5851,
            "onTime": 5852,
            "cumulActivePwr": 5805,
            "pwrFactor": 5820
        },
        "accelerometer": {
            "units": 5701,
            "xValue": 5702,
            "yValue": 5703,
            "zValue": 5704,
            "minRangeValue": 5603,
            "maxRangeValue": 5604
        },
        "magnetometer": {
            "units": 5701,
            "xValue": 5702,
            "yValue": 5703,
            "zValue": 5704,
            "compassDir": 5705
        },
        "barometer": {
            "sensorValue": 5700,
            "units": 5701,
            "minMeaValue": 5601,
            "maxMeaValue": 5602,
            "minRangeValue": 5603,
            "maxRangeValue": 5604,
            "resetMinMaxMeaValues": 5605
        }
    },