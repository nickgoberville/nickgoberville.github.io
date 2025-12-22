export interface Publication {
  id: string;
  title: string;
  type: "Patent" | "Journal" | "Conference" | "Talk/Panel";
  date: string;
  url?: string;
  authorship: string; // e.g., "1st Author", "Panelist", "Presenter"
  location?: string;
}

export const publications: Publication[] = [
  // --- Patents & Papers ---
  {
    id: "patent-automation",
    title: "Automation in Inclement Weather (US Patent App US20240140479A1)",
    type: "Patent",
    date: "2024",
    authorship: "1st Author",
    url: "https://patents.google.com/patent/US20240140479A1",
  },
  {
    id: "journal-snow-coverage",
    title:
      "Snow Coverage Estimation Using Camera Data for Automated Driving Applications",
    type: "Journal",
    date: "2023",
    authorship: "1st Author",
    url: "https://doi.org/10.1016/j.trip.2023.100766",
  },
  {
    id: "journal-tire-track",
    title:
      "Tire Track Identification: A Method for Drivable Region Detection in Conditions of Snow-Occluded Lane Lines",
    type: "Journal",
    date: "2022",
    authorship: "1st Author",
    url: "https://doi.org/10.4271/2022-01-0083",
  },
  {
    id: "journal-energy-efficient",
    title:
      "Development of an Energy Efficient and Cost Effective Autonomous Vehicle Research Platform",
    type: "Journal",
    date: "2022",
    authorship: "3rd Author",
    url: "https://doi.org/10.3390/s22165999",
  },
  {
    id: "journal-lidar-weather",
    title:
      "Analysis of LiDAR and Camera Data in Real-World Weather Conditions for Autonomous Vehicle Operations",
    type: "Journal",
    date: "2020",
    authorship: "1st Author",
    url: "https://doi.org/10.4271/2020-01-0093",
  },
  {
    id: "conf-vil-dyno",
    title:
      "Modular Dynamometer Testing Framework to Evaluate Energy Impacts of Longitudinal Automated Driving Systems",
    type: "Conference",
    date: "2025",
    authorship: "1st Author",
    url: "https://doi.org/10.4271/2025-01-8065",
  },
  {
    id: "conf-connected-intersection",
    title:
      "Portable Track-Based Connected Intersection Testing System for Connected and Automated Vehicles",
    type: "Conference",
    date: "2025",
    authorship: "4th Author",
    url: "https://doi.org/10.4271/2025-01-8062",
  },
  {
    id: "conf-road-snow",
    title:
      "Road Snow Coverage Estimation Using Camera and Weather Infrastructure Sensor Inputs",
    type: "Conference",
    date: "2023",
    authorship: "1st Author",
    url: "https://doi.org/10.4271/2023-01-0057",
  },
  {
    id: "conf-sensor-eval",
    title:
      "Automated Vehicle Perception Sensor Evaluation in Real-World Weather Conditions",
    type: "Conference",
    date: "2023",
    authorship: "1st Author",
    url: "https://doi.org/10.4271/2023-01-0056",
  },
  {
    id: "conf-carla-ros",
    title: "No Cost Autonomous Vehicle Advancements in CARLA through ROS",
    type: "Conference",
    date: "2021",
    authorship: "2nd Author",
    url: "https://doi.org/10.4271/2021-01-0106",
  },
  {
    id: "conf-shuttle-analysis",
    title:
      "Techno-Economic Analysis of Fixed-Route Autonomous and Electric Shuttles",
    type: "Conference",
    date: "2021",
    authorship: "1st Author",
    url: "https://doi.org/10.4271/2021-01-0061",
  },
  {
    id: "conf-rl-sim",
    title:
      "Using Reinforcement Learning and Simulation to Develop Autonomous Vehicle Control Strategies",
    type: "Conference",
    date: "2020",
    authorship: "5th Author",
    url: "https://doi.org/10.4271/2020-01-0737",
  },
  {
    id: "conf-faulty-perception",
    title: "Observer for Faulty Perception Correction in Autonomous Vehicles",
    type: "Conference",
    date: "2020",
    authorship: "4th Author",
    url: "https://doi.org/10.4271/2020-01-0694",
  },
  {
    id: "conf-unet-snow",
    title:
      "Tire Track Identification: Application of U-Net Deep Learning Model for Drivable Region Detection in Snow Occluded Conditions",
    type: "Conference",
    date: "2022",
    authorship: "2nd Author",
  },
  {
    id: "conf-wheelchair-shuttle",
    title:
      "Vehicle Performance Analysis of a Wheelchair Accessible Autonomous Electric Shuttle",
    type: "Conference",
    date: "2022",
    authorship: "3rd Author",
    url: "https://doi.org/10.4271/2022-01-5037",
  },

  // --- Talks & Panels ---
  {
    id: "panel-ieee-2024",
    title: "Revolutionizing Electrified Mobility with Autonomy & Connectivity",
    type: "Talk/Panel",
    date: "2024",
    authorship: "Panelist",
    location: "IEEE Transportation Electrification Conference (Rosemont, IL)",
  },
  {
    id: "talk-dspace-2024",
    title: "Demonstration of EcoCAR EV Challenge & dSPACE Sponsorship",
    type: "Talk/Panel",
    date: "2024",
    authorship: "Presenter",
    location: "dSPACE USA User Conference (Detroit, MI)",
  },
  {
    id: "panel-ams-2023",
    title: "Weather, Automated Vehicles, and Society",
    type: "Talk/Panel",
    date: "2023",
    authorship: "Panelist",
    location: "American Meteorological Society Washington Forum (DC)",
  },
  {
    id: "talk-ecocar-launch-2022",
    title:
      "Introduction and Scope for CAV Activities in 2022-2026 EcoCAR EV Challenge",
    type: "Talk/Panel",
    date: "2022",
    authorship: "Presenter",
    location: "EcoCAR EVC Launch Workshop (Washington, D.C.)",
  },
  {
    id: "panel-mich-mobility-2021",
    title: "Michigan Mobility Connect CAV Seasonal Tech Demo",
    type: "Talk/Panel",
    date: "2021",
    authorship: "Panelist",
    location: "Ypsilanti, MI",
  },
  {
    id: "panel-future-mobility-2021",
    title: "Seeing the Road Ahead: Advancing Mobility in All Seasons",
    type: "Talk/Panel",
    date: "2021",
    authorship: "Panelist",
    location: "Michigan Office of Future Mobility (Online)",
  },
  {
    id: "talk-sae-weather-2020",
    title: "Analysis of LiDAR and Camera Data in Real-World Weather Conditions",
    type: "Talk/Panel",
    date: "2020",
    authorship: "Presenter",
    location: "SAE World Congress Experience (Detroit, MI)",
  },
  {
    id: "panel-sae-adas-2020",
    title:
      "Technical Expert Panel: ADAS and AD Localization, Sensing and Perception",
    type: "Talk/Panel",
    date: "2020",
    authorship: "Panelist",
    location: "SAE World Congress Experience (Detroit, MI)",
  },
  {
    id: "talk-sae-tire-track-2022",
    title: "Tire Track Identification for Drivable Region Detection in Snow",
    type: "Talk/Panel",
    date: "2022",
    authorship: "Presenter",
    location: "SAE World Congress Experience (Detroit, MI)",
  },
];
