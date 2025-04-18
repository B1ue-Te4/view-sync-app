import http from 'http';
import { Server } from 'socket.io';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// __dirname 相当を作成（ESMでは必要）
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// サーバー作成
const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, 'public', 'index.html');
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end('Error loading file');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
});

// Socket.io 接続
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

// 起動
server.listen(3000, () => {
  console.log('✅ Server running at http://localhost:3000');
});
