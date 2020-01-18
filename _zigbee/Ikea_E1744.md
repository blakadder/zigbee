---
model: E1744
vendor: IKEA
title: Symfonisk Sound Controller
category: remote
supports: 
image: /assets/images/devices/E1744.jpg
zigbeemodel: ['SYMFONISK Sound Controller']
compatible: [z2m]
mlink: https://www.ikea.com/us/en/p/symfonisk-sound-remote-white-20370482/
link: https://www.amazon.com/IKEA-symfonisk-Sound-Remote-203-704-82/dp/B082W22BFC
link2: https://www.amazon.com/IKEA-Symfonisk-Sound-Remote-104-338-47/dp/B082W1GV75
link3: 
---
Article no. 203.704.82

Actions: volume up/down, play/pause, skip forward/backward

### Zigbee2MQTT Notes
This device sends multiple messages in short time period with the same payload. It's worth setting `debounce` option with `debounce_ignore: - action` to throttle them without loosing unique action payloads.

Example devices.yaml:
{% raw %}
```yaml
'0xabc457fffe679xyz':
    friendly_name: Symfonisk ikea volume
    debounce: 0.5
    debounce_ignore:
    - action
```
{% endraw %}

To find optimal "smoothness" play with debounce time or if you need all unique rotation steps consider adding `brightness` to `debounce_ignore` option

{% raw %}
```yaml
'0xabc457fffe679xyz':
    friendly_name: Symfonisk ikea volume
    debounce: 0.1
    debounce_ignore:
    - action
    - brightness
```
{% endraw %} 

