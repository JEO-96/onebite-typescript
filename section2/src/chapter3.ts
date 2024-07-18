export {};

// object
const user: {
    id?: number;
    name: string;
} = {
    id: 1,
    name: "이정환",
};

const config : {
    readonly apiKey: string;
} = {
    apiKey : "My API KEY"
}

// config.apiKey = "hacked";