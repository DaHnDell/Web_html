const now = new Date();
// console.log(now); // utc, 즉 태평양 표준시가 출력된다.
// console.log(now.getFullYear, now.getMonth()+1, now.getDate()); // getYear를 할 경우에 90년대 기준의 표기법으로 표기된다.
// console.log(now.getHours(), now.getMinutes()+1, now.getSeconds());
// console.log(now.getTime(), now.getDay()); // getTime = epochTime // getDay = 요일 정보

// getDay를 사용하여 현재의 요일을 한글로 출력하세요.
switch (now.getDay()) { // 메서드는 호출할 때 무조건 괄호 쓰기,
    case 0:
        console.log('일요일');
        break;
    case 1:
        console.log('월요일');
        break;
    case 2:
        console.log('화요일');
        break;
    case 3:
        console.log('수요일');
        break;
    case 4:
        console.log('목요일');
        break;
    case 5:
        console.log('금요일');
        break;
    case 6:
        console.log('토요일');
        break;
    default:
        break;
}

const day = ['일', '월', '화', '수', '목', '금', '토'];
console.log(day[now.getDay()] + "요일"); // 메서드는 호출할 때 무조건 괄호 쓰기,
