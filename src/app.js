const express = require('express')
require('./db/conn.js')
const cors = require('cors');
const userRouter = require('./routers/users-router')

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json())
app.use(userRouter)

app.listen(port, () => {
    console.log(`Server run at http://localhost:${port}`)
})