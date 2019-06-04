import { SolarAgeCalculator } from './../src/age_calculator.js';

describe('SolarAgeCalculator', function() {
    var reusableBirthdate;

    beforeEach(function() {
        reusableBirthdate = new Date('05/14/2001');
    });

    it('should return the correct user age on Earth', function() {
        let calculator = new SolarAgeCalculator(reusableBirthdate);
        let planet = "Earth";
        expect(calculator.calculatedAge(planet)).toEqual(18);
    });
    it('should return the correct user age on Mercury', function() {
        let calculator = new SolarAgeCalculator(reusableBirthdate);
        let planet = "Mercury";
        expect(calculator.calculatedAge(planet)).toEqual(75);
    });
    it('should return the correct user age on Venus', function() {
        let calculator = new SolarAgeCalculator(reusableBirthdate);
        let planet = "Venus";
        expect(calculator.calculatedAge(planet)).toEqual(29);
    });
    it('should return the correct user age on Mars', function() {
        let calculator = new SolarAgeCalculator(reusableBirthdate);
        let planet = "Mars";
        expect(calculator.calculatedAge(planet)).toEqual(9);
    });
    it('should return the correct user age on Jupiter', function() {
        let calculator = new SolarAgeCalculator(reusableBirthdate);
        let planet = "Jupiter";
        expect(calculator.calculatedAge(planet)).toEqual(1);
    });
    it('should return the correct user age and life expectancy on a selected planet', function() {
        let calculator = new SolarAgeCalculator(reusableBirthdate);
        let planet = "Earth";
        let gender = "Male";
        let continent = "Asia";
        expect(calculator.calculatedAge(planet)).toEqual(18);
        expect(calculator.lifeExpectancy(gender, continent, planet)).toEqual(74);
    });
    it('should return the correct user age and the correct user life expectancy on a planet that does not have continents', function() {
        let calculator = new SolarAgeCalculator(reusableBirthdate);
        let planet = "Mercury";
        let gender = "Female";
        let continent = "Asia";
        expect(calculator.calculatedAge(planet)).toEqual(75);
        expect(calculator.lifeExpectancy(gender, continent, planet)).toEqual(302);
    });
    it('should return the correct user age and determine how many years a user has left to live on the selected planet', function() {
        let calculator = new SolarAgeCalculator(reusableBirthdate);
        let planet = "Venus";
        let gender = "Female";
        let continent = "Asia";
        let calculatedAge = calculator.calculatedAge(planet);
        let lifeExpectancy = calculator.lifeExpectancy(gender, continent, planet);
        expect(calculator.calculatedAge(planet)).toEqual(29);
        expect(lifeExpectancy - calculatedAge).toEqual(88);
    });
    it('should return the correct user age and and the number of years the user have lived past the life expectancy', function() {
        let newBirthdate = new Date('05/14/1920');
        let calculator = new SolarAgeCalculator(newBirthdate);
        let planet = "Earth";
        let gender = "Male";
        let continent = "Europe";
        let calculatedAge = calculator.calculatedAge(planet);
        let lifeExpectancy = calculator.lifeExpectancy(gender, continent, planet);
        expect(calculator.calculatedAge(planet)).toEqual(99);
        expect(calculatedAge - lifeExpectancy).toEqual(27);
    });

})