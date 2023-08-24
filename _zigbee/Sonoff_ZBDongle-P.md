---
date_added: 2021-10-30
model: ZBDongle-P
vendor: Sonoff
title: Zigbee 3.0 CC2652P Dongle Plus
category: coordinator
supports: coordinator
zigbeemodel:
compatible: [z2m, zha, z4d]
mlink: https://itead.cc/product/sonoff-zigbee-3-0-usb-dongle-plus/
link: https://www.amazon.de/gp/product/B09KXTCMSC
link2: https://cloudfree.shop/product/sonoff-zigbee-3-0-dongle/
link3: https://www.domadoo.fr/en/interface-domotique/5976-sonoff-cle-usb-zigbee-30-antenne-externe-20dbm-compatible-zha-zigbee2mqtt.html
link4: https://www.aliexpress.com/item/1005003606832844.html
---

## Firmware Upgrade

Install Python ([Windows install link](https://www.python.org/downloads/windows/)) and required dependencies using `pip3 install pyserial intelhex`.

Download flashing tool from: https://github.com/JelmerT/cc2538-bsl

Download [Z-Stack firmware](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_3.x.0/bin) and place it in the same folder as cc2538-bsl 

Run (change port accordingly):
 
```
python.exe cc2538-bsl.py --bootloader-sonoff-usb -p COM4 -evw CC1352P2_CC2652P_launchpad_coordinator_20210708.hex
```

NOTE: the firmware file to flash must be the last option given.

Sonoff Dongle Plus is using CP210x, if you don't have one, download the device driver from https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers

![Internal front](/assets/images/Sonoff_ZBDongle-P-1.jpg)
![Internal back](/assets/images/Sonoff_zbdongle-P-2.jpg)
