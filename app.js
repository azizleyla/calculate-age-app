const DayError = document.querySelector('.day-error');
const MonthError = document.querySelector('.month-error');
const YearError = document.querySelector('.year-error');
const YearResult = document.querySelector('.year-result');
const MonthResult = document.querySelector('.month-result');
const DayResult = document.querySelector('.day-result');
const SubmitBtn = document.querySelector('.btn');
const InputDay = document.getElementById('day');
const InputMonth = document.getElementById('month');
const InputYear = document.getElementById('year');
const Canvas = document.querySelector('.can');


SubmitBtn.addEventListener('click',function(e){
    e.preventDefault();

    let day = CheckDay();
    let month = CheckMonth();
    let year = CheckYear();
    if(!day || !month || !year) return

    let  birthday = `${InputMonth.value}/${InputDay.value}/${InputYear.value}`
    calculateAge(birthday)
})



function CheckDay()
{
    let value = InputDay.value;
    if(value == '')
    {
        DayError.innerHTML = 'This field is required';
        return false;
    }
    else if(value < 1 || value > 31)
    {
        DayError.innerHTML = 'Must be a valid day';
        return false;
    }
    else
    {
        DayError.innerHTML = '';
        return true;
    }
}



function CheckMonth()
{
    let value = InputMonth.value;
    if(value == '')
    {
       MonthError.innerHTML = 'This field is required';
        return false;
    }
    else if(value < 1 || value > 12)
    {
        MonthError.innerHTML = 'Must be a valid month';
        return false;
    }
    else
    {
        MonthError.innerHTML = '';
        return true;
    }
}


function CheckYear() {
    let value = InputYear.value;
    let currentYear = new Date().getFullYear();
    console.log(currentYear);
    if (value == '') {
        YearError.innerHTML = 'This field is required';
        return false;
    }
    else if (value > currentYear) {
        YearError.innerHTML = 'Must be in the past';
        return false;
    }
    else {
        YearError.innerHTML = '';
        return true;
    }
}




function calculateAge(birthday){

    var birthdate = new Date(birthday)
    var today = new Date();
    var years = today.getFullYear() - birthdate.getFullYear()
    var months = today.getMonth() - birthdate.getMonth();
    var days = today.getDate() - birthdate.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        if (months === 0) {
          months = 11;
        } else {
          months = 12 + months;
        }
        days = 30 + days;
      }

    YearResult.innerHTML = years;
    MonthResult.innerHTML = months;
    DayResult.innerHTML = days;
}