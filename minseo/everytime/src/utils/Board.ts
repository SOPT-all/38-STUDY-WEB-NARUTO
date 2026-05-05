const MINUTE = 60 * 1000;
const HOUR = 60 * MINUTE;

export const formatBoardCreatedAt = (createdAt: string) => {
  const now = new Date();
  const createdDate = new Date(createdAt);

  const diffTime = now.getTime() - createdDate.getTime();

  if (diffTime >= 0 && diffTime < HOUR) {
    const diffMinutes = Math.floor(diffTime / MINUTE);

    return `${diffMinutes}분 전`;
  }

  const month = String(createdDate.getMonth() + 1).padStart(2, "0");
  const date = String(createdDate.getDate()).padStart(2, "0");
  const hours = String(createdDate.getHours()).padStart(2, "0");
  const minutes = String(createdDate.getMinutes()).padStart(2, "0");

  return `${month}/${date} ${hours}:${minutes}`;
};

export const formatPrice = (price: number) => {
  return price.toLocaleString("ko-KR") + "원";
};
