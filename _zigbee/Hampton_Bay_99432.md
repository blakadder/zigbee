---
model: 99432  
vendor: Hampton Bay 
title: White Ceiling Fan Premier Remote Control
category: remote
functions:  on/off, brightness, fan_mode and fan_state
image: /assets/images/devices/99432.jpg
compatible: [z2m]
mlink: 
link: https://www.amazon.com/Enabled-Universal-Ceiling-Premier-Control/dp/B077ZHDLY3
link2: https://www.homedepot.com/p/Hampton-Bay-Universal-Wink-Enabled-White-Ceiling-Fan-Premier-Remote-Control-99432/206591100
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
fan:
  - platform: "mqtt"
    state_topic: true
    availability_topic: "zigbee2mqtt/bridge/state"
    state_value_template: "{{ value_json.fan_state }}"
    command_topic: "zigbee2mqtt/<FRIENDLY_NAME>/set"
    command_topic_postfix: "fan_state"
    speed_state_topic: true
    speed_command_topic: true
    speed_value_template: "{{ value_json.fan_mode }}"
    speeds: 
      - "off"
      - "low"
      - "medium"
      - "high"
      - "on"
      - "auto"
      - "smart"

light:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    brightness: true
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


