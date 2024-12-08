import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class TaskService {
  private readonly logger = new Logger(TaskService.name);

  @Cron(CronExpression.EVERY_10_SECONDS)  // 30秒毎に実行
  handleCron() {
    this.logger.debug('10秒毎のタスクが実行されました');
  }
}
