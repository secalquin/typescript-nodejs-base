import dotenv from "dotenv";

dotenv.config();

const environments = {
  environment: process.env.ENVIRONMENT || "development",
  server_port: process.env.SERVER_PORT || 3000,
};

export default environments;
