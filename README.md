🚀 Professional CI/CD Pipeline: Animated Web App & Monitoring
Project Name: my-cicd-project

Host Environment: Ubuntu 22.04 LTS (WSL2)

Version: 3.0 (Production Ready)

📋 Project Overview
A fully automated, "Set and Forget" CI/CD pipeline that deploys a modern, animated Node.js application. This project features high-fidelity visual monitoring, automated server maintenance, and a sleek glassmorphism UI.

🛠 Tech Stack & Tools
Version Control: GitHub (Source of Truth)

Automation Server: Jenkins (Pipeline-as-Code)

Containerization: Docker & Docker Compose

Frontend/Backend: Node.js (Express) with CSS3 Animations

Monitoring Dashboard: Uptime Kuma (Real-time Telemetry)

Visual Pipeline: Jenkins Blue Ocean

🏗 Comprehensive Development Stages
🔹 Stage 1-8: Infrastructure & Environment Setup
Core Installation: Deployed Docker, Docker Compose, Java 17, and Jenkins on an Ubuntu host.

Permission Hardening: Resolved "Permission Denied" errors by adding the jenkins user to the docker group and configuring the Docker socket (/var/run/docker.sock) with 666 permissions.

Service Orchestration: Created a multi-container docker-compose.yml defining the web application and the monitoring suite.

🔹 Stage 9-16: Automation Logic (The Jenkins Pipeline)
Declarative Pipeline: Authored a Jenkinsfile with distinct stages for Checkout, Build, Test, and Push/Deploy.

Continuous Deployment: Configured GitHub Webhooks to trigger builds automatically upon code commits.

Self-Cleaning Infrastructure: Integrated a post { always } block in Jenkins to run docker system prune -f, ensuring the Ubuntu server never runs out of disk space from old images.

🔹 Stage 17-24: UI/UX Design & Animation
Glassmorphism UI: Implemented a modern design with frosted-glass effects and backdrop filters.

CSS Animations: Added a dynamic "shifting gradient" background and a "pulsing health dot" to visually represent system uptime.

Deployment Swap: Verified zero-downtime updates where Docker replaces the old container with the new animated version instantly.

🔹 Stage 25-27: Advanced Monitoring & Troubleshooting
Visual Telemetry: Deployed Uptime Kuma to monitor application heartbeat, response times, and protocol health.

Pipeline Visualization: Enabled Blue Ocean to provide a graphical, node-based view of the CI/CD flow.

Network Calibration: Resolved EPROTO SSL errors by aligning internal container protocols to standard HTTP and mapping port 3001 for external dashboard access.

🎨 Visual Monitoring Interface
🔧 Installation & Usage
Clone the Repo:

Bash

git clone https://github.com/YOUR_USERNAME/my-cicd-project.git
cd my-cicd-project
Start Services:

Bash

sudo service jenkins start
docker-compose up -d --build
Access Points:

Animated App: http://localhost:80

Jenkins Dashboard: http://localhost:8080

Monitoring UI: http://localhost:3001

🏁 Final Project Outcomes
Zero Manual Effort: Changes in app.js are live on the server within seconds of a git push.

Full Observability: System health is tracked via a professional dashboard and visual pipeline stages.

Disk Efficiency: Automated cleanup routines prevent storage bloat.

Final README Reflection
Action Taken: Synthesized all 27 technical stages—from initial Ubuntu setup to advanced Uptime Kuma monitoring and CSS animation logic—into a single professional repository document.

Status: Project Handover Complete.


## 🖼 Visual Gallery

### 1. Animated Application UI (Live States)
| Blue Theme | Pink Theme |
|---|---|
| ![App Blue](./screenshots/app-blue.jpg) | ![App Pink](./screenshots/app-pink.jpg) |

### 2. Monitoring Dashboard (Uptime Kuma)
> Real-time heartbeat monitoring showing 31.72% uptime (Initial start) and a healthy "UP" status.
![Monitoring Status](./screenshots/dashboard-live.png)
