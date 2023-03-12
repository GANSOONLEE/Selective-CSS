
export class CurrentTime {
    private date: Date;

    constructor() {
        this.date = new Date();
    }

    getTimezone(): string {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
    }

    getDate(): string {
        const year = this.date.getFullYear();
        const month = this.date.getMonth() + 1;
        const day = this.date.getDate();

        return `${year}:${month}:${day}`;
    }

    getTime(): string {
        const hours = this.date.getHours();
        const minutes = this.date.getMinutes();

        return `${hours}:${minutes}`;
    }
}

const currentTime = new CurrentTime();
console.log(currentTime.getTimezone());
console.log(currentTime.getDate());
console.log(currentTime.getTime());

export class MyDateTime {
    private timeZone: string;
    private date: string;
    private time: string;

    constructor() {
        const now = new Date();
        this.timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        // this.timeZone = "Asia/Taipei" 測試用代碼
        this.date = now.toLocaleDateString('en-US', { timeZone: this.timeZone });
        this.time = now.toLocaleTimeString('en-US', { timeZone: this.timeZone });
    }

    getTimeZone(): string {
        return this.timeZone;
    }

    getDate(): string {
        const year = new Date(this.date).getFullYear();
        const month = new Date(this.date).getMonth() + 1;
        const day = new Date(this.date).getDate();
        return `${year}:${month}:${day}`;
    }

    getTime(): string {
        const timeParts = this.time.split(':');
        const hours = parseInt(timeParts[0]);
        const minutes = parseInt(timeParts[1].split(' ')[0]);

        return `${hours}:${minutes}`;
    }
}

const myDateTime = new MyDateTime();
console.log(myDateTime.getTimeZone()); // "Asia/Taipei"
console.log(myDateTime.getDate()); // "2023:3:12"
console.log(myDateTime.getTime()); // "15:30"