---
date_added: 2020-06-07
model: SAGE206612
vendor: Echostar
title: SAGE Doorbell Sensor
category: sensor
supports: action
zigbeemodel: ['   Bell']
compatible: [zha,z2m,deconz,tasmota]
deconz: 2755
mlink: https://www.echostar.com/~/media/Files/Sage/UserGuides/Troubleshooting_Doorbell3a.ashx
link: https://www.ebay.com/itm/Hughes-Sage-Doorbell-Sensor-Home-Automation-Security-System/174011801734
link2: 
link3: 
---

#### Zigbee2Tasmota rules
To get proper decoding the following rule works for MQTT translation:
```
Rule1
  on <devid>#0006!01 do publish tele/<bridge>/<devid>/SENSOR {"<devid>":{"doorbell":"front_door"}} endon
  on <devid>#0006!02 do publish tele/<bridge>/<devid>/SENSOR {"<devid>":{"doorbell":"back_door"}} endon
Rule1 on
```
