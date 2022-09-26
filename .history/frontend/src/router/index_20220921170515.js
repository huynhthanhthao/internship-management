import { createRouter, createWebHistory } from "vue-router";

// 1. Define route components.
import Home from "../views/Home";
import Student from "../views/Student";
import Teacher from "../views/Teacher";
import Admin from "../views/Admin";
import Company from "../views/Company";

// Company router
import HomePageCompany from "../views/company/HomePage.vue";
import StudentsRegister from "../views/company/StudentsRegister.vue";
import StudentsTraining from "../views/company/StudentsTraining.vue";
import Login from "../views/Login.vue";

// 2. Define some routes

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/student", component: Student },
  { 
    path: "/teacher", 
    component: Teacher, 
  children:[{path:}]},
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
];

// 3. Create the router instance and pass the `routes` option

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active-link",
});

export default router;
