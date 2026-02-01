<h1 align="center">🍕 Foodify</h1>
<h3 align="center">Full-Stack Food Ordering Web Application (MERN Stack)</h3>

<p align="center">
  Foodify is a full-stack food ordering web application built using the 
  <strong>MERN stack</strong> — MongoDB, Express.js, React.js, and Node.js.  
  It provides users with a platform to browse food items, manage carts, 
  place orders, and allows admins to manage products and orders. :contentReference[oaicite:2]{index=2}
</p>

<hr/>

<h2>🚀 Features</h2>

<h3>👤 User Features</h3>
<ul>
  <li>Browse food categories and items</li>
  <li>View detailed information about food</li>
  <li>Add food items to cart</li>
  <li>Place orders</li>
  <li>Track order status</li>
  <li>Responsive and intuitive UI</li>
</ul>

<h3>🛠 Admin Features</h3>
<ul>
  <li>Add, edit, and delete food items</li>
  <li>View all orders</li>
  <li>Update order status</li>
</ul>

<hr/>

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

<hr/>

<h2>📁 Project Structure</h2>

<pre>
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
</pre>

<p>
This structure separates the backend API from the frontend UI for better modularity
and easier development workflows. :contentReference[oaicite:3]{index=3}
</p>

<hr/>

<h2>⚙️ Installation & Setup</h2>

<h3>1️⃣ Clone the Repository</h3>
<pre>
git clone https://github.com/sumanth965/Foodify.git
cd Foodify
</pre>

<h3>2️⃣ Backend Setup</h3>
<pre>
cd backend
npm install
</pre>

<p>
Create a <code>.env</code> file in the <code>backend</code> folder with the following variables:
</p>

<pre>
MONGO_URI=your_mongodb_connection_string
PORT=4000
JWT_SECRET=your_secret_key
</pre>

<p>Run the backend server:</p>

<pre>
npm run dev
</pre>

<h3>3️⃣ Frontend Setup</h3>
<pre>
cd frontend
npm install
npm start
</pre>

<hr/>

<h2>📡 Sample API Endpoints</h2>

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
    <td>GET</td>
    <td>/api/foods/:id</td>
    <td>Fetch a single food item</td>
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

<p>
Note: Some API routes may require authentication tokens. :contentReference[oaicite:4]{index=4}
</p>

<hr/>

<h2>🗄 Database Design</h2>
<p>
Foodify uses MongoDB for data persistence. The key collections include:
</p>
<ul>
  <li>Users</li>
  <li>Food Items</li>
  <li>Orders</li>
</ul>

<p>
Refer to the <code>REST_DATABASE.docx</code> file for detailed schema documentation. :contentReference[oaicite:5]{index=5}
</p>

<hr/>

<h2>📜 License</h2>
<p>This project is licensed under the <strong>MIT License</strong>. :contentReference[oaicite:6]{index=6}</p>

<hr/>

<h2>👨‍💻 Author</h2>
<p>
<strong>Sumanth</strong><br/>
GitHub: <a href="https://github.com/sumanth965" target="_blank">github.com/sumanth965</a> :contentReference[oaicite:7]{index=7}
</p>

<p align="center">
  ⭐ If you like this project, don’t forget to give it a star!
</p>
