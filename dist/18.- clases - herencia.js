"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
//super clase
class Entity {
    constructor(id, title) {
        this._id = id;
        this._title = title;
    }
    // getters & setters
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
}
class Picture extends Entity {
    constructor(id, title, orientation) {
        super(id, title);
        this._orientation = orientation;
    }
    // getters & setters
    get orientation() {
        return this._orientation;
    }
    set orientation(orientation) {
        this._orientation = orientation;
    }
    // comportamiento
    toString() {
        return `[id: ${this._id},
                title: ${this._title},
                orientation: ${this._orientation}]`;
    }
}
class Album extends Entity {
    constructor(id, title) {
        super(id, title);
        this._pictures = [];
    }
    // getters & setters
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
const album = new Album(1, "personal pictures");
const picture = new Picture(1, "valparaiso", PhotoOrientation.Portrait);
album.addPicture(picture);
console.log("album", album);
//accediendo a los miembros privados
picture.id = 100; //private
picture.title = "Another title"; //private
album.title = "Personal Activities"; //private
console.log("album", album);
const item = new Entity(1, "test title");
console.log(item);
