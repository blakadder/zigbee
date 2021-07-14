---
date_added: 2020-07-29
model: BW-SHP13
vendor: BlitzWolf
title: Electricity Metering 16A EU Plug 
category: plug
supports: on/off, power metering
zigbeemodel: ['TS0121','_TZ3000_g5xawfcq','_TZ3000_3ooaz3ng']
compatible: [z2m,deconz,zigate,iob,tasmota,zha]
z2m: TS0121_plug
deconz: 2988
mlink: https://www.blitzwolf.com/
link: https://www.banggood.com/BlitzWolf-BW-SHP13-Zigbee-3_0-Smart-WIFI-Socket-16A-EU-Plug-Electricity-Metering-APP-Remote-Controller-Timer-Work-with-Amazon-Alexa-Google-Home-p-1679992.html
link2: https://www.aliexpress.com/item/4001153171159.html
link3: 
---

## Tasmota
For Tasmota, the attribute `"EnergyTotal":"0x000000001152"` gives the total energy in increments of '10 Wh'. I.e. divide by 100 to get the number of KWh.
