# ai-tools-directory
# 🧠 AI Tools Directory

A full-stack web app to explore a curated list of AI tools across various categories like content creation, SEO, video/audio editing, and more. Users can browse tools, view details, and log in with email or Google.

---

## ✨ Features

- 🔐 Firebase Authentication (Email/Password & Google Sign-In)
- 📂 Categorized AI Tools (SEO, Writing, Image Generation, etc.)
- 📋 Tool Detail Pages (with pricing, features, use cases, etc.)
- 🌓 Dark Theme UI with clean layout
- 🔧 Admin seed scripts for tools and tool details

---

## 🛠 Tech Stack

- **Frontend**: EJS Templates, HTML, CSS
- **Backend**: Node.js, Express.js
- **Database**: Firebase Firestore
- **Authentication**: Firebase Auth (Client & Admin SDK)

---

## 🚀 How to Run Locally

1. **Clone the repo**
   ```bash
   > git clone https://github.com/Durgasrujana57/ai-tools-directory.git
   > cd ai-tools-directory
2. Install dependencies
   > npm install
3.Firebase Setup
   > Create a Firebase project at https://firebase.google.com
   > Enable Authentication: Email/Password and Google
   > Create a Firestore database and add key.json for admin access
   > Copy your Firebase config into firebase.js
4.Run the app
   > node app.js
   > Open browser at http://localhost:3000

----

## 📁 Folder Structure

ai-tools-directory/
├── app.js
├── firebase.js
├── .gitignore
├── README.md
├── package.json
├── seed-tools.js
├── seed-toolsDetails.js
├── public/
│ ├── css/
│ │ └── style.css
│ └── images/
│ └── categories/
│ ├── ai-assistants.png
│ ├── seo-tools.png
│ └── ...
├── routes/
│ ├── auth.js
│ ├── index.js
│ └── tools.js
├── views/
│ ├── index.ejs
│ ├── login.ejs
│ ├── signup.ejs
│ ├── dashboard.ejs
│ ├── tools.ejs
│ └── tool-details.ejs
     
