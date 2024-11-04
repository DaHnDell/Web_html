let number = 20;
// 10100
// 14[1]

// 연관 배열

let binaryNumber = number.toString(2);
let hexNumber = number.toString(16);

console.log(binaryNumber, hexNumber);

let result = parseInt(binaryNumber, 2);
console.log(result);
// 소수를 이진화 하는 데서 발생하는 오차를 해결하려면 계산하는 오퍼랜드를 정수화

const str = "가나다라가나다라가나다라가나다라가나다라";
console.log(str.charAt(2), str[2]);
// includes 메서드를 사용할 경우에 java의 contains와 같은 효과를 얻을 수 있다.

console.log(str.slice(1, 3), str.substring(1, 3), str.substr(1, 3));

// replace를 사용할 때는 늘 주의할 것
console.log(str.replace('가', '마'));
console.log(str.replaceAll('가', '마'));

// charCodeAt(idx)
let s = "";
for(let i = 0; i < 26; i++){
    s += String.fromCharCode(65+i);
}
console.log(s.charCodeAt(0));

const arr = [10, 20, 3, 44, 5];
arr.sort((a, b) => a - b); // 파라미터로 함수 콜백 + 콜백된 함수는 파라미터 두개
arr.sort(function(a, b){
    return b - a;
})
console.log(arr);

// for in = 인덱스가 필요한 경우 사용
// for of = 이터러블 객체에 사용 가능, js에선 배열밖에 없다.

for(let i of arr){
    console.log(i);
}

const multi = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 11, 12, 13]
];
// for in
for(let i in multi) {
    for(let j in multi[i]){
        console.log(multi[i][j]);
    }
}
// for of
for(let sub of multi) {
    for(let value of sub){
        console.log(value);
    }
}
