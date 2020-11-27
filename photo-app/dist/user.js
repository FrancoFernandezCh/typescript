"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
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
