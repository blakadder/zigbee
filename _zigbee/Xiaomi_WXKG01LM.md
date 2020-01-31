---
model: WXKG01LM
vendor: Xiaomi
title: Mijia Wireless Switch
category: switch
supports: click, batterylow
image: /assets/images/devices/WXKG01LM.jpg
zigbeemodel: ['lumi.sensor_switch']
compatible: [z2m, zigate, conbee, tasmota, iob]
zigatelink: https://zigate.fr/le-materiel-compatible-zigate/compatible/bouton
mlink: https://www.mi.com/global/mi-smart-sensor-set
link: https://www.banggood.com/Original-Xiaomi-Mijia-Smart-Home-Zig-bee-Wireless-Smart-Switch-Touch-Button-ON-OFF-WiFi-Remote-Control-Switch-p-1049175.html
link2: https://www.aliexpress.com/item/32825685057.html
link3: https://www.gearbest.com/home-appliances-accessories/pp_009587036194.html
link4: https://www.banggood.com/Original-Xiaomi-Smart-Wireless-Switch-p-1045081.html
---
### Actions
single click, double click, triple click, quadruple click, many clicks, long click, long_release click

### Device type specific configuration
*[How to use device type specific configuration](https://www.zigbee2mqtt.io/information/configuration)*

* `long_timeout`: The WXKG01LM only reports a button press and release.
By default, Zigbee2mqtt publishes a long click when there is at
least 1000 ms between both events. It could be that due to
delays in the network the release message is received late. This causes a single
click to be identified as a long click. If you are experiencing this you can try
experimenting with this option (e.g. `long_timeout: 2000`). 
