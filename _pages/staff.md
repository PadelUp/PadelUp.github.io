---
title: Staff
image: /images/staff/staff.webp
---

{% for person in site.data.authors %}
{% assign author = person[1] %}
{% include author.html %}
{% endfor %}