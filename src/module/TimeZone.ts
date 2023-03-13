

export class MyDateTime {
    private timeZone: string;
    private date: string;
    private time: string;
    private static instance: MyDateTime;

    private constructor() {
        const now = new Date();
        this.timeZone = "Asia/Taipei";
        this.date = now.toLocaleDateString('en-US', { timeZone: this.timeZone });
        this.time = now.toLocaleTimeString('en-US', { timeZone: this.timeZone, hour12: false });
    }

    public static getInstance(): MyDateTime {
        if (!MyDateTime.instance) {
            MyDateTime.instance = new MyDateTime();
        }

        return MyDateTime.instance;
    }

    getTimeZone(): string {
        return this.timeZone;
    }

    getDate(): string {
        const year = new Date(this.date).getFullYear();
        const month = new Date(this.date).getMonth() + 1;
        const day = new Date(this.date).getDate();

        return `${('0' + year).slice(-4)}-${('0' + month).slice(-2)}-${('0' + day).slice(-2)}`;
    }

    getTime(): string {
        const timeParts = this.time.split(':');
        const hours = ('0' + parseInt(timeParts[0]).toString()).slice(-2);
        const minutes = ('0' + parseInt(timeParts[1].split(' ')[0]).toString()).slice(-2);

        return `${hours}:${minutes}`;
    }

    public log() {
        console.log(`當前時區：${this.getTimeZone()}; 當前日期：${this.getDate()}; 當前時間：${this.getTime()}`);
    }
}

const myDateTime = MyDateTime.getInstance();
myDateTime.log();
