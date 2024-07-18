export {}; // 모듈로 인식되도록 추가

// any
// 특정 변수의 타입을 우리가 확실히 모를 때

/* eslint-disable @typescript-eslint/no-explicit-any */
let anyVar: any = 10;
anyVar = "hello";
anyVar = true;
anyVar = {};
anyVar = () => {};

anyVar.toUpperCase();
anyVar.toFixed();

let num: number = 10;
num = anyVar;
/* eslint-enable @typescript-eslint/no-explicit-any */

// unknown
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () =>{};
