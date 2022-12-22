---
date_added: 2020-04-12
model: RDM001
vendor: Philips
title: Hue Wall Switch Module
category: switch
supports: action, battery
zigbeemodel: ['RDM001', '9290030171']
compatible: [z2m, deconz, zha]
z2m: 929003017102
deconz: 4287
mlink: https://www.philips-hue.com/en-gb/p/hue-philips-hue-wall-switch-module/8719514318045
link: https://www.tink.de/philips-hue-wandschalter-modul
link2: https://www.idealo.de/preisvergleich/OffersOfProduct/201541947_-hue-wandschaltermodul-philips.html
EAN:
  - 8719514318045
  - 929003017101
  - 8719514318021
  - 929003017102
---

### Pairing
Pairing is done by resetting the device (press the reset Button for 10 Seconds) and shorting the two pins afterwards. 

### Configuration
Depending on your gateway, additional configuration might be required to enable the second switch input. The attribute `mode (0x0034)` might be changed to the correct value:
- `0` - single rocker type switch
- `1` - single push button type switch
- `2` - double rocker type switch
- `3` - double push button type switch