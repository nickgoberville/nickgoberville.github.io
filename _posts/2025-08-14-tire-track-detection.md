---
title: Curated a Full ML-Pipeline for Tire Track Identification on Snow-Covered Roads
description: "Developed and implemented a machine learning-based perception system to enable autonomous vehicle navigation when lane lines are occluded by snow."
date: 2021-08-10
categories: [Projects]
tags: [Machine Learning, Computer Vision, Python, ROS, GCP, Automotive]
pin: true
math: true
mermaid: true
image:
  path: assets/img/tire-track-detection.jpg
  alt: A computer vision model detecting tire tracks on a snow-covered road.
---

## The Challenge

Standard Advanced Driver Assistance Systems (ADAS) and autonomous vehicles rely on camera-based perception to detect lane lines for critical functions like lane-keeping assist and lane centering. However, these systems fail when lane lines are occluded by snow, limiting the Operational Design Domain (ODD) of the vehicle. In fact, one of the leading computer vision systems was found to provide high-confidence detections in less than 1% of recorded frames in snowy conditions. With over 70% of U.S. roads affected by snowfall annually, a new, cost-effective perception solution was required to ensure safe operation in winter weather.

## The Technical Solution

As a Graduate Research Assistant and Co-Founder of Revision Autonomy, I developed and implemented a machine learning-based perception system to identify tire tracks as a proxy for the drivable region. This work was a core component of my PhD dissertation and included:

* **Custom Data Pipeline:** I curated a custom dataset of 1,500 unique images from over 20 hours of data logging using the Energy Efficient and Autonomous Vehicles (EEAV) lab's research platform. I used Python and the GCP API for data processing and the open-source **Computer Vision Annotation Tool (CVAT)** to label tire tracks for pixel-level semantic segmentation.
* **Model Development:** I designed a comprehensive model development pipeline, comparing six different supervised machine learning algorithms with four different feature sets. The features included grayscale and RGB pixel values, as well as pixel X and Y locations. The models were evaluated based on metrics including mIoU and FPS.
* **Hierarchical System Concept:** This work laid the foundation for a hierarchical system that first classifies the weather domain and then applies a domain-specific perception model. This allows the system to switch from standard lane line detection to my tire track model when snow is present, enabling safe operation in adverse conditions. This concept is a subject of a pending patent submission.

## Impact & Results

This project demonstrated that a cost-effective, camera-based solution could dramatically improve perception performance in snowy weather.

* **Quantitative Performance:** The final optimized model, a decision tree classifier using grayscale pixel values and pixel locations, achieved a Mean Intersection over Union (mIoU) of **83.2%** with a pixel accuracy of **90.2%**.
* **Real-Time Capability:** This model was optimized for real-time performance, achieving a frame rate of **1084.1 FPS** on a single-thread Intel i7 processor, a speed **95.94 times faster** than the highest mIoU performing model, Random Forest.
* **Commercialization:** The technology developed was a core focus of my spinout startup, Revision Autonomy, and resulted in a pending patent application with Western Michigan University's tech-transfer office.

## Video & Publication

* **Video Demo:** See a short demo of the tire track detection model in action.
    <iframe src="https://drive.google.com/file/d/1PS9A51KFgkwUGfc3REDciu9dl8J7bP8y/preview" width="640" height="480" allow="autoplay"></iframe>
* **Publication:** For more technical details on the methodology and results, you can read the full journal paper:
    **[SAE International Journal of Advanced & Current Practices in Mobility](https://doi.org/10.4271/2022-01-0083)**