---
title: Trained a Deep Neural Network for Autonomous RC Car Control
description: "Built a full software and hardware stack to train an end-to-end Convolutional Neural Network (CNN) for steering a physical RC car based on camera data."
date: 2019-06-15
categories: [Systems Integration]
tags: [AI/ML, computer-vision, deep-learning, CNN, embedded-systems, hardware-integration, data-collection, python, raspberry-pi, donkey-car]
pin: false
math: true
mermaid: true
image:
  path: assets/img/donkey-car.png
  alt: An image of a Donkey Car, an RC car with a Raspberry Pi and camera mounted on top.
---

## The Challenge

The field of autonomous vehicles is complex and requires expertise in a wide range of domains, from hardware and embedded systems to software and machine learning. My goal was to create a tangible, end-to-end learning project that would allow me to build a complete system from the ground up, proving my ability to master the entire pipeline. I chose to build a **Donkey Car**, an open-source platform for self-driving RC cars, as it provided a clear path to go from a physical vehicle to a fully autonomous one.

## The Technical Solution

I designed, built, and deployed the full system for this project, including both the physical hardware integration and the machine learning pipeline. My key contributions were:

* **Embedded Systems & Hardware Integration:** I integrated the core components of the Donkey Car, including a Raspberry Pi as the on-board computer, a camera module for a forward-facing view, and a PCA9685 servo controller to interface with the vehicle's electronic speed controller (ESC) and steering servo. This involved configuring the Raspberry Pi's I2C bus and camera interface to ensure proper communication.
* **Full ML-Pipeline for Behavioral Cloning:** The core of the project was using **Behavioral Cloning**, a form of supervised learning, to teach the car to drive. I manually drove the car around a track using a game controller, and the Donkey Car software stack recorded pairs of camera images and corresponding steering/throttle values.
* **Offboard Model Training:** I transferred the collected data from the Raspberry Pi to a host computer for training. The model itself was a **Convolutional Neural Network (CNN)** inspired by the NVIDIA DAVE-2 network. The model ingested a raw camera image and output a single floating-point value between -1.0 and 1.0 to control steering, which I then mapped to the appropriate PWM signals for the servo. This end-to-end approach demonstrated that the model could learn to extract features from the pixels alone, without explicit instruction on lane detection or path planning.

## Impact & Results

This project was a foundational learning experience that validated my ability to work across multiple technical disciplines.

* **End-to-End System Development:** I successfully built and deployed a fully autonomous system, from the ground up. This project proved my capability in hardware assembly, embedded software, data collection, and deep learning model training and deployment.
* **Demonstrated Control & ML Expertise:** The final model was able to navigate the course autonomously, demonstrating a clear understanding of behavioral cloning and the practical application of deep learning for a real-world controls problem.
* **Visual Proof of Concept:** The project's success is visually verifiable, providing a powerful demonstration of a complex system in action.

## Video

See the model in action, driving autonomously on the track.

<iframe src="https://drive.google.com/file/d/1QxVnQ69bPyOt-bwwfeVPVAnRlerNoJ-9/preview" width="640" height="480" allow="autoplay"></iframe>

---