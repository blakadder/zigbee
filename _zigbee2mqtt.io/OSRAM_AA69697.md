---
model: AA69697
vendor: OSRAM
title: Lightify Classic A60 810lm RGBW Bulb
category: light
supports: on/off, brightness, colortemp, colorxy
image: /assets/images/devices/AA69697.jpg
compatible: [z2m,zigate,conbee]
mlink: 
link: https://www.amazon.de/Osram-Lightify-Gl%C3%BChlampe-Kompatibel-4052899926097/dp/B00JDJC2LO
link2: 
link3: 
---
### Pairing
Follow instruction from [Manual reset](http://belkin.force.com/Articles/articles/en_US/Troubleshooting_and_Tutorials/Resetting-the-OSRAM-LIGHTIFY-Tunable-White-60-Bulb#a).
After resetting the bulb will automatically connect.


### Set default power on/off transition
Various Osram/Sylvania LED support setting a default transition when turning a light on and off.
```js
{
    "osram_set_transition": 0.1,            //time in seconds (integer or float)
}
```

### Remember current light state
Various Osram/Sylvania LED support remembering their current state in case of power loss, or if a light
is manually switched off then on. Lights will remember their respective attributes
(i.e. brightness, color, saturation, etc.).
NOTE: This must be executed everytime you make changes to a light's attributes for it to then 'remember' it.
```js
{
    "osram_remember_state": true,            // true, false (boolean)
}
```


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
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    brightness: true
    color_temp: true
    xy: true
    schema: "json"
    command_topic: "zigbee2mqtt/<FRIENDLY_NAME>/set"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "-"
    value_template: "{{ value_json.linkquality }}"
```
{% endraw %}


