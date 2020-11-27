"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
class Entity {
    constructor(id, title) {
        this._id = id;
        this._title = title;
    }
    get id() {
        return this._id;
    }
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
}
exports.Entity = Entity;
