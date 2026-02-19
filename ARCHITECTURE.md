# SPYWEB Digital Fortress - Complete Architecture

## 🎯 System Overview

Your SPYWEB project has **three main components** working together:

```
┌─────────────────────────────────────────────────────────────┐
│                    SPYWEB Architecture                       │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────────┐      ┌──────────────┐                    │
│  │   Frontend   │      │ Admin Panel  │                     │
│  │  (Port 8080) │      │ (Port 3000)  │                     │
│  │              │      │              │                     │
│  │ Public Site  │      │   Manage     │                     │
│  │ for Visitors │      │   Content    │                     │
│  └──────┬───────┘      └──────┬───────┘                    │
│         │                      │                             │
│         └──────────┬───────────┘                            │
│                    │                                         │
│                    ▼                                         │
│            ┌──────────────┐                                 │
│            │   Backend    │                                 │
│            │ (Port 5000)  │                                 │
│            │              │                                 │
│            │  REST API    │                                 │
│            │  + MongoDB   │                                 │
│            └──────────────┘                                 │
└─────────────────────────────────────────────────────────────┘
```

## 📦 Components

### 1. Frontend Website (Port 8080)

**Purpose**: Public-facing website for visitors

- **Location**: `./` (root directory)
- **URL**: http://localhost:8080
- **For**: Regular users/visitors
- **Features**:
  - Home page
  - Services showcase
  - Projects portfolio
  - Contact form
  - About section

### 2. Admin Panel (Port 3000)

**Purpose**: Admin interface to manage website content

- **Location**: `./spyweb-digital-fortress`
- **URL**: http://localhost:3000
- **For**: You (the admin)
- **Features**:
  - Dashboard
  - Manage Clients
  - Manage Projects
  - Manage Services
  - Manage Contacts
  - Update About section

### 3. Backend API (Port 5000)

**Purpose**: Server that both frontend and admin connect to

- **Location**: `./backend`
- **URL**: http://localhost:5000/api
- **For**: Data storage and API
- **Technologies**: Node.js + Express + MongoDB

## 🚀 How to Run Everything

Open **three terminals** and run:

**Terminal 1 - Backend API:**

```bash
npm run dev:backend
```

**Terminal 2 - Admin Panel:**

```bash
npm run dev:admin
```

**Terminal 3 - Frontend Website:**

```bash
npm run dev
```

## 🔗 How They Connect

1. **Frontend Website** → Calls Backend API to:
   - Display services
   - Show projects
   - Submit contact forms
   - Display company info

2. **Admin Panel** → Calls Backend API to:
   - Add/edit/delete clients
   - Manage projects
   - Update services
   - View contact submissions
   - Update about section

3. **Backend API** → Stores everything in MongoDB:
   - All client data
   - All project data
   - All service data
   - All contact form submissions
   - Company information

## 📝 Typical Workflow

1. **Admin (You)** logs into Admin Panel (port 3000)
2. **Admin** adds/updates content (clients, projects, services)
3. **Backend** saves changes to database
4. **Visitors** see updated content on Frontend Website (port 8080)

## 🌐 URLs Summary

| Service          | Port | URL                       | Who Uses It     |
| ---------------- | ---- | ------------------------- | --------------- |
| Frontend Website | 8080 | http://localhost:8080     | Public visitors |
| Admin Panel      | 3000 | http://localhost:3000     | You (admin)     |
| Backend API      | 5000 | http://localhost:5000/api | Both (internal) |

## 🔐 Security Note

- **Admin Panel**: Should require login (protected routes)
- **Frontend Website**: Public access
- **Backend API**: Serves both securely
