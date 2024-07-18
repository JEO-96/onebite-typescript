export {};

// number
const num1: number = 123;
const num2: number = -123;
const num3: number = 0.123;
const num4: number = -0.123;
const num5: number = Infinity;
const num6: number = -Infinity;
const num7: number = NaN;

// string
const str1: string = "hello";
const str2: string = 'hello';
const str3: string = `hello`;
const str4: string = `hello ${num1}`

// boolean
const bool1: boolean = true;
const bool2: boolean = false;

// null
const null1: null = null;

// undefined
const unde1: undefined = undefined;

// 리터럴 타입
const numA = 10 as const;

const strA = "hello" as const;

const boolA = true as const;