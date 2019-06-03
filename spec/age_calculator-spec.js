import { SolarAgeCalculator } from './../src/age_calculator.js';

describe('SolarAgeCalculator', function() {
    var reusableBirthdate;

    beforeEach(function() {
        reusableBirthdate = new SolarAgeCalculator('1999-06-02');
    });

    it('should test if user solution is not valid', function() {
        var userSudokuSolver = new Sudoku('136789214189234675427615398213597846695841732874326951958472163361958427742163589');
        expect(userSudokuSolver.sudokuChecker(this.allNums)).toEqual(false);
    });