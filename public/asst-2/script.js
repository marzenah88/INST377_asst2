const wesbosData = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const labData = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';

const cities = [];

fetch(labData)
  .then((blob) => blob.json())
  .then((data) => cities.push(...data));

function findMatches(wordsToMatch, cities) {
  return cities.filter((place) => {
    const regex = new RegExp(wordsToMatch, 'gi');
    if (wordsToMatch === '') {
      return null;
    }
    return place.name.match(regex)
    || place.state.match(regex)
    || place.city.match(regex)
    || place.inspection_results.match(regex);
  });
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray.map((place) => {
    const regex = new RegExp(this.value, 'gi');
    const placeName = place.name.replace(regex, `<span class="highlightme">${this.value}</span>`);
    const cityName = place.city.replace(regex, `<span class="highlightme">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="highlightme">${this.value}</span>`);
    const inspectRes = place.inspection_results.replace(regex, `<span class="highlightme">${this.value}</span>`);
    return `
            <li>
                <span class="name">${placeName}</span>           
                <span class="location">${cityName}, ${stateName}</span>
                <span class="inspection">${place.inspection_results}</span>
            </li>
        `;
  }).join('');
  suggestions.innerHTML = html;
}
//end of script



/**
/* This is just me trying to follow along with wesbos, sorry if I forgot to take it out before pushing -chris
/* const wesbos_data = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const lab_data = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';

const cities = [];

fetch(wesbos_data)
    .then(blob => blob.json())
    .then(data => cities.push(...data))
    ;

function findMatches(wordsToMatch, cities) {
    return cities.filter(place => {
        const regex = new RegExp(wordsToMatch, 'gi');
        if (wordsToMatch === "") {
            return null
        } else {
            return place.city.match(regex) || place.state.match(regex);
        }
    })
}

function displayMatches() {
    const matchArray = findMatches(this.value, cities);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="highlightme">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="highlightme">${this.value}</span>`);
        return `
            <li>
                <span class="name">${cityName}, ${stateName}</span>
                <span class="population">${place.population}</span>
            </li>
        `;
    }).join('');
    suggestions.innerHTML = html;
}

/* wesbos' input had a class of 'search' but ours is textinput
const searchInput = document.querySelector('.textinput');
const suggestions = document.querySelector('.suggestions');
searchInput.addEventListener('input', displayMatches);






/*
const { default: fetch } = require("node-fetch");

function narrowDataScope (data) {
    const objectList = data.map(restaurant => ${data.name} ${data.address_line1} ${data.city} ${data.state} ${data.zip});
    console.log(objectList)
    return objectList;
} 
  
  
function getResults(jsonFromServer) {
    console.log('jsonFromServer', jsonFromServer);
    
   /* const narrowData = narrowDataScope(jsonFromServer);
    const matchedResults = matchText(input_text, narrowData);
    const options = makeYourOptionsObject(reorganizedData);
    const chart = new CanvasJS.Chart('chartContainer', options);
    chart.render();

    function matchText(input_text, restaurants) {
    return restaurants.filter(venue => {
        const regex = new RegExp(wordToMatch, 'gi');
        return venue.
    })
    */


  
/*document.body.addEventListener('submit', async (e) => {
    e.preventDefault(); 
    const form = $(e.target).serializeArray();
    fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })
      .then((fromServer) => fromServer.json())
      .then((jsonFromServer) => getResults(jsonFromServer))   
    console.log(err);
});

  */

