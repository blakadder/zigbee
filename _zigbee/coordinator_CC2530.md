---
date_added: 2020-01-01
model: CC2530
vendor: Generic
title: CC2530 UART Module
category: coordinator
supports: coordinator, router
image: /assets/images/devices/ptvo.router.jpg
zigbeeid: none
compatible: [z2m,tasmota,iob,zha]
mlink: 
link: https://www.aliexpress.com/item/33007098493.html
link2: https://www.amazon.com/Huilier-CC2530-Development-Wireless-Module/dp/B07R5R89C5
link3: https://www.amazon.de/dp/B07Q3H5TX9
link4: https://www.banggood.com/CC2530-UART-Wireless-Core-Development-Board-CC2530F256-Serial-Port-Wireless-Module-2_4GHz-For-Zigbee-p-1445025.html
---
To be able to use it as a coordinator or router you need to [flash](flashing_ccloader) the **CC2530_** [Z-Stack-firmware](https://github.com/Koenkk/Z-Stack-firmware/).

## Flashing Instructions
Identify the required pins and follow flashing instructions:
- flash using [CCLoader](/flashing_ccloader.html) and NodeMCU/Wemos D1 mini (or similar ESP8266 board)
- flash using [Raspberry Pi](http://www.marrold.co.uk/2019/12/flashing-cc2530-cc2591-zigbee-module.html)
- flash using [CC Debugger](http://ptvo.info/how-to-select-and-flash-cc2530-144/) 

![Pinout](/assets/images/devices/CC2530_pinout.jpg)
