---
model: 1613V
vendor: Hive
title: Active Plug
category: plug
supports: on/off, power measurement
image: /assets/images/devices/1613V.jpg
zigbeemodel: 
compatible: [z2m]
mlink: https://www.hivehome.com/products/hive-active-plug?icid=mname%3Amega-menu.iname%3Ahive-active-plug
link: https://www.amazon.co.uk/Hive-Active-Smart-Plug-Silver/dp/B07FJ4JQJ1
link2: https://www.amazon.co.uk/Hive-ICESMRTPLUG-Active-Smart-Plug/dp/B01N7L53TB
link3: https://www.screwfix.com/p/hive-active-plug-white-220v/1613v
---

{% raw %}
```yaml
switch:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/[FRIENDLY_NAME]"
    availability_topic: "zigbee2mqtt/bridge/state"
    payload_off: "OFF"
    payload_on: "ON"
    value_template: "{{ value_json.state }}"
    command_topic: "zigbee2mqtt/[FRIENDLY_NAME]/set"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/[FRIENDLY_NAME]"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "W"
    icon: "mdi:factory"
    value_template: "{{ value_json.power }}"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/[FRIENDLY_NAME]"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "-"
    value_template: "{{ value_json.linkquality }}"
```
{% endraw %}


