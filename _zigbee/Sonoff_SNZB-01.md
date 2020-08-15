---
date_added: 2020-08-04
model: SNZB-01
vendor: Itead
title: Sonoff Wireless Switch
category: remote
supports: action
action: single, double, long
zigbeemodel: ['WB01']
compatible: [z2m,iob,zha,zigate,tasmota,deconz]
deconz: 2990
mlink: https://www.itead.cc/sonoff-snzb-01-zigbee-wireless-switch.html
link: https://www.itead.cc/sonoff-snzb-01-zigbee-wireless-switch.html
link2: https://www.aliexpress.com/item/1005001275204366.html
link3: https://www.banggood.com/SONOFF-SNZB-01-ZB-Wireless-Switch-Mini-Size-Link-ZB-Bridge-with-WiFi-Devices-Make-Them-Smarter-via-eWeLink-APP-IFTTT-p-1716000.html
---

#### Pairing
Long press reset button for 5s until the LED indicator flashes three times, which means the device has entered pairing mode

#### Tasmota Configuration

After pairing requires [binding](https://tasmota.github.io/docs/Zigbee/#zigbee-binding) to display events in Tasmota Console. 

To bind to coordinator on on/off cluster (6) wake up the device with a button press then send from Tasmota console:
```console
ZbBind {"Device":"<shortaddr>","ToDevice":"0x0000","Endpoint":1,"ToEndpoint":1,"Cluster":6}
```