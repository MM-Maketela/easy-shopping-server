import client_services from "../services/client.service.js";

let {addProduct, getProducts, getProductById, updateProduct, removeProduct} = client_services

function handleBody(body, files){
    let _body  = {}
    const image0 = files[0].buffer
    const image1 = files[1].buffer
    const image2 = files[2].buffer
    const image3 = files[3].buffer

    
    _body = {...body,image0,image1,image2,image3}
    return _body
}

function handleImagesFromDatabase(data){
    let _results = []
    for(let i =0; i < data.length; i++ ){
        let _product={
            id:data[i].id,
            productName: data[i].productName,
            category: data[i].category,
            price:data[i].price,
            discount: data[i].discount,
            details: data[i].details,
            new: data[i].new,
            inStock: data[i].inStock,
            image1:data[i]['image0'].toString('base64'),
            image2:data[i]['image1'].toString('base64'),
            image3:data[i]['image2'].toString('base64'),
            image4:data[i]['image3'].toString('base64'),
        }
       _results.push(_product)
        
    }
    return _results
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
                    data:handleImagesFromDatabase(results)
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
                    success:1,
                    data:results
                })
        })
    },
    updateProduct:(req, res)=>{
        const body = handleBody(req.body, req.files)
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
                success:1,
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
            if(!results) return res.json({
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