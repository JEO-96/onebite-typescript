import { register } from 'ts-node';
import { pathToFileURL } from 'url';

register({
    project: './tsconfig.json',
    transpileOnly: true,
});

const fileUrl = pathToFileURL('./src/index.ts').href;
import(fileUrl);
