import express from 'express'
import client_controller from '../controllers/client.controller.js';
let { addProduct, getProductById, getProducts, updateProduct, removeProduct} = client_controller
let client_router = express.Router()

client_router.post("/", addProduct)
client_router.get("/", getProducts)
client_router.get("/:id",getProductById)
client_router.patch("/:id", updateProduct)
client_router.delete("/:id",removeProduct)


export  default client_router;