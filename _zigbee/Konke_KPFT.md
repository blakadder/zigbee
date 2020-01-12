---
model: KPFT
vendor: Konke
title: Temp-Humidity Sensor
category: sensor
supports: temperature, humidity, battery, battery_low
image: /assets/images/devices/2AJZ4KPFT.jpg
mlink: http://www.ikonke.us/pro/kitpro/index.php#kitpro
link: https://www.amazon.com/Konke-Smart-Automation-Monitoring-Devices/dp/B07QVXPHR9?th=1
link2: https://www.banggood.com/KONKE-Zigbee-3_0-Open-Protocol-Temperature-Humidity-Sensor-Environment-Air-Pressure-Smart-Home-From-Xiaomi-Eco-system-p-1551469.html
link3: https://www.aliexpress.com/item/4000478349402.html
zigbeemodel: ['3AFE140103020000', '3AFE220103020000']
compatible: [z2m]
---
FCC ID: 2AJZ4KPFT
### Device type specific configuration
*[How to use device type specific configuration](https://www.zigbee2mqtt.io/information/configuration)*


* `temperature_precision`: Controls the precision of `temperature` values,
e.g. `0`, `1` or `2`; default `2`.
* `temperature_calibration`: Allows to manually calibrate temperature values,
e.g. `1` would add 1 degree to the temperature reported by the device; default `0`.


* `humidity_precision`: Controls the precision of `humidity` values, e.g. `0`, `1` or `2`; default `2`.

### Important
Konke devices only work on Zigbee channel 15, 20 and 25. 
