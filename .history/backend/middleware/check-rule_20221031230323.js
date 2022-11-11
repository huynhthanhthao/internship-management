import jwt from "jsonwebtoken";
import Account from "../models/Account.js";

const checkRule = async (req, res, next, rule) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ status: false, message: "Token not found!" });
  }

  try {
    // decoded is username
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const account = await Account.findOne({ username: decoded });

    // Check is <rule> ?
    if (account.rule != rule)
      return res.status(400).json({
        status: false,
        message: `You don't have ${rule} rule!`,
      });

    // All good. Next to controller add-company
    next();
  } catch (error) {
    return res.status(403).json({ status: false, message: "Invalid token!" });
  }
};

export default checkRule;
