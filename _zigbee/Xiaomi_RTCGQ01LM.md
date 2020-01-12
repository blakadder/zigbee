---
model: RTCGQ01LM
vendor: Xiaomi
title: MiJia Human Body Sensor
category: sensor
supports: occupancy, battery
image: /assets/images/devices/RTCGQ01LM.jpg
zigbeemodel: ['lumi.sensor_motion']
compatible: [z2m, zigate, conbee, tasmota]
mlink: https://www.mi.com/global/mi-smart-sensor-set
link: https://www.aliexpress.com/item/4000067518837.html
link2: https://www.banggood.com/Original-Xiaomi-Intelligent-Human-Sensor-Control-Smart-Home-Suit-Kit-Accessory-p-1017540.html
link3: https://www.gearbest.com/home-appliances-accessories/pp_009566410748.html
---
### Pairing
Press and hold the reset button on the device for +- 5 seconds (until the blue light starts blinking).
After this the device will automatically join.


### Device type specific configuration
*[How to use device type specific configuration](https://www.zigbee2mqtt.io/information/configuration)*

* `no_occupancy_since`: Timeout (in seconds) after `no_occupancy_since` is send.
This indicates the time since last occupancy was detected.
For example `no_occupancy_since: [10, 60]` will send a `{"no_occupancy_since": 10}` after 10 seconds
and a `{"no_occupancy_since": 60}` after 60 seconds.
* `occupancy_timeout`: Timeout (in seconds) after the `occupancy: false` message is sent.
If not set, the timeout is `90` seconds.
When set to `0` no `occupancy: false` is send.

**IMPORTANT**: `occupancy_timeout` should not be set to lower than 60 seconds.
The reason is this: after detecting a motion the sensor ignores any movements for
exactly 60 seconds. In case there are movements after this, a new message
(`occupancy: true`) will be sent and the sensor will go for one more minute sleep, and so on.
This is expected behaviour (see [#270](https://github.com/Koenkk/zigbee2mqtt/issues/270#issuecomment-414999973)).
To work around this, a
[hardware modification](https://community.smartthings.com/t/making-xiaomi-motion-sensor-a-super-motion-sensor/139806)
is needed. 
