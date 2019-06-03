import { SolarAgeCalculator } from './../src/age_calculator.js';

describe('SolarAgeCalculator', function() {
    var reusableBirthdate;

    beforeEach(function() {
        reusableBirthdate = new SolarAgeCalculator('05/14/2001');
    });

    it('should return the correct user age on Earth' , function() {
        var ageOnEarth = SolarAgeCalculator.calculateAge("Earth");
        let expected = 18;
        expect(ageOnEarth).toEqual(expected);
    });
})