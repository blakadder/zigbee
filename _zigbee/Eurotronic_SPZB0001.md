---
model: SPZB0001
vendor: Eurotronic
title: Spirit Zigbee Radiator Thermostat
category: hvac
supports: temperature, heating system control
image: /assets/images/devices/Eurotronic_SPZB0001.jpg
zigbeemodel: ['SPZB0001']
compatible: [z2m,conbee,iob]
deconz: 1098
mlink: https://eurotronic.org/produkte/zigbee-heizkoerperthermostat/spirit-zigbee/
link: https://www.amazon.de/dp/B077GCDDBY
link2: https://www.reichelt.com/de/de/heizkoerperthermostat-spirit-zigbee-et-spirit-zigbee-p238153.html
link3: 
---
### Pairing
If you are having trouble pairing, reset the device.
- hold boost, +, and - (a count from 1 to 10 will be on the display)
- release ones 'rES' is displayed
- hit boot once after 'Jin' is displayed


### Zigbee2MQTT Control Options
*Current heating setpoint*
```json
{
    "current_heating_setpoint": 21.5
}
```
Current heating setpoint is also modified when occupied or unoccupied heating setpoint is set.

*System mode*

The system mode will be either `off`, `auto`, or `heat`. When set to `heat` the boost host flags will be set, when using `off` the window_open hostflag will be set (and off will be displayed on the display).

*Eurotronic host flags*

The `eurotronic_host_flags` property contains an object with a true/false field for each host option.

```json
{
  "eurotronic_host_flags": {
    "mirror_display": false,
    "boost": false,
    "window_open": false,
    "child_protection": true
  }
}
```

You can toggle these flags by publishing a message to the `set` mqtt topic containing `eurotronic_host_flags`. e.g. enabling the display mirroring:
```json
{"eurotronic_host_flags": {"mirror_display": true}}
```

**Note that `true` or `false` do not have quotes aroud them!**

*Eurotronic system mode*

**This is deprecated in favor of eurotronic_host_flags, but will still work for now.**

This is a bitmap encoded field to set several device specific features. Please remind it is not possible to set single bits, always the full bitmap is written. Bit 0 doesnt seem to be writeable, it is always reported as set, so expect your written value + 1 to be reported.

Bit | Position
---
| --------
0 | unknown (default 1)
1 | Mirror display
2 | Boost
3 | unknown
4 | disable window open
5 | set window open (is reported as disable window open)
6 | unknown
7 | Child protection

Examples for eurotronic_system_mode:

Mirror display, reported as 3
```json
{
    "eurotronic_system_mode": 2
}
```
signal external window open, current_heating_setpoint will report "5", device display shows "OFF"
```json
{
    "eurotronic_system_mode": 32
}
```
signal external window close, will restore last current_heating_setpoint value
```json
{
    "eurotronic_system_mode": 16
}
```
Mirror display and set child protection.
```json
{
    "eurotronic_system_mode": 66
}
```

*Eurotronic error status*
```json
{
    "eurotronic_error_status": 0
}
```
This field is a readonly bitmap

Bit | Position
---
| --------
0 | reserved
1 | reserved
2 | reserved
3 | Valve adaption failed (E1)
4 | Valve movement too slow (E2)
5 | Valve not moving/blocked (E3)
6 | reserved
7 | reserved 

