---
title: Founder of Revision Autonomy
date: 2020-04-16
categories: [Projects]
tags: [startup,commercialization,wmu,graduate]     # TAG names should always be lowercase
# image:
#   path: https://www.mlive.com/resizer/noDyqH0jT2DCKx-eAoYcA_GZEfk=/1280x0/smart/arc-anglerfish-arc2-prod-advancelocal.s3.amazonaws.com/public/YQ7FPT657BCL5A7C6Y4GCJG2RE.jpg
#   alt: The first fully autonomous shuttle I worked on, launching me into the automated vehicle research space.
---

More details about this project coming soon...

This project was completed during my time as a graduate research assistant in the [Energy Efficient and Autonomous Vehicles Lab](https://wmich.edu/autonomous-vehicles) at Western Michigan University.

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