const { createLogger, format, transports } = require('winston');

module.exports = createLogger({
     transports: [
          new transports.File({
               maxsize: 5120000,
               maxFiles: 5,
               filename: "src/log/success.log"
          }),
          new transports.Console({
               level: 'debug'
          })
     ]
})
