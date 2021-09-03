type ButtonStyle = "Primary" | "Secondary" | "Success" | "Danger" | "Link";
type EmojiOptions = {
    id: string,
    name: string
}

export class Button {
    private _type: number;
    private _style: number | null;
    private _label: string | null;
    private _emoji: EmojiOptions | null;
    private _custom_id: string | null;
    private _url: string | null;
    private _disabled: boolean | null;

    constructor(){
        this._type = 2;
        this._style = null;
        this._label = null;
        this._emoji = null;
        this._custom_id = null;
        this._url = null;
        this._disabled = null;  
    }

    async setLabel(label: string){
        this._label = label;
    }

    async setID(id: string) {
        this._custom_id = id;
    }

    async setUrl(url: string) {
        this._url = url;
    }

    async setDisabled(yesorno: boolean) {
        this._disabled =  yesorno;
    }

    async setStyle(options: ButtonStyle) {
        switch(options){
            case "Primary":
                this._style = 1;
            break;
            case "Secondary":
                this._style = 2;
            break;
            case "Success":
                this._style = 3;
            break;
            case "Danger":
                this._style = 4;
            break;
            case "Link":
                this._style = 5;
            break;
        }
    }

    async setEmoji(options: EmojiOptions){
        this._emoji = options;
    }

    get create(){
        const data = {
            type: this._type,
            style: this._style,
            label: this._label,
            emoji: this._emoji,
            custom_id: this._custom_id,
            url: this._url,
            disabled: this._disabled
        }
        return data;
    }
}