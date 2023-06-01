---
date_added: 2022-09-19
model: SNZB-02
vendor: Sonoff
title: Temperature And Humidity Sensor
category: sensor
supports: temperature, humidity
zigbeemodel: ['TH01','66666']
compatible: [z2m, iob, zha, z4d, deconz, tasmota, ihost]
deconz: 6432
mlink: https://itead.cc/product/sonoff-snzb-02-zigbee-temperature-and-humidity-sensor/
link: https://www.geekbuying.com/item/SONOFF-SNZB-02-ZigBee-Temperature-And-Humidity-Sensor-497991.html
link2: https://www.aliexpress.com/item/1005001275204366.html
link3: https://www.banggood.com/SONOFF-SNZB-02-ZB-Temperature-And-Humidity-Sensor-Work-with-SONOFF-ZBBridge-Real-time-Data-Check-Via-eWeLink-APP-p-1715999.html
link4: https://www.domadoo.fr/en/peripheriques/5319-sonoff-capteur-de-temperature-et-d-humidite-zigbee-30.html
link5: https://www.amazon.com/dp/B08BCJNDYQ/
---
#### Custom Firmware

[Instructions](https://blakadder.com/sonoff-th-custom-firmware/) on flashing custom firmware with custom reporting interval and temperature and humidity offset 

#### Pairing
Long press reset button for 5s until the LED indicator flashes three times, which means the device has entered pairing mode

<!--
#### Tasmota
Issue these commands while the device is awake. Either wake it up by pressing the pairing button or send the commands immediately after the pairing process
**Temperature:**
```console
ZbBind {"Device":"<short_addr>","Cluster":"Temperature"}
```
```console
ZbSend {"Device":"<short_addr>","Config":{"Temperature":{"MinInterval":60,"MaxInterval":600,"ReportableChange":1}}}
```
**Humidity:**
```console
ZbBind {"Device":"<short_addr>","Cluster":"Humidity"}
```
```console
ZbSend {"Device":"<short_addr>","Config":{"Humidity":{"MinInterval":60,"MaxInterval":600,"ReportableChange":5}}}
```
**Battery:**
```console
ZbBind {"Device":"<short_addr>","Cluster":"BatteryVoltage"}
```
```console
ZbSend {"Device":"<short_addr>","Config":{"BatteryVoltage":{"MinInterval":60,"MaxInterval":600,"ReportableChange":1}}}
```
-->
