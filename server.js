var get_ip = require('ipware')().get_ip;

require('express')()
.set('view engine', 'pug')


.use(function(req, res, next){
  var headers = req.headers;
  var client_ip = get_ip(req);
  client_ip = Object.entries(client_ip);
  var client_lang = headers['accept-language'];
  var client_software = headers['user-agent'];
  res.render('layout', {
    title: 'Request Header Parser',
    ip: client_ip[0][1],
    software: client_software,
    lang: client_lang
  })
})
.listen(8080);
