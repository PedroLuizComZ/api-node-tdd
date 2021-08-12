import express from "express";
import cors from "cors";
import routes from "./routes/routes";
import "./database/connection";
import "reflect-metadata";
import "dotenv/config";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./swagger.json";

export const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(cors());
app.use(express.json());
app.use(routes);
