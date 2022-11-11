const routersModule = {
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
        ],
        ministryRoutes: [
            { name: "Trang chủ", path: "/ministry/home" },
            {
                name: "Quản lý giảng viên",
                path: "/ministry/teacher-management",
            },
            {
                name: "Quản lý đơn vị thực tập",
                path: "/ministry/company-management",
            },
        ],
        adminRoutes: [
            { name: "Trang chủ", path: "/admin/home" },
            {
                name: "Quản lý tài khoản",
                path: "/admin/manage",
            },
        ],
        studentRoutes: [
            { name: "Trang chủ", path: "/student/home" },
            { name: "Đăng ký thực tập", path: "/student/register" },
            { name: "Quản lý thực tập", path: "/student/manage/view-progress" },
        ],
    },
    getters: {
        getRouters(state) {
            return state;
        },
    },
};

export default routersModule;
