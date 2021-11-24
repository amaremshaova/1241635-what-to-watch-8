type UserType = {
    id: number,
    name: string,
}

export type ReviewType = {
  id: number,
  user: UserType,
  rating: number,
  comment: string,
  date: string,
};

export type CommentPost = {
  rating: number,
  comment: string;
}

