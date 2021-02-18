const express = require('express')

const PORT = process.env.PORT || 5050

const app = express()


app.get('/', (req, res) => {
   res.send('Hello')
})

app.listen(PORT, () => {
   console.log(`server started on port ${PORT}`)
})
