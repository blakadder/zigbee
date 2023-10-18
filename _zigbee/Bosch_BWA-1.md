---
date_added: 2021-08-12
model: BWA-1
vendor: Bosch
title: Water Alarm
category: sensor
supports: leak, alert, battery
zigbeemodel: ['RBSH-WS-ZB-EU']
compatible: [deconz]
deconz: 5190
mlink: https://www.bosch-smarthome.com/uk/en/products/devices/water-alarm/
link: https://www.amazon.de/dp/B08Q4B8M71/
link2: 
link3: 
---

## ZHA

Call the Home Assistant [service zha.permit](https://www.home-assistant.io/integrations/zha/#service-zhapermit) with its `IEEE` and `install code` - interview works fine after this.

![zha_join_example](./assets/images/zha_join_by_install_code.png)
