---
date_added: 2020-01-29
model: SLR1b
vendor: Hive
title: Single Channel Receiver
category: hvac
supports: thermostat, occupied heating, weekly schedule
image: /assets/images/devices/Hive_SLR1b.jpg
zigbeemodel: ['SLR1b']
compatible: [zha,z2m,deconz]
deconz: 3090
mlink: https://www.hivehome.com/bg/products/hive-active-heating?cid=cen.bg..heat_HAH
link: 
link2: 
link3: 
---

## Pairing instructions

1. Remove the thermostat from the wall and remove a battery
2. Turn boiler off at the mains, this will also turn off the receiver.
3. Turn the boiler on
4. Hold down central heating button on the Hive receiver until light turns pink, then release
5. Hold down the central heating button again until the light turns amber with double flashing
6. Pair with Home Assistant - using ZHA’s ‘add device’
7. At this point the amber double flash may change to a single flash
8. Stop ZHA from searching for devices by pressing back
9. Replace the battery in the thermostat and allow to boot
10. Press and hold the menu and back buttons, allow the countdown to finish and release when you see 'welcome' - after selecting - a language, it will enter pairing mode.
11. On ZHA select the Hive receiver device you added earlier, now click “ADD DEVICES VIA THIS DEVICE”
12. The thermostat should now pair to the boiler receiver. The amber light should turn green.
