export {};

// 타입 별칭

type User = {
    id : number;
    name : string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
};

const user: User = {
    id : 1,
    name : "이정환",
    nickname : "winterlood",
    birth: "1997.01.07",
    bio: "안녕하세요",
    location: "부천시",
};

const user2: User = {
    id : 2,
    name : "홍길동",
    nickname : "winterlood",
    birth: "1997.01.07",
    bio: "안녕하세요",
    location: "부천시",
};

// 인덱스 시그니처
type ContryCodes = {
    [key : string]: string;
};

const contryCodes: ContryCodes = {
    Korea : 'ko',
    UnitedState : 'us',
    UnitedKingdom : 'uk',
};

type ContryNumberCodes = {
    [key: string]: number;
    Korea: number;
}

const contryNumberAndStringCodes: ContryNumberCodes = {
    Korea : 410,
}