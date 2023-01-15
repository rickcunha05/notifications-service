import { randomUUID } from 'node:crypto';
import { Replace } from '@helpers/Replace';
import { Content } from './content';
export interface NotificationProps {
    recipientId: string;
    content: Content;
    category: string;
    readAt?: Date | null;
    canceledAt?: Date | null;
    createdAt: Date;

}
export class Notification {
    private _id: string; // utilizando o _ para que no get eu posso utilizar apenas id
    private props: NotificationProps;

    constructor(props: Replace<NotificationProps, { createdAt?: Date }>, id?: string) {
        // O createdAt deixa de ser obrigatório e passa ser opcional, porém utilizando replace conseguimos sempre a data e hora atual
        this._id = id ?? randomUUID();
        this._id = randomUUID();
        this.props = {
            ...props,
            createdAt: props.createdAt ?? new Date(),
        }
    }
    public get id() {
        return this._id;
    }
    //Geters e setters RecipientId
    public set recipientId(recipientId: string) {
        this.props.recipientId = recipientId;
    }
    public get recipientId(): string {
        return this.props.recipientId;
    }
    //Geters e setters Content
    public set content(content: Content) {
        this.props.content = content;
    }
    public get content(): Content {
        return this.props.content;
    }
    //Geters e setters Categories

    public set category(category: string) {
        this.props.category = category;
    }
    public get category(): string {
        return this.props.category;
    }
    //Geters e setters readAt
    public read() {
        this.props.readAt = new Date();
    }
    public unread() {
        this.props.readAt = null;
    }

    public get readAt(): Date | null | undefined {
        return this.props.readAt;
    }
    //Get canceledAt não necessita de um set pois não tem necessita de alteração na criação da data
    public cancel() {
        return this.props.canceledAt = new Date();
    }

    public get canceledAt(): Date | null | undefined {
        return this.props.canceledAt;
    }
    //Get createAt não necessita de um set pois não tem necessita de alteração na criação da data
    public get createdAt(): Date {
        return this.props.createdAt;
    }
}