import path from 'path';

import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 5555;
const server = app.listen(port);
console.log(`Listening on ${port}`);

//Parse request body to json
app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static(path.normalize(path.join(__dirname, '../dist/'))));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.normalize(path.join(__dirname, '../dist/index.html')));
});
