"use strict";
// INTERFACES
/* Las interfaces una forma poderosa de definir 'contratos' tanto para tu proyecto, como para el codigo externo */
Object.defineProperty(exports, "__esModule", { value: true });
// funcion para mostrar una fotografia
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
function showPicture(picture) {
    console.log("[title: " + picture.title + ", date: " + picture.date + ", orientation: " + picture.orientation + "]");
}
var myPic = {
    title: "test title",
    date: "2020-03",
    orientation: PhotoOrientation.Landscape,
};
showPicture(myPic);
showPicture({
    title: "test title",
    date: "2020-03",
    orientation: PhotoOrientation.Portrait,
});
function generatePicture(config) {
    var pic = { title: "default", date: "2020-03" };
    if (config.title) {
        pic.title = config.title;
    }
    if (config.date) {
        pic.date = config.date;
    }
    return pic;
}
var picture = generatePicture({});
console.log("picture", picture);
picture = generatePicture({ title: "Viaje a Valparaiso" });
console.log("picture", picture);
picture = generatePicture({ title: "Viaje a Valparaiso", date: "2018-01" });
console.log("picture", picture);
var user;
user = { id: 12, username: "flashparadox", isPro: true };
console.log("user", user);
user.username = "reverseflash";
console.log("user", user);
