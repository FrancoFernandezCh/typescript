export {}

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama,
}

//super clase
abstract class Entity{
     //propiedades
     protected readonly _id: number;
     protected _title: string;

     constructor(id:number, title:string){
         this._id = id;
         this._title = title;
     }

     // getters & setters
    get id(){
        return this._id;
    }
    /*set id(id:number){
        this._id = id;
    }*/

    get title(){
        return this._title;
    }

    set title(title:string){
        this._title = title;
    }
}

class Picture extends Entity{
    public static photoOrientation = PhotoOrientation;

    //propiedades
    _orientation: PhotoOrientation;


    public constructor(id:number,
                title:string,
                orientation: PhotoOrientation){
        super(id, title);
        this._orientation = orientation;
    }

    // getters & setters
    get orientation(){
        return this._orientation;
    }

    set orientation(orientation:PhotoOrientation){
        this._orientation = orientation;
    }

    // comportamiento
    public toString(){
        return `[id: ${this._id},
                title: ${this._title},
                orientation: ${this._orientation}]`
    }
}

class Album extends Entity{
    _pictures: Picture[]

    public constructor (id: number, title: string){
        super(id, title);
        this._pictures = [];
    }

    // getters & setters
    get pictures(){
        return this._pictures;
    }

    set pictures(pictures: Picture[]){
        this._pictures=pictures;
    }

    public addPicture(picture: Picture){
        this._pictures.push(picture);
    }
}

const album: Album = new Album(1, "personal pictures")
const picture: Picture = new Picture(1, "valparaiso", PhotoOrientation.Portrait)

album.addPicture(picture)
console.log("album",album)

//accediendo a los miembros privados
//picture.id = 100; //private
picture.title = "Another title"; //private
album.title = "Personal Activities";//private
console.log("album", album)

//const item = new Entity(1, "test title"); //error por querer instanciar una clase abstracta
//console.log(item)

// prueba de la propiedad estatica
console.log("PhotoOrientation", Picture.photoOrientation.Landscape)