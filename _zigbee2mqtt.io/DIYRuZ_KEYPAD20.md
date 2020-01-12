---
model: DIYRuZ_KEYPAD20
vendor: DIYRuZ
title: DiY 20 button keypad
category:
supports: click
image: /assets/images/devices/DIYRuZ_KEYPAD20.jpg
zigbeemodel: 
compatible: [z2m]
mlink: 
link: 
link2: 
link3: 
---

{% raw %}
```yaml
sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "-"
    value_template: "{{ value_json.linkquality }}"
```
{% endraw %}


