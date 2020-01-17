---
model: LLKZMK11LM
vendor: Xiaomi
title: Aqara 2 Way Control Module Wireless Relay
category: switch
supports: on off, power measurement
image: /assets/images/devices/LLKZMK11LM.jpg
zigbeemodel: 
compatible: [z2m]
mlink: https://www.alibaba.com/product-detail/New-Arrive-Xiaomi-Aqara-2-way_62132487106.html
link: https://www.aliexpress.com/af/LLKZMK11LM-.html
link2: https://www.banggood.com/Aqara-LLKZMK11LM-Two-way-Control-Module-Wireless-Relay-Controller-2-Channels-Work-For-Mijia-APP-Home-Kit-Control-Module-from-xiaomi-youpin-p-1441658.html
link3: https://www.gearbest.com/access-control/pp_009589424862.html
link4: https://www.amazon.com/Extaum-LLKZMK11LM-Two-Way-Intelligent-Control/dp/B07YZL14X
---
### Interlock
This option allows to inter connect the relays which will make sure that only one relay is on at a time. To do this publish to `zigbee2mqtt/[FRIENDLY_NAME]/set` payload `{"interlock": true}` or `{"interlock": false}`. By default this option is `false`. 

{% raw %}
```yaml
switch:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    payload_off: "OFF"
    payload_on: "ON"
    value_template: "{{ value_json.state_l1 }}"
    command_topic: "zigbee2mqtt/<FRIENDLY_NAME>/l1/set"

switch:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    payload_off: "OFF"
    payload_on: "ON"
    value_template: "{{ value_json.state_l2 }}"
    command_topic: "zigbee2mqtt/<FRIENDLY_NAME>/l2/set"

{% endraw %}


