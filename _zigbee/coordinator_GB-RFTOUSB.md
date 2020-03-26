---
date_added: 2020-03-02
model: GB-RFTOUSB
vendor: GBAN
title: ZigBee RF to USB Dongle
category: coordinator
supports: coordinator, router
image: /assets/images/devices/coordinator_GB-RFTOUSB.jpg
zigbeeid: none
compatible: [z2m, iob]
mlink: http://www.gban.cn/en/product_show.asp?id=43
link: https://www.aliexpress.com/item/4000060995530.html
link2: https://www.aliexpress.com/item/4000136938567.html
link3: https://www.amazon.co.uk/DDlong-Transparent-Technical-Transmission-Equipment/dp/B07WK5WX4R
link4: https://www.amazon.com/Transparent-Digital-Transmission-Equipment-Industrial/dp/B07YZTY11S
---
To be able to use it as a coordinator or router you need to [flash](flashing_ccloader) the **CC2530_** [Z-Stack-firmware](https://github.com/Koenkk/Z-Stack-firmware/).

## Flashing Instructions
Identify the required pins and follow flashing instructions:
- flash using [CCLoader](/flashing_ccloader.html) and NodeMCU/Wemos D1 mini (or similar ESP8266 board)
- flash using [Raspberry Pi](http://www.marrold.co.uk/2019/12/flashing-cc2530-cc2591-zigbee-module.html)
- flash using [CC Debugger](http://ptvo.info/how-to-select-and-flash-cc2530-144/) 

![Pinout](/assets/images/devices/coordinator_GB-RFTOUSB_pinout.jpg)
