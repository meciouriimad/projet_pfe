const db = require("../config/db")

class NormeModal{

static async getnorme(){
    return new Promise (resolve =>{
        db.query("select * from normes",[],(error , result)=>{
            if(!error){
                resolve(result)
            }
        })
    })
}

static async addnorme(type,norme,titre,categorie,date_norme,annee,norme_maj,doc,date_sn){
    return new Promise (resolve =>{
        db.query(
            "insert into normes (type,norme,titre,categorie,date_norme,annee,norme_maj,doc,date_sn) values(?,?,?,?,?,?,?,?,?)",
            [type,norme,titre,categorie,date_norme,annee,norme_maj,doc,date_sn],
            (error , result) =>{error ? resolve(false) : resolve(true)}
        )
    }) 
}

static async deletenorme(id){
    return new Promise (resolve =>{
        db.query(
            "delete from norme where id=?",
            [id],(error ,result)=>{
                error ? resolve(false) : resolve(true)
            }
        )
    })
}

static async edit(id,norme , title , categorie,updated,file,date){
    return new Promise (resolve =>{
        db.query(
            "update norme set norme=?,title=?,categorie=?,updted=?,file=?,date=? where id=?",
            [norme ,title,categorie,updated,file,date,id],
            (error,result)=>{
                error ? resolve(false) : resolve(true)
            }
        )
    })
}

}

module.exports = NormeModal;