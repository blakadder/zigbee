---
date_added: 2023-03-12
model: E2112
vendor: IKEA
title: Vindstyrka Air Quality Sensor
category: sensor
zigbeemodel:  ['VINDSTYRKA']
compatible: [deconz, z2m, z4d, zha,tasmota]
deconz: 6756
mlink: https://www.ikea.com/us/en/p/vindstyrka-air-quality-sensor-smart-30498239/
link: 
link2: 
link3: 
EAN: '304.982.39'
---

More information on device & Zigbee:

https://github.com/dresden-elektronik/deconz-rest-plugin/issues/6756

https://community.home-assistant.io/t/ikea-vindstyrka-zigbee-air-quality-sensor/549747/21

## TASMOTA

Temp and Humidity are sent by default. VOC and PM2.5 values are not sent by default, but can be enabled. Customize commands below to match your Device name (ZbAir1 here)

Enable VOC (values 0-500, 100 = normal level) ```ZbBind {"Device":"ZbAir1", "Endpoint":1, "Cluster":0xFC7E}```

Enable PM2.5 ```ZbBind {"Device":"ZbAir1", "Endpoint":1, "Cluster":0x042A}```
