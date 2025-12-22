---
title: Bakery Pricing Tool
description: "Yes, you read that right. I developed a full-stack web application to accurately calculate profit margins for baked goods, featuring a SQLite backend, a Python-based calculation engine, and a Streamlit front-end."
date: 2024-09-16
categories: [System Architecture]
tags: [python, streamlit, sqlite, numpy, data-management, software-development, full-stack]
pin: false
math: false
mermaid: false
image:
  path: assets/img/bakery-pricing-tool.jpg
  alt: A screenshot of the Bakery Pricing Tool dashboard showing a cost breakdown and profit margin analysis for a recipe.
---

## The Challenge

Accurately pricing products is a critical, but often tedious, task for small business owners. For a home bakery, this involves meticulously tracking ingredient costs, labor, and overhead to ensure profitability. My goal was to solve this problem for my wife's home bakery, [Golden Wave Goods](https://goldenwavegoods.square.site/), by creating a simple, user-friendly tool that could automate these complex calculations and provide clear insights into profitability.

## The Technical Solution

I designed and developed a full-stack, web-based tool from the ground up, tailored to the specific needs of a small-scale bakery. This project demonstrates a complete development lifecycle, from system design to deployment.

My key technical contributions included:

* **Full-Stack Architecture:** The application is built on a robust and maintainable architecture. The backend, written in Python, handles all the pricing logic and database interactions. The front end is developed using **Streamlit**, which enabled rapid prototyping and a clean, interactive user interface.
* **Database Management:** I designed a relational database using **SQLite** to store and manage all key data points. The database schema includes tables for ingredients, their costs per unit, and complex recipes, allowing for dynamic and accurate cost calculations as recipes and ingredient prices change.
* **Core Logic & Data Handling:** The pricing and profit calculation logic was implemented using **NumPy** for efficient data manipulation. This included building a system that could handle various units of measurement (e.g., cups, teaspoons, grams) and automatically compute the total ingredient cost for any given recipe.
* **Project Management:** The entire codebase is managed using **Poetry** for dependency management and a `Makefile` to automate common development tasks like testing and deployment, ensuring the project remains organized and easy to maintain.

## Impact & Results

This tool provides a practical, real-world solution that significantly streamlines the operational and financial aspects of running a small business.

* **Enhanced Business Insight:** The application gives my wife a clear, data-driven view of her profit margins. By seeing a visual breakdown of ingredient costs, labor, and profit, she can make informed decisions on pricing, promotions, and recipe adjustments.
* **User-Centric Design:** By focusing on the user experience with a simple Streamlit interface, the tool is accessible and intuitive, even for someone without a technical background. This proves my ability to translate complex technical concepts into a usable product.
* **Showcase of Versatility:** This project highlights my ability to apply my core skills in software development, data management, and system architecture to a completely new domain, demonstrating adaptability and a passion for creating impactful solutions.

## Demonstration

You can interact with the live version of the tool here:

* **Live Demo (Deployed on Render):** [https://bakery-pricing-tool.onrender.com/](https://bakery-pricing-tool.onrender.com/)