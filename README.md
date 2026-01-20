# Sample App

Web application built with **React + Vite** and a simple **Express mock server**.
The project is intended for local development and learning purposes and is ready to be deployed on **GitHub Pages**.

---

## 🧱 Tech Stack

### Frontend

- React 18
- Vite
- TypeScript
- React Router
- Formik + Yup
- Sass

### Backend (mock server)

- Node.js
- Express
- JWT (jsonwebtoken)
- bcrypt
- File-based storage (`users.json`)

---

## 📦 Requirements

Before running the project, make sure you have installed:

- **Node.js** (recommended version: >= 18)
- **npm**

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone <repository-url>
cd sample-app
```

---

## ▶️ Frontend – running the application

### Install dependencies

From the project root directory:

```bash
npm install
```

### Start development server

```bash
npm run dev
```

The application will be available at:

```
http://localhost:5173
```

---

## 🖥️ Backend – mock server

The backend (mock API) is located in:

```
src/server
```

### Install server dependencies

```bash
cd src/server
npm install
```

---

### 🔐 Environment variables

To run the server correctly, you need to create an `.env` file.

📍 **Location:**

```
src/server/.env
```

📄 **Content:**

```env
SECRET_KEY="your_secret_key_here"
```

ℹ️ **Important notes:**

- `SECRET_KEY` can be **any random string**
- It is used only for signing JWT tokens
- This is a **local development / mock server**, not a production setup
- Do **NOT** commit the `.env` file to the repository

✅ Example value:

```env
SECRET_KEY="265b71444a6ec14ca438e5abe909d016c8547f7d94efb127eab9c7e48f532400"
```

---

### ▶️ Run backend server

From the `src/server` directory:

```bash
npm run live
```

The server will start on:

```
http://localhost:3000
```

---

## 🔄 Application flow

To work with the full application locally:

1. Start the **backend server** (`npm run live` in `src/server`)
2. Start the **frontend** (`npm run dev` in project root)
3. Open the browser at `http://localhost:5173`

---

## 🧪 Available Scripts (Frontend)

From the project root:

```bash
npm run dev        # start development server
npm run build      # build production version
npm run preview    # preview production build
npm run lint       # run ESLint
npm run test       # run tests (Vitest)
```

---

## 📝 Notes

- The backend is a **mock server** intended only for local development.
- User data is stored locally in a `users.json` file inside the server directory.
- Authentication is handled using **JWT**.
- The project structure and workflow are prepared for deployment on **GitHub Pages**.

---

## ✅ Project status

✔️ Development finished
✔️ Ready for release
✔️ Ready for GitHub Pages deployment
