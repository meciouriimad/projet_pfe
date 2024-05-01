const LectModal = require("../model/lect")

class LectController{

    static async getalllect(req,res){
        var result = await LectModal.getlect();
        if(result){
            res.send(result)
        }
    }

    static async addnewlect(req,res){
        var nom_lecteur = req.body.nom_lecteur
        var direction_lect = req.body.direction_lect
        var num_post = req.body.num_post//pret a ajouter
        var prenom_lect = req.body.prenom_lect
        var result = await LectModal.addlect(
            nom_lecteur , direction_lect , num_post,prenom_lect);
        result ? res.send("lecture added") : res.send("Error cant add lecture")
    }

    static async deletelect(req,res){
        const id = req.body.id
        var result = await LectModal.deletelect(id)
        result ? res.send("lecture deleted") : res.send("Error cant delete lecture")
    }


    static async updatelect(req,res){
        const id = req.body.id
        var nom_lecteur = req.body.nom_lecteur
        var direction_lect = req.body.direction_lect
        var num_post = req.body.num_post
        var prenom_lect = req.body.prenom_lect

        var result = await LectModal.edit(
            id,nom_lecteur , direction_lect , num_post,prenom_lect)
        result ? res.send("lecture updated") : res.send("Error cant update lecture")
    }

}

module.exports = LectController;