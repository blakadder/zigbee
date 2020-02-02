---
model: 7299760PH
vendor: Philips
title: Hue Bloom Table Lamp
category: light
supports: on/off, brightness, colorxy, power-on behavior
image: /assets/images/devices/7299760PH.jpg
zigbeemodel: 
compatible: [z2m]
mlink: https://www2.meethue.com/en-in/p/hue-white-and-color-ambiance-bloom-table-lamp/7299760PH
link: https://www.amazon.com/Philips-Hue-Dimmable-Requires-Assistant/dp/B00I811PG6
link2: https://www.amazon.de/dp/B00HZVQ8DA
link3: https://www.amazon.co.uk/Philips-Dimmable-Changing-Compatible-Assistant/dp/B00KDG58BC
---
### Pairing
Philips LivingColors IRIS and Philips LivingColors Bloom Devices that comes with
Philips (HUE) Remote Gen 2 (Touch Wheel) or Gen 3 (Round Click Wheel) can be paired via Zigbee.
Devices with Gen 1 Remote don't use Zigbee and can not be paired.
The Philips LivingColors Remote can not be paired via Zigbee because it only support ZigBee Light Link (ZLL).
To Pair hold Button ON and Bottom Left Key (Favorite 1) on the Remote in Front of the Device until
the Device Light blinks and lights Orange. If connection was succesfull the Device Light will light Green.
**WARNING**: If you pair your Device to a Zigbee Network which is not using a ZLL Channel
you can't reset the Device with the Philips LivingColors Remote Gen 3.
The Gen 3 Remote will only try ZLL Channels to find the Device! Maybe it's possible to reset
the Device with a Philips LivingColors Remote Gen 2 as it should try all Zigbee Channels to find the Device.
[Philips LivingColors Bloom Manual](https://www.download.p4c.philips.com/files/7/7099760pu/7099760pu_dfu_eng.pdf)
[Philips LivingColors Iris Manual](https://www.download.p4c.philips.com/files/7/7099930ph/7099930ph_dfu_eng.pdf)

### Pairing
Factory resetting a Hue bulb can be accomplished in 4 ways.
After resetting the bulb will automatically connect.
#### Touchlink factory reset
See [Touchlink](https://www.zigbee2mqtt.io/information/touchlink)
#### Hue bridge
When the bulb is still connected to the Hue bridge, you can simply factory reset the bulb
by removing it from the bridge via the Hue app.
#### Hue dimmer switch
[VIDEO: Factory reset a Hue bulb with Hue dimmer switch](https://www.youtube.com/watch?v=qvlEAELiJKs).
#### TRADFRI remote control
This may also be possible with the
[Tradfri Remote Control](https://www.ikea.com/us/en/images/products/tradfri-remote-control__0489469_PE623665_S4.JPG)
by pressing and holding the reset button on the bottom of the remote (next to the battery).
[This may not always work](https://github.com/Koenkk/zigbee2mqtt/issues/296#issuecomment-416923751).

### Power-on behavior
Allows to set the power-on behavior of the bulb.
Note that this requires at least November/December '18 firmware update of the bulb.
```js
{
    "hue_power_on_behavior": "on",          //default, on, off, recover, default = on
    "hue_power_on_brightness": 125,         //default, same values as brightness, default = 255
    "hue_power_on_color_temperature": 280,  //default, same values as color_temp, default = 366
}
```
Attribute Value | Description
----------------|-----------------------------------------------
default         | reset to factory default value
on              | lamps on after power loss with configured brightness, color-temperature, color (to-do)
off             | lamps off after power loss
recover         | last running state after power loss

### Device type specific configuration
*[How to use device type specific configuration](https://www.zigbee2mqtt.io/information/configuration)*

`transition`   
Controls the transition time (in seconds) of brightness,
colortemp (if applicable) and color (if applicable) changes. Defaults to `0` (no transition).
Note that this value is overridden if a `transition` value is present in the MQTT command payload. 
{% raw %}
```yaml
light:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/[FRIENDLY_NAME]"
    availability_topic: "zigbee2mqtt/bridge/state"
    brightness: true
    xy: true
    schema: "json"
    command_topic: "zigbee2mqtt/[FRIENDLY_NAME]/set"
sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/[FRIENDLY_NAME]"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "-"
    value_template: "{{ value_json.linkquality }}"
```
{% endraw %}

