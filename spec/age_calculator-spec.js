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
})