---
date_added: 2024-10-26
model: BTH-RM230Z
vendor: Bosch
title: Room thermostat II 230V
category: hvac
mlink: https://www.bosch-smarthome.com/uk/en/products/devices/room-thermostat-for-underfloor-heating/
link: https://www.conrad.de/de/p/bth-rm230z-bosch-smart-home-funk-repeater-funk-temperatursensor-luftfeuchtesensor-raumtemperaturregler-thermostat-2859443.html
link2: https://www.amazon.de/dp/B0BKLSJ3TN
zigbeemodel: ['RBSH-RTH0-ZB-EU']
compatible: [zha, z2m]
---
## Pairing

Remove the front panel from the thermostat and scan the qr code to get the install code, which is needed for pairing. 
Put your coordinator into pairing mode by using the 95 chars text string from the qr-code (see below).
Reset the thermostat and put it into pairing mode by attaching the front panel whilst pressing the front button.
The thermostat should show **RES** after a short moment. Release the button and push it again until the led line indicator lights green.

See Youtube video: https://www.youtube.com/watch?v=q1lYXYUKbDk

## ZHA

Call the Home Assistant action "zha.permit" [action zha.permit](https://www.home-assistant.io/integrations/zha/#action-zhapermit) with the qr install-code from the cover. 

![zha_join_example](./assets/images/zha_join_by_qr_install_code.png)

## Z2M

You will need a coordinator that supports install codes in Z2M. zstack adapters do support this in Z2M. 
If your adapter is not supported, you will get the message _Add install code is not supported_.

See: https://github.com/Koenkk/zigbee2mqtt/issues/17492

Use _Add install code_ in Z2M Tools menu to add the qr install-code and put Z2M into pairing mode.
