var app = require('./server/app')();




app.listen(app.get('port'), function() {
  console.log('Server up ===> http://localhost:'+app.get('port'));
});