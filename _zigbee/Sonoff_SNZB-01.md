---
date_added: 2020-08-04
model: SNZB-01
vendor: Itead
title: Sonoff Wireless Switch
category: remote
supports: on/off
zigbeemodel: ['WB01']
compatible: [z2m,iob,zha,zigate,tasmota]
mlink: https://www.itead.cc/sonoff-snzb-01-zigbee-wireless-switch.html
link: https://www.itead.cc/sonoff-snzb-01-zigbee-wireless-switch.html
link2: https://www.aliexpress.com/item/4001194277026.html
---

#### Pairing
Long press reset button for 5s until the LED indicator flashes three times, which means the device has entered pairing mode

#### Tasmota Configuration

After pairing requires [binding](https://tasmota.github.io/docs/Zigbee/#zigbee-binding) to display events in Tasmota Console. 

To bind to coordinator on cluster 6 (on/off) use:
```console
ZbBind {"Device":"<shortaddr>","ToDevice":"0x0000","Endpoint":1,"ToEndpoint":1,"Cluster":6}
```