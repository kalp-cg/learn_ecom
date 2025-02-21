import sendEmail from '../config/sendEmail.js'
import UserModel from '../models/user.model.js'
import bcryptjs from 'bcryptjs'

export async function registerUserController(res , req){
    try {
            const { name , email , password } = req.body

            if(!name  || !email || !password){
                return res.status(400).json({
                    message : "provide name ,email and password",
                    error :true,
                    success : false
                })
            }

            const user = await UserModel.findOne({email})

            if (user){
                return res.json({
                    message: "Already  register email",
                    error:true,
                    success : false
                })
            }

            const salt = await bcryptjs.genSalt(10)
            const hashpassword = await bcryptjs.hash(password , salt )

            const payload = {
                name,
                email,
                password : hashpassword
            }

            const newuser = new UserModel(payload)
            const save = await newuser.save()


            const verifyEmail= await sendEmail({
                 sendTo : email,
                 subject : "verify email from ecom",
                 html : html
            })

    } catch (error) {
        return res.status(500).json({
            message : error.message || error ,
            error : true,
            success : false
        })
    }
}