const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const PORT = process.env.PORT || 3000;
const cors = require('cors');
app.use(cors()); // Enable CORS for all routes

app.use(express.json());
const path= require('path');
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the 'public' directory

const users = []

const server = app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
server.setTimeout(0); // disables request timeout

app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.post('/login', (req, res) => {
const user = { username: req.body.username, password: req.body.password };
users.push(user);
res.status(201).send()


});



// Move /users routes above app.listen and fix user object
app.get('/users', (req, res) => {
  res.json(users)
})
console.log('Request received');
app.post('/users', async(req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = { username: req.body.username, password: hashedPassword };


    users.push(user);
    console.log('User added:', user);
    res.status(201).json(user);
  } catch (err) {
    console.error('Error in /users:', err);
    res.status(500).send();
  }
})
app.post('/user/login', async (req, res) => {
  const user = users.find(u => u.username === req.body.username);
  if (user == null) {
    return res.status(400).send('Cannot find user');
  }
  try {
    if (await bcrypt.compare(req.body.password,user.password)) {
      res.send('Success')

    } else {
      res.send('Not Allowed')
    }
  } catch {
    res.status(500).send()
  }
})
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
