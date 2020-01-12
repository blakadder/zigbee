---
model: QBKG11LM
vendor: Xiaomi
title: Aqara Single Key Wired Wall Switch
category: switch
supports: on/off, power measurement
image: /assets/images/devices/QBKG11LM.jpg
zigbeemodel: ['lumi.ctrl_ln1.aq1', 'lumi.ctrl_ln1']
compatible: [z2m, zigate, conbee]
mlink: 
link: https://www.aliexpress.com/item/4000075319292.html
link2: 
link3: 
---
### Pairing
Press and hold the button on the device for +- 10 seconds
(until the blue light starts blinking and stops blinking), release and wait.


### Decoupled mode
Decoupled mode allows to turn wired switch into wireless button with separately controlled relay.
This might be useful to assign some custom actions to buttons and control relay remotely.
This command also allows to redefine which button controls which relay for the double switch.

Special topics should be used: `zigbee2mqtt/[FRIENDLY_NAME]/set` to modify operation mode.

Payload:
```js
{
  "operation_mode": {
    "button": "single"|"left"|"right",
    "state": "VALUE"
  }
}
```

Values                | Description
----------------------|---------------------------------------------------------
`control_relay`       | Button directly controls relay (for single switch)
`control_left_relay`  | Button directly controls left relay (for double switch)
`control_right_relay` | Button directly controls right relay (for double switch)
`decoupled`           | Button doesn't control any relay

`zigbee2mqtt/[FRIENDLY_NAME]/get` to read current mode.

Payload:
```js
{
  "operation_mode": {
    "button": "single"|"left"|"right"
  }
}
```

Response will be sent to `zigbee2mqtt/[FRIENDLY_NAME]`:
```json
{"operation_mode_right":"control_right_relay"}
``` 
