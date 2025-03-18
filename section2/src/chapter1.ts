// [numer, string, boolean, null, undefined, StricNullCehcks 옵션, 리터럴 타입]

// 📌 number
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = -Infinity;
let num6: number = Infinity;
let num7: number = NaN;

// num1.toUpperCase();
num1.toFixed();

// 📌 string
let str1: string = "hello";
let str3: string = `hello`;
let str2: string = "hello";
let str4: string = `hello ${num1}`;

// str1.toFixed();
str1.toUpperCase();

// 📌 boolean
let bool1: boolean = true;
let boo2: boolean = false;

// 📌 null
let null1: null = null;
// null1 = 1;

//📌  undefined
let unde1: undefined = undefined;

/*
* 🤔 지금당장 값이 필요하지않아 임시로 null로 넣을려고하면?
     -> tsconfig.json 에 StricNullCehcks 옵션를 false로 설정!
*/
// let numA: number = null;

// 📌 리터럴 타입 : 값자체가 타입이되는 타입
//    리터럴 -> 값
let numA: 10 = 10;
// numA = 12; [error]

let strA: "hello" = "hello";
let boolA: true = true;
