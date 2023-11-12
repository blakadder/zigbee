---
date_added: 2023-11-12
model: LYWSD03MMC
vendor: Xiaomi
title: Temperature And Humidity Sensor with LCD
category: sensor
supports: temperature, humidity
zigbeemodel: ['LYWSD03MMC']
compatible: [z2m, zha, tasmota]
mlink: https://github.com/devbis/z03mmc#flashing-over-the-air-easy-way
link: https://www.aliexpress.com/item/1005006067590977.html
link2: https://www.amazon.de/dp/B08C7KVDJW/
link3: https://www.banggood.com/Xiaomi-Mijia-Smart-LCD-Screen-Digital-Thermometer-2-bluetooth-Temperature-Humidity-Sensor-Moisture-Meter-Mijia-App-p-1977441.html
link4: https://www.domadoo.fr/en/peripheriques/5304-xiaomi-mi-temperature-and-humidity-monitor-2-6934177717079.html
link5: https://www.geekbuying.com/item/XIAOMI-4pcs-Mijia-Bluetooth-Thermometer-Hygrometer-2-White-425423.html
pairing: "Reinsert the battery and/or short the RESET and GND contacts above the battery for 3 seconds."
---

This Bluetooth sensor can be converted to a Zigbee one with just a webpage and a device with Bluetooth. Open the web flasher and follow the procedure in video.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/KO_fWBtoHq8?si=beaEVLiJ-b9rNWbO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Troubleshooting:

- make sure the Xiaomi sensor is close to the Bluetooth radio
- use a full battery, if its lower than 40% flashing could fail and brick the device

## Firmware Source

This is originally a Bluetooth sensor but it can be flashed to Zigbee firmware using a webpage.  [Instructions for flashing](https://github.com/devbis/z03mmc).