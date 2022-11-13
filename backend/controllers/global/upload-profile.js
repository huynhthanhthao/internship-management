import Account from "../../models/Account.js";
import CompanyAccount from "../../models/CompanyAccount.js";
import argon2 from "argon2";

import { ObjectId } from "mongodb";

const updateProfile = async (req, res) => {
    const {
        accountId,
        email,
        password,
        newPassword,
        phoneNumber,
        urlAvatar,
        address,
        message,
    } = req.body;

    const path = req.file
        ? "/" +
          req.file.path.split("\\")[3] +
          "/" +
          req.file.path.split("\\")[4]
        : urlAvatar;

    try {
        const account = await Account.findOne({ _id: ObjectId(accountId) });

        // Don't change password
        if (!password || !newPassword) {
            await Account.findOneAndUpdate(
                { _id: ObjectId(accountId) },
                {
                    email,
                    phoneNumber,
                    urlAvatar: path,
                },
                { new: true }
            );
            // if rule is company
            if (account.rule == "COMPANY") {
                await CompanyAccount.findOneAndUpdate(
                    { companyId: ObjectId(accountId) },
                    { address: address, message: message },
                    { new: true }
                );
            }
            res.redirect(
                `http://localhost:8080/${account.rule.toLocaleLowerCase()}/update-infor/success`
            );
        }
        // Change password
        else {
            const passwordValid = await argon2.verify(
                account.password,
                password
            );

            // check password valid
            if (!passwordValid) {
                res.redirect(
                    `http://localhost:8080/${account.rule.toLocaleLowerCase()}/update-infor/not-update`
                );
            }
            // all good
            else {
                const hashedPassword = await argon2.hash(newPassword);
                await Account.findOneAndUpdate(
                    { _id: ObjectId(accountId) },
                    {
                        email,
                        phoneNumber,
                        urlAvatar: path,
                        password: hashedPassword,
                    },
                    { new: true }
                );

                // if rule is company
                if (account.rule == "COMPANY") {
                    await CompanyAccount.findOneAndUpdate(
                        { companyId: ObjectId(accountId) },
                        { address: address, message: message },
                        { new: true }
                    );
                }

                res.redirect(
                    `http://localhost:8080/${account.rule.toLocaleLowerCase()}/update-infor/success`
                );
            }
        }
    } catch (error) {
        console.log(error);
    }
};

export default updateProfile;
