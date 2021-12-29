require('dotenv')


module.exports = {
    production: {
        use_env_variable: "DATABASE_URL",
        url: process.env.DATABASE_URL,
        dialect: 'postgres'
    },
    test: {
        // no config for now
    },
    development: {
        dialect: "sqlite",
        storage: "./smartcard.sqlite"
    },
}