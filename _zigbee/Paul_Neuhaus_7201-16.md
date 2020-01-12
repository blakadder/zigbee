---
model: 7201-16
vendor: Paul Neuhaus 
title: Q-Plug with Night Light
category: plug
functions:  on/off
image: /assets/images/devices/100.425.90.jpg
compatible: [z2m, conbee, zigate]
mlink: 
link: https://www.amazon.de/Q-LED-Nachtlicht-Smart-Home-Zwischenstecker-wei%C3%9F/dp/B075V185JD
link2: https://www.reuter.com/paul-neuhaus-q-plug-remote-socket--65-d-84-cm-white-a737292.php
link3: 
---
Article #: 100.425.90  

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


