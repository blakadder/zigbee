---
date_added: 2020-06-19
model: E18-TBH-01
vendor: Ebyte
title: CC2530+CC2592 USB Test Kit
category: coordinator
supports: coordinator, router
zigbeeid: none
compatible: [tasmota]
mlink: http://www.ebyte.com/en/product-view-news.aspx?id=949
link: https://www.aliexpress.com/item/4000783978568.html
---
This module consists of a TI CC2530 and a CC2592 power amplifier chip. With 20dbm transmit power its realistic indoor range is 10-12m.

PCB pins are standard 2.54mm pitch and very easy to solder to. All the pins are clearly labelled. USB port data pins are connected to P1.4 and P1.5 and cannot be used as a Zigbee2MQTT coordinator via USB. It can still be powered via USB and be used as a router or you can solder wires from P0.2 and P0.3 to RX and TX and remove jumpers.

To be able to use it as a coordinator you need to [flash](flashing_ccloader) the **CC2530_CC2592_xx** [Z-Stack-firmware](https://github.com/Koenkk/Z-Stack-firmware/).

## Flashing Instructions
Identify the required pins and follow flashing instructions:
- flash using [CCLoader](/flashing_ccloader.html) and NodeMCU/Wemos D1 mini (or similar ESP8266 board)
- flash using [Raspberry Pi](http://www.marrold.co.uk/2019/12/flashing-cc2530-cc2591-zigbee-module.html)
- flash using [CC Debugger](http://ptvo.info/how-to-select-and-flash-cc2530-144/) 

VCC pin tolerates 3.6V max. **DO NOT** connect to 5V.

[User manual](/assets/files/E18-TBH-01_Datasheet_EN_v1.0.pdf).
