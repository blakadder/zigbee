---
model: AB3257001NJ
vendor: OSRAM
title: Smart+ Plug
category: plug
supports: on/off
image: /assets/images/devices/AB3257001NJ.jpg
compatible: [z2m,zigate,conbee]
mlink: 
link: https://www.amazon.de/Osram-schaltbare-fernbedienbar-Lichtsteuerung-kompatibel/dp/B074PZLX2P
link2: https://www.conrad.nl/p/osram-smart-tussenstekker-plug-1596989
link3: 
---
### Pairing
For the OSRAM Smart+ plug (AB3257001NJ) hold the on/off button until your hear a click (+- 10 seconds). 
{% raw %}
```yaml
switch:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    payload_off: "OFF"
    payload_on: "ON"
    value_template: "{{ value_json.state }}"
    command_topic: "zigbee2mqtt/<FRIENDLY_NAME>/set"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "-"
    value_template: "{{ value_json.linkquality }}"
```
{% endraw %}


