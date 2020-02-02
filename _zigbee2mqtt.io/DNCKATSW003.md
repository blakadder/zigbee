---
model: DNCKATSW003
vendor: DIY 
title: DNCKAT triple key wired wall light switch
category:
supports: hold/release, on/off
image: /assets/images/devices/DNCKATSW003.jpg
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
    value_template: "{{ value_json.state_right }}"
    command_topic: "zigbee2mqtt/[FRIENDLY_NAME]/right/set"

switch:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/[FRIENDLY_NAME]"
    availability_topic: "zigbee2mqtt/bridge/state"
    payload_off: "OFF"
    payload_on: "ON"
    value_template: "{{ value_json.state_center }}"
    command_topic: "zigbee2mqtt/[FRIENDLY_NAME]/center/set"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/[FRIENDLY_NAME]"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "-"
    value_template: "{{ value_json.linkquality }}"
```
{% endraw %}


