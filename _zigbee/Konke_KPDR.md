---
model: KPDR  
vendor: Konke
title: Entry Sensor
category:
functions:  contact
image: /assets/images/devices/2AJZ4KPDR.jpg
mlink: http://www.ikonke.us/pro/kitpro/index.php#kitpro
link: https://www.amazon.com/Konke-Smart-Automation-Monitoring-Devices/dp/B07QR87KW6
link2: https://www.banggood.com/KONKE-Zigbee-3_0-Open-Protocol-Window-Door-Sensor-Smart-Home-Function-Remote-Control-Alarm-Door-Sensor-Security-From-Xiaomi-Eco-system-p-1551743.html
link3: https://www.aliexpress.com/item/4000478315927.html
compatible: [z2m]
---

FCCID: 2AJZ4-KPDR
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
    payload_on: false
    payload_off: true
    value_template: "{{ value_json.contact }}"
    device_class: "door"

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


