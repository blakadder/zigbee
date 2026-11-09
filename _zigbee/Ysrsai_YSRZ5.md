---
date_added: 2026-11-09
model: YSRZ5
vendor: Ysrsai
title: 5-in-1 LED Controller with PIR and Illuminance
category: light
supports: light, occupancy, illuminance
zigbeemodel: ['YSRSAI', 'Light-PIR-Lux']
compatible: [zha, z2m]
---

The product label identifies the controller as YSRZ5. Its Zigbee manufacturer is `YSRSAI` and its Zigbee model is `Light-PIR-Lux`.

The owner reports that light control and sensor functions work with ZHA, Zigbee2MQTT and SmartThings, but the precise test coverage has not been established. All five light modes and automatic sensor reporting have not been fully verified.

- [Unofficial Zigbee2MQTT external converter and ZHA custom quirk](https://github.com/ysrsai/ysrsai-zigbee2mqtt-converter). The converter does not actively configure occupancy or illuminance reporting; updates depend on device reports.
- [Unofficial SmartThings Edge driver](https://github.com/ysrsai/smartthings-edge-light-pir-lux) and [driver channel](https://callaway.smartthings.com/channels/f6ef8e37-4ac3-47b8-bf40-64412dd6ae40?status=accepted). This is not a claim of built-in SmartThings support.

The automatically generated Zigbee2MQTT device-page link may not exist; use the external converter above. The template also displays Tasmota for light-category devices automatically; Tasmota compatibility has not been confirmed.
