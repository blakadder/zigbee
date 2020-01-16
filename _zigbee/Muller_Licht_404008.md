---
model: 404008
vendor: Müller Licht 
title: Tint C35 470lm E14 CCT Bulb
category: light
supports: on/off, brightness, colortemp
image: /assets/images/devices/404008.jpg
zigbeemodel: ['ZBT-ColorTemperature']
compatible: [z2m,conbee]
mlink: https://www.mueller-licht.de/produktinformationen/artikel/404008/
link: https://www.amazon.de/dp/B07XDQN1GM
link2: https://www.amazon.co.uk/M%C3%BCller-Light-Candle-White-6watts/dp/B07XDQN1GM
link3: 
---
### Pairing
Turn the light bulb five times on and off. After turning it on the sixth time,
it will indicate with colors that the bulb is pairing.


### Device type specific configuration
*[How to use device type specific configuration](https://www.zigbee2mqtt.io/information/configuration)*


`transition`   
Controls the transition time (in seconds) of brightness,
colortemp (if applicable) and color (if applicable) changes. Defaults to `0` (no transition).
Note that this value is overridden if a `transition` value is present in the MQTT command payload. 
