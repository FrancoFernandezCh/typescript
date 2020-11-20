// INTERFACES
/* Las interfaces una forma poderosa de definir 'contratos' tanto para tu proyecto, como para el codigo externo */

export {}
// funcion para mostrar una fotografia
enum PhotoOrientation{
    Landscape,
    Portrait,
    Square, 
    Panorama
}

interface Picture {
    title: string,
    date: string, 
    orientation: PhotoOrientation
}

function showPicture(picture: Picture) {
    console.log(`[title: ${picture.title}, date: ${picture.date}, orientation: ${picture.orientation}]`)
}

let myPic = {
    title: "test title",
    date: "2020-03",
    orientation: PhotoOrientation.Landscape
}

showPicture(myPic)
showPicture({
    title: "test title",
    date: "2020-03",
    orientation: PhotoOrientation.Portrait
    //extra: "test" // error
})

