import { Controller, Get, Param } from '@nestjs/common';

@Controller('cats')
export class WebCatsController {
  @Get()
  getCats(): string {
    return 'Cats';
  }

  @Get(':id')
  getCat(@Param('id') id: string): string {
    return `Cat ${id}`;
  }
}
