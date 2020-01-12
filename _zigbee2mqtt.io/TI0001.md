---
model: TI0001
vendor: Livolo
title: Zigbee switch (1 and 2 gang) [work in progress](https://github.com/Koenkk/zigbee2mqtt/issues/592)
category:
supports: on/off
image: /assets/images/devices/TI0001.jpg
zigbeemodel: 
compatible: [z2m]
mlink: 
link: 
link2: 
link3: 
---
### Important
These devices can only be used on channel 26.
These devices are locked to the manufacturer's network key (ext_pan_id).
Your configuration file [data/configuration.yaml](https://www.zigbee2mqtt.io/information/configuration) must contain the following:

```yaml
advanced:
  ext_pan_id: [33,117,141,25,0,75,18,0]
  channel: 26
```

Therefore these devices may not co-existence with other Zigbee devices.
Maybe, you need to add a dedicated coordinator and create a new network for Livolo.
If you decided to create a new network, you should specify another 'pan_id'.

```yaml
advanced:
  pan_id: 6756
``` 
{% raw %}
```yaml
switch:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    payload_off: "OFF"
    payload_on: "ON"
    value_template: "{{ value_json.state_left }}"
    command_topic: "zigbee2mqtt/<FRIENDLY_NAME>/left/set"

switch:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    payload_off: "OFF"
    payload_on: "ON"
    value_template: "{{ value_json.state_right }}"
    command_topic: "zigbee2mqtt/<FRIENDLY_NAME>/right/set"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "-"
    value_template: "{{ value_json.linkquality }}"
```
{% endraw %}


