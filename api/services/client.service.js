import databaseConnection from '../config/database.js'

let client_services = {

    addProduct:(body, callback)=>{

        databaseConnection.query(
            `INSERT INTO  products(id, name, category, price, discount,details, new, inStock, image1, image2, image3, image4) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                body.id,
                body.productName,
                body.category, 
                body.price, 
                body.discount, 
                body.details, 
                body.new, 
                body.inStock,
                body.image0,  
                body.image1,
                body.image2, 
                body.image3

            ],
            (error, results, fields)=>{
                if(error){
                    callback(error)
                return
                }
                callback(null, results)
                return
                

            }
        )

    },

    getProducts:callback=>{
        databaseConnection.query(
            `SELECT * FROM products`,[],
            (error, results, fields)=>{

                if(error){
                    callback(error)
                return
                }
                callback(null, results)
                return

            }
        )

    },

    getProductById:(id, callback)=>{
        databaseConnection.query(
            `SELECT * FROM products  WHERE id=?`,
            [id],
            (error, results, fields)=>{

                if(error){
                    callback(error)
                return
                }
                callback(null, results)
                return

            }
        )
    },
    updateProduct:(body, callback)=>{
        databaseConnection.query(
            `UPDATE products SET  name =?, category=?, price=?, discount=?, details=?, new=?, inStock=?, image1=?, image2=?, image3=?, image4=? WHERE id=?`,
            [
                body.productName,
                body.category, 
                body.price, 
                body.discount, 
                body.details, 
                body.new, 
                body.inStock,
                body.image0, 
                body.image1,
                body.image2, 
                body.image3 ,
                body.id
            ],
            (error, results, fields)=>{

                if(error){
                    callback(error)
                return
                }
                callback(null, results)
                return

            }
        )
    },
    removeProduct:(id, callback)=>{
        databaseConnection.query(
            `DELETE FROM products WHERE id=?`,
            [id],
            (error, results, fields)=>{

                if(error){
                    callback(error)
                return
                }
                callback(null, results)
                return
            }
        )
    }

}
export default client_services