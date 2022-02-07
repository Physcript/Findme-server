

require('dotenv').config()

export default {
    SERVER: {
        HOST: 'localhost',
        PORT: 1337
    },
    DATABASE: {
        URL: 'mongodb://127.0.0.1:27017/linkit',
        OPTIONS: {
            useUnifiedTopology: true,
            maxPoolSize: 50,
            wtimeoutMS: 50000
        }
    }
}