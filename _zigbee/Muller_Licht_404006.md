---
model: 404006 
vendor: Müller Licht 
title: Tint Reflektor 350lm GU10 CCT Bulb
category: light
functions:  on/off, brightness, color temperature
image: /assets/images/devices/404006.jpg
compatible: [z2m,conbee]
mlink: https://www.mueller-licht.de/produktinformationen/artikel/404006/
link: https://www.amazon.de/Lichtsystem-M%C3%9CLLER-LICHT-LED-Reflektor-individuelles-Stimmungslicht/dp/B07XBKKYXL
link2: https://www.amazon.co.uk/M%C3%BCller-Licht-Reflector-GU10-White-Compatible-Controllable/dp/B07CSGFRVP
link3: 
---
### Pairing
Turn the light bulb five times on and off. After turning it on the sixth time,
it will indicate with colors that the bulb is pairing.


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


