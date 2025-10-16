🐱 Cat Fact Profile API

This is a simple Node.js + Express project that demonstrates how to build a REST API endpoint (/me) returning user profile information along with a dynamic cat fact fetched from a third-party API.
It includes proper error handling, timeouts, environment configuration, and developer tooling with Nodemon.

🚀 Features

1. /me endpoint returning:

   1a. Static user profile data

   1b. A random cat fact from CatFact Ninja API

   1c. Current UTC timestamp

2. Proper error handling middleware

3. Timeout control for external API requests

4. Uses ES Modules (import/export) syntax

5. Configurable via .env file

6. Auto-restart in development with Nodemon

7. Clean and modular folder structure

🧱 Tech Stack

1. Node.js

2. Express.js

3. dotenv

4. morgan

5.   nodemon

🗂 Folder Structure
cat-fact-profile-api/
│
├── src/
│   ├── app.js
│   ├── routes/
│   │   └── me.route.js
│   ├── middleware/
│   │   └── errorHandler.js
│   └── utils/
│       └── fetchWithTimeout.js
│
├── .env
├── nodemon.json
├── package.json
└── server.js


⚙️ Installation & Setup

1. Clone the repo

git clone https://github.com/your-username/cat-fact-profile-api.git
cd cat-fact-profile-api


2. Install dependencies

npm install


3. Create an environment file

echo "PORT=3000" > .env


4. Start in development mode

npm run dev


5. Or run in production mode

npm start


🧩 API Endpoint
GET /me

Response:

{
  "status": "success",
  "user": {
    "email": "shehuabdulkadir.dev@gmail.com",
    "name": "Shehu Abdulkadir",
    "stack": "Node.js, Express.js, NestJS, TypeORM, PostgreSQL"
  },
  "timestamp": "2025-10-11T11:42:10.234Z",
  "fact": "Cats sleep 70% of their lives."
}


Error Responses:

Timeout (504)

{
  "status": "error",
  "message": "Request to Cat Fact API timed out. Please try again."
}


Server Error (500)

{
  "status": "error",
  "message": "Internal Server Error"
}


🧠 Developer Notes

1. Uses AbortController to cancel API calls after 5 seconds.

2. Global error handling middleware for consistent JSON responses.

3. Morgan logger enabled for development debugging.

4. Modular route and middleware structure for scalability.
