import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {}
  constructor(@Inject('MATH_SERVICE') private client: ClientProxy){}
  
  @Post('sum')
  accumulate(@Body('numbers') numbers = [1,2,3,4,5]) {
    const pattern = {cmd: 'sum'}
    const payload = numbers
    return this.client.send(pattern, payload)
  }

  @Get()
  getHello() {
    return 'Hello World!';
  }
}
