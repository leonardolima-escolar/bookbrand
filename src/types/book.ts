export interface Book {
  id: number,
  title: string,
  author: string,
  abstract: string,
  image: string,
  users: number[],
  comments: number[],
}
