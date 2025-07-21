# Simple Authentication Demo

This project is a simple demonstration of authentication using Next.js, Iron Session, and cookie-based state management. It showcases basic session handling, protected routes, and form processing within a Next.js environment.

---

## Features

- User login and logout functionality  
- Session management using `iron-session` to securely store user sessions in cookies  
- Protected routes that require authentication to access  
- Basic form handling for user login  
- Simple UI for demonstration purposes  

---

## Technologies Used

- [Next.js](https://nextjs.org/) – React framework for server-side rendering and static site generation  
- [Iron Session](https://github.com/vvo/iron-session) – Lightweight session middleware using encrypted cookies  
- React hooks and context for state management  
- CSS Modules for styling  

---

## Getting Started

### Prerequisites

- Node.js (v14 or newer)  
- npm or yarn  

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mladenvreco/auth-cookie.git
   cd auth-cookie

2. Install dependencies:

npm install
# or
yarn install

3. Run the development server:

npm run dev
# or
yarn dev

4. Open http://localhost:3000 in your browser to see the app.

Usage

Navigate to the login page
Enter "madi" and any password (this demo does not connect to a real backend)
Upon login, you will be redirected to a protected page
You can logout to clear the session

License
This project is licensed under the MIT License.

Contact
Created by Mladen Vrećo.
Feel free to reach out via https://www.linkedin.com/in/mladen-vreco.
