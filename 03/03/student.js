let student1 = {
    no: 1,
    name: 'Musk',
    kor: 90,
    eng: 80,
    mat: 100,
    total: function () {
        return this.kor + this.eng + this.mat;
    },
    avg: function () {
        return this.total() / 3;
    },
    toString: function () {
        return `name : ${this.name}, total : ${this.total()}, avg : ${this.avg()}`;
    }
};
// 객체와 객체 사이의 구분자로는 늘 콤마(,) 를 사용해야 한다.

const students = [];
students.push(student1);
students.push({
    no: 2,
    name: 'Mark',
    kor: 70,
    eng: 70,
    mat: 80,
    total: function () {
        return this.kor + this.eng + this.mat;
    },
    avg: function () {
        return this.total() / 3;
    },
    toString: function () {
        return `name : ${this.name}, total : ${this.total()}, avg : ${this.avg()}`;
    }
});

students.push({
    no: 3,
    name: 'Gates',
    kor: 60,
    eng: 100,
    mat: 100,
    total: function () {
        return this.kor + this.eng + this.mat;
    },
    avg: function () {
        return this.total() / 3;
    },
    toString: function () {
        return `name : ${this.name}, total : ${this.total()}, avg : ${this.avg()}`;
    }
});

// 위와 같은 형식의 
// 생성자의 역할 = new 키워드 + 
// 객체리터럴 자체를 넣어서 선언할 수도 있습니다
// console.log(student1.total());
// console.log(student1.avg());
// console.log(student1.toString());

function Student(no, name, kor, eng, mat) {
    //     let _no = no;
    //     // 언더바를 사용할 경우 내부 지역에서만 사용한다는 목적을 지닌다.
    //     this.setNo = function(no) {
    //         _no = no
    //     }
    //     this.getNo = function(){
    //         return _no;
    //     }
    this.no = no;
    this.name = name;
    this.kor = kor;
    this.eng = eng;
    this.mat = mat;
    this.total = function () {
        return this.kor + this.eng + this.mat;
    }
    this.avg = function () {
        return this.total() / 3;
    }
    this.toString = function () {
        return `name : ${this.name}, total : ${this.total()}, avg : ${this.avg()}`;
    }
}
// 개념적으로 접근제한자를 사용하는 것. 지역변수의 특징을 활용했다.
const student3 = new Student(4, 'Jdragon', 100, 60, 60);
students.push(student3);
students.push(new Student(5, 'Palmer', 100, 100, 70));

for(let fi = 0; fi < students.length; fi++){
    console.log(students[fi].total());
}
// console.log(student3.getNo());
// console.log(student3.setNo(10));
// console.log(student3.getNo());

// 클래스 간의 관계는 상속, 포함이 있다. ( 대부분 포함임 )

Student.a = 10;
// 프로토타입 >> 객체의 공간 >> 메서드를 저장하기 위해서 사용한다.
// 메서드는 원래 설계도의 역할이고, 변함이 없어야 한다. 이는 JVM에서 메서드 에어리아로 따로 관리하는 것과 일맥상통한다.
// 단지 자바스크립트에서는 위 역할을 코더가 직접 프로토타입을 통해 접근하고, 관리하는 것의 차이가 있다.

console.log(Student.a);
console.log.prototype
// 이 프로토타입이라는 공간은 이 함수로 인해 만들어진 인스턴스의 공간이 된다. 
Student.prototype.area = 20;
const student4 = new Student(6, '워즈니악', 90, 100, 100);
console.log(student4.area);
console.log(student4.a);

