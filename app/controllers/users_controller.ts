// import type { HttpContext } from '@adonisjs/core/http'
import Ws from '#services/ws'

export default class UsersController {
  index() {
    Ws.io?.emit('news', 'pong send by adonisJS')
  }
}
