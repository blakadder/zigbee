---
model: 73740
vendor: Sylvania
title: Smart+ Adjustable White BR30 Bulb
category: light
supports: on/off, brightness, colortemp
image: /assets/images/devices/73740.jpg
zigbeemodel: ['LIGHTIFY BR Tunable White']
compatible: [z2m]
mlink: https://consumer.sylvania.com/our-products/smart/product-info/zigbee/smart-zigbee-adjustable-white-br30-bulb/index.jsp
link: https://www.amazon.com/SYLVANIA-Adjustable-Equivalent-SmartThings-Assistant/dp/B015KQ27SG
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
