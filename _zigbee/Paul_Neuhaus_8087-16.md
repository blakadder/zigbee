---
model: 8087-16
vendor: Paul Neuhaus 
title: Q-Flag LED Panel 
category: light
functions:  on/off, brightness, color temperature, color xy
image: /assets/images/devices/100.110.39.jpg
compatible: z2m
mlink: https://www.paul-neuhaus.de/shop/de/led-panel-smart-home-alexa-tauglich-100-110-39.html
link: https://www.amazon.de/dp/B0154L54VY
link2: https://www.conrad.com/p/paul-neuhaus-q-led-wall-and-ceiling-light-q-flag-built-in-led-30-w-warm-white-rgb-1389103
link3: https://www.idealo.de/preisvergleich/OffersOfProduct/5533400_-q-flag-led-panel-30w-100-110-39-paul-neuhaus.html
---
Article #: 100.110.39 
### Device type specific configuration
*[How to use device type specific configuration](https://www.zigbee2mqtt.io/information/configuration)*

`transition`   
Controls the transition time (in seconds) of brightness, color temperature (if applicable) and color (if applicable) changes. Defaults to `0` (no transition).
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


