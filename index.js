var Hapi = require('hapi')
var hoodie = require('hoodie').register

var server = new Hapi.Server()
server.connection({
  host: 'localhost',
  port: 8080
})

server.register({
  register: hoodie,
  options: { // pass options here
    inMemory: true,
    public: 'public'
  }
}, function (error) {
  if (error) {
    throw error
  }

  server.start(function (error) {
    if (error) {
      throw error
    }

    console.log('Server running at:' + server.info.uri)
  })
})
