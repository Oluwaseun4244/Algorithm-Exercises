var http = require('http');

// const getYear = require("./Modules")




http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(`${getYear.monthAndYear(query.month, query.year)}`);
  }).listen(6200);