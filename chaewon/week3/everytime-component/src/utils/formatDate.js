export default function formatDate (createdAt) {
    /* 현재와의 차이 계산 */
    const date = new Date(createdAt);
    const now = Date.now();
    const diffMin = Math.floor((now-date) / (60 * 1000));
    
    /* 날짜 포맷팅을 위한 변수들 */
    const mm = String(date.getMonth() + 1).padStart(2, '0')
    const dd = String(date.getDate()).padStart(2, '0')
    const hh = String(date.getHours()).padStart(2, '0')
    const mi = String(date.getMinutes()).padStart(2, '0')


    if(diffMin < 60){
        if(diffMin < 1) return '방금 전'
        else{
            return `${diffMin}분 전`
        }
    }

    return `${mm}/${dd} ${hh}:${mi}`

}