---
title: Staff
image: /images/staff/staff.webp
---

{% assign authors = site.data.authors %}
{% for author in authors %}
{% include author.html %}
{% endfor %}