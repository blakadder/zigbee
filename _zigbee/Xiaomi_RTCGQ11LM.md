---
model: RTCGQ11LM
vendor: Xiaomi
title: Aqara Human Body Motion and Illuminance Sensor
category: sensor
supports: occupancy, illuminance, batterypct
image: /assets/images/devices/RTCGQ11LM.jpg
zigbeemodel: ['lumi.sensor_motion.aq2']
compatible: [z2m, zigate, conbee, tasmota, zha, iob]
zigatelink: https://zigate.fr/le-materiel-compatible-zigate/compatible/dtecteurdemouvementaqara
mlink: https://www.aqara.com/en/human_motion_sensor.html
link: https://www.aliexpress.com/item/10000006173856.html
link2: https://www.banggood.com/Original-Aqara-Zig_Bee-Wireless-Human-Body-PIR-Sensor-Smart-Home-Kit-From-Xiaomi-Eco-System-p-1177007.html
link3: https://www.gearbest.com/alarm-systems/pp_659226.html
link4: https://www.amazon.de/dp/B07D1CRRVF
---
**IMPORTANT**: `occupancy_timeout` should not be set to lower than 60 seconds.
The reason is this: after detecting a motion the sensor ignores any movements for
exactly 60 seconds. In case there are movements after this, a new message
(`occupancy: true`) will be sent and the sensor will go for one more minute sleep, and so on.
This is expected behaviour (see [#270](https://github.com/Koenkk/zigbee2mqtt/issues/270#issuecomment-414999973)).
To work around this, a
[hardware modification](https://community.smartthings.com/t/making-xiaomi-motion-sensor-a-super-motion-sensor/139806)
is needed.



* `illuminance_calibration`: Allows to manually calibrate illuminance values,
e.g. `95` would take 95% to the illuminance reported by the device; default `100`. 
