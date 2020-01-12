---
model: A6121  
vendor: Xiaomi
title: Vima Smart Lock
category: lock
functions:  inserted, forgotten, key error
image: /assets/images/devices/A6121.jpg
compatible: [z2m]
mlink: 
link: https://www.aliexpress.com/item/32933948745.html
link2: https://www.banggood.com/Vima-Smart-Lock-Core-Cylinder-Intelligent-Securtiy-Door-Lock-128-Bit-Encryption-w-Keys-from-Xiaomi-Youpin-p-1328812.html
link3: https://www.gearbest.com/smart-home-controls/pp_009526822041.html
---


#### Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](https://www.zigbee2mqtt.io/integration/home_assistant) is preferred,
manual integration is possible with the following configuration:


{% raw %}
```yaml
sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    icon: "mdi:lock"
    value_template: "{{ value_json.inserted }}"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "-"
    value_template: "{{ value_json.linkquality }}"
```
{% endraw %}


