import jwt, { decode } from "jsonwebtoken";
const verifyInfo = {
    verifyToken: (res, req, next) => {
        const authHeader = req.header("Authorization");

        const token = authHeader && authHeader.split(" ")[1];

        if (token) {
            return res
                .status(401)
                .json({ status: false, message: "Token Invalid!" });
        }

        try {
            const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
            next();
        } catch (error) {
            console.log(error);
            return res
                .status(403)
                .json({ status: false, message: "Server Error" });
        }
    },
    // verifyTokenAndUsername: (res,res,next)=> {
    //     verifyInfo.verifyToken(req,res, ()=>{

    //     })
    // }
};

export default verifyInfo;
