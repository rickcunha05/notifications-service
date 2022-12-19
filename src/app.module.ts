import { HttpModule } from './infra/http/http.module';
import { SendNotification } from './application/use-cases/send-notification';
import { DatabaseModule } from './infra/database/database.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [HttpModule, DatabaseModule],
  providers: [SendNotification]
})
export class AppModule { }
