import Server from "./server/Server.js";

Server.run(process.env.PORT || 8080)

console.log(process.argv);