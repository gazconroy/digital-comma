---
title: Technical writing time travel
categories:
  - Technical writing
image: http://placehold.it/900x300
lead: I used to work as a technical writing blogger (guide) for the sadly-defunct About.com. Courtesy of the Internet Archive, some of those articles are still ‘floating around’.
subtitle: I’ve picked a few of the ‘evergreens’ that still hold fairly true today – don’t expect the links to take you anywhere sensible, though

---

<ul>
    {% for service in site.data.about %}
    <li><a href="{{ service.link }}" target="_blank"><img src="{{ service.image }}" alt="{{ service.title }}"></a>
        <p><strong>{{ service.title }}</strong></p>
        <p>{{ service.annotation }}</p>
    </li>
    {% endfor %}
</ul>