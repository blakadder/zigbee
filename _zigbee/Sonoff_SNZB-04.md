---
date_added: 2020-07-19
model: SNZB-04
vendor: Sonoff
title: Wireless Door/Window Sensor
category: sensor
supports: contact, battery, battery low
zigbeemodel: ['DS01']
compatible: [z2m, iob, zha, z4d, deconz, tasmota, ihost]
deconz: 3036
mlink: https://itead.cc/product/sonoff-snzb-04-zigbee-wireless-door-window-sensor/
link: https://www.geekbuying.com/item/SONOFF-SNZB-04-ZigBee-Wireless-Door-Window-Alarm-Sensor-497993.html
link2: https://www.aliexpress.com/item/1005001275204366.html
link3: https://www.banggood.com/SONOFF-SNZB-04-ZB-Wireless-Door-or-Window-Sensor-Enable-Smart-Linkage-Between-SONOFF-ZBBridge-and-WiFi-Devices-via-eWeLink-APP-p-1715994.html
link4: https://www.domadoo.fr/en/peripheriques/5320-sonoff-capteur-d-ouverture-de-portefenetre-zigbee.html
link5: https://www.amazon.com/dp/B08BFGJ6RB/
---

#### Pairing
Long press reset button for 5s until the LED indicator flashes three times, which means the device has entered pairing mode

Sometimes the battery is not mounted firmly which prevents the device from pairing properly.
[Adding a washer between the battery holder](https://i.postimg.cc/SKkJmrpc/20210102-235846-1.jpg) and the battery or increasing the pressure on the holder fixes this.

#### Battery replacement

In theory these devices should automatically re-join the network after battery replacement. I have observed that (at least when working with deconz) they dometimes do not. When they do it is immediately obvious - the status in Phoscon (deconz) is immediately updated, with the device showing open or closed rather than unavailable. When they don't, nothing happens, with the device continuing to show as unavailable. To re-pair them it isn't necessary to delete them and create a new device. Instead:
 - Replace the battery
 - In Phoscon go to *Devices > Sensors > Add new sensor*
 - Click *Other* to start it searching for new devices
 - Put into pairing mode as described above
Fairly quickly the device will be re-connected as it originally was. You won't need to re-create it in Deconz or Home Assistant. Hopefully other bluetooth stacks behave the same.
