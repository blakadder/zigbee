---
date_added: 2020-01-01
model: Z-0001
vendor: WeBee
title: CC2530+CC2591 Zigbee Module
category: coordinator
supports: coordinator
image: /assets/images/devices/CC2530-CC2591.jpg
zigbeeid: none
compatible: [z2m,tasmota,iob,zha]
mlink: 
link: https://www.aliexpress.com/item/4000118023903.html
link2: https://www.amazon.com/WeBee-Industrial-ZigBee-Transceiver-wireless/dp/B01EH0XUQO
link3: https://www.amazon.de/dp/B01FXC1G5M
---
[Module manual](/assets/files/Z-0001_ZigBee_Module_Manual.pdf)

To be able to use it as a coordinator you need to [flash](flashing_ccloader) the **CC2530_CC2591_** [Z-Stack-firmware](https://github.com/Koenkk/Z-Stack-firmware/).

## Flashing Instructions
Identify the required pins and follow flashing instructions:
- flash using [CCLoader](/flashing_ccloader.html) and NodeMCU/Wemos D1 mini (or similar ESP8266 board)
- flash using [Raspberry Pi](http://www.marrold.co.uk/2019/12/flashing-cc2530-cc2591-zigbee-module.html)
- flash using [CC Debugger](http://ptvo.info/how-to-select-and-flash-cc2530-144/) 

![Pinout](/assets/images/devices/webee_cc2530_cc2591_pinout.jpg.jpg)
