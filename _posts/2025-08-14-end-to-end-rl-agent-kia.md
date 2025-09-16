---
title: Integrated a Simulation-Trained RL Agent for End-to-End Lateral Control
description: "Developed and deployed a camera-based, end-to-end reinforcement learning model trained in a virtual environment to control a full-sized autonomous vehicle."
date: 2020-04-14
categories: [Systems Integration]
tags: [AI/ML, reinforcement-learning, controls, simulation, ROS, hardware-integration, vehicle-testing, python, end-to-end]
pin: false
math: true
mermaid: true
image:
  path: assets/img/RL-agent-training.jpg
  alt: A block diagram showing the data flow from the camera to the vehicle's control system.
---

## The Challenge

Developing and testing autonomous vehicle control strategies typically requires vast amounts of real-world, labeled data, which is both expensive and time-consuming to collect. Traditional methods often rely on Convolutional Neural Networks (CNNs) that are sensitive to environmental conditions, sensor placement, and calibration. The goal of this project was to explore an alternative, cost-effective approach: using **reinforcement learning (RL)** in a simulation environment to develop and deploy an end-to-end lateral control strategy on a physical, full-sized vehicle.

## The Technical Solution

As a Graduate Research Assistant at Western Michigan University, I was part of a team that successfully trained a deep reinforcement learning agent in a virtual environment and integrated it onto a physical Kia Niro passenger vehicle. My primary role involved the integration of the simulation-trained model with the vehicle's **hardware-in-the-loop (HIL)** system.

<div style="float: right; margin-left: 20px; max-width: 50%;">
  ![RL Agent Integration Architecture](assets/img/rl-hardware.jpg)
  <p style="text-align: center; font-style: italic; font-size: 0.9em; margin-top: 5px;">*Figure: The data and control flow from the camera, through the RL Inference Engine, to the vehicle's PID controllers and finally to the DriveKit hardware. This architecture was central to adapting the simulated model for real-world use.*</p>
</div>

My key contributions included:

* **Software Stack Integration:** Analyzed and integrated the AWS DeepRacer's Robot Operating System (ROS) libraries with the PolySync DriveKit, a vehicle-agnostic control system. This involved writing a custom ROS node to translate the high-level control predictions from the RL agent's "Navigation" node into the low-level `SteeringCommand`, `ThrottleCommand`, and `BrakeCommand` topics required by the vehicle.
* **PID Controller Optimization:** Addressed the challenge of adapting a control model from a 1/18th-scale vehicle to a full-sized car. The raw outputs from the RL agent resulted in "erratic and wild steering behavior" in the physical vehicle. To mitigate this, I implemented and tuned a set of **Proportional-Integral-Derivative (PID) controllers** for steering, throttle, and braking, ensuring the large vehicle's response was smooth and safe.
* **Hardware and Controls Architecture:** Designed the overall software architecture to allow for seamless data flow from the camera, through the RL inference engine, to the PID controllers, and finally to the vehicle's DriveKit. The PID controllers were critical in transforming the RL model's predictions into actionable, real-world commands, successfully bridging the "sim-to-real" gap.

## Impact & Results

This project demonstrated a viable and highly efficient alternative to traditional data-heavy training methods for autonomous vehicles.

* **Low-Cost, Data-Efficient Model:** We successfully proved that reinforcement learning could develop effective control strategies in simulation without the need for large, labeled, real-world datasets. This significantly reduced the cost and time associated with initial development and testing.
* **Successful Sim-to-Real Transfer:** The developed system successfully controlled a full-sized passenger vehicle on a closed track, with an exemplary model matching ground truth annotations with a **92% probability**. This was achieved by augmenting the training environment with shadows to increase robustness.
* **Foundational Research:** The work resulted in a publication in the SAE Technical Paper series, providing a strong foundation for future research in areas such as developing additional control methodologies and adapting control strategies to new scenarios.

## Related Publication

For more technical details on the methodology and results, you can read the full paper:

* **Using Reinforcement Learning and Simulation to Develop Autonomous Vehicle Control Strategies**
    * **DOI:** [10.4271/2020-01-0737](https://doi.org/10.4271/2020-01-0737)