---
title: Perception System Data Collection in Adverse Weather
date: 2020-10-10
categories: [Projects]
tags: [perception,sensors,data collection,wmu,graduate]     # TAG names should always be lowercase
image:
  path: assets/img/kia_thumbnail.jpg
  alt: A 2019 Kia Niro I led the intergration of both override mechanisms via the installation of a drive-by-wire kit and the sensor array including a scanning lidar, differential GPS, and stereo cameras.
---

More details coming soon...

This project was completed during my time as a graduate research assistant in the [Energy Efficient and Autonomous Vehicles Lab](https://wmich.edu/autonomous-vehicles) at Western Michigan University.

{% include embed/video.html src='assets/videos/acm-data-collection-wmu.mp4' %}

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