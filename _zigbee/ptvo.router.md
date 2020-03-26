---
model: ptvo.router
vendor: DIY 
title: CC2530 Router
category: router
supports: state, description, type, rssi
image: /assets/images/devices/ptvo.router.jpg
zigbeemodel: ['lumi.router']
compatible: [z2m,zha,deconz,iob,zigate]
mlink: http://ptvo.info/cc2530-based-zigbee-coordinator-and-router-112/
link: https://www.amazon.com/Zripool-CC2530-Zigbee-Development-Wireless/dp/B07QPX544Y
link2: https://www.aliexpress.com/af/cc2530-board.html
link3: https://www.banggood.com/search/cc2530.html?
---
[Build and configuration instructions](http://ptvo.info/cc2530-based-zigbee-coordinator-and-router-112/)

### Pairing
At first boot it will automatically be in pairing mode and join your network.
To reset it into pairing mode power-cycle it three times as follows:

1) power on
2) wait 2sec
3) power off
4) repeat above steps 2 further times
5) power on and wait for it to join your network

### Flashing Instructions
Identify the required pins and follow flashing instructions:
- flash using [CCLoader](/flashing_ccloader.html) and NodeMCU/Wemos D1 mini (or similar ESP8266 board)
- flash using [Raspberry Pi](http://www.marrold.co.uk/2019/12/flashing-cc2530-cc2591-zigbee-module.html)
- flash using [CC Debugger](http://ptvo.info/how-to-select-and-flash-cc2530-144/) 
