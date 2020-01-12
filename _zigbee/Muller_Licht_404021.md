---
model: 404021  
vendor: Müller Licht 
title: Tint Smart Switch
category: switch
functions:  on/off
image: /assets/images/devices/404021.jpg
compatible: [z2m,conbee]
mlink: https://www.mueller-licht.de/_tool-gesamt_/index.php?Artikel=404021&L=en
link: https://www.amazon.de/M%C3%9CLLER-LICHT-tint-Smart-Switch-Kunststoff/dp/B07XBTTN9W
link2: https://www.amazon.co.uk/M%C3%BCller-Licht-Smart-Switch-Plastic-White/dp/B07XBTTN9W
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


