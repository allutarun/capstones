const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/joke', async (req, res) => {
  const { firstname, lastname } = req.body;
  try {
    const response = await axios.get(`https://v2.jokeapi.dev/joke/Any?type=single&firstName=${firstname}&lastName=${lastname}`);
    const joke = response.data.joke || "Oops! Couldn't get a joke.";
    res.render('result', { firstname, lastname, joke });
  } catch (error) {
    console.error(error.message);
    res.render('result', {
      firstname,
      lastname,
      joke: 'Something went wrong while fetching the joke.'
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
