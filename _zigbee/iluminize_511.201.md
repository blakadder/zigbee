---
model: 511.201
vendor: Iluminize
title: 230V HV Dimmer
category: light
supports: on/off, brightness
image: /assets/images/devices/511.201.jpg
zigbeemodel: ['511.201']
compatible: [z2m,zigate]
mlink: https://www.iluminize.com/de/shop/led-steuerung/led-controller/product/500-511-201-zigbee-dimmaktor-400w-230v.html
link: https://www.amazon.de/dp/B07HQFP3PJ
link2: 
link3: 
---
### Device type specific configuration
*[How to use device type specific configuration](https://www.zigbee2mqtt.io/information/configuration)*


`transition`   
Controls the transition time (in seconds) of brightness,
colortemp (if applicable) and color (if applicable) changes. Defaults to `0` (no transition).
Note that this value is overridden if a `transition` value is present in the MQTT command payload. 
