---
title: Technical writing time travel
layout: splash
categories:
  - Technical writing
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/time-travel.jpg
excerpt: "I used to work as a technical writing blogger (guide) for the sadly-defunct About.com. Courtesy of the [Internet Archive](https://archive.org/), some of those articles are still ‘floating around’."
intro: 
  - excerpt: 'I’ve picked a few of the ‘evergreens’ that still hold fairly true today – don’t expect the links from those pages to take you anywhere sensible, though.'
feature_row:
  - image_path: "/assets/img/about-com/cost-benefit-analysis.jpg"
    alt: "placeholder image 1"
    title: "Placeholder 1"
    excerpt: "This is some sample content that goes here with **Markdown** formatting."
  - image_path: "/assets/img/about-com/cost-benefit-analysis.jpg"
    image_caption: "Image courtesy of [Unsplash](https://unsplash.com/)"
    alt: "placeholder image 2"
    title: "Placeholder 2"
    excerpt: "This is some sample content that goes here with **Markdown** formatting."
    url: "#test-link"
    btn_label: "Read More"
    btn_class: "btn--primary"
  - image_path: "/assets/img/about-com/cost-benefit-analysis.jpg"
    title: "Placeholder 3"
    excerpt: "This is some sample content that goes here with **Markdown** formatting."
feature_row2:
  - image_path: "/assets/img/about-com/cost-benefit-analysis.jpg"
    alt: "placeholder image 2"
    title: "Placeholder Image Left Aligned"
    excerpt: 'This is some sample content that goes here with **Markdown** formatting. Left aligned with `type="left"`'
    url: "#test-link"
    btn_label: "Read More"
    btn_class: "btn--primary"
feature_row3:
  - image_path: "/assets/img/about-com/cost-benefit-analysis.jpg"
    alt: "placeholder image 2"
    title: "Placeholder Image Right Aligned"
    excerpt: 'This is some sample content that goes here with **Markdown** formatting. Right aligned with `type="right"`'
    url: "#test-link"
    btn_label: "Read More"
    btn_class: "btn--primary"
feature_row4:
  - image_path: "/assets/img/about-com/cost-benefit-analysis.jpg"
    alt: "placeholder image 2"
    title: "Placeholder Image Center Aligned"
    excerpt: 'This is some sample content that goes here with **Markdown** formatting. Centered with `type="center"`'
    url: "#test-link"
    btn_label: "Read More"
    btn_class: "btn--primary"
---

{% include feature_row id="intro" type="center" %}

{% include feature_row %}

{% include feature_row id="feature_row2" type="left" %}

{% include feature_row id="feature_row3" type="right" %}

{% include feature_row id="feature_row4" type="center" %}

![alt]({{ site.url }}{{ site.baseurl }}/assets/images/police-call-box.jpg)