import User from "../models/user.mjs";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';



export const userRegister = async (req, res) => {
  console.log(req.body)
  try {

    const { name, email, password } = req.body;


    const isEmail = await User.findOne({ email });
    // console.log(isEmail);

    if (isEmail) return res.send({ errorMessage: "Email already Exist" })

    const hashPassword = await bcrypt.hash(password, 10);

    const user = new User({ name, email, password: hashPassword })

    await user.save();

    res.status(201).send({ message: 'User registered successfully' });




  } catch (error) {
    console.log(error)
    res.send({ errorMessage: error })
  }
}


export const userLogin = async (req, res) => {


  try {


    const { email, password } = req.body;

    console.log(req.body)

    const isUser = await User.findOne({ email })
    console.log("isUser",isUser)
    console.log(isUser);
    if (!isUser) return res.status(401).send({ errorMessage: "User not Exists" })


    if (isUser) {
      const isPasswordMatched = await bcrypt.compare(password, isUser.password);

      if(isPasswordMatched){
        
        const token = jwt.sign({
          name: isUser.name,
          email: isUser.email,
          id: isUser._id
        },process.env.JWT_SECRET,{expiresIn: '1h'});


        res.cookie('token',token,{maxAge: 60*60*1000, httpOnly: true})

        res.send({message: "User Login Successfully!"})


      }
      else
      {
        res.status(401).send({failedMessage: "User Login Failed"})
      }



    }


  } catch (error) {
    console.log(error);
    res.send({errorMessage: "Server error"})
  }






}




export const userLogout = async(req,res)=>{


  try{
    res.clearCookie('token');
    res.send({message: "User Logout"})
  }
catch(e)
{
  res.send({errorMessage: "Server error"})
}



}