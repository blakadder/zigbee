---
layout: default 
title: Flash with CCLoader
header: custom
---
CCLoader is a fast and cheap way to flash a Zigbee chip using only an ESP8266 board.

### What You Need
#### Hardware
First and foremost you will need a compatible Zigbee module/board with a TI CCXXXX chip.

To flash the firmware to the Zigbee chip you will need an ESP8266 board. Best version is a NodeMCU with CH340G, second best a Wemos D1 mini but any ESP8266 device with 3 free gpio's, GND and 3.3V pin should work. Don't forget to grab some jumper wires to wire them together. 

Depending on the chosen Zigbee module you might need to get the soldering equipment and a magnifying glass out.

#### Software
Download [CCLoader](https://github.com/Jason2866/CCLoader/) GitHub fork by Jason2866 by clicking on *Clone or download -> Download ZIP* and unpack to a folder. 

Alternatively you can use `git clone https://github.com/Jason2866/CCLoader.git`.

#### Z-Stack Firmware
Inside the `/Bin` folder you will find CCLoader ready Z-Stack firmware for most popular coordinators. 

A wider selection of firmware can be downloaded from the [Z-Stack-firmware GitHub](https://github.com/Koenkk/Z-Stack-firmware/). Those firmware files will require additional preparation to be able to use them with CCLoader:

##### Prepare Z-Stack Firmware
##### Windows
Download `objcopy.exe` from [SourceForge](https://sourceforge.net/projects/mingw/files/MinGW/Base/binutils/binutils-2.28/binutils-2.28-1-mingw32-bin.tar.xz/download) and extract. (If `objcopy.exe` fails to run you need to download [libiconv](https://sourceforge.net/projects/mingw/files/MinGW/Base/libiconv/libiconv-1.14-3/libiconv-1.14-3-mingw32-dll.tar.lzma/download) and extract to same folder.)

Unpack downloaded Z-Stack firmware .hex file in the same folder and convert with:

```bash
objcopy.exe --gap-fill 0xFF --pad-to 0x040000 -I ihex <firmware>.hex -O binary <firmware>.bin
```
Move the converted .bin to your CCLoader folder.

##### Linux
Install the `binutils` package using your package manager (Debian based: `sudo apt install binutils`)

Unpack downloaded Z-Stack firmware .hex file and convert (replace `<firmware>` with filename):

```bash
objcopy --gap-fill 0xFF --pad-to 0x040000 -I ihex <firmare>.hex -O binary <firmware>.bin
```

#### Prepare ESP8266 Board
##### Use Ready Made Binary
Flash the ESP8266 (NodeMCU) with the precompiled `CCLoader_Arduino.bin` from `Bin` folder using your favorite ESP8266 flashing tool (some examples: [Tasmotizer!](https://github.com/tasmota/tasmotizer/releases), [NodeMCU-pyflasher](https://github.com/marcelstoer/nodemcu-pyflasher/releases), [esptool.py](https://github.com/espressif/esptool), ...)

ESP8266 flashed this way will have to use GPIO5 (D1 NodeMCU), GPIO4 (D2 NodeMCU) and GPIO14 (D5 NodeMCU) for connecting to the Zigbee module.

##### Compile from CCLoader.ino
If you don't want to use the compiled file compile and upload your own from '\CCLoader\src\CCLoader.ino' with PlatformIO (change port in `platformio.ini` file) or Arduino IDE. 

Edit lines 86-90 to change pins for connecting the Zigbee module:
```arduino
// Debug control pins & the indicate LED
int DD = 14; //GPIO14=D5 on NodeMCU/WeMos D1 Mini
int DC = 4; //GPIO4=D2 on NodeMCU/WeMos D1 Mini
int RESET = 5; //GPIO5=D1 on NodeMCU/WeMos D1 Mini
int LED = 2; //GPIO2=D4 and the Blue LED on the WeMos D1 Mini and the ESP-12E module on the NodeMCU, or can use GPIO16=D0 for the other Blue LED on NodeMCU
```

#### Wiring   
You need to identify Debug Data, Debug Clock, Reset, GND and VCC pins on the Zigbee module you intend to flash.

Images of pinouts for each compatible module are available [here on the site](coordinators.html). For unlisted ones consult their datasheet or search for information on the internet. 

Connect the ESP8266 pins and Zigbee module pins according to the table. When soldering take extra precaution to avoid solder overflow or shorts between wires. 

| Pin Name | NodeMCU/Wemos | GPIO# |
| --- | --- | --- |  
| P2_1 (DEBUG_DATA) | D5 | GPIO14 |
| P2_2 (DEBUG_CLOCK) | D2 | GPIO4 |
| RST (RESET_N) | D1 | GPIO5 |
| VCC  | 3.3V | |  
| GND | GND | |


_If you changed pins in the .ino file use your pins instead._

### Flashing
#### Windows
Use `CCLoader_x86_64.exe` or `CCloader.exe` from `\Windows` folder. Place the prepared .bin in the same folder as CCLoader executable.

Command to start the flashing process
   
```
CCLoader_x86_64.exe [COM port #] <filename>.bin 0
```

_Example:_ CC2530ZNP-Prod.bin with NodeMCU on COM6
```
CCLoader_x86_64.exe 6 CC2530ZNP-Prod.bin 0
```
#### Linux
First you have to compile `CCLoader`:
  -  `cd` to `CCLoader/SourceCode/Linux`
  - run 
     ```bash
     gcc main.c -o CCLoader
     ```

Place the prepared .bin in the same folder as the compiled CCLoader executable.

Command to start the flashing process
```
./CCLoader [COM port path] <filename>.bin 0
```
_Example:_ CC2530ZNP-Prod.bin with NodeMCU on `/dev/ttyACM0`
```
./CCLoader /dev/ttyACM0 CC2530ZNP-Prod.bin 0
```

CCloader will start to count up rapidly, wait until command prompt reappears. Firmware flash was successful if you see this:
```bash
Upload successfully!
File closed!
Comport closed!
```
#### Problems?
If flashing fails or gets stuck at `Request sent already! Waiting for respond...`: 
- try using `1` instead of `0` in the last parameter
- replug NodeMCU and try again
- double check your wiring

Complete successful flash on Windows:
![Success](/assets/images/ccloader_success.jpg)
