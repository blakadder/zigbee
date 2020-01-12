---
model: QBKG04LM
vendor: Aqara
title: 1 Gang No Neutral Wall Switch 
category: switch
supports: click release/hold, on/off
image: /assets/images/devices/QBKG04LM.jpg
zigbeemodel: ['lumi.ctrl_neutral1']
compatible: [z2m]
mlink: https://www.aqara.com/en/smart_light_switch_no_neutral.html
link: https://www.aliexpress.com/af/QBKG04LM-switch.html
link2: https://www.banggood.com/Aqara-Neutral-Line-Type-Remote-Control-Switch-Home-Light-Controller-Intelligent-Wall-Switch-From-Xiaomi-Eco-Sy-p-1316484.html
link3: https://www.amazon.de/dp/B07YWB3F5C
link4: https://www.amazon.co.uk/Leepesx-QBKG04LM-Intelligent-Switching-Firewire/dp/B07Y54MJLR
---
Doesn't work as a router and doesn't support power meter.

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

#### Unique Home Assistant Configuration:

{% raw %}
```yaml
sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    icon: "mdi:gesture-double-tap"
    value_template: "{{ value_json.action }}"
{% endraw %}


