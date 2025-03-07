# Todo App with Angular and Node.js

This is a simple Todo application built using **Angular** for the front-end and **Node.js** (with Express) for the back-end. The app uses **MongoDB** as the database to store the todos.

### Table of Contents

1. [Architecture Explanation](#architecture-explanation)
2. [Prerequisites](#prerequisites)
3. [Setup Node.js Server](#setup-nodejs-server)
4. [Setup Angular Client](#setup-angular-client)
5. [MongoDB Setup](#mongodb-setup)
6. [Start the Application](#start-the-application)
6. [Application explanation](#application-explanation)
---
### Architecture Explanation

The Todo application follows a **client-server architecture** with a **three-tier architecture** design, comprising:

- **Frontend (Client-side)**: Built with **Angular 16** to provide a rich, interactive user interface.
- **Backend (Server-side)**: Built with **Node.js** and **Express** to serve APIs that interact with the database.
- **Database**: **MongoDB**, a NoSQL database, is used to store and manage todo data.
- **Lock machinsm**: I lock editing todo by cache it with todo id, this way when other user want to edit the todo he can't get the data - i also added ttl in case if something went wrong and the session ended unexpectedly
- **Live Update**: My architecture use node js event emitter with sse on the angular size, when you have any edit\add\delete the server raise event and the client consume it, sadly due the time i had this code does not work but it does exists for review.

### Prerequisites

Before starting, make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (Version 22 or higher recommended)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/try/download/community) (or use MongoDB Atlas for a cloud instance)
- [Angular CLI](https://angular.io/cli) (If you don't have it, install via `npm install -g @angular/cli`)

---

### Setup Node.js Server

1. **Clone the repository** (or download the server code):
    ```bash
    git clone https://github.com/speedfly1/Todo
    cd Todo
    ```

2. **Install dependencies** for the Node.js backend:
    ```bash
    cd ServerSide
    npm install
    ```

3. **Set up MongoDB**:
    - If you're using **local MongoDB**, make sure your MongoDB service is running on the default port (`localhost:27017`).
    - If you're using **MongoDB Atlas**, you will need to create a cluster and get the connection URI. Update the connection URI in the `server/config.js` file.

4. **MongoDB Configuration**:
    - Open `ServerSide/config.js` and update the MongoDB URI if necessary.
    - The server is set up to connect to a MongoDB database called `HomeAssignment`.

5. **Start the server**:
    ```bash
    npm run start
    ```

    This will start the Node.js server on `http://localhost:3000`. The server exposes the following routes:

    - `GET /todos`: Fetch all todos
    - `GET /todo/:id`: Fetch todo by id
    - `POST /todo`: Create a new todo
    - `PUT /todos/:id`: Update an existing todo
    - `PATCH /todos/:id`: Update todo status
    - `DELETE /todos/:id`: Delete a todo

---

### Setup Angular Client

1. **Navigate to the Angular client folder**:
    ```bash
    cd ClientSide\TodoApp
    ```

2. **Install dependencies** for the Angular application:
    ```bash
    npm install
    ```

3. **Update the API URL** in the Angular service:
    - Open `src/app//service/todo.service.ts` and update the API base URL to match your Node.js server. For example:
        ```typescript
        private apiUrl = 'http://localhost:3000/todos';
        ```

4. **Run the Angular development server**:
    ```bash
    ng serve
    ```

    This will start the Angular client on `http://localhost:4200`. The app will now communicate with the Node.js backend to create, read, update, and delete todos.

---

### MongoDB Setup

In your **MongoDB database**, you should have a collection named `TODO`. You don't need to manually create this collection as the app will automatically create it when a document is added for the first time.

Each **todo document** will have the following structure:

#### **Todo Schema:**

```javascript
{
  _id: ObjectId,       // Automatically generated by MongoDB
  name: String,       // Title of the todo
  description: String, // Optional description of the todo
  Status: enum,  // Boolean indicating if the todo is completed or not
}

---

### Application explanation

1. When the application start the default route is todolist
2. You can see all the list of the todo, chnage todo status or delete, and navigate to edit route to edit the todo.
3. Once you click save on the edit you will navigate back to todolist
4. When click add you will navigate to add route.
5. After you click save on add route you will navigate to edit route with the id you got from the server.
6. After you click save again you will return to todolist route