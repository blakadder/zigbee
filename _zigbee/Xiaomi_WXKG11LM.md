---
model: WXKG11LM
vendor: Xiaomi
title: Aqara Wireless Mini Switch
category: switch
supports: singel click, double click, battery
image: /assets/images/devices/WXKG11LM.jpg
zigbeemodel: ['lumi.sensor_switch.aq2', 'lumi.remote.b1acn01']
compatible: [z2m, zigate, conbee]
mlink: https://www.aqara.com/en/smart_wireless_mini_switch.html
link: https://www.banggood.com/Original-Xiaomi-Aqara-Smart-Wireless-Switch-Smart-Home-Kit-Remote-Control-Touch-Switch-p-1224921.html
link2: https://www.gearbest.com/smart-home-controls/pp_009395405312.html
link3: https://www.amazon.de/dp/B07D19YXND
link4: https://www.aliexpress.com/item/32919919934.html
---
Triple, quadruple, hold and release available on the newer model.

### Pairing
Press and hold the reset button on the device for +- 5 seconds (until the blue light starts blinking).
After this the device will automatically join. 
{% raw %}
```yaml
sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    icon: "mdi:toggle-switch"
    value_template: "{{ value_json.click }}"

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


