const express = require('express');
const app = express();
const port = 3000;

require('./routes/index')(app);
app.set('view engine', 'ejs');
app.use(express.static('/static/'));


app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;