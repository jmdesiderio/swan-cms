const { buildSchema } = require('graphql')
let fakeDatabase = {}

const schema = buildSchema(`
  input MessageInput {
    content: String
    author: String
  }

  type Message {
    id: ID!
    content: String
    author: String
  }

  type RandomDie {
    numSides: Int!,
    rollOnce: Int!,
    roll(numRolls: Int!): [Int]
  }

  type Query {
    getDie(numSides: Int): RandomDie
    getMessage(id: ID!): Message
    getAllMessages: [Message]
  }

  type Mutation {
    createMessage(input: MessageInput): Message
    updateMessage(id: ID!, input: MessageInput): Message
  }
`)

class RandomDie {
  constructor (numSides) {
    this.numSides = numSides
  }

  rollOnce () {
    return 1 + Math.floor(Math.random() * this.numSides)
  }

  roll ({ numRolls }) {
    let output = []
    for (let i = 0; i < numRolls; i++) {
      output.push(this.rollOnce())
    }
    return output
  }
}

class Message {
  constructor (id, { content, author }) {
    this.id = id
    this.content = content
    this.author = author
  }
}

const root = {
  getDie: ({ numSides }) => {
    return new RandomDie(numSides || 6)
  },
  getMessage: ({ id }) => {
    if (!fakeDatabase[id]) throw new Error('no message exists with id ' + id)
    return new Message(id, fakeDatabase[id])
  },
  getAllMessages: () => {
    return Object.keys(fakeDatabase).map((messageID) => {
      return new Message(messageID, fakeDatabase[messageID])
    })
  },
  createMessage: ({ input }) => {
    let id = require('crypto').randomBytes(10).toString('hex')
    fakeDatabase[id] = input
    return new Message(id, input)
  },
  updateMessage: ({ id, input }) => {
    if (!fakeDatabase[id]) throw new Error('no message exists with id ' + id)
    fakeDatabase[id] = input
    return new Message(id, input)
  }
}

module.exports = {
  schema,
  root
}
