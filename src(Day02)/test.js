// 1. spread 연산자
// 1) 문자열
const spreadArr = [..."coffee"];

// 2) rest
const fruits = ["apple", "orange", "kiwi", "grape"];
const [first, second] = fruits; // apple, orange
// const [a, ...b] = fruits;


// 1. 오브젝트
const person = { name: "차은우", age: 28, agency:"판타지오" };

const { name, ...other} = person; // name: 차은우 other: { age: 20, agency: "판타지오"}

const son = { name: "손흥민", position: "윙"};
const tottham = { club: "토트넘" , number: 7} ;
const korea = { nation: "대한민국", number: 10};

const a0 = { son, tottham } // { { name: "손흥민", position: "윙"}, { club: "토트넘" , number: 7} }
const a1 = { ...son, ...tottham } // { name: "손흥민", position: "윙",  club: "토트넘" , number: 7 }
const a2 = { ...son, ...korea} //{ name: "손흥민", position: "윙", nation: "대한민국", number: 10 }



const coffeeName = "아메리카노";
const coffeeShots = 2;

// k값과 v값이 같으면 한 단어 가능
const coffee1 = {
    coffeeName,
    coffeeShots
};