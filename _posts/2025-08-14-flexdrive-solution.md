---
title: Architected a Comma.ai-based VIL Test Platform for Rapid Controller Deployment
description: "Developed a vehicle-agnostic software framework fully integrated with Comma.ai hardware, enabling rapid deployment and testing of new autonomous control algorithms on a physical vehicle."
date: 2024-09-17
categories: [System Architecture]
tags: [controls, hardware-in-the-loop, vehicle-testing, Comma.ai, software-architecture, CAN, simulink, ROS, python, toyota-prius]
pin: false
math: true
mermaid: true
image:
  path: assets/img/xil-concept.png
  alt: A conceptual diagram of a Vehicle-in-the-Loop (VIL) architecture showing a rapid prototyping controller connected to a vehicle's hardware.
---

## The Challenge

Developing and testing new autonomous vehicle controllers typically involves a time-consuming and expensive process of custom software integration for each vehicle platform. The goal of this project was to create a modular, vehicle-agnostic framework that would allow researchers and engineers to rapidly prototype, deploy, and test new control algorithms on a physical vehicle. This platform needed to seamlessly integrate with a vehicle's existing control systems, abstracting away low-level hardware differences.

## The Technical Solution

I architected and implemented a complete software stack that is fully integrated with the **Comma.ai Panda** and **Comma.ai Pedal** systems, making it compatible with a wide range of vehicles on the [Comma.ai vehicle list](https://comma.ai/vehicles). This framework effectively turns any supported vehicle into a flexible test platform for rapid controller deployment.

<div style="float: right; margin-left: 20px; max-width: 50%;">
  ![Hardware-in-the-Loop Architecture](assets/img/xil-architecture.jpg)
  <p style="text-align: center; font-style: italic; font-size: 0.9em; margin-top: 5px;">*Figure: The technical architecture showing how external control applications (Simulink/ROS) interface with the vehicle's hardware via the Comma.ai Panda and Comma.ai Pedal.*</p>
</div>

My key technical contributions included:

* **Hardware & Software Abstraction:** I developed a core application logic layer that communicates with the Comma.ai hardware, abstracting the vehicle's low-level CAN bus messages into a standardized interface. This allows new control algorithms, whether written as a **Simulink** model or a **ROS** node, to be deployed without custom porting.
* **Vehicle-in-the-Loop (VIL) Framework:** The system was designed as a VIL platform, allowing for seamless integration of virtual environments with a physical vehicle. It enabled me to test different controllers for Adaptive Cruise Control (ACC) by commanding the vehicle's throttle and braking.
* **Comma.ai Pedal Integration:** On an electric vehicle that supports [One-Pedal Driving](https://insideevs.com/features/742815/one-pedal-driving-ev-explained/), I implemented the **Comma.ai Pedal** solution. This specialized hardware allowed me to control acceleration and deceleration by directly modulating the vehicle's accelerator pedal, which was critical for developing the Longitudinal Automated Replay System (LARS) and enabling repeatable testing. You can read more about the LARS project [here](/_posts/2025-08-14-lars.md).

## Impact & Results

This work successfully validated a new, highly efficient methodology for controller development and testing, bridging the gap between theoretical models and real-world performance.

* **Successful HIL Demonstration:** I deployed and integrated this solution into a **2017 Toyota Prius Prime**. On a test track at the **GM Milford Proving Grounds**, I successfully ran three different ACC controllers, proving the framework's reliability and repeatability. The system accurately commanded the vehicle's speed and distance, a crucial step in validating new autonomous features.
* **Rapid Prototyping:** The platform enabled a rapid prototyping cycle, reducing the time from a conceptual control algorithm to an on-vehicle test from weeks to a matter of hours. This accelerated the research and development process.
* **Versatility & Scalability:** By utilizing the Comma.ai ecosystem, this solution is a scalable, cost-effective test platform applicable to over 300 vehicle models, proving its utility beyond a single research project.

![Toyota Prius VIL Testing](assets/img/prius-xil-test-results.png)
*Figure: A 2017 Toyota Prius Prime, with the Comma.ai system integrated, undergoing VIL testing at the GM Milford Proving Grounds.*