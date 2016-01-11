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

**lwm2m-id** is a dictionary of identifiers defined by [OMA LightweightM2M(v1.0)](http://technical.openmobilealliance.org/Technical/technical-information/release-program/current-releases/oma-lightweightm2m-v1-0) and IPSO SmartObject Guideline([Smart Objects Starter Pack1.0](http://www.ipso-alliance.org/smart-object-guidelines/)). Please visit their websites for more information.  
  
<a name="Installation"></a>
## 2. Installation

> $ npm install lwm2m-id --save
  

<a name="Usage"></a>
## 3. Usage

**lwm2m-id** provides you with two getters, i.e. `getOid()` and `getRid()`,  to get the key-value pair of an Object and a Resource identifier. The getter returns an item which has properties of `'key'` and `'value'`, or returns `undefined` if not found. In the returned item, `item.key` is the idetifier in string and `item.value` is the identifier in number. Let me show you some examples.  

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
lwm2mid.getOid('tempSensor');   // { key: 'tempSensor', value: 3303 }
lwm2mid.getOid(3303);           // { key: 'tempSensor', value: 3303 }
lwm2mid.getOid('3303');         // { key: 'tempSensor', value: 3303 }

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
> There are two kinds of Resource id, the **Resource id specific to an Object** and the **unique Resource id**. In the former case, the meaning of a Resource is specific to an Object that holds it. An **unique Resource id** indicates that the Resouce id is a reusable one and its id number is always constant and unique across Objects.
>  
> To query a **Resource id specific to an Object**, both `oid` and `rid` should be given.   
> To query an **unique Resource id**, only the single argument `rid` is needed. 
  

**Arguments**  

- oid (*String|Number*, optional): `oid` can be given with a string or a number. Notice that a numbered string will be recognized as a number, e.g. '128' is equal to 128.
- rid (*String|Number*): `rid` can be given with a string or a number. Notice that a numbered string will be recognized as a number, e.g. '128' is equal to 128.


**Example**  

```js
// get a Resource id specific to an Object
lwm2mid.getRid('tempSensor', 'sensorValue');   // { key: 'sensorValue', value: 5700 }
lwm2mid.getRid(3303, 5700);                    // { key: 'sensorValue', value: 5700 }
lwm2mid.getRid('tempSensor', '5700');          // { key: 'sensorValue', value: 5700 }

// get an unqiue Resource id
lwm2mid.getRid('appType');                     // { key: 'appType', value: 5750 }
lwm2mid.getRid(5750);                          // { key: 'appType', value: 5700 }
lwm2mid.getRid('5750');                        // { key: 'appType', value: 5750 }

```
********************************************
<br />

<a name="API_addOid"></a>
### .addOid(items)
> ...

**Arguments**


**Example**
```javascript

```
<br />


<a name="API_addUniqueRid"></a>
### .addUniqueRid(items)
> ....

**Arguments**



**Example**
```javascript

```
<br />

<a name="API_addSpecificRid"></a>
### .addSpecificRid(oid, items)
> ...

**Arguments**


**Example**
```javascript

```
<br>

<a name="API_getSpecificResrcChar"></a>
### .getSpecificResrcChar(oid, rid)
> ....

**Arguments**



**Example**
```javascript

```
<br>

<a name="API_addSpecificResrcChar"></a>
### .addSpecificResrcChar(oid, chars)
> ....

**Arguments**


**Example**
```javascript
```
<br />

<a name="Custom"></a>
## 5. Custom Definitions

**lwm2m-id** allows you to add the custom-defined idetifiers with `.addUniqueRid()`, `.addSpecificRid()`. You can also use `.addSpecificResrcChar()` to assign the resource characteritics of access control to the dictionary at runtime. If you want to add some definition statically, you can modify the JSON file lies in `defs/defs.json`.


The lwm2m v1.0 defines many unique object id (oid) for different purpose. Such as `"device"` object that contains many optional resources. Each resource has an unique id within that object. For those reusable unique resources ids, they are under the `"uniqueRid"` namespace. For those resources subject to a specific object, are defined under the namespace `"specificRid"`. In `"specificRid"`, the rids are categories by the object id. For example, if you got a an object with id `"tempSensor"`, and it can contains the rids of `"sensorValue"`, `"units"`, .etc.
defs/defs.json


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
