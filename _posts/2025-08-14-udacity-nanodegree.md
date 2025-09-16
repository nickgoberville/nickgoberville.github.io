---
title: Completed Udacity's Intro to Self-Driving Cars Nanodegree
description: "A series of projects covering foundational concepts in autonomous systems, including computer vision, sensor fusion, localization, and control."
date: 2018-12-01 # You can adjust this date to reflect the completion date
categories: [Computer Vision]
tags: [computer-vision, pytorch, sensor-fusion, controls, path-planning, behavioral-cloning, python, C++]
pin: false
image:
  path: assets/img/udacity-thumbnail.jpg
  alt: A visualization of a computer vision model detecting lane lines.
---

## The Challenge

The Udacity "Intro to Self-Driving Cars" Nanodegree is a program designed to teach the core skills required for a career in autonomous systems. The curriculum is project-based, with each project presenting a unique technical challenge. My work in this program focused on a series of hands-on projects, culminating in a full understanding of the end-to-end self-driving car software stack.

As a representative example of my work in this program, the "Advanced Lane Finding" project presented a challenge to build a robust software pipeline that could accurately detect lane boundaries in a video stream, even under varying lighting conditions, curvature, and pavement types.

## The Technical Solution

The "Advanced Lane Finding" project required a multi-step computer vision pipeline. My solution, implemented primarily in Python and OpenCV, included the following key steps:

* **Camera Calibration:** To correct for lens distortion and ensure accurate measurements of 3D space from 2D images, I performed camera calibration using a set of 20 checkerboard images. This process generated transformation matrices (`mtx` and `dist`) to undistort the video frames.
* **Color & Gradient Thresholding:** I developed a robust image thresholding pipeline by combining thresholds from multiple color spaces (RGB, HSV, and HLS) with gradient information (Canny edge detection). A custom GUI was developed to fine-tune these thresholds, allowing for reliable lane line detection across diverse video frames.
* **Perspective Transformation:** Using the `cv2.warpPerspective()` function, I transformed the distorted camera images into a "birds-eye view" perspective. This provided a top-down, rectified view of the road, which is essential for accurate spatial measurements.
* **Lane Pixel Detection:** After the perspective transform, I used a sliding window technique to detect lane pixels and fit a polynomial to the pixel points using `numpy.polyfit()`. To optimize performance for subsequent frames, I implemented a more efficient search method that focused on a smaller region around the previously detected polynomial.
* **Real-World Metrics:** The final pipeline converted the pixel-based lane polynomial into real-world metrics. This enabled the calculation of the lane's radius of curvature and the vehicle's position relative to the center of the lane, which are critical inputs for a planning and control stack.

## Impact & Results

Completing this nanodegree provided me with a comprehensive set of foundational skills in autonomous systems. The projects, while simulated, demonstrated a practical understanding of how each component of an autonomous stack works and interacts.

* **Holistic Skill Development:** I successfully completed projects in critical areas, including **sensor fusion** (using Kalman filters), **localization**, **object detection** (with PyTorch), **PID control**, and **path planning**.
* **Code Archiving:** The code for all projects is archived on my public GitHub repository, demonstrating my ability to document and version control my work.
* **Foundational Knowledge:** This program served as a valuable foundation for the advanced research I would later conduct in my Ph.D. and at Argonne National Lab.

## Related Work

* **GitHub Repository:** The code for this project and all other nanodegree projects can be found in my archived repository:
    * **[nickgoberville/Udacity-CarND](https://github.com/nickgoberville/Udacity-CarND)**