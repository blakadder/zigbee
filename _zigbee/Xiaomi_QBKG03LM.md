---
model: QBKG03LM
vendor: Xiaomi
title: Aqara 2 Gang No Neutral Wall Switch 
category: switch
supports: release/hold, on/off, temperature
image: /assets/images/devices/QBKG03LM.jpg
zigbeemodel: ['lumi.ctrl_neutral2']
compatible: [z2m, zigate, conbee]
mlink: https://www.aqara.com/en/smart_light_switch_no_neutral.html
link: https://www.aliexpress.com/af/QBKG03LM-switch.html
link2: https://www.banggood.com/Aqara-Neutral-Line-Type-Remote-Control-Switch-Home-Light-Controller-Intelligent-Wall-Switch-From-Xiaomi-Eco-Sy-p-1316484.html
link3: https://www.amazon.de/dp/B07YW4XWM1
link4: https://www.gearbest.com/alarm-systems/pp_610096.html
---
Doesn't work as a router and doesn't support power meter.

### Pairing
Press and hold the button on the device for +- 10 seconds
(until the blue light starts blinking and stops blinking), release and wait.


### Device type specific configuration
*[How to use device type specific configuration](https://www.zigbee2mqtt.io/information/configuration)*


* `temperature_precision`: Controls the precision of `temperature` values,
e.g. `0`, `1` or `2`; default `2`.
* `temperature_calibration`: Allows to manually calibrate temperature values,
e.g. `1` would add 1 degree to the temperature reported by the device; default `0`.


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

#### Unique Home Assistant Configuration:
{% raw %}
```yaml
switch:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    payload_off: "OFF"
    payload_on: "ON"
    value_template: "{{ value_json.state_left }}"
    command_topic: "zigbee2mqtt/<FRIENDLY_NAME>/left/set"

switch:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    payload_off: "OFF"
    payload_on: "ON"
    value_template: "{{ value_json.state_right }}"
    command_topic: "zigbee2mqtt/<FRIENDLY_NAME>/right/set"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    icon: "mdi:toggle-switch"
    value_template: "{{ value_json.click }}"
{% endraw %}


