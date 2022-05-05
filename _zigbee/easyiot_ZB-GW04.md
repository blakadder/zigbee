---
date_added: 2021-11-02
model: ZB-GW04
vendor: easyiot
title: easyiot EFR32MG21 Zigbee 3.0 USB Dongle
category: coordinator
mlink: https://www.easyiot.tech
link: https://www.aliexpress.com/item/1005002791666029.html
zigbeemodel: ZB-GW04
compatible: [zha,z4d]
---
It comes pre-flashed with an unsigned EmberZNet 6.7.9 Zigbee NCP application firmware with Silabs standard EZSP v8 (EmberZNet Serial Protocol version 8) interface enabled as well as the standard Silabs Gecko Bootloader firmware for recovery, meaning it can be used either as-is out-of-the-box or flashed with custom application firmware via USB.

Hardware is at its core based onSilicon Labs EFR32MG21 Series 2 Multiprotocol Wireless SoC(part numberEFR32MG21A020F768IM32) and aWCH CH340E USB to Serial/UART Bridge Controller. While it only has a PCB circuit board antenna the radio has an integrated +20 dBm Power Amplifier (output power) and -104.5 dBm Receive Sensitivity which should be made for a very good Zigbee coordinator or Zigbee router if both hardware and firmware were properly implemented.

TheElelabs EZSP Firmware Upgrade Utility(https://github.com/Elelabs/elelabs-zigbee-ezsp-utility/) orwalthowd firmware update Docker image(https://github.com/walthowd/husbzb-firmware) can be used to flash the firmware to a newer or older version. New and old firmware official images are currently being provided at github (https://github.com/xsp1989/zigbeeFirmware/tree/master/firmware/Zigbee3.0_Dongle)
