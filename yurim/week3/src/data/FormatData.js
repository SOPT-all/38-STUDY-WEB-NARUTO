export const formatDate = (rawData) => {
  const now = new Date(); // 현재시간
  const uploadDate = new Date(rawData); // 입력받은시간

  const nowHour = now.getHours();
  const nowMinute = now.getMinutes();
  const uploadHour = uploadDate.getHours();
  const uploadMinute = uploadDate.getMinutes();

  const minusHour = nowHour - uploadHour;
  const minusMinute = nowMinute - uploadMinute;

  const gapMinute = minusHour * 60 + minusMinute;

  if (gapMinute >= 0 && gapMinute < 60) {
    return `${minusMinute}분 전`;
  }

  // 인덱스개념으로 나타내기
  // 시간데이터 글자 순서(인덱스)
  const month = rawData.slice(5, 7);
  const day = rawData.slice(8, 10);
  const hour = rawData.slice(11, 13);
  const minute = rawData.slice(14, 16);

  return `${month}/${day} ${hour}:${minute}`;
};
