module.exports = function mountRestApi(server) {
  var restApiRoot = server.get('restApiRoot');

  // REST API wired in as middleware w/ .use() 
  server.use(restApiRoot, server.loopback.rest());
};
