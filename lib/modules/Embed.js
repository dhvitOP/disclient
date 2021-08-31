"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Embed = void 0;
class Embed {
    constructor() {
        this._title = null;
        this._description = null;
        this._type = "rich";
        this._url = null;
        this._timestamp = null;
        this._color = null;
        this._footer = null;
        this._image = null;
        this._thumbnail = null;
        this._video = null;
        this._author = null;
        this._fields = [];
    }
    async setTitle(title) {
        this._title = title;
    }
    async setDescription(content) {
        this._description = content;
    }
    async setType(type) {
        this._type = type;
    }
    async setUrl(url) {
        this._url = url;
    }
    async setTimestamp(yesorno) {
        if (yesorno == true) {
            this._timestamp = new Date();
        }
        else {
            this._timestamp = null;
        }
    }
    async setColor(color) {
        this._color = color;
    }
    async setFooter(options) {
        this._footer = options;
    }
    async create() {
        const data = {
            title: this._title,
            description: this._description,
            color: this._color,
            footer: this._footer,
            type: this._type,
            timestamp: this._timestamp,
            thumbnail: this._thumbnail,
            video: this._video,
            author: this._author,
            fields: this._fields,
            url: this._url,
        };
        return data;
    }
}
exports.Embed = Embed;
