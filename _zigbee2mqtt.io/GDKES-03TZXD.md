---
model: GDKES-03TZXD
vendor: TUYATEC
title: Smart light switch - 3 gang without neutral wire
category:
supports: on/off
image: /assets/images/devices/GDKES-03TZXD.jpg
zigbeemodel: 
compatible: [z2m]
mlink: 
link: 
link2: 
link3: 
---

{% raw %}
```yaml
switch:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/[FRIENDLY_NAME]"
    availability_topic: "zigbee2mqtt/bridge/state"
    payload_off: "OFF"
    payload_on: "ON"
    value_template: "{{ value_json.state_left }}"
    command_topic: "zigbee2mqtt/[FRIENDLY_NAME]/left/set"

switch:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/[FRIENDLY_NAME]"
    availability_topic: "zigbee2mqtt/bridge/state"
    payload_off: "OFF"
    payload_on: "ON"
    value_template: "{{ value_json.state_center }}"
    command_topic: "zigbee2mqtt/[FRIENDLY_NAME]/center/set"

switch:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/[FRIENDLY_NAME]"
    availability_topic: "zigbee2mqtt/bridge/state"
    payload_off: "OFF"
    payload_on: "ON"
    value_template: "{{ value_json.state_right }}"
    command_topic: "zigbee2mqtt/[FRIENDLY_NAME]/right/set"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/[FRIENDLY_NAME]"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "-"
    value_template: "{{ value_json.linkquality }}"
```
{% endraw %}


