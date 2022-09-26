const routersModule = {
  state: {
    companyRouters: [
      { name: "Trang chủ", path: "/company/home" },
      {
        name: "Sinh viên đăng ký thực tập",
        path: "/company/students-register",
      },
      {
        name: "Quản lý thực tập",
        path: "/company/students-training",
      },
    ],
    teacherRoutes: [{ name: "Trang chủ", path: "/teacher" }],
  },
  getters: {
    getCompanyRouters(state) {
      return state.companyRouters;
    },
  },
};

export default routersModule;
