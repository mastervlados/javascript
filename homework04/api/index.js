const express = require('express')
const cors = require('cors')
const userRouter = require('./user.routes')
const PORT = 8080

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', userRouter)

app.listen(PORT, function() {
    console.log(`API is started on port ${PORT}`)
})




