## Todo Frontend

## Description:

This is a simple todo app where user can add, delete and update the todo list.

### Live Demo: https://todo-eight-tan.vercel.app/signin

### Credentials:

Email: jisan@gmail.com
Password: 000000

### Setup Instructions:

-   Setup the backend first.
-   Server Installation guideline: [click here](https://github.com/Jisan-Hasan/todo-backend/blob/main/README.md)
-   Clone the repo

```
git clone https://github.com/Jisan-Hasan/todo-frontend
```

-   Run `yarn install` to install all the dependencies
-   Create a `.env.local` file in the root directory
-   Add the environment variables in the `.env.local` file as like as `.env.example` file
-   Run `yarn dev` to start the development server
-   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technologies Used:

-   Next.js
-   React.js
-   TypeScript
-   Redux
-   Tailwind CSS
-   Flowbite React
-   React Hook Form
-   React Icons
-   React Hot Toast

### Functional Requirements:

-   User can sign up with email and password
-   User can sign in with email and password
-   User can add todo
-   User can delete todo
-   User can update todo
-   User can filter todo by status
-   User can sign out

### Server API Endpoints

### Base URL: `https://todo-backend-tan.vercel.app/api/v1`

#### Auth

-   `POST /auth/signup` - Register a new user
-   `POST /auth/signin` - Login an existing user

#### Task

-   `GET /task` - Get all tasks
-   `GET /task?searchTerm=&page=1&limit=10&sortBy=createdAt&sortOrder=asc&status=pending` - Get all tasks with query params
-   `GET /task/:id` - Get a task by id
-   `POST /task` - Create a new task
-   `PATCH /task/:id` - Update a task by id
-   `DELETE /task/:id` - Delete a task by id

### API Postman Documentation

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/19592116-7300289b-8d33-442b-acaf-fbbca28e7831?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D19592116-7300289b-8d33-442b-acaf-fbbca28e7831%26entityType%3Dcollection%26workspaceId%3D9d49722c-4462-48f2-96c4-12bff3a0e61c)
