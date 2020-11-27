import { Entity } from "./entity";
import { PhotoOrientation } from "./photo-orientation";

export class Picture extends Entity {
  public static photoOrientation = PhotoOrientation;

  _orientation: PhotoOrientation;
  _date: string;

  public constructor(
    id: number,
    title: string,
    date: string,
    orientation: PhotoOrientation
  ) {
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
