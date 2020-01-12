---
model: 316GLEDRF
vendor: ELKO
title: Dimmer
category: switch
supports: on/off, brightness
image: /assets/images/devices/316GLEDRF.jpg
zigbeemodel: ['ElkoDimmerZHA']
compatible: z2m
mlink: http://www.elko.se/314-316gled/category1676.html
link: https://www.elektroimportoren.no/esh-plus-316gled-dimmer-rf-ph/4523410/Product.html
link2: https://www.stikkontakten.no/products/esh-316gled-dimmer-rf
link3: 
---
### Device type specific configuration
*[How to use device type specific configuration](https://www.zigbee2mqtt.io/information/configuration)*

`transition`   
Controls the transition time (in seconds) of brightness,
color temperature (if applicable) and color (if applicable) changes. Defaults to `0` (no transition).
Note that this value is overridden if a `transition` value is present in the MQTT command payload. 
