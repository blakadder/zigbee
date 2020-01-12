---
model: 81809  
vendor: AduroSmart
title: ERIA A19 800lm RGBCCT Bulb
category: light
functions:  on/off, brightness, color temperature, color xy
image: /assets/images/devices/81809.jpg
compatible: [z2m]
mlink: https://adurosmart.com/product/eria-colors-and-white-a19-60w-2/
link: https://www.amazon.com/ERIA-Equivalent-Dimmable-Philips-Assistant/dp/B07WHLP544
link2: https://www.homedepot.com/p/AduroSmart-ERIA-60-Watt-Equivalent-A19-Dimmable-CRI-90-Wireless-Smart-LED-Light-Bulb-Multi-Color-81809/306568421
link3: 
---
### Device type specific configuration
*[How to use device type specific configuration](https://www.zigbee2mqtt.io/information/configuration)*


`transition`   
Controls the transition time (in seconds) of brightness,
color temperature (if applicable) and color (if applicable) changes. Defaults to `0` (no transition).
Note that this value is overridden if a `transition` value is present in the MQTT command payload.


#### Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](https://www.zigbee2mqtt.io/integration/home_assistant) is preferred,
manual integration is possible with the following configuration:


{% raw %}
```yaml
light:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    brightness: true
    color_temp: true
    xy: true
    schema: "json"
    command_topic: "zigbee2mqtt/<FRIENDLY_NAME>/set"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "-"
    value_template: "{{ value_json.linkquality }}"
```
{% endraw %}


