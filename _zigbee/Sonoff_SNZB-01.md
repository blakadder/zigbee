---
date_added: 2020-08-04
model: SNZB-01
vendor: Sonoff
title: Wireless Switch
category: remote
supports: action
action: single, double, long
zigbeemodel: ['WB01', 'WB-01']
compatible: [z2m, iob, zha, z4d, tasmota, deconz, ihost]
deconz: 2990
mlink: https://itead.cc/product/sonoff-snzb-01-zigbee-wireless-switch/
link: https://www.amazon.com/dp/B08YJ3VYW2/
link2: https://www.aliexpress.com/item/1005001275204366.html
link3: https://www.banggood.com/SONOFF-SNZB-01-ZB-Wireless-Switch-Mini-Size-Link-ZB-Bridge-with-WiFi-Devices-Make-Them-Smarter-via-eWeLink-APP-IFTTT-p-1716000.html
link4: https://www.domadoo.fr/en/peripheriques/5259-sonoff-interrupteur-sans-fil-zigbee-30.html
link5: https://www.geekbuying.com/item/SONOFF-SNZB-01-Zigbee-Wireless-Switch-497990.html
pairing: "Long press reset button for 5s until the LED indicator flashes three times, which means the device has entered pairing mode"
---

## Known issues with deconz
Several users has problems with this device (as well as SNZB-04 and SNZB-02) and **deconz**. They disconnected form network after several hours and doesn't connect again. That doesn't happens with Xiaomi door sensor for example. 

So, won't be usable with deconz (at least with raspbeeII). You need to pair them again after several hours or some days. 

Github unresolved issues: [1](https://github.com/dresden-elektronik/deconz-rest-plugin/issues/6576), [2](https://github.com/dresden-elektronik/deconz-rest-plugin/issues/6417), [3](https://github.com/dresden-elektronik/deconz-rest-plugin/issues/2414#issuecomment-668776932).
