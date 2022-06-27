const express = require("express")
const app = express()

app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())

const personRoutes = require('./routes/Person')

app.use('/person', personRoutes)

app.listen(3000)
