export class SolarYearsCalculator {
    constructor(birthdate) {
        this.birthdate = new Date(birthdate);
        this.years = this.earthYears();

    }

    earthYears() {
        let currentDate = new Date().getFullYear();
        let birthdate = this.birthdate.getFullYear();
        let earthYears = currentDate - birthdate;
        return earthYears;
    }

    mercuryYears() {
        let years = this.years;
        let mercuryYears = Math.floor(years/0.24);
        return mercuryYears;
    }

    venusYears() {
        let years = this.years;
        let venusYears = Math.floor(years/0.62);
        return venusYears;
    }

    marsYears() {
        let years = this.years;
        let marsYears = Math.floor(years/1.88);
        return marsYears;
    }

    jupiterYears() {
        let years = this.years;
        let jupiterYears = Math.floor(years/11.86);
        return jupiterYears;
    }
}