---
model: ICZB-B1FC60/B3FC64/B2FC95/B2FC125
vendor: iCasa
title: Zigbee 3.0 Filament Lamp 60/64/95/125 mm, 806 lumen, dimmable, clear
category:
supports: on/off, brightness, colortemp
image: /assets/images/devices/ICZB-B1FC60-B3FC64-B2FC95-B2FC125.jpg
zigbeemodel: 
compatible: [z2m]
mlink: 
link: 
link2: 
link3: 
---
### Device type specific configuration
*[How to use device type specific configuration](https://www.zigbee2mqtt.io/information/configuration)*


`transition`   
Controls the transition time (in seconds) of brightness,
colortemp (if applicable) and color (if applicable) changes. Defaults to `0` (no transition).
Note that this value is overridden if a `transition` value is present in the MQTT command payload. 
{% raw %}
```yaml
light:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/[FRIENDLY_NAME]"
    availability_topic: "zigbee2mqtt/bridge/state"
    brightness: true
    color_temp: true
    schema: "json"
    command_topic: "zigbee2mqtt/[FRIENDLY_NAME]/set"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/[FRIENDLY_NAME]"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "-"
    value_template: "{{ value_json.linkquality }}"
```
{% endraw %}


