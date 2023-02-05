let marklogic = require('marklogic');

let db = marklogic.createDatabaseClient({
  host:     'localhost',
  port:     '8000',
  database: 'pruebaDB',
  user:     'admin',
  password: '1234',
  authType: 'DIGEST'
});

