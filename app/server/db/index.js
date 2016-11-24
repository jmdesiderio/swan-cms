import Knex from 'knex'
import knexConfig from '../../../_build/knexfile'
import { Model } from 'objection'

const knex = Knex(knexConfig)
Model.knex(knex)
