class DataTime {
    constructor() {
        this.months = [ "Jan.", "Feb.", "Mar.", "Apr.", "May", "June", "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];
        this.days = [ "Sun.", "Mon.", "Tues.", "Wed.", "Thurs.", "Fri.", "Sat."]
    }

    getDays(n) {
        return this.days.splice(0, 6)
    }

    get fiveYears() {
        return this
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
        return this
    }

    get oneMonth() {
        return this
    }

    get oneWeek() {
        return this
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

export default DataTime