const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000
const { uri } = require('./db_context')
const db = require('./models/model')

db.mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Connected to the database!')
    })
    .catch((err) => {
        console.log('Cannot connect to the database!', err)
        process.exit()
    })

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
