import { Content } from '../entities/content';
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
    async execute(request: SendNotificationRequest): Promise<SendoNotificationResponse> {
        const { recipientId, content, category } = request;

        const notification = new Notification({
            recipientId,
            content: new Content(content),
            category,
        });

        return {
            notification,
        }
    }
}