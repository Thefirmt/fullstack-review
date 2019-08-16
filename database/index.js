const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  name: String,
  repos: String,
  stars: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (user) => {
  user.save((err, something) => {
    if (err) { return console.log('whoopsie!') }

  })
}

module.exports.save = save;