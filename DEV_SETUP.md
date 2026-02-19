# SPYWEB - Final Architecture

## 🎯 Dual-Service System

Congratulations! Your system is now correctly configured with just **two services**:

### 1. **Web Application** (Port 3000)

This acts as your **Complete Frontend**:

- **Public Website** (`/`) - For visitors
- **Admin Panel** (`/admin`) - For you to manage content
- **URL**: http://localhost:3000

_Note: This replaces the old separate frontend on port 8080._

### 2. **Backend API** (Port 5000)

The data server connecting to MongoDB.

- **URL**: http://localhost:5000/api

## 🚀 How to Run

Just two terminals needed:

**Terminal 1 - Web App (Frontend + Admin):**

```bash
npm run dev:frontend
```

_(Or simply `npm run dev`)_

**Terminal 2 - Backend API:**

```bash
npm run dev:backend
```

## 📝 What Happened to Port 8080?

The separate frontend on port 8080 was redundant and incorrect. It has been stopped. Now, everything (Public Site + Admin Panel) runs from the single application on port 3000.

## 🔗 URLs Summary

| Service         | Port | URL                   | Purpose                   |
| --------------- | ---- | --------------------- | ------------------------- |
| **Web App**     | 3000 | http://localhost:3000 | Public Site & Admin Panel |
| **Backend API** | 5000 | http://localhost:5000 | Data API                  |

Use this setup for all future development.
