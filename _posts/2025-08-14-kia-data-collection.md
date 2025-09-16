---
title: Perception System Data Collection in Adverse Weather
description: "Architected a full hardware and software stack for a Kia Niro HEV, creating a robust, low-cost platform for autonomous vehicle research and data collection."
date: 2020-10-10
categories: [System Architecture]
tags: [perception, camera, lidar, radar, CAN/CANFD, data-pipeline, drive-by-wire, ROS, GCP, cloud, PyQT, GUI, UI/UX, linux, sensor-fusion, yolo, object-detection, object-classification, lane detection, data-analysis, software-architecture, hardware-architecture, vehicle-integration]
pin: false
image:
  path: assets/img/kia_thumbnail.jpg
  alt: The custom hardware and software architecture for the Kia Niro research vehicle.
---

## The Challenge

Academic and industrial autonomous vehicle research often requires high-fidelity, purpose-built vehicle platforms, which can be prohibitively expensive. The challenge was to design and instrument a cost-effective, energy-efficient, and fully functional research platform that could support advanced autonomous features and serve as a foundation for multiple research projects. This required careful selection of components, a robust system architecture, and a clean data pipeline.

## The Technical Solution

As a key contributor and co-author on the technical paper detailing this work, I helped design and implement a full hardware and software stack for a 2019 Kia Niro Hybrid. This involved a complete vehicle integration process, from physical sensor mounting to setting up a functional data logging and analysis pipeline. My contributions included:

* **Sensor Instrumentation:** Collaborated on the selection and physical integration of a multi-modal sensor suite, including a ZED stereo camera, a MobilEye 630 computer vision system, an Aptiv ESR radar, an Ouster OS1 LiDAR, and Swift Navigation GNSS/IMU sensors. This work required careful consideration of sensor placement, power requirements, and signal integrity.
* **ROS Middleware:** Architected the entire system around the **Robot Operating System (ROS)** to act as the primary middleware. This allowed for seamless integration of sensor drivers and custom algorithms, enabling a unified data flow and real-time communication between hardware components and the in-vehicle computer.
* **Data Pipeline:** Developed a cloud-based pipeline for image data from the ZED camera. I used the Google Cloud Platform (GCP) API to automatically upload raw data to the cloud, which could then be easily queried for use in later research, such as the tire track detection and gravel detection projects.
* **Custom Software:** Created a custom GUI tool using **PyQT, Tkinter, and Dash** to process and visualize raw camera data, enabling custom computer vision model development and data validation.

![Kia Niro Instrumentation Diagram](assets/img/kia-niro-instrumentations.png)
*Figure: The full system architecture of the Kia Niro research platform, showing the flow of information between the sensors, ROS topics, and the AV software stack.*

## Impact & Results

The successful development of this platform created a powerful and versatile tool that accelerated our research capabilities and demonstrated a highly effective approach to building autonomous research vehicles.

* **Cost-Effectiveness:** The total cost of the platform was a highly competitive **$118,189 USD**, a significant savings compared to other commercially available systems with similar functionality.
* **Open-Source Contribution:** The full methodology and results were documented and published, contributing a valuable, open-source-friendly blueprint to the broader research community.
* **Long-Term Impact:** The platform became the primary research vehicle for the lab, supporting over 2,000 miles of testing in various conditions and serving as the foundation for multiple follow-on research projects and publications.

## Video & Related Work

* **Data Collection Video:** This video shows the Kia Niro research vehicle collecting data at the American Center for Mobility.
    <iframe src="https://drive.google.com/file/d/1lYaoyVjm859Yc76RgEH_qfYu6MO4HJti/preview" width="640" height="480" allow="autoplay" frameborder="0" allowfullscreen></iframe>
* **Vehicle Integration Details:** This work was fully documented in a peer-reviewed publication.
    * **"Development of an Energy Efficient and Cost Effective Autonomous Vehicle Research Platform"**
    * **DOI:** [10.3390/s22165999](https://doi.org/10.3390/s22165999)
* **Custom Computer Vision Tool:** This photo shows the GUI I developed for processing and visualizing raw camera data.
    ![Custom Computer Vision Tool](assets/img/computer-vision-tool.jpg)