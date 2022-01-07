---
date_added: 2020-07-29
model: BW-SHP13
vendor: BlitzWolf
title: Electricity Metering 16A EU Plug 
category: plug
supports: on/off, power metering
zigbeemodel: ['TS0121','_TZ3000_g5xawfcq','_TZ3000_3ooaz3ng']
compatible: [z2m,deconz,z4d,iob,tasmota,zha]
z2m: TS0121_plug
deconz: 2988
mlink: https://www.blitzwolf.com/
link: https://www.banggood.com/BlitzWolf-BW-SHP13-Zigbee-3_0-Smart-WIFI-Socket-16A-EU-Plug-Electricity-Metering-APP-Remote-Controller-Timer-Work-with-Amazon-Alexa-Google-Home-p-1679992.html
link2: https://www.aliexpress.com/item/4001153171159.html
link3: 
---

## Tasmota
For Tasmota, the attribute `"EnergyTotal":"0x000000001152"` gives the total energy in increments of '10 Wh'. I.e. divide by 100 to get the number of KWh.

SHP13 does not report power spontaneously, so you need to probe regularly. One way to do it is to group all SHP13 in a same zigbee group and send a read request every minute.

### Adding devices to a group

Let's add all SHP13 devices to group number 220. For each device run:

```ZbSend {"device":"<device_name_or_id>","Send":{"AddGroup":220}}```

You should receive confirmation similar to this: `{"ZbReceived":{"<device>":{"Device":"<device>","Name":"Plug_Cave","0004<00":"00DC00","AddGroup":220,"AddGroupStatus":0,"AddGroupStatusMsg":"SUCCESS","Endpoint":1,"LinkQuality":110}}}`

Note: list all groups the device is in with: `ZbSend {"device":"<device>","Send":{"GetAllGroups":true}}`

### Create a rule to read every minute

Use a rule similar to:

```
Rule1 on zbstate#status==0 do backlog ruletimer1 10 endon on rules#timer=1 do backlog ruletimer1 60; ZbSend {"Group":220,"Read":{"RMSVoltage":true,"ActivePower":true}} endon
```

Then enable the Rule:
```
Rule1 1
```
