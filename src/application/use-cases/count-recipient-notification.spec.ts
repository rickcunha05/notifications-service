import { CountRecipientNotification } from './count-recipient-notifications';
import { Content } from '@application/entities/content';
import { Notification } from '@application/entities/notification';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';

describe('Count recipients notifications', () => {
    it('should be able to count recipient a notification', async () => {
        const notificationsRepository = new InMemoryNotificationsRepository();
        const countRecipientNotifications = new CountRecipientNotification(notificationsRepository);

        await notificationsRepository.create(
            new Notification({
                content: new Content('This is a notification'),
                category: 'Social',
                recipientId: 'recipient-1'
            })
        )
        await notificationsRepository.create(
            new Notification({
                content: new Content('This is a notification'),
                category: 'Social',
                recipientId: 'recipient-2'
            })
        )

        const { count } = await countRecipientNotifications.execute({
            recipientId: 'recipient-1'
        })

        expect(count)
    })
})