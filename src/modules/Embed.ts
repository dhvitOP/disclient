import { fieldObject, footerObject } from "./Utils.embed";

export class Embed {
  private _title: string | null;
  private _description: string | null;
  private _type: string;
  private _url: string | null;
  private _timestamp: Date | null;
  private _color: number | null;
  private _footer: footerObject | null;
  private _image: object | null;
  private _thumbnail: object | null;
  private _video: object | null;
  private _author: object | null;
  private _fields: fieldObject[];

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

  async setTitle(title: string) {
    this._title = title;
  }

  async setDescription(content: string) {
    this._description = content;
  }

  async setType(type: string) {
    this._type = type;
  }

  async setUrl(url: string){
    this._url = url;
  }

  async setTimestamp(yesorno: boolean){
    if(yesorno == true){
      this._timestamp = new Date();
    } else {
      this._timestamp = null;
    }
  }

  async setColor(color: number){
    this._color = color;
  }

  async setFooter(options: footerObject){
    this._footer = options;
  }
  
  async create(){
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
    }
    return data;
  }
}
