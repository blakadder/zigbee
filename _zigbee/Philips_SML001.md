---
date_added: 2020-04-17
model: SML001
vendor: Philips
title: Hue Motion Sensor
category: sensor
supports: occupancy, temperature, illuminance, batterypct
image: /assets/images/devices/Philips_9290012607X.jpg
zigbeemodel: ['SML001']
compatible: [z2m,iob,deconz,zigate,tasmota]
mlink: https://www2.meethue.com/en-us/p/hue-motion-sensor/046677473389
link: https://www.amazon.com/Philips-Hue-Motion-Installation-Free-Exclusive/dp/B01KJYSOGI
link2: https://www.amazon.de/dp/B0748NCMNW
link3: https://www.amazon.com.au/Philips-Hue-Installation-Free-Exclusive-Compatible/dp/B076ZFF1KR
---

#### Tasmota Configuration
```console
ZbBind {"Device":"HueMotion","Endpoint":2,"ToDevice":"0x0000","ToEndpoint":1,"Cluster":"0x0001"}
ZbBind {"Device":"HueMotion","Endpoint":2,"ToDevice":"0x0000","ToEndpoint":1,"Cluster":"0x0400"}
ZbBind {"Device":"HueMotion","Endpoint":2,"ToDevice":"0x0000","ToEndpoint":1,"Cluster":"0x0402"}
ZbBind {"Device":"HueMotion","Endpoint":2,"ToDevice":"0x0000","ToEndpoint":1,"Cluster":"0x0406"}

ZbSend {"Device":"HueMotion","Endpoint":2,"Send":"0001_06/00210020100E30F200"}
ZbSend {"Device":"HueMotion","Endpoint":2,"Send":"0400_06/000000210000100E0000"}
ZbSend {"Device":"HueMotion","Endpoint":2,"Send":"0402_06/000000290000100E1900"}
ZbSend {"Device":"HueMotion","Endpoint":2,"Send":"0406_06/000000180000100E"}
```