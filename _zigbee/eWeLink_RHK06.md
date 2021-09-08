---
date_added: 2020-02-20
model: RHK06
vendor: eWeLink
title: Door Sensor
category: sensor
supports: contact, batterypct
image: /assets/images/devices/eWeLink_RHK06.jpg
mlink: 
link: https://www.aliexpress.com/item/4000537100802.html
link2: https://www.aliexpress.com/item/4000523263373.html
link3: 
zigbeemodel: ['WB01','WB-01']
compatible: [z2m,iob,zha,zigate,tasmota,deconz]
deconz: 2990
---

## Tasmota Configuration

After pairing requires [binding](https://tasmota.github.io/docs/Zigbee/#zigbee-binding) to display events in Tasmota Console. 

To bind to coordinator on cluster 6 (on/off) use:
```console
ZbBind {"Device":"<shortaddr>","ToDevice":"0x0000","Endpoint":1,"ToEndpoint":1,"Cluster":6}
```