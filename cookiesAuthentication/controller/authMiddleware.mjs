import jwt from 'jsonwebtoken'


export const authMiddleware = async (req,res,next)=>{


    try {
        
        const {token} = req.cookies;


       const userVerified = jwt.verify(token,process.env.JWT_SECRET);

       if(userVerified)
        {
            req.user = userVerified;

            next();
        }
        else
        {
            res.send({error: "User verification failed"})
        }


    } catch (error) {
        res.send({error: "Middleware server error"})
    }



}



