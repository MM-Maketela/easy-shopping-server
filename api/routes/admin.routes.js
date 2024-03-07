import express from 'express'
import admin_controller from '../controllers/admin.controller.js'
let { addClient, getClientById, getClients, updateClient, removeClient} = admin_controller
let admin_router = express.Router()

admin_router.post("/", addClient)
admin_router.get("/", getClients)
admin_router.get("/:id",getClientById)
admin_router.patch("/:id", updateClient)
admin_router.delete("/:id",removeClient)
export  default admin_router;