/**
 * @class Embed
 */
export declare class Embed {
    author: string | null;
    title: string | null;
    thumbnail: string | null;
    color: number | null;
    type: string | null;
    description: string | null;
    /**
     * @constructor
     */
    constructor();
    /**
     * The content of the author in Embed
     * @param {string} content
     */
    setAuthor(content: string): Promise<void>;
    /**
     * The content of the Title in Embed
     * @param {string} content
     */
    setTitle(content: string): Promise<void>;
    /**
     * The Type of Embed
     * By default it is set to "rich" embed
     * @param {string} content
     */
    setType(content: string): Promise<void>;
    /**
     * The image of the Thumbnail in the Embed
     * @param {string} content
     */
    setThumbnail(img: string): Promise<void>;
    /**
     * The color of the Embed
     * @param {number} content
     */
    setColor(content: number): Promise<void>;
    /**
     * The Description of the embed
     * @param {string} content
     */
    setDescription(content: string): Promise<void>;
}
