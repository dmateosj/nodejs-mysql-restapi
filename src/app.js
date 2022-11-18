import express from "express";
import morgan from "morgan";

import employeesRoutes from "./routes/employees.routes.js";
import indexRoutes from "./routes/index.routes.js";

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/", indexRoutes);
app.use("/api", employeesRoutes);

app.use((req, res, next) => {res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

export default app;
