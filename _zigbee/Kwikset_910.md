---
date_added: 2020-09-18
model: 910
vendor: Kwikset
title: 910 SmartCode Electronic Deadbolt
category: lock
supports: lock/unlock, battery
zigbeemodel: ['SMARTCODE_DEADBOLT_5_L','SMARTCODE_DEADBOLT_5']
compatible: [z2m, tasmota]
z2m: 99100-006
mlink: https://www.kwikset.com/products/detail/910-smartcode-traditional-electronic-deadbolt-with-zigbee-technology?variant=910-trl-zb-15
link: https://www.amazon.com/Kwikset-99100-078-SmartCode-Traditional-Electronic/dp/B07F3FBRXB/
EAN: 
---

###### Zigbee2Tasmota Notes:
To enable proper lock decode, the following Rule should be added post device connection.<br>
```console
ZbBind {"Device":"<devid>","Endpoint":2,"Cluster":"0x0101"}
Rule1
  on <deviid>#0101?20=0000FFFF00FFFFFFFF00 do publish tele/<bridge>/<devid>/SENSOR {"<devid>":{"state":"faulted"}} endon
  on <deviid>#0101?20=0207FFFF00FFFFFFFF00 do publish tele/<bridge>/<devid>/SENSOR {"<devid>":{"state":"key_lock"}} endon
  on <deviid>#0101?20=0002000000FFFFFFFF00 do publish tele/<bridge>/<devid>/SENSOR {"<devid>":{"state":"key_unlock"}} endon
  on <deviid>#0101?20=020DFFFF00FFFFFFFF00 do publish tele/<bridge>/<devid>/SENSOR {"<devid>":{"state":"manual_lock"}} endon
  on <deviid>#0101?20=020EFFFF00FFFFFFFF00 do publish tele/<bridge>/<devid>/SENSOR {"<devid>":{"state":"manual_unlock"}} endon
Rule1 on
```
Additionally, on the non `_L` version, a temperature sensor (mid-lock) is available. Bind as:<br>
```console
ZbBind {"Device":"<devid>","Endpoint":2,"Cluster":"0x0402"}
```
