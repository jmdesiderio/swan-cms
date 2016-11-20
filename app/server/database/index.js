const Sequelize = require('sequelize')

const sequelize = new Sequelize('jasondesiderio', '', '', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
})

const User = sequelize.define('user', {
  username: Sequelize.STRING,
  birthday: Sequelize.DATE,
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING
})

User.create({
  username: 'janedoe',
  birthday: new Date(1980, 6, 20),
  firstName: 'Jane',
  lastName: 'Doe'
}).then((jane) => {
  console.log(jane.get({
    plain: true
  }))
})
