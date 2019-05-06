const express = require('express');
const next = require('next');
const request = require('request');
const path = require('path');
const fs = require('fs');
const productApiManager = require('./ApiManager.js');
const mustache = require("mustache");
const formidableMiddleware = require('express-formidable');
const memCache = require('memory-cache');

const port = process.env.PORT || 3000;
const app = express();

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({dev})
const handle = nextApp.getRequestHandler();

app.use(formidableMiddleware());

app.engine('html', function(filePath, options, callback) {
    fs.readFile(filePath, function(err, content) {
        if (err)
            return callback(err)
        var rendered = mustache.to_html(content.toString(), options);
        return callback(null, rendered)
    });
});
app.set('view engine', 'html');
app.set('views', __dirname + '/../');

const apiManager = new productApiManager();

//serve static files
app.use(express.static(path.join(__dirname, '/../')));

//Product Page
app.get('/product-details', function(req, res) {

    let productId = req.query.productId;
    let productUrl = apiManager.getProductUrl(productId);

    const options = {
        url: productUrl
    };

    request(options, (error, response, body) => {
        if (!error && body != 'Product not found' && !body.includes('An error has occurred')) {
            var productObj = apiManager.parseProduct(body);
            res.render('product-details', productObj);
        } else {
            res.render('product-not-found');
        }
    });
});

//Add to Cart logic
app.post('/add-to-cart', function(req, res) {

    let clientId = req.fields.clientId;
    let productId = req.fields.productId;
    let name = req.fields.name;
    let price = req.fields.price;
    let color = req.fields.color;
    let size = req.fields.size;
    let imgUrl = req.fields.imgUrl;
    let origin = req.get('origin');
    let quantity = 1;

    let cartProduct = apiManager.createCartItem(productId, name, price, color, size, imgUrl, quantity);
    let shoppingCart = memCache.get(clientId);

    if(!shoppingCart) {
        shoppingCart = apiManager.createCart(clientId);
    }

    shoppingCart.addItem(cartProduct);
    memCache.put(clientId, shoppingCart, 60*60*60*1000);

    //set AMP headers to redirect to cart page
    res.header("Access-Control-Expose-Headers", "AMP-Access-Control-Allow-Source-Origin,AMP-Redirect-To");
    res.header("AMP-Access-Control-Allow-Source-Origin", origin);
    res.header("AMP-Redirect-To", origin + "/cart-details?clientId=" + clientId);

    //amp-form requires json response
    res.json({});
});

//Cart Details page
app.get('/cart-details', function(req, res) {
  
    let clientId = req.query.clientId;
    let shoppingCart = memCache.get(clientId);

    if(shoppingCart) {
        res.render('cart-details', shoppingCart);       
    } else {
        res.render('cart-details', apiManager.createCart(clientId));
    }
});

//API
app.get('/api/cart-count', function(req, res) {
  
    let clientId = req.query.clientId;
    let shoppingCart = memCache.get(clientId);

    if (!shoppingCart) {
      shoppingCart = apiManager.createCart(clientId);
    }

    let count = shoppingCart.cartItems.length;
  count=1;
    res.json({ items: (count > 0) ? [{count}] : [] });
});

//API
app.get('/api/categories', function(req, res) {

    let categoryId = req.query.categoryId;
    let sort = req.query.sort;

    let categoryUrl = apiManager.getCategoryUrl(categoryId, sort);
    console.log("Calling Category Url: " + categoryUrl);

    const options = {
        url: categoryUrl
    };

    request(options, (error, response, body) => {
        if (!error) {
            res.send(apiManager.parseCategory(body));
        } else {
            res.json({ error: 'An error occurred in /api/categories' });
        }
    });
});

app.get('/api/product', function(req, res) {

    let productId = req.query.productId;
    let productUrl = apiManager.getProductUrl(productId);

    const options = {
        url: productUrl
    };

    request(options, (error, response, body) => {
        if (!error && body != 'Product not found' && !body.includes('An error has occurred')) {
            var productObj = apiManager.parseProduct(body);
            res.send(productObj);
        } else {
            res.json({ error: 'An error occurred in /api/product: ' + body});
        }
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

