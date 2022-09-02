import express from "express";
import connectDB from "./database/connectDB.js";

import bodyParser from "body-parser";

// import router
import adminRouter from "./routes/admin-router.js";
import studentRouter from "./routes/student-router.js";
import teacherRouter from "./routes/teacher-router.js";
import companyRouter from "./routes/company-router.js";
import authRouter from "./routes/auth-router.js";

const app = express();
const port = 3000;

// Connect database
connectDB();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Router
app.use("/admin", adminRouter);

app.use("/teacher", teacherRouter);

app.use("/company", companyRouter);

app.use("/auth", authRouter);

app.use("/", studentRouter);

app.listen(port, () => {
    console.log(`Server running in port ${port}`);
});
