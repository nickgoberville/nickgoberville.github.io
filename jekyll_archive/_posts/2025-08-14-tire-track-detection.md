---
title: Curated a Full ML-Pipeline for Tire Track Identification on Snow-Covered Roads
description: "Developed and implemented a machine learning-based perception system to enable autonomous vehicle navigation when lane lines are occluded by snow."
date: 2021-08-10
categories: [Computer Vision]
tags: [AI/ML, computer-vision, opencv, python, ROS, GCP, data pipeline, PyQT]
pin: false
math: true
mermaid: true
image:
  path: assets/img/tire-track-detection.jpg
  alt: A computer vision model detecting tire tracks on a snow-covered road.
---

## The Challenge

Standard Advanced Driver Assistance Systems (ADAS) and autonomous vehicles rely on camera-based perception to detect lane lines for critical functions like lane-keeping assist and lane centering. However, these systems fail when lane lines are occluded by snow, limiting the Operational Design Domain (ODD) of the vehicle. In fact, one of the leading computer vision systems was found to provide high-confidence detections in less than 1% of recorded frames in snowy conditions. With over 70% of U.S. roads affected by snowfall annually, a new, cost-effective perception solution was required to ensure safe operation in winter weather.

## The Technical Solution

As a Graduate Research Assistant and Co-Founder of Revision Autonomy, I designed and implemented a comprehensive AI/ML pipeline to develop a perception model for tire track identification. This work was a core component of my PhD dissertation, demonstrating my ability to manage the full lifecycle of an AI project from data acquisition to model optimization. My pipeline included the following key stages:

![ML Pipeline](assets/img/ai-pipeline.jpg)
*Figure: The full methodology pipeline for developing and evaluating the ML models, from data collection to performance analysis.*

### 1. Data Acquisition and Labeling
* **Data Collection:** Used the Energy Efficient and Autonomous Vehicles (EEAV) lab's research platform, a 2019 Kia Niro with a forward-facing camera ($120^\circ$ FOV, $720 \times 1280$ resolution), to record over 20 hours of driving data.
* **Data Processing:** Resampled the recorded video frames from 30 FPS down to 5 FPS. A total of **1,500 unique images** with visible tire tracks were selected and used for model training.
* **Labeling:** Used the open-source **Computer Vision Annotation Tool (CVAT)** to meticulously label the left and right tire tracks using polygon segmentation. This created a pixel-level mask of the drivable region for supervised machine learning.

![Data Labeling Pipeline](assets/img/model-labelling-pipepile.jpg)
*Figure: An overview of the data pipeline for tire track identification, demonstrating the process from raw images to the final labeled mask used for training.*

### 2. Feature Engineering and Model Development
* **Feature Extraction:** Prior to feature extraction, images were cropped to a Region of Interest (ROI) encompassing the road surface, achieving a **95.3% reduction** in pixel data. From this, I extracted six primary feature vectors: red, green, and blue pixel values, grayscale pixel values, and pixel X and Y locations.
* **Model Comparison:** I designed a comprehensive development pipeline, comparing six supervised machine learning algorithms across four different feature sets to identify the optimal algorithm/feature set pair for semantic segmentation. Algorithms tested included Decision Trees, Random Forest, K-Nearest Neighbor, Naive-Bayes, Linear, and Logistic Regression.
* **Evaluation Metrics:** Model performance was evaluated using a suite of metrics critical for real-time systems, including Mean Intersection over Union (mIoU), pixel accuracy, and Frames Per Second (FPS).

### 3. Hierarchical System Concept
This work laid the foundation for a hierarchical perception system that first classifies the weather domain and then applies a domain-specific model. This allows the system to switch from standard lane line detection to my tire track model when snow is present, enabling confident localization in adverse conditions. This concept is a subject of a [pending patent](https://patents.google.com/patent/US20240140479A1/en).

## Impact & Results

This project demonstrated that a cost-effective, camera-based solution could dramatically improve perception performance in snowy weather.

* **Quantitative Performance:** The final optimized model, a decision tree classifier using grayscale pixel values and pixel locations, achieved a Mean Intersection over Union (mIoU) of **83.2%** and a pixel accuracy of **90.2%**.
* **Real-Time Capability:** This model was optimized for real-time performance, achieving a frame rate of **1084.1 FPS** on a single-thread Intel i7 processor, a speed **95.94 times faster** than the highest mIoU performing model (Random Forest), making it highly applicable for on-vehicle deployment.
* **Commercialization:** The technology developed was a core focus of my spinout startup, Revision Autonomy, and resulted in a pending patent application with Western Michigan University's tech-transfer office.

## Video & Publication

* **Video Demo:** See a short demo of the tire track detection model in action.
    <iframe src="https://drive.google.com/file/d/1PS9A51KFgkwUGfc3REDciu9dl8J7bP8y/preview" width="640" height="480" allow="autoplay"></iframe>
* **Publication:** For more technical details on the methodology and results, you can read the full journal paper:
    **[SAE International Journal of Advanced & Current Practices in Mobility](https://doi.org/10.4271/2022-01-0083)**

## Related Research

This project was a core element of my Ph.D. dissertation on autonomous driving in snow-covered roads. You can find more information here:
* **Full Dissertation:** [Cost-Effective Enablement of Automated Driving Systems on Snow-Covered Roads](https://www.proquest.com/openview/58d7d9fe46ce91c40f90fb390ca8e597/1?pq-origsite=gscholar&cbl=18750&diss=y)
* **Dissertation Slides:** [Presentation Slides](https://drive.google.com/file/d/1IYSie7vambji0HJFh4jOwu9tgRCHDMPi/view?usp=sharing)