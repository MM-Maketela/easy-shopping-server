import databaseConnection from '../config/database.js'

let admin_services = {

    addClient:(body, callback)=>{

        databaseConnection.query(
            `INSERT INTO  clients(id, name, surname, email, contact, address, companyName, registration, companyEmail, companyContact) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                body.id,
                body.name,
                body.surname, 
                body.email, 
                body.contact, 
                body.address, 
                body.companyName, 
                body.registration,
                body.companyEmail,  
                body.companyContact
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

    getClients:(callback) =>{
        databaseConnection.query(
            `SELECT * FROM clients`,[],
            (error, results, fields)=>{

                if(error){
                    callback(error)
                return
                }
                else if (!results){
                    callback(results)
                }
                callback(null, results)
                return

            }
        )

    },

    getClientById:(id, callback)=>{
        databaseConnection.query(
            `SELECT * FROM clients  WHERE id=?`,
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
    updateClient:(body, callback)=>{
        databaseConnection.query(
            `UPDATE clients SET  name =?, surname=?, email=?, contact=?, address=?, companyName=?, registration=?, companyEmail=?, companyContact=? WHERE id=?`,
            [
                body.name,
                body.surname, 
                body.email, 
                body.contact, 
                body.address, 
                body.companyName, 
                body.registration,
                body.companyEmail,  
                body.companyContact,
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
    removeClient:(id, callback)=>{
        databaseConnection.query(
            `DELETE FROM clients WHERE id=?`,
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
export default admin_services