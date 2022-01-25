---
date_added: 2020-09-20
model: ICZB-RM11S
EAN: 751889266277
vendor: iCasa
title: Remote Control
category: remote
supports: action
zigbeemodel: ['ICZB-RM']
compatible: [deconz,z2m]
deconz: 1978
mlink: https://www.icasa.io/afstandsbediening?lang=en
link: https://www.amazon.de/dp/B07L2SLY29/
link2: https://www.domadoo.fr/en/peripheriques/5691-icasa-telecommande-4-zones-zigbee-30-0751889266277.html
link3: 
link4: 
---

To enable the S1 and S2 buttons you have to excplicitly listen to the specified broadcast group. 
To find the group, use `WebLog 4` and the group id should be displayed when you press S1/S2 `19:18:08.923 ZIG: Sniffing group 0xFF01`
To listen to the topic, use eg. `ZbListen 0xFF01`
