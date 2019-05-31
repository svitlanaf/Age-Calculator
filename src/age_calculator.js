export class SolarYears {
    constructor(birthdate) {
        this.date = new Date(birthdate);
    }

    earthYears() {
        let date = this.date;
        let earthYears = date.getFullYear();
        return earthYears;
    }

    mercuryYears() {
        let earthYears = this.earthYears;
        let mercuryYears = earthYears*0.24
        return mercuryYears;
    }

    venusYears() {
        let earthYears = this.earthYears;
        return earthYears*0.62;
    }

    marsYears() {
        let earthYears = this.earthYears;
        return earthYears*1.88;
    }

    jupiterYears() {
        let earthYears = this.earthYears;
        return earthYears*11.86;
    }
}