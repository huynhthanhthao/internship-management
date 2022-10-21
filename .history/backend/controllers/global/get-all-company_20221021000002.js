const getAllCompany = async (req, res, next) => {
  try {
    const result = await Account.find({ rule: "COMPANY" });
    return res.json({
      status: true,
      message: "Lấy danh sách các đơn vị thực tập thành công!",
      result,
    });
  } catch (error) {
    next(error);
  }
};

export default getAllCompany;
