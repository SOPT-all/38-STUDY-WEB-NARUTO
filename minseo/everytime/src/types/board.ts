export enum BoardCategory {
  Free = "자유",
  Market = "장터",
}

export interface BoardItem {
  category: BoardCategory;
  id: number;
  title: string;
  createdAt?: string;
  price?: number;
  thumbnailUrl?: string;
}
