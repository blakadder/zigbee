---
model: JTYJ-GD-01LM/BW
vendor: Xiaomi
title: Honeywell Fire Alarm Smoke Detector
category: sensor
supports: smoke, smoke density, batterypct, detector sensitivity
image: /assets/images/devices/JTYJ-GD-01LM-BW.jpg
zigbeemodel: ['lumi.sensor_smoke']
compatible: [z2m,z4d,zha,iob,deconz,tasmota]
deconz: 6245
z4d: https://z4d.fr/le-materiel-compatible-z4d/compatible/dtecteurdefume
mlink: http://files.xiaomi-mi.co.uk/files/MiJia_Honeywell/MiJia_Honeywell_Smoke_Detector_EN.pdf
link: https://www.aliexpress.com/af/mijia+honeywell+fire+alarm.html
link2: https://www.banggood.com/Xiaomi-MiHome-Honeywell-Fire-Smoke-Alarm-Detector-Remote-Alert-Photoelectric-Smoke-Sensor-p-1148105.html
link3: https://www.amazon.com/Honeywell-Notification-Inspection-Reminder-Compatible/dp/B078PYHBMD
---

Press the button on the front 3 times in quick successsion (Note: there will be a rather loud beep on first press).

## Zigbee2Tasmota

To change sensitivity use:

`ZbSend {"Device":"<device>","Manuf":"0x115F","Write":{"0500/FFF1%23":"0x04020000"}}` where the value is one of the following: `'low': 0x04010000, 'medium': 0x04020000, 'high': 0x04030000`

To run a self-test use:

`ZbSend {"Device":"<device>","Manuf":"0x115F","Write":{"0500/FFF1%23":"0x03010000"}}`
