const db = require("../config/db")

class StagModal{

static async getStag(){
    return new Promise (resolve =>{
        db.query("select * from stagiaire",[],(error , result)=>{
            if(!error){
                resolve(result)
            }
        })
    })
}

static async addstag(nom_stag , prenom_stag, structA){
    return new Promise (resolve =>{
        db.query(
            "insert into stagiaire (nom_stag,prenom_stag,structA) values(?,?,?)",
            [nom_stag , prenom_stag ,structA ],
            (error , result) =>{error ? resolve(false) : resolve(true)}
        )
    }) 
}

static async deletestag(id){
    return new Promise (resolve =>{
        db.query(
            "delete from stagiaire where id=?",
            [id],(error ,result)=>{
                error ? resolve(false) : resolve(true)
            }
        )
    })
}

static async edit(id,nom_stag, prenom_stag,structA,structO){
    return new Promise (resolve =>{
        db.query(
            "update stagiaire set nom_stag=?,prenom_stag,structA=?,structO=? where id=?",
            [nom_stag, prenom_stag,structA,structO,id],
            (error,result)=>{
                error ? resolve(false) : resolve(true)
            }
        )
    })
}

}

module.exports = StagModal;