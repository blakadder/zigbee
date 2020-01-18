---
model: WSDCGQ11LM
vendor: Xiaomi
title: Aqara Temperature, Humidity and Pressure Sensor
category: sensor
supports: temperature, humidity, pressure, batterylow
image: /assets/images/devices/WSDCGQ11LM.jpg
zigbeemodel: ['lumi.weather']
compatible: [z2m, zigate, conbee, tasmota]
mlink: https://www.aqara.com/en/temperature_humidity_sensor.html
link: https://www.aliexpress.com/item/4000067640553.html
link2: https://www.banggood.com/Original-Aqara-Atmos-Version-Temperature-Humidity-Sensor-Smart-Home-Thermometer-Hygrometer-p-1148666.html
link3: https://www.gearbest.com/access-control/pp_626702.html
link4: https://www.amazon.de/dp/B07PPNBVM5
---

### Pairing
Press and hold the reset button on the device for +- 5 seconds (until the blue light starts blinking).
After this the device will automatically join.


### Device type specific configuration
*[How to use device type specific configuration](https://www.zigbee2mqtt.io/information/configuration)*


* `temperature_precision`: Controls the precision of `temperature` values, e.g. `0`, `1` or `2`; default `2`.
* `temperature_calibration`: Allows to manually calibrate temperature values, e.g. `1` would add 1 degree to the temperature reported by the device; default `0`.
* `humidity_precision`: Controls the precision of `humidity` values, e.g. `0`, `1` or `2`; default `2`.
* `pressure_precision`: Controls the precision of `pressure` values, e.g. `0` or `1`; default `1`.
* `pressure_calibration`: Allows to manually calibrate pressure values, e.g. `1` would add 1 to the pressure reported by the device; default `0`. 
