import client_services from "../services/client.service.js";

let {addProduct, getProducts, getProductById, updateProduct, removeProduct} = client_services

let client_controller = {

    addProduct:(req, res)=>{
        const body = req.body;
        const salt = genSaltSync(10);
        addProduct(body,(error,results)=>{
            if(error) {
                console.log(error)
                return res.status(500).json({
                success:0, 
                 message: 'Database connection error',
            })
        }
        return res.status(200).json({
            success:1,
            data:results
        })

        })
    },
    getProducts:(req, res)=>{
        getProducts((error, results)=>{
                if(error) return res.status(500).json({
                    success:0,
                    message:error
                })
                if(!results) return res.json({
                    success:0,
                    message:results
                })

                return res.status(200).json({
                    success:1,
                    data:results
                })
        })
    },
    getProductById:(req, res)=>{
        const id = req.params.id

        getProductById(id, (error, results)=>{

                if(error) return res.status(500).json({
                    success:0,
                    message:error
                })
                if(!results) return res.json({
                    success:0,
                    message:results
                })
                return res.status(200).json({
                    success:0,
                    data:results
                })
        })
    },
    updateProduct:(req, res)=>{
        const body = req.body

        updateProduct(body, (error, results)=>{
            if(error) return res.status(500).json({
                success:0,
                message:error
            })
            if(!results) return res.json({
                success:0,
                message:error
            })
            return res.status(200).json({
                success:0,
                data:results
            })

        })
    },

    removeProduct:(req, res)=>{
        const id = req.params.id
        removeProduct(id, (error, results)=>{
            if(error) return res.json({
                success:0,
                message:error
            })
            if(!error) return res.json({
                success:0,
                message:error
            })
            return res.json(
               {
                success:1,
                data:results
               }
            )
        })

    }
}
export default client_controller