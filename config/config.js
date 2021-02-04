//Read and set any environment variables with the dotenv package.
require("dotenv").config();

const config = {
  development: {
    username: "root",
    password: process.env.MYSQL_PASSWORD,
    database: "tictactoeDB",
    host: "127.0.0.1",
    port: 3306,
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    port: 3306,
    dialect: "mysql",
  },
  production: {
    use_env_variable: "JAWSDB_URL",
    dialect: "mysql",
  },
};

// Exporting our config file
module.exports = config;
