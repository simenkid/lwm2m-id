lwm2m-id
===============
<br />

[![Travis branch](https://img.shields.io/travis/simenkid/lwm2m-id/master.svg?maxAge=2592000)](https://travis-ci.org/simenkid/lwm2m-id)
[![npm](https://img.shields.io/npm/v/lwm2m-id.svg?maxAge=2592000)](https://www.npmjs.com/package/lwm2m-id)
[![npm](https://img.shields.io/npm/l/lwm2m-id.svg?maxAge=2592000)](https://www.npmjs.com/package/lwm2m-id)

<br />

## Table of Contents

1. [Overiew](#Overiew)  
2. [Installation](#Installation)  
3. [Usage](#Usage)
4. [APIs](#APIs)  
6. [Table of Identifiers](#Identifiers) 

<br />

<a name="Overiew"></a>  
## 1. Overview  

**lwm2m-id** is a dictionary of identifiers defined by [OMA LightweightM2M(v1.0)](http://technical.openmobilealliance.org/Technical/technical-information/release-program/current-releases/oma-lightweightm2m-v1-0), IPSO SmartObject Guideline([Smart Objects Starter Pack1.0](http://www.ipso-alliance.org/smart-object-guidelines/) and [Smart Objects Expansion Pack](http://www.ipso-alliance.org/so-expansion-pack/)). Please visit their websites for more information.  
  
<a name="Installation"></a>
## 2. Installation

> $ npm install lwm2m-id --save
  

<a name="Usage"></a>
## 3. Usage

**lwm2m-id** provides you with two getters, i.e. `getOid()` and `getRid()`,  to get the key-value pair of an Object and a Resource identifier. The getter returns an item which has properties of `'key'` and `'value'`, or returns `undefined` if not found. In the returned item, `item.key` is the idetifier in string and `item.value` is the identifier in number.  

Let me show you some examples.  

```js
var m2mid = require('lwm2m-id')

// get Object Id
var oidItem1 = m2mid.getOid('device');      // { key: 'device', value: 3 }
var oidItem2 = m2mid.getOid(3);             // { key: 'device', value: 3 }
var oidItem3 = m2mid.getOid('3');           // { key: 'device', value: 3 }
var oidItem4 = m2mid.getOid(999);           // undefined
var oidItem5 = m2mid.getOid('noSuchId');    // undefined

var oidKey = m2mid.getOid(3).key;           // 'device'
var oidId = m2mid.getOid('device').value;   // 3

// get Resource Id
//   (1) The rid is specific to an Object
var ridItem1 = m2mid.getRid('lightCtrl', 'onOff');    // { key: 'onOff', value: 5850 }
var ridItem2 = m2mid.getRid(3311, 'onOff');           // { key: 'onOff', value: 5850 }
var ridItem3 = m2mid.getRid(3311, 5850);              // { key: 'onOff', value: 5850 }
var ridItem4 = m2mid.getRid('3311', '5850');          // { key: 'onOff', value: 5850 }
var ridItem5 = m2mid.getOid('lightCtrl', 'noSuchId'); // undefined
var ridItem6 = m2mid.getOid('noSuchId', 5850);        // undefined

var ridKey = m2mid.getRid('lightCtrl', 5850).key;     // 'onOff'
var ridId = m2mid.getRid(3311, 'onOff').value;        // 5850

//   (2) The rid is an unique id
var ridItem7 = m2mid.getRid('sensorValue');           // { key: 'sensorValue', value: 5700 }
var ridItem8 = m2mid.getRid(5700);                    // { key: 'sensorValue', value: 5700 }
var ridItem8 = m2mid.getRid('5700');                  // { key: 'sensorValue', value: 5700 }

var ridKey = m2mid.getRid(5700).key;                  // 'sensorValue'
var ridId = m2mid.getRid('sensorValue').value;        // 5700
```
  
<a name="APIs"></a>
## 4. APIs

* [.getOid()](#API_getOid)
* [.getRid()](#API_getRid)
* [.getOdef()](#API_getOdef)
* [.getRdef()](#API_getRdef)

********************************************
<a name="API_getOid"></a>
### .getOid(oid)
> Returns an item of the Object identifier.

**Arguments**

* oid (*String|Number*): `oid` can be given with a string or a number. Notice that a numbered string will be recognized as a number, e.g. '128' is equal to 128.

**Returns:**  
  
* (_Object_ | _Undefined_) Returns an item of `{ key: 'sampleId', value: 1234 }`, otherwise returns `undefined` if not found.


**Example**

```js
lwm2mid.getOid('temperature');  // { key: 'temperature', value: 3303 }
lwm2mid.getOid(3303);           // { key: 'temperature', value: 3303 }
lwm2mid.getOid('3303');         // { key: 'temperature', value: 3303 }

lwm2mid.getOid('xxxx');         // undefined 
lwm2mid.getOid('9999');         // undefined 
lwm2mid.getOid(9999);           // undefined 
```
********************************************
<br />

<a name="API_getRid"></a>
### .getRid([oid,] rid)
> Returns an item of the Resource identifier.  
>  
> There are two kinds of Resource id, the **Resource id specific to an Object** and the **unique Resource id**. In the former case, the meaning of a Resource is specific to an Object that holds it. An **unique Resource id** indicates that the Resouce id is a reusable one and its id number is always constant and unique across Objects. In addition, an Object can use both of these two kinds of Resource id to define its characteristic.  
>  
> To query a **Resource id specific to an Object**, both `oid` and `rid` should be given.  
> To query an **unique Resource id**, only the single argument `rid` is needed.  
  

**Arguments**  

- oid (*String|Number*, optional): `oid` can be given with a string or a number. Notice that a numbered string will be recognized as a number, e.g. '128' is equal to 128.
- rid (*String|Number*): `rid` can be given with a string or a number. Notice that a numbered string will be recognized as a number, e.g. '128' is equal to 128.

**Returns:**  
  
* (_Object_ | _Undefined_) Returns an item of `{ key: 'sampleId', value: 1234 }`, otherwise returns `undefined` if not found.


**Example**  

```js
// get a Resource id specific to an Object
lwm2mid.getRid('location', 'lon');             // { key: 'lon', value: 1 }
lwm2mid.getRid(6, 1);                          // { key: 'lon', value: 1 }
lwm2mid.getRid('temperature', 'sensorValue');  // { key: 'sensorValue', value: 5700 }
lwm2mid.getRid(3303, 5700);                    // { key: 'sensorValue', value: 5700 }
lwm2mid.getRid('temperature', '5700');         // { key: 'sensorValue', value: 5700 }

// get an unqiue Resource id
lwm2mid.getRid('appType');                     // { key: 'appType', value: 5750 }
lwm2mid.getRid(5750);                          // { key: 'appType', value: 5700 }
lwm2mid.getRid('5750');                        // { key: 'appType', value: 5750 }

```
********************************************
<br />

<a name="API_getOdef"></a>
### .getOdef(oid)
> Returns the sepc. definitions of an Object.  

**Arguments**

- oid (*String|Number*): `oid` can be given with a string or a number. Notice that a numbered string will be recognized as a number, e.g. '128' is equal to 128.

**Returns:**  
  
* (_Object_ | _Undefined_) Returns the definition with an data object, otherwise returns `undefined` if not found. The definition object is of the form: `{ multi: false, mand: true }`

|       Property        |      Description         |       Possilbe Settings   |  
|:---------------------:|:------------------------:|:-------------------------:|  
|        multi          | Allow multiple instances | true, false               |  
|        mand           | Mandatory                | true, false               |  
  
\* Please refer to **Appendix** in OMA LightweightM2M(v1.0) specification for details.
  
**Example**

```js
lwm2mid.getOdef('temperature');  
// returns { "multi": true, "mand": false }
  
lwm2mid.getOdef('lightCtrl');  
// returns { "multi": true, "mand": false }

lwm2mid.getOdef('device');  
// returns { "multi": false, "mand": true }

lwm2mid.getOdef('xxxx');            // undefined 
```
********************************************
<br />

<a name="API_getRdef"></a>
### .getRdef(oid, rid)
> Returns the definitions of a Resource specific to an Object.

**Arguments**

- oid (*String|Number*, optional): `oid` can be given with a string or a number. Notice that a numbered string will be recognized as a number, e.g. '128' is equal to 128.
- rid (*String|Number*): `rid` can be given with a string or a number. Notice that a numbered string will be recognized as a number, e.g. '128' is equal to 128.


**Returns:**  
  
* (_Object_ | _Undefined_) Returns the definition with an data object, otherwise returns `undefined` if not found. The definition object is of the form: `{ access: null, multi: false, mand: true, type: "boolean", range: null, init: false }`

|       Property        |      Description         |       Possilbe Settings   |  
|:---------------------:|:------------------------:|:-------------------------:|  
|        access         | Access control           | 'R', 'W', 'RW', 'E', null (cannot access) |  
|        multi          | Allow multiple instances | true, false               |  
|        mand           | Mandatory                | true, false               |  
|        type*          | Resource value data type | 'boolean', integer', 'float', string', 'time', execute', 'opaque' |  
|        range          | Limit of Resource value  | A number, null if no limit. |  
  
\* Please refer to **Appendix C. Data Types** in OMA LightweightM2M(v1.0) specification for details.
  
**Example**

```js
lwm2mid.getRdef('temperature', 'sensorValue');  
// returns { "access": "R", "multi": false, "mand": true, "type": "float", "range": null }
  
lwm2mid.getRdef('lightCtrl', 5850);  
// returns { "access": "RW", "multi": false, "mand": true, "type": "boolean", "range": null }

lwm2mid.getRdef('temperature');     // undefined. rid should be given
lwm2mid.getRdef('xxxx', 1234);      // undefined 
```
********************************************
<br />

<a name="Identifiers"></a>
## 5. Table of Identifiers

* IPSO/OMA-LWM2M Object ids  

|       Object Id       |      lwm2m-id Key        | Description/Object Name|  
|:---------------------:|:------------------------:|:----------------------:|  
|        0              | lwm2mSecurity            | LWM2M Security         |  
|        1              | lwm2mServer              | LWM2M Server           |  
|        2              | accessCtrl               | Access Control         |  
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
|        3200           | dIn                      | Digital Input          |  
|        3201           | dOut                     | Digital Output         |  
|        3202           | aIn                      | Analogue Input         |  
|        3203           | aOut                     | Analogue Output        |  
|        3300           | generic                  | Generic Sensor         |  
|        3301           | illuminance              | Illuminance Sensor     |  
|        3302           | presence                 | Presence Sensor        |  
|        3303           | temperature              | Temperature Sensor     |  
|        3304           | humidity                 | Humidity Sensor        |  
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

|       Resource Id     |      lwm2m-id Key        |   Description/Resource Name        |  
|:---------------------:|:------------------------:|:----------------------------------:|  
|        4000           | objectInstanceHandle     | Object Instance Handle             |  
|        4001           | objectVersion            | Object Version                     |  
|        5500           | dInState                 | Digital Input State                |  
|        5501           | counter                  | Digital Input Counter              |  
|        5502           | dInPolarity              | Digital Input Polarity             |  
|        5503           | debouncePeriod           | Digital Input Debounce Period      |  
|        5504           | edgeSelection            | Digital Input Edge Selection       |  
|        5505           | counterReset             | Digital Input Counter Reset        |  
|        5550           | dOutState                | Digital Output State               |  
|        5551           | dOutPolarity             | Digital Output Polarity            |  
|        5600           | aInCurrValue             | Analog Input Current Value         |  
|        5601           | minMeaValue              | Min Measured Value                 |  
|        5602           | maxMeaValue              | Max Measured Value                 |  
|        5603           | minRangeValue            | Min Range Value                    |  
|        5604           | maxRangeValue            | Max Range Value                    |  
|        5605           | resetMinMaxMeaValues     | Reset Min and Max Measured Values  |  
|        5650           | aOutCurrValue            | Analog Output Current Value        |  
|        5700           | sensorValue              | Sensor Value                       |  
|        5701           | units                    | Sensor Units                       |  
|        5702           | xValue                   | X Value                            |  
|        5703           | yValue                   | Y Value                            |  
|        5704           | zValue                   | Z Value                            |  
|        5705           | compassDir               | Compass Direction                  |  
|        5706           | colour                   | Colour                             |  
|        5750           | appType                  | Application Type                   |  
|        5751           | sensorType               | Sensor Type                        |  
|        5800           | instActivePwr            | Instantaneous active power         |  
|        5801           | minMeaActivePwr          | Min Measured active power          |  
|        5802           | maxMeaActivePwr          | Max Measured active power          |  
|        5803           | minRangeActivePwr        | Min Range active power             |  
|        5804           | maxRangeActivePwr        | Max Range active power             |  
|        5805           | cumulActivePwr           | Cumulative active power            |  
|        5806           | activePwrCal             | Active Power Calibration           |  
|        5810           | instReactivePwr          | Instantaneous reactive power       |  
|        5811           | minMeaReactivePwr        | Min Measured reactive power        |  
|        5812           | maxMeaReactivePwr        | Max Measured reactive power        |  
|        5813           | minRangeReactivePwr      | Min Range reactive power           |  
|        5814           | maxRangeReactivePwr      | Max Range reactive power           |  
|        5815           | cumulReactivePwr         | Cumulative reactive power          |  
|        5816           | reactivePwrCal           | Reactive Power Calibration         |  
|        5820           | pwrFactor                | Power factor                       |  
|        5821           | currCal                  | Current Calibration                |  
|        5822           | resetCumulEnergy         | Reset Cumulative energy            |  
|        5823           | eventId                  | Event Identifier                   |  
|        5824           | startTime                | Start Time                         |  
|        5825           | durationInMin            | Duration In Min                    |  
|        5826           | criticalLevel            | Critical Level                     |  
|        5827           | avgLoadAdjPct            | Avg Load AdjPct                    |  
|        5828           | dutyCycle                | Duty Cycle                         |  
|        5850           | onOff                    | On/Off                             |  
|        5851           | dimmer                   | Dimmer                             |  
|        5852           | onTime                   | On time                            |  
|        5853           | mStateOut                | Muti-state Output                  |  
|        5900           | setPointValue            | Set Point Value                    |  
|        5903           | busyToClearDelay         | Busy to Clear delay                |  
|        5904           | clearToBusyDelay         | Clear to Busy delay                |  
|        5905           | hostDeviceManuf          | Host Device Manufacturer           |  
|        5906           | hostDeviceMdl            | Host Device Model Number           |  
|        5907           | hostDeviceUID            | Host Device Unique ID              |  
|        5908           | hostDeviceSwVer          | Host Device Software Version       |  
  

* IPSO/OMA-LWM2M specified Resource ids (this class of ids is specified with Objects)  

    - oid = lwm2mSecurity 
    ```js
        {
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
        }
    ```

    - oid = lwm2mServer 
    ```js
        {
            "shortServerId": 0,
            "lifetime": 1,
            "defaultMinPeriod": 2,
            "defaultMaxPeriod": 3,
            "disable": 4,
            "disableTimeout": 5,
            "notificationStoring": 6,
            "binding": 7,
            "regUpdateTrigger": 8
        }
    ```

    - oid = accessControl 
    ```js
        {
            "objectId": 0,
            "objectInstanceId": 1,
            "ACL": 2,
            "ACLOwner": 3
        }
    ```

    - oid = device 
    ```js
        {
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
            "bindAndModes": 16,
            "devType": 17,
            "hwVer": 18,
            "swVer": 19,
            "battStatus": 20,
            "memTotal": 21
        }
    ```

    - oid = connMonitor 
    ```js
        {
            "nwkBearer": 0,
            "availNwkBearer": 1,
            "radioStrength": 2,
            "linkQuality": 3,
            "ip": 4,
            "routeIp": 5,
            "linkUtil": 6,
            "APN": 7,
            "cellId": 8,
            "SMNC": 9,
            "SMCC": 10
        }
    ```

    - oid = firmware 
    ```js
        {
            "package": 0,
            "packageURI": 1,
            "update": 2,
            "state": 3,
            "updateSuppObjects": 4,
            "updateResult": 5,
            "pkgName": 6,
            "pkgVer": 7
        }
    ```

    - oid = location 
    ```js
        {
            "lat": 0,
            "lon": 1,
            "alt": 2,
            "uncertainty": 3,
            "velocity": 4,
            "timestamp": 5
        }
    ```

    - oid = connStatistics 
    ```js
        {
            "SMSTxCounter": 0,
            "SMSRxCounter": 1,
            "txData": 2,
            "rxData": 3,
            "maxMsgSize": 4,
            "avgMsgSize": 5,
            "startOrReset": 6
        }
    ```

    - oid = dIn 
    ```js
        {
            "dInState": 5500,
            "counter": 5501,
            "dInPolarity": 5502,
            "debouncePeriod": 5503,
            "edgeSelection": 5504,
            "counterReset": 5505,
            "appType": 5750,
            "sensorType": 5751
        }
    ```

    - oid = dOut 
    ```js
        {
            "dOutState": 5550,
            "dOutPolarity": 5551,
            "appType": 5750
        }
    ```

    - oid = aIn 
    ```js
        {
            "aInCurrValue": 5600,
            "minMeaValue": 5601,
            "maxMeaValue": 5602,
            "minRangeValue": 5603,
            "maxRangeValue": 5604,
            "resetMinMaxMeaValues": 5605,
            "appType": 5750,
            "sensorType": 5751
        }
    ```

    - oid = aOut 
    ```js
        {
            "aOutCurrValue": 5650,
            "minRangeValue": 5603,
            "maxRangeValue": 5604,
            "appType": 5750
        }
    ```

    - oid = generic 
    ```js
        {
            "sensorValue": 5700,
            "units": 5701,
            "minMeaValue": 5601,
            "maxMeaValue": 5602,
            "minRangeValue": 5603,
            "maxRangeValue": 5604,
            "resetMinMaxMeaValues": 5605,
            "appType": 5750,
            "sensorType": 5751
        }
    ```

    - oid = illuminance 
    ```js
        {
            "sensorValue": 5700,
            "units": 5701,
            "minMeaValue": 5601,
            "maxMeaValue": 5602,
            "minRangeValue": 5603,
            "maxRangeValue": 5604,
            "resetMinMaxMeaValues": 5605
        }
    ```

    - oid = presence 
    ```js
        {
            "dInState": 5500,
            "counter": 5501,
            "counterReset": 5505,
            "sensorType": 5751,
            "busyToClearDelay": 5903,
            "clearToBusyDelay": 5904
        }
    ```

    - oid = temperature 
    ```js
        {
            "sensorValue": 5700,
            "units": 5701,
            "minMeaValue": 5601,
            "maxMeaValue": 5602,
            "minRangeValue": 5603,
            "maxRangeValue": 5604,
            "resetMinMaxMeaValues": 5605
        }
    ```

    - oid = humidity 
    ```js
        {
            "sensorValue": 5700,
            "units": 5701,
            "minMeaValue": 5601,
            "maxMeaValue": 5602,
            "minRangeValue": 5603,
            "maxRangeValue": 5604,
            "resetMinMaxMeaValues": 5605
        }
    ```

    - oid = pwrMea 
    ```js
        {
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
        }
    ```

    - oid = actuation 
    ```js
        {
            "onOff": 5850,
            "dimmer": 5851,
            "onTime": 5852,
            "mStateOut": 5853,
            "appType": 5750
        }
    ```

    - oid = setPoint 
    ```js
        {
            "setPointValue": 5900,
            "colour": 5706,
            "units": 5701,
            "appType": 5750
        }
    ```

    - oid = loadCtrl 
    ```js
        {
            "eventId": 5823,
            "startTime": 5824,
            "durationInMin": 5825,
            "criticalLevel": 5826,
            "avgLoadAdjPct": 5827,
            "dutyCycle": 5828
        }
    ```

    - oid = lightCtrl 
    ```js
        {
            "onOff": 5850,
            "dimmer": 5851,
            "colour": 5706,
            "units": 5701,
            "onTime": 5852,
            "cumulActivePwr": 5805,
            "pwrFactor": 5820
        }
    ```

    - oid = pwrCtrl 
    ```js
        {
            "onOff": 5850,
            "dimmer": 5851,
            "onTime": 5852,
            "cumulActivePwr": 5805,
            "pwrFactor": 5820
        }
    ```

    - oid = accelerometer 
    ```js
        {
            "units": 5701,
            "xValue": 5702,
            "yValue": 5703,
            "zValue": 5704,
            "minRangeValue": 5603,
            "maxRangeValue": 5604
        }
    ```

    - oid = magnetometer 
    ```js
        {
            "units": 5701,
            "xValue": 5702,
            "yValue": 5703,
            "zValue": 5704,
            "compassDir": 5705
        }
    ```

    - oid = barometer 
    ```js
        {
            "sensorValue": 5700,
            "units": 5701,
            "minMeaValue": 5601,
            "maxMeaValue": 5602,
            "minRangeValue": 5603,
            "maxRangeValue": 5604,
            "resetMinMaxMeaValues": 5605
        }
    ```

    - oid = voltage, current, frequency, depth, percentage, altitude, load, pressure, loudness, concentration, acidity, conductivity, power, powerFactor, distance
    ```js
        {
            "sensorValue": 5700,
            "units": 5701,
            "minMeaValue": 5601,
            "maxMeaValue": 5602,
            "minRangeValue": 5603,
            "maxRangeValue": 5604,
            "resetMinMaxMeaValues": 5605,
            "calOffset": 5535,
            "appType": 5750
        }
    ```

    - oid = energy 
    ```js
        {
            "cumulActivePwr": 5805,
            "units": 5701,
            "resetCumulEnergy": 5822,
            "appType": 5750
        }
    ```

    - oid = direction 
    ```js
        {
            "compassDir": 5705,
            "minMeaValue": 5601,
            "maxMeaValue": 5602,
            "resetMinMaxMeaValues": 5605,
            "appType": 5750
        }
    ```

    - oid = time 
    ```js
        {
            "currentTime": 5506,
            "fracTime": 5507,
            "appType": 5750
        }
    ```

    - oid = gyrometer 
    ```js
        {
            "units": 5701,
            "xValue": 5702,
            "yValue": 5703,
            "zValue": 5704,
            "minRangeValue": 5603,
            "maxRangeValue": 5604,
            "minXValue": 5508,
            "maxXValue": 5509,
            "minYValue": 5510,
            "maxYValue": 5511,
            "minZValue": 5512,
            "maxZValue": 5513,
            "resetMinMaxMeaValues": 5605,
            "appType": 5750
        }
    ```

    - oid = color 
    ```js
        {
            "colour": 5706,
            "units": 5701,
            "appType": 5750
        }
    ```

    - oid = gpsLocation 
    ```js
        {
            "latitude": 5513,
            "longitude": 5514,
            "altitude": 5515,
            "uncertainty": 5516,
            "compassDir": 5705,
            "velocity": 5517,
            "timestamp": 5518,
            "appType": 5750
        }
    ```

    - oid = positioner 
    ```js
        {
            "currentPos": 5536,
            "transTime": 5537,
            "remainTime": 5538,
            "minMeaValue": 5601,
            "maxMeaValue": 5602,
            "resetMinMaxMeaValues": 5605,
            "minLimit": 5519,
            "maxLimit": 5520,
            "appType": 5750
        }
    ```

    - oid = buzzer 
    ```js
        {
            "onOff": 5850,
            "level": 5548,
            "timeDuration": 5521,
            "minOffTime": 5525,
            "appType": 5750
        }
    ```

    - oid = audioClip 
    ```js
        {
            "clip": 5522,
            "trigger": 5523,
            "level": 5548,
            "soundDuration": 5524,
            "appType": 5750
        }
    ```

    - oid = timer 
    ```js
        {
            "timeDuration": 5521,
            "remainTime": 5538,
            "minOffTime": 5525,
            "trigger": 5523,
            "onOff": 5850,
            "counter": 5501,
            "cumulTime": 5544,
            "digitalState": 5543,
            "eventCounter": 5534,
            "mode": 5526,
            "appType": 5750
        }
    ```

    - oid = addressableTextDisplay 
    ```js
        {
            "text": 5527,
            "xCoord": 5528,
            "yCoord": 5529,
            "maxXCoord": 5545,
            "maxYCoord": 5546,
            "clearDisplay": 5530,
            "contrast": 5531,
            "level": 5548,
            "appType": 5750
        }
    ```

    - oid = onOffSwitch 
    ```js
        {
            "dInState": 5500,
            "counter": 5501,
            "onTime": 5852,
            "offTime": 5853,
            "appType": 5750
        }
    ```

    - oid = levelControl 
    ```js
        {
            "level": 5548,
            "onTime": 5852,
            "offTime": 5853,
            "appType": 5750
        }
    ```

    - oid = upDownControl 
    ```js
        {
            "incInputState": 5532,
            "decInputState": 5533,
            "upCounter": 5541,
            "downCounter": 5542,
            "appType": 5750
        }
    ```

    - oid = multipleAxisJoystick 
    ```js
        {
            "dInState": 5500,
            "counter": 5501,
            "xValue": 5702,
            "yValue": 5703,
            "zValue": 5704,
            "appType": 5750
        }
    ```

    - oid = rate 
    ```js
        {
            "sensorValue": 5700,
            "units": 5701,
            "minMeaValue": 5601,
            "maxMeaValue": 5602,
            "minRangeValue": 5603,
            "maxRangeValue": 5604,
            "resetMinMaxMeaValues": 5605,
            "calOffset": 5535,
            "appType": 5750
        }
    ```

    - oid = pushButton 
    ```js
        {
            "dInState": 5500,
            "counter": 5501,
            "appType": 5750
        }
    ```

    - oid = multistateSelector 
    ```js
        {
            "mStateIn": 5547,
            "appType": 5750
        }
    ```

<br />