---
date_added: 2021-06-28
model: ZSS-ZK-THL
vendor: Moes 
title: E-Ink Brightness Thermometer
category: sensor
type: [temperature sensor, humidity sensor, illumination sensor]
supports: temperature, humidity, illumination, battery
zigbeemodel: ['TS0222','_TYZB01_kvwjujy9']
zb3: true
compatible: [zha,tasmota,z2m]
mlink: https://www.moeshouse.com/collections/zigbee/products/zigbee-smart-brightness-thermometer-real-time-light-sensitive-temperature-and-humidity-detector
link: https://www.aliexpress.com/item/1005002525279564.html
link2: https://www.banggood.com/MoesHouse-Smart-ZigBee-or-bluetooth-Mesh-Brightness-Thermometer-Light-Temperature-Humidity-Detector-Tuya-Smart-App-Alexa-Control-p-1842856.html
link3: https://www.domadoo.fr/en/domotique/5789-moes-capteur-de-temperature-humidite-et-luminosite-zigbee.html
---
Temperature and humidity are reported at a fixed 60 minute interval.

## Pairing
Hold the orange button until three dots appear at the top left of the screen.

## ZHA
The device seems to reset every 150 seconds and this causes the temperature to be reported, via ZigBee (not on the display), as 0 degrees, and the display displays 0 Lux. Continuous resets, at least once, caused a small "!" to appear on the screen while virtually nothing was updated, suggesting some internal processing error. 

This impact of this issue can be reduced by creating a template sensor in the home assistant configuration.yaml. (supposing the real measured value is not 0 degrees)

``` 
template:
  - sensor:
      - name: "Moes Thermometer Temperature Filtered" 
        state: >-
          {## Enter the entity_id of the thermometer below ##}
          {% set moes_measurement = float(states("sensor.moes_thermometer_temperature"))  %}   
          
          {% if moes_measurement != 0  %}
            {## Use the measured value ##}
            {{ moes_measurement }}
          {% else %}
            {## Don't change the state ##}
            {{ 
              states("sensor.moes_thermometer_temperature_filtered") {## Should match with the name entered above ##}
            }}
          {% endif %}
        unit_of_measurement: "°C"
``` 

For this template sensor to work properly, it's required for its entity (in the example: sensor.moes_thermometer_temperature_filtered) to be included in the [recorder](https://www.home-assistant.io/integrations/recorder/#configure-filter). Optionally, the unit of measurement can be changed to match with what's displayed on the e-ink screen.
The same method can be used for the humidity.

## Z2M
Same problems with Z2M.

## Device not suitable for home automation
- Reports temperature / humidity  every hours, can't be used for controlling heater or dehumidifier
- Hangs when not used with tuya hub.

