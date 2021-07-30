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
            Arr.unshift(`${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear().toString().slice(-2)}`)
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
        return this
    }

    get fourHours() {
        return this
    }

    get oneHour() {
        return this
    }

    get halfHour() {
        return this
    }

    get  liveScale() {
        return this
    }
}

const test = new DateTime()

console.log(test.sixMonths)

// export default DateTime