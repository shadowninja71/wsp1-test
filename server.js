import express from "express"

const app = express()

app.get("/", (req, res) =>{
    res.send("hello te23 välkommen!<h1>")
})

app.get("/about", (req, res) => {
    res.json({
        "message": "hatisk textbox"
    })
})

app.listen(3000, () => {
    console.log("server is runing on http://localhost:3000")
})