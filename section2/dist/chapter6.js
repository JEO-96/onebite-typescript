// any
// 특정 변수의 타입을 우리가 확실히 모를 때
/* eslint-disable @typescript-eslint/no-explicit-any */
let anyVar = 10;
anyVar = "hello";
anyVar = true;
anyVar = {};
anyVar = () => { };
anyVar.toUpperCase();
anyVar.toFixed();
let num = 10;
num = anyVar;
export {};
/* eslint-enable @typescript-eslint/no-explicit-any */
