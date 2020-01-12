---
model: ZigUP  
vendor: DIY 
title: Multipurpose CC2530 Router
category:
functions:  relay, RGB strip, sensors, S0 Counter, ADC, Digital I/O
image: /assets/images/devices/ZigUP.jpg
mlink: https://github.com/formtapez/ZigUP
compatible: [z2m]
---

CC2530 based multi-purpose ZigBee Relais, Switch, Sensor and Router

#### Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](https://www.zigbee2mqtt.io/integration/home_assistant) is preferred,
manual integration is possible with the following configuration:


{% raw %}
```yaml
switch:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    payload_off: "OFF"
    payload_on: "ON"
    value_template: "{{ value_json.state }}"
    command_topic: "zigbee2mqtt/<FRIENDLY_NAME>/set"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "-"
    value_template: "{{ value_json.linkquality }}"
```
{% endraw %}


