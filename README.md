
# TODO LIST Application

![Screenshot of the TODO LIST application](./src/assets/images/screenshot.png)

A modern and simple **TODO LIST** application built with **React**, **Vite**, and **Express**. This application allows users to manage their tasks efficiently, with features such as task creation, deletion, and due date tracking.

## Features

- Add tasks with a title and a due date.
- Automatically assigns "Unnamed Task" for tasks without a title.
- Clean and modern user interface.
- Backend powered by Node.js and Express for task storage.
- Built with React for fast and dynamic user experience.
- Powered by Vite for optimized performance during development and production.

---

## Installation

Follow these steps to set up and run the project locally:

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 16+ recommended)
- [Git](https://git-scm.com/)

---

### Steps

#### 1. Clone the repository:
Run the following command to clone the repository:

```bash
git clone https://github.com/hidiegorguez/Todolist
```

#### 2. Navigate to the project directory:
Use the following command to move into the project folder:

```bash
cd Todolist
```

---

### Frontend Setup

#### 3. Navigate to the frontend:
The frontend files are in the root directory. Install the required dependencies by running:

```bash
npm install
```

#### 4. Start the development server:
Launch the frontend locally by running:

```bash
npm run dev
```

Then open your browser and visit:

```
http://localhost:5173
```

#### 5. Build for production:
To generate an optimized build for deployment, use:

```bash
npm run build
```

#### 6. Preview the production build:
Preview the production build locally using:

```bash
npm run preview
```

---

### Backend Setup

#### 7. Navigate to the backend directory:
Go to the backend folder:

```bash
cd backend
```

#### 8. Install backend dependencies:
Run the following command to install dependencies for the backend:

```bash
npm install
```

#### 9. Start the backend server:
Launch the backend server by running:

```bash
npm start
```

The backend server will run on:

```
http://localhost:5001
```

---

## Project Structure

```
Todolist/
├── backend/         # Backend server (Node.js + Express)
│   ├── server.js    # Backend server file
│   ├── package.json # Backend dependencies
│   └── ...
├── src/             # Frontend source code (React + Vite)
├── public/          # Public files for the frontend
├── package.json     # Frontend dependencies
└── README.md        # Documentation
```

---

## Troubleshooting

### Common Issues

1. **Port Conflicts**:
   - If you see an error like `EADDRINUSE`, it means the port is already in use.
   - Change the port number in `server.js` (e.g., `const port = 3000;`) and restart the server.

2. **Server Not Running**:
   - Ensure the backend server is running before accessing the frontend.

---

## License

This project is licensed under the MIT License.
