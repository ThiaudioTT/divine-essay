export interface IBibleResponse {
  reference: string;
  verses: IVerse[];
  text: string;
}

interface IVerse {
  book_id: string;
  book_name: string;
  chapter: number;
  verse: number;
  text: string;
}
