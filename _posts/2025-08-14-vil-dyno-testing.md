---
title: Led VIL Testing for EcoCAR Dynamometer Event
date: 2025-04-04
categories: [Projects]
tags: [simulator,architect,vehicle testing,autonomy,anl]     # TAG names should always be lowercase
pin: true
image:
  path: assets/img/osu-test-1.png
  alt: Guiding students from Ohio State University through a simulated VIL (Vehicle-in-the-loop) test using the solution I developed utilizing Argonne's XIL workflow & Simulation tools.
---

More details coming soon...

This project was completed during my role as a Connected and Automated Vehicle Research Engineer at [Argonne National Lab](https://www.anl.gov/).


# Media

{% comment %}
Get this post's unique identifier from its filename.
For "2025-08-14-post-4.md", page.slug will be "post-4".
{% endcomment %}
{% assign post_slug = page.slug %}

{% comment %}
Loop through the NEW data file: site.data.articles
{% endcomment %}
{% for article_data in site.data.articles %}

{% comment %}
    Check if the article's 'posts' LIST CONTAINS this page's slug.
{% endcomment %}
{% if article_data.posts contains post_slug %}
{% include article_list_item2.html article=article_data %}
{% endif %}

{% endfor %}