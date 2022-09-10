console.log(document.getElementById("hh"));
const input = "luis";
const api_gender ='https://api.nationalize.io/?name=' + input;
const api_age = 'https://api.agify.io/?name=' + input;
const api_nationalize = 'https://api.genderize.io/?name=' + input;


fetch(api_gender)
  .then((response) => response.json())
  .then((data) => {

    console.log(data.country[0].country_id);

})

fetch(api_age)
  .then((response) => response.json())
  .then((data) => {

    console.log(data.age);

})


fetch(api_nationalize)
  .then((response) => response.json())
  .then((data) => {

    console.log(data.gender);

})