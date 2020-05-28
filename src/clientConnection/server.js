const express = require('express');
const cors = require('cors');
const LCUConnector = require('lcu-connector');
const connector = new LCUConnector();
const app = express();

const client = require('./clientRequest/client');

connector.on('connect', (data) => {
  //   console.log(data);
  var info = {
    address: data.address,
    port: data.port,
    username: data.username,
    password: data.password,
  };

  global.address = info.address;
  global.port = info.port;
  global.username = info.username;
  global.password = info.password;
});

connector.start();

app.use(cors());

app.use('/client', client);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started in port ${PORT}`));
