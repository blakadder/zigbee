---
model: 798.15
vendor: Paulmann
title: Pendant Light
category: light
supports: on/off, brightness
image: /assets/images/devices/79815.jpg
zigbeemodel: ['500.45']
compatible: [z2m]
mlink: https://en.paulmann.com/indoor-lighting/smart-home/zigbee/controlling/smarthome-zigbee-maxled-dimming-and-switching-controller-max.-144w/50045
link: https://www.amazon.de/dp/B07ZZ5T3LY
link2: https://www.elektro-wandelt.de/Paulmann-798-15-SmartHome-Zigbee-LED-Pendelleuchte-Aptare-18W-Dimmbar-Alu-gebuerstet-Metall.html
link3: 
---
### Device type specific configuration
*[How to use device type specific configuration](https://www.zigbee2mqtt.io/information/configuration)*


`transition`   
Controls the transition time (in seconds) of brightness,
colortemp (if applicable) and color (if applicable) changes. Defaults to `0` (no transition).
Note that this value is overridden if a `transition` value is present in the MQTT command payload. 
