---
model: E1810
vendor: IKEA
title: Trådfri remote control
category: remote
supports: action, batterypct
image: /assets/images/devices/Ikea_E1810.jpg
zigbeemodel: ['TRADFRI remote control']
compatible: [z2m, zigate]
mlink: https://www.ikea.com/nl/en/p/tradfri-remote-control-30443124/
link: https://www.amazon.com/IKEA-ASIA-TRADFRI-Remote-Control/dp/B07KRVVFT1
link2: https://www.amazon.com/IKEA-203-033-17-Tr%C3%A5dfri-Remote-Control/dp/B07KM1YZWW
link3: https://www.amazon.de/dp/B0725S4YNM
---
Article no. 304.431.24 and 004.431.30

Actions: toggle, arrow left/right click/hold/release, brightness up/down click/hold/release

When clicking the middle (center) button on the remote it will send a `{"click": "toggle"}`, when holding it
it will **also** send a `{"click": "toggle_hold"}`. It is not possible to skip the `toggle` when the button is hold.
Also the remote won't send anything when the button is released. See [link](https://github.com/Koenkk/zigbee2mqtt/issues/2077#issuecomment-538691885) for more details. 

### Pairing
Pair the remote to Zigbee2mqtt by holding it close to the coordinator and
pressing the inside button, next to the CR2032 battery, 4 times.
The red light on the (front of the) remote will now flash a few times.
