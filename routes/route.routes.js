const route = require('express').Router();
const StagController = require("../controllers/stagcontroller")
const Normecontroller = require("../controllers/normecontroller")
const LectController = require("../controllers/lectcontroller")
const OuvrController = require("../controllers/ouvragecontroller")
const PretController = require("../controllers/pretcontroller")
const Ouvrage = require("../model/Ouvr")
const Auth = require("../controllers/authcontroller")

route.get("/",(req,res,next)=>{
    res.send("wellcome")
})
//stagiaire
route.get("/stag",StagController.getallstag)
route.post("/addstag",StagController.addnewStag)
route.post("/deletestag",StagController.deleteStag)
route.post("/editstag",StagController.updateStag)

//les normes

route.get("/norme",Normecontroller.getallnorme)
route.post("/addnorme",Normecontroller.addnewnorme)
route.post("/deletenorme",Normecontroller.deletenorme)
route.post("/editnorme",Normecontroller.updatenorme)

//les lecteurs

route.get("/pret",PretController.getallPret)
route.post("/addpret",PretController.addnewPret)
route.post("/deletepret",PretController.deletePret)
route.post("/editpret",PretController.updatePret)

//demande des pret

route.get("/lect",LectController.getalllect)
route.post("/addlect",LectController.addnewlect)
route.post("/deletelect",LectController.deletelect)
route.post("/editlect",LectController.updatelect)

//les ouvrages

route.get("/ouvr",OuvrController.getallOuvr)
route.post("/addouvr",OuvrController.addnewOuvr)
route.post("/deleteouvr",OuvrController.deleteOuvr)
route.post("/editouvr",OuvrController.updateOuvr)
route.post("/filter_ouvrage",Ouvrage.search_by_filter)


route.get('/auth', Auth.Login);

module.exports = route;