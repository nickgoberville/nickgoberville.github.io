---
title: Deployed a VIL Test Platform to CARB facility for the EcoCAR Dynamometer Event
description: "Led the design and implementation of a standardized Vehicle-in-the-Loop (VIL) communication interface, enabling repeatable and collaborative dynamometer testing for 13 university teams."
date: 2025-04-04
categories: [System Architecture]
tags: [controls, dynamometer-testing, vehicle-testing, vehicle-integration, simulation-testing, software-architecture, networking, UDP, CAN/CANFD, hardware-architecture]
pin: false
math: true
mermaid: true
image:
  path: assets/img/osu-test-1.png
  alt: Guiding students from Ohio State University through a simulated VIL (Vehicle-in-the-loop) test using the solution I developed.
---

## The Challenge

The EcoCAR EV Challenge required 13 university teams to test their Connected and Automated Vehicle (CAV) features, particularly their energy consumption, in a controlled and repeatable environment. The challenge was to create a standardized Vehicle-in-the-Loop (VIL) dynamometer testing workflow that could be used by all teams, ensuring consistent data collection and evaluation despite variations in their individual software stacks. A major part of this was enabling the co-simulation of virtual sensor inputs with a physical vehicle on a dynamometer.

## The Technical Solution

<div style="float: right; margin-left: 20px; max-width: 50%;">
  ![Common Sensor Reference Frame](assets/img/common_reference_frame.png)
  <p style="text-align: center; font-style: italic; font-size: 0.9em; margin-top: 5px;">Figure: The common reference frame for sensor data, designed in collaboration with the GM Super Cruise team to ensure standardized communication across all university teams.</p>
</div>

As the CAV Research Engineer at Argonne National Lab, I architected and implemented the core VIL communication framework for this event. My solution provided a robust and standardized method for bridging the gap between simulation and the physical vehicle. My work included:

* **Communication Architecture:** Designed a standardized communication interface using IPv4 networking and two custom UDP packets to facilitate sensor fusion object injection. This required a close collaboration with the GM Super Cruise team to design a common reference frame for the sensor data. This allowed a simulation tool like RoadRunner, running on a student's PC, to communicate with the vehicle's software stack in real-time.

* **Documentation & Support:** I effectively documented the encoder/decoder specifications for the UDP packets, ensuring 100% integration into all 13 university teams' software stacks for seamless testing.
* **Closed-Loop System:** The solution enabled closed-loop dynamometer testing, where the physical vehicle's actions influenced the virtual environment and vice versa, creating a true VIL testing environment.

![VIL Architecture Design](assets/img/vil-architecture-design.png)
*Figure: The communication architecture for the VIL testing workflow, demonstrating the flow of data between a student's simulation PC and the physical vehicle on the dynamometer.*

### UDP Packet Specifications

The UDP packets were designed to transmit critical sensor fusion data with minimal latency and high reliability.

| Field Name | Type | Unit | Description |
| :--- | :--- | :--- | :--- |
| **Packet 1 (SimPC to Vehicle)** | | | |
| rel_distance_m | `float` | `m` | Relative distance between the Target and Ego vehicle geometric centers. |
| rel_speed_mps | `float` | `m/s` | Relative speed between the Target and Ego vehicle geometric centers. |
| sim_ego_speed_mps | `float` | `m/s` | Absolute speed of the ego vehicle in simulation. |
| sim_state | `uint8_t` | N/A | Enumerated state of the simulation environment. `0 = Off`, `1 = On`, `2 = Active`. |
| dyno_mode_request | `uint8_t` | N/A | Indicates what simulation mode is active. `1 = Desired accel feedback`, `2 = Actual speed feedback`. |
| **Packet 2 (Vehicle to SimPC)** | | | |
| acc_state | `uint8_t` | N/A | Enumerated state of the vehicle's ACC feature. |
| dyno_mode_state | `uint8_t` | N/A | Enumerated state of the vehicle's dyno mode feature. |
| **Packet 3 (Co-simulation Signal)** | | | |
| vehicle_speed_kph | `float` | `kph` | Absolute speed of the ego vehicle on dyno, measured by the wheel speed sensors. |

## Impact & Results

The VIL testing solution successfully provided a standardized, reliable, and repeatable method for evaluating CAV energy consumption, a key goal of the EcoCAR EV Challenge.

* **High Reliability:** We successfully conducted closed-loop testing at Argonne National Lab using a Cadillac LYRIQ provided by GM with **0 packet loss**, a critical achievement for a real-time system.
* **Enabled Collaboration:** The standardized workflow allowed 13 university teams to develop and test their Cooperative ACC, Lane Centering Control, and Automatic Intersection Navigation features.
* **Industry-Level Training:** This work provided students with invaluable, hands-on experience using an industry-standard XIL testing framework, preparing them for future careers in advanced mobility.

## Video & Photos

* **VIL Dynamometer Testing:** This photo shows one of the EcoCAR vehicles on a dynamometer in a professional test environment.
![VIL Dynamometer Test](assets/img/20250313_075634.jpg)

* **ACC Energy Consumption Testing:** This video shows the testing in action at Argonne National Laboratory.
<iframe width="889" height="500" src="https://www.youtube.com/embed/aeO3AJauc5E" title="ACC Energy Consumption Testing at Argonne National Laboratory" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Related Publication

For more technical details on the methodology and results, this work was published as an SAE Technical Paper:

* **Modular Dynamometer Testing Framework to Evaluate Energy Impacts of Longitudinal Automated Driving Systems**
    * **DOI:** [10.4271/2025-01-8065](https://doi.org/10.4271/2025-01-8065)