const express = require('express');
const next = require('next');

const port = process.env.PORT || 3000;
const app = express();

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({dev})
const handle = nextApp.getRequestHandler();

app.get('/api/products', function(req, res) {
    res.json({
      items: [
        { name: "Bag", description: "Good for carrying things." },
        { name: "Shoes", description: "Good for your feet." },
        { name: "Jacket", description: "Good for keeping warm." }
      ]
    });
});

nextApp
  .prepare()
  .then(() => {
    app.get('*', (req, resp) => {
      return handle(req, resp);
    });
    const listener = app.listen(port, err => {
      if (err) throw err;
      console.log('App listening on port ' + listener.address().port);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });

