---
date_added: 2020-09-29
model: SPZB0001
vendor: Eurotronic
title: Spirit Zigbee Radiator Thermostat
category: hvac
supports: temperature, heating system control
image: /assets/images/devices/Eurotronic_SPZB0001.jpg
zigbeemodel: ['SPZB0001']
compatible: [z2m,deconz,iob,zigate,zha,tasmota]
deconz: 1098
zigate: https://zigate.fr/le-materiel-compatible-zigate/compatible/ttethermostatiqueetspirit
mlink: https://eurotronic.org/produkte/zigbee-heizkoerperthermostat/spirit-zigbee/
link: https://www.amazon.de/dp/B077GCDDBY
link2: https://www.amazon.co.uk/Eurotronic-Spirit-700045-Heating-Thermostat/dp/B077GCDDBY
link3: https://www.reichelt.com/de/de/heizkoerperthermostat-spirit-zigbee-et-spirit-zigbee-p238153.html
---
### Pairing
If you are having trouble pairing, reset the device.
- hold boost, +, and - (a count from 1 to 10 will be on the display)
- release ones 'rES' is displayed
- hit boot once after 'Jin' is displayed

Documentation for Zigbee parameters: https://eurotronic.org/wp-content/uploads/2019/11/Spirit_ZigBee_BAL_web_EN_November-2019.pdf

### Zigbee2Tasmota

Support for Eurotronic TRV `HostFlags`

Encoding is the following for flags - default value is `1`:
- 0x02 (2) = mirror_display - attribute `TRVMirrorDisplay`
- 0x04 (4) = boost - attribute `TRVBoost`
- 0x10 (16) = window_open - attribute `TRVWindowOpen`
- 0x80 (128) = child_protection - attribute `TRVChildProtection`

Decoding is automatic when receiving values but encoding is not implemented. Also you need to specify the Manuf code for Eurotronic `0x1037` when reading or writing manufacturer specific fields.

Reading:
```haskell
ZbSend {"Device":"<device>","Manuf":"0x1037","Read":{"EurotronicHostFlags":true}}

20:03:31 MQT: tele/tasmota/ZBBridge/SENSOR = {"Radiator":{"Device":"<device>","EurotronicHostFlags":1,"Endpoint":1,"LinkQuality":81}}
```

Writing: (132 = child_protection + boost)
```haskell
ZbSend {"Device":"<device>","Manuf":"0x1037","Write":{"EurotronicHostFlags":132}}

20:01:53 MQT: tele/tasmota/ZBBridge/SENSOR = {"Radiator":{"Device":"<device>","EurotronicHostFlags":133,"CurrentTemperatureSetPoint":30,"TRVBoost":1,"TRVChildProtection":1,"OccupiedHeatingSetpoint":30,"Endpoint":1,"LinkQuality":86}}

ZbSend {"Device":"<device>","Manuf":"0x1037","Write":{"EurotronicHostFlags":1}}
```
