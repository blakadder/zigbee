---
model: 81825
vendor: AduroSmart
title: ERIA Smart Wireless Dimming Switch Remote
category: remote
supports: on/off, up/down
image: /assets/images/devices/81825.jpg
zigbeemodel: ['Adurolight_NCC']
compatible: [z2m]
mlink: https://adurosmart.com/product/eria-smart-wireless-dimming-switch-remote/
link: https://www.amazon.com/AduroSmart-ERIA-Wireless-Dimming-Switch/dp/B07HJHJWGT
link2: 
link3: 
---

{% raw %}
```yaml
sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    icon: "mdi:gesture-double-tap"
    value_template: "{{ value_json.action }}"
{% endraw %}


