
// 工廠模式
interface IMessage {
    log(): void;
}


class ErrorMsg implements IMessage {
    private message: string;

    constructor(message: string) {
        this.message = message;
    }

    public log(): void {
        console.error(`[Error occurred]: ${this.message}`);
    }
}


class InfoMsg implements IMessage {
    private message: string;

    constructor(message: string) {
        this.message = message;
    }

    public log(): void {
        console.log(`[Info]: ${this.message}`);
    }
}


class LogMsg implements IMessage {
    private message: string;

    constructor(message: string) {
        this.message = message;
    }

    public log(): void {
        console.log(`[Log]: ${this.message}`);
    }
}


class WarningMsg implements IMessage {
    private message: string;

    constructor(message: string) {
        this.message = message;
    }

    public log(): void {
        console.warn(`[Warning]: ${this.message}`);
    }
}

// 定义信息工厂
export class MessageFactory {

    // 创建不同类型的信息
    public createMsg(type: string, message: string): IMessage | undefined {
        switch (type) {
            case 'error':
                return new ErrorMsg(message);
            case 'info':
                return new InfoMsg(message);
            case 'log':
                return new LogMsg(message);
            case 'warning':
                return new WarningMsg(message);
            default:
                console.error(`Unsupported message type: ${type}`);
                return undefined;
        }
    }
}

const factory = new MessageFactory();
const errorMsg = factory.createMsg('error', 'An error occurred!');
const infoMsg = factory.createMsg('info', 'This is an info message.');
const logMsg = factory.createMsg('log', 'This is a log message.');
const warningMsg = factory.createMsg('warning', 'This is a warning message.');


errorMsg?.log();
infoMsg?.log();
logMsg?.log();
warningMsg?.log();
