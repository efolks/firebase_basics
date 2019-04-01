const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

const { join } = require('path');
app.use(express.static(join(__dirname, '..', '..', 'public')));

// Firebase integration

// app.get('/api/posts', async (req, res, next) => {
//   try {
//     // const posts = await Post.findAll();
//     // res.json(posts);
//   } catch (err) {
//     next(err);
//   }
// });

// app.post('/api/posts', async (req, res, next) => {
//   try {
//     // const { text } = req.body;
//     // const newPost = await Post.create({ text });
//     // res.status(201).json(newPost);
//   } catch (err) {
//     next(err);
//   }
// });

const PORT = 3000;
(async () => {
  app.listen(PORT, () => console.log(`listening on Port ${PORT}`));
})();
