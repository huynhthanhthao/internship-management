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
        teacherRoutes: [{ name: "Trang chủ", path: "/teacher" }],
    },
    getters: {
        getRouters(state) {
            return state;
        },
    },
};

export default routersModule;
