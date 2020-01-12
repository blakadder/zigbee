---
model: HS2WD-E
vendor: HEIMAN
title: Smart siren
category:
supports: warning
image: /assets/images/devices/HS2WD-E.jpg
zigbeemodel: 
compatible: [z2m]
mlink: 
link: 
link2: 
link3: 
---
### Triggering the alarm
The alarm can be trigged by publishing to `zigbee2mqtt/[FRIENDLY_NAME]/set` message
`{"warning": {"duration": 10, "mode": "emergency", "strobe": false}}`.

Where:
- `duration`: the number of seconds the alarm will be on (max is 1800 seconds)
- `mode`: `stop` or `emergency`
- `strobe`: `true` or `false` will let the strobe flash once during the alarm
         {% raw %}
```yaml
sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "%"
    device_class: "battery"
    value_template: "{{ value_json.battery }}"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "-"
    value_template: "{{ value_json.linkquality }}"
```
{% endraw %}


