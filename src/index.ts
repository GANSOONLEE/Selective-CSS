import { ModuleError } from './module/customLogger/CustomError';
import * as FileIO from './module/FileIO';
import * as Timezone from './module/TimeZone';

const modules = [Error, FileIO, Timezone];

Promise.all(modules.map((modules) => import(modules)))
    .then(() => {
        console.log('所有模塊成功加載');
    })
    .catch((e) => {
        if (e instanceof ModuleError) {
            e.log();
        } else {
            console.error(`Unknown error occurred: ${e.message}`);
        }
    });