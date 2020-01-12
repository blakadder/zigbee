---
model: 6717-84  
vendor: Busch-Jaeger 
title: Zwischenstecker Plug
category: plug
functions:  on/off
image: /assets/images/devices/6717-84.jpg
compatible: [z2m,conbee]
mlink: https://www.busch-jaeger.de/produktuebersicht?tx_nlbjproducts_catalog%5Baction%5D=show&tx_nlbjproducts_catalog%5BcatBjeProdukt%5D=3566&tx_nlbjproducts_catalog%5Bcontroller%5D=CatStdArtikel&cHash=5ce54b5156548e5c55a08a63b251eb2b
link: https://www.amazon.de/Busch-Jaeger-Zwischenstecker-studiows-Funkempf%C3%A4nger-4011395200322/dp/B017KXFTOG
link2: 
link3: 
---


#### Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](https://www.zigbee2mqtt.io/integration/home_assistant) is preferred,
manual integration is possible with the following configuration:


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


