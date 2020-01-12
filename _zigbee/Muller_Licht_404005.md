---
model: 404005
vendor: Müller Licht 
title: Tint Reflektor 350lm GU10 RGBCCT Bulb
category: light
supports: on/off, brightness, color temperature, color xy
image: /assets/images/devices/404005.jpg
zigbeemodel: ['ZBT-ExtendedColor']
compatible: [z2m,conbee]
mlink: https://www.mueller-licht.de/produktinformationen/artikel/404005/
link: https://www.amazon.de/dp/B07X9L27RW
link2: https://www.amazon.co.uk/M%C3%BCller-Licht-Reflector-Different-1800-6500-Additional/dp/B07ND91HGT
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
