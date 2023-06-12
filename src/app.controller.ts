import { Controller, Get } from '@nestjs/common'

@Controller()
export class AppController {
  @Get('/hi')
  getRootRoute() {
    return 'hi there!'
  }

  @Get('/bye')
  getByThere() {
    return 'bye there!'
  }
}
