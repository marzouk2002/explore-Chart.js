class DateTime {
    constructor() {
        this.months = [ "Jan.", "Feb.", "Mar.", "Apr.", "May", "June", "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];
        this.days = [ "Sun.", "Mon.", "Tues.", "Wed.", "Thurs.", "Fri.", "Sat."]
    }

    get fiveYears() {
        const halfYearLen = 1000 * 3600 * 4380
        let Arr = []

        for(let i = 0; i < 11; i++) {
            const d = new Date(Date.now() - (i * halfYearLen))
            Arr.unshift(`${this.months[d.getMonth()]} - ${d.getFullYear()}`)
        }

        return(Arr)
    }

    get oneYear() {
        const d = new Date();
        const currentYear = d.getFullYear();
        const currentMonth = d.getMonth() + 1;

        let Arr = this.months.slice(0, currentMonth).map(month => month + " - " + currentYear)
        if(Arr.length < 12) {
            const lastArr = this.months.slice(currentMonth).map(month => month + " - " + (currentYear - 1))
            Arr = [ ...lastArr, ...Arr]
        }

        return Arr
    }

    get sixMonths() {
        const halfMonthLen = 1000 * 3600 * 24 * 15
        let Arr = []

        for(let i = 0; i <= 12; i++) {
            const d = new Date(Date.now() - (i * halfMonthLen))
            Arr.unshift(`${d.getDate()} / ${d.getMonth() + 1} / ${d.getFullYear().toString().slice(-2)}`)
        }

        return(Arr)
    }

    get oneMonth() {
        const fiveDaysGap = 1000 * 3600 * 24 * 5
        let Arr = []

        for(let i = 0; i <= 6; i++) {
            const d = new Date(Date.now() - (i * fiveDaysGap))
            Arr.unshift(`${this.months[d.getMonth()]} ${d.getDate()}`)
        }

        return(Arr)
    }

    get oneWeek() {
        const oneDayGap = 1000 * 3600 * 24
        let Arr = []

        for(let i = 0; i < 7; i++) {
            const d = new Date(Date.now() - (i * oneDayGap))
            Arr.unshift(`${this.days[d.getDay()]} ${d.getDate()}`)
        }

        return(Arr)
    }

    get oneDay() {
        const twoHoursGap = 1000 * 3600 * 2
        let Arr = []

        for(let i = 0; i <= 12; i++) {
            const d = new Date(Date.now() - (i * twoHoursGap))
            const curMinute = d.getMinutes()
            const curHour = d.getHours()
            Arr.unshift(`${this.days[d.getDay()]} - ${curHour < 10 ? '0'+curHour : curHour}:${curMinute < 10 ? '0'+curMinute : curMinute}`)
        }

        return(Arr)
    }

    get fourHours() {
        const halfHourGap = 1000 * 1800
        let Arr = []

        for(let i = 0; i <= 8; i++) {
            const d = new Date(Date.now() - (i * halfHourGap))
            const curMinute = d.getMinutes()
            const curHour = d.getHours()
            Arr.unshift(`${this.days[d.getDay()]} - ${curHour < 10 ? '0'+curHour : curHour}:${curMinute < 10 ? '0'+curMinute : curMinute}`)
        }

        return(Arr)
    }

    get oneHour() {
        const fiveMinutesGap = 1000 * 60 * 5
        let Arr = []

        for(let i = 0; i <= 12; i++) {
            const d = new Date(Date.now() - (i * fiveMinutesGap))
            const curMinute = d.getMinutes()
            const curHour = d.getHours()
            Arr.unshift(`${curHour < 10 ? '0'+curHour : curHour}:${curMinute < 10 ? '0'+curMinute : curMinute}`)
        }

        return(Arr)
    }

    get halfHour() {
        const fiveMinutesGap = 1000 * 60 * 2.5
        let Arr = []

        for(let i = 0; i <= 12; i++) {
            const d = new Date(Date.now() - (i * fiveMinutesGap))
            const curHour = d.getHours()
            const curMinute = d.getMinutes()
            const curSecond = d.getSeconds()
            Arr.unshift(`${curHour < 10 ? '0'+curHour : curHour}:${curMinute < 10 ? '0'+curMinute : curMinute}:${curSecond < 10 ? '0'+curSecond : curSecond}`)
        }

        return(Arr)
    }

    get  liveScale() {
        return this
    }
}

export default DateTime