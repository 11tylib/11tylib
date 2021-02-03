---
title: SOrted filters
---

{% for filter in filters -%}

- [`{{ filter.name }}`](https://liquidjs.com/filters/{{ filter.name }}.html): {{ filter.desc }}
  {% endfor %}

[Show grouped list](../)