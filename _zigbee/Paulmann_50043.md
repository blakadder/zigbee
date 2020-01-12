---
model: 500.43  
vendor: Paulmann
title: SmartHome Cephei Switch Controller
category: relay
functions:  on/off
image: /assets/images/devices/50043.jpg
compatible: [z2m]
mlink: https://en.paulmann.com/indoor-lighting/smart-home/zigbee/controlling/smarthome-zigbee-cephei-switch-controller-max.-1000w-ac/50043
link: https://www.amazon.de/Paulmann-500-43-Smarthome-Controller-Schaltger%C3%A4t/dp/B0721G1YMG
link2: 
link3: 
---


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


