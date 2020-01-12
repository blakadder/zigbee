---
model: 7550
vendor: Paul Neuhaus 
title: Q-LED E27 806lm CCT Bulb
category: light
functions:  on/off, brightness, color temperature
image: /assets/images/devices/Paul_Neuhaus-Q-LED.jpg
compatible: zigate
mlink: https://www.paul-neuhaus.de/shop/de/q-led-lampe-mit-tageslicht-5000k-bis-warmwei-100-001-94.html
link: https://www.amazon.co.uk/Paul-Neuhaus-Controllable-Compatible-Temperature/dp/B07XNX11XY
link2: https://www.illumination.co.uk/paul-neuhaus-q-bulb-led-bulb-7550.html
link3: https://www.reuter.com/paul-neuhaus-q-bulb-led-zigbee-e27-95-watt-a737275.php
---
Article #: 100.469.65  

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


