---
date_added: 2022-08-24
model: PS-HPS
vendor: Tuya
title: Human Presence Sensor 24GHz
category: sensor
supports: presence, presence duration, departure duration, led state
mlink: https://www.alibaba.com/product-detail/WiFi-BLE-ZigBee-Wireless-Radar-Human_1600574397650.html
link: https://www.aliexpress.com/item/1005004532147201.html
link2: https://www.aliexpress.com/item/1005004542293208.html
zigbeemodel: ['TS0601', '_TZE200_0u3bj3rc', '_TZE200_v6ossqfy']
z2m: TS0601_human_presence_sensor
compatible: [z2m,tasmota]
---

Uses HLK-LD2410 24Ghz mmWave radar for presence detection.

For Tasmota, use the file `Tuya_hpsz.zb` containing the following definition:

```
#Z2Tv1
# Human presence sensor Zigbee
# https://zigbee.blakadder.com/Tuya_PS-HPS.html
:TS0601,_TZE200_0u3bj3rc
:TS0601,_TZE200_v6ossqfy
:TS0601,_TZE200_mx6u6l4y
EF00/0401=0406/0000                     # map to Occupancy
EF00/0265,HPSZPresenceTime              # Shows the presence duration in minutes
EF00/0266,HPSZLeavingTime               # Shows the duration of the absence in minutes
EF00/0167,HPSZLEDState                  # Turns the onboard LED on or off
```
