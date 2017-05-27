const Knex = require('knex')
const knexConfig = require('../../../_build/knexfile')
const { Model } = require('objection')

const knex = Knex(knexConfig)
Model.knex(knex)
