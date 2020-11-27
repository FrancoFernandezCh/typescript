"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Picture = void 0;
const entity_1 = require("./entity");
const photo_orientation_1 = require("./photo-orientation");
class Picture extends entity_1.Entity {
    constructor(id, title, date, orientation) {
        super(id, title);
        this._date = date;
        this._orientation = orientation;
    }
    get orientation() {
        return this._orientation;
    }
    set orientation(orientation) {
        this._orientation = orientation;
    }
    toString() {
        return `[id: ${this._id},
                 title: ${this._title},
                 date: ${this._date}
                 orientation: ${this._orientation}]`;
    }
}
exports.Picture = Picture;
Picture.photoOrientation = photo_orientation_1.PhotoOrientation;
