---
date_added: 2020-07-08
model: ZBBridge
vendor: Sonoff
title: Sonoff ZBBridge
category: coordinator
supports: coordinator
zigbeemodel: ['']
compatible: [tasmota]
mlink: https://www.itead.cc/sonoff-zbbridge.html
link: https://www.itead.cc/sonoff-zbbridge.html
link2: https://www.aliexpress.com/af/sonoff-zbbridge.html
link3: https://www.banggood.com/SONOFF-ZBBridge-Smart-Bridge-p-1674754.html
---
This device requires flashing the EFR32 device with EmberZNet Pro firmware (procedure still under work) and flashing latest Tasmota development release to the Wi-Fi module

Compile Tasmota 8.3.1.6+ with following options:

```haskell
#define USE_ZIGBEE
#undef USE_ZIGBEE_ZNP
#define USE_ZIGBEE_EZSP
```

and apply template:
```json
{"NAME":"Sonoff ZBBridge","GPIO":[56,165,0,166,59,58,0,0,0,158,0,0,17],"FLAG":0,"BASE":18}
```

Follow the development in [GitHub issue](https://github.com/arendst/Tasmota/issues/8583). 
