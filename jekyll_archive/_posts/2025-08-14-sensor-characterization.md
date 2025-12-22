---
title: Characterized Sensor Performance in Real-World Weather Conditions
description: "Designed a static sensor array and developed a data logging and analysis pipeline to quantify the effects of weather on LiDAR, camera, and radar sensors."
date: 2023-01-15
categories: [System Architecture]
tags: [sensor-fusion, data-pipeline, python, ROS, camera, lidar, radar, weather-research, multi-disciplinary, yolo, object-detection, object-classification, data-analysis, SSH]
pin: false
math: true
mermaid: true
image:
  path: assets/img/sensor-char-thumbnail.jpg
  alt: A LiDAR point cloud and camera image of a target vehicle and stop sign, with real-time weather data.
---

## The Challenge

Perception in adverse weather is a critical challenge for the widespread deployment of automated driving systems. Sensors like LiDAR and cameras are known to suffer from data degradation in dynamic environmental conditions, but there is a significant research gap in studies that quantify these effects with real-world data and a standard target. Understanding how precipitation, lighting, and other factors impact sensor performance is essential for building robust and safe autonomous systems.

## The Technical Solution

To address this gap, I led the design and implementation of a static sensor characterization array at Argonne National Laboratory. This project aimed to quantify sensor data degradation in real-world conditions by collecting and analyzing a synchronized dataset of multi-modal sensor data with objective weather metrics. My work included:

* **Hardware Integration:** Designed and built a static sensor array that housed a Velodyne VLP-16 LiDAR, a Mako G-319c camera, and an array of reflective targets. The array was synchronized with a real-time weather station (Vaisala FD-70) to gather objective data on visibility, precipitation rate, and droplet size.
* **Data Pipeline:** Architected a data acquisition pipeline using **Python** and **ROS (Robot Operating System)**. The system logged raw data from the LiDAR and camera, and synchronized it with the weather data into a single `rosbag` file. This process ensured a high-fidelity, time-stamped dataset for post-processing and analysis.
* **Data Analysis Workflow:** Developed a custom analysis workflow to process the collected data. For camera data, I used a **YOLOv5 model** to perform object detection, tracking confidence and error rates. For LiDAR data, the workflow filtered point clouds and analyzed key metrics like point count reduction and intensity values on a target vehicle.

![Sensor Characterization Overview](assets/img/sensor-characterization-overview.jpg)
*Figure: A high-level overview of the sensor characterization project, showing the static array, data collection process, and key metrics being measured.*

## Impact & Results

This work produced a first-of-its-kind, publicly available dataset and a series of key insights that are crucial for the development of robust perception systems.

* **Quantified Sensor Degradation:** The study provided concrete, quantitative data on the impact of weather. We observed that LiDAR suffered a point count reduction of **22.42% in rain** and **29.30% in snow**.
* **In-Depth Camera Analysis:** The camera analysis showed that detection confidence was more heavily impacted by distance than by light precipitation. The effective range of the camera and YOLOv5 configuration was found to be 50-75m, which is a critical insight for ADAS design.
* **Published Dataset:** The raw dataset collected during this project was published publicly, providing a valuable resource for other researchers to build and validate their own models.
* **Peer-Reviewed Publication:** The full methodology and results were documented in a peer-reviewed SAE Technical Paper.

![Sensor Characterization Impacts](assets/img/sensor-characterization-impacts.jpg)
*Figure: A visual representation of the key findings, including the significant reduction in LiDAR intensity and point count due to precipitation.*

## Related Work

* **Published Dataset:** The raw LiDAR and camera data from this project is publicly available for use by the research community.
    * **Livewire Dataset:** [https://livewire.energy.gov/ds/ld-cav-functionality/raw-lidar-camera](https://livewire.energy.gov/ds/ld-cav-functionality/raw-lidar-camera)
* **Full Publication:** This work was published as an SAE Technical Paper.
    * **Automated Vehicle Perception Sensor Evaluation in Real-World Weather Conditions**
    * **DOI:** [10.4271/2023-01-0056](https://doi.org/10.4271/2023-01-0056)