# 📇 Contact Management Backend

A **Node.js + Express + MongoDB** backend for managing contacts with user authentication.  
This API supports **JWT authentication**, **CRUD operations** for contacts, and follows a modular MVC structure.

---

## 🚀 Features
- **User Authentication**
  - Register new users
  - Login with email & password
  - Protected routes using JWT
- **Contact Management**
  - Create, Read, Update, Delete contacts
  - Each user can only access their own contacts
- **Error Handling**
  - Centralized error middleware
- **Security**
  - Passwords hashed with `bcrypt`
  - JWT token expiration

---

## 🛠 Tech Stack
- **Backend Framework**: [Express.js](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/)
- **Authentication**: [JWT](https://jwt.io/)
- **Password Hashing**: [bcrypt](https://github.com/kelektiv/node.bcrypt.js)
- **Environment Variables**: [dotenv](https://github.com/motdotla/dotenv)
- **Error Handling**: [express-async-handler](https://www.npmjs.com/package/express-async-handler)

---

## 📂 Project Structure
CONTACT_MANAGEMENT/

│
├── controllers/ 

│ ├── contactcontroller.js 

│ └── usercontroller.js 

│

├── middlewares/

│ ├── errorhandler.js

│ └── validatetokenhandler.js 

│

├── models/ 

│ ├── contactmodel.js 

│ └── usermodel.js

│

├── routes/

│ ├── contactroutes.js

│ └── userroutes.js

│

├── .env

├── .gitignore

├── connection.js

├── constants.js 

├── package.json

├── package-lock.json

└── server.js

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/usermihir/contact-management.git
cd contact-management
```
2️⃣ Install Dependencies
```bash
npm install
```
3️⃣ Set Environment Variables
```bash
PORT=5000
MONGO_URI=mongodb://localhost:27017/contacts
JWT_SECRET_KEY=your_secret_key
```
4️⃣ Start the Server
```bash
npm start
```
The server will start at:
```bash
http://localhost:5000
```
📜 License
```bash
This project is licensed under the MIT License.
```
🤝 Contributing
```bash
If you want, I can also add a "How to Deploy on Render/Heroku" section so you can make it live online.  
Do you want me to include that?
```
