---
model: PP-WHT-US
vendor: Securifi
title: Peanut Smart Plug
category: plug
supports: on/off, power measurement, ota
image: /assets/images/devices/Securifi_PP-WHT-US.jpg
zigbeemodel: ['PP-WHT-US']
compatible: [z2m]
mlink: https://www.securifi.com/rg/securifi-peanut-plug
link: https://www.amazon.com/dp/B00TC9NC82
link2: https://www.walmart.com/ip/Securifi-Peanut-Smart-Plug-Hub-Required/46203400
link3: 
---
### Pairing
Additional steps are required because the Peanut Smart Plug does not provide a `modelId` in its database entry,
and thus zigbee2mqtt cannot identify the product or how to handle it.

Reset the device and initiate pairing mode by holding the pairing button
(the small button next to the on/off button) for ten seconds, releasing the button,
and unplugging the device.
When plugged back in, the front LED will be blinking red and ready to receive a pairing request.
When paired successfully, the red LED on the plug will stop blinking.

After pairing, you must stop zigbee2mqtt and manually edit the zigbee2mqtt `database.db` file with a
text editor (note that the file may be owned by root).
Find each line where the Peanut Smart Plug is listed (look for "SecuriFi Ltd." in the `ManufName` field)
and **add** `"modelId":"PP-WHT-US",` between two existing fields.

*For example,* change `..."manufId":4098,"manufName":"Securifi Ltd....`
to `..."manufId":4098,"modelId":"PP-WHT-US","manufName":"Securifi Ltd....`
on each line for the device.

Save the file and restart zigbee2mqtt.


### Power measurements
This device only support power measurements with an up-to-date firmware on the plug which can only be done
via the original hub. In case of an older firmware you will only see 0 values in the measurements.
Discussion: https://github.com/Koenkk/zigbee2mqtt/issues/809 


