import { Entity } from "./entity";
import { Picture } from "./picture";

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
