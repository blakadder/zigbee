---
---

window.database = {
  {% for page in site.zigbee %}
    {% if page.layout != 'zigbee' %}
      {% continue %}
    {% endif %}
    "{{ page.url | slugify }}": {
      "model": "{{ page.model | xml_escape }}",
      "vendor": "{{ page.vendor | xml_escape }}",
      "title": "{{ page.title | xml_escape }}",
      "zigbeemodel": {{ page.zigbeemodel | jsonify }},
      "category": "{{ page.category | xml_escape }}",
      "url": "{{ page.url | xml_escape }}",
      "href": "{{ site.baseurl }}{{ page.url | xml_escape }}",
      "compatible": {{ page.compatible | jsonify }}
    }
    {% unless forloop.last %},{% endunless %}
  {% endfor %}
};
