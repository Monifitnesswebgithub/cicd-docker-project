# 🚀 Professional CI/CD Pipeline: Animated Web App & Monitoring

**Project Name:** `my-cicd-project`  
**Host Environment:** Ubuntu 22.04 LTS (WSL2)  
**Version:** 3.0 (Production Ready)

---

## 📺 Project Showcase

### 🎨 Animated Application UI
The application features a modern Glassmorphism design with a dynamic, shifting gradient background and a real-time status indicator.

| Theme State: Blue | Theme State: Pink |
|---|---|
| ![App Blue](./screenshots/app-blue.jpg) | ![App Pink](./screenshots/app-pink.jpg) |

### 📊 Real-Time Monitoring Dashboard
Using **Uptime Kuma**, the system tracks heartbeat signals and response times directly from the Docker network.

> **Status:** ✅ UP | **Avg Response:** 22ms
![Uptime Kuma Dashboard](./screenshots/dashboard-live.png)

---

## 🏗 Comprehensive Development Stages

### 🔹 Stage 1-8: Infrastructure & Environment Setup
* **Core Installation:** Deployed Docker, Docker Compose, Java 17, and Jenkins on an Ubuntu host.
* **Permission Hardening:** Resolved "Permission Denied" errors by adding the `jenkins` user to the `docker` group and configuring the Docker socket (`/var/run/docker.sock`) with `666` permissions.

### 🔹 Stage 9-24: Automation & Visual Pipeline
* **Declarative Pipeline:** Authored a `Jenkinsfile` defining stages for **Checkout**, **Build**, **Test**, and **Deploy**.
* **Visual Logic:** Enabled **Jenkins Blue Ocean** to provide a graphical, node-based view of the CI/CD flow.

### 🔹 Stage 25-27: Advanced Observability
* **Telemetry:** Integrated **Uptime Kuma** to monitor application uptime and handle protocol calibration (HTTP vs HTTPS).
* **Self-Maintenance:** Configured automated cleanup routines (`docker system prune`) within the Jenkins `post` block to manage server storage.

---

## 🛠 Tech Stack
* **Automation:** Jenkins (Pipeline-as-Code)
* **Containerization:** Docker & Docker Compose
* **Frontend:** Node.js (Express) with CSS3 Keyframe Animations
* **Observability:** Uptime Kuma

---

## 🏁 Final Outcome
The project successfully automates the transition from local development to a monitored production environment. By pushing a single commit, the infrastructure builds, tests, and deploys the animated interface while maintaining a 24/7 observability dashboard.


