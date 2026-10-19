import http from "node:http";
import { server as wisp } from "@mercuryworkshop/wisp-js/server";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("wisp server js rewrite");
});

server.on("upgrade", (req, socket, head) => {
  wisp.routeRequest(req, socket, head);
});

server.listen(5001, "127.0.0.1", () => {
  console.log("Wisp server listening on port 5001");
});
