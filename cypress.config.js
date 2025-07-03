const mysql = require('mysql');

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        queryDb(query) {
          const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'bauru2971415_servicosbauru'
          });

          return new Promise((resolve, reject) => {
            connection.query(query, (error, results) => {
              if (error) {
                console.error('Erro na query:', error);
                return reject(error);
              }
              connection.end();
              return resolve(results);
            });
          });
        }
      });
    },
    baseUrl: "http://localhost/bauruservicos",
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: true
  },
};
