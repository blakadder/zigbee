---
date_added: 2020-01-01
model: CC2531
vendor: Unbranded
title: CC2531 Sniffer Bare Board USB Module
category: coordinator
supports: coordinator, router
image: /assets/images/devices/coordinator_CC2531_bareboard.jpg
zigbeeid: none
compatible: [z2m,iob,zha]
mlink: 
link: https://www.aliexpress.com/item/4000310666663.html
link2: https://www.aliexpress.com/item/33011691700.html
link3: https://www.amazon.com/Comidox-Bluetooth-Programmer-Connector-Downloader/dp/B07KW1N1MR
link4: https://www.amazon.de/dp/B07P8Y4Z9G
---
- USB connected Zigbee adapter with PCB or external antenna
- Cheap but may not be powerful enough for larger networks.

To be able to use it as a coordinator or router you need to [flash](flashing_ccloader) the **CC2531_** [Z-Stack-firmware](https://github.com/Koenkk/Z-Stack-firmware/).

## Flashing Instructions
Identify the required pins and follow flashing instructions:
- flash using [CCLoader](/flashing_ccloader.html) and NodeMCU/Wemos D1 mini (or similar ESP8266 board)
- flash using [Raspberry Pi](http://www.marrold.co.uk/2019/12/flashing-cc2530-cc2591-zigbee-module.html)
- flash using [CC Debugger](https://www.zigbee2mqtt.io/getting_started/flashing_the_cc2531.html) 

![Pinout](/assets/images/devices/cc2531usb_pinout.jpg)