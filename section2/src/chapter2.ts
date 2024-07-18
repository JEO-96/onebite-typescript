export {};

// 배열
const numArr: number[] = [1, 2, 3];

const strArr: string[] = ["hello", "im", "winterlood"];

const boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우
const multiArr: (string | number)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
const doubleArr: number[][] = [
    [1, 2, 3],
    [4, 5],
];

// 튜플
// 길이와 타입이 고정된 배열
const tup1:[number, number] = [1, 2];

const tup2: [number, string, boolean] = [1, "2", true];

const users: [string, number][] = [
    ["이정환", 1],
    ["이아무개", 2],
    ["김아무개", 3],
    ["박아무개", 4],
    // [5, "최아무개"],
];