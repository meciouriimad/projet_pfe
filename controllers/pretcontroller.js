const PretModal = require("../model/Pret")
const Ouvragecontroller = require("../controllers/ouvragecontroller")
const Lectcontroller = require("../controllers/lectcontroller")

class PretController{

    static async getallPret(req,res){
        var result = await PretModal.getPret();
        if(result){
            res.send(result)
        }
    }

    static async addnewPret(req,res){
        let ouvrages = Ouvragecontroller.getallOuvr()
        let lecteurs = Lectcontroller.getalllect()
        var cote = req.body.cote
        var lecteur = req.body.lecteur
        var date_s = req.body.date_s
        var date_r = req.body.date_r
        var direction = req.body.direction
        if (cote in ouvrages.cote && lecteur in lecteurs){
            var result = await PretModal.addPret(
                cote , lecteur , date_s,date_r,direction);
            if(result) { 
                res.send("Pretage added")
                let config = {
                    service: 'gmail',
                    auth: {
                        user: process.env.NODEJS_GMAIL_APP_USER,
                        pass: process.env.NODEJS_GMAIL_APP_PASSWORD
                    }
                }
                let transporter = nodemailer.createTransport(config);
                let message = {
                    from: 'wanuja18@gmail.com',
                    to: req.body.email,
                    subject: 'demande de pret !!',
                    attachments: [ 
                        {
                        filename: '',
                        path: '',
                        cid: '' 
                        }
                    ]
                };
                transporter.sendMail(message).then((info) => {
                    return res.status(201).json(
                        {
                            msg: "Email sent",
                            info: info.messageId,
                            preview: nodemailer.getTestMessageUrl(info)
                        }
                    )
                }).catch((err) => {
                    return res.status(500).json({ msg: err });
                }
                );
            }else{ 
                res.send("Error cant add Pretage")}
        }
    }

    static async deletePret(req,res){
        const id = req.body.id
        var result = await PretModal.deletePret(id)
        result ? res.send("Pretage deleted") : res.send("Error cant delete Pretage")
    }


    static async updatePret(req,res){
        const id = req.body.id
        let nbr_ren = req.body.nbr_ren
        let ouvrages = Ouvragecontroller.getallOuvr()
        var cote = req.body.cote
        var lecteur = req.body.lecteur
        var date_s = req.body.date_s
        var date_r = req.body.date_r
        var direction = req.body.direction
        if(nbr_ren < 2){
            var result = await PretModal.edit(
                idcote , lecteur , date_s,date_r,direction,nbr_ren)
            result ? res.send("Pretiaire updated") : res.send("Error cant update Pretiaire")
        }else{
            res.send("cant update")
        }
    }

}

module.exports = PretController;