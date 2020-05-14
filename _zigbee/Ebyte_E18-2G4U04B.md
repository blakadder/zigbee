---
date_added: 2020-02-04
model: E18-2G4U04B
vendor: Ebyte
title: CC2531 ZigBee USB Wireless Module
category: coordinator
supports: coordinator, router
image: /assets/images/devices/Ebyte_E18-2G4U04B.jpg
zigbeeid: none
compatible: [z2m,zha,tasmota]
mlink: http://ebyte.com/en/product-view-news.aspx?id=523
link: https://www.aliexpress.com/item/32973371661.html
link2: https://www.amazon.co.uk/Ebyte-E18-2G4U04B-Transmitter-Receiver-Indicator/dp/B07P16MXBT
link3: https://www.amazon.com/E18-2G4U04B-Transmitter-Receiver-Antenna-Indicator/dp/B082KLKBT3
link4: https://www.amazon.de/dp/B07P16MXBT
---
This USB stick claims an increased range over the unbranded CC2531 USB sticks.

PCB pins are 1.27mm and slightly harder to solder wires to. 

To be able to use it as a coordinator or router you need to [flash](flashing_ccloader) the **CC2531_** [Z-Stack-firmware](https://github.com/Koenkk/Z-Stack-firmware/).

## Flashing Instructions
Identify the required pins and follow flashing instructions:
- flash using [CCLoader](/flashing_ccloader.html) and NodeMCU/Wemos D1 mini (or similar ESP8266 board)
- flash using [Raspberry Pi](http://www.marrold.co.uk/2019/12/flashing-cc2530-cc2591-zigbee-module.html)
- flash using [CC Debugger](http://ptvo.info/how-to-select-and-flash-cc2530-144/) 

![Pinout](/assets/images/devices/Ebyte_E18-2G4U04B-pinout.jpg)
![Wired to Dupont cables](/assets/images/devices/Ebyte_E18-2G4U04B-wired.jpg)

[User manual](/assets/files/E18-2G4U04B_Usermanual_EN_v1.0.pdf)
