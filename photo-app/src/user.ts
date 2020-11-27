import { Album } from "./album";

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
