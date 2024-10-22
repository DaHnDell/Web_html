function Student(no, name, kor, eng, mat) {
    this.no = no;
    this.name = name;
    this.kor = kor;
    this.eng = eng;
    this.mat = mat;
}

Student();

alert(); // 단순 함수 호출로만으로도 쓸 수 있게 하는 것.

Student.prototype.total = function(){
    return this.kor + this.eng + this.mat;
}
const s1 = new Student(1, '새똥이', 100, 100, 100);
console.log(s1.total());
// this.total = function () {
// }
// this.avg = function () {
//     return this.total() / 3;
// }
// this.toString = function () {
//     return `name : ${this.name}, total : ${this.total()}, avg : ${this.avg()}`;
// }
// }
const arr = [1, 2, 3, 4, 5];
// arr.splice(1, 3);  >> 1번 인덱스를 포함해서 3개까지 지우기.
// arr.splice(1, 3, 10, 20); >> 1번 인덱스에서 3번 인덱스까지 삭제하고, 10, 20 값 추가하기.
Array.prototype.remove = function(index) {
    this.splice(index, 1);
}
arr.remove(3);
console.log(arr);
// 중간 제거, 중간 삭제, 중간 추가까지도 가능

for(let i in s1) {
    if(i == 'name'){
        s1[i] = '소똥이';
    }
    console.log(i, s1[i]);
}

for(let i in arr){
    console.log(i, arr[i]);
}

// in 연산자 , 포함여부에 따른 불린값을 반환
console.log('name' in s1);
console.log('addr' in s1);

for(let i in "abcde"){
    console.log(i, "abcde"[i]); // 문자열도 배열이라서, 연관값을 넣을 수 있다.
}