import { createRouter, createWebHistory } from "vue-router";

// 1. Define route components.
import Home from "../views/Home";
import Student from "../views/Student";
import Teacher from "../views/Teacher";
import Admin from "../views/Admin";
import Company from "../views/Company";

import Login from "../views/Login.vue";

// Company router
import HomePageCompany from "../views/company/HomePage.vue";
import StudentsRegister from "../views/company/StudentsRegister.vue";
import StudentsTraining from "../views/company/StudentsTraining.vue";
import TaskDetail from "../views/company/TaskDetail.vue";

//Teacher router
import TeacherHome from "../views/teacher/TeacherHome.vue";
import TeacherViewProgress from "../views/teacher/TeacherViewProgress.vue";
import TeacherViewAssess from "../views/teacher/TeacherViewAssess.vue";
import TeacherUpdate from "../views/teacher/TeacherUpdate.vue";

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
        children: [
          {
            path: "/teacher/home/view-progress/:id",
            component: TeacherViewProgress,
          },
          {
            path: "/teacher/home/view-assess/:id",
            component: TeacherViewAssess,
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
      { path: "/company/home", component: HomePageCompany },
      { path: "/company/students-register", component: StudentsRegister },
      { path: "/company/detail-task", component: TaskDetail },
      { path: "/company/students-training", component: StudentsTraining },
    ],
  },
];

// 3. Create the router instance and pass the `routes` option

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active-link",
});

export default router;
