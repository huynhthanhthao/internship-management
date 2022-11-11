import Account from "../../models/Account.js";
import CompanyAccount from "../../models/CompanyAccount.js";
import StudentAccount from "../../models/StudentAccount.js";
import TeacherAccount from "../../models/TeacherAccount.js";
import argon2 from "argon2";

const createAccount = async (req, res, next) => {
    const { username, password, name, typeAccount } = req.body;
    const urlAvatar = "https://cdn-icons-png.flaticon.com/512/149/149071.png";

    // simple validate
    if (!username || !password || !name || !typeAccount) {
        return res.json({
            status: false,
            message: "Vui lòng điền đầy đủ thông tin!",
        });
    }
    try {
        const findAccount = await Account.findOne({ username });
        if (!findAccount) {
            const hashedPassword = await argon2.hash(password);
            const newAccount = await Account.create({
                username,
                password: hashedPassword,
                name,
                urlAvatar,
                rule: typeAccount,
                createdAt: Date.now(),
            });

            if (typeAccount === "TEACHER") {
                const teacherAccount = await TeacherAccount.create({
                    teacherId: newAccount._id,
                });
                return res.json({
                    status: true,
                    message: "Tạo mới một tài khoản thành công!",
                    newAccount,
                    teacherAccount,
                });
            }

            if (typeAccount === "STUDENT") {
                const { studentClass } = req.body;

                // simple validate
                if (!studentClass) {
                    return res.json({
                        status: false,
                        message: "Vui lòng điền đầy đủ thông tin!",
                    });
                }

                const studentAccount = await StudentAccount.create({
                    studentId: newAccount._id,
                    class: studentClass,
                });
                return res.json({
                    status: true,
                    message: "Tạo mới một tài khoản thành công!",
                    newAccount,
                    studentAccount,
                });
            }

            if (typeAccount === "COMPANY") {
                const companyAccount = await CompanyAccount.create({
                    companyId: newAccount._id,
                });
                return res.json({
                    status: true,
                    message: "Tạo mới một tài khoản thành công!",
                    newAccount,
                    companyAccount,
                });
            }
        } else {
            return res.json({
                status: false,
                message: "Tài khoản đã tồn tại trong hệ thống!",
            });
        }
    } catch (error) {
        next(error);
    }
};

export default createAccount;
