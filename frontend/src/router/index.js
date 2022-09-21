import { createRouter, createWebHistory } from "vue-router";

// 1. Define route components.
import Home from "../views/Home";
import Student from "../views/Student";
import Teacher from "../views/Teacher";
import Company from "../views/Company";
import Admin from "../views/Admin";
import Login from "../views/Login.vue";

// 2. Define some routes

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/student", component: Student },
  { path: "/teacher", component: Teacher },
  { path: "/admin", component: Admin },
  { path: "/company", component: Company },
];

// 3. Create the router instance and pass the `routes` option

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
