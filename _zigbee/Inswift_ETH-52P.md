---
date_added: 2026-10-22
model: ETH-52P / ETH-52P7
vendor: Inswift
title: Ethernet Wi-Fi USB Zigbee Coordinator CC2652P / CC2652P7
category: coordinator
supports: coordinator
zigbeemodel:
compatible: [zha, z2m]
mlink: https://www.inswift.tech/en/products/eth-52p/
link: https://www.aliexpress.com/store/1104754391
---

Network Zigbee coordinator with an ESP32-V3 host and a Texas Instruments CC2652P (ETH-52P) or CC2652P7 (ETH-52P7) radio running Z-Stack coordinator firmware (ZNP). The ESP32 bridges the radio UART to TCP, so the coordinator can sit anywhere on the LAN.

- Connection: **Ethernet**, **Wi-Fi** or **USB**
- Zigbee TCP port **6638**, 115200 baud, no flow control
- CC2652P7 has more flash / RAM and also supports Thread and MultiPAN (Zigbee + Thread) firmware images
- Coordinator firmware images: [ti-cc2652](https://github.com/Inswift-dev/inswift-eth/tree/main/ti-cc2652)

## Zigbee2MQTT

```yaml
serial:
  port: tcp://GATEWAY_IP:6638
  adapter: zstack
  baudrate: 115200
```

## ZHA

Add the ZHA integration, choose **ZNP** as radio type and enter `socket://GATEWAY_IP:6638` as the serial device path (115200, no flow control).

Replace `GATEWAY_IP` with the gateway's IP address.

## Alternative ESP32 firmware

Stock Inswift firmware is the default. Optional open-source firmware for the ESP32 host keeps the same `tcp://GATEWAY_IP:6638` bridge:

- [ESPHome](https://github.com/Inswift-dev/inswift-eth/tree/main/esphome/eth-52p) (Zigbee TCP bridge + Home Assistant native API)
- [Tasmota32 ZigbeeBridgePro](https://github.com/Inswift-dev/inswift-eth/tree/main/tasmota/eth-52p) as a TCP serial bridge for ZHA / Zigbee2MQTT. Map GPIO12 as **Output Hi** (CC2652 BSL idles high). Zigbee2Tasmota and flashing the CC2652 from Tasmota have not been tested on this device.

Guides: [Zigbee2MQTT setup](https://www.inswift.tech/en/tutorials/zigbee2mqtt-setup/) · [ZHA setup](https://www.inswift.tech/en/tutorials/zha-home-assistant/) · [Firmware and docs on GitHub](https://github.com/Inswift-dev/inswift-eth)
