lwm2m-id
===============
<br />
## Table of Contents

1. [Overiew](#Overiew)  
2. [Installation](#Installation)  
3. [Usage](#Usage)
4. [APIs](#APIs)  
5. [Custom Definitions](#Custom)  
6. [Table of Identifiers](#Identifiers) 
<br />

<a name="Overiew"></a>  
## 1. Overview  

**lwm2m-id** is a dictionary of identifiers defined by [OMA LightweightM2M(v1.0)](http://technical.openmobilealliance.org/Technical/technical-information/release-program/current-releases/oma-lightweightm2m-v1-0) and IPSO SmartObject Guideline([Smart Objects Starter Pack1.0](http://www.ipso-alliance.org/smart-object-guidelines/)). If you want more information about what lwm2m and IPSO are doing, you can take a look at their websites.  
  
<a name="Installation"></a>
## 2. Installation

> $ npm install lwm2m-id --save
  

<a name="Usage"></a>
## 3. Usage

**lwm2m-id** provides you with two getters to get the key-value pair of the identifier. This two getter are `getOid()` and `getRid()`. The item, returned from the getter, has properties `'key'` and `'value'` in string and number, respectively. Let me show you some example.  

```js
var m2mid = require('lwm2m-id')

// get Object Id
var oidItem1 = m2mid.getOid(oid);   // { key: 'xxx', value: 1234 }
var oidItem2 = m2mid.getOid(oid);   // undefined

var oidKey = m2mid.getOid(oid).key;     // 'xxx'
var oidId = m2mid.getOid(oid).value;    // 1234

// get Resource Id

var ridItem1 = m2mid.getRid(oid, rid);  // { key: 'xxx', value: 1234 }
var ridItem2 = m2mid.getOid(oid, rid);  // undefined

var ridKey = m2mid.getRid(oid, rid).key;        // 'xxx'
var ridId = m2mid.getRid(oid, rid).value;       // 1234


var ridItem3 = m2mid.getRid(rid);   // { key: 'xxx', value: 1234 }

var ridKey = m2mid.getRid(rid).key;     // 'xxx'
var ridId = m2mid.getRid(rid).value;        // 1234


```
  
<a name="APIs"></a>
## 4. APIs

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
<br />

<a name="Custom"></a>
## 5. Custom Definitions

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

<a name="Identifiers"></a>
## 5. Table of Identifiers

* IPSO/OMA-LWM2M Object ids  

|       Object Id       |      lwm2m-id Key        | Description/Object Name|  
|:---------------------:|:------------------------:|:----------------------:|  
|        0              | lwm2mSecurity            | LWM2M Security         |  
|        1              | lwm2mServer              | LWM2M Server           |  
|        2              | accessControl            | Access Control         |  
|        3              | device                   | Device                 |  
|        4              | connMonitor              | Connectivity Monitoring|  
|        5              | firmware                 | Firmware               |  
|        6              | location                 | Location               |  
|        7              | connStatistics           | Connectivity Statistics|  
|        8              | lockAndWipe              | Lock and Wipe          |  
|        9              | swUpdate                 | Sofware Update         |  
|        10             | cellularConn             | Cellular connectivity  |  
|        11             | apnConnProfile           | APN connection profile |  
|        12             | wlanConn                 | WLAN connectivity      |  
|        13             | bearerSelection          | Bearer selection       |  
|        15             | devCapMgmt               | DevCapMgmt             |  
|        2048           | cmdhPolicy               | CmdhPolicy             |  
|        2049           | activeCmdhPolicy         | ActiveCmdhPolicy       |  
|        2050           | cmdhDefaults             | CmdhDefaults           |  
|        2051           | cmdhDefEcValues          | CmdhDefEcValues        |  
|        2052           | cmdhDefEcParamsValues    | CmdhDefEcParamsValues  |  
|        2053           | cmdhLimits               | CmdhLimits             |  
|        2054           | cmdhNetworkAccessRules   | CmdhNetworkAccessRules |  
|        2055           | cmdhNwAccessRule         | CmdhNwAccessRule       |  
|        2056           | cmdhBuffer               | CmdhBuffer             |  
|        3200           | digitalInput             | Digital Input          |  
|        3201           | digitalOutput            | Digital Output         |  
|        3202           | analogInput              | Analogue Input         |  
|        3203           | analogOutput             | Analogue Output        |  
|        3300           | genericSensor            | Generic Sensor         |  
|        3301           | presenceSensor           | Illuminance Sensor     |  
|        3302           | presenceSensor           | Presence Sensor        |  
|        3303           | tempSensor               | Temperature Sensor     |  
|        3304           | humidSensor              | Humidity Sensor        |  
|        3305           | pwrMea                   | Power Measurement      |  
|        3306           | actuation                | Actuation              |  
|        3308           | setPoint                 | Set Point              |  
|        3310           | loadCtrl                 | Load Control           |  
|        3311           | lightCtrl                | Light Control          |  
|        3312           | pwrCtrl                  | Power Control          |  
|        3313           | accelerometer            | Accelerometer          |  
|        3314           | magnetometer             | Magnetometer           |  
|        3315           | barometer                | Barometer              |  

* IPSO/OMA-LWM2M unique Resource ids (this class of ids is reusable with Objects)  

|       Resource Id     |      lwm2m-id Key        |     Resource Name      |  
|:---------------------:|:------------------------:|:----------------------:|  
|        4000           | objectInstanceHandle     |                        |  
|        4001           | objectVersion            |                        |  
|        5500           | dInState                 |                        |  
|        5501           | counter                  |                        |  
|        5502           | dInPolarity              |                        |  
|        5503           | debouncePeriod           |                        |  
|        5504           | edgeSelection            |                        |  
|        5505           | counterReset             |                        |  
|        5550           | dOutState                |                        |  
|        5551           | dOutpolarity             |                        |  
|        5600           | aInCurrValue             |                        |  
|        5601           | minMeaValue              |                        |  
|        5602           | maxMeaValue              |                        |  
|        5603           | minRangeValue            |                        |  
|        5604           | maxRangeValue            |                        |  
|        5605           | resetMinMaxMeaValues     |                        |  
|        5650           | aOutCurrValue            |                        |  
|        5700           | sensorValue              |                        |  
|        5701           | units                    |                        |  
|        5702           | xValue                   |                        |  
|        5703           | yValue                   |                        |  
|        5704           | zValue                   |                        |  
|        5705           | compassDir               |                        |  
|        5706           | colour                   |                        |  
|        5750           | appType                  |                        |  
|        5751           | sensorType               |                        |  
|        5800           | instActivePwr            |                        |  
|        5801           | minMeaActivePwr          |                        |  
|        5802           | maxMeaActivePwr          |                        |  
|        5803           | minRangeActivePwr        |                        |  
|        5804           | maxRangeActivePwr        |                        |  
|        5805           | cumulActivePwr           |                        |  
|        5806           | activePwrCal             |                        |  
|        5810           | instReactivePwr          |                        |  
|        5811           | minMeaReactivePwr        |                        |  
|        5812           | maxMeaReactivePwr        |                        |  
|        5813           | minRangeReactivePwr      |                        |  
|        5814           | maxRangeReactivePwr      |                        |  
|        5815           | cumulReactivePwr         |                        |  
|        5816           | reactivePwrCal           |                        |  
|        5820           | pwrFactor                |                        |  
|        5821           | currCal                  |                        |  
|        5822           | resetCumulEnergy         |                        |  
|        5823           | eventId                  |                        |  
|        5824           | startTime                |                        |  
|        5825           | durationInMin            |                        |  
|        5826           | criticalLevel            |                        |  
|        5827           | avgLoadAdjPct            |                        |  
|        5828           | dutyCycle                |                        |  
|        5850           | onOff                    |                        |  
|        5851           | dimmer                   |                        |  
|        5852           | onTime                   |                        |  
|        5853           | mstateOut                |                        |  
|        5900           | setPointValue            |                        |  
|        5903           | busyToClearDelay         |                        |  
|        5904           | clearToBusyDelay         |                        |  
|        5905           | hostDeviceManuf          |                        |  
|        5906           | hostDeviceMdl            |                        |  
|        5907           | hostDeviceUID            |                        |  
|        5908           | hostDeviceSwVer          |                        |  
  

* IPSO/OMA-LWM2M specified Resource ids (this class of ids is specified with Objects)  
    - oid = lwm2mSecurity 
    - oid = lwm2mServer 
    - oid = accessControl 
    - oid = device 
    - oid = connMonitor 
    - oid = firmware 
    - oid = location 
    - oid = connStatistics 
    - oid = digitalInput 
    - oid = digitalOutput 
    - oid = analogInput 
    - oid = analogOutput 
    - oid = genericSensor 
    - oid = illumSensor 
    - oid = presenceSensor 
    - oid = tempSensor 
    - oid = humidSensor 
    - oid = pwrMea 
    - oid = actuation 
    - oid = setPoint 
    - oid = loadCtrl 
    - oid = lightCtrl 
    - oid = pwrCtrl 
    - oid = accelerometer 
    - oid = magnetometer 
    - oid = barometer 
