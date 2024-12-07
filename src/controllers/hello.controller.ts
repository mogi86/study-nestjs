import { Controller, Get, Param } from '@nestjs/common';

@Controller('hello')
export class HelloController {
  @Get()
  getHello(): string {
    return 'Hello World!';
  }

  @Get(':name')
  getHelloWithName(@Param('name') name: string): string {
    return `Hello ${name}!`;
  }
} 