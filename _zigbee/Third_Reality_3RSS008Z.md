---
model: 3RSS008Z  
vendor: Third Reality 
title: RealitySwitch Plus
category: switch
functions:  on/off, battery
image: /assets/images/devices/3RSS008Z.jpg
compatible: [z2m]
mlink: 
link: https://www.amazon.com/THIRDREALITY-Smart-Light-Switch-1PACK/dp/B07K3TRG6W
link2: https://www.amazon.ca/Third-Reality-Smart-Switch-Starter/dp/B07HGXMFJ3
link3: 
---

![](Third_Reality_3RSS008Z-2.jpg)
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


