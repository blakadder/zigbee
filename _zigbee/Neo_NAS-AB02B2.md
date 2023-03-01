---
date_added: 2022-04-03
model: NAS-AB02B2
vendor: Neo 
title: Siren with Temperature & Humidity Sensor
category: sensor
supports: alarm, battery
zigbeemodel: ['TS0601','_TZE200_t1blo2bj', '_TZE204_t1blo2bj']
compatible: [z2m, z4d, zha, tasmota]
mlink: 
link: https://www.domadoo.fr/en/peripheriques/6361-neo-tuya-zigbee-30-siren-5v1a-power-supply-or-2x-cr123a.html
link3: https://www.aliexpress.com/item/4000687509921.html
link2: https://www.aliexpress.com/item/4000813903996.html
link4: https://www.amazon.com/dp/B0BKLQBQ7H
---

#### ZBBridge Filter ####
Once ZB filter is loaded onto bridge, settings can be changed via ZbSend/MQTT like:<br>
`ZbSend {"Device":"0x####","Write":{"neo_alarm":1}}`<br>
```console
#Z2Tv1
#This sets up neo alarms for proper use via MQTT
:TS0601,_TZE204_t1blo2bj
EF00/0415,neo_tune              # Tune to play [0-18]
EF00/0405,neo_volume            # Vol: 0-low, to 2-high
EF00/010D,neo_alarm             # Bool 1/0
EF00/0207,neo_duration          # Duration in seconds
EF00/020F=0001/0021,mul:2       # Battery level
```
<table><tr><th colspan=4>Table of Tunes</th></tr>
<tr><th>ID</th><th>Chime</th><th>ID</th><th>Chime</th></tr>
<tr><td>0</td><td>Doorbell Chime</td><td>9</td><td>Smoke Alarm</td></tr>
<tr><td>1</td><td>Fur Elise</td><td>10</td><td>Dog Barking</td></tr>
<tr><td>2</td><td>Westminster Chimes</td><td>11</td><td>Police Siren</td></tr>
<tr><td>3</td><td>Fast double door bell</td><td>12</td><td>Doorbell Chime (reverb)</td></tr>
<tr><td>4</td><td>William Tell Overture</td><td>13</td><td>Mechanical Telephone</td></tr>
<tr><td>5</td><td>Turkish March</td><td>14</td><td>Fire/Ambulance</td></tr>
<tr><td>6</td><td>Safe/Security Alarm</td><td>15</td><td>3/1 Elevator</td></tr>
<tr><td>7</td><td>Chemical Spill Alert</td><td>16</td><td>Buzzing Alarm Clock</td></tr>
<tr><td>8</td><td>Piercing Alarm Clock</td><td>17</td><td>School Bell</td></tr>
</table>
