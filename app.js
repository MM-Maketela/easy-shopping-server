import express from "express"
import dotenv from "dotenv"
import cors from 'cors'
import client_router from "./api/routes/client.routes.js"
import user_router from "./api/routes/user.routes.js"
import admin_router from './api/routes/admin.routes.js'
import multer from 'multer'
dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

const storage = multer.memoryStorage({
    destination: function (req, file, cb) {
      cb(null,  __dirname +'/uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  const upload = multer({ storage: storage })

// admin 
// app.use('user/products',admin_router)
// client
app.use('/client/products',upload.any(),client_router)

//user
// app.use('user/products',user_router)

app.listen(process.env.SERVER_PORT, ()=>{
    console.log(`Server running at port ${process.env.SERVER_PORT}`)
})