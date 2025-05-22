const express = require('express');
const viteExpress = require('vite-express');
const path = require('path');
const ejs = require('ejs');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

app.get('/', (req, res) => {
	res.render('tutorial');
});
