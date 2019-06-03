export class SolarAgeCalculator {
    constructor(birthdate) {
        this.birthdate = new Date(birthdate);
    }

    calculatedAge(planet) {
        let currentDate = new Date().getFullYear();
        let birthdate = this.birthdate.getFullYear();
        let planetFactor;
        if (planet == "Earth") {
            planetFactor = 1;
        } else if (planet == "Mercury") {
            planetFactor = 0.24;
        } else if (planet == "Venus") {
            planetFactor = 0.62;
        } else if (planet == "Mars") {
            planetFactor = 1.88;
        } else if (planet == "Jupiter") {
            planetFactor = 11.86;
        }

        let calculatedAge = (currentDate - birthdate)/planetFactor;
        return Math.floor(calculatedAge);
    }


    lifeExpectancy(gender, continent, planet) {
        const averageLifeExp = 71.5;
        let genderFactor;
        if (gender == "Male") {
            genderFactor = 0.96;
        } else if (gender == "Female") {
            genderFactor = 1.015;
        }

        let continentFactor;
        if (continent == "Australia" || continent == "NA") {
            continentFactor = 1.18;
        } else if (continent == "Asia" || continent == "SA") {
            continentFactor = 1.09;
        } else if (continent == "Europe") {
            continentFactor = 1.05;
        } else if (continent == "Africa") {
            continentFactor = 0.93;
        }
        
        let lifeExpectancy = averageLifeExp*genderFactor;
        if (planet == "Earth") {
            lifeExpectancy = lifeExpectancy*continentFactor;
        } else if (planet == "Mercury") {
            lifeExpectancy = lifeExpectancy/0.24;
        } else if (planet == "Venus") {
            lifeExpectancy = lifeExpectancy/0.62;
        } else if (planet == "Mars") {
            lifeExpectancy = lifeExpectancy/1.88;
        } else if (planet == "Jupiter") {
            lifeExpectancy = lifeExpectancy/11.86;
        }

        return Math.floor(lifeExpectancy)
    }
}