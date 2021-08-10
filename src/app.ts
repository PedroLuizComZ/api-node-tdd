import express from "express";
import cors from "cors";
import routes from "./routes/routes";
import "./database/connection";
import "reflect-metadata";
import "dotenv/config";

export const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
