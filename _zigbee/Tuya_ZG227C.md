---
date_added: 2022-08-28
model: ZG227C
vendor: Tuya
title: LCD Temperature and Humidity Sensor
category: sensor
supports: temperature, humidity, battery
zigbeemodel: ['TS0601','_TZE200_bjawzodf', '_TZE200_qoy0ekbd', '_TZE200_bq5c8xfe', '_TZE200_znbl8dj5']
compatible: [z2m, zha, deconz, z4d, tasmota]
deconz: 6094
z2m: TS0601_temperature_humidity_sensor
mlink: 
link: https://www.aliexpress.com/item/1005003637487200.html
link2: https://www.aliexpress.com/item/1005002213455073.html
---

###### ZBBridge Filter
To get proper readings from this via ZBBridge (Tasmota), the following ZB file must be uploaded.
```console
#Z2Tv1
# Tuya fix bad reads on LCD temp/humidity item
:TS0601,_TZE200_*
EF00/0409=0204/0000         # Display mode (1=F 0=C)
EF00/0201=0402/0000,mul:10  # Temperature
EF00/0202=0405/0000,mul:100 # Humidity
EF00/0204=0001/0021,mul:2   # Battery level
```
