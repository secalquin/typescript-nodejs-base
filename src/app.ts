import Server from "@config/server";
import environments from "./config/environments";

const { environment, server_port } = environments;

const server = new Server({ environment, server_port });

server.start(() => {
  console.log(
    `⚡️[server]: Server is running at port ${server_port} in ${environment} mode`
  );
});
