const swaggerAutogen = require('swagger-autogen')()

const doc = {
  info: {
    version: "1.0.0",
    title: "Api Documentation",
    description:
      "Api Documentation",
  },
  host: "api-dev.uneinternet.com.br:3333",
  basePath: "/",
  schemes: ["http", "https"],
  consumes: ["application/json"],
  produces: ["application/json"],
  securityDefinitions: {
    apiKeyAuth: {
      type: "apiKey",
      in: "header", // can be "header", "query" or "cookie"
      name: "Authorization", // name of the header, query parameter or cookie
    },
  },
};

const outputFile = "./src/swagger.json";
const endpointsFiles = ["./src/app.ts"];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require("./src/app.ts"); // Your project's root file
});
