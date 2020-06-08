const express = require('express');
const connectDB = require('./config/db');

const app = express();
const port = process.env.PORT || 5000;

// Database connection
connectDB();

// Init middleware
app.use(express.json({ extended: false }));

app.get('/',(req,res) => {
    res.json({
        msg: 'Welcome to the ContactKeeper API...'
    });
});

// Define routes
app.use('/api/users',require('./routes/users'));
app.use('/api/auth',require('./routes/auth'));
app.use('/api/contacts',require('./routes/contacts'));

app.listen(port,() => console.log(`Server started on port ${port}`));