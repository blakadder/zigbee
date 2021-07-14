---
model: DJT11LM
vendor: Aqara
title: Vibration Sensor
category: sensor
supports: action, batterylow, sensitivity 
action: drop, tilt, touch
image: /assets/images/devices/DJT11LM.jpg
zigbeemodel: ['lumi.vibration.aq1']
compatible: [z2m,zigate,tasmota,zha,iob,deconz]
zigate: https://zigate.fr/le-materiel-compatible-zigate/compatible/capteurvibration
deconz: 748
mlink: https://www.aqara.com/us/vibration_sensor.html
link: https://www.aliexpress.com/item/32954158161.html
link2: https://www.banggood.com/International-Version-Original-Aqara-Smart-Motion-Sensor-Smart-Home-Vibration-Detection-Alarm-p-1510741.html
link3: https://www.amazon.com/Aqara-Vibration-Sensor-Automation-Compatible/dp/B07PJT939B
link4: https://www.domadoo.fr/fr/peripheriques/4667-aqara-capteur-de-vibration-zigbee-192784000113.html
---

# Zigbee2Tasmota
To set sensitivity:

**Set to low:**
ZbSend {"Device":"...","Manuf":"0x115F","Write":{"0000/FF0D%20":21}}

**Set to medium:**
ZbSend {"Device":"...","Manuf":"0x115F","Write":{"0000/FF0D%20":11}}

**Set to high:**
ZbSend {"Device":"...","Manuf":"0x115F","Write":{"0000/FF0D%20":1}}




