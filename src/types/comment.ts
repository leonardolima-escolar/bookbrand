export interface Comment {
  id: number,
  userId: number,
  bookId: number,
  text: string,
  likes: number,
  usersLiked: number[],
}
