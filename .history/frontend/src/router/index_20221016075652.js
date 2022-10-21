import { createRouter, createWebHistory } from "vue-router";

// 1. Define route components.
import Home from "../views/Home.vue";
import Student from "../views/Student";
import Teacher from "../views/Teacher";
import Ministry from "../views/Ministry";
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
import TeacherAssess from "../components/Teacher/ProgressAssess/TeacherAssess.vue";
import ViewProgress from "../components/GlobalComponent/ViewProgress.vue";
import TeacherUpdate from "../views/teacher/TeacherUpdate.vue";

// Ministry router
import TeacherManagement from "../views/ministry/TeacherManagement.vue";
import CompanyManagement from "../views/ministry/CompanyManagement.vue";
import StudentsManagement from "../views/ministry/StudentsManagement.vue";

//Student router
import StudentHome from "../views/student/StudentHome.vue";
import StudentRegister from "../views/student/StudentRegister.vue";
import StudentManage from "../views/student/StudentManage.vue";
import ViewAssessCompany from "../components/GlobalComponent/ViewAssessCompany.vue";
import ViewAssessTeacher from "../components/Student/ManageInternship/ViewAssessTeacher.vue";

// Admin router
import TeacherManagement from "../views/admin/TeacherManagement.vue";
import CompanyManagement from "../views/admin/CompanyManagement.vue";
import StudentsManagement from "../views/admin/StudentsManagement.vue";

// Admin router
import Admin from "../views/Admin";
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
  {
    path: "/company",
    component: Company,
    children: [
      { path: "/student/manage/view-progress", component: ViewProgress },
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
        path: "/ministry/teacher-management/students",
        component: StudentsManagement,
      },
      {
        path: "/ministry/company-management",
        component: CompanyManagement,
      },
    ],
  },
  { path: "/admin", component: Admin, children: [{ path: "/admin/home" }] },

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
];

// 3. Create the router instance and pass the `routes` option

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active-link",
});

export default router;
