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

## How To

This Bluetooth sensor can be converted to a Zigbee one with just a webpage and a device with Bluetooth. Open the web flasher and follow the procedure in video.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/KO_fWBtoHq8?si=beaEVLiJ-b9rNWbO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Troubleshooting

- make sure the Xiaomi sensor is close to the Bluetooth radio
- use a full battery, if its lower than 40% flashing could fail and brick the device

## Serial Flash

If the OTA fails or you want to revert back to Bluetooth firmware you need to flash it using a serial to USB adapter. Wire the device like this:

![Pinout](/assets/images/devices/Xiaomi_LYWSD03MMC_pinout.webp)

Visit [USBCOM Flasher](https://pvvx.github.io/ATC_MiThermometer/USBCOMFlashTx.html), "Connect" to the port of the serial adapter, "Choose File" ([`z03mmc.bin`](https://github.com/devbis/z03mmc/releases) for Zigbee or download one of the [Bluetooth](https://github.com/pvvx/ATC_MiThermometer/tree/master) firmwares)

"Write to Flash" and wait for the process to complete. If you have issues run "Erase All Flash" first.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/KD_bchKkwMQ?si=nD4jwLK9JDw9ym-A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Zigbee firmware by [devbis](https://github.com/devbis/z03mmc), flashing tools by [pvvx](https://pvvx.github.io/)
