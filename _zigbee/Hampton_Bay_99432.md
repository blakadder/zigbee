---
model: 99432
vendor: Hampton Bay 
title: White Ceiling Fan Premier Remote Control
category: remote
supports: on/off, brightness, fan_mode and fan_state
image: /assets/images/devices/99432.jpg
zigbeemodel: ['HDC52EastwindFan', 'HBUniversalCFRemote']
compatible: [z2m]
mlink: 
link: https://www.amazon.com/Enabled-Universal-Ceiling-Premier-Control/dp/B077ZHDLY3
link2: https://www.homedepot.com/p/Hampton-Bay-Universal-Wink-Enabled-White-Ceiling-Fan-Premier-Remote-Control-99432/206591100
link3: 
---
### Device type specific configuration
*[How to use device type specific configuration](https://www.zigbee2mqtt.io/information/configuration)*


`transition`   
Controls the transition time (in seconds) of brightness,
colortemp (if applicable) and color (if applicable) changes. Defaults to `0` (no transition).
Note that this value is overridden if a `transition` value is present in the MQTT command payload. 
