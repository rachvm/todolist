import express from 'express'
import listRouter from './routes/list.js'
import logger from 'morgan'
    
const app = express()
const PORT = process.env.PORT

app.use(logger("dev"))
app.use(express.json())
app.use("/api/list", listRouter)


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})

export default app;