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
        let calculatedAge = calculator.calculatedAge(planet);
        let lifeExpectancy = calculator.lifeExpectancy(gender, continent, planet);

        if ($("input:radio[name='gender']:checked").length == 0 || $("input:radio[name='planet']:checked").length == 0 || $("input:radio[name='continent']:checked").length == 0) {
            alert('Please select an option');
          } else {
            if (calculatedAge <= lifeExpectancy) {
                $('#answer-panel').prepend(
                '<div id="answer-panel-' + '"class="panel panel-default">' + "Your age on " + planet + " is " + calculatedAge + ". You have " + (lifeExpectancy-calculatedAge) + " more years to live. Make sure you enjoy your life!" + '</div></div>'
                );
            } else {
                $('#answer-panel').prepend(
                '<div id="answer-panel-' + '"class="panel panel-default">' + "Your age on " + planet + " is " + calculatedAge +  ". Unbelievable! You live " + (calculatedAge - lifeExpectancy) + " years longer than your estimated life expectancy!" + '</div></div>'
                );
            } 
        $('input[type=checkbox]').prop('checked', false);
        }
    });
});