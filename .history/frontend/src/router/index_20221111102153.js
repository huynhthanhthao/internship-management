import { createRouter, createWebHistory } from "vue-router";
import guardRouter from "./guard-router.js";

// 1. Define route components.
import Home from "../views/Home.vue";
import Student from "../views/Student";
import Teacher from "../views/Teacher";
import Ministry from "../views/Ministry";
import Company from "../views/Company";
import Login from "../views/Login.vue";
import Error from "../views/Error.vue";
import HomePage from "../components/GlobalComponent/HomePage.vue";

// Company router
import StudentsRegister from "../views/company/StudentsRegister.vue";
import StudentsTraining from "../views/company/StudentsTraining.vue";
import TaskDetail from "../views/company/TaskDetail.vue";

//Teacher router
import TeacherManage from "../views/teacher/TeacherManage.vue";
import TeacherView from "../views/teacher/TeacherView.vue";
import TeacherAssess from "../components/Teacher/ProgressAssess/TeacherAssess.vue";
import ViewProgress from "../components/GlobalComponent/ViewProgress.vue";

// Ministry router
import TeacherManagement from "../views/ministry/TeacherManagement.vue";
import CompanyManagement from "../views/ministry/CompanyManagement.vue";
import StudentsManagement from "../views/ministry/StudentsManagement.vue";

//Student router
import StudentRegister from "../views/student/StudentRegister.vue";
import StudentManage from "../views/student/StudentManage.vue";
import StudentUpdateInfor from "../views/student/StudentUpdateInfor.vue";
import ViewAssessCompany from "../components/GlobalComponent/ViewAssessCompany.vue";
import ViewAssessTeacher from "../components/Student/ManageInternship/ViewAssessTeacher.vue";

// Admin router
import Admin from "../views/Admin";
import AdminHome from "../views/admin/AdminHome.vue";
import AdminManage from "../views/admin/AdminManage.vue";
// 2. Define some routes

const routes = [
    { path: "/", component: Home },
    { path: "/login", component: Login },
    { path: "/student", component: Student },
    { path: "/error", component: Error },
    {
        path: "/admin",
        component: Admin,
        children: [
            { path: "/admin/home", component: AdminHome },
            { path: "/admin/manage", component: AdminManage },
        ],
        beforeRouteLeave: (to, from) => {
            console.log(to, from);
            console.log(1253);
        },
    },
    {
        path: "/teacher",
        component: Teacher,
        children: [
            { path: "/teacher/home", component: HomePage },
            { path: "/teacher/manage", component: TeacherManage },
            {
                path: "/teacher/view",
                component: TeacherView,
                children: [
                    {
                        path: "/teacher/view/progress/:id",
                        component: ViewProgress,
                    },
                    {
                        path: "/teacher/view/company-assess/:id",
                        component: ViewAssessCompany,
                    },
                    {
                        path: "/teacher/view/assess-student/:id",
                        component: TeacherAssess,
                    },
                ],
            },
        ],
    },
    {
        path: "/company",
        component: Company,
        children: [
            { path: "/company/home", component: HomePage },
            { path: "/company/students-register", component: StudentsRegister },
            { path: "/company/detail-task/:studentId", component: TaskDetail },
            { path: "/company/students-training", component: StudentsTraining },
        ],
    },
    {
        path: "/ministry",
        component: Ministry,
        children: [
            { path: "/ministry/home", component: HomePage },
            {
                path: "/ministry/teacher-management",
                component: TeacherManagement,
            },
            {
                path: "/ministry/teacher-management/:teacherId",
                component: StudentsManagement,
            },
            {
                path: "/ministry/company-management",
                component: CompanyManagement,
            },
        ],
    },

    {
        path: "/student",
        component: Student,
        children: [
            { path: "/student/home", component: HomePage },
            { path: "/student/register", component: StudentRegister },
            {
                path: "/student/manage",
                component: StudentManage,
                children: [
                    {
                        path: "/student/manage/view-progress",
                        component: ViewProgress,
                    },
                    {
                        path: "/student/manage/view-assess-company",
                        component: ViewAssessCompany,
                    },
                    {
                        path: "/student/manage/view-assess-teacher",
                        component: ViewAssessTeacher,
                    },
                ],
            },
            { path: "/student/update-infor", component: StudentUpdateInfor },
        ],
    },
];

// 3. Create the router instance and pass the `routes` option

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: "active-link",
});

guardRouter(router);

export default router;
