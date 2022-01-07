---
date_added: 2021-06-28
model: ZSS-ZK-THL
vendor: Moes 
title: E-Ink Brightness Thermometer
category: sensor
type: [temperature sensor, humidity sensor, illumination sensor]
supports: temperature, humidity, illumination, battery
zigbeemodel: ['TS0222','_TYZB01_kvwjujy9']
zb3: true
compatible: [zha,tasmota,z2m]
mlink: https://www.moeshouse.com/collections/zigbee/products/zigbee-smart-brightness-thermometer-real-time-light-sensitive-temperature-and-humidity-detector
link: https://www.aliexpress.com/item/1005002525279564.html
link2: https://www.banggood.com/MoesHouse-Smart-ZigBee-or-bluetooth-Mesh-Brightness-Thermometer-Light-Temperature-Humidity-Detector-Tuya-Smart-App-Alexa-Control-p-1842856.html
link3: https://www.domadoo.fr/en/domotique/5789-moes-capteur-de-temperature-humidite-et-luminosite-zigbee.html
---
Temperature and humidity are reported at a fixed 60 minute interval.

## Pairing
Hold the orange button until three dots appear at the top left of the screen.

## ZHA
The device seems to reset every 150 seconds and this causes the temperature to be reported, via ZigBee (not on the display), as 0 degrees, and the display displays 0 Lux. Continuous resets, at least once, caused a small "!" to appear on the screen while virtually nothing was updated, suggesting some internal processing error. All in all, the device is next to unusable.

## Z2M
Same problems with Z2M.

## Device not suitable for home automation
- Reports temperature / humidity  every hours, can't be used for controlling heater or dehumidifier
- Hangs when not used with tuya hub.

