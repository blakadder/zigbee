---
model: PSB30-SW27
vendor: GE Link
title: BR30 650lm WW Bulb
category: light
supports: on/off, brightness
image: /assets/images/devices/22670.jpg
zigbeemodel: ['ZLL Light']
compatible: [z2m]
mlink: 
link: https://www.amazon.com/GE-65-Watt-Equivalent-1-Pack-Zigbee/dp/B00NO8DY0I
link2: https://www.walmart.com/ip/Quirky-GE-Link-BR30/45628936
link3: 
---
### Device type specific configuration
*[How to use device type specific configuration](https://www.zigbee2mqtt.io/information/configuration)*


`transition`   
Controls the transition time (in seconds) of brightness,
color temperature (if applicable) and color (if applicable) changes. Defaults to `0` (no transition).
Note that this value is overridden if a `transition` value is present in the MQTT command payload. 
