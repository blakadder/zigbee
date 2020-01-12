---
model: KPFT  
vendor: Konke
title: Temp-Humidity Sensor
category:
functions:  temperature and humidity
image: /assets/images/devices/2AJZ4KPFT.jpg
mlink: http://www.ikonke.us/pro/kitpro/index.php#kitpro
link: https://www.amazon.com/Konke-Smart-Automation-Monitoring-Devices/dp/B07QVXPHR9?th=1
link2: https://www.banggood.com/KONKE-Zigbee-3_0-Open-Protocol-Temperature-Humidity-Sensor-Environment-Air-Pressure-Smart-Home-From-Xiaomi-Eco-system-p-1551469.html
link3: https://www.aliexpress.com/item/4000478349402.html
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


#### Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](https://www.zigbee2mqtt.io/integration/home_assistant) is preferred,
manual integration is possible with the following configuration:


{% raw %}
```yaml
sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "°C"
    device_class: "temperature"
    value_template: "{{ value_json.temperature }}"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "%"
    device_class: "humidity"
    value_template: "{{ value_json.humidity }}"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "%"
    device_class: "battery"
    value_template: "{{ value_json.battery }}"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "-"
    value_template: "{{ value_json.linkquality }}"
```
{% endraw %}


