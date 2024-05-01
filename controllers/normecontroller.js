const NormeModal = require("../model/Norme")

class Normecontroller{

    static async getallnorme(req,res){
        var result = await NormeModal.getnorme();
        if(result){
            res.send(result)
        }
    }

    static async addnewnorme(req,res){
        var norme = req.body.norme
        var titre = req.body.titre
        var type = req.body.type
        var categorie = req.body.categorie
        var date_norme = req.body.date_norme
        var norme_maj = req.body.norme_maj
        var doc = req.body.doc
        var date_sn = req.body.date_sn
        var annee = req.body.annee
        var result = await NormeModal.addnorme(
            type,norme,titre,categorie,date_norme,annee,norme_maj,doc,date_sn);
        result ? res.send("norme added") : res.send("Error cant add norme")
    }

    static async deletenorme(req,res){
        const id = req.body.id
        var result = await NormeModal.deletenorme(id)
        result ? res.send("norme deleted") : res.send("Error cant delete norme")
    }


    static async updatenorme(req,res){
        const id = req.body.id
        var norme = req.body.norme
        var titre = req.body.titre
        var type = req.body.type
        var categorie = req.body.categorie
        var date_norme = req.body.date_norme
        var norme_maj = req.body.norme_maj
        var doc = req.body.doc
        var date_sn = req.body.date_sn
        var annee = req.body.annee

        var result = await NormeModal.edit(id,
            annee,categorie,date_norme,date_sn,doc,norme,norme_maj,titre,type)
        result ? res.send("norme updated") : res.send("Error cant update norme")
    }

}

module.exports = Normecontroller;