

export class CurrentTime {
    private date: Date;

    constructor() {
        this.date = new Date();
    }

    getTimezone(): string {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
    }

    getDate(): string {
        const year = ('0' + this.date.getFullYear().toString()).slice(-4);
        const month = ('0' + (this.date.getMonth() + 1).toString()).slice(-2);
        const day = ('0' + this.date.getDate().toString()).slice(-2);

        return `${year}-${month}-${day}`;
    }

    getTime(): string {
        const hours = ('0' + this.date.getHours().toString()).slice(-2);
        const minutes = ('0' + this.date.getMinutes().toString()).slice(-2);

        return `${hours}:${minutes}`;
    }
}

const currentTime = new CurrentTime();
console.log("時區：" + currentTime.getTimezone() + "; UTC日期：" + currentTime.getDate() + "; UTC時間："  + currentTime.getTime());

export class MyDateTime {
    private timeZone: string;
    private date: string;
    private time: string;

    constructor() {
        const now = new Date();
        // this.timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        this.timeZone = "Asia/Taipei"
        this.date = now.toLocaleDateString('en-US', { timeZone: this.timeZone});
        this.time = now.toLocaleTimeString('en-US', { timeZone: this.timeZone, hour12: false});
    }

    getTimeZone(): string {
        return this.timeZone;
    }

    getDate(): string {
        const year = new Date(this.date).getFullYear();
        const month = new Date(this.date).getMonth() + 1;
        const day = new Date(this.date).getDate();

        return `${('0'+year).slice(-4)}-${('0'+month).slice(-2)}-${('0'+day).slice(-2)}`;
    }

    getTime(): string {
        const timeParts = this.time.split(':');
        const hours = ('0' + parseInt(timeParts[0]).toString()).slice(-2);
        const minutes = ('0' + parseInt(timeParts[1].split(' ')[0]).toString()).slice(-2);
        // const hours = ('0' + this.date.getHours()).slice(-2);
        // const minutes = ('0' + this.date.getMinutes()).slice(-2);

        return `${hours}:${minutes}`;
    }

    public log(){
        const myDateTime = new MyDateTime();
        console.log("當前時區：" + myDateTime.getTimeZone() + "; 當前日期：" + myDateTime.getDate() + "; 當前時間：" + myDateTime.getTime()); // "Asia/Taipei"
    }
}



