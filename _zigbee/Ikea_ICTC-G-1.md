---
model: ICTC-G-1
vendor: IKEA
title: Trådfri Wireless Dimmer
category: remote
supports: action, brightnessm, batterypct
image: /assets/images/devices/Ikea_ICTC-G-1.jpg
zigbeemodel: ['TRADFRI wireless dimmer']
compatible: [z2m,zigate,iob]
zigate: https://zigate.fr/le-materiel-compatible-zigate/compatible/ikeatradfridimmer
mlink: https://www.ikea.com/sg/en/p/tradfri-wireless-dimmer-white-10347835/
link: https://www.amazon.com/IKEA-203-478-30-Tr%C3%A5dfri-Wireless-Dimmer/dp/B07KM9ZC2Z
link2: https://www.amazon.co.uk/Ikea-Tradfri-Wireless-Dimmer-203-478-30/dp/B07KM9ZC2Z
link3: 
---
Brightness values: [0-255] (quick rotate for instant 0/255), action

### Pairing
To factory reset the TRADFRI wireless dimmer (ICTC-G-1) press the button 4 times (so the red lights starts blinking).
After the blinks you might be willing to rotate the dimmer
like you are trying to control your lights. It will prevent the device
from going to sleep and ensure successful pairing. In case the dimmer was
recognized but no actions seems to be detected, try to restart the zigbee2mqtt.
See [IKEA TRADFRI wireless dimmer (ICTC-G-1) not pairing](https://github.com/Koenkk/zigbee2mqtt/issues/620).
