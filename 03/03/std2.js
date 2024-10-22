class Student {
    constructor(no, name, score){
        this._no = no;
        this._name = name;
        this._score = score;
    }
    toString(){
        return `학번 = ${this._no}`;
    }
    get getName() {
        return this._name;
    }
    set setName(name){
        this._name = name;
    }
    get no() {
        return this._no;
    }
    set no(n){
        if(n < 0){
            return;
        }
        this._no = n;
    }
} // 생성자로서 만들어진 것들은 인스턴스에서 활용하기 위함이다.
// 생성자 문법을 통해 내부에 생성된 메서드들은 모두 프로토타입에서 선언되는 형식으로 바뀐다.
// 위 문법을 사용하지 않을 경우 투스트링을 통해서 클래스를 출력할 경우 메서드가 어나니머스 펑션으로 나오는 등의 문제가 발생한다.

const student = new Student(1, '111', '111');
console.log(student.no);
console.log(student.getName);
student.setName= "일일일";
console.log(student.getName);
console.log(student);
console.log(student.toString());

for(let i in student) {
    console.log(i);
}






let num = 10; // type of = Number
console.log(typeof num);
num = new Number(20); // type of =  object 
console.log(typeof num);
// 위 아래 서로 타입이 다르지만 

num.toFixed()
num = new Number(20.1234);
console.log(num.toFixed(2));
console.log(typeof num);

let str = "abcd";

new Number("1234");

str = new String("ABCD");

