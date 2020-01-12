---
model: KPKEY  
vendor: Konke
title: Multi-function Button
category: remote
functions:  single, double and long click
image: /assets/images/devices/2AJZ4KPKEY.jpg
compatible: [z2m]
mlink: http://www.ikonke.us/pro/kitpro/index.php#kitpro
link: https://www.amazon.com/Konke-Smart-Automation-Monitoring-Devices/dp/B07QSDK31S
link2: https://www.aliexpress.com/item/33015636907.html
link3: 
---
FCC ID: 2AJZ4KPKEY

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
    icon: "mdi:toggle-switch"
    value_template: "{{ value_json.click }}"

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


