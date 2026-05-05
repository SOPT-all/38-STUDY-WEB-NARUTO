import { BoardCategory, type BoardItem } from "../types/board";

export const freeBoardItems: BoardItem[] = [
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
];

export const marketBoardItems: BoardItem[] = [
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

export const imageBoardItems: BoardItem[] = [
  {
    id: 9,
    title: "나루토 슝슝슝 나는야 나루토",
    price: 8000,
    thumbnailUrl:
      "https://i.namu.wiki/i/6z3Rb8VBz4f419xQZAc0-i0KDlz946h1X34EcQ3Gmw7SJRnOM-jJqpC9oZeU-sFeZi8hyp-wZ106vUXntdup2w.webp",
  },
  {
    id: 10,
    title: "나루토 커욤",
    price: 210000,
    thumbnailUrl:
      "https://i.namu.wiki/i/lNstxW54rty66Z2MYg5OgyWqWLsdb6iFbixHlmVi92TvZ0Lq6ppUEn6GdMyCwjDjkuvToq-BWFbO2pJ6jmt37Q.webp",
  },
  {
    id: 11,
    title: "웹개발 눈물나",
    price: 80000,
    thumbnailUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7zL2P1JNcuzB2H7BeCARU9JHh_crsoolGjQ&s",
  },
];
