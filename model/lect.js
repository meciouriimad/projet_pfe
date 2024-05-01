const db = require("../config/db")

class LectModal{

static async getlect(){
    return new Promise (resolve =>{
        db.query("select * from lecteur",[],(error , result)=>{
            if(!error){
                resolve(result)
            }
        })
    })
}

static async addlect(nom_lecteur , direction_lect , num_post,prenom_lect){
    return new Promise (resolve =>{
        db.query(
            "insert into lecteur (nom_lecteur,direction_lect,num_post,prenom_lect) values(?,?,?,?)",
            [nom_lecteur ,direction_lect ,num_post,prenom_lect],
            (error , result) =>{error ? resolve(false) : resolve(true)}
        )
    }) 
}

static async deletelect(id){
    return new Promise (resolve =>{
        db.query(
            "delete from lecteur where id=?",
            [id],(error ,result)=>{
                error ? resolve(false) : resolve(true)
            }
        )
    })
}

static async edit(id,nom_lecteur, direction_lect , num_post,prenom_lect){
    return new Promise (resolve =>{
        db.query(
            "update lecteur set nom_lecteur=?,direction_lect=?,num_post=?,prenom_lect=? where id=?",
            [nom_lecteur , direction_lect , num_post,prenom_lect,id],
            (error,result)=>{
                error ? resolve(false) : resolve(true)
            }
        )
    })
}

}

module.exports = LectModal;