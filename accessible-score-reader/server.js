const express = require('express');
const viteExpress = require('vite-express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.get('/', (req, res) => {
	res.render('landing', { title: 'Accessible Music Reader' });
});

app.get('/tutorial', (req, res) => {
    res.render('tutorial');
});

viteExpress.listen(app, 5173, () => {
	console.log('Server is running at http://localhost:5173');
});
