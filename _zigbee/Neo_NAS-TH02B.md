---
date_added: 2021-10-04
model: NAS-TH02B
vendor: Neo 
title: Temperature and Humidity Sensor with LCD screen
category: sensor
type: [temperature sensor, humidity sensor]
supports: temperature, humidity, battery
zigbeemodel: ['TS0201','_TZ3000_qaaysllp']
compatible: [deconz, zha, z2m, z4d]
z2m: LCZ030
mlink: 
link: https://www.aliexpress.com/item/1005005313977836.html
---
## Warning
Zigbee models usually do not have an illuminance sensor - only the wifi versions do. You can confirm this by checking the lack of measurements on the top portion, besides the battery, or confirming with sellers before buying. Also, the wifi version takes long to refresh its state, not being worth it if you're gonna use it for automations.

The device will not work correctly unless it was first paired with a Tuya Gateway [https://github.com/zigpy/zha-device-handlers/issues/862#issuecomment-862582771]
