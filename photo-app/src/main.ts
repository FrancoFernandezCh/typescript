import { Album } from "./album";
import { PhotoOrientation } from "./photo-orientation";
import { Picture } from "./picture";
import { User } from "./user";


const user = new User(1, "franco.fernandez", "Franco", true);
const album = new Album(10, "Vacaciones");
const picture = new Picture(1, "Caleta Portales", "2020-03", PhotoOrientation.Landscape);

user.addAlbum(album);
album.addPicture(picture);

console.log("user", user);