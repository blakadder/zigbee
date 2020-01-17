---
model: E1743
vendor: IKEA
title: Trådfri ON/OFF Switch
category: remote
supports: click, battery, brightness
image: /assets/images/devices/E1743.jpg
zigbeemodel: ['TRADFRI on/off switch']
compatible: [z2m]
mlink: https://www.ikea.com/gb/en/p/tradfri-wireless-dimmer-white-00468432/
link: 
link2: 
link3: 
---
Article no. 004.684.32

### Pairing
Pair the switch by pressing the pair button (found under the back cover next to the battery)
4 times in a row. The red light on the front side should flash a few times and the turn off
(it's more visible to see the light from the back). After a few seconds it turns back on and pulsate.
When connected, the light turns off.


### Binding
The E1743 can be bound to groups using [binding](https://www.zigbee2mqtt.io/information/binding).
It can only be bound to 1 group at a time.

Note 1: that < zigbee2mqtt 1.4 automatically bound this device to group 99.
If you want to bind it to a different group you first have to unbind it from group 99.

Note 2: Binding works but only when binding to a group. You should not bind to a specific devices.

