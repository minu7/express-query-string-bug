const express = require('express');

const app = express();

app.use((req, res) => {
  console.log(req.params);
  console.log(req.query);

  const yearsParams = req.query.currentDatasets;
  console.log(yearsParams);

  res.sendStatus(200);
});

app.listen(9090, () => {
  console.log('start');
});
