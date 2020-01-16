---
model: 500.49
vendor: Paulmann
title: YourLED RGB LED Controller
category: light
supports: on/off, brightness, colortemp, colorxy
image: /assets/images/devices/50049.jpg
zigbeemodel: ['RGBW light', '500.49']
compatible: [z2m]
mlink: https://en.paulmann.com/indoor-lighting/smart-home/zigbee/controlling/smarthome-zigbee-yourled-rgb-controller-max.-60w/50049
link: https://www.amazon.de/dp/B072QSNFQN
link2: 
link3: 
---
### Device type specific configuration
*[How to use device type specific configuration](https://www.zigbee2mqtt.io/information/configuration)*


`transition`   
Controls the transition time (in seconds) of brightness,
colortemp (if applicable) and color (if applicable) changes. Defaults to `0` (no transition).
Note that this value is overridden if a `transition` value is present in the MQTT command payload. 
