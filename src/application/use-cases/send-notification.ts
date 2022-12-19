import { Content } from '../entities/content';
import { NotificationsRepository } from '../repositories/notifications-repository';
import { Notification } from './../entities/notification';


interface SendNotificationRequest {
    recipientId: string,
    content: string,
    category: string
}
interface SendoNotificationResponse {
    notification: Notification;
}
export class SendNotification {
    constructor(private notificationsRepository: NotificationsRepository) { }

    async execute(request: SendNotificationRequest): Promise<SendoNotificationResponse> {
        const { recipientId, content, category } = request;

        const notification = new Notification({
            recipientId,
            content: new Content(content),
            category,
        });
        await this.notificationsRepository.create(notification);
        return {
            notification,
        }
    }
}