const Auth = require("../model/auth")

class AuthController {
    static async Login(req,res){
        var result = await Auth.Req_Login();
        if(result){
            res.send(result)
        }
    }
}

module.exports = AuthController;