---
date_added: 2020-05-31
model: zzh!
vendor: Electrolama
title: zig-a-zig-ah! CC2652R Multiprotocol RF Stick
category: coordinator
supports: coordinator
zigbeeid: none
compatible: [z2m,zha, z4d]
mlink: https://electrolama.com/projects/zig-a-zig-ah/
link: https://www.tindie.com/products/electrolama/zzh-cc2652r-multiprotocol-rf-stick/
---
zig-a-zig-ah! (zzh, for short) is a tiny "USB stick" form-factor development board.

It features:

- TI CC2652R 2.4 GHz multi-protocol wireless microcontroller targeting Thread, Zigbee, Bluetooth 5 Low Energy, IEEE 802.15.4g, IPv6-enabled smart objects (6LoWPAN) and proprietary systems
- Communicates with the host computer via the common CH340 USB-UART bridge, no manual driver installation needed in most cases (Windows and Linux)
Self-programming via the TI CC-series serial bootloader. As long as it is not explicitly disabled in code, no external programmer needed! Pushbutton on the default pin to trigger this mode
- cJTAG debug header, in case you disable BSL by accident or want a proper debug interface
- SMA antenna port for an external antenna of your choice
- General purpose LED

Think of it as an upgrade to the ubiquitous CC2531 USB Sticks commonly used for Zigbee tinkering. CC2652 has a much beefier processor, more memory and a sane free compiler that should enable easier development compared to the old 8051 based CC2530/1 devices.


![Pinout](/assets/images/devices/Electrolama_zzh-case.jpg)
