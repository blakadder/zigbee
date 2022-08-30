---
date_added: 2021-10-23
model: 404011
vendor: Müller Licht 
title: Tint Remote Control
category: remote
supports: action, brightness
action: on, off, toggle, brightness up/down click/hold/release, move to colortemp, move to color, scene
image: /assets/images/devices/Muller_Licht_404011.jpg
zigbeemodel: ['ZBT-Remote-ALL-RGBW']
compatible: [z2m, iob, deconz, z4d, tasmota, zha]
deconz: 1209
mlink: https://www.mueller-licht.de/_tool-gesamt_/index.php?Artikel=404011&L=en
link: https://www.amazon.de/M%C3%9CLLER-LICHT-Fernbedienung-vorprogrammierten-individuelles-Stimmungslicht/dp/B07FMCLC2N
link2: https://www.amazon.co.uk/M%C3%BCller-Licht-Remote-Control-Plastic-White/dp/B07FMCLC2N
link3: 
---
## Tasmota

You need to listen to the pre-configured group addresses 0x4004, 0x4005, 0x4006 corresponding to the 3 lights.

Example: `backlog zblisten1 0x4004; zblisten2 0x04005; zblisten3 0x4006`

