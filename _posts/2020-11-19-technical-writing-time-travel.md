---
title: Technical writing time travel
date: 2020-12-19 12:01 
image: http://placehold.it/900x300
subtitle: I used to work as a technical writing blogger (guide) for the sadly-defunct About.com. Courtesy of the Internet Archive, some of those articles are still ‘floating around’.
lead: I’ve picked a few of the ‘evergreens’ that still hold fairly true today – don’t expect the links to take you anywhere sensible, though
category: "Technical writing"

---

	<p>
    {% for service in site.data.about %}
    <a href="{{ service.link }}" target="_blank"><img src="{{ service.image }}" alt="{{ service.title }}"></a><br>
    <strong>{{ service.title }}</strong><br>
    {{ service.annotation }}<br><br>
    {% endfor %}
    </p>
