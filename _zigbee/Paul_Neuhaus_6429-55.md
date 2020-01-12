---
model: 6429-55
vendor: Paul Neuhaus 
title:  Q-Inigo Ceiling Light
category: light
functions:  on/off, brightness, color temperature
image: /assets/images/devices/100.424.11.jpg
compatible: z2m
mlink: https://www.paul-neuhaus.de/shop/de/led-deckenleuchte-smart-home-alexa-tauglich-100-424-11.html
link: https://www.amazon.de/Paul-Neuhaus-6429-55-Deckenleuchte-Fernbedienung/dp/B01LREQN9Y
link2: https://www.lampe.de/paul-neuhaus-q-inigo-deckenleuchte-6429-55.html
link3: 
---
Article #: 100.424.11  

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


