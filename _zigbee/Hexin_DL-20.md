---
date_added: 2020-01-01
model: DL-20
vendor: Hexin
title: CC2530 Serial Port Module
category: coordinator
supports: coordinator, router
image: /assets/images/devices/DL-20.jpg
zigbeeid: none
compatible: tasmota
mlink: https://www.hexin-technology.com/250m_TTL_to_ZigBee_Module-Product-565.html
link: https://www.aliexpress.com/item/32904763478.html
link2: https://www.banggood.com/DL-20-CC2530-Wireless-Transmission-Serial-Port-Module-2_4G-Wireless-Transmitting-and-Receiving-p-1549685.html
link3: https://www.amazon.de/dp/B07JX5N3QR
---
To be able to use it as a coordinator you need to [flash](flashing_ccloader) the **CC2530_** [Z-Stack-firmware](https://github.com/Koenkk/Z-Stack-firmware/).

## Flashing Instructions
Identify the required pins and follow flashing instructions:
- flash using [CCLoader](/flashing_ccloader.html) and NodeMCU/Wemos D1 mini (or similar ESP8266 board)
- flash using [Raspberry Pi](http://www.marrold.co.uk/2019/12/flashing-cc2530-cc2591-zigbee-module.html)
- flash using [CC Debugger](http://ptvo.info/how-to-select-and-flash-cc2530-144/) 

![Pinout](/assets/images/devices/DL-20_pinout.jpg)

![Wiring example](/assets/images/devices/DL-20_wiring.jpg)
