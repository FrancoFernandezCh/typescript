"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const photo_app_1 = require("./photo-app");
const user = new photo_app_1.User(1, "franco.fernandez", "Franco", true);
const album = new photo_app_1.Album(10, "Vacaciones");
const picture = new photo_app_1.Picture(1, "Caleta Portales", "2020-03", photo_app_1.Picture.photoOrientation.Landscape);
user.addAlbum(album);
album.addPicture(picture);
console.log("user", user);
