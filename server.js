import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 3000 });

wss.on('connection', (ws) => {
  console.log('🟢 client connected');

  ws.on('message', (message) => {
    console.log('📩 received:', message.toString());
    ws.send(`Echo: ${message}`);
  });
});