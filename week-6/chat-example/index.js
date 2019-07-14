const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static(__dirname));

app.get('/', function(req, res) {
  res.render("index");
});

io.on('connection', socket => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  sosocket.on('chat message', msg =>
    io.emit('chat message', msg); {
    console.log('message: ' + msg);
  });
});


http.listen(3023, () => console.log('listening on port :3000'));