// Global Variable 

const countriesList = document.getElementById("countries");
let countries;

fetch("https://restcountries.eu/rest/v2/all")
.then(res => res.json())
.then(data => initialize(data))
.catch(err => console.log("Error:", err));

function initialize(countriesData) {
  countries = countriesData;
let options = "";

countries.forEach(country => options+=`<option value="${country.alpha3Code}">${country.name}</option>`);
countriesList.innerHTML = options;
  displayCountryInfo("AFG");
}

function displayCountryInfo(countryByAlpha3Code) {
  const countryData = countries.find(country => country.alpha3Code === countryByAlpha3Code);
  document.getElementById("capital-city").innerHTML = countryData.capital;
}

