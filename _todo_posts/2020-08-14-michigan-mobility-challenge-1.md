---
title: Michigan Mobility Challenge
date: 2019-10-10
categories: [Projects]
tags: [autonomy,wmu,graduate]     # TAG names should always be lowercase
image:
  path: https://www.mlive.com/resizer/noDyqH0jT2DCKx-eAoYcA_GZEfk=/1280x0/smart/arc-anglerfish-arc2-prod-advancelocal.s3.amazonaws.com/public/YQ7FPT657BCL5A7C6Y4GCJG2RE.jpg
  alt: The first fully autonomous shuttle I worked on, launching me into the automated vehicle research space.
---

This project was completed during my time as a graduate research assistant in the [Energy Efficient and Autonomous Vehicles Lab](https://wmich.edu/autonomous-vehicles) at Western Michigan University.

## My Role
As part of the 2019 [Michigan Mobility Challenge](https://www.michigan.gov/mdot/travel/mobility/initiatives/mobility-challenge/new-autonomous-mobility-vision-for-michigan), this was where my journey in autonomous vehicle research began, giving me experience with the follow:
- Designing test plans for autonomous shuttles
- Thinking about use-cases for autonomous shuttles, with a primary case standing for people with disabilities
- Collecting raw sensor data (i.e., cameras and LiDARs)
- Installing and configuring cm-level RTK precisioning systems and base stations

## Interview

<div class="scripps_iframe_embed" style="position:relative"><div style="display:block;width:100%;height:auto;padding-bottom:56.25%;"></div><iframe id="da-iframe" allowfullscale="" style="position:absolute;top:0;left:0;width:100%;height:100%;" border="0" height="100%" frameborder="0" webkitallowfullscreen="" allowfullscreen="" mozallowfullscreen="" scrolling="no" src="https://assets.scrippsdigital.com/cms/video/player.html?video=https://content.uplynk.com/4e58c0a524e74b49a6b9004a8c02a1d0.m3u8&mp4=https://cf.cdn.uplynk.com/ausw/slices/4e5/2641ad36b5274c6abc96c2f4a99426ed/4e58c0a524e74b49a6b9004a8c02a1d0/4e58c0a524e74b49a6b9004a8c02a1d0_e.mp4&autoplay=false&purl=/2019/10/21/lt-gov-gilchrist-says-first-ride-in-driverless-shuttle-at-wmu-was-smooth&ads.iu=/6088/ssp.wxmi/2019/10/21/lt-gov-gilchrist-says-first-ride-in-driverless-shuttle-at-wmu-was-smooth&ads.proxy=1&poster=https://cf.cdn.uplynk.com/ausw/slices/4e5/2641ad36b5274c6abc96c2f4a99426ed/4e58c0a524e74b49a6b9004a8c02a1d0/poster_555fc0345f494c469702c847392ac02b.png&title=Driverless%20shuttles%20debut%20at%20Western%20Michigan%20University%20&kw=&contplay=*recent&mute=0&tags=News&section=News&cust_params=temp%3D%26weather%3D&host=fox17online.com&s=wxmi&env=production&ex=1" allow="autoplay; fullscreen"></iframe></div>

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