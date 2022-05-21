import express from "express"
import route from "./routes/index"


const app = express()
const port = 3000


app.use(express.json())
app.use("/users", route)


app.listen(port, () => {
    console.log(`Server initialized at port ${port}`)
})
