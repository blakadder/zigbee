---
model: PTRPP-WH02
vendor: Quirky
title: Tripper Window/Door Sensor
category: sensor
supports: contact
zigbeemodel: ['Tripper']
compatible: [deconz,z2m]
deconz: 2800
mlink: 
link: https://www.amazon.com/Quirky-Tripper-Window-Sensor-count/dp/B00P7RURIG
link2: 
link3: 
---
### Z2M Compatablity
Need to add a custom external Converter via the Tripper.js file attached. Place this file in same folder as your confgiguration.yaml and add line to configureation.yaml.


Add line to configuration .yaml
----------------------
external_converters:
  - Tripper.js
----------------------

[tripper.js.txt](https://github.com/blakadder/zigbee/files/8900794/tripper.js.txt)
