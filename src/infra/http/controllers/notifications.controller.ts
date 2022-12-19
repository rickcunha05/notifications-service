import { SendNotification } from './../../../application/use-cases/send-notification';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { Body, Post, Controller } from '@nestjs/common/decorators';

@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotification: SendNotification) { }
  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;

    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      category,
    });

    return { notification }
  }
}

