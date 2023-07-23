const express = require('express')
const app = express()
const PORT = 3000

app.get('/main', (req, res) => {
//   res.send('Hello World!')
    res.sendFile('index.html', { root : __dirname})
})


app.get('/', (req, res) => {
        res.sendFile('main.html', { root : __dirname})
    })

app.listen(PORT || process.env.PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})