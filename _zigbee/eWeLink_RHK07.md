---
date_added: 2020-02-20
model: RHK07
vendor: eWeLink
title: Wireless Button
category: remote
supports: action, batterypct
action: single, double, long 
image: /assets/images/devices/eWeLink_RHK07.jpg
mlink: 
link: https://www.aliexpress.com/item/4000537100802.html
link2: https://www.aliexpress.com/item/4000523263373.html
link3: 
zigbeemodel: ['DS01']
compatible: [z2m,iob,zha,z4d,tasmota,deconz]
---

#### Tasmota Configuration

After pairing requires [binding](https://tasmota.github.io/docs/Zigbee/#zigbee-binding) to display events in Tasmota Console. 

To bind to coordinator on cluster 6 (on/off) use:
```console
ZbBind {"Device":"<shortaddr>","ToDevice":"0x0000","Endpoint":1,"ToEndpoint":1,"Cluster":6}
```