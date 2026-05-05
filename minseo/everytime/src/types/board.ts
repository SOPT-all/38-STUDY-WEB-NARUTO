export enum BoardCategory {
  Free = "자유",
  Market = "장터",
}

export interface BoardItem {
  id: number;
  title: string;
  category?: BoardCategory;
  createdAt?: string;
  price?: number;
  thumbnailUrl?: string;
}
