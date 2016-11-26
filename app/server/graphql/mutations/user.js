import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

import { createUser } from '../../actions/UserActions'

import User from '../../models/UserModel'

export const schema = `
  createUser(input: UserInput): User
  loginUser(username: String!, password: String!): User
`

export const resolvers = {
  createUser: (root, { input }, context) => {
    return createUser({ ...input })
  },
  loginUser: (root, { username, password }, context) => {
    return User.query()
      .where('username', username)
      .then((users) => {
        const user = users[0]
        const isValid = bcrypt.compareSync(password, user.password)

        if (!isValid) throw new Error('Invalid Login')

        const token = jwt.sign({
          id: user.id,
          username: user.username,
          admin: user.admin
        }, process.env.TOKEN_SECRET, { expiresIn: '1h' })

        context.res.cookie('token', token, {
          httpOnly: true
        })

        return user
      })
      .catch(err => {
        console.log(err)
        throw new Error('Invalid Login')
      })
  }
}
