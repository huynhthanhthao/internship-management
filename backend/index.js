import express from "express";
import connectDB from "./database/connectDB.js";

import bodyParser from "body-parser";
import cors from "cors";

// import router
import adminRouter from "./routes/admin-router.js";
import ministryRouter from "./routes/ministry-router.js";
import studentRouter from "./routes/student-router.js";
import teacherRouter from "./routes/teacher-router.js";
import companyRouter from "./routes/company-router.js";
import authRouter from "./routes/auth-router.js";

// import midleware
import middlewareRouter from "./middleware/check-rule.js";

const app = express();
const port = 3000;

// Connect database
connectDB();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(cors());

// Router
app.use(
  "/admin",
  (req, res, next) => {
    middlewareRouter(req, res, next, "ADMIN");
  },
  adminRouter
);

app.use(
  "/ministry",
  (req, res, next) => {
    middlewareRouter(req, res, next, "MINISTRY");
  },
  ministryRouter
);

app.use(
  "/teacher",
  (req, res, next) => {
    middlewareRouter(req, res, next, "TEACHER");
  },
  teacherRouter
);

app.use(
  "/company",
  (req, res, next) => {
    middlewareRouter(req, res, next, "COMPANY");
  },
  companyRouter
);

app.use(
  "/student",
  (req, res, next) => {
    middlewareRouter(req, res, next, "STUDENT");
  },
  studentRouter
);

app.use("/", authRouter);

//Catch
app.use((req, res, next) => {
  const err = new Error();
  err.status = 404;
  next(err);
});

//Error handler
app.use((err, req, res, next) => {
  const error = app.get("env") === "development" ? err : {};
  const status = err.status || 500;
  return res.status(status).json({
    error: {
      message: error.message,
    },
  });
});

app.listen(port, () => {
  console.log(`Server running in port ${port}`);
});
