const OuvrModal = require("../model/Ouvr")

class OuvrController{

    static async getallOuvr(req,res){
        var result = await OuvrModal.getOuvr();
        if(result){
            res.send(result)
        }
    }

    static async addnewOuvr(req,res){
        var cote = req.body.cote
        var titre = req.body.titre
        var auteur = req.body.auteur
        var editeur = req.body.editeur
        var theme = req.body.theme
        var type = req.body.type
        var lieu = req.body.lieu
        var annee = req.body.annee
        var result = await OuvrModal.addOuvr(
            cote , titre , auteur , editeur,theme,type,lieu,annee);
        result ? res.send("Ouvrage added") : res.send("Error cant add Ouvrage")
    }

    static async deleteOuvr(req,res){
        const id = req.body.id
        var result = await OuvrModal.deleteOuvr(id)
        result ? res.send("Ouvrage deleted") : res.send("Error cant delete Ouvrage")
    }


    static async updateOuvr(req,res){
        const id = req.body.id
        var cote = req.body.cote
        var titre = req.body.titre
        var auteur = req.body.auteur
        var editeur = req.body.editeur
        var theme = req.body.theme
        var type = req.body.type
        var lieu = req.body.lieu
        var annee = req.body.annee
        var mots_cles = req.body.mots_cles
        var result = await OuvrModal.edit(
            id,cote , titre , auteur , editeur,theme,type,lieu,annee,mots_cles)
        result ? res.send("Ouvriaire updated") : res.send("Error cant update Ouvriaire")
    }

}

module.exports = OuvrController;