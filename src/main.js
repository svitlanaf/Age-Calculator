import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { SolarYearsCalculator } from './age_calculator.js';

$(function(){
    $('#formOne').submit(function(e){
        e.preventDefault();
        let date = new SolarYearsCalculator($('#date').val());
        console.log(date.earthYears());
        console.log(date.mercuryYears());
        console.log(date.venusYears());
        console.log(date.marsYears());
        console.log(date.jupiterYears());
    });
});