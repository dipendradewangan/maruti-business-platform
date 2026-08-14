# Maruti Business Platform

> A scalable business management platform for Maruti Enterprises.

---

## 📌 Project Overview

Maruti Business Platform is a business management software system being
developed to digitize and manage the operational workflow of Maruti
Enterprises.

The platform is designed to manage customers, employees, workflows,
documents, installations, permissions, and business operations through
a centralized system.

The system is being developed with scalability, security, maintainability,
and future DevOps automation in mind.

---

# 🎯 Project Goals

The primary goals of the platform are:

- Centralize business operations.
- Manage customers and employees.
- Manage employee roles and permissions.
- Implement level-based workflows.
- Track employee activities.
- Manage installation schedules.
- Maintain complete audit history.
- Automate database initialization.
- Manage database schema through migrations.
- Prepare the application for CI/CD deployment.
- Build a scalable and maintainable software architecture.

---

# 🏗️ Technology Stack

## Frontend

- React.js
- JavaScript
- Tailwind CSS

## Backend

- Node.js
- Express.js
- REST API

## Database

- MySQL 8.0

## Development Tools

- Git
- GitHub
- VS Code
- MySQL Workbench
- Postman

## DevOps

Planned / upcoming:

- Docker
- Docker Compose
- CI/CD
- Cloud Deployment
- Application Monitoring

---

# 📂 Project Structure

```text
maruti-business-platform/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   │
│   │   ├── database/
│   │   │   └── migrationRunner.js
│   │   │
│   │   ├── migrations/
│   │   │   └── 001_create_schema_migrations.sql
│   │   │
│   │   └── ...
│   │
│   ├── .env
│   ├── .env.example
│   ├── .gitignore
│   ├── package.json
│   └── server.js
│
├── frontend/
│
├── docs/
│   ├── engineering-log/
│   │   └── 2026-08-14-database-migration-auto-initialization.md
│   │
│   ├── database/
│   │   └── database-architecture.md
│   │
│   └── git/
│       └── development-workflow.md
│
└── README.md
```