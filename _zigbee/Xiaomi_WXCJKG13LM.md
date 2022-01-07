---
date_added: 2020-01-12
model: WXCJKG13LM
vendor: Xiaomi
title: Aqara Opple Wireless Scene Switch 6 Button
category: remote
supports: action, batterylow
action: hold, release, single, double, triple
image: /assets/images/devices/WXCJKG13LM.jpg
zigbeemodel: ['lumi.remote.b686opcn01']
z2m: WXCJKG13LM
compatible: [z2m,iob,zha,deconz,z4d,tasmota]
mlink: https://www.aqara.com/cn/op_switch.html
link: https://www.aliexpress.com/af/aqara-opple-switch.html
link2: https://www.banggood.com/Original-Aqara-OPPLE-Wireless-International-Version-Smart-Switch-Work-With-Apple-HomeKit-Xiaomi-Eco-System-p-1588700.html
link3: https://www.amazon.de/dp/B0832NN2JJ
---
### Binding
By default the switch is bound to the coordinator but this device can also be used to directly control other lights and switches in the network.

First you probably want to unbind it from the coordinator first, then you can bind it to any other device or group. [see](https://www.zigbee2mqtt.io/information/binding.html)

As the device is sleeping by default, you need to wake it up after sending the bind/unbind command by pressing the reset button once.

When bound to a lamp, the behavior is as follows:
- left click: turn off
- right click: turn on
- left double click: light dim down (by steps of 33%)
- right double click: light dim up (by steps of 33%)
- long left click: warm white
- long right click: cold white

### Zigate on Domoticz

Here are the events you will receive on the Domoticz widget, 5 events per buttons
- left click
- right click
- left double click
- right double click
- right triple click
- left triple click
- left long click
- right long click
- left release
- right long click

### Zigbee2Tasmota

This device has 2 operation modes. Changing mode of the switch requires the following commands:

Read mode:
```
ZbSend {"Device":"<device>","Manuf":"0x115F","Read":{"OppleMode":true}}
```

Write mode (0 or 1):
```
ZbSend {"Device":"<device>","Manuf":"0x115F","Write":{"OppleMode":1}}
ZbSend {"Device":"<device>","Manuf":"0x115F","Write":{"OppleMode":0}}
```
