# Co-Create AI – Intelligent Workflow System

This project focuses on developing an intelligent workflow management system using AI.  
The system will allow users to generate, manage, and store workflows dynamically.

The main idea is to combine backend development with AI integration to create structured workflows automatically.

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



