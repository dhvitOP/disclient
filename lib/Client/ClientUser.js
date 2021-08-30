"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClientUser {
    constructor(_username, _discriminator, _verified, _id, _flags, _email, _bot, _avatar) {
        this._username = _username;
        this._discriminator = _discriminator;
        this._verified = _verified;
        this._id = _id;
        this._flags = _flags;
        this._email = _email;
        this._bot = _bot;
        this._avatar = _avatar;
    }
    /**
     * Username of the client
     */
    get username() {
        return this._username;
    }
    /**
     * discriminator of the client
     */
    get discriminator() {
        return this._discriminator;
    }
    /**
     * client is verified?
     */
    get verified() {
        return this._verified;
    }
    /**
     * Id of the client
     */
    get id() {
        return this._id;
    }
    /**
     * Number of flags of the client
     */
    get flags() {
        return this._flags;
    }
    /**
     * email of the client
     */
    get email() {
        return this._email;
    }
    /**
     * the client is bot?
     */
    get bot() {
        return this._bot;
    }
    /**
     * Tag of the client
     */
    get tag() {
        return `${this._username}#${this._discriminator}`;
    }
    /**
     * Avatar of the client
     */
    get avatar() {
        return this._avatar;
    }
}
exports.default = ClientUser;
