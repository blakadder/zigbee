---
model: 4KPBS  
vendor: Konke
title: Motion Sensor
category:
functions:  occupancy
image: /assets/images/devices/2AJZ4KPBS.jpg
mlink: http://www.ikonke.us/pro/kitpro/index.php#kitpro
link: https://www.amazon.com/Konke-Smart-Automation-Monitoring-Devices/dp/B07QVXNDBS
link2: https://www.banggood.com/KONKE-Zigbee-3_0-Open-Protocol-Smart-Home-Human-Body-Sensor-Wireless-Connection-Light-Motion-Sensor-Switch-From-Xiaomi-Eco-system-p-1551514.html
link3: https://www.aliexpress.com/item/4000478277318.html
compatible: [z2m]
---

FCCID: 2AJZ-4KPBS
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
    unit_of_measurement: "%"
    device_class: "battery"
    value_template: "{{ value_json.battery }}"

binary_sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    payload_on: true
    payload_off: false
    value_template: "{{ value_json.occupancy }}"
    device_class: "motion"

binary_sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    payload_on: true
    payload_off: false
    value_template: "{{ value_json.battery_low}}"
    device_class: "battery"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "-"
    value_template: "{{ value_json.linkquality }}"
```
{% endraw %}


