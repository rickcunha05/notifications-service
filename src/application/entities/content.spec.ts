import { Content } from './content';

describe('Notification content', () => {
    it('it should be able to create a notification content', () => {
        expect(() => new Content('Você recebeu uma solicitação de amizade!')).toBeTruthy();
    })
    it('is should not be able to create a notification content with less than 5 characters', () => {
        expect(() => new Content('a'.repeat(2))).toThrow()
    })
    it('is should not be able to create a notification content with more than 241 characters', () => {
        expect(() => new Content('a'.repeat(241))).toThrow()
    })

})
