import express from "express"
import dotenv from "dotenv"
import client_router from "./api/routes/client.routes.js"
import user_router from "./api/routes/user.routes.js"
import multer from 'multer'
dotenv.config()
const app = express()
app.use(express.json())


const storage = multer.memoryStorage({
    destination: function (req, file, cb) {
      cb(null, '/uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  const upload = multer({ storage: storage })

// client
app.use('/client/products',upload.any(),client_router)

//user
// app.use('user/products',user_router)

app.listen(process.env.SERVER_PORT, ()=>{
    console.log(`Server running at port ${process.env.SERVER_PORT}`)
})git 