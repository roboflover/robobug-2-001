import { WebSocketServer } from 'ws';
import si from "systeminformation";

const wss = new WebSocketServer({ port: 8080 });
const mysql = require("mysql")

// const connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     database: "usersdb",
//     password: "1q2w3e4r"
// })

console.log('We are live on 8080');

wss.on('connection', function connection(ws) {
  ws.on('message', function message(data) {
    console.log('received: %s', data);

  });

  ws.send('something');

  setInterval(async () => {
    const cpuTemp = JSON.stringify(await si.currentLoad());
    ws.send(cpuTemp);
  }, 1000);
});

