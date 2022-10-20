import Account from "../../models/Account.js";
const getAccount = async function (id) {
    try {
        return await Account.findOne({ _id: id });
    } catch (error) {
        console.log(error);
    }
};

export default getAccount;
