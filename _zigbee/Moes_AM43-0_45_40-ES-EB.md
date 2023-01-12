---
date_added: 2021-02-20
model: AM43-0.45/40-ES-EB
vendor: Moes
title: Motorized Roller Blinds/Shades Drive Motor
category: cover
supports: open, close, stop, position
zigbeemodel: ['TS0601','_TZE200_zah67ekd','_TZE200_rddyvrci ']
compatible: [z2m,deconz,zha,z4d]
deconz: 4663
z2m: TS0601_cover
mlink: https://www.moeshouse.com/collections/zigbee-chain-roller-blinds-motor/products/zigbee-smart-diy-motorized-roller-blinds-shades-drive-motor-hub-required-tuya-smart-life-app-control
link: https://www.aliexpress.com/item/1005001698400295.html
link2: https://www.aliexpress.com/item/1005001775235402.html
link3: 
---

Comes under diffent brands such as Zemismart, MoesHouse and Livolo

To pair them, press the set and the down buttons for 3 seconds, the led will be blinking blue. 
With Deconz, this is a bit tricky and is a 2 step process to expose the node to the upper layer (Home Assistant in this example). 
1. In Phoscon, start the pairing process for a new light. Nothing will show up there. 
2. Go to deConz, the new node will appear there as a battery. 
3. Right click on the node and click on "Read node descriptor" and "Read simple descriptor", then they will show up as Smart Plug with a number.
