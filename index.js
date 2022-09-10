const results_button = document.getElementById("button");

results_button.addEventListener("click", get_results);

function get_results() {
  const input = document.getElementById("name");
  const name = input.value;
  const api_gender ='https://api.nationalize.io/?name=' + name;
  const api_age = 'https://api.agify.io/?name=' + name;
  const api_nationalize = 'https://api.genderize.io/?name=' + name;

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
}

