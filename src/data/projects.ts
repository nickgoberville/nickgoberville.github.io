export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  tags: string[];
  category:
    | "Robotics & Autonomy"
    | "AI & Computer Vision"
    | "Edge & Systems"
    | "Leadership";
  date: string;
  imageUrl?: string;
  videoUrl?: string;
  links?: { label: string; url: string }[];
  featured?: boolean;
}

export const projects: Project[] = [
  // --- Featured / Key Projects ---
  {
    id: "lars",
    title: "LARS (Longitudinal Automated Replay System)",
    description:
      "Vehicle-integrated drive cycle execution system enabling any vehicle to autonomously follow standardized speed profiles. Deployed on Cadillac LYRIQ and Toyota Prius Prime.",
    fullDescription: `
---
> Vehicle-integrated system enabling autonomous drive cycle execution for standardized ADAS benchmarking and emissions testing.

## Overview
**LARS** integrates directly into a vehicle's control systems, allowing it to autonomously execute any drive cycle with high precision. This eliminates human driver variability during emissions testing, ACC validation, and ADAS benchmarking—enabling fair, repeatable comparisons across different controller implementations.

<p align="center"><img src="/assets/gif/LARS_track_gif_10fps.gif" alt="LARS Track Test - Lead vehicle with Super Cruise follow" width="80%" /></p>

## Features
- **Drive Cycle Execution**: Upload any speed profile within ±2.5 m/s² acceleration limits
- **Vehicle Integration**: Connects via CAN/CAN-FD and Comma.ai hardware for throttle/brake actuation
- **State Machine Safety**: Backend ensures safe state transitions before enabling automated control
- **Real-Time UI**: Foxglove-based dashboard with live telemetry, GPS tracking, and one-click test controls
- **Open Source**: Built on open standards, independent of proprietary licenses

## Tech Stack
- **Framework**: ROS 2 (Jazzy), C++, Python
- **Visualization**: Foxglove Studio
- **Vehicle Interface**: SocketCAN, Comma.ai Panda/Pedal, CAN-FD
- **Control**: Analog pedal mapping, closed-loop speed controller
- **Platform**: Ubuntu 24.04

## Validation
<p align="center"><img src="/assets/img/lars-speed-tracking.png" alt="Speed Tracking Performance" width="60%" /></p>

- Speed tracking within **SAE J1634 bounds** (±1 m/s error)
- Validated on **EPA UDDS 505** and **HWFET** drive cycles
- Deployed on **2024 Cadillac LYRIQ** and **2023 Toyota Prius Prime**
- Tested at **GM Milford Proving Grounds** and **Desert Proving Grounds**
---
    `,
    tags: [
      "ROS2",
      "C++",
      "Foxglove",
      "SocketCAN",
      "Comma.ai",
      "CAN-FD",
      "Ubuntu",
    ],
    category: "Robotics & Autonomy",
    date: "2025-05",
    imageUrl: "/assets/img/lars_thumbnail.jpg",
    videoUrl: "https://player.vimeo.com/video/1103835725?h=b1031715fb",
    featured: true,
    links: [{ label: "Paper (Coming Soon)", url: "" }],
  },
  {
    id: "vehicle-data-repository",
    title: "Vehicle Data Repository (VDR)",
    description:
      "On-premise data repository with ETL pipelines for vehicle logs (MCAP, MF4, BLF), MongoDB metadata, and agentic AI natural language querying.",
    fullDescription: `
---
> Modular data repository transforming raw vehicle test logs into queryable Parquet format with natural language querying via agentic AI.

## Overview
Managing terabytes of heterogeneous vehicle test data across multiple formats was a major bottleneck for post-processing and analysis. I built **VDR** to standardize data ingestion, enable complex queries without custom tooling, and dramatically accelerate in-house data analysis workflows.

## Features
- **ETL Pipelines**: Ingest ROS2 MCAP bags, CAN bus logs (MF4, BLF), and CSV files
- **On-Premise Storage**: Secure cold storage with hash-based deduplication (no cloud due to data confidentiality)
- **Complex Queries**: MongoDB NoSQL schema enables flexible metadata queries
- **Agentic AI Integration**: Natural language data requests—e.g., *"Get Toyota Prius logs from Kearny Rd testing on March 4th 2025"*
- **Parquet Output**: Standardized format for downstream analysis in Python/Pandas

## Tech Stack
- **Backend**: FastAPI, MongoDB, Redis, Celery
- **Data Formats**: MCAP, MF4, BLF, Parquet
- **CLI**: Python (Click), Textual TUI
- **Visualization**: Streamlit, Plotly
- **AI**: LLM-powered agentic data retrieval
---
    `,
    tags: ["Python", "MongoDB", "FastAPI", "ETL", "Agentic AI", "Parquet"],
    category: "Edge & Systems",
    date: "2025-06",
    imageUrl: "/assets/img/vehicle-data-pipeline.png",
    featured: true,
  },
  {
    id: "lars-sim",
    title: "LARS-HIL (Co-Simulation Manager)",
    description:
      "Real-time lead vehicle simulation for HIL/VIL testing with 40+ built-in drive cycles. Cross-platform Python tool with live visualization.",
    fullDescription: `
---
> Real-time lead vehicle simulation tool for hardware-in-the-loop (HIL) and vehicle-in-the-loop (VIL) testing.

## Overview
Validating control algorithms on physical vehicles is dangerous and slow. **LARS-HIL** simulates lead vehicle behavior for risk-free controller development before track testing.

## Features
- **40+ Built-in Drive Cycles**: UDDS, HWFET, and custom speed profiles
- **Real-Time Visualization**: Interactive plots with zoom, pan, and cursor tracking
- **UDP Communication**: Configurable network settings for hardware integration
- **Comprehensive Logging**: CSV exports for offline analysis
- **Cross-Platform**: Windows 10/11, Ubuntu 18+
- **Easy Installation**: \`pip install lars-hil\`

## Tech Stack
- **GUI**: PyQt (via Typer/Rich TUI)
- **Plotting**: Matplotlib, NumPy
- **Config**: PyYAML, pandas (CSV parsing)
- **Networking**: Python socket, UDP/IPv4
- **CLI**: Typer, Rich
---
    `,
    tags: ["Python", "PyQt", "UDP", "HIL", "VIL", "Cross-Platform"],
    category: "Robotics & Autonomy",
    date: "2025-05",
    imageUrl: "/assets/img/lars-sim-hil-manager.png",
    featured: true,
  },
  {
    id: "vil-dyno",
    title: "VIL Dynamometer Testing Framework",
    description:
      "Architected a standardized VIL communication interface with dSPACE AUTERA and RTMaps, achieving 0 packet loss during closed-loop testing.",
    fullDescription: `
---
> Architected a standardized Vehicle-in-the-Loop (VIL) interface to evaluate energy consumption of automated driving features.

## Overview
To quantify the energy impact of perception and control algorithms, we needed a controlled yet realistic environment. I designed a VIL framework that injects virtual sensor fusion objects into a physical vehicle on a dyno.

<p align="center"><img src="/assets/img/vil-architecture-design.png" alt="VIL Architecture Design" width="80%" /></p>

## Features
- **Communication Protocol**: Designed a custom IPv4/UDP interface for real-time object injection, optimized for low latency
- **dSPACE Integration**: Integrated with dSPACE AUTERA platform using custom RTMaps encoders/decoders
- **Multi-Language Support**: Wrote C++ encoders/decoders for RTMaps, plus Simulink, MATLAB, and Python implementations
- **Reliability**: Achieved **zero packet loss** during high-throughput closed-loop testing on a Cadillac LYRIQ
- **Standardization**: Collaborated with GM Super Cruise team to define a common reference frame for 13 university teams

## Tech Stack
- **Networking**: Python sockets, UDP/IPv4, Wireshark
- **Message Protocol**: Custom binary packing, struct module
- **HIL Platform**: dSPACE AUTERA, RTMaps (C++ encoders/decoders)
- **Languages**: C++, Simulink, MATLAB, Python
- **Testing**: Argonne 4WD Chassis Dyno, California Air Resources Board (CARB) in Riverside, CA
---
    `,
    tags: [
      "Python",
      "UDP",
      "dSPACE",
      "RTMaps",
      "Dynamometer",
    ],
    category: "Edge & Systems",
    date: "2025-04",
    imageUrl: "/assets/img/osu-test-1.png",
    videoUrl: "https://www.youtube.com/embed/aeO3AJauc5E",
    featured: true,
    links: [
      { label: "Publication", url: "https://doi.org/10.4271/2025-01-8065" },
    ],
  },
  {
    id: "tire-track-detection",
    title: "Tire Track Detection in Snow",
    description:
      "Engineered a full ML pipeline for tire track detection achieving 83% mIoU and 95x speedup over alternatives.",
    fullDescription: `
---
> Engineered a novel computer vision pipeline to enable autonomous navigation on unmapped, snow-covered roads by tracking preceding tire tracks.

## Overview
Traditional lane-keeping fails in snow. I developed a cost-effective, camera-based solution that segments tire tracks as a navigational path. This system outperformed leading commercial solutions which failed in >99% of snowy frames.

<p align="center"><img src="/assets/img/tire-track-detection.jpg" alt="Tire Track Detection Results" width="70%" /></p>

## Features
- **ML Pipeline**: End-to-end pipeline from data collection (CVAT) to model deployment
- **Optimization**: CPU inference at **1084 FPS** (95x speedup over SOTA) with **83.2% mIoU**
- **Commercialization**: Core IP for **Revision Autonomy** (patent pending)

## Tech Stack
- **Framework**: PyTorch, ONNX Runtime
- **Model**: Custom U-Net semantic segmentation
- **Data**: CVAT annotation, custom dataset (~5000 frames)
- **Libraries**: OpenCV, NumPy
- **Deployment**: ROS (Melodic), Intel NUC
- **Vehicle**: 2019 Kia Soul EV
---
    `,
    tags: [
      "PyTorch",
      "Semantic Segmentation",
      "OpenCV",
      "ROS",
      "ONNX",
    ],
    category: "AI & Computer Vision",
    date: "2021-12",
    imageUrl: "/assets/img/model-labelling-pipepile.jpg",
    videoUrl:
      "https://drive.google.com/file/d/1PS9A51KFgkwUGfc3REDciu9dl8J7bP8y/preview",
    featured: true,
    links: [
      { label: "Publication", url: "https://doi.org/10.4271/2022-01-0083" },
    ],
  },
  {
    id: "end-to-end-rl",
    title: "End-to-End RL Agent for Steering",
    description:
      "Deployed a simulation-trained reinforcement learning agent onto a physical vehicle (Kia Niro) for lateral control.",
    fullDescription: `
---
> Deployed a simulation-trained Reinforcement Learning agent to control a full-sized vehicle, validating Sim2Real transferability.

## Overview
Real-world data collection is expensive and risky. This project explored training a lateral control agent entirely within **CARLA simulator** and deploying it zero-shot to the real world. This work was inspired by AWS DeepRacer principles scaled to full-sized vehicles.

## Features
- **Sim-to-Real**: Successfully transferred the policy to a **2019 Kia Niro** equipped with Polysync Drive-by-wire
- **Control Strategy**: Hybrid architecture—PID for longitudinal control, RL agent for lateral steering
- **Performance**: Matched ground truth human steering with **92% accuracy** in real-world testing

## Tech Stack
- **RL Framework**: Keras, TensorFlow, OpenAI Gym
- **Simulation**: CARLA Simulator
- **Vehicle Interface**: SocketCAN, ROS (Melodic), C++
- **Drive-by-Wire**: Polysync DriveKit
- **Compute**: NVIDIA Jetson TX2
- **Inspiration**: AWS DeepRacer (scaled to full vehicle)
---
    `,
    tags: [
      "Keras",
      "CARLA",
      "ROS",
      "C++",
      "SocketCAN",
      "Jetson",
    ],
    category: "AI & Computer Vision",
    date: "2020-03",
    imageUrl: "/assets/img/RL-agent-training.jpg",
    featured: true,
    links: [
      { label: "Publication", url: "https://doi.org/10.4271/2020-01-0737" },
    ],
  },
  {
    id: "ai-speed-following",
    title: "AI-Based Speed Following",
    description:
      "Online-learning DNN for one-pedal drive EVs, enabling vehicle-agnostic drive cycle execution without brake integration.",
    fullDescription: `
---
> Vehicle-agnostic speed controller using online-learning neural network for one-pedal drive EVs.

## Overview
To enable any one-pedal drive EV to execute precise speed profiles (e.g., from LARS), I developed an **online-learning neural network** that adapts in real-time to the specific vehicle dynamics—no prior training data or brake integration required.

## How It Works
1. **Input**: Desired speed trace (time, speed) as a two-column vector
2. **Lookahead**: Controller reads 1.2 seconds ahead to compute desired speed and current acceleration
3. **Online Learning**: A custom 3-layer DNN with backpropagation minimizes speed error in real-time
4. **Output**: Pedal position (0-100%) commanding regen braking or acceleration
5. **Adaptation**: Weights and biases adjust on-the-fly to match any vehicle's throttle/regen response

## Key Advantages
- **Vehicle-Agnostic**: Works on any EV with one-pedal drive (uses regen for braking)
- **No Brake Integration**: Eliminates the need for costly brake-by-wire hardware
- **Real-Time Adaptation**: Learns the vehicle's response curve during operation
- **Reduced Jerk**: Smoother transitions than traditional PID, **40% jerk reduction**

## Tech Stack
- **Model**: Custom 3-layer DNN with online backpropagation
- **Control Logic**: Python, NumPy
- **Vehicle Interface**: CAN bus, one-pedal drive regen
- **Target**: Any one-pedal drive EV (Cadillac LYRIQ, Toyota Prius Prime, etc.)
---
    `,
    tags: ["Neural Network", "Online Learning", "Python", "CAN", "One-Pedal Drive"],
    category: "AI & Computer Vision",
    date: "2024-12",
    imageUrl: "/assets/img/ai-speed-following.png",
    featured: true,
  },
  {
    id: "ai-weather-estimation",
    title: "Multi-Sensor Weather Characterization",
    description:
      "Quantified LiDAR/Camera degradation in real-world weather conditions with 50% point cloud reduction in precipitation.",
    fullDescription: `
---
> Multi-sensor weather characterization system quantifying perception degradation in adverse conditions.

## Overview
Autonomous systems need to understand their limitations. I designed and deployed a static multi-sensor array to quantify how LiDAR and camera performance degrades in real-world weather.

## Key Findings
- **LiDAR Intensity**: Up to **80% peak** in daylight, **14.3% reduction** in precipitation
- **Point Cloud Density**: **49.3% reduction** in snow/rain due to scattering
- **Weather Data Correlation**: Synchronized with visibility, precipitation rate/type, and accumulation

## Technical Setup
- **LiDAR**: Ouster OS2-128, Velodyne VLP-32
- **Camera**: Allied Vision Mako G-507
- **Radar**: Delphi ESR 2.5
- **Weather Station**: Vaisala FD70 present weather sensor/detector
- **Targets**: High-reflective panels at 18m and 40m
- **Duration**: 1.5 months continuous collection

## Impact
- Supports OEM operational design domain (ODD) definition
- Published findings at SAE WCX
---
    `,
    tags: ["LiDAR", "PCL", "Data Pipeline", "Weather", "Sensor Characterization"],
    category: "AI & Computer Vision",
    date: "2024-11",
    imageUrl: "/assets/img/weather-sensor-performance.png",
    featured: true,
    links: [{ label: "Publication", url: "https://doi.org/10.4271/2023-01-0056" }],
  },

  // --- Other Projects ---
  {
    id: "flexdrive",
    title: "FlexDrive Solution",
    description:
      "Vehicle-agnostic ROS2 software framework with CAN abstraction layer for rapid autonomous prototyping on NVIDIA Jetson.",
    fullDescription: `
---
> Created a modular abstraction layer to accelerate autonomous vehicle prototyping from weeks to hours.

## Overview
Fragmented hardware interfaces stifle innovation. I developed **FlexDrive**, an open V2X prototyping platform that abstracts vehicle-specific CAN messages into a standardized ROS2 control interface.

<p align="center"><img src="/assets/img/flexdrive-architecture.png" alt="FlexDrive Architecture" width="90%" /></p>

## Features
- **Hardware Abstraction Layer (HAL)**: CAN abstraction using Kvaser canlib (C++)
- **DDS Communication**: ROS2-based message passing for vehicle state and control
- **Vehicle Integration**: Comma.ai Panda/Pedal for throttle/brake override
- **V2X Ready**: Cohda Wireless integration for connected vehicle scenarios

## Tech Stack
- **Framework**: ROS2 (Foxy/Humble)
- **Languages**: C++, Python
- **CAN Libraries**: Kvaser canlib, SocketCAN
- **Hardware**: NVIDIA Jetson Nano, Comma.ai Panda/Pedal
- **V2X**: Cohda Wireless, DSRC/C-V2X
---
    `,
    tags: ["ROS2", "C++", "Kvaser", "Jetson Nano", "Comma.ai", "V2X"],
    category: "Edge & Systems",
    date: "2024-09",
    imageUrl: "/assets/img/flexdrive-concept.png",
  },
  {
    id: "eco-car-organizer",
    title: "EcoCAR EV Challenge Organizer",
    description:
      "Led the CAV track scope for the $6M DOE competition, mentoring 200+ students and defining testing standards.",
    fullDescription: `
---
> Managed the Connected & Automated Vehicle (CAV) track for a $6M DOE collegiate competition, setting the technical direction for 13 universities.

## Overview
Tasked with defining the scope for the next generation of automotive engineers. I oversaw the full technical roadmap for the CAV challenge.

## Highlights
- **Leadership**: Mentored over **200 students**, providing technical guidance on architecture, sensor fusion, and control theory.
- **Standards**: Defined the "Gold Standard" for evaluating CAV performance, including LARS and VIL methodologies.
- **Impact**: Architected the testing workflows that served as the primary grading criteria for the competition.
---
    `,
    tags: [
      "Leadership",
      "System Architecture",
      "Mentorship",
      "Project Management",
    ],
    category: "Leadership",
    date: "2024-06",
    imageUrl: "/assets/img/ecocar.jpg",
  },
  {
    id: "static-sensor-pipeline",
    title: "Static Sensor Pipeline & Characterization",
    description:
      "Quantified weather impact on sensors: 22% LiDAR point reduction in rain, 29% in snow.",
    fullDescription: `
---
> Designed a multi-modal sensor array to quantify the degradation of ADAS sensors in adverse weather conditions.

## Overview
Safety margins decrease in bad weather. To quantify this, I built a static rig equipped with LiDAR, Radar, and Cameras to collect long-term environmental data.

## Features
- **Data Pipeline**: Robust logging and analysis for terabytes of multi-modal data
- **LiDAR Reduction**: **22% point density loss** in rain, **29%** in snow
- **Application**: Critical for OEM operational design domain (ODD) definition

## Tech Stack
- **LiDAR**: Ouster OS2-128, Velodyne VLP-32
- **Camera**: Allied Vision Mako G-507
- **Radar**: Delphi ESR 2.5
- **Analysis**: Python, pandas, NumPy, Open3D
- **Storage**: ROS2 MCAP bags, Parquet
---
    `,
    tags: ["Ouster", "Velodyne", "Delphi", "Python", "Open3D"],
    category: "AI & Computer Vision",
    date: "2024-10",
    imageUrl: "/assets/img/sensor-char-thumbnail.jpg",
  },
  {
    id: "sensor-fusion-lead",
    title: "Sensor Fusion & Connectivity Test Lead",
    description:
      "Standardized sensor fusion testing for 13 teams, saving 6 hours/team in post-processing.",
    fullDescription: `
---
> Led the standardization of sensor fusion testing/verification, ensuring rigorous data integrity for competition scoring.

## Overview
Inconsistent data formats were causing bottlenecks in scoring. I standardized the entire data collection and analysis workflow for 13 university teams.

<p align="center"><img src="/assets/img/common_reference_frame.png" alt="Common Reference Frame" width="50%" /></p>

## Features
- **Optimization**: Unified **DBC file** for bit-packing and data rates, saving ~6 hours/team in post-processing
- **Metrics**: Implemented the **GOSPA metric** to objectively score student object detection performance
- **Precision**: Ground truth testing precision of **<0.01cm** using OxTS RTK GNSS units

## Tech Stack
- **Ground Truth**: OxTS RT3000 RTK GNSS, IMU
- **Data Logging**: Vector CANalyzer, MF4/BLF formats
- **Analysis**: Python, pandas, NumPy, matplotlib
- **Standards**: EcoCAR DBC specification, SAE J3016
---
    `,
    tags: ["OxTS", "GOSPA", "DBC", "Python", "CANalyzer"],
    category: "Leadership",
    date: "2024-05",
    imageUrl: "/assets/img/sensor-fusion-ekf.png",
  },
  {
    id: "bakery-pricing",
    title: "Bakery Pricing Tools",
    description:
      "Full-stack web app with SQLite backend for accurate profit margin calculation.",
    fullDescription: `
---
> Developed a full-stack pricing utility to automate complex profit margin calculations for small-scale manufacturing.

## Overview
Addressed a gap in small business tooling where manual calculation errors led to revenue loss.

## Highlights
- **Tech Stack**: Built with a **Python/Streamlit** frontend and a robust **SQLite** backend for recipe management.
- **Automation**: Automates ingredient cost scaling and labor estimation, reducing quote time by **30 minutes per recipe**.
- **Deployment**: Deployed as a live web application for real-time access.
---
    `,
    tags: ["Software", "Full-Stack", "Python", "Streamlit", "SQLite"],
    category: "Edge & Systems",
    date: "2025-09",
    imageUrl: "/assets/img/bakery-pricing-tool.jpg",
    links: [
      { label: "Live Demo", url: "https://bakery-pricing-tool.onrender.com/" },
    ],
  },
  {
    id: "donkey-car",
    title: "Donkey Car Autonomous RC",
    description:
      "Built a full software/hardware stack for an autonomous RC car using behavioral cloning.",
    fullDescription: `
---
> Implemented an end-to-end autonomous stack on an embedded platform to demonstrate CNN-based steering control.

## Overview
A proof-of-concept for deep learning on edge devices. Trained and deployed a CNN model to predict steering angles directly from grayscale camera images using behavioral cloning.

## Features
- **End-to-End Learning**: CNN predicts steering angle from raw camera input
- **Data Collection**: Logged steering angles synchronized with grayscale images
- **Deployment**: Model runs inference on embedded hardware in real-time

## Tech Stack
- **Hardware**: Raspberry Pi, Pi Camera
- **ML Framework**: PyTorch
- **Model**: Custom CNN (grayscale images → steering angle)
- **Control**: PWM servo controllers
---
    `,
    tags: ["PyTorch", "CNN", "Raspberry Pi", "Behavioral Cloning"],
    category: "Robotics & Autonomy",
    date: "2024-09",
    imageUrl: "/assets/img/donkey-car.png",
    videoUrl:
      "https://drive.google.com/file/d/1QxVnQ69bPyOt-bwwfeVPVAnRlerNoJ-9/preview",
  },
  {
    id: "revision-autonomy",
    title: "NSF I-Corps: Revision Autonomy",
    description:
      "Co-founded a deep-tech startup, secured $215k+ in non-dilutive funding, and conducted 150+ customer discovery interviews.",
    fullDescription: `
---
> Co-founded a venture to commercialize adverse weather perception technology, applying Lean Startup methodology to validate product-market fit.

## Overview
Translated academic research into a viable commercial product roadmap, leveraging my entrepreneurial drive to secure funding and build a go-to-market strategy.

## Highlights
- **Funding**: Secured over **$215,000** in non-dilutive grants from the National Science Foundation (NSF) and state programs.
- **Customer Discovery**: Conducted **150+ interviews** with automotive OEMs, Tier 1 suppliers, and DOTs to validate market demand.
- **Business Model**: Designed a SaaS licensing model for ODD (Operational Design Domain) expansion software.
- **Lean Startup**: Applied iterative pivoting to refine from general perception to a focused winter-weather navigation solution.
---
    `,
    tags: [
      "Entrepreneurship",
      "Lean Startup",
      "Customer Discovery",
      "NSF I-Corps",
    ],
    category: "Leadership",
    date: "2022-01",
    imageUrl: "/assets/img/revision-autonomy-pitch-deck.jpg",
  },
  {
    id: "hd-mapping",
    title: "HD Mapping & Sensor Fusion",
    description:
      "Developed highway HD mapping software and integrated a full autonomy stack into a Kia Niro.",
    fullDescription: `
---
> Engineered the localization and mapping stack for a Level 3 autonomous demonstration on public highways.

## Overview
Part of a showcase at the North American International Auto Show (NAIAS). Created an HD mapping system that stored lane geometry for real-time autonomy stack consumption.

## Features
- **HD Mapping**: Generated map covering **140 miles** of Michigan highway
- **Localization**: **1cm accuracy** using spline-based estimation matching
- **Sensor Fusion**: EKF fusing Mobileye camera lanes with Delphi radar objects

## Tech Stack
- **Sensors**: Delphi ESR 2.5 Radar, Mobileye Camera, GNSS
- **Mapping**: scipy (spline fitting), pandas (map storage)
- **Fusion**: Extended Kalman Filter (EKF), C++
- **Workflow**: GPS position → Mobileye lane transform → stored lane map
---
    `,
    tags: ["Mobileye", "Delphi", "scipy", "EKF", "C++", "GNSS"],
    category: "Robotics & Autonomy",
    date: "2020-05",
    imageUrl: "/assets/img/kia_thumbnail.jpg",
  },
  {
    id: "autonomous-shuttle",
    title: "Autonomous Shuttle Deployment",
    description:
      "Led deployment of two Aurrigo Level 4 autonomous shuttles for accessible campus mobility.",
    fullDescription: `
---
> Directed the operational deployment of two SAE Level 4 autonomous shuttles, providing accessible mobility solutions on a university campus.

## Overview
A real-world deployment interacting with pedestrians and mixed traffic, demonstrating the potential of autonomous last-mile mobility.

## Highlights
- **Operational Design**: Developed comprehensive testing and safety protocols for campus deployment.
- **Infrastructure**: Oversaw the installation of RTK-GPS base stations for centimeter-level localization.
- **Impact**: Successfully provided safe, last-mile transportation for over **20 students with disabilities**.

## Tech Stack
- **Platform**: Aurrigo autonomous shuttles (SAE Level 4)
- **Localization**: RTK-GPS base stations, GPS/IMU fusion
- **Safety**: Comprehensive ODD definition, pedestrian interaction protocols
---
    `,
    tags: ["Leadership", "Aurrigo", "RTK-GPS", "SAE L4", "Accessibility"],
    category: "Leadership",
    date: "2019-12",
    imageUrl: "/assets/img/autonomous-shuttle-wmich.jpg",
  },
  {
    id: "gravel-detection",
    title: "Road Edge Detection on Gravel",
    description:
      "Custom computer vision model to detect drivable edges of unpaved roads using stereo depth and texture analysis.",
    fullDescription: `
---
> Developed a computer vision algorithm to identify drivable regions on unstructured, unpaved roads.

## Overview
Unpaved roads lack the clear markings required by standard lane detectors. I built a custom pipeline combining depth sensing and texture analysis to segment the drivable surface.

## Features
- **Texture Analysis**: Utilized texture gradients and color space analysis to segment gravel roads from surrounding foliage
- **Stereo Depth**: Leveraged ZED camera depth maps to identify road plane geometry
- **Real-Time**: Achieved reliable road edge detection in variable lighting conditions

## Tech Stack
- **Camera**: ZED Stereo Camera
- **Libraries**: Python, OpenCV, ZED SDK
- **Framework**: ROS (Melodic)
- **Vehicle**: 2019 Kia Soul EV
---
    `,
    tags: ["Computer Vision", "Python", "OpenCV", "ZED", "ROS"],
    category: "AI & Computer Vision",
    date: "2020-09",
    imageUrl: "/assets/img/gravel-detection.jpg",
  },
];
