const StagModal = require("../model/Stage")

class StagController{

    static async getallstag(req,res){
        var result = await StagModal.getStag();
        if(result){
            res.send(result)
        }
    }

    static async addnewStag(req,res){
        var nom_stag = req.body.nom_stag
        var prenom_stag = req.body.prenom_stag
        var structA = req.body.structA
        var result = await StagModal.addstag(nom_stag , prenom_stag , structA);
        result ? res.send("stagiaire added") : res.send("Error cant add stagiaire")
    }

    static async deleteStag(req,res){
        const id = req.body.id
        var result = await StagModal.deletestag(id)
        result ? res.send("stagiaire deleted") : res.send("Error cant delete stagiaire")
    }


    static async updateStag(req,res){
        const id = req.body.id
        var nom_stag = req.body.nom_stag
        var prenom_stag = req.body.prenom_stag
        var structA = req.body.structA
        var structO = req.body.structO
        var result = await StagModal.edit(id,nom_stag,prenom_stag,structA,structO)
        result ? res.send("stagiaire updated") : res.send("Error cant update stagiaire")
    }

}

module.exports = StagController;