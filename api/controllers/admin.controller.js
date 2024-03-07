import admin_services from "../services/admin.service.js";


let {addClient, getClients, getClientById, updateClient, removeClient} = admin_services

// function handleBody(body, files){
//     let _body  = {}

//     if(files)
//     {
//     const image0 = files[0].buffer
//     const image1 = files[1].buffer
//     const image2 = files[2].buffer
//     const image3 = files[3].buffer
//     _body = {...body,image0,image1,image2,image3}
//     return _body
//     }
   
//     return body
// }

//to be used in future
// function handleImagesFromDatabase(data){
//     let _results = []
//     for(let i =0; i < data.length; i++ ){
//         let _product={
//             id:data[i].id,
//             name: data[i].name,
//             category: data[i].category,
//             price:data[i].price,
//             discount: data[i].discount,
//             details: data[i].details,
//             new: data[i].new,
//             inStock: data[i].inStock,
//             image1:data[i]['image1'].toString('base64'),
//             image2:data[i]['image2'].toString('base64'),
//             image3:data[i]['image3'].toString('base64'),
//             image4:data[i]['image4'].toString('base64'),
//         }
//        _results.push(_product)
        
//     }
//     return _results
// }
let admin_controller = {

    addClient:(req, res)=>{
        const body = req.body 
        addClient(body,(error,results)=>{
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
    getClients:(req, res)=>{
        getClients((error, results)=>{
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
    getClientById:(req, res)=>{
        const id = req.params.id

        getClientById(id, (error, results)=>{

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
    updateClient:(req, res)=>{
        const body = handleBody(req.body, req.files)
        updateClient(body, (error, results)=>{
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

    removeClient:(req, res)=>{
        const id = req.params.id
        removeClient(id, (error, results)=>{
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
export default admin_controller