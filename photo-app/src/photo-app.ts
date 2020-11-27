export enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

export abstract class Entity {
  //propiedades
  protected readonly _id: number;
  protected _title: string;

  constructor(id: number, title: string) {
    this._id = id;
    this._title = title;
  }

  get id() {
    return this._id;
  }

  get title() {
    return this._title;
  }

  set title(title: string) {
    this._title = title;
  }
}

export class Picture extends Entity {
  public static photoOrientation = PhotoOrientation;

  _orientation: PhotoOrientation;
  _date: string;

  public constructor(id: number, title: string, date:string, orientation: PhotoOrientation) {
    super(id, title);
    this._date = date;
    this._orientation = orientation;
  }

  get orientation() {
    return this._orientation;
  }

  set orientation(orientation: PhotoOrientation) {
    this._orientation = orientation;
  }

  public toString() {
    return `[id: ${this._id},
               title: ${this._title},
               date: ${this._date}
               orientation: ${this._orientation}]`;
  }
}

export class Album extends Entity {
  _pictures: Picture[];

  public constructor(id: number, title: string) {
    super(id, title);
    this._pictures = [];
  }

  get pictures() {
    return this._pictures;
  }

  set pictures(pictures: Picture[]) {
    this._pictures = pictures;
  }

  public addPicture(picture: Picture) {
    this._pictures.push(picture);
  }
}

export class User {
  private album: Album[];

  constructor(
    private id: number,
    private username: string,
    private firstname: string,
    private isPro: boolean
  ) {
    this.album = [];
  }

  public addAlbum(album: Album) {
    this.album.push(album);
  }
}
