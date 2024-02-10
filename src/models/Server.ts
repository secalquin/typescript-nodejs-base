export interface IServer {
  start(callback: () => void): void;
}

export interface IServerConfig {
  server_port: string | number;
  environment: string;
}
