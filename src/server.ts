import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'System base' });
});

app.listen(3333, () => {
  console.log('🚀 Server startd on port 3333');
});
