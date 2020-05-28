const got = require('got');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  // Basic Auth
  const auth =
    'Basic ' + new Buffer(`${username}:${password}`).toString('base64');

  //API Summoner
  const response = await got.get(
    `https://${address}:${port}/lol-summoner/v1/current-summoner`,
    {
      headers: {
        Authorization: auth,
      },
      rejectUnauthorized: false,
    }
  );

  console.log(response.body);
  res.send(response.body);
});

module.exports = router;
