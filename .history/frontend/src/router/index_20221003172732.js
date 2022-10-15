import { createRouter, createWebHistory } from "vue-router";

// 1. Define route components.
import Home from "../views/Home";
import Student from "../views/Student";
import Teacher from "../views/Teacher";
import Admin from "../views/Admin";
import Company from "../views/Company";

import Login from "../views/Login.vue";

// Company router
import HomePage from "../views/company/HomePage.vue";
import StudentsRegister from "../views/company/StudentsRegister.vue";
import StudentsTraining from "../views/company/StudentsTraining.vue";
import TaskDetail from "../views/company/TaskDetail.vue";

//Teacher router
import TeacherHome from "../views/teacher/TeacherHome.vue";
import TeacherManage from "../views/teacher/TeacherManage.vue";
import TeacherView from "../views/teacher/TeacherView.vue";
import ViewProgress from "../components/Teacher/ProgressAssess/ViewProgress.vue";
import ViewAssess from "../components/Teacher/ProgressAssess/ViewAssess.vue";
import TeacherUpdate from "../views/teacher/TeacherUpdate.vue";

<<<<<<< HEAD
//Student router
import StudentHome from "../views/student/StudentHome.vue";
import StudentRegister from "../views/student/StudentRegister.vue";
import StudentManage from "../views/student/StudentManage.vue";
import StudentUpdate from "../views/student/StudentUpdate.vue";
// 2. Define some routes

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  {
    path: "/student",
    component: Student,
    children: [
      { path: "/student/home", component: StudentHome },
      { path: "/student/register", component: StudentRegister },
      { path: "/student/manage", component: StudentManage },
      { path: "/student/update-information", component: StudentUpdate },
    ],
  },
  {
    path: "/teacher",
    component: Teacher,
    children: [
      { path: "/teacher/home", component: TeacherHome },
      { path: "/teacher/manage", component: TeacherManage },
      {
        path: "/teacher/view",
        component: TeacherView,
        children: [
          { path: "/teacher/view/progress/:id", component: ViewProgress },
          { path: "/teacher/view/assess/:id", component: ViewAssess },
        ],
      },
      { path: "/teacher/update-information", component: TeacherUpdate },
    ],
  },
  { path: "/admin", component: Admin },
  {
    path: "/company",
    component: Company,
    children: [
      { path: "/company/home", component: HomePageCompany },
      { path: "/company/students-register", component: StudentsRegister },
      { path: "/company/detail-task", component: TaskDetail },
      { path: "/company/students-training", component: StudentsTraining },
    ],
  },
=======
// Admin router
import TeacherManagement from "../views/admin/TeacherManagement.vue";
import CompanyManagement from "../views/admin/CompanyManagement.vue";
import StudentsManagement from "../views/admin/StudentsManagement.vue";

// 2. Define some routes

const routes = [
    { path: "/", component: Home },
    { path: "/login", component: Login },
    { path: "/student", component: Student },
    {
        path: "/teacher",
        component: Teacher,
        children: [
            {
                path: "/teacher/home",
                component: TeacherHome,
            },
            {
                path: "/teacher/manage",
                component: TeacherManage,
            },
            {
                path: "/teacher/view",
                component: TeacherView,
                children: [
                    {
                        path: "/teacher/view/progress/:id",
                        component: ViewProgress,
                    },
                    {
                        path: "/teacher/view/assess/:id",
                        component: ViewAssess,
                    },
                ],
            },

            { path: "/teacher/update-information", component: TeacherUpdate },
        ],
    },
    { path: "/admin", component: Admin },
    {
        path: "/company",
        component: Company,
        children: [
            { path: "/company/home", component: HomePage },
            { path: "/company/students-register", component: StudentsRegister },
            { path: "/company/detail-task", component: TaskDetail },
            { path: "/company/students-training", component: StudentsTraining },
        ],
    },
    {
        path: "/admin",
        component: Admin,
        children: [
            { path: "/admin/home", component: HomePage },
            { path: "/admin/teacher-management", component: TeacherManagement },
            {
                path: "/admin/teacher-management/students",
                component: StudentsManagement,
            },
            { path: "/admin/company-management", component: CompanyManagement },
        ],
    },
>>>>>>> 354ca205c98ca9cffd589d44543ab3f79025a316
];

// 3. Create the router instance and pass the `routes` option

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: "active-link",
});

export default router;