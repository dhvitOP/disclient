"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Embed = void 0;
/**
 * @class Embed
 */
class Embed {
    /**
     * @constructor
     */
    constructor() {
        this.author = null;
        this.title = null;
        this.type = 'rich';
        this.thumbnail = null;
        this.color = null;
        this.description = null;
    }
    /**
     * The content of the author in Embed
     * @param {string} content
     */
    setAuthor(content) {
        return __awaiter(this, void 0, void 0, function* () {
            this.author = content;
        });
    }
    /**
     * The content of the Title in Embed
     * @param {string} content
     */
    setTitle(content) {
        return __awaiter(this, void 0, void 0, function* () {
            this.title = content;
        });
    }
    /**
     * The Type of Embed
     * By default it is set to "rich" embed
     * @param {string} content
     */
    setType(content) {
        return __awaiter(this, void 0, void 0, function* () {
            this.type = content;
        });
    }
    /**
     * The image of the Thumbnail in the Embed
     * @param {string} content
     */
    setThumbnail(img) {
        return __awaiter(this, void 0, void 0, function* () {
            this.thumbnail = img;
        });
    }
    /**
     * The color of the Embed
     * @param {number} content
     */
    setColor(content) {
        return __awaiter(this, void 0, void 0, function* () {
            this.color = content;
        });
    }
    /**
     * The Description of the embed
     * @param {string} content
     */
    setDescription(content) {
        return __awaiter(this, void 0, void 0, function* () {
            this.description = content;
        });
    }
}
exports.Embed = Embed;
