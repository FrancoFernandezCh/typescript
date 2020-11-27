export {}

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama,
}

class Picture {
    //propiedades
    id: number;
    title: string;
    orientation: PhotoOrientation;


    constructor(id:number,
                title:string,
                orientation: PhotoOrientation){
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }

    // comportamiento
    toString(){
        return `[id: ${this.id},
                title: ${this.title},
                orientation: ${this.orientation}]`
    }
}

class Album {
    id: number;
    title: string;
    pictures: Picture[]

    constructor (id: number, title: string){
        this.id = id;
        this.title = title;
        this.pictures = [];
    }

    addPicture(picture: Picture){
        this.pictures.push(picture);
    }
}

const album: Album = new Album(1, "personal pictures")
const picture: Picture = new Picture(1, "valparaiso", PhotoOrientation.Portrait)

album.addPicture(picture)

console.log("album",album)