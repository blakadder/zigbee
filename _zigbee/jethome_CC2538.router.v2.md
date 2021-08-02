---
date_added: 2021-03-22
model: CC2538.router.v2
vendor: jethome
title: Modkam Stick CC2538 Router with Temperature Sensor
category: router
supports: router, temperature
zigbeeid: ['cc2538.router.v2']
compatible: [z2m,iob,zha,tasmota]
z2m: cc2538.router.v2
mlink: https://github.com/jethome-ru/zigbee-firmware/tree/master/ti/router/cc2538_cc2592
link: https://modkam.ru/?p=1112
---
- Devices are working nicely with zigbee2mqtt (I have 3 coordinators and 2 routers running)
- you need to solder them yourself (parts are 0805), took me about 40 minutes per board
- [Flashing needs a cheap JTAG-Adapter](https://s.click.aliexpress.com/e/_AlQD5n)
- all parts are on AliExpress - see [BOM](https://www.dropbox.com/s/x75iu18pmlnbv57/BOM.xlsx?dl=0)
- [Coordinator Firmware](https://github.com/jethome-ru/zigbee-firmware/tree/master/ti/coordinator/cc2538_cc2592)
- [Router Firmware](https://github.com/jethome-ru/zigbee-firmware/tree/master/ti/router/cc2538_cc2592)
- [Gerbers](https://www.dropbox.com/s/rj68dhfdooon67e/Gerber_coordinatorV3.rar?dl=0)
- [My order at DirtyPCB - you can just reorder](https://dirtypcbs.com/store/designer/details/10965/6507/zigbee-v3-board)
