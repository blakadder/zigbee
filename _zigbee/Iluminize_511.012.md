---
model: 511.012
vendor: Iluminize
title: Zigbee LED Controller 
category: light
supports: on/off, brightness
image: /assets/images/devices/511.012.jpg
zigbeemodel: ['511.012']
compatible: [z2m]
mlink: https://www.iluminize.com/de/shop/led-steuerung/led-controller/product/520-511-012-zigbee-controller-8a.html
link: https://www.amazon.de/dp/B06X9R9NC
link2: 
link3: 
---
### Device type specific configuration
*[How to use device type specific configuration](https://www.zigbee2mqtt.io/information/configuration)*


`transition`   
Controls the transition time (in seconds) of brightness,
color temperature (if applicable) and color (if applicable) changes. Defaults to `0` (no transition).
Note that this value is overridden if a `transition` value is present in the MQTT command payload. 

