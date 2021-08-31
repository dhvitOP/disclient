export default class ClientUser {
  constructor(
    private _username: string,
    private _discriminator: string,
    private _verified: boolean,
    private _id: string,
    private _flags: number,
    private _email: string,
    private _bot: boolean,
    private _avatar: string,
  ) {
    
  }

  /**
   * Username of the client
   */
  get username(): string {
    return this._username;
  }
  /**
   * discriminator of the client
   */
  get discriminator(): string {
    return this._discriminator;
  }
  /**
   * client is verified?
   */
  get verified(): boolean {
    return this._verified;
  }
  /**
   * Id of the client
   */
  get id(): string {
    return this._id;
  }
  /**
   * Number of flags of the client
   */
  get flags(): number {
    return this._flags;
  }
  /**
   * email of the client
   */
  get email(): string | null {
    return this._email;
  }
  /**
   * the client is bot?
   */
  get bot(): boolean {
    return this._bot;
  }
  /**
   * Tag of the client
   */
  get tag(): string {
    return `${this._username}#${this._discriminator}`;
  }
  /**
   * Avatar of the client
   */
  get avatar(): string {
    return this._avatar;
  }
}
