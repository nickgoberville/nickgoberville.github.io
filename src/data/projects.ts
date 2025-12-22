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
      "Architected a vehicle-agnostic system for repeatable lead vehicle testing, deployed on Cadillac Lyriq and Toyota Prius.",
    fullDescription: `
---
> Architected a vehicle-agnostic system for repeatable lead vehicle testing to validate ADAS controllers against real-world scenarios.

## Overview
The variability of human drivers makes benchmarking automated controllers (ACC/LKA) inconsistent. I designed **LARS** to capture and replay lead vehicle trajectories with high precision, enabling repeatable validation cycles.

## Highlights
- **Architecture**: Developed a standardized bus architecture and FlexIL vehicle interface, allowing plug-and-play integration of ACC controllers across different OEMs.
- **ROS 2 Migration**: Led the migration from Simulink to a modular **ROS 2** architecture, implementing nodes for Control Loops, Pedal Actuation, and Drivecycle Management.
- **Impact**: Deployed on a **2024 Cadillac Lyriq** and **2023 Toyota Prius Prime**, validating the system at **GM's Milford Proving Ground**. Enabled fair cross-platform benchmarking for the EcoCAR EV Challenge.
---
    `,
    tags: [
      "ROS2",
      "Python",
      "System Architecture",
      "Vehicle Testing",
      "CANFD",
      "Simulink",
      "UDP",
    ],
    category: "Robotics & Autonomy",
    date: "2025-05",
    imageUrl: "/assets/img/lars_thumbnail.jpg",
    videoUrl: "https://player.vimeo.com/video/1103835725?h=b1031715fb",
    featured: true,
    links: [{ label: "Paper", url: "https://doi.org/10.4271/2025-01-8065" }],
  },
  {
    id: "vehicle-data-repository",
    title: "Vehicle Data Repository",
    description:
      "Centralized data lake for autonomous vehicle logs, handling petabytes of drive data with instant searchability.",
    fullDescription: `
---
> Architected a centralized data lake for autonomous vehicle logs, enabling instant querying of petabytes of drive data.

## Overview
Managing the deluge of data from AV fleets is a massive challenge. I built a cloud-native repository that indexes, stores, and exposes vehicle logs for analysis, replacing fragmented hard drive storage with a unified queryable interface.

## Highlights
- **Scalability**: Built on **AWS S3** and **Glacier** to cost-effectively handle petabytes of BAG and MF4 files.
- **Searchability**: Implemented **Elasticsearch** strategies to query complex driving scenarios (e.g., "left turn in rain") in seconds.
- **Pipeline**: Automated ingestion pipelines using **Apache Airflow** to sanitize, tag, and catalog data immediately post-drive.
---
    `,
    tags: ["Cloud Architecture", "AWS", "Big Data", "Elasticsearch", "Python"],
    category: "Edge & Systems",
    date: "2025-06",
    imageUrl: "/assets/img/placeholder.svg",
    featured: true,
  },
  {
    id: "lars-sim",
    title: "LARS-Sim",
    description:
      "Digital twin of the LARS system for risk-free controller validation in virtual environments.",
    fullDescription: `
---
> Developed a high-fidelity Digital Twin of the LARS system to validate control algorithms in a risk-free virtual environment.

## Overview
Validating control algorithms on physical vehicles is dangerous and slow. **LARS-Sim** replicates the physical LARS behavior in high-fidelity simulation, allowing developers to test their code against a perfect digital replica before track testing.

## Highlights
- **Parity**: Achieved >95% dynamic correlation between the simulated and physical vehicle response curves.
- **Integration**: Plug-and-play compatibility with the real LARS hardware interface—the exact same controller code runs on both.
- **Safety**: Enabled rigorous fault injection testing (e.g., sensor failure, CAN bus delay) that would be non-viable on a physical test track.
---
    `,
    tags: ["Simulation", "Digital Twin", "CARLA", "ROS2", "Validation"],
    category: "Robotics & Autonomy",
    date: "2025-05",
    imageUrl: "/assets/img/placeholder.svg",
    featured: true,
  },
  {
    id: "vil-dyno",
    title: "VIL Dynamometer Testing Framework",
    description:
      "Architected a standardized VIL communication interface, achieving 0 packet loss during closed-loop testing on a Cadillac LYRIQ.",
    fullDescription: `
---
> Architected a standardized Vehicle-in-the-Loop (VIL) interface to evaluate energy consumption of automated driving features.

## Overview
To quantify the energy impact of perception and control algorithms, we needed a controlled yet realistic environment. I designed a VIL framework that injects virtual sensor fusion objects into a physical vehicle on a dyno.

## Highlights
- **Communication Protocol**: Designed a custom IPv4/UDP interface for real-time object injection, optimized for low latency.
- **Reliability**: Achieved **zero packet loss** during high-throughput closed-loop testing on a Cadillac LYRIQ.
- **Standardization**: Collaborated with the **GM Super Cruise** team to define a common reference frame, establishing the testing standard for 13 university teams.
---
    `,
    tags: [
      "System Architecture",
      "Networking",
      "UDP",
      "Hardware-in-the-Loop",
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

## Highlights
- **ML Pipeline**: Built an end-to-end pipeline from data collection (using CVAT) to model deployment.
- **Optimization**: Optimized the model for CPU inference, achieving **1084 FPS** (95x speedup over SOTA) while maintaining **83.2% mIoU**.
- **Commercialization**: This technology became the core IP for **Revision Autonomy**, leading to a patent pending status.
---
    `,
    tags: [
      "AI/ML",
      "Computer Vision",
      "Semantic Segmentation",
      "Python",
      "OpenCV",
      "ROS",
    ],
    category: "AI & Computer Vision",
    date: "2021-12",
    imageUrl: "/assets/img/tire-track-detection.jpg",
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
Real-world data collection is expensive and risky. This project explored training a lateral control agent entirely within **CARLA simulator** and deploying it zero-shot to the real world.

## Highlights
- **Sim-to-Real**: Successfully transferred the policy to a **2019 Kia Niro** equipped with Polysync Drive-by-wire.
- **Control Strategy**: Implemented a hybrid architecture using a PID controller for longitudinal speed control and the RL agent for lateral steering.
- **Performance**: The system matched ground truth human steering with **92% accuracy** in real-world testing.
---
    `,
    tags: [
      "AI/ML",
      "Reinforcement Learning",
      "Robotics",
      "CARLA",
      "Sim-to-Real",
      "ROS",
    ],
    category: "AI & Computer Vision",
    date: "2020-03",
    imageUrl: "/assets/img/rl-hardware.jpg",
    featured: true,
    links: [
      { label: "Publication", url: "https://doi.org/10.4271/2020-01-0737" },
    ],
  },
  {
    id: "ai-speed-following",
    title: "AI-Based Speed Following",
    description:
      "End-to-end deep learning model for longitudinal control, mimicking naturalistic driving behavior.",
    fullDescription: `
---
> End-to-end deep learning model for longitudinal control, mimicking naturalistic driving behavior.

## Overview
Classical Adaptive Cruise Control (ACC) often feels robotic and reactive. I trained a behavioral cloning model to predict desired speed and acceleration directly from visual inputs, resulting in smoother, more human-like following behavior.

## Highlights
- **Architecture**: Employed a **ResNet-50** backbone fused with CAN bus velocity data to predict acceleration commands.
- **Data Efficiency**: Trained on just 10 hours of expert driving data to achieve reliable lane-following and car-following capability.
- **Smoothness**: Reduced jerk metrics by **40%** compared to standard PID-based ACC systems, significantly improving passenger comfort.
---
    `,
    tags: ["AI/ML", "Deep Learning", "Behavioral Cloning", "ACC", "End-to-End"],
    category: "AI & Computer Vision",
    date: "2024-12",
    imageUrl: "/assets/img/placeholder.svg",
    featured: true,
  },
  {
    id: "ai-weather-estimation",
    title: "AI-Based Weather Estimation",
    description:
      "Real-time classification of road weather conditions for adaptive autonomous control.",
    fullDescription: `
---
> Real-time classification of road weather conditions using on-board camera feeds to adapt control strategies.

## Overview
Autonomous systems need to know when to be cautious. I developed a lightweight CNN to classify weather states (Dry, Wet, Snow, Ice) from the vehicle's forward-facing camera in real-time, enabling the planner to adjust safety margins dynamically.

## Highlights
- **Accuracy**: Achieved **94% classification accuracy** across diverse lighting and environmental conditions.
- **Efficiency**: Quantized model runs at **30Hz** on embedded edge hardware (NVIDIA Jetson AGX Xavier).
- **Adaptation**: Output automatically triggers safety-critical parameter tuning (e.g., increased following distance) in the downstream motion planner.
---
    `,
    tags: ["AI/ML", "Computer Vision", "Weather", "Edge AI", "Safety"],
    category: "AI & Computer Vision",
    date: "2024-11",
    imageUrl: "/assets/img/placeholder.svg",
    featured: true,
  },

  // --- Other Projects ---
  {
    id: "flexdrive",
    title: "FlexDrive Solution",
    description:
      "Modular, vehicle-agnostic software framework integrated with Comma.ai hardware for rapid prototyping.",
    fullDescription: `
---
> Created a modular abstraction layer to accelerate autonomous vehicle prototyping from weeks to hours.

## Overview
Fragmented hardware interfaces stifle innovation. I developed **FlexDrive**, a framework that abstracts vehicle-specific CAN messages into a standardized control interface.

## Highlights
- **Integration**: Seamlessly integrated with **Comma.ai Panda** and Pedal hardware for universal vehicle compatibility.
- **Validation**: Validated with three distinct custom ACC controllers at **GM Milford Proving Grounds**.
- **Efficiency**: Drastically reduced the time-to-track for new algorithms, allowing rapid iteration of control logic.
---
    `,
    tags: ["System Architecture", "Comma.ai", "CAN", "Simulink", "Python"],
    category: "Edge & Systems",
    date: "2024-09",
    imageUrl: "/assets/img/xil-concept.png",
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

## Highlights
- **Data Pipeline**: Developed a robust logging and analysis pipeline to process terabytes of multi-modal data.
- **Quantitative Findings**: Discovered a **22% reduction** in LiDAR point return density in rain and **29%** in snow.
- **Application**: These metrics are critical for defining the operational design domain (ODD) of safe autonomous systems.
---
    `,
    tags: [
      "Cloud / Data Pipeline",
      "Computer Vision",
      "LiDAR",
      "Radar",
      "Python",
    ],
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
Inconsistent data formats were causing bottlenecks in scoring. I standardized the entire data collection and analysis workflow.

## Highlights
- **Optimization**: Provided a unified **DBC file** for bit-packing and data rates, saving each team ~6 hours of post-processing time.
- **Metrics**: Implemented the **GOSPA metric** to objectively score student object detection performance.
- **Precision**: Achieved ground truth testing precision of **<0.01cm** using OxTS RTK GNSS units.
---
    `,
    tags: ["Leadership", "Sensor Fusion", "Vehicle Networking", "GOSPA"],
    category: "Leadership",
    date: "2024-05",
    imageUrl: "/assets/img/placeholder.svg",
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
A proof-of-concept for deep learning on edge devices.

## Highlights
- **Implementation**: Deployed a Convolutional Neural Network (CNN) trained via behavioral cloning onto a **Raspberry Pi**.
- **Hardware Integration**: Custom integration of Pi Camera, PWM servo controllers, and power management.
- **Outcome**: The agent successfully navigated a closed course at **60% throttle** without interventions.
---
    `,
    tags: ["AI/ML", "Robotics", "Deep Learning", "CNN", "Embedded Systems"],
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
      "Co-founder & CEO. Secured $215k+ funding. Conducted 150+ customer discovery interviews.",
    fullDescription: `
---
> Co-founded a venture to commercialize adverse weather perception technology, securing significant non-dilutive funding.

## Overview
Translated academic research into a viable commercial product roadmap.

## Highlights
- **Funding**: Secured over **$215,000** in grants from the National Science Foundation (NSF) and state programs.
- **Customer Discovery**: Conducted **150+ interviews** with automotive OEMs, Tier 1 suppliers, and DOTs to validate product-market fit.
- **Strategy**: Applied **Lean Startup Methodology** to pivot from general perception to a focused winter-weather navigation solution.
---
    `,
    tags: [
      "Leadership",
      "Entrepreneurship",
      "Lean Startup",
      "Customer Discovery",
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
Part of a showcase at the North American International Auto Show (NAIAS).

## Highlights
- **HD Mapping**: Generated a high-definition map covering **140 miles** of Michigan highway.
- **Localization**: Achieved **1cm localization accuracy** using spline-based estimation matching.
- **Sensor Fusion**: Implemented an Extended Kalman Filter (EKF) ensuring robust state estimation by fusing Vision and Radar data.
---
    `,
    tags: ["Robotics", "Computer Vision", "HD Mapping", "Kalman Filter", "C++"],
    category: "Robotics & Autonomy",
    date: "2020-05",
    imageUrl: "/assets/img/kia_thumbnail.jpg",
  },
  {
    id: "autonomous-shuttle",
    title: "Autonomous Shuttle Deployment",
    description:
      "Led deployment of two Level 4 autonomous shuttles for students with disabilities.",
    fullDescription: `
---
> Directed the operational deployment of two SAE Level 4 autonomous shuttles, providing accessible mobility solutions.

## Overview
A real-world deployment interacting with pedestrians and mixed traffic.

## Highlights
- **Operational Design**: Developed comprehensive testing and safety protocols for campus deployment.
- **Infrastructure**: Oversaw the installation of DSRC and RTK-GPS base stations.
- **Impact**: Successfully provided safe, last-mile transportation for over **20 students with disabilities**.
---
    `,
    tags: ["Leadership", "Robotics", "Project Management", "GPS/RTK", "SAE L4"],
    category: "Leadership",
    date: "2019-12",
    imageUrl: "/assets/img/udacity-thumbnail.jpg",
  },
  {
    id: "gravel-detection",
    title: "Road Edge Detection on Gravel",
    description:
      "Custom computer vision model to detect drivable edges of unpaved roads.",
    fullDescription: `
---
> Developed a computer vision algorithm to identify drivable regions on unstructured, unpaved roads.

## Overview
Unpaved roads lack the clear markings required by standard lane detectors.

## Highlights
- **Analysis**: Utilized texture gradients and color space analysis to segment gravel roads from surrounding foliage.
- **Deployment**: Integrated the algorithm with a **ZED Stereo Camera** on a Kia Soul EV.
- **Performance**: Achieved reliable real-time road edge detection in variable lighting conditions.
---
    `,
    tags: ["Computer Vision", "Python", "OpenCV"],
    category: "AI & Computer Vision",
    date: "2020-09",
    imageUrl: "/assets/img/gravel-detection.jpg",
  },
  {
    id: "realsim",
    title: "RealSim 2.0 Digital Twin",
    description:
      "Standardized workflow for generating high-fidelity simulation environments from real-world logs.",
    fullDescription: `
---
> Established a robust pipeline for generating "Digital Twins" of real-world test tracks to validate AV algorithms in simulation.

## Overview
Closing the gap between simulation and reality is critical for safety validation.

## Highlights
- **Standardization**: Implemented **OpenDRIVE** and **OpenSCENARIO** standards for widespread compatibility.
- **Fidelity**: Utilized high-density LiDAR scans to recreate track geometry with millimeter precision.
- **Integration**: Validated the environments within the **CARLA simulator**, enabling massive concurrent testing.
---
    `,
    tags: ["System Architecture", "Simulation", "Digital Twin", "OpenDRIVE"],
    category: "Edge & Systems",
    date: "2024-11",
    imageUrl: "/assets/img/placeholder.svg",
  },
  {
    id: "robotic-arm",
    title: "3-DOF Robotic Arm",
    description:
      "Designed and built a robotic arm to maximize 3D printer surface area.",
    fullDescription: `
---
> Designed and fabricated a custom 3-DOF robotic manipulator to extend the build volume of additive manufacturing systems.

## Overview
A mechatronics challenge integrating mechanical design and embedded control.

## Highlights
- **Mechanical Design**: Engineered a SCARA-like configuration to minimize inertia while maximizing reach.
- **Control System**: Implemented inverse kinematics on an embedded **Arduino** controller driving precision stepper motors.
- **Fabrication**: Utilized CNC and 3D printing to prototype and iterate on the linkage mechanisms.
---
    `,
    tags: ["Robotics", "Mechatronics", "Arduino", "C"],
    category: "Robotics & Autonomy",
    date: "2019-05",
    imageUrl: "/assets/img/placeholder.svg",
  },
  {
    id: "piezo-energy",
    title: "Piezoelectric Energy Harvesting",
    description:
      "Designed device utilizing piezoelectric disks for energy generation from vibration.",
    fullDescription: `
---
> Prototyped a renewable energy harvesting device converting mechanical vibration into usable electrical power.

## Overview
Investigating alternative power sources for low-power IoT sensors.

## Highlights
- **Hardware**: Designed a resonant circuit utilizing piezoelectric transducers to capture ambient vibrations.
- **Circuits**: Engineered the rectification and storage circuitry to buffer the intermittent energy bursts.
- **Result**: Demonstrated a functional prototype capable of powering low-energy LED indicators solely from footsteps.
---
    `,
    tags: ["Robotics", "Hardware", "Prototyping"],
    category: "Robotics & Autonomy",
    date: "2018-05",
    imageUrl: "/assets/img/placeholder.svg",
  },
  {
    id: "flight-simulator",
    title: "Flight Simulator Construction",
    description:
      "Built full-scale flight simulator hardware and integrated flight instruments.",
    fullDescription: `
---
> Engineered a full-scale flight simulation cockpit integrating physical instrumentation with simulation software.

## Overview
Creating an immersive training environment requires tight integration of hardware and software.

## Highlights
- **Integration**: Interfaced physical switch panels and flight yokes with **MATLAB** and X-Plane via UDP.
- **Construction**: Designed and built the structural frame to support multi-monitor arrays and instrument panels.
- **Fidelity**: Achieved a highly realistic training environment used for instrument rating practice.
---
    `,
    tags: ["System Architecture", "Mechatronics", "MATLAB"],
    category: "Edge & Systems",
    date: "2018-05",
    imageUrl: "/assets/img/flight-simulator.jpg",
  },
];
