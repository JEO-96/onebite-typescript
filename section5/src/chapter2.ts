/**
 * 선언 합침
 */

interface Person {
    name: string;
}

interface Person {
    age: number;
}

const person: Person = {
    name: "",
    age: 27,
}

interface Developer extends Person {
    name: "hello";
}

const person: Person = {
    name: "",
    age: 27,
};

/**
 * 모듈 보강
 */

interface Lib {
    a: number;
    b: number;

}

interface Lib {
    c: "hello";
}

const lib = {
    a: 1,
    b: 2,
}