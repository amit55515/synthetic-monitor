var express = require("express");
var kafka = require("kafka-node");
var app = express();
var event = require("events");
const cors = require("cors");
var nrc = require("node-run-cmd");
const port = process.env.PORT || 5000;
app.use(cors());

var Producer = kafka.Producer,
  client = new kafka.KafkaClient(),
  producer = new Producer(client);

producer.on("ready", function () {
  console.log("Producer is ready");
});

producer.on("error", function (err) {
  console.log("Producer is in error state");
  console.log(err);
});

app.get("/", function (req, res) {
  res.json({ greeting: "Kafka Producer" });
});

app.listen(port, () => console.log(`Listening on port ${port}`));

app.post("/send", function (req, res) {
  var sentMessage = JSON.stringify(req.body.message);
  payloads = [{ topic: req.body.topic, messages: sentMessage, partition: 0 }];
  producer.send(payloads, function (err, data) {
    res.json(data);
  });
});

global.control = false;

const eventEmitter2 = new event.EventEmitter();
eventEmitter2.setMaxListeners(150);

app.post("/createtopic", function (req, res) {
  var kafka = require("kafka-node");
  var client = new kafka.KafkaClient();

  console.log(req.body.createtopic);
  var topicsToCreate = [
    {
      topic: req.body.createtopic,
      partitions: 1,
      replicationFactor: 1,
    },
  ];
  client.createTopics(topicsToCreate, (error, result) => {});
});

app.get("/deletetopic", function (req, res) {
  // TODO: delete topic
});

const eventEmitter3 = new event.EventEmitter();
eventEmitter3.setMaxListeners(150);

global.listtopic = [];

app.get("/listtopics", function (req, res) {
  const client = new kafka.KafkaClient();
  const admin = new kafka.Admin(client);
  global.res1 = res;

  global.data1;
  admin.listTopics((err, res) => {
    eleman = res[1].metadata;
    var newarray = [eleman];
    var topiclist = [];
    Object.keys(newarray[0])
      .filter(function (key) {
        topiclist.push(key);
      })
      .join(" ");
    global.res1.json(topiclist);
    global.listtopic = topiclist;
    eventEmitter3.emit("trigsend");
  });
});

const http = require("http");
const socketIO = require("socket.io");
const serverPort = 4001;
const server = http.createServer(app);
const io = socketIO(server);
const eventEmitter = new event.EventEmitter();
eventEmitter.setMaxListeners(150);

var kafka = require("kafka-node"),
  Consumer = kafka.Consumer,
  client = new kafka.KafkaClient(),
  consumer = new Consumer(client, [{ topic: "apitopic", offset: 0 }], {
    groupId: "optimize-prime",
    autoCommit: false,
  });

global.dataarray = [];

consumer.on("message", function (message) {
  if (global.control === true) {
    count = global.dataarray.length;
    while (count > 0) {
      global.dataarray.pop();
      count = count - 1;
    }
    global.control = false;
  }

  console.log(message.value);
  dataarray.push(message.value);
  eventEmitter.emit("trigger");
});

io.on("connection", (socket) => {
  console.log("User connected");
  io.sockets.emit("getmessage", { data: dataarray });

  eventEmitter.on("trigger", () => {
    io.sockets.emit("getmessage", { data: dataarray });
  });
});

io.on("connection", (socket) => {
  console.log("user connected socket2");
  io.sockets.emit("sendlist", { data: listtopic });

  eventEmitter3.on("trigsend", () => {
    io.sockets.emit("sendlist", { data: listtopic });
  });
});

server.listen(serverPort, () => console.log(`Server ready at ${serverPort}`));
