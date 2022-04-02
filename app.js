const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/notes', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})