---
date_added: 2020-01-12
model: WXCJKG13LM
vendor: Xiaomi
title: Aqara Opple Wireless Scene Switch 6 Button
category: switch
supports: action, batterylow
image: /assets/images/devices/WXCJKG13LM.jpg
zigbeemodel: ['lumi.remote.b686opcn01']
z2m: WXCJKG13LM
compatible: [z2m,iob,zha,conbee]
mlink: https://www.aqara.com/cn/op_switch.html
link: https://www.aliexpress.com/af/aqara-opple-switch.html
link2: https://www.banggood.com/Original-Aqara-OPPLE-Wireless-International-Version-Smart-Switch-Work-With-Apple-HomeKit-Xiaomi-Eco-System-p-1588700.html
link3: https://www.amazon.de/dp/B0832NN2JJ
link4: https://www.gearbest.com/power-strips/pp_009267447933.html
---
### Actions
`hold`, `release`, `single`, `double`, `triple`
### Binding
By default the switch is bound to the coordinator but this device can also be used to directly control other lights and switches in the network.

First you probably want to unbind it from the coordinator first, then you can bind it to any other device or group. (see https://www.zigbee2mqtt.io/information/binding.html )

As the device is sleeping by default, you need to wake it up after sending the bind/unbind command by pressing the reset button once.

When bound to a lamp, the behavior is as follows:
- left click: turn off
- right click: turn on
- left double click: light dim down (by steps of 33%)
- right double click: light dim up (by steps of 33%)
- long left click: warm white
- long right click: cold white