---
model: 74580
vendor: Sylvania
title: Smart+ Soft White PAR38 Outdoor Flood Light Bulb
category: light
supports: on/off, brightness
image: /assets/images/devices/74580.jpg
zigbeemodel: ['PAR38 W 10 year']
compatible: [z2m]
mlink: 
link: https://www.amazon.com/Sylvania-Smart-Home-74580-SmartThings/dp/B071L2DM4J
link2: 
link3: 
---
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
