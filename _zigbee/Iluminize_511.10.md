---
model: 511.010
vendor: Iluminize
title: White LED Controller 
category: light
supports: on/off, brightness
image: /assets/images/devices/511.10.jpg
zigbeemodel: ['DIM Lighting']
compatible: [z2m]
mlink: https://www.iluminize.com/de/shop/led-steuerung/led-controller/product/481-511-010-zigbee-controller-5a.html
link: https://www.amazon.de/dp/B07LBTCX8H
link2: 
link3: 
---
### Device type specific configuration
*[How to use device type specific configuration](https://www.zigbee2mqtt.io/information/configuration)*


`transition`   
Controls the transition time (in seconds) of brightness,
colortemp (if applicable) and color (if applicable) changes. Defaults to `0` (no transition).
Note that this value is overridden if a `transition` value is present in the MQTT command payload. 
