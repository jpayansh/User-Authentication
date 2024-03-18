Authentication User Project
This project focuses on implementing user authentication using Mongoose, React, Node.js, and Express. It includes features such as user registration, login, encryption of passwords using bcryptjs, storing user data in the database, JWT-based cookie authentication on the client-side, API integration using Axios, and resolving CORS errors using the Cors.js package.

Technologies Used
Node.js
Express.js
Mongoose
React.js
Axios
bcryptjs
JWT (JSON Web Tokens)
Cors.js
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/jpayansh/User-Authentication.git
Navigate to the project directory:

bash
Copy code
cd authentication-user-project
Install server dependencies:

bash
Copy code
npm install
Navigate to the client directory:

bash
Copy code
cd client
Install client dependencies:

bash
Copy code
cd server
npm install
Go back to the project root directory:

bash
Copy code
cd ..
Configuration
Create a .env file in the root directory and add the following environment variables:

plaintext
Copy code
PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
Replace your_mongodb_connection_string with your actual MongoDB connection string.

Replace your_jwt_secret_key with a secure secret key for JWT token generation.

Usage
Start the server:

bash
Copy code
npm start
Open your browser and navigate to http://localhost:4000 to access the application.

bash
Copy code
cd server
npm start

API Endpoints
POST /signup: Register a new user.
POST /login: Login an existing user.
POST /: For Verifying the user.

User passwords are encrypted using bcryptjs before storing in the database.
JWT tokens are used for cookie-based authentication on the client-side.
Cors.js package is used to handle Cross-Origin Resource Sharing (CORS) errors.
License
This project is licensed under the MIT License - see the LICENSE file for details.
