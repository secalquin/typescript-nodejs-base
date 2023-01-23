import express, { Application } from "express";
import morgan from "morgan";

interface IServerConfig {
  server_port: string | number;
  environment: string;
}

interface IServer {
  start(callback: () => void): void;
}

class Server implements IServer {
  private app: Application;
  private port: string | number;
  private env: string;

  constructor({ environment, server_port }: IServerConfig) {
    this.app = express();
    this.port = server_port;
    this.env = environment;

    this.middlewares();
    this.logHttpWMorgan();
    this.routes();
  }

  private middlewares() {
    this.app.use(express.json());
  }

  private logHttpWMorgan() {
    if (this.env === "development") {
      this.app.use(morgan("dev"));
    }
  }

  private routes() {
    this.app.use("/", (req, res) => {
      res.json({ message: "Hello World!" });
    });
  }

  start(callback: () => void) {
    this.app.listen(this.port, callback);
  }
}

export default Server;
