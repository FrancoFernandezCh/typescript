// INTERFACES
/* Las interfaces una forma poderosa de definir 'contratos' tanto para tu proyecto, como para el codigo externo */

export {};
// funcion para mostrar una fotografia
enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

interface Picture {
  title: string;
  date: string;
  orientation: PhotoOrientation;
}

function showPicture(picture: Picture) {
  console.log(
    `[title: ${picture.title}, date: ${picture.date}, orientation: ${picture.orientation}]`
  );
}

let myPic = {
  title: "test title",
  date: "2020-03",
  orientation: PhotoOrientation.Landscape,
};

showPicture(myPic);
showPicture({
  title: "test title",
  date: "2020-03",
  orientation: PhotoOrientation.Portrait,
  //extra: "test" // error
});

interface PictureConfig {
  title?: string;
  date?: string;
  orientation?: PhotoOrientation;
}

function generatePicture(config: PictureConfig): Object {
  const pic = { title: "default", date: "2020-03" };

  if (config.title) {
    pic.title = config.title;
  }

  if (config.date) {
    pic.date = config.date;
  }

  return pic;
}

let picture = generatePicture({});
console.log("picture", picture)

picture = generatePicture({title:"Viaje a Valparaiso"});
console.log("picture", picture)

picture = generatePicture({title:"Viaje a Valparaiso", date:"2018-01"});
console.log("picture", picture)

//interfaz: usuario
interface User{
    readonly id: number; //solo lectura
    username: string,
    isPro: boolean
}

let user: User;
user = {id: 12, username:"flashparadox", isPro: true}
console.log("user", user)
user.username = "reverseflash"
console.log("user", user)

//user.id = 20; //error por que es solo readonly
console.log("user", user)