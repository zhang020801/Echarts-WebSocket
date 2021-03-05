const Koa = require('koa');
const app = new Koa();

const respDurationMiddleware = require('./middleware/koa_response_duration');
app.use(respDurationMiddleware);

const respHeaderMiddleware = require('./middleware/koa_response_header');
app.use(respHeaderMiddleware);

const respDataMiddleware = require('./middleware/koa_response_data');
app.use(respDataMiddleware);

app.listen(8888);

const webSocketService = require('./service/web_socket_service')
//开启服务端的监听，监听客户端的连接
webSocketService.listen()
