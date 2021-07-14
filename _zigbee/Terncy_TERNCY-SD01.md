---
date_added: 2020-11-03
model: TERNCY-SD01
vendor: Terncy
title: Smart Dial
category: remote
supports: action, ota, battery, rotation direction
action: single click, double click, triple click, quadruple, rotate
image: /assets/images/devices/TERNCY-SD01.jpg
zigbeemodel: ['TERNCY-SD01']
zb3: true
compatible: [z2m,iob,tasmota,zha]
mlink: https://www.terncy.com/en-us/smartdial/
link: https://www.aliexpress.com/item/4001061305282.html
link2: https://www.banggood.com/Terncy-Z-bee-knob-Switch-Light-Brightness-Adjustable-Phone-Remote-Controling-Smart-Switch-For-Smart-Home-From-System-p-1699055.html
link3: 
---

## ZHA
### OTA upgrade 

Create a folder where your HA configuration.yaml resides named `zigpy_ota`. Download [TERNCY-SD01_v46.OTA](https://github.com/Koenkk/zigbee-OTA/raw/master/images/Terncy/TERNCY-SD01_v46.OTA) file and place it in `zigpy_ota` folder.

Add to configuration.yaml

```yaml
zha:
  zigpy_config:  
    ota:
      otau_directory: /config/zigpy_ota
```
and restart Home Assistant.

Open [Developer Tool - Services](https://my.home-assistant.io/redirect/developer_services/) and select "Zigbee Home Automation: Set zigbee cluster attribute". In *YAML mode* input where ieee can be found in ZHA's Device Card Info field.

```yaml
service: zha.set_zigbee_cluster_attribute
data:
  ieee: '00:00:00:00:00:00:00:00'
  endpoint_id: 1
  cluster_id: 25
  attribute: 2
  cluster_type: out
  value: 49502
```

Upgrade will take a while (10 or more minutes). 

More about [ZHA OTA firmware updates](https://www.home-assistant.io/integrations/zha/#ota-firmware-updates)...