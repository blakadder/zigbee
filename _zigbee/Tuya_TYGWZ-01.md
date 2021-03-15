---
date_added: 2021-03-01
model: TYGWZ-01
vendor: Tuya
title: Gateway
category: coordinator
supports: coordinator
zigbeemodel: ['']
compatible: [zha]
mlink: https://go.tuya.com/en/productDetail?code=83jt6kkktau3
link: https://www.lidl.de/de/silvercrest-gateway-drahtloses-verbindungsprotokoll-zigbee-smart-home/p354562
---

## Retrieve Root Password

Method [courtesy Of Paul Banks](https://paulbanks.org/projects/lidl-zigbee/root.html and https://paulbanks.org/projects/lidl-zigbee/ha.html)

Pry the device open, there are 8 clips around the edges.

![Pinout](/assets/images/Tuya_TYGWZ-01_Pinout.png)


|Gateway|Adapter
|---           |--- 
|Serial TX     | RX
|Serial RX     | TX
|GND           | GND
|3.3v VCC      | 3V3/VCC

Leave the USB Power and 3.3v disconnected.

Open a serial terminal to your TTL with the following settings:

|Setting|Value
|---           |--- 
|Baud Rate     | 38400
|Data Bits     | 8
|Stop Bits     | 1
|Parity        | None
|Flow Control  | None


Connect the 3.3v to the gateway and start pressing ESC, you should see a prompt like this:

![Active serial prompt](/assets/images/Tuya_TYGWZ-01_Console.png)

### Retrieving the KEK (Encryption Key)

1. Run the following commands in the terminal:

```bash
FLR 80000000 401802 16
DW 80000000 4
```

Save the output of these commands, it should be something like: 

```bash
80000000:       743B5638        6872576B        47694E69        233C2778
```

### Retrieving the AUSKEY

2. Run the following commands in the terminal:

```bash
FLR 80000000 402002 32
DW 80000000 8
```
Save the output of these commands, it should be something like:

```bash
80000000:       110AAC2E        CC412394        5387DC8C        C98550E0
80000010:       7E64CE90        5795D7A9        4BA6FF51        8C2908E7
```

### Decoding the root password

Download the Python script from Paul's Github here: [lidl_auskey_decode.py](https://github.com/banksy-git/lidl-gateway-freedom/blob/master/scripts/lidl_auskey_decode.py)

Run the script and input the output from the commands you ran above (making sure to exclude the `80000000:` and `80000010:`)

The script should then print your gateway's root password.

## Customise running software on the gateway
### This section must be run on Linux or WSL (Or any Bash like shell)

1. Download the serialgateway.bin from Paul's website here: [serialgateway.bin](https://paulbanks.org/download/files/lidl-zigbee/serialgateway.bin)

2. Use cat and ssh to upload this file to the gateway:

`cat serialgateway.bin | ssh -p2333 root@[gateway_ip] "cat >/tuya/serialgateway"`

3. Connect to your gateway with ssh with the username `root` with the password you decoded earlier and use port `2333`

4. Run the following on the Gateway:

```bash
if [ ! -f /tuya/tuya_start.original.sh ]; then cp /tuya/tuya_start.sh /tuya/tuya_start.original.sh; fi

cat >/tuya/tuya_start.sh <<EOF
#!/bin/sh
/tuya/serialgateway &
EOF
chmod 755 /tuya/serialgateway

if [ ! -f /tuya/ssh_monitor.original.sh ]; then cp /tuya/ssh_monitor.sh /tuya/ssh_monitor.original.sh; fi
echo "#!/bin/sh" >/tuya/ssh_monitor.sh
reboot
```

5. The SSH port of the gateway will not be running on the standard 22 instead of 2333

## Upgrade the EZSP Version to 6.7.8.0

### This section must be run on Linux or WSL (Or any Bash like shell)

1. Download the firmware_upgrade.sh script from Github here: [firmware_upgrade.sh](https://github.com/Ordspilleren/lidl-gateway-freedom/blob/master/scripts/firmware_upgrade.sh) and the newer EZSP firmware from here: [NCP_UHW_MG1B232_678_PA0-PA1-PB11_PA5-PA4.gbl](https://github.com/grobasoz/zigbee-firmware/raw/master/EFR32%20Series%201/EFR32MG1B-256k/NCP/NCP_UHW_MG1B232_678_PA0-PA1-PB11_PA5-PA4.gbl)
2. Make sure the script is executable with `chmod +x ./firmware_upgrade.sh`
3. Run the `firmware_upgrade.sh` script like this: `./firmware_upgrade.sh [gateway_ip] 22 V7 NCP_UHW_MG1B232_678_PA0-PA1-PB11_PA5-PA4.gbl` - You may be prompted for the root password several times.
4. Reboot the gateway

## For Home Assistant (ZHA)

In Home Assistant (requires version 0.113+) go to **Configuration - Integrations**, click the **+** icon, search for ZHA integration and select it. 

[![Gateway ZHA Configuration](/assets/images/sonoff_ZBBridge_zha.jpg)]((/assets/images/sonoff_ZBBridge_zha.jpg))

1. choose "Enter Manually" for serial port
2. for Radio Type choose "EZSP" 
3. under Serial device path enter `socket://[gateway_ip]:8888` replacing `[gateway_ip]` with its IP address. Do not use hostnames. 
   - if you changed the port number use yours
   - set port speed to "115200"
4. when the Gateway is discovered you will get a confirmation message

[![Gateway ZHA Configuration](/assets/images/sonoff_ZBBridge_zha2.jpg)]((/assets/images/sonoff_ZBBridge_zha2.jpg))
