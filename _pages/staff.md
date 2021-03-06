---
layout: page
title: staff
permalink: /staff/
image: /images/staff/staff.webp
---

{% assign authors = site.authors | sort: 'index' %}
{% for author in authors %}
{% include author.html %}
{% endfor %}