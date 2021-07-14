---
date_added: 2020-01-26
model: X711A
vendor: Lonsonho
title: No Neutral Push Button Light Switch 1 Gang
category: switch
supports: on/off
zigbeemodel: ['TS0011','_TZ3000_9hpxg80k']
compatible: [z2m,iob,zha]
mlink: 
link: https://www.aliexpress.com/item/4000298926256.html
link2: 
link3: 
---
It seems like there's two versions of this switch coming from AliExpress. The TS0011 appears to turn off by itself after two minutes after being paired for the first time with ZHA. To get it to function correctly after pairing the first time, press and hold the switch for 10s to enter pairing mode and then press 'Add Devices Via This Device' in your Zigbee Coordinator in Home Assistant. After that, it should function correctly.
