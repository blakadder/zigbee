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
compatible: [zha, tasmota, z2m, deconz, z4d]
mlink: https://www.moeshouse.com/collections/zigbee/products/zigbee-smart-brightness-thermometer-real-time-light-sensitive-temperature-and-humidity-detector
link: https://www.aliexpress.com/item/1005002525279564.html
link2: https://www.banggood.com/MoesHouse-Smart-ZigBee-or-bluetooth-Mesh-Brightness-Thermometer-Light-Temperature-Humidity-Detector-Tuya-Smart-App-Alexa-Control-p-1842856.html
link3: https://www.domadoo.fr/en/domotique/5789-moes-capteur-de-temperature-humidite-et-luminosite-zigbee.html
pairing: "Hold the orange button until three dots appear at the top left of the screen."
---
This device will not work correctly unless previously paired with a Tuya compatible gateway. It may also work with Sonoff dongles (such as the [ZB Dongle-P](/Sonoff_ZBDongle-P.html)), but not with Sonoff minis.

Temperature and humidity are reported at a fixed 60 minute interval.

## ZHA
The device seems to reset every 150 seconds and this causes all sensors to be reported momentarily, via ZigBee, as 0 degrees. Temperature and humidity do show show as zero on the display, and quickly get back to the correct values via ZigBee. However, luminance stays at zero in the screen, reports as 1 lux via ZigBee, and needs a "physical reset" (shadowing or covering its sensor for a few seconds) to report values correctly again. Continuous resets, at least once, caused a small "!" to appear on the screen while virtually nothing was updated, suggesting some internal processing error. 

The impact of the temperature/humidity issues can be reduced by creating one template sensor for each of those measurements, in the Home Assistant's `configuration.yaml`. (supposing the real measured value is not 0 degrees)

{% highlight yaml %}
{% raw %}template:
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
        unit_of_measurement: "°C"{% endraw %} 
{% endhighlight %}

For these template sensors to work properly, it's required for its entity (in the example: sensor.moes_thermometer_temperature_filtered) to be included in the [recorder](https://www.home-assistant.io/integrations/recorder/#configure-filter). Optionally, the unit of measurement can be changed to match with what's displayed on the e-ink screen.
The same method can be used for the humidity.

## Z2M
Same problems with Z2M.
