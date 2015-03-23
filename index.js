var gzippo = require('gzippo'),
    express = require('express'),
    app = express(),
    port = process.env.PORT || 5000;

app.use(gzippo.staticGzip('' + __dirname + '/dist'));
app.listen(port);
console.log('Server running on port', port);