import CompanyAccess from "../../models/CompanyAccess.js";

const searchStudent = async function (req, res, next) {
    const { searchData } = req.params;
    const regex = new RegExp(searchData, "i");

    try {
        const resultSearch = await CompanyAccess.find({
            "studentAccount.username": regex,
        });

        return resultSearch
            ? res.status(201).json({
                  status: "success",
                  result: resultSearch,
              })
            : res.status(201).json({
                  status: "success",
                  message: "Don't find information",
              });
    } catch (error) {
        next(error);
    }
};

export default searchStudent;
