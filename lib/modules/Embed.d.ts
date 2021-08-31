import { fieldObject, footerObject } from "./Utils.embed";
export declare class Embed {
    private _title;
    private _description;
    private _type;
    private _url;
    private _timestamp;
    private _color;
    private _footer;
    private _image;
    private _thumbnail;
    private _video;
    private _author;
    private _fields;
    constructor();
    setTitle(title: string): Promise<void>;
    setDescription(content: string): Promise<void>;
    setType(type: string): Promise<void>;
    setUrl(url: string): Promise<void>;
    setTimestamp(yesorno: boolean): Promise<void>;
    setColor(color: number): Promise<void>;
    setFooter(options: footerObject): Promise<void>;
    create(): Promise<{
        title: string | null;
        description: string | null;
        color: number | null;
        footer: footerObject | null;
        type: string;
        timestamp: Date | null;
        thumbnail: object | null;
        video: object | null;
        author: object | null;
        fields: fieldObject[];
        url: string | null;
    }>;
}
