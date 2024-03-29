import express, { Application } from "express";
import morgan from "morgan";
import actuator from "express-actuator";
import { IServer, IServerConfig } from "@models/Server";
import routes from "@routes/mainRoutes";

class Server implements IServer {
  private app: Application;
  private port: string | number;
  private env: string;

  constructor({ environment, server_port }: IServerConfig) {
    this.app = express();
    this.port = server_port;
    this.env = environment;

    this.middlewares();
    this.logHttpMorgan();
    this.routes();
  }

  private middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(
      actuator({
        basePath: "/actuator",
        infoGitMode: "full",
        infoDateFormat: "YYYY-MM-DD HH:mm:ss",
      })
    );
  }

  private logHttpMorgan() {
    if (this.env === "development") {
      this.app.use(morgan("dev"));
    }
  }

  private routes(): void {
    this.app.use("/api", routes);
  }

  start(callback: () => void) {
    this.app.listen(this.port, callback);
  }
}

export default Server;
