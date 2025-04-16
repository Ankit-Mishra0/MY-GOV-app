# 🇮🇳 MyGov Web Application

🚧 **Work in Progress** 🚧  
This web application aims to provide users with information about political leaders, allow them to submit feedback, and interact with various government-related topics.  
**Note:** The project is still under development, and several key features are yet to be implemented.

---

## ✅ Current Status

- ✅ Basic frontend structure is in place.
- ✅ UI components for displaying leaders, feedback, and government schemes.
- ✅ National and regional political parties have been added.
- ✅ Tutorial system for first-time users using Reactour.
- ✅ Backend integration for user authentication (signup and login).
- ✅ **Leader Info on Click** – Clicking on a political leader’s image fetches their full details using the Gemini API.

---

## 🚀 Upcoming Features

- 💾 **Persistent Data Storage** – Currently, feedback, complaints, and advice are stored temporarily in the frontend state. Backend and database integration for these features is in progress.
- ⚡ **Enhanced UI/UX** – UI improvements, animations, and responsive design updates.

---

## 🛠️ How to Run the Project

### **Frontend Setup**

1. **Clone this repository**

   ```bash
   git clone https://github.com/Ankit-Mishra0/MY-GOV-app.git
   ```

2. **Navigate to the project folder**

   ```bash
   cd MY-GOV-app
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

The website will start in development mode at `http://localhost:3000`.

---

### **Backend Setup**

1. **Navigate to the backend folder**

   ```bash
   cd backend
   ```

2. **Install backend dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Create a `.env` file in the `backend` folder with the following content:
     ```env
     PORT=5000
     JWT_SECRET=your-secret-key
     DATABASE_URL=your-database-url
     GEMINI_API_KEY=your-gemini-api-key
     ```

4. **Start the backend server**
   ```bash
   node server.js
   ```

The backend server will start at `http://localhost:5000`.

---

## 🖼️ Screenshots

<img width="1470" alt="Screenshot 2025-04-12 at 6 34 18 PM" src="https://github.com/user-attachments/assets/e59d4a6f-8897-4f2f-a1d2-7dac358b21e7" />
<img width="1470" alt="Screenshot 2025-04-12 at 6 34 34 PM" src="https://github.com/user-attachments/assets/0158cfaa-e6eb-4746-9cbc-7eda991c68b6" />
<img width="1470" alt="Screenshot 2025-04-12 at 6 34 53 PM" src="https://github.com/user-attachments/assets/09db01fe-f70a-4165-b8f2-8618142db3ab" />
<img width="1470" alt="Screenshot 2025-04-12 at 6 36 22 PM" src="https://github.com/user-attachments/assets/a7f82786-bfb1-4197-ac13-000432401669" />
<img width="1470" alt="Screenshot 2025-04-12 at 6 36 33 PM" src="https://github.com/user-attachments/assets/fbeb1195-3546-455c-bd7f-ae770ed0e167" />

---

## 🤝 Contributions

Suggestions and contributions are welcome!  
To contribute:

- Fork the repository.
- Create a new branch.
- Submit a pull request with your improvements or fixes.

---

## 📌 Stay tuned for updates!

Follow this project to stay updated as I continue building features that empower citizens to better engage with their government.

---