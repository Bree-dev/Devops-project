# Task Manager Application – DevOps Project

## 📌 Project Overview
This project is a **Task Manager REST API** built using **Node.js, Express, and MongoDB Atlas**, and containerized using **Docker**.  
The main goal of this project is to demonstrate **backend development**, **Dockerization**, and **basic DevOps practices** including environment variable management and readiness for CI/CD.

---

## 🎯 Objective
- Build a simple backend API for managing tasks
- Connect the application to MongoDB Atlas
- Containerize the application using Docker
- Prepare the project for GitHub and CI/CD pipelines

---

## 🛠️ Technologies Used
- **Node.js (v18)** – Backend runtime
- **Express.js** – Web framework
- **MongoDB Atlas** – Cloud database
- **Mongoose** – MongoDB ODM
- **Docker** – Containerization
- **Git & GitHub** – Version control
- **Nodemon** – Development server

---

## 📂 Project Structure

Task-Manager-App/
│
├── src/
│ ├── app.js
│ ├── config/
│ │ └── db.js
│ ├── controllers/
│ │ └── taskController.js
│ ├── models/
│ │ └── Task.js
│ └── routes/
│ └── taskRoutes.js
│
├── .env
├── .dockerignore
├── Dockerfile
├── package.json
├── README.md


---

## ⚙️ Application Features
- Create a task
- Retrieve all tasks
- Update a task
- Delete a task
- RESTful API endpoints
- MongoDB Atlas integration

---

## 🔗 API Endpoints
| Method | Endpoint              | Description            |
|------|----------------------|------------------------|
| GET  | /api/tasks           | Get all tasks          |
| POST | /api/tasks           | Create a new task      |
| PUT  | /api/tasks/:id       | Update a task          |
| DELETE | /api/tasks/:id     | Delete a task          |

---

## 🧪 Local Setup (Without Docker)

### 1. Install dependencies
```bash
npm install

2. Create .env file
PORT=3000
MONGO_URI=your_mongodb_atlas_connection_string

3. Start the server
npm run dev

🐳 Docker Setup
1. Dockerfile

The application is containerized using Node.js 18 Alpine for a lightweight image.

2. Build Docker Image
docker build -t task-manager-app .

3. Run Docker Container
docker run --env-file .env -p 3000:3000 task-manager-app

🧠 DevOps Notes

Environment variables are not automatically available inside Docker containers

MongoDB connection initially failed due to missing environment variables

The issue was resolved using Docker’s --env-file option

Whitespace errors in .env variables were fixed to ensure Docker compatibility

📌 Future Improvements

Add CI/CD using GitHub Actions

Push Docker image to Docker Hub

Deploy to cloud platforms (AWS / Render / Railway)

Add frontend UI




📚 References

https://nodejs.org

https://expressjs.com

https://mongoosejs.com

https://docs.docker.com

https://www.mongodb.com/docs/atlas/

