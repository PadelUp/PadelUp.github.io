---
layout: page
title: Staff
permalink: /staff/
image: /images/staff/staff.jpg
---

{% for author in site.authors %}
{% include author.html %}
{% endfor %}