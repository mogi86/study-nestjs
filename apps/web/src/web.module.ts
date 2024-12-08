import { Module } from '@nestjs/common';
import { WebController } from './web.controller';
import { WebCatsController } from './web.cats.controller';
import { WebService } from './web.service';

@Module({
  imports: [],
  controllers: [WebController, WebCatsController],
  providers: [WebService],
})
export class WebModule {}
