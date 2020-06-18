---
date_added: 2020-06-20
model: E18-MS1PA2-IPX
vendor: Ebyte
title: CC2530 PA+LNA 2.4GHz 100mW Zigbee SMD Module with IPX
category: coordinator
supports: coordinator, router
zigbeeid: none
compatible: [tasmota]
mlink: http://www.ebyte.com/en/product-view-news.aspx?id=919
link: https://www.aliexpress.com/item/4000818121979.html
---
This module consists of a TI CC2530 and a PA+LNA power amplifier chip. With 20dbm transmit power its realistic indoor range is 10-12m.

PCB pins are 1.27mm and slightly harder to solder wires to.

To be able to use it as a coordinator you need to [flash](flashing_ccloader) the **CC2530_CC2591_xx** [Z-Stack-firmware](https://github.com/Koenkk/Z-Stack-firmware/).

## Flashing Instructions
Identify the required pins and follow flashing instructions:
- flash using [CCLoader](/flashing_ccloader.html) and NodeMCU/Wemos D1 mini (or similar ESP8266 board)
- flash using [Raspberry Pi](http://www.marrold.co.uk/2019/12/flashing-cc2530-cc2591-zigbee-module.html)
- flash using [CC Debugger](http://ptvo.info/how-to-select-and-flash-cc2530-144/) 

VCC pin tolerates 3.6V max. **DO NOT** connect to 5V.

[User manual](/assets/files/E18-MS1PA2-IPX_UserManual_EN_v1.1.pdf).
