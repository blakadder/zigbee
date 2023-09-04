---
date_added: 2022-05-27
model: ZBBridge-P
vendor: Sonoff
title: Zigbee Bridge Pro
category: coordinator
supports: coordinator
zigbeemodel:
compatible: [tasmota,zha,z2m]
mlink: https://sonoff.tech/product/smart-home-security/zbbridge-p/
link: https://itead.cc/product/sonoff-zigbee-bridge-pro/
link2: https://www.aliexpress.com/item/1005004291712811.html
link3: https://www.domadoo.fr/en/peripheriques/6321-sonoff-zigbee-30-home-automation-gateway-wifi-pro.html
---

## Flashing 
  Flashing the device does not require soldering. When flashing, flash the Tasmota Release "Tasmota32 Sonoff-ZigbeeBridgePro" to have all the required files and filesystem changes pre-done. 

Once flashed, follow the coordinator firmware flashing Instructions from NotEnoughTech to flash the CC2652 chip itself from within Tasmota:
[Flashing coordinator firmware by NotEnoughTech](https://notenoughtech.com/home-automation/tasmota-on-sonoff-zb-bridge-pro/#flash)

[Tasmota GitHub Discussion](https://github.com/arendst/Tasmota/discussions/14419)

## For Home Assistant (ZHA or Zigbee2MQTT)
This mode creates a TCP bridge from the zigbee module to Home Assistant or Zigbee2MQTT. In this case Tasmota is only relaying all the messages from the zigbee module and **you cannot use any Zigbee commands in Tasmota console in this mode. All setup needs to be done from the Home Assistant ZHA integration or Zigbee2MQTT addon.**
### Auto Configuration
After Zigbee firmware is flashed and confirmed working in Zigbee2Tasmota mode, open the web UI of the device and navigate to **Configuration -> Auto-configuration**. Select **Sonoff ZBPro TCP** from the drop-down and click **Apply Configuration**.  
The device will restart and will be automagically configured.

### Manual Configuration
After Zigbee firmware is flashed and confirmed working in Zigbee2Tasmota mode, apply the template:
```json
{"NAME":"TCP ZBBridge Pro","GPIO":[0,0,576,0,480,0,0,0,0,1,1,5792,0,0,0,5472,0,320,5793,5504,0,640,608,32,0,0,0,0,0,1,0,0,0,0,0,0],"FLAG":0,"BASE":1}
```
Run the following command to:
* Create a rule in tasmota to start TCPBridge on port 8888 on boot
* Enable the above rule
* Start TCP on port 8888
```
backlog rule1 on system#boot do TCPStart 8888 endon ; rule1 1 ; TCPStart 8888
```
> You can change `8888` to a port you prefer.

## Connecting to Home Assistant with ZHA
In Home Assistant (requires version 0.113+) go to **Configuration - Integrations**, click the **+** icon, search for ZHA integration and select it. 

[![ZBBridgePro ZHA Configuration](/assets/images/sonoff_ZBBridgePro_zha.png)]((/assets/images/sonoff_ZBBridgePro_zha.png))

1. for Radio Type choose "ZNP" 
2. choose "software" for 'data flow control'
3. under "Serial device path" enter `socket://[zbbridgePro_ip]:8888` replacing `[zbbridgePro_ip]` with its IP address. Do not use hostnames. 
   - if you changed the port number use yours
   - ensure port speed is set to "115200"
4. when the ZbBridgePro is discovered you will get a confirmation message

[![ZBBridgePro ZHA Configuration](/assets/images/sonoff_ZBBridgePro_zha2.png)]((/assets/images/sonoff_ZBBridgePro_zha2.png))

## Connecting to Home Assistant OS with Zigbee2MQTT 
This assumes you already have a basic knowledge of installing custom addons in HAOS, MQTT and have an MQTT broker already configured within Home Assistant OS.
1. Install Zigbee2MQTT Add On by adding the custom github repository.
2. Add the following line to the Configuration > Options > Serial text field.
    - replace `[zbbridgePro_ip]` with its IP address
    - if you changed the port number use the configured port
```
port: tcp://[zbbridgePro_ip]:8888
```

> Connecting to a separate Zigbee2MQTT installation may require further setup. 
[Zigbee2MQTT Remote Adapter Guide](https://www.zigbee2mqtt.io/advanced/remote-adapter/connect_to_a_remote_adapter.html#_1-install-ser2net)

## Router Firmware
[GitHub Discussion](https://github.com/arendst/Tasmota/discussions/16957)
