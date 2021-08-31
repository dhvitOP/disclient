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

  set setTitle(title: string) {
    this._title = title;
  }

  set setDescription(content: string) {
    this._description = content;
  }

  set setType(type: string) {
    this._type = type;
  }

  set setUrl(url: string){
    this._url = url;
  }

  set setTimestamp(yesorno: boolean){
    if(yesorno == true){
      this._timestamp = new Date();
    } else {
      this._timestamp = null;
    }
  }

  set setColor(color: number){
    this._color = color;
  }

  set setFooter(options: footerObject){
    this._footer = options;
  }
  
  set setFields(fields: fieldObject[]){
    this._fields = fields;
  }
}
