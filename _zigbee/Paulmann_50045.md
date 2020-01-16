---
model: 500.45
vendor: Paulmann
title: MaxLED Dimming and Switching LED Controller
category: light
supports: on/off, brightness
image: /assets/images/devices/50045.jpg
zigbeemodel: ['Dimmablelight ']
compatible: [z2m]
mlink: https://en.paulmann.com/indoor-lighting/smart-home/zigbee/controlling/smarthome-zigbee-maxled-dimming-and-switching-controller-max.-144w/50045
link: https://www.amazon.de/dp/B072MW2567
link2: 
link3: 
---
### Device type specific configuration
*[How to use device type specific configuration](https://www.zigbee2mqtt.io/information/configuration)*


`transition`   
Controls the transition time (in seconds) of brightness,
colortemp (if applicable) and color (if applicable) changes. Defaults to `0` (no transition).
Note that this value is overridden if a `transition` value is present in the MQTT command payload. 
