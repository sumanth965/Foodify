<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Foodify | Full Stack Food Ordering App</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Google Font -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">

    <style>
        :root {
            --bg: #0f172a;
            --card: #020617;
            --text: #e5e7eb;
            --muted: #94a3b8;
            --accent: #22c55e;
            --border: #1e293b;
            --code: #020617;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Inter', sans-serif;
        }

        body {
            background: linear-gradient(180deg, #020617, #0f172a);
            color: var(--text);
            line-height: 1.7;
        }

        .container {
            max-width: 1100px;
            margin: auto;
            padding: 40px 20px;
        }

        h1, h2, h3 {
            color: white;
            margin-bottom: 10px;
        }

        h1 {
            font-size: 2.6rem;
        }

        h2 {
            font-size: 1.8rem;
            border-bottom: 2px solid var(--border);
            padding-bottom: 8px;
            margin-top: 40px;
        }

        p {
            color: var(--muted);
            margin-bottom: 15px;
        }

        .badge {
            display: inline-block;
            background: rgba(34,197,94,0.15);
            color: var(--accent);
            padding: 6px 14px;
            border-radius: 999px;
            font-size: 0.85rem;
            margin-bottom: 20px;
        }

        .card {
            background: rgba(2,6,23,0.7);
            border: 1px solid var(--border);
            border-radius: 14px;
            padding: 25px;
            margin-top: 20px;
            box-shadow: 0 0 40px rgba(0,0,0,0.35);
        }

        ul {
            padding-left: 20px;
        }

        li {
            margin-bottom: 8px;
            color: var(--muted);
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 15px;
        }

        table th, table td {
            border: 1px solid var(--border);
            padding: 12px;
            text-align: left;
        }

        table th {
            background: #020617;
            color: white;
        }

        table td {
            color: var(--muted);
        }

        pre {
            background: var(--code);
            border: 1px solid var(--border);
            border-radius: 10px;
            padding: 18px;
            overflow-x: auto;
            margin-top: 10px;
        }

        code {
            color: #a5f3fc;
            font-size: 0.9rem;
        }

        .footer {
            text-align: center;
            margin-top: 60px;
            color: var(--muted);
            font-size: 0.9rem;
        }

        a {
            color: var(--accent);
            text-decoration: none;
        }

        a:hover {
            text-decoration: underline;
        }
    </style>
</head>

<body>

<div class="container">

    <span class="badge">🚀 MERN Stack Project</span>
    <h1>Foodify</h1>
    <p>
        <strong>Foodify</strong> is a full-stack <b>Food Ordering Web Application</b> built using the
        <b>MERN stack</b> (MongoDB, Express.js, React.js, Node.js).  
        It allows users to browse food items, manage carts, place orders, and enables admins to manage products and orders.
    </p>

    <div class="card">
        <h2>✨ Features</h2>

        <h3>👤 User Side</h3>
        <ul>
            <li>Browse food categories & items</li>
            <li>View food details</li>
            <li>Add items to cart</li>
            <li>Place orders</li>
            <li>Track order status</li>
            <li>Responsive UI</li>
        </ul>

        <h3>🛠 Admin Panel</h3>
        <ul>
            <li>Add / Edit / Delete food items</li>
            <li>View all orders</li>
            <li>Update order status</li>
        </ul>
    </div>

    <div class="card">
        <h2>🧠 Tech Stack</h2>
        <table>
            <tr>
                <th>Frontend</th>
                <th>Backend</th>
                <th>Database</th>
            </tr>
            <tr>
                <td>React.js</td>
                <td>Node.js</td>
                <td>MongoDB</td>
            </tr>
            <tr>
                <td>CSS / Tailwind</td>
                <td>Express.js</td>
                <td>Mongoose</td>
            </tr>
            <tr>
                <td>React Router</td>
                <td>REST APIs</td>
                <td>JWT Auth</td>
            </tr>
        </table>
    </div>

    <div class="card">
        <h2>📁 Project Structure</h2>
        <pre><code>
Foodify/
│
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
        </code></pre>
    </div>

    <div class="card">
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
    </div>

    <div class="card">
        <h2>🔗 Sample API Endpoints</h2>
        <table>
            <tr>
                <th>Method</th>
                <th>Route</th>
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
                <td>Place new order</td>
            </tr>
            <tr>
                <td>PUT</td>
                <td>/api/orders/:id</td>
                <td>Update order status</td>
            </tr>
        </table>
    </div>

    <div class="card">
        <h2>📜 License</h2>
        <p>This project is licensed under the <b>MIT License</b>.</p>
    </div>

    <div class="card">
        <h2>👨‍💻 Author</h2>
        <p>
            <strong>Sumanth</strong><br>
            GitHub:
            <a href="https://github.com/sumanth965" target="_blank">
                github.com/sumanth965
            </a>
        </p>
    </div>

    <div class="footer">
        © 2026 Foodify — Full Stack MERN Application
    </div>

</div>

</body>
</html>
