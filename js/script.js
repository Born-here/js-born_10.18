// 스크립트

// 선택자
// id 선택자
document.getElementById('id');
// class선택자
document.getElementsByClassName('class');
//tag 선택자
document.getElementsByTagName('tag');
// query선택자
document.querySelector('#id');
document.querySelector('.class');
document.querySelector('tag');

// 변수선언
// let : 재할당 가능
let a = 1;
console.log(a);
// a라는 변수에 1을 할당한것.
// let a >>변수 생성 (a라는 변수 그릇을 만든것,)
// 콘솔창으로 출력하면 a라는 변수(그릇)에 뭐가 들어있는지 보는것.
a = 2;
console.log(a);
// 블록 볌위 변수를 다시 선언하지 않기 위해서 let을 또 쓰지 않음.

// const : 재할당 불가능
const b = 3;
console.log(b);
// 여기까진 let과 동일한 방식.
// b = 4;
// console.log(b);
// typeerror > 재할당 불가능

// 함수 선언
// 일반함수 : Function
function 함수명() {
  // 실행될 코드
}
// 함수호출
함수명();

// 객체 선언
const obj = {
  left: '0',
  top: '0',
  backgroundColor: 'red', // js에서는 카멜스타일로 적어야한다
  // 'background-color': 'red' // css의 케밥스타일로 적고싶을 땐 따옴표('')를 적어야 한다
};

// 산술 연산자
console.log(1 + 2);
console.log(5 % 3); // 2
// list가 많은 상황에서 마지막 아이만 알고 싶을 때 % 이용해서, 결과가 '0'이 나오는(=나머지 연산자가 '0'일 경우) 연산의 경우

// 조건문
// if (조건) {
//   // 조건이 참일 때 실행될 코드
// } else {
//   // 조건이 그 밖일 때 (거짓, 참이 아닐 때)실행 될 코드
// }

let c = 1;

if (c === 1) {
  console.log('참');
} else {
  console.log('거짓');
}

// 이벤트

// // 도큐먼트가 준비가 되면 실행
// $(document).ready(function () {
document.querySelector('button').addEventListener('click', function () {
  //실행될 코드
  console.log('클릭');

  // .box를 숨기기
  $('.box').hide;
});

// 이벤트 등록
