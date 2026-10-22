---
date_added: 2026-10-22
model: ETH-MG21 / ETH-MG24
vendor: Inswift
title: Ethernet Wi-Fi USB Zigbee Coordinator EFR32MG21 / EFR32MG24
category: coordinator
supports: coordinator
zigbeemodel:
compatible: [zha, z2m]
mlink: https://www.inswift.tech/en/products/eth-mg/
link: https://www.aliexpress.com/store/1104754391
---

Network Zigbee coordinator with an ESP32-V3 host and a Silicon Labs EFR32MG21 (ETH-MG21) or EFR32MG24 (ETH-MG24) radio running EmberZNet NCP firmware (EZSP). The ESP32 bridges the radio UART to TCP, so the coordinator can sit anywhere on the LAN.

- Connection: **Ethernet**, **Wi-Fi** or **USB**
- PoE variants: **ETH-MG21 POE / ETH-MG24 POE** ([product page](https://www.inswift.tech/en/products/eth-mg-poe/)), same radio and pinout
- Zigbee TCP port **6638**, 115200 baud, no flow control
- MG24 also supports Thread and MultiPAN (Zigbee + Thread) firmware images

## Zigbee2MQTT

```yaml
serial:
  port: tcp://GATEWAY_IP:6638
  adapter: ember
  baudrate: 115200
```

## ZHA

Add the ZHA integration, choose **EZSP** as radio type and enter `socket://GATEWAY_IP:6638` as the serial device path (115200, no flow control).

Replace `GATEWAY_IP` with the gateway's IP address.

## Alternative ESP32 firmware

Stock Inswift firmware is the default. Optional open-source firmware for the ESP32 host keeps the same `tcp://GATEWAY_IP:6638` bridge:

- [ESPHome](https://github.com/Inswift-dev/inswift-eth/tree/main/esphome/eth-mg) (Zigbee TCP bridge + Home Assistant native API)
- [Tasmota32 ZigbeeBridgePro](https://github.com/Inswift-dev/inswift-eth/tree/main/tasmota/eth-mg) as a TCP serial bridge for ZHA / Zigbee2MQTT. Map GPIO33 as **Output Lo**, not Zigbee Rst 2 (BSL polarity differs from the Sonoff ZBBridge Pro). Zigbee2Tasmota has not been tested on this device.

Guides: [Zigbee2MQTT setup](https://www.inswift.tech/en/tutorials/zigbee2mqtt-setup/) · [ZHA setup](https://www.inswift.tech/en/tutorials/zha-home-assistant/) · [Firmware and docs on GitHub](https://github.com/Inswift-dev/inswift-eth)
