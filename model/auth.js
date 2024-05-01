const db = require("../config/db")

class Auth{
    static Req_Login(){
        return new Promise (resolve =>{
            db.query("select * from admin",[],(error , result)=>{
                if(!error){
                    resolve(result)
                }
            })
        })
    }
}

module.exports = Auth;