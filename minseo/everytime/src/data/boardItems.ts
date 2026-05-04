import { BoardCategory, type BoardItem } from "../types/board";

export const boardItems: BoardItem[] = [
  {
    category: BoardCategory.Free,
    id: 1,
    title: "수험생인데",
    createdAt: "2025-11-15T15:10:00",
  },
  {
    category: BoardCategory.Free,
    id: 2,
    title: "한국역사의해 한준수고수님",
    createdAt: "2026-05-01T16:12:25",
  },
  {
    category: BoardCategory.Free,
    id: 3,
    title: "아니 뭔 시험을 이렇게 내냐",
    createdAt: "2025-05-02T15:16:00",
  },
  {
    category: BoardCategory.Free,
    id: 4,
    title: "나비야나비야어디를가느냐깡총깡총뛰어서어디",
    createdAt: "2026-05-03T16:14:25",
  },
  {
    category: BoardCategory.Market,
    id: 5,
    title: "공학수학 책 팝니다(거의 새 거)",
    createdAt: "2025-05-04T13:10:00",
  },
  {
    category: BoardCategory.Market,
    id: 6,
    title: "원룸 양도 받을 분",
    createdAt: "2025-05-04T13:12:00",
  },
  {
    category: BoardCategory.Market,
    id: 7,
    title: "지반소 25 기출 구함",
    createdAt: "2025-05-04T13:13:00",
  },
  {
    category: BoardCategory.Market,
    id: 8,
    title: "햄버거 쿠폰 반값에 팔아여",
    createdAt: "2025-05-04T13:14:00",
  },
];
