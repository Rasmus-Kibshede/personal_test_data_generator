import mysql, { PoolOptions } from 'mysql2/promise';

/*export const appDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
    entities: [Person],
    synchronize: true,
    logging: false,
});*/

// Create the connection pool. The pool-specific settings are the defaults
export const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: Number(process.env.DB_PORT),
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0
});

console.log('accesed .env file. ');
console.log(process.env.DB_USERNAME);
console.log(process.env.DB_DATABASE);
console.log(process.env.DB_HOST);



