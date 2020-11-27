"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.Album = exports.Picture = exports.Entity = exports.PhotoOrientation = void 0;
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation = exports.PhotoOrientation || (exports.PhotoOrientation = {}));
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
class Picture extends Entity {
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
Picture.photoOrientation = PhotoOrientation;
class Album extends Entity {
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
class User {
    constructor(id, username, firstname, isPro) {
        this.id = id;
        this.username = username;
        this.firstname = firstname;
        this.isPro = isPro;
        this.album = [];
    }
    addAlbum(album) {
        this.album.push(album);
    }
}
exports.User = User;
