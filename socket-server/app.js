const server = require("http").createServer();
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
io.on("connection", (client) => {
  client.on("chat", (data) => {
    console.log(data);
    client.broadcast.emit("chat", "response: " + data);
    /* … */
  });
  client.on("disconnect", () => {
    /* … */
  });
});

server.listen(8081);
