<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Foodify | MERN Food Ordering App</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <style>
    body {
      margin: 0;
      font-family: Arial, Helvetica, sans-serif;
      background-color: #0d1117;
      color: #c9d1d9;
      line-height: 1.7;
    }

    .container {
      max-width: 1000px;
      margin: auto;
      padding: 40px 20px;
    }

    h1, h2, h3 {
      color: #f0f6fc;
    }

    h1 {
      font-size: 2.5rem;
      margin-bottom: 10px;
    }

    h2 {
      margin-top: 40px;
      border-bottom: 1px solid #30363d;
      padding-bottom: 8px;
    }

    p {
      color: #8b949e;
    }

    ul {
      margin-left: 20px;
    }

    li {
      margin-bottom: 8px;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 15px;
    }

    table th, table td {
      border: 1px solid #30363d;
      padding: 12px;
      text-align: left;
    }

    table th {
      background-color: #161b22;
      color: #f0f6fc;
    }

    pre {
      background-color: #161b22;
      padding: 15px;
      border-radius: 6px;
      overflow-x: auto;
      margin-top: 10px;
    }

    code {
      color: #79c0ff;
    }

    a {
      color: #58a6ff;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

    .footer {
      margin-top: 60px;
      text-align: center;
      font-size: 0.9rem;
      color: #8b949e;
    }
  </style>
</head>

<body>
  <div class="container">

    <h1>🍔 Foodify</h1>
    <p><strong>Full-Stack Food Ordering Web Application (MERN Stack)</strong></p>

    <p>
      Foodify is a full-stack food ordering web application built using the
      <strong>MERN stack</strong> — MongoDB, Express.js, React.js, and Node.js.
      Users can browse food items, manage carts, and place orders, while admins
      manage products and orders.
    </p>

    <h2>🚀 Features</h2>

    <h3>👤 User Features</h3>
    <ul>
      <li>Browse food categories and items</li>
      <li>View detailed food information</li>
      <li>Add items to cart</li>
      <li>Place food orders</li>
      <li>Track order status</li>
      <li>Responsive UI</li>
    </ul>

    <h3>🛠 Admin Features</h3>
    <ul>
      <li>Add, update, and delete food items</li>
      <li>View all customer orders</li>
      <li>Update order status</li>
    </ul>

    <h2>🧠 Tech Stack</h2>
    <table>
      <tr>
        <th>Layer</th>
        <th>Technologies</th>
      </tr>
      <tr>
        <td>Frontend</td>
        <td>React.js, CSS / Tailwind, React Router</td>
      </tr>
      <tr>
        <td>Backend</td>
        <td>Node.js, Express.js</td>
      </tr>
      <tr>
        <td>Database</td>
        <td>MongoDB, Mongoose</td>
      </tr>
      <tr>
        <td>Authentication</td>
        <td>JWT</td>
      </tr>
    </table>

    <h2>📁 Project Structure</h2>
    <pre><code>
Foodify/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   └── package.json
│
├── Installation Method.txt
├── REST_DATABASE.docx
└── README.md
    </code></pre>

    <h2>⚙️ Installation & Setup</h2>

    <h3>1️⃣ Clone Repository</h3>
    <pre><code>
git clone https://github.com/sumanth965/Foodify.git
cd Foodify
    </code></pre>

    <h3>2️⃣ Backend Setup</h3>
    <pre><code>
cd backend
npm install
npm run dev
    </code></pre>

    <h3>3️⃣ Frontend Setup</h3>
    <pre><code>
cd frontend
npm install
npm start
    </code></pre>

    <h2>🔗 Sample API Endpoints</h2>
    <table>
      <tr>
        <th>Method</th>
        <th>Endpoint</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>GET</td>
        <td>/api/foods</td>
        <td>Fetch all food items</td>
      </tr>
      <tr>
        <td>POST</td>
        <td>/api/orders</td>
        <td>Place a new order</td>
      </tr>
      <tr>
        <td>PUT</td>
        <td>/api/orders/:id</td>
        <td>Update order status</td>
      </tr>
    </table>

    <h2>📜 License</h2>
    <p>This project is licensed under the <strong>MIT License</strong>.</p>

    <h2>👨‍💻 Author</h2>
    <p>
      <strong>Sumanth</strong><br>
      GitHub:
      <a href="https://github.com/sumanth965" target="_blank">
        https://github.com/sumanth965
      </a>
    </p>

    <div class="footer">
      ⭐ If you like this project, don’t forget to give it a star!
    </div>

  </div>
</body>
</html>
