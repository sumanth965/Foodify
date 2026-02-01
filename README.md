<h1 align="center">🍔 Foodify</h1>
<h3 align="center">Full-Stack Food Ordering Web Application (MERN Stack)</h3>

<p align="center">
  Foodify is a full-stack food ordering web application developed using the 
  <b>MERN stack</b> — MongoDB, Express.js, React.js, and Node.js.
  It provides a seamless platform for users to browse food items, manage carts, 
  and place orders, while admins can manage food items and customer orders.
</p>

<hr/>

<h2>🚀 Features</h2>

<h3>👤 User Features</h3>
<ul>
  <li>Browse food categories and items</li>
  <li>View detailed food information</li>
  <li>Add food items to cart</li>
  <li>Place food orders</li>
  <li>Track order status</li>
  <li>Responsive and user-friendly UI</li>
</ul>

<h3>🛠 Admin Features</h3>
<ul>
  <li>Add, update, and delete food items</li>
  <li>View all customer orders</li>
  <li>Update order status</li>
</ul>

<hr/>

<h2>🧠 Tech Stack</h2>

<table>
  <tr>
    <th align="left">Layer</th>
    <th align="left">Technologies</th>
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
└── README.md
</pre>

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

<p>Create a <code>.env</code> file inside the <code>backend</code> folder:</p>

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

<h2>🔗 Sample API Endpoints</h2>

<table>
  <tr>
    <th align="left">Method</th>
    <th align="left">Endpoint</th>
    <th align="left">Description</th>
  </tr>
  <tr>
    <td>GET</td>
    <td>/api/foods</td>
    <td>Fetch all food items</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>/api/foods/:id</td>
    <td>Fetch single food item</td>
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

<p><i>Note: Some endpoints are protected and require authentication.</i></p>

<hr/>

<h2>🗄 Database Design</h2>
<p>
The application uses MongoDB collections for <b>Users</b>, <b>Food Items</b>, 
and <b>Orders</b>. Detailed schema information is available in 
<code>REST_DATABASE.docx</code>.
</p>

<hr/>

<h2>📜 License</h2>
<p>This project is licensed under the <b>MIT License</b>.</p>

<hr/>

<h2>👨‍💻 Author</h2>
<p>
<b>Sumanth</b><br/>
GitHub:
<a href="https://github.com/sumanth965" target="_blank">
  https://github.com/sumanth965
</a>
</p>

<hr/>

<p align="center">
  ⭐ If you like this project, don’t forget to give it a star!
</p>
