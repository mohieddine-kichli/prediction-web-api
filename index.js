let img = document.createElement("img");
const results_button = document.getElementById("button");
results_button.addEventListener("click", get_results);

function get_results() {
  const input = document.getElementById("name");
  const name = input.value;
  const api_gender = 'https://api.genderize.io/?name=' + name;
  const api_age = 'https://api.agify.io/?name=' + name;
  const api_nationalize = 'https://api.nationalize.io/?name=' + name;
  const gender_container = document.getElementById("gender");
  const age_container = document.getElementById("age");;
  const nationality_container = document.getElementById("nationality") 

  fetch(api_gender)
    .then((response) => response.json())
    .then((data) => {

      gender_container.innerHTML = data.gender;
      
  })

  fetch(api_age)
    .then((response) => response.json())
    .then((data) => {

      age_container.innerHTML = data.age;

  })

  fetch(api_nationalize)
    .then((response) => response.json())
    .then((data) => {

      console.log(data.country);

      if (data.country.length == 0) {
        nationality_container.innerHTML ="N/A";
      } else if (data.country.length == 1) {
        nationality_container.innerHTML = data.country[0].country_id;
      } else {
        nationality_container.innerHTML = data.country[0].country_id +" or "+ data.country[1].country_id;
      }

  })
}

fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {

      img.src = data.message;
      document.body.appendChild(img)
    
});
