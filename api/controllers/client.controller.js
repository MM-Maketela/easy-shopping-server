import client_services from "../services/client.service.js";

let {addProduct, getProducts, getProductById, updateProduct, removeProduct} = client_services

function handleBody(body, files){
    let _body  = {}
    const image0 = files[0].buffer.toString('base64')
    const image1 = files[1].buffer.toString('base64')
    const image2 = files[2].buffer.toString('base64')
    const image3 = files[3].buffer.toString('base64')
    
    _body = {...body,image0,image1,image2,image3}
    return _body
}

let client_controller = {

    addProduct:(req, res)=>{
        const body = handleBody(req.body, req.files)
        addProduct(body,(error,results)=>{
            if(error) {
                console.log(error)
                return res.status(500).json({
                success:0, 
                 message: error,
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