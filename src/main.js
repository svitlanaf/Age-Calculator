import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { SolarAgeCalculator } from './age_calculator.js';

$(function(){
    $('#formOne').submit(function(e){
        e.preventDefault();
        let calculator = new SolarAgeCalculator($('#date').val());
        let gender = $("input:radio[name=gender]:checked").val();
        let continent = $("input:radio[name=continent]:checked").val();
        let planet = $("input:radio[name=planet]:checked").val();
        console.log(calculator.lifeExpectancy(gender, continent, planet));
    });
});