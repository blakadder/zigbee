---
date_added: 2023-12-23
model: MHO-C401N
vendor: Xiaomi
title: MiaoMiaoCe Temperature and Humidity Sensor with E-Ink Display
category: sensor
supports: temperature, humidity
zigbeemodel: ['MHO-C401N']
compatible: [z2m, zha, tasmota]
mlink: https://github.com/pvvx/ZigbeeTLc
link: https://www.aliexpress.com/item/1005005933945983.html
pairing: "Remove the battery for 5 seconds an re-insert it"
---

## How To

This Bluetooth sensor can be converted to a Zigbee one with just a webpage and a device with Bluetooth. Open the [web flasher](https://pvvx.github.io/ATC_MiThermometer/TelinkMiFlasher.html) and follow the procedure in video.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/-bbe58DRvDU?si=3K_TaALbYcokCxrn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Troubleshooting

- make sure the sensor is close to the Bluetooth radio
- use a full battery, if its lower than 40% flashing could fail and brick the device

Zigbee firmware and web flashing tool by [pvvx](https://github.com/devbis/z03mmc), flashing tools by [pvvx](https://pvvx.github.io/