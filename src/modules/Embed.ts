/**
 * @class Embed
 */
export class Embed {
  public author: string | null;
  public title: string | null;
  public thumbnail: string | null;
  public color: number | null;
  public type: string | null;
  public description: string | null;

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
  async setAuthor(content: string) {
    this.author = content;
  }
  /**
   * The content of the Title in Embed
   * @param {string} content
   */
  async setTitle(content: string) {
    this.title = content;
  }
  /**
   * The Type of Embed
   * By default it is set to "rich" embed
   * @param {string} content
   */
  async setType(content: string) {
    this.type = content;
  }
  /**
   * The image of the Thumbnail in the Embed
   * @param {string} content
   */
  async setThumbnail(img: string) {
    this.thumbnail = img;
  }
  /**
   * The color of the Embed
   * @param {number} content
   */
  async setColor(content: number) {
    this.color = content;
  }
  /**
   * The Description of the embed
   * @param {string} content
   */
  async setDescription(content: string) {
    this.description = content;
  }
}