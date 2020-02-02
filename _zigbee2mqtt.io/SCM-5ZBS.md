---
model: SCM-5ZBS
vendor: Climax
title: Roller shutter
category:
supports: open/close
image: /assets/images/devices/SCM-5ZBS.jpg
zigbeemodel: 
compatible: [z2m]
mlink: 
link: 
link2: 
link3: 
---

{% raw %}
```yaml
cover:
  - platform: "mqtt"
    availability_topic: "zigbee2mqtt/bridge/state"
    command_topic: "zigbee2mqtt/[FRIENDLY_NAME]/set"
    position_topic: "zigbee2mqtt/[FRIENDLY_NAME]"
    set_position_topic: "zigbee2mqtt/[FRIENDLY_NAME]/set"
    set_position_template: "{ \"position\": {{ position }} }"
    value_template: "{{ value_json.position }}"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/[FRIENDLY_NAME]"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "-"
    value_template: "{{ value_json.linkquality }}"
```
{% endraw %}


