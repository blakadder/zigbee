---
model: 404012
vendor: Müller Licht 
title: Tint A60 806lm E27 RGBW Bulb
category: light
supports: on/off, brightness, color temperature, color xy
image: /assets/images/devices/404000-404005-404012.jpg
zigbeemodel: ['ZBT-ExtendedColor']
compatible: [z2m,conbee]
mlink: https://www.mueller-licht.de/en/product-informations/artikel/404012/
link: 
link2: 
link3: 
---
### Pairing
Turn the light bulb five times on and off. After turning it on the sixth time,
it will indicate with colors that the bulb is pairing.


### Device type specific configuration
*[How to use device type specific configuration](https://www.zigbee2mqtt.io/information/configuration)*


`transition`   
Controls the transition time (in seconds) of brightness,
color temperature (if applicable) and color (if applicable) changes. Defaults to `0` (no transition).
Note that this value is overridden if a `transition` value is present in the MQTT command payload. 
