export default class ClientUser {
    private _username;
    private _discriminator;
    private _verified;
    private _id;
    private _flags;
    private _email;
    private _bot;
    private _avatar;
    constructor(_username: string, _discriminator: string, _verified: boolean, _id: string, _flags: number, _email: string, _bot: boolean, _avatar: string);
    /**
     * Username of the client
     */
    get username(): string;
    /**
     * discriminator of the client
     */
    get discriminator(): string;
    /**
     * client is verified?
     */
    get verified(): boolean;
    /**
     * Id of the client
     */
    get id(): string;
    /**
     * Number of flags of the client
     */
    get flags(): number;
    /**
     * email of the client
     */
    get email(): string | null;
    /**
     * the client is bot?
     */
    get bot(): boolean;
    /**
     * Tag of the client
     */
    get tag(): string;
    /**
     * Avatar of the client
     */
    get avatar(): string;
}
