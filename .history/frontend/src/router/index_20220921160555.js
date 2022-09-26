import { createRouter, createWebHistory } from "vue-router";

// 1. Define route components.
import Home from "../views/Home";
import Student from "../views/Student";
import Teacher from "../views/Teacher";
import Admin from "../views/Admin";
import Company from "../views/Company";
import Admin from "../views/Admin";
import Login from "../views/Login.vue";

// 2. Define some routes

const routes = [
<<<<<<< HEAD
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/student", component: Student },
  { path: "/teacher", component: Teacher },
  { path: "/admin", component: Admin },
  { path: "/company", component: Company },
=======
    { path: "/", component: Home },
    { path: "/student", component: Student },
    { path: "/teacher", component: Teacher },
    { path: "/admin", component: Admin },
    {
        path: "/company",
        component: Company,
        children: [
            { path: "/company/home", component: HomePageCompany },
            { path: "/company/students-register", component: StudentsRegister },
            { path: "/company/students-training", component: StudentsTraining },
        ],
    },
>>>>>>> e6969113bab7c084956cde66c96eb1ee609ae77e
];

// 3. Create the router instance and pass the `routes` option

const router = createRouter({
<<<<<<< HEAD
  history: createWebHistory(),
  routes,
=======
    history: createWebHistory(),
    routes,
    linkActiveClass: "active-link",
>>>>>>> e6969113bab7c084956cde66c96eb1ee609ae77e
});

export default router;
