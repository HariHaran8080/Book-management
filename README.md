# 📚 Book Management API

A simple **Node.js + Express + MongoDB** REST API for managing books.  
You can create, read, update, and delete (CRUD) book details through Postman or any API client.

---

## 🚀 Features

- Create a new book (POST)
- Retrieve all books with pagination (GET)
- Retrieve a single book by ID (GET)
- Update a book (PUT)
- Delete a book (DELETE)
- MongoDB database integration
- CORS enabled
- Environment variables via `.env`

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **ODM:** Mongoose  
- **API Testing:** Postman  

---

## 📁 Project Structure
book-api/
├── routes/
│ └── books.routes.js
├── models/
│ └── book.model.js
├── config/
│ └── config.js
├── .env
├── server.js
├── package.json
└── README.md


---
⚙️ Setup Instructions
1️⃣  Clone the repository
    git clone https://github.com/hariharan-bookapi/book-management-api.git
    cd book-management-api

2️⃣ Install dependencies
    npm install

3️⃣ Set up environment variables
    Create a file named .env in the project root and add the following:
    PORT=3000
    MONGODB_URI=mongodb://127.0.0.1:27017/bookdb

4️⃣ Start MongoDB
  Make sure MongoDB is running locally.
  You can start it using:

  net start MongoDB
  (If you’re using MongoDB Compass or Docker, ensure the service is active.)
  
5️⃣ Run the application
    npm run dev
Once the server starts, you should see:

MongoDB connected
Server running on port 3000

6️⃣ Test the API using Postman

You can test all endpoints such as:

GET http://localhost:3000/books

POST http://localhost:3000/books

PUT http://localhost:3000/books/:id

DELETE http://localhost:3000/books/:id


    
  




