import {User, Album, Picture} from "./photo-app";

const user = new User(1, "franco.fernandez", "Franco", true);
const album = new Album(10, "Vacaciones");
const picture = new Picture(1, "Caleta Portales", "2020-03", Picture.photoOrientation.Landscape);

user.addAlbum(album);
album.addPicture(picture);

console.log("user", user);