const express = require('express');
const app = express()
// Server static assets if in production DIEGO Please add this evaluation as we will need to deploy to 3 different environments INT/PRE
app.use(express.static(__dirname + '/dist/'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/dist/', 'index.html'));
});
const port = process.env.PORT || 80;

app.listen(port, () => console.log(`Server running on port ${port}`));
