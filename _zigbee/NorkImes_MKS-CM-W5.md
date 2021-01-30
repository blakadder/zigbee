---
date_added: 2020-01-22
model: MKS-CM-W5
vendor: NorkImes
title: 1/2/3/4 Gang 2 Way Touch Switch
category: switch
supports: on/off
image: /assets/images/devices/NorkImes_MKS-CM-W5.jpg
zigbeemodel: ['TS0601','_TZE200_nkjintbl','_TZE200_kyfqmmyl']
compatible: [z2m,tasmota,deconz]
z2m: TS0601_switch
mlink: 
link: https://www.aliexpress.com/item/4000308423960.html
link2: https://www.aliexpress.com/item/4000973462125.html
link3: 
---

## Zigbee2Tasmota

Turn on gang 1: `ZbSend {"Device":"0xDEVICE_ID","Send":"EF00!00/00550101000101"}`    
Turn off gang 1: `ZbSend {"Device":"0xDEVICE_ID","Send":"EF00!00/00550101000100"}`    
Turn on gang 2: `ZbSend {"Device":"0xDEVICE_ID","Send":"EF00!00/00550201000101"}`    
Turn off gang 2: `ZbSend {"Device":"0xDEVICE_ID","Send":"EF00!00/00550201000100"}`    
Turn on gang 3: `ZbSend {"Device":"0xDEVICE_ID","Send":"EF00!00/00550301000101"}`    
Turn off gang 3: `ZbSend {"Device":"0xDEVICE_ID","Send":"EF00!00/00550301000100"}`    
Turn on gang 4: `ZbSend {"Device":"0xDEVICE_ID","Send":"EF00!00/00550401000101"}`    
Turn off gang 4: `ZbSend {"Device":"0xDEVICE_ID","Send":"EF00!00/00550401000100"}`    
