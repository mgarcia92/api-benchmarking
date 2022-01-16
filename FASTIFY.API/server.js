'use strict'

const fastify = require('fastify')()

const schema = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          hello: {
            type: 'string'
          }
        }
      }
    }
  }
}

fastify.get('/api/hello', schema, function (req, reply) {
  fastify.log.info('it is a request')
  reply.send({ hello: 'world' })
})

fastify.listen(3000)