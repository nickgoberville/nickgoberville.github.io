---
title: Developed a Computer Vision Model for Gravel Road Edge Detection
description: "Engineered a custom computer vision model to accurately detect the drivable edges of gravel and unpaved roads, a critical step for autonomous navigation."
date: 2020-10-15 # A placeholder date, you can adjust this as needed
categories: [Computer Vision]
tags: [computer-vision, python, data-pipeline, vehicle-integration, opencv, camera, linux, opencv, CAN/CANFD]
pin: false
image:
  path: assets/img/gravel-detection.jpg
  alt: A custom computer vision model detecting the edges of a gravel road using a Kia Soul EV.
---

## The Challenge

While much of the research in autonomous driving focuses on paved roads with clear lane markings, a significant portion of rural infrastructure consists of unpaved gravel roads with no clear lane lines. Standard computer vision models fail in these environments, creating a major challenge for expanding the Operational Design Domain (ODD) of autonomous vehicles. A novel approach was needed to identify the drivable path on these unpaved surfaces.

## The Technical Solution

<div style="float: right; margin-left: 20px; max-width: 50%;">
  ![The Kia Soul EV Research Vehicle](https://files.wmich.edu/s3fs-public/styles/3_2/public/images/u2820/2020/9-DSC_9032.jpg?h=790be497&itok=DzdQLIAO)
  <p style="text-align: center; font-style: italic; font-size: 0.9em; margin-top: 5px;">Figure: The Kia Soul EV research vehicle, which was used for data collection and testing for this project.</p>
</div>

As a Graduate Research Assistant at Western Michigan University's Energy Efficient and Autonomous Vehicles Lab, I developed a custom computer vision model to detect the edges of gravel roads. My work on this project demonstrated a full-cycle approach to a new computer vision problem:

* **Data Collection:** I utilized the lab's Kia Soul EV research vehicle to collect video data on a variety of gravel roads.
* **Custom Model:** Using Python and standard computer vision libraries, I developed an algorithm to identify the road edges, which were characterized by a change in texture and color compared to the surrounding grassy areas.
* **Edge Detection and Segmentation:** The model leverages image processing techniques to segment the road from the background, creating a clear representation of the drivable area. This was a challenging problem, as the appearance of the gravel changed dramatically with lighting and moisture.

## Impact & Results

This project demonstrated the feasibility of using a camera-based system to navigate challenging, unpaved environments.

* **Feasibility:** The model successfully and consistently detected the edges of the gravel road in real-time, proving that a computer vision solution can be developed for environments without traditional lane markings.
* **Expanded ODD:** The project contributed to the lab's broader goal of expanding the Operational Design Domain of autonomous vehicles to include a wider range of real-world driving conditions, beyond the limitations of city and highway driving.
* **Hands-on Experience:** The project provided valuable experience in the full development cycle of a custom computer vision model, from data acquisition and processing to algorithm development and validation on a physical vehicle.