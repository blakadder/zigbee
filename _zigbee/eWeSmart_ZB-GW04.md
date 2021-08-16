---
date_added: 2021-08-12
model: ZB-GW04
vendor: eWeSmart
title: EFR32MG21A020F768IM32 Zigbee 3.0 USB Dongle
category: coordinator
mlink: https://www.easyiot.tech
link: https://www.aliexpress.com/item/1005002791666029.html
zigbeemodel: ZB-GW04
compatible: zha
---
It comes pre-flashed from ITead with an unsigned EmberZNet 6.7.9 Zigbee NCP application firmware with Silabs standard EZSP v8 (EmberZNet Serial Protocol version 8) interface enabled as well as the standard Silabs Gecko Bootloader firmware for recovery, meaning it can be used either as-is out-of-the-box or flashed with custom application firmware via USB.

Hardware is at its core based on Silicon Labs EFR32MG21 Series 2 Multiprotocol Wireless SoC (part number EFR32MG21A020F1024IM32) and a WCH CH340E USB to Serial/UART Bridge Controller. While it only has a PCB circuit board antenna the radio has an integrated +20 dBm Power Amplifier (output power) and -104.5 dBm Receive Sensitivity which should be made for a very good Zigbee coordinator or Zigbee router if both hardware and firmware were properly implemented.

The Elelabs EZSP Firmware Upgrade Utility or walthowd firmware update Docker image can be used to flash the firmware to a newer or older version. New and old firmware official images are currently being provided at https://github.com/xsp1989/zigbeeFirmware"


