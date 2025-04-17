import http from 'http';
import { Server } from 'socket.io';
import fs from 'fs';  // ← 最初は非Promise版のままにしておきます
import path from 'path';

// HTTPサーバーを作成（index.htmlを返すだけ）
const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, 'public', 'index.html');
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading file');
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
});


// Socket.ioをHTTPサーバーに接続
const io = new Server(server);

io.on('connection', (socket) => {
  console.log('🟢 client connected');

  socket.on('play', () => {
    socket.broadcast.emit('play');
  });

  socket.on('pause', () => {
    socket.broadcast.emit('pause');
  });

  socket.on('disconnect', () => {
    console.log('🔴 client disconnected');
  });
});

// ポート3000でサーバーを起動
server.listen(3000, () => {
  console.log('✅ server running at http://localhost:3000');
});
