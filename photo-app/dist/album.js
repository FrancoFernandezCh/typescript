"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Album = void 0;
const entity_1 = require("./entity");
class Album extends entity_1.Entity {
    constructor(id, title) {
        super(id, title);
        this._pictures = [];
    }
    get pictures() {
        return this._pictures;
    }
    set pictures(pictures) {
        this._pictures = pictures;
    }
    addPicture(picture) {
        this._pictures.push(picture);
    }
}
exports.Album = Album;
