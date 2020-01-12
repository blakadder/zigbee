---
model: WSDCGQ01LM
vendor: Xiaomi
title: MiJia Temperature & Humidity Sensor
category: sensor
supports: temperature, humidity, battery
image: /assets/images/devices/WSDCGQ01LM.jpg
zigbeemodel: ['lumi.sens', 'lumi.sensor_ht']
compatible: [z2m]
mlink: 
link: https://www.banggood.com/Original-Xiaomi-Mijia-Smart-Home-Temperature-and-Humidity-Sensor-Thermometer-Sensor-p-1046061.html
link2: https://www.aliexpress.com/item/32825625925.html
link3: https://www.alibaba.com/product-detail/Hotsales-smart-home-zigbee-temperature-humidity_60849898447.html
---
### Pairing
Press and hold the reset button on the device for +- 5 seconds (until the blue light starts blinking).
After this the device will automatically join.


### Device type specific configuration
*[How to use device type specific configuration](https://www.zigbee2mqtt.io/information/configuration)*


* `temperature_precision`: Controls the precision of `temperature` values,
e.g. `0`, `1` or `2`; default `2`.
* `temperature_calibration`: Allows to manually calibrate temperature values,
e.g. `1` would add 1 degree to the temperature reported by the device; default `0`.


* `humidity_precision`: Controls the precision of `humidity` values, e.g. `0`, `1` or `2`; default `2`. 
