# Co-Create AI – Intelligent Workflow System

This project focuses on developing an intelligent workflow management system using AI.  
The system will allow users to generate, manage, and store workflows dynamically.

The main idea is to combine backend development with AI integration to create structured workflows automatically.

Live Demo
🔗 Frontend (Vercel): https://co-create-ai-ochre.vercel.app
⚙️ Backend (Render): https://co-create-ai.onrender.com

👉 This project is fully deployed and accessible online (not localhost).

---

## Project Objective

- Build a backend server using Node.js and Express
- Connect application with MongoDB database
- Generate workflows using AI (planned)
- Implement authentication system
- Enable secure API access
- Develop frontend interface (upcoming phase)

---

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- OpenAI API (planned)
- React (Frontend – upcoming)

---

## Project Structure (Current)

server/
 ├── index.js  
 ├── models/  
 ├── routes/  

---

## Current Progress (Day 1)

- Backend initialized
- Express server setup completed
- MongoDB connection established
- Basic project structure created
- Initial repository setup on GitHub

## Current Progress (Day 2)

- Workflow schema created
- Steps structure implemented
- POST /api/workflows route added
- GET /api/workflows route added
- API tested using Postman
- MongoDB integration verified

## Current Progress (Day 3)

- Created User schema using Mongoose.
- Implemented authentication routes.
- Added POST /api/auth/register endpoint.
- Added POST /api/auth/login endpoint.
- Integrated password hashing using bcrypt.
- Implemented JWT token generation for secure login.
- Successfully tested authentication using Postman.

## Current Progress (Day 4)

- Implemented JWT authentication middleware.
- Protected workflow creation route using token verification.
- Only authenticated users can create workflows.
- Tested secured endpoints using Postman.

## Current Progress (Day 5)

- Initialized React frontend using Create React App
- Created frontend folder inside project repository
- Installed required dependencies (axios, react-router-dom)
- Created basic page structure for frontend
- Implemented Login, Register, and Dashboard pages
- Configured routing using React Router
- Verified frontend runs successfully on localhost


## Current Progress (Day 6)

- Implemented workflow creation functionality in the dashboard.
- Added automatic workflow step generation (AI-ready structure).
- Developed workflow cards to display workflow details dynamically.
- Implemented step-based progress tracking using checkboxes.
- Added progress bar to visualize workflow completion percentage.
- Integrated analytics charts (Pie Chart and Bar Chart) using Recharts.
-Connected dashboard frontend with backend workflow APIs.
- Improved dashboard UI with responsive cards and analytics layout.
- Verified workflow creation, progress tracking, and charts working correctly.



## Current Progress (Deployment & Integration)

-Successfully deployed backend on Render.
-Configured MongoDB Atlas cloud database for production.
-Fixed database connection issues (replaced localhost with Atlas URI).
-Enabled CORS for frontend-backend communication.
-Successfully deployed frontend on Vercel.
-Connected frontend with backend using environment variables.
-Verified full CRUD operations working on deployed application.
-Tested workflow creation, update, and deletion on live system.
-Ensured real-time progress tracking works after deployment.
-Fixed API integration and deployment-related bugs.
-Confirmed application runs on live URL (not localhost).


## Current Progress (UI, Profile & Authentication Updates)

-Improved Profile page UI layout and alignment.
-Added profile image upload with preview functionality.
-Enabled profile image persistence using localStorage.
-Implemented click-to-upload profile image feature.
-Added Productivity Score, Weekly Activity, and Achievements sections.
-Fixed login persistence using localStorage.
-Ensured user session remains after page refresh.
-Improved authentication flow and validation.
-Added workflow search functionality on dashboard.
-Implemented workflow filtering (All / Completed / Pending).
-Fixed profile image reset issue after logout/login.
-Fixed repeated login requirement issue.
-Optimized UI consistency and user experience.
-Verified all features working smoothly after updates.


## Team Contribution Plan

- Member 1: Backend & AI Integration
- Member 2: Authentication & Security
- Member 3: Documentation, CI/CD & Frontend


---

## Future Development Plan

- Add workflow schema
- Implement CRUD operations
- Integrate AI workflow generation
- Add user authentication
- Protect routes using middleware
- Deploy application this looks more realist then latest one but i am aksing last time is it showing that what i have done in or i have builed backend in one day and please exaplain what ythis maens



