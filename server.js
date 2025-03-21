const express = require('express')
const path = require('path');
const cors = require('cors')
const cookieParser = require('cookie-parser')
const dotenv = require('dotenv')
const authRoutes = require('./routes/authRoutes')
const menuRoutes = require('./routes/menuRoutes')
const menuItemRoutes = require('./routes/menuItemRoutes')
const connectDB = require('./config/db')


dotenv.config()
connectDB()

const app = express()

const allowedOrigins = ['https://govagamon.netlify.app', 'http://localhost:5173'];

app.use(cors({
    origin: allowedOrigins, 
    credentials: true,
}));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.json());
app.use(cookieParser());

//routes
app.use('/api/auth', authRoutes)
app.use("/api/menus", menuRoutes); 
app.use("/api/menuItem",menuItemRoutes)



app.listen(process.env.PORT || 5000, ()=>console.log(`Server running on PORT ${process.env.PORT}`))
