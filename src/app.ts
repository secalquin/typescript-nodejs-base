import Server from "./config/server";
import env from "./config/environments";

const { environment, server_port } = env;

const server = new Server({ environment, server_port });

server.start(() => {
  console.log(
    `⚡️[server]: Server is running at port ${server_port} in ${environment} mode`
  );
});
