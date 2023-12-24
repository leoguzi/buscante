export class BookVolumeInfo {
  title: string;
  authors: string[];
  publisher: string;
  publishedDate: string;
  description: string;
  previewLink: string;
  thumbnail: string;

    constructor(book) {
      this.title= book.volumeInfo?.title,
      this.authors= book.volumeInfo?.authors,
      this.publisher= book.volumeInfo?.publisher,
      this.publishedDate= book.volumeInfo?.publishedDate,
      this.description= book.volumeInfo?.description,
      this.thumbnail= book.volumeInfo?.imageLinks?.thumbnail
      this.previewLink= book.volumeInfo?.previewLink
    }
}
