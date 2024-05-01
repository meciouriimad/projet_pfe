const db = require("../config/db")

class PretModal{

static async getPret(){
    return new Promise (resolve =>{
        db.query("select * from Pretage",[],(error , result)=>{
            if(!error){
                resolve(result)
            }
        })
    })
}

static async addPret(
    cote , lecteur , date_s,date_r,direction
                    ){
                        // let MailGenerator = new Mailgen({
                        //     theme: 'default',
                        //     product: {
                        //         name: 'YOUR_PRODUCT_NAME',
                        //         link: 'https://mailgen.js/'// this can be change according to your requirement
                        //     }
                        // });
                    
                        // let response = {
                        //     body: {
                        //         name: 'receiver_name',
                        //         intro: 'Welcome to ABC Company! We\'re very excited to have you on board.',
                        //         action: {
                        //             instructions: 'To get started with ABC, please click here:',
                        //             button: {
                        //                 color: '#22BC66', // Optional action button color
                        //                 text: 'Confirm your account',
                        //                 link: 'https://mailgen.js/'
                        //             }
                        //         }
                        //     }
                          
                        // };
                    
                        // let mail = MailGenerator.generate(response);
    return new Promise (resolve =>{
        db.query(
            "insert into Pretage (cote , lecteur , date_s,date_r,direction) values(?,?,?,?)",
            [
                cote , lecteur , date_s,date_r
            ],
            (error , result) =>{error ? resolve(false) : resolve(true)}
        )
    }) 
}

static async deletePret(id){
    return new Promise (resolve =>{
        db.query(
            "delete from Pretage where id=?",
            [id],(error ,result)=>{
                error ? resolve(false) : resolve(true)
            }
        )
    })
}

static async edit(
    id,cote , lecteur , date_s,date_r,direction,nbr_ren
                    ){
    return new Promise (resolve =>{
        db.query(
            "update Pretage set cote=? , lecteur=? , date_r=? , date_s=?,direction=?, nbr_ren=? where id=?",
            [
                cote , lecteur , date_s,date_r,direction,nbr_ren,id
            ],
            (error,result)=>{
                error ? resolve(false) : resolve(true)
            }
        )
    })
}

}

module.exports = PretModal;