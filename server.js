import express from "express"
import nunjucks from "nunjucks"
const app = express()

app.use(express.static("public"))

nunjucks.configure("views", {
    autoescape: true,
    express: app
})

app.get("/", (req, res) =>{
    res.render("index.njk", {
        title: "vår första dynamistak sida",
        message: "med nunjucks skapar vi magi!"
    })
})

app.listen(3000, () => {
    console.log("server is runing on http://localhost:3000")
})