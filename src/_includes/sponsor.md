{% if sponsor %}

<aside>
  <a href="{{ sponsor.href | url }}" target="_blank" rel="noopener noreferrer">{{ sponsor.label }}</a>
</aside>
{% endif %}
