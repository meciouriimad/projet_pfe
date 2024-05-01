const ConsModal = require("../model/Cons")

class ConsController{

    static async getallCons(req,res){
        var result = await ConsModal.getCons();
        if(result){
            res.send(result)
        }
    }

    static async addnewCons(req,res){
        var nom_stag = req.body.nom_stag
        var prenome_stag = req.body.prenom_stag
        var date_cons = req.body.date_cons
        var cote = req.body.cote
        var result = await ConsModal.addCons(
            nom_stag , prenome_stag , post,prenom
        );
        result ? res.send("Consure added") : res.send("Error cant add Consure")
    }

    static async deleteCons(req,res){
        const id = req.body.id
        var result = await ConsModal.deleteCons(id)
        result ? res.send("Consure deleted") : res.send("Error cant delete Consure")
    }


    static async updateCons(req,res){
        const id = req.body.id
        var nom = req.body.nom
        var dir = req.body.dir
        var post = req.body.post
        var prenom = req.body.prenom

        var result = await ConsModal.edit(id,nom , dir , post,prenom)
        result ? res.send("Consure updated") : res.send("Error cant update Consure")
    }

}

module.exports = ConsController;