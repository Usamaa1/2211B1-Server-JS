import User from "../models/user.mjs";




export const userRegister = async (req,res)=>{
    try {
        
       const {name,email, password} = req.body;


      const isEmail = await User.find({email:email});

      if(isEmail) return res.send({errorMessage: "Email already Exist"})

        const hashPassword = bcrypt.hashSync(password, 10);

        const user = new User({name, email, password: hashPassword })

           await user.save();

           res.status(201).send({ message: 'User registered successfully' });




    } catch (error) {
        
    }
}



