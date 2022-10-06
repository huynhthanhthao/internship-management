const routersModule = {
<<<<<<< HEAD
  state: {
    companyRoutes: [
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
    teacherRoutes: [
      { name: "Trang chủ", path: "/teacher/home" },
      { name: "Quản lý sinh viên", path: "/teacher/manage" },
      { name: "Cập nhật thông tin", path: "/teacher/update-information" },
    ],
    studentRoutes: [
      { name: "Trang chủ", path: "/student/home" },
      { name: "Đăng ký thực tập", path: "/student/register" },
      { name: "Quản lý thực tập", path: "/student/manage" },
      { name: "Cập nhật thông tin", path: "/student/update-information" },
    ],
  },
  getters: {
    getRouters(state) {
      return state;
=======
    state: {
        companyRoutes: [
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
        teacherRoutes: [
            { name: "Trang chủ", path: "/teacher/home" },
            { name: "Quản lý sinh viên", path: "/teacher/manage" },
            { name: "Cập nhật thông tin", path: "/teacher/update-information" },
        ],
        adminRoutes: [
            { name: "Trang chủ", path: "/admin/home" },
            { name: "Quản lý giảng viên", path: "/admin/teacher-management" },
            {
                name: "Quản lý đơn vị thực tập",
                path: "/admin/company-management",
            },
        ],
    },
    getters: {
        getRouters(state) {
            return state;
        },
>>>>>>> 354ca205c98ca9cffd589d44543ab3f79025a316
    },
};

export default routersModule;
