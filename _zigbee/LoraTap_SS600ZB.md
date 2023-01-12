---
date_added: 2021-04-15
model: SS600ZB
vendor: LoraTap
title: Remote 3 Button
category: remote
supports: action, battery
actions: single, double, long
zigbeemodel: ['TS0043','_TZ3000_bi6lpsew', '_TZ3000_famkxci2']
compatible: [z2m, iob, tasmota, zha, z4d, deconz]
mlink: https://www.loratap.com/products/ss600zb
link: https://www.aliexpress.com/item/1005001298730723.html
link2: https://www.domadoo.fr/en/peripheriques/5712-loratap-telecommande-zigbee-3-boutons.html
pairing: "To pair the device, open it with a screwdriver and press the pairing button for 5 seconds until the yellow indicator light flashes."
---

## Pairing (Alternative Method)
To pair the device, press and hold any of the buttons for 10 seconds until the yellow indicator light flashes.

The model which I received required a double-inclusion - when first added, ZHA said the device was configured but the buttons did not trigger events and the yellow indicator light continued to flash. In this case, open the switch, remove and replace the battery and pair the device a second time.
