---
title: LiquidJS filters
templateEngineOverride: liquid,md
---

LiquidJS includes [over 40 default filters](https://liquidjs.com/filters/overview.html) (although not all filters may be available in older versions of LiquidJS and Eleventy):

{% for category in categories %}
## {{ category.name }}
{% for filter in category.filters -%}
- [`{{ filter.name }}`](https://liquidjs.com/filters/{{ filter.name }}.html): {{ filter.desc }}
{% endfor %}
{% endfor %}

[Show alphabetical list](sorted/)

---

Maybe tables of what a filter name is in Liquid vs Nunjucks. If there isnt an equivalent, we can polyfill and link that to a "howto".
