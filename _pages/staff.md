---
layout: page
title: staff
permalink: /staff/
image: /images/staff/staff.jpg
---

{% for author in site.authors | sort: 'index' %}
{% include author.html %}
{% endfor %}