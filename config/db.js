// MongoDB URI

if (process.env.NODE_ENV === 'production') {
  module.exports = {mongoURI: 'mongodb://project'}
} else {
  module.exports = {mongoURI: 'mongodb://localhost'}
}
