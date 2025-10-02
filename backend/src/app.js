const express = require('express');
const aiRoutes = require('./routes/ai.routes')
const cors = require('cors')
const path = require('path')

const app = express()

const _dirname = path.resolve()



app.use(express.json())

const corsOptions = {
    origin: "https://ai-code-reviewer-vkaj.onrender.com",
    credentials: true
}
app.use(cors())


app.use('/ai', aiRoutes)

app.use(express.static(path.join(_dirname, "/frontend/dist")))
app.get("/", (_, res) => {
    res.sendFile(path.resolve(_dirname, "frontend", "dist", "imdex.html"))
})

//Export server to server.js file
module.exports = app