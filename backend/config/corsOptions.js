//Resource Sharing For Cross Origin
const acceptedOrigins = ['http://localhost:3000', 'http://127.0.0.1:5500'];
const corsOptions = {
  origin: (origin, callback) => {
    if (acceptedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }, optionsSuccessStatus: 200,
}

module.exports = {acceptedOrigins, corsOptions};
