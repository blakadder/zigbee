---
model: 81825  
vendor: AduroSmart
title: ERIA Smart Wireless Dimming Switch Remote
category: remote
functions: on, off, up, down
image: /assets/images/devices/81825.jpg
compatible: [z2m]
mlink: https://adurosmart.com/product/eria-smart-wireless-dimming-switch-remote/
link: https://www.amazon.com/AduroSmart-ERIA-Wireless-Dimming-Switch/dp/B07HJHJWGT
link2: 
link3: 
---


#### Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](https://www.zigbee2mqtt.io/integration/home_assistant) is preferred,
manual integration is possible with the following configuration:


{% raw %}
```yaml
sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    icon: "mdi:gesture-double-tap"
    value_template: "{{ value_json.action }}"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "-"
    value_template: "{{ value_json.linkquality }}"
```
{% endraw %}


