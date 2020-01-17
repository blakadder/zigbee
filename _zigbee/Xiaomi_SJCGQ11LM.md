---
model: SJCGQ11LM
vendor: Xiaomi
title: Aqara Water Leak sensor
category: sensor
supports: water leak
image: /assets/images/devices/SJCGQ11LM.jpg
zigbeemodel: ['lumi.sensor_wleak.aq1']
compatible: [z2m]
zigatelink: https://zigate.fr/le-materiel-compatible-zigate/compatible/capteurinondation
mlink: https://www.aqara.com/en/water_sensor.html
link: https://www.aliexpress.com/item/4000071259351.html
link2: https://www.banggood.com/Original-Aqara-Smart-Water-Detector-Alarm-Sensor-Flooding-Sensor-Remote-Alarm-with-APP-From-Xiaomi-Eco-System-p-1174770.html
link3: https://www.gearbest.com/home-smart-improvements/pp_668897.html
link4: https://www.amazon.com/Aqara-11LM-SJCGQ-Water-Sensor/dp/B07D39MSZS
---
### Pairing
Press and hold water logo on the device for +- 10 seconds until the blue light blinks
three times, release the water logo (the blue light will blink once more) and wait.
     {% raw %}
```yaml
binary_sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    payload_on: true
    payload_off: false
    value_template: "{{ value_json.water_leak }}"
    device_class: "moisture"

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


